"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8178],{21458:(e,t,r)=>{r.d(t,{wN:()=>i});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},28412:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(92950),o=r.n(n),i=r(60261),a=r(30319),c=r(38991),s=r(48187),u=(r(94500),r(47468));const l=function(){var e=(0,n.useMemo)((function(){var e=(0,a.bh)();return{register:function(t){return e.replaceReducer((0,a.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(c.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(i.Provider,{store:e.getStore()},o().createElement(s.Z,null))):o().createElement(u.Z,null)}},81730:(e,t,r)=>{r.d(t,{AF:()=>m,CB:()=>E,M:()=>P,OL:()=>w,ZP:()=>Z,gA:()=>d.ZP,zw:()=>l.ZP});var n,o=r(4942),i=r(59086),a=r(57785),c=r(18546),s=r(35240),u=r(83215),l=r(21216),d=r(48536),f=r(34150),p=r(52987);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={loaded:!1,selected:new Map};function O(e){return y(y({},e),{},{loaded:!0})}var g={notifications:u.ee,systemProfileStore:a.default,groups:f.Z,groupDetail:p.Z},P=(0,c.Gg)((n={},(0,o.Z)(n,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return y(y({},e),{},{rows:(0,s.r0)([e.rows,r.results]),entities:(0,s.r0)([e.entities,r.results])})})),(0,o.Z)(n,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r,n,o=t.payload,i=t.meta;return(null==i?void 0:i.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:!0===(null==i||null===(r=i.controller)||void 0===r||null===(n=r.signal)||void 0===n?void 0:n.aborted)?b:y(y({},e),{},{rows:(0,s.r0)([e.rows,o.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,i.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(Array.isArray(r.id))r.id.forEach((function(e){n.set(e.id,e)}));else if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,y(y({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return y(y({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,o.Z)(n,i.uW,(function(e,t){var r=t.payload;return y(y({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,i.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return y(y({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,d.i8),n),b),E=function(){return(0,c.Gg)((0,o.Z)({},i.AL.LOAD_ENTITY_FULFILLED,O),b)};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return y({},e(y({},(0,c.Gg)(y({},l.ZP),y(y({},l.W2),t))(r,n)),n))}}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return y({},e(y({},(0,c.Gg)(y({},d.ZP),y(y({},d.PY),t))(r,n)),n))}}}const Z=g},57785:(e,t,r)=>{r.r(t),r.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>v,default:()=>O,defaultState:()=>l,formatBytes:()=>f,onSystemProfile:()=>b,sizes:()=>d,systemProfilePending:()=>p});var n,o=r(93433),i=r(4942),a=r(18546),c=r(59086);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},d=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],f=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(d[t])};function p(e){return u(u({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return u(u({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function b(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},i=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return u(u({},e),{},{disabledApps:(0,o.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:u(u({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&f(n.system_memory_bytes),repositories:v(n.yum_repos),network:y(n.network_interfaces)})})}const O=(0,a.Gg)((n={},(0,i.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_FULFILLED,b),(0,i.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_PENDING,p),n),{systemProfile:l})}}]);