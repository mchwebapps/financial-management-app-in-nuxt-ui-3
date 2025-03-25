<script setup lang="ts">
import { expenseFormFields } from '@/config/form/expense-form-fields'

interface State {
  item: string | number | undefined
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

const searchTerm = ref()
const open = ref(false)
const itemFieldRef = useTemplateRef('itemFieldRef')

type ItemOption = {
  id: number | null
  label: string
}

const items = ref<ItemOption[]>([
  { id: 1, label: 'Mleko' },
  { id: 2, label: 'Jajka' },
  { id: 3, label: 'Chleb' },
])

const onCreate = (label: string) => {
  let newItem: ItemOption

  const exists = items.value.some((item) => item.label === label)

  if (!exists) {
    const id = items.value.length + 1
    newItem = { id, label }

    items.value.push(newItem)
    state.value.item = id
    console.log(state.value.item)
    open.value = false
    itemFieldRef.value?.inputRef?.$el.focus()
  }
}

const onDelete = () => {
  if (!state.value.item) return
  if (items.value.length === 0) {
    state.value.item = undefined
    open.value = false
    return
  }

  const id = state.value.item
  items.value = items.value.filter((i) => i.id !== id) || []
  state.value.item = ''
  searchTerm.value = ''
  itemFieldRef.value?.inputRef?.$el.focus()
  open.value = true
}

const onClear = () => {
  state.value.item = ''
  searchTerm.value = ''
  open.value = false
}
</script>

<template>
  <div v-if="loaded">
    <UForm :state="state" @submit="onSubmit">
      <div class="grid grid-cols-12 gap-y-4 gap-x-8">
        <UFormField
          name="category"
          label="Co?"
          hint="Nazwa"
          class="col-span-12 md:col-span-6"
          :ui="{ hint: 'text-[0.6rem]' }"
        >
          <UInputMenu
            ref="itemFieldRef"
            v-model="state.item"
            v-model:search-term="searchTerm"
            v-model:open="open"
            :reset-search-term-on-blur="false"
            :items="items || []"
            label-key="label"
            value-key="id"
            icon="i-lucide-search"
            placeholder="Wpisz nazwę zakupu"
            class="w-full"
            autofocus
            create-item
            @create="onCreate"
          >
            <template #leading>
              <UIcon
                v-if="state.item === ''"
                name="i-lucide-search"
                class="w-4 h-4 text-neutral-500"
              />
              <UIcon
                v-else
                name="i-lucide-trash-2"
                class="w-5 h-5 text-neutral-500 hover:text-red-500 cursor-pointer"
                @click="onDelete"
              />
            </template>
            <template #trailing>
              <UIcon
                v-if="searchTerm !== '' || state.item"
                name="i-lucide-x"
                class="w-4 h-4 text-neutral-500 hover:text-sky-500 cursor-pointer me-2"
                @click="onClear"
              />
              <UIcon
                name="i-lucide-chevron-down"
                class="w-4 h-4 text-neutral-500 group-data-[state=open]:rotate-180 transition-transform duration-200"
              />
            </template>
          </UInputMenu>
        </UFormField>
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
