!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,l=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(A,a)&&A[a]&&l.push(A[a][0]),A[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return R.push.apply(R,c||[]),n()}function n(){for(var e,t=0;t<R.length;t++){for(var n=R[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==A[o]&&(r=!1)}r&&(R.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--b&&0===g&&S()}(e,t),r&&r(e,t)};var a,o=!0,i="9dcb2d39ed896b3ad874",c={},s=[],l=[];function u(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(y={})[t]=e[t],f("ready");break;case"ready":N(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:_,apply:j,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return a=void 0,n}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,y,h,v,b=0,g=0,E={},O={},w={};function I(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=k.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(D()?"ready":"idle"),null;O={},E={},w=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},A)T(n);return"prepare"===p&&0===g&&0===b&&S(),t}));var t}function T(e){w[e]?(O[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function S(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return j(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(I(n));e.resolve(t)}}function j(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,l,u,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((u=P[o])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=P[s];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[o]?(n[s]||(n[s]=[]),m(n[s],[o])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}D();var b={},g=[],E={},O=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var _ in y)if(Object.prototype.hasOwnProperty.call(y,_)){var T;d=I(_),T=y[_]?p(d):{type:"disposed",moduleId:_};var S=!1,j=!1,N=!1,R="";switch(T.chain&&(R="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(S=new Error("Aborted because of self decline: "+T.moduleId+R));break;case"declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+R));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(T),n.ignoreUnaccepted||(S=new Error("Aborted because "+d+" is not accepted"+R));break;case"accepted":n.onAccepted&&n.onAccepted(T),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(T),N=!0;break;default:throw new Error("Unexception type "+T.type)}if(S)return f("abort"),Promise.reject(S);if(j)for(d in E[d]=y[d],m(g,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,d)&&(b[d]||(b[d]=[]),m(b[d],T.outdatedDependencies[d]));N&&(m(g,[T.moduleId]),E[d]=O)}var C,x=[];for(o=0;o<g.length;o++)d=g[o],P[d]&&P[d].hot._selfAccepted&&E[d]!==O&&!P[d].hot._selfInvalidated&&x.push({module:d,parents:P[d].parents.slice(),errorHandler:P[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete A[e]}(e)}));var L,M,H=g.slice();for(;H.length>0;)if(d=H.pop(),u=P[d]){var F={},B=u.hot._disposeHandlers;for(l=0;l<B.length;l++)(r=B[l])(F);for(c[d]=F,u.hot.active=!1,delete P[d],delete b[d],l=0;l<u.children.length;l++){var G=P[u.children[l]];G&&((C=G.parents.indexOf(d))>=0&&G.parents.splice(C,1))}}for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(u=P[d]))for(M=b[d],l=0;l<M.length;l++)L=M[l],(C=u.children.indexOf(L))>=0&&u.children.splice(C,1);f("apply"),void 0!==h&&(i=h,h=void 0);for(d in y=void 0,E)Object.prototype.hasOwnProperty.call(E,d)&&(e[d]=E[d]);var U=null;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(u=P[d])){M=b[d];var Y=[];for(o=0;o<M.length;o++)if(L=M[o],r=u.hot._acceptedDependencies[L]){if(-1!==Y.indexOf(r))continue;Y.push(r)}for(o=0;o<Y.length;o++){r=Y[o];try{r(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[o],error:e}),n.ignoreErrored||U||(U=e)}}}for(o=0;o<x.length;o++){var V=x[o];d=V.module,s=V.parents,a=d;try{k(d)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||U||(U=e)}}if(U)return f("fail"),Promise.reject(U);if(v)return t(n).then((function(e){return g.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(g)}))}(t=t||{})}function D(){if(v)return y||(y={}),v.forEach(N),v=void 0,!0}function N(t){Object.prototype.hasOwnProperty.call(y,t)||(y[t]=e[t])}var P={},A={0:0},R=[];function k(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return k;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),g++,k.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===p&&(E[e]||T(e),0===g&&0===b&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=P,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/apps/inventory/",k.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],x=C.push.bind(C);C.push=t,C=C.slice();for(var L=0;L<C.length;L++)t(C[L]);var M=x;R.push([1049,1,3,2,4]),n()}({1045:function(e,t,n){var r=n(430);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(430,(function(){var t=n(430);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1049:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),c=n(69),s=n(19),l=n(691),u=n.n(l),d=n(112),p=n.n(d),f=n(432),m=n.n(f),y=n(433),h=n(77),v=n.n(h),b=n(169),g=n.n(b),E=n(661),O=n.n(E),w=n(223),I=n.n(w)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),_=O()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(I)),(function(e){return e})),T=n(306),S=n.n(T),j=n(663),D=n.n(j),N=(n(907),n(46)),P=function(){return a.a.createElement(D.a,{customItnl:!0,intlProps:{locale:navigator.language},inventoryId:Object(N.m)().inventoryId})},A=n(667),R=n.n(A),k=(n(959),function(){return a.a.createElement(R.a,{customItnlProvider:!0,entity:{id:Object(N.m)().inventoryId}})}),C=n(671),x=n.n(C),L=function(){return a.a.createElement(x.a,{store:Object(s.useStore)()})},M=function(){return a.a.createElement(S.a,{store:Object(s.useStore)()})},H=n(244),F=n(228),B=n(150),G=n(690),U=n.n(G);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={loaded:!1,selected:new Map},K=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function z(e,t){var n=t.payload;return V(V({},e),{},{rows:Object(B.mergeArraysByKey)([e.rows,n.results]),entities:Object(B.mergeArraysByKey)([e.entities,n.results])})}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return V(V({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:M},K(n&&n.insights)&&{title:"Advisor",name:"advisor",component:L},K(n&&n.insights)&&{title:"Vulnerability",name:"vulnerabilities",component:k},K(n&&n.insights)&&{title:"Compliance",name:"compliance",component:P},K(n&&n.insights)&&{title:"Patch",name:"patch",component:H.b}].filter(Boolean)})}function W(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,V(V({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return V(V({},e),{},{selected:new Map(r)})}function X(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),V(V({},e),{},{selected:new Map(r)})}function Q(e,t){var n=t.payload;return V(V({},e),{},{rows:Object(B.mergeArraysByKey)([e.rows,n.results.map((function(t){return V(V({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})}function Z(e,t){var n=t.payload;return V(V({},e),{},{activeFilters:(e.activeFilters||[{}]).map((function(e){return V(V({},e||{}),{},v()({},n.filterKey,n.filterValue))}))})}var $,ee={notifications:U.a,systemProfileStore:T.systemProfileStore},te=ee;function ne(e){var t=e.actionType,n=e.callback;return $.addNew({on:t,callback:n})}var re=n(692),ae=n.n(re),oe=n(693),ie=n.n(oe),ce=n(694),se=n.n(ce),le=n(695),ue=n.n(le),de=n(546),pe=n.n(de),fe=n(3),me=n.n(fe),ye=n(696),he=n.n(ye),ve=n(319),be=n.n(ve),ge=n(126),Ee=n.n(ge),Oe=n(201),we=n.n(Oe),Ie=n(153),_e=n.n(Ie),Te=(n(654),n(168)),Se=n.n(Te),je=n(202),De=n(320),Ne=n(185),Pe=n.n(Ne);var Ae=new(n(697).HostsApi)(void 0,"/api/inventory/v1",Pe.a);var Re=function(){return{type:_.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ke=n(139),Ce=n(140),xe=n(82),Le=n(657),Me=n(659),He=n(587),Fe=n(582),Be=n(197),Ge=n(351),Ue=function(){return insights.loadInventory({ReactRedux:s,React:a.a,reactRouterDom:c,pfReactTable:{Table:xe.b,TableBody:Le.a,TableHeader:Me.a,TableGridBreakpoint:xe.d,cellWidth:He.a,TableVariant:xe.e,sortable:Fe.a,expandable:Be.b,SortByDirection:xe.a,classNames:Ge.b}})},Ye=n(142),Ve=n(158),qe=n(137),Ke=n(120),ze=n(138),Je=n(109),We=n(301),Xe=n(302),Qe=n(29),Ze=n(304),$e=n(220),et=n.n($e),tt=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,c="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),c=1===o.length?c:"systems"):t=o.displayName,a.a.createElement(Ve.Modal,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(qe.Split,{hasGutter:!0},a.a.createElement(Ke.SplitItem,null,a.a.createElement(et.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Ke.SplitItem,{isFilled:!0},a.a.createElement(ze.Stack,{hasGutter:!0},a.a.createElement(Je.StackItem,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",c," to add it back to your inventory."),a.a.createElement(Je.StackItem,null,"To disable the daily upload for this ",c,", use the following command:"),a.a.createElement(Je.StackItem,null,a.a.createElement(Ze.ClipboardCopy,null,"insights-client --unregister"))))),a.a.createElement(We.Level,{hasGutter:!0},a.a.createElement(Xe.LevelItem,null,a.a.createElement(Qe.Button,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Qe.Button,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},nt=me.a.shape({id:me.a.string,displayName:me.a.string});tt.propTypes={isModalOpen:me.a.bool,currentSytem:me.a.oneOfType([nt,me.a.arrayOf(nt)]),handleModalToggle:me.a.func,onConfirm:me.a.func},tt.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var rt=tt,at=n(698),ot=n.n(at);function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?it(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},lt=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,c=e.rows,l=e.updateDisplayName,u=e.onSelectRows,p=e.selected,f=e.status,m=e.setFilter,y=e.history,h=Object(r.useRef)(null),b=Object(r.useState)(),g=_e()(b,2),E=g[0],O=g[1],w=Object(r.useState)(!1),I=_e()(w,2),T=I[0],S=I[1],j=Object(r.useState)({}),D=_e()(j,2),N=D[0],P=D[1],A=Object(r.useState)([]),R=_e()(A,2),k=R[0],C=R[1],x=Object(r.useState)(!1),L=_e()(x,2),M=L[0],H=L[1],B=Object(s.useStore)(),G=function(){var e=we()(Ee.a.mark((function e(){var n,r,a,o,i,c;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Ue();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(ct({},a((s=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(F.applyReducerHash)((s={},v()(s,_.GET_ENTITIES_FULFILLED,z),v()(s,l,Q),v()(s,"".concat(_.REMOVE_ENTITY,"_FULFILLED"),X),v()(s,"SELECT_ENTITY",W),v()(s,"FILTER_SELECT",(function(e){return V(V({},e),{},{selected:{}})})),v()(s,"SET_INVENTORY_FILTER",Z),s),q))))),f&&f.length>0&&m(Array.isArray(f)?f:[f],"staleFilter"),i=r(B),c=i.InventoryTable,O((function(){return c}));case 11:case"end":return e.stop()}var s,l}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e,t){C(e.filters);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams;return e.forEach((function(e){"staleFilter"in e&&e.staleFilter.forEach((function(e){return t.append("status",e)}))})),t}(e.filters).toString();y.push({search:n}),!t&&h&&h.current?h.current.onRefreshData(e):t&&t(e)};Object(r.useEffect)((function(){G()}),[]);var Y=function(){return p?p.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(je.PageHeader,{className:"pf-m-light"},a.a.createElement(je.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(De.Main,null,a.a.createElement(ke.Grid,{gutter:"md"},a.a.createElement(Ce.GridItem,{span:12},E&&a.a.createElement(E,{store:B,ref:h,hasCheckbox:!0,showTags:!0,onRefresh:U,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;P((function(){return{id:r,displayName:a}})),S((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){P((function(){return n})),H((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===Y(),variant:"secondary",onClick:function(){P(Array.from(p.values())),S(!0)}}}]},bulkSelect:{count:Y(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},ct({},i&&c&&c.length>0?{title:"Select page (".concat(c.length,")"),onClick:function(){u(0,!0)}}:{})],checked:st(c,p),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return y.push("/".concat(t).concat(n?"/".concat(n):""))}})))),a.a.createElement(rt,{handleModalToggle:S,isModalOpen:T,currentSytem:N,onConfirm:function(){var e,t;Array.isArray(N)?(t=N.map((function(e){return e.id})),e=N.length>1?"".concat(N.length," systems"):N[0].display_name):(e=N.displayName,t=[N.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return U({filters:k})})),S(!1)}}),a.a.createElement(ot.a,{title:"Edit display name",isOpen:M,value:N.display_name,onCancel:function(){return H(!1)},onSubmit:function(e){l(N.id,e,h.current.onRefreshData),H(!1)}}))};lt.contextTypes={store:me.a.object},lt.propTypes={rows:me.a.arrayOf(me.a.shape({id:me.a.string,selected:me.a.bool})),loaded:me.a.bool,loadEntity:me.a.func,clearNotifications:me.a.func,deleteEntity:me.a.func,addNotification:me.a.func,updateDisplayName:me.a.func,onSelectRows:me.a.func,setFilter:me.a.func,selected:me.a.map,status:me.a.oneOfType([me.a.arrayOf(me.a.string),me.a.string]),history:me.a.shape({push:me.a.func})};var ut=Se()(Object(s.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Re())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:_.REMOVE_ENTITY,payload:Ae.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(Ye.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:_.UPDATE_DISPLAY_NAME,payload:Ae.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t,n){return e(function(e,t){return{type:"SET_INVENTORY_FILTER",payload:{filterKey:t,filterValue:e}}}(t,n))}}}))(lt)),dt=n(699),pt=n(548),ft=n(161),mt=(n(1042),n(1043),n(1044),n(547)),yt=n(30),ht=n.n(yt),vt=function(e){var t=e.entity,n=e.currentApp,o=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=_e()(l,2),p=u[0],f=u[1],m=Object(s.useStore)(),y=p.InventoryDetail,h=p.AppInfo,b=function(){var e=we()(Ee.a.mark((function e(){var t,n,r,a,c,s,l,u;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,Ue();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(a(Object(F.applyReducerHash)(v()({},_.GET_ENTITY_FULFILLED,J),q))),c=ne({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),c()}))}}),s=n(m),l=s.InventoryDetailHead,u=s.AppInfo,mt.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:mt.SystemCvesStore}),H.a&&Object(d.getRegistry)().register({SystemAdvisoryListStore:H.a}),f({InventoryDetail:l,AppInfo:u});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){b()}),[]);var g={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return a.a.createElement(r.Fragment,null,a.a.createElement(je.PageHeader,{className:ht()("pf-m-light ins-inventory-detail",g)},a.a.createElement(dt.Breadcrumb,null,a.a.createElement(pt.BreadcrumbItem,null,a.a.createElement(c.Link,{to:Et.table},"Inventory")),a.a.createElement(pt.BreadcrumbItem,{isActive:!0},a.a.createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:a.a.createElement(ft.Skeleton,{size:ft.SkeletonSize.xs})))),y&&a.a.createElement(y,{hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:!0})),a.a.createElement(De.Main,{className:ht()(g)},a.a.createElement(ke.Grid,{gutter:"md"},a.a.createElement(Ce.GridItem,{span:12},h&&a.a.createElement(h,{showTags:!0})))))};vt.contextTypes={store:me.a.object},vt.propTypes={history:me.a.object,entity:me.a.object,loadEntity:me.a.func,clearNotifications:me.a.func,currentApp:me.a.string};var bt=Se()(Object(s.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(Re())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(vt)),gt=function(e){var t=e.component,n=e.rootClass,r=be()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(N.d,he()({},r,{component:t}))};gt.propTypes={component:me.a.func,rootClass:me.a.string};var Et={table:"/",detail:"/:inventoryId"};var Ot=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(Et).some((function(e){return Object(N.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(Et.table+location.search),a.a.createElement(N.g,null,a.a.createElement(gt,{exact:!0,path:Et.table,render:function(){return a.a.createElement(ut,{status:i.getAll("status")})},rootClass:"inventory"}),a.a.createElement(gt,{path:Et.detail,component:bt,rootClass:"inventory"}))};Ot.propTypes={childProps:me.a.shape({history:me.a.shape({push:me.a.func,location:me.a.shape({search:me.a.string})})})};n(1045);var wt,It=n(700),_t=n.n(It);function Tt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe()(e);if(t){var a=pe()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return ue()(this,n)}}var St=p()()(wt=function(e){se()(n,e);var t=Tt(n);function n(e){var r;return ae()(this,n),(r=t.call(this,e)).getRegistry().register(te),r}return ie()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_t.a,null),a.a.createElement(Ot,{childProps:this.props}))}}]),n}(r.Component))||wt;St.propTypes={history:me.a.object};var jt=Se()(Object(s.connect)()(St));i.a.render(a.a.createElement(s.Provider,{store:function(){$=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[$.getMiddleware(),y.default,m()({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(c.BrowserRouter,{basename:Object(B.getBaseName)(window.location.pathname)},a.a.createElement(jt,null))),document.getElementById("root"))},426:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(655),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}.ins-c-inventory__detail--breadcrumb-name{width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n',""])},430:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(655),""),t.i(n(1046),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},654:function(e,t,n){var r=n(426);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(426,(function(){var t=n(426);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}});
//# sourceMappingURL=App.js.map