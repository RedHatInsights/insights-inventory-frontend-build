(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5959],{75728:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var a=t(70655),i=t(92950),r=t(5964),o=t(1024),l=t(73699),s=t(99355),c=t(38296),p=t(62472);const u=e=>{var{id:n="",children:t=null,className:d="",isOpen:m=!1,parentRef:v=null,getMenuRef:f=null,isDisabled:g=!1,isPlain:y=!1,isText:h=!1,isPrimary:b=!1,toggleVariant:E="default",isActive:O=!1,onToggle:N=(e=>{}),icon:Z=null,toggleIndicator:T=r.ZP,splitButtonItems:P,splitButtonVariant:w="checkbox","aria-haspopup":A,ouiaId:I,ouiaSafe:S,ref:x}=e,M=(0,a.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const j=(0,p.S$)(u.displayName,I,S),R=i.createElement(s.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:a,toggleIconClass:r})=>i.createElement(o.Z,Object.assign({},M,{id:n,className:d,isOpen:m,parentRef:v,getMenuRef:f,isActive:O,isDisabled:g,isPlain:y,isText:h,isPrimary:b,toggleVariant:E,onToggle:N,"aria-haspopup":A},j,P&&{isSplitButton:!0,"aria-label":M["aria-label"]||"Select"}),Z&&i.createElement("span",{className:(0,c.i)(r)},Z),t&&i.createElement("span",{className:T&&(0,c.i)(e)},t),T&&i.createElement("span",{className:(0,c.i)(!P&&a)},i.createElement(T,null)))));return P?i.createElement("div",{className:(0,c.i)(l.Z.dropdownToggle,l.Z.modifiers.splitButton,"action"===w&&l.Z.modifiers.action,("primary"===E||b)&&"action"===w&&l.Z.modifiers.primary,"secondary"===E&&"action"===w&&l.Z.modifiers.secondary,g&&l.Z.modifiers.disabled)},P,R):R};u.displayName="DropdownToggle"},89376:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(85893),i=t(94184),r=t.n(i),o=t(92950);const l=t.n(o)().createContext("light");var s=function(){return s=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)};const c=function(e){var n=e.className,t=e.children,i=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t}(e,["className","children"]),o=r()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(l.Consumer,{children:function(e){var n,l;void 0===e&&(e="light");var c=r()(((n={})["pf-m-".concat(e,"-200")]="dark"===e,n),((l={})["pf-m-light"]="light"===e,l));return(0,a.jsx)("section",s({},i,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader"},{children:t}))}})}},46230:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var a=t(87462),i=t(92950),r=t.n(i),o=t(39142),l=(t(61013),t(67389),t(45987)),s=t(45697),c=t.n(s),p=t(62012),u=t(60261),d=t(35664),m=["componentMapper","activeApp"],v=function(e){var n=e.componentMapper,t=e.activeApp,a=(0,u.useStore)(),o=(0,u.useSelector)((function(e){var n=e.entityDetails;return null==n?void 0:n.loaded})),l=(0,u.useSelector)((function(e){var n=e.entityDetails;return null==n?void 0:n.entity}));return!0!==o||l?r().createElement(i.Fragment,null,o?t&&r().createElement("div",{className:"ins-active-app-".concat(null==t?void 0:t.name)},n?r().createElement(n,{store:a,inventoryId:null==l?void 0:l.id,appName:null==t?void 0:t.name}):"missing component"):r().createElement(d.Z,{size:d.i.md})):null};v.propTypes={componentMapper:c().oneOfType([c().element,c().func]),activeApp:c().shape({title:c().node,name:c().string,pageId:c().string})};var f=function(e){var n,t=e.componentMapper,i=e.activeApp,o=(0,l.Z)(e,m),s=(0,p.useLocation)().search,c=new URLSearchParams(s);t&&i||console.warn("Please pass componentMapper and activeApp. We will be deprecating the old store controls");var d=(0,u.useSelector)((function(e){var n,t,a,i,r=e.entityDetails,o=c.get("appName")||(null==r||null===(n=r.activeApp)||void 0===n?void 0:n.appName);return(null==r||null===(t=r.activeApps)||void 0===t||null===(a=t.find)||void 0===a?void 0:a.call(t,(function(e){return(null==e?void 0:e.name)===o})))||(null==r||null===(i=r.activeApps)||void 0===i?void 0:i[0])})),f=t||(null===(n=i||d)||void 0===n?void 0:n.component);return r().createElement(v,(0,a.Z)({componentMapper:f,activeApp:i||d},o))};f.propTypes=v.propTypes;var g=function(e){return e.componentMapper&&e.activeApp?r().createElement(v,e):r().createElement(f,e)};g.propTypes=v.propTypes;const y=g;var h=function(e){return r().createElement(o.Z,(0,a.Z)({},e,{component:y}))};const b=r().forwardRef((function(e,n){return r().createElement(h,(0,a.Z)({},e,{innerRef:n}))}))},80598:()=>{},10108:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./AppInfo.5f761a6c0046230bebcc75defd312455.js.map