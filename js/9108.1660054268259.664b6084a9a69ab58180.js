(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9108],{60817:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=void 0;var o=n(32384),i=r(n(72837)),a=n(53446);t.NotificationPortal=(0,o.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,a.removeNotification)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,a.clearNotifications)())}}}))(i.default);var c=n(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return r(c).default}}),t.default=t.NotificationPortal},72871:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(a).default}}),o(n(60817),t)},72837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(92950),o=n.n(r),i=n(12181),a=n(22938),c=n(76139),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const u=function(e){var t=e.description,n=e.dismissable,i=void 0===n||n,u=e.onDismiss,f=e.dismissDelay,s=void 0===f?8e3:f,d=e.title,p=e.sentryId,g=e.requestId,h=e.autoDismiss,v=void 0===h||h,m=e.id,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),b=(0,r.useRef)(),O=function(){u(m)},N=function(){v&&(b.current=setTimeout((function(){return O()}),s))},I=function(){b.current&&clearTimeout(b.current)};return(0,r.useEffect)((function(){return N(),function(){I()}}),[]),o().createElement(a.Alert,l({className:"notification-item",id:"".concat(m),title:"string"==typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d},y,{actionClose:i?o().createElement(a.AlertActionCloseButton,{"aria-label":"close-notification",variant:"plain",onClick:O},o().createElement(c.CloseIcon,null)):null,onMouseEnter:I,onMouseLeave:N}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,p&&o().createElement(a.TextContent,null,o().createElement(a.Text,{component:a.TextVariants.small},"Tracking Id: ",p)),g&&o().createElement(a.TextContent,null,o().createElement(a.Text,{component:a.TextVariants.small},"Request Id: ",g)))},f=function(e){var t=e.page,n=void 0===t?1:t,r=e.onSetPage,i=e.onClearAll,c=e.count,l=void 0===c?0:c;return o().createElement(a.Card,{className:"notification-item"},o().createElement(a.CardBody,null,o().createElement(a.Level,null,o().createElement(a.LevelItem,null,o().createElement(a.Button,{variant:a.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:i},"Clear all")),o().createElement(a.LevelItem,null,o().createElement(a.Pagination,{itemCount:l,variant:a.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:n,onSetPage:r})))))};var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};const d=function(e){var t=e.notifications,n=void 0===t?[]:t,a=e.removeNotification,c=void 0===a?function(){}:a,l=e.rootId,d=e.onClearAll,p=(0,r.useState)({page:1}),g=p[0],h=p[1],v=g.page,m=n&&n.length<=5?n:n&&n.slice(5*(v-1),5*v);return 0===n.length?null:(0,i.createPortal)(o().createElement("div",{className:"notifications-portal"},n.length>5&&o().createElement(f,{onSetPage:function(e,t){h((function(e){return s(s({},e),{page:t})}))},count:n.length,page:v,onClearAll:d}),m.map((function(e){return o().createElement(u,s({onDismiss:c,key:"".concat(e.id)},e))}))),l&&document.getElementById(l)||document.body)}},71355:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var o=n(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(o).default}});var i=n(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(i).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return i.notificationsReducers}});var a=n(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return a.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return a.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return a.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var l=n(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(l).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var r=n(68129);t.addNotification=function(e){return{type:r.ADD_NOTIFICATION,payload:e}},t.removeNotification=function(e){return{type:r.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:r.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var i=n(68129);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case i.ADD_NOTIFICATION:return a=e,c=n.payload,o(o([],a,!0),[r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},c)],!1);case i.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return o(o([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,n);case i.CLEAR_NOTIFICATIONS:return[];default:return e}var a,c},t.notifications=t.notificationsReducers,t.default=t.notifications},371:(e,t,n)=>{"use strict";n.d(t,{r:()=>l});var r=n(92950),o=n.n(r),i=n(22938),a=n(34663),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},l=function(e){var t,n=e.appName,l=e.children,u=(0,r.useState)(a.lo),f=u[0],s=u[1];return(0,r.useEffect)((function(){var e,t,r,o;n&&(e=void 0,t=void 0,o=function(){var e,t,r;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:return[4,(0,a._s)(n,!0)];case 1:return e=o.sent(),t=e.isOrgAdmin,r=e.permissions,s((function(e){return c(c({},e),{isLoading:!1,isOrgAdmin:t,permissions:r})})),[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())})))}),[n]),o().createElement(a.RM.Provider,{value:c(c({},f),{hasAccess:(t=(null==f?void 0:f.permissions)||[],function(e,n){return void 0===n&&(n=!0),n?(0,a.wP)(t,e):(0,a.Cs)(t,e)})})},f.isLoading?o().createElement(i.Bullseye,null,o().createElement(i.Spinner,{size:"xl"})):l)}},94500:function(e,t,n){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,n){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function l(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function u(e){var t=void 0===e?"undefined":T(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,n,r,s,d,p){p=p||[];var g=(s=s||[]).slice(0);if(void 0!==d){if(r){if("function"==typeof r&&r(g,d))return;if("object"===(void 0===r?"undefined":T(r))){if(r.prefilter&&r.prefilter(g,d))return;if(r.normalize){var h=r.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":T(e),m=void 0===t?"undefined":T(t),y="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==m||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!y&&b)n(new i(g,t));else if(!b&&y)n(new a(g,e));else if(u(e)!==u(t))n(new o(g,e,t));else if("date"===u(e)&&e-t!=0)n(new o(g,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&n(new o(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var O;for(e.length,O=0;O<e.length;O++)O>=t.length?n(new c(g,O,new a(void 0,e[O]))):f(e[O],t[O],n,r,g,O,p);for(;O<t.length;)n(new c(g,O,new i(void 0,t[O++])))}else{var N=Object.keys(e),I=Object.keys(t);N.forEach((function(o,i){var a=I.indexOf(o);a>=0?(f(e[o],t[o],n,r,g,o,p),I=l(I,a)):f(e[o],void 0,n,r,g,o,p)})),I.forEach((function(e){f(void 0,t[e],n,r,g,e,p)}))}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||n(new o(g,e,t)))}function s(e,t,n,r){return r=r||[],f(e,t,(function(e){e&&r.push(e)}),n),r.length?r:void 0}function d(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":d(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":d(e[t],n.index,n.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":d(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function g(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":g(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":g(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=l(e,t)}return e}function h(e){return"color: "+C[e].color+"; font-weight: bold"}function v(e,t,n,r){var o=s(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach((function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}(e);n.log.apply(n,["%c "+C[t].text,h(t)].concat(_(r)))})):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function m(e,t,n,r){switch(void 0===e?"undefined":T(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,_(n)):e[r];case"function":return e(t);default:return e}}function y(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,l=t.level,u=t.diff,f=void 0===t.titleFormatter;e.forEach((function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,b=o.took,O=o.nextState,N=e[s+1];N&&(O=N.prevState,b=N.started-d);var I=r(g),E="function"==typeof a?a((function(){return O}),g,o):a,T=A(p),_=c.title?"color: "+c.title(I)+";":"",w=["color: gray; font-weight: lighter;"];w.push(_),t.timestamp&&w.push("color: gray; font-weight: lighter;"),t.duration&&w.push("color: gray; font-weight: lighter;");var C=i(I,T,b);try{E?c.title&&f?n.groupCollapsed.apply(n,["%c "+C].concat(w)):n.groupCollapsed(C):c.title&&f?n.group.apply(n,["%c "+C].concat(w)):n.group(C)}catch(e){n.log(C)}var j=m(l,I,[h],"prevState"),S=m(l,I,[I],"action"),P=m(l,I,[y,h],"error"),x=m(l,I,[O],"nextState");if(j)if(c.prevState){var D="color: "+c.prevState(h)+"; font-weight: bold";n[j]("%c prev state",D,h)}else n[j]("prev state",h);if(S)if(c.action){var k="color: "+c.action(I)+"; font-weight: bold";n[S]("%c action    ",k,I)}else n[S]("action    ",I);if(y&&P)if(c.error){var F="color: "+c.error(y,h)+"; font-weight: bold;";n[P]("%c error     ",F,y)}else n[P]("error     ",y);if(x)if(c.nextState){var R="color: "+c.nextState(O)+"; font-weight: bold";n[x]("%c next state",R,O)}else n[x]("next state",O);u&&v(h,O,n,E);try{n.groupEnd()}catch(e){n.log("—— log end ——")}}))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},j,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var n=e.getState;return function(e){return function(u){if("function"==typeof i&&!i(n,u))return e(u);var f={};l.push(f),f.started=E.now(),f.startedTime=new Date,f.prevState=r(n()),f.action=u;var s=void 0;if(a)try{s=e(u)}catch(e){f.error=o(e)}else s=e(u);f.took=E.now()-f.started,f.nextState=r(n());var d=t.diff&&"function"==typeof c?c(n,u):t.diff;if(y(l,Object.assign({},t,{diff:d})),l.length=0,f.error)throw f.error;return s}}}}var O,N,I=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},A=function(e){return I(e.getHours(),2)+":"+I(e.getMinutes(),2)+":"+I(e.getSeconds(),2)+"."+I(e.getMilliseconds(),3)},E="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},w=[];O="object"===(void 0===n.g?"undefined":T(n.g))&&n.g?n.g:"undefined"!=typeof window?window:{},(N=O.DeepDiff)&&w.push((function(){void 0!==N&&O.DeepDiff===s&&(O.DeepDiff=N,N=void 0)})),t(o,r),t(i,r),t(a,r),t(c,r),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&f(e,t,(function(r){n&&!n(e,t,r)||p(e,t,r)}))},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":g(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==N},enumerable:!0},noConflict:{value:function(){return w&&(w.forEach((function(e){e()})),w=null),s},enumerable:!0}});var C={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},j={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?b()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=j,e.createLogger=b,e.logger=S,e.default=S,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=../sourcemaps/9108.cfa37c52ba019894eb3bed6bc9d02192.js.map