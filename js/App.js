!function(e){function t(t){for(var r,o,a=t[0],i=t[1],s=t[2],c=0,l=[];c<a.length;c++)o=a[c],N[o]&&l.push(N[o][0]),N[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return A.push.apply(A,s||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==N[a]&&(r=!1)}r&&(A.splice(t--,1),e=S(S.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--j&&0===b&&k()}(e,t),r&&r(e,t)};var o,a=!0,i="62037d40c3f38bd5ef15",s=1e4,c={},l=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:T,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,v,y,j=0,b=0,g={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;E={},g={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in v={},N)I(n);return"prepare"===f&&0===b&&0===j&&k(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=S.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return T(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,s;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var l=a.parents[c],d=D[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),u(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},m=[],j={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var E;s=w(g);var O=!1,I=!1,k=!1,T="";switch((E=v[g]?d(s):{type:"disposed",moduleId:g}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return h("abort"),Promise.reject(O);if(I)for(s in j[s]=v[s],u(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],E.outdatedDependencies[s]));k&&(u(m,[E.moduleId]),j[s]=b)}var A,x=[];for(r=0;r<m.length;r++)s=m[r],D[s]&&D[s].hot._selfAccepted&&x.push({module:s,errorHandler:D[s].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete N[e]}(e)});for(var M,P,R=m.slice();R.length>0;)if(s=R.pop(),a=D[s]){var H={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(H);for(c[s]=H,a.hot.active=!1,delete D[s],delete p[s],o=0;o<a.children.length;o++){var z=D[a.children[o]];z&&((A=z.parents.indexOf(s))>=0&&z.parents.splice(A,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=D[s]))for(P=p[s],o=0;o<P.length;o++)M=P[o],(A=a.children.indexOf(M))>=0&&a.children.splice(A,1);for(s in h("apply"),i=y,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var L=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=D[s])){P=p[s];var U=[];for(r=0;r<P.length;r++)if(M=P[r],n=a.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:P[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<x.length;r++){var B=x[r];s=B.module,l=[s];try{S(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(m)}))}var D={},N={0:0},A=[];function S(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=l,l=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return S;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),S(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,S.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),S.t(e,-2&t)},n}(t)),n.l=!0,n.exports}S.m=e,S.c=D,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="/apps/inventory/",S.h=function(){return i};var x=window.webpackJsonp=window.webpackJsonp||[],M=x.push.bind(x);x.push=t,x=x.slice();for(var P=0;P<x.length;P++)t(x[P]);var R=M;A.push([749,1]),n()}({241:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(445),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n\nsvg.ins-m-alert {\n  fill: var(--pf-global--warning-color--100); }\n\n.ins-c-inventory__table--remove .pf-c-clipboard-copy {\n  margin: 0 3rem; }\n\n.ins-c-inventory__table--remove .pf-l-split:first-child {\n  margin-bottom: 2rem; }\n',""])},244:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(445),""),t.i(n(747),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},444:function(e,t,n){var r=n(241);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(9)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(241,function(){var t=n(241);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},656:function(e,t,n){var r={"./af":301,"./af.js":301,"./ar":302,"./ar-dz":303,"./ar-dz.js":303,"./ar-kw":304,"./ar-kw.js":304,"./ar-ly":305,"./ar-ly.js":305,"./ar-ma":306,"./ar-ma.js":306,"./ar-sa":307,"./ar-sa.js":307,"./ar-tn":308,"./ar-tn.js":308,"./ar.js":302,"./az":309,"./az.js":309,"./be":310,"./be.js":310,"./bg":311,"./bg.js":311,"./bm":312,"./bm.js":312,"./bn":313,"./bn.js":313,"./bo":314,"./bo.js":314,"./br":315,"./br.js":315,"./bs":316,"./bs.js":316,"./ca":317,"./ca.js":317,"./cs":318,"./cs.js":318,"./cv":319,"./cv.js":319,"./cy":320,"./cy.js":320,"./da":321,"./da.js":321,"./de":322,"./de-at":323,"./de-at.js":323,"./de-ch":324,"./de-ch.js":324,"./de.js":322,"./dv":325,"./dv.js":325,"./el":326,"./el.js":326,"./en-SG":327,"./en-SG.js":327,"./en-au":328,"./en-au.js":328,"./en-ca":329,"./en-ca.js":329,"./en-gb":330,"./en-gb.js":330,"./en-ie":331,"./en-ie.js":331,"./en-il":332,"./en-il.js":332,"./en-nz":333,"./en-nz.js":333,"./eo":334,"./eo.js":334,"./es":335,"./es-do":336,"./es-do.js":336,"./es-us":337,"./es-us.js":337,"./es.js":335,"./et":338,"./et.js":338,"./eu":339,"./eu.js":339,"./fa":340,"./fa.js":340,"./fi":341,"./fi.js":341,"./fo":342,"./fo.js":342,"./fr":343,"./fr-ca":344,"./fr-ca.js":344,"./fr-ch":345,"./fr-ch.js":345,"./fr.js":343,"./fy":346,"./fy.js":346,"./ga":347,"./ga.js":347,"./gd":348,"./gd.js":348,"./gl":349,"./gl.js":349,"./gom-latn":350,"./gom-latn.js":350,"./gu":351,"./gu.js":351,"./he":352,"./he.js":352,"./hi":353,"./hi.js":353,"./hr":354,"./hr.js":354,"./hu":355,"./hu.js":355,"./hy-am":356,"./hy-am.js":356,"./id":357,"./id.js":357,"./is":358,"./is.js":358,"./it":359,"./it-ch":360,"./it-ch.js":360,"./it.js":359,"./ja":361,"./ja.js":361,"./jv":362,"./jv.js":362,"./ka":363,"./ka.js":363,"./kk":364,"./kk.js":364,"./km":365,"./km.js":365,"./kn":366,"./kn.js":366,"./ko":367,"./ko.js":367,"./ku":368,"./ku.js":368,"./ky":369,"./ky.js":369,"./lb":370,"./lb.js":370,"./lo":371,"./lo.js":371,"./lt":372,"./lt.js":372,"./lv":373,"./lv.js":373,"./me":374,"./me.js":374,"./mi":375,"./mi.js":375,"./mk":376,"./mk.js":376,"./ml":377,"./ml.js":377,"./mn":378,"./mn.js":378,"./mr":379,"./mr.js":379,"./ms":380,"./ms-my":381,"./ms-my.js":381,"./ms.js":380,"./mt":382,"./mt.js":382,"./my":383,"./my.js":383,"./nb":384,"./nb.js":384,"./ne":385,"./ne.js":385,"./nl":386,"./nl-be":387,"./nl-be.js":387,"./nl.js":386,"./nn":388,"./nn.js":388,"./pa-in":389,"./pa-in.js":389,"./pl":390,"./pl.js":390,"./pt":391,"./pt-br":392,"./pt-br.js":392,"./pt.js":391,"./ro":393,"./ro.js":393,"./ru":394,"./ru.js":394,"./sd":395,"./sd.js":395,"./se":396,"./se.js":396,"./si":397,"./si.js":397,"./sk":398,"./sk.js":398,"./sl":399,"./sl.js":399,"./sq":400,"./sq.js":400,"./sr":401,"./sr-cyrl":402,"./sr-cyrl.js":402,"./sr.js":401,"./ss":403,"./ss.js":403,"./sv":404,"./sv.js":404,"./sw":405,"./sw.js":405,"./ta":406,"./ta.js":406,"./te":407,"./te.js":407,"./tet":408,"./tet.js":408,"./tg":409,"./tg.js":409,"./th":410,"./th.js":410,"./tl-ph":411,"./tl-ph.js":411,"./tlh":412,"./tlh.js":412,"./tr":413,"./tr.js":413,"./tzl":414,"./tzl.js":414,"./tzm":415,"./tzm-latn":416,"./tzm-latn.js":416,"./tzm.js":415,"./ug-cn":417,"./ug-cn.js":417,"./uk":418,"./uk.js":418,"./ur":419,"./ur.js":419,"./uz":420,"./uz-latn":421,"./uz-latn.js":421,"./uz.js":420,"./vi":422,"./vi.js":422,"./x-pseudo":423,"./x-pseudo.js":423,"./yo":424,"./yo.js":424,"./zh-cn":425,"./zh-cn.js":425,"./zh-hk":426,"./zh-hk.js":426,"./zh-tw":427,"./zh-tw.js":427};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=656},671:function(e,t){},701:function(e,t){},702:function(e,t){},703:function(e,t){},718:function(e,t){},746:function(e,t,n){var r=n(244);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(9)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(244,function(){var t=n(244);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},749:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(29),i=n.n(a),s=n(290),c=n(43),l=n(461),d=n.n(l),u=n(74),p=n.n(u),f=n(60),h=n(478),m=n(154),v=n.n(m),y=n(61),j=n.n(y),b=n(86),g=n.n(b),E=n(466),_=n.n(E),w=n(467),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(O)),function(e){return e}),k=n(120),T=n(250),D=n(251),N=n.n(D),A=n(121),S=n.n(A),x=n(469),M=n.n(x),P=n(473),R=n.n(P),H={loaded:!1},C=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function z(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:N.a},C(t&&t.insights)&&{title:"Insights",name:"insights",component:R.a},C(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:S.a},C(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:M.a}].filter(Boolean)})}var L,U={notifications:f.notifications,systemProfileStore:D.systemProfileStore},B=Object(T.applyReducerHash)(v()({},I.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return j()({},e,{rows:Object(k.mergeArraysByKey)([e.rows,n.results]),entities:Object(k.mergeArraysByKey)([e.entities,n.results])})}),H),F=U;function G(e){var t=e.actionType,n=e.callback;return L.addNew({on:t,callback:n})}var Y=n(104),q=n.n(Y),V=n(105),W=n.n(V),J=n(106),K=n.n(J),X=n(107),Q=n.n(X),Z=n(108),$=n.n(Z),ee=n(1),te=n.n(ee),ne=n(474),re=n.n(ne),oe=n(160),ae=n.n(oe),ie=n(145),se=n(291),ce=n(457),le=n(69),de=n.n(le),ue=n(109),pe=n.n(ue),fe=n(79),he=n.n(fe),me=(n(444),n(110)),ve=n.n(me),ye=n(50),je="/api/inventory/v1",be=n(475),ge=n.n(be),Ee=new(n(476).HostsApi)(void 0,je,ge.a);var _e,we=function(e,t){return{type:I.REMOVE_ENTITY,payload:Ee.apiHostDeleteById([e]),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}}}}},Oe=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Ie=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},ke=n(263),Te=n(264),De=n(261),Ne=n(267),Ae=n(268),Se=n(269),xe=n(270),Me=n(456),Pe=n(265),Re=n(266),He=n(245),Ce=n(272),ze=n(59),Le=n(28),Ue=n(66),Be=n(93),Fe=function(){return insights.loadInventory({react:o.a,reactRouterDom:ze,reactCore:Le,reactIcons:Ue,pfReactTable:Be})},Ge=p()()(_e=function(e){function t(e,n){var r;return q()(this,t),(r=K()(this,Q()(t).call(this,e,n))).loadInventory(),r.inventory=o.a.createRef(),r.state={isModalOpen:!1,removeListener:function(){}},r.onDeleteHost=r.onDeleteHost.bind(he()(he()(r))),r.onRefresh=r.onRefresh.bind(he()(he()(r))),r.handleModalToggle=r.handleModalToggle.bind(he()(he()(r))),r}return $()(t,e),W()(t,[{key:"loadInventory",value:function(){var e=pe()(de.a.mark(function e(){var t,n,r,o,a,i;return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Fe();case 3:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,this.getRegistry().register(j()({},r(B))),o=n(),a=o.InventoryTable,i=o.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:a});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onRefresh",value:function(e){var t=this;this.setState({filters:e.filters},function(){return t.inventory.current.onRefreshData(e,!1)})}},{key:"handleModalToggle",value:function(){this.setState(function(e){return{isModalOpen:!e.isModalOpen}})}},{key:"onDeleteHost",value:function(e,t){this.setState(function(n){return{isModalOpen:!n.isModalOpen,id:e,displayName:t}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.ConnectedInventory,r=t.isModalOpen,a=t.displayName,i=t.id,s=t.filters,c=this.props,l=c.deleteEntity,d=c.addNotification;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ye.PageHeader,{className:"pf-m-light"},o.a.createElement(ye.PageHeaderTitle,{title:"Inventory"})),o.a.createElement(ye.Main,null,o.a.createElement(ke.a,{gutter:"md"},o.a.createElement(Te.a,{span:12},n&&o.a.createElement(n,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1,actions:[{title:"Delete",onClick:function(t,n,r){var o=r.id,a=r.display_name;return e.onDeleteHost(o,a)}}]})))),o.a.createElement(De.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:this.handleModalToggle},o.a.createElement(Ne.a,{gutter:"md"},o.a.createElement(Ae.a,null,o.a.createElement(Ce.a,{size:"xl",className:"ins-m-alert"})),o.a.createElement(Ae.a,{isFilled:!0},o.a.createElement(Se.a,{gutter:"md"},o.a.createElement(xe.a,null,a," will be removed from all ",location.host," applications and services. You need to re-register the system to add it back to your inventory."),o.a.createElement(xe.a,null,"To disable the daily upload for this system, use the following command:"),o.a.createElement(xe.a,null,o.a.createElement(Me.a,null,"insights-client --unregister"))))),o.a.createElement(Pe.a,{gutter:"md"},o.a.createElement(Re.a,null,o.a.createElement(He.a,{variant:"danger",onClick:function(){d({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(a," started."),dismissable:!1}),l(i,a,function(){return e.onRefresh({filters:s})}),e.handleModalToggle()}},"Remove"),o.a.createElement(He.a,{variant:"link",onClick:this.handleModalToggle},"Cancel")))))}}]),t}(r.Component))||_e;Ge.contextTypes={store:te.a.object},Ge.propTypes={loadEntity:te.a.func,clearNotifications:te.a.func,deleteEntity:te.a.func,addNotification:te.a.func};var Ye,qe=ve()(Object(c.connect)(function(){return{}},function(e){return{loadEntity:function(t){return e(Oe(t))},clearNotifications:function(){return e(Ie())},deleteEntity:function(t,n,r){return e(function(e,t){return e.payload.then(t),e}(we(t,n),r))},addNotification:function(t){return e(Object(f.addNotification)(t))}}})(Ge)),Ve=n(118),We=n(258),Je=n(259),Ke=(n(744),n(745),p()()(Ye=function(e){function t(e,n){var r;return q()(this,t),(r=K()(this,Q()(t).call(this,e,n))).loadInventory(),r.state={},r}return $()(t,e),W()(t,[{key:"loadInventory",value:function(){var e=pe()(de.a.mark(function e(){var t,n,r,o,a,i,s,c,l=this;return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Fe();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,o=t.mergeWithDetail,this.getRegistry().register(j()({},o(Object(T.applyReducerHash)(v()({},I.GET_ENTITY_FULFILLED,z),H)))),a=G({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),a()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,A.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:A.VulnerabilitiesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,a=this.props,i=a.entity,s=a.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return o.a.createElement(r.Fragment,null,o.a.createElement(ye.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},o.a.createElement(We.a,null,o.a.createElement(Je.a,null,o.a.createElement(Ve.a,{to:Ze.table},"Inventory")),o.a.createElement(Je.a,{isActive:!0},i?i.display_name:o.a.createElement(ye.Skeleton,{size:ye.SkeletonSize.xs}))),t&&o.a.createElement(t,{hideBack:!0})),o.a.createElement(ye.Main,{className:c},o.a.createElement(ke.a,{gutter:"md"},o.a.createElement(Te.a,{span:12},n&&o.a.createElement(n,null)))))}}]),t}(r.Component))||Ye);Ke.contextTypes={store:te.a.object},Ke.propTypes={history:te.a.object,entity:te.a.object,loadEntity:te.a.func,clearNotifications:te.a.func,currentApp:te.a.string};var Xe=ve()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(Oe(t))},clearNotifications:function(){return e(Ie())}}})(Ke)),Qe=function(e){var t=e.component,n=e.rootClass,r=ae()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.classList.add("page__".concat(n),"pf-l-page__main"),o.a.createElement(ie.a,re()({},r,{component:t}))};Qe.propTypes={component:te.a.func,rootClass:te.a.string};var Ze={table:"/",detail:"/:inventoryId"};var $e=function(e){var t,n,r=e.childProps.history,a=window.location.pathname.split("/");return a.shift(),"beta"===a[0]&&a.shift(),t=a[0],n=a[1],Object.values(Ze).some(function(e){return Object(se.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(Ze.table),o.a.createElement(ce.a,null,o.a.createElement(Qe,{exact:!0,path:Ze.table,component:qe,rootClass:"inventory"}),o.a.createElement(Qe,{path:Ze.detail,component:Xe,rootClass:"inventory"}))};$e.propTypes={childProps:te.a.shape({history:te.a.shape({push:te.a.func})})};n(746);var et,tt=p()()(et=function(e){function t(e){var n;return q()(this,t),(n=K()(this,Q()(t).call(this,e))).getRegistry().register(F),n}return $()(t,e),W()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.NotificationsPortal,null),o.a.createElement($e,{childProps:this.props}))}}]),t}(r.Component))||et;tt.propTypes={history:te.a.object};var nt=ve()(Object(c.connect)()(tt));i.a.render(o.a.createElement(c.Provider,{store:function(){L=new d.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(u.getRegistry)({},[L.getMiddleware(),Object(h.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},o.a.createElement(s.a,{basename:Object(k.getBaseName)(window.location.pathname)},o.a.createElement(nt,null))),document.getElementById("root"))}});