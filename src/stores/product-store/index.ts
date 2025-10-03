import type { Product } from '@/interfaces/product-interface'
import products from '@/services/products'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productstore', {
  persist: true,
  state: () => {
    return {
      allProducts: [] as Product[],
      trial: 0,
    }
  },
  getters: {},
  actions: {
    async fetchAllProducts(query: string) {
      return products.$_getAllProducts(query).then((response) => {
        this.allProducts = response.data
        return response
      })
    },
    async fetchSingleProduct(id: string) {
      return products.$_getSingleProduct(id).then((response) => {
        return response
      })
    },
  },
})
