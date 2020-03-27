import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    music: {}, //存放音乐的名称 歌手 播放进度 链接
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    // getters
})

export default store