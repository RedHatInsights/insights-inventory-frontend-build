(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8985],{9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>a,u:()=>l});var a,r=n(70655),i=n(92950),s=n(38296),o=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(a||(a={}));const l=e=>{var{children:t,className:n="",variant:l=a.full,isFullHeight:c}=e,p=(0,r.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,s.i)(o.Z.emptyState,"xs"===l&&o.Z.modifiers.xs,"small"===l&&o.Z.modifiers.sm,"large"===l&&o.Z.modifiers.lg,"xl"===l&&o.Z.modifiers.xl,c&&o.Z.modifiers.fullHeight,n)},p),i.createElement("div",{className:(0,s.i)(o.Z.emptyStateContent)},t))};l.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>o});var a=n(70655),r=n(92950),i=n(38296),s=n(51203);const o=e=>{var{children:t,className:n=""}=e,o=(0,a.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:(0,i.i)(s.Z.emptyStateBody,n)},o),t)};o.displayName="EmptyStateBody"},38424:(e,t,n)=>{"use strict";n.d(t,{k:()=>o});var a=n(70655),r=n(92950),i=n(38296),s=n(51203);const o=e=>{var{className:t="",icon:n,component:o,variant:l="icon"}=e,c=(0,a.__rest)(e,["className","icon","component","variant"]);const p=(0,i.i)(s.Z.emptyStateIcon,t);return"icon"===l?r.createElement(n,Object.assign({className:p},c,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(o,null))};o.displayName="EmptyStateIcon"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(81320);const a={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var a=n(87462),r=n(45987),i=n(92950),s=n.n(i),o=n(62012),l=n(60261),c=n(45697),p=n.n(c),m=n(94474),u=n(47173),d=n(9947),v=n(75106),f=n(38424),y=n(38779),g=n(96733),h=n(94471),b=n(76440),S=n.n(b),E=function(e){var t=e.inventoryId,n=e.onBackToListClick,a=S()();return s().createElement(d.u,{variant:d.I.full},s().createElement(f.k,{icon:g.ZP}),s().createElement(y.D,{headingLevel:"h5",size:"lg"},"System not found"),s().createElement(v.B,null,"System with ID ",t," does not exist"),s().createElement(u.zx,{variant:"primary",onClick:function(){return(0,h.h)(t,n,a)}},"Back to previous page"))};E.propTypes={inventoryId:p().string,onBackToListClick:p().func};const I=E;var T=n(73880),k=n(83215),w=n(29439),O=n(4942),Z=n(37619),_=n(28883),j=n(79770),x=n(35262),L=n(96396),N=n(85893),C=n(15021),P=n(64291),B=function(){return B=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},B.apply(this,arguments)};const D=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,a=e.bodyText,r=void 0===a?"To get started, activate the Insights client for this system.":a,i=e.buttonText,s=void 0===i?"Learn how to activate the Insights client":i;return(0,N.jsxs)(C.EmptyState,{children:[(0,N.jsx)(C.EmptyStateIcon,{icon:P.DisconnectedIcon}),(0,N.jsx)(C.Title,B({headingLevel:"h5",size:"lg"},{children:n})),(0,N.jsx)(C.EmptyStateBody,{children:r}),(0,N.jsx)(C.Button,B({variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights/",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:s}))]})};var F=n(13784),M=["onTabSelect","appList","activeApp","inventoryId","entity"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t,n=e.onTabSelect,o=e.appList,c=e.activeApp,p=e.inventoryId,m=e.entity,u=(0,r.Z)(e,M),d=(0,l.useStore)(),v=(0,l.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||o||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return z(z({},e),{},{tabRef:s().createRef()})}))})),f=(0,l.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),y=(0,i.useState)(v),g=(0,w.Z)(y,2),b=g[0],S=g[1],E=(0,i.useState)(c||(null==v||null===(t=v[0])||void 0===t?void 0:t.name)),I=(0,w.Z)(E,2),T=I[0],k=I[1],O=(0,h.s)("per_reporter_staleness",m);(0,i.useEffect)((function(){var e,t=v.filter((function(e){return!(null!=f&&f.includes(e.name))}));S(0!==t&&void 0!==t?t:v),k(c||(null==v||null===(e=v[0])||void 0===e?void 0:e.name))}),[f,o]);var N=(0,i.useMemo)((function(){return(0,L.vJ)(O,F.Kq)}),[T]),C=(0,i.useMemo)((function(){var e=!(null==O||!O[F.SM]||(0,L.vJ)(O,F.SM));return!(null==O||!O[F.X4])&&e}),[T]);return s().createElement(s().Fragment,null,b.length>0?s().createElement(s().Fragment,null,s().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},s().createElement(x.m,(0,a.Z)({},u,{activeKey:T,onSelect:function(e,t){var a=b.find((function(e){return e.name===t}));n&&n(e,t,a.name||t),k(a.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return s().createElement(_.O,(0,a.Z)({key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef},e))})))),s().createElement("section",null,null==b?void 0:b.map((function(e){var t=e.component;return s().createElement(j.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===T&&s().createElement(i.Suspense,{fallback:Z.$},s().createElement("section",{className:"pf-c-page__main-section"},function(e){return e===F.OG&&N||e===F.Gy&&!C&&N||e===F.qy&&!C&&N}(T)?s().createElement(D,null):s().createElement(t,(0,a.Z)({inventoryId:p,store:d},e)))))})))):s().createElement(Z.$,null))};R.propTypes={appList:p().arrayOf(p().shape({title:p().node,name:p().string.isRequired,pageId:p().string})),onTabSelect:p().func,activeApp:p().string.isRequired,inventoryId:p().string.isRequired,entity:p().object};const W=R;var q=n(8454),H=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],K=["inventoryId"],V=function(e){var t=e.showTags,n=e.onTabSelect,o=e.onBackToListClick,c=e.inventoryId,p=(e.additionalClasses,e.activeApp),u=e.appList,d=e.showMainSection,v=(0,r.Z)(e,H),f=(0,l.useDispatch)(),y=(0,l.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,l.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){g&&(null==g?void 0:g.id)===c&&y||f((0,m.A_)(c,{hasItems:!0},{showTags:t}))}),[]),s().createElement("div",{className:"ins-entity-detail"},y&&!g?s().createElement(I,{onBackToListClick:o,inventoryId:c}):s().createElement(s().Fragment,null,s().createElement(q.Z,(0,a.Z)({entity:g,loaded:y,onBackToListClick:o,deleteEntity:function(e,t,n){var a=(0,m.Ks)(e,t);f((0,T.reloadWrapper)(a,n))},addNotification:function(e){return f((0,k.wN)(e))},showTags:t},v)),d&&s().createElement(W,{onTabSelect:n,activeApp:p,appList:u,inventoryId:c,entity:g})))};V.propTypes={showTags:p().bool,onTabSelect:p().func,onBackToListClick:p().func,inventoryId:p().string,additionalClasses:p().object,activeApp:p().string,appList:p().arrayOf(p().shape({title:p().node,name:p().string.isRequired,pageId:p().string}))},V.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var U=function(e){var t=e.inventoryId,n=(0,r.Z)(e,K),i=(0,o.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),s().createElement(V,(0,a.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};U.propTypes=V.propTypes;const $=U},32857:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);