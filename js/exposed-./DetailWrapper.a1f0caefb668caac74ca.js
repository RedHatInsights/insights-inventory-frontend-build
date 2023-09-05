/*! For license information please see DetailWrapper.a1f0caefb668caac74ca.js.LICENSE.txt */
(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3494],{50383:(t,e,r)=>{"use strict";r.d(e,{O:()=>c});var n=r(70655),o=r(92950);r(53336);const i={circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"};var a=r(38296);const c=t=>{var{className:e,width:r,height:c,fontSize:s,shape:l,screenreaderText:u}=t,h=(0,n.__rest)(t,["className","width","height","fontSize","shape","screenreaderText"]);const f=s?Object.values(i).find((t=>t===`pf-m-text-${s}`)):void 0;return o.createElement("div",Object.assign({},h,{className:(0,a.i)("pf-c-skeleton",s&&f,"circle"===l&&i.circle,"square"===l&&i.square,e)},(r||c)&&{style:Object.assign({"--pf-c-skeleton--Width":r||void 0,"--pf-c-skeleton--Height":c||void 0},h.style)}),o.createElement("span",{className:"pf-u-screen-reader"},u))};c.displayName="Skeleton"},85333:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(85893),o=r(92950),i=r.n(o),a=r(8213),c=r(64291),s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},l=function(){return(0,n.jsxs)(i().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,n.jsx)("a",s({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const u=function(t){var e=t.prevPageButtonText,r=void 0===e?"Return to previous page":e,o=t.toLandingPageText,i=void 0===o?"Go to landing page":o,u=t.title,h=t.actions,f=void 0===h?null:h,p=t.serviceName,d=t.icon,m=void 0===d?c.LockIcon:d,v=t.description,y=void 0===v?(0,n.jsx)(l,{}):v,g=t.showReturnButton,w=void 0===g||g,x=t.className,E=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),b=u||"You do not have access to ".concat(p);return(0,n.jsxs)(a.EmptyState,s({variant:a.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(x||"")},E,{children:[(0,n.jsx)(a.EmptyStateIcon,{icon:m}),(0,n.jsx)(a.Title,s({headingLevel:"h5",size:"lg"},{children:b})),(0,n.jsx)(a.EmptyStateBody,{children:y}),f,w&&(document.referrer?(0,n.jsx)(a.Button,s({variant:"primary",onClick:function(){return history.back()}},{children:r})):(0,n.jsx)(a.Button,s({variant:"primary",component:"a",href:"."},{children:i})))]}))}},85630:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(87462),o=r(45987),i=r(92950),a=r.n(i),c=r(45697),s=r.n(c),l=r(85333),u=r(75824),h=["title","description","requiredPermission"],f=function(t){var e=t.title,r=t.description,i=t.requiredPermission,c=(0,o.Z)(t,h);return a().createElement(l.Z,(0,n.Z)({},c,{className:"ins-c-inventory__no--access",title:e,description:a().createElement(u.u,{content:i},r)}))};f.propTypes={title:s().string,description:s().node,requiredPermission:s().string},f.defaultProps={title:"You do not have access to Inventory",description:a().createElement("div",null,"To view your systems, you must be granted inventory access from your Organization Administrator."),requiredPermission:"inventory:*:read"};const p=f},67866:(t,e,r)=>{"use strict";r.d(e,{Z:()=>b});var n=r(87462),o=r(45987),i=r(92950),a=r.n(i),c=r(45697),s=r.n(c),l=r(28191),u=r(92298),h=r(50693),f=r(16475),p=r(35664),d=r(62410),m=r(12385),v=r(94471),y=r(67882),g=r(96396),w=r(13784),x=["entity","loaded","UUIDWrapper","LastSeenWrapper"],E=function(t){var e=t.entity,r=t.loaded,i=(t.UUIDWrapper,t.LastSeenWrapper),c=(0,o.Z)(t,x);return a().createElement(h.r,(0,n.Z)({className:"ins-entity-facts"},c),a().createElement(f.P,{md:6},a().createElement(l.k,null,a().createElement(u.B,null,"UUID:"),a().createElement(u.B,{grow:{default:"grow"}},r?(0,v.s)("id",e)||" ":a().createElement(p.Z,{size:p.i.md,fontSize:"sm"}))),a().createElement(l.k,null,a().createElement(u.B,null,"Last seen:"),a().createElement(u.B,{grow:{default:"grow"}},r?a().createElement(i,null,m.Z?a().createElement(m.Z,{culled:(0,v.s)("culled_timestamp",e),staleWarning:(0,v.s)("stale_warning_timestamp",e),stale:(0,v.s)("stale_timestamp",e),currDate:new Date},a().createElement(d.Z,{date:(0,v.s)("updated",e),type:"exact"})):a().createElement(d.Z,{date:(0,v.s)("updated",e),type:"exact"})):a().createElement(p.Z,{size:p.i.md,fontSize:"sm"}),r&&(0,g.vJ)((0,v.s)("per_reporter_staleness",e),w.Kq)&&a().createElement(y.Z,null)))))};E.propTypes={loaded:s().bool,entity:s().object,UUIDWrapper:s().elementType,LastSeenWrapper:s().elementType},E.defaultProps={UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment};const b=E},94471:(t,e,r)=>{"use strict";r.d(e,{h:()=>i,s:()=>a});var n=r(27361),o=r.n(n),i=function(t,e,r){e?e():document.referrer&&document.referrer!=="".concat(document.location.origin).concat(document.location.pathname)?r(-1):location.href=location.pathname.replace(new RegExp("".concat([t],".*"),"g"),"")},a=function(t,e){return o()(e,t,void 0)}},91934:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>O});var n=r(87462),o=r(92950),i=r.n(o),a=r(39142),c=r(71002),s=r(15861),l=r(29439),u=r(45987),h=r(28191),f=r(50383),p=r(95249),d=r(45697),m=r.n(d),v=r(85630),y=r(34655),g=r(58061),w=r(67389),x=["isRbacEnabled"];function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function d(){}function m(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(Z([])));g&&g!==e&&r.call(g,i)&&(v=g);var w=m.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,s){var l=h(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==(0,c.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,s,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var b=function(t){var e=t.isRbacEnabled,r=(0,u.Z)(t,x),n=(0,o.useState)(null),a=(0,l.Z)(n,2),c=a[0],d=a[1],m=(0,o.useState)(!0),b=(0,l.Z)(m,2),L=b[0],_=b[1],O=(0,p.c$)(null!==c?(0,g.$q)(c):[g.yp]).hasAccess;return(0,o.useEffect)((function(){var t=!1,n=function(){var n=(0,s.Z)(E().mark((function n(){var o;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!0!==e){n.next=5;break}return n.next=3,y.hosts.apiHostGetHostById([r.inventoryId],void 0,1,1);case 3:o=n.sent,!0!==t&&0!==o.total&&0!==o.results[0].groups.length&&d(o.results[0].groups[0].id);case 5:_(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){t=!0}}),[r.inventoryId]),!1===e?i().createElement(w.Z,r):L?i().createElement(h.k,{direction:{default:"column"}},i().createElement(f.O,{width:"66%",fontSize:"2xl"}),i().createElement(f.O,{width:"33%"}),i().createElement(f.O,{width:"33%"})):!1===O?i().createElement(v.Z,null):i().createElement(w.Z,r)};b.propTypes={isRbacEnabled:m().bool,inventoryId:m().string.isRequired};const L=b;var _=function(t){return i().createElement(a.Z,(0,n.Z)({},t,{component:L}))};const O=i().forwardRef((function(t,e){return i().createElement(_,(0,n.Z)({},t,{innerRef:e}))}))},53336:()=>{},38299:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./DetailWrapper.cbb2936aa9573115f93d1dde1ede691d.js.map