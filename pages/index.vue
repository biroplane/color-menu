<script setup>
const { data: categories } = await useAsyncData('categories', () => queryCollection('categories').order('order', 'ASC').all())
console.log('Categories ', categories.value)
</script>

<template>
  <div class="py-6">
    <ul class="flex flex-col items-start gap-2">
      <li v-for="(item, i) in categories" :key="i">
        <NuxtLink :to="`/items/${item.slug}`" class="block">
          <div
            class="p-4 transition-transform hover:scale-105"
            :style="{
              backgroundColor: item.bgColor,
              viewTransitionName: `item-background-${item.slug}`,
            }"
          >
            <h2
              class="text-4xl font-thin uppercase text-white"
              :style="{ viewTransitionName: `item-title-${item.slug}` }"
            >
              {{ item.title }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
