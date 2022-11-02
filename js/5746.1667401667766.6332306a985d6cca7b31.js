"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5746],{32185:(n,e,t)=>{t.r(e),t.d(e,{ScalprumComponent:()=>x,ScalprumContext:()=>j,ScalprumProvider:()=>R,default:()=>R,useLoadModule:()=>G,useModule:()=>A,useScalprum:()=>L});var r=t(92950),o=t.n(r),i=function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i.apply(this,arguments)},a=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{u(r.next(n))}catch(n){i(n)}}function c(n){try{u(r.throw(n))}catch(n){i(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}u((r=r.apply(n,e||[])).next())}))},c=function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(n,e,t){void 0===t&&(t=!1);var r=window.__scalprum__.factories[n];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[n];else{var o=r.modules[e];if(e)return o}},l=function(n,e){window.__scalprum__.pendingInjections[n]=e},s=function(n,e,t){return window.__scalprum__.pendingLoading[n+"#"+e]=t,t.then((function(t){return delete window.__scalprum__.pendingLoading[n+"#"+e],t})).catch((function(){delete window.__scalprum__.pendingLoading[n+"#"+e]})),t},f=function(n){var e=n.appsConfig,t=n.api,r=n.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:e,pendingInjections:{},pendingLoading:{},factories:{},scalprumOptions:o},t)},p=function(n){return window.__scalprum__.appsConfig[n]},h=function(n,e,t){void 0===t&&(t=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=e,r.id=n,t?r.onload=function(){o([n,r])}:l(n,(function(){return o([n,r])})),r.onerror=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];console.log(e),t?i([e,r]):l(n,(function(){return i([e,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function d(n,e,t,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(n,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(n){var e=n[0];return!t||e===t})).flatMap(r||function(n){return n[1].entry||n}).map((function(n){return h(e,n,!0)})))]}}))}))}function v(n,e){return a(this,void 0,void 0,(function(){var r,o,a,u;return c(this,(function(c){switch(c.label){case 0:if(void 0===n||0===n.length)throw new Error("Scope can't be undefined or empty");if(void 0===e||0===e.length)throw new Error("Module can't be undefined or empty");return e.startsWith("./")||console.warn("Your module "+e+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return c.sent(),[4,(r=window[n]).init(t.S.default)];case 2:return c.sent(),[4,window[n].get(e)];case 3:return o=c.sent(),window.__scalprum__.factories[n]||(window.__scalprum__.factories[n]={}),a={init:r.init,modules:i(i({},window.__scalprum__.factories[n].modules),(u={},u[e]=o(),u)),expiration:new Date},window.__scalprum__.factories[n]=a,[2,o()]}}))}))}var y=t(18446),m=t.n(y);const w=function(n){var e=n.error,t=n.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==e?void 0:e.message)&&o().createElement("p",null,e.message),(null==t?void 0:t.componentStack)?o().createElement("pre",null,null==t?void 0:t.componentStack):(null==e?void 0:e.stack)&&o().createElement("pre",null,e.stack))};var b=function(){return b=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},b.apply(this,arguments)};function _(n,e,t){var r=this;return void 0===t&&(t=w),function(){return i=r,a=void 0,u=function(){var r,i;return function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,v(n,e)];case 1:return r=a.sent(),[3,3];case 2:return i=a.sent(),r={default:function(n){return o().createElement(t,b({},n,{error:i}))}},[3,3];case 3:return[2,r]}}))},new((c=void 0)||(c=Promise))((function(n,e){function t(n){try{o(u.next(n))}catch(n){e(n)}}function r(n){try{o(u.throw(n))}catch(n){e(n)}}function o(e){var o;e.done?n(e.value):(o=e.value,o instanceof c?o:new c((function(n){n(o)}))).then(t,r)}o((u=u.apply(i,a||[])).next())}));var i,a,c,u}}var g,E=(g=function(n,e){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},g(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}g(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),k=function(){return k=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},k.apply(this,arguments)},O=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},C=function(n){var e=n.fallback,t=void 0===e?"loading":e,i=n.appName,a=n.scope,c=n.module,l=n.ErrorComponent,f=n.processor,v=n.innerRef,y=n.skipCache,m=void 0!==y&&y,w=O(n,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),b=p(i),g=b.scriptLocation,E=b.manifestLocation,C=(0,r.useReducer)((function(n){return n+1}),0),S=C[0],x=C[1],j=(0,r.useState)(void 0),P=j[0],R=j[1];return(0,r.useEffect)((function(){var n=u(a,c,m),e=!0,t=function(){return e&&R((function(){return function(n){return o().createElement(l,k({},n))}}))},r=function(n,e){return window.__scalprum__.pendingLoading[n+"#"+e]}(a,c);if(!n&&r)r.finally((function(){x()}));else if(n)try{e&&R((function(){return n.default}))}catch(n){t()}else if(g){var p=h(i,g).then((function(){e&&R((function(){return o().lazy(_(a,c,l))}))})).catch(t);s(a,c,p)}else if(E){var v=d(E,i,a,f).then((function(){e&&R((function(){return o().lazy(_(a,c,l))}))})).catch(t);s(a,c,v)}return function(){e=!1}}),[i,a,m,S]),o().createElement(r.Suspense,{fallback:t},P?o().createElement(P,k({ref:v},w)):t)},S=function(n){function e(e){var t=n.call(this,e)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return E(e,n),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.shouldComponentUpdate=function(n,e){return this.state.hasError!==e.hasError||!m()(n,this.props)||!m()(e,this.state)},e.prototype.componentDidCatch=function(n,e){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",n.message),this.setState({error:n,errorInfo:e})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},e.prototype.render=function(){var n=this,e=this.props,t=e.ErrorComponent,r=void 0===t?o().createElement(w,k({},this.state)):t,i=O(e,["ErrorComponent"]),a=function(e){return o().cloneElement(r,k(k({},n.state),e))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(C,k({},i,{skipCache:!0,ErrorComponent:a}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(r,k({},this.state)):o().createElement(C,k({},i,{ErrorComponent:a}))},e.defaultProps={ErrorComponent:o().createElement(w,null)},e}(o().Component),x=o().forwardRef((function(n,e){return o().createElement(S,k({},n,{innerRef:e}))})),j=(0,r.createContext)({initialized:!1,config:{},api:void 0}),P=function(){return P=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},P.apply(this,arguments)};function R(n){var e=n.config,t=n.children,i=n.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],l=c[1];return(0,r.useEffect)((function(){"object"==typeof e&&(f({appsConfig:e,api:i}),l((function(n){return P(P({},n),{initialized:!0,config:e})})),a.current=!0),"function"==typeof e&&Promise.resolve(e()).then((function(n){l((function(e){return P(P({},e),{initialized:!0,config:n})})),f({appsConfig:n,api:i}),a.current=!0}))}),[e]),(0,r.useEffect)((function(){a.current&&l((function(n){return P(P({},n),{api:i})}))}),[i]),o().createElement(j.Provider,{value:u},t)}function L(n){var e=(0,r.useContext)(j);return"function"==typeof n?n(e):e}var T=function(){return T=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},T.apply(this,arguments)};function A(n,e,t,o){var i=this;void 0===o&&(o={});var a=T({skipCache:!1},o),c=(0,r.useState)(t),l=c[0],s=c[1],f=(0,r.useCallback)((function(){return t=i,r=void 0,c=function(){var t,r;return function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:if(t=u(n,e,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,v(n,e)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+e+'" was not found in "'+n+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return s((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(n,e){function i(n){try{u(c.next(n))}catch(n){e(n)}}function a(n){try{u(c.throw(n))}catch(n){e(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(n){n(t)}))).then(i,a)}u((c=c.apply(t,r||[])).next())}));var t,r,o,c}),[n,e]);return(0,r.useEffect)((function(){f()}),[n,e]),l}var z=function(){return z=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},z.apply(this,arguments)},M=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{u(r.next(n))}catch(n){i(n)}}function c(n){try{u(r.throw(n))}catch(n){i(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}u((r=r.apply(n,e||[])).next())}))},I=function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function G(n,e,t){var o=this,i=n.appName,a=n.scope,c=n.module,l=n.processor;void 0===t&&(t={});var s=z({skipCache:!1},t),f=p(i||a),y=f.scriptLocation,m=f.manifestLocation,w=(0,r.useState)(e),b=w[0],_=w[1],g=(0,r.useState)(),E=g[0],k=g[1],O=u(a,c,s.skipCache),C=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(C.current)if(O)try{v(a,c).then((function(n){_((function(){return n}))}))}catch(n){k((function(){return n}))}else y?h(i||a,y).then((function(){return M(o,void 0,void 0,(function(){var n;return I(this,(function(e){switch(e.label){case 0:return[4,v(a,c)];case 1:return n=e.sent(),_((function(){return n})),[2]}}))}))})).catch((function(n){k((function(){return n}))})):m&&d(m,i||a,a,l).then((function(){return M(o,void 0,void 0,(function(){var n;return I(this,(function(e){switch(e.label){case 0:return[4,v(a,c)];case 1:return n=e.sent(),_((function(){return n})),[2]}}))}))})).catch((function(n){k((function(){return n}))}));return function(){C.current=!1}}),[i,a,O,s.skipCache]),[b,E]}}}]);
//# sourceMappingURL=../sourcemaps/5746.289da8fd49a7a9daca91755a581ebe8e.js.map