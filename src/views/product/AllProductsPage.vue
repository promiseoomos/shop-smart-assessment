<template>
  <div class="">
    <ProductFlowLayout>
      <div class="flex gap-8 pt-28 pb-16">
        <div class="w-/5">
          <p class="text-lg font-bold">Filters</p>

          <div class="mt-5">
            <div>
              <p>Category</p>

              <el-select
                v-model="categoryFilter"
                placeholder="Select"
                size="large"
                style="width: 240px"
                class="mt-2"
              >
                <el-option
                  v-for="item in category"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                />
              </el-select>
            </div>

            <div class="mt-5">
              <p>Price Range</p>

              <el-select
                v-model="categoryFilter"
                placeholder="Select"
                size="large"
                style="width: 240px"
                class="mt-2"
              >
                <el-option
                  v-for="item in price_ranges"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                />
              </el-select>
            </div>

            <div class="mt-5">
              <p>Sort By</p>

              <el-select
                v-model="categoryFilter"
                placeholder="Select"
                size="large"
                style="width: 240px"
                class="mt-2"
              >
                <el-option
                  v-for="item in sort_by"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </div>

        <div class="w-4/5">
          <div>
            <el-input
              v-model="searchString"
              style="width: 100%; height: 38px"
              placeholder="Search Products"
              :prefix-icon="Search"
            />
          </div>

          <div class="mt-7">
            <p class="text-lg font-bold">Products</p>

            <div v-if="!fetching" class="flex flex-wrap gap-3 justify-start mt-3">
              <ProductCard
                v-for="(item, index) in products"
                :key="index"
                :product="item"
                class="cursor-pointer"
              />
            </div>
            <div v-if="fetching" class="flex flex-wrap gap-2 justify-start flex-1 grow mt-3">
              <el-skeleton
                class="flex flex-wrap gap-2 justify-start flex-1 grow mt-3"
                v-for="n in 10"
                :key="n"
                animated
              >
                <template #template>
                  <div>
                    <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                    <div class="flex flex-col gap-2">
                      <el-skeleton-item
                        variant="p"
                        style="width: 200px; height: 10px"
                        class="mt-2"
                      />
                      <el-skeleton-item
                        variant="p"
                        style="width: 140px; height: 10px"
                        class="mt-2"
                      />

                      <el-skeleton-item
                        variant="p"
                        style="width: 240px; height: 40px"
                        class="mt-4"
                      />
                    </div>
                  </div>
                </template>
              </el-skeleton>
            </div>
            <div v-if="products.length == 0 && !fetching" class="w-full flex justify-center mt-10">
              <el-empty :image-size="200" />
            </div>
          </div>
        </div>
      </div>
    </ProductFlowLayout>
  </div>
</template>

<script setup lang="ts">
// import NavBar from '@/components/General/NavBar.vue'
import ProductFlowLayout from '@/layout/ProductFlowLayout.vue'
import { category, price_ranges, sort_by } from '@/resources/filters_datas'
import { onMounted, ref, watch } from 'vue'
// import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
// import { products } from '@/resources/products_list'
import ProductCard from '@/components/products/ProductCard.vue'
import { useProductStore } from '@/stores/product-store'
import { type Product } from '@/interfaces/product-interface'

// const router = useRouter()
const productstore = useProductStore()
const categoryFilter = ref('all')
const searchString = ref('')
const fetching = ref(false)
const queryString = ref('page=1&perPage=20')
const page = ref(1)
const intervalnum = ref(20)

const products = ref<Product[]>([])

const getProducts = async () => {
  fetching.value = true

  try {
    const response = await productstore.fetchAllProducts(queryString.value)
    products.value = response.data
  } catch (err) {
    console.log(err)
  } finally {
    fetching.value = false
  }
}

watch(searchString, async (newval) => {
  if (newval.length > 0) {
    queryString.value = `page=${page.value}&perPage=${intervalnum.value}&search=${newval}`
    await getProducts()
  } else {
    queryString.value = `page=${page.value}&perPage=${intervalnum.value}`
    await getProducts()
  }
})

onMounted(() => {
  getProducts()
})
</script>

<style scoped></style>
