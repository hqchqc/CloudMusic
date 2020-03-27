import {request} from './request'

export function getRank(){
    return request({
        url: '/toplist/detail'
    })
}

export class Official{
    constructor(list){
        this.content = {}
        this.total = []
        for(var i=0; i<4; i++){
            this.content = {Url: list[i].coverImgUrl,Content: list[i].tracks,Frequency: list[i].updateFrequency}
            this.total.push(this.content)
        }
    }
}

export class Recommend{
    constructor(list) {
        this.content = {}
        this.total = []
        for(var i=4; i<10; i++){
            this.content = {Url: list[i].coverImgUrl, Content: list[i].name, Frequency: list[i].updateFrequency}
            this.total.push(this.content)
        }
    }
}

export class World{
    constructor(list){
        this.content = {}
        this.total = []
        for(var i=10; i<16; i++){
            this.content = {Url: list[i].coverImgUrl, Content: list[i].name, Frequency: list[i].updateFrequency}
            this.total.push(this.content)
        }
    }
}

export class More{
    constructor(data){
        this.content = {}
        this.total = []
        for(var i=16; i<data.list.length; i++){
            this.content = {Url: data.list[i].coverImgUrl, Content: data.list[i].name, Frequency: data.artistToplist.updateFrequency}
            this.total.push(this.content)
        }
        this.content = {Url: data.artistToplist.coverUrl, Content: data.artistToplist.name, Frequency: data.artistToplist.updateFrequency}
        this.total.push(this.content)
        this.content = {Url: data.rewardToplist.coverUrl, Content: data.rewardToplist.name, Frequency: data.artistToplist.updateFrequency}
        this.total.push(this.content)
    }
}
