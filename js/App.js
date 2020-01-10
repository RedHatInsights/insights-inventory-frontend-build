!function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],c=0,l=[];c<o.length;c++)a=o[c],S[a]&&l.push(S[a][0]),S[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return N.push.apply(N,s||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==S[o]&&(r=!1)}r&&(N.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--j&&0===g&&T()}(e,t),r&&r(e,t)};var a,o=!0,i="2e0d2d89e4d608b3a71f",s=1e4,c={},l=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:k,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return a=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,y,v,j=0,g=0,b={},E={},_={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},b={},_=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},S)I(n);return"prepare"===f&&0===g&&0===j&&T(),t});var t}function I(e){_[e]?(E[e]=!0,j++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function T(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return k(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,s;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((o=D[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],d=D[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),u(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],j={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var E;s=w(b);var O=!1,I=!1,T=!1,k="";switch((E=y[b]?d(s):{type:"disposed",moduleId:b}).chain&&(k="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(E),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),T=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return m("abort"),Promise.reject(O);if(I)for(s in j[s]=y[s],u(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],E.outdatedDependencies[s]));T&&(u(h,[E.moduleId]),j[s]=g)}var N,C=[];for(r=0;r<h.length;r++)s=h[r],D[s]&&D[s].hot._selfAccepted&&C.push({module:s,errorHandler:D[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete S[e]}(e)});for(var P,x,M=h.slice();M.length>0;)if(s=M.pop(),o=D[s]){var R={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(R);for(c[s]=R,o.hot.active=!1,delete D[s],delete p[s],a=0;a<o.children.length;a++){var L=D[o.children[a]];L&&((N=L.parents.indexOf(s))>=0&&L.parents.splice(N,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s]))for(x=p[s],a=0;a<x.length;a++)P=x[a],(N=o.children.indexOf(P))>=0&&o.children.splice(N,1);for(s in m("apply"),i=v,j)Object.prototype.hasOwnProperty.call(j,s)&&(e[s]=j[s]);var z=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(o=D[s])){x=p[s];var U=[];for(r=0;r<x.length;r++)if(P=x[r],n=o.hot._acceptedDependencies[P]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:x[r],error:e}),t.ignoreErrored||z||(z=e)}}}for(r=0;r<C.length;r++){var F=C[r];s=F.module,l=[s];try{A(s)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||z||(z=n),z||(z=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||z||(z=e)}}return z?(m("fail"),Promise.reject(z)):(m("idle"),new Promise(function(e){e(h)}))}var D={},S={0:0},N=[];function A(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=l,l=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return A;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||I(e),0===g&&0===j&&T())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.m=e,A.c=D,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/beta/apps/inventory/",A.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],P=C.push.bind(C);C.push=t,C=C.slice();for(var x=0;x<C.length;x++)t(C[x]);var M=P;N.push([752,1]),n()}({257:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(455),""),t.push([e.i,'button:focus{outline:none}.buttons button+button{margin-left:15px}.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]){margin-top:-4px}.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton{width:75px;width:5.35714rem}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--pf-c-tabs__item--BorderColor)}.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before{border:solid var(--pf-c-tabs__item--BorderColor);border-width:var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth)}svg.ins-m-alert{fill:var(--pf-global--warning-color--100)}.ins-c-inventory__table--remove .pf-c-clipboard-copy{margin:0 3rem}.ins-c-inventory__table--remove .pf-l-split:first-child{margin-bottom:2rem}\n',""])},261:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(455),""),t.i(n(751),""),t.push([e.i,"button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""])},454:function(e,t,n){var r=n(257);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(257,function(){var t=n(257);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},476:function(e,t){},657:function(e,t,n){var r={"./af":310,"./af.js":310,"./ar":311,"./ar-dz":312,"./ar-dz.js":312,"./ar-kw":313,"./ar-kw.js":313,"./ar-ly":314,"./ar-ly.js":314,"./ar-ma":315,"./ar-ma.js":315,"./ar-sa":316,"./ar-sa.js":316,"./ar-tn":317,"./ar-tn.js":317,"./ar.js":311,"./az":318,"./az.js":318,"./be":319,"./be.js":319,"./bg":320,"./bg.js":320,"./bm":321,"./bm.js":321,"./bn":322,"./bn.js":322,"./bo":323,"./bo.js":323,"./br":324,"./br.js":324,"./bs":325,"./bs.js":325,"./ca":326,"./ca.js":326,"./cs":327,"./cs.js":327,"./cv":328,"./cv.js":328,"./cy":329,"./cy.js":329,"./da":330,"./da.js":330,"./de":331,"./de-at":332,"./de-at.js":332,"./de-ch":333,"./de-ch.js":333,"./de.js":331,"./dv":334,"./dv.js":334,"./el":335,"./el.js":335,"./en-SG":336,"./en-SG.js":336,"./en-au":337,"./en-au.js":337,"./en-ca":338,"./en-ca.js":338,"./en-gb":339,"./en-gb.js":339,"./en-ie":340,"./en-ie.js":340,"./en-il":341,"./en-il.js":341,"./en-nz":342,"./en-nz.js":342,"./eo":343,"./eo.js":343,"./es":344,"./es-do":345,"./es-do.js":345,"./es-us":346,"./es-us.js":346,"./es.js":344,"./et":347,"./et.js":347,"./eu":348,"./eu.js":348,"./fa":349,"./fa.js":349,"./fi":350,"./fi.js":350,"./fo":351,"./fo.js":351,"./fr":352,"./fr-ca":353,"./fr-ca.js":353,"./fr-ch":354,"./fr-ch.js":354,"./fr.js":352,"./fy":355,"./fy.js":355,"./ga":356,"./ga.js":356,"./gd":357,"./gd.js":357,"./gl":358,"./gl.js":358,"./gom-latn":359,"./gom-latn.js":359,"./gu":360,"./gu.js":360,"./he":361,"./he.js":361,"./hi":362,"./hi.js":362,"./hr":363,"./hr.js":363,"./hu":364,"./hu.js":364,"./hy-am":365,"./hy-am.js":365,"./id":366,"./id.js":366,"./is":367,"./is.js":367,"./it":368,"./it-ch":369,"./it-ch.js":369,"./it.js":368,"./ja":370,"./ja.js":370,"./jv":371,"./jv.js":371,"./ka":372,"./ka.js":372,"./kk":373,"./kk.js":373,"./km":374,"./km.js":374,"./kn":375,"./kn.js":375,"./ko":376,"./ko.js":376,"./ku":377,"./ku.js":377,"./ky":378,"./ky.js":378,"./lb":379,"./lb.js":379,"./lo":380,"./lo.js":380,"./lt":381,"./lt.js":381,"./lv":382,"./lv.js":382,"./me":383,"./me.js":383,"./mi":384,"./mi.js":384,"./mk":385,"./mk.js":385,"./ml":386,"./ml.js":386,"./mn":387,"./mn.js":387,"./mr":388,"./mr.js":388,"./ms":389,"./ms-my":390,"./ms-my.js":390,"./ms.js":389,"./mt":391,"./mt.js":391,"./my":392,"./my.js":392,"./nb":393,"./nb.js":393,"./ne":394,"./ne.js":394,"./nl":395,"./nl-be":396,"./nl-be.js":396,"./nl.js":395,"./nn":397,"./nn.js":397,"./pa-in":398,"./pa-in.js":398,"./pl":399,"./pl.js":399,"./pt":400,"./pt-br":401,"./pt-br.js":401,"./pt.js":400,"./ro":402,"./ro.js":402,"./ru":403,"./ru.js":403,"./sd":404,"./sd.js":404,"./se":405,"./se.js":405,"./si":406,"./si.js":406,"./sk":407,"./sk.js":407,"./sl":408,"./sl.js":408,"./sq":409,"./sq.js":409,"./sr":410,"./sr-cyrl":411,"./sr-cyrl.js":411,"./sr.js":410,"./ss":412,"./ss.js":412,"./sv":413,"./sv.js":413,"./sw":414,"./sw.js":414,"./ta":415,"./ta.js":415,"./te":416,"./te.js":416,"./tet":417,"./tet.js":417,"./tg":418,"./tg.js":418,"./th":419,"./th.js":419,"./tl-ph":420,"./tl-ph.js":420,"./tlh":421,"./tlh.js":421,"./tr":422,"./tr.js":422,"./tzl":423,"./tzl.js":423,"./tzm":424,"./tzm-latn":425,"./tzm-latn.js":425,"./tzm.js":424,"./ug-cn":426,"./ug-cn.js":426,"./uk":427,"./uk.js":427,"./ur":428,"./ur.js":428,"./uz":429,"./uz-latn":430,"./uz-latn.js":430,"./uz.js":429,"./vi":431,"./vi.js":431,"./x-pseudo":432,"./x-pseudo.js":432,"./yo":433,"./yo.js":433,"./zh-cn":434,"./zh-cn.js":434,"./zh-hk":435,"./zh-hk.js":435,"./zh-tw":436,"./zh-tw.js":436};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=657},667:function(e,t){},697:function(e,t){},698:function(e,t){},699:function(e,t){},714:function(e,t){},729:function(e,t){},735:function(e,t){},750:function(e,t,n){var r=n(261);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(9)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(261,function(){var t=n(261);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},752:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(24),i=n.n(o),s=n(300),c=n(44),l=n(477),d=n.n(l),u=n(79),p=n.n(u),f=n(62),m=n(483),h=n(81),y=n.n(h),v=n(36),j=n.n(v),g=n(92),b=n.n(g),E=n(466),_=n.n(E),w=n(467),O=n.n(w)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),I=_()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],b()(O)),function(e){return e}),T=n(111),k=n(270),D=n(268),S=n.n(D),N=n(123),A=n.n(N),C=n(471),P=n.n(C),x=n(472),M=n.n(x),R=(n(721),n(482)),H=function(){return a.a.createElement(R.a,{locale:navigator.language},a.a.createElement(M.a,null))},L={loaded:!1,selected:new Map},z=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function U(e,t){var n=t.payload;return j()({},e,{rows:Object(T.mergeArraysByKey)([e.rows,n.results]),entities:Object(T.mergeArraysByKey)([e.entities,n.results])})}function F(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return j()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:S.a},z(t&&t.insights)&&{title:"Insights",name:"insights",component:P.a},z(t&&t.smart_management)&&{title:"Vulnerability",name:"vulnerabilities",component:A.a},z(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:H}].filter(Boolean)})}function B(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach(function(e){return r.set(e.id,e)});else{var a=e.rows&&e.rows.find(function(e){return e.id===n.id});r.set(n.id,j()({},a||{},{id:n.id}))}else 0===n.id?e.rows.forEach(function(e){return r.delete(e.id)}):-1===n.id?r.clear():r.delete(n.id);return j()({},e,{selected:new Map(r)})}function Y(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach(function(e){return r.delete(e)}),j()({},e,{selected:new Map(r)})}function G(e,t){var n=t.payload;return j()({},e,{rows:Object(T.mergeArraysByKey)([e.rows,n.results.map(function(t){return j()({},t,{selected:e.selected&&e.selected.has(t.id)})})])})}var q,V={notifications:f.notifications,systemProfileStore:D.systemProfileStore},W=V;function J(e){var t=e.actionType,n=e.callback;return q.addNew({on:t,callback:n})}var K=n(148),X=n.n(K),Q=n(149),Z=n.n(Q),$=n(150),ee=n.n($),te=n(151),ne=n.n(te),re=n(152),ae=n.n(re),oe=n(1),ie=n.n(oe),se=n(153),ce=n.n(se),le=n(154),de=n.n(le),ue=n(141),pe=n(301),fe=n(459),me=n(72),he=n.n(me),ye=n(108),ve=n.n(ye),je=n(113),ge=n.n(je),be=(n(454),n(109)),Ee=n.n(be),_e=n(59),we="/api/inventory/v1",Oe=n(479),Ie=n.n(Oe),Te=new(n(478).HostsApi)(void 0,we,Ie.a);var ke=function(e,t){return{type:I.REMOVE_ENTITY,payload:Te.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},De=function(){return{type:I.GET_ENTITY,payload:insights.chrome.auth.getUser()}},Se=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Ne=function(e,t){return{type:I.UPDATE_DISPLAY_NAME,payload:Te.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},Ae=function(e,t){return{type:"SELECT_ENTITY",payload:{id:e,selected:t}}},Ce=n(282),Pe=n(283),xe=n(66),Me=n(43),Re=n(12),He=n(99),Le=function(){return insights.loadInventory({react:a.a,reactRouterDom:xe,reactCore:Me,reactIcons:Re,pfReactTable:He})},ze=n(280),Ue=n(286),Fe=n(287),Be=n(288),Ye=n(289),Ge=n(458),qe=n(284),Ve=n(285),We=n(263),Je=n(171),Ke=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,o=e.currentSytem,i=e.onConfirm,s="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),s=1===o.length?s:"systems"):t=o.displayName,a.a.createElement(ze.a,{isSmall:!0,title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},a.a.createElement(Ue.a,{gutter:"md"},a.a.createElement(Fe.a,null,a.a.createElement(Je.b,{size:"xl",className:"ins-m-alert"})),a.a.createElement(Fe.a,{isFilled:!0},a.a.createElement(Be.a,{gutter:"md"},a.a.createElement(Ye.a,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",s," to add it back to your inventory."),a.a.createElement(Ye.a,null,"To disable the daily upload for this ",s,", use the following command:"),a.a.createElement(Ye.a,null,a.a.createElement(Ge.a,null,"insights-client --unregister"))))),a.a.createElement(qe.a,{gutter:"md"},a.a.createElement(Ve.a,null,a.a.createElement(We.a,{variant:"danger",onClick:i},"Remove"),a.a.createElement(We.a,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},Xe=ie.a.shape({id:ie.a.string,displayName:ie.a.string});Ke.propTypes={isModalOpen:ie.a.bool,currentSytem:ie.a.oneOfType([Xe,ie.a.arrayOf(Xe)]),handleModalToggle:ie.a.func,onConfirm:ie.a.func},Ke.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};var Qe=Ke,Ze=n(480),$e=n.n(Ze),et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every(function(e){var n=e.id;return t&&t.has(n)})?e.length>0:e.some(function(e){var n=e.id;return t&&t.has(n)})&&null},tt=function(e){var t=e.clearNotifications,n=e.deleteEntity,o=e.addNotification,i=e.loaded,s=e.rows,c=e.updateDisplayName,l=e.onSelectRows,d=e.selected,p=Object(r.useRef)(null),f=Object(r.useState)(),m=ge()(f,2),h=m[0],v=m[1],g=Object(r.useState)(!1),b=ge()(g,2),E=b[0],_=b[1],w=Object(r.useState)({}),O=ge()(w,2),T=O[0],D=O[1],S=Object(r.useState)([]),N=ge()(S,2),A=N[0],C=N[1],P=Object(r.useState)(!1),x=ge()(P,2),M=x[0],R=x[1],H=function(){var e=ve()(he.a.mark(function e(){var n,r,a,o,i,s;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Le();case 3:n=e.sent,r=n.inventoryConnector,a=n.mergeWithEntities,o=n.INVENTORY_ACTION_TYPES,Object(u.getRegistry)().register(j()({},a((c=void 0,l=void 0,l=o.LOAD_ENTITIES_FULFILLED,Object(k.applyReducerHash)((c={},y()(c,I.GET_ENTITIES_FULFILLED,U),y()(c,l,G),y()(c,"".concat(I.REMOVE_ENTITY,"_FULFILLED"),Y),y()(c,"SELECT_ENTITY",B),y()(c,"FILTER_SELECT",function(e){return j()({},e,{selected:{}})}),c),L))))),i=r(),s=i.InventoryTable,v(function(){return s});case 10:case"end":return e.stop()}var c,l},e,this)}));return function(){return e.apply(this,arguments)}}(),z=function(e){C(e.filters),p&&p.current&&p.current.onRefreshData(e)};Object(r.useEffect)(function(){H()},[]);var F=function(){return d?d.size:0};return a.a.createElement(a.a.Fragment,null,a.a.createElement(_e.PageHeader,{className:"pf-m-light"},a.a.createElement(_e.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(_e.Main,null,a.a.createElement(Ce.a,{gutter:"md"},a.a.createElement(Pe.a,{span:12},h&&a.a.createElement(h,ce()({ref:p,hasCheckbox:!0,onRefresh:z},i&&s&&s.length>0&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;_(!0),D({id:r,displayName:a})}},{title:"Edit",onClick:function(e,t,n){R(!0),D(n)}}]},{actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===F(),variant:"danger",onClick:function(){D(Array.from(d.values())),_(!0)}}}]},bulkSelect:{count:F(),items:[{title:"Select none (0)",onClick:function(){l(-1,!1)}},j()({},i&&s&&s.length>0?{title:"Select page (".concat(s.length,")"),onClick:function(){l(0,!0)}}:{})],checked:et(s,d),onSelect:function(e){l(0,e)}},tableProps:{canSelectAll:!1}}))))),a.a.createElement(Qe,{handleModalToggle:_,isModalOpen:E,currentSytem:T,onConfirm:function(){var e,t;Array.isArray(T)?(t=T.map(function(e){return e.id}),e=T.length>1?"".concat(T.length," systems"):T[0].display_name):(e=T.displayName,t=[T.id]),o({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,function(){return z({filters:A})}),_(!1)}}),a.a.createElement($e.a,{title:"Edit name",isOpen:M,value:T.display_name,onCancel:function(){return R(!1)},onSubmit:function(e){c(T.id,e,p.current.onRefreshData),R(!1)}}))};tt.contextTypes={store:ie.a.object},tt.propTypes={rows:ie.a.arrayOf(ie.a.shape({id:ie.a.string,selected:ie.a.bool})),loaded:ie.a.bool,loadEntity:ie.a.func,clearNotifications:ie.a.func,deleteEntity:ie.a.func,addNotification:ie.a.func,updateDisplayName:ie.a.func,onSelectRows:ie.a.func,selected:ie.a.map};var nt,rt=Ee()(Object(c.connect)(function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}},function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(De(t))},clearNotifications:function(){return e(Se())},deleteEntity:function(n,r,a){return e(t(ke(n,r),a))},addNotification:function(t){return e(Object(f.addNotification)(t))},updateDisplayName:function(n,r,a){return e(t(Ne(n,r),a))},onSelectRows:function(t,n){return e(Ae(t,n))}}})(tt)),at=n(120),ot=n(277),it=n(278),st=(n(747),n(748),n(749),p()()(nt=function(e){function t(e,n){var r;return X()(this,t),(r=ee()(this,ne()(t).call(this,e,n))).loadInventory(),r.state={},r}return ae()(t,e),Z()(t,[{key:"loadInventory",value:function(){var e=ve()(he.a.mark(function e(){var t,n,r,a,o,i,s,c,l=this;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Le();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(j()({},a(Object(k.applyReducerHash)(y()({},I.GET_ENTITY_FULFILLED,F),L)))),o=J({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),o()})}}),i=n(),s=i.InventoryDetailHead,c=i.AppInfo,N.SystemCvesStore&&this.getRegistry().register({SystemCvesStore:N.SystemCvesStore}),this.setState({InventoryDetail:s,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,o=this.props,i=o.entity,s=o.currentApp,c="".concat(s&&"general_information"===s?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(_e.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(ot.a,null,a.a.createElement(it.a,null,a.a.createElement(at.a,{to:dt.table},"Inventory")),a.a.createElement(it.a,{isActive:!0},i?i.display_name:a.a.createElement(_e.Skeleton,{size:_e.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(_e.Main,{className:c},a.a.createElement(Ce.a,{gutter:"md"},a.a.createElement(Pe.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||nt);st.contextTypes={store:ie.a.object},st.propTypes={history:ie.a.object,entity:ie.a.object,loadEntity:ie.a.func,clearNotifications:ie.a.func,currentApp:ie.a.string};var ct=Ee()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(De(t))},clearNotifications:function(){return e(Se())}}})(st)),lt=function(e){var t=e.component,n=e.rootClass,r=de()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(ue.a,ce()({},r,{component:t}))};lt.propTypes={component:ie.a.func,rootClass:ie.a.string};var dt={table:"/",detail:"/:inventoryId"};var ut=function(e){var t,n,r=e.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),t=o[0],n=o[1],Object.values(dt).some(function(e){return Object(pe.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(dt.table),a.a.createElement(fe.a,null,a.a.createElement(lt,{exact:!0,path:dt.table,component:rt,rootClass:"inventory"}),a.a.createElement(lt,{path:dt.detail,component:ct,rootClass:"inventory"}))};ut.propTypes={childProps:ie.a.shape({history:ie.a.shape({push:ie.a.func})})};n(750);var pt,ft=p()()(pt=function(e){function t(e){var n;return X()(this,t),(n=ee()(this,ne()(t).call(this,e))).getRegistry().register(W),n}return ae()(t,e),Z()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(ut,{childProps:this.props}))}}]),t}(r.Component))||pt;ft.propTypes={history:ie.a.object};var mt=Ee()(Object(c.connect)()(ft));i.a.render(a.a.createElement(c.Provider,{store:function(){q=new d.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(u.getRegistry)({},[q.getMiddleware(),Object(m.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(s.a,{basename:Object(T.getBaseName)(window.location.pathname)},a.a.createElement(mt,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map