import './global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppHead from './component/Header/AppHead.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppHead', AppHead);

app.mount('#app')
