import { apiClient } from '../apiClient'

export default {
  $_getAllProducts(query: string) {
    return apiClient.get(`/products?${query}`)
  },

  $_getSingleProducts(id: string) {
    return apiClient.get(`/products/${id}`)
  },
}
