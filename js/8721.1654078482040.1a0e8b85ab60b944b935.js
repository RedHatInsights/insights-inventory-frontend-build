(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8721,6319],{16319:(n,e,t)=>{"use strict";t.r(e),t.d(e,{ScalprumComponent:()=>O,ScalprumContext:()=>k,ScalprumProvider:()=>S,default:()=>S,useModule:()=>T,useScalprum:()=>j});var r=t(92950),o=t.n(r),i=function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i.apply(this,arguments)},a=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{u(r.next(n))}catch(n){i(n)}}function c(n){try{u(r.throw(n))}catch(n){i(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}u((r=r.apply(n,e||[])).next())}))},c=function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(n,e,t){void 0===t&&(t=!1);var r=window.__scalprum__.factories[n];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[n];else{var o=r.modules[e];if(e)return o}},l=function(n,e){window.__scalprum__.pendingInjections[n]=e},s=function(n){var e=n.appsConfig,t=n.api,r=n.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:e,pendingInjections:{},factories:{},scalprumOptions:o},t)},f=function(n,e,t){void 0===t&&(t=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=e,r.id=n,t?r.onload=function(){o([n,r])}:l(n,(function(){return o([n,r])})),r.onerror=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];console.log(e),t?i([e,r]):l(n,(function(){return i([e,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function p(n,e){return a(this,void 0,void 0,(function(){var r,o,a,u;return c(this,(function(c){switch(c.label){case 0:if(void 0===n||0===n.length)throw new Error("Scope can't be undefined or empty");if(void 0===e||0===e.length)throw new Error("Module can't be undefined or empty");return e.startsWith("./")||console.warn("Your module "+e+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return c.sent(),[4,(r=window[n]).init(t.S.default)];case 2:return c.sent(),[4,window[n].get(e)];case 3:return o=c.sent(),window.__scalprum__.factories[n]||(window.__scalprum__.factories[n]={}),a={init:r.init,modules:i(i({},window.__scalprum__.factories[n].modules),(u={},u[e]=o(),u)),expiration:new Date},window.__scalprum__.factories[n]=a,[2,o()]}}))}))}var h=t(18446),d=t.n(h),v=function(){return o().createElement("span",null,"Error while loading component!")};function y(n,e,t){var r=this;return void 0===t&&(t=v),function(){return o=r,i=void 0,c=function(){var r,o;return function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,p(n,e)];case 1:return r=i.sent(),[3,3];case 2:return o=i.sent(),console.error(o),r={default:t},[3,3];case 3:return[2,r]}}))},new((a=void 0)||(a=Promise))((function(n,e){function t(n){try{u(c.next(n))}catch(n){e(n)}}function r(n){try{u(c.throw(n))}catch(n){e(n)}}function u(e){var o;e.done?n(e.value):(o=e.value,o instanceof a?o:new a((function(n){n(o)}))).then(t,r)}u((c=c.apply(o,i||[])).next())}));var o,i,a,c}}var w,m=(w=function(n,e){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},w(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}w(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),b=function(){return b=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},b.apply(this,arguments)},_=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},g=function(){return o().createElement("span",null,"Error while loading component!")},E=function(n){var e,t=n.fallback,i=void 0===t?"loading":t,l=n.appName,s=n.scope,p=n.module,h=n.ErrorComponent,d=n.processor,v=n.innerRef,w=n.skipCache,m=void 0!==w&&w,g=_(n,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),E=(e=l,window.__scalprum__.appsConfig[e]),C=E.scriptLocation,O=E.manifestLocation,k=(0,r.useState)(void 0),x=k[0],S=k[1],j=u(s,p,m),P=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(j)try{P.current&&S((function(){return j.default}))}catch(n){P.current&&S((function(){return h}))}else C?f(l,C).then((function(){P.current&&S((function(){return o().lazy(y(s,p,h))}))})).catch((function(){P.current&&S((function(){return h}))})):O&&function(n,e,t,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(n,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(n){var e=n[0];return!t||e===t})).flatMap(r||function(n){return n[1].entry||n}).map((function(n){return f(e,n,!0)})))]}}))}))}(O,l,s,d).then((function(){P.current&&S((function(){return o().lazy(y(s,p,h))}))})).catch((function(){P.current&&S((function(){return h}))}));return function(){P.current=!1}}),[l,s,j]),o().createElement(r.Suspense,{fallback:i},x?o().createElement(x,b({ref:v},g)):i)},C=function(n){function e(e){var t=n.call(this,e)||this;return t.state={hasError:!1},t}return m(e,n),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.shouldComponentUpdate=function(n,e){return this.state.hasError!==e.hasError||!d()(n,this.props)||!d()(e,this.state)},e.prototype.componentDidCatch=function(n,e){console.error("Scalprum encountered an error!",n.message),this.setState({error:n,errorInfo:e})},e.prototype.render=function(){var n=this.props,e=n.ErrorComponent,t=void 0===e?o().createElement(g,null):e,i=_(n,["ErrorComponent"]);return this.state.hasError?o().cloneElement(t,b({},this.state)):o().createElement(E,b({},i,{ErrorComponent:function(){return o().createElement(r.Fragment,null,t)}}))},e.defaultProps={ErrorComponent:o().createElement(g,null)},e}(o().Component),O=o().forwardRef((function(n,e){return o().createElement(C,b({},n,{innerRef:e}))})),k=(0,r.createContext)({initialized:!1,config:{},api:void 0}),x=function(){return x=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},x.apply(this,arguments)};function S(n){var e=n.config,t=n.children,i=n.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],l=c[1];return(0,r.useEffect)((function(){"object"==typeof e&&(s({appsConfig:e,api:i}),l((function(n){return x(x({},n),{initialized:!0,config:e})})),a.current=!0),"function"==typeof e&&Promise.resolve(e()).then((function(n){l((function(e){return x(x({},e),{initialized:!0,config:n})})),s({appsConfig:n,api:i}),a.current=!0}))}),[e]),(0,r.useEffect)((function(){a.current&&l((function(n){return x(x({},n),{api:i})}))}),[i]),o().createElement(k.Provider,{value:u},t)}function j(n){var e=(0,r.useContext)(k);return"function"==typeof n?n(e):e}var P=function(){return P=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},P.apply(this,arguments)};function T(n,e,t,o){var i=this;void 0===o&&(o={});var a=P({skipCache:!1},o),c=(0,r.useState)(t),l=c[0],s=c[1],f=(0,r.useCallback)((function(){return t=i,r=void 0,c=function(){var t,r;return function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:if(t=u(n,e,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,p(n,e)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+e+'" was not found in "'+n+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return s((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(n,e){function i(n){try{u(c.next(n))}catch(n){e(n)}}function a(n){try{u(c.throw(n))}catch(n){e(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(n){n(t)}))).then(i,a)}u((c=c.apply(t,r||[])).next())}));var t,r,o,c}),[n,e]);return(0,r.useEffect)((function(){f()}),[n,e]),l}},18446:(n,e,t)=>{var r=t(90939);n.exports=function(n,e){return r(n,e)}}}]);