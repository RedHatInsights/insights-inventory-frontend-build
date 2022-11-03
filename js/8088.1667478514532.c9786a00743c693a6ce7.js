"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8088,8637],{371:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(85893),o=n(92950),i=n(76857),a=n(34663),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},s=function(e){var t,n=e.appName,s=e.children,l=(0,o.useState)(a.lo),u=l[0],f=l[1];return(0,o.useEffect)((function(){var e,t,r,o;n&&(e=void 0,t=void 0,o=function(){var e,t,r;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:return[4,(0,a._s)(n,!0)];case 1:return e=o.sent(),t=e.isOrgAdmin,r=e.permissions,f((function(e){return c(c({},e),{isLoading:!1,isOrgAdmin:t,permissions:r})})),[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())})))}),[n]),(0,r.jsx)(a.RM.Provider,c({value:c(c({},u),{hasAccess:(t=(null==u?void 0:u.permissions)||[],function(e,n){return n?(0,a.wP)(t,e):(0,a.Cs)(t,e)})})},{children:u.isLoading?(0,r.jsx)(i.Bullseye,{children:(0,r.jsx)(i.Spinner,{size:"xl"})}):s}))}},7379:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(87462),o=n(92950),i=n.n(o),a=n(39142),c=function(e){return i().createElement(a.Z,(0,r.Z)({componentName:"AppInfo"},e))};const s=i().forwardRef((function(e,t){return i().createElement(c,(0,r.Z)({innerRef:t},e))}))},39142:(e,t,n)=>{n.d(t,{Z:()=>P});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>h.aI,APPLICATION_SELECTED:()=>h.TP,CHANGE_SORT:()=>h.WH,CLEAR_FILTERS:()=>h.Gs,CLEAR_NOTIFICATIONS:()=>h.wt,CONFIG_CHANGED:()=>h.Uq,ENTITIES_LOADING:()=>h.jZ,FILTER_ENTITIES:()=>h.lP,FILTER_SELECT:()=>h.hI,INVENTORY_ACTION_TYPES:()=>h.AL,SELECT_ENTITY:()=>h.pr,SET_ANSIBLE_HOST:()=>h.Bh,SET_DISPLAY_NAME:()=>h.Ti,SET_INVENTORY_FILTER:()=>h.uW,SET_PAGINATION:()=>h.fT,SHOW_ENTITIES:()=>h.u4,SYSTEM_ISSUE_TYPES:()=>h.dF,TOGGLE_DRAWER:()=>h.Ji,TOGGLE_TAG_MODAL:()=>h.Qd,UPDATE_ENTITIES:()=>h.s$,asyncActions:()=>h.zW,asyncInventory:()=>h.gl,clearFilters:()=>T.K5,clearNotifications:()=>T.L1,configChanged:()=>T.u3,deleteEntity:()=>T.Ks,detailSelect:()=>T.Xe,editAnsibleHost:()=>T.Uw,editDisplayName:()=>T.$Y,entitesDetailReducer:()=>y.CB,entitiesLoading:()=>T.nE,entitiesReducer:()=>y.zw,entityDetailsReducer:()=>y.gA,fetchAllTags:()=>T.C8,fetchOperatingSystems:()=>T.g6,filterEntities:()=>T.CP,filterSelect:()=>T.fg,getAdvisorData:()=>T.gb,getComplianceData:()=>T.Oj,getPatchData:()=>T.k0,getVulnData:()=>T.Fo,loadEntities:()=>T.il,loadEntity:()=>T.A_,loadTags:()=>T.me,mergeWithDetail:()=>y.OL,mergeWithEntities:()=>y.AF,selectEntity:()=>T.CL,setFilter:()=>T.Tv,setPagination:()=>T.Jr,setSort:()=>T.HD,systemIssues:()=>h.AN,systemProfile:()=>T.eR,tableReducer:()=>y.M,toggleDrawer:()=>T.wb,toggleTagModal:()=>T.Ar,updateEntities:()=>T.jB});var o=n(4942),i=n(87462),a=n(45987),c=n(92950),s=n.n(c),l=n(45697),u=n.n(l),f=n(32384),p=n(75662),E=n(371),d=n(47468),m=n(52165),y=n(14122),T=n(3672),h=n(59086),g=n(14918),O=n(63599),b=["componentName","Component","innerRef"],v=["componentName","onLoad","store","history"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=y.OL,I=(0,a.Z)(r,["mergeWithDetail"]),_=function(e){var t=e.componentName,n=e.Component,r=e.innerRef,o=(0,a.Z)(e,b);return n&&t?s().createElement(n,(0,i.Z)({},o,{fallback:s().createElement(d.Z,null),ref:r})):'No AsyncComponent "'+t+'"'};_.propTypes={componentName:u().string,Component:u().node,innerRef:u().shape({current:u().any})};var L=function(e){var t=e.componentName,n=e.onLoad,r=e.store,o=e.history,l=(0,a.Z)(e,v),u=(0,c.useMemo)((function(){return(0,m.g)(r,void 0,void 0,!0)}),[t])[t];return(0,c.useEffect)((function(){t&&(null==n||n(S(S(S({},I),g),{},{api:O,mergeWithDetail:A})))}),[t]),s().createElement(E.r,{appName:"inventory"},s().createElement(f.Provider,{store:r},s().createElement(p.Router,{history:o},s().createElement(_,(0,i.Z)({},l,{componentName:t,Component:u})))))};L.propTypes={store:u().object,onLoad:u().func,componentName:u().string,history:u().object},L.defaultProps={onLoad:function(){}};const P=L}}]);