<script setup lang="ts">
import { expenseFormFields } from '@/config/forms/expense-form-fields'

interface State {
  item: string
  category: string
  cost: number
  datetime: string
  paymentType: string
}

const getCurrentDateTime = () => new Date().toISOString().slice(0, 16)
const initialState: State = {
  item: '',
  category: '',
  cost: 0,
  datetime: getCurrentDateTime(),
  paymentType: '',
}
const state = ref<State>({ ...initialState })

const resetForm = () => {
  state.value = { ...initialState }
}

const onSubmit = () => {
  state.value = {
    ...state.value,
    datetime: new Date(state.value.datetime).toISOString(),
  }
  console.log(state.value)
  resetForm()
}

const loaded = ref(false)
onMounted(() => (loaded.value = true))
</script>

<template>
  <div v-if="loaded">
    <UForm :state="state" @submit="onSubmit">
      <div class="grid grid-cols-12 gap-y-4 gap-x-8">
        <UFormField
          v-for="field in expenseFormFields"
          :key="field.formFieldProps.name"
          v-bind="field.formFieldProps"
          :ui="{ hint: 'text-[0.6rem]' }"
        >
          <component
            :is="field.fieldProps.component"
            v-model="state[field.formFieldProps.name as keyof State]"
            v-bind="field.fieldProps"
            class="w-full"
          />
        </UFormField>

        <div class="col-span-12 lg:col-span-1 flex items-end justify-end">
          <UButton type="submit" color="primary">Zapisz</UButton>
        </div>
      </div>
    </UForm>
  </div>
  <div v-else>
    <div class="grid grid-cols-12 gap-y-5 gap-x-8 pt-2">
      <div
        v-for="el in expenseFormFields"
        :key="el.formFieldProps.name"
        :class="el.formFieldProps.class"
      >
        <USkeleton class="w-full h-4 mb-1" />
        <USkeleton class="h-8" />
      </div>
      <div class="col-span-12 lg:col-span-1 flex items-end justify-end">
        <USkeleton class="w-[58px] h-8" />
      </div>
    </div>
  </div>
</template>
