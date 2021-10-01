(self.webpackChunk_uiengine_ui=self.webpackChunk_uiengine_ui||[]).push([[375],{20:function(t,e,i){var n=i(2619),r=/([\\s]*?<!--\\s?omit:.*?\\s?-->)/gi;t.exports={decorateCode:function(t,e){return n(t,e)},decorateContext:function(t){return n(JSON.stringify(t,null,2),"json")},omit:function(t,e){var i=new RegExp("([\\s]*?\x3c!--\\s?omit:".concat(t,":start\\s?--\x3e[\\s\\S]*?\x3c!--\\s?omit:").concat(t,":end\\s?--\x3e)"),"gi");return e.replace(i,"").replace(r,"")},isolateCode:function t(e,i){var n=new RegExp("\x3c!--\\s?uiengine:".concat(e,":start\\s?--\x3e([\\s\\S]*)\x3c!--\\s?uiengine:").concat(e,":end\\s?--\x3e"),"i"),r=i.match(n);return r&&r[1]?t(e,r[1]):i}}},2619:function(t,e,i){var n=i(8545),r=["bash","css","scss","less","stylus","javascript","handlebars","json","markdown","nginx","xml"];r.forEach((function(t){var e=i(8174)("./".concat(t));n.registerLanguage(t,e)})),t.exports=function(t,e){var i=null!=e?[e]:void 0,r=n.highlightAuto(t,i),o=r.value,a=r.language;return'<pre class="hljs lang-'.concat(e||a,'"><code>').concat(o,"</code></pre>")},t.exports.LANGUAGES=r},7010:function(t,e,i){"use strict";var n=i(5698),r=i(9105);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e.Z={computed:a(a({},(0,r.Se)("state",["plugins"])),{},{pluginActions:function(){return this.plugins.ui.actions},pluginTabs:function(){return this.plugins.ui.tabs}}),methods:{dispatchPluginEvent:function(t,e,i){this.$refs.preview.dispatchPluginEvent(t,e,i)},dispatchPluginEventForAllPlugins:function(t,e,i){this.$refs.preview.dispatchPluginEvent(t,e,i)}},mounted:function(){var t=this,e=this.$props,i=e.variant,n=e.component;this.$refs.preview.$on("iframe-load",(function(e){t.pluginActions.forEach((function(r,o){var a=t.$refs["plugin-action"][o];t.dispatchPluginEvent("init",r,{target:a,variant:i,component:n}),t.dispatchPluginEvent("iframe-load",r,{target:a,variant:i,component:n,iframe:e})})),t.pluginTabs.forEach((function(r,o){var a=t.$refs["plugin-tab"][o],s=t.$refs["plugin-tab-content"][o];t.dispatchPluginEvent("init",r,{target:a,content:s,variant:i,component:n}),t.dispatchPluginEvent("iframe-load",r,{target:a,content:s,variant:i,component:n,iframe:e})}))}))}}},7717:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var n=i(7495),r=i(2309),o=i.n(r),a=i(20),s=i(7970),c=i(830),p=i(6810),l=i.n(p),d={mixins:[s.Z,c.Z],props:{extension:{type:String,default:null},raw:{type:String,default:null},context:{type:Object,default:null},pathPrefix:{type:String,required:!0},pathPostfix:{type:String,required:!0}},data:function(){return{expanded:{raw:!0,context:!0},renderedHTML:{content:"",lang:"text"}}},computed:{renderedRaw:function(){var t=(0,a.omit)("code",this.raw);return(0,a.decorateCode)(t)},renderedContext:function(){return(0,a.decorateContext)(this.context)},iframeSrc:function(){var t=this.currentTheme.id;return"".concat(window.UIengine.base).concat(this.pathPrefix,"/").concat(t,"/").concat(this.pathPostfix,".html")}},watch:{expanded:function(t,e){var i=this;return(0,n.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.renderedHTML.content||!e.HTML){t.next=13;break}return t.next=3,fetch("".concat(window.location.origin).concat(i.iframeSrc));case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.text();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0="Error accessing ".concat(window.location.origin).concat(i.iframeSrc," (").concat(n.status,")");case 11:t.t1=t.t0,i.renderedHTML={content:t.t1,lang:"html"};case 13:case"end":return t.stop()}}),t)})))()}},methods:{renderPart:function(t){var e=t.content,i=t.lang,n=(0,a.isolateCode)("preview",e),r=(0,a.omit)("code",n).trim();return(0,a.decorateCode)(r,i)},isExpanded:function(t){return!!this.expanded[t]},toggleExpanded:function(t){this.$set(this.expanded,t,!this.expanded[t])},copyRawToClipboard:function(){var t=(0,a.omit)("code",this.raw);this.copyCodeToClipboard(t)},copyContextToClipboard:function(){var t=JSON.stringify(this.context,null,"  ");this.copyCodeToClipboard(t)},copyHtmlToClipboard:function(t){var e=t.content,i=(0,a.isolateCode)("preview",e),n=(0,a.omit)("code",i).trim();this.copyCodeToClipboard(n)},copyCodeToClipboard:function(t){return new(l())("[data-clipboard-copy-code]",{text:function(){return t}}).on("success",(function(t){t.trigger.classList.add("copied"),setTimeout((function(){!function(t){t.trigger.classList.remove("copied")}(t)}),2e3)})).on("error",(function(t){console.error("[UIengine]","Clipboard error:",t)}))}}},u=(0,i(8272).Z)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"code"},[t.raw?i("div",{staticClass:"code__segment"},[i("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("raw")),"data-test-variant-code-button":"raw",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("raw")}}},[i("h4",{staticClass:"code__title"},[t._v("\n        "+t._s(t._f("localize")("code.raw"))+"\n      ")]),t._v(" "),i("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),i("div",{attrs:{hidden:!t.isExpanded("raw"),"data-test-variant-code-part":"raw"}},[i("button",{staticClass:"code__copy",attrs:{type:"button","aria-label":t._f("localize")("options.copy_code"),"data-tooltip-text":t._f("localize")("options.copy_code_tooltip"),"data-clipboard-copy-code":""},on:{click:function(e){return e.preventDefault(),t.copyRawToClipboard()}}},[i("AppIcon",{staticClass:"code__copy-icon",attrs:{symbol:"clipboard-copy"}})],1)]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.renderedRaw)}})]):t._e(),t._v(" "),t.context?i("div",{staticClass:"code__segment"},[i("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("context")),"data-test-variant-code-button":"context",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("context")}}},[i("h4",{staticClass:"code__title"},[t._v("\n        "+t._s(t._f("localize")("code.context"))+"\n      ")]),t._v(" "),i("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),i("div",{attrs:{hidden:!t.isExpanded("context"),"data-test-variant-code-part":"context"}},[i("button",{staticClass:"code__copy",attrs:{type:"button","aria-label":t._f("localize")("options.copy_code"),"data-tooltip-text":t._f("localize")("options.copy_code_tooltip"),"data-clipboard-copy-code":""},on:{click:function(e){return e.preventDefault(),t.copyContextToClipboard()}}},[i("AppIcon",{staticClass:"code__copy-icon",attrs:{symbol:"clipboard-copy"}})],1),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.renderedContext)}})])]):t._e(),t._v(" "),t.displayAllThemes?t._e():i("div",{staticClass:"code__segment"},[i("button",{staticClass:"code__header",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(t.isExpanded("HTML")),"data-test-variant-code-button":"HTML",type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleExpanded("HTML")}}},[i("h4",{staticClass:"code__title"},[t._v("\n        HTML\n      ")]),t._v(" "),i("AppIcon",{staticClass:"code__expandicon",attrs:{symbol:"caret-down"}})],1),t._v(" "),i("div",{attrs:{hidden:!t.isExpanded("HTML"),"data-test-variant-code-part":"HTML"}},[i("button",{staticClass:"code__copy",attrs:{type:"button","aria-label":t._f("localize")("options.copy_code"),"data-tooltip-text":t._f("localize")("options.copy_code_tooltip"),"data-clipboard-copy-code":""},on:{click:function(e){return e.preventDefault(),t.copyHtmlToClipboard(t.renderedHTML)}}},[i("AppIcon",{staticClass:"code__copy-icon",attrs:{symbol:"clipboard-copy"}})],1),t._v(" "),t.renderedHTML.content?i("div",{domProps:{innerHTML:t._s(t.renderPart(t.renderedHTML))}}):i("div",[i("pre",[t._v(t._s(t._f("localize")("options.loading")))])])])])])}),[],!1,null,"c8cd4112",null).exports},1272:function(t,e,i){"use strict";i.d(e,{Z:function(){return d}});var n=i(5698),r=i(9105),o=i(7970),a=i(830);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={mixins:[o.Z,a.Z],props:{id:{type:String,required:!0},title:{type:String,required:!0},pathPrefix:{type:String,required:!0},pathPostfix:{type:String,required:!0}},data:function(){return{isBreakpointsActive:!1}},computed:c(c(c({},(0,r.Se)("state",["config"])),(0,r.Se)("preferences",["previewWidths","previewMode"])),{},{breakpoints:function(){return this.config.ui.breakpoints},viewports:function(){return this.config.ui.viewports},isModeViewports:function(){return"viewports"===this.previewMode},breakpointNames:function(){return Object.keys(this.breakpoints)},breakpointWidths:function(){var t=this;return Object.values?Object.values(this.breakpoints):Object.keys(this.breakpoints).map((function(e){return t.breakpoints[e]}))},size:function(){var t=this;if(this.iframeWidth){if(this.breakpoints){var e=this.breakpointWidths.filter((function(e){return e<=t.iframeWidth})),i=e.length?this.breakpointNames[e.length-1]:"< ".concat(this.breakpointNames[0]);return this.previewTitle(i,this.iframeWidth)}return"".concat(this.iframeWidth,"px")}return""},viewportClass:function(){return"preview__viewport--".concat(this.previewMode)},viewportStyle:function(){if("viewports"===this.previewMode)return{};var t=this.previewWidths[this.id];return t?{width:"calc(".concat(t,"px + var(--uie-preview-padding) * 2 + 2px)")}:{}},iframes:function(){var t=this.$refs.iframes;return t instanceof HTMLElement&&(t=[t]),t}}),created:function(){var t=this;this.$root.$on("modal-close",(function(){t.isBreakpointsActive=!1}))},mounted:function(){var t=this;this.iframes.forEach(this.mountResizableIframe),this.$store.watch((function(){return t.$store.getters["preferences/currentTheme"]}),(function(){window.requestAnimationFrame((function(){t.iframes.forEach(t.mountResizableIframe)}))}))},beforeDestroy:function(){this.iframes.forEach(this.unmountResizableIframe)},methods:c(c({},(0,r.OI)("preferences",["setPreviewWidths"])),{},{setWidth:function(t){var e=this.previewWidths;t?e[this.id]=t:(delete e[this.id],this.$refs.viewport.style.width=null),this.setPreviewWidths(e)},iframeSize:function(t){var e=parseInt(t);return isNaN(e)?null:e},iframeSrc:function(t){return"".concat(window.UIengine.base).concat(this.pathPrefix,"/").concat(t,"/").concat(this.pathPostfix,".html")},previewTitle:function(t,e){return"".concat(t," @ ").concat(e,"px")},dispatchPluginEvent:function(t,e,i){var n=e.id;this.iframes.forEach((function(r){document.dispatchEvent(new CustomEvent("".concat(n,":").concat(t),{detail:Object.assign(i,{plugin:e,iframe:r})}))}))}})},l=p,d=(0,i(8272).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preview"},[t.isModeViewports?t._e():[i("div",{staticClass:"preview__options",class:{"preview__options--active":t.isBreakpointsActive}},[i("div",{staticClass:"preview__options-inner"},[t._l(t.breakpoints,(function(e,n){return i("button",{key:n,staticClass:"preview__option",attrs:{type:"button"},on:{click:function(i){return t.setWidth(e)}}},[i("span",{staticClass:"preview__option-text"},[t._v(t._s(n))]),t._v(" "),i("span",{staticClass:"preview__option-label"},[t._v(t._s(e)+"px")])])})),t._v(" "),i("button",{staticClass:"preview__option",attrs:{type:"button"},on:{click:function(e){return t.setWidth(null)}}},[i("span",{staticClass:"preview__option-text"},[i("AppIcon",{staticClass:"preview__option-text-icon",attrs:{symbol:"reset"}})],1),t._v(" "),i("span",{staticClass:"preview__option-label"},[t._v(t._s(t._f("localize")("options.reset")))])])],2)])],t._v(" "),i("div",{staticClass:"preview__viewports sih--main soh--main-escape"},[t.isModeViewports?t._l(t.viewports,(function(e,n){var r=e.width,o=e.height;return i("div",{key:n,staticClass:"preview__viewport",class:t.viewportClass,style:t.viewportStyle},[i("span",{staticClass:"preview__title"},[t._v("\n          "+t._s(t.previewTitle(n,r))+"\n        ")]),t._v(" "),t._l(t.displayedThemes,(function(e){return i("div",{key:e.id,staticClass:"preview__iframe-container",attrs:{"data-test-iframe-container":e.id+"-"+n}},[t.displayAllThemes?i("div",{staticClass:"preview__theme-title"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e(),t._v(" "),i("iframe",{ref:"iframes",refInFor:!0,staticClass:"preview__iframe lazy",style:{width:t.iframeSize(r)+"px"},attrs:{src:"about:blank","data-src":t.iframeSrc(e.id),title:t.title,width:t.iframeSize(r),height:t.iframeSize(o),scrolling:o?"yes":"no","data-test-viewport-iframe":e.id+"-"+n,frameborder:"0"}})])}))],2)})):[i("div",{ref:"viewport",staticClass:"preview__viewport",class:t.viewportClass,style:t.viewportStyle},[t.breakpoints?[i("span",{staticClass:"preview__title"},[t._v("\n            "+t._s(t.size)+"\n          ")])]:t._e(),t._v(" "),t._l(t.displayedThemes,(function(e){return i("div",{key:e.id,staticClass:"preview__iframe-container",attrs:{"data-test-iframe-container":e.id}},[t.displayAllThemes?i("div",{staticClass:"preview__theme-title"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e(),t._v(" "),i("iframe",{ref:"iframes",refInFor:!0,staticClass:"preview__iframe lazy",attrs:{src:"about:blank","aria-roledescription":"iframe","data-src":t.iframeSrc(e.id),title:t.title,"data-test-breakpoint-iframe":e.id,frameborder:"0",scrolling:"no"}})])}))],2)]],2)],2)}),[],!1,null,"419b93af",null).exports},8409:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n={components:{ContentProperty:i(1675).Z},props:{title:{type:String,default:null},properties:{type:Object,required:!0}},computed:{displayDescription:function(){return Object.values(this.properties).some((function(t){return t.description}))}}},r=(0,i(8272).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{class:{withDescription:t.displayDescription},attrs:{id:t.title}},[i("caption",[t._v(t._s(t.title))]),t._v(" "),i("thead",[i("tr",[i("th",{staticClass:"property__name"},[t._v("\n        "+t._s(t._f("localize")("properties.name"))+"\n      ")]),t._v(" "),i("th",{staticClass:"property__type"},[t._v("\n        "+t._s(t._f("localize")("properties.type"))+"\n      ")]),t._v(" "),t.displayDescription?i("th",{staticClass:"property__description"},[t._v("\n        "+t._s(t._f("localize")("properties.description"))+"\n      ")]):t._e(),t._v(" "),i("th",{staticClass:"property__required"},[t._v("\n        "+t._s(t._f("localize")("properties.required"))+"\n      ")]),t._v(" "),i("th",{staticClass:"property__default"},[t._v("\n        "+t._s(t._f("localize")("properties.default"))+"\n      ")])])]),t._v(" "),i("tbody",t._l(t.properties,(function(e,n){return i("ContentProperty",{key:n,attrs:{id:n,property:e,"display-description":t.displayDescription}})})),1)])}),[],!1,null,"a103365e",null).exports},8174:function(t,e,i){var n={"./bash":6201,"./css":8248,"./handlebars":8290,"./javascript":7758,"./json":5333,"./less":3494,"./markdown":5794,"./nginx":5012,"./scss":9883,"./stylus":6765,"./xml":3487};function r(t){var e=o(t);return i(e)}function o(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id=8174}}]);