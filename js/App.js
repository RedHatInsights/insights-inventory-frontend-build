!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===b&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="baf57afcede0b9bf58ae",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,b=0,g={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},g={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===b&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return D(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=T[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=T[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var E;s=w(g);var O=!1,I=!1,k=!1,D="";switch((E=y[g]?u(s):{type:"disposed",moduleId:g}).chain&&(D="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=b)}var S,P=[];for(r=0;r<h.length;r++)s=h[r],T[s]&&T[s].hot._selfAccepted&&P.push({module:s,errorHandler:T[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var C,x,M=h.slice();M.length>0;)if(s=M.pop(),o=T[s]){var H={},R=o.hot._disposeHandlers;for(a=0;a<R.length;a++)(n=R[a])(H);for(c[s]=H,o.hot.active=!1,delete T[s],delete p[s],a=0;a<o.children.length;a++){var z=T[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=T[s]))for(x=p[s],a=0;a<x.length;a++)C=x[a],(S=o.children.indexOf(C))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=T[s])){x=p[s];var U=[];for(r=0;r<x.length;r++)if(C=x[r],n=o.hot._acceptedDependencies[C]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:x[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<P.length;r++){var B=P[r];s=B.module,l=[s];try{A(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var T={},N={0:0},S=[];function A(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return A;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=T,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/apps/inventory/",A.h=function(){return i};var P=window.webpackJsonp=window.webpackJsonp||[],C=P.push.bind(P);P.push=t,P=P.slice();for(var x=0;x<P.length;x++)t(P[x]);var M=C;S.push([719,1]),n()}({236:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(435),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},240:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(435),""),t.i(n(718),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},434:function(e,t,n){var r=n(236);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(236,function(){var t=n(236);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},457:function(e,t){},624:function(e,t,n){var r={"./af":290,"./af.js":290,"./ar":291,"./ar-dz":292,"./ar-dz.js":292,"./ar-kw":293,"./ar-kw.js":293,"./ar-ly":294,"./ar-ly.js":294,"./ar-ma":295,"./ar-ma.js":295,"./ar-sa":296,"./ar-sa.js":296,"./ar-tn":297,"./ar-tn.js":297,"./ar.js":291,"./az":298,"./az.js":298,"./be":299,"./be.js":299,"./bg":300,"./bg.js":300,"./bm":301,"./bm.js":301,"./bn":302,"./bn.js":302,"./bo":303,"./bo.js":303,"./br":304,"./br.js":304,"./bs":305,"./bs.js":305,"./ca":306,"./ca.js":306,"./cs":307,"./cs.js":307,"./cv":308,"./cv.js":308,"./cy":309,"./cy.js":309,"./da":310,"./da.js":310,"./de":311,"./de-at":312,"./de-at.js":312,"./de-ch":313,"./de-ch.js":313,"./de.js":311,"./dv":314,"./dv.js":314,"./el":315,"./el.js":315,"./en-SG":316,"./en-SG.js":316,"./en-au":317,"./en-au.js":317,"./en-ca":318,"./en-ca.js":318,"./en-gb":319,"./en-gb.js":319,"./en-ie":320,"./en-ie.js":320,"./en-il":321,"./en-il.js":321,"./en-nz":322,"./en-nz.js":322,"./eo":323,"./eo.js":323,"./es":324,"./es-do":325,"./es-do.js":325,"./es-us":326,"./es-us.js":326,"./es.js":324,"./et":327,"./et.js":327,"./eu":328,"./eu.js":328,"./fa":329,"./fa.js":329,"./fi":330,"./fi.js":330,"./fo":331,"./fo.js":331,"./fr":332,"./fr-ca":333,"./fr-ca.js":333,"./fr-ch":334,"./fr-ch.js":334,"./fr.js":332,"./fy":335,"./fy.js":335,"./ga":336,"./ga.js":336,"./gd":337,"./gd.js":337,"./gl":338,"./gl.js":338,"./gom-latn":339,"./gom-latn.js":339,"./gu":340,"./gu.js":340,"./he":341,"./he.js":341,"./hi":342,"./hi.js":342,"./hr":343,"./hr.js":343,"./hu":344,"./hu.js":344,"./hy-am":345,"./hy-am.js":345,"./id":346,"./id.js":346,"./is":347,"./is.js":347,"./it":348,"./it-ch":349,"./it-ch.js":349,"./it.js":348,"./ja":350,"./ja.js":350,"./jv":351,"./jv.js":351,"./ka":352,"./ka.js":352,"./kk":353,"./kk.js":353,"./km":354,"./km.js":354,"./kn":355,"./kn.js":355,"./ko":356,"./ko.js":356,"./ku":357,"./ku.js":357,"./ky":358,"./ky.js":358,"./lb":359,"./lb.js":359,"./lo":360,"./lo.js":360,"./lt":361,"./lt.js":361,"./lv":362,"./lv.js":362,"./me":363,"./me.js":363,"./mi":364,"./mi.js":364,"./mk":365,"./mk.js":365,"./ml":366,"./ml.js":366,"./mn":367,"./mn.js":367,"./mr":368,"./mr.js":368,"./ms":369,"./ms-my":370,"./ms-my.js":370,"./ms.js":369,"./mt":371,"./mt.js":371,"./my":372,"./my.js":372,"./nb":373,"./nb.js":373,"./ne":374,"./ne.js":374,"./nl":375,"./nl-be":376,"./nl-be.js":376,"./nl.js":375,"./nn":377,"./nn.js":377,"./pa-in":378,"./pa-in.js":378,"./pl":379,"./pl.js":379,"./pt":380,"./pt-br":381,"./pt-br.js":381,"./pt.js":380,"./ro":382,"./ro.js":382,"./ru":383,"./ru.js":383,"./sd":384,"./sd.js":384,"./se":385,"./se.js":385,"./si":386,"./si.js":386,"./sk":387,"./sk.js":387,"./sl":388,"./sl.js":388,"./sq":389,"./sq.js":389,"./sr":390,"./sr-cyrl":391,"./sr-cyrl.js":391,"./sr.js":390,"./ss":392,"./ss.js":392,"./sv":393,"./sv.js":393,"./sw":394,"./sw.js":394,"./ta":395,"./ta.js":395,"./te":396,"./te.js":396,"./tet":397,"./tet.js":397,"./tg":398,"./tg.js":398,"./th":399,"./th.js":399,"./tl-ph":400,"./tl-ph.js":400,"./tlh":401,"./tlh.js":401,"./tr":402,"./tr.js":402,"./tzl":403,"./tzl.js":403,"./tzm":404,"./tzm-latn":405,"./tzm-latn.js":405,"./tzm.js":404,"./ug-cn":406,"./ug-cn.js":406,"./uk":407,"./uk.js":407,"./ur":408,"./ur.js":408,"./uz":409,"./uz-latn":410,"./uz-latn.js":410,"./uz.js":409,"./vi":411,"./vi.js":411,"./x-pseudo":412,"./x-pseudo.js":412,"./yo":413,"./yo.js":413,"./zh-cn":414,"./zh-cn.js":414,"./zh-hk":415,"./zh-hk.js":415,"./zh-tw":416,"./zh-tw.js":416};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=624},634:function(e,t){},664:function(e,t){},665:function(e,t){},666:function(e,t){},681:function(e,t){},696:function(e,t){},702:function(e,t){},717:function(e,t,n){var r=n(240);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(240,function(){var t=n(240);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},719:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(34),i=n.n(o),s=n(280),c=n(45),l=n(443),u=n.n(l),d=n(77),p=n.n(d),f=n(58),m=n(463),h=n(143),y=n.n(h),v=n(61),j=n.n(v),b=n(86),g=n.n(b),E=n(448),_=n.n(E),w=n(449),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(O)),function(e){return e}),k=n(116),D=n(248),T=n(249),N=n.n(T),S=n(117),A=n.n(S),P=n(452),C=n.n(P),x=n(453),M=n.n(x),H=(n(688),n(464)),R=function(){return a.a.createElement(H.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:C.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:R}].filter(Boolean)})}var B,F={notifications:f.notifications,systemProfileStore:T.systemProfileStore},G=Object(D.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return B.addNew({on:t,callback:n})}var W=n(147),V=n.n(W),J=n(148),K=n.n(J),X=n(149),Q=n.n(X),Z=n(150),$=n.n(Z),ee=n(151),te=n.n(ee),ne=n(1),re=n.n(ne),ae=n(458),oe=n.n(ae),ie=n(152),se=n.n(ie),ce=n(136),le=n(281),ue=n(440),de=n(71),pe=n.n(de),fe=n(103),me=n.n(fe),he=n(88),ye=n.n(he),ve=(n(434),n(104)),je=n.n(ve),be=n(50),ge="/api/inventory/v1",Ee=n(459),_e=n.n(Ee),we=new(n(460).HostsApi)(void 0,ge,_e.a);var Oe=function(e,t){return{type:I.REMOVE_ENTITY,payload:we.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},Ie=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ke=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},De=function(e,t){return{type:I.UPDATE_DISPLAY_NAME,payload:we.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},Te=n(263),Ne=n(264),Se=n(261),Ae=n(439),Pe=n(254),Ce=n(66),xe=n(28),Me=n(57),He=n(93),Re=function(){return insights.loadInventory({react:a.a,reactRouterDom:Ce,reactCore:xe,reactIcons:Me,pfReactTable:He})},ze=n(262),Le=n(267),Ue=n(268),Be=n(269),Fe=n(270),Ge=n(438),Ye=n(265),qe=n(266),We=n(241),Ve=n(212),Je=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(ze.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Le.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Ve.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Ue.a,{isFilled:!0},a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Fe.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Fe.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Fe.a,null,a.a.createElement(Ge.a,null,"insights-client --unregister"))))),a.a.createElement(Ye.a,{gutter:"md"},a.a.createElement(qe.a,null,a.a.createElement(We.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(We.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Ke=re.a.shape({id:re.a.string,displayName:re.a.string});Je.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([Ke,re.a.arrayOf(Ke)]),handleModalToggle:re.a.func,onConfirm:re.a.func},Je.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Xe=Je,Qe=n(461),Ze=n.n(Qe),$e=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.rows,s=e.updateDisplayName,c=Object(r.useRef)(null),l=Object(r.useState)(),u=ye()(l,2),p=u[0],f=u[1],m=Object(r.useState)(!1),h=ye()(m,2),y=h[0],v=h[1],b=Object(r.useState)({}),g=ye()(b,2),E=g[0],_=g[1],w=Object(r.useState)([]),O=ye()(w,2),I=O[0],k=O[1],D=Object(r.useState)(!1),T=ye()(D,2),N=T[0],S=T[1],A=Object(r.useState)(!1),P=ye()(A,2),C=P[0],x=P[1],M=function(){var e=me()(pe.a.mark(function e(){var n,r,a,o,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Re();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,f(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),H=function(e){k(e.filters),c&&c.current&&c.current.onRefreshData(e)};return Object(r.useEffect)(function(){M()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(be.PageHeader,{className:"pf-m-light"},a.a.createElement(be.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(be.Main,null,a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(Ne.a,{span:12},p&&a.a.createElement(p,{ref:c,hasCheckbox:!0,onRefresh:H,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;v(!0),_({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){x(!0),_(n)}}]},a.a.createElement(Se.a,{isPlain:!0,onSelect:function(){return S(!N)},isOpen:N,toggle:a.a.createElement(Ae.a,{onToggle:function(e){return S(e)}}),dropdownItems:[a.a.createElement(Pe.a,{key:"delete-selected",onClick:function(){var e=i.filter(function(e){return e.selected});e.length>0&&(_(e),v(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Xe,{handleModalToggle:v,isModalOpen:y,currentSytem:E,onConfirm:function(){var e,t;Array.isArray(E)?(t=E.map(function(e){return e.id}),e=E.length>1?"".concat(E.length," systems"):E[0].display_name):(e=E.displayName,t=[E.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return H({filters:I})}),v(!1)}}),a.a.createElement(Ze.a,{title:"Edit name",isOpen:C,value:E.display_name,onCancel:function(){return x(!1)},onSubmit:function(e){s(E.id,e,c.current.onRefreshData),x(!1)}}))};$e.contextTypes={store:re.a.object},$e.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func,updateDisplayName:re.a.func};var et,tt=je()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())},deleteEntity:function(n,r,a){return e(t(Oe(n,r),a))},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(De(n,r),a))}}})($e)),nt=n(114),rt=n(258),at=n(259),ot=(n(714),n(715),n(716),p()()(et=function(e){function t(e,n){var r;return V()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=me()(pe.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Re();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(D.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,U),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.SystemCvesStore&&this.getRegistry().register({SystemCvesStore:S.SystemCvesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(be.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(rt.a,null,a.a.createElement(at.a,null,a.a.createElement(nt.a,{to:ct.table},"Inventory")),a.a.createElement(at.a,{isActive:!0},i?i.display_name:a.a.createElement(be.Skeleton,{size:be.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(be.Main,{className:c},a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(Ne.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||et);ot.contextTypes={store:re.a.object},ot.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var it=je()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())}}})(ot)),st=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.a,oe()({},r,{component:t}))};st.propTypes={component:re.a.func,rootClass:re.a.string};var ct={table:"/",detail:"/:inventoryId"};var lt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ct).some(function(e){return Object(le.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(ct.table),a.a.createElement(ue.a,null,a.a.createElement(st,{exact:!0,path:ct.table,component:tt,rootClass:"inventory"}),a.a.createElement(st,{path:ct.detail,component:it,rootClass:"inventory"}))};lt.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(717);var ut,dt=p()()(ut=function(e){function t(e){var n;return V()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(lt,{childProps:this.props}))}}]),t}(r.Component))||ut;dt.propTypes={history:re.a.object};var pt=je()(Object(c.connect)()(dt));i.a.render(a.a.createElement(c.Provider,{store:function(){B=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[B.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(pt,null))),document.getElementById("root"))}});