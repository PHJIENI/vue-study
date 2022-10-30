import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "./route"

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')
