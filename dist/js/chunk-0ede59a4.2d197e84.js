(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ede59a4"],{"21b9":function(t,e,s){t.exports=s.p+"img/collect.080b0b34.svg"},2426:function(t,e,s){t.exports=s.p+"img/music.1cb79724.svg"},3355:function(t,e,s){"use strict";var i=s("b347"),o=s.n(i);o.a},"3fa1":function(t,e,s){t.exports=s.p+"img/js.b025c1fd.svg"},"414b":function(t,e,s){"use strict";var i=s("898e"),o=s.n(i);o.a},"43d2":function(t,e,s){t.exports=s.p+"img/radio.cecaec03.svg"},"4e3e":function(t,e,s){t.exports=s.p+"img/love.78184f13.svg"},"898e":function(t,e,s){},"8f06":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profile"}},[s("profile-top"),s("my-music"),s("my-info")],1)},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"profile"}},[i("div",{staticClass:"proTop"},[i("div",{staticClass:"head"},[t.isShow?i("img",{attrs:{src:t.userDetail.userHead}}):i("img",{attrs:{src:s("ac6c")}})]),i("div",{staticClass:"font"},[t.isShow?i("p",{staticStyle:{"font-weight":"800"}},[t._v(t._s(t.userDetail.userName))]):i("p",[t._v("登录立享手机电脑多端同步")])]),t.isShow?t._e():i("div",{staticClass:"login",on:{click:function(e){return t.logins()}}},[i("p",[t._v("立即登录")])])]),i("div",{staticClass:"probottom"},t._l(t.item,(function(e,s){return i("div",{key:s,staticClass:"proItem",on:{click:function(e){return t.choose(s)}}},[i("img",{attrs:{src:e.src}}),i("p",[t._v(t._s(t.item[s].font))])])})),0)])},a=[];function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var r={name:"ProfileTop",data:function(){return{item:[{src:s("2426"),font:"本地音乐"},{src:s("94b7"),font:"下载管理"},{src:s("43d2"),font:"我的电台"},{src:s("21b9"),font:"我的收藏"},{src:s("d260"),font:"关注新歌"}],userDetail:{},isShow:!1}},methods:{logins:function(){this.$router.push("/login")},choose:function(t){switch(t){case 0:case 1:this.$toast.show('Sorry，该功能暂不支持，期待后续更新嗷(●"◡"●)');break;case 2:this.$router.push("/radio");break;case 3:this.$router.push("/collect");break;case 4:this.$toast.show('Sorry，该功能暂不支持，期待后续更新嗷(●"◡"●)');break;default:}}},created:function(){var t=c(this.$store.state.userInfo);if("object"==t){this.userDetail=this.$store.state.userInfo;var e=Object.keys(this.$store.state.userInfo).length;e&&(this.isShow=!0)}else 0!==this.$store.state.userInfo.length&&(this.userDetail=JSON.parse(this.$store.state.userInfo),this.isShow=!0)}},l=r,u=(s("3355"),s("2877")),f=Object(u["a"])(l,n,a,!1,null,"64a22581",null),p=f.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"box"},[s("div",{staticClass:"box-content"},t._l(t.detail,(function(e,i){return s("div",{key:i,staticClass:"box-item"},[s("p",{staticClass:"recommend"},[t._v("推荐")]),s("img",{attrs:{src:e.pic}}),s("p",{staticClass:"detail"},[t._v(t._s(e.detail))]),s("p",{staticClass:"model"},[t._v(t._s(e.model))])])})),0)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMusic"},[s("p",[t._v("我的音乐")])])}],m={name:"MyMusic",data:function(){return{detail:[{pic:s("4e3e"),model:"心动模式",detail:"我喜欢的音乐"},{pic:s("f25c"),model:"私人FM",detail:"你的私人曲库"},{pic:s("3fa1"),model:"爵士电台",detail:"最in爵士乐"},{pic:s("ac0f"),model:"驾驶模式",detail:"开车也能安全听音乐"},{pic:s("d987"),model:"云村正能量",detail:"聆听那些经典歌曲"}]}}},h=m,b=(s("414b"),Object(u["a"])(h,d,v,!1,null,"6c26f168",null)),g=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myInfo"},[s("div",{staticClass:"songlist"},[s("router-link",{staticClass:"created",attrs:{to:"/profile/create","active-class":"active"}},[t._v("创建歌单 "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.userInfo,expression:"$store.state.userInfo"}],staticStyle:{"font-size":"5px"}},[t._v(t._s(t.$store.state.createInfo.length))])]),s("router-link",{staticClass:"created",attrs:{to:"/profile/collected","active-class":"active"}},[t._v("收藏歌单 "),s("span",{staticStyle:{"font-size":"5px"}},[t._v(t._s(t.$store.state.collectInfo.length))])]),s("keep-alive",[s("router-view")],1)],1)])},y=[],w={name:"MyInfo"},x=w,$=(s("d362"),Object(u["a"])(x,_,y,!1,null,"6aa0ae46",null)),C=$.exports,S={name:"Profile",components:{ProfileTop:p,MyMusic:g,MyInfo:C}},k=S,I=Object(u["a"])(k,i,o,!1,null,"65bc0eb8",null);e["default"]=I.exports},"94b7":function(t,e,s){t.exports=s.p+"img/download.aadaeff4.svg"},a5e3:function(t,e,s){},ac0f:function(t,e,s){t.exports=s.p+"img/car.40847867.svg"},ac6c:function(t,e,s){t.exports=s.p+"img/head.4016eced.svg"},b347:function(t,e,s){},d260:function(t,e,s){t.exports=s.p+"img/song.7ec03ce3.svg"},d362:function(t,e,s){"use strict";var i=s("a5e3"),o=s.n(i);o.a},d987:function(t,e,s){t.exports=s.p+"img/book.bbe36b63.svg"},f25c:function(t,e,s){t.exports=s.p+"img/fm.ce8b4e42.svg"}}]);
//# sourceMappingURL=chunk-0ede59a4.2d197e84.js.map