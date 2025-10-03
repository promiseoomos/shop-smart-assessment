import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'productsPage',
      component: () => import('../views/product/AllProductsPage.vue'),
    },
    {
      path: '/product/:id',
      name: 'view-product',
      component: () => import('../views/product/SingleProductPage.vue'),
    },
    {
      path: '/store-cart',
      name: 'store-cart',
      component: () => import('../views/cart/CartPage.vue'),
    },
  ],
})

export default router
