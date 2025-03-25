export const expenseFormFields = [
  {
    formFieldProps: {
      name: 'item',
      label: 'Co?',
      hint: 'NAZWA',
      class: 'col-span-12 md:col-span-6'
    },
    fieldProps: {
      placeholder: 'Wpisz nazwę dla zakupu',
      autofocus: true,
      trailing: true,
      items: [
        { id: 1, label: 'Mleko' },
        { id: 2, label: 'Jajka' },
        { id: 3, label: 'Chleb' },
        { id: 4, label: 'Pomidor' },
        { id: 5, label: 'Ser' },
      ]
    }
  },
  {
    formFieldProps: {
      name: 'category',
      label: 'Gdzie?',
      hint: 'KATEGORIA / MIEJSCE',
      class: 'col-span-12 md:col-span-6'
    },
    fieldProps: {
      placeholder: 'Wpisz kategorię zakupu'
    },
  },
  {
    formFieldProps: {
      name: 'datetime',
      label: 'Kiedy?',
      hint: 'DATA I GODZINA',
      class: 'col-span-12 md:col-span-4 lg:col-span-3'
    },
    fieldProps: {
      type: 'datetime-local'
    }
  },
  {
    formFieldProps: {
      name: 'cost',
      label: 'Ile?',
      hint: 'KOSZT (PLN)',
      class: 'col-span-12 md:col-span-3 lg:col-span-3',
    },
    fieldProps: {
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
      name: 'paymentType',
      label: 'Czym?',
      hint: 'METODA PŁATNOŚCI',
      class: 'col-span-12 md:col-span-5',
    },
    fieldProps: {
      type: 'text',
      placeholder: 'Wpisz metodę płatności'
    }
  },
]