(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/menu/menu"],{"0c54":function(t,e,r){"use strict";var n=r("fbaf"),o=r.n(n);o.a},4061:function(t,e,r){"use strict";r.r(e);var n=r("bce3"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"8b03":function(t,e,r){"use strict";r.r(e);var n=r("a8e2"),o=r("4061");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("0c54");var a,u=r("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"b64a91fa",null,!1,n["a"],a);e["default"]=c.exports},a8e2:function(t,e,r){"use strict";var n={modal:function(){return r.e("components/modal/modal").then(r.bind(null,"62d6"))},popupLayer:function(){return r.e("components/popup-layer/popup-layer").then(r.bind(null,"8706"))}},o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.goods,(function(e,r){var n=t.menuCartNum(e.id),o=t.menuCartNum(e.id);return{$orig:t.__get_orig(e),m0:n,m1:o}}))),n=t.__map(t.goods,(function(e,r){var n=t.__map(e.goods_list,(function(e,r){var n=t.goodCartNum(e.id),o=t.goodCartNum(e.id),i=t.goodCartNum(e.id),a=t.goodCartNum(e.id),u=t.goodCartNum(e.id);return{$orig:t.__get_orig(e),m2:n,m3:o,m4:i,m5:a,m6:u}}));return{$orig:t.__get_orig(e),l1:n}})),o=t.getGoodSelectedProps(t.good),i=t.getGoodSelectedProps(t.good),a=parseFloat(t.store.packing_fee);t.$mp.data=Object.assign({},{$root:{l0:r,l2:n,m7:o,m8:i,m9:a}})},i=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},bce3:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r("4795")),o=r("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))}}var l=function(){r.e("components/modal/modal").then(function(){return resolve(r("62d6"))}.bind(null,r)).catch(r.oe)},f=function(){r.e("components/popup-layer/popup-layer").then(function(){return resolve(r("8706"))}.bind(null,r)).catch(r.oe)},p={components:{modal:l,popupLayer:f},data:function(){return{goods:[],ads:[{}],loading:!0,currentCateId:6905,cateScrollTop:0,menuScrollIntoView:"",cart:[],goodDetailModalVisible:!1,good:{},category:{},cartPopupVisible:!1,sizeCalcState:!1}},onLoad:function(){var t=this;return d(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},computed:u({},(0,o.mapState)(["orderType","address","store"]),{},(0,o.mapGetters)(["isLogin"]),{goodCartNum:function(){var t=this;return function(e){return t.cart.reduce((function(t,r){return r.id===e?t+r.number:t}),0)}},menuCartNum:function(){var t=this;return function(e){return t.cart.reduce((function(t,r){return r.cate_id===e?t+r.number:t}),0)}},getCartGoodsNumber:function(){return this.cart.reduce((function(t,e){return t+e.number}),0)},getCartGoodsPrice:function(){return this.cart.reduce((function(t,e){return t+e.number*e.price}),0).toFixed(2)},disabledPay:function(){return"takeout"==this.orderType&&this.getCartGoodsPrice<this.store.min_price},spread:function(){if("takeout"==this.orderType)return parseFloat((this.store.min_price-this.getCartGoodsPrice).toFixed(2))}}),methods:u({},(0,o.mapMutations)(["SET_ORDER_TYPE"]),{},(0,o.mapActions)(["getStore"]),{init:function(){var e=this;return d(n.default.mark((function r(){return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.getStore();case 3:return r.next=5,e.$fuck("goods");case 5:e.goods=r.sent,e.loading=!1,e.cart=t.getStorageSync("cart")||[];case 8:case"end":return r.stop()}}),r)})))()},takout:function(){},handleMenuTap:function(t){var e=this;this.sizeCalcState||this.calcSize(),this.currentCateId=t,this.$nextTick((function(){return e.cateScrollTop=e.goods.find((function(e){return e.id==t})).top}))},handleGoodsScroll:function(t){var e=t.detail;this.sizeCalcState||this.calcSize();var r=e.scrollTop,n=this.goods.filter((function(t){return t.top<=r})).reverse();n.length>0&&(this.currentCateId=n[0].id)},calcSize:function(){var e=10,r=t.createSelectorQuery().select("#ads");r.fields({size:!0},(function(t){})).exec(),this.goods.forEach((function(r){var n=t.createSelectorQuery().select("#cate-".concat(r.id));n.fields({size:!0},(function(t){r.top=e,e+=t.height,r.bottom=e})).exec()})),this.sizeCalcState=!0},handleAddToCart:function(t,e,r){var n=this.cart.findIndex((function(t){return e.use_property?t.id===e.id&&t.props===e.props:t.id===e.id}));n>-1?this.cart[n].number+=r:this.cart.push({id:e.id,cate_id:t.id,name:e.name,price:e.price,number:r,image:e.images,use_property:e.use_property,props_text:e.use_property?this.getGoodSelectedProps(e):"",props:e.use_property?this.getGoodSelectedProps(e,"ids"):[]})},handleReduceFromCart:function(t,e){var r=this.cart.findIndex((function(t){return t.id===e.id}));this.cart[r].number-=1,this.cart[r].number<=0&&this.cart.splice(r,1)},showGoodDetailModal:function(t,e){this.good=JSON.parse(JSON.stringify(u({},e,{number:1}))),this.category=JSON.parse(JSON.stringify(t)),this.goodDetailModalVisible=!0},closeGoodDetailModal:function(){this.goodDetailModalVisible=!1,this.category={},this.good={}},changePropertyDefault:function(t,e){var r=this;this.good.property[t].values.forEach((function(t){return r.$set(t,"is_default",0)})),this.good.property[t].values[e].is_default=1,this.good.number=1},getGoodSelectedProps:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";if(t.use_property){var r=[];return t.property.forEach((function(t){var n=t.values;n.forEach((function(t){t.is_default&&r.push("text"===e?t.value:t.id)}))})),"text"===e?r.join("，"):r}return""},handlePropertyAdd:function(){this.good.number+=1},handlePropertyReduce:function(){1!==this.good.number&&(this.good.number-=1)},handleAddToCartInModal:function(){this.handleAddToCart(this.category,this.good,this.good.number),this.closeGoodDetailModal()},openCartPopup:function(){this.cartPopupVisible=!this.cartPopupVisible},handleCartClear:function(){var e=this;t.showModal({title:"提示",content:"确定清空购物车么",success:function(t){var r=t.confirm;r&&(e.cartPopupVisible=!1,e.cart=[])}})},handleCartItemAdd:function(t){this.cart[t].number+=1},handleCartItemReduce:function(t){1===this.cart[t].number?this.cart.splice(t,1):this.cart[t].number-=1,this.cart.length||(this.cartPopupVisible=!1)},toPay:function(){this.isLogin?(t.showLoading({title:"加载中"}),t.setStorageSync("cart",JSON.parse(JSON.stringify(this.cart))),t.navigateTo({url:"/pages/pay/pay"}),t.hideLoading()):t.navigateTo({url:"/pages/login/login"})}})};e.default=p}).call(this,r("543d")["default"])},e978:function(t,e,r){"use strict";(function(t){r("c7e6");n(r("66fd"));var e=n(r("8b03"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},fbaf:function(t,e,r){}},[["e978","common/runtime","common/vendor"]]]);