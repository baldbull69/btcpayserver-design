"use strict";(self.webpackChunk_uiengine_ui=self.webpackChunk_uiengine_ui||[]).push([[262],{9439:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(4195),i=r(2640),s=r(5164),a=r(8595),o=r(527),c=r(2383);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={components:{ContentHeader:s.Z,ContentText:a.Z,ContentTag:o.Z},mixins:[c.Z],props:{id:{type:String,required:!0}},computed:f(f(f({},(0,i.Se)("state",["config","pages"])),(0,i.Se)("preferences",["currentTheme"])),{},{page:function(){return this.pages[this.id]},iframeSrc:function(){return"".concat(window.UIengine.base,"_tokens/").concat(this.currentTheme.id,"/").concat(this.page.id,".html")}}),mounted:function(){this.mountResizableIframe(this.$refs.iframe)},beforeDestroy:function(){this.unmountResizableIframe(this.$refs.iframe)}},l=(0,r(1033).Z)(p,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"page"},[t("ContentHeader",{attrs:{title:e.page.title}},e._l(e.page.tags,(function(e){return t("ContentTag",{key:e,staticClass:"uie-sob-m",attrs:{tag:e}})})),1),e._v(" "),t("ContentText",{staticClass:"uie-sot-xs uie-sob-xxxl",attrs:{item:e.page}})],1),e._v(" "),t("hr",{staticClass:"sections-divider"}),e._v(" "),t("iframe",{ref:"iframe",attrs:{src:e.iframeSrc,title:e.page.title,frameborder:"0",scrolling:"no","data-test-tokens-iframe":""}})])}),[],!1,null,"06a66f48",null).exports}}]);