// 路由的使用
// 1.导入路由对象
import Vue from 'vue'
import vueRouter from 'vue-router'
// import { search } from 'core-js/fn/symbol'

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
const collect = ()=>import('views/Profile/childProfiles/MyCollect.vue')

const login = ()=>import('components/content/login/Login.vue')
const tel_login = ()=>import('components/content/login/TelLogin.vue')

const song_sheet = ()=>import('components/content/songSheet/songSheet.vue')

const create = ()=>import('components/content/profileAbout/Create.vue')
const collected = ()=>import('components/content/profileAbout/Collected.vue')

const album = ()=>import('views/Profile/childProfiles/Album.vue')
const singer = ()=>import('views/Profile/childProfiles/Singer.vue')
const collectVideo = ()=>import('views/Profile/childProfiles/collectVideo.vue')
const column = ()=>import('views/Profile/childProfiles/Column.vue')
const mlog = ()=>import('views/Profile/childProfiles/Mlog.vue')

const playDetail = ()=>import('views/Player/childViews/PlayDetail.vue')

const search = ()=>import('views/Search/Search.vue')
const singerClass = ()=>import('views/SingerClass/SingerClass.vue')

// const translate = ()=>import('views/SingerClass/childSingerClass/Translate')
// const europe = ()=>import('views/SingerClass/childSingerClass/Europe')
// const japan = ()=>import('views/SingerClass/childSingerClass/Japan')
// const korea = ()=>import('views/SingerClass/childSingerClass/Korea')
// const other = ()=>import('views/SingerClass/childSingerClass/Other')

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
        path: '/rank',   //发现-->排行榜
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
        component: profile,
        children: [
            {
                path:'',            // 重定向 -> 新建歌单
                redirect: 'create'
            },
            {
                path: 'create',     // 我的 -> 新建歌单
                component: create
            },
            {
                path: 'collected',  // 我的 -> 收藏歌单
                component: collected
            }
        ]
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
        path: '/rank/:id',  //排行榜(具体)
        component: song_sheet,
        name: '/rank/'
    },
    {
        path: '/find/:id',  //发现页面的歌单推荐(风格推荐 场景推荐 电台推荐)
        component: song_sheet,
        name: '/find/'
    },
    {
        path: '/login',     //登录界面
        component: login,
    },
    {
        path: '/login/tel', //手机号登录
        component: tel_login 
    },
    {
        path: '/collect',   //我的->我的收藏
        component: collect,
        children: [
            {
                path: '',
                redirect: 'album'   //重定向 专辑
            },
            {
                path: 'album',
                component: album  //我的收藏 -> 专辑
            },
            {
                path: 'singer', 
                component: singer //我的收藏 -> 歌手
            },
            {
                path: 'collectVideo', 
                component: collectVideo //我的收藏 -> 视频
            },
            {
                path: 'column', 
                component: column //我的收藏 -> 专栏
            },
            {
                path: 'mlog', 
                component: mlog //我的收藏 -> Mlog
            }
        ]
    },
    {
        path: '/playDetail',
        component: playDetail
    },
    {
        path: '/search',
        component: search
    },
    {
        path: '/singerClass',
        component: singerClass,
        children: [
            {
                path: 'translate',     // 歌手分类 -> 华语
 //               component: translate,
                children:[
                    {
                        path: 'male',      // 华语 -> 男
                    },
                    {
                        path: 'female',    // 华语 -> 女
                    },
                    {
                        path: 'others',     // 华语 -> 其它
                    }
                ]
            },
            {
                path: 'europe',  // 歌手分类 -> 欧美
                //component: europe,
                children:[
                    {
                        path: 'male',      // 欧美 -> 男
                    },
                    {
                        path: 'female',    // 欧美 -> 女
                    },
                    {
                        path: 'others',     // 欧美 -> 其它
                    }
                ]
            },
            {
                path: 'japan',  // 歌手分类 -> 欧美
 //               component: japan,
                children:[
                    {
                        path: 'male',      // 欧美 -> 男
                    },
                    {
                        path: 'female',    // 欧美 -> 女
                    },
                    {
                        path: 'others',     // 欧美 -> 其它
                    }
                ]
            },
            {
                path: 'korea',  // 歌手分类 -> 欧美
//                component: korea,
                children:[
                    {
                        path: 'male',      // 欧美 -> 男
                    },
                    {
                        path: 'female',    // 欧美 -> 女
                    },
                    {
                        path: 'others',     // 欧美 -> 其它
                    }
                ]
            },
            {
                path: 'other',  // 歌手分类 -> 其它
//                component: other,
                children:[
                    {
                        path: 'male',      // 其它 -> 男
                    },
                    {
                        path: 'female',    // 其它 -> 女
                    },
                    {
                        path: 'others',     // 其它 -> 其它
                    }
                ]
            }
        ]
    }
]

// 3.创建路由实例
const router = new vueRouter({
    routes,
    mode: 'history'
})

// 4.导出路由实例
export default router