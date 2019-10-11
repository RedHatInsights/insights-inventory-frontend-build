!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===g&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="0c1a295a9ac0f6b929eb",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,g=0,b={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},b={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===g&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return D(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=T[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=T[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var E;s=w(b);var O=!1,I=!1,k=!1,D="";switch((E=y[b]?u(s):{type:"disposed",moduleId:b}).chain&&(D="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=g)}var S,P=[];for(r=0;r<h.length;r++)s=h[r],T[s]&&T[s].hot._selfAccepted&&P.push({module:s,errorHandler:T[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var C,x,M=h.slice();M.length>0;)if(s=M.pop(),o=T[s]){var H={},R=o.hot._disposeHandlers;for(a=0;a<R.length;a++)(n=R[a])(H);for(c[s]=H,o.hot.active=!1,delete T[s],delete p[s],a=0;a<o.children.length;a++){var z=T[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=T[s]))for(x=p[s],a=0;a<x.length;a++)C=x[a],(S=o.children.indexOf(C))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=T[s])){x=p[s];var U=[];for(r=0;r<x.length;r++)if(C=x[r],n=o.hot._acceptedDependencies[C]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:x[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<P.length;r++){var B=P[r];s=B.module,l=[s];try{A(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var T={},N={0:0},S=[];function A(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return A;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||I(e),0===g&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=T,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/apps/inventory/",A.h=function(){return i};var P=window.webpackJsonp=window.webpackJsonp||[],C=P.push.bind(P);P.push=t,P=P.slice();for(var x=0;x<P.length;x++)t(P[x]);var M=C;S.push([723,1]),n()}({240:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(438),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},244:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(438),""),t.i(n(722),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},437:function(e,t,n){var r=n(240);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(240,function(){var t=n(240);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},460:function(e,t){},628:function(e,t,n){var r={"./af":293,"./af.js":293,"./ar":294,"./ar-dz":295,"./ar-dz.js":295,"./ar-kw":296,"./ar-kw.js":296,"./ar-ly":297,"./ar-ly.js":297,"./ar-ma":298,"./ar-ma.js":298,"./ar-sa":299,"./ar-sa.js":299,"./ar-tn":300,"./ar-tn.js":300,"./ar.js":294,"./az":301,"./az.js":301,"./be":302,"./be.js":302,"./bg":303,"./bg.js":303,"./bm":304,"./bm.js":304,"./bn":305,"./bn.js":305,"./bo":306,"./bo.js":306,"./br":307,"./br.js":307,"./bs":308,"./bs.js":308,"./ca":309,"./ca.js":309,"./cs":310,"./cs.js":310,"./cv":311,"./cv.js":311,"./cy":312,"./cy.js":312,"./da":313,"./da.js":313,"./de":314,"./de-at":315,"./de-at.js":315,"./de-ch":316,"./de-ch.js":316,"./de.js":314,"./dv":317,"./dv.js":317,"./el":318,"./el.js":318,"./en-SG":319,"./en-SG.js":319,"./en-au":320,"./en-au.js":320,"./en-ca":321,"./en-ca.js":321,"./en-gb":322,"./en-gb.js":322,"./en-ie":323,"./en-ie.js":323,"./en-il":324,"./en-il.js":324,"./en-nz":325,"./en-nz.js":325,"./eo":326,"./eo.js":326,"./es":327,"./es-do":328,"./es-do.js":328,"./es-us":329,"./es-us.js":329,"./es.js":327,"./et":330,"./et.js":330,"./eu":331,"./eu.js":331,"./fa":332,"./fa.js":332,"./fi":333,"./fi.js":333,"./fo":334,"./fo.js":334,"./fr":335,"./fr-ca":336,"./fr-ca.js":336,"./fr-ch":337,"./fr-ch.js":337,"./fr.js":335,"./fy":338,"./fy.js":338,"./ga":339,"./ga.js":339,"./gd":340,"./gd.js":340,"./gl":341,"./gl.js":341,"./gom-latn":342,"./gom-latn.js":342,"./gu":343,"./gu.js":343,"./he":344,"./he.js":344,"./hi":345,"./hi.js":345,"./hr":346,"./hr.js":346,"./hu":347,"./hu.js":347,"./hy-am":348,"./hy-am.js":348,"./id":349,"./id.js":349,"./is":350,"./is.js":350,"./it":351,"./it-ch":352,"./it-ch.js":352,"./it.js":351,"./ja":353,"./ja.js":353,"./jv":354,"./jv.js":354,"./ka":355,"./ka.js":355,"./kk":356,"./kk.js":356,"./km":357,"./km.js":357,"./kn":358,"./kn.js":358,"./ko":359,"./ko.js":359,"./ku":360,"./ku.js":360,"./ky":361,"./ky.js":361,"./lb":362,"./lb.js":362,"./lo":363,"./lo.js":363,"./lt":364,"./lt.js":364,"./lv":365,"./lv.js":365,"./me":366,"./me.js":366,"./mi":367,"./mi.js":367,"./mk":368,"./mk.js":368,"./ml":369,"./ml.js":369,"./mn":370,"./mn.js":370,"./mr":371,"./mr.js":371,"./ms":372,"./ms-my":373,"./ms-my.js":373,"./ms.js":372,"./mt":374,"./mt.js":374,"./my":375,"./my.js":375,"./nb":376,"./nb.js":376,"./ne":377,"./ne.js":377,"./nl":378,"./nl-be":379,"./nl-be.js":379,"./nl.js":378,"./nn":380,"./nn.js":380,"./pa-in":381,"./pa-in.js":381,"./pl":382,"./pl.js":382,"./pt":383,"./pt-br":384,"./pt-br.js":384,"./pt.js":383,"./ro":385,"./ro.js":385,"./ru":386,"./ru.js":386,"./sd":387,"./sd.js":387,"./se":388,"./se.js":388,"./si":389,"./si.js":389,"./sk":390,"./sk.js":390,"./sl":391,"./sl.js":391,"./sq":392,"./sq.js":392,"./sr":393,"./sr-cyrl":394,"./sr-cyrl.js":394,"./sr.js":393,"./ss":395,"./ss.js":395,"./sv":396,"./sv.js":396,"./sw":397,"./sw.js":397,"./ta":398,"./ta.js":398,"./te":399,"./te.js":399,"./tet":400,"./tet.js":400,"./tg":401,"./tg.js":401,"./th":402,"./th.js":402,"./tl-ph":403,"./tl-ph.js":403,"./tlh":404,"./tlh.js":404,"./tr":405,"./tr.js":405,"./tzl":406,"./tzl.js":406,"./tzm":407,"./tzm-latn":408,"./tzm-latn.js":408,"./tzm.js":407,"./ug-cn":409,"./ug-cn.js":409,"./uk":410,"./uk.js":410,"./ur":411,"./ur.js":411,"./uz":412,"./uz-latn":413,"./uz-latn.js":413,"./uz.js":412,"./vi":414,"./vi.js":414,"./x-pseudo":415,"./x-pseudo.js":415,"./yo":416,"./yo.js":416,"./zh-cn":417,"./zh-cn.js":417,"./zh-hk":418,"./zh-hk.js":418,"./zh-tw":419,"./zh-tw.js":419};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=628},638:function(e,t){},668:function(e,t){},669:function(e,t){},670:function(e,t){},685:function(e,t){},700:function(e,t){},706:function(e,t){},721:function(e,t,n){var r=n(244);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(244,function(){var t=n(244);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},723:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(33),i=n.n(o),s=n(283),c=n(42),l=n(446),u=n.n(l),d=n(79),p=n.n(d),f=n(60),m=n(465),h=n(143),y=n.n(h),v=n(66),j=n.n(v),g=n(89),b=n.n(g),E=n(451),_=n.n(E),w=n(452),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],b()(O)),function(e){return e}),k=n(119),D=n(250),T=n(251),N=n.n(T),S=n(120),A=n.n(S),P=n(455),C=n.n(P),x=n(456),M=n.n(x),H=(n(692),n(466)),R=function(){return a.a.createElement(H.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:C.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:R}].filter(Boolean)})}var B,F={notifications:f.notifications,systemProfileStore:T.systemProfileStore},G=Object(D.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return B.addNew({on:t,callback:n})}var W=n(147),V=n.n(W),J=n(148),K=n.n(J),X=n(149),Q=n.n(X),Z=n(150),$=n.n(Z),ee=n(151),te=n.n(ee),ne=n(1),re=n.n(ne),ae=n(152),oe=n.n(ae),ie=n(153),se=n.n(ie),ce=n(136),le=n(284),ue=n(443),de=n(72),pe=n.n(de),fe=n(105),me=n.n(fe),he=n(91),ye=n.n(he),ve=(n(437),n(106)),je=n.n(ve),ge=n(56),be="/api/inventory/v1",Ee=n(461),_e=n.n(Ee),we=new(n(462).HostsApi)(void 0,be,_e.a);var Oe=function(e,t){return{type:I.REMOVE_ENTITY,payload:we.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},Ie=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ke=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},De=function(e,t){return{type:I.UPDATE_DISPLAY_NAME,payload:we.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},Te=n(266),Ne=n(267),Se=n(263),Ae=n(442),Pe=n(256),Ce=n(64),xe=n(26),Me=n(55),He=n(96),Re=function(){return insights.loadInventory({react:a.a,reactRouterDom:Ce,reactCore:xe,reactIcons:Me,pfReactTable:He})},ze=n(264),Le=n(270),Ue=n(271),Be=n(272),Fe=n(273),Ge=n(441),Ye=n(268),qe=n(269),We=n(245),Ve=n(216),Je=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(ze.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Le.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Ve.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Ue.a,{isFilled:!0},a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Fe.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Fe.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Fe.a,null,a.a.createElement(Ge.a,null,"insights-client --unregister"))))),a.a.createElement(Ye.a,{gutter:"md"},a.a.createElement(qe.a,null,a.a.createElement(We.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(We.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Ke=re.a.shape({id:re.a.string,displayName:re.a.string});Je.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([Ke,re.a.arrayOf(Ke)]),handleModalToggle:re.a.func,onConfirm:re.a.func},Je.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Xe=Je,Qe=n(463),Ze=n.n(Qe),$e=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,c=e.updateDisplayName,l=Object(r.useRef)(null),u=Object(r.useState)(),p=ye()(u,2),f=p[0],m=p[1],h=Object(r.useState)(!1),y=ye()(h,2),v=y[0],g=y[1],b=Object(r.useState)({}),E=ye()(b,2),_=E[0],w=E[1],O=Object(r.useState)([]),I=ye()(O,2),k=I[0],D=I[1],T=Object(r.useState)(!1),N=ye()(T,2),S=N[0],A=N[1],P=Object(r.useState)(!1),C=ye()(P,2),x=C[0],M=C[1],H=function(){var e=me()(pe.a.mark(function e(){var n,r,a,o,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Re();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,m(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),R=function(e){D(e.filters),l&&l.current&&l.current.onRefreshData(e)};return Object(r.useEffect)(function(){H()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ge.PageHeader,{className:"pf-m-light"},a.a.createElement(ge.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ge.Main,null,a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(Ne.a,{span:12},f&&a.a.createElement(f,oe()({ref:l,hasCheckbox:!0,onRefresh:R},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;g(!0),w({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){M(!0),w(n)}}]}),i&&s&&s.length>0&&a.a.createElement(Se.a,{isPlain:!0,onSelect:function(){return A(!S)},isOpen:S,toggle:a.a.createElement(Ae.a,{isDisabled:s.filter(function(e){return e.selected}).length<1,onToggle:function(e){return A(e)}}),dropdownItems:[a.a.createElement(Pe.a,{key:"delete-selected",onClick:function(){var e=s.filter(function(e){return e.selected});e.length>0&&(w(e),g(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Xe,{handleModalToggle:g,isModalOpen:v,currentSytem:_,onConfirm:function(){var e,t;Array.isArray(_)?(t=_.map(function(e){return e.id}),e=_.length>1?"".concat(_.length," systems"):_[0].display_name):(e=_.displayName,t=[_.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return R({filters:k})}),g(!1)}}),a.a.createElement(Ze.a,{title:"Edit name",isOpen:x,value:_.display_name,onCancel:function(){return M(!1)},onSubmit:function(e){c(_.id,e,l.current.onRefreshData),M(!1)}}))};$e.contextTypes={store:re.a.object},$e.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func,updateDisplayName:re.a.func};var et,tt=je()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())},deleteEntity:function(n,r,a){return e(t(Oe(n,r),a))},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(De(n,r),a))}}})($e)),nt=n(116),rt=n(260),at=n(261),ot=(n(718),n(719),n(720),p()()(et=function(e){function t(e,n){var r;return V()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=me()(pe.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Re();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(D.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,U),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.SystemCvesStore&&this.getRegistry().register({SystemCvesStore:S.SystemCvesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(ge.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(rt.a,null,a.a.createElement(at.a,null,a.a.createElement(nt.a,{to:ct.table},"Inventory")),a.a.createElement(at.a,{isActive:!0},i?i.display_name:a.a.createElement(ge.Skeleton,{size:ge.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(ge.Main,{className:c},a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(Ne.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||et);ot.contextTypes={store:re.a.object},ot.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var it=je()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())}}})(ot)),st=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.a,oe()({},r,{component:t}))};st.propTypes={component:re.a.func,rootClass:re.a.string};var ct={table:"/",detail:"/:inventoryId"};var lt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ct).some(function(e){return Object(le.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(ct.table),a.a.createElement(ue.a,null,a.a.createElement(st,{exact:!0,path:ct.table,component:tt,rootClass:"inventory"}),a.a.createElement(st,{path:ct.detail,component:it,rootClass:"inventory"}))};lt.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(721);var ut,dt=p()()(ut=function(e){function t(e){var n;return V()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(lt,{childProps:this.props}))}}]),t}(r.Component))||ut;dt.propTypes={history:re.a.object};var pt=je()(Object(c.connect)()(dt));i.a.render(a.a.createElement(c.Provider,{store:function(){B=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[B.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(pt,null))),document.getElementById("root"))}});