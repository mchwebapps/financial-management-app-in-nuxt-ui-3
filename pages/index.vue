<script setup lang="ts">
const loaded = ref(false)

onMounted(() => (loaded.value = true))
</script>

<template>
  <div>
    <USeparator
      color="neutral"
      type="dashed"
      :label="loaded ? 'Wydatki' : '...'"
      class="pt-4 pb-6"
    />

    <UContainer class="px-2.5 sm:px-4 lg:px-8">
      <div>
        <FormsExpenseForm />
      </div>
    </UContainer>
  </div>
</template>
