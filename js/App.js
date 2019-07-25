!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return S.push.apply(S,s||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(S.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===g&&k()}(e,t),r&&r(e,t)};var a,o=!0,i="50866e5e00dfee5ec74f",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,g=0,b={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},b={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},N)I(n);return"prepare"===f&&0===g&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function k(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return T(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var E;s=w(b);var O=!1,I=!1,k=!1,T="";switch((E=y[b]?u(s):{type:"disposed",moduleId:b}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(h,[E.moduleId]),j[s]=g)}var S,x=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var P,C,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var R={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(R);for(c[s]=R,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var z=D[o.children[a]];z&&((S=z.parents.indexOf(s))>=0&&z.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(C=p[s],a=0;a<C.length;a++)P=C[a],(S=o.children.indexOf(P))>=0&&o.children.splice(S,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){C=p[s];var B=[];for(r=0;r<C.length;r++)if(P=C[r],n=o.hot._acceptedDependencies[P]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var U=x[r];s=U.module,l=[s];try{A(s)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(h)}))}var D={},N={0:0},S=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||I(e),0===g&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/beta/apps/inventory/",A.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],P=x.push.bind(x);x.push=t,x=x.slice();for(var C=0;C<x.length;C++)t(x[C]);var M=P;S.push([738,1]),n()}({202:function(e,t,n){(t=e.exports=n(9)(!1)).i(n(418),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},205:function(e,t,n){(t=e.exports=n(9)(!1)).i(n(418),""),t.i(n(737),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},417:function(e,t,n){var r=n(202);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(10)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(202,function(){var t=n(202);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},444:function(e,t){},627:function(e,t,n){var r={"./af":273,"./af.js":273,"./ar":274,"./ar-dz":275,"./ar-dz.js":275,"./ar-kw":276,"./ar-kw.js":276,"./ar-ly":277,"./ar-ly.js":277,"./ar-ma":278,"./ar-ma.js":278,"./ar-sa":279,"./ar-sa.js":279,"./ar-tn":280,"./ar-tn.js":280,"./ar.js":274,"./az":281,"./az.js":281,"./be":282,"./be.js":282,"./bg":283,"./bg.js":283,"./bm":284,"./bm.js":284,"./bn":285,"./bn.js":285,"./bo":286,"./bo.js":286,"./br":287,"./br.js":287,"./bs":288,"./bs.js":288,"./ca":289,"./ca.js":289,"./cs":290,"./cs.js":290,"./cv":291,"./cv.js":291,"./cy":292,"./cy.js":292,"./da":293,"./da.js":293,"./de":294,"./de-at":295,"./de-at.js":295,"./de-ch":296,"./de-ch.js":296,"./de.js":294,"./dv":297,"./dv.js":297,"./el":298,"./el.js":298,"./en-SG":299,"./en-SG.js":299,"./en-au":300,"./en-au.js":300,"./en-ca":301,"./en-ca.js":301,"./en-gb":302,"./en-gb.js":302,"./en-ie":303,"./en-ie.js":303,"./en-il":304,"./en-il.js":304,"./en-nz":305,"./en-nz.js":305,"./eo":306,"./eo.js":306,"./es":307,"./es-do":308,"./es-do.js":308,"./es-us":309,"./es-us.js":309,"./es.js":307,"./et":310,"./et.js":310,"./eu":311,"./eu.js":311,"./fa":312,"./fa.js":312,"./fi":313,"./fi.js":313,"./fo":314,"./fo.js":314,"./fr":315,"./fr-ca":316,"./fr-ca.js":316,"./fr-ch":317,"./fr-ch.js":317,"./fr.js":315,"./fy":318,"./fy.js":318,"./ga":319,"./ga.js":319,"./gd":320,"./gd.js":320,"./gl":321,"./gl.js":321,"./gom-latn":322,"./gom-latn.js":322,"./gu":323,"./gu.js":323,"./he":324,"./he.js":324,"./hi":325,"./hi.js":325,"./hr":326,"./hr.js":326,"./hu":327,"./hu.js":327,"./hy-am":328,"./hy-am.js":328,"./id":329,"./id.js":329,"./is":330,"./is.js":330,"./it":331,"./it-ch":332,"./it-ch.js":332,"./it.js":331,"./ja":333,"./ja.js":333,"./jv":334,"./jv.js":334,"./ka":335,"./ka.js":335,"./kk":336,"./kk.js":336,"./km":337,"./km.js":337,"./kn":338,"./kn.js":338,"./ko":339,"./ko.js":339,"./ku":340,"./ku.js":340,"./ky":341,"./ky.js":341,"./lb":342,"./lb.js":342,"./lo":343,"./lo.js":343,"./lt":344,"./lt.js":344,"./lv":345,"./lv.js":345,"./me":346,"./me.js":346,"./mi":347,"./mi.js":347,"./mk":348,"./mk.js":348,"./ml":349,"./ml.js":349,"./mn":350,"./mn.js":350,"./mr":351,"./mr.js":351,"./ms":352,"./ms-my":353,"./ms-my.js":353,"./ms.js":352,"./mt":354,"./mt.js":354,"./my":355,"./my.js":355,"./nb":356,"./nb.js":356,"./ne":357,"./ne.js":357,"./nl":358,"./nl-be":359,"./nl-be.js":359,"./nl.js":358,"./nn":360,"./nn.js":360,"./pa-in":361,"./pa-in.js":361,"./pl":362,"./pl.js":362,"./pt":363,"./pt-br":364,"./pt-br.js":364,"./pt.js":363,"./ro":365,"./ro.js":365,"./ru":366,"./ru.js":366,"./sd":367,"./sd.js":367,"./se":368,"./se.js":368,"./si":369,"./si.js":369,"./sk":370,"./sk.js":370,"./sl":371,"./sl.js":371,"./sq":372,"./sq.js":372,"./sr":373,"./sr-cyrl":374,"./sr-cyrl.js":374,"./sr.js":373,"./ss":375,"./ss.js":375,"./sv":376,"./sv.js":376,"./sw":377,"./sw.js":377,"./ta":378,"./ta.js":378,"./te":379,"./te.js":379,"./tet":380,"./tet.js":380,"./tg":381,"./tg.js":381,"./th":382,"./th.js":382,"./tl-ph":383,"./tl-ph.js":383,"./tlh":384,"./tlh.js":384,"./tr":385,"./tr.js":385,"./tzl":386,"./tzl.js":386,"./tzm":387,"./tzm-latn":388,"./tzm-latn.js":388,"./tzm.js":387,"./ug-cn":389,"./ug-cn.js":389,"./uk":390,"./uk.js":390,"./ur":391,"./ur.js":391,"./uz":392,"./uz-latn":393,"./uz-latn.js":393,"./uz.js":392,"./vi":394,"./vi.js":394,"./x-pseudo":395,"./x-pseudo.js":395,"./yo":396,"./yo.js":396,"./zh-cn":397,"./zh-cn.js":397,"./zh-hk":398,"./zh-hk.js":398,"./zh-tw":399,"./zh-tw.js":399};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=627},637:function(e,t){},667:function(e,t){},668:function(e,t){},669:function(e,t){},684:function(e,t){},699:function(e,t){},705:function(e,t){},736:function(e,t,n){var r=n(205);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(10)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(205,function(){var t=n(205);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},738:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(19),i=n.n(o),s=n(38),c=n(30),l=n(433),u=n.n(l),d=n(55),p=n.n(d),f=n(42),m=n(449),h=n(115),y=n.n(h),v=n(46),j=n.n(v),g=n(65),b=n.n(g),E=n(436),_=n.n(E),w=n(437),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],b()(O)),function(e){return e}),k=n(88),T=n(212),D=n(213),N=n.n(D),S=n(89),A=n.n(S),x=n(439),P=n.n(x),C=n(440),M=n.n(C),R=(n(691),n(450)),H=function(){return a.a.createElement(R.a,{locale:navigator.language},a.a.createElement(M.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function B(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:H}].filter(Boolean)})}var U,F={notifications:f.notifications,systemProfileStore:D.systemProfileStore},G=Object(T.applyReducerHash)(y()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return U.addNew({on:t,callback:n})}var V=n(117),W=n.n(V),J=n(118),K=n.n(J),X=n(119),Q=n.n(X),Z=n(120),$=n.n(Z),ee=n(121),te=n.n(ee),ne=n(1),re=n.n(ne),ae=n(445),oe=n.n(ae),ie=n(122),se=n.n(ie),ce=n(58),le=n(52),ue=n.n(le),de=n(73),pe=n.n(de),fe=n(76),me=n.n(fe),he=(n(417),n(74)),ye=n.n(he),ve=n(34),je="/api/inventory/v1",ge=n(446),be=n.n(ge),Ee=new(n(447).HostsApi)(void 0,je,be.a);var _e=function(e,t){return{type:I.REMOVE_ENTITY,payload:Ee.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},we=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Oe=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Ie=n(239),ke=n(240),Te=n(430),De=n(232),Ne=n(230),Se=n(21),Ae=n(11),xe=n(69),Pe=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Se,reactIcons:Ae,pfReactTable:xe})},Ce=n(233),Me=n(242),Re=n(243),He=n(244),ze=n(245),Le=n(206),Be=n(429),Ue=n(241),Fe=n(208),Ge=n(220),Ye=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Ce.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Me.a,{gutter:"md"},a.a.createElement(Re.a,null,a.a.createElement(Ge.a,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Re.a,{isFilled:!0},a.a.createElement(He.a,{gutter:"md"},a.a.createElement(ze.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(ze.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(ze.a,null,a.a.createElement(Le.b,null,"insights-client --unregister"))))),a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Fe.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Fe.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},qe=re.a.shape({id:re.a.string,displayName:re.a.string});Ye.propTypes={isModalOpen:re.a.bool,currentSytem:re.a.oneOfType([qe,re.a.arrayOf(qe)]),handleModalToggle:re.a.func,onConfirm:re.a.func},Ye.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ve=Ye,We=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.rows,s=Object(r.useRef)(null),c=Object(r.useState)(),l=me()(c,2),u=l[0],p=l[1],f=Object(r.useState)(!1),m=me()(f,2),h=m[0],y=m[1],v=Object(r.useState)({}),g=me()(v,2),b=g[0],E=g[1],_=Object(r.useState)([]),w=me()(_,2),O=w[0],I=w[1],k=Object(r.useState)(!1),T=me()(k,2),D=T[0],N=T[1],S=function(){var e=pe()(ue.a.mark(function e(){var n,r,a,o,i;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Pe();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,Object(d.getRegistry)().register(j()({},a(G))),o=r(),i=o.InventoryTable,p(function(){return i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(e){I(e.filters),s&&s.current&&s.current.onRefreshData(e)};return Object(r.useEffect)(function(){S()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ve.PageHeader,{className:"pf-m-light"},a.a.createElement(ve.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ve.Main,null,a.a.createElement(Ie.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},u&&a.a.createElement(u,{ref:s,hasCheckbox:!0,onRefresh:A,actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;y(!0),E({id:r,displayName:a})}}]},a.a.createElement(Te.a,{isPlain:!0,onSelect:function(){return N(!D)},isOpen:D,toggle:a.a.createElement(De.a,{onToggle:function(e){return N(e)}}),dropdownItems:[a.a.createElement(Ne.a,{key:"delete-selected",onClick:function(){var e=i.filter(function(e){return e.selected});e.length>0&&(E(e),y(!0))},component:"button"},"Delete")]}))))),a.a.createElement(Ve,{handleModalToggle:y,isModalOpen:h,currentSytem:b,onConfirm:function(){var e,t;Array.isArray(b)?(t=b.map(function(e){return e.id}),e=b.length>1?"".concat(b.length," systems"):b[0].display_name):(e=b.displayName,t=[b.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return A({filters:O})}),y(!1)}}))};We.contextTypes={store:re.a.object},We.propTypes={rows:re.a.arrayOf(re.a.shape({id:re.a.string,selected:re.a.bool})),loaded:re.a.bool,loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func};var Je,Ke=ye()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded}},function(e){return{loadEntity:function(t){return e(we(t))},clearNotifications:function(){return e(Oe())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(_e(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(We)),Xe=n(223),Qe=n(224),Ze=(n(734),n(735),p()()(Je=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=pe()(ue.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Pe();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(T.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,B),z)))),o=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,S.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:S.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,c=o.currentApp,l="".concat(c&&"general_information"===c?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(ve.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(l)},a.a.createElement(Xe.a,null,a.a.createElement(Qe.a,null,a.a.createElement(s.Link,{to:tt.table},"Inventory")),a.a.createElement(Qe.a,{isActive:!0},i?i.display_name:a.a.createElement(ve.Skeleton,{size:ve.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(ve.Main,{className:l},a.a.createElement(Ie.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||Je);Ze.contextTypes={store:re.a.object},Ze.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var $e=ye()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(we(t))},clearNotifications:function(){return e(Oe())}}})(Ze)),et=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ce.d,oe()({},r,{component:t}))};et.propTypes={component:re.a.func,rootClass:re.a.string};var tt={table:"/",detail:"/:inventoryId"};var nt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(tt).some(function(e){return Object(ce.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(tt.table),a.a.createElement(ce.g,null,a.a.createElement(et,{exact:!0,path:tt.table,component:Ke,rootClass:"inventory"}),a.a.createElement(et,{path:tt.detail,component:$e,rootClass:"inventory"}))};nt.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(736);var rt,at=p()()(rt=function(e){function t(e){var n;return W()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(nt,{childProps:this.props}))}}]),t}(r.Component))||rt;at.propTypes={history:re.a.object};var ot=ye()(Object(c.connect)()(at));i.a.render(a.a.createElement(c.Provider,{store:function(){U=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[U.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(k.getBaseName)(window.location.pathname)},a.a.createElement(ot,null))),document.getElementById("root"))}});