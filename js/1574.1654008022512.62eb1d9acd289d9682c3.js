"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[1574],{9036:(t,r,n)=>{n.d(r,{xI:()=>w,Gg:()=>y});var e=n(4942);function o(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,e.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function u(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var c="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function s(t){if("object"!=typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function p(t,r,n){var e;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(u(1));return n(p)(t,r)}if("function"!=typeof t)throw new Error(u(2));var o=t,i=r,f=[],d=f,l=!1;function h(){d===f&&(d=f.slice())}function v(){if(l)throw new Error(u(3));return i}function y(t){if("function"!=typeof t)throw new Error(u(4));if(l)throw new Error(u(5));var r=!0;return h(),d.push(t),function(){if(r){if(l)throw new Error(u(6));r=!1,h();var n=d.indexOf(t);d.splice(n,1),f=null}}}function w(t){if(!s(t))throw new Error(u(7));if(void 0===t.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,i=o(i,t)}finally{l=!1}for(var r=f=d,n=0;n<r.length;n++)(0,r[n])();return t}function O(t){if("function"!=typeof t)throw new Error(u(10));o=t,w({type:a.REPLACE})}function g(){var t,r=y;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(u(11));function n(){t.next&&t.next(v())}return n(),{unsubscribe:r(n)}}})[c]=function(){return this},t}return w({type:a.INIT}),(e={dispatch:w,subscribe:y,getState:v,replaceReducer:O})[c]=g,e}function d(t){for(var r=Object.keys(t),n={},e=0;e<r.length;e++){var o=r[e];"function"==typeof t[o]&&(n[o]=t[o])}var i,c=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(r){var n=t[r];if(void 0===n(void 0,{type:a.INIT}))throw new Error(u(12));if(void 0===n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(n)}catch(t){i=t}return function(t,r){if(void 0===t&&(t={}),i)throw i;for(var e=!1,o={},f=0;f<c.length;f++){var a=c[f],s=n[a],p=t[a],d=s(p,r);if(void 0===d)throw r&&r.type,new Error(u(14));o[a]=d,e=e||d!==p}return(e=e||c.length!==Object.keys(t).length)?o:t}}function l(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return 0===r.length?function(t){return t}:1===r.length?r[0]:r.reduce((function(t,r){return function(){return t(r.apply(void 0,arguments))}}))}function h(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),e=function(){throw new Error(u(15))},o={getState:n.getState,dispatch:function(){return e.apply(void 0,arguments)}},c=r.map((function(t){return t(o)}));return e=l.apply(void 0,c)(n.dispatch),i(i({},n),{},{dispatch:e})}}}var v=function(){return v=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},v.apply(this,arguments)};function y(t,r){return void 0===r&&(r={}),function(n,e){return void 0===n&&(n=r),Object.prototype.hasOwnProperty.call(t,e.type)?t[e.type](n,e):n}}var w=function(){function t(t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=l);var e="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||n;this.store=p((function(r){return void 0===r&&(r=t),r}),t,e(h.apply(void 0,r))),this.reducers={}}return t.prototype.getStore=function(){return this.store},t.prototype.register=function(t){var r=this;return this.reducers=v(v({},this.reducers),t),this.store.replaceReducer(d(v({},this.reducers))),function(){r.reducers=Object.entries(r.reducers).filter((function(r){return!Object.keys(t).includes(r)})).reduce((function(t,r){var n,e=r[0],o=r[1];return v(v({},t),((n={})[e]=o,n))}),{}),r.store.replaceReducer(d(v({},r.reducers)))}},t}();new w},62410:(t,r,n)=>{n.d(r,{Z:()=>v});var e=n(92950),o=n.n(e),i=n(80604),u=function(){return u=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},u.apply(this,arguments)},c=36e5,f=24*c,a=30*f,s=365*f,p=function(t,r){return"".concat(t," ").concat(t>1?"".concat(r,"s"):r," ago")},d=[{rightBound:1/0,description:function(t){return p(Math.round(t/s),"year")}},{rightBound:s,description:function(t){return p(Math.round(t/a),"month")}},{rightBound:a,description:function(t){return p(Math.round(t/f),"day")}},{rightBound:f,description:function(t){return p(Math.round(t/c),"hour")}},{rightBound:c,description:function(t){return p(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],l=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(t){return{exact:function(t){return l(t)+" UTC"},onlyDate:function(t){return l(t).slice(0,-6)},relative:function(t){return d.reduce((function(r,n){return n.rightBound>Date.now()-t.getTime()?n.description(Date.now()-t.getTime()):r}),l(t))},invalid:function(){return"Invalid date"}}[t]};const v=function(t){var r=t.date,n=t.type,e=void 0===n?"relative":n,c=t.extraTitle,f=t.tooltipProps,a=r instanceof Date?r:new Date(r),s=null==r||"Invalid Date"===a.toString()?"invalid":e;return o().createElement(o().Fragment,null,function(t,r,n){return{exact:function(r){return h(t)(r)},onlyDate:function(r){return h(t)(r)},relative:function(e){return function(t,r,n,e){return void 0===e&&(e=""),o().createElement(i.Tooltip,u({},n,{content:o().createElement("div",null,e,t)}),r)}(h("exact")(e),o().createElement("span",null,h(t)(e)),r,n)},invalid:function(){return"Invalid date"}}[t]}(s,f,c)(a))}}}]);
//# sourceMappingURL=../sourcemaps/1574.73ab796d29fe558c90765db85ad1984c.js.map