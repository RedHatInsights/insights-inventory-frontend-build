!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(D,a)&&D[a]&&l.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return k.push.apply(k,s||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==D[o]&&(r=!1)}r&&(k.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===j&&I()}(e,t),r&&r(e,t)};var a,o=!0,i="4ff9f04548901f5e279c",s={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:T,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,y,h,v=0,j=0,b={},g={},E={};function O(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=P.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;g={},b={},E=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},D)_(n);return"prepare"===p&&0===j&&0===v&&I(),t}));var t}function _(e){E[e]?(g[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function I(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return T(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function T(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=S[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=S[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],j={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var w;l=O(g);var _=!1,I=!1,T=!1,k="";switch((w=y[g]?u(l):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(w),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),T=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return f("abort"),Promise.reject(_);if(I)for(l in j[l]=y[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],w.outdatedDependencies[l]));T&&(d(v,[w.moduleId]),j[l]=b)}var N,A=[];for(r=0;r<v.length;r++)l=v[r],S[l]&&S[l].hot._selfAccepted&&j[l]!==b&&A.push({module:l,errorHandler:S[l].hot._selfAccepted});f("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete D[e]}(e)}));for(var C,R,L=v.slice();L.length>0;)if(l=L.pop(),o=S[l]){var x={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(x);for(s[l]=x,o.hot.active=!1,delete S[l],delete m[l],a=0;a<o.children.length;a++){var H=S[o.children[a]];H&&((N=H.parents.indexOf(l))>=0&&H.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l]))for(R=m[l],a=0;a<R.length;a++)C=R[a],(N=o.children.indexOf(C))>=0&&o.children.splice(N,1);for(l in f("apply"),i=h,j)Object.prototype.hasOwnProperty.call(j,l)&&(e[l]=j[l]);var F=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l])){R=m[l];var z=[];for(r=0;r<R.length;r++)if(C=R[r],n=o.hot._acceptedDependencies[C]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<A.length;r++){var U=A[r];l=U.module,c=[l];try{P(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise((function(e){e(v)})))}var S={},D={0:0},k=[];function P(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return P;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),j++,P.e(e).then(t,(function(e){throw t(),e}));function t(){j--,"prepare"===p&&(b[e]||_(e),0===j&&0===v&&I())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=S,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/inventory/",P.h=function(){return i};var N=window.webpackJsonp=window.webpackJsonp||[],A=N.push.bind(N);N.push=t,N=N.slice();for(var C=0;C<N.length;C++)t(N[C]);var R=A;k.push([1461,1]),n()}({1221:function(e,t,n){var r={"./af":738,"./af.js":738,"./ar":739,"./ar-dz":740,"./ar-dz.js":740,"./ar-kw":741,"./ar-kw.js":741,"./ar-ly":742,"./ar-ly.js":742,"./ar-ma":743,"./ar-ma.js":743,"./ar-sa":744,"./ar-sa.js":744,"./ar-tn":745,"./ar-tn.js":745,"./ar.js":739,"./az":746,"./az.js":746,"./be":747,"./be.js":747,"./bg":748,"./bg.js":748,"./bm":749,"./bm.js":749,"./bn":750,"./bn.js":750,"./bo":751,"./bo.js":751,"./br":752,"./br.js":752,"./bs":753,"./bs.js":753,"./ca":754,"./ca.js":754,"./cs":755,"./cs.js":755,"./cv":756,"./cv.js":756,"./cy":757,"./cy.js":757,"./da":758,"./da.js":758,"./de":759,"./de-at":760,"./de-at.js":760,"./de-ch":761,"./de-ch.js":761,"./de.js":759,"./dv":762,"./dv.js":762,"./el":763,"./el.js":763,"./en-SG":764,"./en-SG.js":764,"./en-au":765,"./en-au.js":765,"./en-ca":766,"./en-ca.js":766,"./en-gb":767,"./en-gb.js":767,"./en-ie":768,"./en-ie.js":768,"./en-il":769,"./en-il.js":769,"./en-nz":770,"./en-nz.js":770,"./eo":771,"./eo.js":771,"./es":772,"./es-do":773,"./es-do.js":773,"./es-us":774,"./es-us.js":774,"./es.js":772,"./et":775,"./et.js":775,"./eu":776,"./eu.js":776,"./fa":777,"./fa.js":777,"./fi":778,"./fi.js":778,"./fo":779,"./fo.js":779,"./fr":780,"./fr-ca":781,"./fr-ca.js":781,"./fr-ch":782,"./fr-ch.js":782,"./fr.js":780,"./fy":783,"./fy.js":783,"./ga":784,"./ga.js":784,"./gd":785,"./gd.js":785,"./gl":786,"./gl.js":786,"./gom-latn":787,"./gom-latn.js":787,"./gu":788,"./gu.js":788,"./he":789,"./he.js":789,"./hi":790,"./hi.js":790,"./hr":791,"./hr.js":791,"./hu":792,"./hu.js":792,"./hy-am":793,"./hy-am.js":793,"./id":794,"./id.js":794,"./is":795,"./is.js":795,"./it":796,"./it-ch":797,"./it-ch.js":797,"./it.js":796,"./ja":798,"./ja.js":798,"./jv":799,"./jv.js":799,"./ka":800,"./ka.js":800,"./kk":801,"./kk.js":801,"./km":802,"./km.js":802,"./kn":803,"./kn.js":803,"./ko":804,"./ko.js":804,"./ku":805,"./ku.js":805,"./ky":806,"./ky.js":806,"./lb":807,"./lb.js":807,"./lo":808,"./lo.js":808,"./lt":809,"./lt.js":809,"./lv":810,"./lv.js":810,"./me":811,"./me.js":811,"./mi":812,"./mi.js":812,"./mk":813,"./mk.js":813,"./ml":814,"./ml.js":814,"./mn":815,"./mn.js":815,"./mr":816,"./mr.js":816,"./ms":817,"./ms-my":818,"./ms-my.js":818,"./ms.js":817,"./mt":819,"./mt.js":819,"./my":820,"./my.js":820,"./nb":821,"./nb.js":821,"./ne":822,"./ne.js":822,"./nl":823,"./nl-be":824,"./nl-be.js":824,"./nl.js":823,"./nn":825,"./nn.js":825,"./pa-in":826,"./pa-in.js":826,"./pl":827,"./pl.js":827,"./pt":828,"./pt-br":829,"./pt-br.js":829,"./pt.js":828,"./ro":830,"./ro.js":830,"./ru":831,"./ru.js":831,"./sd":832,"./sd.js":832,"./se":833,"./se.js":833,"./si":834,"./si.js":834,"./sk":835,"./sk.js":835,"./sl":836,"./sl.js":836,"./sq":837,"./sq.js":837,"./sr":838,"./sr-cyrl":839,"./sr-cyrl.js":839,"./sr.js":838,"./ss":840,"./ss.js":840,"./sv":841,"./sv.js":841,"./sw":842,"./sw.js":842,"./ta":843,"./ta.js":843,"./te":844,"./te.js":844,"./tet":845,"./tet.js":845,"./tg":846,"./tg.js":846,"./th":847,"./th.js":847,"./tl-ph":848,"./tl-ph.js":848,"./tlh":849,"./tlh.js":849,"./tr":850,"./tr.js":850,"./tzl":851,"./tzl.js":851,"./tzm":852,"./tzm-latn":853,"./tzm-latn.js":853,"./tzm.js":852,"./ug-cn":854,"./ug-cn.js":854,"./uk":855,"./uk.js":855,"./ur":856,"./ur.js":856,"./uz":857,"./uz-latn":858,"./uz-latn.js":858,"./uz.js":857,"./vi":859,"./vi.js":859,"./x-pseudo":860,"./x-pseudo.js":860,"./yo":861,"./yo.js":861,"./zh-cn":862,"./zh-cn.js":862,"./zh-hk":863,"./zh-hk.js":863,"./zh-tw":864,"./zh-tw.js":864};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1221},1347:function(e,t){},1353:function(e,t){},1457:function(e,t,n){var r=n(645);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(645,(function(){var t=n(645);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1461:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(11),i=n.n(o),s=n(133),c=n(83),l=n(963),u=n.n(l),d=n(178),p=n.n(d),f=n(153),m=n(934),y=n(101),h=n.n(y),v=n(247),j=n.n(v),b=n(935),g=n.n(b),E=n(936),O=n.n(E)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),w=g()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],j()(O)),(function(e){return e})),_=n(246),I=n(693),T=n(659),S=n.n(T),D=n(315),k=n.n(D),P=n(949),N=n.n(P),A=n(950),C=n.n(A),R=(n(1339),n(973)),L=function(){return a.a.createElement(R.a,{locale:navigator.language},a.a.createElement(C.a,null))},x=n(319),M=n.n(x);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={loaded:!1,selected:new Map},U=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function Y(e,t){var n=t.payload;return F({},e,{rows:Object(_.mergeArraysByKey)([e.rows,n.results]),entities:Object(_.mergeArraysByKey)([e.entities,n.results])})}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return F({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:S.a},U(n&&n.insights)&&{title:"Insights",name:"insights",component:N.a},U(n&&n.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:k.a},U(n&&n.smart_management)&&{title:"Compliance",name:"compliance",component:L},!insights.chrome.isProd&&U(n&&n.smart_management)&&{title:"Patch",name:"patch",component:M.a}].filter(Boolean)})}function G(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,F({},a||{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return F({},e,{selected:new Map(r)})}function V(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),F({},e,{selected:new Map(r)})}function q(e,t){var n=t.payload;return F({},e,{rows:Object(_.mergeArraysByKey)([e.rows,n.results.map((function(t){return F({},t,{selected:e.selected&&e.selected.has(t.id)})}))])})}function K(e,t){var n=t.payload;return F({},e,{activeFilters:(e.activeFilters||[{}]).map((function(e){return F({},e||{},h()({},n.filterKey,n.filterValue))}))})}var W,J={notifications:f.notifications,systemProfileStore:T.systemProfileStore},X=J;function Q(e){var t=e.actionType,n=e.callback;return W.addNew({on:t,callback:n})}var Z=n(964),$=n.n(Z),ee=n(965),te=n.n(ee),ne=n(966),re=n.n(ne),ae=n(967),oe=n.n(ae),ie=n(968),se=n.n(ie),ce=n(0),le=n.n(ce),ue=n(393),de=n.n(ue),pe=n(394),fe=n.n(pe),me=n(230),ye=n(200),he=n.n(ye),ve=n(282),je=n.n(ve),be=n(234),ge=n.n(be),Ee=(n(920),n(283)),Oe=n.n(Ee),we=n(159),_e=n(970),Ie=n.n(_e);var Te=new(n(969).HostsApi)(void 0,"/api/inventory/v1",Ie.a);var Se=function(){return{type:w.GET_ENTITY,payload:insights.chrome.auth.getUser()}},De=n(883),ke=n(884),Pe=n(210),Ne=n(152),Ae=n(187),Ce=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Pe,reactIcons:Ne,pfReactTable:Ae})},Re=n(880),Le=n(887),xe=n(888),Me=n(889),He=n(890),Fe=n(931),ze=n(885),Ue=n(886),Ye=n(379),Be=n(518),Ge=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Re.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Le.a,{gutter:"md"},a.a.createElement(xe.a,null,a.a.createElement(Be.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(xe.a,{isFilled:!0},a.a.createElement(Me.a,{gutter:"md"},a.a.createElement(He.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(He.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(He.a,null,a.a.createElement(Fe.a,null,"insights-client --unregister"))))),a.a.createElement(ze.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Ye.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Ye.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Ve=le.a.shape({id:le.a.string,displayName:le.a.string});Ge.propTypes={isModalOpen:le.a.bool,currentSytem:le.a.oneOfType([Ve,le.a.arrayOf(Ve)]),handleModalToggle:le.a.func,onConfirm:le.a.func},Ge.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var qe=Ge,Ke=n(971),We=n.n(Ke);function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Ze=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,l=e.updateDisplayName,u=e.onSelectRows,p=e.selected,f=e.status,m=e.setFilter,y=e.history,v=Object(r.useRef)(null),j=Object(r.useState)(),b=ge()(j,2),g=b[0],E=b[1],O=Object(r.useState)(!1),_=ge()(O,2),T=_[0],S=_[1],D=Object(r.useState)({}),k=ge()(D,2),P=k[0],N=k[1],A=Object(r.useState)([]),C=ge()(A,2),R=C[0],L=C[1],x=Object(r.useState)(!1),M=ge()(x,2),H=M[0],U=M[1],B=Object(c.useStore)(),W=function(){var e=je()(he.a.mark((function e(){var n,r,a,o,i,s;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Ce();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(Xe({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(I.applyReducerHash)((c={},h()(c,w.GET_ENTITIES_FULFILLED,Y),h()(c,l,q),h()(c,"".concat(w.REMOVE_ENTITY,"_FULFILLED"),V),h()(c,"SELECT_ENTITY",G),h()(c,"FILTER_SELECT",(function(e){return F({},e,{selected:{}})})),h()(c,"SET_INVENTORY_FILTER",K),c),z))))),f&&f.length>0&&m(Array.isArray(f)?f:[f],"staleFilter"),i=r(B),s=i.InventoryTable,E((function(){return s}));case 11:case"end":return e.stop()}var c,l}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){L(e.filters);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams;return e.forEach((function(e){"staleFilter"in e&&e.staleFilter.forEach((function(e){return t.append("status",e)}))})),t}(e.filters).toString();y.push({search:t}),v&&v.current&&v.current.onRefreshData(e)};Object(r.useEffect)((function(){W()}),[]);var X=function(){return p?p.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(we.PageHeader,{className:"pf-m-light"},a.a.createElement(we.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(we.Main,null,a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},g&&a.a.createElement(g,de()({store:B,ref:v,hasCheckbox:!0,showTags:!0,onRefresh:J},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;S(!0),N({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){U(!0),N(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===X(),variant:"danger",onClick:function(){N(Array.from(p.values())),S(!0)}}}]},bulkSelect:{count:X(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},Xe({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){u(0,!0)}}:{})],checked:Qe(s,p),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(qe,{handleModalToggle:S,isModalOpen:T,currentSytem:P,onConfirm:function(){var e,t;Array.isArray(P)?(t=P.map((function(e){return e.id})),e=P.length>1?"".concat(P.length," systems"):P[0].display_name):(e=P.displayName,t=[P.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return J({filters:R})})),S(!1)}}),a.a.createElement(We.a,{title:"Edit name",isOpen:H,value:P.display_name,onCancel:function(){return U(!1)},onSubmit:function(e){l(P.id,e,v.current.onRefreshData),U(!1)}}))};Ze.contextTypes={store:le.a.object},Ze.propTypes={rows:le.a.arrayOf(le.a.shape({id:le.a.string,selected:le.a.bool})),loaded:le.a.bool,loadEntity:le.a.func,clearNotifications:le.a.func,deleteEntity:le.a.func,addNotification:le.a.func,updateDisplayName:le.a.func,onSelectRows:le.a.func,setFilter:le.a.func,selected:le.a.map,status:le.a.oneOfType([le.a.arrayOf(le.a.string),le.a.string]),history:le.a.shape({push:le.a.func})};var $e=Oe()(Object(c.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Se())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:w.REMOVE_ENTITY,payload:Te.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:w.UPDATE_DISPLAY_NAME,payload:Te.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t,n){return e(function(e,t){return{type:"SET_INVENTORY_FILTER",payload:{filterKey:t,filterValue:e}}}(t,n))}}}))(Ze)),et=n(875),tt=n(876),nt=(n(1454),n(1455),n(1456),n(54)),rt=n.n(nt);function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?at(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it=function(e){var t=e.entity,n=e.currentApp,o=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=ge()(l,2),p=u[0],f=u[1],m=Object(c.useStore)(),y=p.InventoryDetail,v=p.AppInfo,j=function(){var e=je()(he.a.mark((function e(){var t,n,r,a,s,c,l,u;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,Ce();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(ot({},a(Object(I.applyReducerHash)(h()({},w.GET_ENTITY_FULFILLED,B),z)))),s=Q({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),s()}))}}),c=n(m),l=c.InventoryDetailHead,u=c.AppInfo,D.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:D.SystemCvesStore}),x.SystemAdvisoryListStore&&Object(d.getRegistry)().register({SystemAdvisoryListStore:x.SystemAdvisoryListStore}),f({InventoryDetail:l,AppInfo:u});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var b={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return a.a.createElement(r.Fragment,null,a.a.createElement(we.PageHeader,{className:rt()("pf-m-light ins-inventory-detail",b)},a.a.createElement(et.a,null,a.a.createElement(tt.a,null,a.a.createElement(s.Link,{to:lt.table},"Inventory")),a.a.createElement(tt.a,{isActive:!0},t?t.display_name:a.a.createElement(we.Skeleton,{size:we.SkeletonSize.xs}))),y&&a.a.createElement(y,{hideBack:!0,showTags:!0})),a.a.createElement(we.Main,{className:rt()(b)},a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},v&&a.a.createElement(v,{showTags:!0})))))};it.contextTypes={store:le.a.object},it.propTypes={history:le.a.object,entity:le.a.object,loadEntity:le.a.func,clearNotifications:le.a.func,currentApp:le.a.string};var st=Oe()(Object(c.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(Se())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(it)),ct=function(e){var t=e.component,n=e.rootClass,r=fe()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(me.d,de()({},r,{component:t}))};ct.propTypes={component:le.a.func,rootClass:le.a.string};var lt={table:"/",detail:"/:inventoryId"};var ut=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(lt).some((function(e){return Object(me.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(lt.table+location.search),a.a.createElement(me.g,null,a.a.createElement(ct,{exact:!0,path:lt.table,render:function(){return a.a.createElement($e,{status:i.getAll("status")})},rootClass:"inventory"}),a.a.createElement(ct,{path:lt.detail,component:st,rootClass:"inventory"}))};ut.propTypes={childProps:le.a.shape({history:le.a.shape({push:le.a.func,location:le.a.shape({search:le.a.string})})})};n(1457);var dt,pt=p()()(dt=function(e){function t(e){var n;return $()(this,t),(n=re()(this,oe()(t).call(this,e))).getRegistry().register(X),n}return se()(t,e),te()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(ut,{childProps:this.props}))}}]),t}(r.Component))||dt;pt.propTypes={history:le.a.object};var ft=Oe()(Object(c.connect)()(pt));i.a.render(a.a.createElement(c.Provider,{store:function(){W=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[W.getMiddleware(),m.a,Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(_.getBaseName)(window.location.pathname)},a.a.createElement(ft,null))),document.getElementById("root"))},641:function(e,t,n){(t=e.exports=n(6)(!1)).i(n(921),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},645:function(e,t,n){(t=e.exports=n(6)(!1)).i(n(921),""),t.i(n(1458),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},920:function(e,t,n){var r=n(641);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(641,(function(){var t=n(641);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},957:function(e,t){}});
//# sourceMappingURL=App.js.map