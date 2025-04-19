<script setup lant="ts">
const config = useAppConfig()

console.log('COLORS', config)
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
