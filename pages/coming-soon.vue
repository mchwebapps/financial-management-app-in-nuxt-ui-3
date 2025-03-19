<script setup lang="ts">
const { data: example } = await useAsyncData(() =>
  queryCollection('content').path('/coming-soon').first()
)
useSeoMeta({
  title: example.value?.title,
  description: example.value?.description,
})
</script>

<template>
  <div>
    <USeparator
      color="neutral"
      type="dashed"
      :label="example?.title ? example.title : '...'"
      class="pt-4 pb-6"
    />

    <ContentRenderer v-if="example" :value="example" />
    <div v-else>Page not found</div>
  </div>
</template>
