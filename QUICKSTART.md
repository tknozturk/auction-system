# 🚀 HIZLI BAŞLAMAÇ REHBERI (5 DK)

Bu dosyayı lütfen sakın silmeyin! Sistem başlamadan önce okuyun.

---

## ⚡ Adım 1: Gerekli Program Yükle (1 dakika)

**Node.js yüklü mü?** Kontrol etmek için terminal açın ve yazın:
```bash
node --version
npm --version
```

Eğer versiyon numarası görmüyorsa:
👉 Buradan indirin: https://nodejs.org/ (LTS sürümü seçin)

---

## ⚡ Adım 2: Sistem Başlat (2 dakika)

Terminal açın (cmd.exe veya Terminal) ve bu komutları yazın:

```bash
cd "/Users/tknair/Desktop/sayfa test/test"
npm install
npm start
```

**Başarılı olursa bu mesajı göreceksiniz:**
```
🚀 İhale Sistemi API Sunucusu Çalışıyor
📍 Port: 3001
```

✅ Devam edin (adım 3'e geçin).
🔴 Hata alıyorsanız → SORUN GİDERME bölümüne gidin.

---

## ⚡ Adım 3: Sayfaları Tarayıcıda Aç (1 dakika)

3 farklı tarayıcı tab'ı açın:

1. **Admin Paneli (Yönetim)**
   ```
   http://localhost:3001/admin.html
   ```

2. **Ana Site (Müşteri)**
   ```
   http://localhost:3001/index.html
   ```

3. **API Sağlık (Teknik)**
   ```
   http://localhost:3001/api/health
   ```

---

## ⚡ Adım 4: İlk Test (1 dakika)

### Admin Panelinde:

1. Sol menüden **"⚙️ Ayarlar"** tıklayın
2. Şu alanları doldurun:
   - **Tarih/Saat**: Şu anki saatiniz + 2 dakika
   - **İhale Adı**: "2023 Toyota Corolla"
   - **Başlangıç Fiyatı**: 500000
   - **Açıklama**: "Türkiye'de kullanılmış araç"
3. **"💾 Ayarları Kaydet"** tıklayın

### Ana Sitede:

- Sayfayı yenileyin (F5)
- Geri sayım görmelisiniz
- 2 dakika sonra "⚡ HEMEN AL" butonu görünecek

✅ **Tebrikler! Sistem trabalıyor! 🎉**

---

## 🔴 SORUN GİDERME

### "npm: komut bulunamadı"
```
→ Node.js yüklü değil. nodejs.org adresinden indirin.
```

### "'cd' komutu hatalı"
```
→ Klasör adını kontrol edin:
/Users/tknair/Desktop/sayfa test/test
```

### "Port 3001 zaten kullanımda"
```bash
# Başka bir port kullanın
PORT=3002 npm start
```

### Admin paneli boş görünüyor
```
→ Sayfayı yenileyin (F5)
→ Browser console açın (F12) ve hata kontrol edin
```

### "CORS hatası" alıyorum
```
→ Sayfaları localhost'ta açmış mısınız?
→ http://localhost:3001/ ile başlayın
```

---

## 📋 Sonraki Adımlar

1. **Kullanıcı Ekleyin**
   - Admin Paneli → "👥 Kullanıcılar"
   - Kullanıcı bilgilerini girin
   - "➕ Kullanıcı Ekle" tıklayın

2. **Satın Alma Testi Yapın**
   - Belirlenen saatten sonra
   - "⚡ HEMEN AL" butonuna tıklayın
   - Satın alma onayı yapın

3. **Web'e Yayın**
   - DEPLOYMENT.md dosyasını okuyun
   - Heroku/Railway tercih edin (en kolay)

---

## 📚 Dosya Rehberi

```
test/
├── admin.html          ← Admin paneli arayüzü
├── index.html          ← Müşteri sitesi
├── server.js           ← Backend API kodu
├── package.json        ← Bağımlılıklar
├── README.md           ← Detaylı rehber
├── DEPLOYMENT.md       ← Web'e yayınlama
├── TESTS.md            ← Test komutları
└── Dockerfile          ← Docker kurulum
```

---

## 📞 İhtiyaç Duyduğunuz Linkler

- **Node.js Download**: https://nodejs.org
- **README Detaylı**: [README.md dosyasını açın](./README.md)
- **Deployment Rehberi**: [DEPLOYMENT.md dosyasını açın](./DEPLOYMENT.md)

---

## ✨ TIP: Komutları Hızlı Çalıştırma

Sık kullandığınız komutları kolaylaştırmak için:

**Windows (PowerShell) kullanıyorsanız:**
```powershell
npm install
npm start
```

**Mac/Linux kullanıyorsanız:**
```bash
bash setup.sh
npm start
```

---

## 🎯 BAŞARDI?

Eğer:
- ✅ Admin paneli açılıyor
- ✅ Ana site açılıyor  
- ✅ Geri sayım çalışıyor
- ✅ "Hemen Al" butonu sonunda görünüyor

**Tebrikler! Sistem %100 çalışıyor! 🎉**

Şimdi DEPLOYMENT.md'yi okuyarak systemi web'e çıkartabilirsiniz.

---

**Sorun mu? Terminal'de hatayı kopyalayıp Google'da aratın veya README.md'nin FAQ bölümünü kontrol edin.**

---

**Başarılar! 🚀**
