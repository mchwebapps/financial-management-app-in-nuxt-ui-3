<script setup lang="ts">
const items = ref([
  [
    {
      label: 'Wydatki',
      // icon: 'i-lucide-wallet',
      to: '/',
      onSelect: () => (open.value = false),
    },
    {
      label: 'Coming soon...',
      icon: 'i-lucide-loader-circle',
      to: '/coming-soon',
      onSelect: () => (open.value = false),
    },
  ],
  [
    {
      label: 'GitHub',
      // icon: 'i-simple-icons-github',
      to: 'https://github.com/mchwebapps',
      onSelect: () => (open.value = false),
      target: '_blank',
    },
  ],
])

const open = ref(false)
const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>

<template>
  <div v-if="loaded">
    <UNavigationMenu
      color="neutral"
      variant="link"
      :items="items"
      class="hidden lg:flex h-10"
    />
    <UCollapsible v-model:open="open" class="lg:hidden">
      <UButton
        class="group h-10"
        label="Menu"
        color="neutral"
        variant="ghost"
        :trailing-icon="open ? 'i-lucide-align-left' : 'i-lucide-align-justify'"
        :ui="{
          trailingIcon:
            'group-data-[state=open]:rotate-0 transition-transform duration-200',
        }"
        block
      />

      <template #content>
        <UNavigationMenu
          color="neutral"
          variant="link"
          :items="items"
          orientation="vertical"
        />
      </template>
    </UCollapsible>
  </div>
  <div v-else>
    <USkeleton class="h-10" />
  </div>
</template>
