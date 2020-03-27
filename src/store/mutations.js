import {GET_MUSIC} from './mutations-types'

export default {
    [GET_MUSIC](state,payload){
        var index = payload.index
        var url = payload.url
        var songItem = payload.songItem
        state.music = {index,url,songItem}
    },
}