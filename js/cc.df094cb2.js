(function(){"use strict";var t={5624:function(t,s,a){var i=a(144),r=a(3726),c=a(3102),e=function(){var t=this,s=t._self._c;return s(r.Z,[s("headbar"),s(c.Z,[s("page")],1),s("myfooter")],1)},l=[],o=a(9396),m=a(4741),g=a(7024),n=a(7690),d=a(9088),w=a(7894),u=a(756),p=a(6975),h=a(476),y=a(1550),f=function(){var t=this,s=t._self._c;return s(r.Z,[s(c.Z,{staticClass:"py-0"},[s("div",{staticClass:"at"},[s(w.Z,{staticClass:"col-12 pt-6 mb-5 mx-0",staticStyle:{background:"linear-gradient(45deg,#F2CF7C, #E89A76)"},attrs:{justify:"center"}},[s(g.Z,{staticClass:"col-12 col-md-6 text-center",attrs:{justify:"center"}},[s(o.Z,{attrs:{justify:"center",size:"250",color:"white"}},[s("img",{attrs:{src:t.artlist_avator}})])],1),s(g.Z,{staticClass:"pl-5 col-12 col-md-6 text-center text-md-left"},[s("h1",{staticClass:"display-1 font-weight-bold my-6"},[t._v(" "+t._s(t.artlist_name)+" ")]),s("p",{staticClass:"my-1",domProps:{innerHTML:t._s(t.intro)}}),s("br"),t._l(t.icons,(function(a){return s(m.Z,{key:a,staticClass:"mr-4",attrs:{icon:""}},[s("a",{attrs:{href:a.src,target:"_blank"}},[s(d.Z,{attrs:{"x-large":"",color:"white"}},[t._v(" "+t._s(a.ico)+" ")])],1)])})),s(m.Z,{staticClass:"mr-4",attrs:{icon:""}},[s("a",{attrs:{href:t.tw_share,target:"_blank"}},[s(d.Z,{attrs:{"x-large":"",color:"white"}},[t._v(" mdi-share ")])],1)])],2)],1),s(h.Z,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},t._l(t.tab_list,(function(a){return s(u.Z,{key:a,staticClass:"text-h6 mr-6",staticStyle:{"font-weight":"600"}},[t._v(" "+t._s(a)+" ")])})),1),s(n.Z),s(y.Z,{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[s(p.Z,{key:"作品集"},[s("art")],1),s(p.Z,{key:"委託須知"},[s("info")],1),s(p.Z,{key:"收費與授權"},[s("cost")],1)],1)],1)])],1)},b=[],_=a(2393),v=a(7731),Z=a(1584),j=a(9767),x=a(7935),C=function(){var t=this,s=t._self._c;return s(r.Z,[s(c.Z,{staticClass:"py-0"},[s("div",{staticClass:"at"},[s(v.Z,{staticClass:"my-3",attrs:{mandatory:"","active-class":"primary--text"},model:{value:t.imgtag,callback:function(s){t.imgtag=s},expression:"imgtag"}},t._l(t.tags,(function(a){return s(_.Z,{key:a,staticClass:"text-subtitle-1",attrs:{outlined:""}},[t._v(" "+t._s(a)+" ")])})),1),s(w.Z,{staticClass:"mx-3 mx-lg-16"},t._l(t.filter_list,(function(a){return s(g.Z,{key:a,staticClass:"d-flex child-flex col-6 col-md-4 col-lg-3"},[s(Z.Z,{staticClass:"grey lighten-4 rounded-lg",attrs:{src:a.src,"aspect-ratio":"1"},on:{click:function(s){return t.ShowOverlay(a.src)}}})],1)})),1)],1),t.ov?s(j.Z,{attrs:{opacity:"0.6"},on:{click:function(s){t.ov=!t.ov}}},[[s("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[s(Z.Z,{staticClass:"grey lighten-4 rounded-lg ovly",attrs:{src:t.show_img},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s(w.Z,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s(x.Z,{attrs:{indeterminate:"",color:"blue lighten-1"}})],1)]},proxy:!0}],null,!1,285031792)})],1)]],2):t._e()],1)],1)},k=[],Q={data:()=>({show_img:null,ov:!1,imgtag:0,tags:["全部","Q版","立繪","似顏繪","場景","插畫","頭貼"],img_list:[{src:"https://www.dreamcity.studio/art/img/cc/small/Q版/1.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/small/Q版/2.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/small/Q版/3.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/small/Q版/4.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/small/Q版/5.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/small/半身及全身立繪/1.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/半身及全身立繪/2.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/半身及全身立繪/3.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/半身及全身立繪/4.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/半身及全身立繪/5.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/似顏繪/1.jpg",tag:"似顏繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/似顏繪/2.jpg",tag:"似顏繪"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/1.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/2.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/3.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/4.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/5.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/場景/6.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/1.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/2.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/3.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/4.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/5.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/6.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/7.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/8.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/9.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/10.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/插畫/11.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/small/頭貼/1.jpg",tag:"頭貼"},{src:"https://www.dreamcity.studio/art/img/cc/small/頭貼/2.jpg",tag:"頭貼"},{src:"https://www.dreamcity.studio/art/img/cc/small/頭貼/3.jpg",tag:"頭貼"}],big_list:[{src:"https://www.dreamcity.studio/art/img/cc/big/Q版/1.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/big/Q版/2.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/big/Q版/3.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/big/Q版/4.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/big/Q版/5.jpg",tag:"Q版"},{src:"https://www.dreamcity.studio/art/img/cc/big/半身及全身立繪/1.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/半身及全身立繪/2.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/半身及全身立繪/3.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/半身及全身立繪/4.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/半身及全身立繪/5.jpg",tag:"立繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/似顏繪/1.jpg",tag:"似顏繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/似顏繪/2.jpg",tag:"似顏繪"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/1.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/2.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/3.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/4.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/5.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/場景/6.jpg",tag:"場景"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/1.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/2.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/3.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/4.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/5.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/6.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/7.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/8.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/9.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/10.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/插畫/11.jpg",tag:"插畫"},{src:"https://www.dreamcity.studio/art/img/cc/big/頭貼/1.jpg",tag:"頭貼"},{src:"https://www.dreamcity.studio/art/img/cc/big/頭貼/2.jpg",tag:"頭貼"},{src:"https://www.dreamcity.studio/art/img/cc/big/頭貼/3.jpg",tag:"頭貼"}]}),methods:{ShowOverlay(t){let s=this.img_list.map((s=>{if(Object.keys(s).some((a=>-1!=s[a].indexOf(t))))return s}));this.show_img=this.big_list[this.img_list.indexOf(s.filter((t=>void 0!=t))[0])].src,this.ov=!this.ov}},computed:{filter_list(){return 0==this.imgtag?this.img_list:this.img_list.filter((t=>t.tag==this.tags[this.imgtag]))}}},$=Q,S=a(1001),O=(0,S.Z)($,C,k,!1,null,"1e1e9fee",null),P=O.exports,T=function(){var t=this,s=t._self._c;return s(r.Z,[s(c.Z,{staticClass:"py-0"},[s("div",{staticClass:"con_side"},[s(w.Z,{staticClass:"col-12 mb-5 rounded-lg",attrs:{justify:"center"}},[s(g.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8 text-center",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託流程 ")])])],s(w.Z,{attrs:{justify:"center"}},[s(g.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(d.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-content-paste")]),s("br"),t._v(" 收到委託 ")],1),t.mob()?s(g.Z,{staticClass:"col-2 col-sm-1"},[s(d.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")]),s("br")],1):t._e(),s(g.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(d.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-forum")]),s("br"),t._v(" 草稿確認 ")],1),t.mob()?s(g.Z,{staticClass:"col-2 col-sm-1"},[s(d.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(g.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(d.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-cash-multiple")]),s("br"),t._v(" 收取全款 ")],1),t.mob()?s(g.Z,{staticClass:"col-2 col-sm-1"},[s(d.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(g.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(d.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-image-check")]),s("br"),t._v(" 完稿確認 ")],1),t.mob()?s(g.Z,{staticClass:"col-2 col-sm-1"},[s(d.Z,{attrs:{color:"gray","x-large":""}},[t._v("mdi-arrow-right-bold")])],1):t._e(),s(g.Z,{staticClass:"px-1 col-2 col-sm-1",attrs:{justify:"center"}},[s(d.Z,{attrs:{color:"blue","x-large":""}},[t._v("mdi-email-arrow-left")]),s("br"),t._v(" 寄件完稿 ")],1)],1)],2),s(g.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託規則 ")])])],s("p",{staticClass:"my-3",staticStyle:{"line-height":"4ch"},domProps:{innerHTML:t._s(t.rule)}}),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 修改規範 ")])])],s("p",{staticClass:"my-3",staticStyle:{"line-height":"4ch"},domProps:{innerHTML:t._s(t.fix)}})],2)],1)],1)])],1)},M=[],z={data:()=>({rule:"原創 / 二創 / 夢向 / R18 / CP圖 / ACG圖 皆可委託。<br>作品會打浮水印公開和收錄個人作品集使用。<br>委託時需提前準備好委託資料，如人物三視圖、細節、需求範例...等。<br>完稿檔案規格：300dpi，JPG / PNG，PSD檔需另行討論。<br>委託過程中，如2天內無回應會繼續提醒；5天內未回應則會PO文尋人。<br>曾有棄單者日後再委託需先匯款才能納入排程。",fix:"草稿&底稿可各修改3次，完稿後限2次修改，若要再修則需要再支付_NT.50/次。<br>大範圍修改才會消耗修改次數（EX：更動衣服、姿勢...etc.），小範圍修改或畫錯設定並不算在內。<br>完稿後恕不接受大範圍修改。"}),methods:{mob(){return this.$vuetify.breakpoint.width>720}}},D=z,F=(0,S.Z)(D,T,M,!1,null,"6e7fc6da",null),A=F.exports,E=function(){var t=this,s=t._self._c;return s(r.Z,[s(c.Z,{staticClass:"py-0"},[s("div",{staticClass:"con_side"},[s(w.Z,{staticClass:"col-12 mb-5 rounded-lg",attrs:{justify:"center"}},[s(g.Z,{staticClass:"col-12 pl-md-15 pl-xs-6 pl-8",attrs:{justify:"center"}},[[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 收費及報價 ")])])],s("p",{staticClass:"my-3"},[t._v("價目表標示幣值皆為"),s("b",[t._v("新台幣")]),t._v("，且為"),s("b",[t._v("非商業委託")]),t._v("價格。")]),s("p",{staticClass:"my-3"},[t._v("如需商用可再議價，並草稿確認階段後付50%訂金。")]),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 付款方式 ")])])],s("p",{staticClass:"my-3",domProps:{innerHTML:t._s(t.money)}}),[s(m.Z,{staticClass:"my-5",attrs:{block:"",disabled:"","x-large":""}},[s("h3",{staticClass:"font-weight-bold my-4",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[t._v(" 委託授權範圍 ")])])],s("p",{staticClass:"my-3",staticStyle:{"line-height":"4ch"},domProps:{innerHTML:t._s(t.authorized)}})],2)],1)],1)])],1)},H=[],I={data:()=>({money:"銀行匯款（國泰世華銀行）／郵局匯款 ",authorized:"✅可個人使用，包含印刷少量無營利收藏用周邊<br>❌ 不可商用、說是自己原創、不能二改（除非本人同意） <br>以上皆為非商用價格，如有商業營利須加價:<br>個人、工作室，社團商用價x2，公司商用價x3"})},L=I,G=(0,S.Z)(L,E,H,!1,null,"2e1f417a",null),B=G.exports,N={components:{art:P,info:A,cost:B},data:()=>({artlist_name:"唯唏",artlist_avator:"https://www.dreamcity.studio/art/images/%E5%94%AF%E5%94%8F.jpg",intro:"我是插畫家唯唏，任職於夢想之都工作室。<br>主業是多設系爆肝小孩，3DCG學習中。<br>擅長繪製人物立繪、頭貼、場景、R18圖等。喜歡研究光影、特效與畫面構圖。",icons:[{ico:"mdi-facebook",src:"https://www.facebook.com/profile.php?id=100070008103807"},{ico:"mdi-twitter",src:"https://twitter.com/Mocha_weixi"},{ico:"mdi-email",src:"mailto:sunny2042826@gmail.com"}],tab:null,tab_list:["作品集","委託須知","收費與授權"],tw_share:"https://twitter.com/intent/tweet?text=唯唏https://www.dreamcity.studio/art/cc"})},R=N,q=(0,S.Z)(R,f,b,!1,null,"081537b3",null),J=q.exports,V=a(3625),W=a(5078),X=a(1819),Y=a(7970),K=a(1667),U=a(8492),tt=a(352),st=a(3560),at=a(1083),it=a(2515),rt=a(732),ct=a(3845),et=function(){var t=this,s=t._self._c;return s(r.Z,[s(V.Z,{attrs:{app:""}},[s(X.Z,{staticClass:"py-0 fill-height",attrs:{fluid:""}},[s(o.Z,{attrs:{size:"40"}},[t.$vuetify.theme.dark?t._e():s(Z.Z,{attrs:{src:t.dc_logo,contain:""}}),t.$vuetify.theme.dark?s(Z.Z,{attrs:{src:"https://www.dreamcity.studio/images/logo.ico",contain:""}}):t._e()],1),s("a",{attrs:{href:"https://www.dreamcity.studio/",target:"_parent"}},[s(ct.qW,{staticClass:"text-h6 mx-3",style:"color:"+(t.$vuetify.theme.dark?"white":"black")},[s("b",[t._v("夢想之都工作室")])])],1),t._l(t.links,(function(a){return s("div",{key:a},[t.$vuetify.breakpoint.width>960?s("a",{attrs:{href:a.src,target:"_parent"}},[s(m.Z,{staticClass:"bt",attrs:{text:""}},[t._v(" "+t._s(a.text)+" ")])],1):t._e()])}))],2),s(it.Z),t.$vuetify.theme.dark?t._e():s(d.Z,{staticClass:"mr-1"},[t._v("mdi-white-balance-sunny")]),t.$vuetify.theme.dark?s(d.Z,{staticClass:"mr-1"},[t._v("mdi-brightness-2")]):t._e(),s(rt.Z,{attrs:{color:"orange","hide-details":""},on:{change:function(s){return t.colorlocal()}},model:{value:t.$vuetify.theme.dark,callback:function(s){t.$set(t.$vuetify.theme,"dark",s)},expression:"$vuetify.theme.dark"}}),t.$vuetify.breakpoint.width>960?t._e():s(W.Z,{staticClass:"dr",attrs:{color:"indigo darken-1 "},on:{click:function(s){t.drawer=!t.drawer}}})],1),s(at.Z,{attrs:{fixed:"",temporary:"",right:""},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[s(Y.Z,{attrs:{nav:"",dense:""}},[s("div",{staticClass:"ma-2 d-flex justify-center"},[s("v-text",{staticClass:"text-subtitle-1",staticStyle:{"text-align":"center"}},[t._v("目錄")])],1),s(n.Z,{staticClass:"ma-2"}),s(tt.Z,{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(s){t.selectedItem=s},expression:"selectedItem"}},t._l(t.links,(function(a,i){return s(K.Z,{key:i,attrs:{href:a.src}},[s(st.Z,[s(d.Z,{domProps:{textContent:t._s(a.icon)}})],1),s(U.km,[s(U.V9,{staticClass:"text-subtitle-2",domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1)],1)],1)},lt=[],ot={data:()=>({drawer:null,dc_logo:"https://www.dreamcity.studio/images/logo_0218.png",links:[{icon:"mdi-folder",text:"繪師列表",src:"./"}]}),mounted(){this.$vuetify.theme.dark="true"==window.localStorage.getItem("theme")},methods:{colorlocal(){window.localStorage.setItem("theme",this.$vuetify.theme.dark)}}},mt=ot,gt=(0,S.Z)(mt,et,lt,!1,null,null,null),nt=gt.exports,dt=a(8175),wt=a(5255),ut=a(8984),pt=function(){var t=this,s=t._self._c;return s(r.Z,[s(ut.Z,t._b({staticClass:"mx-0 px-0 pb-0"},"v-footer",t.localAttrs,!1),[s(dt.Z,{staticClass:"indigo darken-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[s(wt.ZB,[t._l(t.icons,(function(a){return s(m.Z,{key:a,staticClass:"mx-2",attrs:{icon:""}},[s("a",{attrs:{href:a.src,target:"_blank"}},[s(d.Z,{attrs:{size:"24px",color:"white"}},[t._v(" "+t._s(a.ico)+" ")])],1)])})),s("a",{attrs:{href:"https://go.dreamcity.studio/dc",target:"_blank"}},[s(m.Z,{staticClass:"mx-4",attrs:{icon:""}},[s("svg",{staticStyle:{"max-width":"24px"},attrs:{fill:"white",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Discord")]),s("path",{attrs:{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}})])])],1)],2),s(n.Z,{staticClass:"my-3"}),s(wt.ZB,{staticClass:"white--text"},[t._v(" © "+t._s((new Date).getFullYear())+" "),s("strong",[t._v("夢想之都工作室")])])],1)],1)],1)},ht=[],yt={data:()=>({icons:[{ico:"mdi-facebook",src:"https://www.facebook.com/dreamcity26481414/"},{ico:"mdi-twitter",src:"https://twitter.com/DreamCity_Stu"},{ico:"mdi-instagram",src:"https://www.instagram.com/dreamcity.stu/"},{ico:"mdi-youtube",src:"https://youtube.com/@DreamCity_Stu"},{ico:"mdi-email",src:"mailto:contact@dreamcity.studio"}]})},ft=yt,bt=(0,S.Z)(ft,pt,ht,!1,null,null,null),_t=bt.exports,vt={name:"App",components:{headbar:nt,page:J,myfooter:_t}},Zt=vt,jt=(0,S.Z)(Zt,e,l,!1,null,"3396e48d",null),xt=jt.exports,Ct=a(154);i.ZP.use(Ct.Z);var kt=new Ct.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:kt,render:function(t){return t(xt)}}).$mount("#app")}},s={};function a(i){var r=s[i];if(void 0!==r)return r.exports;var c=s[i]={exports:{}};return t[i](c,c.exports,a),c.exports}a.m=t,function(){var t=[];a.O=function(s,i,r,c){if(!i){var e=1/0;for(g=0;g<t.length;g++){i=t[g][0],r=t[g][1],c=t[g][2];for(var l=!0,o=0;o<i.length;o++)(!1&c||e>=c)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,c<e&&(e=c));if(l){t.splice(g--,1);var m=r();void 0!==m&&(s=m)}}return s}c=c||0;for(var g=t.length;g>0&&t[g-1][2]>c;g--)t[g]=t[g-1];t[g]=[i,r,c]}}(),function(){a.d=function(t,s){for(var i in s)a.o(s,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={193:0};a.O.j=function(s){return 0===t[s]};var s=function(s,i){var r,c,e=i[0],l=i[1],o=i[2],m=0;if(e.some((function(s){return 0!==t[s]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var g=o(a)}for(s&&s(i);m<e.length;m++)c=e[m],a.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return a.O(g)},i=self["webpackChunkmenu"]=self["webpackChunkmenu"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(5624)}));i=a.O(i)})();
//# sourceMappingURL=cc.df094cb2.js.map