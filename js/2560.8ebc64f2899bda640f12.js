(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2560],{21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(92950),o=r.n(n),a=r(75662),i=r(8567),c=r(71355),s=r(371),u=r(55140);const l=function(){var e=(0,a.useHistory)(),t=(0,u.Z)();return(0,n.useEffect)((function(){return t.init(),t.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(c.NotificationsPortal,null),o().createElement(s.r,{appName:"inventory"},o().createElement(i.Z,null)))}},28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(92950),o=r.n(n),a=r(75662),i=r(50533),c=r(30319),s=r(38991),u=r(48187),l=r(35240),d=(r(94500),r(47468));const f=function(){var e=(0,n.useMemo)((function(){var e=(0,c.bh)();return{register:function(t){return e.replaceReducer((0,c.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(s.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(i.Provider,{store:e.getStore()},o().createElement(a.BrowserRouter,{basename:(0,l.eb)(window.location.pathname)},o().createElement(u.Z,null)))):o().createElement(d.Z,null)}},8567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O,_:()=>g});var n=r(87462),o=r(75662),a=r(92950),i=r.n(a),c=r(58061),s=r(454),u=r(79161),l=r(9947),d=r(75106),f=r(56700);const p=function(){return i().createElement(l.u,null,i().createElement(d.B,null,i().createElement(f.Z,null)))};var v=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(730),r.e(4733),r.e(7279),r.e(1297),r.e(8004),r.e(5223),r.e(1756),r.e(4007)]).then(r.bind(r,54174))})),y=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(730),r.e(8503),r.e(4733),r.e(5031),r.e(8004),r.e(5855),r.e(5223),r.e(8648)]).then(r.bind(r,74251))})),m=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(730),r.e(8503),r.e(4733),r.e(8561),r.e(2284),r.e(746)]).then(r.bind(r,11803))})),b=(0,a.lazy)((function(){return Promise.all([r.e(8503),r.e(9939)]).then(r.bind(r,52901))})),g={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId",groups:"/groups",groupDetail:"/groups/:groupId"},O=function(){var e=(0,a.useMemo)((function(){return(0,c.Qw)()}),[]),t=(0,u.Z)("hbi.ui.inventory-groups");return i().createElement(a.Suspense,{fallback:""},i().createElement(o.Switch,null,i().createElement(o.Route,{exact:!0,path:g.table,render:function(){return i().createElement(s.Z,(0,n.Z)({cmp:v,isRbacEnabled:!0},e))},rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:g.groups,component:t?m:p,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:g.groupDetail,component:t?b:p,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:g.detailWithModal,component:y,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:g.detail,component:y,rootClass:"inventory"}),i().createElement(o.Redirect,{path:"*",to:"/"})))}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},47468:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(92950),o=r.n(n),a=r(52643),i=r(37619);const c=function(){return o().createElement(a.b,null,o().createElement(i.$,{size:"xl"}))}},30319:(e,t,r)=>{"use strict";r.d(t,{UE:()=>b,bh:()=>m});var n,o=r(4942),a=r(34879),i=r(84885),c=r(57283),s=r.n(c),u=r(81730),l=r(97779),d=r(59086);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=p(p(p({},u.ZP),(0,u.AF)(u.M)),(0,u.OL)((0,u.CB)(d.AL))),y=l.qC,m=function(){n=new a.Z;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.jB)((0,l.UY)(v),{},y(l.md.apply(void 0,[n.getMiddleware(),s(),(0,i.default)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})].concat(t))))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.UY)(p(p({},v),e))}},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>P,CB:()=>h,M:()=>E,OL:()=>w,ZP:()=>Z,gA:()=>d.ZP,zw:()=>l.ZP});var n,o=r(4942),a=r(59086),i=r(57785),c=r(18546),s=r(35240),u=r(83215),l=r(21216),d=r(48536),f=r(34150),p=r(52987);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={loaded:!1,selected:new Map};function b(e){return y(y({},e),{},{loaded:!0})}function g(e,t){var r,n=t.payload;return y(y({},e),{},{activeApps:null===(r=e.activeApps)||void 0===r?void 0:r.map((function(e){return"ros"===e.name?y(y({},e),{},{isVisible:n}):e}))})}var O={notifications:u.ee,systemProfileStore:i.default,groups:f.Z,groupDetail:p.Z},E=(0,c.Gg)((n={},(0,o.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return y(y({},e),{},{rows:(0,s.r0)([e.rows,r.results]),entities:(0,s.r0)([e.entities,r.results])})})),(0,o.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r=t.payload,n=t.meta;return(null==n?void 0:n.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:y(y({},e),{},{rows:(0,s.r0)([e.rows,r.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,y(y({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,o.Z)(n,a.uW,(function(e,t){var r=t.payload;return y(y({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return y(y({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,d.i8),n),m),h=function(){var e;return(0,c.Gg)((e={},(0,o.Z)(e,a.AL.LOAD_ENTITY_FULFILLED,b),(0,o.Z)(e,a.AL.LOAD_SYSTEM_PROFILE_FULFILLED,g),e),m)};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return y({},e(y({},(0,c.Gg)(y({},l.ZP),y(y({},l.W2),t))(r,n)),n))}}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return y({},e(y({},(0,c.Gg)(y({},d.ZP),y(y({},d.PY),t))(r,n)),n))}}}const Z=O},38991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(92950).createContext)({getRegistry:function(){}})},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>v,default:()=>b,defaultState:()=>l,formatBytes:()=>f,onSystemProfile:()=>m,sizes:()=>d,systemProfilePending:()=>p});var n,o=r(93433),a=r(4942),i=r(18546),c=r(59086);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},d=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],f=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(d[t])};function p(e){return u(u({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return u(u({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function m(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return u(u({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:u(u({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&f(n.system_memory_bytes),repositories:v(n.yum_repos),network:y(n.network_interfaces)})})}const b=(0,i.Gg)((n={},(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_FULFILLED,m),(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_PENDING,p),n),{systemProfile:l})},81320:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2560.7bd06c6c44990a8de24c9cd452c56161.js.map