# GitHub'a Push Nasıl Yapılır?

## Seçenek 1: Web Arayüzü ile (EN KOLAY)

1. **GitHub.com'e gidip yeni repo oluştur:**
   - https://github.com/new
   - Repository name: `auction-system` (veya istediğin ad)
   - Description: "İhale Sistemi - Admin Panel, Kullanıcı Yönetimi, Kazanan Takibi"
   - Public seç (herkes görsün)
   - **Create repository** butonuna tıkla

2. **Komut satırında şu komutu çalıştır:**
   ```bash
   cd "/Users/tknair/Desktop/sayfa test/test"
   
   # GitHub repo bağlantısını ekle (https_username_repo_adi kısmını değiştir)
   git remote add origin https://github.com/KULLANICI_ADIN/auction-system.git
   
   # Branch'i main olarak adlandır
   git branch -M main
   
   # Push et
   git push -u origin main
   ```
   
   - **Username** kısmına: GitHub kullanıcı adınızı yazın
   - **Password yerine:** GitHub Personal Access Token girin
   
3. **Personal Access Token nasıl oluşturulur:**
   - GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - **Generate new token (classic)**
   - Name: `deployment-token`
   - Scopes: `repo` seç (tamamını)
   - Token'ı kopyala ve kaydet (sonra görünmez)
   - Terminal'de password istediğinde token'ı yapıştır

## Seçenek 2: SSH ile (Daha Güvenli)

1. SSH keyi oluştur:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. GitHub'a ekle:
   - GitHub Settings → SSH and GPG keys
   - New SSH key → public key'i kopyala-yapıştır

3. Push et:
   ```bash
   git remote add origin git@github.com:KULLANICI_ADIN/auction-system.git
   git branch -M main
   git push -u origin main
   ```

## Seçenek 3: GitHub CLI ile

1. GitHub CLI kur:
   ```bash
   brew install gh
   ```

2. Giriş yap:
   ```bash
   gh auth login
   ```

3. Repo oluştur ve push et:
   ```bash
   cd "/Users/tknair/Desktop/sayfa test/test"
   gh repo create auction-system --public --source=. --push
   ```

---

**Hangi seçeneği tercih ederseniz kullanın, sonra bana "Push yapıldı" deyin!**
