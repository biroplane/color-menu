<script setup lang="ts">
import type { ProductDocument } from '~/prismicio-types'

const route = useRoute()
const prismic = usePrismic()
const useTag = useTags()
const tag = Array.isArray(route.params.tag) ? route.params.tag[0] : route.params.tag
const { data: products } = await useAsyncData(`[tag-${route.params.tag}]`, () => prismic.client.getByTag(tag))
await useTag.load()
console.log('PRODUCT TAGS', products.value)
</script>

<template>
  <main class="px-6 pt-12">
    <h1 class="text-3xl pt-8 capitalize font-bold" :style="{ viewTransitionName: `item-title-${tag}` }">
      {{ tag }}
    </h1>
    <NuxtLink to="/" class="text-black/50 mb-6 inline-block hover:underline">
      &larr; Back to List
    </NuxtLink>

    <ul>
      <li v-for="(product, p) in products?.results" :key="p" class="font-thin  text-3xl mb-12">
        <ProductListItem :product="(product as ProductDocument)" :is-open="true" />
      </li>
    </ul>
  </main>
</template>
