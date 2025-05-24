<script lang="ts" setup>
import { filter } from '@prismicio/client'

const { config } = useAppConfig()
const { primaryColor, secondaryColor } = config
const route = useRoute()
const itemId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const prismic = usePrismic()
// In a real app, this would come from an API or store

const { data: category, error } = await useAsyncData(`[category_${itemId}]`, () => prismic.client.getByUID('category', itemId))

const { data: products } = await useAsyncData(`[products_${itemId}]`, () => {
  const categoryId = category.value?.id
  return prismic.client.getAllByType('product', {
    filters: categoryId ? [filter.any('my.product.category', [categoryId])] : [],
  })
})
console.log('item', itemId, category.value, error.value)
const openItem = ref(-1)
const items = ref()

// onClickOutside(items, () => openItem.value = -1)
useHead({
  title: category.value?.data?.title,
})
</script>

<template>
<div>
    <div
      class="fixed inset-0 "
      :style="{
        backgroundColor: secondaryColor, //category?.bgColor,
        viewTransitionName: `item-background-${category?.uid}`,
      }"
    />

    <div class="relative  min-h-screen">
      <div class="container mx-auto p-2 mt-6">
        <NuxtLink to="/" class="text-white mb-6 inline-block hover:underline">
          &larr; Back to List
        </NuxtLink>

        <div class=" bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-8">
          <h1
            class="text-4xl font-thin uppercase white mb-4 sticky top-8 block"
            :style="{ viewTransitionName: `item-title-${category?.uid}`, color: primaryColor, backgroundColor: secondaryColor }"
          >
            {{ category?.data.title }}
          </h1>
          <div class="font-thin" :style="{ color: primaryColor }">
            <PrismicRichText :field="category?.data.body" />
          </div>

          <div class="mt-4 text-white">
            <ol ref="items" class="flex flex-col gap-4">
              <li v-for="(product, p) in products" :key="p" class="font-thin  text-3xl">
                <ProductListItem :product :is-open="openItem === p" @open="openItem = p" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
