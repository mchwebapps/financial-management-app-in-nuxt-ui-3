import type { ConcreteComponent } from 'vue'

export interface UInputMenuField {
  component: ConcreteComponent
  placeholder?: string
  items: Array<{ label: string; value: string }>
}
