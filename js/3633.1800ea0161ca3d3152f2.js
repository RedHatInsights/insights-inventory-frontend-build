(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3633],{21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>h,CB:()=>w,M:()=>b,OL:()=>P,ZP:()=>O,gA:()=>p.ZP,zw:()=>l.ZP});var n,o=r(4942),a=r(59086),i=r(57785),s=r(18546),c=r(35240),u=r(83215),l=r(21216),p=r(48536),d=r(34150),f=r(52987);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={loaded:!1,selected:new Map};function m(e){return v(v({},e),{},{loaded:!0})}var E={notifications:u.ee,systemProfileStore:i.default,groups:d.Z,groupDetail:f.Z},b=(0,s.Gg)((n={},(0,o.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return v(v({},e),{},{rows:(0,c.r0)([e.rows,r.results]),entities:(0,c.r0)([e.entities,r.results])})})),(0,o.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r=t.payload,n=t.meta;return(null==n?void 0:n.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:v(v({},e),{},{rows:(0,c.r0)([e.rows,r.results.map((function(t){return v(v({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),v(v({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(Array.isArray(r.id))r.id.forEach((function(e){n.set(e.id,e)}));else if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,v(v({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return v(v({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return v(v({},e),{},{selected:{}})})),(0,o.Z)(n,a.uW,(function(e,t){var r=t.payload;return v(v({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return v(v({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),n),g),w=function(){return(0,s.Gg)((0,o.Z)({},a.AL.LOAD_ENTITY_FULFILLED,m),g)};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return v({},e(v({},(0,s.Gg)(v({},l.ZP),v(v({},l.W2),t))(r,n)),n))}}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return v({},e(v({},(0,s.Gg)(v({},p.ZP),v(v({},p.PY),t))(r,n)),n))}}}const O=E},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>v,calculateRepos:()=>y,default:()=>m,defaultState:()=>l,formatBytes:()=>d,onSystemProfile:()=>g,sizes:()=>p,systemProfilePending:()=>f});var n,o=r(93433),a=r(4942),i=r(18546),s=r(59086);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function f(e){return u(u({},e),{},{systemProfile:{loaded:!1}})}function y(e){return e&&e.reduce((function(e,t){return u(u({},e),t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function v(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function g(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return u(u({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:u(u({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&d(n.system_memory_bytes),repositories:y(n.yum_repos),network:v(n.network_interfaces)})})}const m=(0,i.Gg)((n={},(0,a.Z)(n,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,g),(0,a.Z)(n,s.aI.LOAD_SYSTEM_PROFILE_PENDING,f),n),{systemProfile:l})},94654:(e,t,r)=>{var n=r(21078),o=r(35161);e.exports=function(e,t){return n(o(e,t),1)}},36494:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(87462),o=r(63366),a=r(26685),i=r(35067),s=r(63480),c=r(26343);const u=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,c.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],l=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(){return{}}))}];function p(e,t,r){return(0,n.Z)({},r,e,t)}const d=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,s){var c=e(t,r,s);return i?o&&a(c,n)||(n=c):(i=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return p}}];var f=r(38548),y=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function g(e,t){return e===t}function m(e){var t=void 0===e?{}:e,r=t.connectHOC,s=void 0===r?a.Z:r,c=t.mapStateToPropsFactories,p=void 0===c?l:c,m=t.mapDispatchToPropsFactories,E=void 0===m?u:m,b=t.mergePropsFactories,w=void 0===b?d:b,h=t.selectorFactory,P=void 0===h?f.ZP:h;return function(e,t,r,a){void 0===a&&(a={});var c=a,u=c.pure,l=void 0===u||u,d=c.areStatesEqual,f=void 0===d?g:d,m=c.areOwnPropsEqual,b=void 0===m?i.Z:m,h=c.areStatePropsEqual,O=void 0===h?i.Z:h,S=c.areMergedPropsEqual,I=void 0===S?i.Z:S,Z=(0,o.Z)(c,y),_=v(e,p,"mapStateToProps"),D=v(t,E,"mapDispatchToProps"),T=v(r,w,"mergeProps");return s(P,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:D,initMergeProps:T,pure:l,areStatesEqual:f,areOwnPropsEqual:b,areStatePropsEqual:O,areMergedPropsEqual:I},Z))}}const E=m()},50533:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>o.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=r(67133),o=r(71679);(0,r(9256).F)(o.m)},81320:()=>{},24373:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(43898),o=r(23663),a=r(49851);const i=/\s+at.*[(\s](.*)\)?/,s=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,c=void 0===o.homedir?"":o.homedir().replace(/\\/g,"/");class u extends Error{#e;name="AggregateError";constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let t=(e=e.map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack&&e.stack.length>0?function(e,{pretty:t=!1,basePath:r}={}){const n=r&&new RegExp(`(at | \\()${(0,a.Z)(r.replace(/\\/g,"/"))}`,"g");if("string"==typeof e)return e.replace(/\\/g,"/").split("\n").filter((e=>{const t=e.match(i);if(null===t||!t[1])return!0;const r=t[1];return!(r.includes(".app/Contents/Resources/electron.asar")||r.includes(".app/Contents/Resources/default_app.asar")||r.includes("node_modules/electron/dist/resources/electron.asar")||r.includes("node_modules/electron/dist/resources/default_app.asar")||s.test(r))})).filter((e=>""!==e.trim())).map((e=>(n&&(e=e.replace(n,"$1")),t&&(e=e.replace(i,((e,t)=>e.replace(t,t.replace(c,"~"))))),e))).join("\n")}(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n");t="\n"+(0,n.Z)(t,4),super(t),this.#e=e}get errors(){return this.#e.slice()}}class l extends Error{constructor(e){super(),this.name="AbortError",this.message=e}}const p=e=>void 0===globalThis.DOMException?new l(e):new DOMException(e),d=e=>{const t=void 0===e.reason?p("This operation was aborted."):e.reason;return t instanceof Error?t:p(t)},f=Symbol("skip");async function y(e,t){return async function(e,t,{concurrency:r=Number.POSITIVE_INFINITY,stopOnError:n=!0,signal:o}={}){return new Promise(((a,i)=>{if(void 0===e[Symbol.iterator]&&void 0===e[Symbol.asyncIterator])throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if("function"!=typeof t)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(r)&&r!==Number.POSITIVE_INFINITY||!(r>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${r}\` (${typeof r})`);const s=[],c=[],l=new Map;let p=!1,y=!1,v=!1,g=0,m=0;const E=void 0===e[Symbol.iterator]?e[Symbol.asyncIterator]():e[Symbol.iterator](),b=e=>{p=!0,y=!0,i(e)};o&&(o.aborted&&b(d(o)),o.addEventListener("abort",(()=>{b(d(o))})));const w=async()=>{if(y)return;const e=await E.next(),r=m;if(m++,e.done){if(v=!0,0===g&&!y){if(!n&&c.length>0)return void b(new u(c));if(y=!0,0===l.size)return void a(s);const e=[];for(const[t,r]of s.entries())l.get(t)!==f&&e.push(r);a(e)}}else g++,(async()=>{try{const n=await e.value;if(y)return;const o=await t(n,r);o===f&&l.set(r,o),s[r]=o,g--,await w()}catch(e){if(n)b(e);else{c.push(e),g--;try{await w()}catch(e){b(e)}}}})()};(async()=>{for(let e=0;e<r;e++){try{await w()}catch(e){b(e);break}if(v||p)break}})()}))}(e,(e=>e()),t)}}}]);
//# sourceMappingURL=../sourcemaps/3633.0ba28a96cfd54cef141edcb0481ed947.js.map