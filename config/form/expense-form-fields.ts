import type { FormField } from '@/types/form-field'
import { FieldComponentMap } from './field-component-map'

export const expenseFormFields: FormField[] = [
  {
    formFieldProps: {
      label: 'Co?',
      hint: 'NAZWA',
      name: 'item',
      class: 'col-span-12 md:col-span-6'
    },
    fieldProps: {
      component: FieldComponentMap.UInput,
      placeholder: 'Wpisz nazwę dla zakupu',
      autofocus: true
    },
  },
  {
    formFieldProps: {
      label: 'Gdzie?',
      hint: 'KATEGORIA / MIEJSCE',
      name: 'category',
      class: 'col-span-12 md:col-span-6'
    },
    fieldProps: {
      component: FieldComponentMap.UInput,
      placeholder: 'Wpisz kategorię zakupu'
    },
  },
  {
    formFieldProps: {
      label: 'Kiedy?',
      hint: 'DATA I GODZINA',
      name: 'datetime',
      class: 'col-span-12 md:col-span-4 lg:col-span-3'
    },
    fieldProps: {
      component: FieldComponentMap.UInput,
      type: 'datetime-local'
    }
  },
  {
    formFieldProps: {
      label: 'Ile?',
      hint: 'KOSZT (PLN)',
      name: 'cost',
      class: 'col-span-12 md:col-span-3 lg:col-span-3',
    },
    fieldProps: {
      component: FieldComponentMap.UInputNumber,
      defaultValue: 0,
      min: 0,
      step: 0.01,
      formatOptions: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      locale: 'pl-PL',
      placeholder: 'Wpisz wydaną kwotę',
    },
  },
  {
    formFieldProps: {
      label: 'Czym?',
      hint: 'METODA PŁATNOŚCI',
      name: 'paymentType',
      class: 'col-span-12 md:col-span-5',
    },
    fieldProps: {
      component: FieldComponentMap.UInput,
      type: 'text',
      placeholder: 'Wpisz metodę płatności'
    }
  },
]