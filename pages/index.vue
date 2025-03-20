<script setup lang="ts">
const loaded = ref(false)

onMounted(() => (loaded.value = true))
</script>

<template>
  <div>
    <USeparator
      v-if="loaded"
      color="neutral"
      type="dashed"
      label="Wydatki"
      class="pt-2 pb-6"
    />
    <div v-else class="w-full pt-2 pb-6">
      <USkeleton class="w-full h-4" />
    </div>

    <UContainer class="px-2.5 sm:px-4 lg:px-8">
      <div>
        <FormsExpenseForm />
      </div>
    </UContainer>
  </div>
</template>
