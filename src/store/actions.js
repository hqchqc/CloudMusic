import {GET_MUSIC} from './mutations-types'
export default{
    AddMusic(context,payload){
        return new Promise((res,req)=>{
            if(payload.url == null){
                res('歌曲暂无版权');
            }else{
                context.commit(GET_MUSIC,payload)
                res('歌曲即将播放')
            }
        })
    },
}