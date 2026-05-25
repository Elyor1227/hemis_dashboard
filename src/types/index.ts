export type SectionId =
  | 'executive'
  | 'students'
  | 'academic'
  | 'financial'
  | 'realtime'
  | 'ai'

export interface NavItem {
  id: SectionId
  label: string
  labelUz: string
  icon: string
}

export interface StatMetric {
  label: string
  value: number
  change?: number
  suffix?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface AIInsight {
  id: string
  type: 'warning' | 'info' | 'success' | 'critical'
  title: string
  description: string
  time: string
  metric?: string
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
}
