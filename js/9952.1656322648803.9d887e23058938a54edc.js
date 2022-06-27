"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9952],{45026:(e,r,t)=>{t.r(r),t.d(r,{biosSelector:()=>n.Cx,collectionInformationSelector:()=>n.fZ,configurationSelector:()=>n.qr,getDefaultCollectors:()=>n.f_,infrastructureSelector:()=>n.qY,operatingSystem:()=>n.d0,propertiesSelector:()=>n.Ys,systemStatus:()=>n.qs});var n=t(67782)},67782:(e,r,t)=>{t.d(r,{Ys:()=>u,d0:()=>c,Cx:()=>a,qY:()=>v,qr:()=>d,fZ:()=>p,f_:()=>_,qs:()=>f});var n=t(4942),o=t(73880);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){try{return JSON.parse(e)}catch(t){return(0,n.Z)({},r,e)}}var u=function(){var e,r,t,n,o,i,u,c,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=a.number_of_cpus,d=a.number_of_sockets,p=a.cores_per_socket,_=a.ramSize,f=a.disk_devices,g=a.sap_sids,h=a.cpu_flags,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=m.facts;return{cpuNumber:v||(null==b||null===(e=b.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:d||(null==b||null===(r=b.rhsm)||void 0===r?void 0:r.CPU_SOCKETS),coresPerSocket:p||(null==b||null===(t=b.rhsm)||void 0===t?void 0:t.CPU_CORES)&&(null==b||null===(n=b.rhsm)||void 0===n?void 0:n.CPU_CORES)&&Number(null==b||null===(o=b.rhsm)||void 0===o?void 0:o.CPU_CORES,10)/Number(null==b||null===(i=b.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:_||(null==b||null===(u=b.rhsm)||void 0===u?void 0:u.MEMORY)&&"".concat(null==b||null===(c=b.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:f&&f.map((function(e){var r=e.device,t=e.label,n=e.mount_point,o=e.options,i=e.type;return s(s(s(s({},r&&l(r,"device")),{},{label:t},n&&l(n,"mountpoint")),o&&l(o,"options")),i&&l(i,"mounttype"))})),sapIds:g,cpuFlags:h}},c=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.arch,n=r.operating_system,o=r.os_kernel_version,i=r.last_boot_time,s=r.kernel_modules,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=l.facts;return{release:n,kernelRelease:o,architecture:t||(null==u||null===(e=u.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:i,kernelModules:s}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.bios_vendor,t=e.bios_version,n=e.bios_release_date;return{vendor:r,version:t,releaseDate:n}},v=function(){var e,r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.infrastructure_type,o=t.infrastructure_vendor,i=t.network,s=void 0===i?{}:i,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=l.facts;return{type:n||void 0!==(null==u||null===(e=u.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=u&&null!==(r=u.rhsm)&&void 0!==r&&r.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:o,ipv4:s.ipv4,ipv6:s.ipv6,nics:s.interfaces}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.installed_packages,t=e.enabled_services,n=e.running_processes,o=e.repositories;return{packages:r,services:t,processes:n,repositories:o}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.insights_client_version,t=e.insights_egg_version;return{client:r,egg:t}},_=function(e){return null===o.registered||void 0===o.registered?void 0:o.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(r){var t,n;return{name:r.label,status:null==e||null===(t=e.per_reporter_staleness[r.value])||void 0===t?void 0:t.check_in_succeeded,updated:null==e||null===(n=e.per_reporter_staleness[r.value])||void 0===n?void 0:n.last_check_in,details:{name:r.idName,id:null==e?void 0:e[r.idValue]}}}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.stale_timestamp;return{stale:new Date>new Date(r)}}}}]);
//# sourceMappingURL=../sourcemaps/9952.6f9cd4ca00269d68f117a252742bde8e.js.map