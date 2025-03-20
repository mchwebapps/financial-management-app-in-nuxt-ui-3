import type { BaseFormField } from './base-form-field'
import type { UInputField } from './input-field'
import type { UInputNumberField } from './input-number-field'
import type { UInputMenuField } from './input-menu-field'

export type FieldProps = UInputField | UInputMenuField | UInputNumberField

export interface FormField extends BaseFormField {
  fieldProps: FieldProps
}

export * from './base-form-field'
export * from './input-field'
export * from './input-number-field'
export * from './input-menu-field'