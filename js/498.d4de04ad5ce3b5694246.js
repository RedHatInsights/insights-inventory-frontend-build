(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[498],{94654:(r,e,t)=>{var n=t(21078),o=t(35161);r.exports=function(r,e){return n(o(r,e),1)}},41609:(r,e,t)=>{var n=t(280),o=t(64160),a=t(35694),i=t(1469),u=t(98612),s=t(44144),c=t(25726),p=t(36719),f=Object.prototype.hasOwnProperty;r.exports=function(r){if(null==r)return!0;if(u(r)&&(i(r)||"string"==typeof r||"function"==typeof r.splice||s(r)||p(r)||a(r)))return!r.length;var e=o(r);if("[object Map]"==e||"[object Set]"==e)return!r.size;if(c(r))return!n(r).length;for(var t in r)if(f.call(r,t))return!1;return!0}},36494:(r,e,t)=>{"use strict";t.d(e,{Z:()=>m});var n=t(87462),o=t(63366),a=t(26685),i=t(35067),u=t(63480),s=t(26343);const c=[function(r){return"function"==typeof r?(0,s.xv)(r,"mapDispatchToProps"):void 0},function(r){return r?void 0:(0,s.dX)((function(r){return{dispatch:r}}))},function(r){return r&&"object"==typeof r?(0,s.dX)((function(e){return(0,u.Z)(r,e)})):void 0}],p=[function(r){return"function"==typeof r?(0,s.xv)(r,"mapStateToProps"):void 0},function(r){return r?void 0:(0,s.dX)((function(){return{}}))}];function f(r,e,t){return(0,n.Z)({},t,r,e)}const d=[function(r){return"function"==typeof r?function(r){return function(e,t){t.displayName;var n,o=t.pure,a=t.areMergedPropsEqual,i=!1;return function(e,t,u){var s=r(e,t,u);return i?o&&a(s,n)||(n=s):(i=!0,n=s),n}}}(r):void 0},function(r){return r?void 0:function(){return f}}];var l=t(38548),v=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function y(r,e,t){for(var n=e.length-1;n>=0;n--){var o=e[n](r);if(o)return o}return function(e,n){throw new Error("Invalid value of type "+typeof r+" for "+t+" argument when connecting component "+n.wrappedComponentName+".")}}function g(r,e){return r===e}function h(r){var e=void 0===r?{}:r,t=e.connectHOC,u=void 0===t?a.Z:t,s=e.mapStateToPropsFactories,f=void 0===s?p:s,h=e.mapDispatchToPropsFactories,m=void 0===h?c:h,E=e.mergePropsFactories,b=void 0===E?d:E,w=e.selectorFactory,P=void 0===w?l.ZP:w;return function(r,e,t,a){void 0===a&&(a={});var s=a,c=s.pure,p=void 0===c||c,d=s.areStatesEqual,l=void 0===d?g:d,h=s.areOwnPropsEqual,E=void 0===h?i.Z:h,w=s.areStatePropsEqual,S=void 0===w?i.Z:w,T=s.areMergedPropsEqual,x=void 0===T?i.Z:T,I=(0,o.Z)(s,v),q=y(r,f,"mapStateToProps"),M=y(e,m,"mapDispatchToProps"),Z=y(t,b,"mergeProps");return u(P,(0,n.Z)({methodName:"connect",getDisplayName:function(r){return"Connect("+r+")"},shouldHandleStateChanges:Boolean(r),initMapStateToProps:q,initMapDispatchToProps:M,initMergeProps:Z,pure:p,areStatesEqual:l,areOwnPropsEqual:E,areStatePropsEqual:S,areMergedPropsEqual:x},I))}}const m=h()},72307:(r,e,t)=>{"use strict";t.d(e,{A:()=>a,I:()=>i});var n=t(6526),o=t(420);function a(r){void 0===r&&(r=n.E);var e=r===n.E?o.o:(0,o.f)(r);return function(){return e().dispatch}}var i=a()},2975:(r,e,t)=>{"use strict";t.d(e,{x:()=>a});var n=t(92950),o=t(6526);function a(){return(0,n.useContext)(o.E)}},59854:(r,e,t)=>{"use strict";t.d(e,{g:()=>c,v:()=>p});var n=t(92950),o=t(2975),a=t(86496),i=t(1881),u=t(6526),s=function(r,e){return r===e};function c(r){void 0===r&&(r=u.E);var e=r===u.E?o.x:function(){return(0,n.useContext)(r)};return function(r,t){void 0===t&&(t=s);var o=e(),u=function(r,e,t,o){var u,s=(0,n.useReducer)((function(r){return r+1}),0)[1],c=(0,n.useMemo)((function(){return(0,a.X)(t,o)}),[t,o]),p=(0,n.useRef)(),f=(0,n.useRef)(),d=(0,n.useRef)(),l=(0,n.useRef)(),v=t.getState();try{if(r!==f.current||v!==d.current||p.current){var y=r(v);u=void 0!==l.current&&e(y,l.current)?l.current:y}else u=l.current}catch(r){throw p.current&&(r.message+="\nThe error may be correlated with this previous error:\n"+p.current.stack+"\n\n"),r}return(0,i.L)((function(){f.current=r,d.current=v,l.current=u,p.current=void 0})),(0,i.L)((function(){function r(){try{var r=t.getState();if(r===d.current)return;var n=f.current(r);if(e(n,l.current))return;l.current=n,d.current=r}catch(r){p.current=r}s()}return c.onStateChange=r,c.trySubscribe(),r(),function(){return c.tryUnsubscribe()}}),[t,c]),u}(r,t,o.store,o.subscription);return(0,n.useDebugValue)(u),u}}var p=c()},24373:(r,e,t)=>{"use strict";t.d(e,{Z:()=>v});var n=t(43898),o=t(23663),a=t(49851);const i=/\s+at.*[(\s](.*)\)?/,u=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,s=void 0===o.homedir?"":o.homedir().replace(/\\/g,"/");class c extends Error{#r;name="AggregateError";constructor(r){if(!Array.isArray(r))throw new TypeError("Expected input to be an Array, got "+typeof r);let e=(r=r.map((r=>r instanceof Error?r:null!==r&&"object"==typeof r?Object.assign(new Error(r.message),r):new Error(r)))).map((r=>"string"==typeof r.stack&&r.stack.length>0?function(r,{pretty:e=!1,basePath:t}={}){const n=t&&new RegExp(`(at | \\()${(0,a.Z)(t.replace(/\\/g,"/"))}`,"g");if("string"==typeof r)return r.replace(/\\/g,"/").split("\n").filter((r=>{const e=r.match(i);if(null===e||!e[1])return!0;const t=e[1];return!(t.includes(".app/Contents/Resources/electron.asar")||t.includes(".app/Contents/Resources/default_app.asar")||t.includes("node_modules/electron/dist/resources/electron.asar")||t.includes("node_modules/electron/dist/resources/default_app.asar")||u.test(t))})).filter((r=>""!==r.trim())).map((r=>(n&&(r=r.replace(n,"$1")),e&&(r=r.replace(i,((r,e)=>r.replace(e,e.replace(s,"~"))))),r))).join("\n")}(r.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(r))).join("\n");e="\n"+(0,n.Z)(e,4),super(e),this.#r=r}get errors(){return this.#r.slice()}}class p extends Error{constructor(r){super(),this.name="AbortError",this.message=r}}const f=r=>void 0===globalThis.DOMException?new p(r):new DOMException(r),d=r=>{const e=void 0===r.reason?f("This operation was aborted."):r.reason;return e instanceof Error?e:f(e)},l=Symbol("skip");async function v(r,e){return async function(r,e,{concurrency:t=Number.POSITIVE_INFINITY,stopOnError:n=!0,signal:o}={}){return new Promise(((a,i)=>{if(void 0===r[Symbol.iterator]&&void 0===r[Symbol.asyncIterator])throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof r})`);if("function"!=typeof e)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(t)&&t!==Number.POSITIVE_INFINITY||!(t>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`);const u=[],s=[],p=new Map;let f=!1,v=!1,y=!1,g=0,h=0;const m=void 0===r[Symbol.iterator]?r[Symbol.asyncIterator]():r[Symbol.iterator](),E=r=>{f=!0,v=!0,i(r)};o&&(o.aborted&&E(d(o)),o.addEventListener("abort",(()=>{E(d(o))})));const b=async()=>{if(v)return;const r=await m.next(),t=h;if(h++,r.done){if(y=!0,0===g&&!v){if(!n&&s.length>0)return void E(new c(s));if(v=!0,0===p.size)return void a(u);const r=[];for(const[e,t]of u.entries())p.get(e)!==l&&r.push(t);a(r)}}else g++,(async()=>{try{const n=await r.value;if(v)return;const o=await e(n,t);o===l&&p.set(t,o),u[t]=o,g--,await b()}catch(r){if(n)E(r);else{s.push(r),g--;try{await b()}catch(r){E(r)}}}})()};(async()=>{for(let r=0;r<t;r++){try{await b()}catch(r){E(r);break}if(y||f)break}})()}))}(r,(r=>r()),e)}}}]);