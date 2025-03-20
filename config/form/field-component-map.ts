import { UInput, UInputMenu, UInputNumber } from '#components'
import type { ConcreteComponent } from 'vue'

export const FieldComponentMap = {
  UInput: UInput as ConcreteComponent,
  UInputMenu: UInputMenu as unknown as ConcreteComponent,
  UInputNumber: UInputNumber as ConcreteComponent,
}