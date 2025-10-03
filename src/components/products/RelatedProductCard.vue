<template>
  <div class="flex flex-col w-[240px] h-[380px]">
    <img class="w-full h-[65%] rounded-lg" :src="`${product.image}`" />
    <div class="pt-3 flex justify-between">
      <p class="font-medium text-xs">{{ product.title }}</p>
      <p class="text-neutral-400 text-xs">{{ product.currency }} {{ product.price }}</p>
    </div>
    <div class="flex gap-4 justify">
      <button
        @click="router.push(`/product/${product.id}`)"
        class="bg-blue-100 w-4/5 cursor-pointer text-blue-400 px-4 py-2 mt-5 mb-5 rounded-md"
      >
        View Product
      </button>
      <div class="mt-7 cursor-pointer">
        <el-icon size="24"><CollectionTag /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/interfaces/product-interface'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
