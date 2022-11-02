"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9927,8637],{371:(e,t,n)=>{n.d(t,{r:()=>c});var r=n(85893),o=n(92950),i=n(76857),a=n(34663),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=function(e){var t,n=e.appName,c=e.children,l=(0,o.useState)(a.lo),u=l[0],f=l[1];return(0,o.useEffect)((function(){var e,t,r,o;n&&(e=void 0,t=void 0,o=function(){var e,t,r;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return[4,(0,a._s)(n,!0)];case 1:return e=o.sent(),t=e.isOrgAdmin,r=e.permissions,f((function(e){return s(s({},e),{isLoading:!1,isOrgAdmin:t,permissions:r})})),[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())})))}),[n]),(0,r.jsx)(a.RM.Provider,s({value:s(s({},u),{hasAccess:(t=(null==u?void 0:u.permissions)||[],function(e,n){return n?(0,a.wP)(t,e):(0,a.Cs)(t,e)})})},{children:u.isLoading?(0,r.jsx)(i.Bullseye,{children:(0,r.jsx)(i.Spinner,{size:"xl"})}):c}))}},39142:(e,t,n)=>{n.d(t,{Z:()=>P});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>g.aI,APPLICATION_SELECTED:()=>g.TP,CHANGE_SORT:()=>g.WH,CLEAR_FILTERS:()=>g.Gs,CLEAR_NOTIFICATIONS:()=>g.wt,CONFIG_CHANGED:()=>g.Uq,ENTITIES_LOADING:()=>g.jZ,FILTER_ENTITIES:()=>g.lP,FILTER_SELECT:()=>g.hI,INVENTORY_ACTION_TYPES:()=>g.AL,SELECT_ENTITY:()=>g.pr,SET_ANSIBLE_HOST:()=>g.Bh,SET_DISPLAY_NAME:()=>g.Ti,SET_INVENTORY_FILTER:()=>g.uW,SET_PAGINATION:()=>g.fT,SHOW_ENTITIES:()=>g.u4,SYSTEM_ISSUE_TYPES:()=>g.dF,TOGGLE_DRAWER:()=>g.Ji,TOGGLE_TAG_MODAL:()=>g.Qd,UPDATE_ENTITIES:()=>g.s$,asyncActions:()=>g.zW,asyncInventory:()=>g.gl,clearFilters:()=>T.K5,clearNotifications:()=>T.L1,configChanged:()=>T.u3,deleteEntity:()=>T.Ks,detailSelect:()=>T.Xe,editAnsibleHost:()=>T.Uw,editDisplayName:()=>T.$Y,entitesDetailReducer:()=>y.CB,entitiesLoading:()=>T.nE,entitiesReducer:()=>y.zw,entityDetailsReducer:()=>y.gA,fetchAllTags:()=>T.C8,fetchOperatingSystems:()=>T.g6,filterEntities:()=>T.CP,filterSelect:()=>T.fg,getAdvisorData:()=>T.gb,getComplianceData:()=>T.Oj,getPatchData:()=>T.k0,getVulnData:()=>T.Fo,loadEntities:()=>T.il,loadEntity:()=>T.A_,loadTags:()=>T.me,mergeWithDetail:()=>y.OL,mergeWithEntities:()=>y.AF,selectEntity:()=>T.CL,setFilter:()=>T.Tv,setPagination:()=>T.Jr,setSort:()=>T.HD,systemIssues:()=>g.AN,systemProfile:()=>T.eR,tableReducer:()=>y.M,toggleDrawer:()=>T.wb,toggleTagModal:()=>T.Ar,updateEntities:()=>T.jB});var o=n(4942),i=n(87462),a=n(45987),s=n(92950),c=n.n(s),l=n(45697),u=n.n(l),f=n(32384),p=n(75662),E=n(371),d=n(47468),m=n(52165),y=n(14122),T=n(3672),g=n(59086),h=n(14918),O=n(63599),b=["componentName","Component","innerRef"],v=["componentName","onLoad","store","history"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=y.OL,A=(0,a.Z)(r,["mergeWithDetail"]),_=function(e){var t=e.componentName,n=e.Component,r=e.innerRef,o=(0,a.Z)(e,b);return n&&t?c().createElement(n,(0,i.Z)({},o,{fallback:c().createElement(d.Z,null),ref:r})):'No AsyncComponent "'+t+'"'};_.propTypes={componentName:u().string,Component:u().node,innerRef:u().shape({current:u().any})};var L=function(e){var t=e.componentName,n=e.onLoad,r=e.store,o=e.history,l=(0,a.Z)(e,v),u=(0,s.useMemo)((function(){return(0,m.g)(r,void 0,void 0,!0)}),[t])[t];return(0,s.useEffect)((function(){t&&(null==n||n(N(N(N({},A),h),{},{api:O,mergeWithDetail:I})))}),[t]),c().createElement(E.r,{appName:"inventory"},c().createElement(f.Provider,{store:r},c().createElement(p.Router,{history:o},c().createElement(_,(0,i.Z)({},l,{componentName:t,Component:u})))))};L.propTypes={store:u().object,onLoad:u().func,componentName:u().string,history:u().object},L.defaultProps={onLoad:function(){}};const P=L},62201:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,useOperatingSystemFilter:()=>s.useOperatingSystemFilter});var r=n(87462),o=n(92950),i=n.n(o),a=n(39142),s=n(98516),c=function(e){return i().createElement(a.Z,(0,r.Z)({componentName:"InventoryTable"},e))};const l=i().forwardRef((function(e,t){return i().createElement(c,(0,r.Z)({innerRef:t},e))}))}}]);
//# sourceMappingURL=../sourcemaps/9927.1905c4927cc7eaf19389d59cb60ee97e.js.map