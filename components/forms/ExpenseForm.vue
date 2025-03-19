<script setup lang="ts">
import { expenseFormFields } from '@/config/forms/expense-form-fields'

const state = ref({})

const loaded = ref(false)

onMounted(() => (loaded.value = true))
</script>

<template>
  <div v-if="loaded">
    <UForm :state="state" @submit.prevent="() => console.log('Submitted')">
      <div class="grid grid-cols-8 gap-y-4 gap-x-8">
        <UFormField
          v-for="field in expenseFormFields"
          :key="field.formFieldProps.name"
          v-bind="field.formFieldProps"
          :ui="{ hint: 'text-[0.6rem]' }"
        >
          <component
            :is="field.fieldProps.component"
            v-bind="field.fieldProps"
            class="w-full"
          />
        </UFormField>

        <div class="col-span-8 md:col-span-1 flex items-end justify-end">
          <UButton type="submit" color="primary">Zapisz</UButton>
        </div>
      </div>
    </UForm>
  </div>
  <div v-else>
    <div class="grid grid-cols-8 gap-y-4 gap-x-8">
      <USkeleton
        v-for="el in expenseFormFields"
        :key="el.formFieldProps.name"
        :class="el.formFieldProps.class"
        class="h-13 md:h-14"
      />
      <div class="col-span-8 md:col-span-1 flex items-end justify-end">
        <USkeleton class="w-full h-12 md:h-14" />
      </div>
    </div>
  </div>
</template>
