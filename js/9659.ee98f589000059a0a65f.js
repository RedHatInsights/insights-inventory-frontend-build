(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9659],{75728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(70655),a=n(92950),i=n(5964),o=n(1024),s=n(73699),l=n(99355),c=n(38296),p=n(62472);const u=e=>{var{id:t="",children:n=null,className:d="",isOpen:f=!1,parentRef:m=null,getMenuRef:v=null,isDisabled:g=!1,isPlain:y=!1,isText:b=!1,isPrimary:h=!1,toggleVariant:Z="default",isActive:O=!1,onToggle:P=(e=>{}),icon:E=null,toggleIndicator:_=i.ZP,splitButtonItems:w,splitButtonVariant:I="checkbox","aria-haspopup":M,ouiaId:S,ouiaSafe:B,ref:D}=e,N=(0,r.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const T=(0,p.S$)(u.displayName,S,B),A=a.createElement(l.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:r,toggleIconClass:i})=>a.createElement(o.Z,Object.assign({},N,{id:t,className:d,isOpen:f,parentRef:m,getMenuRef:v,isActive:O,isDisabled:g,isPlain:y,isText:b,isPrimary:h,toggleVariant:Z,onToggle:P,"aria-haspopup":M},T,w&&{isSplitButton:!0,"aria-label":N["aria-label"]||"Select"}),E&&a.createElement("span",{className:(0,c.i)(i)},E),n&&a.createElement("span",{className:_&&(0,c.i)(e)},n),_&&a.createElement("span",{className:(0,c.i)(!w&&r)},a.createElement(_,null)))));return w?a.createElement("div",{className:(0,c.i)(s.Z.dropdownToggle,s.Z.modifiers.splitButton,"action"===I&&s.Z.modifiers.action,("primary"===Z||h)&&"action"===I&&s.Z.modifiers.primary,"secondary"===Z&&"action"===I&&s.Z.modifiers.secondary,g&&s.Z.modifiers.disabled)},w,A):A};u.displayName="DropdownToggle"},71973:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>o,fP:()=>i,gk:()=>a});var r=n(40400);const a={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},5964:(e,t,n)=>{"use strict";n.d(t,{VA:()=>i,ZP:()=>o,kc:()=>a});var r=n(40400);const a={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i});var r=n(17558),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){return{type:r.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},25462:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(87462),a=n(45987),i=n(92950),o=n.n(i),s=n(45697),l=n.n(s),c=n(75662),p=n(50533),u=n(35664),d=["componentMapper","activeApp"],f=function(e){var t=e.componentMapper,n=e.activeApp,r=(0,p.useStore)(),a=(0,p.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded})),s=(0,p.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return!0!==a||s?o().createElement(i.Fragment,null,a?n&&o().createElement("div",{className:"ins-active-app-".concat(null==n?void 0:n.name)},t?o().createElement(t,{store:r,inventoryId:null==s?void 0:s.id,appName:null==n?void 0:n.name}):"missing component"):o().createElement(u.Z,{size:u.i.md})):null};f.propTypes={componentMapper:l().oneOfType([l().element,l().func]),activeApp:l().shape({title:l().node,name:l().string,pageId:l().string})};var m=function(e){var t,n=e.componentMapper,i=e.activeApp,s=(0,a.Z)(e,d),l=(0,c.useLocation)().search,u=new URLSearchParams(l);n&&i||console.warn("Please pass componentMapper and activeApp. We will be deprecating the old store controls");var m=(0,p.useSelector)((function(e){var t,n,r,a,i=e.entityDetails,o=u.get("appName")||(null==i||null===(t=i.activeApp)||void 0===t?void 0:t.appName);return(null==i||null===(n=i.activeApps)||void 0===n||null===(r=n.find)||void 0===r?void 0:r.call(n,(function(e){return(null==e?void 0:e.name)===o})))||(null==i||null===(a=i.activeApps)||void 0===a?void 0:a[0])})),v=n||(null===(t=i||m)||void 0===t?void 0:t.component);return o().createElement(f,(0,r.Z)({componentMapper:v,activeApp:i||m},s))};m.propTypes=f.propTypes;var v=function(e){return e.componentMapper&&e.activeApp?o().createElement(f,e):o().createElement(m,e)};v.propTypes=f.propTypes;const g=v},51149:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),i=n(18576),o=n(25462);const s=function(e){return a().createElement(r.Fragment,null,a().createElement(i.Z,e),a().createElement(o.Z,e))}},30898:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(87462),a=n(92950),i=n.n(a),o=n(39142),s=n(51149),l=function(e){return i().createElement(o.Z,(0,r.Z)({},e,{component:s.Z}))};const c=i().forwardRef((function(e,t){return i().createElement(l,(0,r.Z)({},e,{innerRef:t}))}))},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>v,calculateRepos:()=>m,default:()=>y,defaultState:()=>p,formatBytes:()=>d,onSystemProfile:()=>g,sizes:()=>u,systemProfilePending:()=>f});var r,a=n(93433),i=n(4942),o=n(18546),s=n(59086);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={loaded:!1},u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(u[t])};function f(e){return c(c({},e),{},{systemProfile:{loaded:!1}})}function m(e){return e&&e.reduce((function(e,t){return c(c({},e),t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function v(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function g(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},i=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,a.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:c(c({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&d(r.system_memory_bytes),repositories:m(r.yum_repos),network:v(r.network_interfaces)})})}const y=(0,o.Gg)((r={},(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,g),(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,f),r),{systemProfile:p})},10108:()=>{},30187:()=>{},38299:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9659.043864d855238780397a8bd8a9703e62.js.map