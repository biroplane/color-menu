<script setup lant="ts">
const { config } = useAppConfig()

const primary = computed(() => config.primaryColor)
console.log('COLORS', primary.value)
</script>

<template>
  <div class="" :style="{ backgroundColor: primary }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
  background-color: v-bind(primary) !important;
}
</style>
