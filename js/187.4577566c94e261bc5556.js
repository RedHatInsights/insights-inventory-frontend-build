"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[187],{48187:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),c=n.n(r),o=n(75662),a=n(60076),i=n(28962),s=n(71355),l=n(61488);const u=function(){var e=(0,o.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(i.U),insights.chrome.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),c().createElement("div",{className:"inventory"},c().createElement(s.qJ,null),c().createElement(l.Z,null),c().createElement(a.Z,null))}},60076:(e,t,n)=>{n.d(t,{_:()=>y,Z:()=>v});var r=n(4942),c=n(75662),o=n(92950),a=n.n(o),i=n(58061),s=n(30319),l=n(81730);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,o.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(390),n.e(843),n.e(34)]).then(n.bind(n,32034))})),h=(0,o.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(401),n.e(843),n.e(680),n.e(594),n.e(379),n.e(28)]).then(n.bind(n,93028))})),y={table:"/",detail:"/:inventoryId"},v=function(){var e=(0,o.useContext)(s.gE).getRegistry;(0,o.useEffect)((function(){e().register(f(f({},s.ll),(0,l.AF)(s.M)))}),[e]);var t,n,r=(0,c.useHistory)(),u=window.location.pathname.split("/"),v=new URLSearchParams(location.search);return u.shift(),"beta"===u[0]&&u.shift(),t=u[0],n=u[1],Object.values(y).some((function(e){return(0,c.matchPath)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push("".concat(y.table).concat(location.search).concat(location.hash)),a().createElement(o.Suspense,{fallback:""},a().createElement(c.Switch,null,a().createElement(c.Route,{exact:!0,path:y.table,render:function(){var e,t,n,r,c;return a().createElement(p,{status:v.getAll("status"),source:v.getAll("source"),filterbyName:v.getAll("hostname_or_id"),tagsFilter:null===(e=v.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.split)||void 0===n||null===(r=(c=n.call(t,",")).reduce)||void 0===r?void 0:r.call(c,i.Pv,[]),page:v.getAll("page"),perPage:v.getAll("per_page")})},rootClass:"inventory"}),a().createElement(c.Route,{path:y.detail,component:h,rootClass:"inventory"})))}},61488:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(92950),c=n(44745),o=n(80863),a=n(59086);const i=function(){var e=(0,o.Z)(),t=e.isLoading,n=e.hasAccess,i=(0,c.useDispatch)();return(0,r.useEffect)((function(){i({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING")})}),[]),(0,r.useEffect)((function(){t||i({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),payload:{writePermissions:n}})}),[t]),null}},28962:(e,t,n)=>{n.d(t,{U:()=>r});var r="inventory"},80863:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(4942),c=n(45987),o=n(95249),a=["hasAccess"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=function(){var e=(0,o.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]),t=e.hasAccess;return s(s({},(0,c.Z)(e,a)),{},{hasAccess:t})}}}]);