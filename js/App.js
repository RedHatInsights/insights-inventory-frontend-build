!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(N,a)&&N[a]&&s.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(F&&F(t);s.length;)s.shift()();return k.push.apply(k,c||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(k.splice(t--,1),e=R(R.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--g&&0===b&&j()}(e,t),r&&r(e,t)};var a,o=!0,i="bbe1ff7cd0c2542d92c3",c={},l=[],s=[];function u(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(y={})[t]=e[t],f("ready");break;case"ready":D(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:I,apply:S,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return a=void 0,n}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,y,m,v,g=0,b=0,E={},O={},_={};function w(e){return+e+""===e?+e:e}function I(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=R.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(A()?"ready":"idle"),null;O={},E={},_=e.c,m=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in y={},N)T(n);return"prepare"===p&&0===b&&0===g&&j(),t}));var t}function T(e){_[e]?(O[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function j(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then((function(){return S(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function S(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,s,u,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((u=P[o])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<u.parents.length;c++){var l=u.parents[c],s=P[l];if(s){if(s.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),h(n[l],[o])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}A();var g={},b=[],E={},O=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var I in y)if(Object.prototype.hasOwnProperty.call(y,I)){var T;d=w(I),T=y[I]?p(d):{type:"disposed",moduleId:I};var j=!1,S=!1,D=!1,k="";switch(T.chain&&(k="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+T.moduleId+k));break;case"declined":n.onDeclined&&n.onDeclined(T),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+k));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(T),n.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+k));break;case"accepted":n.onAccepted&&n.onAccepted(T),S=!0;break;case"disposed":n.onDisposed&&n.onDisposed(T),D=!0;break;default:throw new Error("Unexception type "+T.type)}if(j)return f("abort"),Promise.reject(j);if(S)for(d in E[d]=y[d],h(b,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,d)&&(g[d]||(g[d]=[]),h(g[d],T.outdatedDependencies[d]));D&&(h(b,[T.moduleId]),E[d]=O)}var C,L=[];for(o=0;o<b.length;o++)d=b[o],P[d]&&P[d].hot._selfAccepted&&E[d]!==O&&!P[d].hot._selfInvalidated&&L.push({module:d,parents:P[d].parents.slice(),errorHandler:P[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete N[e]}(e)}));var x,F,M=b.slice();for(;M.length>0;)if(d=M.pop(),u=P[d]){var H={},G=u.hot._disposeHandlers;for(s=0;s<G.length;s++)(r=G[s])(H);for(c[d]=H,u.hot.active=!1,delete P[d],delete g[d],s=0;s<u.children.length;s++){var B=P[u.children[s]];B&&((C=B.parents.indexOf(d))>=0&&B.parents.splice(C,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(u=P[d]))for(F=g[d],s=0;s<F.length;s++)x=F[s],(C=u.children.indexOf(x))>=0&&u.children.splice(C,1);f("apply"),void 0!==m&&(i=m,m=void 0);for(d in y=void 0,E)Object.prototype.hasOwnProperty.call(E,d)&&(e[d]=E[d]);var U=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(u=P[d])){F=g[d];var Y=[];for(o=0;o<F.length;o++)if(x=F[o],r=u.hot._acceptedDependencies[x]){if(-1!==Y.indexOf(r))continue;Y.push(r)}for(o=0;o<Y.length;o++){r=Y[o];try{r(F)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:F[o],error:e}),n.ignoreErrored||U||(U=e)}}}for(o=0;o<L.length;o++){var V=L[o];d=V.module,l=V.parents,a=d;try{R(d)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||U||(U=e)}}if(U)return f("fail"),Promise.reject(U);if(v)return t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function A(){if(v)return y||(y={}),v.forEach(D),v=void 0,!0}function D(t){Object.prototype.hasOwnProperty.call(y,t)||(y[t]=e[t])}var P={},N={0:0},k=[];function R(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:u(t),parents:(s=l,l=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return R;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),R(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),b++,R.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(E[e]||T(e),0===b&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.m=e,R.c=P,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/beta/apps/inventory/",R.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],L=C.push.bind(C);C.push=t,C=C.slice();for(var x=0;x<C.length;x++)t(C[x]);var F=L;k.push([1433,1,3,2,4]),n()}({1191:function(e,t){},1193:function(e,t){},1235:function(e,t){},1236:function(e,t){},1427:function(e,t,n){var r=n(570);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(15)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(570,(function(){var t=n(570);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1433:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(39),i=n.n(o),c=n(90),l=n(31),s=n(909),u=n.n(s),d=n(151),p=n.n(d),f=n(573),h=n.n(f),y=n(574),m=n(98),v=n.n(m),g=n(122),b=n.n(g),E=n(219),O=n.n(E),_=n(862),w=n.n(_),I=n(206),T=n.n(I),j=T()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),S=w()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],O()(j)),(function(e){return e})),A=function(e,t){var n=t.split("/"),r=b()(n,2),a=r[0],o=r[1];o||(o=a,a=null);var i=o.split("="),c=b()(i,2),l=c[0],s=c[1],u=void 0===s?null:s,d=e.findIndex((function(e){return e.namespace===a})),p=e[d]||{category:a,key:a,type:"tags",values:[]};return p.values.push({key:l,tagKey:l,value:u,group:{label:a,value:a,type:"checkbox"}}),e[d]||e.push(p),e},D=n(401),P=n.n(D),N=n(883),k=n.n(N),R=(n(1159),n(70)),C=function(){return a.a.createElement(k.a,{customItnl:!0,intlProps:{locale:navigator.language},inventoryId:Object(R.m)().inventoryId})},L=n(887),x=n.n(L),F=(n(1386),function(){return a.a.createElement(x.a,{customItnlProvider:!0,entity:{id:Object(R.m)().inventoryId}})}),M=n(903),H=n.n(M),G=function(){return a.a.createElement(H.a,{store:Object(l.useStore)()})},B=function(){return a.a.createElement(P.a,{store:Object(l.useStore)()})},U=n(324),Y=n(308),V=n(189),W=n(908),q=n.n(W);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={loaded:!1,selected:new Map},X=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function Q(e,t){var n=t.payload;return z(z({},e),{},{rows:Object(V.mergeArraysByKey)([e.rows,n.results]),entities:Object(V.mergeArraysByKey)([e.entities,n.results])})}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return z(z({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:B},X(n&&n.insights)&&{title:"Advisor",name:"advisor",component:G},X(n&&n.insights)&&{title:"Vulnerability",name:"vulnerabilities",component:F},X(n&&n.insights)&&{title:"Compliance",name:"compliance",component:C},X(n&&n.insights)&&{title:"Patch",name:"patch",component:U.b}].filter(Boolean)})}function $(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,z(z({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return z(z({},e),{},{selected:new Map(r)})}function ee(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),z(z({},e),{},{selected:new Map(r)})}function te(e,t){var n=t.payload;return z(z({},e),{},{rows:Object(V.mergeArraysByKey)([e.rows,n.results.map((function(t){return z(z({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})}function ne(e,t){var n=t.payload;return z(z({},e),{},{activeFilters:n.filtersList})}function re(e,t){var n=t.payload;return z(z({},e),{},{perPage:n.perPage,page:n.page})}var ae,oe={notifications:q.a,systemProfileStore:D.systemProfileStore},ie=function(e){var t,n=e.LOAD_ENTITIES_FULFILLED;return Object(Y.applyReducerHash)((t={},v()(t,S.GET_ENTITIES_FULFILLED,Q),v()(t,n,te),v()(t,"".concat(S.REMOVE_ENTITY,"_FULFILLED"),ee),v()(t,"SELECT_ENTITY",$),v()(t,"FILTER_SELECT",(function(e){return z(z({},e),{},{selected:{}})})),v()(t,"SET_INVENTORY_FILTER",ne),v()(t,"SET_PAGINATION",re),t),J)},ce=oe;function le(e){var t=e.actionType,n=e.callback;return ae.addNew({on:t,callback:n})}var se=n(910),ue=n.n(se),de=n(97),pe=n.n(de),fe=n(911),he=n.n(fe),ye=n(912),me=n.n(ye),ve=n(700),ge=n.n(ve),be=n(5),Ee=n.n(be),Oe=n(95),_e=n.n(Oe),we=n(420),Ie=n.n(we),Te=n(19),je=n.n(Te),Se=n(35),Ae=n.n(Se),De=(n(855),n(217)),Pe=n.n(De),Ne=n(259),ke=n(421),Re=n(240),Ce=n.n(Re);var Le=new(n(913).HostsApi)(void 0,"/api/inventory/v1",Ce.a);var xe=function(){return{type:S.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Fe=n(244),Me=n(245),He=n(110),Ge=n(858),Be=n(859),Ue=n(741),Ye=n(736),Ve=n(248),We=n(454),qe=n(914),Ke=function(){return insights.loadInventory({ReactRedux:l,React:a.a,reactRouterDom:c,pfReactTable:{Table:He.b,TableBody:Ge.a,TableHeader:Be.a,TableGridBreakpoint:He.d,cellWidth:Ue.a,TableVariant:He.e,sortable:Ye.a,expandable:Ve.b,SortByDirection:He.a,classNames:We.b},pfReact:qe.reactCore})},ze=n(141),Je=n(239),Xe=n(290),Qe=n(249),Ze=n(178),$e=n(142),et=n(602),tt=n(603),nt=n(69),rt=n(399),at=n(590),ot=n.n(at),it=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,c="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),c=1===o.length?c:"systems"):t=o.displayName,a.a.createElement(Je.Modal,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Xe.Split,{hasGutter:!0},a.a.createElement(Qe.SplitItem,null,a.a.createElement(ot.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Qe.SplitItem,{isFilled:!0},a.a.createElement(Ze.Stack,{hasGutter:!0},a.a.createElement($e.StackItem,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",c," to add it back to your inventory."),a.a.createElement($e.StackItem,null,"To disable the daily upload for this ",c,", use the following command:"),a.a.createElement($e.StackItem,null,a.a.createElement(rt.ClipboardCopy,null,"insights-client --unregister"))))),a.a.createElement(et.Level,{hasGutter:!0},a.a.createElement(tt.LevelItem,null,a.a.createElement(nt.Button,{variant:"danger",onClick:i},"Remove"),a.a.createElement(nt.Button,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},ct=Ee.a.shape({id:Ee.a.string,displayName:Ee.a.string});it.propTypes={isModalOpen:Ee.a.bool,currentSytem:Ee.a.oneOfType([ct,Ee.a.arrayOf(ct)]),handleModalToggle:Ee.a.func,onConfirm:Ee.a.func},it.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var lt=it,st=n(915),ut=n.n(st);function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},ht=function(e){var t=e.category;return e.values.map((function(e){var n=e.key,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},yt={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",T()(n,ht))}},mt=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,c=e.rows,s=e.updateDisplayName,u=e.onSelectRows,p=e.selected,f=e.status,h=e.setFilter,y=e.history,m=e.source,v=e.filterbyName,g=e.tagsFilter,E=e.page,O=e.perPage,_=e.setPagination,w=Object(r.useRef)(null),I=Object(r.useState)(),T=b()(I,2),j=T[0],S=T[1],A=Object(r.useState)(!1),D=b()(A,2),P=D[0],N=D[1],k=Object(r.useState)({}),R=b()(k,2),C=R[0],L=R[1],x=Object(r.useState)([]),F=b()(x,2),M=F[0],H=F[1],G=Object(r.useState)(!1),B=b()(G,2),U=B[0],Y=B[1],V=Object(r.useState)(),W=b()(V,2),q=W[0],K=W[1],z=Object(l.useStore)(),J=function(){var e=Ae()(je.a.mark((function e(){var n,r,a,o,i,c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Ke();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(pt({},a(ie(o)))),h([f&&f.length>0&&{staleFilter:Array.isArray(f)?f:[f]},g&&g.length>0&&{tagFilters:Array.isArray(g)?g:[g]},m&&m.length>0&&{source:Array.isArray(m)?m:[m]},v&&v.length>0&&{value:"hostname_or_id",filter:Array.isArray(v)?v[0]:v}]),(O||E)&&_(Array.isArray(E)?E[0]:E,Array.isArray(O)?O[0]:O),i=r(z),c=i.InventoryTable,S((function(){return c}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e,t){console.log(e,"ffff"),H(null==e?void 0:e.filters);var n=new URLSearchParams;!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.forEach((function(t){Object.keys(t).forEach((function(n){var r;null==yt||null===(r=yt[n])||void 0===r||r.call(yt,t,e)}))}))}(n,null==e?void 0:e.filters),function(e,t,n){e.append("page",t),e.append("per_page",n)}(n,null==e?void 0:e.page,null==e?void 0:e.per_page);var r=n.toString();y.push({search:r}),!t&&w&&w.current?w.current.onRefreshData(e):t&&t(e)};Object(r.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r=e.data;K((null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,r).filter((function(e){return!e.includes("workloads")})))||void 0),w.current&&w.current.onRefreshData({})})),J()}),[]);var Q=function(){return p?p.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ne.PageHeader,{className:"pf-m-light"},a.a.createElement(Ne.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ke.Main,null,a.a.createElement(Fe.Grid,{gutter:"md"},a.a.createElement(Me.GridItem,{span:12},j&&a.a.createElement(j,{customFilters:{tags:q},store:z,ref:w,hasCheckbox:!0,showTags:!0,onRefresh:X,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;L((function(){return{id:r,displayName:a}})),N((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){L((function(){return n})),Y((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===Q(),variant:"secondary",onClick:function(){L(Array.from(p.values())),N(!0)}}}]},bulkSelect:{count:Q(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},pt({},i&&c&&c.length>0?{title:"Select page (".concat(c.length,")"),onClick:function(){u(0,!0)}}:{})],checked:ft(c,p),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return y.push("/".concat(t).concat(n?"/".concat(n):""))}})))),a.a.createElement(lt,{handleModalToggle:N,isModalOpen:P,currentSytem:C,onConfirm:function(){var e,t;Array.isArray(C)?(t=C.map((function(e){return e.id})),e=C.length>1?"".concat(C.length," systems"):C[0].display_name):(e=C.displayName,t=[C.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return X({filters:M})})),N(!1)}}),a.a.createElement(ut.a,{title:"Edit display name",isOpen:U,value:C.display_name,onCancel:function(){return Y(!1)},onSubmit:function(e){s(C.id,e,w.current.onRefreshData),Y(!1)}}))};mt.contextTypes={store:Ee.a.object},mt.propTypes={rows:Ee.a.arrayOf(Ee.a.shape({id:Ee.a.string,selected:Ee.a.bool})),loaded:Ee.a.bool,loadEntity:Ee.a.func,clearNotifications:Ee.a.func,deleteEntity:Ee.a.func,addNotification:Ee.a.func,updateDisplayName:Ee.a.func,onSelectRows:Ee.a.func,setFilter:Ee.a.func,selected:Ee.a.map,status:Ee.a.oneOfType([Ee.a.arrayOf(Ee.a.string),Ee.a.string]),source:Ee.a.oneOfType([Ee.a.arrayOf(Ee.a.string),Ee.a.string]),filterbyName:Ee.a.string,tagsFilter:Ee.a.any,history:Ee.a.shape({push:Ee.a.func}),page:Ee.a.oneOfType([Ee.a.string,Ee.a.number]),perPage:Ee.a.oneOfType([Ee.a.string,Ee.a.number]),setPagination:Ee.a.func};var vt=Pe()(Object(l.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(xe())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:S.REMOVE_ENTITY,payload:Le.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(ze.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:S.UPDATE_DISPLAY_NAME,payload:Le.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t){return e(function(e){return{type:"SET_INVENTORY_FILTER",payload:{filtersList:e}}}(t.filter(Boolean)))},setPagination:function(t,n){return e(function(e,t){return{type:"SET_PAGINATION",payload:{page:e,perPage:t}}}(t,n))}}}))(mt)),gt=n(916),bt=n(702),Et=n(139),Ot=(n(1424),n(1425),n(1426),n(701)),_t=n(89),wt=n.n(_t),It=function(e){var t,n,o,i=e.entity,s=e.currentApp,u=e.clearNotifications,p=e.loadEntity,f=Object(r.useState)({}),h=b()(f,2),y=h[0],m=h[1],g=Object(l.useStore)(),E=y.InventoryDetail,O=y.AppInfo,_=y.DetailWrapper,w=function(){var e=Ae()(je.a.mark((function e(){var t,n,r,a,o,i,c,l,s;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,Ke();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(a(Object(Y.applyReducerHash)(v()({},S.GET_ENTITY_FULFILLED,Z),J))),o=le({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){p(e.results[0].id),o()}))}}),i=n(g),c=i.InventoryDetailHead,l=i.AppInfo,s=i.DetailWrapper,Ot.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:Ot.SystemCvesStore}),U.a&&Object(d.getRegistry)().register({SystemAdvisoryListStore:U.a}),m({InventoryDetail:c,AppInfo:l,DetailWrapper:s});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail"),w()}),[]);var I={"ins-c-inventory__detail--general-info":s&&"general_information"===s},T=_||r.Fragment;return null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(o=n.appObjectId)||void 0===o||o.call(n,null==i?void 0:i.id),a.a.createElement(T,{hideInvLink:!0,showTags:!0},a.a.createElement(Ne.PageHeader,{className:wt()("pf-m-light ins-inventory-detail",I)},a.a.createElement(gt.Breadcrumb,null,a.a.createElement(bt.BreadcrumbItem,null,a.a.createElement(c.Link,{to:St.table},"Inventory")),a.a.createElement(bt.BreadcrumbItem,{isActive:!0},a.a.createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},i?i.display_name:a.a.createElement(Et.Skeleton,{size:Et.SkeletonSize.xs})))),E&&a.a.createElement(E,{hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:!0})),a.a.createElement(ke.Main,{className:wt()(I)},a.a.createElement(Fe.Grid,{gutter:"md"},a.a.createElement(Me.GridItem,{span:12},O&&a.a.createElement(O,{showTags:!0})))))};It.contextTypes={store:Ee.a.object},It.propTypes={history:Ee.a.object,entity:Ee.a.object,loadEntity:Ee.a.func,clearNotifications:Ee.a.func,currentApp:Ee.a.string};var Tt=Pe()(Object(l.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(xe())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(It)),jt=function(e){var t=e.component,n=e.rootClass,r=Ie()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(R.d,_e()({},r,{component:t}))};jt.propTypes={component:Ee.a.func,rootClass:Ee.a.string};var St={table:"/",detail:"/:inventoryId"};var At=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(St).some((function(e){return Object(R.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(St.table+location.search),a.a.createElement(R.g,null,a.a.createElement(jt,{exact:!0,path:St.table,render:function(){var e,t;return a.a.createElement(vt,{status:i.getAll("status"),source:i.getAll("source"),filterbyName:i.getAll("hostname_or_id"),tagsFilter:null===(e=i.getAll("tags"))||void 0===e||null===(t=e.reduce)||void 0===t?void 0:t.call(e,A,[]),page:i.getAll("page"),perPage:i.getAll("per_page")})},rootClass:"inventory"}),a.a.createElement(jt,{path:St.detail,component:Tt,rootClass:"inventory"}))};At.propTypes={childProps:Ee.a.shape({history:Ee.a.shape({push:Ee.a.func,location:Ee.a.shape({search:Ee.a.string})})})};n(1427);var Dt,Pt=n(917),Nt=n.n(Pt);function kt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ge()(e);if(t){var a=ge()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return me()(this,n)}}var Rt=p()()(Dt=function(e){he()(n,e);var t=kt(n);function n(e){var r;return ue()(this,n),(r=t.call(this,e)).getRegistry().register(ce),r}return pe()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Nt.a,null),a.a.createElement(At,{childProps:this.props}))}}]),n}(r.Component))||Dt;Rt.propTypes={history:Ee.a.object};var Ct=Pe()(Object(l.connect)()(Rt));i.a.render(a.a.createElement(l.Provider,{store:function(){ae=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[ae.getMiddleware(),y.default,h()({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(c.BrowserRouter,{basename:Object(V.getBaseName)(window.location.pathname)},a.a.createElement(Ct,null))),document.getElementById("root"))},566:function(e,t,n){(t=e.exports=n(13)(!1)).i(n(856),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}.ins-c-inventory__detail--breadcrumb-name{width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n',""])},570:function(e,t,n){(t=e.exports=n(13)(!1)).i(n(856),""),t.i(n(1428),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},855:function(e,t,n){var r=n(566);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(15)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(566,(function(){var t=n(566);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}});
//# sourceMappingURL=App.js.map