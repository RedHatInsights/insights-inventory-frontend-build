(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7589,1931],{16319:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ScalprumComponent:()=>S,ScalprumContext:()=>O,ScalprumProvider:()=>I,default:()=>I,useModule:()=>L,useScalprum:()=>P});var r=n(96985),o=n.n(r),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(e,t,n){void 0===n&&(n=!1);var r=window.__scalprum__.factories[e];if(r)if(n||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[e];else{var o=r.modules[t];if(t)return o}},s=function(e,t){window.__scalprum__.pendingInjections[e]=t},l=function(e){var t=e.appsConfig,n=e.api,r=e.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:t,pendingInjections:{},factories:{},scalprumOptions:o},n)},f=function(e,t,n){void 0===n&&(n=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=t,r.id=e,n?r.onload=function(){o([e,r])}:s(e,(function(){return o([e,r])})),r.onerror=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];console.log(t),n?i([t,r]):s(e,(function(){return i([t,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function p(e,t){return a(this,void 0,void 0,(function(){var r,o,a,u;return c(this,(function(c){switch(c.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===t||0===t.length)throw new Error("Module can't be undefined or empty");return t.startsWith("./")||console.warn("Your module "+t+" doesn't start with './' this indicates an error"),[4,n.I("default")];case 1:return c.sent(),[4,(r=window[e]).init(n.S.default)];case 2:return c.sent(),[4,window[e].get(t)];case 3:return o=c.sent(),window.__scalprum__.factories[e]||(window.__scalprum__.factories[e]={}),a={init:r.init,modules:i(i({},window.__scalprum__.factories[e].modules),(u={},u[t]=o(),u)),expiration:new Date},window.__scalprum__.factories[e]=a,[2,o()]}}))}))}var d=n(18446),h=n.n(d),y=function(){return o().createElement("span",null,"Error while loading component!")};function m(e,t,n){var r=this;return void 0===n&&(n=y),function(){return o=r,i=void 0,c=function(){var r,o;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,p(e,t)];case 1:return r=i.sent(),[3,3];case 2:return o=i.sent(),console.error(o),r={default:n},[3,3];case 3:return[2,r]}}))},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{u(c.next(e))}catch(e){t(e)}}function r(e){try{u(c.throw(e))}catch(e){t(e)}}function u(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(n,r)}u((c=c.apply(o,i||[])).next())}));var o,i,a,c}}var v,E=(v=function(e,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},v(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},_=function(){return o().createElement("span",null,"Error while loading component!")},g=function(e){var t,n=e.fallback,i=void 0===n?"loading":n,s=e.appName,l=e.scope,p=e.module,d=e.ErrorComponent,h=e.processor,y=e.innerRef,v=e.skipCache,E=void 0!==v&&v,_=b(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),g=(t=s,window.__scalprum__.appsConfig[t]),T=g.scriptLocation,S=g.manifestLocation,O=(0,r.useState)(void 0),C=O[0],I=O[1],P=u(l,p,E),A=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(P)try{A.current&&I((function(){return P.default}))}catch(e){A.current&&I((function(){return d}))}else T?f(s,T).then((function(){A.current&&I((function(){return o().lazy(m(l,p,d))}))})).catch((function(){A.current&&I((function(){return d}))})):S&&function(e,t,n,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(e){var t=e[0];return!n||t===n})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return f(t,e,!0)})))]}}))}))}(S,s,l,h).then((function(){A.current&&I((function(){return o().lazy(m(l,p,d))}))})).catch((function(){A.current&&I((function(){return d}))}));return function(){A.current=!1}}),[s,l,P]),o().createElement(r.Suspense,{fallback:i},C?o().createElement(C,w({ref:y},_)):i)},T=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n}return E(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.shouldComponentUpdate=function(e,t){return this.state.hasError!==t.hasError||!h()(e,this.props)||!h()(t,this.state)},t.prototype.componentDidCatch=function(e,t){console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:t})},t.prototype.render=function(){var e=this.props,t=e.ErrorComponent,n=void 0===t?o().createElement(_,null):t,i=b(e,["ErrorComponent"]);return this.state.hasError?o().cloneElement(n,w({},this.state)):o().createElement(g,w({},i,{ErrorComponent:function(){return o().createElement(r.Fragment,null,n)}}))},t.defaultProps={ErrorComponent:o().createElement(_,null)},t}(o().Component),S=o().forwardRef((function(e,t){return o().createElement(T,w({},e,{innerRef:t}))})),O=(0,r.createContext)({initialized:!1,config:{},api:void 0}),C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)};function I(e){var t=e.config,n=e.children,i=e.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],s=c[1];return(0,r.useEffect)((function(){"object"==typeof t&&(l({appsConfig:t,api:i}),s((function(e){return C(C({},e),{initialized:!0,config:t})})),a.current=!0),"function"==typeof t&&Promise.resolve(t()).then((function(e){s((function(t){return C(C({},t),{initialized:!0,config:e})})),l({appsConfig:e,api:i}),a.current=!0}))}),[t]),(0,r.useEffect)((function(){a.current&&s((function(e){return C(C({},e),{api:i})}))}),[i]),o().createElement(O.Provider,{value:u},n)}function P(e){var t=(0,r.useContext)(O);return"function"==typeof e?e(t):t}var A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)};function L(e,t,n,o){var i=this;void 0===o&&(o={});var a=A({skipCache:!1},o),c=(0,r.useState)(n),s=c[0],l=c[1],f=(0,r.useCallback)((function(){return n=i,r=void 0,c=function(){var n,r;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:if(n=u(e,t,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,p(e,t)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+t+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=n,o.label=6;case 6:return l((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{u(c.next(e))}catch(e){t(e)}}function a(e){try{u(c.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}u((c=c.apply(n,r||[])).next())}));var n,r,o,c}),[e,t]);return(0,r.useEffect)((function(){f()}),[e,t]),s}},94778:(e,t,n)=>{"use strict";n.d(t,{gb:()=>i.gb,Oj:()=>i.Oj,k0:()=>i.k0,Fo:()=>i.Fo,K5:()=>a.K5,u3:()=>a.u3,Xe:()=>a.Xe,nE:()=>a.nE,C8:()=>a.C8,CP:()=>a.CP,fg:()=>a.fg,il:()=>a.il,A_:()=>a.A_,me:()=>a.me,CL:()=>a.CL,HD:()=>a.HD,wb:()=>a.wb,Ar:()=>a.Ar,jB:()=>a.jB,Ks:()=>c,Tv:()=>u,L1:()=>s,$Y:()=>l,Jr:()=>f,eR:()=>p,Uw:()=>d});var r=n(59086),o=n(63599),i=n(87637),a=n(8622),c=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:o.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},u=function(e){return{type:r.uW,payload:{filtersList:e}}},s=function(){return{type:r.wt}},l=function(e,t){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:o.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},f=function(e,t){return{type:r.fT,payload:{page:e,perPage:t}}},p=function(e){return{type:r.aI.LOAD_SYSTEM_PROFILE,payload:(0,o.getEntitySystemProfile)(e,{})}},d=function(e,t){return{type:r.aI.SET_ANSIBLE_HOST,payload:o.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},51525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{entitesDetailReducer:()=>r.CB,entitiesReducer:()=>r.zw,entityDetailsReducer:()=>r.gA,mergeWithDetail:()=>r.OL,mergeWithEntities:()=>r.AF,tableReducer:()=>r.M,clearFilters:()=>o.K5,clearNotifications:()=>o.L1,configChanged:()=>o.u3,deleteEntity:()=>o.Ks,detailSelect:()=>o.Xe,editAnsibleHost:()=>o.Uw,editDisplayName:()=>o.$Y,entitiesLoading:()=>o.nE,fetchAllTags:()=>o.C8,filterEntities:()=>o.CP,filterSelect:()=>o.fg,getAdvisorData:()=>o.gb,getComplianceData:()=>o.Oj,getPatchData:()=>o.k0,getVulnData:()=>o.Fo,loadEntities:()=>o.il,loadEntity:()=>o.A_,loadTags:()=>o.me,selectEntity:()=>o.CL,setFilter:()=>o.Tv,setPagination:()=>o.Jr,setSort:()=>o.HD,systemProfile:()=>o.eR,toggleDrawer:()=>o.wb,toggleTagModal:()=>o.Ar,updateEntities:()=>o.jB,ACTION_TYPES:()=>i.aI,APPLICATION_SELECTED:()=>i.TP,CHANGE_SORT:()=>i.WH,CLEAR_FILTERS:()=>i.Gs,CLEAR_NOTIFICATIONS:()=>i.wt,CONFIG_CHANGED:()=>i.Uq,ENTITIES_LOADING:()=>i.jZ,FILTER_ENTITIES:()=>i.lP,FILTER_SELECT:()=>i.hI,INVENTORY_ACTION_TYPES:()=>i.AL,SELECT_ENTITY:()=>i.pr,SET_ANSIBLE_HOST:()=>i.Bh,SET_DISPLAY_NAME:()=>i.Ti,SET_INVENTORY_FILTER:()=>i.uW,SET_PAGINATION:()=>i.fT,SHOW_ENTITIES:()=>i.u4,SYSTEM_ISSUE_TYPES:()=>i.dF,TOGGLE_DRAWER:()=>i.Ji,TOGGLE_TAG_MODAL:()=>i.Qd,UPDATE_ENTITIES:()=>i.s$,asyncActions:()=>i.zW,asyncInventory:()=>i.gl,systemIssues:()=>i.AN});var r=n(20),o=n(94778),i=n(59086)},45467:()=>{},36150:()=>{},63498:()=>{},36213:()=>{},14113:()=>{},81754:()=>{},96649:()=>{},16506:()=>{},43109:()=>{},70347:()=>{},12796:()=>{},11452:()=>{},95594:()=>{},58392:()=>{},34946:()=>{},10497:()=>{},80598:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},37625:()=>{},71644:()=>{},10108:()=>{},27875:()=>{},18192:()=>{},23055:()=>{},54476:()=>{},27567:()=>{},28992:()=>{},90146:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},81320:()=>{},88361:()=>{},50311:()=>{},90479:()=>{},78752:()=>{},71338:()=>{},11080:()=>{},21626:()=>{},74282:()=>{},67274:()=>{},21064:()=>{},82014:()=>{},90776:()=>{},88277:()=>{},97939:()=>{},8572:()=>{},98379:()=>{},25238:()=>{},33858:()=>{},66213:()=>{},77350:()=>{},69076:()=>{},93398:()=>{},70150:()=>{},92084:()=>{},46928:()=>{},91993:()=>{},84958:()=>{},37739:()=>{},99624:()=>{},42246:()=>{},36974:()=>{},43919:()=>{},91027:()=>{},53336:()=>{},16061:()=>{},27479:()=>{},66822:()=>{},93661:()=>{},56024:()=>{},54994:()=>{},37494:()=>{},67761:()=>{},43390:()=>{},22143:()=>{},48223:()=>{},314:()=>{},97853:()=>{},97236:()=>{},49854:()=>{},38024:()=>{},40209:()=>{},87234:()=>{},38299:()=>{},51934:()=>{},72816:()=>{},74181:()=>{},16166:()=>{},53519:()=>{},11177:()=>{},89611:(e,t,n)=>{"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:()=>r})}}]);