(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9761],{21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(92950),o=r.n(n),a=r(75662),c=r(60076),i=r(71355),s=r(371),l=r(55140);const u=function(){var e=(0,a.useHistory)(),t=(0,l.Z)();return(0,n.useEffect)((function(){return t.init(),t.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(i.NotificationsPortal,null),o().createElement(s.r,{appName:"inventory"},o().createElement(c.Z,null)))}},28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(92950),o=r.n(n),a=r(75662),c=r(50533),i=r(30319),s=r(38991),l=r(48187),u=r(35240),f=(r(94500),r(47468));const d=function(){var e=(0,n.useMemo)((function(){var e=(0,i.bh)();return{register:function(t){return e.replaceReducer((0,i.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(s.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(c.Provider,{store:e.getStore()},o().createElement(a.BrowserRouter,{basename:(0,u.eb)(window.location.pathname)},o().createElement(l.Z,null)))):o().createElement(f.Z,null)}},60076:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b,_:()=>v});var n=r(87462),o=r(75662),a=r(92950),c=r.n(a),i=r(9947),s=r(75106),l=r(56700),u=r(58061),f=r(454),d=r(79161),p=(0,a.lazy)((function(){return Promise.all([r.e(9095),r.e(730),r.e(4733),r.e(7279),r.e(5357),r.e(1941),r.e(555),r.e(8414),r.e(4806)]).then(r.bind(r,32034))})),y=(0,a.lazy)((function(){return Promise.all([r.e(9095),r.e(730),r.e(4733),r.e(6459),r.e(2262),r.e(1941),r.e(555),r.e(6929),r.e(656),r.e(8975)]).then(r.bind(r,74251))})),m=(0,a.lazy)((function(){return r.e(4115).then(r.bind(r,24115))})),v={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId",groups:"/groups"},b=function(){var e=(0,a.useMemo)((function(){return(0,u.Qw)()}),[]),t=(0,d.Z)("hbi.ui.inventory-groups");return c().createElement(a.Suspense,{fallback:""},c().createElement(o.Switch,null,c().createElement(o.Route,{exact:!0,path:v.table,render:function(){return c().createElement(f.Z,(0,n.Z)({cmp:p,isRbacEnabled:!0},e))},rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:v.groups,component:t?m:function(){return c().createElement(i.u,null,c().createElement(s.B,null,c().createElement(l.Z,null)))},rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:v.detailWithModal,component:y,rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:v.detail,component:y,rootClass:"inventory"}),c().createElement(o.Redirect,{path:"*",to:"/"})))}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},47468:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(92950),o=r.n(n),a=r(52643),c=r(37619);const i=function(){return o().createElement(a.b,null,o().createElement(c.$,{size:"xl"}))}},30319:(e,t,r)=>{"use strict";r.d(t,{UE:()=>b,bh:()=>v});var n,o=r(4942),a=r(34879),c=r(84885),i=r(57283),s=r.n(i),l=r(90464),u=r(97779),f=r(59086);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=p(p(p({},l.ZP),(0,l.AF)(l.M)),(0,l.OL)((0,l.CB)(f.AL))),m=u.qC,v=function(){n=new a.Z;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.jB)((0,u.UY)(y),{},m(u.md.apply(void 0,[n.getMiddleware(),s(),(0,c.default)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})].concat(t))))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.UY)(p(p({},y),e))}},38991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(92950).createContext)({getRegistry:function(){}})},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>m,calculateRepos:()=>y,default:()=>b,defaultState:()=>u,formatBytes:()=>d,onSystemProfile:()=>v,sizes:()=>f,systemProfilePending:()=>p});var n,o=r(93433),a=r(4942),c=r(18546),i=r(59086);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={loaded:!1},f=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(f[t])};function p(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function y(e){return e&&e.reduce((function(e,t){return l(l({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function m(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function v(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:l(l({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&d(n.system_memory_bytes),repositories:y(n.yum_repos),network:m(n.network_interfaces)})})}const b=(0,c.Gg)((n={},(0,a.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_FULFILLED,v),(0,a.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_PENDING,p),n),{systemProfile:u})},81320:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9761.e8bb3c25cdffd4aa0cd023923e186cdc.js.map