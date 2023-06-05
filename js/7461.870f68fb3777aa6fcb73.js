/*! For license information please see 7461.870f68fb3777aa6fcb73.js.LICENSE.txt */
(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7461],{30430:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(92950),o=r.n(n),a=r(75106),i=r(9947),u=r(38779),c=r(38424),l=r(47173),s=r(1417),f=r(45697),p=r.n(f),h=r(80810),d=function(t){var e=t.entities,r=t.onClearAll,n=t.showIcon;return o().createElement(i.u,{variant:i.I.full,"data-ouia-component-id":"empty-state","data-ouia-component-type":"PF4/EmptyState","data-ouia-safe":!0},n&&o().createElement(c.k,{icon:h.ZP}),o().createElement(u.D,{headingLevel:"h5",size:"lg"},"No matching ".concat(e," found")),o().createElement(a.B,null,"To continue, edit your filter settings and try again"),void 0!==r&&o().createElement(s.V,null,o().createElement(l.zx,{variant:"link",onClick:r},"Clear all filters")))};d.propTypes={entities:p().string,onClearAll:p().func,showIcon:p().bool},d.defaultProps={entities:"systems",showIcon:!0};const v=d},27254:(t,e,r)=>{"use strict";r.d(e,{Eo:()=>Z,Hg:()=>x,Jr:()=>w,cT:()=>E,wu:()=>L});var n=r(93433),o=r(4942),a=r(45987),i=r(92950),u=r.n(i),c=r(62965),l=r(27361),s=r.n(l),f=r(85564),p=r.n(f),h=r(13718),d=r(50383),v=["actions","expandable","noSystemsTable"],m=["props","transforms","cellFormatters"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(t,e,r){return e.map((function(e){var n=e.key,o=e.composed,a=e.renderFunc,c=o?u().createElement(i.Fragment,null,(0,h.Z)(o.map((function(e){return s()(t,e," ")})),t.id,t,r)):s()(t,n," ");return a?u().createElement(i.Fragment,null,a(c,t.id,t,r)):c}))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.actions,o=r.expandable,i=r.noSystemsTable,u=(0,a.Z)(r,v);return 0===t.length?[{cells:[{title:i,props:{colSpan:e.length+Boolean(n),dataLabel:null}}]}]:p()(t.map((function(t,r){return[y(y(y({},t),t.children&&o&&{isOpen:!!t.isOpen}),{},{cells:b(t,e,u),actionProps:{"data-ouia-component-id":"".concat(t.id,"-actions-kebab")}}),t.children&&o&&{cells:[{title:"function"==typeof t.children?t.children():t.children}],parent:2*r,fullWidth:!0}]}))).filter(Boolean)},w=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(null==t||null===(e=t.chips)||void 0===e?void 0:e[0])||{},o=n.value;return r.filter((function(t){return t!==o}))},E=function(t,e,r){var n,o,a=null==t||null===(n=t.chips)||void 0===n?void 0:n[0];return void 0!==(null==e||null===(o=e[null==t?void 0:t.key])||void 0===o?void 0:o[null==a?void 0:a.key])&&(e[null==t?void 0:t.key][null==a?void 0:a.key]=!1),r&&r(e,!1),e},O=function(t){return null==t?void 0:t.reduce((function(t,e){return t||e.toString().includes("onSort:")}),!1)},L=function(t,e,r,o){return null==t?void 0:t.map((function(t){var i=t.props,u=t.transforms,l=t.cellFormatters;return y(y({},(0,a.Z)(t,m)),{},{transforms:[].concat((0,n.Z)(u||[]),(0,n.Z)(null!=i&&i.width?[(0,c.cellWidth)(i.width)]:[]),(0,n.Z)(e||r.length<=0||i&&i.isStatic||null!=u&&u.includes(c.sortable)||O(u)?[]:[c.sortable])),cellFormatters:[].concat((0,n.Z)(l||[]),(0,n.Z)(o?[c.expandable]:[]))})}))},Z=function(t,e){return Array(e).fill({fullWidth:!0,cells:Array(t).fill({title:u().createElement(d.O,null)})})}},2742:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>mt});var n=r(92950),o=r.n(n),a=r(71002),i=r(15861),u=r(29439),c=r(2443),l=r(89376),s=r(39173),f=r(52643),p=r(37619),h=r(45987),d=r(4942),v=r(44733),m=r(98490),g=r(62965),y=r(62410),b=r(7887),x=r(23279),w=r.n(x),E=r(91966),O=r.n(E),L=r(85564),Z=r.n(L),P=r(35161),S=r.n(P),j=r(93386),k=r.n(j),_=r(14035),I=r.n(_),D=r(50533),N=r(75662),C=r(58061),A=r(8622),T=r(32473),F=r(45250),G=r(52560),z=r(51023),M=r(63441),R=r(27254),U=r(30430),B=r(14293),W=r.n(B),H=["perPage","page","sortIndex","sortDirection"],Y=["name"],V=["name"],J=["sortIndex","sortDirection","perPage","page"];function $(){$=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),u=new P(o||[]);return n(i,"_invoke",{value:E(t,r,u)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function h(){}function d(){}function v(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&r.call(y,i)&&(m=y);var b=v.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,u,c){var l=f(t[n],t,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==(0,a.Z)(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){(0,d.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q={perPage:C.hu,page:1},X=[{title:"Name",transforms:[g.sortable,(0,g.cellWidth)(40)]},{title:"Total systems",transforms:[g.sortable,(0,g.cellWidth)(20)]},{title:"Last modified",transforms:[g.sortable,(0,g.cellWidth)(20)]}],tt={0:"",1:"name",2:"host_ids",3:"updated_at"},et={name:{paramName:"name"},perPage:{paramName:"per_page",transformFromParam:function(t){return parseInt(t)}},page:{paramName:"page",transformFromParam:function(t){return parseInt(t)}},sortIndex:{paramName:"order_by",transformToParam:function(t){return tt[t]},transformFromParam:function(t){return parseInt(Object.entries(tt).find((function(e){return(0,u.Z)(e,2)[1]===t}))[0])}},sortDirection:{paramName:"order_how"}};const rt=function(){var t=(0,D.useDispatch)(),e=(0,D.useSelector)((function(t){return t.groups})),r=e.rejected,a=e.uninitialized,l=e.loading,s=e.data,f=(0,N.useLocation)(),p=(0,n.useState)(q(q({},Q),function(){var t=arguments.length>1?arguments[1]:void 0,e=new URLSearchParams(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""),r=Array.from(e.entries()).filter((function(e){var r=(0,u.Z)(e,1)[0];return Object.values(t).find((function(t){return t.paramName===r}))})).map((function(e){var r=(0,u.Z)(e,2),n=r[0],o=r[1],a=Object.entries(t).find((function(t){return(0,u.Z)(t,2)[1].paramName===n})),i=(0,u.Z)(a,2),c=i[0],l=i[1].transformFromParam;return[c,l?l(o):o]}));return Object.fromEntries(r)}(f.search,et))),d=(0,u.Z)(p,2),x=d[0],E=d[1],L=(0,n.useState)([]),P=(0,u.Z)(L,2),j=P[0],_=P[1],C=(0,n.useState)([]),B=(0,u.Z)(C,2),K=B[0],rt=B[1],nt=(0,n.useState)({}),ot=(0,u.Z)(nt,2),at=ot[0],it=ot[1],ut=(0,n.useState)(!1),ct=(0,u.Z)(ut,2),lt=ct[0],st=ct[1],ft=(0,n.useState)(!1),pt=(0,u.Z)(ft,2),ht=pt[0],dt=pt[1],vt=(0,n.useState)(!1),mt=(0,u.Z)(vt,2),gt=mt[0],yt=mt[1],bt=(0,n.useState)(!1),xt=(0,u.Z)(bt,2),wt=xt[0],Et=xt[1],Ot=(0,n.useMemo)((function(){return(null==s?void 0:s.results)||[]}),[s]),Lt=(0,T.Z)().fetchBatched,Zt=(0,n.useCallback)(w()((function(e){var r=e.perPage,n=e.page,o=e.sortIndex,a=e.sortDirection,i=(0,h.Z)(e,H);if(void 0!==o&&void 0!==a){var u=tt[o],c=I()(a);return t((0,A.bt)(q(q({},i),{},{order_by:u,order_how:c}),{page:n,per_page:r}))}return t((0,A.bt)(i,{page:n,per_page:r}))}),500),[]);(0,n.useEffect)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=Object.fromEntries(Object.entries(t).filter((function(t){var r=(0,u.Z)(t,1)[0];return void 0!==e[r]})).map((function(t){var r=(0,u.Z)(t,2),n=r[0],o=r[1],a=e[n],i=a.paramName,c=a.transformToParam;return[i,c?c(o):o]}))),n=new URLSearchParams(r).toString(),o=window.location.pathname+"?"+n;window.history.replaceState(null,"",o)}(x,et),Zt(x)}),[x]),(0,n.useEffect)((function(){var t,e=Ot.map((function(t,e){return{cells:[o().createElement("span",{key:e},o().createElement(N.Link,{to:"groups/".concat(t.id)},t.name||t.id)),o().createElement("span",{key:e},W()(t.host_count)?"N/A":t.host_count.toString()),o().createElement("span",{key:e},W()(t.updated)?"N/A":o().createElement(y.Z,{date:t.updated}))],groupId:t.id,groupName:t.name,selected:K.includes(t.id)}}));_(e),it({id:K[0],name:null===(t=Ot.find((function(t){return t.id===K[0]})))||void 0===t?void 0:t.name})}),[Ot,K]);var Pt,St,jt=(0,n.useMemo)((function(){return[{type:"custom",label:"Name",filterValues:{children:o().createElement(m.M,{"data-ouia-component-type":"PF4/TextInput","data-ouia-component-id":"name-filter",placeholder:"Filter by name",value:x.name||"",onChange:function(t){x.name;var e=(0,h.Z)(x,Y);return E(q(q({},e),t.length>0?{name:t}:{}))},onClear:function(){x.name;var t=(0,h.Z)(x,V);return E(t)},isDisabled:r})}}]}),[x.name,r]),kt=function(){return E(Q)},_t={showDeleteButton:!!x.name,deleteTitle:"Reset filters",filters:x.name?[{category:"Name",chips:[{name:x.name,value:x.name}]}]:[],onDelete:kt},It=function(t,e){return E(q(q({},x),{},{page:e}))},Dt=function(t,e){return E(q(q({},x),{},{perPage:e,page:1}))},Nt=(0,n.useMemo)((function(){return a||l?(0,R.Eo)(X.length,x.perPage):r||0===j.length?[{fullWidth:!0,cells:[{title:r?o().createElement(c.Z,null):o().createElement(U.Z,{entities:"groups",onClearAll:kt}),props:{colSpan:X.length+1}}]}]:j}),[a,l,r,j,x.perPage]),Ct=(0,n.useCallback)((function(t,e){t.sortIndex,t.sortDirection,t.perPage,t.page;var r=(0,h.Z)(t,J);return Lt(M.jA,e,r)}),[]),At=function(){var t=(0,i.Z)($().mark((function t(){var e,r;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ct(x,null==s?void 0:s.total);case 2:e=t.sent,r=S()(Z()(S()(e,"results")),"id"),rt(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Tt=K.length===(null==s?void 0:s.total),Ft=0===K.length,Gt=S()(j,"groupId"),zt=0===O()(Gt,K).length;return o().createElement("div",{id:"groups-table"},o().createElement(F.Z,{isModalOpen:lt,setIsModalOpen:st,reloadData:function(){Zt(x)}}),o().createElement(z.Z,{isModalOpen:ht,setIsModalOpen:dt,reloadData:function(){return Zt(x)},modalState:at}),o().createElement(G.Z,{isModalOpen:gt,setIsModalOpen:yt,reloadData:function(){return Zt(x)},modalState:wt?at:K.length>1?{ids:K}:at}),o().createElement(b.Z,{pagination:{itemCount:(null==s?void 0:s.total)||0,page:x.page,perPage:x.perPage,onSetPage:It,onPerPageSelect:Dt,isCompact:!0,ouiaId:"pager",isDisabled:r},filterConfig:{items:jt},activeFiltersConfig:_t,bulkSelect:{items:[{title:"Select none",onClick:function(){return rt([])},props:{isDisabled:Ft}},{title:"".concat(zt?"Deselect":"Select"," page (").concat((null==s?void 0:s.count)||0," items)"),onClick:function(){if(zt){var t=O()(K,Gt);rt(t)}else rt(k()(K,Gt))}},{title:"".concat(Tt?"Deselect":"Select"," all (").concat((null==s?void 0:s.total)||0," items)"),onClick:(St=(0,i.Z)($().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Tt){t.next=4;break}rt([]),t.next=6;break;case 4:return t.next=6,At();case 6:case"end":return t.stop()}}),t)}))),function(){return St.apply(this,arguments)})}],checked:K.length>0,onSelect:(Pt=(0,i.Z)($().mark((function t(e){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,At();case 3:t.next=6;break;case 5:rt([]);case 6:case"end":return t.stop()}}),t)}))),function(t){return Pt.apply(this,arguments)}),ouiaId:"groups-selector",count:K.length},actionsConfig:{actions:[{label:"Create group",onClick:function(){return st(!0)}},{label:"Rename group",onClick:function(){return dt(!0)},props:{isDisabled:1!==K.length}},{label:K.length>1?"Delete groups":"Delete group",onClick:function(){Et(!1),yt(!0)},props:{isDisabled:0===K.length}}]}}),o().createElement(g.Table,{"aria-label":"Groups table",ouiaId:"groups-table",variant:g.TableVariant.compact,cells:X,rows:Nt,sortBy:{index:x.sortIndex,direction:x.sortDirection},onSort:function(t,e,r){E(q(q({},x),{},{sortIndex:e,sortDirection:r}))},isStickyHeader:!0,onSelect:function(t,e,r,n){var o=n.groupId;rt(e?k()(K,[o]):O()(K,[o]))},canSelectAll:!1,actions:[{title:"Rename group",onClick:function(t,e,r){var n=r.groupId,o=r.groupName;it({id:n,name:o}),dt(!0)}},{title:"Delete group",onClick:function(t,e,r){var n=r.groupId,o=r.groupName;Et(!0),it({id:n,name:o}),yt(!0)}}]},o().createElement(g.TableHeader,null),o().createElement(g.TableBody,null)),o().createElement(v.t,{itemCount:(null==s?void 0:s.total)||0,page:x.page,perPage:x.perPage,onSetPage:It,onPerPageSelect:Dt,variant:v.a.bottom,widgetId:"pagination-options-menu-bottom",ouiaId:"pager",isDisabled:r}))};var nt=r(47173),ot=r(9947),at=r(75106),it=r(38424),ut=r(35293),ct=r(38779),lt=r(15265),st=r(7081),ft=r(14299);const pt=function(){var t=(0,n.useState)(!1),e=(0,u.Z)(t,2),r=e[0],a=e[1];return o().createElement(ot.u,{"data-ouia-component-id":"empty-state","data-ouia-component-type":"PF4/EmptyState","data-ouia-safe":!0},o().createElement(F.Z,{isModalOpen:r,setIsModalOpen:a}),o().createElement(it.k,{icon:st.ZP,color:ft.pD.value}),o().createElement(ct.D,{headingLevel:"h4",size:"lg"},"Create a system group"),o().createElement(at.B,null,"Manage device operations efficiently by creating system groups."),o().createElement(nt.zx,{variant:"primary",onClick:function(){return a(!0)}},"Create group"),o().createElement(ut.i,null,o().createElement(nt.zx,{variant:"link",icon:o().createElement(lt.ZP,null),iconPosition:"right"},"Learn more about system groups")))};function ht(){ht=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),u=new P(o||[]);return n(i,"_invoke",{value:E(t,r,u)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function h(){}function d(){}function v(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&r.call(y,i)&&(m=y);var b=v.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,u,c){var l=f(t[n],t,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==(0,a.Z)(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}const dt=function(){var t=(0,n.useState)(!0),e=(0,u.Z)(t,2),r=e[0],a=e[1],h=(0,n.useState)(!1),d=(0,u.Z)(h,2),v=d[0],m=d[1],g=(0,n.useState)(!1),y=(0,u.Z)(g,2),b=y[0],x=y[1];return(0,n.useEffect)((0,i.Z)(ht().mark((function t(){return ht().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,M.jA)();case 3:t.sent.total>0&&m(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),x(!0);case 11:a(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),[]),o().createElement(o().Fragment,null,o().createElement(l.Z,null,o().createElement(s.Z,{title:"Groups"})),o().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},b?o().createElement(c.Z,null):r?o().createElement(f.b,null,o().createElement(p.$,null)):v?o().createElement(rt,null):o().createElement(pt,null)))};var vt=r(55140);const mt=function(){var t=(0,vt.Z)();return(0,n.useEffect)((function(){var e;null==t||null===(e=t.updateDocumentTitle)||void 0===e||e.call(t,"Inventory Groups | Red Hat Insights")}),[t]),o().createElement(dt,null)}},47443:(t,e,r)=>{var n=r(42118);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},1196:t=>{t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},62663:t=>{t.exports=function(t,e,r,n){var o=-1,a=null==t?0:t.length;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}},49029:t=>{var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},20731:(t,e,r)=>{var n=r(88668),o=r(47443),a=r(1196),i=r(29932),u=r(7518),c=r(74757);t.exports=function(t,e,r,l){var s=-1,f=o,p=!0,h=t.length,d=[],v=e.length;if(!h)return d;r&&(e=i(e,u(r))),l?(f=a,p=!1):e.length>=200&&(f=c,p=!1,e=new n(e));t:for(;++s<h;){var m=t[s],g=null==r?m:r(m);if(m=l||0!==m?m:0,p&&g==g){for(var y=v;y--;)if(e[y]===g)continue t;d.push(m)}else f(e,g,l)||d.push(m)}return d}},41848:t=>{t.exports=function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}},42118:(t,e,r)=>{var n=r(41848),o=r(62722),a=r(42351);t.exports=function(t,e,r){return e==e?a(t,e,r):n(t,o,r)}},62722:t=>{t.exports=function(t){return t!=t}},18674:t=>{t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},10611:(t,e,r)=>{var n=r(34865),o=r(71811),a=r(65776),i=r(13218),u=r(40327);t.exports=function(t,e,r,c){if(!i(t))return t;for(var l=-1,s=(e=o(e,t)).length,f=s-1,p=t;null!=p&&++l<s;){var h=u(e[l]),d=r;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(l!=f){var v=p[h];void 0===(d=c?c(v,h,p):void 0)&&(d=i(v)?v:a(e[l+1])?[]:{})}n(p,h,d),p=p[h]}return t}},45652:(t,e,r)=>{var n=r(88668),o=r(47443),a=r(1196),i=r(74757),u=r(23593),c=r(21814);t.exports=function(t,e,r){var l=-1,s=o,f=t.length,p=!0,h=[],d=h;if(r)p=!1,s=a;else if(f>=200){var v=e?null:u(t);if(v)return c(v);p=!1,s=i,d=new n}else d=e?[]:h;t:for(;++l<f;){var m=t[l],g=e?e(m):m;if(m=r||0!==m?m:0,p&&g==g){for(var y=d.length;y--;)if(d[y]===g)continue t;e&&d.push(g),h.push(m)}else s(d,g,r)||(d!==h&&d.push(g),h.push(m))}return h}},35393:(t,e,r)=>{var n=r(62663),o=r(53816),a=r(58748),i=RegExp("['’]","g");t.exports=function(t){return function(e){return n(a(o(e).replace(i,"")),t,"")}}},23593:(t,e,r)=>{var n=r(58525),o=r(50308),a=r(21814),i=n&&1/a(new n([,-0]))[1]==1/0?function(t){return new n(t)}:o;t.exports=i},69389:(t,e,r)=>{var n=r(18674)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});t.exports=n},93157:t=>{var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},42351:t=>{t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},2757:t=>{var e="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",a="\\d+",i="["+e+"]",u="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bf"+e+r+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+r+"]",f="(?:"+i+"|"+u+")",p="(?:"+s+"|"+u+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",d="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?",g=m+v+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")"+m+v+")*",y="(?:"+["[\\u2700-\\u27bf]",c,l].join("|")+")"+g,b=RegExp([s+"?"+i+"+"+h+"(?="+[o,s,"$"].join("|")+")",p+"+"+d+"(?="+[o,s+f,"$"].join("|")+")",s+"?"+f+"+"+h,s+"+"+d,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,y].join("|"),"g");t.exports=function(t){return t.match(b)||[]}},50361:(t,e,r)=>{var n=r(85990);t.exports=function(t){return n(t,5)}},53816:(t,e,r)=>{var n=r(69389),o=r(79833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,n).replace(i,"")}},14293:t=>{t.exports=function(t){return null==t}},50308:t=>{t.exports=function(){}},36968:(t,e,r)=>{var n=r(10611);t.exports=function(t,e,r){return null==t?t:n(t,e,r)}},93386:(t,e,r)=>{var n=r(21078),o=r(5976),a=r(45652),i=r(29246),u=o((function(t){return a(n(t,1,i,!0))}));t.exports=u},14035:(t,e,r)=>{var n=r(35393)((function(t,e,r){return t+(r?" ":"")+e.toUpperCase()}));t.exports=n},58748:(t,e,r)=>{var n=r(49029),o=r(93157),a=r(79833),i=r(2757);t.exports=function(t,e,r){return t=a(t),void 0===(e=r?void 0:e)?o(t)?i(t):n(t):t.match(e)||[]}},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},30187:()=>{},78752:()=>{},74282:()=>{},36974:()=>{},53336:()=>{},84506:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(83878),o=r(59199),a=r(40181),i=r(25267);function u(t){return(0,n.Z)(t)||(0,o.Z)(t)||(0,a.Z)(t)||(0,i.Z)()}}}]);