(function(){"use strict";var t={1601:function(t,s,a){var i=a(144),e=a(3726),r=a(3102),c=function(){var t=this,s=t._self._c;return s(e.Z,[s("headbar"),s(r.Z,[s("page")],1),s("myfooter")],1)},l=[],o=a(9396),m=a(4741),n=a(7024),u=a(7690),g=a(9088),y=a(7894),d=a(756),w=a(6975),p=a(476),h=a(1550),f=function(){var t=this,s=t._self._c;return s(e.Z,[s(r.Z,{staticClass:"py-0"},[s("div",{staticClass:"at"},[s(y.Z,{staticClass:"col-12 pt-6 mb-5 mx-0",staticStyle:{background:"linear-gradient(45deg,#F2CF7C, #E89A76)"},attrs:{justify:"center"}},[s(n.Z,{staticClass:"col-12 col-md-6 text-center",attrs:{justify:"center"}},[s(o.Z,{attrs:{justify:"center",size:"250",color:"white"}},[s("img",{attrs:{src:t.artlist_avator}})])],1),s(n.Z,{staticClass:"pl-5 col-12 col-md-6 text-center text-md-left"},[s("h1",{staticClass:"display-1 font-weight-bold my-6"},[t._v(" "+t._s(t.artlist_name)+" ")]),s("p",{staticClass:"my-1",domProps:{innerHTML:t._s(t.intro)}}),s("br"),t._l(t.icons,(function(a){return s(m.Z,{key:a,staticClass:"mr-4",attrs:{icon:""}},[s("a",{attrs:{href:a.src,target:"_blank"}},[s(g.Z,{attrs:{"x-large":"",color:"white"}},[t._v(" "+t._s(a.ico)+" ")])],1)])})),s(m.Z,{staticClass:"mr-4",attrs:{icon:""}},[s("a",{attrs:{href:t.tw_share,target:"_blank"}},[s(g.Z,{attrs:{"x-large":"",color:"white"}},[t._v(" mdi-share ")])],1)])],2)],1),s(p.Z,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},t._l(t.tab_list,(function(a){return s(d.Z,{key:a,staticClass:"text-h6 mr-6",staticStyle:{"font-weight":"600"}},[t._v(" "+t._s(a)+" ")])})),1),s(u.Z),s(h.Z,{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[s(w.Z,{key:"作品集"},[s("art")],1),s(w.Z,{key:"委託須知"},[s("info")],1),s(w.Z,{key:"收費與授權"},[s("cost")],1)],1)],1)])],1)},b=[],v=a(2393),_=a(7731),Z=a(1584),x=a(9767),C=a(7935),j=function(){var t=this,s=t._self._c;return s(e.Z,[s(r.Z,{staticClass:"py-0"},[s("div",{staticClass:"at"},[s(_.Z,{staticClass:"my-3",attrs:{mandatory:"","active-class":"primary--text"},model:{value:t.imgtag,callback:function(s){t.imgtag=s},expression:"imgtag"}},t._l(t.tags,(function(a){return s(v.Z,{key:a,staticClass:"text-subtitle-1",attrs:{outlined:""}},[t._v(" "+t._s(a)+" ")])})),1),s(y.Z,{staticClass:"mx-3 mx-lg-16"},t._l(t.filter_list,(function(a){return s(n.Z,{key:a,staticClass:"d-flex child-flex col-6 col-md-4 col-lg-3"},[s(Z.Z,{staticClass:"grey lighten-4 rounded-lg",attrs:{src:a.src,"aspect-ratio":"1"},on:{click:function(s){return t.ShowOverlay(a.src)}}})],1)})),1)],1),t.ov?s(x.Z,{attrs:{opacity:"0.6"},on:{click:function(s){t.ov=!t.ov}}},[[s("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[s(Z.Z,{staticClass:"grey lighten-4 rounded-lg ovly",attrs:{src:t.show_img},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s(y.Z,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s(C.Z,{attrs:{indeterminate:"",color:"blue lighten-1"}})],1)]},proxy:!0}],null,!1,285031792)})],1)]],2):t._e()],1)],1)},k=[],$={data:()=>({show_img:null,ov:!1,imgtag:0,tags:["全部","人物去背","人物建模","表符","壁紙","縮圖"],img_list:[{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/1.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/2.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/3.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/4.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/5.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物去背/6.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物建模/1.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物建模/2.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物建模/3.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物建模/4.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/人物建模/5.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/表符/1.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/表符/2.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/表符/3.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/1.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/2.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/3.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/4.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/5.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/壁紙/6.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/縮圖/1.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/縮圖/2.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/縮圖/3.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/small/縮圖/4.jpg",tag:"縮圖"}],big_list:[{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/1.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/2.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/3.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/4.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/5.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物去背/6.jpg",tag:"人物去背"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物建模/1.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物建模/2.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物建模/3.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物建模/4.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/人物建模/5.jpg",tag:"人物建模"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/表符/1.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/表符/2.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/表符/3.jpg",tag:"表符"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/1.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/2.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/3.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/4.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/5.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/壁紙/6.jpg",tag:"壁紙"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/縮圖/1.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/縮圖/2.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/縮圖/3.jpg",tag:"縮圖"},{src:"https://www.dreamcity.studio/art/img/yeiyu/big/縮圖/4.jpg",tag:"縮圖"}]}),methods:{ShowOverlay(t){let s=this.img_list.map((s=>{if(Object.keys(s).some((a=>-1!=s[a].indexOf(t))))return s}));this.show_img=this.big_list[this.img_list.indexOf(s.filter((t=>void 0!=t))[0])].src,this.ov=!this.ov}},computed:{filter_list(){return 0==this.imgtag?this.img_list:this.img_list.filter((t=>t.tag==this.tags[this.imgtag]))}}},P=$,O=a(1001),S=(0,O.Z)(P,j,k,!1,null,"9b82244a",null),I=S.exports,M=function(){var t=this,s=t._self._c;return s(e.Z,[s(r.Z,{staticClass:"py-0"},[s("div",{staticClass:"con_side"},[s(y.Z,{staticClass:"col-12 mb-5 rounded-lg",attrs:{justify:"center"}},[s(n.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8 text-center",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託流程 ")])])],s(y.Z,{attrs:{justify:"center"}},[s(n.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(g.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-content-paste")]),s("br"),t._v(" 收到委託 ")],1),t.mob()?s(n.Z,{staticClass:"col-2 col-sm-1"},[s(g.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")]),s("br")],1):t._e(),s(n.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(g.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-forum")]),s("br"),t._v(" 草稿確認 ")],1),t.mob()?s(n.Z,{staticClass:"col-2 col-sm-1"},[s(g.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(n.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(g.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-cash-multiple")]),s("br"),t._v(" 收取全款 ")],1),t.mob()?s(n.Z,{staticClass:"col-2 col-sm-1"},[s(g.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(n.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(g.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-image-check")]),s("br"),t._v(" 完稿確認 ")],1),t.mob()?s(n.Z,{staticClass:"col-2 col-sm-1"},[s(g.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(n.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(g.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-email-arrow-left")]),s("br"),t._v(" 寄件完稿 ")],1)],1)],2),s(n.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託規則 ")])])],t._l(t.rule,(function(a){return s("p",{key:a,staticClass:"my-3"},[t._v(" "+t._s(a)+" ")])})),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 修改規範 ")])])],s("p",{staticClass:"my-3"},[t._v("草稿與完稿可各修改3次，每超過一次會加50元。")]),s("p",{staticClass:"my-3"},[t._v("畫錯設定或是小範圍修改不算在修改次數內，只有修改大範圍稿件才會消耗。")]),s("p",{staticClass:"my-3"},[t._v("完稿僅可以修改小範圍，不可改姿勢、服裝等。")])],2)],1)],1)])],1)},T=[],z={data:()=>({rule:["不接有抄襲爭議作品及相關爭議人物角色。","獸人、男性角色及較複雜角色部分會考慮自身功力選擇性拒接。","作品會打水印公開和放入作品集內作為委託範例等等。","貼圖、Q版會適度簡化委託人的角色設定。","委託時需要提前準備好委託資料，如人物三視圖、細節與委託需求等。","完稿檔案規格：300dpi，PNG或JPG。"]}),methods:{mob(){return this.$vuetify.breakpoint.width>720}}},Y=z,D=(0,O.Z)(Y,M,T,!1,null,"11f2553e",null),F=D.exports,G=function(){var t=this,s=t._self._c;return s(e.Z,[s(r.Z,{staticClass:"py-0"},[s("div",{staticClass:"con_side"},[s(y.Z,{staticClass:"col-12 mb-5 rounded-lg",attrs:{justify:"center"}},[s(n.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 收費及報價 ")])])],s("p",{staticClass:"my-3"},[t._v("價目表標示幣值皆為"),s("b",[t._v("新台幣")]),t._v("，且為"),s("b",[t._v("非商業委託")]),t._v("價格。")]),s("p",{staticClass:"my-3"},[t._v("如需商用可再議價，並草稿確認階段後付50%訂金。")]),s("p",{staticClass:"my-3"},[t._v("付款方式：銀行匯款(玉山銀行)／郵局匯款／PayPal。")]),s("p",{staticClass:"my-3"},[s("b",[t._v("PayPal收款會增加2.5%的手續費，還請多加注意。")])]),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 付款方式 ")])])],s("p",{staticClass:"my-3"},[t._v("銀行匯款(玉山銀行) / 郵局匯款 / PayPal")]),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託授權範圍 ")])])],s("p",{staticClass:"my-3"},[t._v(" ⭕ 個人使用可，包含印製少量無營利收藏用周邊"),s("br"),t._v(" ❌ 說是自己畫的、商用、私自二改（除非我同意） ")]),s("p",{staticClass:"my-3"},[t._v(" 個人、工作室、社團商用，為委託報價 x2"),s("br"),t._v(" 公司商用，為委託報價 x3 ")]),s("p",{staticClass:"my-3"},[t._v(" 委託貼圖價位即為商用價，但不可以上傳LINE貼圖小舖，"),s("br"),t._v(" 發現者即收回商用使用權並收取原委託價格一半作為違約金。 ")])],2)],1)],1)])],1)},A=[],B={data:()=>({rule:["不接有抄襲爭議作品及相關爭議人物角色。","獸人、男性角色及較複雜角色部分會考慮自身功力選擇性拒接。","作品會打水印公開和放入作品集內作為委託範例等等。","貼圖、Q版會適度簡化委託人的角色設定。","委託時需要提前準備好委託資料，如人物三視圖、細節與委託需求等。","完稿檔案規格：300dpi，PNG或JPG。"]})},E=B,N=(0,O.Z)(E,G,A,!1,null,"1c5497e9",null),J=N.exports,L={components:{art:I,info:F,cost:J},data:()=>({artlist_name:"夜瑀",artlist_avator:"https://www.dreamcity.studio/about/images/34.jpg",intro:"嗨，我叫夜瑀。一位熱衷於Minecraft動畫的動畫師。<br>目標是利用劇情、建模和光影等，發展出獨特的風格，請多指教！",icons:[{ico:"mdi-facebook",src:"https://www.facebook.com/bscgameplayer"},{ico:"mdi-twitter",src:"https://twitter.com/Yei_Yui"},{ico:"mdi-youtube",src:"https://www.youtube.com/@YeiYu/videos"},{ico:"mdi-email",src:"mailto:\tbscgameplayer@gmail.com"}],tab:null,tab_list:["作品集","委託須知","收費與授權"],tw_share:"https://twitter.com/intent/tweet?text=夜瑀https://www.dreamcity.studio/art/yeiyu"})},Q=L,q=(0,O.Z)(Q,f,b,!1,null,"50d465e0",null),H=q.exports,V=a(3625),W=a(5078),K=a(1819),R=a(7970),U=a(1667),X=a(8492),tt=a(352),st=a(3560),at=a(1083),it=a(2515),et=a(732),rt=a(3845),ct=function(){var t=this,s=t._self._c;return s(e.Z,[s(V.Z,{attrs:{app:""}},[s(K.Z,{staticClass:"py-0 fill-height",attrs:{fluid:""}},[s(o.Z,{attrs:{size:"40"}},[t.$vuetify.theme.dark?t._e():s(Z.Z,{attrs:{src:t.dc_logo,contain:""}}),t.$vuetify.theme.dark?s(Z.Z,{attrs:{src:"https://www.dreamcity.studio/images/logo.ico",contain:""}}):t._e()],1),s("a",{attrs:{href:"https://www.dreamcity.studio/",target:"_parent"}},[s(rt.qW,{staticClass:"text-h6 mx-3",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[s("b",[t._v("夢想之都工作室")])])],1),t._l(t.links,(function(a){return s("div",{key:a},[t.$vuetify.breakpoint.width>960?s("a",{attrs:{href:a.src,target:"_parent"}},[s(m.Z,{staticClass:"bt",attrs:{text:""}},[t._v(" "+t._s(a.text)+" ")])],1):t._e()])}))],2),s(it.Z),t.$vuetify.theme.dark?t._e():s(g.Z,{staticClass:"mr-1"},[t._v("mdi-white-balance-sunny")]),t.$vuetify.theme.dark?s(g.Z,{staticClass:"mr-1"},[t._v("mdi-brightness-2")]):t._e(),s(et.Z,{attrs:{color:"orange","hide-details":""},on:{change:function(s){return t.colorlocal()}},model:{value:t.$vuetify.theme.dark,callback:function(s){t.$set(t.$vuetify.theme,"dark",s)},expression:"$vuetify.theme.dark"}}),t.$vuetify.breakpoint.width>960?t._e():s(W.Z,{staticClass:"dr",attrs:{color:"indigo darken-1 "},on:{click:function(s){t.drawer=!t.drawer}}})],1),s(at.Z,{attrs:{fixed:"",temporary:"",right:""},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[s(R.Z,{attrs:{nav:"",dense:""}},[s("div",{staticClass:"ma-2 d-flex justify-center"},[s("v-text",{staticClass:"text-subtitle-1",staticStyle:{"text-align":"center"}},[t._v("目錄")])],1),s(u.Z,{staticClass:"ma-2"}),s(tt.Z,{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(s){t.selectedItem=s},expression:"selectedItem"}},t._l(t.links,(function(a,i){return s(U.Z,{key:i,attrs:{href:a.src}},[s(st.Z,[s(g.Z,{domProps:{textContent:t._s(a.icon)}})],1),s(X.km,[s(X.V9,{staticClass:"text-subtitle-2",domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1)],1)],1)},lt=[],ot={data:()=>({drawer:null,dc_logo:"https://www.dreamcity.studio/images/logo_0218.png",links:[{icon:"mdi-folder",text:"繪師列表",src:"./"}]}),mounted(){this.$vuetify.theme.dark="true"==window.localStorage.getItem("theme")},methods:{colorlocal(){window.localStorage.setItem("theme",this.$vuetify.theme.dark)}}},mt=ot,nt=(0,O.Z)(mt,ct,lt,!1,null,null,null),ut=nt.exports,gt=a(8175),yt=a(5255),dt=a(8984),wt=function(){var t=this,s=t._self._c;return s(e.Z,[s(dt.Z,t._b({staticClass:"mx-0 px-0 pb-0"},"v-footer",t.localAttrs,!1),[s(gt.Z,{staticClass:"indigo darken-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[s(yt.ZB,[t._l(t.icons,(function(a){return s(m.Z,{key:a,staticClass:"mx-2",attrs:{icon:""}},[s("a",{attrs:{href:a.src,target:"_blank"}},[s(g.Z,{attrs:{size:"24px",color:"white"}},[t._v(" "+t._s(a.ico)+" ")])],1)])})),s("a",{attrs:{href:"https://go.dreamcity.studio/dc",target:"_blank"}},[s(m.Z,{staticClass:"mx-4",attrs:{icon:""}},[s("svg",{staticStyle:{"max-width":"24px"},attrs:{fill:"white",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Discord")]),s("path",{attrs:{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}})])])],1)],2),s(u.Z,{staticClass:"my-3"}),s(yt.ZB,{staticClass:"white--text"},[t._v(" © "+t._s((new Date).getFullYear())+" "),s("strong",[t._v("夢想之都工作室")])])],1)],1)],1)},pt=[],ht={data:()=>({icons:[{ico:"mdi-facebook",src:"https://www.facebook.com/dreamcity26481414/"},{ico:"mdi-twitter",src:"https://twitter.com/DreamCity_Stu"},{ico:"mdi-instagram",src:"https://www.instagram.com/dreamcity.stu/"},{ico:"mdi-youtube",src:"https://youtube.com/@DreamCity_Stu"},{ico:"mdi-email",src:"mailto:contact@dreamcity.studio"}]})},ft=ht,bt=(0,O.Z)(ft,wt,pt,!1,null,null,null),vt=bt.exports,_t={name:"App",components:{headbar:ut,page:H,myfooter:vt}},Zt=_t,xt=(0,O.Z)(Zt,c,l,!1,null,"97e9dc28",null),Ct=xt.exports,jt=a(154);i.ZP.use(jt.Z);var kt=new jt.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:kt,render:function(t){return t(Ct)}}).$mount("#app")}},s={};function a(i){var e=s[i];if(void 0!==e)return e.exports;var r=s[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(s,i,e,r){if(!i){var c=1/0;for(n=0;n<t.length;n++){i=t[n][0],e=t[n][1],r=t[n][2];for(var l=!0,o=0;o<i.length;o++)(!1&r||c>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,r<c&&(c=r));if(l){t.splice(n--,1);var m=e();void 0!==m&&(s=m)}}return s}r=r||0;for(var n=t.length;n>0&&t[n-1][2]>r;n--)t[n]=t[n-1];t[n]=[i,e,r]}}(),function(){a.d=function(t,s){for(var i in s)a.o(s,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={178:0};a.O.j=function(s){return 0===t[s]};var s=function(s,i){var e,r,c=i[0],l=i[1],o=i[2],m=0;if(c.some((function(s){return 0!==t[s]}))){for(e in l)a.o(l,e)&&(a.m[e]=l[e]);if(o)var n=o(a)}for(s&&s(i);m<c.length;m++)r=c[m],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(n)},i=self["webpackChunkmenu"]=self["webpackChunkmenu"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1601)}));i=a.O(i)})();
//# sourceMappingURL=yeiyu.686740f6.js.map