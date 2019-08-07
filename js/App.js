!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===b&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="075d07dae4d1bbcec1de",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,b=0,g={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},g={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===b&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return T(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var E;s=w(g);var O=!1,I=!1,k=!1,T="";switch((E=y[g]?u(s):{type:"disposed",moduleId:g}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=b)}var S,x=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var P,C,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var H={},R=o.hot._disposeHandlers;for(a=0;a<R.length;a++)(n=R[a])(H);for(c[s]=H,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var z=D[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(C=p[s],a=0;a<C.length;a++)P=C[a],(S=o.children.indexOf(P))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){C=p[s];var U=[];for(r=0;r<C.length;r++)if(P=C[r],n=o.hot._acceptedDependencies[P]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var B=x[r];s=B.module,l=[s];try{A(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var D={},N={0:0},S=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/apps/inventory/",A.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],P=x.push.bind(x);x.push=t,x=x.slice();for(var C=0;C<x.length;C++)t(x[C]);var M=P;S.push([721,1]),n()}({221:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(440),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},225:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(440),""),t.i(n(720),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},439:function(e,t,n){var r=n(221);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(221,function(){var t=n(221);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},461:function(e,t){},626:function(e,t,n){var r={"./af":295,"./af.js":295,"./ar":296,"./ar-dz":297,"./ar-dz.js":297,"./ar-kw":298,"./ar-kw.js":298,"./ar-ly":299,"./ar-ly.js":299,"./ar-ma":300,"./ar-ma.js":300,"./ar-sa":301,"./ar-sa.js":301,"./ar-tn":302,"./ar-tn.js":302,"./ar.js":296,"./az":303,"./az.js":303,"./be":304,"./be.js":304,"./bg":305,"./bg.js":305,"./bm":306,"./bm.js":306,"./bn":307,"./bn.js":307,"./bo":308,"./bo.js":308,"./br":309,"./br.js":309,"./bs":310,"./bs.js":310,"./ca":311,"./ca.js":311,"./cs":312,"./cs.js":312,"./cv":313,"./cv.js":313,"./cy":314,"./cy.js":314,"./da":315,"./da.js":315,"./de":316,"./de-at":317,"./de-at.js":317,"./de-ch":318,"./de-ch.js":318,"./de.js":316,"./dv":319,"./dv.js":319,"./el":320,"./el.js":320,"./en-SG":321,"./en-SG.js":321,"./en-au":322,"./en-au.js":322,"./en-ca":323,"./en-ca.js":323,"./en-gb":324,"./en-gb.js":324,"./en-ie":325,"./en-ie.js":325,"./en-il":326,"./en-il.js":326,"./en-nz":327,"./en-nz.js":327,"./eo":328,"./eo.js":328,"./es":329,"./es-do":330,"./es-do.js":330,"./es-us":331,"./es-us.js":331,"./es.js":329,"./et":332,"./et.js":332,"./eu":333,"./eu.js":333,"./fa":334,"./fa.js":334,"./fi":335,"./fi.js":335,"./fo":336,"./fo.js":336,"./fr":337,"./fr-ca":338,"./fr-ca.js":338,"./fr-ch":339,"./fr-ch.js":339,"./fr.js":337,"./fy":340,"./fy.js":340,"./ga":341,"./ga.js":341,"./gd":342,"./gd.js":342,"./gl":343,"./gl.js":343,"./gom-latn":344,"./gom-latn.js":344,"./gu":345,"./gu.js":345,"./he":346,"./he.js":346,"./hi":347,"./hi.js":347,"./hr":348,"./hr.js":348,"./hu":349,"./hu.js":349,"./hy-am":350,"./hy-am.js":350,"./id":351,"./id.js":351,"./is":352,"./is.js":352,"./it":353,"./it-ch":354,"./it-ch.js":354,"./it.js":353,"./ja":355,"./ja.js":355,"./jv":356,"./jv.js":356,"./ka":357,"./ka.js":357,"./kk":358,"./kk.js":358,"./km":359,"./km.js":359,"./kn":360,"./kn.js":360,"./ko":361,"./ko.js":361,"./ku":362,"./ku.js":362,"./ky":363,"./ky.js":363,"./lb":364,"./lb.js":364,"./lo":365,"./lo.js":365,"./lt":366,"./lt.js":366,"./lv":367,"./lv.js":367,"./me":368,"./me.js":368,"./mi":369,"./mi.js":369,"./mk":370,"./mk.js":370,"./ml":371,"./ml.js":371,"./mn":372,"./mn.js":372,"./mr":373,"./mr.js":373,"./ms":374,"./ms-my":375,"./ms-my.js":375,"./ms.js":374,"./mt":376,"./mt.js":376,"./my":377,"./my.js":377,"./nb":378,"./nb.js":378,"./ne":379,"./ne.js":379,"./nl":380,"./nl-be":381,"./nl-be.js":381,"./nl.js":380,"./nn":382,"./nn.js":382,"./pa-in":383,"./pa-in.js":383,"./pl":384,"./pl.js":384,"./pt":385,"./pt-br":386,"./pt-br.js":386,"./pt.js":385,"./ro":387,"./ro.js":387,"./ru":388,"./ru.js":388,"./sd":389,"./sd.js":389,"./se":390,"./se.js":390,"./si":391,"./si.js":391,"./sk":392,"./sk.js":392,"./sl":393,"./sl.js":393,"./sq":394,"./sq.js":394,"./sr":395,"./sr-cyrl":396,"./sr-cyrl.js":396,"./sr.js":395,"./ss":397,"./ss.js":397,"./sv":398,"./sv.js":398,"./sw":399,"./sw.js":399,"./ta":400,"./ta.js":400,"./te":401,"./te.js":401,"./tet":402,"./tet.js":402,"./tg":403,"./tg.js":403,"./th":404,"./th.js":404,"./tl-ph":405,"./tl-ph.js":405,"./tlh":406,"./tlh.js":406,"./tr":407,"./tr.js":407,"./tzl":408,"./tzl.js":408,"./tzm":409,"./tzm-latn":410,"./tzm-latn.js":410,"./tzm.js":409,"./ug-cn":411,"./ug-cn.js":411,"./uk":412,"./uk.js":412,"./ur":413,"./ur.js":413,"./uz":414,"./uz-latn":415,"./uz-latn.js":415,"./uz.js":414,"./vi":416,"./vi.js":416,"./x-pseudo":417,"./x-pseudo.js":417,"./yo":418,"./yo.js":418,"./zh-cn":419,"./zh-cn.js":419,"./zh-hk":420,"./zh-hk.js":420,"./zh-tw":421,"./zh-tw.js":421};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=626},636:function(e,t){},666:function(e,t){},667:function(e,t){},668:function(e,t){},683:function(e,t){},698:function(e,t){},704:function(e,t){},719:function(e,t,n){var r=n(225);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(225,function(){var t=n(225);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},721:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(33),i=n.n(o),s=n(285),c=n(42),l=n(447),u=n.n(l),d=n(72),p=n.n(d),f=n(55),m=n(466),h=n(136),y=n.n(h),v=n(58),j=n.n(v),b=n(84),g=n.n(b),E=n(452),_=n.n(E),w=n(453),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(O)),function(e){return e}),k=n(110),T=n(235),D=n(236),N=n.n(D),S=n(111),A=n.n(S),x=n(456),P=n.n(x),C=n(457),M=n.n(C),H=(n(690),n(467)),R=function(){return a.a.createElement(H.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:R}].filter(Boolean)})}var B,F={notifications:f.notifications,systemProfileStore:D.systemProfileStore},G=Object(T.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return B.addNew({on:t,callback:n})}var V=n(140),W=n.n(V),J=n(141),K=n.n(J),X=n(142),Q=n.n(X),Z=n(143),$=n.n(Z),ee=n(144),te=n.n(ee),ne=n(1),re=n.n(ne),ae=n(462),oe=n.n(ae),ie=n(145),se=n.n(ie),ce=n(127),le=n(286),ue=n(444),de=n(66),pe=n.n(de),fe=n(100),me=n.n(fe),he=n(103),ye=n.n(he),ve=(n(439),n(101)),je=n.n(ve),be=n(47),ge="/api/inventory/v1",Ee=n(463),_e=n.n(Ee),we=new(n(464).HostsApi)(void 0,ge,_e.a);var Oe=function(e,t){return{type:I.REMOVE_ENTITY,payload:we.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},Ie=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ke=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Te=n(264),De=n(265),Ne=n(129),Se=n(256),Ae=n(247),xe=n(63),Pe=n(29),Ce=n(12),Me=n(91),He=function(){return insights.loadInventory({react:a.a,reactRouterDom:xe,reactCore:Pe,reactIcons:Ce,pfReactTable:Me})},Re=n(257),ze=n(268),Le=n(269),Ue=n(270),Be=n(271),Fe=n(443),Ge=n(266),Ye=n(267),qe=n(226),Ve=n(242),We=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Re.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(ze.a,{gutter:"md"},a.a.createElement(Le.a,null,a.a.createElement(Ve.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Le.a,{isFilled:!0},a.a.createElement(Ue.a,{gutter:"md"},a.a.createElement(Be.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Be.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Be.a,null,a.a.createElement(Fe.a,null,"insights-client --unregister"))))),a.a.createElement(Ge.a,{gutter:"md"},a.a.createElement(Ye.a,null,a.a.createElement(qe.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(qe.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Je=re.a.shape({id:re.a.string,displayName:re.a.string});We.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([Je,re.a.arrayOf(Je)]),handleModalToggle:re.a.func,onConfirm:re.a.func},We.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ke=We,Xe=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.rows,s=Object(r.useRef)(null),c=Object(r.useState)(),l=ye()(c,2),u=l[0],p=l[1],f=Object(r.useState)(!1),m=ye()(f,2),h=m[0],y=m[1],v=Object(r.useState)({}),b=ye()(v,2),g=b[0],E=b[1],_=Object(r.useState)([]),w=ye()(_,2),O=w[0],I=w[1],k=Object(r.useState)(!1),T=ye()(k,2),D=T[0],N=T[1],S=function(){var e=me()(pe.a.mark(function e(){var n,r,a,o,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,He();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,p(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(e){I(e.filters),s&&s.current&&s.current.onRefreshData(e)};return Object(r.useEffect)(function(){S()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(be.PageHeader,{className:"pf-m-light"},a.a.createElement(be.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(be.Main,null,a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(De.a,{span:12},u&&a.a.createElement(u,{ref:s,hasCheckbox:!0,onRefresh:A,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;y(!0),E({id:r,displayName:a})}}]},a.a.createElement(Ne.a,{isPlain:!0,onSelect:function(){return N(!D)},isOpen:D,toggle:a.a.createElement(Se.a,{onToggle:function(e){return N(e)}}),dropdownItems:[a.a.createElement(Ae.a,{key:"delete-selected",onClick:function(){var e=i.filter(function(e){return e.selected});e.length>0&&(E(e),y(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Ke,{handleModalToggle:y,isModalOpen:h,currentSytem:g,onConfirm:function(){var e,t;Array.isArray(g)?(t=g.map(function(e){return e.id}),e=g.length>1?"".concat(g.length," systems"):g[0].display_name):(e=g.displayName,t=[g.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return A({filters:O})}),y(!1)}}))};Xe.contextTypes={store:re.a.object},Xe.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func};var Qe,Ze=je()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(Oe(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(Xe)),$e=n(108),et=n(250),tt=n(251),nt=(n(716),n(717),n(718),p()()(Qe=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=me()(pe.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,He();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(T.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,U),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:S.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(be.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(et.a,null,a.a.createElement(tt.a,null,a.a.createElement($e.a,{to:ot.table},"Inventory")),a.a.createElement(tt.a,{isActive:!0},i?i.display_name:a.a.createElement(be.Skeleton,{size:be.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(be.Main,{className:c},a.a.createElement(Te.a,{gutter:"md"},a.a.createElement(De.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||Qe);nt.contextTypes={store:re.a.object},nt.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var rt=je()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(Ie(t))},clearNotifications:function(){return e(ke())}}})(nt)),at=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.a,oe()({},r,{component:t}))};at.propTypes={component:re.a.func,rootClass:re.a.string};var ot={table:"/",detail:"/:inventoryId"};var it=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ot).some(function(e){return Object(le.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(ot.table),a.a.createElement(ue.a,null,a.a.createElement(at,{exact:!0,path:ot.table,component:Ze,rootClass:"inventory"}),a.a.createElement(at,{path:ot.detail,component:rt,rootClass:"inventory"}))};it.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(719);var st,ct=p()()(st=function(e){function t(e){var n;return W()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(it,{childProps:this.props}))}}]),t}(r.Component))||st;ct.propTypes={history:re.a.object};var lt=je()(Object(c.connect)()(ct));i.a.render(a.a.createElement(c.Provider,{store:function(){B=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[B.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(lt,null))),document.getElementById("root"))}});