import {request} from './request'

export function getCreate(id){
    return request({
        url: '/user/playlist?uid=' + id
    })
}