<script setup>
const { config } = useAppConfig()
const menu = useMenu()
const { data: categories } = await useAsyncData('categories', () => queryCollection('categories').order('order', 'ASC').all())
const cats = await menu.loadCategories()
console.log('Categories ', cats.value)

const { primaryColor, secondaryColor } = config
</script>

<template>
  <div class="py-6">
    <ul class="flex flex-col items-start gap-2">
      <li v-for="(item, i) in categories" :key="i">
        <NuxtLink :to="`/items/${item.slug}`" class="block">
          <div
            class="p-4 transition-transform hover:scale-105"
            :style="{
              backgroundColor: secondaryColor,
              viewTransitionName: `item-background-${item.slug}`,
            }"
          >
            <h2
              class="text-2xl font-thin uppercase "
              :style="{ viewTransitionName: `item-title-${item.slug}`, color: primaryColor }"
            >
              {{ item.title }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
