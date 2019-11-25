!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],S[a]&&l.push(S[a][0]),S[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return N.push.apply(N,s||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==S[o]&&(r=!1)}r&&(N.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===b&&T()}(e,t),r&&r(e,t)};var a,o=!0,i="9f40be8745b7710b9247",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:k,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,b=0,g={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},g={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},S)I(n);return"prepare"===f&&0===b&&0===j&&T(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function T(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return k(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var E;s=w(g);var O=!1,I=!1,T=!1,k="";switch((E=y[g]?u(s):{type:"disposed",moduleId:g}).chain&&(k="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),T=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],d(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));T&&(d(h,[E.moduleId]),j[s]=b)}var N,C=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&C.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete S[e]}(e)});for(var P,x,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var R={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(R);for(c[s]=R,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var L=D[o.children[a]];L&&((N=L.parents.indexOf(s))>=0&&L.parents.splice(N,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(x=p[s],a=0;a<x.length;a++)P=x[a],(N=o.children.indexOf(P))>=0&&o.children.splice(N,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var z=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){x=p[s];var U=[];for(r=0;r<x.length;r++)if(P=x[r],n=o.hot._acceptedDependencies[P]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:x[r],error:e}),t.ignoreErrored||z||(z=e)}}}for(r=0;r<C.length;r++){var F=C[r];s=F.module,l=[s];try{A(s)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||z||(z=n),z||(z=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||z||(z=e)}}return z?(m("fail"),Promise.reject(z)):(m("idle"),new Promise(function(e){e(h)}))}var D={},S={0:0},N=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(g[e]||I(e),0===b&&0===j&&T())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/beta/apps/inventory/",A.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],P=C.push.bind(C);C.push=t,C=C.slice();for(var x=0;x<C.length;x++)t(C[x]);var M=P;N.push([754,1]),n()}({262:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(459),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},266:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(459),""),t.i(n(753),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},458:function(e,t,n){var r=n(262);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(262,function(){var t=n(262);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},480:function(e,t){},659:function(e,t,n){var r={"./af":314,"./af.js":314,"./ar":315,"./ar-dz":316,"./ar-dz.js":316,"./ar-kw":317,"./ar-kw.js":317,"./ar-ly":318,"./ar-ly.js":318,"./ar-ma":319,"./ar-ma.js":319,"./ar-sa":320,"./ar-sa.js":320,"./ar-tn":321,"./ar-tn.js":321,"./ar.js":315,"./az":322,"./az.js":322,"./be":323,"./be.js":323,"./bg":324,"./bg.js":324,"./bm":325,"./bm.js":325,"./bn":326,"./bn.js":326,"./bo":327,"./bo.js":327,"./br":328,"./br.js":328,"./bs":329,"./bs.js":329,"./ca":330,"./ca.js":330,"./cs":331,"./cs.js":331,"./cv":332,"./cv.js":332,"./cy":333,"./cy.js":333,"./da":334,"./da.js":334,"./de":335,"./de-at":336,"./de-at.js":336,"./de-ch":337,"./de-ch.js":337,"./de.js":335,"./dv":338,"./dv.js":338,"./el":339,"./el.js":339,"./en-SG":340,"./en-SG.js":340,"./en-au":341,"./en-au.js":341,"./en-ca":342,"./en-ca.js":342,"./en-gb":343,"./en-gb.js":343,"./en-ie":344,"./en-ie.js":344,"./en-il":345,"./en-il.js":345,"./en-nz":346,"./en-nz.js":346,"./eo":347,"./eo.js":347,"./es":348,"./es-do":349,"./es-do.js":349,"./es-us":350,"./es-us.js":350,"./es.js":348,"./et":351,"./et.js":351,"./eu":352,"./eu.js":352,"./fa":353,"./fa.js":353,"./fi":354,"./fi.js":354,"./fo":355,"./fo.js":355,"./fr":356,"./fr-ca":357,"./fr-ca.js":357,"./fr-ch":358,"./fr-ch.js":358,"./fr.js":356,"./fy":359,"./fy.js":359,"./ga":360,"./ga.js":360,"./gd":361,"./gd.js":361,"./gl":362,"./gl.js":362,"./gom-latn":363,"./gom-latn.js":363,"./gu":364,"./gu.js":364,"./he":365,"./he.js":365,"./hi":366,"./hi.js":366,"./hr":367,"./hr.js":367,"./hu":368,"./hu.js":368,"./hy-am":369,"./hy-am.js":369,"./id":370,"./id.js":370,"./is":371,"./is.js":371,"./it":372,"./it-ch":373,"./it-ch.js":373,"./it.js":372,"./ja":374,"./ja.js":374,"./jv":375,"./jv.js":375,"./ka":376,"./ka.js":376,"./kk":377,"./kk.js":377,"./km":378,"./km.js":378,"./kn":379,"./kn.js":379,"./ko":380,"./ko.js":380,"./ku":381,"./ku.js":381,"./ky":382,"./ky.js":382,"./lb":383,"./lb.js":383,"./lo":384,"./lo.js":384,"./lt":385,"./lt.js":385,"./lv":386,"./lv.js":386,"./me":387,"./me.js":387,"./mi":388,"./mi.js":388,"./mk":389,"./mk.js":389,"./ml":390,"./ml.js":390,"./mn":391,"./mn.js":391,"./mr":392,"./mr.js":392,"./ms":393,"./ms-my":394,"./ms-my.js":394,"./ms.js":393,"./mt":395,"./mt.js":395,"./my":396,"./my.js":396,"./nb":397,"./nb.js":397,"./ne":398,"./ne.js":398,"./nl":399,"./nl-be":400,"./nl-be.js":400,"./nl.js":399,"./nn":401,"./nn.js":401,"./pa-in":402,"./pa-in.js":402,"./pl":403,"./pl.js":403,"./pt":404,"./pt-br":405,"./pt-br.js":405,"./pt.js":404,"./ro":406,"./ro.js":406,"./ru":407,"./ru.js":407,"./sd":408,"./sd.js":408,"./se":409,"./se.js":409,"./si":410,"./si.js":410,"./sk":411,"./sk.js":411,"./sl":412,"./sl.js":412,"./sq":413,"./sq.js":413,"./sr":414,"./sr-cyrl":415,"./sr-cyrl.js":415,"./sr.js":414,"./ss":416,"./ss.js":416,"./sv":417,"./sv.js":417,"./sw":418,"./sw.js":418,"./ta":419,"./ta.js":419,"./te":420,"./te.js":420,"./tet":421,"./tet.js":421,"./tg":422,"./tg.js":422,"./th":423,"./th.js":423,"./tl-ph":424,"./tl-ph.js":424,"./tlh":425,"./tlh.js":425,"./tr":426,"./tr.js":426,"./tzl":427,"./tzl.js":427,"./tzm":428,"./tzm-latn":429,"./tzm-latn.js":429,"./tzm.js":428,"./ug-cn":430,"./ug-cn.js":430,"./uk":431,"./uk.js":431,"./ur":432,"./ur.js":432,"./uz":433,"./uz-latn":434,"./uz-latn.js":434,"./uz.js":433,"./vi":435,"./vi.js":435,"./x-pseudo":436,"./x-pseudo.js":436,"./yo":437,"./yo.js":437,"./zh-cn":438,"./zh-cn.js":438,"./zh-hk":439,"./zh-hk.js":439,"./zh-tw":440,"./zh-tw.js":440};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=659},669:function(e,t){},699:function(e,t){},700:function(e,t){},701:function(e,t){},716:function(e,t){},731:function(e,t){},737:function(e,t){},752:function(e,t,n){var r=n(266);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(266,function(){var t=n(266);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},754:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(24),i=n.n(o),s=n(304),c=n(42),l=n(466),u=n.n(l),d=n(78),p=n.n(d),f=n(62),m=n(485),h=n(81),y=n.n(h),v=n(35),j=n.n(v),b=n(92),g=n.n(b),E=n(471),_=n.n(E),w=n(472),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],g()(O)),function(e){return e}),T=n(111),k=n(273),D=n(274),S=n.n(D),N=n(123),A=n.n(N),C=n(475),P=n.n(C),x=n(476),M=n.n(x),R=(n(723),n(486)),H=function(){return a.a.createElement(R.a,{locale:navigator.language},a.a.createElement(M.a,null))},L={loaded:!1,selected:new Map},z=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e,t){var n=t.payload;return j()({},e,{rows:Object(T.mergeArraysByKey)([e.rows,n.results]),entities:Object(T.mergeArraysByKey)([e.entities,n.results])})}function F(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:S.a},z(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},z(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},z(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:H}].filter(Boolean)})}function B(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach(function(e){return r.set(e.id,e)});else{var a=e.rows&&e.rows.find(function(e){return e.id===n.id});r.set(n.id,j()({},a||{},{id:n.id}))}else 0===n.id?e.rows.forEach(function(e){return r.delete(e.id)}):-1===n.id?r.clear():r.delete(n.id);return j()({},e,{selected:new Map(r)})}function Y(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach(function(e){return r.delete(e)}),j()({},e,{selected:new Map(r)})}function G(e,t){var n=t.payload;return j()({},e,{rows:Object(T.mergeArraysByKey)([e.rows,n.results.map(function(t){return j()({},t,{selected:e.selected&&e.selected.has(t.id)})})])})}var q,V={notifications:f.notifications,systemProfileStore:D.systemProfileStore},W=V;function J(e){var t=e.actionType,n=e.callback;return q.addNew({on:t,callback:n})}var K=n(150),X=n.n(K),Q=n(151),Z=n.n(Q),$=n(152),ee=n.n($),te=n(153),ne=n.n(te),re=n(154),ae=n.n(re),oe=n(1),ie=n.n(oe),se=n(155),ce=n.n(se),le=n(156),ue=n.n(le),de=n(141),pe=n(305),fe=n(463),me=n(72),he=n.n(me),ye=n(108),ve=n.n(ye),je=n(113),be=n.n(je),ge=(n(458),n(109)),Ee=n.n(ge),_e=n(59),we="/api/inventory/v1",Oe=n(481),Ie=n.n(Oe),Te=new(n(482).HostsApi)(void 0,we,Ie.a);var ke=function(e,t){return{type:I.REMOVE_ENTITY,payload:Te.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},De=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Se=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Ne=function(e,t){return{type:I.UPDATE_DISPLAY_NAME,payload:Te.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},Ae=function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}},Ce=n(286),Pe=n(287),xe=n(66),Me=n(41),Re=n(12),He=n(99),Le=function(){return insights.loadInventory({react:a.a,reactRouterDom:xe,reactCore:Me,reactIcons:Re,pfReactTable:He})},ze=n(284),Ue=n(290),Fe=n(291),Be=n(292),Ye=n(293),Ge=n(462),qe=n(288),Ve=n(289),We=n(268),Je=n(172),Ke=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(ze.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Ue.a,{gutter:"md"},a.a.createElement(Fe.a,null,a.a.createElement(Je.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Fe.a,{isFilled:!0},a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Ye.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Ye.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Ye.a,null,a.a.createElement(Ge.a,null,"insights-client --unregister"))))),a.a.createElement(qe.a,{gutter:"md"},a.a.createElement(Ve.a,null,a.a.createElement(We.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(We.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Xe=ie.a.shape({id:ie.a.string,displayName:ie.a.string});Ke.propTypes={isModalOpen:ie.a.bool,currentSytem:ie.a.oneOfType([Xe,ie.a.arrayOf(Xe)]),handleModalToggle:ie.a.func,onConfirm:ie.a.func},Ke.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Qe=Ke,Ze=n(483),$e=n.n(Ze),et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every(function(e){var n=e.id;return t&&t.has(n)})?e.length>0:e.some(function(e){var n=e.id;return t&&t.has(n)})&&null},tt=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,c=e.updateDisplayName,l=e.onSelectRows,u=e.selected,p=Object(r.useRef)(null),f=Object(r.useState)(),m=be()(f,2),h=m[0],v=m[1],b=Object(r.useState)(!1),g=be()(b,2),E=g[0],_=g[1],w=Object(r.useState)({}),O=be()(w,2),T=O[0],D=O[1],S=Object(r.useState)([]),N=be()(S,2),A=N[0],C=N[1],P=Object(r.useState)(!1),x=be()(P,2),M=x[0],R=x[1],H=function(){var e=ve()(he.a.mark(function e(){var n,r,a,o,i,s;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Le();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(d.getRegistry)().register(j()({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(k.applyReducerHash)((c={},y()(c,I.GET_ENTITIES_FULFILLED,U),y()(c,l,G),y()(c,"".concat(I.REMOVE_ENTITY,"_FULFILLED"),Y),y()(c,"SELECT_ENTITY",B),y()(c,"FILTER_SELECT",function(e){return j()({},e,{selected:{}})}),c),L))))),i=r(),s=i.InventoryTable,v(function(){return s});case 10:case"end":return e.stop()}var c,l},e,this)}));return function(){return e.apply(this,arguments)}}(),z=function(e){C(e.filters),p&&p.current&&p.current.onRefreshData(e)};Object(r.useEffect)(function(){H()},[]);var F=function(){return u?u.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(_e.PageHeader,{className:"pf-m-light"},a.a.createElement(_e.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(_e.Main,null,a.a.createElement(Ce.a,{gutter:"md"},a.a.createElement(Pe.a,{span:12},h&&a.a.createElement(h,ce()({ref:p,hasCheckbox:!0,onRefresh:z},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;_(!0),D({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){R(!0),D(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===F(),variant:"danger",onClick:function(){D(Array.from(u.values())),_(!0)}}}]},bulkSelect:{count:F(),items:[{title:"Select none (0)",onClick:function(){l(-1,!1)}},j()({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){l(0,!0)}}:{})],checked:et(s,u),onSelect:function(e){l(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(Qe,{handleModalToggle:_,isModalOpen:E,currentSytem:T,onConfirm:function(){var e,t;Array.isArray(T)?(t=T.map(function(e){return e.id}),e=T.length>1?"".concat(T.length," systems"):T[0].display_name):(e=T.displayName,t=[T.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return z({filters:A})}),_(!1)}}),a.a.createElement($e.a,{title:"Edit name",isOpen:M,value:T.display_name,onCancel:function(){return R(!1)},onSubmit:function(e){c(T.id,e,p.current.onRefreshData),R(!1)}}))};tt.contextTypes={store:ie.a.object},tt.propTypes={rows:ie.a.arrayOf(ie.a.shape({id:ie.a.string,selected:ie.a.bool})),loaded:ie.a.bool,loadEntity:ie.a.func,clearNotifications:ie.a.func,deleteEntity:ie.a.func,addNotification:ie.a.func,updateDisplayName:ie.a.func,onSelectRows:ie.a.func,selected:ie.a.map};var nt,rt=Ee()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}},function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(De(t))},clearNotifications:function(){return e(Se())},deleteEntity:function(n,r,a){return e(t(ke(n,r),a))},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(Ne(n,r),a))},onSelectRows:function(t,n){return e(Ae(t,n))}}})(tt)),at=n(120),ot=n(281),it=n(282),st=(n(749),n(750),n(751),p()()(nt=function(e){function t(e,n){var r;return X()(this,t),(r=ee()(this,ne()(t).call(this,e,n))).loadInventory(),r.state={},r}return ae()(t,e),Z()(t,[{key:"loadInventory",value:function(){var e=ve()(he.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Le();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(k.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,F),L)))),o=J({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,N.SystemCvesStore&&this.getRegistry().register({SystemCvesStore:N.SystemCvesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(_e.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(ot.a,null,a.a.createElement(it.a,null,a.a.createElement(at.a,{to:ut.table},"Inventory")),a.a.createElement(it.a,{isActive:!0},i?i.display_name:a.a.createElement(_e.Skeleton,{size:_e.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(_e.Main,{className:c},a.a.createElement(Ce.a,{gutter:"md"},a.a.createElement(Pe.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||nt);st.contextTypes={store:ie.a.object},st.propTypes={history:ie.a.object,entity:ie.a.object,loadEntity:ie.a.func,clearNotifications:ie.a.func,currentApp:ie.a.string};var ct=Ee()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(De(t))},clearNotifications:function(){return e(Se())}}})(st)),lt=function(e){var t=e.component,n=e.rootClass,r=ue()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(de.a,ce()({},r,{component:t}))};lt.propTypes={component:ie.a.func,rootClass:ie.a.string};var ut={table:"/",detail:"/:inventoryId"};var dt=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(ut).some(function(e){return Object(pe.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(ut.table),a.a.createElement(fe.a,null,a.a.createElement(lt,{exact:!0,path:ut.table,component:rt,rootClass:"inventory"}),a.a.createElement(lt,{path:ut.detail,component:ct,rootClass:"inventory"}))};dt.propTypes={childProps:ie.a.shape({history:ie.a.shape({push:ie.a.func})})};n(752);var pt,ft=p()()(pt=function(e){function t(e){var n;return X()(this,t),(n=ee()(this,ne()(t).call(this,e))).getRegistry().register(W),n}return ae()(t,e),Z()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(dt,{childProps:this.props}))}}]),t}(r.Component))||pt;ft.propTypes={history:ie.a.object};var mt=Ee()(Object(c.connect)()(ft));i.a.render(a.a.createElement(c.Provider,{store:function(){q=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(d.getRegistry)({},[q.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(T.getBaseName)(window.location.pathname)},a.a.createElement(mt,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map