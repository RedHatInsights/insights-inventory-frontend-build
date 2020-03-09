!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(S,o)&&S[o]&&l.push(S[o][0]),S[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return k.push.apply(k,c||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==S[a]&&(r=!1)}r&&(k.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===j&&I()}(e,t),r&&r(e,t)};var o,a=!0,i="293ee3a1799d141f5968",c={},s=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:T,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,y,h,v=0,j=0,b={},g={},E={};function O(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;g={},b={},E=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},S)_(n);return"prepare"===p&&0===j&&0===v&&I(),t}));var t}function _(e){E[e]?(g[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function I(){f("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return T(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function T(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,a,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],j={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var w;l=O(g);var _=!1,I=!1,T=!1,k="";switch((w=y[g]?u(l):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(w),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),T=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return f("abort"),Promise.reject(_);if(I)for(l in j[l]=y[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],w.outdatedDependencies[l]));T&&(d(v,[w.moduleId]),j[l]=b)}var N,A=[];for(r=0;r<v.length;r++)l=v[r],D[l]&&D[l].hot._selfAccepted&&j[l]!==b&&A.push({module:l,errorHandler:D[l].hot._selfAccepted});f("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete S[e]}(e)}));for(var C,R,x=v.slice();x.length>0;)if(l=x.pop(),a=D[l]){var M={},L=a.hot._disposeHandlers;for(o=0;o<L.length;o++)(n=L[o])(M);for(c[l]=M,a.hot.active=!1,delete D[l],delete m[l],o=0;o<a.children.length;o++){var H=D[a.children[o]];H&&((N=H.parents.indexOf(l))>=0&&H.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=D[l]))for(R=m[l],o=0;o<R.length;o++)C=R[o],(N=a.children.indexOf(C))>=0&&a.children.splice(N,1);for(l in f("apply"),i=h,j)Object.prototype.hasOwnProperty.call(j,l)&&(e[l]=j[l]);var z=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=D[l])){R=m[l];var F=[];for(r=0;r<R.length;r++)if(C=R[r],n=a.hot._acceptedDependencies[C]){if(-1!==F.indexOf(n))continue;F.push(n)}for(r=0;r<F.length;r++){n=F[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[r],error:e}),t.ignoreErrored||z||(z=e)}}}for(r=0;r<A.length;r++){var U=A[r];l=U.module,s=[l];try{P(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||z||(z=n),z||(z=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||z||(z=e)}}return z?(f("fail"),Promise.reject(z)):(f("idle"),new Promise((function(e){e(v)})))}var D={},S={0:0},k=[];function P(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return P;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===p&&f("prepare"),j++,P.e(e).then(t,(function(e){throw t(),e}));function t(){j--,"prepare"===p&&(b[e]||_(e),0===j&&0===v&&I())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=D,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/apps/inventory/",P.h=function(){return i};var N=window.webpackJsonp=window.webpackJsonp||[],A=N.push.bind(N);N.push=t,N=N.slice();for(var C=0;C<N.length;C++)t(N[C]);var R=A;k.push([849,1]),n()}({289:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(508),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},293:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(508),""),t.i(n(847),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},507:function(e,t,n){var r=n(289);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(9)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(289,(function(){var t=n(289);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},534:function(e,t){},749:function(e,t,n){var r={"./af":367,"./af.js":367,"./ar":368,"./ar-dz":369,"./ar-dz.js":369,"./ar-kw":370,"./ar-kw.js":370,"./ar-ly":371,"./ar-ly.js":371,"./ar-ma":372,"./ar-ma.js":372,"./ar-sa":373,"./ar-sa.js":373,"./ar-tn":374,"./ar-tn.js":374,"./ar.js":368,"./az":375,"./az.js":375,"./be":376,"./be.js":376,"./bg":377,"./bg.js":377,"./bm":378,"./bm.js":378,"./bn":379,"./bn.js":379,"./bo":380,"./bo.js":380,"./br":381,"./br.js":381,"./bs":382,"./bs.js":382,"./ca":383,"./ca.js":383,"./cs":384,"./cs.js":384,"./cv":385,"./cv.js":385,"./cy":386,"./cy.js":386,"./da":387,"./da.js":387,"./de":388,"./de-at":389,"./de-at.js":389,"./de-ch":390,"./de-ch.js":390,"./de.js":388,"./dv":391,"./dv.js":391,"./el":392,"./el.js":392,"./en-SG":393,"./en-SG.js":393,"./en-au":394,"./en-au.js":394,"./en-ca":395,"./en-ca.js":395,"./en-gb":396,"./en-gb.js":396,"./en-ie":397,"./en-ie.js":397,"./en-il":398,"./en-il.js":398,"./en-nz":399,"./en-nz.js":399,"./eo":400,"./eo.js":400,"./es":401,"./es-do":402,"./es-do.js":402,"./es-us":403,"./es-us.js":403,"./es.js":401,"./et":404,"./et.js":404,"./eu":405,"./eu.js":405,"./fa":406,"./fa.js":406,"./fi":407,"./fi.js":407,"./fo":408,"./fo.js":408,"./fr":409,"./fr-ca":410,"./fr-ca.js":410,"./fr-ch":411,"./fr-ch.js":411,"./fr.js":409,"./fy":412,"./fy.js":412,"./ga":413,"./ga.js":413,"./gd":414,"./gd.js":414,"./gl":415,"./gl.js":415,"./gom-latn":416,"./gom-latn.js":416,"./gu":417,"./gu.js":417,"./he":418,"./he.js":418,"./hi":419,"./hi.js":419,"./hr":420,"./hr.js":420,"./hu":421,"./hu.js":421,"./hy-am":422,"./hy-am.js":422,"./id":423,"./id.js":423,"./is":424,"./is.js":424,"./it":425,"./it-ch":426,"./it-ch.js":426,"./it.js":425,"./ja":427,"./ja.js":427,"./jv":428,"./jv.js":428,"./ka":429,"./ka.js":429,"./kk":430,"./kk.js":430,"./km":431,"./km.js":431,"./kn":432,"./kn.js":432,"./ko":433,"./ko.js":433,"./ku":434,"./ku.js":434,"./ky":435,"./ky.js":435,"./lb":436,"./lb.js":436,"./lo":437,"./lo.js":437,"./lt":438,"./lt.js":438,"./lv":439,"./lv.js":439,"./me":440,"./me.js":440,"./mi":441,"./mi.js":441,"./mk":442,"./mk.js":442,"./ml":443,"./ml.js":443,"./mn":444,"./mn.js":444,"./mr":445,"./mr.js":445,"./ms":446,"./ms-my":447,"./ms-my.js":447,"./ms.js":446,"./mt":448,"./mt.js":448,"./my":449,"./my.js":449,"./nb":450,"./nb.js":450,"./ne":451,"./ne.js":451,"./nl":452,"./nl-be":453,"./nl-be.js":453,"./nl.js":452,"./nn":454,"./nn.js":454,"./pa-in":455,"./pa-in.js":455,"./pl":456,"./pl.js":456,"./pt":457,"./pt-br":458,"./pt-br.js":458,"./pt.js":457,"./ro":459,"./ro.js":459,"./ru":460,"./ru.js":460,"./sd":461,"./sd.js":461,"./se":462,"./se.js":462,"./si":463,"./si.js":463,"./sk":464,"./sk.js":464,"./sl":465,"./sl.js":465,"./sq":466,"./sq.js":466,"./sr":467,"./sr-cyrl":468,"./sr-cyrl.js":468,"./sr.js":467,"./ss":469,"./ss.js":469,"./sv":470,"./sv.js":470,"./sw":471,"./sw.js":471,"./ta":472,"./ta.js":472,"./te":473,"./te.js":473,"./tet":474,"./tet.js":474,"./tg":475,"./tg.js":475,"./th":476,"./th.js":476,"./tl-ph":477,"./tl-ph.js":477,"./tlh":478,"./tlh.js":478,"./tr":479,"./tr.js":479,"./tzl":480,"./tzl.js":480,"./tzm":481,"./tzm-latn":482,"./tzm-latn.js":482,"./tzm.js":481,"./ug-cn":483,"./ug-cn.js":483,"./uk":484,"./uk.js":484,"./ur":485,"./ur.js":485,"./uz":486,"./uz-latn":487,"./uz-latn.js":487,"./uz.js":486,"./vi":488,"./vi.js":488,"./x-pseudo":489,"./x-pseudo.js":489,"./yo":490,"./yo.js":490,"./zh-cn":491,"./zh-cn.js":491,"./zh-hk":492,"./zh-hk.js":492,"./zh-tw":493,"./zh-tw.js":493};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=749},826:function(e,t){},832:function(e,t){},846:function(e,t,n){var r=n(293);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(9)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(293,(function(){var t=n(293);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},849:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(21),i=n.n(a),c=n(68),s=n(36),l=n(535),u=n.n(l),d=n(96),p=n.n(d),f=n(80),m=n(515),y=n(57),h=n.n(y),v=n(119),j=n.n(v),b=n(516),g=n.n(b),E=n(517),O=n.n(E)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),w=g()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],j()(O)),(function(e){return e})),_=n(137),I=n(318),T=n(304),D=n.n(T),S=n(149),k=n.n(S),P=n(529),N=n.n(P),A=n(530),C=n.n(A),R=(n(818),n(545)),x=function(){return o.a.createElement(R.a,{locale:navigator.language},o.a.createElement(C.a,null))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={loaded:!1,selected:new Map},z=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function F(e,t){var n=t.payload;return L({},e,{rows:Object(_.mergeArraysByKey)([e.rows,n.results]),entities:Object(_.mergeArraysByKey)([e.entities,n.results])})}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return L({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:D.a},z(n&&n.insights)&&{title:"Insights",name:"insights",component:N.a},z(n&&n.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:k.a},z(n&&n.smart_management)&&{title:"Compliance",name:"compliance",component:x}].filter(Boolean)})}function B(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,L({},o||{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return L({},e,{selected:new Map(r)})}function Y(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),L({},e,{selected:new Map(r)})}function G(e,t){var n=t.payload;return L({},e,{rows:Object(_.mergeArraysByKey)([e.rows,n.results.map((function(t){return L({},t,{selected:e.selected&&e.selected.has(t.id)})}))])})}var q,V={notifications:f.notifications,systemProfileStore:T.systemProfileStore},W=V;function J(e){var t=e.actionType,n=e.callback;return q.addNew({on:t,callback:n})}var K=n(536),X=n.n(K),Q=n(537),Z=n.n(Q),$=n(538),ee=n.n($),te=n(539),ne=n.n(te),re=n(540),oe=n.n(re),ae=n(1),ie=n.n(ae),ce=n(193),se=n.n(ce),le=n(194),ue=n.n(le),de=n(110),pe=n(97),fe=n.n(pe),me=n(134),ye=n.n(me),he=n(113),ve=n.n(he),je=(n(507),n(135)),be=n.n(je),ge=n(83),Ee=n(542),Oe=n.n(Ee);var we=new(n(541).HostsApi)(void 0,"/api/inventory/v1",Oe.a);var _e=function(){return{type:w.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Ie=n(358),Te=n(359),De=n(67),Se=n(103),ke=n(116),Pe=function(){return insights.loadInventory({react:o.a,reactRouterDom:c,reactCore:De,reactIcons:Se,pfReactTable:ke})},Ne=n(356),Ae=n(362),Ce=n(363),Re=n(364),xe=n(365),Me=n(512),Le=n(360),He=n(361),ze=n(185),Fe=n(278),Ue=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,a=e.currentSytem,i=e.onConfirm,c="system";return Array.isArray(a)?(t=1===a.length?a[0].display_name:"".concat(a.length," systems"),c=1===a.length?c:"systems"):t=a.displayName,o.a.createElement(Ne.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},o.a.createElement(Ae.a,{gutter:"md"},o.a.createElement(Ce.a,null,o.a.createElement(Fe.b,{size:"xl",className:"ins-m-alert"})),o.a.createElement(Ce.a,{isFilled:!0},o.a.createElement(Re.a,{gutter:"md"},o.a.createElement(xe.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",c," to add it back to your inventory."),o.a.createElement(xe.a,null,"To disable the daily upload for this ",c,", use the following command:"),o.a.createElement(xe.a,null,o.a.createElement(Me.a,null,"insights-client --unregister"))))),o.a.createElement(Le.a,{gutter:"md"},o.a.createElement(He.a,null,o.a.createElement(ze.a,{variant:"danger",onClick:i},"Remove"),o.a.createElement(ze.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Be=ie.a.shape({id:ie.a.string,displayName:ie.a.string});Ue.propTypes={isModalOpen:ie.a.bool,currentSytem:ie.a.oneOfType([Be,ie.a.arrayOf(Be)]),handleModalToggle:ie.a.func,onConfirm:ie.a.func},Ue.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ye=Ue,Ge=n(543),qe=n.n(Ge);function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Ke=function(e){var t=e.clearNotifications,n=e.deleteEntity,a=e.addNotification,i=e.loaded,c=e.rows,l=e.updateDisplayName,u=e.onSelectRows,p=e.selected,f=Object(r.useRef)(null),m=Object(r.useState)(),y=ve()(m,2),v=y[0],j=y[1],b=Object(r.useState)(!1),g=ve()(b,2),E=g[0],O=g[1],_=Object(r.useState)({}),T=ve()(_,2),D=T[0],S=T[1],k=Object(r.useState)([]),P=ve()(k,2),N=P[0],A=P[1],C=Object(r.useState)(!1),R=ve()(C,2),x=R[0],M=R[1],z=Object(s.useStore)(),U=function(){var e=ye()(fe.a.mark((function e(){var n,r,o,a,i,c;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Pe();case 3:n=e.sent,r=n.inventoryConnector,o=n.mergeWithEntities,a=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(We({},o((s=void 0,l=void 0,l=a.LOAD_ENTITIES_FULFILLED,Object(I.applyReducerHash)((s={},h()(s,w.GET_ENTITIES_FULFILLED,F),h()(s,l,G),h()(s,"".concat(w.REMOVE_ENTITY,"_FULFILLED"),Y),h()(s,"SELECT_ENTITY",B),h()(s,"FILTER_SELECT",(function(e){return L({},e,{selected:{}})})),s),H))))),i=r(z),c=i.InventoryTable,j((function(){return c}));case 10:case"end":return e.stop()}var s,l}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){A(e.filters),f&&f.current&&f.current.onRefreshData(e)};Object(r.useEffect)((function(){U()}),[]);var V=function(){return p?p.size:0};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ge.PageHeader,{className:"pf-m-light"},o.a.createElement(ge.PageHeaderTitle,{title:"Inventory"})),o.a.createElement(ge.Main,null,o.a.createElement(Ie.a,{gutter:"md"},o.a.createElement(Te.a,{span:12},v&&o.a.createElement(v,se()({store:z,ref:f,hasCheckbox:!0,onRefresh:q},i&&c&&c.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,o=n.display_name;O(!0),S({id:r,displayName:o})}},{title:"Edit",onClick:function(e,t,n){M(!0),S(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===V(),variant:"danger",onClick:function(){S(Array.from(p.values())),O(!0)}}}]},bulkSelect:{count:V(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},We({},i&&c&&c.length>0?{title:"Select page (".concat(c.length,")"),onClick:function(){u(0,!0)}}:{})],checked:Je(c,p),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1}}))))),o.a.createElement(Ye,{handleModalToggle:O,isModalOpen:E,currentSytem:D,onConfirm:function(){var e,t;Array.isArray(D)?(t=D.map((function(e){return e.id})),e=D.length>1?"".concat(D.length," systems"):D[0].display_name):(e=D.displayName,t=[D.id]),a({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return q({filters:N})})),O(!1)}}),o.a.createElement(qe.a,{title:"Edit name",isOpen:x,value:D.display_name,onCancel:function(){return M(!1)},onSubmit:function(e){l(D.id,e,f.current.onRefreshData),M(!1)}}))};Ke.contextTypes={store:ie.a.object},Ke.propTypes={rows:ie.a.arrayOf(ie.a.shape({id:ie.a.string,selected:ie.a.bool})),loaded:ie.a.bool,loadEntity:ie.a.func,clearNotifications:ie.a.func,deleteEntity:ie.a.func,addNotification:ie.a.func,updateDisplayName:ie.a.func,onSelectRows:ie.a.func,selected:ie.a.map};var Xe=be()(Object(s.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(_e())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,o){return e(t((a=n,i=r,{type:w.REMOVE_ENTITY,payload:we.apiHostDeleteById(a),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:a}}),o));var a,i},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,o){return e(t(function(e,t){return{type:w.UPDATE_DISPLAY_NAME,payload:we.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),o))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))}}}))(Ke)),Qe=n(353),Ze=n(354),$e=(n(843),n(844),n(845),n(44)),et=n.n($e);function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var rt=function(e){var t=e.entity,n=e.currentApp,a=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=ve()(l,2),p=u[0],f=u[1],m=Object(s.useStore)(),y=p.InventoryDetail,v=p.AppInfo,j=function(){var e=ye()(fe.a.mark((function e(){var t,n,r,o,c,s,l,u;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.next=3,Pe();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,o=t.mergeWithDetail,Object(d.getRegistry)().register(nt({},o(Object(I.applyReducerHash)(h()({},w.GET_ENTITY_FULFILLED,U),H)))),c=J({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),c()}))}}),s=n(m),l=s.InventoryDetailHead,u=s.AppInfo,S.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:S.SystemCvesStore}),f({InventoryDetail:l,AppInfo:u});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var b={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return o.a.createElement(r.Fragment,null,o.a.createElement(ge.PageHeader,{className:et()("pf-m-light ins-inventory-detail",b)},o.a.createElement(Qe.a,null,o.a.createElement(Ze.a,null,o.a.createElement(c.Link,{to:it.table},"Inventory")),o.a.createElement(Ze.a,{isActive:!0},t?t.display_name:o.a.createElement(ge.Skeleton,{size:ge.SkeletonSize.xs}))),y&&o.a.createElement(y,{hideBack:!0})),o.a.createElement(ge.Main,{className:et()(b)},o.a.createElement(Ie.a,{gutter:"md"},o.a.createElement(Te.a,{span:12},v&&o.a.createElement(v,null)))))};rt.contextTypes={store:ie.a.object},rt.propTypes={history:ie.a.object,entity:ie.a.object,loadEntity:ie.a.func,clearNotifications:ie.a.func,currentApp:ie.a.string};var ot=be()(Object(s.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(_e())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(rt)),at=function(e){var t=e.component,n=e.rootClass,r=ue()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.classList.add("page__".concat(n),"pf-l-page__main"),o.a.createElement(de.d,se()({},r,{component:t}))};at.propTypes={component:ie.a.func,rootClass:ie.a.string};var it={table:"/",detail:"/:inventoryId"};var ct=function(e){var t,n,r=e.childProps.history,a=window.location.pathname.split("/");return a.shift(),"beta"===a[0]&&a.shift(),t=a[0],n=a[1],Object.values(it).some((function(e){return Object(de.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(it.table),o.a.createElement(de.g,null,o.a.createElement(at,{exact:!0,path:it.table,component:Xe,rootClass:"inventory"}),o.a.createElement(at,{path:it.detail,component:ot,rootClass:"inventory"}))};ct.propTypes={childProps:ie.a.shape({history:ie.a.shape({push:ie.a.func})})};n(846);var st,lt=p()()(st=function(e){function t(e){var n;return X()(this,t),(n=ee()(this,ne()(t).call(this,e))).getRegistry().register(W),n}return oe()(t,e),Z()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.NotificationsPortal,null),o.a.createElement(ct,{childProps:this.props}))}}]),t}(r.Component))||st;lt.propTypes={history:ie.a.object};var ut=be()(Object(s.connect)()(lt));i.a.render(o.a.createElement(s.Provider,{store:function(){q=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[q.getMiddleware(),m.a,Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},o.a.createElement(c.BrowserRouter,{basename:Object(_.getBaseName)(window.location.pathname)},o.a.createElement(ut,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map