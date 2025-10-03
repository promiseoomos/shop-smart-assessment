import axios from 'axios'
import router from '../router'

// const url = import.meta.env.VITE_BASE_URL
// const mode = import.meta.env.MODE

const token = localStorage.getItem('token')

export const apiClient = axios.create({
  baseURL:
    import.meta.env.MODE == 'development'
      ? `${import.meta.env.VITE_BASE_URL}`
      : `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  },
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 403 &&
      error.response.data.message === 'Token has Expired, Please login again'
    ) {
      router.push({ name: 'login', query: { session: 'expired' } })

      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  },
)
