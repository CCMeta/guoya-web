(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser/libs/trees"],{"18c0":function(t,e,r){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},n=[];r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return a}))},"23bf":function(t,e,r){"use strict";var a=r("6f86"),i=r.n(a);i.a},"57c0":function(t,e,r){"use strict";var a=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=a},"6f86":function(t,e,r){},b1d2:function(t,e,r){"use strict";r.r(e);var a=r("18c0"),i=r("e379");for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);r("23bf");var s,o=r("f0c5"),d=r("57c0"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);"function"===typeof d["a"]&&Object(d["a"])(u),e["default"]=u.exports},ddbd:function(t,e,r){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var i=function(){Promise.resolve().then(function(){return resolve(r("b1d2"))}.bind(null,r)).catch(r.oe)},n={components:{trees:i},name:"trees",data:function(){return{ns:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',loadVideo:!0}},props:{nodes:Array,lazyLoad:Boolean},watch:{nodes:{immediate:!0,handler:function(t){this.ns=t}}},mounted:function(){var t=this.$parent;while("parser"!=t.$options.name){if(t.top){t=t.top;break}t=t.$parent}this.top=t;for(var e,r=this.nodes.length;e=this.nodes[--r];)if(!e.c)if("img"==e.name)t.imgList.setItem(e.attrs.i,e.attrs.src);else if("video"==e.name||"audio"==e.name){var i;"video"==e.name?i=a.createVideoContext(e.attrs.id,this):this.$refs[e.attrs.id]&&(i=this.$refs[e.attrs.id][0]),i&&(i.id=e.attrs.id,t.videoContexts.push(i))}},methods:{play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var r=e.length;r--;)e[r].id!=t.currentTarget.dataset.id&&e[r].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var i=!0,n={id:e.target.id,src:r.src,ignore:function(){return i=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(n),this.top.$emit("imgtap",n),i){var s=this.top.imgList,o=s[r.i]?parseInt(r.i):(s=[r.src],0);a.previewImage({current:o,urls:s})}}},loadImg:function(t){var e=this.ns[t.currentTarget.dataset.i];this.lazyLoad&&!e.load&&this.$set(e,"load",!0)},linkpress:function(e){var r=!0,i=e.currentTarget.dataset.attrs;if(i.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(i),this.top.$emit("linkpress",i),r){if(i["app-id"])return a.navigateToMiniProgram({appId:i["app-id"],path:i.path});i.href&&("#"==i.href[0]?this.top.useAnchor&&this.top.navigateTo({id:i.href.substring(1)}):0==i.href.indexOf("http")||0==i.href.indexOf("//")?a.setClipboardData({data:i.href,success:function(){return a.showToast({title:"链接已复制"})}}):a.navigateTo({url:i.href}))}},error:function(t){var e,r=t.currentTarget,i=r.dataset.source,n=this.ns[r.dataset.i];if("video"==i||"audio"==i){var s=(n.i||0)+1;s<n.attrs.source.length&&this.$set(n,"i",s),"video"==i?e=a.createVideoContext(r.id,this):t.detail.__args__&&(t.detail=t.detail.__args__[0],e=t.detail.context)}else"img"==i&&(e={setSrc:function(t){n.attrs.src=t}});this.top&&this.top.$emit("error",{source:i,target:r,errMsg:t.detail.errMsg,errCode:t.detail.errCode,context:e})},_loadVideo:function(t){var e=t.target.dataset.i;this.ns[e].lazyLoad=!1,this.ns[e].attrs.autoplay=!0}}};e.default=n}).call(this,r("c8ba"),r("543d")["default"])},e379:function(t,e,r){"use strict";r.r(e);var a=r("ddbd"),i=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/libs/trees-create-component',
    {
        'components/jyf-parser/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b1d2"))
        })
    },
    [['components/jyf-parser/libs/trees-create-component']]
]);
