<template>
  <div class="w-full flex justify-between p-4 py-10 border-b border border-neutral-100">
    <div class="flex gap-4">
      <div class="w-40 h-52 border border-neutral-200 rounded-lg p-3">
        <img class="w-full rounded-lg" :src="`${cart?.image}`" />
      </div>

      <div class="flex flex-col justify-between">
        <p class="text-lg font-semibold">{{ cart.title }}</p>

        <div class="flex">
          <p
            class="text-center cursor-pointer w-10 align-middle px-1 py-2 border border-neutral-200 rounded-l-lg"
            @click="quantity != 1 ? (quantity = quantity - 1) : 1"
          >
            -
          </p>
          <input
            v-model="quantity"
            class="text-center w-10 align-middle px-1 py-2 border border-neutral-200"
          />
          <p
            @click="quantity = quantity + 1"
            class="text-center cursor-pointer w-10 align-middle px-1 py-2 border border-neutral-200 rounded-r-lg"
          >
            +
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between align-middle">
      <p class="mt-2 text-2xl">${{ cart.price }}</p>

      <div @click="removeFromCart" class="flex gap-4 text-blue-500 cursor-pointer">
        <el-icon class="mt-1"><Delete /></el-icon>
        <p>Remove</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/interfaces/product-interface'
import { useCartStore } from '@/stores/cart-store'
import { ref } from 'vue'

const cartstore = useCartStore()
const adding = ref(false)

const props = defineProps<{
  cart: Product
}>()
const quantity = ref(1)

const removeFromCart = async () => {
  adding.value = true

  try {
    cartstore.removeFromCart(props.cart)
  } catch (err) {
    console.log(err)
  } finally {
    adding.value = false
  }
}
</script>

<style scoped></style>
