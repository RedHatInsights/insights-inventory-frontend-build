/*! For license information please see 2884.b2b1f214bf8a7ea676ac.js.LICENSE.txt */
(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2884],{35293:(t,e,r)=>{"use strict";r.d(e,{i:()=>c});var n=r(70655),o=r(92950),a=r(38296),i=r(51203);const c=t=>{var{children:e=null,className:r=""}=t,c=(0,n.__rest)(t,["children","className"]);return o.createElement("div",Object.assign({className:(0,a.i)(i.Z.emptyStateSecondary,r)},c),e)};c.displayName="EmptyStateSecondaryActions"},7081:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>i,lb:()=>o,wl:()=>a});var n=r(40400);const o={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},37655:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={name:"--pf-global--warning-color--100",value:"#f0ab00",var:"var(--pf-global--warning-color--100)"}},14299:(t,e)=>{"use strict";e.pD={name:"--pf-global--palette--black-600",value:"#6a6e73",var:"var(--pf-global--palette--black-600)"},e.pD},93130:(t,e,r)=>{"use strict";r.d(e,{Z:()=>Z});var n=r(71002),o=r(87462),a=r(15861),i=r(29439),c=r(92950),u=r.n(c),l=r(45697),s=r.n(l),h=r(64124),f=r(96354),p=r(90218),d=r(63441),v=r(69957),y=r(37655);const m="#c9190b";var g=r(29390),w=r(52643),b=r(37619),E=r(68340),x=r(81005),L=r(50533),O=r(43047);function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:x(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function v(){}var y={};l(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(o,i,c,u){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return a("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var S=function(t,e){return e?t.length>1?"Delete groups?":"Delete group?":t.length>1?"Cannot delete groups at this time":"Cannot delete group at this time"},j=function(t,e){var r;return e?{fields:[{component:f.Z.PLAIN_TEXT,name:"warning-message",label:t.length>1?u().createElement(E.x,null,u().createElement("strong",null,t.length)," groups and all their data will be deleted."):u().createElement(E.x,null,u().createElement("strong",null,null===(r=t[0])||void 0===r?void 0:r.name)," and all its data will be deleted.")},{component:f.Z.CHECKBOX,name:"confirmation",label:"I understand that this action cannot be undone.",validate:[{type:h.Z.REQUIRED}]}]}:{fields:[{component:f.Z.PLAIN_TEXT,name:"danger-message",label:t.length>1?u().createElement(E.x,null,"Groups containing systems cannot be deleted. To delete groups, first remove all of the systems from them."):u().createElement(E.x,null,"Groups containing systems cannot be deleted. To delete"," ",u().createElement("strong",null,t[0].name),", first remove all of the systems from it.")}]}},k=function(t){var e=t.isModalOpen,r=t.setIsModalOpen,n=t.reloadData,l=t.groupIds,s=(0,L.useDispatch)(),h=(0,c.useState)(void 0),f=(0,i.Z)(h,2),E=f[0],k=f[1],Z=(E||[]).every((function(t){return 0===t.host_count})),N=(0,c.useState)(!0),T=(0,i.Z)(N,2),G=T[0],I=T[1];return console.log("###",l),(0,c.useEffect)((function(){var t=!1,e=function(){var e=(0,a.Z)(_().mark((function e(){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Hk)(l);case 2:r=e.sent,t||(k(r.results),I(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){t=!0}}),[]),G?u().createElement(g.Y,null,u().createElement(w.b,null,u().createElement(b.$,{"aria-label":"Loading the modal spinner","aria-valueText":"Loading..."}))):u().createElement(p.Z,(0,o.Z)({isModalOpen:e,closeModal:function(){return r(!1)},onSubmit:Z?function(){var t,e,r={onSuccess:{title:"Success",description:l.length>1?"".concat(l.length," groups deleted"):"".concat(null==E||null===(t=E[0])||void 0===t?void 0:t.name," has been removed successfully")},onError:{title:"Error",description:l.length>1?"Failed to delete ".concat(l.length," groups"):"Failed to delete group ".concat(null==E||null===(e=E[0])||void 0===e?void 0:e.name)}};(0,x.Z)(s,(function(){return(0,d.XG)(l)}),r)}:function(){return r(!1)},reloadData:n},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{title:S(t,e),titleIconVariant:function(){return function(t){return t?u().createElement(v.LP,{color:y.Z.value}):u().createElement(O.ZP,{color:m})}(e)},variant:e?"danger":"primary",submitLabel:e?"Delete":"Close",schema:j(t,e)}}(E,Z)))};k.propTypes={groupIds:s().arrayOf(s().string).isRequired,isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func};const Z=k},51023:(t,e,r)=>{"use strict";r.d(e,{Z:()=>w});var n=r(71002),o=r(15861),a=r(92950),i=r.n(a),c=r(45697),u=r.n(c),l=r(64124),s=r(96354),h=r(90218),f=r(99166),p=r(63441),d=r(66322),v=r(81005),y=r(50533);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function v(){}var y={};l(y,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==e&&r.call(w,i)&&(y=w);var b=v.prototype=p.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(o,i,c,u){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return a("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return d.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),l(b,u,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var g=function(t){var e=t.isModalOpen,r=t.setIsModalOpen,n=t.modalState,c=t.reloadData,u=n.id,g=n.name,w=(0,y.useDispatch)(),b=(0,a.useMemo)((function(){var t,e=function(){var t=(0,o.Z)(m().mark((function t(e){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Tb)(e);case 2:if(!0!==t.sent){t.next=5;break}throw"Group name already exists";case 5:return t.abrupt("return",void 0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t=(0,f.Z)(e,500,{onlyResolvesLast:!1}),{fields:[{component:s.Z.TEXT_FIELD,name:"name",label:"Name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[t,{type:l.Z.REQUIRED},{type:l.Z.MAX_LENGTH,threshold:50},d.q]}]}}),[]);return i().createElement(h.Z,{isModalOpen:e,closeModal:function(){return r(!1)},title:"Rename group",submitLabel:"Save",schema:b,initialValues:n,onSubmit:function(t){var e={onSuccess:{title:"Success",description:"".concat(g," has been renamed to ").concat(t.name," successfully")},onError:{title:"Error",description:"Failed to rename group"}};(0,v.Z)(w,(function(){return(0,p.OS)(u,{name:t.name})}),e)},reloadData:c})};g.propTypes={modalState:u().shape({id:u().string,name:u().string}),isModalOpen:u().bool,setIsModalOpen:u().func,reloadData:u().func};const w=g},91966:(t,e,r)=>{var n=r(20731),o=r(21078),a=r(5976),i=r(29246),c=a((function(t,e){return i(t)?n(t,o(e,1,i,!0)):[]}));t.exports=c},10108:()=>{},93398:()=>{},46928:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2884.a98c54fef80168821872c0cb3eeb6c0e.js.map