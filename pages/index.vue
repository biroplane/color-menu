<script setup>
const { config } = useAppConfig()

const prismic = usePrismic()
const { data: categories } = await useAsyncData('categories', () => prismic.client.getAllByType('category', { orderings: [{ field: 'my.category.order', direction: 'asc' }] }))
// const cats = await menu.loadCategories()
console.log('Categories ', categories.value)

const { primaryColor, secondaryColor } = config
</script>

<template>
  <div class="py-6">
    <ul class="flex flex-col items-start gap-2">
      <li v-for="(item, i) in categories" :key="i">
        <NuxtLink :to="`/items/${item.uid}`" class="block">
          <div
            class="p-4 transition-transform hover:scale-105"
            :style="{
              backgroundColor: secondaryColor,
              viewTransitionName: `item-background-${item.uid}`,
            }"
          >
            <h2
              class="text-2xl font-thin uppercase "
              :style="{ viewTransitionName: `item-title-${item.uid}`, color: primaryColor }"
            >
              {{ item.data.title }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
