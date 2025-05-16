<script setup lang="ts">
const { config } = useAppConfig()
</script>

<template>
  <div class="w-auto h-24 flex items-start  ">
    <img src="/logo.svg" class="pr-4 w-full h-24 z-10 drop-shadow object-cover" loading="lazy">
    <div class="flex flex-col mt-4">
      <div class="font-bold mt-1 uppercase">
        {{ config.title }}
      </div>
      <div class="-mt-2 font-thin whitespace-nowrap">
        {{ config.description }}
      </div>
    </div>
  </div>
</template>
