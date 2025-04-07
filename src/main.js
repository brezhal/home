/*
 * @Author: yangzhixin
 * @Date: 2025-04-07 09:13:17
 * @LastEditors: yangzhixin
 * @LastEditTime: 2025-04-07 11:19:47
 * @Description: file content
 * @FilePath: /home/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/animate.min.css'
import './assets/inside.css'
import './assets/base.css'
import './assets/home.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
