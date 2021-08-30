"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[367],{24788:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(92950),o=n.n(r),i=n(45237),a=n(22663);const s=function(){return o().createElement(a.Z,{appName:"advisor",module:"./SystemDetail",store:(0,i.useStore)(),customItnl:!0,intlProps:{locale:navigator.language}})}},80296:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),i=n(45237),a=n(16530),s=n(22663);const u=function(){var e=(0,a.useRouteMatch)("/:inventoryId").params;return o().createElement(s.Z,{appName:"compliance",module:"./SystemDetail",store:(0,i.useStore)(),customItnl:!0,intlProps:{locale:navigator.language},inventoryId:e.inventoryId,remediationsEnabled:!0})}},18040:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(92950),o=n.n(r),i=n(30319),a=n(22663);const s=function(){var e=(0,r.useContext)(i.gE).getRegistry;return o().createElement(a.Z,{appName:"patch",module:"./SystemDetail",getRegistry:e})}},36076:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),i=n(16530),a=n(30319),s=n(22663);const u=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(a.gE).getRegistry;return o().createElement(s.Z,{appName:"ros",module:"./SystemDetail",getRegistry:t,inventoryId:e.inventoryId})}},44056:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),i=n(16530),a=n(30319),s=n(22663);const u=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(a.gE).getRegistry;return o().createElement(s.Z,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,customItnlProvider:!0,entity:{id:e.inventoryId}})}},63949:(e,t,n)=>{n.d(t,{vu:()=>r.Z,Tq:()=>o.Z,hJ:()=>i.Z,fZ:()=>a.default,ub:()=>s.Z,gw:()=>u.Z});var r=n(80296),o=n(44056),i=n(24788),a=n(95045),s=n(18040),u=n(36076)},5522:(e,t,n)=>{n.d(t,{Z:()=>d});var r,o=n(4942),i=n(59086),a=n(21216),s=n(44457);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={loaded:!1};const d=c((r={},(0,o.Z)(r,i.aI.LOAD_ENTITIES_PENDING,(function(){return l})),(0,o.Z)(r,i.aI.LOAD_ENTITY_PENDING,(function(e){return c(c({},e),{},{loaded:!1})})),(0,o.Z)(r,i.aI.LOAD_ENTITY_FULFILLED,(function(e,t){var n=t.payload;return c(c({},e),{},{loaded:!0,entity:n.results[0]})})),(0,o.Z)(r,i.TP,(function(e,t){var n=t.payload;return c(c({},e),{},{activeApp:n})})),(0,o.Z)(r,i.aI.LOAD_TAGS,a.nN),(0,o.Z)(r,i.aI.LOAD_TAGS_PENDING,(function(e){return c(c({},e),{},{tagModalLoaded:!1})})),(0,o.Z)(r,i.aI.LOAD_TAGS_FULFILLED,a.nN),(0,o.Z)(r,i.Qd,a.vI),(0,o.Z)(r,i.Ji,(function(e,t){var n=t.payload;return c(c({},e),{},{isToggleOpened:null==n?void 0:n.isOpened})})),r),s.ZP)},30319:(e,t,n)=>{n.d(t,{ll:()=>l.ZP,M:()=>l.M,CB:()=>l.CB,gE:()=>d,S1:()=>p});var r,o=n(92950),i=n(34879),a=n(18546),s=n(39851),u=n(57283),c=n.n(u),l=n(81730),d=(0,o.createContext)({getRegistry:function(){}});function p(){r=new i.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new a.xI({},[r.getMiddleware(),c(),(0,s.default)({errorDescriptionKey:["detail","stack"]})].concat(t))}},57544:(e,t,n)=>{n.d(t,{Z:()=>c});var r,o=n(4942),i=n(18546),a=n(59086);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=(0,i.Gg)((r={},(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING"),(function(e){return u(u({},e),{},{loadingFailed:!1,loading:!0,writePermissions:void 0})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),(function(e,t){var n=t.payload;return u(u({},e),{},{loading:!1,loadingFailed:!1,writePermissions:n.writePermissions})})),(0,o.Z)(r,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FAILED"),(function(e){return u(u({},e),{},{loading:!1,loadingFailed:!0})})),r),{loading:!0,writePermissions:!1,loadingFailed:!1})},81730:(e,t,n)=>{n.d(t,{zw:()=>d.ZP,gA:()=>p.Z,M:()=>g,CB:()=>E,AF:()=>L,OL:()=>P,ZP:()=>D});var r,o=n(4942),i=n(59086),a=n(57785),s=n(63949),u=n(18546),c=n(35240),l=n(35435),d=n(21216),p=n(5522),v=n(57544);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={loaded:!1,selected:new Map};function m(e){var t,n;return O(O({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:s.fZ},{title:"Advisor",name:"advisor",component:s.hJ},{title:"Vulnerability",name:"vulnerabilities",component:s.Tq},{title:"Compliance",name:"compliance",component:s.vu},{title:"Patch",name:"patch",component:s.ub},(!insights.chrome.isProd||insights.chrome.isProd&&(null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n?void 0:n.isBeta()))&&{title:"Resource Optimization",name:"ros",component:s.gw}].filter(Boolean)})}var I={notifications:l.ee,systemProfileStore:a.ZP,permissionsReducer:v.Z},g=(0,u.Gg)((r={},(0,o.Z)(r,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return O(O({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})})),(0,o.Z)(r,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return O(O({},e),{},{rows:(0,c.r0)([e.rows,n.results.map((function(t){return O(O({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(r,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),O(O({},e),{},{selected:new Map(r)})})),(0,o.Z)(r,i.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,O(O({},o||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return O(O({},e),{},{selected:new Map(r)})})),(0,o.Z)(r,"FILTER_SELECT",(function(e){return O(O({},e),{},{selected:{}})})),(0,o.Z)(r,i.uW,(function(e,t){var n=t.payload;return O(O({},e),{},{activeFilters:n.filtersList})})),(0,o.Z)(r,i.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),o=parseInt(n.page,10);return O(O({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(o)?1:o})})),(0,o.Z)(r,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,(function(e,t){var n=t.meta;return O(O({},e),{},{rows:e.rows.map((function(e){return e.id===(null==n?void 0:n.id)?O(O({},e),{},{display_name:null==n?void 0:n.value}):e}))})})),r),y),E=function(){return(0,u.Gg)((0,o.Z)({},i.AL.LOAD_ENTITY_FULFILLED,m),y)};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return O({},e(O({},(0,u.Gg)(O({},d.ZP),O(O({},d.W2),t))(n,r)),r))}}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return O({},e(O({},(0,u.Gg)(O({},p.Z),O(O({},p.defaultState),t))(n,r)),r))}}}const D=I},44457:(e,t,n)=>{n.d(t,{ZP:()=>c});var r,o=n(4942),i=n(59086);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),t&&(0,o.Z)({},t,{isLoaded:!1}))})}const c=(r={},(0,o.Z)(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return u(e,"advisor")})),(0,o.Z)(r,i.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return u(e,"cve")})),(0,o.Z)(r,i.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return u(e,"patch")})),(0,o.Z)(r,i.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return u(e,"compliance")})),(0,o.Z)(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,(function(e,t){var n=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})})),(0,o.Z)(r,i.dF.LOAD_APPLICABLE_CVES_FULFILLED,(function(e,t){var n,r,o,i,a,u,c,l,d=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{cve:{isLoaded:!0,critical:{count:(null==d||null===(n=d.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==d||null===(o=d.moderate)||void 0===o||null===(i=o.meta)||void 0===i?void 0:i.total_items)||0},important:{count:(null==d||null===(a=d.important)||void 0===a||null===(u=a.meta)||void 0===u?void 0:u.total_items)||0},low:{count:(null==d||null===(c=d.low)||void 0===c||null===(l=c.meta)||void 0===l?void 0:l.total_items)||0}}})})})),(0,o.Z)(r,i.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,(function(e,t){var n,r,o,i,a,u,c=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{patch:{isLoaded:!0,bug:{count:(null==c||null===(n=c.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==c||null===(o=c.data)||void 0===o||null===(i=o.attributes)||void 0===i?void 0:i.rhea_count)||0},security:{count:(null==c||null===(a=c.data)||void 0===a||null===(u=a.attributes)||void 0===u?void 0:u.rhsa_count)||0}}})})})),(0,o.Z)(r,i.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,(function(e,t){var n,r,o=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{compliance:{isLoaded:!0,profiles:null==o||null===(n=o.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})})),r)}}]);