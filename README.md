# 🌊 Kitus API

## À propos

Kitus API est une interface de programmation conçue pour fournir des informations météorologiques et des alertes en temps réel pour les territoires d'outre-mer français. Elle agrège des données de plusieurs sources officielles pour offrir un service complet et fiable.

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (v18 ou supérieur)
- PostgreSQL (v14 ou supérieur)
- Docker et Docker Compose (optionnel)
- pnpm (gestionnaire de paquets)

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/kitus-api.git
cd kitus-api
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Configuration**
```bash
# Copier le fichier d'environnement
cp .env.example .env

# Éditer les variables d'environnement selon votre configuration
nano .env
```

4. **Démarrer avec Docker (recommandé)**
```bash
# Démarrer les services (PostgreSQL, pgAdmin)
docker-compose up -d

# Démarrer l'API en mode développement
pnpm dev
```

5. **Ou démarrer sans Docker**
```bash
# Configurer la base de données
node ace migration:run

# Démarrer l'API
pnpm dev
```

L'API sera accessible à l'adresse : http://localhost:3333

## 📚 Documentation

### Guide du Développeur

Le [DEVBOOK.md](./DEVBOOK.md) contient toutes les informations techniques sur :
- L'architecture du projet
- Les sources de données
- Les territoires couverts
- Les types de risques naturels
- L'implémentation des fonctionnalités
- La configuration système
- Les procédures de maintenance
- Les protocoles de sécurité

### Documentation API

La [documentation API](./API_DOCUMENTATION.md) fournit :
- La description détaillée de tous les endpoints
- Des exemples de requêtes et réponses
- Les codes d'erreur
- Les limites de taux d'appel
- Les guides d'authentification

### Collection Postman

Une [collection Postman](./postman_collection.json) est disponible pour tester rapidement l'API :
1. Importez le fichier dans Postman
2. Configurez les variables d'environnement
3. Commencez à tester les endpoints

## 🛠 Structure du Projet

```
kitus-api/
├── app/
│   ├── constants/        # Constantes et configurations
│   ├── controllers/      # Contrôleurs REST
│   ├── middleware/       # Middlewares personnalisés
│   ├── models/          # Modèles de données
│   └── services/        # Services métier
├── config/              # Configuration de l'application
├── database/
│   └── migrations/      # Migrations de base de données
├── docs/               # Documentation supplémentaire
├── start/
│   └── routes.ts       # Définition des routes
└── tests/              # Tests automatisés
```

## 🔒 Authentification

L'API utilise l'authentification JWT. Pour accéder aux endpoints protégés :

1. Créez un compte via `/api/v1/auth/register`
2. Connectez-vous via `/api/v1/auth/login`
3. Utilisez le token JWT reçu dans le header `Authorization: Bearer <token>`

## 🧪 Tests

```bash
# Exécuter tous les tests
pnpm test

# Exécuter les tests avec couverture
pnpm test:coverage

# Exécuter un fichier de test spécifique
pnpm test tests/functional/alerts.spec.ts
```

## 🔄 Mises à jour

Pour mettre à jour votre installation :

```bash
# Mettre à jour les dépendances
pnpm update

# Exécuter les nouvelles migrations
node ace migration:run

# Redémarrer l'API
pnpm dev
```

## 🐳 Docker

Le projet inclut une configuration Docker pour le développement et la production :

```bash
# Environnement de développement
docker-compose up -d

# Environnement de production
docker-compose -f docker-compose.prod.yml up -d
```

## 📊 Monitoring

- Métriques disponibles via `/metrics`
- Statut de l'API via `/health`
- Logs centralisés dans `/logs`

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## 📞 Support

- Documentation : [DEVBOOK.md](./DEVBOOK.md)
- API Docs : [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- Issues : [GitHub Issues](https://github.com/votre-username/kitus-api/issues)
- Email : support@kitus-api.com

## ✨ Remerciements

- Météo France pour les données météorologiques
- NOAA pour les données océaniques
- USGS pour les données sismiques
- La communauté AdonisJS
