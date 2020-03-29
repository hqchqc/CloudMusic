import {GET_MUSIC,IS_SHOW,IS_PAUSE} from './mutations-types'
import {RECOMMEND_CLICK,WORLD_CLICK,MORE_CLICK} from './mutations-types'

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
}