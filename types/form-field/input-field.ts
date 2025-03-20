import type { ConcreteComponent } from 'vue'

export interface UInputField {
  component: ConcreteComponent
  type?: string
  placeholder?: string
  autofocus?: boolean
}
