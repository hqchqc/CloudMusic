(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b7695b5"],{"1c66":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rank-nav",attrs:{id:"RankNavBar"}},[e("title-bar",[e("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[e("img",{attrs:{src:a("7a74")},on:{click:function(s){return t.back()}}}),e("div",{staticClass:"left-font"},[t._v(t._s(t.font))])])])],1)},r=[],i=a("40be"),n=(a("2f62"),{name:"TitleBarLeft",components:{TitleBar:i["a"]},props:{font:{type:String,default:function(){return""}}},methods:{back:function(){this.$store.commit("isShow"),this.$router.back()}}}),o=n,c=(a("ac9f"),a("2877")),u=Object(c["a"])(o,e,r,!1,null,"3ea371a0",null);s["a"]=u.exports},3600:function(t,s,a){t.exports=a.p+"img/head.15f538a7.svg"},"40be":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title-bar"},[a("div",{staticClass:"left"},[t._t("left")],2),a("div",{staticClass:"center"},[t._t("center")],2),a("div",{staticClass:"right"},[t._t("right")],2)])},r=[],i={name:"TitleBar"},n=i,o=(a("45a3"),a("2877")),c=Object(o["a"])(n,e,r,!1,null,"253a8e82",null);s["a"]=c.exports},"45a3":function(t,s,a){"use strict";var e=a("f9a7"),r=a.n(e);r.a},5930:function(t,s,a){"use strict";var e=a("7b60"),r=a.n(e);r.a},"6c30":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"singerClass"}},[a("title-bar-left",{staticClass:"bar",attrs:{font:t.font}}),a("div",{staticClass:"class"},[a("router-link",{attrs:{to:"/singerClass/translate"}},[t._v("华语")]),a("router-link",{attrs:{to:"/singerClass/europe"}},[t._v("欧美")]),a("router-link",{attrs:{to:"/singerClass/japan"}},[t._v("日本")]),a("router-link",{attrs:{to:"/singerClass/korea"}},[t._v("韩国")]),a("router-link",{attrs:{to:"/singerClass/other"}},[t._v("其它")]),a("br"),a("a",{class:{choose:this.show[0]},on:{click:t.gotoMale}},[t._v("男")]),a("a",{class:{choose:this.show[1]},on:{click:t.gotoFemale}},[t._v("女")]),a("a",{class:{choose:this.show[2]},on:{click:t.gotoOthers}},[t._v("其它")])],1),t._m(0),a("router-view"),a("ClassList",{attrs:{data:t.data}})],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hotSinger"},[a("p",[t._v("热门歌手")])])}],i=a("1c66"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list"},[a("ul",t._l(t.$store.state.singerClass,(function(s,e){return a("li",{key:e,staticClass:"listItem"},[a("img",{attrs:{src:s.picUrl}}),a("span",[t._v(t._s(s.name))]),t._m(0,!0),a("div",{staticClass:"follow",on:{click:t.followMe}},[a("p",[t._v("+ 关 注")])])])})),0)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"head"},[e("img",{attrs:{src:a("3600")}})])}],c={name:"Classlist",methods:{followMe:function(){}}},u=c,l=(a("d867"),a("2877")),h=Object(l["a"])(u,n,o,!1,null,"69eb2c4f",null),d=h.exports,m=a("1bab");function f(){return Object(m["a"])({url:"/top/artists"})}function p(t,s){return Object(m["a"])({url:"/artist/list?type="+t+"&area="+s})}var g={name:"SingerClass",components:{TitleBarLeft:i["a"],ClassList:d},methods:{gotoMale:function(){var t=this;this.show[0]=!0,this.show[1]=!1,this.show[2]=!1,this.$route.path.includes("translate")?(p(1,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/male")):this.$route.path.includes("europe")?(p(1,96).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/europe/male")):this.$route.path.includes("japan")?(p(1,8).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/japan/male")):this.$route.path.includes("korea")?(p(1,16).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/korea/male")):this.$route.path.includes("other")?(p(1,0).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/other/male")):(p(1,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/male"))},gotoFemale:function(){var t=this;this.show[0]=!1,this.show[1]=!0,this.show[2]=!1,this.$route.path.includes("translate")?(p(2,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/female")):this.$route.path.includes("europe")?(p(2,96).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/europe/female")):this.$route.path.includes("japan")?(p(2,8).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/japan/female")):this.$route.path.includes("korea")?(p(2,16).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/korea/female")):this.$route.path.includes("other")?(p(2,0).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/other/female")):(p(2,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/female"))},gotoOthers:function(){var t=this;this.show[0]=!1,this.show[1]=!1,this.show[2]=!0,this.$route.path.includes("translate")?(p(3,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/others")):this.$route.path.includes("europe")?(p(3,96).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/europe/others")):this.$route.path.includes("japan")?(p(3,8).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/japan/others")):this.$route.path.includes("korea")?(p(3,16).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/korea/others")):this.$route.path.includes("other")?(p(3,0).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/other/others")):(p(3,7).then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)})),this.$router.push("/singerClass/translate/others"))}},data:function(){return{font:"歌手分类",data:[],show:[!1,!1,!1]}},created:function(){var t=this;f().then((function(s){t.data=s.data.artists,t.$store.commit("singerItem",t.data)}))}},$=g,v=(a("5930"),Object(l["a"])($,e,r,!1,null,"233969c4",null));s["default"]=v.exports},7230:function(t,s,a){},"7a74":function(t,s,a){t.exports=a.p+"img/back.ca13cf10.svg"},"7b60":function(t,s,a){},ac9f:function(t,s,a){"use strict";var e=a("7230"),r=a.n(e);r.a},ade4:function(t,s,a){},d867:function(t,s,a){"use strict";var e=a("ade4"),r=a.n(e);r.a},f9a7:function(t,s,a){}}]);
//# sourceMappingURL=chunk-2b7695b5.5945b8a3.js.map