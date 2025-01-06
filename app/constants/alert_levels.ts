export interface AlertLevel {
  id: string
  name: string
  color: string
  description: string
  required_actions: string[]
}

export const ALERT_LEVELS: Record<string, AlertLevel> = {
  VERT: {
    id: 'vert',
    name: 'Pas de vigilance particulière',
    color: '#00B050',
    description: 'Pas de phénomène dangereux en cours',
    required_actions: [
      'Suivre l\'évolution météorologique'
    ]
  },
  JAUNE: {
    id: 'jaune',
    name: 'Soyez attentifs',
    color: '#FFFF00',
    description: 'Phénomènes habituels mais occasionnellement dangereux',
    required_actions: [
      'Suivre l\'évolution météorologique',
      'Se tenir informé des conditions météorologiques'
    ]
  },
  ORANGE: {
    id: 'orange',
    name: 'Soyez très vigilant',
    color: '#FFA500',
    description: 'Phénomènes dangereux prévus',
    required_actions: [
      'Suivre les conseils des autorités',
      'Se tenir informé de l\'évolution',
      'Limiter ses déplacements',
      'Mettre à l\'abri les objets sensibles au vent'
    ]
  },
  ROUGE: {
    id: 'rouge',
    name: 'Vigilance absolue',
    color: '#FF0000',
    description: 'Phénomènes dangereux d\'intensité exceptionnelle',
    required_actions: [
      'Se conformer aux consignes des autorités',
      'Rester à l\'abri',
      'Se tenir informé de l\'évolution',
      'Se préparer à des coupures d\'électricité',
      'Prévoir des moyens d\'éclairage de secours',
      'Faire des réserves d\'eau potable'
    ]
  },
  VIOLET: {
    id: 'violet',
    name: 'Danger extrême (spécial cyclone)',
    color: '#800080',
    description: 'Phénomène cyclonique majeur imminent',
    required_actions: [
      'Rester à l\'abri',
      'Ne sortir sous aucun prétexte',
      'Se tenir informé via la radio',
      'Suivre toutes les consignes des autorités',
      'Se préparer à des coupures prolongées',
      'Avoir des réserves d\'eau et de nourriture'
    ]
  },
  GRIS: {
    id: 'gris',
    name: 'Phase de sauvegarde',
    color: '#808080',
    description: 'Phase de sauvegarde post-cyclonique',
    required_actions: [
      'Rester prudent',
      'Ne pas gêner les secours',
      'Suivre les consignes des autorités',
      'Attendre l\'autorisation pour sortir',
      'Faire attention aux dangers post-cyclone'
    ]
  }
}
