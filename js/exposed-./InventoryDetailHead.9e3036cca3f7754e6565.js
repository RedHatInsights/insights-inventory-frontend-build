(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3426],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>c,Z:()=>l});var r=n(70655),a=n(92950),i=n(54918),s=n(38296),o=n(62472);const c=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),l=e=>{var{children:t=null,id:n="",className:d="",component:p="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:y=!1,isSelected:v=!1,isDisabledRaised:g=!1,isFlat:b=!1,isExpanded:h=!1,isRounded:E=!1,isLarge:O=!1,isFullHeight:I=!1,isPlain:_=!1,ouiaId:S,ouiaSafe:T=!0,hasSelectableInput:L=!1,selectableInputAriaLabel:P,onSelectableInputChange:Z=(()=>{})}=e,w=(0,r.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const N=p,j=(0,o.S$)(l.displayName,S,T),[D,A]=a.useState(""),[R,F]=a.useState();f&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const C=a.useRef(!1);return a.useEffect((()=>{P?F({"aria-label":P}):D?F({"aria-labelledby":D}):L&&!C.current&&(F({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[L,P,D]),a.createElement(c.Provider,{value:{cardId:n,registerTitleId:e=>{A(e),C.current=!!e},isExpanded:h}},L&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},R,{type:"checkbox",checked:v,onChange:e=>Z(n,e),disabled:g,tabIndex:-1})),a.createElement(N,Object.assign({id:n,className:(0,s.i)(i.Z.card,f&&i.Z.modifiers.compact,h&&i.Z.modifiers.expanded,b&&i.Z.modifiers.flat,E&&i.Z.modifiers.rounded,O&&i.Z.modifiers.displayLg,I&&i.Z.modifiers.fullHeight,_&&i.Z.modifiers.plain,g?(0,s.i)(i.Z.modifiers.nonSelectableRaised):y?(0,s.i)(i.Z.modifiers.selectableRaised,v&&i.Z.modifiers.selectedRaised):m||u?(0,s.i)(i.Z.modifiers.selectable,v&&i.Z.modifiers.selected):"",d),tabIndex:m||y?"0":void 0},w,j),t))};l.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>o});var r=n(70655),a=n(92950),i=n(54918),s=n(38296);const o=e=>{var{children:t=null,className:n="",component:o="div",isFilled:c=!0}=e,l=(0,r.__rest)(e,["children","className","component","isFilled"]);const d=o;return a.createElement(d,Object.assign({className:(0,s.i)(i.Z.cardBody,!c&&i.Z.modifiers.noFill,n)},l),t)};o.displayName="CardBody"},9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>r,u:()=>c});var r,a=n(70655),i=n(92950),s=n(38296),o=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(r||(r={}));const c=e=>{var{children:t,className:n="",variant:c=r.full,isFullHeight:l}=e,d=(0,a.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,s.i)(o.Z.emptyState,"xs"===c&&o.Z.modifiers.xs,"small"===c&&o.Z.modifiers.sm,"large"===c&&o.Z.modifiers.lg,"xl"===c&&o.Z.modifiers.xl,l&&o.Z.modifiers.fullHeight,n)},d),i.createElement("div",{className:(0,s.i)(o.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>o});var r=n(70655),a=n(92950),i=n(38296),s=n(51203);const o=e=>{var{children:t,className:n=""}=e,o=(0,r.__rest)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.emptyStateBody,n)},o),t)};o.displayName="EmptyStateBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>c});var r,a=n(70655),i=n(92950),s=n(62873),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:c=r.ul,isPlain:l=!1}=e,d=(0,a.__rest)(e,["children","className","component","isPlain"]);const p=c;return i.createElement(p,Object.assign({},d,{className:(0,o.i)(l&&s.Z.modifiers.plain,n)}),t)};c.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>o,v:()=>r});var r,a=n(70655),i=n(92950),s=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const o=e=>{var{children:t=null,className:n="",component:o=r.li}=e,c=(0,a.__rest)(e,["children","className","component"]);const l=o;return i.createElement(l,Object.assign({},c,{className:(0,s.i)(n)}),t)};o.displayName="TextListItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(81320);const r={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i});var r=n(17558),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){return{type:r.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),a=n(94184),i=n.n(a),s=n(92950);const o=n.n(s)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),s=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var l=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",c({},a,{className:"".concat(s," ").concat(l),"widget-type":"InsightsPageHeader"},{children:n}))}})}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var r=n(87462),a=n(45987),i=n(92950),s=n.n(i),o=n(62012),c=n(60261),l=n(45697),d=n.n(l),p=n(94474),u=n(47173),f=n(9947),m=n(75106),y=n(38424),v=n(38779),g=n(96733),b=n(94471),h=n(76440),E=n.n(h),O=function(e){var t=e.inventoryId,n=e.onBackToListClick,r=E()();return s().createElement(f.u,{variant:f.I.full},s().createElement(y.k,{icon:g.ZP}),s().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),s().createElement(m.B,null,"System with ID ",t," does not exist"),s().createElement(u.zx,{variant:"primary",onClick:function(){return(0,b.h)(t,n,r)}},"Back to previous page"))};O.propTypes={inventoryId:d().string,onBackToListClick:d().func};const I=O;var _=n(73880),S=n(83215),T=n(29439),L=n(4942),P=n(37619),Z=n(28883),w=n(79770),N=n(35262),j=n(96396),D=n(85893),A=n(8213),R=n(64291),F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},F.apply(this,arguments)};const C=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,r=e.bodyText,a=void 0===r?"To get started, activate the Insights client for this system.":r,i=e.buttonText,s=void 0===i?"Learn how to activate the Insights client":i;return(0,D.jsxs)(A.EmptyState,{children:[(0,D.jsx)(A.EmptyStateIcon,{icon:R.DisconnectedIcon}),(0,D.jsx)(A.Title,F({headingLevel:"h5",size:"lg"},{children:n})),(0,D.jsx)(A.EmptyStateBody,{children:a}),(0,D.jsx)(A.Button,F({variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights/",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:s}))]})};var x=n(13784),k=["onTabSelect","appList","activeApp","inventoryId","entity"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,L.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){var t,n=e.onTabSelect,o=e.appList,l=e.activeApp,d=e.inventoryId,p=e.entity,u=(0,a.Z)(e,k),f=(0,c.useStore)(),m=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||o||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return M(M({},e),{},{tabRef:s().createRef()})}))})),y=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),v=(0,i.useState)(m),g=(0,T.Z)(v,2),h=g[0],E=g[1],O=(0,i.useState)(l||(null==m||null===(t=m[0])||void 0===t?void 0:t.name)),I=(0,T.Z)(O,2),_=I[0],S=I[1],L=(0,b.s)("per_reporter_staleness",p);(0,i.useEffect)((function(){var e,t=m.filter((function(e){return!(null!=y&&y.includes(e.name))}));E(0!==t&&void 0!==t?t:m),S(l||(null==m||null===(e=m[0])||void 0===e?void 0:e.name))}),[y,o]);var D=(0,i.useMemo)((function(){return(0,j.vJ)(L,x.Kq)}),[_]),A=(0,i.useMemo)((function(){var e=!(null==L||!L[x.SM]||(0,j.vJ)(L,x.SM));return!(null==L||!L[x.X4])&&e}),[_]);return s().createElement(s().Fragment,null,h.length>0?s().createElement(s().Fragment,null,s().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},s().createElement(N.m,(0,r.Z)({},u,{activeKey:_,onSelect:function(e,t){var r=h.find((function(e){return e.name===t}));n&&n(e,t,r.name||t),S(r.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==h?void 0:h.map((function(e,t){return s().createElement(Z.O,(0,r.Z)({key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef},e))})))),s().createElement("section",null,null==h?void 0:h.map((function(e){var t=e.component;return s().createElement(w.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===_&&s().createElement(i.Suspense,{fallback:P.$},s().createElement("section",{className:"pf-c-page__main-section"},function(e){return e===x.OG&&D||e===x.Gy&&!A&&D||e===x.qy&&!A&&D}(_)?s().createElement(C,null):s().createElement(t,(0,r.Z)({inventoryId:d,store:f},e)))))})))):s().createElement(P.$,null))};G.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired,entity:d().object};const H=G;var W=n(8454),z=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],Y=["inventoryId"],U=function(e){var t=e.showTags,n=e.onTabSelect,o=e.onBackToListClick,l=e.inventoryId,d=(e.additionalClasses,e.activeApp),u=e.appList,f=e.showMainSection,m=(0,a.Z)(e,z),y=(0,c.useDispatch)(),v=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){g&&(null==g?void 0:g.id)===l&&v||y((0,p.A_)(l,{hasItems:!0},{showTags:t}))}),[]),s().createElement("div",{className:"ins-entity-detail"},v&&!g?s().createElement(I,{onBackToListClick:o,inventoryId:l}):s().createElement(s().Fragment,null,s().createElement(W.Z,(0,r.Z)({entity:g,loaded:v,onBackToListClick:o,deleteEntity:function(e,t,n){var r=(0,p.Ks)(e,t);y((0,_.reloadWrapper)(r,n))},addNotification:function(e){return y((0,S.wN)(e))},showTags:t},m)),f&&s().createElement(H,{onTabSelect:n,activeApp:d,appList:u,inventoryId:l,entity:g})))};U.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},U.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var q=function(e){var t=e.inventoryId,n=(0,a.Z)(e,Y),i=(0,o.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),s().createElement(U,(0,r.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};q.propTypes=U.propTypes;const V=q},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>y.aI,CHANGE_SORT:()=>y.WH,CLEAR_ENTITIES:()=>y.g1,CLEAR_FILTERS:()=>y.Gs,CLEAR_NOTIFICATIONS:()=>y.wt,CONFIG_CHANGED:()=>y.Uq,ENTITIES_LOADING:()=>y.jZ,FILTER_ENTITIES:()=>y.lP,FILTER_SELECT:()=>y.hI,INVENTORY_ACTION_TYPES:()=>y.AL,SELECT_ENTITY:()=>y.pr,SET_ANSIBLE_HOST:()=>y.Bh,SET_DISPLAY_NAME:()=>y.Ti,SET_INVENTORY_FILTER:()=>y.uW,SET_PAGINATION:()=>y.fT,SHOW_ENTITIES:()=>y.u4,SYSTEM_ISSUE_TYPES:()=>y.dF,TOGGLE_DRAWER:()=>y.Ji,TOGGLE_TAG_MODAL:()=>y.Qd,UPDATE_ENTITIES:()=>y.s$,asyncActions:()=>y.zW,asyncInventory:()=>y.gl,clearEntitiesAction:()=>m.s$,clearFilters:()=>m.K5,clearNotifications:()=>m.L1,configChanged:()=>m.u3,deleteEntity:()=>m.Ks,editAnsibleHost:()=>m.Uw,editDisplayName:()=>m.$Y,entitesDetailReducer:()=>f.CB,entitiesLoading:()=>m.nE,entitiesReducer:()=>f.zw,entityDetailsReducer:()=>f.gA,fetchAllTags:()=>m.C8,fetchGroupDetail:()=>m.JM,fetchGroups:()=>m.bt,fetchGroupsForEntities:()=>m.d6,fetchOperatingSystems:()=>m.g6,filterEntities:()=>m.CP,filterSelect:()=>m.fg,getAdvisorData:()=>m.gb,getComplianceData:()=>m.Oj,getPatchData:()=>m.k0,getVulnData:()=>m.Fo,loadEntities:()=>m.il,loadEntity:()=>m.A_,loadTags:()=>m.me,mergeWithDetail:()=>f.OL,mergeWithEntities:()=>f.AF,selectEntity:()=>m.CL,setFilter:()=>m.Tv,setPagination:()=>m.Jr,setSort:()=>m.HD,systemIssues:()=>y.AN,systemProfile:()=>m.eR,tableReducer:()=>f.M,toggleDrawer:()=>m.wb,toggleTagModal:()=>m.Ar,updateEntities:()=>m.jB});var a=n(87462),i=n(4942),s=n(45987),o=n(92950),c=n.n(o),l=n(45697),d=n.n(l),p=n(60261),u=n(371),f=n(81730),m=n(94474),y=n(59086),v=n(73880),g=n(34655),b=n(454),h=["component","onLoad","store","innerRef"];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=f.OL,_=(0,s.Z)(r,["mergeWithDetail"]),S=function(e){var t=e.component,n=e.onLoad,r=e.store,i=e.innerRef,l=(0,s.Z)(e,h);return(0,o.useEffect)((function(){null==n||n(O(O(O({},_),v),{},{api:g,mergeWithDetail:I}))}),[]),c().createElement(u.r,{appName:"inventory",checkResourceDefinitions:!0},c().createElement(p.Provider,{store:r},c().createElement(b.Z,(0,a.Z)({},l,{isRbacEnabled:!0,inventoryRef:i,store:r,cmp:t}))))};S.propTypes={store:d().object,onLoad:d().func,component:d().elementType.isRequired,history:d().object,innerRef:d().shape({current:d().any})},S.defaultProps={onLoad:function(){}};const T=S},79680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(87462),a=n(92950),i=n.n(a),s=n(39142),o=n(61013),c=function(e){return i().createElement(s.Z,(0,r.Z)({},e,{component:o.Z}))};const l=i().forwardRef((function(e,t){return i().createElement(c,(0,r.Z)({},e,{innerRef:t}))}))},81730:(e,t,n)=>{"use strict";n.d(t,{AF:()=>O,CB:()=>E,M:()=>h,OL:()=>I,ZP:()=>_,gA:()=>p.ZP,zw:()=>d.ZP});var r,a=n(4942),i=n(59086),s=n(57785),o=n(18546),c=n(35240),l=n(83215),d=n(21216),p=n(48536),u=n(34150),f=n(52987);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={loaded:!1,selected:new Map};function g(e){return y(y({},e),{},{loaded:!0})}var b={notifications:l.ee,systemProfileStore:s.default,groups:u.Z,groupDetail:f.Z},h=(0,o.Gg)((r={},(0,a.Z)(r,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return y(y({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})})),(0,a.Z)(r,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n,r,a=t.payload,i=t.meta;return(null==i?void 0:i.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:!0===(null==i||null===(n=i.controller)||void 0===n||null===(r=n.signal)||void 0===r?void 0:r.aborted)?v:y(y({},e),{},{rows:(0,c.r0)([e.rows,a.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,a.Z)(r,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),y(y({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,i.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(Array.isArray(n.id))n.id.forEach((function(e){r.set(e.id,e)}));else if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,y(y({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return y(y({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,a.Z)(r,i.uW,(function(e,t){var n=t.payload;return y(y({},e),{},{activeFilters:n.filtersList})})),(0,a.Z)(r,i.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),a=parseInt(n.page,10);return y(y({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(a)?1:a})})),(0,a.Z)(r,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),r),v),E=function(){return(0,o.Gg)((0,a.Z)({},i.AL.LOAD_ENTITY_FULFILLED,g),v)};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return y({},e(y({},(0,o.Gg)(y({},d.ZP),y(y({},d.W2),t))(n,r)),r))}}}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return y({},e(y({},(0,o.Gg)(y({},p.ZP),y(y({},p.PY),t))(n,r)),r))}}}const _=b},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>m,default:()=>g,defaultState:()=>d,formatBytes:()=>u,onSystemProfile:()=>v,sizes:()=>p,systemProfilePending:()=>f});var r,a=n(93433),i=n(4942),s=n(18546),o=n(59086);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],u=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function f(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function m(e){return e&&e.reduce((function(e,t){return l(l({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function v(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},i=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,a.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:l(l({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&u(r.system_memory_bytes),repositories:m(r.yum_repos),network:y(r.network_interfaces)})})}const g=(0,s.Gg)((r={},(0,i.Z)(r,o.aI.LOAD_SYSTEM_PROFILE_FULFILLED,v),(0,i.Z)(r,o.aI.LOAD_SYSTEM_PROFILE_PENDING,f),r),{systemProfile:d})},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./InventoryDetailHead.d5be1cb3e95b0898207f69983ab438e3.js.map