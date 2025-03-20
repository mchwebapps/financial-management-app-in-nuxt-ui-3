import type { ConcreteComponent } from 'vue'

export interface UInputNumberField {
  component: ConcreteComponent
  defaultValue?: number
  min?: number
  step?: number
  formatOptions?: {
    style?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  }
  locale?: string
  placeholder?: string
}
