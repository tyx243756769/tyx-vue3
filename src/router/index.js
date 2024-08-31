import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'
// 路由跳转后上个页面未完成的请求取消掉
// import {
//     pendingList
// } from '@/utils/cancelRequest'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

// router.beforeEach((to, from, next) => {
//     next()
// })
export default router