/*! For license information please see 5857.392c741e024f6dbe18f5.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5857],{46987:(t,r,e)=>{e.d(r,{$W:()=>p,BU:()=>v,nr:()=>y});var n=e(71002),o=e(15861),i=e(4942),a=e(83215),c=e(9669),u=e.n(c),s=e(13784);function l(){l=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:x(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function v(){}function y(){}function d(){}var g={};s(g,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(k([])));w&&w!==r&&e.call(w,a)&&(g=w);var b=d.prototype=v.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function i(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){i(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function x(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return y.prototype=d,o(b,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:y,configurable:!0}),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},O(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(b),s(b,u,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){(0,i.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var p="manage-edge-inventory",v=function(t){return{hasInfo:function(r){t(h({},(0,a.wN)(h({variant:"info"},r))))},hasSuccess:function(r){t(h({},(0,a.wN)(h({variant:"success"},r))))},hasWarning:function(r){t(h({},(0,a.wN)(h({variant:"warning"},r))))},err:function(r,e){t(h({},(0,a.wN)(h(h({variant:"danger"},r),{},{description:null!=e&&e.Title?"".concat(r.description,": ").concat(e.Title):r.description}))))}}},y=function(){var t=(0,o.Z)(l().mark((function t(){var r,e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s.vo).concat(s.Ph));case 2:return e=t.sent,t.abrupt("return",(null==e||null===(r=e.data)||void 0===r?void 0:r.total)>0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},95857:(t,r,e)=>{e.r(r),e.d(r,{default:()=>l});var n=e(92950),o=e.n(n),i=e(55140),a=e(22663),c=e(62012),u=e(46987),s=e(60261);const l=function(){var t=(0,i.Z)(),r=(0,s.useDispatch)(),e=(0,u.BU)(r);(0,n.useEffect)((function(){var r;null==t||null===(r=t.updateDocumentTitle)||void 0===r||r.call(t,"Inventory Groups | Red Hat Insights")}),[t]);var l=(0,c.useParams)().inventoryId;return null!==l?o().createElement(a.Z,{appName:"edge",module:"./UpdateSystem",navigateProp:c.useNavigate,locationProp:c.useLocation,notificationProp:e,paramsProp:c.useParams,inventoryId:l}):o().createElement(o().Fragment,null)}}}]);
//# sourceMappingURL=../sourcemaps/5857.ec91006f3e61dedeb85aa130c93b0368.js.map