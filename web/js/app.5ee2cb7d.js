(function(){"use strict";var t={2079:function(t,e,r){var i=r(144),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"toolbar",attrs:{color:t.$store.state.selectedItems.length?"primary":""}},[t.$store.state.selectedItems.length?r("v-btn",{attrs:{icon:""},on:{click:function(e){t.$store.state.selectedItems=[]}}},[r("v-icon",[t._v("mdi-close")])],1):t._e(),r("v-toolbar-title",[t._v(" "+t._s(t.$store.state.selectedItems.length?t.$store.state.selectedItems.reduce((function(t,e){return t+e.val}),0)+" selected":"Test Shop")+" ")]),r("v-spacer"),t.$store.state.selectedItems.length?r("DialogItem"):t._e()],1),r("CardItems",{attrs:{items:t.items}}),r("div",{staticClass:"text-center"},[r("v-pagination",{staticClass:"mb-2",attrs:{length:t.length,"total-visible":5,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t.$store.state.selectedItems.length?r("div",{staticClass:"pt-10"}):t._e()],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.items.length?t._e():r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(10,(function(t){return r("v-skeleton-loader",{key:t,staticClass:"ma-2",attrs:{width:"150",type:"card"}})})),1),r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CardItem",{attrs:{id:t.id,title:t.title,url:t.url,thumbnailUrl:t.thumbnailUrl,price:t.price||100}})],1)})),0)])},l=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-badge",{staticClass:"ma-2",attrs:{color:"primary",value:t.$store.getters.getItem(t.id),content:t.$store.getters.getItem(t.id),overlap:""}},[r("v-card",{attrs:{"max-width":"160",flat:""}},[r("v-list-item-avatar",{staticClass:"pt-0 ma-0",attrs:{tile:"",size:"160"}},[r("v-img",{staticClass:"ma-0",attrs:{src:t.url,height:"160",width:"160"}})],1),r("div",{staticClass:"px-3 pt-3 text-truncate"},[t._v(t._s(t.title))]),r("v-card-actions",{staticClass:"pt-1"},[r("div",{staticClass:"ml-2",attrs:{color:"secondary"}},[t._v(" "+t._s(t.price)+" $ ")]),r("v-spacer"),t.$store.getters.getItem(t.id)?r("div",{staticClass:"d-flex d-inline"},[r("v-fade-transition",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"selected"}]},[r("div",[r("v-btn",{attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:-1})}}},[r("v-icon",[t._v("mdi-minus")])],1),r("v-btn",{staticClass:"ml-1",attrs:{color:"primary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:1})}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$store.commit("setItem",{id:t.id,val:1})}}},[t._v(" ADD ")])],1)],1)],1)},c=[],d={name:"CardItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},url:{type:String},price:{type:String,required:!0},old_price:{type:Number,required:!1}},data:()=>({selected:0}),created(){this.selected=this.$store.getters.getItem(this.id)},watch:{selected(){this.$store.commit("setItem",{id:this.id,val:this.selected})}}},u=d,m=r(1001),p=r(3453),v=r.n(p),g=r(4633),f=r(680),h=r(26),b=r(7118),I=r(5827),_=r(6428),y=r(7047),Z=r(5457),C=r(3631),w=(0,m.Z)(u,o,c,!1,null,null,null),x=w.exports;v()(w,{VBadge:g.Z,VBtn:f.Z,VCard:h.Z,VCardActions:b.h7,VFadeTransition:I.Z5,VIcon:_.Z,VImg:y.Z,VListItemAvatar:Z.Z,VSpacer:C.Z});var V={name:"CardItems",props:{items:{type:Array,required:!0}},components:{CardItem:x}},$=V,k=r(2177),S=(0,m.Z)($,n,l,!1,null,null,null),P=S.exports;v()(S,{VSkeletonLoader:k.Z});var T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),i),[r("v-icon",[t._v("mdi-cart")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"tg-bg"},[r("v-toolbar",{attrs:{color:"primary"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("Cart")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{text:""}},[t._v(" Buy ")])],1)],1),r("CartItems")],1)],1)},q=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CartItem",{attrs:{id:t.id,title:t.title,imageUrl:t.imageUrl,price:t.price}})],1)})),0)},O=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto my-2",attrs:{outlined:""}},[r("v-list-item",{staticClass:"px-2"},[t.imageUrl?r("v-list-item-avatar",{attrs:{tile:"",size:"100"}},[r("v-img",{attrs:{src:t.imageUrl,height:"100",width:"100"}})],1):r("div",{staticClass:"pl-2"}),r("v-list-item-content",{staticClass:"px-0 d-flex align-self-start",staticStyle:{"min-height":"100px"}},[r("v-list-item-title",{staticClass:"title mb-1"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" "+t._s(t.title)+" ")]),r("v-spacer"),r("div",[t._v(" "+t._s(t.$store.getters.getItem(t.id))+"x ")])],1),r("div",[t._v(t._s(t.description))]),r("div",{staticClass:"d-flex align-self-end pr-2"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" "+t._s(t.price)+" $ × "+t._s(t.$store.getters.getItem(t.id))+" ")]),r("v-spacer"),r("div",[r("v-btn",{attrs:{icon:"",color:"secondary"},on:{click:function(e){return t.remove()}}},[r("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)},j=[],B={name:"CartItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},imageUrl:{type:String},price:{type:String}},methods:{remove(){this.$store.commit("setItem",{id:this.id,val:0})}}},U=B,W=r(7620),D=r(8563),L=(0,m.Z)(U,E,j,!1,null,null,null),M=L.exports;v()(L,{VBtn:f.Z,VCard:h.Z,VIcon:_.Z,VImg:y.Z,VListItem:W.Z,VListItemAvatar:Z.Z,VListItemContent:D.km,VListItemTitle:D.V9,VSpacer:C.Z});var F=r(7388),N={name:"CartItems",components:{CartItem:M},data:()=>({items:[]}),apollo:{items:{query:F.ZP`query ($ids: [Int!]!) {
        products: productsByIds(ids: $ids) {
          id
          title: name
          price
          imageUrl
        }
      }`,update:t=>t.products,variables(){return{ids:this.$store.state.selectedItems.map((t=>t.id))}}}}},z=N,G=(0,m.Z)(z,A,O,!1,null,null,null),H=G.exports,J={name:"DialogItem",components:{CartItems:H},data:()=>({dialog:!1,notifications:!1,sound:!0,widgets:!1})},K=J,Q=r(7182),R=r(6656),X=r(7921),Y=(0,m.Z)(K,T,q,!1,null,null,null),tt=Y.exports;v()(Y,{VBtn:f.Z,VCard:h.Z,VDialog:Q.Z,VIcon:_.Z,VSpacer:C.Z,VToolbar:R.Z,VToolbarItems:X.lj,VToolbarTitle:X.qW});var et={name:"App",components:{CardItems:P,DialogItem:tt},data:()=>({items:[],page:1,per_page:20,length:1}),apollo:{length:{query:F.ZP`query {
        productsCount
      }`,update(t){return parseInt(t.productsCount/this.per_page)+1}},items:{query:F.ZP`query ($page: Int, $perPage: Int) {
        products(page: $page, perPage: $perPage) {
          id
          title: name
          description
          price
          url: imageUrl
        }
      }`,update:t=>t.products,variables(){return{page:this.page,perPage:this.per_page}}}},watch:{page(){window.scrollTo(0,0)}}},rt=et,it=r(7524),at=r(3343),st=r(7877),nt=r(6272),lt=(0,m.Z)(rt,a,s,!1,null,null,null),ot=lt.exports;v()(lt,{VApp:it.Z,VAppBar:at.Z,VBtn:f.Z,VIcon:_.Z,VMain:st.Z,VPagination:nt.Z,VSpacer:C.Z,VToolbarTitle:X.qW});var ct=r(629);i.Z.use(ct.ZP);var dt=new ct.ZP.Store({state(){return{selectedItems:[]}},getters:{getItem:t=>e=>t.selectedItems.find((t=>t.id===e))?.val||0},mutations:{setItem(t,e){let r=t.selectedItems.findIndex((t=>t.id===e.id));r>-1&&t.selectedItems.splice(r,1),e.val>0&&t.selectedItems.push(e)},addItem(t,e){let r=t.selectedItems.findIndex((t=>t.id===e.id)),i={id:e.id,val:t.selectedItems[r].val+e.val};r>-1&&t.selectedItems.splice(r,1),t.selectedItems.push(i)}}}),ut=r(1910);i.Z.use(ut.Z);var mt=new ut.Z({theme:{dark:"dark"===window.Telegram.WebApp.colorScheme,themes:{light:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"},dark:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"}}}}),pt=r(2489),vt=r(1462),gt=r(5106),ft=r(6915);const ht=(0,gt.L)({uri:"/graphql",headers:{Authorization:window.Telegram?.WebApp.initData}}),bt=new ft.h4,It=new vt.fe({link:ht,cache:bt});var _t=It;i.Z.config.productionTip=!1,i.Z.use(pt.ZP);const yt=new pt.ZP({defaultClient:_t});new i.Z({vuetify:mt,store:dt,apolloProvider:yt,render:t=>t(ot)}).$mount("#app")}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i](s,s.exports,r),s.loaded=!0,s.exports}r.m=t,function(){var t=[];r.O=function(e,i,a,s){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],s=t[d][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](i[o])}))?i.splice(o--,1):(l=!1,s<n&&(n=s));if(l){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,a,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,n=i[0],l=i[1],o=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(o)var d=o(r)}for(e&&e(i);c<n.length;c++)s=n[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(d)},i=self["webpackChunkwebapp_shopping"]=self["webpackChunkwebapp_shopping"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(2079)}));i=r.O(i)})();
//# sourceMappingURL=app.5ee2cb7d.js.map