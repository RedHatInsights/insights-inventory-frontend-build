!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===g&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="89a4a7868a01d6a14272",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,g=0,b={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},b={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===g&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return T(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var E;s=w(b);var O=!1,I=!1,k=!1,T="";switch((E=y[b]?u(s):{type:"disposed",moduleId:b}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=g)}var S,x=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var P,C,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var H={},R=o.hot._disposeHandlers;for(a=0;a<R.length;a++)(n=R[a])(H);for(c[s]=H,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var z=D[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(C=p[s],a=0;a<C.length;a++)P=C[a],(S=o.children.indexOf(P))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){C=p[s];var U=[];for(r=0;r<C.length;r++)if(P=C[r],n=o.hot._acceptedDependencies[P]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var B=x[r];s=B.module,l=[s];try{A(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var D={},N={0:0},S=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||I(e),0===g&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/apps/inventory/",A.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],P=x.push.bind(x);x.push=t,x=x.slice();for(var C=0;C<x.length;C++)t(x[C]);var M=P;S.push([935,1]),n()}({350:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(575),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},353:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(575),""),t.i(n(934),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},574:function(e,t,n){var r=n(350);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(350,function(){var t=n(350);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},600:function(e,t){},841:function(e,t,n){var r={"./af":430,"./af.js":430,"./ar":431,"./ar-dz":432,"./ar-dz.js":432,"./ar-kw":433,"./ar-kw.js":433,"./ar-ly":434,"./ar-ly.js":434,"./ar-ma":435,"./ar-ma.js":435,"./ar-sa":436,"./ar-sa.js":436,"./ar-tn":437,"./ar-tn.js":437,"./ar.js":431,"./az":438,"./az.js":438,"./be":439,"./be.js":439,"./bg":440,"./bg.js":440,"./bm":441,"./bm.js":441,"./bn":442,"./bn.js":442,"./bo":443,"./bo.js":443,"./br":444,"./br.js":444,"./bs":445,"./bs.js":445,"./ca":446,"./ca.js":446,"./cs":447,"./cs.js":447,"./cv":448,"./cv.js":448,"./cy":449,"./cy.js":449,"./da":450,"./da.js":450,"./de":451,"./de-at":452,"./de-at.js":452,"./de-ch":453,"./de-ch.js":453,"./de.js":451,"./dv":454,"./dv.js":454,"./el":455,"./el.js":455,"./en-SG":456,"./en-SG.js":456,"./en-au":457,"./en-au.js":457,"./en-ca":458,"./en-ca.js":458,"./en-gb":459,"./en-gb.js":459,"./en-ie":460,"./en-ie.js":460,"./en-il":461,"./en-il.js":461,"./en-nz":462,"./en-nz.js":462,"./eo":463,"./eo.js":463,"./es":464,"./es-do":465,"./es-do.js":465,"./es-us":466,"./es-us.js":466,"./es.js":464,"./et":467,"./et.js":467,"./eu":468,"./eu.js":468,"./fa":469,"./fa.js":469,"./fi":470,"./fi.js":470,"./fo":471,"./fo.js":471,"./fr":472,"./fr-ca":473,"./fr-ca.js":473,"./fr-ch":474,"./fr-ch.js":474,"./fr.js":472,"./fy":475,"./fy.js":475,"./ga":476,"./ga.js":476,"./gd":477,"./gd.js":477,"./gl":478,"./gl.js":478,"./gom-latn":479,"./gom-latn.js":479,"./gu":480,"./gu.js":480,"./he":481,"./he.js":481,"./hi":482,"./hi.js":482,"./hr":483,"./hr.js":483,"./hu":484,"./hu.js":484,"./hy-am":485,"./hy-am.js":485,"./id":486,"./id.js":486,"./is":487,"./is.js":487,"./it":488,"./it-ch":489,"./it-ch.js":489,"./it.js":488,"./ja":490,"./ja.js":490,"./jv":491,"./jv.js":491,"./ka":492,"./ka.js":492,"./kk":493,"./kk.js":493,"./km":494,"./km.js":494,"./kn":495,"./kn.js":495,"./ko":496,"./ko.js":496,"./ku":497,"./ku.js":497,"./ky":498,"./ky.js":498,"./lb":499,"./lb.js":499,"./lo":500,"./lo.js":500,"./lt":501,"./lt.js":501,"./lv":502,"./lv.js":502,"./me":503,"./me.js":503,"./mi":504,"./mi.js":504,"./mk":505,"./mk.js":505,"./ml":506,"./ml.js":506,"./mn":507,"./mn.js":507,"./mr":508,"./mr.js":508,"./ms":509,"./ms-my":510,"./ms-my.js":510,"./ms.js":509,"./mt":511,"./mt.js":511,"./my":512,"./my.js":512,"./nb":513,"./nb.js":513,"./ne":514,"./ne.js":514,"./nl":515,"./nl-be":516,"./nl-be.js":516,"./nl.js":515,"./nn":517,"./nn.js":517,"./pa-in":518,"./pa-in.js":518,"./pl":519,"./pl.js":519,"./pt":520,"./pt-br":521,"./pt-br.js":521,"./pt.js":520,"./ro":522,"./ro.js":522,"./ru":523,"./ru.js":523,"./sd":524,"./sd.js":524,"./se":525,"./se.js":525,"./si":526,"./si.js":526,"./sk":527,"./sk.js":527,"./sl":528,"./sl.js":528,"./sq":529,"./sq.js":529,"./sr":530,"./sr-cyrl":531,"./sr-cyrl.js":531,"./sr.js":530,"./ss":532,"./ss.js":532,"./sv":533,"./sv.js":533,"./sw":534,"./sw.js":534,"./ta":535,"./ta.js":535,"./te":536,"./te.js":536,"./tet":537,"./tet.js":537,"./tg":538,"./tg.js":538,"./th":539,"./th.js":539,"./tl-ph":540,"./tl-ph.js":540,"./tlh":541,"./tlh.js":541,"./tr":542,"./tr.js":542,"./tzl":543,"./tzl.js":543,"./tzm":544,"./tzm-latn":545,"./tzm-latn.js":545,"./tzm.js":544,"./ug-cn":546,"./ug-cn.js":546,"./uk":547,"./uk.js":547,"./ur":548,"./ur.js":548,"./uz":549,"./uz-latn":550,"./uz-latn.js":550,"./uz.js":549,"./vi":551,"./vi.js":551,"./x-pseudo":552,"./x-pseudo.js":552,"./yo":553,"./yo.js":553,"./zh-cn":554,"./zh-cn.js":554,"./zh-hk":555,"./zh-hk.js":555,"./zh-tw":556,"./zh-tw.js":556};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=841},851:function(e,t){},881:function(e,t){},882:function(e,t){},883:function(e,t){},898:function(e,t){},913:function(e,t){},919:function(e,t){},933:function(e,t,n){var r=n(353);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(353,function(){var t=n(353);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},935:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),o=n(24),i=n.n(o),s=n(400),c=n(61),l=n(585),u=n.n(l),d=n(113),p=n.n(d),f=n(85),m=n(605),h=n(204),y=n.n(h),v=n(90),j=n.n(v),g=n(129),b=n.n(g),E=n(590),_=n.n(E),w=n(591),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],b()(O)),function(e){return e}),k=n(166),T=n(359),D=n(360),N=n.n(D),S=n(167),A=n.n(S),x=n(595),P=n.n(x),C=n(596),M=n.n(C),H=(n(905),n(606)),R=function(){return a.a.createElement(H.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:R}].filter(Boolean)})}var B,F={notifications:f.notifications,systemProfileStore:D.systemProfileStore},G=Object(T.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return B.addNew({on:t,callback:n})}var V=n(210),W=n.n(V),J=n(211),K=n.n(J),X=n(212),Q=n.n(X),Z=n(213),$=n.n(Z),ee=n(214),te=n.n(ee),ne=n(0),re=n.n(ne),ae=n(601),oe=n.n(ae),ie=n(215),se=n.n(ie),ce=n(192),le=n(401),ue=n(581),de=n(104),pe=n.n(de),fe=n(153),me=n.n(fe),he=n(157),ye=n.n(he),ve=(n(574),n(154)),je=n.n(ve),ge=n(69),be="/api/inventory/v1",Ee=n(602),_e=n.n(Ee),we=new(n(603).HostsApi)(void 0,be,_e.a);var Oe=function(e,t){return{type:I.REMOVE_ENTITY,payload:we.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},Ie=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ke=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Te=n(373),De=n(374),Ne=n(195),Se=n(582),Ae=n(366),xe=n(89),Pe=n(47),Ce=n(108),Me=n(141),He=function(){return insights.loadInventory({react:a.a,reactRouterDom:xe,reactCore:Pe,reactIcons:Ce,pfReactTable:Me})},Re=n(371),ze=n(377),Le=n(378),Ue=n(379),Be=n(380),Fe=n(580),Ge=n(375),Ye=n(376),qe=n(354),Ve=n(382),We=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Re.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(ze.a,{gutter:"md"},a.a.createElement(Le.a,null,a.a.createElement(Ve.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Le.a,{isFilled:!0},a.a.createElement(Ue.a,{gutter:"md"},a.a.createElement(Be.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Be.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Be.a,null,a.a.createElement(Fe.a,null,"insights-client --unregister"))))),a.a.createElement(Ge.a,{gutter:"md"},a.a.createElement(Ye.a,null,a.a.createElement(qe.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(qe.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Je=re.a.shape({id:re.a.string,displayName:re.a.string});We.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([Je,re.a.arrayOf(Je)]),handleModalToggle:re.a.func,onConfirm:re.a.func},We.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ke=We,Xe=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.rows,s=Object(r.useRef)(null),c=Object(r.useState)(),l=ye()(c,2),u=l[0],p=l[1],f=Object(r.useState)(!1),m=ye()(f,2),h=m[0],y=m[1],v=Object(r.useState)({}),g=ye()(v,2),b=g[0],E=g[1],_=Object(r.useState)([]),w=ye()(_,2),O=w[0],I=w[1],k=Object(r.useState)(!1),T=ye()(k,2),D=T[0],N=T[1],S=function(){var e=me()(pe.a.mark(function e(){var n,r,a,o,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,He();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,p(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(e){I(e.filters),s&&s.current&&s.current.onRefreshData(e)};return Object(r.useEffect)(function(){S()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ge.PageHeader,{className:"pf-m-light"},a.a.createElement(ge.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ge.Main,null,a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(De.a,{span:12},u&&a.a.createElement(u,{ref:s,hasCheckbox:!0,onRefresh:A,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;y(!0),E({id:r,displayName:a})}}]},a.a.createElement(Ne.a,{isPlain:!0,onSelect:function(){return N(!D)},isOpen:D,toggle:a.a.createElement(Se.a,{onToggle:function(e){return N(e)}}),dropdownItems:[a.a.createElement(Ae.a,{key:"delete-selected",onClick:function(){var e=i.filter(function(e){return e.selected});e.length>0&&(E(e),y(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Ke,{handleModalToggle:y,isModalOpen:h,currentSytem:b,onConfirm:function(){var e,t;Array.isArray(b)?(t=b.map(function(e){return e.id}),e=b.length>1?"".concat(b.length," systems"):b[0].display_name):(e=b.displayName,t=[b.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return A({filters:O})}),y(!1)}}))};Xe.contextTypes={store:re.a.object},Xe.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func};var Qe,Ze=je()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(Oe(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(Xe)),$e=n(164),et=n(368),tt=n(369),nt=(n(931),n(932),p()()(Qe=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=me()(pe.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,He();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(T.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,U),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:S.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(ge.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(et.a,null,a.a.createElement(tt.a,null,a.a.createElement($e.a,{to:ot.table},"Inventory")),a.a.createElement(tt.a,{isActive:!0},i?i.display_name:a.a.createElement(ge.Skeleton,{size:ge.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(ge.Main,{className:c},a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(De.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||Qe);nt.contextTypes={store:re.a.object},nt.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var rt=je()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())}}})(nt)),at=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.a,oe()({},r,{component:t}))};at.propTypes={component:re.a.func,rootClass:re.a.string};var ot={table:"/",detail:"/:inventoryId"};var it=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ot).some(function(e){return Object(le.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(ot.table),a.a.createElement(ue.a,null,a.a.createElement(at,{exact:!0,path:ot.table,component:Ze,rootClass:"inventory"}),a.a.createElement(at,{path:ot.detail,component:rt,rootClass:"inventory"}))};it.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(933);var st,ct=p()()(st=function(e){function t(e){var n;return W()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(it,{childProps:this.props}))}}]),t}(r.Component))||st;ct.propTypes={history:re.a.object};var lt=je()(Object(c.connect)()(ct));i.a.render(a.a.createElement(c.Provider,{store:function(){B=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[B.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(lt,null))),document.getElementById("root"))}});