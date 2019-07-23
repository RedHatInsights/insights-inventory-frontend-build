!function(e){function t(t){for(var r,o,a=t[0],i=t[1],s=t[2],c=0,l=[];c<a.length;c++)o=a[c],N[o]&&l.push(N[o][0]),N[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return A.push.apply(A,s||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==N[a]&&(r=!1)}r&&(A.splice(t--,1),e=S(S.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--j&&0===b&&k()}(e,t),r&&r(e,t)};var o,a=!0,i="353b4674bff390371158",s=1e4,c={},l=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,v,y,j=0,b=0,g={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;E={},g={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in v={},N)I(n);return"prepare"===f&&0===b&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=S.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return T(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,s;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var l=a.parents[c],d=D[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),u(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},m=[],j={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var E;s=w(g);var O=!1,I=!1,k=!1,T="";switch((E=v[g]?d(s):{type:"disposed",moduleId:g}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return h("abort"),Promise.reject(O);if(I)for(s in j[s]=v[s],u(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],E.outdatedDependencies[s]));k&&(u(m,[E.moduleId]),j[s]=b)}var A,x=[];for(r=0;r<m.length;r++)s=m[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var M,P,R=m.slice();R.length>0;)if(s=R.pop(),a=D[s]){var H={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(H);for(c[s]=H,a.hot.active=!1,delete D[s],delete p[s],o=0;o<a.children.length;o++){var z=D[a.children[o]];z&&((A=z.parents.indexOf(s))>=0&&z.parents.splice(A,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=D[s]))for(P=p[s],o=0;o<P.length;o++)M=P[o],(A=a.children.indexOf(M))>=0&&a.children.splice(A,1);for(s in h("apply"),i=y,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=D[s])){P=p[s];var U=[];for(r=0;r<P.length;r++)if(M=P[r],n=a.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:P[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var B=x[r];s=B.module,l=[s];try{S(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(m)}))}var D={},N={0:0},A=[];function S(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=l,l=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return S;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),S(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,S.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),S.t(e,-2&t)},n}(t)),n.l=!0,n.exports}S.m=e,S.c=D,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="/apps/inventory/",S.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],M=x.push.bind(x);x.push=t,x=x.slice();for(var P=0;P<x.length;P++)t(x[P]);var R=M;A.push([740,1]),n()}({206:function(e,t,n){(t=e.exports=n(9)(!1)).i(n(422),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},209:function(e,t,n){(t=e.exports=n(9)(!1)).i(n(422),""),t.i(n(739),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},421:function(e,t,n){var r=n(206);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(10)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(206,function(){var t=n(206);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},449:function(e,t){},633:function(e,t,n){var r={"./af":277,"./af.js":277,"./ar":278,"./ar-dz":279,"./ar-dz.js":279,"./ar-kw":280,"./ar-kw.js":280,"./ar-ly":281,"./ar-ly.js":281,"./ar-ma":282,"./ar-ma.js":282,"./ar-sa":283,"./ar-sa.js":283,"./ar-tn":284,"./ar-tn.js":284,"./ar.js":278,"./az":285,"./az.js":285,"./be":286,"./be.js":286,"./bg":287,"./bg.js":287,"./bm":288,"./bm.js":288,"./bn":289,"./bn.js":289,"./bo":290,"./bo.js":290,"./br":291,"./br.js":291,"./bs":292,"./bs.js":292,"./ca":293,"./ca.js":293,"./cs":294,"./cs.js":294,"./cv":295,"./cv.js":295,"./cy":296,"./cy.js":296,"./da":297,"./da.js":297,"./de":298,"./de-at":299,"./de-at.js":299,"./de-ch":300,"./de-ch.js":300,"./de.js":298,"./dv":301,"./dv.js":301,"./el":302,"./el.js":302,"./en-SG":303,"./en-SG.js":303,"./en-au":304,"./en-au.js":304,"./en-ca":305,"./en-ca.js":305,"./en-gb":306,"./en-gb.js":306,"./en-ie":307,"./en-ie.js":307,"./en-il":308,"./en-il.js":308,"./en-nz":309,"./en-nz.js":309,"./eo":310,"./eo.js":310,"./es":311,"./es-do":312,"./es-do.js":312,"./es-us":313,"./es-us.js":313,"./es.js":311,"./et":314,"./et.js":314,"./eu":315,"./eu.js":315,"./fa":316,"./fa.js":316,"./fi":317,"./fi.js":317,"./fo":318,"./fo.js":318,"./fr":319,"./fr-ca":320,"./fr-ca.js":320,"./fr-ch":321,"./fr-ch.js":321,"./fr.js":319,"./fy":322,"./fy.js":322,"./ga":323,"./ga.js":323,"./gd":324,"./gd.js":324,"./gl":325,"./gl.js":325,"./gom-latn":326,"./gom-latn.js":326,"./gu":327,"./gu.js":327,"./he":328,"./he.js":328,"./hi":329,"./hi.js":329,"./hr":330,"./hr.js":330,"./hu":331,"./hu.js":331,"./hy-am":332,"./hy-am.js":332,"./id":333,"./id.js":333,"./is":334,"./is.js":334,"./it":335,"./it-ch":336,"./it-ch.js":336,"./it.js":335,"./ja":337,"./ja.js":337,"./jv":338,"./jv.js":338,"./ka":339,"./ka.js":339,"./kk":340,"./kk.js":340,"./km":341,"./km.js":341,"./kn":342,"./kn.js":342,"./ko":343,"./ko.js":343,"./ku":344,"./ku.js":344,"./ky":345,"./ky.js":345,"./lb":346,"./lb.js":346,"./lo":347,"./lo.js":347,"./lt":348,"./lt.js":348,"./lv":349,"./lv.js":349,"./me":350,"./me.js":350,"./mi":351,"./mi.js":351,"./mk":352,"./mk.js":352,"./ml":353,"./ml.js":353,"./mn":354,"./mn.js":354,"./mr":355,"./mr.js":355,"./ms":356,"./ms-my":357,"./ms-my.js":357,"./ms.js":356,"./mt":358,"./mt.js":358,"./my":359,"./my.js":359,"./nb":360,"./nb.js":360,"./ne":361,"./ne.js":361,"./nl":362,"./nl-be":363,"./nl-be.js":363,"./nl.js":362,"./nn":364,"./nn.js":364,"./pa-in":365,"./pa-in.js":365,"./pl":366,"./pl.js":366,"./pt":367,"./pt-br":368,"./pt-br.js":368,"./pt.js":367,"./ro":369,"./ro.js":369,"./ru":370,"./ru.js":370,"./sd":371,"./sd.js":371,"./se":372,"./se.js":372,"./si":373,"./si.js":373,"./sk":374,"./sk.js":374,"./sl":375,"./sl.js":375,"./sq":376,"./sq.js":376,"./sr":377,"./sr-cyrl":378,"./sr-cyrl.js":378,"./sr.js":377,"./ss":379,"./ss.js":379,"./sv":380,"./sv.js":380,"./sw":381,"./sw.js":381,"./ta":382,"./ta.js":382,"./te":383,"./te.js":383,"./tet":384,"./tet.js":384,"./tg":385,"./tg.js":385,"./th":386,"./th.js":386,"./tl-ph":387,"./tl-ph.js":387,"./tlh":388,"./tlh.js":388,"./tr":389,"./tr.js":389,"./tzl":390,"./tzl.js":390,"./tzm":391,"./tzm-latn":392,"./tzm-latn.js":392,"./tzm.js":391,"./ug-cn":393,"./ug-cn.js":393,"./uk":394,"./uk.js":394,"./ur":395,"./ur.js":395,"./uz":396,"./uz-latn":397,"./uz-latn.js":397,"./uz.js":396,"./vi":398,"./vi.js":398,"./x-pseudo":399,"./x-pseudo.js":399,"./yo":400,"./yo.js":400,"./zh-cn":401,"./zh-cn.js":401,"./zh-hk":402,"./zh-hk.js":402,"./zh-tw":403,"./zh-tw.js":403};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=633},643:function(e,t){},673:function(e,t){},674:function(e,t){},675:function(e,t){},690:function(e,t){},705:function(e,t){},711:function(e,t){},738:function(e,t,n){var r=n(209);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(10)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(209,function(){var t=n(209);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},740:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(19),i=n.n(a),s=n(266),c=n(31),l=n(438),d=n.n(l),u=n(52),p=n.n(u),f=n(40),h=n(455),m=n(122),v=n.n(m),y=n(45),j=n.n(y),b=n(62),g=n.n(b),E=n(441),_=n.n(E),w=n(442),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(O)),function(e){return e}),k=n(93),T=n(216),D=n(217),N=n.n(D),A=n(94),S=n.n(A),x=n(444),M=n.n(x),P=n(445),R=n.n(P),H=(n(697),n(456)),C=function(){return o.a.createElement(H.a,{locale:navigator.language},o.a.createElement(R.a,null))},z={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:M.a},L(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:S.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:C}].filter(Boolean)})}var B,F={notifications:f.notifications,systemProfileStore:D.systemProfileStore},G=Object(T.applyReducerHash)(v()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),z),Y=F;function q(e){var t=e.actionType,n=e.callback;return B.addNew({on:t,callback:n})}var V=n(73),W=n.n(V),J=n(74),K=n.n(J),X=n(75),Q=n.n(X),Z=n(76),$=n.n(Z),ee=n(77),te=n.n(ee),ne=n(1),re=n.n(ne),oe=n(451),ae=n.n(oe),ie=n(127),se=n.n(ie),ce=n(116),le=n(267),de=n(435),ue=n(50),pe=n.n(ue),fe=n(78),he=n.n(fe),me=n(56),ve=n.n(me),ye=(n(421),n(79)),je=n.n(ye),be=n(36),ge="/api/inventory/v1",Ee=n(452),_e=n.n(Ee),we=new(n(453).HostsApi)(void 0,ge,_e.a);var Oe,Ie=function(e,t){return{type:I.REMOVE_ENTITY,payload:we.apiHostDeleteById([e]),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},ke=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Te=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},De=n(241),Ne=n(242),Ae=n(235),Se=n(244),xe=n(245),Me=n(246),Pe=n(247),Re=n(210),He=n(433),Ce=n(243),ze=n(212),Le=n(222),Ue=n(43),Be=n(22),Fe=n(11),Ge=n(66),Ye=function(){return insights.loadInventory({react:o.a,reactRouterDom:Ue,reactCore:Be,reactIcons:Fe,pfReactTable:Ge})},qe=p()()(Oe=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.inventory=o.a.createRef(),r.state={isModalOpen:!1,removeListener:function(){}},r.onDeleteHost=r.onDeleteHost.bind(ve()(ve()(r))),r.onRefresh=r.onRefresh.bind(ve()(ve()(r))),r.handleModalToggle=r.handleModalToggle.bind(ve()(ve()(r))),r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=he()(pe.a.mark(function e(){var t,n,r,o,a,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Ye();case 3:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,this.getRegistry().register(j()({},r(G))),o=n(),a=o.InventoryTable,i=o.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:a});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onRefresh",value:function(e){var t=this;this.setState({filters:e.filters},function(){return t.inventory.current.onRefreshData(e,!1)})}},{key:"handleModalToggle",value:function(){this.setState(function(e){return{isModalOpen:!e.isModalOpen}})}},{key:"onDeleteHost",value:function(e,t){this.setState(function(n){return{isModalOpen:!n.isModalOpen,id:e,displayName:t}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.ConnectedInventory,r=t.isModalOpen,a=t.displayName,i=t.id,s=t.filters,c=this.props,l=c.deleteEntity,d=c.addNotification;return o.a.createElement(o.a.Fragment,null,o.a.createElement(be.PageHeader,{className:"pf-m-light"},o.a.createElement(be.PageHeaderTitle,{title:"Inventory"})),o.a.createElement(be.Main,null,o.a.createElement(De.a,{gutter:"md"},o.a.createElement(Ne.a,{span:12},n&&o.a.createElement(n,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1,actions:[{title:"Delete",onClick:function(t,n,r){var o=r.id,a=r.display_name;return e.onDeleteHost(o,a)}}]})))),o.a.createElement(Ae.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:this.handleModalToggle},o.a.createElement(Se.a,{gutter:"md"},o.a.createElement(xe.a,null,o.a.createElement(Le.a,{size:"xl",className:"ins-m-alert"})),o.a.createElement(xe.a,{isFilled:!0},o.a.createElement(Me.a,{gutter:"md"},o.a.createElement(Pe.a,null,a," will be removed from all ",location.host," applications and services. You need to re-register the system to add it back to your inventory."),o.a.createElement(Pe.a,null,"To disable the daily upload for this system, use the following command:"),o.a.createElement(Pe.a,null,o.a.createElement(Re.b,null,"insights-client --unregister"))))),o.a.createElement(He.a,{gutter:"md"},o.a.createElement(Ce.a,null,o.a.createElement(ze.a,{variant:"danger",onClick:function(){d({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(a," started."),dismissable:!1}),l(i,a,function(){return e.onRefresh({filters:s})}),e.handleModalToggle()}},"Remove"),o.a.createElement(ze.a,{variant:"link",onClick:this.handleModalToggle},"Cancel")))))}}]),t}(r.Component))||Oe;qe.contextTypes={store:re.a.object},qe.propTypes={loadEntity:re.a.func,clearNotifications:re.a.func,deleteEntity:re.a.func,addNotification:re.a.func};var Ve,We=je()(Object(c.connect)(function(){return{}},function(e){return{loadEntity:function(t){return e(ke(t))},clearNotifications:function(){return e(Te())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(Ie(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(qe)),Je=n(91),Ke=n(225),Xe=n(226),Qe=(n(736),n(737),p()()(Ve=function(e){function t(e,n){var r;return W()(this,t),(r=Q()(this,$()(t).call(this,e,n))).loadInventory(),r.state={},r}return te()(t,e),K()(t,[{key:"loadInventory",value:function(){var e=he()(pe.a.mark(function e(){var t,n,r,o,a,i,s,c,l=this;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Ye();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,o=t.mergeWithDetail,this.getRegistry().register(j()({},o(Object(T.applyReducerHash)(v()({},I.GET_ENTITY_FULFILLED,U),z)))),a=q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),a()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,A.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:A.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,a=this.props,i=a.entity,s=a.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return o.a.createElement(r.Fragment,null,o.a.createElement(be.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},o.a.createElement(Ke.a,null,o.a.createElement(Xe.a,null,o.a.createElement(Je.a,{to:et.table},"Inventory")),o.a.createElement(Xe.a,{isActive:!0},i?i.display_name:o.a.createElement(be.Skeleton,{size:be.SkeletonSize.xs}))),t&&o.a.createElement(t,{hideBack:!0})),o.a.createElement(be.Main,{className:c},o.a.createElement(De.a,{gutter:"md"},o.a.createElement(Ne.a,{span:12},n&&o.a.createElement(n,null)))))}}]),t}(r.Component))||Ve);Qe.contextTypes={store:re.a.object},Qe.propTypes={history:re.a.object,entity:re.a.object,loadEntity:re.a.func,clearNotifications:re.a.func,currentApp:re.a.string};var Ze=je()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(ke(t))},clearNotifications:function(){return e(Te())}}})(Qe)),$e=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.classList.add("page__".concat(n),"pf-l-page__main"),o.a.createElement(ce.a,ae()({},r,{component:t}))};$e.propTypes={component:re.a.func,rootClass:re.a.string};var et={table:"/",detail:"/:inventoryId"};var tt=function(e){var t,n,r=e.childProps.history,a=window.location.pathname.split("/");return a.shift(),"beta"===a[0]&&a.shift(),t=a[0],n=a[1],Object.values(et).some(function(e){return Object(le.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(et.table),o.a.createElement(de.a,null,o.a.createElement($e,{exact:!0,path:et.table,component:We,rootClass:"inventory"}),o.a.createElement($e,{path:et.detail,component:Ze,rootClass:"inventory"}))};tt.propTypes={childProps:re.a.shape({history:re.a.shape({push:re.a.func})})};n(738);var nt,rt=p()()(nt=function(e){function t(e){var n;return W()(this,t),(n=Q()(this,$()(t).call(this,e))).getRegistry().register(Y),n}return te()(t,e),K()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.NotificationsPortal,null),o.a.createElement(tt,{childProps:this.props}))}}]),t}(r.Component))||nt;rt.propTypes={history:re.a.object};var ot=je()(Object(c.connect)()(rt));i.a.render(o.a.createElement(c.Provider,{store:function(){B=new d.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(u.getRegistry)({},[B.getMiddleware(),Object(h.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},o.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},o.a.createElement(ot,null))),document.getElementById("root"))}});