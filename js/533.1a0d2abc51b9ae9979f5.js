(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[533],{6526:(e,n,t)=>{"use strict";t.d(n,{E:()=>o});var r=t(30624),o=t.n(r)().createContext(null)},60682:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(30624),o=t.n(r),u=(t(45697),t(6526)),i=t(86496);const s=function(e){var n=e.store,t=e.context,s=e.children,a=(0,r.useMemo)((function(){var e=new i.Z(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),c=(0,r.useMemo)((function(){return n.getState()}),[n]);(0,r.useEffect)((function(){var e=a.subscription;return e.trySubscribe(),c!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,c]);var d=t||u.E;return o().createElement(d.Provider,{value:a},s)}},26685:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var r=t(22122),o=t(19756),u=t(8679),i=t.n(u),s=t(30624),a=t.n(s),c=t(59864),d=t(86496),p=t(1881),f=t(6526),l=[],v=[null,null];function h(e,n){var t=e[1];return[n.payload,t+1]}function b(e,n,t){(0,p.L)((function(){return e.apply(void 0,n)}),t)}function m(e,n,t,r,o,u,i){e.current=r,n.current=o,t.current=!1,u.current&&(u.current=null,i())}function P(e,n,t,r,o,u,i,s,a,c){if(e){var d=!1,p=null,f=function(){if(!d){var e,t,f=n.getState();try{e=r(f,o.current)}catch(e){t=e,p=e}t||(p=null),e===u.current?i.current||a():(u.current=e,s.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:t}}))}};return t.onStateChange=f,t.trySubscribe(),f(),function(){if(d=!0,t.tryUnsubscribe(),t.onStateChange=null,p)throw p}}}var y=function(){return[null,0]};function S(e,n){void 0===n&&(n={});var t=n,u=t.getDisplayName,p=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,S=t.methodName,g=void 0===S?"connectAdvanced":S,w=t.renderCountProp,C=void 0===w?void 0:w,E=t.shouldHandleStateChanges,Z=void 0===E||E,O=t.storeKey,x=void 0===O?"store":O,M=(t.withRef,t.forwardRef),R=void 0!==M&&M,N=t.context,T=void 0===N?f.E:N,q=(0,o.Z)(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),D=T;return function(n){var t=n.displayName||n.name||"Component",u=p(t),f=(0,r.Z)({},q,{getDisplayName:p,methodName:g,renderCountProp:C,shouldHandleStateChanges:Z,storeKey:x,displayName:u,wrappedComponentName:t,WrappedComponent:n}),S=q.pure,w=S?s.useMemo:function(e){return e()};function E(t){var u=(0,s.useMemo)((function(){var e=t.reactReduxForwardedRef,n=(0,o.Z)(t,["reactReduxForwardedRef"]);return[t.context,e,n]}),[t]),i=u[0],p=u[1],S=u[2],g=(0,s.useMemo)((function(){return i&&i.Consumer&&(0,c.isContextConsumer)(a().createElement(i.Consumer,null))?i:D}),[i,D]),C=(0,s.useContext)(g),E=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch);Boolean(C)&&Boolean(C.store);var O=E?t.store:C.store,x=(0,s.useMemo)((function(){return function(n){return e(n.dispatch,f)}(O)}),[O]),M=(0,s.useMemo)((function(){if(!Z)return v;var e=new d.Z(O,E?null:C.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[O,E,C]),R=M[0],N=M[1],T=(0,s.useMemo)((function(){return E?C:(0,r.Z)({},C,{subscription:R})}),[E,C,R]),q=(0,s.useReducer)(h,l,y),k=q[0][0],F=q[1];if(k&&k.error)throw k.error;var B=(0,s.useRef)(),H=(0,s.useRef)(S),W=(0,s.useRef)(),A=(0,s.useRef)(!1),j=w((function(){return W.current&&S===H.current?W.current:x(O.getState(),S)}),[O,k,S]);b(m,[H,B,A,S,j,W,N]),b(P,[Z,O,R,x,H,B,A,W,N,F],[O,R,x]);var U=(0,s.useMemo)((function(){return a().createElement(n,(0,r.Z)({},j,{ref:p}))}),[p,n,j]);return(0,s.useMemo)((function(){return Z?a().createElement(g.Provider,{value:T},U):U}),[g,U,T])}var O=S?a().memo(E):E;if(O.WrappedComponent=n,O.displayName=u,R){var M=a().forwardRef((function(e,n){return a().createElement(O,(0,r.Z)({},e,{reactReduxForwardedRef:n}))}));return M.displayName=u,M.WrappedComponent=n,i()(M,n)}return i()(O,n)}}},57034:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r=t(22122),o=t(19756),u=t(26685),i=t(35067),s=t(55112),a=t(11743),c=t(5532),d=t(38548);function p(e,n,t){for(var r=n.length-1;r>=0;r--){var o=n[r](e);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+r.wrappedComponentName+".")}}function f(e,n){return e===n}function l(e){var n=void 0===e?{}:e,t=n.connectHOC,l=void 0===t?u.Z:t,v=n.mapStateToPropsFactories,h=void 0===v?a.ZP:v,b=n.mapDispatchToPropsFactories,m=void 0===b?s.ZP:b,P=n.mergePropsFactories,y=void 0===P?c.ZP:P,S=n.selectorFactory,g=void 0===S?d.ZP:S;return function(e,n,t,u){void 0===u&&(u={});var s=u,a=s.pure,c=void 0===a||a,d=s.areStatesEqual,v=void 0===d?f:d,b=s.areOwnPropsEqual,P=void 0===b?i.Z:b,S=s.areStatePropsEqual,w=void 0===S?i.Z:S,C=s.areMergedPropsEqual,E=void 0===C?i.Z:C,Z=(0,o.Z)(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=p(e,h,"mapStateToProps"),x=p(n,m,"mapDispatchToProps"),M=p(t,y,"mergeProps");return l(g,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:O,initMapDispatchToProps:x,initMergeProps:M,pure:c,areStatesEqual:v,areOwnPropsEqual:P,areStatePropsEqual:w,areMergedPropsEqual:E},Z))}}const v=l()},55112:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>u});var r=t(32065),o=t(26343);const u=[function(e){return"function"==typeof e?(0,o.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,o.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,o.dX)((function(n){return(0,r.bindActionCreators)(e,n)})):void 0}]},11743:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>o});var r=t(26343);const o=[function(e){return"function"==typeof e?(0,r.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,r.dX)((function(){return{}}))}]},5532:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>u});var r=t(22122);function o(e,n,t){return(0,r.Z)({},t,e,n)}const u=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var r,o=t.pure,u=t.areMergedPropsEqual,i=!1;return function(n,t,s){var a=e(n,t,s);return i?o&&u(a,r)||(r=a):(i=!0,r=a),r}}}(e):void 0},function(e){return e?void 0:function(){return o}}]},38548:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>i});var r=t(19756);function o(e,n,t,r){return function(o,u){return t(e(o,u),n(r,u),u)}}function u(e,n,t,r,o){var u,i,s,a,c,d=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,h,b=!p(l,i),m=!d(o,u);return u=o,i=l,b&&m?(s=e(u,i),n.dependsOnOwnProps&&(a=n(r,i)),c=t(s,a,i)):b?(e.dependsOnOwnProps&&(s=e(u,i)),n.dependsOnOwnProps&&(a=n(r,i)),c=t(s,a,i)):m?(v=e(u,i),h=!f(v,s),s=v,h&&(c=t(s,a,i)),c):c}(o,v):(s=e(u=o,i=v),a=n(r,i),c=t(s,a,i),l=!0,c)}}function i(e,n){var t=n.initMapStateToProps,i=n.initMapDispatchToProps,s=n.initMergeProps,a=(0,r.Z)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=t(e,a),d=i(e,a),p=s(e,a);return(a.pure?u:o)(c,d,p,e,a)}},26343:(e,n,t)=>{"use strict";function r(e){return function(n,t){var r=e(n,t);function o(){return r}return o.dependsOnOwnProps=!1,o}}function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function u(e,n){return function(n,t){t.displayName;var r=function(e,n){return r.dependsOnOwnProps?r.mapToProps(e,n):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,t){r.mapToProps=e,r.dependsOnOwnProps=o(e);var u=r(n,t);return"function"==typeof u&&(r.mapToProps=u,r.dependsOnOwnProps=o(u),u=r(n,t)),u},r}}t.d(n,{dX:()=>r,xv:()=>u})},72307:(e,n,t)=>{"use strict";t.d(n,{A:()=>u,I:()=>i});var r=t(6526),o=t(420);function u(e){void 0===e&&(e=r.E);var n=e===r.E?o.o:(0,o.f)(e);return function(){return n().dispatch}}var i=u()},2975:(e,n,t)=>{"use strict";t.d(n,{x:()=>u});var r=t(30624),o=t(6526);function u(){return(0,r.useContext)(o.E)}},59854:(e,n,t)=>{"use strict";t.d(n,{g:()=>c,v:()=>d});var r=t(30624),o=t(2975),u=t(86496),i=t(1881),s=t(6526),a=function(e,n){return e===n};function c(e){void 0===e&&(e=s.E);var n=e===s.E?o.x:function(){return(0,r.useContext)(e)};return function(e,t){void 0===t&&(t=a);var o=n(),s=function(e,n,t,o){var s,a=(0,r.useReducer)((function(e){return e+1}),0)[1],c=(0,r.useMemo)((function(){return new u.Z(t,o)}),[t,o]),d=(0,r.useRef)(),p=(0,r.useRef)(),f=(0,r.useRef)(),l=(0,r.useRef)(),v=t.getState();try{s=e!==p.current||v!==f.current||d.current?e(v):l.current}catch(e){throw d.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+d.current.stack+"\n\n"),e}return(0,i.L)((function(){p.current=e,f.current=v,l.current=s,d.current=void 0})),(0,i.L)((function(){function e(){try{var e=p.current(t.getState());if(n(e,l.current))return;l.current=e}catch(e){d.current=e}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[t,c]),s}(e,t,o.store,o.subscription);return(0,r.useDebugValue)(s),s}}var d=c()},420:(e,n,t)=>{"use strict";t.d(n,{f:()=>i,o:()=>s});var r=t(30624),o=t(6526),u=t(2975);function i(e){void 0===e&&(e=o.E);var n=e===o.E?u.x:function(){return(0,r.useContext)(e)};return function(){return n().store}}var s=i()},50533:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Provider:()=>r.Z,connectAdvanced:()=>o.Z,ReactReduxContext:()=>u.E,connect:()=>i.Z,batch:()=>p.m,useDispatch:()=>s.I,createDispatchHook:()=>s.A,useSelector:()=>a.v,createSelectorHook:()=>a.g,useStore:()=>c.o,createStoreHook:()=>c.f,shallowEqual:()=>f.Z});var r=t(60682),o=t(26685),u=t(6526),i=t(57034),s=t(72307),a=t(59854),c=t(420),d=t(9256),p=t(71679),f=t(35067);(0,d.F)(p.m)},86496:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(9256),o={notify:function(){}},u=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=o,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){var e,n,t;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=(0,r.k)(),n=null,t=null,{clear:function(){n=null,t=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],t=n;t;)e.push(t),t=t.next;return e},subscribe:function(e){var r=!0,o=t={callback:e,next:null,prev:t};return o.prev?o.prev.next=o:n=o,function(){r&&null!==n&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}))},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=o)},e}()},9256:(e,n,t)=>{"use strict";t.d(n,{F:()=>o,k:()=>u});var r=function(e){e()},o=function(e){return r=e},u=function(){return r}},71679:(e,n,t)=>{"use strict";t.d(n,{m:()=>r.unstable_batchedUpdates});var r=t(25936)},35067:(e,n,t)=>{"use strict";function r(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function o(e,n){if(r(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(var u=0;u<t.length;u++)if(!Object.prototype.hasOwnProperty.call(n,t[u])||!r(e[t[u]],n[t[u]]))return!1;return!0}t.d(n,{Z:()=>o})},1881:(e,n,t)=>{"use strict";t.d(n,{L:()=>o});var r=t(30624),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect}}]);
//# sourceMappingURL=533.1a0d2abc51b9ae9979f5.js.map