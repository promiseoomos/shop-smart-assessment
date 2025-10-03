<template>
  <div>
    <ProductFlowLayout>
      <div class="flex gap-2 pt-28">
        <p class="text-neutral-300">Electronics</p>
        <p>/</p>
        <p class="">Smartphones</p>
      </div>

      <div class="flex gap-10 mt-5">
        <div class="w-1/2">
          <img
            v-if="currentProduct"
            class="w-full h-[500px] rounded-lg"
            :src="`../../images/${currentProduct?.image}`"
          />
        </div>

        <div v-if="currentProduct" class="w-1/2 flex flex-col justify-between">
          <div>
            <p class="font-bold text-4xl">{{ currentProduct.name }}</p>
            <p class="mt-2 text-2xl">{{ currentProduct.currency }} {{ currentProduct.price }}</p>

            <p class="text-neutral-500 mt-4" v-html="currentProduct.description"></p>
          </div>

          <button
            v-loading="adding"
            v-if="!checkInCart"
            @click="addToCart"
            class="bg-blue-400 hover:bg-blue-500 w-full flex justify-center font-bold gap-2 cursor-pointer text-white px-4 py-4 mt-5 mb-5 rounded-md"
          >
            <el-icon size="20" class="mt-[2px]"><ShoppingCart /></el-icon> Add to Cart
          </button>
          <button
            v-else
            v-loading="adding"
            @click="addToCart"
            class="bg-blue-600 hover:bg-blue-500 w-full flex justify-center font-bold gap-2 cursor-pointer text-white px-4 py-4 mt-5 mb-5 rounded-md"
          >
            View in Cart
          </button>
        </div>
      </div>

      <div class="mt-16">
        <p class="font-bold text-xl">Related Products</p>
        <div class="flex flex-wrap gap-10 justify-start flex-1 grow mt-3">
          <RelatedProductCard
            v-for="(item, index) in products"
            :key="index"
            :product="item"
            class="cursor-pointer"
            @click="router.push(`/product/${item.id}`)"
          />
        </div>
      </div>
    </ProductFlowLayout>
  </div>
</template>

<script setup lang="ts">
import RelatedProductCard from '@/components/products/RelatedProductCard.vue'
import type { Product } from '@/interfaces/product-interface'
import ProductFlowLayout from '@/layout/ProductFlowLayout.vue'
import { products } from '@/resources/products_list'
// import { category, price_ranges, sort_by } from '@/resources/filters_datas'
import { onMounted, ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart-store'

const route = useRoute()
const router = useRouter()
const cartstore = useCartStore()

const productId = ref('')
const currentProduct = ref<Product>()
const adding = ref(false)
const loading = ref(false)

const getCurrentProduct = () => {
  try {
    loading.value = true

    currentProduct.value = products.find((x: Product) => x.id == productId.value)
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

const checkInCart = computed(() => {
  return currentProduct.value &&
    cartstore.cart.find((x: Product) => x.id == currentProduct?.value?.id)
    ? true
    : false
})

const addToCart = async () => {
  adding.value = true

  try {
    cartstore.addToCart(currentProduct.value)
  } catch (err) {
    console.log(err)
  } finally {
    adding.value = false
  }
}

watch(
  () => route.params.id,
  () => {
    getCurrentProduct()
  },
)

onMounted(() => {
  productId.value = route.params.id ? route.params.id?.toString() : ''

  getCurrentProduct()
})
</script>

<style scoped></style>
