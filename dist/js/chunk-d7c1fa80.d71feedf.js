(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7c1fa80"],{"0de1":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var s=e("1bab");function n(t){return Object(s["a"])({url:"/login/cellphone",method:"post",params:{phone:t.phone,password:t.password},withCredentials:!0})}},"1c66":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"rank-nav",attrs:{id:"RankNavBar"}},[s("title-bar",[s("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[s("img",{attrs:{src:e("7a74")},on:{click:function(a){return t.back()}}}),s("div",{staticClass:"left-font"},[t._v(t._s(t.font))])])])],1)},n=[],i=e("40be"),r=(e("2f62"),{name:"TitleBarLeft",components:{TitleBar:i["a"]},props:{font:{type:String,default:function(){return""}}},methods:{back:function(){this.$store.commit("isShow"),this.$router.back()}}}),o=r,c=(e("ac9f"),e("2877")),l=Object(c["a"])(o,s,n,!1,null,"3ea371a0",null);a["a"]=l.exports},"3f2d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tel"},[e("title-bar-left",{attrs:{font:t.font}}),t.isShow?e("div",{staticClass:"info"},[e("p",[t._v("未注册手机号登录后将自动创建账号")])]):t._e(),t.isShow?e("div",{staticClass:"tel-input"},[e("input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入手机号",oninput:"if(value.length>11)value=value.slice(0,11)"}})]):e("div",{staticClass:"tel-input"},[e("input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"}})]),t.isShow?e("div",{staticClass:"next",on:{click:t.login}},[e("p",[t._v("下一步")])]):e("div",{staticClass:"next",on:{click:t.loginTruly}},[e("p",[t._v("登录")])])],1)},n=[],i=e("1c66"),r=e("0de1"),o={name:"TelName",components:{TitleBarLeft:i["a"]},data:function(){return{font:"手机号登录",isShow:!0,phone:0,password:"",UserInfo:{}}},methods:{login:function(){var t=document.getElementsByClassName("input"),a=t[0].value;if(!/^1[3456789]\d{9}$/.test(a))return this.$toast.show("手机号码有误，请重填"),!1;this.isShow=!1,this.phone=t[0].value,t[0].value=""},loginTruly:function(){var t=this,a=document.getElementsByClassName("input"),e=a[0].value;this.password=e;var s={phone:this.phone,password:this.password};Object(r["a"])(s).then((function(a){a.data.msg?t.$toast.show(a.data.msg):(t.$toast.show("登录成功！"),t.UserInfo={userName:a.data.profile.nickname,userHead:a.data.profile.avatarUrl,userId:a.data.profile.userId},t.$store.commit("loginAfter",t.UserInfo),t.$router.push("/profile/create"))}))}}},c=o,l=(e("5de8"),e("2877")),u=Object(l["a"])(c,s,n,!1,null,"47282011",null);a["default"]=u.exports},"40be":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-bar"},[e("div",{staticClass:"left"},[t._t("left")],2),e("div",{staticClass:"center"},[t._t("center")],2),e("div",{staticClass:"right"},[t._t("right")],2)])},n=[],i={name:"TitleBar"},r=i,o=(e("45a3"),e("2877")),c=Object(o["a"])(r,s,n,!1,null,"253a8e82",null);a["a"]=c.exports},"45a3":function(t,a,e){"use strict";var s=e("f9a7"),n=e.n(s);n.a},"5de8":function(t,a,e){"use strict";var s=e("fc86"),n=e.n(s);n.a},7230:function(t,a,e){},"7a74":function(t,a,e){t.exports=e.p+"img/back.ca13cf10.svg"},ac9f:function(t,a,e){"use strict";var s=e("7230"),n=e.n(s);n.a},f9a7:function(t,a,e){},fc86:function(t,a,e){}}]);
//# sourceMappingURL=chunk-d7c1fa80.d71feedf.js.map