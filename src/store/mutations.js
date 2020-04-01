import {GET_MUSIC,IS_SHOW,IS_PAUSE} from './mutations-types'
import {RECOMMEND_CLICK,WORLD_CLICK,MORE_CLICK} from './mutations-types'
import {LOGIN_AFTER,CREATE_INFO,COLLECTED_INFO} from './mutations-types'
import {setCookie} from '../common/utils'
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
        localStorage.setItem('userInfo',payload.access_token) //将传递的数据先保存到localstorage中
        setCookie(payload.userName,payload.access_token,1)
        state.userInfo = payload
    },
    [CREATE_INFO](state,payload){
        state.createInfo = payload
    },
    [COLLECTED_INFO](state,payload){
        state.collectInfo = payload
    }
}