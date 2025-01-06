# Kitus API - Plan de Travail

## Tâches Réalisées 

### Configuration Initiale
- [x] Mise en place du projet Adonis.js
- [x] Configuration de PostgreSQL avec Docker
- [x] Configuration de pgAdmin pour la gestion de la base de données
- [x] Configuration des variables d'environnement

### Base de Données
- [x] Configuration de Lucid ORM
- [x] Création de la migration pour la table `users`
- [x] Configuration des modèles de base de données

### API REST - Utilisateurs
- [x] Création du modèle User
- [x] Implémentation du contrôleur UsersController avec CRUD complet
- [x] Mise en place des routes REST pour les utilisateurs
- [x] Ajout des tests fonctionnels pour les endpoints utilisateurs

### API REST - Météo et Alertes
- [x] Création des contrôleurs pour la météo et les alertes
- [x] Implémentation des routes principales avec données mockées
- [x] Ajout des tests fonctionnels pour les nouveaux endpoints
- [x] Configuration des constantes et données de référence
  - [x] Régions d'outre-mer et leurs caractéristiques
  - [x] Types de risques naturels et leurs paramètres
  - [x] Conditions météorologiques standardisées
  - [x] Niveaux d'alerte et actions requises
  - [x] Sources de données officielles
  - [x] Unités de mesure et conversions
  - [x] Configuration système (cache, rate limits, etc.)
  - [x] Système de notifications et webhooks

### Authentification et Sécurité
- [x] Implémentation de l'authentification JWT
- [x] Configuration du middleware auth
- [x] Création du modèle AccessToken
- [x] Mise en place des routes d'authentification
  - [x] Login
  - [x] Register
  - [x] Logout
  - [x] Refresh Token
  - [x] Get Profile
- [x] Protection des routes sensibles

### Documentation
- [x] Création du README principal
- [x] Documentation technique (DEVBOOK.md)
- [x] Documentation API temporaire (en attendant Swagger)
- [x] Collection Postman avec exemples
- [x] Guide d'installation et de configuration

### Monitoring et Health Check
- [x] Implémentation du service de health check
- [x] Dashboard de monitoring en temps réel
- [x] Surveillance des endpoints critiques
- [x] Métriques système (mémoire, uptime)
- [x] Interface utilisateur moderne avec Tailwind CSS

### CI/CD
- [x] Configuration de GitHub Actions pour CI
  - [x] Configuration correcte de pnpm
  - [x] Tests avec PostgreSQL
  - [x] Build et artifacts
- [x] Documentation du processus CD (CD.md)
- [x] Configuration Docker complète
  - [x] Service API avec health check
  - [x] PostgreSQL avec persistance
  - [x] Redis pour le cache
  - [x] pgAdmin pour l'administration
- [x] Dockerfile optimisé avec pnpm

## Tâches en Cours 

### CI/CD
- [ ] Correction des problèmes CI
  - [x] Configuration de GitHub Actions
  - [x] Configuration de pnpm
  - [ ] Résolution des problèmes d'authentification PostgreSQL
  - [ ] Validation des migrations de base de données
  - [ ] Tests d'intégration

### Problèmes Identifiés 
- Échec de l'authentification PostgreSQL dans le workflow CI
- Problèmes avec les variables d'environnement (APP_KEY)
- Migration de la base de données échoue dans CI
- Besoin de stabiliser l'environnement de test

### Actions Correctives 
- [ ] Vérifier la configuration PostgreSQL dans CI
- [ ] Tester les migrations localement avec les mêmes paramètres
- [ ] Ajouter plus de logs pour le debugging
- [ ] Mettre en place des tests de connexion à la base de données
- [ ] Documenter les erreurs connues et leurs solutions

### Intégration des Sources de Données
- [ ] Implémentation des services pour chaque source de données
  - [ ] Service Météo France
  - [ ] Service NOAA
  - [ ] Service USGS
- [ ] Mise en place du système de fallback entre sources
- [ ] Configuration des intervalles de mise à jour

### Système de Cache
- [ ] Configuration de Redis
  - [x] Service Docker configuré
  - [ ] Intégration avec l'API
  - [ ] Stratégies de cache
- [ ] Gestion des invalidations de cache

