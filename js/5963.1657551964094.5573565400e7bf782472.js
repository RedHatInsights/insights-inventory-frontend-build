"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5963],{24070:(e,t,r)=>{r.d(t,{Z:()=>n.default});var n=r(43107)},47468:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(92950),o=r.n(n),s=r(52643),i=r(2372);const a=o().createElement(s.b,null,o().createElement(i.$,{size:"xl"}))},95045:(e,t,r)=>{r.r(t),r.d(t,{TextInputModal:()=>d.Z,default:()=>b});var n=r(29439),o=r(45987),s=r(92950),i=r.n(s),a=r(32384),c=r(45697),l=r.n(c),u=r(24070),d=r(95364),f=r(47468),p=r(57785),y=["getRegistry"],v=function(e){var t=e.getRegistry,r=(0,o.Z)(e,y),c=(0,s.useState)(),l=(0,n.Z)(c,2),d=l[0],v=l[1];return(0,s.useEffect)((function(){var e,r;t&&(null===(e=t())||void 0===e||null===(r=e.register)||void 0===r||r.call(e,{systemProfileStore:p.ZP})),v((function(){return t?a.Provider:s.Fragment}))}),[]),d?i().createElement(d,t&&{store:t().getStore()},i().createElement(u.Z,r)):f.Z};v.propTypes={getRegistry:l().func};const b=v},57785:(e,t,r)=>{r.d(t,{ZP:()=>f});var n,o=r(93433),s=r(4942),i=r(9036),a=r(59086);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(u[t])};const f=(0,i.Gg)((n={},(0,s.Z)(n,a.aI.LOAD_SYSTEM_PROFILE_FULFILLED,(function(e,t){var r,n,s=t.payload.results,i=s&&s[0]&&s[0].system_profile||{},a=s&&s[0]&&void 0!==s[0].system_profile.cloud_provider&&s[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:l(l({loaded:!0},i),{},{ramSize:i.system_memory_bytes&&d(i.system_memory_bytes),repositories:(n=i.yum_repos,n&&n.reduce((function(e,t){return l(l({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})),network:(r=i.network_interfaces,r&&r.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]}))})})})),(0,s.Z)(n,a.aI.LOAD_SYSTEM_PROFILE_PENDING,(function(e){return l(l({},e),{},{systemProfile:{loaded:!1}})})),n),{systemProfile:{loaded:!1}})}}]);
//# sourceMappingURL=../sourcemaps/5963.3d62e0f403eddfe1d8969b21676a66c5.js.map