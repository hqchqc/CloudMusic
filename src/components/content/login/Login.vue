<template>
  <div class="login">
      <div class="logo">
          <img src="~assets/img/common/netmusic.svg">
      </div>
      <div class="btn">
          <div class="tel" @click="login">
              <p>手机号登录</p>
          </div>
          <div class="third">
              <img src="~assets/img/common/email.svg">
          </div>
          <div class="footer">
              <input type="checkbox" class="checkbox">
              <p>同意《用户协议》《隐私政策》《儿童隐私政策》</p>
          </div>
      </div>
      
  </div>
  
</template>

<script>
export default {
    name: 'Login',
    methods:{
        login(){
            var checkbox = document.getElementsByTagName('input')
            if(checkbox[0].checked){
                this.$router.push('login/tel')
            }else{
                this.$toast.show('请勾选用户协议！')
            }
        }
    }
}
</script>

<style scoped>
    .login{
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: #DB2C1F;
        z-index:2;
    }
    .logo{
        background-color: #F22A25;
        width:50px;
        height:50px;
        margin: 25% auto;
        border: 0px solid #ccc;
        border-radius: 25px;
    }
    .logo img{
        width: 40px;
        margin-top: 5px;
        margin-left: 4px;
    }
    .btn{
        text-align: center;
        position: absolute;
        bottom: 3%;
        width: 100%;
        font-size: 12px;
        color:#fff;
    }
    .tel{
        width: 80%;
        height: 26px;
        background-color: #fff;
        margin:0px auto;
        border: 0px solid #ccc;
        border-radius: 13px;
        line-height: 26px;
        color: #FF7272;
        font-weight: 800;
    }
    .third{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .third img{
        width: 30px
    }
    .footer{
        font-size: 5px;
    }
    .checkbox{
        vertical-align: middle;
        margin-right: 5px;
    }
    .footer p{
        display: inline-block;
    }
</style>