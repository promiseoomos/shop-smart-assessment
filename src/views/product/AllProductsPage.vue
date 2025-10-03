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

            <div class="flex flex-wrap gap-10 justify-start flex-1 grow mt-3">
              <ProductCard
                v-for="(item, index) in products"
                :key="index"
                :product="item"
                class="cursor-pointer"
              />
            </div>
            <div class="flex flex-wrap gap-2 justify-start flex-1 grow mt-3">
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
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { products } from '@/resources/products_list'
import ProductCard from '@/components/products/ProductCard.vue'

// const router = useRouter()
const categoryFilter = ref('all')
const searchString = ref('')
</script>

<style scoped></style>