### Swagger/OpenAPI
- [ ] Résolution des problèmes d'intégration Swagger
- [ ] Documentation complète des endpoints
- [ ] Configuration de l'interface Swagger UI
- [ ] Tests et validation de la documentation interactive

## Prochaines Étapes 

### Déploiement Continu
- [ ] Configuration des environnements (staging/production)
- [ ] Mise en place des pipelines de déploiement
- [ ] Configuration du monitoring en production
- [ ] Mise en place des procédures de rollback
- [ ] Intégration avec AWS/Digital Ocean

### Système de Notifications
- [ ] Implémentation des canaux de notification
  - [ ] Email (avec templates)
  - [ ] SMS
  - [ ] Push notifications
  - [ ] Webhooks
- [ ] Configuration des priorités et règles d'envoi
- [ ] Tests des différents canaux

### Optimisation et Monitoring
- [ ] Configuration des alertes
- [ ] Optimisation des performances
- [ ] Mise en place des health checks avancés
- [ ] Intégration avec des outils de monitoring externes

### Tests et Qualité
- [ ] Tests unitaires pour les services
- [ ] Tests d'intégration pour les sources de données
- [ ] Tests de charge
- [x] CI avec GitHub Actions et pnpm
- [ ] Tests d'intégration Docker

## Points d'Attention 

### Performance
- Optimiser les requêtes aux sources de données
- Mettre en place un cache efficace avec Redis
- Gérer correctement les timeouts
- Monitoring des performances en production
- Optimisation des builds Docker

### Fiabilité
- Problèmes d'intégration continue à résoudre
- Besoin de tests plus robustes
- Configuration de l'environnement CI à stabiliser
- Gestion des secrets et variables d'environnement à améliorer
- Procédures de rollback à tester

### Sécurité
- Vérifier les permissions de la base de données
- Sécuriser les variables d'environnement dans CI
- Audit des dépendances à effectuer (vulnérabilité détectée)
- Revoir la gestion des secrets

## Notes Techniques 

### Structure du Projet
```
kitus-api/
├── .github/
│   └── workflows/    # Configuration CI/CD
├── app/
│   ├── constants/    # Constantes système
│   ├── controllers/  # Contrôleurs REST
│   ├── middleware/   # Middlewares
│   ├── models/      # Modèles de données
│   └── services/    # Services métier
├── config/          # Configuration
├── database/
│   └── migrations/  # Migrations
├── docker/         # Configurations Docker supplémentaires
├── docs/           # Documentation
├── resources/
│   └── views/      # Vues (health check UI)
├── start/
│   └── routes.ts   # Routes
└── tests/          # Tests
```

### Commandes Utiles
```bash
# Démarrer les services Docker
docker-compose up -d

# Rebuilder un service spécifique
docker-compose up -d --build api

# Voir les logs
docker-compose logs -f api

# Exécuter les tests dans Docker
docker-compose exec api pnpm test

# Vérifier le statut CI
gh run list

# Déployer en staging
gh workflow run deploy-staging.yml
```

### Commandes de Debug CI
```bash
# Vérifier le statut des workflows
gh run list

# Voir les logs détaillés d'un run
gh run view [RUN_ID] --log

# Tester la connexion PostgreSQL localement
PGPASSWORD=kitus psql -h localhost -U kitus -d kitus_test -c '\l'

# Lancer les migrations en mode debug
NODE_ENV=test DEBUG=* node ace migration:run

# Vérifier la configuration
node ace config:validate
```

### Erreurs Connues
1. Authentification PostgreSQL
   ```
   error: password authentication failed for user "kitus"
   ```
   - Vérifier les variables d'environnement
   - Confirmer les permissions utilisateur
   - Tester avec `POSTGRES_HOST_AUTH_METHOD=trust`

2. Variables d'Environnement
   ```
   EnvValidationException: Missing environment variable "APP_KEY"
   ```
   - Générer APP_KEY avant les tests
   - Vérifier la copie du fichier .env
   - Valider les variables requises

## Aperçu des Services Météo 

### Météo-France
- **API Publiques**
  - Observations en temps réel
  - Prévisions météorologiques
  - Données radar
