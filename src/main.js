import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filter'

const app =createApp(App);
app.use(router).use(store).mount('#app')
app.config.globalProperties.$filters = filters