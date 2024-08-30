# Temel Node.js imajını kullanarak başla
FROM node:14

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve yarn.lock dosyalarını çalışma dizinine kopyala
COPY backend/package.json backend/yarn.lock ./

# Bağımlılıkları yükle
RUN yarn install

# Uygulama kodunu kopyala
COPY backend/ ./

# TypeScript dosyalarını derle
RUN yarn build

# Uygulamayı başlat
CMD ["yarn", "start"]
