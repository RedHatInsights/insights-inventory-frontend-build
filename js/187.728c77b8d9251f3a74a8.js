(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[187],{48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),c=n.n(r),o=n(16530),a=n(60076),s=n(28962),i=n(71355),l=n(61488);const u=function(){var e=(0,o.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(s.U),insights.chrome.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),c().createElement("div",{className:"inventory"},c().createElement(i.qJ,null),c().createElement(l.Z,null),c().createElement(a.Z,null))}},60076:(e,t,n)=>{"use strict";n.d(t,{_:()=>u,Z:()=>h});var r=n(16530),c=n(92950),o=n.n(c),a=n(58061),s=n(30319),i=(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(390),n.e(843),n.e(34)]).then(n.bind(n,32034))})),l=(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(401),n.e(843),n.e(680),n.e(594),n.e(379),n.e(28)]).then(n.bind(n,93028))})),u={table:"/",detail:"/:inventoryId"},h=function(){var e=(0,c.useContext)(s.gE).getRegistry;(0,c.useEffect)((function(){e().register(s.ll)}),[e]);var t,n,h=(0,r.useHistory)(),f=window.location.pathname.split("/"),p=new URLSearchParams(location.search);return f.shift(),"beta"===f[0]&&f.shift(),t=f[0],n=f[1],Object.values(u).some((function(e){return(0,r.matchPath)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||h.push("".concat(u.table).concat(location.search).concat(location.hash)),o().createElement(c.Suspense,{fallback:""},o().createElement(r.Switch,null,o().createElement(r.Route,{exact:!0,path:u.table,render:function(){var e,t,n,r,c;return o().createElement(i,{status:p.getAll("status"),source:p.getAll("source"),filterbyName:p.getAll("hostname_or_id"),tagsFilter:null===(e=p.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.split)||void 0===n||null===(r=(c=n.call(t,",")).reduce)||void 0===r?void 0:r.call(c,a.Pv,[]),page:p.getAll("page"),perPage:p.getAll("per_page")})},rootClass:"inventory"}),o().createElement(r.Route,{path:u.detail,component:l,rootClass:"inventory"})))}},61488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),c=n(557),o=n(80863),a=n(59086);const s=function(){var e=(0,o.Z)(),t=e.isLoading,n=e.hasAccess,s=(0,c.useDispatch)();return(0,r.useEffect)((function(){s({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING")})}),[]),(0,r.useEffect)((function(){t||s({type:"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),payload:{writePermissions:n}})}),[t]),null}},28962:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});var r="inventory"},80863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(96156),c=n(81253),o=n(95249);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const i=function(){var e=(0,o.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]),t=e.hasAccess;return s(s({},(0,c.Z)(e,["hasAccess"])),{},{hasAccess:t})}}}]);