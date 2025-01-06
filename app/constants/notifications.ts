export interface WebhookType {
  id: string
  description: string
  priority: number
  retryCount: number
  retryDelay: number // en secondes
}

export const WEBHOOK_TYPES: Record<string, WebhookType> = {
  ALERT_CREATED: {
    id: 'alert.created',
    description: 'Nouvelle alerte créée',
    priority: 1,
    retryCount: 3,
    retryDelay: 60
  },
  ALERT_UPDATED: {
    id: 'alert.updated',
    description: 'Alerte mise à jour',
    priority: 1,
    retryCount: 3,
    retryDelay: 60
  },
  ALERT_CANCELLED: {
    id: 'alert.cancelled',
    description: 'Alerte annulée',
    priority: 1,
    retryCount: 3,
    retryDelay: 60
  },
  WEATHER_ALERT: {
    id: 'weather.alert',
    description: 'Alerte météorologique',
    priority: 1,
    retryCount: 3,
    retryDelay: 60
  },
  SYSTEM_STATUS: {
    id: 'system.status',
    description: 'Statut du système',
    priority: 2,
    retryCount: 2,
    retryDelay: 300
  }
}

export interface NotificationChannel {
  id: string
  name: string
  description: string
  config: Record<string, any>
}

export const NOTIFICATION_CHANNELS: Record<string, NotificationChannel> = {
  EMAIL: {
    id: 'email',
    name: 'Email',
    description: 'Notifications par email',
    config: {
      requiresValidation: true,
      maxPerHour: 24,
      templates: {
        alert: 'email/alert',
        digest: 'email/digest',
        system: 'email/system'
      }
    }
  },
  SMS: {
    id: 'sms',
    name: 'SMS',
    description: 'Notifications par SMS',
    config: {
      requiresValidation: true,
      maxPerHour: 10,
      templates: {
        alert: 'sms/alert',
        system: 'sms/system'
      }
    }
  },
  PUSH: {
    id: 'push',
    name: 'Push Notification',
    description: 'Notifications push mobile',
    config: {
      requiresValidation: true,
      maxPerHour: 30,
      platforms: ['ios', 'android'],
      templates: {
        alert: 'push/alert',
        weather: 'push/weather',
        system: 'push/system'
      }
    }
  },
  WEBHOOK: {
    id: 'webhook',
    name: 'Webhook',
    description: 'Notifications via webhook HTTP',
    config: {
      requiresValidation: false,
      maxPerMinute: 60,
      timeout: 5000,
      retryStrategy: {
        attempts: 3,
        backoff: 'exponential'
      }
    }
  }
}

export const NOTIFICATION_PRIORITIES = {
  EMERGENCY: {
    id: 'emergency',
    level: 1,
    description: 'Danger immédiat pour la vie',
    channels: ['SMS', 'PUSH', 'EMAIL', 'WEBHOOK'],
    requiresAcknowledgement: true
  },
  HIGH: {
    id: 'high',
    level: 2,
    description: 'Situation dangereuse',
    channels: ['PUSH', 'EMAIL', 'WEBHOOK'],
    requiresAcknowledgement: true
  },
  MEDIUM: {
    id: 'medium',
    level: 3,
    description: 'Situation à surveiller',
    channels: ['PUSH', 'EMAIL', 'WEBHOOK'],
    requiresAcknowledgement: false
  },
  LOW: {
    id: 'low',
    level: 4,
    description: 'Information générale',
    channels: ['EMAIL', 'WEBHOOK'],
    requiresAcknowledgement: false
  }
}
