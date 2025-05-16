<script setup lang="ts">
const props = defineProps<{ product: any, isOpen: boolean }>()
defineEmits<{ open: [e: boolean] }>()
const { primaryColor } = useAppConfig().config

const emptyVariation = computed(() => {
  return {
    id: 0,
    name: props.product.title,
    price: props.product.price,
    availableForSale: false,
    selectedOptions: [],
    image: {
      url: '',
      altText: '',
    },
  }
})
</script>

<template>
  <div class="">
    <button class="font-thin uppercase hover:scale-105 text-left" @click="$emit('open', false)">
      {{ product.title }}
    </button>
    <div v-if="isOpen" class="bg-white p-4 md:p-6 text-black ">
      <div class="text-lg" :style="{ textTransform: 'unset' }">
        <ContentRenderer :value="product.body" />
      </div>
      <div v-if="product.tags" class="flex gap-2 py-4">
        <NuxtLink v-for="tag in product.tags" :key="tag" :to="`/tags/${tag}`" class="rounded-full  text-xs px-3 py-1" :style="{ backgroundColor: primaryColor }">
          {{ tag }}
        </NuxtLink>
      </div>
      <ul v-if="product.variants" class="flex items-start gap-4 h-full overflow-x-auto no-scrollbar w-full">
        <li v-for="(variants, v) in product.variants" :key="v" class="h-full">
          <ProductVariation
            :variation="variants"
            class="h-full"
          />
        </li>
      </ul>
      <ul v-else class="flex items-start gap-4 h-full overflow-x-auto no-scrollbar w-full">
        <li>
          <ProductVariation :variation="emptyVariation" class="h-full" />
        </li>
      </ul>
    </div>
  </div>
</template>
