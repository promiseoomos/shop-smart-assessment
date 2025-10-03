import { apiClient } from '../apiClient'

export default {
  $_getAllProducts(query: string) {
    return apiClient.get(`/products?${query}`)
  },

  $_getSingleProduct(id: string) {
    return apiClient.get(`/products/${id}`)
  },
}
