import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'


const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

pinia.use(
  createPersistedState({
    storage: localStorage,
    key: (id) => `__persisted__${id}`,
  }),
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueAwesomePaginate)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
