"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7406,8637],{48187:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),a=n(75662),l=n(60076),c=n(28962),i=n(71355),s=n(371);const u=function(){var e=(0,a.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(c.U),insights.chrome.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(i.NotificationsPortal,null),o().createElement(s.r,{appName:"inventory"},o().createElement(l.Z,null)))}},28412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(29439),o=n(92950),a=n.n(o),l=n(75662),c=n(32384),i=n(30319),s=n(48187),u=n(35240),d=(n(94500),n(47468));const p=function(){var e=(0,o.useState)(),t=(0,r.Z)(e,2),n=t[0],p=t[1],f=null==n?void 0:n.getStore();return(0,o.useEffect)((function(){return p((0,i.S1)()),function(){p(void 0)}}),[]),n?a().createElement(i.gE.Provider,{value:{getRegistry:function(){return n}}},a().createElement(c.Provider,{store:f},a().createElement(l.BrowserRouter,{basename:(0,u.eb)(window.location.pathname)},a().createElement(s.Z,null)))):a().createElement(d.Z,null)}},60076:(e,t,n)=>{n.d(t,{Z:()=>g,_:()=>h});var r=n(4942),o=n(75662),a=n(92950),l=n.n(a),c=n(58061),i=n(30319),s=n(14122),u=n(13784);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,a.lazy)((function(){return Promise.all([n.e(4448),n.e(7279),n.e(4090),n.e(2564),n.e(5543)]).then(n.bind(n,94800))})),v=(0,a.lazy)((function(){return Promise.all([n.e(4448),n.e(7279),n.e(4090),n.e(2564),n.e(1109)]).then(n.bind(n,93028))})),h={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId"},g=function(){var e=(0,a.useContext)(i.gE).getRegistry;(0,a.useEffect)((function(){e().register(p(p({},i.ll),(0,s.AF)(i.M)))}),[e]);var t=new URLSearchParams(location.search);return l().createElement(a.Suspense,{fallback:""},l().createElement(o.Switch,null,l().createElement(o.Route,{exact:!0,path:h.table,render:function(){var e,n,r,o,a;return l().createElement(f,{status:t.getAll("status"),source:t.getAll("source"),filterbyName:t.getAll("hostname_or_id"),tagsFilter:null===(e=t.getAll("tags"))||void 0===e||null===(n=e[0])||void 0===n||null===(r=n.split)||void 0===r||null===(o=(a=r.call(n,",")).reduce)||void 0===o?void 0:o.call(a,c.Pv,[]),operatingSystem:t.getAll("operating_system"),rhcdFilter:t.getAll(u.Ih),page:t.getAll("page"),perPage:t.getAll("per_page")})},rootClass:"inventory"}),l().createElement(o.Route,{exact:!0,path:h.detailWithModal,component:v,rootClass:"inventory"}),l().createElement(o.Route,{exact:!0,path:h.detail,component:v,rootClass:"inventory"}),l().createElement(o.Redirect,{path:"*",to:"/"})))}},28962:(e,t,n)=>{n.d(t,{U:()=>r});var r="inventory"}}]);
//# sourceMappingURL=../sourcemaps/7406.f4445e5b741d8e50638fda8cdecb9216.js.map