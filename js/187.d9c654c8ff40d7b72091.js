(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[187],{48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),i=n(16530),a=n(60076),s=(n(14154),n(28962)),c=n(71355),l=n(61488);const u=function(){var e=(0,i.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(s.U),insights.chrome.on("APP_NAVIGATION",(function(t){return e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(c.qJ,null),o().createElement(l.Z,null),o().createElement(a.Z,null))}},60076:(e,t,n)=>{"use strict";n.d(t,{_:()=>u,Z:()=>d});var r=n(16530),o=n(92950),i=n.n(o),a=n(58061),s=n(30319),c=(0,o.lazy)((function(){return Promise.all([n.e(252),n.e(223),n.e(34)]).then(n.bind(n,32034))})),l=(0,o.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(223),n.e(28)]).then(n.bind(n,93028))})),u={table:"/",detail:"/:inventoryId"},d=function(){var e=(0,o.useContext)(s.gE).getRegistry;(0,o.useEffect)((function(){e().register(s.ll)}),[e]);var t,n,d=(0,r.useHistory)(),f=window.location.pathname.split("/"),p=new URLSearchParams(location.search);return f.shift(),"beta"===f[0]&&f.shift(),t=f[0],n=f[1],Object.values(u).some((function(e){return(0,r.matchPath)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||d.push("".concat(u.table).concat(location.search).concat(location.hash)),i().createElement(o.Suspense,{fallback:""},i().createElement(r.Switch,null,i().createElement(r.Route,{exact:!0,path:u.table,render:function(){var e,t,n,r,o;return i().createElement(c,{status:p.getAll("status"),source:p.getAll("source"),filterbyName:p.getAll("hostname_or_id"),tagsFilter:null===(e=p.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.split)||void 0===n||null===(r=(o=n.call(t,",")).reduce)||void 0===r?void 0:r.call(o,a.Pv,[]),page:p.getAll("page"),perPage:p.getAll("per_page")})},rootClass:"inventory"}),i().createElement(r.Route,{path:u.detail,component:l,rootClass:"inventory"})))}},61488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),o=n(557),i=n(80863),a=n(58061);const s=function(){var e=(0,i.Z)(),t=e.isLoading,n=e.hasAccess,s=(0,o.useDispatch)();return(0,r.useEffect)((function(){s({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING")})}),[]),(0,r.useEffect)((function(){t||s({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),payload:{writePermissions:n}})}),[t]),null}},23894:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(557),a=n(22663),s=n(47468);const c=function(){return o().createElement(a.Z,{appName:"advisor",module:"./SystemDetail",fallback:s.Z,store:(0,i.useStore)(),customItnl:!0,intlProps:{locale:navigator.language}})}},74166:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),o=n.n(r),i=n(16530),a=(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(679),n.e(164),n.e(709)]).then(n.bind(n,62727))}));const s=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params;return o().createElement(r.Suspense,{fallback:""},o().createElement(a,{customItnl:!0,intlProps:{locale:navigator.language},inventoryId:e.inventoryId}))}},38585:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),i=n(30319),a=n(22663),s=n(47468);const c=function(){var e=(0,r.useContext)(i.gE).getRegistry;return o().createElement(a.Z,{appName:"patch",module:"./SystemDetail",getRegistry:e,fallback:s.Z})}},69456:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(92950),o=n.n(r),i=n(16530),a=n(30319),s=n(22663),c=n(47468);const l=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(a.gE).getRegistry;return o().createElement(s.Z,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,fallback:c.Z,customItnlProvider:!0,entity:{id:e.inventoryId}})}},62218:(e,t,n)=>{"use strict";n.d(t,{vu:()=>r.Z,Tq:()=>o.Z,hJ:()=>i.Z,fZ:()=>a.default,ub:()=>s.Z});var r=n(74166),o=n(69456),i=n(23894),a=n(30092),s=n(38585)},28962:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});var r="inventory"},80863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(96156),o=n(81253),i=n(95249);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=function(){var e=(0,i.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]),t=e.hasAccess;return s(s({},(0,o.Z)(e,["hasAccess"])),{},{hasAccess:t})}},30319:(e,t,n)=>{"use strict";n.d(t,{ll:()=>u.ZP,zw:()=>u.zw,CB:()=>u.CB,gE:()=>d,S1:()=>f});var r,o=n(92950),i=n(34879),a=n(18546),s=n(39851),c=n(57283),l=n.n(c),u=n(81730),d=(0,o.createContext)({getRegistry:function(){}});function f(){r=new i.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new a.xI({},[r.getMiddleware(),l(),(0,s.default)({errorDescriptionKey:["detail","stack"]})].concat(t))}},57544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,o=n(96156),i=n(18546),a=n(58061);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=(0,i.Gg)((r={},(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING"),(function(e){return c(c({},e),{},{loadingFailed:!1,loading:!0,writePermissions:void 0})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),(function(e,t){var n=t.payload;return c(c({},e),{},{loading:!1,loadingFailed:!1,writePermissions:n.writePermissions})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FAILED"),(function(e){return c(c({},e),{},{loading:!1,loadingFailed:!0})})),r),{loading:!0,writePermissions:!1,loadingFailed:!1})},81730:(e,t,n)=>{"use strict";n.d(t,{zw:()=>w,CB:()=>I,ZP:()=>Z});var r=n(96156),o=n(58061),i=n(57785),a=n(62218),s=n(18546),c=n(35240),l=n(35435),u=n(57544);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={loaded:!1,selected:new Map},v=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function y(e,t){var n=t.payload;return f(f({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}},n=t.payload.entitlements;return f(f({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:a.fZ},v(n&&n.insights)&&{title:"Advisor",name:"advisor",component:a.hJ},v(n&&n.insights)&&{title:"Vulnerability",name:"vulnerabilities",component:a.Tq},v(n&&n.insights)&&{title:"Compliance",name:"compliance",component:a.vu},v(n&&n.insights)&&{title:"Patch",name:"patch",component:a.ub}].filter(Boolean)})}function g(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,f(f({},o||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return f(f({},e),{},{selected:new Map(r)})}function b(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),f(f({},e),{},{selected:new Map(r)})}function h(e,t){var n=t.payload;return f(f({},e),{},{rows:(0,c.r0)([e.rows,n.results.map((function(t){return f(f({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})}function O(e,t){var n=t.payload;return f(f({},e),{},{activeFilters:n.filtersList})}function E(e,t){var n=t.payload,r=parseInt(n.perPage,10),o=parseInt(n.page,10);return f(f({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(o)?1:o})}var P={notifications:l.ee,systemProfileStore:i.ZP,permissionsReducer:u.Z},w=function(e){var t,n=e.LOAD_ENTITIES_FULFILLED;return(0,s.Gg)((t={},(0,r.Z)(t,o.aI.GET_ENTITIES_FULFILLED,y),(0,r.Z)(t,n,h),(0,r.Z)(t,"".concat(o.aI.REMOVE_ENTITY,"_FULFILLED"),b),(0,r.Z)(t,o.pr,g),(0,r.Z)(t,"FILTER_SELECT",(function(e){return f(f({},e),{},{selected:{}})})),(0,r.Z)(t,o.uW,O),(0,r.Z)(t,o.fT,E),t),p)},I=function(){return(0,s.Gg)((0,r.Z)({},o.aI.GET_ENTITY_FULFILLED,m),p)};const Z=P},57785:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var r,o=n(78927),i=n(96156),a=n(18546),s=n(58061);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(u[t])};const f=(0,a.Gg)((r={},(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,(function(e,t){var n,r,i=t.payload.results,a=i&&i[0]&&i[0].system_profile||{};return l(l({},e),{},{systemProfile:l(l({loaded:!0},a),{},{ramSize:a.system_memory_bytes&&d(a.system_memory_bytes),repositories:(r=a.yum_repos,r&&r.reduce((function(e,t){return l(l({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})),network:(n=a.network_interfaces,n&&n.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]}))})})})),(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,(function(e){return l(l({},e),{},{systemProfile:{loaded:!1}})})),r),{systemProfile:{loaded:!1}})},67073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(94015),o=n.n(r),i=n(23645),a=n.n(i),s=n(35747),c=n(42454),l=a()(o());l.i(s.Z),l.i(c.Z),l.push([e.id,".inventory{}.inventory button:focus{outline:none}.inventory table.ins-entity-table th{padding:1rem;padding-left:2rem}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,WAAU,CAAV,wBACiK,YAAY,CAD7K,qCACwM,YAAY,CAAC,iBAAiB",sourcesContent:[".inventory{\n@import url(~@redhat-cloud-services/frontend-components/index.css);@import url(~@redhat-cloud-services/frontend-components-notifications/index.css);button:focus{outline:none}table.ins-entity-table th{padding:1rem;padding-left:2rem}\n\n}"],sourceRoot:""}]);const u=l},14154:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),i=n(67073),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var s=i.default.locals;e.hot.accept(67073,(t=>{i=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,i.default.locals)?(s=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals}}]);
//# sourceMappingURL=../sourcemaps/187.1fe58b06327ff8877add.js.map