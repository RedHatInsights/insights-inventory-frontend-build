(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[6648],{59086:(e,r,t)=>{"use strict";t.d(r,{zW:()=>a,gl:()=>s,AN:()=>_,aI:()=>O,AL:()=>u,dF:()=>T,wt:()=>I,pr:()=>f,uW:()=>l,fT:()=>S,Ti:()=>p,Bh:()=>L,s$:()=>A,WH:()=>P,lP:()=>d,TP:()=>N,u4:()=>b,hI:()=>D,jZ:()=>y,Gs:()=>v,Qd:()=>R,Uq:()=>j,Ji:()=>m});var n=t(4942),o=t(24350);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i=function(e){var r;return null==e||null===(r=e.reduce)||void 0===r?void 0:r.call(e,(function(e,r){var t;return E(E({},e),{},(t={},(0,n.Z)(t,r,r),(0,n.Z)(t,"".concat(r,"_PENDING"),"".concat(r,"_PENDING")),(0,n.Z)(t,"".concat(r,"_FULFILLED"),"".concat(r,"_FULFILLED")),(0,n.Z)(t,"".concat(r,"_REJECTED"),"".concat(r,"_REJECTED")),t))}),{})},a=["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS","LOAD_SYSTEM_PROFILE","SET_ANSIBLE_HOST"],s=["LOAD_ENTITIES","LOAD_ENTITY","REMOVE_ENTITY","LOAD_SYSTEM_PROFILE","SET_DISPLAY_NAME","SET_ANSIBLE_HOST","LOAD_TAGS","ALL_TAGS","OPERATING_SYSTEMS"],_=["LOAD_ADVISOR_RECOMMENDATIONS","LOAD_APPLICABLE_CVES","LOAD_APPLICABLE_ADVISORIES","LOAD_COMPLIANCE_POLICIES"],O=E(E(E({},t.n(o)()(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(function(e){return e}))),i(a)),i(s)),u=i(s),T=i(_),I="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",f="SELECT_ENTITY",l="SET_INVENTORY_FILTER",S="SET_PAGINATION",p="SET_DISPLAY_NAME",L="SET_ANSIBLE_HOST",A="UPDATE_ENTITIES",P="CHANGE_SORT",d="FILTER_ENTITIES",N="APPLICATION_SELECTED",b="SHOW_ENTITIES",D="FILTER_SELECT",y="ENTITIES_LOADING",v="CLEAR_FILTERS",R="TOGGLE_TAG_MODAL",j="CONFIG_CHANGED",m="TOGGLE_INVENTORY_DRAWER"},57785:(e,r,t)=>{"use strict";t.r(r),t.d(r,{defaultState:()=>_,sizes:()=>O,formatBytes:()=>u,systemProfilePending:()=>T,calculateRepos:()=>I,calculateInterfaces:()=>f,onSystemProfile:()=>l,default:()=>S});var n,o=t(93433),c=t(4942),E=t(9036),i=t(59086);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _={loaded:!1},O=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],u=function(e){if(0===e||isNaN(Number(e)))return"0 B";var r=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,r)).toFixed(2))," ").concat(O[r])};function T(e){return s(s({},e),{},{systemProfile:{loaded:!1}})}function I(e){return e&&e.reduce((function(e,r){return s(s({},e),r.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[r])}:{disabled:[].concat((0,o.Z)(e.disabled),[r])})}),{enabled:[],disabled:[]})}function f(e){return e&&e.reduce((function(e,r){return{interfaces:[].concat((0,o.Z)(e.interfaces),[r]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(r.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(r.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function l(e,r){var t=r.payload.results,n=t&&t[0]&&t[0].system_profile||{},c=t&&t[0]&&void 0!==t[0].system_profile.cloud_provider&&t[0].system_profile.cloud_provider;return s(s({},e),{},{disabledApps:(0,o.Z)("aws"===c||"azure"===c?[]:["ros"]),systemProfile:s(s({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&u(n.system_memory_bytes),repositories:I(n.yum_repos),network:f(n.network_interfaces)})})}const S=(0,E.Gg)((n={},(0,c.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_FULFILLED,l),(0,c.Z)(n,i.aI.LOAD_SYSTEM_PROFILE_PENDING,T),n),{systemProfile:_})},89465:(e,r,t)=>{var n=t(38777);e.exports=function(e,r,t){"__proto__"==r&&n?n(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}},28483:(e,r,t)=>{var n=t(25063)();e.exports=n},25063:e=>{e.exports=function(e){return function(r,t,n){for(var o=-1,c=Object(r),E=n(r),i=E.length;i--;){var a=E[e?i:++o];if(!1===t(c[a],a,c))break}return r}}},38777:(e,r,t)=>{var n=t(10852),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},6557:e=>{e.exports=function(e){return e}}}]);
//# sourceMappingURL=../sourcemaps/6648.f75125bfbea639435a46931ae6802660.js.map