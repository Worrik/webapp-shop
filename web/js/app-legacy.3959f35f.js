(function(){"use strict";var e={7783:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"toolbar",attrs:{color:e.$store.state.selectedItems.length?"primary":""}},[e.$store.state.selectedItems.length?r("v-btn",{attrs:{icon:""},on:{click:function(t){e.$store.state.selectedItems=[]}}},[r("v-icon",[e._v("mdi-close")])],1):e._e(),r("v-toolbar-title",[e._v(" "+e._s(e.$store.state.selectedItems.length?e.$store.state.selectedItems.reduce((function(e,t){return e+t.val}),0)+" selected":"Test Shop")+" ")]),r("v-spacer"),e.$store.state.selectedItems.length?r("DialogItem"):e._e()],1),r("CardItems",{attrs:{items:e.items}}),r("div",{staticClass:"text-center"},[r("v-pagination",{staticClass:"mb-2",attrs:{length:e.length,"total-visible":5,circle:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1),e.$store.state.selectedItems.length?r("div",{staticClass:"pt-10"}):e._e()],1)],1)},o=[],a=r(3208),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.items.length?e._e():r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},e._l(10,(function(e){return r("v-skeleton-loader",{key:e,staticClass:"ma-2",attrs:{width:"150",type:"card"}})})),1),r("div",{staticClass:"d-flex flex-wrap justify-center pa-4"},e._l(e.items,(function(e){return r("div",{key:e.id},[r("CardItem",{attrs:{id:e.id,title:e.title,url:e.url,thumbnailUrl:e.thumbnailUrl,price:e.price||100}})],1)})),0)])},l=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-badge",{staticClass:"ma-2",attrs:{color:"primary",value:e.$store.getters.getItem(e.id),content:e.$store.getters.getItem(e.id),overlap:""}},[r("v-card",{attrs:{"max-width":"160",flat:""}},[r("v-list-item-avatar",{staticClass:"pt-0",attrs:{tile:"",size:"160"}},[r("v-img",{staticClass:"ma-0",attrs:{src:e.url,height:"160",width:"160"}})],1),r("div",{staticClass:"px-3 pt-3 text-truncate"},[e._v(e._s(e.title))]),r("v-card-actions",{staticClass:"pt-1"},[r("div",{staticClass:"ml-2",attrs:{color:"secondary"}},[e._v(" "+e._s(e.price)+" $ ")]),r("v-spacer"),e.$store.getters.getItem(e.id)?r("div",{staticClass:"d-flex d-inline"},[r("v-fade-transition",{directives:[{name:"show",rawName:"v-show",value:e.selected,expression:"selected"}]},[r("div",[r("v-btn",{attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(t){e.selected--}}},[r("v-icon",[e._v("mdi-minus")])],1),r("v-btn",{staticClass:"ml-1",attrs:{color:"primary",fab:"","x-small":""},on:{click:function(t){e.selected++}}},[r("v-icon",[e._v("mdi-plus")])],1)],1)])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.selected=1}}},[e._v(" ADD ")])],1)],1)],1)},p=[],u=(r(9653),{name:"CardItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},url:{type:String},price:{type:String,required:!0},old_price:{type:Number,required:!1}},data:function(){return{selected:0}},created:function(){this.selected=this.$store.getters.getItem(this.id)},watch:{selected:function(){this.$store.commit("setItem",{id:this.id,val:this.selected})}}}),d=u,f=r(1001),m=r(3453),v=r.n(m),g=r(4633),b=r(680),h=r(26),_=r(7118),y=r(5827),w=r(6428),x=r(7047),C=r(5457),E=r(3631),I=(0,f.Z)(d,c,p,!1,null,null,null),A=I.exports;v()(I,{VBadge:g.Z,VBtn:b.Z,VCard:h.Z,VCardActions:_.h7,VFadeTransition:y.Z5,VIcon:w.Z,VImg:x.Z,VListItemAvatar:C.Z,VSpacer:E.Z});var T={name:"CardItems",props:{items:{type:Array,required:!0}},components:{CardItem:A}},k=T,P=r(2177),W=(0,f.Z)(k,s,l,!1,null,null,null),O=W.exports;v()(W,{VSkeletonLoader:P.Z});var S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",i,!1),n),[r("v-icon",[e._v("mdi-cart")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),r("v-toolbar-title",[e._v("Cart")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{text:""}},[e._v(" Buy ")])],1)],1),r("CartItems")],1)],1)},D=[],Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-column pa-4"},e._l(e.items,(function(e){return r("div",{key:e.id},[r("CartItem",{attrs:{id:e.id,title:e.title,description:e.description,imageUrl:e.imageUrl,price:e.price}})],1)})),0)},V=[],$=(r(1249),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto my-2",attrs:{outlined:""}},[r("v-list-item",{staticClass:"px-2"},[e.imageUrl?r("v-list-item-avatar",{attrs:{tile:"",size:"150"}},[r("v-img",{attrs:{src:e.imageUrl,height:"150",width:"150"}})],1):r("div",{staticClass:"pl-2"}),r("v-list-item-content",{staticClass:"px-0 d-flex align-self-start",staticStyle:{"min-height":"150px"}},[r("v-list-item-title",{staticClass:"title mb-1"},[e._v(e._s(e.title))]),r("div",[e._v(e._s(e.description))]),r("div",{staticClass:"d-flex align-self-end pr-2"},[r("div",{staticClass:"d-flex align-self-center text-caption"},[e._v(" "+e._s(e.price)+" $ × "+e._s(e.selected)+" ")]),r("v-spacer"),r("div",[r("v-btn",{attrs:{color:"primary",depressed:""},on:{click:function(t){return e.remove()}}},[e._v(" remove ")])],1)],1)],1)],1)],1)}),B=[],j={name:"CartItem",props:{id:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String},imageUrl:{type:String},price:{type:String}},data:function(){return{selected:0}},created:function(){this.selected=this.$store.getters.getItem(this.id)},methods:{remove:function(){this.$store.commit("setItem",{id:this.id,val:0})}}},M=j,L=r(7620),N=r(8563),U=(0,f.Z)(M,$,B,!1,null,null,null),q=U.exports;v()(U,{VBtn:b.Z,VCard:h.Z,VImg:x.Z,VListItem:L.Z,VListItemAvatar:C.Z,VListItemContent:N.km,VListItemTitle:N.V9,VSpacer:E.Z});var H,F,J,z=r(7388),G={name:"CartItems",components:{CartItem:q},data:function(){return{items:[]}},apollo:{items:{query:(0,z.ZP)(H||(H=(0,a.Z)(["query ($ids: [Int!]!) {\n        products: productsByIds(ids: $ids) {\n          id\n          title: name\n          description\n          price\n          imageUrl\n        }\n      }"]))),update:function(e){return e.products},variables:function(){return{ids:this.$store.state.selectedItems.map((function(e){return e.id}))}}}}},K=G,Q=(0,f.Z)(K,Z,V,!1,null,null,null),R=Q.exports,X={name:"DialogItem",components:{CartItems:R},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}}},Y=X,ee=r(7182),te=r(6656),re=r(7921),ne=(0,f.Z)(Y,S,D,!1,null,null,null),ie=ne.exports;v()(ne,{VBtn:b.Z,VCard:h.Z,VDialog:ee.Z,VIcon:w.Z,VSpacer:E.Z,VToolbar:te.Z,VToolbarItems:re.lj,VToolbarTitle:re.qW});var oe={name:"App",components:{CardItems:O,DialogItem:ie},data:function(){return{items:[],page:1,per_page:20,length:1}},apollo:{length:{query:(0,z.ZP)(F||(F=(0,a.Z)(["query {\n        productsCount\n      }"]))),update:function(e){return parseInt(e.productsCount/this.per_page)+1}},items:{query:(0,z.ZP)(J||(J=(0,a.Z)(["query ($page: Int, $perPage: Int) {\n        products(page: $page, perPage: $perPage) {\n          id\n          title: name\n          description\n          price\n          url: imageUrl\n        }\n      }"]))),update:function(e){return e.products},variables:function(){return{page:this.page,perPage:this.per_page}}}},watch:{page:function(){window.scrollTo(0,0)}}},ae=oe,se=r(7524),le=r(3343),ce=r(7877),pe=r(6272),ue=(0,f.Z)(ae,i,o,!1,null,null,null),de=ue.exports;v()(ue,{VApp:se.Z,VAppBar:le.Z,VBtn:b.Z,VIcon:w.Z,VMain:ce.Z,VPagination:pe.Z,VSpacer:E.Z,VToolbarTitle:re.qW});r(1539),r(9714),r(8862),r(4916),r(5306),r(3123),r(561),r(4723),r(7042),r(9600),r(1703),r(4765);function fe(){var e={},t="";try{t=location.hash.toString()}catch(h){}var r=l(t),n=b("initParams");if(n)for(var i in n)"undefined"===typeof r[i]&&(r[i]=n[i]);g("initParams",r);var o,a=!1;try{if(a=null!=window.parent&&window!=window.parent,a){window.addEventListener("message",(function(e){if(e.source===window.parent){try{var t=JSON.parse(e.data)}catch(h){return}t&&t.eventType&&("set_custom_style"==t.eventType?o.innerHTML=t.eventData:d(t.eventType,t.eventData))}})),o=document.createElement("style"),document.head.appendChild(o);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready"}),"*")}catch(h){}}}catch(h){}function s(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(h){return e}}function l(e){e=e.replace(/^#/,"");var t={};if(!e.length)return t;if(e.indexOf("=")<0&&e.indexOf("?")<0)return t._path=s(e),t;var r=e.indexOf("?");if(r>=0){var n=e.substr(0,r);t._path=s(n),e=e.substr(r+1)}var i=c(e);for(var o in i)t[o]=i[o];return t}function c(e){var t={};if(!e.length)return t;var r,n,i,o,a=e.split("&");for(r=0;r<a.length;r++)n=a[r].split("="),i=s(n[0]),o=null==n[1]?null:s(n[1]),t[i]=o;return t}function p(e,t){var r=e.indexOf("#");if(r<0)return e+"#"+t;var n=e.substr(r+1);return n.indexOf("=")>=0||n.indexOf("?")>=0?e+"&"+t:n.length>0?e+"?"+t:e+t}function u(e,t,n){if(t||(t=function(){}),void 0===n&&(n=""),void 0!==window.TelegramWebviewProxy)TelegramWebviewProxy.postEvent(e,JSON.stringify(n)),t();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:e,eventData:n})),t();else if(a)try{var i="https://web.telegram.org";i="*",window.parent.postMessage(JSON.stringify({eventType:e,eventData:n}),i),r.tgWebAppDebug&&console.log("[Telegram.WebView] postEvent via postMessage",e,n),t()}catch(h){t(h)}else r.tgWebAppDebug&&console.log("[Telegram.WebView] postEvent",e,n),t({notAvailable:!0})}function d(e,t){f(e,(function(r){r(e,t)}))}function f(t,r){var n=e[t];if(void 0!==n&&n.length)for(var i=0;i<n.length;i++)try{r(n[i])}catch(h){}}function m(t,r){void 0===e[t]&&(e[t]=[]);var n=e[t].indexOf(r);-1===n&&e[t].push(r)}function v(t,r){if(void 0!==e[t]){var n=e[t].indexOf(r);-1!==n&&e[t].splice(n,1)}}function g(e,t){try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),!0}catch(h){}return!1}function b(e){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+e))}catch(h){}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:r,isIframe:a,onEvent:m,offEvent:v,postEvent:u,receiveEvent:d,callEventCallbacks:f},window.Telegram.Utils={urlSafeDecode:s,urlParseQueryString:c,urlParseHashParams:l,urlAppendHashParams:p,sessionStorageSet:g,sessionStorageGet:b},window.TelegramGameProxy_receiveEvent=d,window.TelegramGameProxy={receiveEvent:d}}function me(){var e=window.Telegram.Utils,t=window.Telegram.WebView,r=t.initParams,n=t.isIframe,i={},o="",a={},s={},l="light",c="6.0";if(r.tgWebAppData&&r.tgWebAppData.length)for(var p in o=r.tgWebAppData,a=e.urlParseQueryString(o),a){var u=a[p];try{("{"==u.substr(0,1)&&"}"==u.substr(-1)||"["==u.substr(0,1)&&"]"==u.substr(-1))&&(a[p]=JSON.parse(u))}catch(H){}}if(r.tgWebAppThemeParams&&r.tgWebAppThemeParams.length){var d=r.tgWebAppThemeParams;try{var f=JSON.parse(d);f&&C(f)}catch(H){}}f=e.sessionStorageGet("themeParams");function m(e,t){t.theme_params&&(C(t.theme_params),window.Telegram.WebApp.MainButton.setParams({force_update:!0}),_("themeChanged"))}f&&C(f),r.tgWebAppVersion&&(c=r.tgWebAppVersion);var v=window.innerHeight;function g(e,t){t.height&&(window.removeEventListener("resize",b),T(t))}function b(e){v!=window.innerHeight&&(v=window.innerHeight,_("viewportChanged",{isStateStable:!0}))}function h(e){if(!e.metaKey&&!e.ctrlKey){var t=e.target;while("A"!=t.tagName&&t.parentNode)t=t.parentNode;"A"!=t.tagName||"_blank"==t.target||"http:"!=t.protocol&&"https:"!=t.protocol||"t.me"!=t.hostname||(i.openTgLink(t.href),e.preventDefault())}}function _(e){var r=Array.prototype.slice.call(arguments);e=r.shift(),t.callEventCallbacks("webview:"+e,(function(e){e.apply(i,r)}))}function y(e,r){t.onEvent("webview:"+e,r)}function w(e,r){t.offEvent("webview:"+e,r)}function x(e,t){var r=document.documentElement;r&&r.style&&r.style.setProperty&&r.style.setProperty("--tg-"+e,t)}function C(t){var r;for(var n in t)(r=S(t[n]))&&(s[n]=r,"bg_color"==n&&(l=D(r)?"dark":"light",x("color-scheme",l)),n="theme-"+n.split("_").join("-"),x(n,r));e.sessionStorageSet("themeParams",s)}var E=!1,I=!1,A=!0;function T(e){var t,r;"undefined"!==typeof e&&(A=!!e.is_expanded,E=e.height,e.is_state_stable&&(I=e.height),_("viewportChanged",{isStateStable:!!e.is_state_stable})),t=!1!==E?E-j+"px":j?"calc(100vh - "+j+"px)":"100vh",r=!1!==I?I-j+"px":j?"calc(100vh - "+j+"px)":"100vh",x("viewport-height",t),x("viewport-stable-height",r)}var k="bg_color";function P(e){if(V("6.1")){var r;if("bg_color"==e||"secondary_bg_color"==e?r=e:(r=S(e),r=s.bg_color&&s.bg_color==r?"bg_color":!(!s.secondary_bg_color||s.secondary_bg_color!=r)&&"secondary_bg_color"),"bg_color"!=r&&"secondary_bg_color"!=r)throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");k=r,t.postEvent("web_app_set_header_color",!1,{color_key:r})}else console.warn("[Telegram.WebApp] Header color is not supported in version "+c)}var W=null;function O(e){if(V("6.1")){var r=S(e);if(!r)throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");W=e,t.postEvent("web_app_set_background_color",!1,{color:e})}else console.warn("[Telegram.WebApp] Background color is not supported in version "+c)}function S(e){var t;if(e+="",t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var r=parseInt(t[1]),n=parseInt(t[2]),i=parseInt(t[3]);return r=(r<16?"0":"")+r.toString(16),n=(n<16?"0":"")+n.toString(16),i=(i<16?"0":"")+i.toString(16),"#"+r+n+i}return!1}function D(e){e=e.replace(/[\s#]/g,""),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16),i=Math.sqrt(t*t*.299+r*r*.587+n*n*.114);return i<120}function Z(e,t){"string"!==typeof e&&(e=""),"string"!==typeof t&&(t=""),e=e.replace(/^\s+|\s+$/g,"").split("."),t=t.replace(/^\s+|\s+$/g,"").split(".");var r,n,i,o=Math.max(e.length,t.length);for(r=0;r<o;r++)if(n=parseInt(e[r])||0,i=parseInt(t[r])||0,n!=i)return n>i?1:-1;return 0}function V(e){return Z(c,e)>=0}function $(e){if(window.Blob)try{return new Blob([e]).size}catch(H){}for(var t=e.length,r=e.length-1;r>=0;r--){var n=e.charCodeAt(r);n>127&&n<=2047?t++:n>2047&&n<=65535&&(t+=2),n>=56320&&n<=57343&&r--}return t}var B=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(e){p({is_visible:e})},get:function(){return e},enumerable:!0});var n=null;function i(){_("backButtonClicked")}function o(){return{is_visible:e}}function a(e){return"undefined"===typeof e&&(e=o()),JSON.stringify(e)}function s(){return!!V("6.1")||(console.warn("[Telegram.WebApp] BackButton is not supported in version "+c),!1)}function l(){var e=o(),r=a(e);n!==r&&(n=r,t.postEvent("web_app_setup_back_button",!1,e))}function p(t){return s()?("undefined"!==typeof t.is_visible&&(e=!!t.is_visible),l(),r):r}return t.onEvent("back_button_pressed",i),r.onClick=function(e){return s()&&y("backButtonClicked",e),r},r.offClick=function(e){return s()&&w("backButtonClicked",e),r},r.show=function(){return p({is_visible:!0})},r.hide=function(){return p({is_visible:!1})},r}(),j=0,M=function(){var e=!1,n=!0,i=!1,o="CONTINUE",a=!1,l=!1,c={};Object.defineProperty(c,"text",{set:function(e){c.setParams({text:e})},get:function(){return o},enumerable:!0}),Object.defineProperty(c,"color",{set:function(e){c.setParams({color:e})},get:function(){return a||s.button_color||"#2481cc"},enumerable:!0}),Object.defineProperty(c,"textColor",{set:function(e){c.setParams({text_color:e})},get:function(){return l||s.button_text_color||"#ffffff"},enumerable:!0}),Object.defineProperty(c,"isVisible",{set:function(e){c.setParams({is_visible:e})},get:function(){return e},enumerable:!0}),Object.defineProperty(c,"isProgressVisible",{get:function(){return i},enumerable:!0}),Object.defineProperty(c,"isActive",{set:function(e){c.setParams({is_active:e})},get:function(){return n},enumerable:!0});var p=null;t.onEvent("main_button_pressed",m);var u=null,d={};if(r.tgWebAppDebug){for(var f in u=document.createElement("tg-main-button"),d={font:"600 14px/18px sans-serif",display:"none",width:"100%",height:"48px",borderRadius:"0",background:"no-repeat right center",position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"15px 20px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"},d)u.style[f]=d[f];document.addEventListener("DOMContentLoaded",(function e(t){document.removeEventListener("DOMContentLoaded",e),document.body.appendChild(u),u.addEventListener("click",m,!1)}))}function m(){n&&_("mainButtonClicked")}function v(){var t=c.color,r=c.textColor;return e?{is_visible:!0,is_active:n,is_progress_visible:i,text:o,color:t,text_color:r}:{is_visible:!1}}function g(e){return"undefined"===typeof e&&(e=v()),JSON.stringify(e)}function b(){var e=v(),n=g(e);p!==n&&(p=n,t.postEvent("web_app_setup_main_button",!1,e),r.tgWebAppDebug&&h(e))}function h(e){e.is_visible?(u.style.display="block",j=48,u.style.opacity=e.is_active?"1":"0.8",u.style.cursor=e.is_active?"pointer":"auto",u.disabled=!e.is_active,u.innerText=e.text,u.style.backgroundImage=e.is_progress_visible?"url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')":"none",u.style.backgroundColor=e.color,u.style.color=e.text_color):(u.style.display="none",j=0),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=j+"px"),T()}function x(t){if("undefined"!==typeof t.text){var r=t.text.toString().replace(/^\s+|\s+$/g,"");if(!r.length)throw console.error("[Telegram.WebApp] Main button text is required",t.text),Error("WebAppMainButtonParamInvalid");if(r.length>64)throw console.error("[Telegram.WebApp] Main button text is too long",r),Error("WebAppMainButtonParamInvalid");o=r}if("undefined"!==typeof t.color)if(!1===t.color||null===t.color)a=!1;else{var i=S(t.color);if(!i)throw console.error("[Telegram.WebApp] Main button color format is invalid",t.color),Error("WebAppMainButtonParamInvalid");a=i}if("undefined"!==typeof t.text_color)if(!1===t.text_color||null===t.text_color)l=!1;else{var s=S(t.text_color);if(!s)throw console.error("[Telegram.WebApp] Main button text color format is invalid",t.text_color),Error("WebAppMainButtonParamInvalid");l=s}if("undefined"!==typeof t.is_visible){if(t.is_visible&&!c.text.length)throw console.error("[Telegram.WebApp] Main button text is required"),Error("WebAppMainButtonParamInvalid");e=!!t.is_visible}return"undefined"!==typeof t.is_active&&(n=!!t.is_active),b(),c}return c.setText=function(e){return c.setParams({text:e})},c.onClick=function(e){return y("mainButtonClicked",e),c},c.offClick=function(e){return w("mainButtonClicked",e),c},c.show=function(){return c.setParams({is_visible:!0})},c.hide=function(){return c.setParams({is_visible:!1})},c.enable=function(){return c.setParams({is_active:!0})},c.disable=function(){return c.setParams({is_active:!1})},c.showProgress=function(e){return n=!!e,i=!0,b(),c},c.hideProgress=function(){return c.isActive||(n=!0),i=!1,b(),c},c.setParams=x,c}();function L(){_("settingsButtonClicked")}t.onEvent("settings_button_pressed",L);var N=function(){var e={};function r(r){if(!V("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+c),e;if("impact"==r.type){if("light"!=r.impact_style&&"medium"!=r.impact_style&&"heavy"!=r.impact_style&&"rigid"!=r.impact_style&&"soft"!=r.impact_style)throw console.error("[Telegram.WebApp] Haptic impact style is invalid",r.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if("notification"==r.type){if("error"!=r.notification_type&&"success"!=r.notification_type&&"warning"!=r.notification_type)throw console.error("[Telegram.WebApp] Haptic notification type is invalid",r.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if("selection_change"!=r.type)throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",r.type),Error("WebAppHapticFeedbackTypeInvalid");return t.postEvent("web_app_trigger_haptic_feedback",!1,r),e}return e.impactOccurred=function(e){return r({type:"impact",impact_style:e})},e.notificationOccurred=function(e){return r({type:"notification",notification_type:e})},e.selectionChanged=function(){return r({type:"selection_change"})},e}(),U={};function q(e,t){if(t.slug&&U[t.slug]){var r=U[t.slug];delete U[t.slug],r.callback&&r.callback(t.status),_("invoiceClosed",{url:r.url,status:t.status})}}window.Telegram||(window.Telegram={}),Object.defineProperty(i,"initData",{get:function(){return o},enumerable:!0}),Object.defineProperty(i,"initDataUnsafe",{get:function(){return a},enumerable:!0}),Object.defineProperty(i,"version",{get:function(){return c},enumerable:!0}),Object.defineProperty(i,"colorScheme",{get:function(){return l},enumerable:!0}),Object.defineProperty(i,"themeParams",{get:function(){return s},enumerable:!0}),Object.defineProperty(i,"isExpanded",{get:function(){return A},enumerable:!0}),Object.defineProperty(i,"viewportHeight",{get:function(){return(!1===E?window.innerHeight:E)-j},enumerable:!0}),Object.defineProperty(i,"viewportStableHeight",{get:function(){return(!1===I?window.innerHeight:I)-j},enumerable:!0}),Object.defineProperty(i,"headerColor",{set:function(e){P(e)},get:function(){return s[k]||null},enumerable:!0}),Object.defineProperty(i,"backgroundColor",{set:function(e){O(e)},get:function(){return W},enumerable:!0}),Object.defineProperty(i,"BackButton",{value:B,enumerable:!0}),Object.defineProperty(i,"MainButton",{value:M,enumerable:!0}),Object.defineProperty(i,"HapticFeedback",{value:N,enumerable:!0}),i.setHeaderColor=function(e){i.headerColor=e},i.setBackgroundColor=function(e){i.backgroundColor=e},i.isVersionAtLeast=function(e){return V(e)},i.onEvent=function(e,t){y(e,t)},i.offEvent=function(e,t){w(e,t)},i.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if($(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");t.postEvent("web_app_data_send",!1,{data:e})},i.openLink=function(e){var r=document.createElement("A");if(r.href=e,"http:"!=r.protocol&&"https:"!=r.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");e=r.href;V("6.1")?t.postEvent("web_app_open_link",!1,{url:e}):window.open(e,"_blank")},i.openTelegramLink=function(e){var r=document.createElement("A");if(r.href=e,"http:"!=r.protocol&&"https:"!=r.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if("t.me"!=r.hostname)throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var i=r.pathname+r.search;n||V("6.1")?t.postEvent("web_app_open_tg_link",!1,{path_full:i}):location.href="https://t.me"+i},i.openInvoice=function(e,r){var n,i,o=document.createElement("A");if(o.href=e,"http:"!=o.protocol&&"https:"!=o.protocol||"t.me"!=o.hostname||!(n=o.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(i=n[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!V("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+c),Error("WebAppMethodUnsupported");if(U[i])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");U[i]={url:e,callback:r},t.postEvent("web_app_open_invoice",!1,{slug:i})},i.ready=function(){t.postEvent("web_app_ready")},i.expand=function(){t.postEvent("web_app_expand")},i.close=function(){t.postEvent("web_app_close")},window.Telegram.WebApp=i,T(),window.addEventListener("resize",b),n&&document.addEventListener("click",h),t.onEvent("theme_changed",m),t.onEvent("viewport_changed",g),t.onEvent("invoice_closed",q),t.postEvent("web_app_request_theme"),t.postEvent("web_app_request_viewport")}function ve(){var e;null!==(e=window.Telegram)&&void 0!==e&&e.WebApp||(fe(),me())}ve();r(9826),r(4553);var ge=r(629);n.Z.use(ge.ZP);var be=new ge.ZP.Store({state:function(){return{selectedItems:[]}},getters:{getItem:function(e){return function(t){var r;return(null===(r=e.selectedItems.find((function(e){return e.id===t})))||void 0===r?void 0:r.val)||0}}},mutations:{setItem:function(e,t){var r=e.selectedItems.findIndex((function(e){return e.id===t.id}));r>-1&&e.selectedItems.splice(r,1),t.val>0&&e.selectedItems.push(t)}}}),he=r(858);n.Z.use(he.Z);var _e,ye=new he.Z({theme:{dark:"dark"===window.Telegram.WebApp.colorScheme,themes:{light:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"},dark:{primary:window.Telegram.WebApp.themeParams.button_color||"#039BE5",secondary:window.Telegram.WebApp.themeParams.hint_color||"#F39BE5"}}}}),we=r(2489),xe=r(1462),Ce=r(5106),Ee=r(6915),Ie=(0,Ce.L)({uri:"/graphql",headers:{Authorization:null===(_e=window.Telegram)||void 0===_e?void 0:_e.WebApp.initData}}),Ae=new Ee.h4,Te=new xe.fe({link:Ie,cache:Ae}),ke=Te;n.Z.config.productionTip=!1,n.Z.use(we.ZP);var Pe=new we.ZP({defaultClient:ke});new n.Z({vuetify:ye,store:be,apolloProvider:Pe,render:function(e){return e(de)}}).$mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n](o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,o){if(!n){var a=1/0;for(p=0;p<e.length;p++){n=e[p][0],i=e[p][1],o=e[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[n,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var p=l(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},n=self["webpackChunkwebapp_shopping"]=self["webpackChunkwebapp_shopping"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7783)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.3959f35f.js.map