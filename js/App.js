!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(D,a)&&D[a]&&l.push(D[a][0]),D[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return k.push.apply(k,s||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==D[o]&&(r=!1)}r&&(k.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===j&&I()}(e,t),r&&r(e,t)};var a,o=!0,i="b987a2390915e259f368",s={},c=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:T,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,y,h,v=0,j=0,b={},g={},E={};function O(e){return+e+""===e?+e:e}function w(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=P.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;g={},b={},E=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},D)_(n);return"prepare"===p&&0===j&&0===v&&I(),t}));var t}function _(e){E[e]?(g[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function I(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return T(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function T(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=S[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=S[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],j={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var w;l=O(g);var _=!1,I=!1,T=!1,k="";switch((w=y[g]?u(l):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(w),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),T=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return f("abort"),Promise.reject(_);if(I)for(l in j[l]=y[l],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,l)&&(m[l]||(m[l]=[]),d(m[l],w.outdatedDependencies[l]));T&&(d(v,[w.moduleId]),j[l]=b)}var N,A=[];for(r=0;r<v.length;r++)l=v[r],S[l]&&S[l].hot._selfAccepted&&j[l]!==b&&A.push({module:l,errorHandler:S[l].hot._selfAccepted});f("dispose"),Object.keys(E).forEach((function(e){!1===E[e]&&function(e){delete D[e]}(e)}));for(var C,R,L=v.slice();L.length>0;)if(l=L.pop(),o=S[l]){var x={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(x);for(s[l]=x,o.hot.active=!1,delete S[l],delete m[l],a=0;a<o.children.length;a++){var H=S[o.children[a]];H&&((N=H.parents.indexOf(l))>=0&&H.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l]))for(R=m[l],a=0;a<R.length;a++)C=R[a],(N=o.children.indexOf(C))>=0&&o.children.splice(N,1);for(l in f("apply"),i=h,j)Object.prototype.hasOwnProperty.call(j,l)&&(e[l]=j[l]);var F=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l])){R=m[l];var z=[];for(r=0;r<R.length;r++)if(C=R[r],n=o.hot._acceptedDependencies[C]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<A.length;r++){var U=A[r];l=U.module,c=[l];try{P(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise((function(e){e(v)})))}var S={},D={0:0},k=[];function P(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return P;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),j++,P.e(e).then(t,(function(e){throw t(),e}));function t(){j--,"prepare"===p&&(b[e]||_(e),0===j&&0===v&&I())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=S,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/inventory/",P.h=function(){return i};var N=window.webpackJsonp=window.webpackJsonp||[],A=N.push.bind(N);N.push=t,N=N.slice();for(var C=0;C<N.length;C++)t(N[C]);var R=A;k.push([1469,1]),n()}({1235:function(e,t){},1241:function(e,t){},1283:function(e,t,n){var r={"./af":772,"./af.js":772,"./ar":773,"./ar-dz":774,"./ar-dz.js":774,"./ar-kw":775,"./ar-kw.js":775,"./ar-ly":776,"./ar-ly.js":776,"./ar-ma":777,"./ar-ma.js":777,"./ar-sa":778,"./ar-sa.js":778,"./ar-tn":779,"./ar-tn.js":779,"./ar.js":773,"./az":780,"./az.js":780,"./be":781,"./be.js":781,"./bg":782,"./bg.js":782,"./bm":783,"./bm.js":783,"./bn":784,"./bn.js":784,"./bo":785,"./bo.js":785,"./br":786,"./br.js":786,"./bs":787,"./bs.js":787,"./ca":788,"./ca.js":788,"./cs":789,"./cs.js":789,"./cv":790,"./cv.js":790,"./cy":791,"./cy.js":791,"./da":792,"./da.js":792,"./de":793,"./de-at":794,"./de-at.js":794,"./de-ch":795,"./de-ch.js":795,"./de.js":793,"./dv":796,"./dv.js":796,"./el":797,"./el.js":797,"./en-SG":798,"./en-SG.js":798,"./en-au":799,"./en-au.js":799,"./en-ca":800,"./en-ca.js":800,"./en-gb":801,"./en-gb.js":801,"./en-ie":802,"./en-ie.js":802,"./en-il":803,"./en-il.js":803,"./en-nz":804,"./en-nz.js":804,"./eo":805,"./eo.js":805,"./es":806,"./es-do":807,"./es-do.js":807,"./es-us":808,"./es-us.js":808,"./es.js":806,"./et":809,"./et.js":809,"./eu":810,"./eu.js":810,"./fa":811,"./fa.js":811,"./fi":812,"./fi.js":812,"./fo":813,"./fo.js":813,"./fr":814,"./fr-ca":815,"./fr-ca.js":815,"./fr-ch":816,"./fr-ch.js":816,"./fr.js":814,"./fy":817,"./fy.js":817,"./ga":818,"./ga.js":818,"./gd":819,"./gd.js":819,"./gl":820,"./gl.js":820,"./gom-latn":821,"./gom-latn.js":821,"./gu":822,"./gu.js":822,"./he":823,"./he.js":823,"./hi":824,"./hi.js":824,"./hr":825,"./hr.js":825,"./hu":826,"./hu.js":826,"./hy-am":827,"./hy-am.js":827,"./id":828,"./id.js":828,"./is":829,"./is.js":829,"./it":830,"./it-ch":831,"./it-ch.js":831,"./it.js":830,"./ja":832,"./ja.js":832,"./jv":833,"./jv.js":833,"./ka":834,"./ka.js":834,"./kk":835,"./kk.js":835,"./km":836,"./km.js":836,"./kn":837,"./kn.js":837,"./ko":838,"./ko.js":838,"./ku":839,"./ku.js":839,"./ky":840,"./ky.js":840,"./lb":841,"./lb.js":841,"./lo":842,"./lo.js":842,"./lt":843,"./lt.js":843,"./lv":844,"./lv.js":844,"./me":845,"./me.js":845,"./mi":846,"./mi.js":846,"./mk":847,"./mk.js":847,"./ml":848,"./ml.js":848,"./mn":849,"./mn.js":849,"./mr":850,"./mr.js":850,"./ms":851,"./ms-my":852,"./ms-my.js":852,"./ms.js":851,"./mt":853,"./mt.js":853,"./my":854,"./my.js":854,"./nb":855,"./nb.js":855,"./ne":856,"./ne.js":856,"./nl":857,"./nl-be":858,"./nl-be.js":858,"./nl.js":857,"./nn":859,"./nn.js":859,"./pa-in":860,"./pa-in.js":860,"./pl":861,"./pl.js":861,"./pt":862,"./pt-br":863,"./pt-br.js":863,"./pt.js":862,"./ro":864,"./ro.js":864,"./ru":865,"./ru.js":865,"./sd":866,"./sd.js":866,"./se":867,"./se.js":867,"./si":868,"./si.js":868,"./sk":869,"./sk.js":869,"./sl":870,"./sl.js":870,"./sq":871,"./sq.js":871,"./sr":872,"./sr-cyrl":873,"./sr-cyrl.js":873,"./sr.js":872,"./ss":874,"./ss.js":874,"./sv":875,"./sv.js":875,"./sw":876,"./sw.js":876,"./ta":877,"./ta.js":877,"./te":878,"./te.js":878,"./tet":879,"./tet.js":879,"./tg":880,"./tg.js":880,"./th":881,"./th.js":881,"./tl-ph":882,"./tl-ph.js":882,"./tlh":883,"./tlh.js":883,"./tr":884,"./tr.js":884,"./tzl":885,"./tzl.js":885,"./tzm":886,"./tzm-latn":887,"./tzm-latn.js":887,"./tzm.js":886,"./ug-cn":888,"./ug-cn.js":888,"./uk":889,"./uk.js":889,"./ur":890,"./ur.js":890,"./uz":891,"./uz-latn":892,"./uz-latn.js":892,"./uz.js":891,"./vi":893,"./vi.js":893,"./x-pseudo":894,"./x-pseudo.js":894,"./yo":895,"./yo.js":895,"./zh-cn":896,"./zh-cn.js":896,"./zh-hk":897,"./zh-hk.js":897,"./zh-tw":898,"./zh-tw.js":898};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1283},1465:function(e,t,n){var r=n(656);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(656,(function(){var t=n(656);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1469:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(11),i=n.n(o),s=n(133),c=n(83),l=n(979),u=n.n(l),d=n(178),p=n.n(d),f=n(155),m=n(950),y=n(102),h=n.n(y),v=n(254),j=n.n(v),b=n(951),g=n.n(b),E=n(952),O=n.n(E)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),w=g()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],j()(O)),(function(e){return e})),_=n(670),I=n.n(_),T=n(953),S=n.n(T),D=n(954),k=n.n(D),P=(n(1227),n(989)),N=n(232),A=function(){return a.a.createElement(P.a,{locale:navigator.language},a.a.createElement(k.a,{inventoryId:Object(N.m)().inventoryId}))},C=n(324),R=n.n(C),L=n(327),x=n.n(L),M=n(704),H=n(253);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={loaded:!1,selected:new Map},Y=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function B(e,t){var n=t.payload;return z({},e,{rows:Object(H.mergeArraysByKey)([e.rows,n.results]),entities:Object(H.mergeArraysByKey)([e.entities,n.results])})}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return z({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:I.a},Y(n&&n.insights)&&{title:"Advisor",name:"advisor",component:S.a},Y(n&&n.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:x.a},Y(n&&n.smart_management)&&{title:"Compliance",name:"compliance",component:A},!insights.chrome.isProd&&Y(n&&n.smart_management)&&{title:"Patch",name:"patch",component:R.a}].filter(Boolean)})}function V(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,z({},a||{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return z({},e,{selected:new Map(r)})}function q(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),z({},e,{selected:new Map(r)})}function K(e,t){var n=t.payload;return z({},e,{rows:Object(H.mergeArraysByKey)([e.rows,n.results.map((function(t){return z({},t,{selected:e.selected&&e.selected.has(t.id)})}))])})}function W(e,t){var n=t.payload;return z({},e,{activeFilters:(e.activeFilters||[{}]).map((function(e){return z({},e||{},h()({},n.filterKey,n.filterValue))}))})}var J,X={notifications:f.notifications,systemProfileStore:_.systemProfileStore},Q=X;function Z(e){var t=e.actionType,n=e.callback;return J.addNew({on:t,callback:n})}var $=n(980),ee=n.n($),te=n(981),ne=n.n(te),re=n(982),ae=n.n(re),oe=n(983),ie=n.n(oe),se=n(984),ce=n.n(se),le=n(0),ue=n.n(le),de=n(408),pe=n.n(de),fe=n(409),me=n.n(fe),ye=n(202),he=n.n(ye),ve=n(291),je=n.n(ve),be=n(236),ge=n.n(be),Ee=(n(936),n(292)),Oe=n.n(Ee),we=n(179),_e=n(986),Ie=n.n(_e);var Te=new(n(985).HostsApi)(void 0,"/api/inventory/v1",Ie.a);var Se=function(){return{type:w.GET_ENTITY,payload:insights.chrome.auth.getUser()}},De=n(762),ke=n(763),Pe=n(247),Ne=n(170),Ae=n(187),Ce=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Pe,reactIcons:Ne,pfReactTable:Ae})},Re=n(759),Le=n(766),xe=n(767),Me=n(768),He=n(769),Fe=n(947),ze=n(764),Ue=n(765),Ye=n(387),Be=n(518),Ge=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Re.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Le.a,{gutter:"md"},a.a.createElement(xe.a,null,a.a.createElement(Be.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(xe.a,{isFilled:!0},a.a.createElement(Me.a,{gutter:"md"},a.a.createElement(He.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(He.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(He.a,null,a.a.createElement(Fe.a,null,"insights-client --unregister"))))),a.a.createElement(ze.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Ye.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Ye.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Ve=ue.a.shape({id:ue.a.string,displayName:ue.a.string});Ge.propTypes={isModalOpen:ue.a.bool,currentSytem:ue.a.oneOfType([Ve,ue.a.arrayOf(Ve)]),handleModalToggle:ue.a.func,onConfirm:ue.a.func},Ge.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var qe=Ge,Ke=n(987),We=n.n(Ke);function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Ze=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,l=e.updateDisplayName,u=e.onSelectRows,p=e.selected,f=e.status,m=e.setFilter,y=e.history,v=Object(r.useRef)(null),j=Object(r.useState)(),b=ge()(j,2),g=b[0],E=b[1],O=Object(r.useState)(!1),_=ge()(O,2),I=_[0],T=_[1],S=Object(r.useState)({}),D=ge()(S,2),k=D[0],P=D[1],N=Object(r.useState)([]),A=ge()(N,2),C=A[0],R=A[1],L=Object(r.useState)(!1),x=ge()(L,2),H=x[0],F=x[1],Y=Object(c.useStore)(),G=function(){var e=je()(he.a.mark((function e(){var n,r,a,o,i,s;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Ce();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(Xe({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(M.applyReducerHash)((c={},h()(c,w.GET_ENTITIES_FULFILLED,B),h()(c,l,K),h()(c,"".concat(w.REMOVE_ENTITY,"_FULFILLED"),q),h()(c,"SELECT_ENTITY",V),h()(c,"FILTER_SELECT",(function(e){return z({},e,{selected:{}})})),h()(c,"SET_INVENTORY_FILTER",W),c),U))))),f&&f.length>0&&m(Array.isArray(f)?f:[f],"staleFilter"),i=r(Y),s=i.InventoryTable,E((function(){return s}));case 11:case"end":return e.stop()}var c,l}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){R(e.filters);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams;return e.forEach((function(e){"staleFilter"in e&&e.staleFilter.forEach((function(e){return t.append("status",e)}))})),t}(e.filters).toString();y.push({search:t}),v&&v.current&&v.current.onRefreshData(e)};Object(r.useEffect)((function(){G()}),[]);var X=function(){return p?p.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(we.PageHeader,{className:"pf-m-light"},a.a.createElement(we.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(we.Main,null,a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},g&&a.a.createElement(g,pe()({store:Y,ref:v,hasCheckbox:!0,showTags:!0,onRefresh:J},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;T(!0),P({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){F(!0),P(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===X(),variant:"secondary",onClick:function(){P(Array.from(p.values())),T(!0)}}}]},bulkSelect:{count:X(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},Xe({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){u(0,!0)}}:{})],checked:Qe(s,p),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(qe,{handleModalToggle:T,isModalOpen:I,currentSytem:k,onConfirm:function(){var e,t;Array.isArray(k)?(t=k.map((function(e){return e.id})),e=k.length>1?"".concat(k.length," systems"):k[0].display_name):(e=k.displayName,t=[k.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return J({filters:C})})),T(!1)}}),a.a.createElement(We.a,{title:"Edit name",isOpen:H,value:k.display_name,onCancel:function(){return F(!1)},onSubmit:function(e){l(k.id,e,v.current.onRefreshData),F(!1)}}))};Ze.contextTypes={store:ue.a.object},Ze.propTypes={rows:ue.a.arrayOf(ue.a.shape({id:ue.a.string,selected:ue.a.bool})),loaded:ue.a.bool,loadEntity:ue.a.func,clearNotifications:ue.a.func,deleteEntity:ue.a.func,addNotification:ue.a.func,updateDisplayName:ue.a.func,onSelectRows:ue.a.func,setFilter:ue.a.func,selected:ue.a.map,status:ue.a.oneOfType([ue.a.arrayOf(ue.a.string),ue.a.string]),history:ue.a.shape({push:ue.a.func})};var $e=Oe()(Object(c.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Se())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:w.REMOVE_ENTITY,payload:Te.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:w.UPDATE_DISPLAY_NAME,payload:Te.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t,n){return e(function(e,t){return{type:"SET_INVENTORY_FILTER",payload:{filterKey:t,filterValue:e}}}(t,n))}}}))(Ze)),et=n(754),tt=n(755),nt=(n(1462),n(1463),n(1464),n(54)),rt=n.n(nt);function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?at(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it=function(e){var t=e.entity,n=e.currentApp,o=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=ge()(l,2),p=u[0],f=u[1],m=Object(c.useStore)(),y=p.InventoryDetail,v=p.AppInfo,j=function(){var e=je()(he.a.mark((function e(){var t,n,r,a,s,c,l,u;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,Ce();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(ot({},a(Object(M.applyReducerHash)(h()({},w.GET_ENTITY_FULFILLED,G),U)))),s=Z({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),s()}))}}),c=n(m),l=c.InventoryDetailHead,u=c.AppInfo,L.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:L.SystemCvesStore}),C.SystemAdvisoryListStore&&Object(d.getRegistry)().register({SystemAdvisoryListStore:C.SystemAdvisoryListStore}),f({InventoryDetail:l,AppInfo:u});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var b={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return a.a.createElement(r.Fragment,null,a.a.createElement(we.PageHeader,{className:rt()("pf-m-light ins-inventory-detail",b)},a.a.createElement(et.a,null,a.a.createElement(tt.a,null,a.a.createElement(s.Link,{to:lt.table},"Inventory")),a.a.createElement(tt.a,{isActive:!0},t?t.display_name:a.a.createElement(we.Skeleton,{size:we.SkeletonSize.xs}))),y&&a.a.createElement(y,{hideBack:!0,showTags:!0})),a.a.createElement(we.Main,{className:rt()(b)},a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},v&&a.a.createElement(v,{showTags:!0})))))};it.contextTypes={store:ue.a.object},it.propTypes={history:ue.a.object,entity:ue.a.object,loadEntity:ue.a.func,clearNotifications:ue.a.func,currentApp:ue.a.string};var st=Oe()(Object(c.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(Se())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(it)),ct=function(e){var t=e.component,n=e.rootClass,r=me()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(N.d,pe()({},r,{component:t}))};ct.propTypes={component:ue.a.func,rootClass:ue.a.string};var lt={table:"/",detail:"/:inventoryId"};var ut=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(lt).some((function(e){return Object(N.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(lt.table+location.search),a.a.createElement(N.g,null,a.a.createElement(ct,{exact:!0,path:lt.table,render:function(){return a.a.createElement($e,{status:i.getAll("status")})},rootClass:"inventory"}),a.a.createElement(ct,{path:lt.detail,component:st,rootClass:"inventory"}))};ut.propTypes={childProps:ue.a.shape({history:ue.a.shape({push:ue.a.func,location:ue.a.shape({search:ue.a.string})})})};n(1465);var dt,pt=p()()(dt=function(e){function t(e){var n;return ee()(this,t),(n=ae()(this,ie()(t).call(this,e))).getRegistry().register(Q),n}return ce()(t,e),ne()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(ut,{childProps:this.props}))}}]),t}(r.Component))||dt;pt.propTypes={history:ue.a.object};var ft=Oe()(Object(c.connect)()(pt));i.a.render(a.a.createElement(c.Provider,{store:function(){J=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[J.getMiddleware(),m.a,Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(H.getBaseName)(window.location.pathname)},a.a.createElement(ft,null))),document.getElementById("root"))},652:function(e,t,n){(t=e.exports=n(6)(!1)).i(n(937),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},656:function(e,t,n){(t=e.exports=n(6)(!1)).i(n(937),""),t.i(n(1466),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},936:function(e,t,n){var r=n(652);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(652,(function(){var t=n(652);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},958:function(e,t){}});
//# sourceMappingURL=App.js.map