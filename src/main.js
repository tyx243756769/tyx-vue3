import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import store from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import TYXVue3UI from 'tyx-ui'
import slrCommon from 'slr-common'
import 'slr-common/dist/style.css'
// 按需引入
// import { tyx-table } from 'tyx-ui'
// import 'hb-vue3-ui/style.css'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(TYXVue3UI);
app.use(slrCommon);
app.mount('#app');
