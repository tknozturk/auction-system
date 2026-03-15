# 🧪 Test Senaryoları

## Sınırla 1: Admin Paneline Erişim

```bash
curl http://localhost:3001/admin.html
# Beklenen: 200 OK, HTML içeriği
```

## Senaryo 2: API Sağlık Durumu

```bash
curl http://localhost:3001/api/health
# Response:
# {
#   "status": "OK",
#   "timestamp": "2024-03-15T...",
#   "uptime": 123.45
# }
```

## Senaryo 3: Ayarları Kaydet

```bash
curl -X POST http://localhost:3001/api/settings \
  -H "Content-Type: application/json" \
  -d '{
    "activationTime": "2024-03-15T15:30:00Z",
    "auctionTitle": "Test Aracı",
    "startPrice": 500000,
    "productDescription": "Test ürünü"
  }'
```

## Senaryo 4: Kullanıcı Ekle

```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "phone": "05XX XXX XXXX",
    "status": "active"
  }'
```

## Senaryo 5: Kullanıcıları Listele

```bash
curl http://localhost:3001/api/users
# Response: [{...}, {...}]
```

## Senaryo 6: İstatistikleri Al

```bash
curl http://localhost:3001/api/stats
# Response: {
#   "totalUsers": 1,
#   "totalAuctions": 1,
#   "totalBids": 0,
#   ...
# }
```

## Senaryo 7: Satın Alma İşlemi

```bash
curl -X POST http://localhost:3001/api/purchase \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "id_xxxxx",
    "auctionId": "default",
    "purchasePrice": 500000,
    "purchaseTime": "2024-03-15T15:35:00Z"
  }'
# Response: {
#   "success": true,
#   "purchase": {...},
#   "referenceNumber": "TRX-1710500000000"
# }
```

---

## 🎯 Başarı Kontrol Listesi

Sistem çalışıyorsa şunları doğrulayın:

- [ ] Admin paneli açılıyor mı? → http://localhost:3001/admin.html
- [ ] Ana site açılıyor mı? → http://localhost:3001/index.html
- [ ] API sağlıklı mı? → curl http://localhost:3001/api/health
- [ ] Kullanıcı ekleyebiliyor musunuz?
- [ ] Ayarları kaydedebiliyor musunuz?
- [ ] Geri sayım görünüyor mu?
- [ ] "Hemen Al" butonu sorunda görünüyor mu?
- [ ] Satın alma işlemi başarılı oluyor mu?

---

## 🐛 Hata Ayıklama

### Browser Console (F12)
```javascript
// Ayarları kontrol et
fetch('http://localhost:3001/api/settings')
  .then(r => r.json())
  .then(console.log)

// Kullanıcıları listele
fetch('http://localhost:3001/api/users')
  .then(r => r.json())
  .then(console.log)

// Yeni kullanıcı ekle
fetch('http://localhost:3001/api/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    username: 'testuser',
    email: 'test@example.com',
    phone: '05XX XXX XXXX',
    status: 'active'
  })
}).then(r => r.json()).then(console.log)
```

### Network Sorunları

```bash
# Port açık mı?
netstat -an | grep 3001

# Firewall kontrol
sudo ufw status

# Sunucu log'ları (terminal)
npm start
```

---

## 📊 Performans Testi

```bash
# 1000 request/saniye
ab -n 1000 -c 10 http://localhost:3001/api/stats
```

---

## ✅ Checklist for Production

* [ ] Environment variables kullanılıyor mu?
* [ ] Error handling eklendi mi?
* [ ] Logging entegre edildi mi?
* [ ] CORS düzgün ayarlandı mı?
* [ ] Rate limiting var mı?
* [ ] Database entegre edildi mi?
* [ ] Authentication/JWT eklendi mi?
* [ ] HTTPS/SSL sertifikası var mı?
* [ ] Backup stratejisi var mı?
* [ ] Monitoring ayarlandı mı?

---

Tüm testler geçti mi? 🎉 Sistemin test ortamında katı olduğundan emin olabilirsiniz!
