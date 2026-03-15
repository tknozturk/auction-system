# Frontend Deployment Seçenekleri

## Seçenek 1: GitHub Pages (ÜCRETSİZ, EN KOLAY)

### Adım 1: Repository Ayarları
1. GitHub repo sayfasında **Settings** → **Pages**
2. **Build and deployment** bölümünde:
   - Source: `Deploy from a branch` seç
   - Branch: `main` + `/ (root)` seç
   - **Save**

3. Birkaç dakika bekle, otomatik deploy olacak
4. **Live site** URL'si görünecek: `https://USERNAME.github.io/auction-system`

### Adım 2: API URL'ini GitHub Pages için Güncelle

`admin.html` ve `index.html`'de API_URL'yi şöyle değiştir:

```javascript
// Development (localhost)
// const API_URL = 'http://localhost:3001/api';

// Production (Render)
const API_URL = 'https://auction-system-api.onrender.com/api';
```

Commit et:
```bash
git add admin.html index.html
git commit -m "API URL Render'a göre güncellendi"
git push
```

### Adım 3: Erişim

- **Admin Paneli:** `https://USERNAME.github.io/auction-system/admin.html`
- **Müşteri Sitesi:** `https://USERNAME.github.io/auction-system/index.html`

---

## Seçenek 2: Netlify (DAHA İYİ ÖZELLİKLER)

### Adım 1: Netlify'a Bağlan
1. https://netlify.com git
2. **Sign Up** → GitHub ile bağlan
3. **Select a Git repository** → `auction-system`

### Adım 2: Deploy Ayarları
- Build command: `.` (bırak boş, static site)
- Publish directory: `.`
- Deploy!

### Adım 3: Custom Domain (Opsiyonel)
- Site settings'de domain adı değiştirebilirsin
- Veya kendi domain'ini bağlayabilirsin

---

## Seçenek 3: Vercel

1. https://vercel.com git
2. **Import Project** → GitHub repo seç
3. Deploy!

---

## Tavsiye:

| Seçenek | Pro | Kon |
|--------|-----|-----|
| **GitHub Pages** | ✅ Ücretsiz, Basit | ⚠️ Basic features |
| **Netlify** | ✅ Ücretsiz, Güçlü | ⚠️ Başlangıçta karışık |
| **Vercel** | ✅ Hızlı, Professional | ⚠️ Next.js'e optimize |

**BU PROJE İÇİN: GitHub Pages EN KOLAY** ✅

---

## Final Endpoint'ler:

```
Admin Paneli:
https://USERNAME.github.io/auction-system/admin.html

Müşteri Sitesi:
https://USERNAME.github.io/auction-system/index.html

API Backend:
https://auction-system-api.onrender.com/api
```

Tümü birlikte çalışacak! 🎉
