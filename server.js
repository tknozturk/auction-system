const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// In-memory database (for demo)
let settings = {
    id: 'default',
    activationTime: new Date(Date.now() + 60000).toISOString(), // 1 minute from now
    auctionTitle: 'Ürün Başlığı',
    startPrice: 500000,
    productDescription: 'Ürün hakkında detaylı bilgi'
};

let users = [];
let auctions = [];
let bids = [];
let purchases = [];

// Utility functions
function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

// ==================== SETTINGS API ====================

// Get settings
app.get('/api/settings', (req, res) => {
    res.json(settings);
});

// Update settings
app.post('/api/settings', (req, res) => {
    const { activationTime, auctionTitle, startPrice, productDescription } = req.body;
    
    settings = {
        ...settings,
        activationTime,
        auctionTitle,
        startPrice,
        productDescription
    };

    // Create auction if not exists
    if (auctions.length === 0) {
        auctions.push({
            id: 'default',
            title: auctionTitle,
            startPrice: startPrice,
            description: productDescription,
            activationTime: activationTime,
            status: 'waiting',
            bidsCount: 0,
            createdAt: new Date().toISOString(),
            winner: null,
            winnerName: null
        });
    } else {
        // Yeni ihale başlatıldığında eski kazananı sıfırla
        auctions[0] = {
            ...auctions[0],
            title: auctionTitle,
            startPrice: startPrice,
            description: productDescription,
            activationTime: activationTime,
            status: 'waiting',
            winner: null,
            winnerName: null
        };
    }

    res.json({ success: true, message: 'Ayarlar kaydedildi.', settings });
});

// ==================== USERS API ====================

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Add user
app.post('/api/users', (req, res) => {
    const { username, email, phone, password, status, registeredAt } = req.body;

    if (!username || !email || !phone || !password) {
        return res.status(400).json({ error: 'Eksik alan' });
    }

    const newUser = {
        id: generateId(),
        username,
        email,
        phone,
        password, // Basit demo için şifre direkt kaydediliyor
        status: status || 'active',
        registeredAt: registeredAt || new Date().toISOString()
    };

    users.push(newUser);
    res.json(newUser);
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(u => u.id !== id);
    res.json({ success: true, message: 'Kullanıcı silindi.' });
});

// Get user by email (for login)
app.get('/api/users/email/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }
    res.json(user);
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Kullanıcı adı ve şifre gerekli' });
    }

    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
    }

    if (user.password !== password) {
        return res.status(401).json({ error: 'Şifre yanlış' });
    }

    if (user.status !== 'active') {
        return res.status(403).json({ error: 'Kullanıcı inaktif' });
    }

    // Token oluştur (basit format)
    const token = 'token_' + user.id + '_' + Date.now();

    res.json({
        success: true,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone
        },
        token
    });
});

// ==================== AUCTIONS API ====================

// Get all auctions
app.get('/api/auctions', (req, res) => {
    const now = new Date();
    auctions.forEach(auction => {
        if (new Date(auction.activationTime) <= now && auction.status === 'waiting') {
            auction.status = 'active';
        }
    });
    res.json(auctions);
});

// Get auction by ID
app.get('/api/auctions/:id', (req, res) => {
    const auction = auctions.find(a => a.id === req.params.id);
    if (!auction) {
        return res.status(404).json({ error: 'İhale bulunamadı' });
    }
    res.json(auction);
});

// ==================== BIDS API ====================

// Get all bids
app.get('/api/bids', (req, res) => {
    res.json(bids);
});

// Get bids for auction
app.get('/api/bids/auction/:auctionId', (req, res) => {
    const auctionBids = bids.filter(b => b.auctionId === req.params.auctionId);
    res.json(auctionBids);
});

// Place bid
app.post('/api/bids', (req, res) => {
    const { userId, auctionId, bidAmount } = req.body;

    if (!userId || !auctionId || !bidAmount) {
        return res.status(400).json({ error: 'Eksik alan' });
    }

    const newBid = {
        id: generateId(),
        userId,
        auctionId,
        bidAmount,
        bidTime: new Date().toISOString()
    };

    bids.push(newBid);

    // Update auction bids count
    const auction = auctions.find(a => a.id === auctionId);
    if (auction) {
        auction.bidsCount = (auction.bidsCount || 0) + 1;
    }

    res.json(newBid);
});

