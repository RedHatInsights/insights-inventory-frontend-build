(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8178],{21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(92950),o=r.n(n),a=r(75662),c=r(8567),i=r(71355),s=r(55140),l=r(371);const u=function(){var e=(0,a.useHistory)(),t=(0,s.Z)();return(0,n.useEffect)((function(){return t.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(i.NotificationsPortal,null),o().createElement(l.r,{appName:"inventory",checkResourceDefinitions:!0},o().createElement(c.Z,null)))}},28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(92950),o=r.n(n),a=r(75662),c=r(50533),i=r(30319),s=r(38991),l=r(48187),u=r(35240),d=(r(94500),r(47468));const p=function(){var e=(0,n.useMemo)((function(){var e=(0,i.bh)();return{register:function(t){return e.replaceReducer((0,i.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(s.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(c.Provider,{store:e.getStore()},o().createElement(a.BrowserRouter,{basename:(0,u.eb)(window.location.pathname)},o().createElement(l.Z,null)))):o().createElement(d.Z,null)}},8567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_,_:()=>j});var n=r(87462),o=r(29439),a=r(75662),c=r(92950),i=r.n(c),s=r(58061),l=r(454),u=r(79161),d=r(9947),p=r(75106),f=r(56700);const y=function(){return i().createElement(d.u,null,i().createElement(p.B,null,i().createElement(f.Z,null)))};var v=r(9669),m=r.n(v),b=r(52643),g=r(37619),E=r(22663),h=r(2443),O=(0,c.lazy)((function(){return Promise.all([r.e(118),r.e(2185),r.e(5039),r.e(4733),r.e(4680),r.e(4878),r.e(9357),r.e(1747),r.e(5866),r.e(6123),r.e(2712),r.e(9438),r.e(5223),r.e(1780),r.e(259),r.e(2511),r.e(764)]).then(r.bind(r,62299))})),P=(0,c.lazy)((function(){return Promise.all([r.e(118),r.e(2185),r.e(5039),r.e(4733),r.e(2712),r.e(9438),r.e(5855),r.e(5223),r.e(4738)]).then(r.bind(r,11821))})),Z=(0,c.lazy)((function(){return Promise.all([r.e(118),r.e(2185),r.e(5039),r.e(4733),r.e(4680),r.e(9357),r.e(1747),r.e(6123),r.e(259),r.e(8310),r.e(2511),r.e(7258)]).then(r.bind(r,2742))})),w=(0,c.lazy)((function(){return Promise.all([r.e(118),r.e(2185),r.e(5039),r.e(4733),r.e(4680),r.e(4878),r.e(9357),r.e(1747),r.e(5866),r.e(6123),r.e(1780),r.e(259),r.e(8310),r.e(1073)]).then(r.bind(r,21381))})),I=(0,c.lazy)((function(){return r.e(5857).then(r.bind(r,95857))})),j={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId",groups:"/groups",groupDetail:"/groups/:groupId",update:"/:inventoryId/update",edgeInventory:"/manage-edge-inventory"},_=function(){var e=(0,c.useMemo)((function(){return(0,s.Qw)()}),[]),t=(0,u.Z)("hbi.ui.inventory-groups"),r=(0,c.useState)(!0),d=(0,o.Z)(r,2),p=d[0],f=d[1];return(0,c.useEffect)((function(){try{m().get("".concat("/api/inventory/v1/hosts","?page=1&per_page=1")).then((function(e){var t=e.data;f(t.total>0)}))}catch(e){console.log(e)}}),[p]),i().createElement(c.Suspense,{fallback:""},p?i().createElement(a.Switch,null,i().createElement(a.Route,{exact:!0,path:j.update,component:I,rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.table,render:function(){return i().createElement(l.Z,(0,n.Z)({cmp:O},e))},rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.edgeInventory,render:function(){return i().createElement(l.Z,(0,n.Z)({cmp:O,isRbacEnabled:!0},e))},rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.groups,component:t?Z:y,rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.groupDetail,component:t?w:y,rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.detailWithModal,component:P,rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.detail,component:P,rootClass:"inventory"}),i().createElement(a.Route,{exact:!0,path:j.manageEdgeInventoryUrlName,component:O,rootClass:"inventory"}),i().createElement(a.Redirect,{path:"*",to:"/"})):i().createElement(c.Suspense,{fallback:i().createElement(b.b,null,i().createElement(g.$,{size:"xl"}))},i().createElement(E.Z,{appId:"inventory_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:i().createElement(h.Z,null),app:"Inventory"})))}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},47468:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(92950),o=r.n(n),a=r(52643),c=r(37619);const i=function(){return o().createElement(a.b,null,o().createElement(c.$,{size:"xl"}))}},30319:(e,t,r)=>{"use strict";r.d(t,{UE:()=>b,bh:()=>m});var n,o=r(4942),a=r(34879),c=r(84885),i=r(57283),s=r.n(i),l=r(81730),u=r(97779),d=r(59086);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=f(f(f({},l.ZP),(0,l.AF)(l.M)),(0,l.OL)((0,l.CB)(d.AL))),v=u.qC,m=function(){n=new a.Z;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.jB)((0,u.UY)(y),{},v(u.md.apply(void 0,[n.getMiddleware(),s(),(0,c.default)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})].concat(t))))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.UY)(f(f({},y),e))}},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>O,CB:()=>h,M:()=>E,OL:()=>P,ZP:()=>Z,gA:()=>d.ZP,zw:()=>u.ZP});var n,o=r(4942),a=r(59086),c=r(57785),i=r(18546),s=r(35240),l=r(83215),u=r(21216),d=r(48536),p=r(34150),f=r(52987);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={loaded:!1,selected:new Map};function b(e){return v(v({},e),{},{loaded:!0})}var g={notifications:l.ee,systemProfileStore:c.default,groups:p.Z,groupDetail:f.Z},E=(0,i.Gg)((n={},(0,o.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return v(v({},e),{},{rows:(0,s.r0)([e.rows,r.results]),entities:(0,s.r0)([e.entities,r.results])})})),(0,o.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r=t.payload,n=t.meta;return(null==n?void 0:n.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:v(v({},e),{},{rows:(0,s.r0)([e.rows,r.results.map((function(t){return v(v({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),v(v({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(Array.isArray(r.id))r.id.forEach((function(e){n.set(e.id,e)}));else if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,v(v({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return v(v({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return v(v({},e),{},{selected:{}})})),(0,o.Z)(n,a.uW,(function(e,t){var r=t.payload;return v(v({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return v(v({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,d.i8),n),m),h=function(){return(0,i.Gg)((0,o.Z)({},a.AL.LOAD_ENTITY_FULFILLED,b),m)};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return v({},e(v({},(0,i.Gg)(v({},u.ZP),v(v({},u.W2),t))(r,n)),n))}}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return v({},e(v({},(0,i.Gg)(v({},d.ZP),v(v({},d.PY),t))(r,n)),n))}}}const Z=g},38991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(92950).createContext)({getRegistry:function(){}})},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>v,calculateRepos:()=>y,default:()=>b,defaultState:()=>u,formatBytes:()=>p,onSystemProfile:()=>m,sizes:()=>d,systemProfilePending:()=>f});var n,o=r(93433),a=r(4942),c=r(18546),i=r(59086);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={loaded:!1},d=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],p=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(d[t])};function f(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function y(e){return e&&e.reduce((function(e,t){return l(l({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function v(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function m(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:l(l({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&p(n.system_memory_bytes),repositories:y(n.yum_repos),network:v(n.network_interfaces)})})}const b=(0,c.Gg)((n={},(0,a.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_FULFILLED,m),(0,a.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_PENDING,f),n),{systemProfile:u})},81320:()=>{}}]);