- **Paramètres Disponibles**
  - Température de l'air (2m)
  - Humidité relative horaire
  - Direction et vitesse du vent (10m)
  - Précipitations (6 min)
- **Spécifications Techniques**
  - Services web INSPIRE
  - Formats: GRIB V2, GEOTIFF, PNG
  - Mise à jour en temps réel
  - Rétention: 24 heures

### NOAA
- **Climate Data Online (CDO)**
  - Token d'accès requis
  - Limite: 5 requêtes/sec, 10k/jour
- **NCEI Data Service**
  - API RESTful
  - Formats: CSV, JSON, PDF, NetCDF
- **CO-OPS API**
  - Observations et prévisions
  - Données des stations
  - Niveaux d'eau et température

### USGS
- **Services Disponibles**
  - Données géologiques
  - Données hydrologiques
  - Données sismiques
- **Spécifications**
  - API RESTful
  - Formats: JSON, XML
  - Documentation détaillée

## Tâches en Cours 

### Intégration des Services
- [ ] Configuration des clients API
  - [ ] Météo-France: Service web INSPIRE
  - [ ] NOAA: Gestion des tokens
  - [ ] USGS: Client RESTful
- [ ] Gestion des formats de données
  - [ ] Parseurs pour GRIB V2, GEOTIFF
  - [ ] Convertisseurs CSV, JSON, NetCDF
  - [ ] Normalisation des données
- [ ] Système de cache
  - [ ] Redis pour les données temps réel
  - [ ] Stratégies de mise en cache
  - [ ] Invalidation intelligente

### CI/CD
- [ ] Correction des problèmes CI
  - [x] Configuration de GitHub Actions
  - [x] Configuration de pnpm
  - [ ] Résolution des problèmes d'authentification PostgreSQL
  - [ ] Validation des migrations
  - [ ] Tests d'intégration

### Problèmes Identifiés 
- Échec de l'authentification PostgreSQL dans CI
- Gestion des variables d'environnement
- Migration de la base de données
- Stabilité de l'environnement de test

## Points d'Attention 

### Performance
- Optimisation des requêtes API externes
- Cache Redis pour les données fréquentes
- Gestion des limites de taux (rate limits)
- Monitoring des temps de réponse
- Optimisation des conversions de données

### Sécurité
- Gestion sécurisée des tokens API
- Protection des données sensibles
- Audit des dépendances
- Validation des entrées
- Logs sécurisés

### Fiabilité
- Gestion des pannes API externes
- Stratégies de fallback
- Monitoring des services
- Tests de charge
- Procédures de récupération

## Architecture Technique 

### Services Externes
```
Kitus API
├── Services Météo
│   ├── Météo-France
│   │   ├── Observations
│   │   ├── Prévisions
│   │   └── Radar
│   ├── NOAA
│   │   ├── CDO
│   │   ├── NCEI
│   │   └── CO-OPS
│   └── USGS
│       ├── Géologie
│       ├── Hydrologie
│       └── Sismique
```

### Gestion des Données
```
Pipeline de Données
├── Collecte
│   ├── Rate Limiting
│   └── Validation
├── Transformation
│   ├── Parseurs
│   ├── Convertisseurs
│   └── Normalisation
├── Stockage
│   ├── Cache (Redis)
│   └── Base de données
└── Distribution
    ├── API REST
    └── Webhooks
```

### Variables d'Environnement Requises
```bash
# API Keys
METEO_FRANCE_API_KEY=
NOAA_API_TOKEN=
USGS_API_KEY=

# Services Configuration
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_INTERVAL=1000
CACHE_TTL=3600

# Database
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=kitus
PG_PASSWORD=kitus
PG_DB_NAME=kitus

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
```

## Commandes Utiles 

### Développement
```bash
# Tester les services météo
pnpm test:weather

# Vérifier les limites de taux
pnpm check:limits

# Valider les données
pnpm validate:data
```

### Monitoring
```bash
# Statut des services
pnpm service:status

# Logs des API externes
pnpm logs:external

# Métriques de performance
pnpm metrics:show
```

### Debug
```bash
# Test de connexion API
pnpm test:api-connection

# Vérification du cache
pnpm cache:status

# Validation des données
pnpm data:validate
