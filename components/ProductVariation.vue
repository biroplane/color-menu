<script setup lang="ts">
defineProps<{ variation: any }>()
const {money} = useFormat()
</script>

<template>
  <div class="border-2 p-3 min-w-40 max-w-48 h-full min-h-full flex flex-col items-center">
    <div class="text-center border-b w-full text-lg whitespace-nowrap">
      {{ variation.variation }}
    </div>
    <div class=" font-tall text-8xl py-2">
      {{ money(variation.price) }}
    </div>
    <div class="bg-black text-white w-full text-center flex items-center justify-center p-1 mt-3">
      <Icon name="system-uicons:cart" width="21" height="21" />
    </div>
  </div>
</template>
