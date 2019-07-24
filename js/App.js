!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===g&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="a85278adeeae19f7ebee",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,g=0,b={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},b={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===g&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return T(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var E;s=w(b);var O=!1,I=!1,k=!1,T="";switch((E=y[b]?u(s):{type:"disposed",moduleId:b}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=g)}var S,x=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var P,C,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var R={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(R);for(c[s]=R,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var z=D[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(C=p[s],a=0;a<C.length;a++)P=C[a],(S=o.children.indexOf(P))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){C=p[s];var B=[];for(r=0;r<C.length;r++)if(P=C[r],n=o.hot._acceptedDependencies[P]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var U=x[r];s=U.module,l=[s];try{A(s)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var D={},N={0:0},S=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||I(e),0===g&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/apps/inventory/",A.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],P=x.push.bind(x);x.push=t,x=x.slice();for(var C=0;C<x.length;C++)t(x[C]);var M=P;S.push([765,1]),n()}({239:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(442),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},242:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(442),""),t.i(n(764),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},441:function(e,t,n){var r=n(239);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(239,function(){var t=n(239);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},470:function(e,t){},654:function(e,t,n){var r={"./af":297,"./af.js":297,"./ar":298,"./ar-dz":299,"./ar-dz.js":299,"./ar-kw":300,"./ar-kw.js":300,"./ar-ly":301,"./ar-ly.js":301,"./ar-ma":302,"./ar-ma.js":302,"./ar-sa":303,"./ar-sa.js":303,"./ar-tn":304,"./ar-tn.js":304,"./ar.js":298,"./az":305,"./az.js":305,"./be":306,"./be.js":306,"./bg":307,"./bg.js":307,"./bm":308,"./bm.js":308,"./bn":309,"./bn.js":309,"./bo":310,"./bo.js":310,"./br":311,"./br.js":311,"./bs":312,"./bs.js":312,"./ca":313,"./ca.js":313,"./cs":314,"./cs.js":314,"./cv":315,"./cv.js":315,"./cy":316,"./cy.js":316,"./da":317,"./da.js":317,"./de":318,"./de-at":319,"./de-at.js":319,"./de-ch":320,"./de-ch.js":320,"./de.js":318,"./dv":321,"./dv.js":321,"./el":322,"./el.js":322,"./en-SG":323,"./en-SG.js":323,"./en-au":324,"./en-au.js":324,"./en-ca":325,"./en-ca.js":325,"./en-gb":326,"./en-gb.js":326,"./en-ie":327,"./en-ie.js":327,"./en-il":328,"./en-il.js":328,"./en-nz":329,"./en-nz.js":329,"./eo":330,"./eo.js":330,"./es":331,"./es-do":332,"./es-do.js":332,"./es-us":333,"./es-us.js":333,"./es.js":331,"./et":334,"./et.js":334,"./eu":335,"./eu.js":335,"./fa":336,"./fa.js":336,"./fi":337,"./fi.js":337,"./fo":338,"./fo.js":338,"./fr":339,"./fr-ca":340,"./fr-ca.js":340,"./fr-ch":341,"./fr-ch.js":341,"./fr.js":339,"./fy":342,"./fy.js":342,"./ga":343,"./ga.js":343,"./gd":344,"./gd.js":344,"./gl":345,"./gl.js":345,"./gom-latn":346,"./gom-latn.js":346,"./gu":347,"./gu.js":347,"./he":348,"./he.js":348,"./hi":349,"./hi.js":349,"./hr":350,"./hr.js":350,"./hu":351,"./hu.js":351,"./hy-am":352,"./hy-am.js":352,"./id":353,"./id.js":353,"./is":354,"./is.js":354,"./it":355,"./it-ch":356,"./it-ch.js":356,"./it.js":355,"./ja":357,"./ja.js":357,"./jv":358,"./jv.js":358,"./ka":359,"./ka.js":359,"./kk":360,"./kk.js":360,"./km":361,"./km.js":361,"./kn":362,"./kn.js":362,"./ko":363,"./ko.js":363,"./ku":364,"./ku.js":364,"./ky":365,"./ky.js":365,"./lb":366,"./lb.js":366,"./lo":367,"./lo.js":367,"./lt":368,"./lt.js":368,"./lv":369,"./lv.js":369,"./me":370,"./me.js":370,"./mi":371,"./mi.js":371,"./mk":372,"./mk.js":372,"./ml":373,"./ml.js":373,"./mn":374,"./mn.js":374,"./mr":375,"./mr.js":375,"./ms":376,"./ms-my":377,"./ms-my.js":377,"./ms.js":376,"./mt":378,"./mt.js":378,"./my":379,"./my.js":379,"./nb":380,"./nb.js":380,"./ne":381,"./ne.js":381,"./nl":382,"./nl-be":383,"./nl-be.js":383,"./nl.js":382,"./nn":384,"./nn.js":384,"./pa-in":385,"./pa-in.js":385,"./pl":386,"./pl.js":386,"./pt":387,"./pt-br":388,"./pt-br.js":388,"./pt.js":387,"./ro":389,"./ro.js":389,"./ru":390,"./ru.js":390,"./sd":391,"./sd.js":391,"./se":392,"./se.js":392,"./si":393,"./si.js":393,"./sk":394,"./sk.js":394,"./sl":395,"./sl.js":395,"./sq":396,"./sq.js":396,"./sr":397,"./sr-cyrl":398,"./sr-cyrl.js":398,"./sr.js":397,"./ss":399,"./ss.js":399,"./sv":400,"./sv.js":400,"./sw":401,"./sw.js":401,"./ta":402,"./ta.js":402,"./te":403,"./te.js":403,"./tet":404,"./tet.js":404,"./tg":405,"./tg.js":405,"./th":406,"./th.js":406,"./tl-ph":407,"./tl-ph.js":407,"./tlh":408,"./tlh.js":408,"./tr":409,"./tr.js":409,"./tzl":410,"./tzl.js":410,"./tzm":411,"./tzm-latn":412,"./tzm-latn.js":412,"./tzm.js":411,"./ug-cn":413,"./ug-cn.js":413,"./uk":414,"./uk.js":414,"./ur":415,"./ur.js":415,"./uz":416,"./uz-latn":417,"./uz-latn.js":417,"./uz.js":416,"./vi":418,"./vi.js":418,"./x-pseudo":419,"./x-pseudo.js":419,"./yo":420,"./yo.js":420,"./zh-cn":421,"./zh-cn.js":421,"./zh-hk":422,"./zh-hk.js":422,"./zh-tw":423,"./zh-tw.js":423};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=654},664:function(e,t){},694:function(e,t){},695:function(e,t){},696:function(e,t){},711:function(e,t){},726:function(e,t){},732:function(e,t){},763:function(e,t,n){var r=n(242);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(242,function(){var t=n(242);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},765:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(30),i=n.n(o),s=n(54),c=n(42),l=n(457),u=n.n(l),d=n(77),p=n.n(d),f=n(59),m=n(475),h=n(149),y=n.n(h),v=n(62),j=n.n(v),g=n(89),b=n.n(g),E=n(462),_=n.n(E),w=n(463),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],b()(O)),function(e){return e}),k=n(118),T=n(248),D=n(249),N=n.n(D),S=n(119),A=n.n(S),x=n(465),P=n.n(x),C=n(466),M=n.n(C),R=(n(718),n(476)),H=function(){return a.a.createElement(R.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function B(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:H}].filter(Boolean)})}var U,F={notifications:f.notifications,systemProfileStore:D.systemProfileStore},G=Object(T.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return U.addNew({on:t,callback:n})}var V=n(151),W=n.n(V),J=n(152),K=n.n(J),X=n(153),Q=n.n(X),Z=n(154),$=n.n(Z),ee=n(155),te=n.n(ee),ne=n(1),re=n.n(ne),ae=n(471),oe=n.n(ae),ie=n(156),se=n.n(ie),ce=n(82),le=n(71),ue=n.n(le),de=n(104),pe=n.n(de),fe=n(109),me=n.n(fe),he=(n(441),n(105)),ye=n.n(he),ve=n(48),je="/api/inventory/v1",ge=n(472),be=n.n(ge),Ee=new(n(473).HostsApi)(void 0,je,be.a);var _e=function(e,t){return{type:I.REMOVE_ENTITY,payload:Ee.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},we=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Oe=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Ie=n(261),ke=n(262),Te=n(142),De=n(454),Ne=n(254),Se=n(28),Ae=n(67),xe=n(96),Pe=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Se,reactIcons:Ae,pfReactTable:xe})},Ce=n(259),Me=n(265),Re=n(266),He=n(267),ze=n(268),Le=n(453),Be=n(263),Ue=n(264),Fe=n(243),Ge=n(270),Ye=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Ce.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Me.a,{gutter:"md"},a.a.createElement(Re.a,null,a.a.createElement(Ge.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Re.a,{isFilled:!0},a.a.createElement(He.a,{gutter:"md"},a.a.createElement(ze.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(ze.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(ze.a,null,a.a.createElement(Le.a,null,"insights-client --unregister"))))),a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Fe.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Fe.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},qe=re.a.shape({id:re.a.string,displayName:re.a.string});Ye.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([qe,re.a.arrayOf(qe)]),handleModalToggle:re.a.func,onConfirm:re.a.func},Ye.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ve=Ye,We=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.rows,s=Object(r.useRef)(null),c=Object(r.useState)(),l=me()(c,2),u=l[0],p=l[1],f=Object(r.useState)(!1),m=me()(f,2),h=m[0],y=m[1],v=Object(r.useState)({}),g=me()(v,2),b=g[0],E=g[1],_=Object(r.useState)([]),w=me()(_,2),O=w[0],I=w[1],k=Object(r.useState)(!1),T=me()(k,2),D=T[0],N=T[1],S=function(){var e=pe()(ue.a.mark(function e(){var n,r,a,o,i;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Pe();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,p(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(e){I(e.filters),s&&s.current&&s.current.onRefreshData(e)};return Object(r.useEffect)(function(){S()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ve.PageHeader,{className:"pf-m-light"},a.a.createElement(ve.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ve.Main,null,a.a.createElement(Ie.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},u&&a.a.createElement(u,{ref:s,hasCheckbox:!0,onRefresh:A,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;y(!0),E({id:r,displayName:a})}}]},a.a.createElement(Te.b,{isPlain:!0,onSelect:function(){return N(!D)},isOpen:D,toggle:a.a.createElement(De.a,{onToggle:function(e){return N(e)}}),dropdownItems:[a.a.createElement(Ne.a,{key:"delete-selected",onClick:function(){var e=i.filter(function(e){return e.selected});e.length>0&&(E(e),y(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Ve,{handleModalToggle:y,isModalOpen:h,currentSytem:b,onConfirm:function(){var e,t;Array.isArray(b)?(t=b.map(function(e){return e.id}),e=b.length>1?"".concat(b.length," systems"):b[0].display_name):(e=b.displayName,t=[b.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return A({filters:O})}),y(!1)}}))};We.contextTypes={store:re.a.object},We.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func};var Je,Ke=ye()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){return{loadEntity:function(t){return e(we(t))},clearNotifications:function(){return e(Oe())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(_e(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(We)),Xe=n(256),Qe=n(257),Ze=(n(761),n(762),p()()(Je=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=pe()(ue.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Pe();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(T.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,B),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:S.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,c=o.currentApp,l="".concat(c&&"general_information"===c?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(ve.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(l)},a.a.createElement(Xe.a,null,a.a.createElement(Qe.a,null,a.a.createElement(s.Link,{to:tt.table},"Inventory")),a.a.createElement(Qe.a,{isActive:!0},i?i.display_name:a.a.createElement(ve.Skeleton,{size:ve.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(ve.Main,{className:l},a.a.createElement(Ie.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||Je);Ze.contextTypes={store:re.a.object},Ze.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var $e=ye()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(we(t))},clearNotifications:function(){return e(Oe())}}})(Ze)),et=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.d,oe()({},r,{component:t}))};et.propTypes={component:re.a.func,rootClass:re.a.string};var tt={table:"/",detail:"/:inventoryId"};var nt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(tt).some(function(e){return Object(ce.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(tt.table),a.a.createElement(ce.g,null,a.a.createElement(et,{exact:!0,path:tt.table,component:Ke,rootClass:"inventory"}),a.a.createElement(et,{path:tt.detail,component:$e,rootClass:"inventory"}))};nt.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(763);var rt,at=p()()(rt=function(e){function t(e){var n;return W()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(nt,{childProps:this.props}))}}]),t}(r.Component))||rt;at.propTypes={history:re.a.object};var ot=ye()(Object(c.connect)()(at));i.a.render(a.a.createElement(c.Provider,{store:function(){U=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[U.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(ot,null))),document.getElementById("root"))}});