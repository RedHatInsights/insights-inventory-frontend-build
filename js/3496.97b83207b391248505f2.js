(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3496],{21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(92950),o=r.n(n),a=r(75662),i=r(8567),c=r(71355),u=r(371),s=r(55140);const l=function(){var e=(0,a.useHistory)(),t=(0,s.Z)();return(0,n.useEffect)((function(){return t.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(c.NotificationsPortal,null),o().createElement(u.r,{appName:"inventory"},o().createElement(i.Z,null)))}},28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(92950),o=r.n(n),a=r(75662),i=r(50533),c=r(30319),u=r(38991),s=r(48187),l=r(35240),p=(r(94500),r(47468));const d=function(){var e=(0,n.useMemo)((function(){var e=(0,c.bh)();return{register:function(t){return e.replaceReducer((0,c.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(u.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(i.Provider,{store:e.getStore()},o().createElement(a.BrowserRouter,{basename:(0,l.eb)(window.location.pathname)},o().createElement(s.Z,null)))):o().createElement(p.Z,null)}},8567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E,_:()=>P});var n=r(87462),o=r(75662),a=r(92950),i=r.n(a),c=r(58061),u=r(454),s=r(79161),l=r(9947),p=r(75106),d=r(56700);const f=function(){return i().createElement(l.u,null,i().createElement(p.B,null,i().createElement(d.Z,null)))};var v=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(2185),r.e(5039),r.e(4733),r.e(9357),r.e(4878),r.e(1747),r.e(7321),r.e(348),r.e(2712),r.e(9438),r.e(5223),r.e(1780),r.e(259),r.e(8354)]).then(r.bind(r,71750))})),y=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(2185),r.e(5039),r.e(4733),r.e(2712),r.e(9438),r.e(5855),r.e(5223),r.e(5389)]).then(r.bind(r,74251))})),m=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(2185),r.e(5039),r.e(4733),r.e(9357),r.e(1747),r.e(348),r.e(259),r.e(3901),r.e(4059)]).then(r.bind(r,80948))})),g=(0,a.lazy)((function(){return Promise.all([r.e(3453),r.e(2185),r.e(5039),r.e(4733),r.e(9357),r.e(4878),r.e(1747),r.e(7321),r.e(348),r.e(1780),r.e(259),r.e(3901),r.e(4153)]).then(r.bind(r,21381))})),P={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId",groups:"/groups",groupDetail:"/groups/:groupId"},E=function(){var e=(0,a.useMemo)((function(){return(0,c.Qw)()}),[]),t=(0,s.Z)("hbi.ui.inventory-groups");return i().createElement(a.Suspense,{fallback:""},i().createElement(o.Switch,null,i().createElement(o.Route,{exact:!0,path:P.table,render:function(){return i().createElement(u.Z,(0,n.Z)({cmp:v,isRbacEnabled:!0},e))},rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:P.groups,component:t?m:f,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:P.groupDetail,component:t?g:f,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:P.detailWithModal,component:y,rootClass:"inventory"}),i().createElement(o.Route,{exact:!0,path:P.detail,component:y,rootClass:"inventory"}),i().createElement(o.Redirect,{path:"*",to:"/"})))}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},47468:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(92950),o=r.n(n),a=r(52643),i=r(37619);const c=function(){return o().createElement(a.b,null,o().createElement(i.$,{size:"xl"}))}},30319:(e,t,r)=>{"use strict";r.d(t,{UE:()=>g,bh:()=>m});var n,o=r(4942),a=r(34879),i=r(84885),c=r(57283),u=r.n(c),s=r(81730),l=r(97779),p=r(59086);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=f(f(f({},s.ZP),(0,s.AF)(s.M)),(0,s.OL)((0,s.CB)(p.AL))),y=l.qC,m=function(){n=new a.Z;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.jB)((0,l.UY)(v),{},y(l.md.apply(void 0,[n.getMiddleware(),u(),(0,i.default)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})].concat(t))))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.UY)(f(f({},v),e))}},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>b,CB:()=>h,M:()=>E,OL:()=>O,ZP:()=>w,gA:()=>p.ZP,zw:()=>l.ZP});var n,o=r(4942),a=r(59086),i=r(57785),c=r(18546),u=r(35240),s=r(83215),l=r(21216),p=r(48536),d=r(34150),f=r(52987);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={loaded:!1,selected:new Map};function g(e){return y(y({},e),{},{loaded:!0})}var P={notifications:s.ee,systemProfileStore:i.default,groups:d.Z,groupDetail:f.Z},E=(0,c.Gg)((n={},(0,o.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return y(y({},e),{},{rows:(0,u.r0)([e.rows,r.results]),entities:(0,u.r0)([e.entities,r.results])})})),(0,o.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r=t.payload,n=t.meta;return(null==n?void 0:n.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:y(y({},e),{},{rows:(0,u.r0)([e.rows,r.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,y(y({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,o.Z)(n,a.uW,(function(e,t){var r=t.payload;return y(y({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return y(y({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),n),m),h=function(){return(0,c.Gg)((0,o.Z)({},a.AL.LOAD_ENTITY_FULFILLED,g),m)};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return y({},e(y({},(0,c.Gg)(y({},l.ZP),y(y({},l.W2),t))(r,n)),n))}}}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return y({},e(y({},(0,c.Gg)(y({},p.ZP),y(y({},p.PY),t))(r,n)),n))}}}const w=P},38991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(92950).createContext)({getRegistry:function(){}})},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>v,default:()=>g,defaultState:()=>l,formatBytes:()=>d,onSystemProfile:()=>m,sizes:()=>p,systemProfilePending:()=>f});var n,o=r(93433),a=r(4942),i=r(18546),c=r(59086);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function f(e){return s(s({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return s(s({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function m(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return s(s({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:s(s({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&d(n.system_memory_bytes),repositories:v(n.yum_repos),network:y(n.network_interfaces)})})}const g=(0,i.Gg)((n={},(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_FULFILLED,m),(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_PENDING,f),n),{systemProfile:l})},94654:(e,t,r)=>{var n=r(21078),o=r(35161);e.exports=function(e,t){return n(o(e,t),1)}},93386:(e,t,r)=>{var n=r(21078),o=r(5976),a=r(45652),i=r(29246),c=o((function(e){return a(n(e,1,i,!0))}));e.exports=c},36494:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(87462),o=r(63366),a=r(26685),i=r(35067),c=r(63480),u=r(26343);const s=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,u.dX)((function(t){return(0,c.Z)(e,t)})):void 0}],l=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(){return{}}))}];function p(e,t,r){return(0,n.Z)({},r,e,t)}const d=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,c){var u=e(t,r,c);return i?o&&a(u,n)||(n=u):(i=!0,n=u),n}}}(e):void 0},function(e){return e?void 0:function(){return p}}];var f=r(38548),v=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function y(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function m(e,t){return e===t}function g(e){var t=void 0===e?{}:e,r=t.connectHOC,c=void 0===r?a.Z:r,u=t.mapStateToPropsFactories,p=void 0===u?l:u,g=t.mapDispatchToPropsFactories,P=void 0===g?s:g,E=t.mergePropsFactories,h=void 0===E?d:E,b=t.selectorFactory,O=void 0===b?f.ZP:b;return function(e,t,r,a){void 0===a&&(a={});var u=a,s=u.pure,l=void 0===s||s,d=u.areStatesEqual,f=void 0===d?m:d,g=u.areOwnPropsEqual,E=void 0===g?i.Z:g,b=u.areStatePropsEqual,w=void 0===b?i.Z:b,Z=u.areMergedPropsEqual,D=void 0===Z?i.Z:Z,S=(0,o.Z)(u,v),j=y(e,p,"mapStateToProps"),_=y(t,P,"mapDispatchToProps"),I=y(r,h,"mergeProps");return c(O,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:j,initMapDispatchToProps:_,initMergeProps:I,pure:l,areStatesEqual:f,areOwnPropsEqual:E,areStatePropsEqual:w,areMergedPropsEqual:D},S))}}const P=g()},50533:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=r(67133),o=r(71679);(0,r(9256).F)(o.m)},81320:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3496.e468f5346f027df35dda3fc2cb9c1374.js.map