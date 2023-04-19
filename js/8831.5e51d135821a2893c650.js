(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8831],{45026:(e,r,t)=>{"use strict";t.r(r),t.d(r,{biosSelector:()=>n.Cx,collectionInformationSelector:()=>n.fZ,configurationSelector:()=>n.qr,getCollectorStatus:()=>n.P$,getDefaultCollectors:()=>n.f_,infrastructureSelector:()=>n.qY,operatingSystem:()=>n.d0,propertiesSelector:()=>n.Ys,systemStatus:()=>n.qs});var n=t(67782)},67782:(e,r,t)=>{"use strict";t.d(r,{Cx:()=>v,P$:()=>m,Ys:()=>c,d0:()=>l,fZ:()=>f,f_:()=>g,qY:()=>p,qr:()=>d,qs:()=>h});var n=t(4942),o=t(73880),i=t(96396);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){try{return JSON.parse(e)}catch(t){return(0,n.Z)({},r,e)}}var c=function(){var e,r,t,n,o,i,s,c,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=l.number_of_cpus,p=l.number_of_sockets,d=l.cores_per_socket,f=l.ramSize,m=l.disk_devices,g=l.sap_sids,h=l.system_purpose,_=l.cpu_flags,P=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},S=P.facts;return{cpuNumber:v||(null==S||null===(e=S.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==S||null===(r=S.rhsm)||void 0===r?void 0:r.CPU_SOCKETS),coresPerSocket:d||(null==S||null===(t=S.rhsm)||void 0===t?void 0:t.CPU_CORES)&&(null==S||null===(n=S.rhsm)||void 0===n?void 0:n.CPU_CORES)&&Number(null==S||null===(o=S.rhsm)||void 0===o?void 0:o.CPU_CORES,10)/Number(null==S||null===(i=S.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:f||(null==S||null===(s=S.rhsm)||void 0===s?void 0:s.MEMORY)&&"".concat(null==S||null===(c=S.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:m&&m.map((function(e){var r=e.device,t=e.label,n=e.mount_point,o=e.options,i=e.type;return u(u(u(u({},r&&a(r,"device")),{},{label:t},n&&a(n,"mountpoint")),o&&a(o,"options")),i&&a(i,"mounttype"))})),sapIds:g,systemPurpose:null==h?void 0:h.usage,cpuFlags:_}},l=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.arch,n=r.operating_system,o=r.os_kernel_version,i=r.last_boot_time,s=r.kernel_modules,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=u.facts;return{release:n,kernelRelease:o,architecture:t||(null==a||null===(e=a.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:i,kernelModules:s}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.bios_vendor,t=e.bios_version,n=e.bios_release_date;return{vendor:r,version:t,releaseDate:n}},p=function(){var e,r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.infrastructure_type,o=t.infrastructure_vendor,i=t.network,s=void 0===i?{}:i,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=u.facts;return{type:n||void 0!==(null==a||null===(e=a.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=a&&null!==(r=a.rhsm)&&void 0!==r&&r.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:o,ipv4:s.ipv4,ipv6:s.ipv6,nics:s.interfaces}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.installed_packages,t=e.enabled_services,n=e.running_processes,o=e.repositories;return{packages:r,services:t,processes:n,repositories:o}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.insights_client_version,t=e.insights_egg_version;return{client:r,egg:t}},m=function(e){return e?"Fresh"!==(0,i.Ei)(e)?"Stale":"Active":"N/A"},g=function(e){return null===o.registered||void 0===o.registered?void 0:o.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(r){var t;return{name:r.label,status:m(null==e?void 0:e.per_reporter_staleness[r.value]),updated:null==e||null===(t=e.per_reporter_staleness[r.value])||void 0===t?void 0:t.last_check_in,details:{name:r.idName,id:null==e?void 0:e[r.idValue]}}}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.stale_timestamp;return{stale:new Date>new Date(r)}}},94654:(e,r,t)=>{var n=t(21078),o=t(35161);e.exports=function(e,r){return n(o(e,r),1)}},93386:(e,r,t)=>{var n=t(21078),o=t(5976),i=t(45652),s=t(29246),u=o((function(e){return i(n(e,1,s,!0))}));e.exports=u},36494:(e,r,t)=>{"use strict";t.d(r,{Z:()=>_});var n=t(87462),o=t(63366),i=t(26685),s=t(35067),u=t(63480),a=t(26343);const c=[function(e){return"function"==typeof e?(0,a.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,a.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,a.dX)((function(r){return(0,u.Z)(e,r)})):void 0}],l=[function(e){return"function"==typeof e?(0,a.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,a.dX)((function(){return{}}))}];function v(e,r,t){return(0,n.Z)({},t,e,r)}const p=[function(e){return"function"==typeof e?function(e){return function(r,t){t.displayName;var n,o=t.pure,i=t.areMergedPropsEqual,s=!1;return function(r,t,u){var a=e(r,t,u);return s?o&&i(a,n)||(n=a):(s=!0,n=a),n}}}(e):void 0},function(e){return e?void 0:function(){return v}}];var d=t(38548),f=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function m(e,r,t){for(var n=r.length-1;n>=0;n--){var o=r[n](e);if(o)return o}return function(r,n){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+n.wrappedComponentName+".")}}function g(e,r){return e===r}function h(e){var r=void 0===e?{}:e,t=r.connectHOC,u=void 0===t?i.Z:t,a=r.mapStateToPropsFactories,v=void 0===a?l:a,h=r.mapDispatchToPropsFactories,_=void 0===h?c:h,P=r.mergePropsFactories,S=void 0===P?p:P,b=r.selectorFactory,y=void 0===b?d.ZP:b;return function(e,r,t,i){void 0===i&&(i={});var a=i,c=a.pure,l=void 0===c||c,p=a.areStatesEqual,d=void 0===p?g:p,h=a.areOwnPropsEqual,P=void 0===h?s.Z:h,b=a.areStatePropsEqual,O=void 0===b?s.Z:b,E=a.areMergedPropsEqual,C=void 0===E?s.Z:E,k=(0,o.Z)(a,f),w=m(e,v,"mapStateToProps"),q=m(r,_,"mapDispatchToProps"),T=m(t,S,"mergeProps");return u(y,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:w,initMapDispatchToProps:q,initMergeProps:T,pure:l,areStatesEqual:d,areOwnPropsEqual:P,areStatePropsEqual:O,areMergedPropsEqual:C},k))}}const _=h()},50533:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=t(67133),o=t(71679);(0,t(9256).F)(o.m)}}]);
//# sourceMappingURL=../sourcemaps/8831.d04723e6db568c7ec197fc1e87f5856e.js.map