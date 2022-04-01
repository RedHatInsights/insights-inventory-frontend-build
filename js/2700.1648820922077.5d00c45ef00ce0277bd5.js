"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2700],{47468:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(96985),o=r.n(n),a=r(52643),i=r(2372);const c=o().createElement(a.b,null,o().createElement(i.$,{size:"xl"}))},7379:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(87462),o=r(96985),a=r.n(o),i=r(47401),c=function(e){return a().createElement(i.Z,(0,n.Z)({componentName:"AppInfo"},e))};const u=a().forwardRef((function(e,t){return a().createElement(c,(0,n.Z)({innerRef:t},e))}))},47401:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(87462),o=r(4942),a=r(15861),i=r(29439),c=r(45987),u=r(87757),s=r.n(u),p=r(96985),f=r.n(p),l=r(45697),d=r.n(l),v=r(32384),m=r(4874),h=r(47468),P=["componentName","onLoad","store","history","innerRef"],y=["inventoryConnector","mergeWithDetail","shared","api"],g=["mergeWithDetail"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){var t=e.componentName,o=e.onLoad,u=e.store,l=e.history,d=e.innerRef,b=(0,c.Z)(e,P),Z=(0,p.useState)(),O=(0,i.Z)(Z,2),w=O[0],D=O[1];return(0,p.useEffect)((function(){(0,a.Z)(s().mark((function e(){var n,a,p,f,l,d,v,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([r.e(1474),r.e(8117),r.e(8729),r.e(516),r.e(3384),r.e(8881),r.e(9673),r.e(4894),r.e(6557),r.e(1216),r.e(6985),r.e(4355),r.e(9379),r.e(9390)]).then(r.bind(r,29379)),Promise.all([r.e(1474),r.e(8117),r.e(8729),r.e(516),r.e(481),r.e(3384),r.e(1856),r.e(9673),r.e(4894),r.e(6557),r.e(9729),r.e(1216),r.e(5079),r.e(6985),r.e(8794),r.e(4098),r.e(4355),r.e(7589)]).then(r.bind(r,51525)),Promise.all([r.e(1474),r.e(8117),r.e(8729),r.e(516),r.e(3384),r.e(9673),r.e(4894),r.e(6557),r.e(6985),r.e(4355),r.e(5849)]).then(r.bind(r,73880)),Promise.all([r.e(1474),r.e(516),r.e(4894),r.e(6985),r.e(1931)]).then(r.bind(r,63599))]).then((function(e){var t=(0,i.Z)(e,4),r=t[0].inventoryConnector,n=t[1],o=t[2],a=t[3];return E({inventoryConnector:r,mergeWithDetail:n.mergeWithDetail,shared:o,api:a},(0,c.Z)(n,g))}));case 2:n=e.sent,a=n.inventoryConnector,p=n.mergeWithDetail,f=n.shared,l=n.api,d=(0,c.Z)(n,y),v=a(u,void 0,void 0,!0),m=v[t],o(E(E(E({},d),f),{},{api:l,mergeWithDetail:p})),D((function(){return m}));case 11:case"end":return e.stop()}}),e)})))()}),[t]),f().createElement(v.Provider,{store:u},f().createElement(m.Router,{history:l},w&&f().createElement(w,(0,n.Z)({},b,{fallback:h.Z,ref:d}))))};Z.propTypes={store:d().object,onLoad:d().func,componentName:d().string,history:d().object,innerRef:d().shape({current:d().any})},Z.defaultProps={onLoad:function(){}};const O=Z},36494:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(87462),o=r(63366),a=r(26685),i=r(35067),c=r(63480),u=r(26343);const s=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,u.dX)((function(t){return(0,c.Z)(e,t)})):void 0}],p=[function(e){return"function"==typeof e?(0,u.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,u.dX)((function(){return{}}))}];function f(e,t,r){return(0,n.Z)({},r,e,t)}const l=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,c){var u=e(t,r,c);return i?o&&a(u,n)||(n=u):(i=!0,n=u),n}}}(e):void 0},function(e){return e?void 0:function(){return f}}];var d=r(38548),v=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function m(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function h(e,t){return e===t}function P(e){var t=void 0===e?{}:e,r=t.connectHOC,c=void 0===r?a.Z:r,u=t.mapStateToPropsFactories,f=void 0===u?p:u,P=t.mapDispatchToPropsFactories,y=void 0===P?s:P,g=t.mergePropsFactories,b=void 0===g?l:g,E=t.selectorFactory,Z=void 0===E?d.ZP:E;return function(e,t,r,a){void 0===a&&(a={});var u=a,s=u.pure,p=void 0===s||s,l=u.areStatesEqual,d=void 0===l?h:l,P=u.areOwnPropsEqual,g=void 0===P?i.Z:P,E=u.areStatePropsEqual,O=void 0===E?i.Z:E,w=u.areMergedPropsEqual,D=void 0===w?i.Z:w,j=(0,o.Z)(u,v),S=m(e,f,"mapStateToProps"),q=m(t,y,"mapDispatchToProps"),C=m(r,b,"mergeProps");return c(Z,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:q,initMergeProps:C,pure:p,areStatesEqual:d,areOwnPropsEqual:g,areStatePropsEqual:O,areMergedPropsEqual:D},j))}}const y=P()}}]);
//# sourceMappingURL=../sourcemaps/2700.02fbdb3c6a1a6756a1cae381ecaa0941.js.map