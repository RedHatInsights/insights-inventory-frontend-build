"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[406,564],{48187:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),a=n(75662),c=n(60076),l=n(28962),i=n(71355),s=n(371);const u=function(){var e=(0,a.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(l.U),insights.chrome.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(i.NotificationsPortal,null),o().createElement(s.r,{appName:"inventory"},o().createElement(c.Z,null)))}},28412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(29439),o=n(92950),a=n.n(o),c=n(75662),l=n(32384),i=n(30319),s=n(48187),u=n(35240),f=(n(94500),n(47468));const p=function(){var e=(0,o.useState)(),t=(0,r.Z)(e,2),n=t[0],p=t[1],v=null==n?void 0:n.getStore();return(0,o.useEffect)((function(){return p((0,i.S1)()),function(){p(void 0)}}),[]),n?a().createElement(i.gE.Provider,{value:{getRegistry:function(){return n}}},a().createElement(l.Provider,{store:v},a().createElement(c.BrowserRouter,{basename:(0,u.eb)(window.location.pathname)},a().createElement(s.Z,null)))):a().createElement(f.Z,null)}},60076:(e,t,n)=>{n.d(t,{_:()=>g,Z:()=>h});var r=n(4942),o=n(75662),a=n(92950),c=n.n(a),l=n(58061),i=n(30319),s=n(14122);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,a.lazy)((function(){return Promise.all([n.e(201),n.e(881),n.e(872),n.e(543)]).then(n.bind(n,94800))})),v=(0,a.lazy)((function(){return Promise.all([n.e(201),n.e(881),n.e(872),n.e(109)]).then(n.bind(n,93028))})),g={table:"/",detail:"/:inventoryId"},h=function(){var e=(0,a.useContext)(i.gE).getRegistry;(0,a.useEffect)((function(){e().register(f(f({},i.ll),(0,s.AF)(i.M)))}),[e]);var t=new URLSearchParams(location.search);return c().createElement(a.Suspense,{fallback:""},c().createElement(o.Switch,null,c().createElement(o.Route,{exact:!0,path:g.table,render:function(){var e,n,r,o,a;return c().createElement(p,{status:t.getAll("status"),source:t.getAll("source"),filterbyName:t.getAll("hostname_or_id"),tagsFilter:null===(e=t.getAll("tags"))||void 0===e||null===(n=e[0])||void 0===n||null===(r=n.split)||void 0===r||null===(o=(a=r.call(n,",")).reduce)||void 0===o?void 0:o.call(a,l.Pv,[]),operatingSystem:t.getAll("operating_system"),page:t.getAll("page"),perPage:t.getAll("per_page")})},rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:g.detail,component:v,rootClass:"inventory"}),c().createElement(o.Redirect,{path:"*",to:"/"})))}},28962:(e,t,n)=>{n.d(t,{U:()=>r});var r="inventory"}}]);
//# sourceMappingURL=../sourcemaps/406.7a8efc82ab3d5c6d45b493dac3a749dd.js.map