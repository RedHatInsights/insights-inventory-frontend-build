"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5068],{5068:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return null!==e&&"object"===n(e)&&e&&"function"==typeof e.then}r.r(t),r.d(t,{ActionType:()=>l,createPromise:()=>p,default:()=>y});var i=r(34155);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[l.Pending,l.Fulfilled,l.Rejected],r=e.promiseTypeSuffixes||t,n=void 0===e.promiseTypeDelimiter?"_":e.promiseTypeDelimiter;return function(e){var t=e.dispatch;return function(e){return function(i){var c,a;if(!i.payload)return e(i);var l=i.payload;if(o(l))c=l;else if(o(l.promise))c=l.promise,a=l.data;else{if("function"!=typeof l&&"function"!=typeof l.promise)return e(i);if(c=l.promise?l.promise():l(),a=l.promise?l.data:void 0,!o(c))return e(f({},i,{payload:c}))}var p=i.type,y=i.meta,s=u(r,3),d=s[0],b=s[1],v=s[2],m=function(e,t){return f({type:[p,t?v:b].join(n)},null==e?{}:{payload:e},{},void 0!==y?{meta:y}:{},{},t?{error:!0}:{})};return e(f({type:[p,d].join(n)},void 0!==a?{payload:a}:{},{},void 0!==y?{meta:y}:{})),c.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=m(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=m(e,!0);throw t(r),e}))}}}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch;return"function"==typeof t?p()({dispatch:t}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/5068.ee25f11e6644959b485f1c6e20455d0a.js.map