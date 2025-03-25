import type { BaseField } from './base-field'
import type { ItemField } from './item-field'
import type { UInputNumberField } from './input-number-field'

export * from './base-field'
export * from './item-field'
export * from './input-number-field'

export type FormField = BaseField | ItemField | UInputNumberField