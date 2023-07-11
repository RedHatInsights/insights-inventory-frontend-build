/*! For license information please see 5768.f2b92863eb4509736990.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5768],{41054:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(92950),o=r.n(n),a=r(45697),i=r.n(a),l=r(90218),c=r(81005),s=r(50533),u=r(63441),f=r(96354),p=r(68340),d=function(e,t){return{fields:[{component:f.Z.PLAIN_TEXT,name:"warning-message",label:1===t.length?o().createElement(p.x,null,o().createElement("strong",null,t[0].display_name)," will no longer be part of"," ",o().createElement("strong",null,e)," and its configuration will be impacted."):o().createElement(p.x,null,o().createElement("strong",null,t.length)," systems will no longer be part of"," ",o().createElement("strong",null,e)," and their configuration will be impacted.")}]}},h=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.modalState,a=e.reloadData,i=(0,s.useDispatch)(),f=n[0].groups[0],p=f.name,h=f.id;return o().createElement(l.Z,{isModalOpen:t,closeModal:function(){return r(!1)},title:"Remove from group",variant:"danger",submitLabel:"Remove",schema:d(p,n),onSubmit:function(){var e={onSuccess:{title:"".concat(n.length," ").concat(n.length>1?"systems":"system"," removed from ").concat(p)},onError:{title:"Failed to remove ".concat(n.length," ").concat(n.length>1?"systems":"system"," from ").concat(p)}};(0,c.Z)(i,(function(){return(0,u.Op)(h,n.map((function(e){return e.id})))}),e)},reloadData:a})};h.propTypes={modalState:i().arrayOf(i().shape({display_name:i().string,id:i().string,groups:i().arrayOf(i().shape({id:i().string,name:i().string}))})).isRequired,isModalOpen:i().bool.isRequired,setIsModalOpen:i().func.isRequired,reloadData:i().func};const v=h},48524:(e,t,r)=>{r.d(t,{e:()=>n.Z});var n=r(20565)},17499:(e,t,r)=>{r.r(t),r.d(t,{TextInputModal:()=>c.Z,default:()=>s});var n=r(87462),o=r(92950),a=r.n(o),i=r(43107),l=r(79161),c=r(55426);const s=function(e){var t=(0,l.Z)("edgeParity.inventory-system-detail"),r=(0,l.Z)("edgeParity.inventory-list");return a().createElement(i.default,(0,n.Z)({},e,{showImageDetails:t&&r}))}},15739:(e,t,r)=>{r.r(t),r.d(t,{calculatePagination:()=>se,default:()=>fe});var n=r(87462),o=r(93433),a=r(4942),i=r(29439),l=r(92950),c=r.n(l),s=r(45697),u=r.n(s),f=r(50533),p=r(75662),d=r(89376),h=r(39173),v=r(85893),m=r(94184),g=r.n(m),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};const b=function(e){var t=e.children,r=e.className,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","className"]);return(0,l.useEffect)((function(){console.error('Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.')}),[]),(0,v.jsx)("section",y({},n,{className:"".concat(g()(r,"pf-l-page__main-section pf-c-page__main-section"))},{children:t}))};var O=r(94474),w=r(50693),E=r(16475),S=r(28883),L=r(29873),P=r(35262),F=r(83215),j=r(39903),_=r(17499),x=r(94654),k=r.n(x),Z=r(13784),D=r(48524),M=r(55140),T=r(90218),A=r(63441),N=r(81005),C=r(47173),I=r(68340),R=r(75824),G=r(95249),q=r(58061),K=function(e){var t=e.closeModal,r=(0,G.c$)(["inventory:groups:write"]).hasAccess;return c().createElement(c().Fragment,null,c().createElement(I.x,null,"Or"),r?c().createElement(C.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create a new group"):c().createElement(R.u,{content:q.tl},c().createElement(C.zx,{variant:"secondary",className:"pf-u-w-50",isAriaDisabled:!0},"Create a new group")))};K.propTypes={closeModal:u().func};var z=r(33261),B=r(45250),H=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.modalState,o=e.reloadData,a=(0,f.useDispatch)(),s=(0,l.useState)(!1),u=(0,i.Z)(s,2),p=u[0],d=u[1];return c().createElement(c().Fragment,null,!p&&c().createElement(T.Z,{isModalOpen:t,closeModal:function(){return r(!1)},title:"Add to group",submitLabel:"Add",schema:(0,z.qP)(n),additionalMappers:{"create-group-btn":{component:K,closeModal:function(){return d(!0)}}},onSubmit:function(e){var t=e.group,r={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add ".concat(n.length>1?"".concat(n.length," systems"):n[0].display_name," to ").concat(t.name)}};(0,N.Z)(a,(function(){return(0,A.wA)(t.id,n.map((function(e){return e.id})))}),r)},reloadData:o}),p&&c().createElement(B.Z,{isModalOpen:p,setIsModalOpen:d,modalBefore:!0,setterOfModalBefore:r}))};H.propTypes={modalState:u().arrayOf(u().shape({display_name:u().string,id:u().string})).isRequired,isModalOpen:u().bool,setIsModalOpen:u().func,reloadData:u().func};const $=H;var U=r(79161),Y=r(22663),J=r(71002),W=r(15861),X=r(37619),Q=r(44439),V=r(96396),ee=r(32473);function te(){te=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new P(o||[]);return n(i,"_invoke",{value:w(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function p(){}function d(){}function h(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(F([])));g&&g!==t&&r.call(g,a)&&(v=g);var y=h.prototype=p.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function o(n,a,i,l){var c=u(e[n],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==(0,J.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return o("throw",e,i,l)}))}l(c.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function F(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(O.prototype),c(O.prototype,i,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:F(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=r(41054);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){var t=e.category;return e.values.map((function(e){var r=e.tagKey,n=e.value;return"".concat(t?"".concat(t,"/"):"").concat(r).concat(n?"=".concat(n):"")}))},ce={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var r=e.osFilter;return null==r?void 0:r.forEach((function(e){return t.append("operating_system",e)}))},registeredWithFilter:function(e,t){var r=e.registeredWithFilter;return null==r?void 0:r.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var r=e.value,n=e.filter;return"hostname_or_id"===r&&Boolean(n)&&t.append("hostname_or_id",n)},tagFilters:function(e,t){var r=e.tagFilters;return(null==r?void 0:r.length)>0&&t.append("tags",k()(r,le))},rhcdFilter:function(e,t){var r=e.rhcdFilter;return null==r?void 0:r.forEach((function(e){return t.append(Z.Ih,e)}))},lastSeenFilter:function(e,t){var r,n=e.lastSeenFilter;return null===(r=Object.keys(n||{}))||void 0===r?void 0:r.forEach((function(e){return"mark"===e&&t.append("last_seen",n[e])}))},updateMethodFilter:function(e,t){var r=e.updateMethodFilter;return null==r?void 0:r.forEach((function(e){return t.append(Z.cE,e)}))},hostGroupFilter:function(e,t){var r=e.hostGroupFilter;return null==r?void 0:r.forEach((function(e){return t.append(Z.e2,e)}))}},se=function(e,t,r){var n=new URLSearchParams(location.search),o=void 0!==t?t:n.get("page"),a=void 0!==r?r:n.get("per_page");!isNaN(parseInt(o))&&e.append("page",o),!isNaN(parseInt(a))&&e.append("per_page",a)},ue=function(e){var t=e.status,r=e.source,a=e.filterbyName,s=e.tagsFilter,u=e.operatingSystem,v=e.rhcdFilter,m=e.updateMethodFilter,g=e.lastSeenFilter,y=e.page,x=e.perPage,k=e.initialLoading,T=e.hasAccess,A=e.hostGroupFilter,N=(0,p.useHistory)(),C=(0,M.Z)(),I=(0,l.useRef)(null),R=(0,l.useState)(!1),G=(0,i.Z)(R,2),q=G[0],K=G[1],z=(0,l.useState)({}),B=(0,i.Z)(z,2),H=B[0],J=B[1],re=(0,l.useState)((0,Z.h3)(t,r,s,a,u,v,m,A,g)),ae=(0,i.Z)(re,2),le=ae[0],ue=ae[1],fe=(0,l.useState)(0),pe=(0,i.Z)(fe,2),de=pe[0],he=pe[1],ve=(0,l.useState)(!1),me=(0,i.Z)(ve,2),ge=me[0],ye=me[1],be=(0,l.useState)(!1),Oe=(0,i.Z)(be,2),we=Oe[0],Ee=Oe[1],Se=(0,l.useState)(!1),Le=(0,i.Z)(Se,2),Pe=Le[0],Fe=Le[1],je=(0,l.useState)(),_e=(0,i.Z)(je,2),xe=_e[0],ke=_e[1],Ze=(0,Z.Mo)(),De=(0,f.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),f.shallowEqual),Me=(0,f.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),Te=(0,f.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),Ae=(0,f.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.total})),Ne=(0,f.useDispatch)(),Ce=(0,U.Z)("hbi.ui.inventory-groups"),Ie=function(e,t,r,n,o){var a,s=(0,l.useState)(!1),u=(0,i.Z)(s,2),p=u[0],d=u[1],h=(0,ee.Z)().fetchBatched,v=(0,f.useDispatch)(),m=function(e,t){return v(O.CL(e,t))},g=function(){return e?e.size:0},y=(0,f.useSelector)((function(e){return e.entities})).activeFilters,b=function(){var e=(0,W.Z)(te().mark((function e(t,r){var n,o,a,i;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.page,o=r.per_page,a=(0,V.K$)(ne({page:n,per_page:o},t)),e.next=4,a.payload;case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),w=(0,l.useCallback)((function(e,t){return h(b,t,e)}),[]),E=function(){var e=(0,W.Z)(te().mark((function e(){var n,o,a,i=arguments;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(i.length>0&&void 0!==i[0])||i[0],d(!0),e.next=4,w({filters:y,globalFilter:t},r);case 4:o=e.sent,a=(0,Q.flatten)((0,Q.map)(o,"results")),v(O.CL(a,n)),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){m(-1,!1)},props:{isDisabled:!e}},ne({},o&&n&&n.length>0?{title:"Select page (".concat(n.length,")"),onClick:function(){m(0,!0)}}:{}),ne({},o&&n&&n.length>0?{title:"Select all (".concat(r,")"),onClick:(a=(0,W.Z)(te().mark((function e(){return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}:{})],checked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var r=e.id;return t&&t.has(r)}))?e.length>0:e.some((function(e){var r=e.id;return t&&t.has(r)}))&&null}(n,e),onSelect:function(e){m(0,e)},toggleProps:{"data-ouia-component-type":"bulk-select-toggle-button",children:p?[c().createElement(l.Fragment,{key:"sd"},c().createElement(X.$,{size:"sm"}),"".concat(g()," selected"))]:"".concat(g()," selected")}}}(Te,xe,Ae,De,Me),Re=(0,U.Z)("edgeParity.inventory-list");(0,l.useEffect)((function(){var e;return C.updateDocumentTitle("Systems | Red Hat Insights"),null==C||null===(e=C.hideGlobalFilter)||void 0===e||e.call(C,!1),C.appAction("system-list"),C.appObjectId(),C.on("GLOBAL_FILTER_UPDATE",(function(e){var t,r,n,o,a=e.data,l=C.mapGlobalFilter(a,!1,!0),c=(0,i.Z)(l,3),s=c[0],u=c[1],f=c[2];ke({tags:f,filter:ie(ie({},null==xe?void 0:xe.filter),{},{system_profile:ie(ie(ie(ie(ie({},null==xe||null===(t=xe.filter)||void 0===t?void 0:t.system_profile),(null==s||null===(r=s.SAP)||void 0===r?void 0:r.isSelected)&&{sap_system:!0}),s&&(null===(n=s["Ansible Automation Platform"])||void 0===n?void 0:n.isSelected)&&{ansible:"not_nil"}),(null==s||null===(o=s["Microsoft SQL"])||void 0===o?void 0:o.isSelected)&&{mssql:"not_nil"}),(null==u?void 0:u.length)>0&&{sap_sids:u})})})})),Ne(O.L1()),(x||y)&&Ne(O.Jr(Array.isArray(y)?y[0]:y,Array.isArray(x)?x[0]:x)),function(){Ne(O.s$())}}),[]);var Ge=function(){return Te?Te.size:0},qe=c().createElement(w.r,{gutter:"md"},c().createElement(E.P,{span:12},c().createElement(D.e,(0,n.Z)({hasAccess:T,isRbacEnabled:!0,customFilters:{filters:le,globalFilter:xe},isFullView:!0,showTags:!0,onRefresh:function(e,t){ue(null==e?void 0:e.filters);var r=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(r){var n;null==ce||null===(n=ce[r])||void 0===n||n.call(ce,t,e)}))}))}(r,null==e?void 0:e.filters),se(r,null==e?void 0:e.page,null==e?void 0:e.per_page);var n=r.toString();N.push({search:n,hash:location.hash}),t&&t(e)},hasCheckbox:Ze,autoRefresh:!0,ignoreRefresh:!0,initialLoading:k,ref:I,tableProps:Ze&&{actionResolver:function(e){return function(e,t){var r=[{title:"Edit",onClick:function(e,t,r){J(r),ye((function(){return!0}))}},{title:"Delete",onClick:function(e,t,r){J(r),K((function(){return!0}))}}],n=[{title:"Add to group",onClick:function(e,t,r){J([r]),Ee(!0)},isDisabled:t.groups.length>0},{title:"Remove from group",onClick:function(e,t,r){J([r]),Fe(!0)},isDisabled:0===t.groups.length}];return[].concat((0,o.Z)(e?n:[]),r)}(Ce,e)},canSelectAll:!1}},Ze&&{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===Ge(),variant:"secondary",onClick:function(){J(Array.from(Te.values())),K(!0)}}}].concat((0,o.Z)(Ce?[{label:"Add to group",props:{isDisabled:!(Ge()>0&&Array.from(Te.values()).every((function(e){return 0===e.groups.length})))},onClick:function(){J(Array.from(Te.values())),Ee(!0)}},{label:"Remove from group",props:{isDisabled:!function(){if(Ge()>0){var e=Array.from(Te.values());return e.every((function(t){var r=t.groups;return 0!==r.length&&r[0].name===e[0].groups[0].name}))}return!1}()},onClick:function(){J(Array.from(Te.values())),Fe(!0)}}]:[]))},bulkSelect:Ie},{onRowClick:function(e,t,r){return N.push("/".concat(t).concat(r?"/".concat(r):""))}}))));return c().createElement(c().Fragment,null,c().createElement(d.Z,{className:"pf-m-light"},c().createElement(h.Z,{title:"Systems"})),c().createElement(b,null,Re?c().createElement(P.m,{className:"pf-m-light pf-c-table",activeKey:de,onSelect:function(e,t){return he(t)}},c().createElement(S.O,{eventKey:0,title:c().createElement(L.T,null,"Traditional (RPM-DNF)")},qe),c().createElement(S.O,{eventKey:1,title:c().createElement(L.T,null,"Immutable (OSTree)")},c().createElement(Y.Z,{appName:"edge",module:"./Inventory",historyProp:p.useHistory,locationProp:p.useLocation,showHeaderProp:!1}))):qe),c().createElement(j.default,{className:"sentry-mask data-hj-suppress",handleModalToggle:K,isModalOpen:q,currentSytems:H,onConfirm:function(){var e,t;Array.isArray(H)?(t=H.map((function(e){return e.id})),e=H.length>1?"".concat(H.length," systems"):H[0].display_name):(e=H.display_name,t=[H.id]),Ne((0,F.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),Ne(O.Ks(t,e)),K(!1)}}),c().createElement(_.TextInputModal,{title:"Edit display name",isOpen:ge,value:H.display_name,onCancel:function(){return ye(!1)},onSubmit:function(e){Ne(O.$Y(H.id,e)),ye(!1)}}),!0===Ce&&c().createElement(c().Fragment,null,we&&c().createElement($,{isModalOpen:we,setIsModalOpen:Ee,modalState:H,reloadData:function(){Ge()>0&&Ne(O.CL(-1,!1)),I.current.onRefreshData(le,!1,!0)}}),Pe&&c().createElement(oe.Z,{isModalOpen:Pe,setIsModalOpen:Fe,modalState:H,reloadData:function(){Ge()>0&&Ne(O.CL(-1,!1)),I.current.onRefreshData(le,!1,!0)}})))};ue.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),operatingSystem:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().arrayOf(u().string),tagsFilter:u().any,page:u().arrayOf(u().oneOfType([u().string,u().number])),perPage:u().arrayOf(u().oneOfType([u().string,u().number])),initialLoading:u().bool,rhcdFilter:u().oneOfType([u().arrayOf(u().string),u().string]),updateMethodFilter:u().oneOfType([u().arrayOf(u().string),u().string]),hasAccess:u().bool,hostGroupFilter:u().oneOfType([u().arrayOf(u().string),u().string]),lastSeenFilter:u().oneOfType([u().arrayOf(u().string),u().string])},ue.defaultProps={initialLoading:!0};const fe=ue}}]);