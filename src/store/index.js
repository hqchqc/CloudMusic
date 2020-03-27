import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    music: [] //存放音乐的名称 歌手 播放进度 链接
}

const store = new Vuex.Store({
    state,
    mutations:{
        addMusic(state,payload){
            state.music.push(payload)
        }
    }
    // actions,
    // getters
})

export default store