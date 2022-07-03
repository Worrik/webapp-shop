(function(){"use strict";var t={1162:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"toolbar",attrs:{color:t.$store.state.selectedItems.length?"primary":""}},[t.$store.state.selectedItems.length?r("v-btn",{attrs:{icon:""},on:{click:function(e){t.$store.state.selectedItems=[]}}},[r("v-icon",[t._v("mdi-close")])],1):t._e(),r("v-toolbar-title",[t._v(" "+t._s(t.$store.state.selectedItems.length?t.$store.state.selectedItems.reduce((function(t,e){return t+e.val}),0)+" selected":"Test Shop")+" ")]),r("v-spacer"),t.$store.state.selectedItems.length?r("DialogItem"):t._e()],1),r("CardItems",{attrs:{items:t.items}}),r("div",{staticClass:"text-center"},[r("v-pagination",{staticClass:"mb-2",attrs:{length:t.length,"total-visible":5,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t.$store.state.selectedItems.length?r("div",{staticClass:"pt-10"}):t._e()],1)],1)},a=[],s=r(3208),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.items.length?t._e():r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(10,(function(t){return r("v-skeleton-loader",{key:t,staticClass:"ma-2",attrs:{width:"150",type:"card"}})})),1),r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CardItem",{attrs:{id:t.id,title:t.title,url:t.url,thumbnailUrl:t.thumbnailUrl,price:t.price||100}})],1)})),0)])},l=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-badge",{staticClass:"ma-2",attrs:{color:"primary",value:t.$store.getters.getItem(t.id),content:t.$store.getters.getItem(t.id),overlap:""}},[r("v-card",{attrs:{"max-width":"160",flat:""}},[r("v-list-item-avatar",{staticClass:"pt-0 ma-0",attrs:{tile:"",size:"160"}},[r("v-img",{staticClass:"ma-0",attrs:{src:t.url,height:"160",width:"160"}})],1),r("div",{staticClass:"px-3 pt-3 text-truncate"},[t._v(t._s(t.title))]),r("v-card-actions",{staticClass:"pt-1"},[r("div",{staticClass:"ml-2",attrs:{color:"secondary"}},[t._v(" $"+t._s(t.price)+" ")]),r("v-spacer"),t.$store.getters.getItem(t.id)?r("div",{staticClass:"d-flex d-inline"},[r("v-fade-transition",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"selected"}]},[r("div",[r("v-btn",{attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:-1})}}},[r("v-icon",[t._v("mdi-minus")])],1),r("v-btn",{staticClass:"ml-1",attrs:{color:"primary",fab:"","x-small":""},on:{click:function(e){return t.$store.commit("addItem",{id:t.id,val:1})}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$store.commit("setItem",{id:t.id,val:1})}}},[t._v(" ADD ")])],1)],1)],1)},d=[],u=(r(9653),{name:"CardItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},url:{type:String},price:{type:String,required:!0},old_price:{type:Number,required:!1}},data:function(){return{selected:0}},created:function(){this.selected=this.$store.getters.getItem(this.id)},watch:{selected:function(){this.$store.commit("setItem",{id:this.id,val:this.selected})}}}),m=u,p=r(1001),v=r(3453),f=r.n(v),g=r(4633),h=r(680),b=r(26),I=r(7118),y=r(5827),Z=r(6428),_=r(7047),w=r(5457),C=r(3631),x=(0,p.Z)(m,c,d,!1,null,null,null),$=x.exports;f()(x,{VBadge:g.Z,VBtn:h.Z,VCard:b.Z,VCardActions:I.h7,VFadeTransition:y.Z5,VIcon:Z.Z,VImg:_.Z,VListItemAvatar:w.Z,VSpacer:C.Z});var V={name:"CardItems",props:{items:{type:Array,required:!0}},components:{CardItem:$}},k=V,P=r(2177),S=(0,p.Z)(k,o,l,!1,null,null,null),T=S.exports;f()(S,{VSkeletonLoader:P.Z});var O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.getItems()}}},"v-btn",i,!1),n),[r("v-icon",[t._v("mdi-cart")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"tg-bg"},[r("v-toolbar",{attrs:{color:"primary"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("Cart")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{text:""},on:{click:function(e){return t.sendOrder()}}},[t._v(" Buy ")])],1)],1),r("CartItems",{attrs:{items:t.items}})],1)],1)},q=[],A=r(7906),E=r(6198),j=(r(1249),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column pa-4"},t._l(t.items,(function(t){return r("div",{key:t.id},[r("CartItem",{attrs:{id:t.id,title:t.title,imageUrl:t.imageUrl,price:t.price}})],1)})),0)}),B=[],U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.getters.getItem(t.id)?r("v-card",{staticClass:"mx-auto my-2",attrs:{outlined:""}},[r("v-list-item",{staticClass:"px-2"},[t.imageUrl?r("v-list-item-avatar",{attrs:{tile:"",size:"100"}},[r("v-img",{attrs:{src:t.imageUrl,height:"100",width:"100"}})],1):r("div",{staticClass:"pl-2"}),r("v-list-item-content",{staticClass:"px-0 d-flex align-self-start",staticStyle:{"min-height":"100px"}},[r("v-list-item-title",{staticClass:"title mb-1"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" "+t._s(t.title)+" ")]),r("v-spacer"),r("div",{staticClass:"tg-fg-link-color"},[t._v(" "+t._s(t.$store.getters.getItem(t.id))+"x ")])],1),r("div",{staticClass:"d-flex align-self-end pr-2"},[r("div",{staticClass:"d-flex align-self-center"},[t._v(" $"+t._s((parseFloat(t.price)*t.$store.getters.getItem(t.id)).toFixed(2))+" ")]),r("v-spacer"),r("div",[r("v-btn",{attrs:{icon:"",color:"secondary"},on:{click:function(e){return t.remove()}}},[r("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1):t._e()},L=[],W={name:"CartItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},imageUrl:{type:String},price:{type:String}},methods:{remove:function(){this.$store.commit("setItem",{id:this.id,val:0})}}},D=W,F=r(7620),M=r(8563),N=(0,p.Z)(D,U,L,!1,null,null,null),z=N.exports;f()(N,{VBtn:h.Z,VCard:b.Z,VIcon:Z.Z,VImg:_.Z,VListItem:F.Z,VListItemAvatar:w.Z,VListItemContent:M.km,VListItemTitle:M.V9,VSpacer:C.Z});var R,G,H,J,K={name:"CartItems",props:{items:{type:Array,required:!0}},components:{CartItem:z}},Q=K,X=(0,p.Z)(Q,j,B,!1,null,null,null),Y=X.exports,tt=r(7388),et={name:"DialogItem",components:{CartItems:Y},data:function(){return{dialog:!1,items:[]}},methods:{sendOrder:function(){var t=this;return(0,E.Z)((0,A.Z)().mark((function e(){return(0,A.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apollo.mutate({mutation:(0,tt.ZP)(R||(R=(0,s.Z)(["mutation ($orderProducts: [OrderProduct!]!) {\n          createOrder(orderProducts: $orderProducts) {\n            id\n          }\n        }"]))),variables:{orderProducts:t.$store.state.selectedItems}});case 2:case"end":return e.stop()}}),e)})))()},getItems:function(){var t=this;return(0,E.Z)((0,A.Z)().mark((function e(){var r;return(0,A.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apollo.query({query:(0,tt.ZP)(G||(G=(0,s.Z)(["query ($ids: [Int!]!) {\n          products: productsByIds(ids: $ids) {\n            id\n            title: name\n            price\n            imageUrl\n          }\n        }"]))),variables:{ids:t.$store.state.selectedItems.map((function(t){return t.id}))}});case 2:r=e.sent,t.items=r.data.products;case 4:case"end":return e.stop()}}),e)})))()}}},rt=et,nt=r(7182),it=r(6656),at=r(7921),st=(0,p.Z)(rt,O,q,!1,null,null,null),ot=st.exports;f()(st,{VBtn:h.Z,VCard:b.Z,VDialog:nt.Z,VIcon:Z.Z,VSpacer:C.Z,VToolbar:it.Z,VToolbarItems:at.lj,VToolbarTitle:at.qW});var lt={name:"App",components:{CardItems:T,DialogItem:ot},data:function(){return{items:[],page:1,per_page:20,length:1}},apollo:{length:{query:(0,tt.ZP)(H||(H=(0,s.Z)(["query {\n        productsCount\n      }"]))),update:function(t){return parseInt(t.productsCount/this.per_page)+1}},items:{query:(0,tt.ZP)(J||(J=(0,s.Z)(["query ($page: Int, $perPage: Int) {\n        products(page: $page, perPage: $perPage) {\n          id\n          title: name\n          description\n          price\n          url: imageUrl\n        }\n      }"]))),update:function(t){return t.products},variables:function(){return{page:this.page,perPage:this.per_page}}}},watch:{page:function(){window.scrollTo(0,0)}}},ct=lt,dt=r(7524),ut=r(3343),mt=r(7877),pt=r(6272),vt=(0,p.Z)(ct,i,a,!1,null,null,null),ft=vt.exports;f()(vt,{VApp:dt.Z,VAppBar:ut.Z,VBtn:h.Z,VIcon:Z.Z,VMain:mt.Z,VPagination:pt.Z,VSpacer:C.Z,VToolbarTitle:at.qW});r(9826),r(1539),r(4553),r(561);var gt=r(629);n.Z.use(gt.ZP);var ht=new gt.ZP.Store({state:function(){return{selectedItems:[]}},getters:{getItem:function(t){return function(e){var r;return(null===(r=t.selectedItems.find((function(t){return t.id===e})))||void 0===r?void 0:r.val)||0}}},mutations:{setItem:function(t,e){var r=t.selectedItems.findIndex((function(t){return t.id===e.id}));r>-1&&t.selectedItems.splice(r,1),e.val>0&&t.selectedItems.push(e)},addItem:function(t,e){var r=t.selectedItems.findIndex((function(t){return t.id===e.id})),n={id:e.id,val:t.selectedItems[r].val+e.val};r>-1&&t.selectedItems.splice(r,1),t.selectedItems.push(n)}}}),bt=r(858);n.Z.use(bt.Z);var It,yt=new bt.Z({theme:{dark:"dark"===window.Telegram.WebApp.colorScheme,themes:{light:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"},dark:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"}}}}),Zt=r(2489),_t=(r(4916),r(4765),r(8783),r(3948),r(1637),r(1462)),wt=r(5106),Ct=r(6915),xt=window.location.search.substring(1),$t=new URLSearchParams(xt),Vt=(0,wt.L)({uri:"/graphql?shop_id=".concat($t.get("shop")),headers:{Authorization:null===(It=window.Telegram)||void 0===It?void 0:It.WebApp.initData}}),kt=new Ct.h4,Pt=new _t.fe({link:Vt,cache:kt}),St=Pt;n.Z.config.productionTip=!1,n.Z.use(Zt.ZP);var Tt=new Zt.ZP({defaultClient:St});new n.Z({vuetify:yt,store:ht,apolloProvider:Tt,render:function(t){return t(ft)}}).$mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n](a,a.exports,r),a.loaded=!0,a.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],a=t[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(o=!1,a<s&&(s=a));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,i,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,s=n[0],o=n[1],l=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var d=l(r)}for(e&&e(n);c<s.length;c++)a=s[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(d)},n=self["webpackChunkwebapp_shopping"]=self["webpackChunkwebapp_shopping"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1162)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.de0c7032.js.map