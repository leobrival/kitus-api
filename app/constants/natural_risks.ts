export interface NaturalRisk {
  id: string
  name: string
  description: string
  severity_levels: string[]
  warning_types: string[]
  typical_duration: {
    min: number
    max: number
    unit: string
  }
}

export const NATURAL_RISKS: Record<string, NaturalRisk> = {
  CYCLONE: {
    id: 'cyclone',
    name: 'Cyclone',
    description: 'Système dépressionnaire tropical avec des vents violents',
    severity_levels: ['depression_tropicale', 'tempete_tropicale', 'cyclone_tropical', 'cyclone_intense'],
    warning_types: ['pré-alerte', 'alerte_orange', 'alerte_rouge', 'alerte_violette', 'phase_de_sauvegarde'],
    typical_duration: {
      min: 24,
      max: 72,
      unit: 'hours'
    }
  },
  SEISME: {
    id: 'seisme',
    name: 'Séisme',
    description: 'Tremblement de terre et ses répliques',
    severity_levels: ['faible', 'modere', 'important', 'majeur'],
    warning_types: ['alerte_immediate', 'vigilance_repliques'],
    typical_duration: {
      min: 1,
      max: 5,
      unit: 'minutes'
    }
  },
  TSUNAMI: {
    id: 'tsunami',
    name: 'Tsunami',
    description: 'Vague géante provoquée par un séisme ou glissement de terrain sous-marin',
    severity_levels: ['vigilance', 'alerte', 'alerte_maximale'],
    warning_types: ['avertissement', 'evacuation', 'retour_normal'],
    typical_duration: {
      min: 12,
      max: 24,
      unit: 'hours'
    }
  },
  VOLCAN: {
    id: 'volcan',
    name: 'Éruption volcanique',
    description: 'Activité volcanique et ses conséquences',
    severity_levels: ['vigilance', 'alerte_1', 'alerte_2', 'alerte_maximale'],
    warning_types: ['surveillance', 'restriction_acces', 'evacuation', 'confinement'],
    typical_duration: {
      min: 1,
      max: 30,
      unit: 'days'
    }
  },
  INONDATION: {
    id: 'inondation',
    name: 'Inondation',
    description: 'Submersion d\'une zone par de l\'eau',
    severity_levels: ['vigilance', 'risque_important', 'risque_severe', 'risque_maximal'],
    warning_types: ['vigilance_jaune', 'vigilance_orange', 'vigilance_rouge'],
    typical_duration: {
      min: 6,
      max: 48,
      unit: 'hours'
    }
  },
  SUBMERSION: {
    id: 'submersion',
    name: 'Submersion marine',
    description: 'Inondation temporaire de la zone côtière',
    severity_levels: ['vigilance', 'danger', 'danger_important', 'danger_extreme'],
    warning_types: ['vigilance_vagues', 'vigilance_maree', 'evacuation_preventive'],
    typical_duration: {
      min: 3,
      max: 12,
      unit: 'hours'
    }
  },
  TEMPETE: {
    id: 'tempete',
    name: 'Tempête',
    description: 'Vents violents et précipitations intenses',
    severity_levels: ['vigilance', 'danger', 'danger_important'],
    warning_types: ['vigilance_vent', 'vigilance_pluie', 'vigilance_mer'],
    typical_duration: {
      min: 6,
      max: 24,
      unit: 'hours'
    }
  }
}
