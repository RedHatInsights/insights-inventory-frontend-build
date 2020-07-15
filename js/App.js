!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(N,a)&&N[a]&&l.push(N[a][0]),N[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return A.push.apply(A,s||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==N[o]&&(r=!1)}r&&(A.splice(t--,1),e=R(R.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--j&&0===b&&S()}(e,t),r&&r(e,t)};var a,o=!0,i="e6ee2ecb8a27780de249",s={},c=[],l=[];function u(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(m={})[t]=e[t],p("ready");break;case"ready":k(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:_,apply:T,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[t]};return a=void 0,n}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var y,m,h,v,j=0,b=0,g={},E={},O={};function w(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=R.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(D()?"ready":"idle"),null;E={},g={},O=e.c,h=e.h,p("prepare");var t=new Promise((function(e,t){y={resolve:e,reject:t}}));for(var n in m={},N)I(n);return"prepare"===f&&0===b&&0===j&&S(),t}));var t}function I(e){O[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function S(){p("ready");var e=y;if(y=null,e)if(o)Promise.resolve().then((function(){return T(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(w(n));e.resolve(t)}}function T(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,l,u,d;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((u=P[o])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var s=0;s<u.parents.length;s++){var c=u.parents[s],l=P[c];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([c]),moduleId:o,parentId:c};-1===t.indexOf(c)&&(l.hot._acceptedDependencies[o]?(n[c]||(n[c]=[]),y(n[c],[o])):(delete n[c],t.push(c),r.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}D();var j={},b=[],g={},E=function(){console.warn("[HMR] unexpected require("+I.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var I;d=w(_),I=m[_]?f(d):{type:"disposed",moduleId:_};var S=!1,T=!1,k=!1,A="";switch(I.chain&&(A="\nUpdate propagation: "+I.chain.join(" -> ")),I.type){case"self-declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(S=new Error("Aborted because of self decline: "+I.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(I),n.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+I.moduleId+" in "+I.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(I),n.ignoreUnaccepted||(S=new Error("Aborted because "+d+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(I),T=!0;break;case"disposed":n.onDisposed&&n.onDisposed(I),k=!0;break;default:throw new Error("Unexception type "+I.type)}if(S)return p("abort"),Promise.reject(S);if(T)for(d in g[d]=m[d],y(b,I.outdatedModules),I.outdatedDependencies)Object.prototype.hasOwnProperty.call(I.outdatedDependencies,d)&&(j[d]||(j[d]=[]),y(j[d],I.outdatedDependencies[d]));k&&(y(b,[I.moduleId]),g[d]=E)}var C,x=[];for(o=0;o<b.length;o++)d=b[o],P[d]&&P[d].hot._selfAccepted&&g[d]!==E&&!P[d].hot._selfInvalidated&&x.push({module:d,parents:P[d].parents.slice(),errorHandler:P[d].hot._selfAccepted});p("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete N[e]}(e)}));var L,M,H=b.slice();for(;H.length>0;)if(d=H.pop(),u=P[d]){var F={},z=u.hot._disposeHandlers;for(l=0;l<z.length;l++)(r=z[l])(F);for(s[d]=F,u.hot.active=!1,delete P[d],delete j[d],l=0;l<u.children.length;l++){var U=P[u.children[l]];U&&((C=U.parents.indexOf(d))>=0&&U.parents.splice(C,1))}}for(d in j)if(Object.prototype.hasOwnProperty.call(j,d)&&(u=P[d]))for(M=j[d],l=0;l<M.length;l++)L=M[l],(C=u.children.indexOf(L))>=0&&u.children.splice(C,1);p("apply"),void 0!==h&&(i=h,h=void 0);for(d in m=void 0,g)Object.prototype.hasOwnProperty.call(g,d)&&(e[d]=g[d]);var Y=null;for(d in j)if(Object.prototype.hasOwnProperty.call(j,d)&&(u=P[d])){M=j[d];var B=[];for(o=0;o<M.length;o++)if(L=M[o],r=u.hot._acceptedDependencies[L]){if(-1!==B.indexOf(r))continue;B.push(r)}for(o=0;o<B.length;o++){r=B[o];try{r(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[o],error:e}),n.ignoreErrored||Y||(Y=e)}}}for(o=0;o<x.length;o++){var G=x[o];d=G.module,c=G.parents,a=d;try{R(d)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||Y||(Y=t),Y||(Y=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||Y||(Y=e)}}if(Y)return p("fail"),Promise.reject(Y);if(v)return t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function D(){if(v)return m||(m={}),v.forEach(k),v=void 0,!0}function k(t){Object.prototype.hasOwnProperty.call(m,t)||(m[t]=e[t])}var P={},N={0:0},A=[];function R(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return R;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),R(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&p("prepare"),b++,R.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.m=e,R.c=P,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/apps/inventory/",R.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],x=C.push.bind(C);C.push=t,C=C.slice();for(var L=0;L<C.length;L++)t(C[L]);var M=x;A.push([917,1]),n()}({325:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(571),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},328:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(571),""),t.i(n(916),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},570:function(e,t,n){var r=n(325);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(325,(function(){var t=n(325);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},872:function(e,t,n){var r={"./af":426,"./af.js":426,"./ar":427,"./ar-dz":428,"./ar-dz.js":428,"./ar-kw":429,"./ar-kw.js":429,"./ar-ly":430,"./ar-ly.js":430,"./ar-ma":431,"./ar-ma.js":431,"./ar-sa":432,"./ar-sa.js":432,"./ar-tn":433,"./ar-tn.js":433,"./ar.js":427,"./az":434,"./az.js":434,"./be":435,"./be.js":435,"./bg":436,"./bg.js":436,"./bm":437,"./bm.js":437,"./bn":438,"./bn.js":438,"./bo":439,"./bo.js":439,"./br":440,"./br.js":440,"./bs":441,"./bs.js":441,"./ca":442,"./ca.js":442,"./cs":443,"./cs.js":443,"./cv":444,"./cv.js":444,"./cy":445,"./cy.js":445,"./da":446,"./da.js":446,"./de":447,"./de-at":448,"./de-at.js":448,"./de-ch":449,"./de-ch.js":449,"./de.js":447,"./dv":450,"./dv.js":450,"./el":451,"./el.js":451,"./en-SG":452,"./en-SG.js":452,"./en-au":453,"./en-au.js":453,"./en-ca":454,"./en-ca.js":454,"./en-gb":455,"./en-gb.js":455,"./en-ie":456,"./en-ie.js":456,"./en-il":457,"./en-il.js":457,"./en-nz":458,"./en-nz.js":458,"./eo":459,"./eo.js":459,"./es":460,"./es-do":461,"./es-do.js":461,"./es-us":462,"./es-us.js":462,"./es.js":460,"./et":463,"./et.js":463,"./eu":464,"./eu.js":464,"./fa":465,"./fa.js":465,"./fi":466,"./fi.js":466,"./fo":467,"./fo.js":467,"./fr":468,"./fr-ca":469,"./fr-ca.js":469,"./fr-ch":470,"./fr-ch.js":470,"./fr.js":468,"./fy":471,"./fy.js":471,"./ga":472,"./ga.js":472,"./gd":473,"./gd.js":473,"./gl":474,"./gl.js":474,"./gom-latn":475,"./gom-latn.js":475,"./gu":476,"./gu.js":476,"./he":477,"./he.js":477,"./hi":478,"./hi.js":478,"./hr":479,"./hr.js":479,"./hu":480,"./hu.js":480,"./hy-am":481,"./hy-am.js":481,"./id":482,"./id.js":482,"./is":483,"./is.js":483,"./it":484,"./it-ch":485,"./it-ch.js":485,"./it.js":484,"./ja":486,"./ja.js":486,"./jv":487,"./jv.js":487,"./ka":488,"./ka.js":488,"./kk":489,"./kk.js":489,"./km":490,"./km.js":490,"./kn":491,"./kn.js":491,"./ko":492,"./ko.js":492,"./ku":493,"./ku.js":493,"./ky":494,"./ky.js":494,"./lb":495,"./lb.js":495,"./lo":496,"./lo.js":496,"./lt":497,"./lt.js":497,"./lv":498,"./lv.js":498,"./me":499,"./me.js":499,"./mi":500,"./mi.js":500,"./mk":501,"./mk.js":501,"./ml":502,"./ml.js":502,"./mn":503,"./mn.js":503,"./mr":504,"./mr.js":504,"./ms":505,"./ms-my":506,"./ms-my.js":506,"./ms.js":505,"./mt":507,"./mt.js":507,"./my":508,"./my.js":508,"./nb":509,"./nb.js":509,"./ne":510,"./ne.js":510,"./nl":511,"./nl-be":512,"./nl-be.js":512,"./nl.js":511,"./nn":513,"./nn.js":513,"./pa-in":514,"./pa-in.js":514,"./pl":515,"./pl.js":515,"./pt":516,"./pt-br":517,"./pt-br.js":517,"./pt.js":516,"./ro":518,"./ro.js":518,"./ru":519,"./ru.js":519,"./sd":520,"./sd.js":520,"./se":521,"./se.js":521,"./si":522,"./si.js":522,"./sk":523,"./sk.js":523,"./sl":524,"./sl.js":524,"./sq":525,"./sq.js":525,"./sr":526,"./sr-cyrl":527,"./sr-cyrl.js":527,"./sr.js":526,"./ss":528,"./ss.js":528,"./sv":529,"./sv.js":529,"./sw":530,"./sw.js":530,"./ta":531,"./ta.js":531,"./te":532,"./te.js":532,"./tet":533,"./tet.js":533,"./tg":534,"./tg.js":534,"./th":535,"./th.js":535,"./tl-ph":536,"./tl-ph.js":536,"./tlh":537,"./tlh.js":537,"./tr":538,"./tr.js":538,"./tzl":539,"./tzl.js":539,"./tzm":540,"./tzm-latn":541,"./tzm-latn.js":541,"./tzm.js":540,"./ug-cn":542,"./ug-cn.js":542,"./uk":543,"./uk.js":543,"./ur":544,"./ur.js":544,"./uz":545,"./uz-latn":546,"./uz-latn.js":546,"./uz.js":545,"./vi":547,"./vi.js":547,"./x-pseudo":548,"./x-pseudo.js":548,"./yo":549,"./yo.js":549,"./zh-cn":550,"./zh-cn.js":550,"./zh-hk":551,"./zh-hk.js":551,"./zh-tw":552,"./zh-tw.js":552};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=872},915:function(e,t,n){var r=n(328);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(328,(function(){var t=n(328);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},917:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(22),i=n.n(o),s=n(76),c=n(44),l=n(593),u=n.n(l),d=n(94),f=n.n(d),p=n(84),y=n(578),m=n(53),h=n.n(m),v=n(142),j=n.n(v),b=n(579),g=n.n(b),E=n(580),O=n.n(E)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),w=g()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],j()(O)),(function(e){return e})),_=n(341),I=n.n(_),S=n(581),T=n.n(S),D=n(582),k=n.n(D),P=(n(828),n(39)),N=function(){return a.a.createElement(k.a,{customItnl:!0,intlProps:{locale:navigator.language},inventoryId:Object(P.m)().inventoryId})},A=n(182),R=n.n(A),C=(n(553),function(){return a.a.createElement(R.a,{customItnlProvider:!0})}),x=n(184),L=n.n(x),M=n(354),H=n(141);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={loaded:!1,selected:new Map},Y=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function B(e,t){var n=t.payload;return z(z({},e),{},{rows:Object(H.mergeArraysByKey)([e.rows,n.results]),entities:Object(H.mergeArraysByKey)([e.entities,n.results])})}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return z(z({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:I.a},Y(n&&n.insights)&&{title:"Advisor",name:"advisor",component:T.a},Y(n&&n.insights)&&{title:"Vulnerability",name:"vulnerabilities",component:C},Y(n&&n.insights)&&{title:"Compliance",name:"compliance",component:N},Y(n&&n.insights)&&{title:"Patch",name:"patch",component:L.a}].filter(Boolean)})}function V(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,z(z({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return z(z({},e),{},{selected:new Map(r)})}function q(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),z(z({},e),{},{selected:new Map(r)})}function K(e,t){var n=t.payload;return z(z({},e),{},{rows:Object(H.mergeArraysByKey)([e.rows,n.results.map((function(t){return z(z({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})}function W(e,t){var n=t.payload;return z(z({},e),{},{activeFilters:(e.activeFilters||[{}]).map((function(e){return z(z({},e||{}),{},h()({},n.filterKey,n.filterValue))}))})}var J,X={notifications:p.notifications,systemProfileStore:_.systemProfileStore},Q=X;function Z(e){var t=e.actionType,n=e.callback;return J.addNew({on:t,callback:n})}var $=n(594),ee=n.n($),te=n(595),ne=n.n(te),re=n(596),ae=n.n(re),oe=n(597),ie=n.n(oe),se=n(355),ce=n.n(se),le=n(1),ue=n.n(le),de=n(227),fe=n.n(de),pe=n(228),ye=n.n(pe),me=n(111),he=n.n(me),ve=n(155),je=n.n(ve),be=n(126),ge=n.n(be),Ee=(n(570),n(156)),Oe=n.n(Ee),we=n(86),_e=n(599),Ie=n.n(_e);var Se=new(n(598).HostsApi)(void 0,"/api/inventory/v1",Ie.a);var Te=function(){return{type:w.GET_ENTITY,payload:insights.chrome.auth.getUser()}},De=n(416),ke=n(417),Pe=n(71),Ne=n(118),Ae=n(89),Re=function(){return insights.loadInventory({react:a.a,reactRouterDom:s,reactCore:Pe,reactIcons:Ne,pfReactTable:Ae})},Ce=n(413),xe=n(420),Le=n(421),Me=n(422),He=n(423),Fe=n(575),ze=n(418),Ue=n(419),Ye=n(219),Be=n(318),Ge=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(Ce.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(xe.a,{gutter:"md"},a.a.createElement(Le.a,null,a.a.createElement(Be.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Le.a,{isFilled:!0},a.a.createElement(Me.a,{gutter:"md"},a.a.createElement(He.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(He.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(He.a,null,a.a.createElement(Fe.a,null,"insights-client --unregister"))))),a.a.createElement(ze.a,{gutter:"md"},a.a.createElement(Ue.a,null,a.a.createElement(Ye.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(Ye.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Ve=ue.a.shape({id:ue.a.string,displayName:ue.a.string});Ge.propTypes={isModalOpen:ue.a.bool,currentSytem:ue.a.oneOfType([Ve,ue.a.arrayOf(Ve)]),handleModalToggle:ue.a.func,onConfirm:ue.a.func},Ge.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var qe=Ge,Ke=n(600),We=n.n(Ke);function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Ze=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,l=e.updateDisplayName,u=e.onSelectRows,f=e.selected,p=e.status,y=e.setFilter,m=e.history,v=Object(r.useRef)(null),j=Object(r.useState)(),b=ge()(j,2),g=b[0],E=b[1],O=Object(r.useState)(!1),_=ge()(O,2),I=_[0],S=_[1],T=Object(r.useState)({}),D=ge()(T,2),k=D[0],P=D[1],N=Object(r.useState)([]),A=ge()(N,2),R=A[0],C=A[1],x=Object(r.useState)(!1),L=ge()(x,2),H=L[0],F=L[1],Y=Object(c.useStore)(),G=function(){var e=je()(he.a.mark((function e(){var n,r,a,o,i,s;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Re();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(Xe({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(M.applyReducerHash)((c={},h()(c,w.GET_ENTITIES_FULFILLED,B),h()(c,l,K),h()(c,"".concat(w.REMOVE_ENTITY,"_FULFILLED"),q),h()(c,"SELECT_ENTITY",V),h()(c,"FILTER_SELECT",(function(e){return z(z({},e),{},{selected:{}})})),h()(c,"SET_INVENTORY_FILTER",W),c),U))))),p&&p.length>0&&y(Array.isArray(p)?p:[p],"staleFilter"),i=r(Y),s=i.InventoryTable,E((function(){return s}));case 11:case"end":return e.stop()}var c,l}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){C(e.filters);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams;return e.forEach((function(e){"staleFilter"in e&&e.staleFilter.forEach((function(e){return t.append("status",e)}))})),t}(e.filters).toString();m.push({search:t}),v&&v.current&&v.current.onRefreshData(e)};Object(r.useEffect)((function(){G()}),[]);var X=function(){return f?f.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(we.PageHeader,{className:"pf-m-light"},a.a.createElement(we.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(we.Main,null,a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},g&&a.a.createElement(g,fe()({store:Y,ref:v,hasCheckbox:!0,showTags:!0,onRefresh:J},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;S(!0),P({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){F(!0),P(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===X(),variant:"secondary",onClick:function(){P(Array.from(f.values())),S(!0)}}}]},bulkSelect:{count:X(),items:[{title:"Select none (0)",onClick:function(){u(-1,!1)}},Xe({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){u(0,!0)}}:{})],checked:Qe(s,f),onSelect:function(e){u(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(qe,{handleModalToggle:S,isModalOpen:I,currentSytem:k,onConfirm:function(){var e,t;Array.isArray(k)?(t=k.map((function(e){return e.id})),e=k.length>1?"".concat(k.length," systems"):k[0].display_name):(e=k.displayName,t=[k.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return J({filters:R})})),S(!1)}}),a.a.createElement(We.a,{title:"Edit name",isOpen:H,value:k.display_name,onCancel:function(){return F(!1)},onSubmit:function(e){l(k.id,e,v.current.onRefreshData),F(!1)}}))};Ze.contextTypes={store:ue.a.object},Ze.propTypes={rows:ue.a.arrayOf(ue.a.shape({id:ue.a.string,selected:ue.a.bool})),loaded:ue.a.bool,loadEntity:ue.a.func,clearNotifications:ue.a.func,deleteEntity:ue.a.func,addNotification:ue.a.func,updateDisplayName:ue.a.func,onSelectRows:ue.a.func,setFilter:ue.a.func,selected:ue.a.map,status:ue.a.oneOfType([ue.a.arrayOf(ue.a.string),ue.a.string]),history:ue.a.shape({push:ue.a.func})};var $e=Oe()(Object(c.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(Te())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})},deleteEntity:function(n,r,a){return e(t((o=n,i=r,{type:w.REMOVE_ENTITY,payload:Se.apiHostDeleteById(o),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(i," has been successfully removed."),dismissable:!0}},systems:o}}),a));var o,i},addNotification:function(t){return e(Object(p.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(function(e,t){return{type:w.UPDATE_DISPLAY_NAME,payload:Se.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}}(n,r),a))},onSelectRows:function(t,n){return e(function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}}(t,n))},setFilter:function(t,n){return e(function(e,t){return{type:"SET_INVENTORY_FILTER",payload:{filterKey:t,filterValue:e}}}(t,n))}}}))(Ze)),et=n(409),tt=n(410),nt=(n(913),n(914),n(34)),rt=n.n(nt);function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?at(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it=function(e){var t=e.entity,n=e.currentApp,o=e.clearNotifications,i=e.loadEntity,l=Object(r.useState)({}),u=ge()(l,2),f=u[0],p=u[1],y=Object(c.useStore)(),m=f.InventoryDetail,v=f.AppInfo,j=function(){var e=je()(he.a.mark((function e(){var t,n,r,a,s,c,l,u;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,Re();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,Object(d.getRegistry)().register(ot({},a(Object(M.applyReducerHash)(h()({},w.GET_ENTITY_FULFILLED,G),U)))),s=Z({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then((function(e){i(e.results[0].id),s()}))}}),c=n(y),l=c.InventoryDetailHead,u=c.AppInfo,A.SystemCvesStore&&Object(d.getRegistry)().register({SystemCvesStore:A.SystemCvesStore}),x.SystemAdvisoryListStore&&Object(d.getRegistry)().register({SystemAdvisoryListStore:x.SystemAdvisoryListStore}),p({InventoryDetail:l,AppInfo:u});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var b={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return a.a.createElement(r.Fragment,null,a.a.createElement(we.PageHeader,{className:rt()("pf-m-light ins-inventory-detail",b)},a.a.createElement(et.a,null,a.a.createElement(tt.a,null,a.a.createElement(s.Link,{to:lt.table},"Inventory")),a.a.createElement(tt.a,{isActive:!0},t?t.display_name:a.a.createElement(we.Skeleton,{size:we.SkeletonSize.xs}))),m&&a.a.createElement(m,{hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:!0})),a.a.createElement(we.Main,{className:rt()(b)},a.a.createElement(De.a,{gutter:"md"},a.a.createElement(ke.a,{span:12},v&&a.a.createElement(v,{showTags:!0})))))};it.contextTypes={store:ue.a.object},it.propTypes={history:ue.a.object,entity:ue.a.object,loadEntity:ue.a.func,clearNotifications:ue.a.func,currentApp:ue.a.string};var st=Oe()(Object(c.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}}),(function(e){return{loadEntity:function(t){return e(Te())},clearNotifications:function(){return e({type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"})}}}))(it)),ct=function(e){var t=e.component,n=e.rootClass,r=ye()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(P.d,fe()({},r,{component:t}))};ct.propTypes={component:ue.a.func,rootClass:ue.a.string};var lt={table:"/",detail:"/:inventoryId"};var ut=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/"),i=new URLSearchParams(location.search);return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(lt).some((function(e){return Object(P.j)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push(lt.table+location.search),a.a.createElement(P.g,null,a.a.createElement(ct,{exact:!0,path:lt.table,render:function(){return a.a.createElement($e,{status:i.getAll("status")})},rootClass:"inventory"}),a.a.createElement(ct,{path:lt.detail,component:st,rootClass:"inventory"}))};ut.propTypes={childProps:ue.a.shape({history:ue.a.shape({push:ue.a.func,location:ue.a.shape({search:ue.a.string})})})};var dt;n(915);function ft(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ce()(e);if(t){var a=ce()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return ie()(this,n)}}var pt=f()()(dt=function(e){ae()(n,e);var t=ft(n);function n(e){var r;return ee()(this,n),(r=t.call(this,e)).getRegistry().register(Q),r}return ne()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.NotificationsPortal,null),a.a.createElement(ut,{childProps:this.props}))}}]),n}(r.Component))||dt;pt.propTypes={history:ue.a.object};var yt=Oe()(Object(c.connect)()(pt));i.a.render(a.a.createElement(c.Provider,{store:function(){J=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[J.getMiddleware(),y.a,Object(p.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.BrowserRouter,{basename:Object(H.getBaseName)(window.location.pathname)},a.a.createElement(yt,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map