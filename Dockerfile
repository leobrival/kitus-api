FROM node:18-alpine

# Installation de pnpm
RUN corepack enable && corepack prepare pnpm@8.9.0 --activate

# Installation des dépendances système nécessaires
RUN apk add --no-cache curl

# Création du répertoire de l'application
WORKDIR /app

# Copie des fichiers de configuration
COPY package.json pnpm-lock.yaml ./

# Installation des dépendances
RUN pnpm install

# Copie du reste du code source
COPY . .

# Construction de l'application
RUN pnpm build

# Exposition du port
EXPOSE 3333

# Commande de démarrage
CMD ["pnpm", "start"]
