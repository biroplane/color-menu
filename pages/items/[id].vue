<script setup>
const route = useRoute()
const itemId = route.params.id

// In a real app, this would come from an API or store

const { data: item } = await useAsyncData(`[category_${itemId}]`, () => {
  return queryCollection('categories').where('slug', '=', itemId).first()
})
console.log('WHERE CLAUSE', itemId)
const { data: products } = await useAsyncData(`[products_${itemId}]`, () => {
  return queryCollection('product')
    .where('category', '=', itemId)
    .all()
})
console.log('item', item.value)
const openItem = ref(-1)
const items = ref()

// onClickOutside(items, () => openItem.value = -1)
useHead({
  title: item.title,
})
</script>

<template>
  <div>
    <!-- This is the expanding background element -->

    <div
      class="fixed inset-0 "
      :style="{
        backgroundColor: item?.bgColor,
        viewTransitionName: `item-background-${item?.slug}`,
      }"
    />

    <div class="relative  min-h-screen">
      <div class="container mx-auto p-2">
        <NuxtLink to="/" class="text-white mb-6 inline-block hover:underline">
          &larr; Back to List
        </NuxtLink>

        <div class=" bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-8">
          <h1
            class="text-4xl font-thin uppercase text-white mb-4"
            :style="{ viewTransitionName: `item-title-${item?.slug}` }"
          >
            {{ item?.title }}
          </h1>
          <div class=""><ContentRenderer :value="item.body" /></div>
          

          <div class="mt-4 text-white">
            <ol class="flex flex-col gap-4" ref="items">
              <li v-for="(product, p) in products" :key="p" class="font-thin  text-3xl">
                <ProductListItem  :product :is-open="openItem === p" @open="openItem = p" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
