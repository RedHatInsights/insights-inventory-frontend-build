(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[837,3784,1931,5045],{28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(92950),i=r.n(n),l=r(45697),o=r.n(l),a=r(16530),s=r(557),u=r(30319),c=r(48187),E=r(35240),d=(r(94500),function(){var e=(0,u.S1)();return i().createElement(u.gE.Provider,{value:{getRegistry:function(){return e}}},i().createElement(s.Provider,{store:e.getStore()},i().createElement(a.BrowserRouter,{basename:(0,E.eb)(window.location.pathname)},i().createElement(c.Z,null))))});d.propTypes={useLogger:o().bool},d.defaultProps={useLogger:!1};const p=d},13784:(e,t,r)=>{"use strict";r.d(t,{ud:()=>u,UC:()=>c,m5:()=>E,yc:()=>d,p9:()=>p,jv:()=>f,Gw:()=>_,FW:()=>v,js:()=>I,Tk:()=>O,Nu:()=>g,YQ:()=>T,K$:()=>y,KS:()=>A,xb:()=>S,h3:()=>L});var n=r(34738),i=r(96156),l=r(92950),o=r(94778);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="hostname_or_id",c="textual",E="tags",d="staleness",p="registered_with",f=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"}],_=[{label:"Insights",value:"insights"}],v=(0,l.createContext)({}),I={staleFilter:["fresh","stale"],registeredWithFilter:["insights"]};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return s(s({},e),{},(0,i.Z)({},r.key,r[t].reduce((function(e,t){return s(s({},e),{},(0,i.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var g=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),l=r[0],o=r[1],a=r[2];return s(s({},e),{},(0,i.Z)({},a,s(s({},e[(null==a?void 0:a.title)||a]),{},(0,i.Z)({},(null==l?void 0:l.title)||l,{isSelected:!0,group:{value:(null==a?void 0:a.title)||a,label:(null==a?void 0:a.title)||a},item:{value:(null==l?void 0:l.title)||l,meta:{tag:{key:(null==l?void 0:l.title)||l,value:(null==o?void 0:o.title)||o}}}}))))}),{})};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return t.value===u?s(s({},e),{},{textFilter:t.filter}):"tagFilters"in t?s(s({},e),{},{tagFilters:O(t.tagFilters)}):"staleFilter"in t?s(s({},e),{},{staleFilter:t.staleFilter}):"registeredWithFilter"in t?s(s({},e),{},{registeredWithFilter:t.registeredWithFilter}):e}),s({textFilter:"",tagFilters:{}},I))}var y=function(e,t,r){var n,i,l,a,u,c,E,d,p,f=(null==e||null===(n=e.items)||void 0===n?void 0:n.length)>e.per_page?null==e||null===(i=e.items)||void 0===i?void 0:i.slice(((null==e?void 0:e.page)-1)*e.per_page,(null==e?void 0:e.page)*e.per_page):null==e?void 0:e.items,_=s(s(s({},e.hasItems&&{sortBy:null==e||null===(l=e.sortBy)||void 0===l?void 0:l.key,orderDirection:null==e||null===(a=e.sortBy)||void 0===a||null===(u=a.direction)||void 0===u?void 0:u.toUpperCase()}),e),{},{filters:(null==e?void 0:e.filters)||(null==e?void 0:e.activeFilters),orderBy:(null==e?void 0:e.orderBy)||(null==e||null===(c=e.sortBy)||void 0===c?void 0:c.key),orderDirection:(null==e||null===(E=e.orderDirection)||void 0===E?void 0:E.toUpperCase())||(null==e||null===(d=e.sortBy)||void 0===d||null===(p=d.direction)||void 0===p?void 0:p.toUpperCase())},(null==f?void 0:f.length)>0&&{itemsPage:null==e?void 0:e.page,page:1});return(0,o.il)(f,_,{showTags:t},r)},A=function(e,t){return e.payload.then((function(e){return t(),e})),e},S=function(e){return!e||0===(null==e?void 0:e.length)},L=function(e,t,r,n){return[!S(e)&&{staleFilter:Array.isArray(e)?e:[e]},!S(r)&&{tagFilters:Array.isArray(r)?r:[r]},!S(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!S(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!S(e)||!S(r)||!S(n))&&S(t)&&{registeredWithFilter:[]},(!S(t)||!S(r)||!S(n))&&S(e)&&{staleFilter:[]}].filter(Boolean)}},66702:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n.default,INVENTORY_API_BASE:()=>n.$3,constructTags:()=>n.sG,filtersReducer:()=>n.Ae,getAllTags:()=>n.Ys,getEntities:()=>n.uc,getEntitySystemProfile:()=>n.wC,getTags:()=>n.NJ,hosts:()=>n.E7,instance:()=>n.eE,mapData:()=>n.YW,mapTags:()=>n.$1,tags:()=>n.pJ,advisor:()=>i.Zs,compliance:()=>i.As,cves:()=>i.Tq,patch:()=>i.r$,systemIssuesInstance:()=>i.qh});var n=r(26105),i=r(75588)},95045:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TextInputModal:()=>E.Z,default:()=>f});var n=r(34738),i=r(81253),l=r(92950),o=r.n(l),a=r(557),s=r(45697),u=r.n(s),c=r(24070),E=r(55426),d=r(47468),p=function(e){var t=e.getRegisty,r=(0,i.Z)(e,["getRegisty"]),s=(0,l.useState)(),u=(0,n.Z)(s,2),E=u[0],p=u[1];return(0,l.useEffect)((function(){p((function(){return t?a.Provider:l.Fragment}))}),[]),E?o().createElement(E,t&&{store:t().getStore()},o().createElement(c.Z,r)):d.Z};p.propTypes={getRegisty:u().func};const f=p},59086:(e,t,r)=>{"use strict";r.d(t,{zW:()=>s,gl:()=>u,AN:()=>c,aI:()=>E,AL:()=>d,dF:()=>p,wt:()=>f,pr:()=>_,uW:()=>v,fT:()=>I,Ti:()=>O,Bh:()=>g,s$:()=>T,WH:()=>y,lP:()=>A,TP:()=>S,u4:()=>L,hI:()=>D,jZ:()=>P,Gs:()=>h,Qd:()=>b,Uq:()=>N,Ji:()=>m});var n=r(96156),i=r(24350);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=function(e){var t;return null==e||null===(t=e.reduce)||void 0===t?void 0:t.call(e,(function(e,t){var r;return o(o({},e),{},(r={},(0,n.Z)(r,t,t),(0,n.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,n.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,n.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{})},s=["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS","LOAD_SYSTEM_PROFILE","SET_ANSIBLE_HOST"],u=["LOAD_ENTITIES","LOAD_ENTITY","REMOVE_ENTITY","LOAD_SYSTEM_PROFILE","SET_DISPLAY_NAME","SET_ANSIBLE_HOST","LOAD_TAGS","ALL_TAGS"],c=["LOAD_ADVISOR_RECOMMENDATIONS","LOAD_APPLICABLE_CVES","LOAD_APPLICABLE_ADVISORIES","LOAD_COMPLIANCE_POLICIES"],E=o(o(o({},r.n(i)()(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(function(e){return e}))),a(s)),a(u)),d=a(u),p=a(c),f="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",_="SELECT_ENTITY",v="SET_INVENTORY_FILTER",I="SET_PAGINATION",O="SET_DISPLAY_NAME",g="SET_ANSIBLE_HOST",T="UPDATE_ENTITIES",y="CHANGE_SORT",A="FILTER_ENTITIES",S="APPLICATION_SELECTED",L="SHOW_ENTITIES",D="FILTER_SELECT",P="ENTITIES_LOADING",h="CLEAR_FILTERS",b="TOGGLE_TAG_MODAL",N="CONFIG_CHANGED",m="TOGGLE_INVENTORY_DRAWER"},94778:(e,t,r)=>{"use strict";r.d(t,{gb:()=>l.gb,Oj:()=>l.Oj,k0:()=>l.k0,Fo:()=>l.Fo,K5:()=>o.K5,u3:()=>o.u3,Xe:()=>o.Xe,nE:()=>o.nE,C8:()=>o.C8,CP:()=>o.CP,fg:()=>o.fg,il:()=>o.il,A_:()=>o.A_,me:()=>o.me,CL:()=>o.CL,HD:()=>o.HD,wb:()=>o.wb,Ar:()=>o.Ar,jB:()=>o.jB,Ks:()=>a,Tv:()=>s,L1:()=>u,$Y:()=>c,Jr:()=>E,eR:()=>d,Uw:()=>p});var n=r(59086),i=r(66702),l=r(87637),o=r(8622),a=function(e,t){return{type:n.aI.REMOVE_ENTITY,payload:i.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},s=function(e){return{type:n.uW,payload:{filtersList:e}}},u=function(){return{type:n.wt}},c=function(e,t){return{type:n.aI.UPDATE_DISPLAY_NAME,payload:i.hosts.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},E=function(e,t){return{type:n.fT,payload:{page:e,perPage:t}}},d=function(e){return{type:n.aI.LOAD_SYSTEM_PROFILE,payload:(0,i.getEntitySystemProfile)(e,{})}},p=function(e,t){return{type:n.aI.SET_ANSIBLE_HOST,payload:i.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},87637:(e,t,r)=>{"use strict";r.d(t,{gb:()=>l,Fo:()=>o,k0:()=>a,Oj:()=>s});var n=r(59086),i=r(66702),l=function(e){return{type:n.dF.LOAD_ADVISOR_RECOMMENDATIONS,payload:(0,i.advisor)(e)}},o=function(e){return{type:n.dF.LOAD_APPLICABLE_CVES,payload:(0,i.cves)(e)}},a=function(e){return{type:n.dF.LOAD_APPLICABLE_ADVISORIES,payload:(0,i.patch)(e)}},s=function(e){return{type:n.dF.LOAD_COMPLIANCE_POLICIES,payload:(0,i.compliance)(e)}}}}]);
//# sourceMappingURL=../sourcemaps/837.2e949a261ffec4c9d3a5.js.map