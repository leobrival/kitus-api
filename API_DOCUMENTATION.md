# Documentation API Kitus

## Guide d'Importation Postman

1. Ouvrez Postman
2. Cliquez sur "Import"
3. Sélectionnez le fichier `postman_collection.json`
4. Créez un environnement avec les variables suivantes :
   - `baseUrl` : URL de base de l'API (par défaut: http://localhost:3333)
   - `token` : Votre token JWT (à remplir après login)

## Endpoints Disponibles

### 🔐 Authentication

#### Register
- **POST** `/api/v1/auth/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```
- **Response**: 201 Created
  ```json
  {
    "message": "User created successfully",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
  ```

#### Login
- **POST** `/api/v1/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**: 200 OK
  ```json
  {
    "type": "bearer",
    "token": "your.jwt.token",
    "expires_at": "2025-01-13T19:42:54+01:00"
  }
  ```

#### Get Profile
- **GET** `/api/v1/auth/me`
- **Headers**: Authorization: Bearer {token}
- **Response**: 200 OK
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
  ```

#### Refresh Token
- **POST** `/api/v1/auth/refresh`
- **Headers**: Authorization: Bearer {token}
- **Response**: 200 OK
  ```json
  {
    "type": "bearer",
    "token": "new.jwt.token",
    "expires_at": "2025-01-13T19:42:54+01:00"
  }
  ```

#### Logout
- **POST** `/api/v1/auth/logout`
- **Headers**: Authorization: Bearer {token}
- **Response**: 200 OK
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### ⚠️ Alerts

#### Get All Alerts
- **GET** `/api/v1/alerts`
- **Headers**: Authorization: Bearer {token}
- **Response**: 200 OK
  ```json
  {
    "alerts": [
      {
        "id": "1",
        "type": "CYCLONE",
        "severity": "ORANGE",
        "region": "REUNION",
        "description": "Cyclone tropical intense en approche",
        "created_at": "2025-01-06T19:42:54+01:00",
        "updated_at": "2025-01-06T19:42:54+01:00"
      }
    ]
  }
  ```

#### Get Alert by ID
- **GET** `/api/v1/alerts/:id`
- **Headers**: Authorization: Bearer {token}
- **Parameters**: id (path)
- **Response**: 200 OK
  ```json
  {
    "id": "1",
    "type": "CYCLONE",
    "severity": "ORANGE",
    "region": "REUNION",
    "description": "Cyclone tropical intense en approche",
    "recommendations": [
      "Restez à l'intérieur",
      "Suivez les consignes des autorités"
    ],
    "created_at": "2025-01-06T19:42:54+01:00",
    "updated_at": "2025-01-06T19:42:54+01:00"
  }
  ```

#### Get Alerts by Region
- **GET** `/api/v1/alerts/region/:region`
- **Headers**: Authorization: Bearer {token}
- **Parameters**: region (path)
- **Response**: 200 OK
  ```json
  {
    "region": "REUNION",
    "alerts": [
      {
        "id": "1",
        "type": "CYCLONE",
        "severity": "ORANGE"
      }
    ]
  }
  ```

### 🌤 Weather

#### Get Weather by Region
- **GET** `/api/v1/weather/:region`
- **Headers**: Authorization: Bearer {token}
- **Parameters**: region (path)
- **Response**: 200 OK
  ```json
  {
    "region": "REUNION",
    "current": {
      "temperature": 28,
      "humidity": 75,
      "wind_speed": 20,
      "wind_direction": "NE",
      "pressure": 1008,
      "description": "Partiellement nuageux"
    },
    "updated_at": "2025-01-06T19:42:54+01:00"
  }
  ```

#### Get Weather Forecast
- **GET** `/api/v1/weather/:region/forecast`
- **Headers**: Authorization: Bearer {token}
- **Parameters**: region (path)
- **Response**: 200 OK
  ```json
  {
    "region": "REUNION",
    "forecast": {
      "daily": [
        {
          "date": "2025-01-07",
          "temperature": {
            "min": 24,
            "max": 30
          },
          "description": "Ensoleillé"
        }
      ]
    }
  }
  ```

## Codes d'Erreur

- **400** Bad Request: Requête invalide
- **401** Unauthorized: Token manquant ou invalide
- **403** Forbidden: Accès non autorisé
- **404** Not Found: Ressource non trouvée
- **429** Too Many Requests: Trop de requêtes
- **500** Internal Server Error: Erreur serveur

## Notes

- Tous les timestamps sont en UTC
- Les tokens JWT expirent après 7 jours
- Les requêtes sont limitées à :
  - Public : 100 req/15min
  - Authentifié : 1000 req/15min
  - Admin : 5000 req/15min
