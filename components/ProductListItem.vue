<script setup lang="ts">
import type { ProductDocument } from '~/prismicio-types'

const props = defineProps<{ product: ProductDocument, isOpen: boolean }>()
defineEmits<{ open: [e: boolean] }>()
const { primaryColor } = useAppConfig().config

const emptyVariation = computed(() => {
  return {
    id: 0,
    label: props.product.data.title,
    price: props.product.data.default_price,

  }
})
</script>

<template>
  <div class="">
    <button class="font-thin uppercase hover:scale-105 text-left" @click="$emit('open', false)">
      {{ product.data.title }}
    </button>
    <div v-if="isOpen" class="bg-white p-4 md:p-6 text-black ">
      <div class="text-lg" :style="{ textTransform: 'unset' }">
        <PrismicRichText :field="product.data.body" />
      </div>
      <div v-if="product.tags" class="flex gap-2 py-4">
        <NuxtLink v-for="tag in product.tags" :key="tag" :to="`/tags/${tag}`" class="rounded-full  text-xs px-3 py-1" :style="{ backgroundColor: primaryColor, viewTransitionName: `item-title-${tag}` }">
          {{ tag }}
        </NuxtLink>
      </div>

      <Transition name="curtain" mode="out-in">
        <ul v-if="product.data.variants.length > 0" class="flex items-start gap-4 h-full overflow-x-auto no-scrollbar w-full">
          <li v-for="(variants, v) in product.data.variants" :key="v" class="h-full">
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
      </Transition>
    </div>
  </div>
</template>
