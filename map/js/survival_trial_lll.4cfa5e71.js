(function(){"use strict";var t={8370:function(t,a,s){var e=s(144),i=s(3726),r=s(3102),o=function(){var t=this,a=t._self._c;return a(i.Z,[a("headbar"),a(r.Z,[a("cont")],1),a("myfooter")],1)},l=[],n=s(4057),c=s(3381),d=s(223),m=s(5255),u=s(7024),_=s(5946),p=s(7690),f=s(6930),v=s(9088),h=s(1584),w=s(4465),g=s(7894),b=s(2515),x=s(756),y=s(5691),Z=s(2732),C=s(9444),k=function(){var t=this,a=t._self._c;return a(i.Z,[a(r.Z,{staticClass:"pt-0"},[a("div",{staticClass:"at py-0 mx-0 px-0"},[a("div",[a(h.Z,{attrs:{height:"200",src:t.map_banner}},[a("h1",{staticClass:"text-center text-h3 white--text pt-12",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.map_name_ch))]),a("h2",{staticClass:"white--text pt-3 pb-0 text-center"},[t._v(t._s(t.map_name_en))]),a("div",{staticClass:"d-flex justify-end"},[a(_.Z,{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:e}){return[a(c.Z,t._g(t._b({staticClass:"mx-2 mb-3",attrs:{fab:"",dark:"",small:"",color:"blue lighten-2"}},"v-btn",e,!1),s),[a(v.Z,{attrs:{dark:""}},[t._v(" mdi-account ")])],1)]}},{key:"default",fn:function(s){return[a(d.Z,[a(Z.Z,{staticClass:"text-h6 px-3",attrs:{color:"indigo",dark:""}},[t._v("作者名單")]),a(m.ZB,[a("p",{staticClass:"text-body-1 ma-6"}),a("div",{domProps:{innerHTML:t._s(t.creator_list)}}),a("p")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}}),a(C.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:e}){return[a("a",{staticClass:"button",attrs:{target:"_blank",href:"https://forms.gle/DV1bWVu774PpvQAr5"}},[a(c.Z,t._g(t._b({staticClass:"mx-2 mb-3",attrs:{fab:"",dark:"",small:"",color:"blue lighten-2"}},"v-btn",e,!1),s),[a(v.Z,{attrs:{dark:""}},[t._v(" mdi-heart ")])],1)],1)]}}])},[a("span",[t._v("回饋")])]),a(C.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:e}){return[a("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:t.fb_share}},[a(c.Z,t._g(t._b({staticClass:"mx-2 mb-3",attrs:{fab:"",dark:"",small:"",color:"blue lighten-2"}},"v-btn",e,!1),s),[a(v.Z,{attrs:{dark:""}},[t._v(" mdi-facebook ")])],1)],1)]}}])},[a("span",[t._v("分享")])]),a(C.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:e}){return[a("a",{attrs:{target:"_blank",href:t.tw_share,"data-show-count":"false"}},[a(c.Z,t._g(t._b({staticClass:"mx-2 mb-3",attrs:{fab:"",dark:"",small:"",color:"blue lighten-2"}},"v-btn",e,!1),s),[a(v.Z,{attrs:{dark:""}},[t._v(" mdi-twitter ")])],1)],1)]}}])},[a("span",[t._v("分享")])])],1)])],1),a(y.Z,{attrs:{centered:"","background-color":"indigo",dark:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.tab_list,(function(s){return a(x.Z,{key:s,staticClass:"px-6"},[a(v.Z,[t._v(t._s(s.icon))]),t._v(t._s(s.txt)+" ")],1)})),1),a(g.Z,{directives:[{name:"show",rawName:"v-show",value:0==t.tab,expression:"tab == 0"}],staticClass:"col-12",attrs:{justify:"center"}},[a(u.Z,{staticClass:"col-12 col-md-7 text-left",attrs:{justify:"center"}},[a("h2",{staticClass:"text-h6 text-sm-h5 indigo--text my-3",staticStyle:{"font-weight":"600"}},[t._v("地圖預告")]),a(d.Z,{staticClass:"mx-9 rounded-lg",attrs:{elevation:"4"}},[a("div",{staticClass:"embed-container"},[a("iframe",{attrs:{src:t.yt,frameborder:"0",allowfullscreen:""}})])]),a(p.Z,{staticClass:"my-6"}),a("h2",{staticClass:"text-h6 text-sm-h5 indigo--text my-3",staticStyle:{"font-weight":"600"}},[t._v("遊戲場景")]),a(g.Z,{staticClass:"mx-6"},t._l(t.img_list,(function(s){return a(u.Z,{key:s,staticClass:"d-flex child-flex col-12 col-md-6"},[a(d.Z,{staticClass:"mx-auto rounded-lg",attrs:{elevation:"2"}},[a(h.Z,{attrs:{height:"250",src:s.img}}),a(m.EB,{staticClass:"text-subtitle-1"},[t._v(t._s(s.name)+" "),a(b.Z),a(c.Z,{attrs:{icon:""},on:{click:function(a){t.show=!t.show}}},[a(v.Z,[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a(f.Fx,[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a(p.Z),a(m.ZB,[a("div",{domProps:{innerHTML:t._s(s.des)}})])],1)])],1)],1)})),1)],1)],1),1==t.tab?a(g.Z,{staticClass:"col-12",attrs:{justify:"center"}},[a(u.Z,{staticClass:"col-12 col-md-7 text-left",attrs:{justify:"center"}},[[a(d.Z,{staticClass:"mx-auto my-2",attrs:{loading:t.loading,"max-width":"70%"}},[a("template",{slot:"progress"},[a(w.Z,{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a(h.Z,{attrs:{height:"30%",src:t.download_img}}),a(m.EB,{staticClass:"pb-0"},[t._v(t._s(t.map_name_ch)+" ["+t._s(t.map_ver)+"]")]),a(m.ZB,{staticClass:"py-0"},[a("div",{staticClass:"text-subtitle-1"},[t._v(t._s(t.mc_ver))])]),a(m.h7,[a("a",{attrs:{target:"_self",href:t.map_link}},[a(c.Z,{staticClass:"ma-2 white--text",attrs:{color:"indigo lighten-1"}},[a(v.Z,{attrs:{dark:""}},[t._v("mdi-download")]),t._v("地圖檔 ")],1)],1),a("a",{attrs:{target:"_self",href:t.res_link}},[a(c.Z,{staticClass:"ma-2 white--text",attrs:{color:"indigo lighten-1"}},[a(v.Z,{attrs:{dark:""}},[t._v("mdi-download")]),t._v("材質包 ")],1)],1)]),a(m.ZB,[a("div",{staticClass:"my-0 d-flex justify-end"},[a("div",{staticClass:"mr-2"},[a(v.Z,{attrs:{color:"indigo lighten-1",dark:""}},[t._v("mdi-update")]),t._v(" "+t._s(t.updated_date)+" ")],1)])])],2)]],2)],1):t._e(),2==t.tab?a(g.Z,{staticClass:"col-12",attrs:{justify:"center"}},[a(u.Z,{staticClass:"col-12 col-md-6 text-left",attrs:{justify:"center"}},[a("div",{staticClass:"mx-6"},[a(n.Z,{attrs:{border:"left","colored-border":"",elevation:"2",color:"red"}},[a("h3",{staticClass:"text-h6 ma-1",staticStyle:{color:"red"}},[t._v("注意事項")]),a("ol",t._l(t.setting_list.warning,(function(s){return a("li",{key:s},[t._v(t._s(s))])})),0)])],1)])],1):t._e(),a(g.Z,{directives:[{name:"show",rawName:"v-show",value:3==t.tab,expression:"tab == 3"}],staticClass:"col-12",attrs:{justify:"center"}},[a(u.Z,{staticClass:"col-12 col-md-7 text-left",attrs:{justify:"center"}},[a("h2",{staticClass:"text-h6 text-sm-h5 indigo--text my-3",staticStyle:{"font-weight":"600"}},[t._v("玩家留言")]),a("div",{staticClass:"mx-6"},[a("div",{staticClass:"fb-comments",attrs:{"data-href":t.fb_comment,"data-width":"100%","data-numposts":"5"}})])])],1)],1)])],1)},j=[],S={data:()=>({show:!1,tab:null,tab_list:[{txt:"地圖簡介",icon:"mdi-book"},{txt:"下載資訊",icon:"mdi-download"},{txt:"設定說明",icon:"mdi-cog"},{txt:"社群討論",icon:"mdi-account-multiple"}],map_banner:"https://www.dreamcity.studio/map/img/survival_trial_lll/banner_dark.jpg",download_img:"https://www.dreamcity.studio/map/img/survival_trial_lll/download.jpg",map_name_ch:"生存試煉III",map_name_en:"survival_trial_lll",map_ver:"V1.2",mc_ver:"生存 / 1.16.5",updated_date:"2021-04-18",map_link:"https://github.com/tony2265/map/releases/download/survival_Survival_Trial_III/V1.2.zip",res_link:"https://github.com/tony2265/resourcepack/releases/download/survival_Survival_Trial_III/Survival_Trial_III.zip",creator_list:"製作：米格、草莓龍、夢夜",story:"",yt:"https://www.youtube.com/embed/7Hmx8AgeuAo",fb_share:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.dreamcity.studio%2Fmap%2Fsurvival_trial_lll&amp%3Bsrc=sdkpreparse",tw_share:"https://twitter.com/intent/tweet?text=生存試煉IIIhttps://www.dreamcity.studio/map/survival_trial_lll",setting_list:{warning:["請不要作弊","請不要破壞出生小島跟祭壇","地獄之星請放入終界箱 終界箱不可以放入其他物品","請以非和平模式進入遊戲","開心的玩"]},fb_comment:"https://www.dreamcity.studio/map/survival_trial_lll",img_list:[{name:"巨人廚房",img:"https://www.dreamcity.studio/map/img/survival_trial_lll/2.jpg",des:"大大蛋糕、小小燭光，今天是誰生日呢？<br>難度：★★★（中等）"},{name:"經典空島",img:"https://www.dreamcity.studio/map/img/survival_trial_lll/3.jpg",des:"經典卻不凡，滿載驚喜的空島<br>難度：★★★（中等）"},{name:"層層獄",img:"https://www.dreamcity.studio/map/img/survival_trial_lll/4.jpg",des:"分為３層的奇怪空島，越往下越危險...<br>難度：★★★★（偏難）"},{name:"星系探險.改",img:"https://www.dreamcity.studio/map/img/survival_trial_lll/1.jpg",des:"致敬二代的星系探險關卡，只是作者換了人OuO….<br>難度：★★★★（偏難）"}],ytb_list:[{name:"三尾木木犬",video:"https://www.youtube.com/watch?v=Hlvw6FwzfxA",img:"https://yt3.ggpht.com/ytc/AKedOLQ0Ep5CkA40A2asmQVgqVcker4pfc9yMvgVVi-ofA=s100-c-k-c0x00ffffff-no-rj"}]})},I=S,O=s(1001),P=(0,O.Z)(I,k,j,!1,null,"15e88710",null),A=P.exports,B=s(3625),T=s(5078),V=s(9396),F=s(1819),z=s(7970),M=s(1667),D=s(4504),E=s(352),H=s(3560),L=s(7316),N=s(3845),Q=function(){var t=this,a=t._self._c;return a(i.Z,[a(B.Z,{attrs:{app:""}},[a(F.Z,{staticClass:"py-0 fill-height",attrs:{fluid:""}},[a(V.Z,{attrs:{size:"40"}},[a(h.Z,{attrs:{src:t.dc_logo,contain:""}})],1),a("a",{attrs:{href:"https://www.dreamcity.studio/",target:"_parent"}},[a(N.qW,{staticClass:"black--text text-h6 mx-3"},[t._v("夢想之都工作室")])],1),t._l(t.links,(function(s){return a("div",{key:s},[t.$vuetify.breakpoint.width>960?a("a",{attrs:{href:s.src,target:"_parent"}},[a(c.Z,{staticClass:"bt",attrs:{text:""}},[t._v(" "+t._s(s.text)+" ")])],1):t._e()])}))],2),a(b.Z),t.$vuetify.breakpoint.width>960?t._e():a(T.Z,{staticClass:"dr",attrs:{color:"indigo darken-1 "},on:{click:function(a){t.drawer=!t.drawer}}})],1),a(L.Z,{attrs:{fixed:"",temporary:"",right:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[a(z.Z,{attrs:{nav:"",dense:""}},[a("div",{staticClass:"ma-2 d-flex justify-center"},[a("v-text",{staticClass:"text-subtitle-1",staticStyle:{"text-align":"center"}},[t._v("目錄")])],1),a(p.Z,{staticClass:"ma-2"}),a(E.Z,{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.links,(function(s,e){return a(M.Z,{key:e,attrs:{href:s.src}},[a(H.Z,[a(v.Z,{domProps:{textContent:t._s(s.icon)}})],1),a(D.km,[a(D.V9,{staticClass:"text-subtitle-2",domProps:{textContent:t._s(s.text)}})],1)],1)})),1)],1)],1)],1)},$=[],q={data:()=>({drawer:null,dc_logo:"https://www.dreamcity.studio/images/logo_0218.png",links:[{icon:"mdi-folder",text:"地圖作品",src:"./"},{icon:"mdi-flag",text:"版權聲明",src:"./copyright"}]})},W=q,K=(0,O.Z)(W,Q,$,!1,null,null,null),Y=K.exports,G=s(8984),J=function(){var t=this,a=t._self._c;return a(i.Z,[a(G.Z,t._b({staticClass:"mx-0 px-0 pb-0"},"v-footer",t.localAttrs,!1),[a(d.Z,{staticClass:"indigo darken-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[a(m.ZB,[t._l(t.icons,(function(s){return a(c.Z,{key:s,staticClass:"mx-2",attrs:{icon:""}},[a("a",{attrs:{href:s.src,target:"_blank"}},[a(v.Z,{attrs:{size:"24px",color:"white"}},[t._v(" "+t._s(s.ico)+" ")])],1)])})),a("a",{attrs:{href:"https://go.dreamcity.studio/dc",target:"_blank"}},[a(c.Z,{staticClass:"mx-4",attrs:{icon:""}},[a("svg",{staticStyle:{"max-width":"24px"},attrs:{fill:"white",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[t._v("Discord")]),a("path",{attrs:{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}})])])],1)],2),a(p.Z,{staticClass:"my-3"}),a(m.ZB,{staticClass:"white--text"},[t._v(" © "+t._s((new Date).getFullYear())+" "),a("strong",[t._v("夢想之都工作室")])])],1)],1)],1)},R=[],U={data:()=>({icons:[{ico:"mdi-facebook",src:"https://www.facebook.com/dreamcity26481414/"},{ico:"mdi-twitter",src:"https://twitter.com/DreamCity_Stu"},{ico:"mdi-instagram",src:"https://www.instagram.com/dreamcity.stu/"},{ico:"mdi-youtube",src:"https://youtube.com/@DreamCity_Stu"},{ico:"mdi-email",src:"mailto:contact@dreamcity.studio"}]})},X=U,tt=(0,O.Z)(X,J,R,!1,null,null,null),at=tt.exports,st={name:"App",components:{headbar:Y,cont:A,myfooter:at}},et=st,it=(0,O.Z)(et,o,l,!1,null,"0c27441b",null),rt=it.exports,ot=s(9860);e.ZP.use(ot.Z);var lt=new ot.Z({});e.ZP.config.productionTip=!1,new e.ZP({vuetify:lt,render:function(t){return t(rt)}}).$mount("#app")}},a={};function s(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(a,e,i,r){if(!e){var o=1/0;for(d=0;d<t.length;d++){e=t[d][0],i=t[d][1],r=t[d][2];for(var l=!0,n=0;n<e.length;n++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](e[n])}))?e.splice(n--,1):(l=!1,r<o&&(o=r));if(l){t.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[e,i,r]}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.j=93}(),function(){var t={93:0};s.O.j=function(a){return 0===t[a]};var a=function(a,e){var i,r,o=e[0],l=e[1],n=e[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(n)var d=n(s)}for(a&&a(e);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(d)},e=self["webpackChunkmap"]=self["webpackChunkmap"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(8370)}));e=s.O(e)})();
//# sourceMappingURL=survival_trial_lll.4cfa5e71.js.map