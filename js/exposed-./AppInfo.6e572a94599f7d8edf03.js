(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5959],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var a=n(70655),r=n(92950),i=n(54918),l=n(38296),s=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:p="",component:d="article",isHoverable:m=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:y=!1,isDisabledRaised:g=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:S=!1,isLarge:I=!1,isFullHeight:E=!1,isPlain:_=!1,ouiaId:Z,ouiaSafe:T=!0,hasSelectableInput:O=!1,selectableInputAriaLabel:x,onSelectableInputChange:w=(()=>{})}=e,N=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const j=d,C=(0,s.S$)(c.displayName,Z,T),[k,L]=r.useState(""),[P,R]=r.useState();u&&I&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),I=!1);const A=r.useRef(!1);return r.useEffect((()=>{x?R({"aria-label":x}):k?R({"aria-labelledby":k}):O&&!A.current&&(R({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[O,x,k]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{L(e),A.current=!!e},isExpanded:b}},O&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},P,{type:"checkbox",checked:y,onChange:e=>w(n,e),disabled:g,tabIndex:-1})),r.createElement(j,Object.assign({id:n,className:(0,l.i)(i.Z.card,u&&i.Z.modifiers.compact,b&&i.Z.modifiers.expanded,h&&i.Z.modifiers.flat,S&&i.Z.modifiers.rounded,I&&i.Z.modifiers.displayLg,E&&i.Z.modifiers.fullHeight,_&&i.Z.modifiers.plain,g?(0,l.i)(i.Z.modifiers.nonSelectableRaised):v?(0,l.i)(i.Z.modifiers.selectableRaised,y&&i.Z.modifiers.selectedRaised):f||m?(0,l.i)(i.Z.modifiers.selectable,y&&i.Z.modifiers.selected):"",p),tabIndex:f||v?"0":void 0},N,C),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var a=n(70655),r=n(92950),i=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,a.__rest)(e,["children","className","component","isFilled"]);const p=s;return r.createElement(p,Object.assign({className:(0,l.i)(i.Z.cardBody,!o&&i.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>a,u:()=>o});var a,r=n(70655),i=n(92950),l=n(38296),s=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(a||(a={}));const o=e=>{var{children:t,className:n="",variant:o=a.full,isFullHeight:c}=e,p=(0,r.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,l.i)(s.Z.emptyState,"xs"===o&&s.Z.modifiers.xs,"small"===o&&s.Z.modifiers.sm,"large"===o&&s.Z.modifiers.lg,"xl"===o&&s.Z.modifiers.xl,c&&s.Z.modifiers.fullHeight,n)},p),i.createElement("div",{className:(0,l.i)(s.Z.emptyStateContent)},t))};o.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>s});var a=n(70655),r=n(92950),i=n(38296),l=n(51203);const s=e=>{var{children:t,className:n=""}=e,s=(0,a.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:(0,i.i)(l.Z.emptyStateBody,n)},s),t)};s.displayName="EmptyStateBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>o});var a,r=n(70655),i=n(92950),l=n(62873),s=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const o=e=>{var{children:t=null,className:n="",component:o=a.ul,isPlain:c=!1}=e,p=(0,r.__rest)(e,["children","className","component","isPlain"]);const d=o;return i.createElement(d,Object.assign({},p,{className:(0,s.i)(c&&l.Z.modifiers.plain,n)}),t)};o.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>a});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.li}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(81320);const a={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(85893),r=n(94184),i=n.n(r),l=n(92950);const s=n.n(l)().createContext("light");var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};const c=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),l=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(s.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var c=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,a.jsx)("section",o({},r,{className:"".concat(l," ").concat(c),"widget-type":"InsightsPageHeader"},{children:n}))}})}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var a=n(87462),r=n(45987),i=n(92950),l=n.n(i),s=n(62012),o=n(60261),c=n(45697),p=n.n(c),d=n(94474),m=n(47173),u=n(9947),f=n(75106),v=n(38424),y=n(38779),g=n(96733),h=n(94471),b=n(76440),S=n.n(b),I=function(e){var t=e.inventoryId,n=e.onBackToListClick,a=S()();return l().createElement(u.u,{variant:u.I.full},l().createElement(v.k,{icon:g.ZP}),l().createElement(y.D,{headingLevel:"h5",size:"lg"},"System not found"),l().createElement(f.B,null,"System with ID ",t," does not exist"),l().createElement(m.zx,{variant:"primary",onClick:function(){return(0,h.h)(t,n,a)}},"Back to previous page"))};I.propTypes={inventoryId:p().string,onBackToListClick:p().func};const E=I;var _=n(73880),Z=n(83215),T=n(29439),O=n(4942),x=n(37619),w=n(28883),N=n(79770),j=n(35262),C=n(96396),k=n(85893),L=n(8213),P=n(64291),R=function(){return R=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},R.apply(this,arguments)};const A=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,a=e.bodyText,r=void 0===a?"To get started, activate the Insights client for this system.":a,i=e.buttonText,l=void 0===i?"Learn how to activate the Insights client":i;return(0,k.jsxs)(L.EmptyState,{children:[(0,k.jsx)(L.EmptyStateIcon,{icon:P.DisconnectedIcon}),(0,k.jsx)(L.Title,R({headingLevel:"h5",size:"lg"},{children:n})),(0,k.jsx)(L.EmptyStateBody,{children:r}),(0,k.jsx)(L.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:l}))]})};var F=n(13784),D=["onTabSelect","appList","activeApp","inventoryId","entity"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t,n=e.onTabSelect,s=e.appList,c=e.activeApp,p=e.inventoryId,d=e.entity,m=(0,r.Z)(e,D),u=(0,o.useStore)(),f=(0,o.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||s||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return B(B({},e),{},{tabRef:l().createRef()})}))})),v=(0,o.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),y=(0,i.useState)(f),g=(0,T.Z)(y,2),b=g[0],S=g[1],I=(0,i.useState)(c||(null==f||null===(t=f[0])||void 0===t?void 0:t.name)),E=(0,T.Z)(I,2),_=E[0],Z=E[1],O=(0,h.s)("per_reporter_staleness",d);(0,i.useEffect)((function(){var e=f.filter((function(e){return!(null!=v&&v.includes(e.name))}));S(0!==e&&void 0!==e?e:f)}),[v]);var k=(0,i.useMemo)((function(){return(0,C.vJ)(O,F.Kq)}),[_]),L=(0,i.useMemo)((function(){var e=!(null==O||!O[F.SM]||(0,C.vJ)(O,F.SM));return!(null==O||!O[F.X4])&&e}),[_]);return l().createElement(l().Fragment,null,l().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},l().createElement(j.m,(0,a.Z)({},m,{activeKey:_,onSelect:function(e,t){var a=b.find((function(e){return e.name===t}));n&&n(e,t,a.name||t),Z(a.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return l().createElement(w.O,(0,a.Z)({key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef},e))})))),l().createElement("section",null,(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e){var t=e.component;return l().createElement(N.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===_&&l().createElement(i.Suspense,{fallback:x.$},l().createElement("section",{className:"pf-c-page__main-section"},function(e){return e===F.OG&&k||e===F.Gy&&!L&&k||e===F.qy&&!L&&k}(_)?l().createElement(A,null):l().createElement(t,(0,a.Z)({inventoryId:p,store:u},e)))))})))))};H.propTypes={appList:p().arrayOf(p().shape({title:p().node,name:p().string.isRequired,pageId:p().string})),onTabSelect:p().func,activeApp:p().string.isRequired,inventoryId:p().string.isRequired,entity:p().object};const z=H;var W=n(8454),q=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],K=["inventoryId"],U=function(e){var t=e.showTags,n=e.onTabSelect,s=e.onBackToListClick,c=e.inventoryId,p=(e.additionalClasses,e.activeApp),m=e.appList,u=e.showMainSection,f=(0,r.Z)(e,q),v=(0,o.useDispatch)(),y=(0,o.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,o.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){g&&(null==g?void 0:g.id)===c&&y||v((0,d.A_)(c,{hasItems:!0},{showTags:t}))}),[]),l().createElement("div",{className:"ins-entity-detail"},y&&!g?l().createElement(E,{onBackToListClick:s,inventoryId:c}):l().createElement(l().Fragment,null,l().createElement(W.Z,(0,a.Z)({entity:g,loaded:y,onBackToListClick:s,deleteEntity:function(e,t,n){var a=(0,d.Ks)(e,t);v((0,_.reloadWrapper)(a,n))},addNotification:function(e){return v((0,Z.wN)(e))},showTags:t},f)),u&&l().createElement(z,{onTabSelect:n,activeApp:p,appList:m,inventoryId:c,entity:g})))};U.propTypes={showTags:p().bool,onTabSelect:p().func,onBackToListClick:p().func,inventoryId:p().string,additionalClasses:p().object,activeApp:p().string,appList:p().arrayOf(p().shape({title:p().node,name:p().string.isRequired,pageId:p().string}))},U.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var V=function(e){var t=e.inventoryId,n=(0,r.Z)(e,K),i=(0,s.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),l().createElement(U,(0,a.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};V.propTypes=U.propTypes;const $=V},46230:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(87462),r=n(92950),i=n.n(r),l=n(39142),s=(n(61013),n(67389),n(45987)),o=n(45697),c=n.n(o),p=n(62012),d=n(60261),m=n(35664),u=["componentMapper","activeApp"],f=function(e){var t=e.componentMapper,n=e.activeApp,a=(0,d.useStore)(),l=(0,d.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded})),s=(0,d.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return!0!==l||s?i().createElement(r.Fragment,null,l?n&&i().createElement("div",{className:"ins-active-app-".concat(null==n?void 0:n.name)},t?i().createElement(t,{store:a,inventoryId:null==s?void 0:s.id,appName:null==n?void 0:n.name}):"missing component"):i().createElement(m.Z,{size:m.i.md})):null};f.propTypes={componentMapper:c().oneOfType([c().element,c().func]),activeApp:c().shape({title:c().node,name:c().string,pageId:c().string})};var v=function(e){var t,n=e.componentMapper,r=e.activeApp,l=(0,s.Z)(e,u),o=(0,p.useLocation)().search,c=new URLSearchParams(o);n&&r||console.warn("Please pass componentMapper and activeApp. We will be deprecating the old store controls");var m=(0,d.useSelector)((function(e){var t,n,a,r,i=e.entityDetails,l=c.get("appName")||(null==i||null===(t=i.activeApp)||void 0===t?void 0:t.appName);return(null==i||null===(n=i.activeApps)||void 0===n||null===(a=n.find)||void 0===a?void 0:a.call(n,(function(e){return(null==e?void 0:e.name)===l})))||(null==i||null===(r=i.activeApps)||void 0===r?void 0:r[0])})),v=n||(null===(t=r||m)||void 0===t?void 0:t.component);return i().createElement(f,(0,a.Z)({componentMapper:v,activeApp:r||m},l))};v.propTypes=f.propTypes;var y=function(e){return e.componentMapper&&e.activeApp?i().createElement(f,e):i().createElement(v,e)};y.propTypes=f.propTypes;const g=y;var h=function(e){return i().createElement(l.Z,(0,a.Z)({},e,{component:g}))};const b=i().forwardRef((function(e,t){return i().createElement(h,(0,a.Z)({},e,{innerRef:t}))}))},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./AppInfo.3f4c287d3bd54fb44dcc291b0916444f.js.map