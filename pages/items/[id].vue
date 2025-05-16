<script setup>
const { config } = useAppConfig()
const { primaryColor, secondaryColor } = config
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
console.log('item', products.value)
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
        backgroundColor: secondaryColor, //item?.bgColor,
        viewTransitionName: `item-background-${item?.slug}`,
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
            :style="{ viewTransitionName: `item-title-${item?.slug}`, color: primaryColor, backgroundColor: secondaryColor }"
          >
            {{ item?.title }}
          </h1>
          <div class="font-thin" :style="{ color: primaryColor }">
            <ContentRenderer :value="item.body" />
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
