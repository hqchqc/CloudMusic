<template>
  <div class="toast" v-show="ToastShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data() {
        return {
            ToastShow:false,
            message:''
        }
    },
    methods: {
        show(message,duration=1500){
            this.ToastShow = true;
            this.message = message;

            setTimeout(()=>{
                this.ToastShow = false;
                this.message = ''
            },duration)
        }
    },
}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top: 80%;
        transform: translate(-50%,-50%);
        background-color: rgba(0,0,0,0.75);
        color: #fff;
        padding: 8px 10px;
        z-index: 999;
        border: 0px solid #ccc;
        border-radius: 15px;
        font-size: 12px;
    }
</style>