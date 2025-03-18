<script setup lang="ts">
const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>

<template>
  <div v-if="loaded">
    <div class="flex items-center justify-end gap-4 h-10 py-2 px-4">
      <UButton to="/" icon="i-lucide-house" color="neutral" variant="ghost" />
      <USeparator />
      <!-- <UButton icon="i-lucide-door-closed" color="neutral" variant="ghost" />
      <USeparator class="w-10" /> -->
      <AppColorModeButton />
    </div>
  </div>
  <div v-else class="flex items-center justify-end gap-4 h-10 py-2 px-4">
    <USkeleton class="w-full h-4" />
  </div>
</template>
