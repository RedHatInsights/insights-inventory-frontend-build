(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[72],{48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),i=n(16530),a=n(60076),c=(n(14154),n(28962)),s=n(71355),l=n(61488);const u=function(){var e=(0,i.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(c.U),insights.chrome.on("APP_NAVIGATION",(function(t){return e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(s.qJ,null),o().createElement(l.Z,null),o().createElement(a.Z,null))}},60076:(e,t,n)=>{"use strict";n.d(t,{_:()=>u,Z:()=>f});var r=n(16530),o=n(92950),i=n.n(o),a=n(58061),c=n(30319),s=(0,o.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(395),n.e(34)]).then(n.bind(n,32034))})),l=(0,o.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(395),n.e(28)]).then(n.bind(n,93028))})),u={table:"/",detail:"/:inventoryId"},f=function(){var e=(0,o.useContext)(c.gE).getRegistry;(0,o.useEffect)((function(){e().register(c.ll)}),[e]);var t,n,f=(0,r.useHistory)(),d=window.location.pathname.split("/"),p=new URLSearchParams(location.search);return d.shift(),"beta"===d[0]&&d.shift(),t=d[0],n=d[1],Object.values(u).some((function(e){return(0,r.matchPath)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||f.push("".concat(u.table).concat(location.search).concat(location.hash)),i().createElement(o.Suspense,{fallback:""},i().createElement(r.Switch,null,i().createElement(r.Route,{exact:!0,path:u.table,render:function(){var e,t,n,r,o;return i().createElement(s,{status:p.getAll("status"),source:p.getAll("source"),filterbyName:p.getAll("hostname_or_id"),tagsFilter:null===(e=p.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.split)||void 0===n||null===(r=(o=n.call(t,",")).reduce)||void 0===r?void 0:r.call(o,a.Pv,[]),page:p.getAll("page"),perPage:p.getAll("per_page")})},rootClass:"inventory"}),i().createElement(r.Route,{path:u.detail,component:l,rootClass:"inventory"})))}},61488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n(557),i=n(80863),a=n(58061);const c=function(){var e=(0,i.Z)(),t=e.isLoading,n=e.hasAccess,c=(0,o.useDispatch)();return(0,r.useEffect)((function(){c({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING")})}),[]),(0,r.useEffect)((function(){t||c({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),payload:{writePermissions:n}})}),[t]),null}},47468:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(52643),a=n(2372);const c=o().createElement(i.b,null,o().createElement(a.$,{size:"xl"}))},23894:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(557),a=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(564),n.e(336),n.e(251),n.e(492)]).then(n.bind(n,63244))}));const c=function(){return o().createElement(r.Suspense,{fallback:""},o().createElement(a,{store:(0,i.useStore)()}))}},74166:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(16530),a=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(564),n.e(336),n.e(164),n.e(844)]).then(n.bind(n,62727))}));const c=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params;return o().createElement(r.Suspense,{fallback:""},o().createElement(a,{customItnl:!0,intlProps:{locale:navigator.language},inventoryId:e.inventoryId}))}},33682:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(557),a=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(564),n.e(739)]).then(n.bind(n,41833))}));const c=function(){var e=(0,i.useSelector)((function(e){var t=e.permissionsReducer;return null==t?void 0:t.writePermissions}));return o().createElement(r.Suspense,{fallback:""},o().createElement(a,{store:(0,i.useStore)(),writePermissions:e}))}},63022:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(92950),o=n.n(r),i=n(16530),a=n(30319),c=n(22663),s=n(47468);const l=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(a.gE).getRegistry;return o().createElement(c.Z,{appName:"ros",module:"./SystemDetail",getRegistry:t,fallback:s.Z,inventoryId:e.inventoryId})}},69456:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(92137),o=n(34738),i=n(87757),a=n.n(i),c=n(92950),s=n.n(c),l=(n(92684),n(16530)),u=n(30319);const f=function(){var e=(0,c.useState)(c.Fragment),t=(0,o.Z)(e,2),i=t[0],f=t[1],d=(0,l.useRouteMatch)("/:inventoryId").params,p=(0,c.useContext)(u.gE).getRegistry;return(0,c.useEffect)((function(){f((function(){return s().lazy((0,r.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(410),n.e(252),n.e(564),n.e(336),n.e(251),n.e(794),n.e(492),n.e(827)]).then(n.bind(n,25629));case 2:return t=e.sent,r=t.SystemCvesStore,p().register({SystemCvesStore:r}),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))))}))}),[]),s().createElement(c.Suspense,null,s().createElement(i,{customItnlProvider:!0,entity:{id:d.inventoryId}}))}},62218:(e,t,n)=>{"use strict";n.d(t,{vu:()=>r.Z,Tq:()=>o.Z,hJ:()=>i.Z,fZ:()=>a.Z,gw:()=>c.Z});var r=n(74166),o=n(69456),i=n(23894),a=n(33682),c=n(63022)},28962:(e,t,n)=>{"use strict";n.d(t,{$:()=>r,U:()=>o});var r="/api/inventory/v1",o="inventory"},58061:(e,t,n)=>{"use strict";n.d(t,{aI:()=>l,wt:()=>u,pr:()=>f,uW:()=>d,fT:()=>p,Pv:()=>v});var r=n(34738),o=n(78927),i=n(24350),a=n.n(i),c=n(94654),s=n.n(c)()(["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),l=a()([].concat(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(0,o.Z)(s)),(function(e){return e})),u="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",f="SELECT_ENTITY",d="SET_INVENTORY_FILTER",p="SET_PAGINATION",v=function(e,t){var n=t.split("/"),o=(0,r.Z)(n,2),i=o[0],a=o[1];a||(a=i,i=null);var c=a.split("="),s=(0,r.Z)(c,2),l=s[0],u=s[1],f=void 0===u?null:u,d=e.findIndex((function(e){return e.category===i})),p=e[d]||{category:i,key:i,type:"tags",values:[]};return p.values.push({name:"".concat(l).concat(f?"=".concat(f):""),key:"".concat(l).concat(f?"=".concat(f):""),tagKey:l,value:f,group:{label:i,value:i,type:"checkbox"}}),e[d]||e.push(p),e}},80863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(96156),o=n(81253),i=n(95249);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s=function(){var e=(0,i.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]),t=e.hasAccess;return c(c({},(0,o.Z)(e,["hasAccess"])),{},{hasAccess:t})}},30319:(e,t,n)=>{"use strict";n.d(t,{ll:()=>u.ZP,zw:()=>u.zw,CB:()=>u.CB,gE:()=>f,S1:()=>d});var r,o=n(92950),i=n(34879),a=n(18546),c=n(39851),s=n(57283),l=n.n(s),u=n(81730),f=(0,o.createContext)({getRegistry:function(){}});function d(){r=new i.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new a.xI({},[r.getMiddleware(),l(),(0,c.default)({errorDescriptionKey:["detail","stack"]})].concat(t))}},57544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,o=n(96156),i=n(18546),a=n(58061);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=(0,i.Gg)((r={},(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING"),(function(e){return s(s({},e),{},{loadingFailed:!1,loading:!0,writePermissions:void 0})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),(function(e,t){var n=t.payload;return s(s({},e),{},{loading:!1,loadingFailed:!1,writePermissions:n.writePermissions})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FAILED"),(function(e){return s(s({},e),{},{loading:!1,loadingFailed:!0})})),r),{loading:!0,writePermissions:!1,loadingFailed:!1})},81730:(e,t,n)=>{"use strict";n.d(t,{zw:()=>S,CB:()=>w,ZP:()=>_});var r=n(96156),o=n(58061),i=n(23373),a=n(62218),c=n(40784),s=n(18546),l=n(35240),u=n(35435),f=n(57544);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={loaded:!1,selected:new Map},y=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function E(e,t){var n=t.payload;return p(p({},e),{},{rows:(0,l.r0)([e.rows,n.results]),entities:(0,l.r0)([e.entities,n.results])})}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return p(p({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:a.fZ},y(n&&n.insights)&&{title:"Advisor",name:"advisor",component:a.hJ},y(n&&n.insights)&&{title:"Vulnerability",name:"vulnerabilities",component:a.Tq},y(n&&n.insights)&&{title:"Compliance",name:"compliance",component:a.vu},y(n&&n.insights)&&{title:"Patch",name:"patch",component:c.ZP},y(n&&n.insights)&&{title:"Resource Optimization",name:"ros",component:a.gw}].filter(Boolean)})}function m(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,p(p({},o||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return p(p({},e),{},{selected:new Map(r)})}function h(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),p(p({},e),{},{selected:new Map(r)})}function I(e,t){var n=t.payload;return p(p({},e),{},{rows:(0,l.r0)([e.rows,n.results.map((function(t){return p(p({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})}function O(e,t){var n=t.payload;return p(p({},e),{},{activeFilters:n.filtersList})}function b(e,t){var n=t.payload,r=parseInt(n.perPage,10),o=parseInt(n.page,10);return p(p({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(o)?1:o})}var P={notifications:u.notificationsReducer,systemProfileStore:i.ZP,permissionsReducer:f.Z,SystemPackageListStore:c.fq,SystemAdvisoryListStore:c.gn},S=function(e){var t,n=e.LOAD_ENTITIES_FULFILLED;return(0,s.Gg)((t={},(0,r.Z)(t,o.aI.GET_ENTITIES_FULFILLED,E),(0,r.Z)(t,n,I),(0,r.Z)(t,"".concat(o.aI.REMOVE_ENTITY,"_FULFILLED"),h),(0,r.Z)(t,o.pr,m),(0,r.Z)(t,"FILTER_SELECT",(function(e){return p(p({},e),{},{selected:{}})})),(0,r.Z)(t,o.uW,O),(0,r.Z)(t,o.fT,b),t),v)},w=function(){return(0,s.Gg)((0,r.Z)({},o.aI.GET_ENTITY_FULFILLED,g),v)};const _=P},67073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(23645),o=n.n(r),i=n(35747),a=n(42454),c=o()((function(e){return e[1]}));c.i(i.Z),c.i(a.Z),c.push([e.id,".inventory{}.inventory button:focus{outline:none}.inventory table.ins-entity-table th{padding:1rem;padding-left:2rem}\n",""]);const s=c},14154:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),i=n(67073),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var c=i.default.locals;e.hot.accept(67073,(t=>{i=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,i.default.locals)?(c=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals}}]);