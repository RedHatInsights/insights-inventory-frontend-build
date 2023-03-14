(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9170],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>c,Z:()=>l});var r=n(70655),a=n(92950),i=n(54918),o=n(38296),s=n(62472);const c=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),l=e=>{var{children:t=null,id:n="",className:d="",component:p="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:y=!1,isFlat:b=!1,isExpanded:h=!1,isRounded:E=!1,isLarge:O=!1,isFullHeight:I=!1,isPlain:S=!1,ouiaId:T,ouiaSafe:P=!0,hasSelectableInput:_=!1,selectableInputAriaLabel:Z,onSelectableInputChange:L=(()=>{})}=e,w=(0,r.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const N=p,D=(0,s.S$)(l.displayName,T,P),[R,A]=a.useState(""),[C,j]=a.useState();f&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const F=a.useRef(!1);return a.useEffect((()=>{Z?j({"aria-label":Z}):R?j({"aria-labelledby":R}):_&&!F.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[_,Z,R]),a.createElement(c.Provider,{value:{cardId:n,registerTitleId:e=>{A(e),F.current=!!e},isExpanded:h}},_&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},C,{type:"checkbox",checked:g,onChange:e=>L(n,e),disabled:y,tabIndex:-1})),a.createElement(N,Object.assign({id:n,className:(0,o.i)(i.Z.card,f&&i.Z.modifiers.compact,h&&i.Z.modifiers.expanded,b&&i.Z.modifiers.flat,E&&i.Z.modifiers.rounded,O&&i.Z.modifiers.displayLg,I&&i.Z.modifiers.fullHeight,S&&i.Z.modifiers.plain,y?(0,o.i)(i.Z.modifiers.nonSelectableRaised):v?(0,o.i)(i.Z.modifiers.selectableRaised,g&&i.Z.modifiers.selectedRaised):m||u?(0,o.i)(i.Z.modifiers.selectable,g&&i.Z.modifiers.selected):"",d),tabIndex:m||v?"0":void 0},w,D),t))};l.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var r=n(70655),a=n(92950),i=n(54918),o=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:c=!0}=e,l=(0,r.__rest)(e,["children","className","component","isFilled"]);const d=s;return a.createElement(d,Object.assign({className:(0,o.i)(i.Z.cardBody,!c&&i.Z.modifiers.noFill,n)},l),t)};s.displayName="CardBody"},75728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(70655),a=n(92950),i=n(5964),o=n(1024),s=n(73699),c=n(99355),l=n(38296),d=n(62472);const p=e=>{var{id:t="",children:n=null,className:u="",isOpen:f=!1,parentRef:m=null,getMenuRef:v=null,isDisabled:g=!1,isPlain:y=!1,isText:b=!1,isPrimary:h=!1,toggleVariant:E="default",isActive:O=!1,onToggle:I=(e=>{}),icon:S=null,toggleIndicator:T=i.ZP,splitButtonItems:P,splitButtonVariant:_="checkbox","aria-haspopup":Z,ouiaId:L,ouiaSafe:w,ref:N}=e,D=(0,r.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const R=(0,d.S$)(p.displayName,L,w),A=a.createElement(c.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:r,toggleIconClass:i})=>a.createElement(o.Z,Object.assign({},D,{id:t,className:u,isOpen:f,parentRef:m,getMenuRef:v,isActive:O,isDisabled:g,isPlain:y,isText:b,isPrimary:h,toggleVariant:E,onToggle:I,"aria-haspopup":Z},R,P&&{isSplitButton:!0,"aria-label":D["aria-label"]||"Select"}),S&&a.createElement("span",{className:(0,l.i)(i)},S),n&&a.createElement("span",{className:T&&(0,l.i)(e)},n),T&&a.createElement("span",{className:(0,l.i)(!P&&r)},a.createElement(T,null)))));return P?a.createElement("div",{className:(0,l.i)(s.Z.dropdownToggle,s.Z.modifiers.splitButton,"action"===_&&s.Z.modifiers.action,("primary"===E||h)&&"action"===_&&s.Z.modifiers.primary,"secondary"===E&&"action"===_&&s.Z.modifiers.secondary,g&&s.Z.modifiers.disabled)},P,A):A};p.displayName="DropdownToggle"},9947:(e,t,n)=>{"use strict";n.d(t,{I:()=>r,u:()=>c});var r,a=n(70655),i=n(92950),o=n(38296),s=n(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(r||(r={}));const c=e=>{var{children:t,className:n="",variant:c=r.full,isFullHeight:l}=e,d=(0,a.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,o.i)(s.Z.emptyState,"xs"===c&&s.Z.modifiers.xs,"small"===c&&s.Z.modifiers.sm,"large"===c&&s.Z.modifiers.lg,"xl"===c&&s.Z.modifiers.xl,l&&s.Z.modifiers.fullHeight,n)},d),i.createElement("div",{className:(0,o.i)(s.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,n)=>{"use strict";n.d(t,{B:()=>s});var r=n(70655),a=n(92950),i=n(38296),o=n(51203);const s=e=>{var{children:t,className:n=""}=e,s=(0,r.__rest)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,i.i)(o.Z.emptyStateBody,n)},s),t)};s.displayName="EmptyStateBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>s});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.ul}=e,c=(0,a.__rest)(e,["children","className","component"]);const l=s;return i.createElement(l,Object.assign({},c,{className:(0,o.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>r});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.li}=e,c=(0,a.__rest)(e,["children","className","component"]);const l=s;return i.createElement(l,Object.assign({},c,{className:(0,o.i)(n)}),t)};s.displayName="TextListItem"},71973:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>o,fP:()=>i,gk:()=>a});var r=n(40400);const a={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},5964:(e,t,n)=>{"use strict";n.d(t,{VA:()=>i,ZP:()=>o,kc:()=>a});var r=n(40400);const a={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},98614:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>o,de:()=>a,nQ:()=>i});var r=n(40400);const a={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(81320);const r={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i});var r=n(17558),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){return{type:r.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},71330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(87462),a=n(45987),i=n(92950),o=n.n(i),s=n(75662),c=n(50533),l=n(45697),d=n.n(l),p=n(3672),u=n(9947),f=n(38424),m=n(75106),v=n(38779),g=n(47173),y=n(96733),b=n(94471),h=function(e){var t=e.inventoryId,n=e.onBackToListClick;return o().createElement(u.u,{variant:u.I.full},o().createElement(f.k,{icon:y.ZP}),o().createElement(v.D,{headingLevel:"h5",size:"lg"},"System not found"),o().createElement(m.B,null,"System with ID ",t," does not exist"),o().createElement(g.zx,{variant:"primary",onClick:function(){return(0,b.h)(t,n)}},"Back to previous page"))};h.propTypes={inventoryId:d().string,onBackToListClick:d().func};const E=h;var O=n(73880),I=n(83215),S=n(71002),T=n(29439),P=n(4942),_=n(35262),Z=n(28883),L=n(37619),w=n(79770),N=["onTabSelect","appList","activeApp","inventoryId"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,P.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t,n=e.onTabSelect,s=e.appList,l=e.activeApp,d=e.inventoryId,p=(0,a.Z)(e,N),u=(0,c.useStore)(),f=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||s||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return R(R({},e),{},{tabRef:o().createRef()})}))})),m=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),v=(0,i.useState)(f),g=(0,T.Z)(v,2),y=g[0],b=g[1],h=(0,i.useState)(l||(null==f||null===(t=f[0])||void 0===t?void 0:t.name)),E=(0,T.Z)(h,2),O=E[0],I=E[1];return(0,i.useEffect)((function(){var e=f.filter((function(e){return!(null!=m&&m.includes(e.name))}));0!==e&&void 0!==(0,S.Z)(e)?b(e):b(f)}),[m]),o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},o().createElement(_.m,(0,r.Z)({},p,{activeKey:O,onSelect:function(e,t){var r=y.find((function(e){return e.name===t}));n&&n(e,t,r.name||t),I(r.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==y?void 0:y.map((function(e,t){return o().createElement(Z.O,{key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef})})))),o().createElement("section",null,(null==y?void 0:y.length)&&(null==y?void 0:y.map((function(e){var t=e.component;return o().createElement(w.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===O&&o().createElement(i.Suspense,{fallback:L.$},o().createElement("section",{className:"pf-c-page__main-section"},o().createElement(t,{inventoryId:d,store:u}))))})))))};A.propTypes={appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string})),onTabSelect:d().func,activeApp:d().string.isRequired,inventoryId:d().string.isRequired};const C=A;var j=n(8454),F=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],k=["inventoryId"],x=function(e){var t=e.showTags,n=e.onTabSelect,s=e.onBackToListClick,l=e.inventoryId,d=(e.additionalClasses,e.activeApp),u=e.appList,f=e.showMainSection,m=(0,a.Z)(e,F),v=(0,c.useDispatch)(),g=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),y=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){y&&(null==y?void 0:y.id)===l&&g||v((0,p.A_)(l,{hasItems:!0},{showTags:t}))}),[]),o().createElement("div",{className:"ins-entity-detail"},g&&!y?o().createElement(E,{onBackToListClick:s,inventoryId:l}):o().createElement(o().Fragment,null,o().createElement(j.Z,(0,r.Z)({entity:y,loaded:g,onBackToListClick:s,deleteEntity:function(e,t,n){var r=(0,p.Ks)(e,t);v((0,O.reloadWrapper)(r,n))},addNotification:function(e){return v((0,I.wN)(e))},showTags:t},m)),f&&o().createElement(C,{onTabSelect:n,activeApp:d,appList:u,inventoryId:l})))};x.propTypes={showTags:d().bool,onTabSelect:d().func,onBackToListClick:d().func,inventoryId:d().string,additionalClasses:d().object,activeApp:d().string,appList:d().arrayOf(d().shape({title:d().node,name:d().string.isRequired,pageId:d().string}))},x.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var M=function(e){var t=e.inventoryId,n=(0,a.Z)(e,k),i=(0,s.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),o().createElement(x,(0,r.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};M.propTypes=x.propTypes;const B=M},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>g.aI,CHANGE_SORT:()=>g.WH,CLEAR_FILTERS:()=>g.Gs,CLEAR_NOTIFICATIONS:()=>g.wt,CONFIG_CHANGED:()=>g.Uq,ENTITIES_LOADING:()=>g.jZ,FILTER_ENTITIES:()=>g.lP,FILTER_SELECT:()=>g.hI,INVENTORY_ACTION_TYPES:()=>g.AL,SELECT_ENTITY:()=>g.pr,SET_ANSIBLE_HOST:()=>g.Bh,SET_DISPLAY_NAME:()=>g.Ti,SET_INVENTORY_FILTER:()=>g.uW,SET_PAGINATION:()=>g.fT,SHOW_ENTITIES:()=>g.u4,SYSTEM_ISSUE_TYPES:()=>g.dF,TOGGLE_DRAWER:()=>g.Ji,TOGGLE_TAG_MODAL:()=>g.Qd,UPDATE_ENTITIES:()=>g.s$,asyncActions:()=>g.zW,asyncInventory:()=>g.gl,clearFilters:()=>v.K5,clearNotifications:()=>v.L1,configChanged:()=>v.u3,deleteEntity:()=>v.Ks,editAnsibleHost:()=>v.Uw,editDisplayName:()=>v.$Y,entitesDetailReducer:()=>m.CB,entitiesLoading:()=>v.nE,entitiesReducer:()=>m.zw,entityDetailsReducer:()=>m.gA,fetchAllTags:()=>v.C8,fetchGroupDetail:()=>v.JM,fetchGroups:()=>v.bt,fetchOperatingSystems:()=>v.g6,filterEntities:()=>v.CP,filterSelect:()=>v.fg,getAdvisorData:()=>v.gb,getComplianceData:()=>v.Oj,getPatchData:()=>v.k0,getVulnData:()=>v.Fo,loadEntities:()=>v.il,loadEntity:()=>v.A_,loadTags:()=>v.me,mergeWithDetail:()=>m.OL,mergeWithEntities:()=>m.AF,selectEntity:()=>v.CL,setFilter:()=>v.Tv,setPagination:()=>v.Jr,setSort:()=>v.HD,systemIssues:()=>g.AN,systemProfile:()=>v.eR,tableReducer:()=>m.M,toggleDrawer:()=>v.wb,toggleTagModal:()=>v.Ar,updateEntities:()=>v.jB});var a=n(87462),i=n(4942),o=n(45987),s=n(92950),c=n.n(s),l=n(45697),d=n.n(l),p=n(50533),u=n(75662),f=n(371),m=n(81730),v=n(3672),g=n(59086),y=n(73880),b=n(34655),h=n(454),E=["component","onLoad","store","history","innerRef"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=m.OL,T=(0,o.Z)(r,["mergeWithDetail"]),P=function(e){var t=e.component,n=e.onLoad,r=e.store,i=e.history,l=e.innerRef,d=(0,o.Z)(e,E);return(0,s.useEffect)((function(){null==n||n(I(I(I({},T),y),{},{api:b,mergeWithDetail:S}))}),[]),c().createElement(f.r,{appName:"inventory"},c().createElement(p.Provider,{store:r},c().createElement(u.Router,{history:i},c().createElement(h.Z,(0,a.Z)({},d,{isRbacEnabled:!0,inventoryRef:l,store:r,cmp:t})))))};P.propTypes={store:d().object,onLoad:d().func,component:d().elementType.isRequired,history:d().object,innerRef:d().shape({current:d().any})},P.defaultProps={onLoad:function(){}};const _=P},79680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(87462),a=n(92950),i=n.n(a),o=n(39142),s=n(71330),c=function(e){return i().createElement(o.Z,(0,r.Z)({},e,{component:s.Z}))};const l=i().forwardRef((function(e,t){return i().createElement(c,(0,r.Z)({},e,{innerRef:t}))}))},81730:(e,t,n)=>{"use strict";n.d(t,{AF:()=>I,CB:()=>O,M:()=>E,OL:()=>S,ZP:()=>T,gA:()=>p.ZP,zw:()=>d.ZP});var r,a=n(4942),i=n(59086),o=n(57785),s=n(18546),c=n(35240),l=n(83215),d=n(21216),p=n(48536),u=n(34150),f=n(52987);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={loaded:!1,selected:new Map};function y(e){return v(v({},e),{},{loaded:!0})}function b(e,t){var n,r=t.payload;return v(v({},e),{},{activeApps:null===(n=e.activeApps)||void 0===n?void 0:n.map((function(e){return"ros"===e.name?v(v({},e),{},{isVisible:r}):e}))})}var h={notifications:l.ee,systemProfileStore:o.default,groups:u.Z,groupDetail:f.Z},E=(0,s.Gg)((r={},(0,a.Z)(r,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return v(v({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})})),(0,a.Z)(r,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload,r=t.meta;return(null==r?void 0:r.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:v(v({},e),{},{rows:(0,c.r0)([e.rows,n.results.map((function(t){return v(v({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,a.Z)(r,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),v(v({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,i.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,v(v({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return v(v({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,"FILTER_SELECT",(function(e){return v(v({},e),{},{selected:{}})})),(0,a.Z)(r,i.uW,(function(e,t){var n=t.payload;return v(v({},e),{},{activeFilters:n.filtersList})})),(0,a.Z)(r,i.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),a=parseInt(n.page,10);return v(v({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(a)?1:a})})),(0,a.Z)(r,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),r),g),O=function(){var e;return(0,s.Gg)((e={},(0,a.Z)(e,i.AL.LOAD_ENTITY_FULFILLED,y),(0,a.Z)(e,i.AL.LOAD_SYSTEM_PROFILE_FULFILLED,b),e),g)};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return v({},e(v({},(0,s.Gg)(v({},d.ZP),v(v({},d.W2),t))(n,r)),r))}}}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return v({},e(v({},(0,s.Gg)(v({},p.ZP),v(v({},p.PY),t))(n,r)),r))}}}const T=h},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>v,calculateRepos:()=>m,default:()=>y,defaultState:()=>d,formatBytes:()=>u,onSystemProfile:()=>g,sizes:()=>p,systemProfilePending:()=>f});var r,a=n(93433),i=n(4942),o=n(18546),s=n(59086);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],u=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function f(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function m(e){return e&&e.reduce((function(e,t){return l(l({},e),t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function v(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function g(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},i=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,a.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:l(l({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&u(r.system_memory_bytes),repositories:m(r.yum_repos),network:v(r.network_interfaces)})})}const y=(0,o.Gg)((r={},(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,g),(0,i.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,f),r),{systemProfile:d})},94654:(e,t,n)=>{var r=n(21078),a=n(35161);e.exports=function(e,t){return r(a(e,t),1)}},36494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(87462),a=n(63366),i=n(26685),o=n(35067),s=n(63480),c=n(26343);const l=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,c.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],d=[function(e){return"function"==typeof e?(0,c.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,c.dX)((function(){return{}}))}];function p(e,t,n){return(0,r.Z)({},n,e,t)}const u=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,a=n.pure,i=n.areMergedPropsEqual,o=!1;return function(t,n,s){var c=e(t,n,s);return o?a&&i(c,r)||(r=c):(o=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return p}}];var f=n(38548),m=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(e,t,n){for(var r=t.length-1;r>=0;r--){var a=t[r](e);if(a)return a}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function g(e,t){return e===t}function y(e){var t=void 0===e?{}:e,n=t.connectHOC,s=void 0===n?i.Z:n,c=t.mapStateToPropsFactories,p=void 0===c?d:c,y=t.mapDispatchToPropsFactories,b=void 0===y?l:y,h=t.mergePropsFactories,E=void 0===h?u:h,O=t.selectorFactory,I=void 0===O?f.ZP:O;return function(e,t,n,i){void 0===i&&(i={});var c=i,l=c.pure,d=void 0===l||l,u=c.areStatesEqual,f=void 0===u?g:u,y=c.areOwnPropsEqual,h=void 0===y?o.Z:y,O=c.areStatePropsEqual,S=void 0===O?o.Z:O,T=c.areMergedPropsEqual,P=void 0===T?o.Z:T,_=(0,a.Z)(c,m),Z=v(e,p,"mapStateToProps"),L=v(t,b,"mapDispatchToProps"),w=v(n,E,"mergeProps");return s(I,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:Z,initMapDispatchToProps:L,initMergeProps:w,pure:d,areStatesEqual:f,areOwnPropsEqual:h,areStatePropsEqual:S,areMergedPropsEqual:P},_))}}const b=y()},50533:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Provider:()=>r.zt,ReactReduxContext:()=>r.ET,batch:()=>a.m,connect:()=>r.$j,connectAdvanced:()=>r.e$,createDispatchHook:()=>r.AS,createSelectorHook:()=>r.gR,createStoreHook:()=>r.fw,shallowEqual:()=>r.wU,useDispatch:()=>r.I0,useSelector:()=>r.v9,useStore:()=>r.oR});var r=n(67133),a=n(71679);(0,n(9256).F)(a.m)},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9170.cbe9fd3084cab37063750530a94da086.js.map