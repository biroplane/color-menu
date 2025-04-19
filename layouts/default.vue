<template>
  <div class="grid grid-rows-[4rem_1fr] h-screen overflow-hidden">

    <AppHeader />
    <div class="overflow-y-auto">
      <slot></slot>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>