import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    music: {}, //存放音乐的名称 歌手 播放进度 链接
    show: false, //底部播放控件是否显示
    Pause: true, //控制暂停和播放

    rank: 'recommend', //用来判断哪一个榜单被点击

    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},   //用户名称 用户头像 用户ID
    createInfo: [],     //用户创建的歌单
    collectInfo: [],    //用户收藏的歌单
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    // getters
})

export default store