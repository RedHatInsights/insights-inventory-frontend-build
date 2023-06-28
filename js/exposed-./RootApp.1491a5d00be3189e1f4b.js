"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8178],{48187:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(92950),o=n.n(r),a=n(75662),c=n(8567),l=n(71355),i=n(55140),u=n(371);const s=function(){var e=(0,a.useHistory)(),t=(0,i.Z)();return(0,r.useEffect)((function(){return t.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),o().createElement("div",{className:"inventory"},o().createElement(l.NotificationsPortal,null),o().createElement(u.r,{appName:"inventory"},o().createElement(c.Z,null)))}},28412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(92950),o=n.n(r),a=n(75662),c=n(50533),l=n(30319),i=n(38991),u=n(48187),s=n(35240),p=(n(94500),n(47468));const d=function(){var e=(0,r.useMemo)((function(){var e=(0,l.bh)();return{register:function(t){return e.replaceReducer((0,l.UE)(t))},getStore:function(){return e}}}),[]);return e?o().createElement(i.Z.Provider,{value:{getRegistry:function(){return e}}},o().createElement(c.Provider,{store:e.getStore()},o().createElement(a.BrowserRouter,{basename:(0,s.eb)(window.location.pathname)},o().createElement(u.Z,null)))):o().createElement(p.Z,null)}},8567:(e,t,n)=>{n.d(t,{Z:()=>g,_:()=>E});var r=n(87462),o=n(75662),a=n(92950),c=n.n(a),l=n(58061),i=n(454),u=n(79161),s=n(9947),p=n(75106),d=n(56700);const m=function(){return c().createElement(s.u,null,c().createElement(p.B,null,c().createElement(d.Z,null)))};var f=(0,a.lazy)((function(){return Promise.all([n.e(3453),n.e(2185),n.e(5039),n.e(4733),n.e(9357),n.e(4878),n.e(1747),n.e(5866),n.e(6123),n.e(2712),n.e(9438),n.e(5223),n.e(1780),n.e(259),n.e(2511),n.e(5768)]).then(n.bind(n,15739))})),v=(0,a.lazy)((function(){return Promise.all([n.e(3453),n.e(2185),n.e(5039),n.e(4733),n.e(2712),n.e(9438),n.e(5855),n.e(5223),n.e(4738)]).then(n.bind(n,11821))})),y=(0,a.lazy)((function(){return Promise.all([n.e(3453),n.e(2185),n.e(5039),n.e(4733),n.e(9357),n.e(1747),n.e(6123),n.e(259),n.e(2884),n.e(2511),n.e(7856)]).then(n.bind(n,2742))})),h=(0,a.lazy)((function(){return Promise.all([n.e(3453),n.e(2185),n.e(5039),n.e(4733),n.e(9357),n.e(4878),n.e(1747),n.e(5866),n.e(6123),n.e(1780),n.e(259),n.e(2884),n.e(3822)]).then(n.bind(n,21381))})),b=(0,a.lazy)((function(){return n.e(5857).then(n.bind(n,95857))})),E={table:"/",detail:"/:inventoryId",detailWithModal:"/:inventoryId/:modalId",groups:"/groups",groupDetail:"/groups/:groupId",update:"/:inventoryId/update"},g=function(){var e=(0,a.useMemo)((function(){return(0,l.Qw)()}),[]),t=(0,u.Z)("hbi.ui.inventory-groups");return c().createElement(a.Suspense,{fallback:""},c().createElement(o.Switch,null,c().createElement(o.Route,{exact:!0,path:E.update,component:b,rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:E.table,render:function(){return c().createElement(i.Z,(0,r.Z)({cmp:f,isRbacEnabled:!0},e))},rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:E.groups,component:t?y:m,rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:E.groupDetail,component:t?h:m,rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:E.detailWithModal,component:v,rootClass:"inventory"}),c().createElement(o.Route,{exact:!0,path:E.detail,component:v,rootClass:"inventory"}),c().createElement(o.Redirect,{path:"*",to:"/"})))}},47468:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(92950),o=n.n(r),a=n(52643),c=n(37619);const l=function(){return o().createElement(a.b,null,o().createElement(c.$,{size:"xl"}))}},30319:(e,t,n)=>{n.d(t,{UE:()=>h,bh:()=>y});var r,o=n(4942),a=n(34879),c=n(84885),l=n(57283),i=n.n(l),u=n(81730),s=n(97779),p=n(59086);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=m(m(m({},u.ZP),(0,u.AF)(u.M)),(0,u.OL)((0,u.CB)(p.AL))),v=s.qC,y=function(){r=new a.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.jB)((0,s.UY)(f),{},v(s.md.apply(void 0,[r.getMiddleware(),i(),(0,c.default)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})].concat(t))))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.UY)(m(m({},f),e))}},38991:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)({getRegistry:function(){}})}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RootApp.3eea238f1211f6bed26f61e57cca60aa.js.map