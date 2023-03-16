(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[415],{32203:(e,t,a)=>{"use strict";a.d(t,{H:()=>c,Z:()=>o});var n=a(70655),i=a(92950),s=a(54918),r=a(38296),l=a(62472);const c=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o=e=>{var{children:t=null,id:a="",className:d="",component:p="article",isHoverable:m=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:y=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:I=!1,isLarge:S=!1,isFullHeight:_=!1,isPlain:Z=!1,ouiaId:E,ouiaSafe:T=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:N,onSelectableInputChange:O=(()=>{})}=e,w=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=p,L=(0,l.S$)(o.displayName,E,T),[k,P]=i.useState(""),[R,j]=i.useState();u&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1);const D=i.useRef(!1);return i.useEffect((()=>{N?j({"aria-label":N}):k?j({"aria-labelledby":k}):x&&!D.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,N,k]),i.createElement(c.Provider,{value:{cardId:a,registerTitleId:e=>{P(e),D.current=!!e},isExpanded:b}},x&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${a}-input`},R,{type:"checkbox",checked:g,onChange:e=>O(a,e),disabled:y,tabIndex:-1})),i.createElement(C,Object.assign({id:a,className:(0,r.i)(s.Z.card,u&&s.Z.modifiers.compact,b&&s.Z.modifiers.expanded,h&&s.Z.modifiers.flat,I&&s.Z.modifiers.rounded,S&&s.Z.modifiers.displayLg,_&&s.Z.modifiers.fullHeight,Z&&s.Z.modifiers.plain,y?(0,r.i)(s.Z.modifiers.nonSelectableRaised):v?(0,r.i)(s.Z.modifiers.selectableRaised,g&&s.Z.modifiers.selectedRaised):f||m?(0,r.i)(s.Z.modifiers.selectable,g&&s.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},w,L),t))};o.displayName="Card"},62394:(e,t,a)=>{"use strict";a.d(t,{e:()=>l});var n=a(70655),i=a(92950),s=a(54918),r=a(38296);const l=e=>{var{children:t=null,className:a="",component:l="div",isFilled:c=!0}=e,o=(0,n.__rest)(e,["children","className","component","isFilled"]);const d=l;return i.createElement(d,Object.assign({className:(0,r.i)(s.Z.cardBody,!c&&s.Z.modifiers.noFill,a)},o),t)};l.displayName="CardBody"},75728:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(70655),i=a(92950),s=a(5964),r=a(1024),l=a(73699),c=a(99355),o=a(38296),d=a(62472);const p=e=>{var{id:t="",children:a=null,className:m="",isOpen:u=!1,parentRef:f=null,getMenuRef:v=null,isDisabled:g=!1,isPlain:y=!1,isText:h=!1,isPrimary:b=!1,toggleVariant:I="default",isActive:S=!1,onToggle:_=(e=>{}),icon:Z=null,toggleIndicator:E=s.ZP,splitButtonItems:T,splitButtonVariant:x="checkbox","aria-haspopup":N,ouiaId:O,ouiaSafe:w,ref:C}=e,L=(0,n.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const k=(0,d.S$)(p.displayName,O,w),P=i.createElement(c.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:n,toggleIconClass:s})=>i.createElement(r.Z,Object.assign({},L,{id:t,className:m,isOpen:u,parentRef:f,getMenuRef:v,isActive:S,isDisabled:g,isPlain:y,isText:h,isPrimary:b,toggleVariant:I,onToggle:_,"aria-haspopup":N},k,T&&{isSplitButton:!0,"aria-label":L["aria-label"]||"Select"}),Z&&i.createElement("span",{className:(0,o.i)(s)},Z),a&&i.createElement("span",{className:E&&(0,o.i)(e)},a),E&&i.createElement("span",{className:(0,o.i)(!T&&n)},i.createElement(E,null)))));return T?i.createElement("div",{className:(0,o.i)(l.Z.dropdownToggle,l.Z.modifiers.splitButton,"action"===x&&l.Z.modifiers.action,("primary"===I||b)&&"action"===x&&l.Z.modifiers.primary,"secondary"===I&&"action"===x&&l.Z.modifiers.secondary,g&&l.Z.modifiers.disabled)},T,P):P};p.displayName="DropdownToggle"},9947:(e,t,a)=>{"use strict";a.d(t,{I:()=>n,u:()=>c});var n,i=a(70655),s=a(92950),r=a(38296),l=a(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(n||(n={}));const c=e=>{var{children:t,className:a="",variant:c=n.full,isFullHeight:o}=e,d=(0,i.__rest)(e,["children","className","variant","isFullHeight"]);return s.createElement("div",Object.assign({className:(0,r.i)(l.Z.emptyState,"xs"===c&&l.Z.modifiers.xs,"small"===c&&l.Z.modifiers.sm,"large"===c&&l.Z.modifiers.lg,"xl"===c&&l.Z.modifiers.xl,o&&l.Z.modifiers.fullHeight,a)},d),s.createElement("div",{className:(0,r.i)(l.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,a)=>{"use strict";a.d(t,{B:()=>l});var n=a(70655),i=a(92950),s=a(38296),r=a(51203);const l=e=>{var{children:t,className:a=""}=e,l=(0,n.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,s.i)(r.Z.emptyStateBody,a)},l),t)};l.displayName="EmptyStateBody"},25834:(e,t,a)=>{"use strict";a.d(t,{F:()=>n,G:()=>l});var n,i=a(70655),s=a(92950),r=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const l=e=>{var{children:t=null,className:a="",component:l=n.ul}=e,c=(0,i.__rest)(e,["children","className","component"]);const o=l;return s.createElement(o,Object.assign({},c,{className:(0,r.i)(a)}),t)};l.displayName="TextList"},78140:(e,t,a)=>{"use strict";a.d(t,{T:()=>l,v:()=>n});var n,i=a(70655),s=a(92950),r=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const l=e=>{var{children:t=null,className:a="",component:l=n.li}=e,c=(0,i.__rest)(e,["children","className","component"]);const o=l;return s.createElement(o,Object.assign({},c,{className:(0,r.i)(a)}),t)};l.displayName="TextListItem"},71973:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>r,fP:()=>s,gk:()=>i});var n=a(40400);const i={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},s=(0,n.IU)(i),r=s},5964:(e,t,a)=>{"use strict";a.d(t,{VA:()=>s,ZP:()=>r,kc:()=>i});var n=a(40400);const i={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,n.IU)(i),r=s},98614:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>r,de:()=>i,nQ:()=>s});var n=a(40400);const i={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},s=(0,n.IU)(i),r=s},96733:(e,t,a)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=a(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(81320);const n={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},61013:(e,t,a)=>{"use strict";a.d(t,{Z:()=>$});var n=a(87462),i=a(45987),s=a(92950),r=a.n(s),l=a(75662),c=a(50533),o=a(45697),d=a.n(o),p=a(3672),m=a(9947),u=a(38424),f=a(75106),v=a(38779),g=a(47173),y=a(96733),h=a(94471),b=function(e){var t=e.inventoryId,a=e.onBackToListClick;return r().createElement(m.u,{variant:m.I.full},r().createElement(u.k,{icon:y.ZP}),r().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),r().createElement(f.B,null,"System with ID ",t," does not exist"),r().createElement(g.zx,{variant:"primary",onClick:function(){return(0,h.h)(t,a)}},"Back to previous page"))};b.propTypes={inventoryId:d().string,onBackToListClick:d().func};const I=b;var S=a(73880),_=a(83215),Z=a(71002),E=a(29439),T=a(4942),x=a(35262),N=a(28883),O=a(37619),w=a(79770),C=a(96396),L=a(85893),k=a(48542),P=a(56989),R=function(){return R=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},R.apply(this,arguments)};const j=function(e){var t=e.titleText,a=void 0===t?"This system isn’t connected to Insights yet":t,n=e.bodyText,i=void 0===n?"To get started, activate the Insights client for this system.":n,s=e.buttonText,r=void 0===s?"Learn how to activate the Insights client":s;return(0,L.jsxs)(k.EmptyState,{children:[(0,L.jsx)(k.EmptyStateIcon,{icon:P.DisconnectedIcon}),(0,L.jsx)(k.Title,R({headingLevel:"h5",size:"lg"},{children:a})),(0,L.jsx)(k.EmptyStateBody,{children:i}),(0,L.jsx)(k.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:r}))]})};var D=["onTabSelect","appList","activeApp","inventoryId","entity"];function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,T.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t,a=e.onTabSelect,l=e.appList,o=e.activeApp,d=e.inventoryId,p=e.entity,m=(0,i.Z)(e,D),u=(0,c.useStore)(),f=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||l||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return F(F({},e),{},{tabRef:r().createRef()})}))})),v=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),g=(0,s.useState)(f),y=(0,E.Z)(g,2),b=y[0],I=y[1],S=(0,s.useState)(o||(null==f||null===(t=f[0])||void 0===t?void 0:t.name)),_=(0,E.Z)(S,2),T=_[0],L=_[1];(0,s.useEffect)((function(){var e=f.filter((function(e){return!(null!=v&&v.includes(e.name))}));0!==e&&void 0!==(0,Z.Z)(e)?I(e):I(f)}),[v]);var k=(0,C._e)((0,h.s)("per_reporter_staleness",p));return r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},r().createElement(x.m,(0,n.Z)({},m,{activeKey:T,onSelect:function(e,t){var n=b.find((function(e){return e.name===t}));a&&a(e,t,n.name||t),L(n.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return r().createElement(N.O,{key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef})})))),r().createElement("section",null,(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e){var t=e.component;return r().createElement(w.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===T&&r().createElement(s.Suspense,{fallback:O.$},r().createElement("section",{className:"pf-c-page__main-section"},k&&["patch","vulnerabilities","advisor"].includes(T)?r().createElement(j,null):r().createElement(t,{inventoryId:d,store:u}))))})))))};A.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired,entity:d().object};const H=A;var M=a(8454),z=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],V=["inventoryId"],U=function(e){var t=e.showTags,a=e.onTabSelect,l=e.onBackToListClick,o=e.inventoryId,d=(e.additionalClasses,e.activeApp),m=e.appList,u=e.showMainSection,f=(0,i.Z)(e,z),v=(0,c.useDispatch)(),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),y=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,s.useEffect)((function(){y&&(null==y?void 0:y.id)===o&&g||v((0,p.A_)(o,{hasItems:!0},{showTags:t}))}),[]),r().createElement("div",{className:"ins-entity-detail"},g&&!y?r().createElement(I,{onBackToListClick:l,inventoryId:o}):r().createElement(r().Fragment,null,r().createElement(M.Z,(0,n.Z)({entity:y,loaded:g,onBackToListClick:l,deleteEntity:function(e,t,a){var n=(0,p.Ks)(e,t);v((0,S.reloadWrapper)(n,a))},addNotification:function(e){return v((0,_.wN)(e))},showTags:t},f)),u&&r().createElement(H,{onTabSelect:a,activeApp:d,appList:m,inventoryId:o,entity:y})))};U.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},U.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:s.Fragment,LastSeenWrapper:s.Fragment,TitleWrapper:s.Fragment,TagsWrapper:s.Fragment,DeleteWrapper:s.Fragment,ActionsWrapper:s.Fragment,appList:[]};var W=function(e){var t=e.inventoryId,a=(0,i.Z)(e,V),s=(0,l.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),r().createElement(U,(0,n.Z)({inventoryId:t||s||location.pathname.replace(/\/$/,"").split("/").pop()},a))};W.propTypes=U.propTypes;const $=W},6258:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n={};a.r(n);var i=a(87462),s=a(92950),r=a.n(s),l=a(39142),c=(a(61013),a(67389),function(e){return r().createElement(l.Z,(0,i.Z)({},e,{component:n.AppInfo}))});const o=r().forwardRef((function(e,t){return r().createElement(c,(0,i.Z)({},e,{innerRef:t}))}))},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/415.4e1dc18b179679743f34d05353672870.js.map