// ==================== PURCHASE API ====================

// Create purchase
app.post('/api/purchase', (req, res) => {
    const { userId, auctionId, purchasePrice, purchaseTime } = req.body;

    if (!userId || !auctionId || !purchasePrice) {
        return res.status(400).json({ error: 'Eksik alan' });
    }

    // Find auction
    const auction = auctions.find(a => a.id === auctionId);
    if (!auction) {
        return res.status(404).json({ error: 'İhale bulunamadı' });
    }

    // Find user
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }

    const referenceNumber = 'TRX-' + Date.now();
    let purchaseStatus = 'pending';
    let purchaseOutcome = 'won'; // 'won' veya 'canceled'

    // Check if auction already has a winner
    if (auction.winner) {
        // Bu kullanıcı kazanamadı, başkası kazanmış
        purchaseStatus = 'canceled';
        purchaseOutcome = 'canceled';
    } else {
        // Bu ilk satın alma, bu kullanıcı kazanır
        auction.winner = userId;
        auction.winnerName = user.username;
        auction.status = 'sold';
        purchaseOutcome = 'won';
    }

    const purchase = {
        id: generateId(),
        referenceNumber,
        userId,
        auctionId,
        purchasePrice,
        purchaseTime: purchaseTime || new Date().toISOString(),
        status: purchaseStatus,
        outcome: purchaseOutcome // 'won' veya 'canceled'
    };

    purchases.push(purchase);

    res.json({
        success: true,
        purchase,
        referenceNumber,
        outcome: purchaseOutcome,
        winnerName: auction.winnerName
    });
});

// Get all purchases
app.get('/api/purchases', (req, res) => {
    res.json(purchases);
});

// Get user purchases
app.get('/api/purchases/user/:userId', (req, res) => {
    const userPurchases = purchases.filter(p => p.userId === req.params.userId);
    res.json(userPurchases);
});

// ==================== STATISTICS API ====================

// Get statistics
app.get('/api/stats', (req, res) => {
    const today = new Date().toDateString();
    const todayUsers = users.filter(u => new Date(u.registeredAt).toDateString() === today).length;
    
    const allBids = bids.map(b => b.bidAmount);
    const avgBid = allBids.length > 0 ? allBids.reduce((a, b) => a + b, 0) / allBids.length : 0;
    const maxBid = allBids.length > 0 ? Math.max(...allBids) : 0;
    const completedAuctions = auctions.filter(a => a.status === 'sold').length;

    res.json({
        totalUsers: users.length,
        totalAuctions: auctions.length,
        totalBids: bids.length,
        todayUsers,
        avgBid: avgBid.toFixed(2),
        maxBid,
        completedAuctions,
        purchases: purchases.length
    });
});

// ==================== HEALTH CHECK ====================

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// ==================== INITIALIZE DEFAULT DATA ====================

// Create default auction on startup
if (auctions.length === 0) {
    auctions.push({
        id: 'default',
        title: 'Örnek Araç - 2023 Model',
        startPrice: 500000,
        description: 'Türkiye\'de kullanılmış, bütün bakımları yapılmış araç. Sürüş sınırı 150.000 km.',
        activationTime: new Date(Date.now() + 120000).toISOString(), // 2 minutes from now
        status: 'waiting',
        bidsCount: 0,
        winner: null,
        winnerName: null,
        createdAt: new Date().toISOString()
    });
}

// ==================== ERROR HANDLING ====================

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Sunucu hatası', details: err.message });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
    console.log(`\n🚀 İhale Sistemi API Sunucusu Çalışıyor`);
    console.log(`📍 Port: ${PORT}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log(`\n📋 API Endpoints:`);
    console.log(`  GET  /api/settings        - Ayarları al`);
    console.log(`  POST /api/settings        - Ayarları kaydet`);
    console.log(`  GET  /api/users           - Tüm kullanıcıları al`);
    console.log(`  POST /api/users           - Yeni kullanıcı ekle`);
    console.log(`  GET  /api/auctions        - Tüm ihaleleri al`);
    console.log(`  POST /api/bids            - Teklif yap`);
    console.log(`  POST /api/purchase        - Satın al`);
    console.log(`  GET  /api/stats           - İstatistikleri al`);
    console.log(`\n✅ Sistem hazır!`);
});

module.exports = app;
