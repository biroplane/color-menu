<script setup lang="ts">
defineProps<{ product: any, isOpen: boolean }>()
defineEmits<{ open: [e: boolean] }>()
</script>

<template>
  <div class="">
    <button class="font-thin uppercase hover:scale-105 text-left" @click="$emit('open', false)">
      {{ product.title }}
    </button>
    <div v-if="isOpen" class="bg-white p-4 md:p-6 text-black ">
      <div class="text-lg" style="{'textTransform':'unset'}"><ContentRenderer :value="product.body" /></div>
      <div class="flex gap-2 py-4" v-if="product.tags">
              <UBadge color="secondary" class="rounded-full bg-amber-500" v-for="tag in product.tags" :key="tag" >{{tag}}</UBadge>
            </div>
      <ul class="flex items-start gap-4 h-full overflow-x-auto no-scrollbar w-full" v-if="product.variants">
        <li v-for="(variants, v) in product.variants" :key="v" class="h-full">
          <ProductVariation
            :variation="variants"
            class="h-full"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
