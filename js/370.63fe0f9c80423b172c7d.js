(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[370],{40688:function(t,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.processManifest=e.injectScript=e.getAppsByRootLocation=e.getAppData=e.getApp=e.initializeApp=e.unmountAll=e.unmountAppsFromRoute=e.removeActiveApp=e.setActiveApp=e.initialize=e.setPendingInjection=e.getScalprum=e.GLOBAL_NAMESPACE=void 0,e.GLOBAL_NAMESPACE="__scalprum__",e.getScalprum=function(){return window[e.GLOBAL_NAMESPACE]};var i=function(t){var e={};return Object.values(t).forEach((function(t){var n=t.rootLocation,r=t.name;n&&e[n]?e[n].push(r):n&&(e[n]=[r])})),e};e.setPendingInjection=function(t,n){window[e.GLOBAL_NAMESPACE].pendingInjections[t]=n},e.initialize=function(t){var r=t.scalpLets,o=t.api;window[e.GLOBAL_NAMESPACE]=n({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},e.setActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!0},e.removeActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!1},e.unmountAppsFromRoute=function(t){var n;null===(n=window[e.GLOBAL_NAMESPACE].scalpletRoutes[t])||void 0===n||n.forEach((function(t){return window[e.GLOBAL_NAMESPACE].apps[t].unmount()}))},e.unmountAll=function(){Object.entries(window[e.GLOBAL_NAMESPACE].activeApps).filter((function(t){var n=t[0];t[1]&&window[e.GLOBAL_NAMESPACE].apps[n].unmount()}))},e.initializeApp=function(t){if(void 0===window[e.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[e.GLOBAL_NAMESPACE].apps[t.name]={mount:function(r){var o=n(n({},r),window[e.GLOBAL_NAMESPACE]);return e.setActiveApp(t.name),t.mount(o)},unmount:function(){e.removeActiveApp(t.name),t.unmount()},update:t.update,nodeId:t.id},window[e.GLOBAL_NAMESPACE].pendingInjections[t.name]()},e.getApp=function(t){return window[e.GLOBAL_NAMESPACE].apps[t]},e.getAppData=function(t){return window[e.GLOBAL_NAMESPACE].appsMetaData[t]},e.getAppsByRootLocation=function(t){return Object.keys(window[e.GLOBAL_NAMESPACE].appsMetaData).filter((function(n){return window[e.GLOBAL_NAMESPACE].appsMetaData[n].rootLocation===t})).map((function(t){return n(n({},window[e.GLOBAL_NAMESPACE].appsMetaData[t]),{name:t})}))},e.injectScript=function(t,n,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,a){(o=document.createElement("script")).src=n,o.id=t,r?o.onload=function(){i([name,o])}:e.setPendingInjection(t,(function(){return i([name,o])})),o.onerror=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];console.log(n),r?a([n,o]):e.setPendingInjection(t,(function(){return a([n,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},e.processManifest=function(t,n,i,a){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(t)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(t){var e=t[0];return!i||e===i})).flatMap(a||function(t){return t[1].entry||t}).map((function(t){return e.injectScript(n,t,!0)})))]}}))}))}},35092:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadComponent=void 0;var a=i(n(92950)),u=function(){return a.default.createElement("span",null,"Error while loading component!")};e.loadComponent=function(t,e,i){var a=this;return void 0===i&&(i=u),function(){return r(a,void 0,void 0,(function(){var r,a,u;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,n.I("default")];case 1:return o.sent(),[4,window[t].init(n.S.default)];case 2:return o.sent(),[4,window[t].get(e)];case 3:return a=o.sent(),r=a(),[3,5];case 4:return u=o.sent(),console.error(u),r={default:i},[3,5];case 5:return[2,r]}}))}))}}},45370:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.useScalprum=void 0;var a=n(92950),u=n(40688);i(n(115),e),i(n(49518),e),i(n(44368),e),e.useScalprum=function(t,e){var n=a.useState({initialized:!1,config:{},api:e}),o=n[0],i=n[1];return a.useEffect((function(){"object"==typeof t&&(u.initialize({scalpLets:t,api:e}),i((function(e){return r(r({},e),{initialized:!0,config:t})}))),"function"==typeof t&&Promise.resolve(t()).then((function(t){i((function(e){return r(r({},e),{initialized:!0,config:t})})),u.initialize({scalpLets:t,api:e})}))}),[t]),o}},44368:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),u=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&a(e,t,n);return u(e,t),e},l=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},p=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumComponent=void 0;var s=c(n(92950)),f=n(40688),d=p(n(18446)),h=n(35092),v=function(){return s.default.createElement("span",null,"Error while loading component!")},m=function(t){var e=t.fallback,n=void 0===e?"loading":e,r=t.appName,o=t.api,a=t.scope,u=t.module,c=t.ErrorComponent,p=t.processor,d=t.innerRef,v=l(t,["fallback","appName","api","scope","module","ErrorComponent","processor","innerRef"]),m=f.getAppData(r),y=m.scriptLocation,_=m.manifestLocation,b=s.useState(void 0),A=b[0],O=b[1],w=s.useState(),E=w[0],g=w[1];return s.useEffect((function(){var t=f.getApp(r);return t?(null==t||t.mount(o),O((function(){return s.default.lazy(h.loadComponent(a,u,c))}))):y?f.injectScript(r,y).then((function(t){var e=t[1],n=f.getApp(r);null==n||n.mount(o),O((function(){return s.default.lazy(h.loadComponent(a,u,c))})),g((function(){return e}))})).catch((function(){O((function(){return c}))})):_&&f.processManifest(_,r,a,p).then((function(t){g((function(){return t.map((function(t){return t[1]}))}));var e=f.getApp(r);null==e||e.mount(o),O((function(){return s.default.lazy(h.loadComponent(a,u,c))}))})).catch((function(){O((function(){return c}))})),function(){var t=f.getApp(r);null==t||t.unmount(),E&&(Array.isArray(E)?E.forEach((function(t){return document.body.removeChild(t)})):document.body.removeChild(E))}}),[]),s.default.createElement(s.Suspense,{fallback:n},A?s.default.createElement(A,i({ref:d},v)):n)},y=function(t){function e(e){var n=t.call(this,e)||this;return n.state={hasError:!1},n}return o(e,t),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.hasError!==e.hasError||!d.default(t,this.props)},e.prototype.render=function(){var t=this.props,e=t.ErrorComponent,n=void 0===e?s.default.createElement(v,null):e,r=l(t,["ErrorComponent"]);return this.state.hasError?n:s.default.createElement(m,i({},r,{ErrorComponent:function(){return s.default.createElement(s.Fragment,null,n)}}))},e.defaultProps={ErrorComponent:s.default.createElement(v,null)},e}(s.default.Component);e.ScalprumComponent=s.default.forwardRef((function(t,e){return s.default.createElement(y,i({},t,{innerRef:e}))}))},49518:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumLink=void 0;var a=i(n(92950)),u=(n(40688),n(16530));e.ScalprumLink=function(t){var e=t.to,n=t.onClick,i=t.shouldUnmount,c=(t.unmount,o(t,["to","onClick","shouldUnmount","unmount"])),l=u.useLocation().pathname;return a.default.createElement(u.Link,r({onClick:function(t){void 0===i?"string"==typeof e&&l!==e||"object"==typeof e&&e.pathname:"boolean"==typeof i||"function"==typeof i&&i(l,e),n&&n(t)},to:e},c))}},115:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},u=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumRoute=void 0;var c=n(40688),l=a(n(92950)),p=n(12181),s=n(16530);e.ScalprumRoute=function(t){var e,n=t.Placeholder,o=void 0===n?l.Fragment:n,i=t.elementId,a=t.appName,f=t.path,d=t.api,h=u(t,["Placeholder","elementId","appName","path","api"]),v=(null===(e=c.getAppsByRootLocation(f))||void 0===e?void 0:e[0]).scriptLocation;return l.useEffect((function(){var t=c.getApp(a),e=document.getElementById(i);if(t){var n=t.mount(d);p.render(n,e)}else c.injectScript(a,v).then((function(){var t=c.getApp(a).mount(d);p.render(t,e)}));return function(){c.getApp(a).unmount(),p.unmountComponentAtNode(e)}}),[f]),l.default.createElement(s.Route,r({},h,{path:f}),l.default.createElement("div",{id:i},l.default.createElement(o,null)))}}}]);
//# sourceMappingURL=../sourcemaps/370.542e3da57d43304449ec.js.map