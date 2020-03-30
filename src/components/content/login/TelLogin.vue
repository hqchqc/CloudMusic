<template>
  <div class="tel">
      <title-bar-left :font='font'/>
      <div class="info" v-if="isShow">
          <p>未注册手机号登录后将自动创建账号</p>
      </div>
      <div class="tel-input" v-if="isShow">
          <input type="number" class="input" placeholder="请输入手机号"
          oninput="if(value.length>11)value=value.slice(0,11)" >      
      </div>
      <div class="tel-input" v-else>
          <input type="password" class="input" placeholder="请输入密码">
      </div>
      <div class="next" @click="login" v-if="isShow">
            <p>下一步</p>
      </div>
      <div class="next" @click="loginTruly" v-else>
          <p>登录</p>
      </div>
  </div>
</template>

<script>
import TitleBarLeft from '../titlebar/TitleBarLeft'
import {login} from 'network/login'

export default {
    name: 'TelName',
    components:{
        TitleBarLeft
    },
    data(){
        return{
            font: '手机号登录',
            isShow: true,
            phone: 0,
            password: '',
            UserInfo: {}
        }

    },
    methods:{
        login(){
            var input = document.getElementsByClassName('input')
            var tel = input[0].value
            if(!(/^1[3456789]\d{9}$/.test(tel))){ 
                this.$toast.show('手机号码有误，请重填') 
                return false; 
            }else{
                this.isShow = false
                this.phone = input[0].value
                input[0].value = ''
            } 
        },
        loginTruly(){
            var input = document.getElementsByClassName('input')
            var tel = input[0].value
            this.password = tel
            console.log(this.password)
            var account = {phone: this.phone,password:this.password}
            login(account).then(res=>{
                if(res.data.msg){
                    this.$toast.show(res.data.msg)
                }else{
                    this.$toast.show('登录成功！')
                    console.log(res)
                    this.UserInfo = {userName: res.data.profile.nickname,userHead:res.data.profile.avatarUrl,userId:res.data.profile.userId}
                    this.$store.commit('loginAfter',this.UserInfo)
                    this.$router.push('/profile')
                }
                
            })
        }
    }
}
</script>

<style scoped>
    .tel{
        position: absolute;
        top: 0px;
        z-index: 2;
        width: 100%;
        background-color: #fff;
    }
    .info{
        margin-top: 15px;
        margin-left: 10px;
        font-size: 10px;
        font-weight: 100;
        letter-spacing: 1px;
    }
    .tel-input{
        margin-top: 35px;
        width: 100%;
    }
    .input{
        border:none;
        border-bottom: 1px solid #ccc;
        margin-left: 10px;
        width: 95%;
        font-size: 13px;
        font-weight: 200;
        letter-spacing: 1px;
        outline: none;  /*去除选中时的样式*/ 
        caret-color:#F22A25;  /*不改变字体颜色只改变光标颜色 */
    }
    .next{
        width: 95%;
        margin: 22px auto;
        height: 30px;
        background-color: #FF3A3A;
        text-align: center;
        border: 0px solid #ccc;
        border-radius: 15px;
        color: #fff;
        line-height: 30px;
        font-size: 12px;
    }
</style>