import {GET_MUSIC} from './mutations-types'
export default{
    AddMusic(context,payload){
        context.commit(GET_MUSIC,payload)
    }
}