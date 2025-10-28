
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppHeader from './components/head/AppHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("AppNav", AppHeader)

app.mount('#app')
