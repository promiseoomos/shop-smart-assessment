<template>
  <div>
    <ProductFlowLayout>
      <div class="flex gap-2 pt-28">
        <p class="text-neutral-300">Electronics</p>
        <p>/</p>
        <p class="">Smartphones</p>
      </div>

      <div v-if="!fetching" class="flex gap-10 mt-5">
        <div class="w-1/2 border border-neutral-200 rounded-lg p-2">
          <img
            v-if="currentProduct"
            class="w-full h-[500px] rounded-lg"
            :src="`${currentProduct?.image}`"
          />
        </div>

        <div v-if="currentProduct" class="w-1/2 flex flex-col justify-between">
          <div>
            <p class="font-bold text-4xl">{{ currentProduct.title }}</p>
            <p class="mt-2 text-2xl">${{ currentProduct.price }}</p>

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
            @click="router.push(`/store-cart`)"
            class="bg-blue-600 hover:bg-blue-500 w-full flex justify-center font-bold gap-2 cursor-pointer text-white px-4 py-4 mt-5 mb-5 rounded-md"
          >
            View in Cart
          </button>
        </div>
      </div>

      <div v-if="fetching" class="w-full flex gap-10 justify-center">
        <el-skeleton class="gap-2 w-full justify-start mt-3" animated>
          <template #template>
            <div>
              <el-skeleton-item variant="image" style="width: 100%; height: 500px" />
            </div>
          </template>
        </el-skeleton>

        <el-skeleton class="gap-2 w-full" animated>
          <template #template>
            <div>
              <div class="flex flex-col gap-2">
                <el-skeleton-item variant="p" style="width: 400px; height: 30px" class="mt-2" />
                <el-skeleton-item variant="p" style="width: 140px; height: 20px" class="mt-2" />

                <el-skeleton-item variant="p" style="width: 100%; height: 300px" class="mt-4" />

                <el-skeleton-item variant="p" style="width: 100%; height: 40px" class="mt-10" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>

      <div class="mt-16">
        <p class="font-bold text-xl">Related Products</p>
        <div class="flex flex-wrap gap-10 justify-start flex-1 grow mt-3">
          <RelatedProductCard
            v-for="(item, index) in productstore.allProducts.slice(0, 5)"
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
// import { products } from '@/resources/products_list'
// import { category, price_ranges, sort_by } from '@/resources/filters_datas'
import { onMounted, ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart-store'
import { useProductStore } from '@/stores/product-store'
import { generateToast } from '@/composables/useToast'
const productstore = useProductStore()

const route = useRoute()
const router = useRouter()
const cartstore = useCartStore()

const productId = ref('')
const currentProduct = ref<Product>()
const adding = ref(false)
const fetching = ref(false)

const getProduct = async () => {
  fetching.value = true

  if (route.params.id) {
    try {
      const response = await productstore.fetchSingleProduct(route.params.id?.toString())
      currentProduct.value = response.data
    } catch (err) {
      console.log(err)
    } finally {
      fetching.value = false
    }
  } else {
    generateToast('Wrong Product Selected', '', 'error')
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
    generateToast('Item Added to Cart. Proceed to checkout', '', 'success')
  } catch (err) {
    console.log(err)
  } finally {
    adding.value = false
  }
}

watch(
  () => route.params.id,
  () => {
    getProduct()
  },
)

onMounted(() => {
  productId.value = route.params.id ? route.params.id?.toString() : ''

  getProduct()
})
</script>

<style scoped></style>
