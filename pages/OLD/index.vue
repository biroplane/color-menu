<script setup lang="ts">

const {data:categories} =await useAsyncData('categories',()=>queryCollection('categories').order('order','ASC').all())
console.log("CATEGORIES",categories.value)

</script>

<template>

  <main>
    <ul class="flex flex-col items-start gap-4">
      <li v-for="(item,i) in categories" :key="i" class="uppercase font-thin text-6xl pr-2 pl-6  transition-all category-title" :style="{backgroundColor:item.bgColor??'black', color:item.textColor ?? 'white'}">
        <NuxtLink :to="item.stem">
          <h2
          :data-view-transition-name="`item-title-${item.name}`"
          >{{ item.name }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style>
/* Add this if you want to customize the transition animation */
::view-transition-old(item-card-*),
::view-transition-new(item-card-*) {
  animation-duration: 0.6s;
}

::view-transition-old(item-title-*),
::view-transition-new(item-title-*) {
  animation-duration: 0.6s;
}

::view-transition-old(item-description-*),
::view-transition-new(item-description-*) {
  animation-duration: 0.6s;
}
</style>