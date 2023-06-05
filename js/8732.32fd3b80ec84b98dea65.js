(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8732],{45026:(e,r,t)=>{"use strict";t.r(r),t.d(r,{biosSelector:()=>n.Cx,collectionInformationSelector:()=>n.fZ,configurationSelector:()=>n.qr,getCollectorStatus:()=>n.P$,getDefaultCollectors:()=>n.f_,infrastructureSelector:()=>n.qY,operatingSystem:()=>n.d0,propertiesSelector:()=>n.Ys,systemStatus:()=>n.qs});var n=t(67782)},67782:(e,r,t)=>{"use strict";t.d(r,{Cx:()=>p,P$:()=>m,Ys:()=>u,d0:()=>l,fZ:()=>f,f_:()=>g,qY:()=>d,qr:()=>v,qs:()=>h});var n=t(4942),o=t(73880),s=t(96396);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){try{return JSON.parse(e)}catch(t){return(0,n.Z)({},r,e)}}var u=function(){var e,r,t,n,o,s,i,u,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=l.number_of_cpus,d=l.number_of_sockets,v=l.cores_per_socket,f=l.ramSize,m=l.disk_devices,g=l.sap_sids,h=l.system_purpose,y=l.cpu_flags,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=b.facts;return{cpuNumber:p||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:d||(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_SOCKETS),coresPerSocket:v||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_CORES)&&(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&Number(null==_||null===(o=_.rhsm)||void 0===o?void 0:o.CPU_CORES,10)/Number(null==_||null===(s=_.rhsm)||void 0===s?void 0:s.CPU_SOCKETS,10),ramSize:f||(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.MEMORY)&&"".concat(null==_||null===(u=_.rhsm)||void 0===u?void 0:u.MEMORY," GB"),storage:m&&m.map((function(e){var r=e.device,t=e.label,n=e.mount_point,o=e.options,s=e.type;return a(a(a(a({},r&&c(r,"device")),{},{label:t},n&&c(n,"mountpoint")),o&&c(o,"options")),s&&c(s,"mounttype"))})),sapIds:g,systemPurpose:null==h?void 0:h.usage,cpuFlags:y}},l=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.arch,n=r.operating_system,o=r.os_kernel_version,s=r.last_boot_time,i=r.kernel_modules,a=r.system_update_method,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=c.facts;return{release:n,kernelRelease:o,architecture:t||(null==u||null===(e=u.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:s,kernelModules:i,systemUpdateMethod:a}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.bios_vendor,t=e.bios_version,n=e.bios_release_date;return{vendor:r,version:t,releaseDate:n}},d=function(){var e,r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.infrastructure_type,o=t.infrastructure_vendor,s=t.network,i=void 0===s?{}:s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=a.facts;return{type:n||void 0!==(null==c||null===(e=c.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=c&&null!==(r=c.rhsm)&&void 0!==r&&r.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:o,ipv4:i.ipv4,ipv6:i.ipv6,nics:i.interfaces}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.installed_packages,t=e.enabled_services,n=e.running_processes,o=e.repositories;return{packages:r,services:t,processes:n,repositories:o}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.insights_client_version,t=e.insights_egg_version;return{client:r,egg:t}},m=function(e){return e?"Fresh"!==(0,s.Ei)(e)?"Stale":"Active":"N/A"},g=function(e){return null===o.registered||void 0===o.registered?void 0:o.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(r){var t;return{name:r.label,status:m(null==e?void 0:e.per_reporter_staleness[r.value]),updated:null==e||null===(t=e.per_reporter_staleness[r.value])||void 0===t?void 0:t.last_check_in,details:{name:r.idName,id:null==e?void 0:e[r.idValue]}}}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.stale_timestamp;return{stale:new Date>new Date(r)}}},94654:(e,r,t)=>{var n=t(21078),o=t(35161);e.exports=function(e,r){return n(o(e,r),1)}},36494:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(87462),o=t(63366),s=t(26685),i=t(35067),a=t(63480),c=t(26343);const u=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,c.dX)((function(r){return(0,a.Z)(e,r)})):void 0}],l=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(){return{}}))}];function p(e,r,t){return(0,n.Z)({},t,e,r)}const d=[function(e){return"function"==typeof e?function(e){return function(r,t){t.displayName;var n,o=t.pure,s=t.areMergedPropsEqual,i=!1;return function(r,t,a){var c=e(r,t,a);return i?o&&s(c,n)||(n=c):(i=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return p}}];var v=t(38548),f=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function m(e,r,t){for(var n=r.length-1;n>=0;n--){var o=r[n](e);if(o)return o}return function(r,n){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+n.wrappedComponentName+".")}}function g(e,r){return e===r}function h(e){var r=void 0===e?{}:e,t=r.connectHOC,a=void 0===t?s.Z:t,c=r.mapStateToPropsFactories,p=void 0===c?l:c,h=r.mapDispatchToPropsFactories,y=void 0===h?u:h,b=r.mergePropsFactories,_=void 0===b?d:b,E=r.selectorFactory,S=void 0===E?v.ZP:E;return function(e,r,t,s){void 0===s&&(s={});var c=s,u=c.pure,l=void 0===u||u,d=c.areStatesEqual,v=void 0===d?g:d,h=c.areOwnPropsEqual,b=void 0===h?i.Z:h,E=c.areStatePropsEqual,w=void 0===E?i.Z:E,P=c.areMergedPropsEqual,O=void 0===P?i.Z:P,k=(0,o.Z)(c,f),C=m(e,p,"mapStateToProps"),T=m(r,y,"mapDispatchToProps"),I=m(t,_,"mergeProps");return a(S,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:T,initMergeProps:I,pure:l,areStatesEqual:v,areOwnPropsEqual:b,areStatePropsEqual:w,areMergedPropsEqual:O},k))}}const y=h()},50533:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=t(67133),o=t(71679);(0,t(9256).F)(o.m)},24373:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(43898),o=t(23663),s=t(49851);const i=/\s+at.*[(\s](.*)\)?/,a=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,c=void 0===o.homedir?"":o.homedir().replace(/\\/g,"/");class u extends Error{#e;name="AggregateError";constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let r=(e=e.map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack&&e.stack.length>0?function(e,{pretty:r=!1,basePath:t}={}){const n=t&&new RegExp(`(at | \\()${(0,s.Z)(t.replace(/\\/g,"/"))}`,"g");if("string"==typeof e)return e.replace(/\\/g,"/").split("\n").filter((e=>{const r=e.match(i);if(null===r||!r[1])return!0;const t=r[1];return!(t.includes(".app/Contents/Resources/electron.asar")||t.includes(".app/Contents/Resources/default_app.asar")||t.includes("node_modules/electron/dist/resources/electron.asar")||t.includes("node_modules/electron/dist/resources/default_app.asar")||a.test(t))})).filter((e=>""!==e.trim())).map((e=>(n&&(e=e.replace(n,"$1")),r&&(e=e.replace(i,((e,r)=>e.replace(r,r.replace(c,"~"))))),e))).join("\n")}(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n");r="\n"+(0,n.Z)(r,4),super(r),this.#e=e}get errors(){return this.#e.slice()}}class l extends Error{constructor(e){super(),this.name="AbortError",this.message=e}}const p=e=>void 0===globalThis.DOMException?new l(e):new DOMException(e),d=e=>{const r=void 0===e.reason?p("This operation was aborted."):e.reason;return r instanceof Error?r:p(r)},v=Symbol("skip");async function f(e,r){return async function(e,r,{concurrency:t=Number.POSITIVE_INFINITY,stopOnError:n=!0,signal:o}={}){return new Promise(((s,i)=>{if(void 0===e[Symbol.iterator]&&void 0===e[Symbol.asyncIterator])throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if("function"!=typeof r)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(t)&&t!==Number.POSITIVE_INFINITY||!(t>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`);const a=[],c=[],l=new Map;let p=!1,f=!1,m=!1,g=0,h=0;const y=void 0===e[Symbol.iterator]?e[Symbol.asyncIterator]():e[Symbol.iterator](),b=e=>{p=!0,f=!0,i(e)};o&&(o.aborted&&b(d(o)),o.addEventListener("abort",(()=>{b(d(o))})));const _=async()=>{if(f)return;const e=await y.next(),t=h;if(h++,e.done){if(m=!0,0===g&&!f){if(!n&&c.length>0)return void b(new u(c));if(f=!0,0===l.size)return void s(a);const e=[];for(const[r,t]of a.entries())l.get(r)!==v&&e.push(t);s(e)}}else g++,(async()=>{try{const n=await e.value;if(f)return;const o=await r(n,t);o===v&&l.set(t,o),a[t]=o,g--,await _()}catch(e){if(n)b(e);else{c.push(e),g--;try{await _()}catch(e){b(e)}}}})()};(async()=>{for(let e=0;e<t;e++){try{await _()}catch(e){b(e);break}if(m||p)break}})()}))}(e,(e=>e()),r)}}}]);
//# sourceMappingURL=../sourcemaps/8732.163bdab5f3b126030284c407625ce624.js.map