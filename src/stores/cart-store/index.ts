import type { Product } from '@/interfaces/product-interface'
import { defineStore } from 'pinia'

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
