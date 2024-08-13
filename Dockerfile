# Utilisez une image Node.js comme base
FROM node:18 AS build

# Créez un répertoire de travail
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application
RUN npm run build

# Utilisez une image Nginx pour servir l'application
FROM nginx:alpine

# Copiez les fichiers construits dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposez le port 80
EXPOSE 80

# Démarrez Nginx
CMD ["nginx", "-g", "daemon off;"]
