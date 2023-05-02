/*! For license information please see 4153.ef850f83d1c0a63bca10.js.LICENSE.txt */
(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4153],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>l});var r=n(70655),o=n(92950),a=n(44303),i=n(38296),c=n(62472);const l=e=>{var{children:t=null,className:n="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,p=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const f=(0,c.S$)(l.displayName,u,d);return o.createElement("nav",Object.assign({},p,{"aria-label":s,className:(0,i.i)(a.Z.breadcrumb,n)},f),o.createElement("ol",{className:a.Z.breadcrumbList},o.Children.map(t,((e,t)=>{const n=t>0;return o.isValidElement(e)?o.cloneElement(e,{showDivider:n}):e}))))};l.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>l});var r=n(70655),o=n(92950),a=n(93174),i=n(44303),c=n(38296);const l=e=>{var{children:t=null,className:n="",to:l,isActive:s=!1,isDropdown:u=!1,showDivider:d,target:p,component:f="a",render:m}=e,h=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=f,v=s?"page":void 0,y=(0,c.i)(i.Z.breadcrumbLink,s&&i.Z.modifiers.current);return o.createElement("li",Object.assign({},h,{className:(0,c.i)(i.Z.breadcrumbItem,n)}),d&&o.createElement("span",{className:i.Z.breadcrumbItemDivider},o.createElement(a.ZP,null)),"button"===f&&o.createElement("button",{className:y,"aria-current":v,type:"button"},t),u&&o.createElement("span",{className:(0,c.i)(i.Z.breadcrumbDropdown)},t),m&&m({className:y,ariaCurrent:v}),l&&!m&&o.createElement(g,{href:l,target:p,className:y,"aria-current":v},t),!l&&"button"!==f&&!u&&t)};l.displayName="BreadcrumbItem"},56787:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var r=n(70655),o=n(92950),a=n(73699),i=n(99355),c=n(17352),l=n(62472);const s=e=>{var{onSelect:t,ref:n,ouiaId:u,ouiaSafe:d,alignments:p,contextProps:f,menuAppendTo:m="inline",isFlipEnabled:h=!0,removeFindDomNode:g=!1,zIndex:v=9999}=e,y=(0,r.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return o.createElement(i.Dl.Provider,{value:Object.assign({onSelect:e=>t&&t(e),toggleTextClass:a.Z.dropdownToggleText,toggleIconClass:a.Z.dropdownToggleImage,toggleIndicatorClass:a.Z.dropdownToggleIcon,menuClass:a.Z.dropdownMenu,itemClass:a.Z.dropdownMenuItem,toggleClass:a.Z.dropdownToggle,baseClass:a.Z.dropdown,baseComponent:"div",sectionClass:a.Z.dropdownGroup,sectionTitleClass:a.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:a.Z.modifiers.disabled,plainTextClass:a.Z.modifiers.text,ouiaId:(0,l.Z1)(s.displayName,u),ouiaSafe:d,ouiaComponentType:s.displayName,alignments:p},f)},o.createElement(c.R,Object.assign({menuAppendTo:m,isFlipEnabled:h,removeFindDomNode:g,zIndex:v},y)))};s.displayName="Dropdown"},31495:(e,t,n)=>{"use strict";n.d(t,{Mi:()=>c,Uv:()=>a,wk:()=>l,z1:()=>i});var r=n(92950),o=n(80164);const a={isManagedSidebar:!1,isNavOpen:!1,onNavToggle:()=>null,width:null,height:null,getBreakpoint:o.iu,getVerticalBreakpoint:o.xb},i=r.createContext(a),c=i.Provider,l=i.Consumer},32045:(e,t,n)=>{"use strict";n.d(t,{Dk:()=>r,NP:()=>f,xB:()=>o});var r,o,a=n(70655),i=n(92950),c=n(41145),l=n(38296),s=n(80164),u=n(31495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(r||(r={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(o||(o={}));const d={[o.default]:c.Z.pageMainSection,[o.nav]:c.Z.pageMainNav,[o.subNav]:c.Z.pageMainSubnav,[o.breadcrumb]:c.Z.pageMainBreadcrumb,[o.tabs]:c.Z.pageMainTabs,[o.wizard]:c.Z.pageMainWizard},p={[r.default]:"",[r.light]:c.Z.modifiers.light,[r.dark]:c.Z.modifiers.dark_200,[r.darker]:c.Z.modifiers.dark_100},f=e=>{var{className:t="",children:n,variant:r="default",type:f="default",padding:m,isFilled:h,isWidthLimited:g=!1,isCenterAligned:v=!1,sticky:y,stickyOnBreakpoint:b,hasShadowTop:w=!1,hasShadowBottom:E=!1,hasOverflowScroll:k=!1,"aria-label":_,component:O="section"}=e,x=(0,a.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","sticky","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:S,getVerticalBreakpoint:L}=i.useContext(u.z1);i.useEffect((()=>{k&&!_&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[k,_]);const Z=O;return i.createElement(Z,Object.assign({},x,{className:(0,l.i)(d[f],(0,s.wt)(m,c.Z),(0,s.wt)(b,c.Z,"sticky-",L(S),!0),p[r],!1===h&&c.Z.modifiers.noFill,!0===h&&c.Z.modifiers.fill,g&&c.Z.modifiers.limitWidth,g&&v&&f!==o.subNav&&c.Z.modifiers.alignCenter,"top"===y&&c.Z.modifiers.stickyTop,"bottom"===y&&c.Z.modifiers.stickyBottom,w&&c.Z.modifiers.shadowTop,E&&c.Z.modifiers.shadowBottom,k&&c.Z.modifiers.overflowScroll,t)},k&&{tabIndex:0},{"aria-label":_}),g&&i.createElement("div",{className:(0,l.i)(c.Z.pageMainBody)},n),!g&&n)};f.displayName="PageSection"},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},41145:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(92084);const r={avatar:"pf-c-avatar",brand:"pf-c-brand",button:"pf-c-button",card:"pf-c-card",contextSelector:"pf-c-context-selector",drawer:"pf-c-drawer",masthead:"pf-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",fullHeight:"pf-m-full-height",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",fill:"pf-m-fill",noFill:"pf-m-no-fill",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-c-nav",notificationBadge:"pf-c-notification-badge",page:"pf-c-page",pageDrawer:"pf-c-page__drawer",pageHeader:"pf-c-page__header",pageHeaderBrand:"pf-c-page__header-brand",pageHeaderBrandLink:"pf-c-page__header-brand-link",pageHeaderBrandToggle:"pf-c-page__header-brand-toggle",pageHeaderNav:"pf-c-page__header-nav",pageHeaderTools:"pf-c-page__header-tools",pageHeaderToolsGroup:"pf-c-page__header-tools-group",pageHeaderToolsItem:"pf-c-page__header-tools-item",pageMain:"pf-c-page__main",pageMainBody:"pf-c-page__main-body",pageMainBreadcrumb:"pf-c-page__main-breadcrumb",pageMainDrawer:"pf-c-page__main-drawer",pageMainGroup:"pf-c-page__main-group",pageMainNav:"pf-c-page__main-nav",pageMainSection:"pf-c-page__main-section",pageMainSubnav:"pf-c-page__main-subnav",pageMainTabs:"pf-c-page__main-tabs",pageMainWizard:"pf-c-page__main-wizard",pageSidebar:"pf-c-page__sidebar",pageSidebarBody:"pf-c-page__sidebar-body",themeDark:"pf-theme-dark"}},21381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Se});var r=n(92950),o=n.n(r),a=n(75662),i=n(29439),c=n(52643),l=n(32045),s=n(37619),u=n(28883),d=n(35262),p=n(55140),f=n(45697),m=n.n(f),h=n(50533),g=n(8622),v=n(9947),y=n(75106),b=n(47173),w=n(38424),E=n(35293),k=n(38779),_=n(15265),O=n(7081),x=n(14299),S=n(71002),L=n(15861),Z=n(93433),N=n(41448),T=n(28191),I=n(92298),M=n(80236),C=n(62965),P=n(91966),j=n.n(P),D=n(35161),B=n.n(D),F=n(4942),G=n(20565);function z(){z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new x(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function p(){}function f(){}function m(){}var h={};l(h,a,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&n.call(v,a)&&(h=v);var y=m.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(r,a,i,c){var l=u(e[r],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==(0,S.Z)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=u(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return f.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new w(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,F.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e,t,n,r,o){return{count:t,id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){return e((0,g.CL)(-1,!1))},props:{isDisabled:n}},{title:"".concat(r?"Deselect":"Select"," page (").concat(o," items)"),onClick:function(){return e((0,g.CL)(0,!r))}}],onSelect:function(t){e((0,g.CL)(0,t))},checked:t>0&&r}},W=function(e,t){var n=t?e.filter((function(e){return"groups"!==e.key})):e;return n.splice(n.length-2,0,{key:"update_method",title:"Update method",sortKey:"update_method",transforms:[C.fitContent],renderFunc:function(e,t,n){var r;return(null==n||null===(r=n.system_profile)||void 0===r?void 0:r.system_update_method)||"N/A"},props:{isStatic:!0,width:10}}),n[n.findIndex((function(e){return"display_name"===e.key}))].renderFunc=function(e,t){return o().createElement("div",{className:"sentry-mask data-hj-suppress"},o().createElement(a.Link,{to:"/".concat(t)},e))},["display_name","groups","tags","system_profile","update_method","updated"].map((function(e){return n.find((function(t){return t.key===e}))})).filter(Boolean)},q=function(e){var t=e.groupName,n=e.groupId,a=(0,h.useDispatch)(),c=(0,h.useSelector)((function(e){var t;return(null==e||null===(t=e.entities)||void 0===t?void 0:t.selected)||new Map})),l=(0,h.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]})),s=0===c.size,u=B()(l,"id"),d=0===j()(u,(0,Z.Z)(c.keys())).length,p=(0,r.useState)(!1),f=(0,i.Z)(p,2),m=f[0],v=f[1],y=function(){a((0,g.K5)()),a((0,g.CL)(-1,!1))};return(0,r.useEffect)((function(){return function(){y()}}),[]),o().createElement("div",{id:"group-systems-table"},m&&o().createElement(ae,{isModalOpen:m,setIsModalOpen:function(e){y(),v(e)},groupId:n,groupName:t}),!m&&o().createElement(G.Z,{columns:function(e){return W(e,!0)},hideFilters:{hostGroupFilter:!0},getEntities:function(){var e=(0,L.Z)(z().mark((function e(n,r,o,a){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n,A(A({},r),{},{filters:A(A({},r.filters),{},{groupName:[t]})}),o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:C.TableVariant.compact,canSelectAll:!1},bulkSelect:R(a,c.size,s,d,l.length),showTags:!0},o().createElement(b.zx,{variant:"primary",onClick:function(){y(),v(!0)}},"Add systems")))};q.propTypes={groupName:m().string.isRequired,groupId:m().string.isRequired};const V=q;var K=n(63441),X=n(81005);n(96354),n(466),n(8742),n(97375),n(74513),n(45987),n(41693);m().oneOfType([m().node,m().element,m().func]),m().func,n(79442);var Y=n(76429);n(62067),n(95142),n(78724),n(62032),n(30288);var J=n(48880),$=(n(4694),n(64124),n(57949),n(70363),n(19694)),U=n(37655),Q=n(90218),ee=n(33261),te=function(e){var t=e.isModalOpen,n=e.onSubmit,r=e.onBack,a=e.onCancel,i=e.hostsNumber;return o().createElement(Q.Z,{isModalOpen:t,title:"Add all selected systems to group?",titleIconVariant:function(){return o().createElement($.ZP,{color:U.Z.value})},closeModal:a,schema:(0,ee.K$)(i),reloadData:function(){},onSubmit:n,customFormTemplate:function(e){var t=e.formFields,n=e.schema,i=(0,J.default)(),c=i.handleSubmit,l=(0,i.getState)(),s=l.submitting,u=l.valid;return o().createElement("form",{onSubmit:c},o().createElement(T.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},n.title,t,o().createElement(Y.Z,null,(function(){return o().createElement(T.k,null,o().createElement(b.zx,{isDisabled:s||!u,type:"submit",color:"primary",variant:"primary"},"Yes, add all systems to group"),o().createElement(b.zx,{variant:"secondary",onClick:r},"Back"),o().createElement(b.zx,{variant:"link",onClick:a},"Cancel"))}))))}})};te.propTypes={isModalOpen:m().bool,onSubmit:m().func,onBack:m().func,onCancel:m().func,hostsNumber:m().number};const ne=te;function re(){re=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new x(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function p(){}function f(){}function m(){}var h={};l(h,a,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&n.call(v,a)&&(h=v);var y=m.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(r,a,i,c){var l=u(e[r],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==(0,S.Z)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=u(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return f.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new w(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var oe=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.groupId,c=e.groupName,l=(0,h.useDispatch)(),s=(0,r.useState)(!1),u=(0,i.Z)(s,2),d=u[0],p=u[1],f=(0,r.useState)(!0),m=(0,i.Z)(f,2),v=m[0],y=m[1],w=(0,h.useSelector)((function(e){var t;return(null==e||null===(t=e.entities)||void 0===t?void 0:t.selected)||new Map})),E=(0,h.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]})),k=0===w.size,_=B()(E,"id"),O=0===j()(_,(0,Z.Z)(w.keys())).length,x=(0,Z.Z)(w).filter((function(e){return void 0!==e[1].group_name&&""!==e[1].group_name})),S=x.length>0,P=(0,r.useCallback)((function(e){var t={onSuccess:{title:"Success",description:"".concat(e.length>1?"Systems":"System"," added to ").concat(c||a)},onError:{title:"Error",description:"Failed to add ".concat(e.length>1?"systems":"system"," to ").concat(c||a)}};return(0,X.Z)(l,(function(){return(0,K.wA)(a,e)}),t)}),[t]);return t&&o().createElement(o().Fragment,null,o().createElement(ne,{isModalOpen:d,onSubmit:(0,L.Z)(re().mark((function e(){return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P((0,Z.Z)(w.keys()));case 2:setTimeout((function(){return l((0,g.JM)(a))}),500),n(!1);case 4:case"end":return e.stop()}}),e)}))),onBack:function(){p(!1),y(!0)},onCancel:function(){return n(!1)},hostsNumber:x.length}),o().createElement(M.u,{title:"Add systems",isOpen:v,onClose:function(){return n(!1)},footer:o().createElement(T.k,{direction:{default:"column"},style:{width:"100%"}},S&&o().createElement(I.B,{fullWidth:{default:"fullWidth"}},o().createElement(N.b,{variant:"warning",isInline:!0,title:"One or more of the selected systems already belong to a group. Adding these systems to a different group may impact system configuration."})),o().createElement(I.B,null,o().createElement(b.zx,{key:"confirm",variant:"primary",onClick:(0,L.Z)(re().mark((function e(){return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=5;break}y(!1),p(!0),e.next=9;break;case 5:return e.next=7,P((0,Z.Z)(w.keys()));case 7:setTimeout((function(){return l((0,g.JM)(a))}),500),n(!1);case 9:case"end":return e.stop()}}),e)}))),isDisabled:k},"Add systems"),o().createElement(b.zx,{key:"cancel",variant:"link",onClick:function(){return n(!1)}},"Cancel"))),variant:"large"},o().createElement(G.Z,{columns:function(e){return W(e,!1)},variant:C.TableVariant.compact,tableProps:{isStickyHeader:!1,canSelectAll:!1},bulkSelect:R(l,w.size,k,O,E.length),initialLoading:!0,showTags:!0})))};oe.propTypes={isModalOpen:m().bool,setIsModalOpen:m().func,reloadData:m().func,groupId:m().string,groupName:m().string};const ae=oe;var ie=function(e){var t=e.groupId,n=e.groupName,a=(0,r.useState)(!1),c=(0,i.Z)(a,2),l=c[0],s=c[1];return o().createElement(v.u,{"data-ouia-component-id":"empty-state","data-ouia-component-type":"PF4/EmptyState","data-ouia-safe":!0},o().createElement(ae,{isModalOpen:l,setIsModalOpen:s,groupId:t,groupName:n}),o().createElement(w.k,{icon:O.ZP,color:x.pD.value}),o().createElement(k.D,{headingLevel:"h4",size:"lg"},"No systems added"),o().createElement(y.B,null,"To manage systems more effectively, add systems to the group."),o().createElement(b.zx,{variant:"primary",onClick:function(){return s(!0)}},"Add systems"),o().createElement(E.i,null,o().createElement(b.zx,{variant:"link",icon:o().createElement(_.ZP,null),iconPosition:"right"},"Learn more about system groups")))};ie.propTypes={groupId:m().string,groupName:m().string};const ce=ie;var le=function(e){var t,n,r=e.groupName,a=e.groupId,i=(0,h.useSelector)((function(e){return e.groupDetail})),c=i.uninitialized,l=i.loading,u=i.data,d=(null==u||null===(t=u.results)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.host_ids)||[];return c||l?o().createElement(v.u,null,o().createElement(y.B,null,o().createElement(s.$,null))):d.length>0?o().createElement(V,{groupId:a,groupName:r}):o().createElement(ce,{groupId:a,groupName:r})};le.propTypes={groupName:m().string.isRequired,groupId:m().string.isRequired};const se=le;var ue=n(64029),de=n(32835),pe=n(56787),fe=n(84457),me=n(75728),he=n(50383),ge=n(89376),ve=n(39173),ye=n(8567),be=n(52560),we=n(51023),Ee=function(e){var t,n,c=e.groupId,l=(0,h.useDispatch)(),s=(0,h.useSelector)((function(e){return e.groupDetail})),u=s.uninitialized,d=s.loading,p=s.data,f=(0,r.useState)(!1),m=(0,i.Z)(f,2),v=m[0],y=m[1],b=(0,r.useState)(!1),w=(0,i.Z)(b,2),E=w[0],k=w[1],_=(0,r.useState)(!1),O=(0,i.Z)(_,2),x=O[0],S=O[1],L=null==p||null===(t=p.results)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.name,Z=u||d?o().createElement(he.O,{width:"250px",screenreaderText:"Loading group details"}):L||c,N=(0,a.useHistory)();return o().createElement(ge.Z,null,o().createElement(we.Z,{isModalOpen:E,setIsModalOpen:function(){return k(!1)},modalState:{id:c,name:L||c},reloadData:function(){return l((0,g.JM)(c))}}),o().createElement(be.Z,{isModalOpen:x,setIsModalOpen:function(){return S(!1)},modalState:{id:c,name:L||c},reloadData:function(){return N.push("/groups")}}),o().createElement(ue.a,null,o().createElement(de.g,null,o().createElement(a.Link,{to:ye._.groups},"Groups")),o().createElement(de.g,{isActive:!0},Z)),o().createElement(T.k,{id:"group-header",justifyContent:{default:"justifyContentSpaceBetween"}},o().createElement(I.B,null,o().createElement(ve.Z,{title:Z})),o().createElement(I.B,{id:"group-header-dropdown"},o().createElement(pe.L,{onSelect:function(){return y(!v)},autoFocus:!1,isOpen:v,toggle:o().createElement(me.Z,{id:"group-dropdown-toggle",onToggle:function(e){return y(e)},toggleVariant:"secondary",isDisabled:u||d},"Group actions"),dropdownItems:[o().createElement(fe.h,{key:"rename-group",onClick:function(){return k(!0)}},"Rename"),o().createElement(fe.h,{key:"delete-group",onClick:function(){return S(!0)}},"Delete")]}))))};Ee.propTypes={groupId:m().string.isRequired};const ke=Ee;var _e=(0,r.lazy)((function(){return n.e(7254).then(n.bind(n,57254))})),Oe=function(e){var t,n,a=e.groupId,f=(0,h.useDispatch)(),m=(0,h.useSelector)((function(e){return e.groupDetail})).data,v=(0,p.Z)(),y=null==m||null===(t=m.results)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.name;(0,r.useEffect)((function(){f((0,g.JM)(a))}),[]),(0,r.useEffect)((function(){var e;null==v||null===(e=v.updateDocumentTitle)||void 0===e||e.call(v,"".concat(y||a," - Inventory Groups | Red Hat Insights"))}),[m]);var b=(0,r.useState)(0),w=(0,i.Z)(b,2),E=w[0],k=w[1];return o().createElement(o().Fragment,null,o().createElement(ke,{groupId:a}),o().createElement(l.NP,{variant:"light",type:"tabs"},o().createElement(d.m,{activeKey:E,onSelect:function(e,t){return k(t)},"aria-label":"Group tabs",role:"region",inset:{default:"insetMd"}},o().createElement(u.O,{eventKey:0,title:"Systems","aria-label":"Group systems tab"},o().createElement(l.NP,null,o().createElement(se,{groupName:y,groupId:a}))),o().createElement(u.O,{eventKey:1,title:"Group info","aria-label":"Group info tab"},1===E&&o().createElement(l.NP,null,o().createElement(r.Suspense,{fallback:o().createElement(c.b,null,o().createElement(s.$,null))},o().createElement(_e,null)))))))};Oe.propTypes={groupId:m().string.isRequired};const xe=Oe,Se=function(){var e=(0,a.useParams)().groupId;return o().createElement(xe,{groupId:e})}},58392:()=>{},92084:()=>{}}]);