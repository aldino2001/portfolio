# Étape 1 : Installer les dépendances
FROM node:16 AS deps

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances uniquement
RUN npm install --production

# Étape 2 : Construire l'application avec Node.js
FROM node:16 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer toutes les dépendances
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Construire l'application React
RUN npm run build

# Étape 3 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers de build dans le répertoire Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
