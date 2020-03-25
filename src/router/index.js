// 路由的使用
// 1.导入路由对象
import Vue from 'vue'
import vueRouter from 'vue-router'

// 解决多次点击同一个路由报错的问题(不影响使用)
// 原因：原因在于Vue-router在3.1之后把$router.push()方法改为了Promise。
//       所以假如没有回调函数，错误信息就会交给全局的路由错误处理，因此就会报上述的错误。
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 2.安装插件
Vue.use(vueRouter)

// 路由的懒加载
const find = ()=> import('views/Find/Find.vue')
const profile = ()=> import('views/Profile/Profile.vue')
const cloud_village = ()=> import('views/CloudVillage/CloudVillage.vue')
const video = ()=> import('views/Video/Video.vue')

const recommend = ()=>import('views/Find/childViews/Recommend.vue')
const songlist = ()=>import('views/Find/childViews/SongList.vue')
const rank = ()=>import('views/Rank/Rank.vue')
const radio = ()=>import('views/Radio/Radio.vue')
const online = ()=>import('views/Find/childViews/OnLine.vue')

const rank_item = ()=>import('views/Rank/childRanks/RankItem.vue')

// 3.1 配置路由映射
const routes = [
    {
        path: '',
        redirect: '/find'   //重定向到 find
    },
    {
        path: '/find',  //1.发现
        component: find,
    },
    {
        path: '/recommend',  //发现-->每日推荐
        component: recommend
    },
    {
        path: '/songlist',   //发现-->歌单
        component: songlist
    },
    {
        path: '/rank',   //发现-->排行榜 id为歌单信息
        component: rank
    },
    {
        path: '/radio',  //发现-->电台
        component: radio
    },
    {
        path: '/online', //发现-->直播
        component: online
    },
    {
        path: '/profile',    //2.我的
        component: profile
    },
    {
        path: '/cloud_village',  //3.云村
        component: cloud_village
    },
    {
        path: '/video',  //4.视频
        component: video
    },
    {
        path: '/rank/:id',
        component: rank_item
    }
]

// 3.创建路由实例
const router = new vueRouter({
    routes,
    mode: 'history'
})

// 4.导出路由实例
export default router