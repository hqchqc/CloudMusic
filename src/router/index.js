// 1.导入路由对象
import Vue from 'vue'
import vueRouter from 'vue-router'

// 2.安装插件
Vue.use(vueRouter)

const find = ()=> import('../views/Find/Find.vue')
const profile = ()=> import('../views/Profile/Profile.vue')
const cloud_village = ()=> import('../views/CloudVillage/CloudVillage.vue')
const video = ()=> import('../views/Video/Video.vue')

// 3.1 配置路由映射
const routes = [
    {
        path: '',
        redirect: '/find'   //重定向到 find
    },
    {
        path: '/Find',  //发现
        component: find
    },
    {
        path: 'profile',    //我的
        component: profile
    },
    {
        path: 'cloud_village',  //云村
        component: cloud_village
    },
    {
        path: 'video',  //视频
        component: video
    }
]

// 3.创建路由实例
const router = new vueRouter({
    routes,
    mode: 'history'
})

// 4.导出路由实例
export default router