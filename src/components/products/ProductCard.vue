<template>
  <div class="flex flex-col w-[240px] h-[380px] rounded-lg border border-neutral-100 bg-white">
    <img
      @click="router.push(`/product/${product.id}`)"
      class="w-full h-[65%] rounded-t-lg"
      :src="`../../images/${product.image}`"
    />
    <div class="px-3 pt-3 pb-3">
      <p @click="router.push(`/product/${product.id}`)" class="font-medium">{{ product.name }}</p>
      <p class="text-neutral-400">{{ product.currency }} {{ product.price }}</p>

      <div class="flex gap-4 products-center">
        <button
          v-if="!checkInCart"
          @click="addToCart"
          class="bg-blue-100 w-4/5 flex justify-center gap-2 cursor-pointer text-blue-400 px-4 py-2 mt-5 mb-5 rounded-md"
        >
          <el-icon size="20" class="mt-[2px]"><ShoppingCart /></el-icon>
          Add to Cart
        </button>
        <button
          v-else
          @click="addToCart"
          class="bg-blue-400 w-4/5 flex justify-center gap-2 cursor-pointer text-white px-4 py-2 mt-5 mb-5 rounded-md"
        >
          View in Cart
        </button>
        <div class="mt-7 cursor-pointer">
          <el-icon size="24"><CollectionTag /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/interfaces/product-interface'
import { useCartStore } from '@/stores/cart-store'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const cartstore = useCartStore()
const adding = ref(false)

const router = useRouter()
const props = defineProps<{
  product: Product
}>()

const checkInCart = computed(() => {
  return cartstore.cart.find((x: Product) => x.id == props.product.id) ? true : false
})

const addToCart = async () => {
  adding.value = true

  try {
    cartstore.addToCart(props.product)
  } catch (err) {
    console.log(err)
  } finally {
    adding.value = false
  }
}
</script>

<style scoped></style>
