(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2785],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>c,Z:()=>l});var r=n(70655),a=n(92950),i=n(54918),s=n(38296),o=n(62472);const c=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),l=e=>{var{children:t=null,id:n="",className:d="",component:p="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:y=!1,isSelected:v=!1,isDisabledRaised:g=!1,isFlat:b=!1,isExpanded:h=!1,isRounded:E=!1,isLarge:O=!1,isFullHeight:I=!1,isPlain:_=!1,ouiaId:S,ouiaSafe:T=!0,hasSelectableInput:L=!1,selectableInputAriaLabel:P,onSelectableInputChange:Z=(()=>{})}=e,w=(0,r.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const N=p,j=(0,o.S$)(l.displayName,S,T),[D,R]=a.useState(""),[A,F]=a.useState();f&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const C=a.useRef(!1);return a.useEffect((()=>{P?F({"aria-label":P}):D?F({"aria-labelledby":D}):L&&!C.current&&(F({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[L,P,D]),a.createElement(c.Provider,{value:{cardId:n,registerTitleId:e=>{R(e),C.current=!!e},isExpanded:h}},L&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},A,{type:"checkbox",checked:v,onChange:e=>Z(n,e),disabled:g,tabIndex:-1})),a.createElement(N,Object.assign({id:n,className:(0,s.i)(i.Z.card,f&&i.Z.modifiers.compact,h&&i.Z.modifiers.expanded,b&&i.Z.modifiers.flat,E&&i.Z.modifiers.rounded,O&&i.Z.modifiers.displayLg,I&&i.Z.modifiers.fullHeight,_&&i.Z.modifiers.plain,g?(0,s.i)(i.Z.modifiers.nonSelectableRaised):y?(0,s.i)(i.Z.modifiers.selectableRaised,v&&i.Z.modifiers.selectedRaised):m||u?(0,s.i)(i.Z.modifiers.selectable,v&&i.Z.modifiers.selected):"",d),tabIndex:m||y?"0":void 0},w,j),t))};l.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>o});var r=n(70655),a=n(92950),i=n(54918),s=n(38296);const o=e=>{var{children:t=null,className:n="",component:o="div",isFilled:c=!0}=e,l=(0,r.__rest)(e,["children","className","component","isFilled"]);const d=o;return a.createElement(d,Object.assign({className:(0,s.i)(i.Z.cardBody,!c&&i.Z.modifiers.noFill,n)},l),t)};o.displayName="CardBody"},9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>r,u:()=>c});var r,a=n(70655),i=n(92950),s=n(38296),o=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(r||(r={}));const c=e=>{var{children:t,className:n="",variant:c=r.full,isFullHeight:l}=e,d=(0,a.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,s.i)(o.Z.emptyState,"xs"===c&&o.Z.modifiers.xs,"small"===c&&o.Z.modifiers.sm,"large"===c&&o.Z.modifiers.lg,"xl"===c&&o.Z.modifiers.xl,l&&o.Z.modifiers.fullHeight,n)},d),i.createElement("div",{className:(0,s.i)(o.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>o});var r=n(70655),a=n(92950),i=n(38296),s=n(51203);const o=e=>{var{children:t,className:n=""}=e,o=(0,r.__rest)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.emptyStateBody,n)},o),t)};o.displayName="EmptyStateBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>o});var r,a=n(70655),i=n(92950),s=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const o=e=>{var{children:t=null,className:n="",component:o=r.ul}=e,c=(0,a.__rest)(e,["children","className","component"]);const l=o;return i.createElement(l,Object.assign({},c,{className:(0,s.i)(n)}),t)};o.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>o,v:()=>r});var r,a=n(70655),i=n(92950),s=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const o=e=>{var{children:t=null,className:n="",component:o=r.li}=e,c=(0,a.__rest)(e,["children","className","component"]);const l=o;return i.createElement(l,Object.assign({},c,{className:(0,s.i)(n)}),t)};o.displayName="TextListItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(81320);const r={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i});var r=n(17558),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){return{type:r.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),a=n(94184),i=n.n(a),s=n(92950);const o=n.n(s)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),s=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var l=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",c({},a,{className:"".concat(s," ").concat(l),"widget-type":"InsightsPageHeader"},{children:n}))}})}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(87462),a=n(45987),i=n(92950),s=n.n(i),o=n(75662),c=n(50533),l=n(45697),d=n.n(l),p=n(94474),u=n(47173),f=n(9947),m=n(75106),y=n(38424),v=n(38779),g=n(96733),b=n(94471),h=function(e){var t=e.inventoryId,n=e.onBackToListClick;return s().createElement(f.u,{variant:f.I.full},s().createElement(y.k,{icon:g.ZP}),s().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),s().createElement(m.B,null,"System with ID ",t," does not exist"),s().createElement(u.zx,{variant:"primary",onClick:function(){return(0,b.h)(t,n)}},"Back to previous page"))};h.propTypes={inventoryId:d().string,onBackToListClick:d().func};const E=h;var O=n(73880),I=n(83215),_=n(29439),S=n(4942),T=n(37619),L=n(28883),P=n(79770),Z=n(35262),w=n(96396),N=n(85893),j=n(48542),D=n(56989),R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},R.apply(this,arguments)};const A=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,r=e.bodyText,a=void 0===r?"To get started, activate the Insights client for this system.":r,i=e.buttonText,s=void 0===i?"Learn how to activate the Insights client":i;return(0,N.jsxs)(j.EmptyState,{children:[(0,N.jsx)(j.EmptyStateIcon,{icon:D.DisconnectedIcon}),(0,N.jsx)(j.Title,R({headingLevel:"h5",size:"lg"},{children:n})),(0,N.jsx)(j.EmptyStateBody,{children:a}),(0,N.jsx)(j.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:s}))]})};var F=n(13784),C=["onTabSelect","appList","activeApp","inventoryId","entity"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t,n=e.onTabSelect,o=e.appList,l=e.activeApp,d=e.inventoryId,p=e.entity,u=(0,a.Z)(e,C),f=(0,c.useStore)(),m=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||o||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return k(k({},e),{},{tabRef:s().createRef()})}))})),y=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),v=(0,i.useState)(m),g=(0,_.Z)(v,2),h=g[0],E=g[1],O=(0,i.useState)(l||(null==m||null===(t=m[0])||void 0===t?void 0:t.name)),I=(0,_.Z)(O,2),S=I[0],N=I[1],j=(0,b.s)("per_reporter_staleness",p);(0,i.useEffect)((function(){var e=m.filter((function(e){return!(null!=y&&y.includes(e.name))}));E(0!==e&&void 0!==e?e:m)}),[y]);var D=(0,i.useMemo)((function(){return(0,w.vJ)(j,F.Kq)}),[S]),R=(0,i.useMemo)((function(){var e=!(null==j||!j[F.SM]||(0,w.vJ)(j,F.SM));return!(null==j||!j[F.X4])&&e}),[S]);return s().createElement(s().Fragment,null,s().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},s().createElement(Z.m,(0,r.Z)({},u,{activeKey:S,onSelect:function(e,t){var r=h.find((function(e){return e.name===t}));n&&n(e,t,r.name||t),N(r.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==h?void 0:h.map((function(e,t){return s().createElement(L.O,(0,r.Z)({key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef},e))})))),s().createElement("section",null,(null==h?void 0:h.length)&&(null==h?void 0:h.map((function(e){var t=e.component;return s().createElement(P.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===S&&s().createElement(i.Suspense,{fallback:T.$},s().createElement("section",{className:"pf-c-page__main-section"},function(e){return e===F.OG&&D||e===F.Gy&&!R&&D||e===F.qy&&!R&&D}(S)?s().createElement(A,null):s().createElement(t,(0,r.Z)({inventoryId:d,store:f},e)))))})))))};B.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired,entity:d().object};const M=B;var G=n(8454),H=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],W=["inventoryId"],z=function(e){var t=e.showTags,n=e.onTabSelect,o=e.onBackToListClick,l=e.inventoryId,d=(e.additionalClasses,e.activeApp),u=e.appList,f=e.showMainSection,m=(0,a.Z)(e,H),y=(0,c.useDispatch)(),v=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){g&&(null==g?void 0:g.id)===l&&v||y((0,p.A_)(l,{hasItems:!0},{showTags:t}))}),[]),s().createElement("div",{className:"ins-entity-detail"},v&&!g?s().createElement(E,{onBackToListClick:o,inventoryId:l}):s().createElement(s().Fragment,null,s().createElement(G.Z,(0,r.Z)({entity:g,loaded:v,onBackToListClick:o,deleteEntity:function(e,t,n){var r=(0,p.Ks)(e,t);y((0,O.reloadWrapper)(r,n))},addNotification:function(e){return y((0,I.wN)(e))},showTags:t},m)),f&&s().createElement(M,{onTabSelect:n,activeApp:d,appList:u,inventoryId:l,entity:g})))};z.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},z.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var Y=function(e){var t=e.inventoryId,n=(0,a.Z)(e,W),i=(0,o.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),s().createElement(z,(0,r.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};Y.propTypes=z.propTypes;const U=Y},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>v.aI,CHANGE_SORT:()=>v.WH,CLEAR_ENTITIES:()=>v.g1,CLEAR_FILTERS:()=>v.Gs,CLEAR_NOTIFICATIONS:()=>v.wt,CONFIG_CHANGED:()=>v.Uq,ENTITIES_LOADING:()=>v.jZ,FILTER_ENTITIES:()=>v.lP,FILTER_SELECT:()=>v.hI,INVENTORY_ACTION_TYPES:()=>v.AL,SELECT_ENTITY:()=>v.pr,SET_ANSIBLE_HOST:()=>v.Bh,SET_DISPLAY_NAME:()=>v.Ti,SET_INVENTORY_FILTER:()=>v.uW,SET_PAGINATION:()=>v.fT,SHOW_ENTITIES:()=>v.u4,SYSTEM_ISSUE_TYPES:()=>v.dF,TOGGLE_DRAWER:()=>v.Ji,TOGGLE_TAG_MODAL:()=>v.Qd,UPDATE_ENTITIES:()=>v.s$,asyncActions:()=>v.zW,asyncInventory:()=>v.gl,clearEntitiesAction:()=>y.s$,clearFilters:()=>y.K5,clearNotifications:()=>y.L1,configChanged:()=>y.u3,deleteEntity:()=>y.Ks,editAnsibleHost:()=>y.Uw,editDisplayName:()=>y.$Y,entitesDetailReducer:()=>m.CB,entitiesLoading:()=>y.nE,entitiesReducer:()=>m.zw,entityDetailsReducer:()=>m.gA,fetchAllTags:()=>y.C8,fetchGroupDetail:()=>y.JM,fetchGroups:()=>y.bt,fetchGroupsForEntities:()=>y.d6,fetchOperatingSystems:()=>y.g6,filterEntities:()=>y.CP,filterSelect:()=>y.fg,getAdvisorData:()=>y.gb,getComplianceData:()=>y.Oj,getPatchData:()=>y.k0,getVulnData:()=>y.Fo,loadEntities:()=>y.il,loadEntity:()=>y.A_,loadTags:()=>y.me,mergeWithDetail:()=>m.OL,mergeWithEntities:()=>m.AF,selectEntity:()=>y.CL,setFilter:()=>y.Tv,setPagination:()=>y.Jr,setSort:()=>y.HD,systemIssues:()=>v.AN,systemProfile:()=>y.eR,tableReducer:()=>m.M,toggleDrawer:()=>y.wb,toggleTagModal:()=>y.Ar,updateEntities:()=>y.jB});var a=n(87462),i=n(4942),s=n(45987),o=n(92950),c=n.n(o),l=n(45697),d=n.n(l),p=n(50533),u=n(75662),f=n(371),m=n(81730),y=n(94474),v=n(59086),g=n(73880),b=n(34655),h=n(454),E=["component","onLoad","store","history","innerRef"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=m.OL,S=(0,s.Z)(r,["mergeWithDetail"]),T=function(e){var t=e.component,n=e.onLoad,r=e.store,i=e.history,l=e.innerRef,d=(0,s.Z)(e,E);return(0,o.useEffect)((function(){null==n||n(I(I(I({},S),g),{},{api:b,mergeWithDetail:_}))}),[]),c().createElement(f.r,{appName:"inventory",checkResourceDefinitions:!0},c().createElement(p.Provider,{store:r},c().createElement(u.Router,{history:i},c().createElement(h.Z,(0,a.Z)({},d,{isRbacEnabled:!0,inventoryRef:l,store:r,cmp:t})))))};T.propTypes={store:d().object,onLoad:d().func,component:d().elementType.isRequired,history:d().object,innerRef:d().shape({current:d().any})},T.defaultProps={onLoad:function(){}};const L=T},30898:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(87462),a=n(92950),i=n.n(a),s=n(39142),o=n(61013),c=function(e){return i().createElement(s.Z,(0,r.Z)({},e,{component:o.Z}))};const l=i().forwardRef((function(e,t){return i().createElement(c,(0,r.Z)({},e,{innerRef:t}))}))},81730:(e,t,n)=>{"use strict";n.d(t,{AF:()=>O,CB:()=>E,M:()=>h,OL:()=>I,ZP:()=>_,gA:()=>p.ZP,zw:()=>d.ZP});var r,a=n(4942),i=n(59086),s=n(57785),o=n(18546),c=n(35240),l=n(83215),d=n(21216),p=n(48536),u=n(34150),f=n(52987);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={loaded:!1,selected:new Map};function g(e){return y(y({},e),{},{loaded:!0})}var b={notifications:l.ee,systemProfileStore:s.default,groups:u.Z,groupDetail:f.Z},h=(0,o.Gg)((r={},(0,a.Z)(r,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return y(y({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})})),(0,a.Z)(r,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload,r=t.meta;return(null==r?void 0:r.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:y(y({},e),{},{rows:(0,c.r0)([e.rows,n.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,a.Z)(r,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),y(y({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,i.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(Array.isArray(n.id))n.id.forEach((function(e){r.set(e.id,e)}));else if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,y(y({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return y(y({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,a.Z)(r,i.uW,(function(e,t){var n=t.payload;return y(y({},e),{},{activeFilters:n.filtersList})})),(0,a.Z)(r,i.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),a=parseInt(n.page,10);return y(y({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(a)?1:a})})),(0,a.Z)(r,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),r),v),E=function(){return(0,o.Gg)((0,a.Z)({},i.AL.LOAD_ENTITY_FULFILLED,g),v)};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return y({},e(y({},(0,o.Gg)(y({},d.ZP),y(y({},d.W2),t))(n,r)),r))}}}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return y({},e(y({},(0,o.Gg)(y({},p.ZP),y(y({},p.PY),t))(n,r)),r))}}}const _=b},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>m,default:()=>g,defaultState:()=>d,formatBytes:()=>u,onSystemProfile:()=>v,sizes:()=>p,systemProfilePending:()=>f});var r,a=n(93433),i=n(4942),s=n(18546),o=n(59086);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],u=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function f(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function m(e){return e&&e.reduce((function(e,t){return l(l({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function v(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},i=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,a.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:l(l({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&u(r.system_memory_bytes),repositories:m(r.yum_repos),network:y(r.network_interfaces)})})}const g=(0,s.Gg)((r={},(0,i.Z)(r,o.aI.LOAD_SYSTEM_PROFILE_FULFILLED,v),(0,i.Z)(r,o.aI.LOAD_SYSTEM_PROFILE_PENDING,f),r),{systemProfile:d})},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./InventoryDetail.c2aef284e7ab2958376b152e9263b8a6.js.map