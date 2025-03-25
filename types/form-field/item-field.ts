import type { BaseField } from './base-field'

export interface ItemField extends BaseField {
  fieldProps: {
    placeholder?: string
    createItem?: boolean
    autofocus?: boolean
  }
}
