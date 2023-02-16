"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8463],{21458:(e,t,r)=>{r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},39142:(e,t,r)=>{r.d(t,{Z:()=>A});var n={};r.r(n),r.d(n,{ACTION_TYPES:()=>v.aI,APPLICATION_SELECTED:()=>v.TP,CHANGE_SORT:()=>v.WH,CLEAR_FILTERS:()=>v.Gs,CLEAR_NOTIFICATIONS:()=>v.wt,CONFIG_CHANGED:()=>v.Uq,ENTITIES_LOADING:()=>v.jZ,FILTER_ENTITIES:()=>v.lP,FILTER_SELECT:()=>v.hI,INVENTORY_ACTION_TYPES:()=>v.AL,SELECT_ENTITY:()=>v.pr,SET_ANSIBLE_HOST:()=>v.Bh,SET_DISPLAY_NAME:()=>v.Ti,SET_INVENTORY_FILTER:()=>v.uW,SET_PAGINATION:()=>v.fT,SHOW_ENTITIES:()=>v.u4,SYSTEM_ISSUE_TYPES:()=>v.dF,TOGGLE_DRAWER:()=>v.Ji,TOGGLE_TAG_MODAL:()=>v.Qd,UPDATE_ENTITIES:()=>v.s$,asyncActions:()=>v.zW,asyncInventory:()=>v.gl,clearFilters:()=>T.K5,clearNotifications:()=>T.L1,configChanged:()=>T.u3,deleteEntity:()=>T.Ks,detailSelect:()=>T.Xe,editAnsibleHost:()=>T.Uw,editDisplayName:()=>T.$Y,entitesDetailReducer:()=>E.CB,entitiesLoading:()=>T.nE,entitiesReducer:()=>E.zw,entityDetailsReducer:()=>E.gA,fetchAllTags:()=>T.C8,fetchGroups:()=>T.bt,fetchOperatingSystems:()=>T.g6,filterEntities:()=>T.CP,filterSelect:()=>T.fg,getAdvisorData:()=>T.gb,getComplianceData:()=>T.Oj,getPatchData:()=>T.k0,getVulnData:()=>T.Fo,loadEntities:()=>T.il,loadEntity:()=>T.A_,loadTags:()=>T.me,mergeWithDetail:()=>E.OL,mergeWithEntities:()=>E.AF,selectEntity:()=>T.CL,setFilter:()=>T.Tv,setPagination:()=>T.Jr,setSort:()=>T.HD,systemIssues:()=>v.AN,systemProfile:()=>T.eR,tableReducer:()=>E.M,toggleDrawer:()=>T.wb,toggleTagModal:()=>T.Ar,updateEntities:()=>T.jB});var o=r(87462),a=r(4942),i=r(45987),c=r(92950),s=r.n(c),u=r(45697),p=r.n(u),l=r(50533),f=r(75662),d=r(371),E=r(90464),T=r(3672),v=r(59086),g=r(14918),P=r(63599),S=r(454),y=["component","onLoad","store","history","innerRef"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=E.OL,I=(0,i.Z)(n,["mergeWithDetail"]),D=function(e){var t=e.component,r=e.onLoad,n=e.store,a=e.history,u=e.innerRef,p=(0,i.Z)(e,y);return(0,c.useEffect)((function(){null==r||r(h(h(h({},I),g),{},{api:P,mergeWithDetail:O}))}),[]),s().createElement(d.r,{appName:"inventory"},s().createElement(l.Provider,{store:n},s().createElement(f.Router,{history:a},s().createElement(S.Z,(0,o.Z)({},p,{isRbacEnabled:!0,inventoryRef:u,store:n,cmp:t})))))};D.propTypes={store:p().object,onLoad:p().func,component:p().elementType.isRequired,history:p().object,innerRef:p().shape({current:p().any})},D.defaultProps={onLoad:function(){}};const A=D},31285:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(87462),o=r(92950),a=r.n(o),i=r(39142),c=r(68595),s=function(e){return a().createElement(i.Z,(0,n.Z)({},e,{component:c.Z}))};const u=a().forwardRef((function(e,t){return a().createElement(s,(0,n.Z)({},e,{innerRef:t}))}))},36494:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(87462),o=r(63366),a=r(26685),i=r(35067),c=r(63480),s=r(26343);const u=[function(e){return"function"==typeof e?(0,s.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,s.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,s.dX)((function(t){return(0,c.Z)(e,t)})):void 0}],p=[function(e){return"function"==typeof e?(0,s.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,s.dX)((function(){return{}}))}];function l(e,t,r){return(0,n.Z)({},r,e,t)}const f=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,c){var s=e(t,r,c);return i?o&&a(s,n)||(n=s):(i=!0,n=s),n}}}(e):void 0},function(e){return e?void 0:function(){return l}}];var d=r(38548),E=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function T(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function v(e,t){return e===t}function g(e){var t=void 0===e?{}:e,r=t.connectHOC,c=void 0===r?a.Z:r,s=t.mapStateToPropsFactories,l=void 0===s?p:s,g=t.mapDispatchToPropsFactories,P=void 0===g?u:g,S=t.mergePropsFactories,y=void 0===S?f:S,m=t.selectorFactory,h=void 0===m?d.ZP:m;return function(e,t,r,a){void 0===a&&(a={});var s=a,u=s.pure,p=void 0===u||u,f=s.areStatesEqual,d=void 0===f?v:f,g=s.areOwnPropsEqual,S=void 0===g?i.Z:g,m=s.areStatePropsEqual,O=void 0===m?i.Z:m,I=s.areMergedPropsEqual,D=void 0===I?i.Z:I,A=(0,o.Z)(s,E),N=T(e,l,"mapStateToProps"),_=T(t,P,"mapDispatchToProps"),b=T(r,y,"mergeProps");return c(h,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:N,initMapDispatchToProps:_,initMergeProps:b,pure:p,areStatesEqual:d,areOwnPropsEqual:S,areStatePropsEqual:O,areMergedPropsEqual:D},A))}}const P=g()},50533:(e,t,r)=>{r.r(t),r.d(t,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=r(67133),o=r(71679);(0,r(9256).F)(o.m)}}]);
//# sourceMappingURL=../sourcemaps/8463.29cf3a473c5b86fbeecffb11dcdc1fde.js.map