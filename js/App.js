!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(D,a)&&D[a]&&l.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(t);l.length;)l.shift()();return P.push.apply(P,s||[]),n()}function n(){for(var e,t=0;t<P.length;t++){for(var n=P[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==D[o]&&(r=!1)}r&&(P.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===j&&I()}(e,t),r&&r(e,t)};var a,o=!0,i="f46cea6e2e978b687384",s={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:S,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,y,h,v=0,j=0,b={},g={},E={};function O(e){return+e+""===e?+e:e}function w(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=k.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p("idle"),null;g={},b={},E=e.c,h=e.h,p("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},D)_(n);return"prepare"===f&&0===j&&0===v&&I(),t}));var t}function _(e){E[e]?(g[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function I(){p("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return S(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function S(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=T[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=T[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],j={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var w;l=O(g);var _=!1,I=!1,S=!1,P="";switch((w=y[g]?u(l):{type:"disposed",moduleId:g}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(w),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),S=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return p("abort"),Promise.reject(_);if(I)for(l in j[l]=y[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],w.outdatedDependencies[l]));S&&(d(v,[w.moduleId]),j[l]=b)}var N,A=[];for(r=0;r<v.length;r++)l=v[r],T[l]&&T[l].hot._selfAccepted&&j[l]!==b&&A.push({module:l,errorHandler:T[l].hot._selfAccepted});p("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete D[e]}(e)}));for(var R,C,x=v.slice();x.length>0;)if(l=x.pop(),o=T[l]){var L={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(L);for(s[l]=L,o.hot.active=!1,delete T[l],delete m[l],a=0;a<o.children.length;a++){var H=T[o.children[a]];H&&((N=H.parents.indexOf(l))>=0&&H.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=T[l]))for(C=m[l],a=0;a<C.length;a++)R=C[a],(N=o.children.indexOf(R))>=0&&o.children.splice(N,1);for(l in p("apply"),i=h,j)Object.prototype.hasOwnProperty.call(j,l)&&(e[l]=j[l]);var F=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=T[l])){C=m[l];var z=[];for(r=0;r<C.length;r++)if(R=C[r],n=o.hot._acceptedDependencies[R]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:C[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<A.length;r++){var U=A[r];l=U.module,c=[l];try{k(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||F||(F=e)}}return F?(p("fail"),Promise.reject(F)):(p("idle"),new Promise((function(e){e(v)})))}var T={},D={0:0},P=[];function k(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return k;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&p("prepare"),j++,k.e(e).then(t,(function(e){throw t(),e}));function t(){j--,"prepare"===f&&(b[e]||_(e),0===j&&0===v&&I())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=T,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/beta/apps/inventory/",k.h=function(){return i};var N=window.webpackJsonp=window.webpackJsonp||[],A=N.push.bind(N);N.push=t,N=N.slice();for(var R=0;R<N.length;R++)t(N[R]);var C=A;P.push([928,1]),n()}({323:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(572),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},327:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(572),""),t.i(n(927),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},571:function(e,t,n){var r=n(323);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(323,(function(){var t=n(323);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},587:function(e,t){},832:function(e,t){},838:function(e,t){},881:function(e,t,n){var r={"./af":428,"./af.js":428,"./ar":429,"./ar-dz":430,"./ar-dz.js":430,"./ar-kw":431,"./ar-kw.js":431,"./ar-ly":432,"./ar-ly.js":432,"./ar-ma":433,"./ar-ma.js":433,"./ar-sa":434,"./ar-sa.js":434,"./ar-tn":435,"./ar-tn.js":435,"./ar.js":429,"./az":436,"./az.js":436,"./be":437,"./be.js":437,"./bg":438,"./bg.js":438,"./bm":439,"./bm.js":439,"./bn":440,"./bn.js":440,"./bo":441,"./bo.js":441,"./br":442,"./br.js":442,"./bs":443,"./bs.js":443,"./ca":444,"./ca.js":444,"./cs":445,"./cs.js":445,"./cv":446,"./cv.js":446,"./cy":447,"./cy.js":447,"./da":448,"./da.js":448,"./de":449,"./de-at":450,"./de-at.js":450,"./de-ch":451,"./de-ch.js":451,"./de.js":449,"./dv":452,"./dv.js":452,"./el":453,"./el.js":453,"./en-SG":454,"./en-SG.js":454,"./en-au":455,"./en-au.js":455,"./en-ca":456,"./en-ca.js":456,"./en-gb":457,"./en-gb.js":457,"./en-ie":458,"./en-ie.js":458,"./en-il":459,"./en-il.js":459,"./en-nz":460,"./en-nz.js":460,"./eo":461,"./eo.js":461,"./es":462,"./es-do":463,"./es-do.js":463,"./es-us":464,"./es-us.js":464,"./es.js":462,"./et":465,"./et.js":465,"./eu":466,"./eu.js":466,"./fa":467,"./fa.js":467,"./fi":468,"./fi.js":468,"./fo":469,"./fo.js":469,"./fr":470,"./fr-ca":471,"./fr-ca.js":471,"./fr-ch":472,"./fr-ch.js":472,"./fr.js":470,"./fy":473,"./fy.js":473,"./ga":474,"./ga.js":474,"./gd":475,"./gd.js":475,"./gl":476,"./gl.js":476,"./gom-latn":477,"./gom-latn.js":477,"./gu":478,"./gu.js":478,"./he":479,"./he.js":479,"./hi":480,"./hi.js":480,"./hr":481,"./hr.js":481,"./hu":482,"./hu.js":482,"./hy-am":483,"./hy-am.js":483,"./id":484,"./id.js":484,"./is":485,"./is.js":485,"./it":486,"./it-ch":487,"./it-ch.js":487,"./it.js":486,"./ja":488,"./ja.js":488,"./jv":489,"./jv.js":489,"./ka":490,"./ka.js":490,"./kk":491,"./kk.js":491,"./km":492,"./km.js":492,"./kn":493,"./kn.js":493,"./ko":494,"./ko.js":494,"./ku":495,"./ku.js":495,"./ky":496,"./ky.js":496,"./lb":497,"./lb.js":497,"./lo":498,"./lo.js":498,"./lt":499,"./lt.js":499,"./lv":500,"./lv.js":500,"./me":501,"./me.js":501,"./mi":502,"./mi.js":502,"./mk":503,"./mk.js":503,"./ml":504,"./ml.js":504,"./mn":505,"./mn.js":505,"./mr":506,"./mr.js":506,"./ms":507,"./ms-my":508,"./ms-my.js":508,"./ms.js":507,"./mt":509,"./mt.js":509,"./my":510,"./my.js":510,"./nb":511,"./nb.js":511,"./ne":512,"./ne.js":512,"./nl":513,"./nl-be":514,"./nl-be.js":514,"./nl.js":513,"./nn":515,"./nn.js":515,"./pa-in":516,"./pa-in.js":516,"./pl":517,"./pl.js":517,"./pt":518,"./pt-br":519,"./pt-br.js":519,"./pt.js":518,"./ro":520,"./ro.js":520,"./ru":521,"./ru.js":521,"./sd":522,"./sd.js":522,"./se":523,"./se.js":523,"./si":524,"./si.js":524,"./sk":525,"./sk.js":525,"./sl":526,"./sl.js":526,"./sq":527,"./sq.js":527,"./sr":528,"./sr-cyrl":529,"./sr-cyrl.js":529,"./sr.js":528,"./ss":530,"./ss.js":530,"./sv":531,"./sv.js":531,"./sw":532,"./sw.js":532,"./ta":533,"./ta.js":533,"./te":534,"./te.js":534,"./tet":535,"./tet.js":535,"./tg":536,"./tg.js":536,"./th":537,"./th.js":537,"./tl-ph":538,"./tl-ph.js":538,"./tlh":539,"./tlh.js":539,"./tr":540,"./tr.js":540,"./tzl":541,"./tzl.js":541,"./tzm":542,"./tzm-latn":543,"./tzm-latn.js":543,"./tzm.js":542,"./ug-cn":544,"./ug-cn.js":544,"./uk":545,"./uk.js":545,"./ur":546,"./ur.js":546,"./uz":547,"./uz-latn":548,"./uz-latn.js":548,"./uz.js":547,"./vi":549,"./vi.js":549,"./x-pseudo":550,"./x-pseudo.js":550,"./yo":551,"./yo.js":551,"./zh-cn":552,"./zh-cn.js":552,"./zh-hk":553,"./zh-hk.js":553,"./zh-tw":554,"./zh-tw.js":554};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=881},926:function(e,t,n){var r=n(327);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(327,(function(){var t=n(327);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},928:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(22),i=n.n(o),s=n(72),c=n(41),l=n(596),u=n.n(l),d=n(90),f=n.n(d),p=n(79),m=n(579),y=n(51),h=n.n(y),v=n(134),j=n.n(v),b=n(580),g=n.n(b),E=n(581),O=n.n(E)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),w=g()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],j()(O)),(function(e){return e})),_=n(341),I=n.n(_),S=n(582),T=n.n(S),D=n(583),P=n.n(D),k=(n(403),n(225)),N=n(120),A=function(){return a.a.createElement(k.a,{locale:navigator.language},a.a.createElement(P.a,{inventoryId:Object(N.m)().inventoryId}))},R=n(169),C=n.n(R),x=function(){return a.a.createElement(k.a,{locale:navigator.language},a.a.createElement(C.a,null))},L=n(171),M=n.n(L),H=n(355),F=n(133);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={loaded:!1,selected:new Map},B=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function G(e,t){var n=t.payload;return U({},e,{rows:Object(F.mergeArraysByKey)([e.rows,n.results]),entities:Object(F.mergeArraysByKey)([e.entities,n.results])})}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return U({},e,{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:I.a},B(n&&n.insights)&&{title:"Advisor",name:"advisor",component:T.a},B(n&&n.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:x},B(n&&n.smart_management)&&{title:"Compliance",name:"compliance",component:A},!insights.chrome.isProd&&B(n&&n.smart_management)&&{title:"Patch",name:"patch",component:M.a}].filter(Boolean)})}function q(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,U({},a||{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return U({},e,{selected:new Map(r)})}function K(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),U({},e,{selected:new Map(r)})}function W(e,t){var n=t.payload;return U({},e,{rows:Object(F.mergeArraysByKey)([e.rows,n.results.map((function(t){return U({},t,{selected:e.selected&&e.selected.has(t.id)})}))])})}function J(e,t){var n=t.payload;return U({},e,{activeFilters:(e.activeFilters||[{}]).map((function(e){return U({},e||{},h()({},n.filterKey,n.filterValue))}))})}var X,Q={notifications:p.notifications,systemProfileStore:_.systemProfileStore},Z=Q;function $(e){var t=e.actionType,n=e.callback;return X.addNew({on:t,callback:n})}var ee=n(597),te=n.n(ee),ne=n(598),re=n.n(ne),ae=n(599),oe=n.n(ae),ie=n(600),se=n.n(ie),ce=n(356),le=n.n(ce),ue=n(1),de=n.n(ue),fe=n(223),pe=n.n(fe),me=n(224),ye=n.n(me),he=n(101),ve=n.n(he),je=n(149),be=n.n(je),ge=n(123),Ee=n.n(ge),Oe=(n(571),n(150)),we=n.n(Oe),_e=n(81),Ie=n(602),Se=n.n(Ie);var Te=new(n(601).HostsApi)(void 0,"/api/inventory/v1",Se.a);var De=function(){return{type:w.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Pe=n(418),ke=n(419),Ne=n(68),Ae=n(112),Re=n(85),Ce=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Ne,reactIcons:Ae,pfReactTable:Re})},xe=n(415),Le=n(422),Me=n(423),He=n(424),Fe=n(425),ze=n(576),Ue=n(420),Ye=n(421),Be=n(215),Ge=n(317),Ve=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(xe.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Le.a,{gutter:"md"},a.a.createElement(Me.a,null,a.a.createElement(Ge.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Me.a,{isFilled:!0},a.a.createElement(He.a,{gutter:"md"},a.a.createElement(Fe.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Fe.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Fe.a,null,a.a.createElement(ze.a,null,"insights-client --unregister"))))),a.a.createElement(Ue.a,{gutter:"md"},a.a.createElement(Ye.a,null,a.a.createElement(Be.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Be.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},qe=de.a.shape({id:de.a.string,displayName:de.a.string});Ve.propTypes={isModalOpen:de.a.bool,currentSytem:de.a.oneOfType([qe,de.a.arrayOf(qe)]),handleModalToggle:de.a.func,onConfirm:de.a.func},Ve.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Ke=Ve,We=n(603),Je=n.n(We);function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},$e=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,l=e.updateDisplayName,u=e.onSelectRows,f=e.selected,p=e.status,m=e.setFilter,y=e.history,v=Object(r.useRef)(null),j=Object(r.useState)(),b=Ee()(j,2),g=b[0],E=b[1],O=Object(r.useState)(!1),_=Ee()(O,2),I=_[0],S=_[1],T=Object(r.useState)({}),D=Ee()(T,2),P=D[0],k=D[1],N=Object(r.useState)([]),A=Ee()(N,2),R=A[0],C=A[1],x=Object(r.useState)(!1),L=Ee()(x,2),M=L[0],F=L[1],z=Object(c.useStore)(),B=function(){var e=be()(ve.a.mark((function e(){var n,r,a,o,i,s;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Ce();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(Qe({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(H.applyReducerHash)((c={},h()(c,w.GET_ENTITIES_FULFILLED,G),h()(c,l,W),h()(c,"".concat(w.REMOVE_ENTITY,"_FULFILLED"),K),h()(c,"SELECT_ENTITY",q),h()(c,"FILTER_SELECT",(function(e){return U({},e,{selected:{}})})),h()(c,"SET_INVENTORY_FILTER",J),c),Y))))),p&&p.length>0&&m(Array.isArray(p)?p:[p],"staleFilter"),i=r(z),s=i.InventoryTable,E((function(){return s}));case 11:case"end":return e.stop()}var c,l}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){C(e.filters);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams;return e.forEach((function(e){"staleFilter"in e&&e.staleFilter.forEach((function(e){return t.append("status",e)}))})),t}(e.filters).toString();y.push({search:t}),v&&v.current&&v.current.onRefreshData(e)};Object(r.useEffect)((function(){B()}),[]);var X=function(){return f?f.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(_e.PageHeader,{className:"pf-m-light"},a.a.createElement(_e.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(_e.Main,null,a.a.createElement(Pe.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},g&&a.a.createElement(g,pe()({store:z,ref:v,hasCheckbox:!0,showTags:!0,onRefresh:V},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;S(!0),k({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){F(!0),k(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===X(),variant:"secondary",onClick:function(){k(Array.from(f.values())),S(!0)}}}]},bulkSelect:{count:X(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},Qe({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){u(0,!0)}}:{})],checked:Ze(s,f),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(Ke,{handleModalToggle:S,isModalOpen:I,currentSytem:P,onConfirm:function(){var e,t;Array.isArray(P)?(t=P.map((function(e){return e.id})),e=P.length>1?"".concat(P.length," systems"):P[0].display_name):(e=P.displayName,t=[P.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return V({filters:R})})),S(!1)}}),a.a.createElement(Je.a,{title:"Edit name",isOpen:M,value:P.display_name,onCancel:function(){return F(!1)},onSubmit:function(e){l(P.id,e,v.current.onRefreshData),F(!1)}}))};$e.contextTypes={store:de.a.object},$e.propTypes={rows:de.a.arrayOf(de.a.shape({id:de.a.string,selected:de.a.bool})),loaded:de.a.bool,loadEntity:de.a.func,clearNotifications:de.a.func,deleteEntity:de.a.func,addNotification:de.a.func,updateDisplayName:de.a.func,onSelectRows:de.a.func,setFilter:de.a.func,selected:de.a.map,status:de.a.oneOfType([de.a.arrayOf(de.a.string),de.a.string]),history:de.a.shape({push:de.a.func})};var et=we()(Object(c.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(De())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:w.REMOVE_ENTITY,payload:Te.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(p.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:w.UPDATE_DISPLAY_NAME,payload:Te.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t,n){return e(function(e,t){return{type:"SET_INVENTORY_FILTER",payload:{filterKey:t,filterValue:e}}}(t,n))}}}))($e)),tt=n(411),nt=n(412),rt=(n(923),n(924),n(925),n(33)),at=n.n(rt);function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var st=function(e){var t=e.entity,n=e.currentApp,o=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=Ee()(l,2),f=u[0],p=u[1],m=Object(c.useStore)(),y=f.InventoryDetail,v=f.AppInfo,j=function(){var e=be()(ve.a.mark((function e(){var t,n,r,a,s,c,l,u;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,Ce();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(it({},a(Object(H.applyReducerHash)(h()({},w.GET_ENTITY_FULFILLED,V),Y)))),s=$({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),s()}))}}),c=n(m),l=c.InventoryDetailHead,u=c.AppInfo,R.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:R.SystemCvesStore}),L.SystemAdvisoryListStore&&Object(d.getRegistry)().register({SystemAdvisoryListStore:L.SystemAdvisoryListStore}),p({InventoryDetail:l,AppInfo:u});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var b={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return a.a.createElement(r.Fragment,null,a.a.createElement(_e.PageHeader,{className:at()("pf-m-light ins-inventory-detail",b)},a.a.createElement(tt.a,null,a.a.createElement(nt.a,null,a.a.createElement(s.Link,{to:ut.table},"Inventory")),a.a.createElement(nt.a,{isActive:!0},t?t.display_name:a.a.createElement(_e.Skeleton,{size:_e.SkeletonSize.xs}))),y&&a.a.createElement(y,{hideBack:!0,showTags:!0})),a.a.createElement(_e.Main,{className:at()(b)},a.a.createElement(Pe.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},v&&a.a.createElement(v,{showTags:!0})))))};st.contextTypes={store:de.a.object},st.propTypes={history:de.a.object,entity:de.a.object,loadEntity:de.a.func,clearNotifications:de.a.func,currentApp:de.a.string};var ct=we()(Object(c.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(De())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(st)),lt=function(e){var t=e.component,n=e.rootClass,r=ye()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(N.d,pe()({},r,{component:t}))};lt.propTypes={component:de.a.func,rootClass:de.a.string};var ut={table:"/",detail:"/:inventoryId"};var dt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ut).some((function(e){return Object(N.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(ut.table+location.search),a.a.createElement(N.g,null,a.a.createElement(lt,{exact:!0,path:ut.table,render:function(){return a.a.createElement(et,{status:i.getAll("status")})},rootClass:"inventory"}),a.a.createElement(lt,{path:ut.detail,component:ct,rootClass:"inventory"}))};dt.propTypes={childProps:de.a.shape({history:de.a.shape({push:de.a.func,location:de.a.shape({search:de.a.string})})})};var ft;n(926);function pt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var mt=f()()(ft=function(e){oe()(r,e);var t,n=(t=r,function(){var e,n=le()(t);if(pt()){var r=le()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return se()(this,e)});function r(e){var t;return te()(this,r),(t=n.call(this,e)).getRegistry().register(Z),t}return re()(r,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.NotificationsPortal,null),a.a.createElement(dt,{childProps:this.props}))}}]),r}(r.Component))||ft;mt.propTypes={history:de.a.object};var yt=we()(Object(c.connect)()(mt));i.a.render(a.a.createElement(c.Provider,{store:function(){X=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[X.getMiddleware(),m.a,Object(p.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(F.getBaseName)(window.location.pathname)},a.a.createElement(yt,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map