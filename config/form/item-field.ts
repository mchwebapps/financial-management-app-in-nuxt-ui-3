import type { ItemField } from '@/types/form-field'

export const itemField: ItemField = {
  formFieldProps: {
    name: 'category',
    label: 'Co?',
    hint: 'Nazwa',
    class: 'col-span-12 md:col-span-6'
  },
  fieldProps: {
    placeholder: 'Wpisz nazwę dla zakupu',
    createItem: true,
    autofocus: true
  }
}
