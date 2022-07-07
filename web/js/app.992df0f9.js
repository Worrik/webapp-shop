(function(){"use strict";var t={1689:function(t,e,r){var i=r(144),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"toolbar",attrs:{color:t.$store.state.selectedItems.length?"primary":""}},[t.$store.state.selectedItems.length?r("v-btn",{attrs:{icon:""},on:{click:function(e){t.$store.state.selectedItems=[]}}},[r("v-icon",[t._v("mdi-close")])],1):t._e(),r("v-toolbar-title",[t._v(" "+t._s(t.$store.state.selectedItems.length?t.$store.state.selectedItems.reduce((function(t,e){return t+e.val}),0)+" selected":"Test Shop")+" ")]),r("v-spacer"),t.$store.state.selectedItems.length?r("DialogItem"):t._e()],1),r("CardItems",{attrs:{items:t.items}}),r("div",{staticClass:"text-center"},[r("v-pagination",{staticClass:"mb-2",attrs:{length:t.length,"total-visible":5,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t.$store.state.selectedItems.length?r("div",{staticClass:"pt-10"}):t._e()],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.items.length?t._e():r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(10,(function(t){return r("v-skeleton-loader",{key:t,staticClass:"ma-2",attrs:{width:"150",type:"card"}})})),1),r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CardItem",{attrs:{id:t.id,title:t.title,description:t.description,url:t.url,thumbnailUrl:t.thumbnailUrl,price:t.price||100}})],1)})),0)])},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-badge",{staticClass:"ma-2",attrs:{color:"primary",value:t.$store.getters.getItem(t.id),content:t.$store.getters.getItem(t.id),overlap:""}},[r("v-card",{attrs:{"max-width":"160",flat:""}},[r("v-list-item-avatar",{staticClass:"pt-0 ma-0",attrs:{tile:"",size:"160"}},[r("v-img",{staticClass:"ma-0",attrs:{src:t.url,height:"160",width:"160"},on:{click:function(e){t.dialog=!0}}})],1),r("div",{staticClass:"px-3 pt-3 text-truncate",on:{click:function(e){t.dialog=!0}}},[t._v(t._s(t.title))]),r("v-card-actions",{staticClass:"pt-1"},[r("div",{staticClass:"ml-2",attrs:{color:"secondary"}},[t._v(" $"+t._s(t.price)+" ")]),r("v-spacer"),t.$store.getters.getItem(t.id)?r("div",{staticClass:"d-flex d-inline"},[r("v-fade-transition",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"selected"}]},[r("div",[r("v-btn",{attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:-1})}}},[r("v-icon",[t._v("mdi-minus")])],1),r("v-btn",{staticClass:"ml-1",attrs:{color:"primary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:1})}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$store.commit("setItem",{id:t.id,val:1})}}},[t._v(" ADD ")])],1)],1)],1),r("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-spacer"),r("v-toolbar-items")],1),r("v-card-title",{staticClass:"text-h5"},[r("div",[t._v(t._s(t.title))]),r("v-spacer"),t.$store.getters.getItem(t.id)?r("div",{staticClass:"d-flex d-inline"},[r("v-fade-transition",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"selected"}]},[r("div",[r("v-btn",{attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:-1})}}},[r("v-icon",[t._v("mdi-minus")])],1),r("v-btn",{staticClass:"ml-1",attrs:{color:"primary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:1})}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$store.commit("setItem",{id:t.id,val:1})}}},[t._v(" ADD ")])],1),r("v-card-text",[t._v(" "+t._s(t.description)+" ")]),r("v-card-actions",{staticClass:"pt-1"})],1)],1)],1)},c=[],d={name:"CardItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},url:{type:String},price:{type:String,required:!0}},data:()=>({selected:0,dialog:!1}),created(){this.selected=this.$store.getters.getItem(this.id)},watch:{selected(){this.$store.commit("setItem",{id:this.id,val:this.selected})}}},m=d,u=r(1001),p=r(3453),v=r.n(p),g=r(4633),f=r(680),h=r(26),b=r(7118),I=r(7182),_=r(5827),y=r(6428),C=r(7047),x=r(5457),Z=r(3631),w=r(6656),$=r(7921),V=(0,u.Z)(m,l,c,!1,null,null,null),k=V.exports;v()(V,{VBadge:g.Z,VBtn:f.Z,VCard:h.Z,VCardActions:b.h7,VCardText:b.ZB,VCardTitle:b.EB,VDialog:I.Z,VFadeTransition:_.Z5,VIcon:y.Z,VImg:C.Z,VListItemAvatar:x.Z,VSpacer:Z.Z,VToolbar:w.Z,VToolbarItems:$.lj});var P={name:"CardItems",props:{items:{type:Array,required:!0}},components:{CardItem:k}},A=P,S=r(2177),T=(0,u.Z)(A,n,o,!1,null,null,null),B=T.exports;v()(T,{VSkeletonLoader:S.Z});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.getItems()}}},"v-btn",a,!1),i),[r("v-icon",[t._v("mdi-cart")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"tg-bg",attrs:{loading:"$apollo.loading"}},[r("v-toolbar",{attrs:{color:"primary"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("Cart")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{text:""},on:{click:function(e){return t.sendOrder()}}},[t._v(" Buy ")])],1)],1),r("CartItems",{attrs:{items:t.items}})],1)],1)},q=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CartItem",{attrs:{id:t.id,title:t.title,imageUrl:t.imageUrl,price:t.price}})],1)})),0)},E=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.getters.getItem(t.id)?r("v-card",{staticClass:"mx-auto my-2",attrs:{outlined:""}},[r("v-list-item",{staticClass:"px-2"},[t.imageUrl?r("v-list-item-avatar",{attrs:{tile:"",size:"100"}},[r("v-img",{attrs:{src:t.imageUrl,height:"100",width:"100"}})],1):r("div",{staticClass:"pl-2"}),r("v-list-item-content",{staticClass:"px-0 d-flex align-self-start",staticStyle:{"min-height":"100px"}},[r("v-list-item-title",{staticClass:"title mb-1"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" "+t._s(t.title)+" ")]),r("v-spacer"),r("div",{staticClass:"tg-fg-link-color"},[t._v(" "+t._s(t.$store.getters.getItem(t.id))+"x ")])],1),r("div",{staticClass:"d-flex align-self-end pr-2"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" $"+t._s((parseFloat(t.price)*t.$store.getters.getItem(t.id)).toFixed(2))+" ")]),r("v-spacer"),r("div",[r("v-btn",{attrs:{icon:"",color:"secondary"},on:{click:function(e){return t.remove()}}},[r("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1):t._e()},U=[],F={name:"CartItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},imageUrl:{type:String},price:{type:String}},methods:{remove(){this.$store.commit("setItem",{id:this.id,val:0})}}},L=F,W=r(7620),M=r(8563),N=(0,u.Z)(L,j,U,!1,null,null,null),z=N.exports;v()(N,{VBtn:f.Z,VCard:h.Z,VIcon:y.Z,VImg:C.Z,VListItem:W.Z,VListItemAvatar:x.Z,VListItemContent:M.km,VListItemTitle:M.V9,VSpacer:Z.Z});var R={name:"CartItems",props:{items:{type:Array,required:!0}},components:{CartItem:z}},G=R,H=(0,u.Z)(G,O,E,!1,null,null,null),J=H.exports,K=r(7388),Q={name:"DialogItem",components:{CartItems:J},data:()=>({dialog:!1,items:[]}),methods:{async sendOrder(){await this.$apollo.mutate({mutation:K.ZP`mutation ($orderProducts: [OrderProduct!]!) {
          createOrder(orderProducts: $orderProducts) {
            id
          }
        }`,variables:{orderProducts:this.$store.state.selectedItems}})},async getItems(){const t=await this.$apollo.query({query:K.ZP`query ($ids: [Int!]!) {
          products: productsByIds(ids: $ids) {
            id
            title: name
            price
            imageUrl
          }
        }`,variables:{ids:this.$store.state.selectedItems.map((t=>t.id))}});this.items=t.data.products}}},X=Q,Y=(0,u.Z)(X,D,q,!1,null,null,null),tt=Y.exports;v()(Y,{VBtn:f.Z,VCard:h.Z,VDialog:I.Z,VIcon:y.Z,VSpacer:Z.Z,VToolbar:w.Z,VToolbarItems:$.lj,VToolbarTitle:$.qW});var et={name:"App",components:{CardItems:B,DialogItem:tt},data:()=>({items:[],page:1,per_page:20,length:1}),apollo:{length:{query:K.ZP`query {
        productsCount
      }`,update(t){return parseInt(t.productsCount/this.per_page)+1}},items:{query:K.ZP`query ($page: Int, $perPage: Int) {
        products(page: $page, perPage: $perPage) {
          id
          title: name
          description
          price
          url: imageUrl
        }
      }`,update:t=>t.products,variables(){return{page:this.page,perPage:this.per_page}}}},watch:{page(){window.scrollTo(0,0)}}},rt=et,it=r(7524),at=r(3343),st=r(7877),nt=r(6272),ot=(0,u.Z)(rt,a,s,!1,null,null,null),lt=ot.exports;v()(ot,{VApp:it.Z,VAppBar:at.Z,VBtn:f.Z,VIcon:y.Z,VMain:st.Z,VPagination:nt.Z,VSpacer:Z.Z,VToolbarTitle:$.qW});var ct=r(629);i.Z.use(ct.ZP);var dt=new ct.ZP.Store({state(){return{selectedItems:[]}},getters:{getItem:t=>e=>t.selectedItems.find((t=>t.id===e))?.val||0},mutations:{setItem(t,e){let r=t.selectedItems.findIndex((t=>t.id===e.id));r>-1&&t.selectedItems.splice(r,1),e.val>0&&t.selectedItems.push(e)},addItem(t,e){let r=t.selectedItems.findIndex((t=>t.id===e.id)),i={id:e.id,val:t.selectedItems[r].val+e.val};r>-1&&t.selectedItems.splice(r,1),i.val>0&&t.selectedItems.push(i)}}}),mt=r(1910);i.Z.use(mt.Z);var ut=new mt.Z({theme:{dark:"dark"===window.Telegram.WebApp.colorScheme,themes:{light:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"},dark:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"}}}}),pt=r(2489),vt=r(1462),gt=r(5106),ft=r(6915);let ht=window.location.search.substring(1),bt=new URLSearchParams(ht);const It=(0,gt.L)({uri:`http://localhost:8000/graphql?shop_id=${bt.get("shop")}`,headers:{Authorization:window.Telegram?.WebApp.initData||"query_id=AAFev0cdAAAAAF6_Rx0i9Gra&user=%7B%22id%22%3A491241310%2C%22first_name%22%3A%22%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22ru%22%7D&auth_date=1656838127&hash=e6a357d2dec3c23b16ec9b5b87a7367ab1e1ceb621684af5b862173407d78c3d"}}),_t=new ft.h4,yt=new vt.fe({link:It,cache:_t});var Ct=yt;i.Z.config.productionTip=!1,i.Z.use(pt.ZP);const xt=new pt.ZP({defaultClient:Ct});new i.Z({vuetify:ut,store:dt,apolloProvider:xt,render:t=>t(lt)}).$mount("#app")}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i](s,s.exports,r),s.loaded=!0,s.exports}r.m=t,function(){var t=[];r.O=function(e,i,a,s){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],s=t[d][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(o=!1,s<n&&(n=s));if(o){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,a,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,n=i[0],o=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var d=l(r)}for(e&&e(i);c<n.length;c++)s=n[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(d)},i=self["webpackChunkwebapp_shopping"]=self["webpackChunkwebapp_shopping"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(1689)}));i=r.O(i)})();
//# sourceMappingURL=app.992df0f9.js.map