"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9355],{13784:(e,t,r)=>{r.d(t,{Dx:()=>O,FW:()=>P,Gw:()=>b,Ih:()=>y,KS:()=>F,Mo:()=>Z,Nu:()=>E,SQ:()=>S,Tk:()=>w,UC:()=>v,YQ:()=>A,cE:()=>h,cf:()=>k,h3:()=>j,jv:()=>m,m5:()=>p,p9:()=>f,ud:()=>s,vi:()=>g,xb:()=>_,yc:()=>d});var n=r(29439),o=r(4942),a=r(92950),i=r(95249),l=r(58061);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s="hostname_or_id",v="textual",p="tags",d="staleness",f="registered_with",g="operating_system",y="rhc_client_id",h="system_update_method",m=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"},{label:"Unknown",value:"unknown"}],b=[{label:"insights-client",value:"puptoo",idName:"Insights id",idValue:"insights_id"},{label:"subscription-manager",value:"rhsm-conduit",idName:"Subscription manager id",idValue:"subscription_manager_id"},{label:"Satellite/Discovery",value:"yupana"},{label:"insights-client not connected",value:"!puptoo"}],P=(0,a.createContext)({}),O=[{label:"Active",value:"not_nil"},{label:"Inactive",value:"nil"}],S=[{label:"yum",value:"yum"},{label:"dnf",value:"dnf"},{label:"rpm-ostree",value:"rpm-ostree"}];function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return c(c({},e),{},(0,o.Z)({},r.key,r[t].reduce((function(e,t){return c(c({},e),{},(0,o.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var E=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),a=r[0],i=r[1],l=r[2];return c(c({},e),{},(0,o.Z)({},l,c(c({},e[(null==l?void 0:l.title)||l]),{},(0,o.Z)({},(null==a?void 0:a.title)||a,{isSelected:!0,group:{value:(null==l?void 0:l.title)||l,label:(null==l?void 0:l.title)||l},item:{value:(null==a?void 0:a.title)||a,meta:{tag:{key:(null==a?void 0:a.title)||a,value:(null==i?void 0:i.title)||i}}}}))))}),{})};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){if(t.value===s)return c(c({},e),{},{textFilter:t.filter});if("tagFilters"in t)return c(c({},e),{},{tagFilters:w(t.tagFilters)});var r=["staleFilter","registeredWithFilter","osFilter","rhcdFilter","updateMethodFilter",""].find((function(e){return Object.keys(t).includes(e)}));return c(c({},e),r&&(0,o.Z)({},r,t[r]))}),{textFilter:"",tagFilters:{}})}var F=function(e,t){return e.payload.then((function(e){return t(),e})),e},_=function(e){return!e||0===(null==e?void 0:e.length)},j=function(e,t,r,n,o,a,i){return[!_(e)&&{staleFilter:Array.isArray(e)?e:[e]},!_(r)&&{tagFilters:Array.isArray(r)?r:[r]},!_(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!_(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!_(e)||!_(r)||!_(n))&&_(t)&&{registeredWithFilter:[]},(!_(t)||!_(r)||!_(n))&&_(e)&&{staleFilter:[]},!_(o)&&{osFilter:Array.isArray(o)?o:[o]},!_(a)&&{rhcdFilter:Array.isArray(a)?a:[a]},!_(i)&&{updateMethodFilter:Array.isArray(i)?i:[i]}].filter(Boolean)},Z=function(){return(0,i.c$)(l.tS).hasAccess},k=["fresh","stale","stale_warning","unknown"]},14918:(e,t,r)=>{r.r(t),r.d(t,{DeleteModal:()=>i.Z,InventoryContext:()=>l.FW,OS_CHIP:()=>l.vi,REGISTERED_CHIP:()=>l.p9,RHCD_FILTER_KEY:()=>l.Ih,RenderWrapper:()=>a.Z,STALE_CHIP:()=>l.yc,TAG_CHIP:()=>l.m5,TEXTUAL_CHIP:()=>l.UC,TEXT_FILTER:()=>l.ud,TagWithDialog:()=>n.Z,TagsModal:()=>o.Z,UPDATE_METHOD_KEY:()=>l.cE,allStaleFilters:()=>l.cf,arrayToSelection:()=>l.Nu,filterToGroup:()=>l.Tk,generateFilter:()=>l.h3,isEmpty:()=>l.xb,reduceFilters:()=>l.YQ,registered:()=>l.Gw,reloadWrapper:()=>l.KS,rhcdOptions:()=>l.Dx,staleness:()=>l.jv,updateMethodOptions:()=>l.SQ,useWritePermissions:()=>l.Mo});var n=r(68595),o=r(22219),a=r(454),i=r(39903),l=r(13784)},58061:(e,t,r)=>{r.d(t,{Ew:()=>f,FX:()=>h,J_:()=>g,Jr:()=>m,Qw:()=>O,ey:()=>y,tS:()=>P,x7:()=>b});var n=r(71002),o=r(45987),a=r(4942),i=r(29439),l=r(45697),u=r.n(l),c=r(13784);function s(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t);if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e,t){var r=t.split("/"),n=(0,i.Z)(r,2),o=n[0],a=n[1];a||(a=o,o=null);var l=a.split("="),u=(0,i.Z)(l,2),c=u[0],s=u[1],v=void 0===s?null:s,p=e.findIndex((function(e){return e.category===o})),d=e[p]||{category:o,key:o,type:"tags",values:[]};return d.values.push({name:"".concat(c).concat(v?"=".concat(v):""),key:"".concat(c).concat(v?"=".concat(v):""),tagKey:c,value:v,group:{label:o,value:o,type:"checkbox"}}),e[p]||e.push(d),e},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.slice((t.page-1)*t.perPage,t.page*t.perPage)},g=function(e){return!(isNaN(e)&&isNaN(Date.parse(e)))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter((function(e){return 0===Object.values(t).length||Object.values(t).every((function(t){var r=e[t.key]&&(e[t.key].sortValue||e[t.key]);return r&&(Array.isArray(t.value)?t.value.includes(r):-1!==r.toLocaleLowerCase().indexOf(t.value.toLocaleLowerCase()))}))}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return t.map((function(t,o){var a=t.index||o,i=e[a]&&(e[a].title||e[a]);return{value:String(a),label:i,type:t.type||"text",filterValues:p({id:t.id||"".concat(i,"-").concat(a),onChange:function(e,t){return n(a,t,i)},value:r[a]&&r[a].value},t.options&&{items:t.options})}}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t)return{};var n=e.key,i=r[n],l=(0,o.Z)(r,[n].map(s)),u=i&&Array.isArray(i.value)&&i.value.filter((function(t){return!e.chips.find((function(e){return e.name===t}))})),c=i&&Array.isArray(i.value)&&u&&u.length>0?(0,a.Z)({},e.key,p(p({},i),{},{value:u})):{};return p(p({},l),c)},b=u().shape({title:u().node,value:u().node,singular:u().node,plural:u().node,onClick:u().func}),P=["inventory:*:*","inventory:hosts:write","inventory:*:write"],O=function(){var e,t,r,n,o,a=new URLSearchParams(location.search),i=a.getAll("status"),l=a.getAll("source"),u=a.getAll("hostname_or_id");return{status:i,source:l,tagsFilter:null===(e=a.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(r=t.split)||void 0===r||null===(n=(o=r.call(t,",")).reduce)||void 0===n?void 0:n.call(o,d,[]),filterbyName:u,operatingSystem:a.getAll("operating_system"),rhcdFilter:a.getAll(c.Ih),updateMethodFilter:a.getAll(c.cE),page:a.getAll("page"),perPage:a.getAll("per_page")}}},36494:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(63366),a=r(26685),i=r(35067),l=r(63480),u=r(26343);const c=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,u.dX)((function(t){return(0,l.Z)(e,t)})):void 0}],s=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(){return{}}))}];function v(e,t,r){return(0,n.Z)({},r,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,l){var u=e(t,r,l);return i?o&&a(u,n)||(n=u):(i=!0,n=u),n}}}(e):void 0},function(e){return e?void 0:function(){return v}}];var d=r(38548),f=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function g(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function y(e,t){return e===t}function h(e){var t=void 0===e?{}:e,r=t.connectHOC,l=void 0===r?a.Z:r,u=t.mapStateToPropsFactories,v=void 0===u?s:u,h=t.mapDispatchToPropsFactories,m=void 0===h?c:h,b=t.mergePropsFactories,P=void 0===b?p:b,O=t.selectorFactory,S=void 0===O?d.ZP:O;return function(e,t,r,a){void 0===a&&(a={});var u=a,c=u.pure,s=void 0===c||c,p=u.areStatesEqual,d=void 0===p?y:p,h=u.areOwnPropsEqual,b=void 0===h?i.Z:h,O=u.areStatePropsEqual,w=void 0===O?i.Z:O,E=u.areMergedPropsEqual,A=void 0===E?i.Z:E,F=(0,o.Z)(u,f),_=g(e,v,"mapStateToProps"),j=g(t,m,"mapDispatchToProps"),Z=g(r,P,"mergeProps");return l(S,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:j,initMergeProps:Z,pure:s,areStatesEqual:d,areOwnPropsEqual:b,areStatePropsEqual:w,areMergedPropsEqual:A},F))}}const m=h()},50533:(e,t,r)=>{r.r(t),r.d(t,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=r(67133),o=r(71679);(0,r(9256).F)(o.m)}}]);