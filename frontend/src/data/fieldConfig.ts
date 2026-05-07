import type { FormValues } from '@/types/api'

export interface SliderFieldConfig {
  type: 'slider'
  key: keyof FormValues
  label: string
  description: string
  min: number
  max: number
  step: number
  unit: string
  icon: string
}

export interface ToggleFieldConfig {
  type: 'toggle'
  key: keyof FormValues
  label: string
  description: string
  icon: string
}

export type FieldConfig = SliderFieldConfig | ToggleFieldConfig

export const FIELD_CONFIG: FieldConfig[] = [
  {
    type: 'slider',
    key: 'Time_spent_Alone',
    label: 'Time Spent Alone',
    description: 'How many hours per day do you typically spend by yourself?',
    min: 0,
    max: 11,
    step: 0.5,
    unit: 'hrs/day',
    icon: 'Moon',
  },
  {
    type: 'toggle',
    key: 'Stage_fear',
    label: 'Stage Fright',
    description: 'Do you feel anxious or nervous when speaking in front of a group?',
    icon: 'Mic',
  },
  {
    type: 'slider',
    key: 'Social_event_attendance',
    label: 'Social Event Attendance',
    description: 'How often do you attend parties, gatherings, or group events?',
    min: 0,
    max: 10,
    step: 0.5,
    unit: '/ 10',
    icon: 'PartyPopper',
  },
  {
    type: 'slider',
    key: 'Going_outside',
    label: 'Going Outside',
    description: 'How frequently do you go outside for leisure or activities?',
    min: 0,
    max: 10,
    step: 0.5,
    unit: '/ 10',
    icon: 'Sun',
  },
  {
    type: 'toggle',
    key: 'Drained_after_socializing',
    label: 'Socially Drained',
    description: 'Do you feel mentally tired or need recovery time after socializing?',
    icon: 'BatteryLow',
  },
  {
    type: 'slider',
    key: 'Friends_circle_size',
    label: 'Friend Circle Size',
    description: 'Approximately how many close friends do you have?',
    min: 0,
    max: 15,
    step: 1,
    unit: 'friends',
    icon: 'Users',
  },
  {
    type: 'slider',
    key: 'Post_frequency',
    label: 'Social Media Activity',
    description: 'How often do you post or share content on social media?',
    min: 0,
    max: 10,
    step: 0.5,
    unit: '/ 10',
    icon: 'Share2',
  },
]
