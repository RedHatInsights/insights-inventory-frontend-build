(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8152],{81506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},67154:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},29754:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:(e,t,r)=>{var n=r(99489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var n=r(50008).default;function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r},e.exports.default=e.exports,e.exports.__esModule=!0},78585:(e,t,r)=>{var n=r(50008).default,o=r(81506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},99489:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(r,n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},94500:function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function l(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function c(e){var t=void 0===e?"undefined":k(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,p,d){d=d||[];var h=(s=s||[]).slice(0);if(void 0!==p){if(n){if("function"==typeof n&&n(h,p))return;if("object"===(void 0===n?"undefined":k(n))){if(n.prefilter&&n.prefilter(h,p))return;if(n.normalize){var g=n.normalize(h,p,e,t);g&&(e=g[0],t=g[1])}}}h.push(p)}"regexp"===c(e)&&"regexp"===c(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":k(e),y=void 0===t?"undefined":k(t),b="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),x="undefined"!==y||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!b&&x)r(new i(h,t));else if(!x&&b)r(new a(h,e));else if(c(e)!==c(t))r(new o(h,e,t));else if("date"===c(e)&&e-t!=0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var m;for(e.length,m=0;m<e.length;m++)m>=t.length?r(new u(h,m,new a(void 0,e[m]))):f(e[m],t[m],r,n,h,m,d);for(;m<t.length;)r(new u(h,m,new i(void 0,t[m++])))}else{var w=Object.keys(e),j=Object.keys(t);w.forEach((function(o,i){var a=j.indexOf(o);a>=0?(f(e[o],t[o],r,n,h,o,d),j=l(j,a)):f(e[o],void 0,r,n,h,o,d)})),j.forEach((function(e){f(void 0,t[e],r,n,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":p(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=l(e,t)}return e}function g(e){return"color: "+D[e].color+"; font-weight: bold"}function v(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+D[t].text,g(t)].concat(S(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function y(e,t,r,n){switch(void 0===e?"undefined":k(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,S(r)):e[n];case"function":return e(t);default:return e}}function b(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,l=t.level,c=t.diff,f=void 0===t.titleFormatter;e.forEach((function(o,s){var p=o.started,d=o.startedTime,h=o.action,g=o.prevState,b=o.error,x=o.took,m=o.nextState,w=e[s+1];w&&(m=w.prevState,x=w.started-p);var j=n(h),O="function"==typeof a?a((function(){return m}),h,o):a,k=_(d),S=u.title?"color: "+u.title(j)+";":"",E=["color: gray; font-weight: lighter;"];E.push(S),t.timestamp&&E.push("color: gray; font-weight: lighter;"),t.duration&&E.push("color: gray; font-weight: lighter;");var D=i(j,k,x);try{O?u.title&&f?r.groupCollapsed.apply(r,["%c "+D].concat(E)):r.groupCollapsed(D):u.title&&f?r.group.apply(r,["%c "+D].concat(E)):r.group(D)}catch(e){r.log(D)}var A=y(l,j,[g],"prevState"),P=y(l,j,[j],"action"),M=y(l,j,[b,g],"error"),N=y(l,j,[m],"nextState");if(A)if(u.prevState){var C="color: "+u.prevState(g)+"; font-weight: bold";r[A]("%c prev state",C,g)}else r[A]("prev state",g);if(P)if(u.action){var F="color: "+u.action(j)+"; font-weight: bold";r[P]("%c action    ",F,j)}else r[P]("action    ",j);if(b&&M)if(u.error){var T="color: "+u.error(b,g)+"; font-weight: bold;";r[M]("%c error     ",T,b)}else r[M]("error     ",b);if(N)if(u.nextState){var L="color: "+u.nextState(m)+"; font-weight: bold";r[N]("%c next state",L,m)}else r[N]("next state",m);c&&v(g,m,r,O);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},A,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var r=e.getState;return function(e){return function(c){if("function"==typeof i&&!i(r,c))return e(c);var f={};l.push(f),f.started=O.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=c;var s=void 0;if(a)try{s=e(c)}catch(e){f.error=o(e)}else s=e(c);f.took=O.now()-f.started,f.nextState=n(r());var p=t.diff&&"function"==typeof u?u(r,c):t.diff;if(b(l,Object.assign({},t,{diff:p})),l.length=0,f.error)throw f.error;return s}}}}var m,w,j=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},_=function(e){return j(e.getHours(),2)+":"+j(e.getMinutes(),2)+":"+j(e.getSeconds(),2)+"."+j(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},E=[];m="object"===(void 0===r.g?"undefined":k(r.g))&&r.g?r.g:"undefined"!=typeof window?window:{},(w=m.DeepDiff)&&E.push((function(){void 0!==w&&m.DeepDiff===s&&(m.DeepDiff=w,w=void 0)})),t(o,n),t(i,n),t(a,n),t(u,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,(function(n){r&&!r(e,t,n)||d(e,t,n)}))},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":h(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==w},enumerable:!0},noConflict:{value:function(){return E&&(E.forEach((function(e){e()})),E=null),s},enumerable:!0}});var D={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},A={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?x()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=A,e.createLogger=x,e.logger=P,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);