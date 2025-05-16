<script setup lang="ts">
const route = useRoute()
const tag = Array.isArray(route.params.tag) ? route.params.tag[0] : route.params.tag
const { data } = await useAsyncData(`tag-${route.params.tag}`, () => queryCollection('product').where(tag, 'IN', 'tag').all())

console.log('PRODUCT TAGS', data.value)
</script>

<template>
  <main class="px-6 pt-12">
    SHOW THE TAG: {{ $route.params.tag }}
  </main>
</template>
