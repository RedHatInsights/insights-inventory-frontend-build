(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[1860],{41860:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ActionType:()=>a,createPromise:()=>f,default:()=>l});var r=n(20369),o=n(34155),i=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[a.Pending,a.Fulfilled,a.Rejected],n=t.promiseTypeSuffixes||e,o=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(a){var f=void 0,l=void 0;if(!a.payload)return t(a);var c=a.payload;if((0,r.Z)(c))f=c;else if((0,r.Z)(c.promise))f=c.promise,l=c.data;else{if("function"!=typeof c&&"function"!=typeof c.promise)return t(a);if(f=c.promise?c.promise():c(),l=c.promise?c.data:void 0,!(0,r.Z)(f))return t(u({},a,{payload:f}))}var p=a.type,y=a.meta,d=i(n,3),s=d[0],v=d[1],m=d[2],h=function(t,e){return u({type:[p,e?m:v].join(o)},null==t?{}:{payload:t},void 0!==y?{meta:y}:{},e?{error:!0}:{})};return t(u({type:[p,s].join(o)},void 0!==l?{payload:l}:{},void 0!==y?{meta:y}:{})),f.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=h(t,!1);return e(n),{value:t,action:n}}),(function(t){var n=h(t,!0);throw e(n),t}))}}}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?f()({dispatch:e}):(o&&o.env,null)}},20369:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))&&t&&"function"==typeof t.then}}}]);
//# sourceMappingURL=../sourcemaps/1860.2e949a261ffec4c9d3a5.js.map