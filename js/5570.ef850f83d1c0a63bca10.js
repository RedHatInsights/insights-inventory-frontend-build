(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5570],{68340:(t,e,n)=>{"use strict";n.d(e,{q:()=>r,x:()=>u});var r,o=n(70655),i=n(92950),a=n(38296),c=n(62873),s=n(62472);!function(t){t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6",t.p="p",t.a="a",t.small="small",t.blockquote="blockquote",t.pre="pre"}(r||(r={}));const u=t=>{var{children:e=null,className:n="",component:l=r.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:f=!0}=t,h=(0,o.__rest)(t,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=l,g=(0,s.S$)(u.displayName,p,f);return i.createElement(v,Object.assign({},g,h,{"data-pf-content":!0,className:(0,a.i)(d&&l===r.a&&c.Z.modifiers.visited,n)}),e)};u.displayName="Text"},68774:(t,e,n)=>{"use strict";n.d(e,{D:()=>c});var r=n(70655),o=n(92950),i=n(62873),a=n(38296);const c=t=>{var{children:e=null,className:n="",isVisited:c=!1}=t,s=(0,r.__rest)(t,["children","className","isVisited"]);return o.createElement("div",Object.assign({},s,{className:(0,a.i)(i.Z.content,c&&i.Z.modifiers.visited,n)}),e)};c.displayName="TextContent"},62873:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},62410:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(85893),o=n(92950),i=n.n(o),a=n(48542),c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},s=36e5,u=24*s,l=30*u,d=365*u,p=function(t,e){return"".concat(t," ").concat(t>1?"".concat(e,"s"):e," ago")},f=[{rightBound:1/0,description:function(t){return p(Math.round(t/d),"year")}},{rightBound:d,description:function(t){return p(Math.round(t/l),"month")}},{rightBound:l,description:function(t){return p(Math.round(t/u),"day")}},{rightBound:u,description:function(t){return p(Math.round(t/s),"hour")}},{rightBound:s,description:function(t){return p(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],h=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(t){return{exact:function(t){return h(t)+" UTC"},onlyDate:function(t){return h(t).slice(0,-6)},relative:function(t){return f.reduce((function(e,n){return n.rightBound>Date.now()-t.getTime()?n.description(Date.now()-t.getTime()):e}),h(t))},invalid:function(){return"Invalid date"}}[t]},g=function(t,e,n){return{exact:function(e){return v(t)(e)},onlyDate:function(e){return v(t)(e)},relative:function(o){return function(t,e,n,o){return void 0===o&&(o=""),(0,r.jsx)(a.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[o,t]})},{children:e}))}(v("exact")(o),(0,r.jsx)("span",{children:v(t)(o)}),e,n)},invalid:function(){return"Invalid date"}}[t]};const m=function(t){var e=t.date,n=t.type,o=void 0===n?"relative":n,a=t.extraTitle,c=t.tooltipProps,s=e instanceof Date?e:new Date(e),u=null==e||"Invalid Date"===s.toString()?"invalid":o;return(0,r.jsx)(i().Fragment,{children:g(u,c,a)(s)})}},5242:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var r=n(4942),o=n(45987),i=n(93433),a=n(92950),c=n.n(a),s=n(45697),u=n.n(s),l=n(50533),d=n(75824),p=n(76422),f=n(45026),h=n(62410),v=n(58061),g=["onClick"];function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=function(t){var e=t.egg,n=t.client;return c().createElement(d.u,{content:c().createElement(c().Fragment,null,c().createElement("p",null,"RPM version: ",n||"Not available"),c().createElement("p",null,"Dynamic update version: ",e||"Not available"))},c().createElement("span",null,n||e||"Not available"))};P.propTypes={egg:u().string,client:u().string};var S=function(t){var e=t.detailLoaded,n=t.collectionInformation,r=t.entity,a=t.handleClick,s=t.hasClient,u=t.hasLastCheckIn,l=t.hasRegistered,d=t.hasInsightsId,f=t.hasReporter,v=t.extra;return c().createElement(p.Z,{title:"Collection information",isLoading:!e,items:[].concat((0,i.Z)(s?[{title:"Insights client",value:c().createElement(P,{egg:n.egg,client:n.client})}]:[]),(0,i.Z)(u?[{title:"Last check-in",value:r&&(h.Z?c().createElement(h.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,i.Z)(l?[{title:"Registered",value:r&&(h.Z?c().createElement(h.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,i.Z)(d?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,i.Z)(f?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,i.Z)(v.map((function(t){var e=t.onClick;return y(y({},(0,o.Z)(t,g)),e&&{onClick:function(t){return e(t,a)}})}))))})};S.propTypes={detailLoaded:u().bool,entity:u().shape({updated:u().string,created:u().string,insights_id:u().string,reporter:u().string}),handleClick:u().func,collectionInformation:u().shape({client:u().string,egg:u().string}),hasClient:u().bool,hasLastCheckIn:u().bool,hasRegistered:u().bool,hasInsightsId:u().bool,hasReporter:u().bool,extra:u().arrayOf(v.x7)},S.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,extra:[]};const b=(0,l.connect)((function(t){var e=t.entityDetails.entity,n=t.systemProfileStore.systemProfile;return{entity:e,detailLoaded:n&&n.loaded,collectionInformation:(0,f.collectionInformationSelector)(n)}}))(S)},45026:(t,e,n)=>{"use strict";n.r(e),n.d(e,{biosSelector:()=>r.Cx,collectionInformationSelector:()=>r.fZ,configurationSelector:()=>r.qr,getCollectorStatus:()=>r.P$,getDefaultCollectors:()=>r.f_,infrastructureSelector:()=>r.qY,operatingSystem:()=>r.d0,propertiesSelector:()=>r.Ys,systemStatus:()=>r.qs});var r=n(67782)},94654:(t,e,n)=>{var r=n(21078),o=n(35161);t.exports=function(t,e){return r(o(t,e),1)}},93386:(t,e,n)=>{var r=n(21078),o=n(5976),i=n(45652),a=n(29246),c=o((function(t){return i(r(t,1,a,!0))}));t.exports=c},36494:(t,e,n)=>{"use strict";n.d(e,{Z:()=>y});var r=n(87462),o=n(63366),i=n(26685),a=n(35067),c=n(63480),s=n(26343);const u=[function(t){return"function"==typeof t?(0,s.xv)(t,"mapDispatchToProps"):void 0},function(t){return t?void 0:(0,s.dX)((function(t){return{dispatch:t}}))},function(t){return t&&"object"==typeof t?(0,s.dX)((function(e){return(0,c.Z)(t,e)})):void 0}],l=[function(t){return"function"==typeof t?(0,s.xv)(t,"mapStateToProps"):void 0},function(t){return t?void 0:(0,s.dX)((function(){return{}}))}];function d(t,e,n){return(0,r.Z)({},n,t,e)}const p=[function(t){return"function"==typeof t?function(t){return function(e,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(e,n,c){var s=t(e,n,c);return a?o&&i(s,r)||(r=s):(a=!0,r=s),r}}}(t):void 0},function(t){return t?void 0:function(){return d}}];var f=n(38548),h=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function g(t,e){return t===e}function m(t){var e=void 0===t?{}:t,n=e.connectHOC,c=void 0===n?i.Z:n,s=e.mapStateToPropsFactories,d=void 0===s?l:s,m=e.mapDispatchToPropsFactories,y=void 0===m?u:m,P=e.mergePropsFactories,S=void 0===P?p:P,b=e.selectorFactory,E=void 0===b?f.ZP:b;return function(t,e,n,i){void 0===i&&(i={});var s=i,u=s.pure,l=void 0===u||u,p=s.areStatesEqual,f=void 0===p?g:p,m=s.areOwnPropsEqual,P=void 0===m?a.Z:m,b=s.areStatePropsEqual,Z=void 0===b?a.Z:b,O=s.areMergedPropsEqual,C=void 0===O?a.Z:O,D=(0,o.Z)(s,h),w=v(t,d,"mapStateToProps"),I=v(e,y,"mapDispatchToProps"),k=v(n,S,"mergeProps");return c(E,(0,r.Z)({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:w,initMapDispatchToProps:I,initMergeProps:k,pure:l,areStatesEqual:f,areOwnPropsEqual:P,areStatePropsEqual:Z,areMergedPropsEqual:C},D))}}const y=m()},50533:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Provider:()=>r.zt,ReactReduxContext:()=>r.ET,batch:()=>o.m,connect:()=>r.$j,connectAdvanced:()=>r.e$,createDispatchHook:()=>r.AS,createSelectorHook:()=>r.gR,createStoreHook:()=>r.fw,shallowEqual:()=>r.wU,useDispatch:()=>r.I0,useSelector:()=>r.v9,useStore:()=>r.oR});var r=n(67133),o=n(71679);(0,n(9256).F)(o.m)}}]);