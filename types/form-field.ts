export interface BaseFormField {
  formFieldProps: {
    label?: string
    hint?: string
    name: string
    class?: string
  }
}

export interface UInputProps {
  component: typeof import('#components')['UInput']
  type?: string
  placeholder?: string
  autofocus?: boolean
}

export interface UInputNumberProps {
  component: typeof import('#components')['UInputNumber']
  defaultValue?: number
  min?: number
  placeholder?: string
}

export interface USelectProps {
  component: typeof import('#components')['USelect']
  placeholder?: string
  options: Array<{ label: string; value: string }>
}

export type FieldProps = UInputProps | UInputNumberProps | USelectProps

export interface FormField extends BaseFormField {
  fieldProps: FieldProps
}
