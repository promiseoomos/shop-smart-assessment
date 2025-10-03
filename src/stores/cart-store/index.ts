import type { Product } from '@/interfaces/product-interface'
// import { products } from '@/resources/products_list'
import { defineStore } from 'pinia'
// import authApis from '@/services/authservice'
// import type { DynamicObject } from '@/interfaces/admininterfaces'

export const useCartStore = defineStore('cartstore', {
  persist: true,
  state: () => {
    return {
      cart: [] as Product[],
      trial: 0,
    }
  },
  getters: {},
  actions: {
    addToCart(product: Product | undefined) {
      if (product) {
        const isInCart = this.cart.find((x: Product) => x.id == product.id)

        if (!isInCart) {
          this.cart.push(product)
        }
      }
    },
  },
})
