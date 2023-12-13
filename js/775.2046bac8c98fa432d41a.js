/*! For license information please see 775.2046bac8c98fa432d41a.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[775],{76440:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(62012),i=n(r(51124)),a=r(67230);e.default=function(t,e){var r=(0,o.useNavigate)(),n=(0,i.default)();return function(o,i){return r((0,a.buildInsightsPath)(n,t,o,i||e))}}},57624:(t,e,r)=>{r.d(e,{P:()=>w});var n=r(71002),o=r(93433),i=r(4942),a=r(15861),c=r(29439),u=r(37619),l=r(44439),s=r(92950),f=r.n(s),h=r(60261),p=r(94474),d=r(96396),v=r(32473);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var g={};l(g,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(k([])));w&&w!==e&&r.call(w,a)&&(g=w);var b=v.prototype=p.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,c,u){var l=f(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},O(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=function(t,e,r,n,i,g,w){var b,O=(0,s.useState)(!1),x=(0,c.Z)(O,2),E=x[0],L=x[1],_=(0,v.Z)().fetchBatched,j=(0,h.useDispatch)(),P=function(t,e){return j(p.CL(t,e))},k=function(){return t?t.size:0},S=(0,h.useSelector)((function(t){return t.entities})).activeFilters,G=!t||0===t.size,Z=function(){var t=(0,a.Z)(y().mark((function t(e,r){var n,o,i,a;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.page,o=r.per_page,i=(0,d.K$)(m({page:n,per_page:o},e)),t.next=4,i.payload;case 4:return a=t.sent,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),F=(0,s.useCallback)((function(t,e){return _(Z,e,t)}),[]),N=function(){var t=(0,a.Z)(y().mark((function t(){var n,i,a,c=arguments;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(c.length>0&&void 0!==c[0])||c[0],L(!0),t.next=4,F({filters:w?[].concat((0,o.Z)(S),[{hostGroupFilter:w}]):S,globalFilter:null!=e?e:{}},r);case 4:i=t.sent,a=(0,l.flatten)((0,l.map)(i,"results")),j(p.CL(a,n)),L(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{id:"bulk-select-systems",items:[{title:"Select none (0 items)",onClick:function(){return P(-1,!1)},props:{isDisabled:G}},m({},i&&n&&n.length>0?{title:"".concat(g?"Deselect":"Select"," page (").concat(n.length," ").concat(1===n.length?"item":"items",")"),onClick:function(){return P(0,!g)}}:{}),m({},i&&n&&n.length>0?{title:"Select all (".concat(r," ").concat(1===r?"item":"items",")"),onClick:(b=(0,a.Z)(y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:case"end":return t.stop()}}),t)}))),function(){return b.apply(this,arguments)})}:{})],checked:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.every((function(t){var r=t.id;return e&&e.has(r)}))?t.length>0:t.some((function(t){var r=t.id;return e&&e.has(r)}))&&null}(n,t),onSelect:function(t){P(0,t)},toggleProps:{"data-ouia-component-type":"bulk-select-toggle-button",children:E?[f().createElement(s.Fragment,{key:"sd"},f().createElement(u.$,{size:"sm"}),f().createElement("span",{id:"bulk-select-systems-toggle-checkbox-text"},"".concat(k()," selected")))]:k()>0?f().createElement("span",{id:"bulk-select-systems-toggle-checkbox-text"},"".concat(k()," selected")):null}}}},41054:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(71002),o=r(15861),i=r(92950),a=r.n(i),c=r(45697),u=r.n(c),l=r(90218),s=r(81005),f=r(60261),h=r(63441),p=r(96354),d=r(68340);function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function p(){}function d(){}function y(){}var g={};l(g,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(k([])));w&&w!==e&&r.call(w,a)&&(g=w);var b=y.prototype=p.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,c,u){var l=f(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y,o(b,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:d,configurable:!0}),d.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},O(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var y=function(t){var e=t.filter((function(t){return t.groups.length>0})),r=e[0].groups[0].name;return{fields:[{component:p.Z.PLAIN_TEXT,name:"warning-message",label:1===e.length?a().createElement(d.x,null,a().createElement("strong",null,e[0].display_name)," will no longer be part of ",a().createElement("strong",null,r)," and its configuration will be impacted."):a().createElement(d.x,null,a().createElement("strong",null,e.length)," systems will no longer be part of ",a().createElement("strong",null,r)," and their configuration will be impacted.")}]}},g=function(t){var e=t.isModalOpen,r=t.setIsModalOpen,n=t.modalState,i=t.reloadData,c=t.reloadTimeout,u=(0,f.useDispatch)(),p=n.find((function(t){return t.groups.length>0})).groups[0].id;return a().createElement(l.Z,{isModalOpen:e,closeModal:function(){return r(!1)},title:"Remove from group",variant:"danger",submitLabel:"Remove",schema:y(n),onSubmit:function(){return(0,s.Z)(u,(0,o.Z)(v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.Op)(p,n.map((function(t){return t.id})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){var e=t.filter((function(t){return t.groups.length>0})),r=e[0].groups[0].name;return 1===e.length?{onSuccess:{title:"1 system removed from ".concat(r)},onError:{title:"Failed to remove 1 system from ".concat(r)}}:{onSuccess:{title:"".concat(e.length," systems removed from ").concat(r)},onError:{title:"Failed to remove ".concat(e.length," systems from ").concat(r)}}}(n))},reloadData:i,reloadTimeout:c})};g.propTypes={modalState:u().arrayOf(u().shape({display_name:u().string,id:u().string,groups:u().arrayOf(u().shape({id:u().string,name:u().string}))})).isRequired,isModalOpen:u().bool.isRequired,setIsModalOpen:u().func.isRequired,reloadData:u().func,reloadTimeout:u().number};const m=g},54629:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(4942),o=r(29439),i=r(92950),a=r(79161),c=r(55140);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const s=function(){var t=(0,c.Z)(),e=(0,a.Z)("edgeParity.inventory-list-filter"),r=(0,i.useState)(),n=(0,o.Z)(r,2),u=n[0],s=n[1];return(0,i.useEffect)((function(){t.hideGlobalFilter(!1);var r=t.on("GLOBAL_FILTER_UPDATE",(function(r){var n,i,a,c,f=r.data,h=t.mapGlobalFilter(f,!1,!0),p=(0,o.Z)(h,3),d=p[0],v=p[1],y=p[2];s({tags:y,filter:l(l({},null==u?void 0:u.filter),{},{system_profile:l(l(l(l(l(l({},null==u||null===(n=u.filter)||void 0===n?void 0:n.system_profile),(null==d||null===(i=d.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),d&&(null===(a=d["Ansible Automation Platform"])||void 0===a?void 0:a.isSelected)&&{ansible:"not_nil"}),(null==d||null===(c=d["Microsoft SQL"])||void 0===c?void 0:c.isSelected)&&{mssql:"not_nil"}),e&&{host_type:"nil"}),(null==v?void 0:v.length)>0&&{sap_sids:v})})})}));return function(){return r()}}),[e]),u}}}]);