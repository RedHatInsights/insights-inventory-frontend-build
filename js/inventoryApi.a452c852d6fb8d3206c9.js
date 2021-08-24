"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[931,784],{13784:(e,t,r)=>{r.d(t,{ud:()=>u,UC:()=>c,m5:()=>E,yc:()=>d,p9:()=>_,jv:()=>p,Gw:()=>I,FW:()=>O,js:()=>A,Tk:()=>T,Nu:()=>v,YQ:()=>f,K$:()=>y,KS:()=>g,xb:()=>S,h3:()=>L});var n=r(93324),i=r(4942),l=r(92950),a=r(94778);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="hostname_or_id",c="textual",E="tags",d="staleness",_="registered_with",p=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"}],I=[{label:"Insights",value:"insights"}],O=(0,l.createContext)({}),A={staleFilter:["fresh","stale"],registeredWithFilter:["insights"]};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return s(s({},e),{},(0,i.Z)({},r.key,r[t].reduce((function(e,t){return s(s({},e),{},(0,i.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var v=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),l=r[0],a=r[1],o=r[2];return s(s({},e),{},(0,i.Z)({},o,s(s({},e[(null==o?void 0:o.title)||o]),{},(0,i.Z)({},(null==l?void 0:l.title)||l,{isSelected:!0,group:{value:(null==o?void 0:o.title)||o,label:(null==o?void 0:o.title)||o},item:{value:(null==l?void 0:l.title)||l,meta:{tag:{key:(null==l?void 0:l.title)||l,value:(null==a?void 0:a.title)||a}}}}))))}),{})};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return t.value===u?s(s({},e),{},{textFilter:t.filter}):"tagFilters"in t?s(s({},e),{},{tagFilters:T(t.tagFilters)}):"staleFilter"in t?s(s({},e),{},{staleFilter:t.staleFilter}):"registeredWithFilter"in t?s(s({},e),{},{registeredWithFilter:t.registeredWithFilter}):e}),s({textFilter:"",tagFilters:{}},A))}var y=function(e,t,r){var n,i,l,o,u,c,E,d,_,p=(null==e||null===(n=e.items)||void 0===n?void 0:n.length)>e.per_page?null==e||null===(i=e.items)||void 0===i?void 0:i.slice(((null==e?void 0:e.page)-1)*e.per_page,(null==e?void 0:e.page)*e.per_page):null==e?void 0:e.items,I=s(s(s({},e.hasItems&&{sortBy:null==e||null===(l=e.sortBy)||void 0===l?void 0:l.key,orderDirection:null==e||null===(o=e.sortBy)||void 0===o||null===(u=o.direction)||void 0===u?void 0:u.toUpperCase()}),e),{},{filters:(null==e?void 0:e.filters)||(null==e?void 0:e.activeFilters),orderBy:(null==e?void 0:e.orderBy)||(null==e||null===(c=e.sortBy)||void 0===c?void 0:c.key),orderDirection:(null==e||null===(E=e.orderDirection)||void 0===E?void 0:E.toUpperCase())||(null==e||null===(d=e.sortBy)||void 0===d||null===(_=d.direction)||void 0===_?void 0:_.toUpperCase())},(null==p?void 0:p.length)>0&&{itemsPage:null==e?void 0:e.page,page:1});return(0,a.il)(p,I,{showTags:t},r)},g=function(e,t){return e.payload.then((function(e){return t(),e})),e},S=function(e){return!e||0===(null==e?void 0:e.length)},L=function(e,t,r,n){return[!S(e)&&{staleFilter:Array.isArray(e)?e:[e]},!S(r)&&{tagFilters:Array.isArray(r)?r:[r]},!S(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!S(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!S(e)||!S(r)||!S(n))&&S(t)&&{registeredWithFilter:[]},(!S(t)||!S(r)||!S(n))&&S(e)&&{staleFilter:[]}].filter(Boolean)}},66702:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n.default,INVENTORY_API_BASE:()=>n.$3,constructTags:()=>n.sG,filtersReducer:()=>n.Ae,getAllTags:()=>n.Ys,getEntities:()=>n.uc,getEntitySystemProfile:()=>n.wC,getTags:()=>n.NJ,hosts:()=>n.E7,instance:()=>n.eE,mapData:()=>n.YW,mapTags:()=>n.$1,tags:()=>n.pJ,advisor:()=>i.Zs,compliance:()=>i.As,cves:()=>i.Tq,patch:()=>i.r$,systemIssuesInstance:()=>i.qh});var n=r(26105),i=r(75588)},59086:(e,t,r)=>{r.d(t,{zW:()=>s,gl:()=>u,AN:()=>c,aI:()=>E,AL:()=>d,dF:()=>_,wt:()=>p,pr:()=>I,uW:()=>O,fT:()=>A,Ti:()=>T,Bh:()=>v,s$:()=>f,WH:()=>y,lP:()=>g,TP:()=>S,u4:()=>L,hI:()=>D,jZ:()=>h,Gs:()=>P,Qd:()=>N,Uq:()=>b,Ji:()=>F});var n=r(4942),i=r(24350);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=function(e){var t;return null==e||null===(t=e.reduce)||void 0===t?void 0:t.call(e,(function(e,t){var r;return a(a({},e),{},(r={},(0,n.Z)(r,t,t),(0,n.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,n.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,n.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{})},s=["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS","LOAD_SYSTEM_PROFILE","SET_ANSIBLE_HOST"],u=["LOAD_ENTITIES","LOAD_ENTITY","REMOVE_ENTITY","LOAD_SYSTEM_PROFILE","SET_DISPLAY_NAME","SET_ANSIBLE_HOST","LOAD_TAGS","ALL_TAGS"],c=["LOAD_ADVISOR_RECOMMENDATIONS","LOAD_APPLICABLE_CVES","LOAD_APPLICABLE_ADVISORIES","LOAD_COMPLIANCE_POLICIES"],E=a(a(a({},r.n(i)()(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(function(e){return e}))),o(s)),o(u)),d=o(u),_=o(c),p="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",I="SELECT_ENTITY",O="SET_INVENTORY_FILTER",A="SET_PAGINATION",T="SET_DISPLAY_NAME",v="SET_ANSIBLE_HOST",f="UPDATE_ENTITIES",y="CHANGE_SORT",g="FILTER_ENTITIES",S="APPLICATION_SELECTED",L="SHOW_ENTITIES",D="FILTER_SELECT",h="ENTITIES_LOADING",P="CLEAR_FILTERS",N="TOGGLE_TAG_MODAL",b="CONFIG_CHANGED",F="TOGGLE_INVENTORY_DRAWER"},94778:(e,t,r)=>{r.d(t,{gb:()=>l.gb,Oj:()=>l.Oj,k0:()=>l.k0,Fo:()=>l.Fo,K5:()=>a.K5,u3:()=>a.u3,Xe:()=>a.Xe,nE:()=>a.nE,C8:()=>a.C8,CP:()=>a.CP,fg:()=>a.fg,il:()=>a.il,A_:()=>a.A_,me:()=>a.me,CL:()=>a.CL,HD:()=>a.HD,wb:()=>a.wb,Ar:()=>a.Ar,jB:()=>a.jB,Ks:()=>o,Tv:()=>s,L1:()=>u,$Y:()=>c,Jr:()=>E,eR:()=>d,Uw:()=>_});var n=r(59086),i=r(66702),l=r(87637),a=r(8622),o=function(e,t){return{type:n.aI.REMOVE_ENTITY,payload:i.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},s=function(e){return{type:n.uW,payload:{filtersList:e}}},u=function(){return{type:n.wt}},c=function(e,t){return{type:n.aI.UPDATE_DISPLAY_NAME,payload:i.hosts.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},E=function(e,t){return{type:n.fT,payload:{page:e,perPage:t}}},d=function(e){return{type:n.aI.LOAD_SYSTEM_PROFILE,payload:(0,i.getEntitySystemProfile)(e,{})}},_=function(e,t){return{type:n.aI.SET_ANSIBLE_HOST,payload:i.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},87637:(e,t,r)=>{r.d(t,{gb:()=>l,Fo:()=>a,k0:()=>o,Oj:()=>s});var n=r(59086),i=r(66702),l=function(e){return{type:n.dF.LOAD_ADVISOR_RECOMMENDATIONS,payload:(0,i.advisor)(e)}},a=function(e){return{type:n.dF.LOAD_APPLICABLE_CVES,payload:(0,i.cves)(e)}},o=function(e){return{type:n.dF.LOAD_APPLICABLE_ADVISORIES,payload:(0,i.patch)(e)}},s=function(e){return{type:n.dF.LOAD_COMPLIANCE_POLICIES,payload:(0,i.compliance)(e)}}}}]);
//# sourceMappingURL=../sourcemaps/inventoryApi.3c4e5fc61373fb72c87c.js.map