import {GET_MUSIC,IS_SHOW,IS_PAUSE,IS_DISPLAY,CHANGE_SHOW,CHANGE_SHOW2} from './mutations-types'
import {RECOMMEND_CLICK,WORLD_CLICK,MORE_CLICK} from './mutations-types'
import {LOGIN_AFTER,CREATE_INFO,COLLECTED_INFO} from './mutations-types'
import {ADDSHEET,CHANGE_PLAY} from './mutations-types'
import {SINGERITEM} from './mutations-types'
export default {
    [GET_MUSIC](state,payload){
        var index = payload.index
        var url = payload.url
        var songItem = payload.songItem
        state.music = {index,url,songItem}
    },
    [IS_SHOW](state){
        state.show = true
    },
    [IS_PAUSE](state){
        state.Pause = !state.Pause
    },


    [RECOMMEND_CLICK](state){
        state.rank = 'recommend'
    },
    [WORLD_CLICK](state){
        state.rank = 'world'
    },
    [MORE_CLICK](state){
        state.rank = 'more'
    },

    [LOGIN_AFTER](state,payload){
        console.log(payload)
        localStorage.setItem('userInfo',JSON.stringify(payload)) //将传递的数据先保存到localstorage中
        state.userInfo = payload
    },
    [CREATE_INFO](state,payload){
        state.createInfo = payload
    },
    [COLLECTED_INFO](state,payload){
        state.collectInfo = payload
    },

    [IS_DISPLAY](state){
        state.show = false
    },
    [CHANGE_SHOW](state){
        state.mainShow = false
    },
    [CHANGE_SHOW2](state){
        state.mainShow = true
    },

    [ADDSHEET](state,payload){
        state.songSheet = []
        state.songSheet.push(payload)
    },
    [CHANGE_PLAY](state,payload){
        state.music = payload
    },

    [SINGERITEM](state,payload){
        state.singerClass = []
        state.singerClass = payload
    }
}   