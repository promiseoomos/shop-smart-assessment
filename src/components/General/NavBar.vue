<template>
  <div class="px-10 z-99 py-5 bg-neutral-50 border-b fixed w-full top-0">
    <div class="flex justify-between w-full items-center">
      <div class="flex gap-10">
        <div>
          <p @click="router.push('/')" class="text-2xl cursor-pointer font-bold">ShopSmart</p>
        </div>
        <div class="flex gap-10 items-center">
          <p @click="router.push('/')" class="text-neutral-600 cursor-pointer">Home</p>
          <p class="text-neutral-600 cursor-pointer">Categories</p>
          <p class="text-neutral-600 cursor-pointer">Deals</p>
          <p class="text-neutral-600 cursor-pointer">New Arrivals</p>
        </div>
      </div>

      <div class="flex gap-4 align-middle items-center">
        <div class="flex cursor-pointer" @click="router.push(`/store-cart`)">
          <el-icon size="20"><ShoppingCart /></el-icon>
          <p class="text-sm right-2 bg-red-400 rounded-full w-5 h-5 text-center -top-2 relative">
            {{ cartstore.cart.length }}
          </p>
        </div>

        <div class="w-8 h-8 rounded-full border">
          <img class="" src="/images/profile-image.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart-store'

const cartstore = useCartStore()
const router = useRouter()
</script>

<style scoped></style>
