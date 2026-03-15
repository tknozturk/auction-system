# 🏆 İhale Sistemi - Kurulum ve Kullanım Rehberi

## 📋 Sistem Özeti

Bu sistem, zamanı belirlenmiş "Hemen Al" butonu ile ihale satın alma platformudur:

- **👤 Admin Paneli** (`admin.html`) - Sistem yönetimi, kullanıcı ekleme, tarih/saat belirleme
- **🌐 Ana Site** (`index.html`) - Müşterilerin göreceği satın alma sayfası (geri sayım ile)
- **⚙️ Backend API** (`server.js`) - Node.js/Express sunucusu, verileri saklama

---

## 🚀 Hızlı Başlangıç (5 dakika)

### 1. Node.js Yükleyin
[nodejs.org](https://nodejs.org/) adresinden Node.js indirin ve kurun (LTS sürümü).

Kontrol edin:
```bash
node --version
npm --version
```

### 2. Projeyi Hazırlayın

Proje klasörüne gidin:
```bash
cd "/Users/tknair/Desktop/sayfa test/test"
```

Bağımlılıkları yükleyin:
```bash
npm install
```

### 3. Sunucuyu Başlatın

```bash
npm start
```

Başarılı olursa şu mesajı görmelisiniz:
```
🚀 İhale Sistemi API Sunucusu Çalışıyor
📍 Port: 3001
🌐 URL: http://localhost:3001
```

### 4. Sistemin Bölümlerini Açın

Tarayıcıda bu linkleri açın (3 farklı pencere/tab):

1. **Admin Paneli** → http://localhost:3001/admin.html
2. **Ana Site** → http://localhost:3001/index.html
3. **İstatistikler** → Adminlik panelinin "İstatistikler" sekmesi

---

## 📖 Adım Adım Kullanım

### ADIM 1: Admin Panelinde Ayarları Yapılandırma

1. http://localhost:3001/admin.html adresini tarayıcıda açın
2. Sol menüden "⚙️ Ayarlar" sekmesine tıklayın
3. Alanları doldurun:
   - **Tarih/Saat**: İleri bir zamana ayarlayın (örn: 5 dakika sonra)
   - **İhale Adı**: "2023 Toyota Corolla" gibi bir isim
   - **Başlangıç Fiyatı**: 500000 (TL)
   - **Açıklama**: Ürün hakkında detaylar
4. "💾 Ayarları Kaydet" butonuna tıklayın ✅

**Sonuç**: Ana sitede geri sayım başlayacak!

### ADIM 2: Kullanıcı Ekleyin

1. Admin panelinde "👥 Kullanıcılar" sekmesine tıklayın
2. "Yeni Kullanıcı Ekle" bölümüne bilgi girin:
   - Kullanıcı Adı: `user1` (veya başka bir ad)
   - Email: `user1@email.com`
   - Telefon: `05XX XXX XXXX`
   - Durum: "Aktif" seçili olsun
3. "➕ Kullanıcı Ekle" butonuna tıklayın

**Sonuç**: Kullanıcı listeye eklenir. Admin panelinde görebilirsiniz.

> **Önemli**: Müşteri olarak satın alımı deneyebilmek için: Kullanıcı eklendikten sonra tarayıcı konsolunda (F12) şunu çalıştırın:
> ```javascript
> localStorage.setItem('currentUser', JSON.stringify({id: 'id_xxxxx', username: 'user1', email: 'user1@email.com', phone: '05XX XXX XXXX'}))
> ```

### ADIM 3: Ana Sitede Geri Sayimı İzleyin

1. http://localhost:3001/index.html adresini açın
2. Kontdown süresini göreceksiniz: `HH:MM:SS`
3. Ayda belirlediğiniz tarihte otomatik olarak:
   - ⏳ "Bekleniyor..." yazısı kaybolur
   - ⚡ "HEMEN AL" butonu görünür
   - Geri sayım ekranı değişir

### ADIM 4: Satın Al İşlemi

Belirlenen tarihte:
1. "⚡ HEMEN AL" butonuna tıklayın
2. Satın alma onay penceresinde "Satın Al" butonuna tıklayın
3. ✅ Başarı mesajı göreceksiniz
4. Referans numarası kaydedilir

**Sonuç**: 
- Admin panelinde "🏆 İhale Yönetimi" sekmesinde satış kaydedilir
- Müşteri girişe dönüş yapar

---

## 🎯 Ana Özellikler

### 📊 Dashboard (Admin Paneli Anasayfa)
- Toplam kullanıcı sayısı
- Aktif ihale sayısı
- Toplam teklif sayısı
- Sistem durumu
- Sonraki aktivasyon zamanı

### 👥 Kullanıcı Yönetimi
- Kullanıcı ekleme
- Kullanıcı silme
- Kullanıcı ara / filtrele
- Durum değiştirme (Aktif/İnaktif)

### ⚙️ Sistem Ayarları
- Aktivasyon tarihi/saati belirle
- İhale başlığı
- Başlangıç fiyatı
- Ürün açıklaması

### 🏆 İhale Yönetimi
- Aktif ihaleleri görüntüle
- Gelen teklifleri izle
- İhale durumunu takip et

### 📈 İstatistikler
- Günlük kayıtlar
- Ortalama teklif
- En yüksek teklif
- Tamamlanan işlemler
- Sistem günlüğü

---

## 🌍 Web'de Yayınlama (Deployment)

### Seçenek 1: Heroku (Ücretsiz, 5 dakika)

1. Heroku hesabı oluşturun: https://heroku.com
2. Heroku CLI yükleyin
3. Proje klasöründe:
```bash
heroku login
heroku create auction-system-yourname
git push heroku main
```

Sistem otomatik olarak canlı olacak!
URL: `https://auction-system-yourname.herokuapp.com`

### Seçenek 2: Railway (Hızlı, Türk dostu)

1. Railway hesabı açın: https://railway.app
2. GitHub reposunu bağlayın
3. Otomatik deploy edilir

### Seçenek 3: VPS (Digitalocean, Linode - $5/ay)

1. VPS satın alın
2. SSH ile bağlanın
3. Node.js yükleyin
4. `npm install && npm start`
5. PM2 ile background çalıştırın:
```bash
npm install -g pm2
pm2 start server.js --name "auction-system"
pm2 save
```

### Seçenek 4: Docker + Render/Replit

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

---

## 🔧 Teknik Detaylar

### API Endpoints

#### Ayarlar
```bash
GET    /api/settings              # Mevcut ayarları al
POST   /api/settings              # Ayarları kaydet
```

#### Kullanıcılar
```bash
GET    /api/users                 # Tüm kullanıcıları al
POST   /api/users                 # Yeni kullanıcı ekle
DELETE /api/users/:id             # Kullanıcı sil
GET    /api/users/email/:email    # Email ile kullanıcı bul
```

#### İhaleler
```bash
GET    /api/auctions              # Tüm ihaleleri al
GET    /api/auctions/:id          # Ihale detayları
```

#### Teklifler
```bash
GET    /api/bids                  # Tüm teklifleri al
GET    /api/bids/auction/:id      # İhale için teklifleri al
POST   /api/bids                  # Teklif yap
```

#### Satın Alma
```bash
POST   /api/purchase              # Satın al işlemi
GET    /api/purchases             # Tüm satın almalar
GET    /api/purchases/user/:id    # Kullanıcının satın almaları
```

#### İstatistikler
```bash
GET    /api/stats                 # Sistem istatistikleri
GET    /api/health                # Sunucu durumu
```

### Veri Yapısı

**Kullanıcı:**
```json
{
  "id": "id_xxxxx",
  "username": "user1",
  "email": "user@email.com",
  "phone": "05XX XXX XXXX",
  "status": "active",
  "registeredAt": "2024-03-15T10:00:00Z"
}
```

**İhale:**
```json
{
  "id": "default",
  "title": "2023 Toyota Corolla",
  "startPrice": 500000,
  "description": "...",
  "activationTime": "2024-03-15T15:30:00Z",
  "status": "active|sold|waiting",
  "bidsCount": 5,
  "createdAt": "2024-03-15T10:00:00Z"
}
```

**Satın Alma:**
```json
{
  "id": "id_xxxxx",
  "referenceNumber": "TRX-1710500000000",
  "userId": "id_xxxxx",
  "auctionId": "default",
  "purchasePrice": 500000,
  "purchaseTime": "2024-03-15T15:35:00Z",
  "status": "pending|completed"
}
```

---

## ❓ Sıkça Sorulan Sorular

### S: "Bağlantı reddedildi" hatası alıyorum
**C**: 
1. Sunucunun çalışıp çalışmadığını kontrol edin: `localhost:3001/api/health`
2. Firewall ayarlarını kontrol edin
3. Terminal'de `npm start` komutunu yeniden çalıştırın

### S: Kullanıcı silemiyorum
**C**: Admin panelinde "Kullanıcılar" sekmesine gidin, tabloda kullanıcıyı bulun ve "Sil" butonuna tıklayın.

### S: Geri sayım görünmüyor
**C**: Ayarlar kaydedilmiş mi kontrol edin. Tarih gelecekte olmalı.

### S: Başka bilgisayardan erişebilir miyim?
**C**: Evet! Sunucu bilgisayarının IP adresini öğrenin (örn: 192.168.1.100) ve `http://192.168.1.100:3001` yazın.

### S: Veri kalıcı depolanıyor mu?
**C**: Hayır, şu anda bellek (RAM) kullanılıyor. Sunucu kapanınca veriler silinir. MongoDB etc. eklemek için bana yazınız.

### S: Müşteriler nasıl giriş yapacak?
**C**: Şu anda localStorage kullanılıyor (demo için). Gerçek sistem için:
- Username/password sistemi eklenebilir
- SMS OTP
- Email doğrulama

---

## 📞 Support & İleriye Dönük Plan

### Gelecek Versiyonlar için:
- ✅ Veritabanı entegrasyonu (MongoDB/PostgreSQL)
- ✅ Kullanıcı giriş/kayıt sistemi (JWT Token)
- ✅ Ödeme sistemi entegrasyonu (Stripe/Iyzico)
- ✅ Email bildirimleri
- ✅ SMS bildirimleri
- ✅ Mobil uygulama (React Native)
- ✅ Anlık bildirimler (WebSocket)
- ✅ İhale taşıma (resim yükleme)
- ✅ Admin raporları (PDF export)

---

## 📝 Notlar

- Admin paneli ve ana site CORS (Cross-Origin) ile çalışıyor
- Verileri saklamak için opsiyonel olarak database eklenebilir
- Sistem canlıya çıkmadan authentication ve ödeme eklemeyi düşünün
- Sunucu localhost:3001'de çalışacak (değiştirebilirsiniz)

---

**Hazırsınız! 🎉 Sistem test etmeye hazır.**

Herhangi bir sorun olursa lütfen error mesajını kontrol edin.
