#!/bin/bash

echo "🚀 İhale Sistemi - Kurulum Başladı"
echo "================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js yüklü değil. Lütfen nodejs.org adresinden indirin."
    exit 1
fi

echo "✅ Node.js bulundu: $(node --version)"
echo "✅ NPM bulundu: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Bağımlılıklar yükleniyor..."
npm install

echo ""
echo "================================="
echo "✅ Kurulum Tamamlandı!"
echo ""
echo "🎯 Sistem başlatmak için:"
echo "   npm start"
echo ""
echo "📍 Admin Paneli:       http://localhost:3001/admin.html"
echo "📍 Ana Site:            http://localhost:3001/index.html"
echo ""
echo "================================="
