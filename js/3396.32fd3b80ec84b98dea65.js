(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3396],{68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>u});var r,o=n(70655),a=n(92950),i=n(38296),s=n(62873),c=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const u=e=>{var{children:t=null,className:n="",component:l=r.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:f=!0}=e,m=(0,o.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=l,h=(0,c.S$)(u.displayName,p,f);return a.createElement(v,Object.assign({},h,m,{"data-pf-content":!0,className:(0,i.i)(d&&l===r.a&&s.Z.modifiers.visited,n)}),t)};u.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var r=n(70655),o=n(92950),a=n(62873),i=n(38296);const s=e=>{var{children:t=null,className:n="",isVisited:s=!1}=e,c=(0,r.__rest)(e,["children","className","isVisited"]);return o.createElement("div",Object.assign({},c,{className:(0,i.i)(a.Z.content,s&&a.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(85893),o=n(92950),a=n.n(o),i=n(48542),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=36e5,u=24*c,l=30*u,d=365*u,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/l),"month")}},{rightBound:l,description:function(e){return p(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return p(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(o){return function(e,t,n,o){return void 0===o&&(o=""),(0,r.jsx)(i.Tooltip,s({},n,{content:(0,r.jsxs)("div",{children:[o,e]})},{children:t}))}(v("exact")(o),(0,r.jsx)("span",{children:v(e)(o)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const y=function(e){var t=e.date,n=e.type,o=void 0===n?"relative":n,i=e.extraTitle,s=e.tooltipProps,c=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===c.toString()?"invalid":o;return(0,r.jsx)(a().Fragment,{children:h(u,s,i)(c)})}},81139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DataCollectorsCard:()=>y,default:()=>g});var r=n(93433),o=n(29439),a=n(92950),i=n.n(a),s=n(45697),c=n.n(s),u=n(50533),l=n(76422),d=n(62410),p=n(62965),f=n(28191),m=n(92298),v=n(67782),h=function(e){var t=e.detailLoaded,n=e.collectors,s=e.entity,c=e.dataMapper,u=(0,a.useState)([]),h=(0,o.Z)(u,2),y=h[0],g=h[1],E=(0,a.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return g((function(n){var o=n.filter((function(t){return t!==e.name}));return t?[].concat((0,r.Z)(o),[e.name]):o}))}),[]),b=function(e){return y.includes(e.name)},T=null!=n?n:(0,v.f_)(s);return i().createElement(l.Z,{title:"Data collectors",isLoading:!t},i().createElement(p.TableComposable,{"aria-label":"Data collectors",variant:p.TableVariant.compact,borders:!1},i().createElement(p.Thead,null,i().createElement(p.Tr,{className:"ins-c__no-border"},i().createElement(p.Th,null),i().createElement(p.Th,null,"Name"),i().createElement(p.Th,null,"Status"),i().createElement(p.Th,null,"Last upload"))),c?c(T,b,E):T.map((function(e,t){var n;return i().createElement(p.Tbody,{key:e.name,isExpanded:b(e)},i().createElement(p.Tr,null,e.details.name?i().createElement(p.Td,{expand:e.details?{rowIndex:t,isExpanded:b(e),onToggle:function(){return E(e,!b(e))}}:void 0,style:{paddingLeft:0}}):i().createElement(p.Td,null),i().createElement(p.Td,{dataLabel:"Name"},e.name),i().createElement(p.Td,{dataLabel:"Status"},e.status),i().createElement(p.Td,{dataLabel:"Last upload"},e.updated?i().createElement(d.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&i().createElement(p.Tr,{isExpanded:b(e)},i().createElement(p.Td,null),i().createElement(p.Td,{colSpan:3},i().createElement(p.ExpandableRowContent,null,i().createElement(f.k,null,i().createElement(m.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),i().createElement(m.B,{grow:{default:"grow"}},null!==(n=e.details.id)&&void 0!==n?n:"N/A"))))))}))))};h.propTypes={detailLoaded:c().bool,collectors:c().array,dataMapper:c().func,entity:c().shape({per_reporter_staleness:c().object})},h.defaultProps={detailLoaded:!1};var y=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:n,detailLoaded:null==n?void 0:n.loaded,defaultCollectors:(0,v.f_)(t)}}))(h);y.propTypes=h.propTypes,y.defaultProps=h.defaultProps;const g=y},94654:(e,t,n)=>{var r=n(21078),o=n(35161);e.exports=function(e,t){return r(o(e,t),1)}},36494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(87462),o=n(63366),a=n(26685),i=n(35067),s=n(63480),c=n(26343);const u=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,c.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],l=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(){return{}}))}];function d(e,t,n){return(0,r.Z)({},n,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,i=!1;return function(t,n,s){var c=e(t,n,s);return i?o&&a(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return d}}];var f=n(38548),m=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function h(e,t){return e===t}function y(e){var t=void 0===e?{}:e,n=t.connectHOC,s=void 0===n?a.Z:n,c=t.mapStateToPropsFactories,d=void 0===c?l:c,y=t.mapDispatchToPropsFactories,g=void 0===y?u:y,E=t.mergePropsFactories,b=void 0===E?p:E,T=t.selectorFactory,w=void 0===T?f.ZP:T;return function(e,t,n,a){void 0===a&&(a={});var c=a,u=c.pure,l=void 0===u||u,p=c.areStatesEqual,f=void 0===p?h:p,y=c.areOwnPropsEqual,E=void 0===y?i.Z:y,T=c.areStatePropsEqual,S=void 0===T?i.Z:T,P=c.areMergedPropsEqual,x=void 0===P?i.Z:P,N=(0,o.Z)(c,m),I=v(e,d,"mapStateToProps"),_=v(t,g,"mapDispatchToProps"),Z=v(n,b,"mergeProps");return s(w,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:I,initMapDispatchToProps:_,initMergeProps:Z,pure:l,areStatesEqual:f,areOwnPropsEqual:E,areStatePropsEqual:S,areMergedPropsEqual:x},N))}}const g=y()},50533:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Provider:()=>r.zt,ReactReduxContext:()=>r.ET,batch:()=>o.m,connect:()=>r.$j,connectAdvanced:()=>r.e$,createDispatchHook:()=>r.AS,createSelectorHook:()=>r.gR,createStoreHook:()=>r.fw,shallowEqual:()=>r.wU,useDispatch:()=>r.I0,useSelector:()=>r.v9,useStore:()=>r.oR});var r=n(67133),o=n(71679);(0,n(9256).F)(o.m)},38299:()=>{},24373:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(43898),o=n(23663),a=n(49851);const i=/\s+at.*[(\s](.*)\)?/,s=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,c=void 0===o.homedir?"":o.homedir().replace(/\\/g,"/");class u extends Error{#e;name="AggregateError";constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let t=(e=e.map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack&&e.stack.length>0?function(e,{pretty:t=!1,basePath:n}={}){const r=n&&new RegExp(`(at | \\()${(0,a.Z)(n.replace(/\\/g,"/"))}`,"g");if("string"==typeof e)return e.replace(/\\/g,"/").split("\n").filter((e=>{const t=e.match(i);if(null===t||!t[1])return!0;const n=t[1];return!(n.includes(".app/Contents/Resources/electron.asar")||n.includes(".app/Contents/Resources/default_app.asar")||n.includes("node_modules/electron/dist/resources/electron.asar")||n.includes("node_modules/electron/dist/resources/default_app.asar")||s.test(n))})).filter((e=>""!==e.trim())).map((e=>(r&&(e=e.replace(r,"$1")),t&&(e=e.replace(i,((e,t)=>e.replace(t,t.replace(c,"~"))))),e))).join("\n")}(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n");t="\n"+(0,r.Z)(t,4),super(t),this.#e=e}get errors(){return this.#e.slice()}}class l extends Error{constructor(e){super(),this.name="AbortError",this.message=e}}const d=e=>void 0===globalThis.DOMException?new l(e):new DOMException(e),p=e=>{const t=void 0===e.reason?d("This operation was aborted."):e.reason;return t instanceof Error?t:d(t)},f=Symbol("skip");async function m(e,t){return async function(e,t,{concurrency:n=Number.POSITIVE_INFINITY,stopOnError:r=!0,signal:o}={}){return new Promise(((a,i)=>{if(void 0===e[Symbol.iterator]&&void 0===e[Symbol.asyncIterator])throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if("function"!=typeof t)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(n)&&n!==Number.POSITIVE_INFINITY||!(n>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);const s=[],c=[],l=new Map;let d=!1,m=!1,v=!1,h=0,y=0;const g=void 0===e[Symbol.iterator]?e[Symbol.asyncIterator]():e[Symbol.iterator](),E=e=>{d=!0,m=!0,i(e)};o&&(o.aborted&&E(p(o)),o.addEventListener("abort",(()=>{E(p(o))})));const b=async()=>{if(m)return;const e=await g.next(),n=y;if(y++,e.done){if(v=!0,0===h&&!m){if(!r&&c.length>0)return void E(new u(c));if(m=!0,0===l.size)return void a(s);const e=[];for(const[t,n]of s.entries())l.get(t)!==f&&e.push(n);a(e)}}else h++,(async()=>{try{const r=await e.value;if(m)return;const o=await t(r,n);o===f&&l.set(n,o),s[n]=o,h--,await b()}catch(e){if(r)E(e);else{c.push(e),h--;try{await b()}catch(e){E(e)}}}})()};(async()=>{for(let e=0;e<n;e++){try{await b()}catch(e){E(e);break}if(v||d)break}})()}))}(e,(e=>e()),t)}}}]);
//# sourceMappingURL=../sourcemaps/3396.d8fe29f6e9ff835f22c4f600a4619bb2.js.map