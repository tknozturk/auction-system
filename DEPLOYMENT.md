# 🌍 Web'e Yayınlama Rehberi

İhale sisteminizi internete çıkartmak için bu adımları izleyin.

---

## 🟢 Seçenek 1: Heroku (ÜCRETSİZ - Önerilir)

### Adım 1: Hazırlık
- Heroku hesabı açın: https://www.heroku.com
- Heroku CLI yükleyin: https://devcenter.heroku.com/articles/heroku-cli

### Adım 2: Proje Klasöründe

```bash
cd "/Users/tknair/Desktop/sayfa test/test"

# Heroku'da giriş yapın
heroku login

# Yeni uygulama oluşturun
heroku create auction-system-tr

# Deployment yapın
git init
git add .
git commit -m "İhale Sistemi - İlk sürüm"
git push heroku master
```

### Adım 3: Live Oldu!
Sunucunuz şu adreste çalışacak:
```
https://auction-system-tr.herokuapp.com
```

**Admin Paneli:** https://auction-system-tr.herokuapp.com/admin.html
**Ana Site:** https://auction-system-tr.herokuapp.com/index.html

---

## 🟡 Seçenek 2: Railway.app (Türk Dostu - 5 dakika)

### Adım 1: Hazırlık
- Railway hesabı açın: https://railway.app
- GitHub hesabı gerekli

### Adım 2: Deployment
1. Railway'de "New Project" tıklayın
2. GitHub'ı bağlayın
3. Bu repository'i seçin
4. Otomatik deploy olacak!

### Adım 3: URL Al
Railway size otomatik bir URL verecek.

✅ **Avantajı**: Türkiye'den hızlı, kolay

---

## 🔴 Seçenek 3: Replit (Web Browser'da Kodlama - 3 dakika)

### Adım 1: Hazırlık
- Replit hesabı açın: https://replit.com

### Adım 2: Yükle
1. "Create Repl" tıklayın
2. "Import from GitHub" seçin
3. Bu repository'i yapıştırın

### Adım 3: Çalıştır
1. "Run" butonuna tıklayın
2. Replit bir URL verecek

📍 **URL Format**: `https://your-replit-name.replit.dev`

✅ **Avantajı**: Hiç kurulum gerek yok, web'den yönetebilirsiniz

---

## 🔵 Seçenek 4: DigitalOcean VPS (Profi - $5/ay)

### Adım 1: Droplet Oluştur
1. DigitalOcean hesabı açın: https://www.digitalocean.com
2. "Create" → "Droplets" tıklayın
3. Ubuntu 22.04 seçin
4. En ucuz seçeneği alın ($5/ay)

### Adım 2: SSH Bağlantı
```bash
ssh root@your_droplet_ip

# Node.js yükle
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Projeyi yükle
cd /root
git clone https://github.com/yourname/auction-system.git
cd auction-system
npm install

# PM2 ile background çalıştır
npm install -g pm2
pm2 start server.js --name "auction-system"
pm2 save
pm2 startup

# Nginx reverse proxy kur
sudo apt install -y nginx

# İleri adımlar için bana yazın
```

---

## 🟣 Seçenek 5: Docker (Konteyner)

### Dockerfile Oluştur
Zaten bir `Dockerfile` var. Bunları çalıştırabilirsiniz:

```bash
# Image oluştur
docker build -t auction-system .

# Container çalıştır
docker run -p 3001:3001 auction-system
```

**Docker Hub'a Push Etme:**
```bash
docker login
docker tag auction-system yourusername/auction-system:1.0
docker push yourusername/auction-system:1.0
```

---

## 📊 Karşılaştırma Tablosu

| Platform | Fiyat | Kurulum | Hız | Depo | Önerim |
|----------|-------|--------|-----|------|--------|
| **Heroku** | Ücretsiz | 2 dk | Orta | 512MB | ⭐⭐⭐⭐ |
| **Railway** | Ücretsiz | 2 dk | Iyi | Sınırsız | ⭐⭐⭐⭐⭐ |
| **Replit** | Ücretsiz | 1 dk | Orta | 1GB | ⭐⭐⭐ |
| **DigitalOcean** | $5/ay | 10 dk | Çok iyi | 25GB | ⭐⭐⭐⭐⭐ |
| **AWS** | Değişken | 15 dk | Harika | 5GB Ücretsiz | ⭐⭐⭐ |

---

## 🔐 Canlı Sisteme Geçmeden Önce

[ ] 1. **Database ekleyin** (MongoDB, PostgreSQL)
[ ] 2. **Giriş sistemi** (Username/Password + JWT)
[ ] 3. **Ödeme entegrasyonu** (Stripe, Iyzico)
[ ] 4. **HTTPS/SSL** (Tüm platformlar otomatik sağlıyor)
[ ] 5. **Environment Variables** (.env dosyası)
[ ] 6. **Logging & Monitoring** (Bug takip)
[ ] 7. **Backup** (Veriler güvenli mi?)
[ ] 8. **Rate Limiting** (DDoS koruması)

---

## 🔧 Kendi Sunucunuzda Çalıştırma

### Linux/Mac:

```bash
npm install
npm start
```

### Windows (CMD):

```cmd
npm install
npm start
```

### Arka Planda Çalıştırma (Linux):

```bash
nohup npm start > server.log 2>&1 &
```

---

## 📱 Mobil Erişim

Eğer lokal ağda test ediyorsanız:

```
http://YOUR_COMPUTER_IP:3001
```

Örnek: `http://192.168.1.100:3001`

Aynı ağdaki cihazlardan erişebileceksiniz.

---

## 🆘 Yaygın Sorunlar

### "502 Bad Gateway"
- Sunucu çöktü. Logs kontrol edin.
- `npm start` yeniden çalıştırın

### "CORS Error"
- Frontend ve backend farklı domain'lerde mi?
- server.js'de CORS ayarlarını kontrol edin

### "Database Connection Error"
- MongoDB/PostgreSQL çalışıyor mu?
- Connection string doğru mu?

### "Port zaten kullanımda"
```bash
# Port değiştir
PORT=3002 npm start
```

---

## 📞 Destek

Yardıma ihtiyacınız varsa:
1. README.md dosyasını kontrol edin
2. Server logs'a bakın
3. Browser console'da (F12) error olup olmadığını görmek

---

**Başarılar! 🚀**

Sisteminiz canlıya çıktıktan sonra, gerçek müşterileriniz şu adrese girebilecekler:

```
https://your-domain.com/index.html
```

İdareciler için:
```
https://your-domain.com/admin.html
```
