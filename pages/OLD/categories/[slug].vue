<template>
  <main  >
    <button @click="navigateTo('/')">Back</button>
    <h1
    class="uppercase font-thin text-6xl pr-2 pl-6  transition-all"
    :data-view-transition-name="`item-title-${$route.params.slug}`">{{ $route.params.slug }}
  </h1>
  </main>
</template>

<style>
/* Styling for the category page */

</style>