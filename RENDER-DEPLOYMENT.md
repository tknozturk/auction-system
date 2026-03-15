# Render.com ile Backend Deploy

## Adım 1: Render Hesabı Oluştur
1. https://render.com adresine git
2. **Sign Up** → GitHub hesabınla bağlan (ya da email ile)
3. Email doğrula

## Adım 2: Web Service Oluştur

1. **Dashboard**'a gidip **New +** → **Web Service** seç
2. **Connect Repository** → Yeni oluşturduğun `auction-system` repo'sunu seç
3. Ayarları doldur:
   - **Name:** `auction-system-api` (veya istediğin ad)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** `Free` (ücretsiz)

4. **Advanced** bölümüne git:
   - Auto-deploy: `Yes` (GitHub'a push ettikçe otomatik deploy olsun)

5. **Create Web Service**

## Adım 3: URL'ini Al

Deploy bittikten sonra (2-3 dakika):
- Green checkmark ✅ ve **Live** yazısı çıkacak
- URL şöyle görünecek: `https://auction-system-api.onrender.com`

Bu URL'yi sakla! Frontend'de kullanacağın.

## Adım 4: Frontend'i Güncelle

GitHub repo'da `admin.html` ve `index.html` dosyalarında:

Şu satırı bul:
```javascript
const API_URL = 'http://localhost:3001/api';
```

Bunu değiştir:
```javascript
const API_URL = 'https://auction-system-api.onrender.com/api';
```

(URL'deki `auction-system-api` kısmını kendi URL'inle değiştir)

Dosyaları kaydet, git'e commit et, push et:
```bash
git add admin.html index.html
git commit -m "API URL'si Render'a göre güncellendi"
git push
```

---

## Önemli Notlar:

⚠️ **Free plan sorunları:**
- 30 gün sonra web service uyur (request gelince uyandı)
- Veri RAM'de tutulur (restart'ta silinir)

✅ **Çözüm (ödeli):**
- Paid plan'a geç: Discord/Slack webhook ile pinged tutabilirsin
- Veya database ekle (PostgreSQL)

---

## Test Etmek:

1. Admin panele git:
   ```
   https://auction-system-api.onrender.com/admin.html
   ```

2. Index'e git:
   ```
   https://auction-system-api.onrender.com/index.html
   ```

3. Şifre: `alamettin`

Çalışıyor mu?
