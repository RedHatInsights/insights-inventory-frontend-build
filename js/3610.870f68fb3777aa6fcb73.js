(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3610],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>c,Z:()=>o});var a=n(70655),r=n(92950),i=n(54918),s=n(38296),l=n(62472);const c=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o=e=>{var{children:t=null,id:n="",className:d="",component:p="article",isHoverable:m=!1,isCompact:f=!1,isSelectable:u=!1,isSelectableRaised:v=!1,isSelected:y=!1,isDisabledRaised:g=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:_=!1,isLarge:S=!1,isFullHeight:I=!1,isPlain:E=!1,ouiaId:Z,ouiaSafe:O=!0,hasSelectableInput:T=!1,selectableInputAriaLabel:x,onSelectableInputChange:w=(()=>{})}=e,N=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const j=p,C=(0,l.S$)(o.displayName,Z,O),[k,L]=r.useState(""),[R,P]=r.useState();f&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1);const F=r.useRef(!1);return r.useEffect((()=>{x?P({"aria-label":x}):k?P({"aria-labelledby":k}):T&&!F.current&&(P({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[T,x,k]),r.createElement(c.Provider,{value:{cardId:n,registerTitleId:e=>{L(e),F.current=!!e},isExpanded:b}},T&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},R,{type:"checkbox",checked:y,onChange:e=>w(n,e),disabled:g,tabIndex:-1})),r.createElement(j,Object.assign({id:n,className:(0,s.i)(i.Z.card,f&&i.Z.modifiers.compact,b&&i.Z.modifiers.expanded,h&&i.Z.modifiers.flat,_&&i.Z.modifiers.rounded,S&&i.Z.modifiers.displayLg,I&&i.Z.modifiers.fullHeight,E&&i.Z.modifiers.plain,g?(0,s.i)(i.Z.modifiers.nonSelectableRaised):v?(0,s.i)(i.Z.modifiers.selectableRaised,y&&i.Z.modifiers.selectedRaised):u||m?(0,s.i)(i.Z.modifiers.selectable,y&&i.Z.modifiers.selected):"",d),tabIndex:u||v?"0":void 0},N,C),t))};o.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>l});var a=n(70655),r=n(92950),i=n(54918),s=n(38296);const l=e=>{var{children:t=null,className:n="",component:l="div",isFilled:c=!0}=e,o=(0,a.__rest)(e,["children","className","component","isFilled"]);const d=l;return r.createElement(d,Object.assign({className:(0,s.i)(i.Z.cardBody,!c&&i.Z.modifiers.noFill,n)},o),t)};l.displayName="CardBody"},9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>a,u:()=>c});var a,r=n(70655),i=n(92950),s=n(38296),l=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(a||(a={}));const c=e=>{var{children:t,className:n="",variant:c=a.full,isFullHeight:o}=e,d=(0,r.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,s.i)(l.Z.emptyState,"xs"===c&&l.Z.modifiers.xs,"small"===c&&l.Z.modifiers.sm,"large"===c&&l.Z.modifiers.lg,"xl"===c&&l.Z.modifiers.xl,o&&l.Z.modifiers.fullHeight,n)},d),i.createElement("div",{className:(0,s.i)(l.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>l});var a=n(70655),r=n(92950),i=n(38296),s=n(51203);const l=e=>{var{children:t,className:n=""}=e,l=(0,a.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:(0,i.i)(s.Z.emptyStateBody,n)},l),t)};l.displayName="EmptyStateBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>l});var a,r=n(70655),i=n(92950),s=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const l=e=>{var{children:t=null,className:n="",component:l=a.ul}=e,c=(0,r.__rest)(e,["children","className","component"]);const o=l;return i.createElement(o,Object.assign({},c,{className:(0,s.i)(n)}),t)};l.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>l,v:()=>a});var a,r=n(70655),i=n(92950),s=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const l=e=>{var{children:t=null,className:n="",component:l=a.li}=e,c=(0,r.__rest)(e,["children","className","component"]);const o=l;return i.createElement(o,Object.assign({},c,{className:(0,s.i)(n)}),t)};l.displayName="TextListItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(81320);const a={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(85893),r=n(94184),i=n.n(r),s=n(92950);const l=n.n(s)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};const o=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),s=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(l.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var o=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,a.jsx)("section",c({},r,{className:"".concat(s," ").concat(o),"widget-type":"InsightsPageHeader"},{children:n}))}})}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>K});var a=n(87462),r=n(45987),i=n(92950),s=n.n(i),l=n(75662),c=n(50533),o=n(45697),d=n.n(o),p=n(94474),m=n(9947),f=n(38424),u=n(75106),v=n(38779),y=n(47173),g=n(96733),h=n(94471),b=function(e){var t=e.inventoryId,n=e.onBackToListClick;return s().createElement(m.u,{variant:m.I.full},s().createElement(f.k,{icon:g.ZP}),s().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),s().createElement(u.B,null,"System with ID ",t," does not exist"),s().createElement(y.zx,{variant:"primary",onClick:function(){return(0,h.h)(t,n)}},"Back to previous page"))};b.propTypes={inventoryId:d().string,onBackToListClick:d().func};const _=b;var S=n(73880),I=n(83215),E=n(71002),Z=n(29439),O=n(4942),T=n(35262),x=n(28883),w=n(37619),N=n(79770),j=n(96396),C=n(85893),k=n(48542),L=n(56989),R=function(){return R=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},R.apply(this,arguments)};const P=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,a=e.bodyText,r=void 0===a?"To get started, activate the Insights client for this system.":a,i=e.buttonText,s=void 0===i?"Learn how to activate the Insights client":i;return(0,C.jsxs)(k.EmptyState,{children:[(0,C.jsx)(k.EmptyStateIcon,{icon:L.DisconnectedIcon}),(0,C.jsx)(k.Title,R({headingLevel:"h5",size:"lg"},{children:n})),(0,C.jsx)(k.EmptyStateBody,{children:r}),(0,C.jsx)(k.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:s}))]})};var F=["onTabSelect","appList","activeApp","inventoryId","entity"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t,n=e.onTabSelect,l=e.appList,o=e.activeApp,d=e.inventoryId,p=e.entity,m=(0,r.Z)(e,F),f=(0,c.useStore)(),u=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||l||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return B(B({},e),{},{tabRef:s().createRef()})}))})),v=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),y=(0,i.useState)(u),g=(0,Z.Z)(y,2),b=g[0],_=g[1],S=(0,i.useState)(o||(null==u||null===(t=u[0])||void 0===t?void 0:t.name)),I=(0,Z.Z)(S,2),O=I[0],C=I[1];(0,i.useEffect)((function(){var e=u.filter((function(e){return!(null!=v&&v.includes(e.name))}));0!==e&&void 0!==(0,E.Z)(e)?_(e):_(u)}),[v]);var k=(0,j._e)((0,h.s)("per_reporter_staleness",p));return s().createElement(s().Fragment,null,s().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},s().createElement(T.m,(0,a.Z)({},m,{activeKey:O,onSelect:function(e,t){var a=b.find((function(e){return e.name===t}));n&&n(e,t,a.name||t),C(a.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return s().createElement(x.O,(0,a.Z)({key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef},e))})))),s().createElement("section",null,(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e){var t=e.component;return s().createElement(N.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===O&&s().createElement(i.Suspense,{fallback:w.$},s().createElement("section",{className:"pf-c-page__main-section"},k&&["patch","vulnerabilities","advisor"].includes(O)?s().createElement(P,null):s().createElement(t,(0,a.Z)({inventoryId:d,store:f},e)))))})))))};H.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired,entity:d().object};const A=H;var z=n(8454),M=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],W=["inventoryId"],V=function(e){var t=e.showTags,n=e.onTabSelect,l=e.onBackToListClick,o=e.inventoryId,d=(e.additionalClasses,e.activeApp),m=e.appList,f=e.showMainSection,u=(0,r.Z)(e,M),v=(0,c.useDispatch)(),y=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){g&&(null==g?void 0:g.id)===o&&y||v((0,p.A_)(o,{hasItems:!0},{showTags:t}))}),[]),s().createElement("div",{className:"ins-entity-detail"},y&&!g?s().createElement(_,{onBackToListClick:l,inventoryId:o}):s().createElement(s().Fragment,null,s().createElement(z.Z,(0,a.Z)({entity:g,loaded:y,onBackToListClick:l,deleteEntity:function(e,t,n){var a=(0,p.Ks)(e,t);v((0,S.reloadWrapper)(a,n))},addNotification:function(e){return v((0,I.wN)(e))},showTags:t},u)),f&&s().createElement(A,{onTabSelect:n,activeApp:d,appList:m,inventoryId:o,entity:g})))};V.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},V.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var q=function(e){var t=e.inventoryId,n=(0,r.Z)(e,W),i=(0,l.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),s().createElement(V,(0,a.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};q.propTypes=V.propTypes;const K=q},6258:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a={};n.r(a);var r=n(87462),i=n(92950),s=n.n(i),l=n(39142),c=(n(61013),n(67389),function(e){return s().createElement(l.Z,(0,r.Z)({},e,{component:a.AppInfo}))});const o=s().forwardRef((function(e,t){return s().createElement(c,(0,r.Z)({},e,{innerRef:t}))}))},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);