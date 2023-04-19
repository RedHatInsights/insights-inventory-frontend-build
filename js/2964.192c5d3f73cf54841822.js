(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2964],{32203:(e,t,a)=>{"use strict";a.d(t,{H:()=>c,Z:()=>o});var n=a(70655),i=a(92950),r=a(54918),s=a(38296),l=a(62472);const c=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o=e=>{var{children:t=null,id:a="",className:d="",component:p="article",isHoverable:m=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:y=!1,isDisabledRaised:g=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:S=!1,isLarge:_=!1,isFullHeight:I=!1,isPlain:E=!1,ouiaId:Z,ouiaSafe:T=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:w,onSelectableInputChange:N=(()=>{})}=e,k=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=p,O=(0,l.S$)(o.displayName,Z,T),[L,j]=i.useState(""),[R,F]=i.useState();u&&_&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),_=!1);const P=i.useRef(!1);return i.useEffect((()=>{w?F({"aria-label":w}):L?F({"aria-labelledby":L}):x&&!P.current&&(F({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,w,L]),i.createElement(c.Provider,{value:{cardId:a,registerTitleId:e=>{j(e),P.current=!!e},isExpanded:b}},x&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${a}-input`},R,{type:"checkbox",checked:y,onChange:e=>N(a,e),disabled:g,tabIndex:-1})),i.createElement(C,Object.assign({id:a,className:(0,s.i)(r.Z.card,u&&r.Z.modifiers.compact,b&&r.Z.modifiers.expanded,h&&r.Z.modifiers.flat,S&&r.Z.modifiers.rounded,_&&r.Z.modifiers.displayLg,I&&r.Z.modifiers.fullHeight,E&&r.Z.modifiers.plain,g?(0,s.i)(r.Z.modifiers.nonSelectableRaised):v?(0,s.i)(r.Z.modifiers.selectableRaised,y&&r.Z.modifiers.selectedRaised):f||m?(0,s.i)(r.Z.modifiers.selectable,y&&r.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},k,O),t))};o.displayName="Card"},62394:(e,t,a)=>{"use strict";a.d(t,{e:()=>l});var n=a(70655),i=a(92950),r=a(54918),s=a(38296);const l=e=>{var{children:t=null,className:a="",component:l="div",isFilled:c=!0}=e,o=(0,n.__rest)(e,["children","className","component","isFilled"]);const d=l;return i.createElement(d,Object.assign({className:(0,s.i)(r.Z.cardBody,!c&&r.Z.modifiers.noFill,a)},o),t)};l.displayName="CardBody"},9947:(e,t,a)=>{"use strict";a.d(t,{I:()=>n,u:()=>c});var n,i=a(70655),r=a(92950),s=a(38296),l=a(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(n||(n={}));const c=e=>{var{children:t,className:a="",variant:c=n.full,isFullHeight:o}=e,d=(0,i.__rest)(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:(0,s.i)(l.Z.emptyState,"xs"===c&&l.Z.modifiers.xs,"small"===c&&l.Z.modifiers.sm,"large"===c&&l.Z.modifiers.lg,"xl"===c&&l.Z.modifiers.xl,o&&l.Z.modifiers.fullHeight,a)},d),r.createElement("div",{className:(0,s.i)(l.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,a)=>{"use strict";a.d(t,{B:()=>l});var n=a(70655),i=a(92950),r=a(38296),s=a(51203);const l=e=>{var{children:t,className:a=""}=e,l=(0,n.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,r.i)(s.Z.emptyStateBody,a)},l),t)};l.displayName="EmptyStateBody"},25834:(e,t,a)=>{"use strict";a.d(t,{F:()=>n,G:()=>l});var n,i=a(70655),r=a(92950),s=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const l=e=>{var{children:t=null,className:a="",component:l=n.ul}=e,c=(0,i.__rest)(e,["children","className","component"]);const o=l;return r.createElement(o,Object.assign({},c,{className:(0,s.i)(a)}),t)};l.displayName="TextList"},78140:(e,t,a)=>{"use strict";a.d(t,{T:()=>l,v:()=>n});var n,i=a(70655),r=a(92950),s=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const l=e=>{var{children:t=null,className:a="",component:l=n.li}=e,c=(0,i.__rest)(e,["children","className","component"]);const o=l;return r.createElement(o,Object.assign({},c,{className:(0,s.i)(a)}),t)};l.displayName="TextListItem"},96733:(e,t,a)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=a(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(81320);const n={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},61013:(e,t,a)=>{"use strict";a.d(t,{Z:()=>K});var n=a(87462),i=a(45987),r=a(92950),s=a.n(r),l=a(75662),c=a(50533),o=a(45697),d=a.n(o),p=a(3672),m=a(9947),u=a(38424),f=a(75106),v=a(38779),y=a(47173),g=a(96733),h=a(94471),b=function(e){var t=e.inventoryId,a=e.onBackToListClick;return s().createElement(m.u,{variant:m.I.full},s().createElement(u.k,{icon:g.ZP}),s().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),s().createElement(f.B,null,"System with ID ",t," does not exist"),s().createElement(y.zx,{variant:"primary",onClick:function(){return(0,h.h)(t,a)}},"Back to previous page"))};b.propTypes={inventoryId:d().string,onBackToListClick:d().func};const S=b;var _=a(73880),I=a(83215),E=a(71002),Z=a(29439),T=a(4942),x=a(35262),w=a(28883),N=a(37619),k=a(79770),C=a(96396),O=a(85893),L=a(48542),j=a(56989),R=function(){return R=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},R.apply(this,arguments)};const F=function(e){var t=e.titleText,a=void 0===t?"This system isn’t connected to Insights yet":t,n=e.bodyText,i=void 0===n?"To get started, activate the Insights client for this system.":n,r=e.buttonText,s=void 0===r?"Learn how to activate the Insights client":r;return(0,O.jsxs)(L.EmptyState,{children:[(0,O.jsx)(L.EmptyStateIcon,{icon:j.DisconnectedIcon}),(0,O.jsx)(L.Title,R({headingLevel:"h5",size:"lg"},{children:a})),(0,O.jsx)(L.EmptyStateBody,{children:i}),(0,O.jsx)(L.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:s}))]})};var P=["onTabSelect","appList","activeApp","inventoryId","entity"];function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){(0,T.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t,a=e.onTabSelect,l=e.appList,o=e.activeApp,d=e.inventoryId,p=e.entity,m=(0,i.Z)(e,P),u=(0,c.useStore)(),f=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||l||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return B(B({},e),{},{tabRef:s().createRef()})}))})),v=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),y=(0,r.useState)(f),g=(0,Z.Z)(y,2),b=g[0],S=g[1],_=(0,r.useState)(o||(null==f||null===(t=f[0])||void 0===t?void 0:t.name)),I=(0,Z.Z)(_,2),T=I[0],O=I[1];(0,r.useEffect)((function(){var e=f.filter((function(e){return!(null!=v&&v.includes(e.name))}));0!==e&&void 0!==(0,E.Z)(e)?S(e):S(f)}),[v]);var L=(0,C._e)((0,h.s)("per_reporter_staleness",p));return s().createElement(s().Fragment,null,s().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},s().createElement(x.m,(0,n.Z)({},m,{activeKey:T,onSelect:function(e,t){var n=b.find((function(e){return e.name===t}));a&&a(e,t,n.name||t),O(n.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return s().createElement(w.O,{key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef})})))),s().createElement("section",null,(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e){var t=e.component;return s().createElement(k.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===T&&s().createElement(r.Suspense,{fallback:N.$},s().createElement("section",{className:"pf-c-page__main-section"},L&&["patch","vulnerabilities","advisor"].includes(T)?s().createElement(F,null):s().createElement(t,{inventoryId:d,store:u}))))})))))};A.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired,entity:d().object};const H=A;var z=a(8454),M=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],W=["inventoryId"],V=function(e){var t=e.showTags,a=e.onTabSelect,l=e.onBackToListClick,o=e.inventoryId,d=(e.additionalClasses,e.activeApp),m=e.appList,u=e.showMainSection,f=(0,i.Z)(e,M),v=(0,c.useDispatch)(),y=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,r.useEffect)((function(){g&&(null==g?void 0:g.id)===o&&y||v((0,p.A_)(o,{hasItems:!0},{showTags:t}))}),[]),s().createElement("div",{className:"ins-entity-detail"},y&&!g?s().createElement(S,{onBackToListClick:l,inventoryId:o}):s().createElement(s().Fragment,null,s().createElement(z.Z,(0,n.Z)({entity:g,loaded:y,onBackToListClick:l,deleteEntity:function(e,t,a){var n=(0,p.Ks)(e,t);v((0,_.reloadWrapper)(n,a))},addNotification:function(e){return v((0,I.wN)(e))},showTags:t},f)),u&&s().createElement(H,{onTabSelect:a,activeApp:d,appList:m,inventoryId:o,entity:g})))};V.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},V.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:r.Fragment,LastSeenWrapper:r.Fragment,TitleWrapper:r.Fragment,TagsWrapper:r.Fragment,DeleteWrapper:r.Fragment,ActionsWrapper:r.Fragment,appList:[]};var q=function(e){var t=e.inventoryId,a=(0,i.Z)(e,W),r=(0,l.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),s().createElement(V,(0,n.Z)({inventoryId:t||r||location.pathname.replace(/\/$/,"").split("/").pop()},a))};q.propTypes=V.propTypes;const K=q},6258:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n={};a.r(n);var i=a(87462),r=a(92950),s=a.n(r),l=a(39142),c=(a(61013),a(67389),function(e){return s().createElement(l.Z,(0,i.Z)({},e,{component:n.AppInfo}))});const o=s().forwardRef((function(e,t){return s().createElement(c,(0,i.Z)({},e,{innerRef:t}))}))},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);