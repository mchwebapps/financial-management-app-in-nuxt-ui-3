import type { FormField } from '@/types/form-field'
import { UInput, UInputNumber } from '#components'

export const expenseFormFields = ref<FormField[]>([
  {
    formFieldProps: {
      label: 'Co?',
      hint: 'NAZWA',
      name: 'item',
      class: 'col-span-8 md:col-span-4'
    },
    fieldProps: {
      component: markRaw(UInput),
      placeholder: 'Wpisz nazwę dla zakupu',
      autofocus: true
    },
  },
  {
    formFieldProps: {
      label: 'Gdzie?',
      hint: 'KATEGORIA / MIEJSCE',
      name: 'category',
      class: 'col-span-8 md:col-span-4'
    },
    fieldProps: {
      component: markRaw(UInput),
      placeholder: 'Wpisz kategorię zakupu'
    },
  },
  {
    formFieldProps: {
      label: 'Kiedy?',
      hint: 'DATA I GODZINA',
      name: 'datetime',
      class: 'col-span-8 md:col-span-2'
    },
    fieldProps: {
      component: markRaw(UInput),
      type: 'datetime-local'
    }
  },
  {
    formFieldProps: {
      label: 'Ile?',
      hint: 'KOSZT (PLN)',
      name: 'cost',
      class: 'col-span-8 md:col-span-2',
    },
    fieldProps: {
      component: markRaw(UInputNumber),
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
      class: 'col-span-8 md:col-span-3',
    },
    fieldProps: {
      component: markRaw(UInput),
      type: 'text',
      placeholder: 'Wpisz metodę płatności'
    }
  },
])