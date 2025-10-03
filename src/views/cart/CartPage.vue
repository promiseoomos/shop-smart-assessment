<template>
  <div class="">
    <ProductFlowLayout>
      <div class="flex justify-center gap-8 pt-28 pb-16">
        <div class="w-4/5">
          <p class="text-3xl font-bold">Your Cart</p>

          <div
            v-if="cartstore.cart.length > 0"
            class="mt-12 rounded-lg bg-white min-h-[300px] w-full"
          >
            <CartProductCard
              v-for="(cart, index) in cartstore.cart"
              :key="index"
              class=""
              :cart="cart"
            />
          </div>
          <div
            v-if="cartstore.cart.length == 0"
            class="mt-12 rounded-lg bg-white min-h-[300px] w-full"
          >
            <el-empty :image-size="200" />
          </div>

          <div
            v-if="cartstore.cart.length > 0"
            class="mt-12 rounded-lg bg-white min-h-[300px] p-5 w-full"
          >
            <div>
              <p class="font-bold text-lg">Order Summary</p>
            </div>
          </div>
        </div>
      </div>
    </ProductFlowLayout>
  </div>
</template>

<script setup lang="ts">
import CartProductCard from '@/components/cart/CartProductCard.vue'
import ProductFlowLayout from '@/layout/ProductFlowLayout.vue'
import { useCartStore } from '@/stores/cart-store'

const cartstore = useCartStore()
</script>

<style scoped></style>
