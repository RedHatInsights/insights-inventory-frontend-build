(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5620],{41448:(e,t,a)=>{"use strict";a.d(t,{b:()=>T,U:()=>I});var n=a(70655),r=a(92950),i=a(38296);a(81754);const s={alert:"pf-c-alert",alertAction:"pf-c-alert__action",alertActionGroup:"pf-c-alert__action-group",alertDescription:"pf-c-alert__description",alertIcon:"pf-c-alert__icon",alertTitle:"pf-c-alert__title",alertToggle:"pf-c-alert__toggle",alertToggleIcon:"pf-c-alert__toggle-icon",button:"pf-c-button",modifiers:{success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"};var o=a(79818),l=a(68778),c=a(43047),d=a(69957),u=a(53688),p=a(34143);const f={success:l.ZP,danger:c.ZP,warning:d.ZP,info:u.ZP,default:p.ZP},m=e=>{var{variant:t,customIcon:a,className:o=""}=e,l=(0,n.__rest)(e,["variant","customIcon","className"]);const c=f[t];return c?r.createElement("div",Object.assign({},l,{className:(0,i.i)(s.alertIcon,o)}),a||r.createElement(c,null)):null};var g=a(80164),b=a(62472),v=a(21133);const E="--pf-c-alert__title--max-lines";var h=a(75824),y=a(47173),_=a(93174);const O=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:o,isExpanded:l=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:d,variantLabel:u}=r.useContext(v.w);return r.createElement(y.zx,Object.assign({variant:y.Wu.plain,onClick:o,"aria-expanded":l,"aria-label":""===t?`Toggle ${a||u} alert: ${d}`:t},c),r.createElement("span",{className:(0,i.i)(s.alertToggleIcon)},r.createElement(_.ZP,{"aria-hidden":"true"})))};var I;O.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(I||(I={}));const T=e=>{var{variant:t=I.default,isInline:a=!1,isPlain:l=!1,isLiveRegion:c=!1,variantLabel:d=`${(0,g.kC)(t)} alert:`,"aria-label":u=`${(0,g.kC)(t)} Alert`,actionClose:p,actionLinks:f,title:y,titleHeadingLevel:_,component:N="h4",children:L="",className:P="",ouiaId:S,ouiaSafe:Z=!0,timeout:w=!1,timeoutAnimation:D=3e3,onTimeout:A=(()=>{}),truncateTitle:j=0,tooltipPosition:R,customIcon:C,isExpandable:x=!1,toggleAriaLabel:F=`${(0,g.kC)(t)} alert details`,onMouseEnter:M=(()=>{}),onMouseLeave:k=(()=>{}),id:B}=e,G=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","titleHeadingLevel","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const H=(0,b.S$)(T.displayName,S,Z,t),Y=r.createElement(r.Fragment,null,r.createElement("span",{className:(0,i.i)(o.Z.screenReader)},d),y),V=r.useRef(null),$=_||N;void 0!==_&&console.warn("Alert: titleHeadingLevel is deprecated, please use the newer component prop instead to set the alert title element.");const U=r.useRef(),[W,q]=(0,r.useState)(!1);r.useEffect((()=>{if(!V.current||!j)return;V.current.style.setProperty(E,j.toString());const e=V.current&&V.current.offsetHeight<V.current.scrollHeight;W!==e&&q(e)}),[V,j,W]);const[z,J]=(0,r.useState)(!1),[K,Q]=(0,r.useState)(!0),[X,ee]=(0,r.useState)(),[te,ae]=(0,r.useState)(),ne=z&&K&&!X&&!te;r.useEffect((()=>{const e=!0===w?8e3:Number(w);if(e>0){const t=setTimeout((()=>J(!0)),e);return()=>clearTimeout(t)}}),[w]),r.useEffect((()=>{const e=()=>{U.current&&(U.current.contains(document.activeElement)?(ae(!0),Q(!1)):te&&ae(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[te]),r.useEffect((()=>{if(!1===te||!1===X){const e=setTimeout((()=>Q(!0)),D);return()=>clearTimeout(e)}}),[te,X,D]),r.useEffect((()=>{ne&&A()}),[ne,A]);const[re,ie]=(0,r.useState)(!1);if(ne)return null;const se=r.createElement($,Object.assign({},W&&{tabIndex:0},{ref:V,className:(0,i.i)(s.alertTitle,j&&s.modifiers.truncate)}),Y);return r.createElement("div",Object.assign({ref:U,className:(0,i.i)(s.alert,a&&s.modifiers.inline,l&&s.modifiers.plain,x&&s.modifiers.expandable,re&&s.modifiers.expanded,s.modifiers[t],P),"aria-label":u},H,c&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{ee(!0),Q(!1),M(e)},onMouseLeave:e=>{ee(!1),k(e)},id:B},G),x&&r.createElement(v.w.Provider,{value:{title:y,variantLabel:d}},r.createElement("div",{className:(0,i.i)(s.alertToggle)},r.createElement(O,{isExpanded:re,onToggleExpand:()=>{ie(!re)},"aria-label":F}))),r.createElement(m,{variant:t,customIcon:C}),W?r.createElement(h.u,{content:Y,position:R},se):se,p&&r.createElement(v.w.Provider,{value:{title:y,variantLabel:d}},r.createElement("div",{className:(0,i.i)(s.alertAction)},p)),L&&(!x||x&&re)&&r.createElement("div",{className:(0,i.i)(s.alertDescription)},L),f&&r.createElement("div",{className:(0,i.i)(s.alertActionGroup)},f))};T.displayName="Alert"},21133:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});const n=a(92950).createContext(null)},32203:(e,t,a)=>{"use strict";a.d(t,{H:()=>l,Z:()=>c});var n=a(70655),r=a(92950),i=a(54918),s=a(38296),o=a(62472);const l=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:a="",className:d="",component:u="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:g=!1,isSelected:b=!1,isDisabledRaised:v=!1,isFlat:E=!1,isExpanded:h=!1,isRounded:y=!1,isLarge:_=!1,isFullHeight:O=!1,isPlain:I=!1,ouiaId:T,ouiaSafe:N=!0,hasSelectableInput:L=!1,selectableInputAriaLabel:P,onSelectableInputChange:S=(()=>{})}=e,Z=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const w=u,D=(0,o.S$)(c.displayName,T,N),[A,j]=r.useState(""),[R,C]=r.useState();f&&_&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),_=!1);const x=r.useRef(!1);return r.useEffect((()=>{P?C({"aria-label":P}):A?C({"aria-labelledby":A}):L&&!x.current&&(C({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[L,P,A]),r.createElement(l.Provider,{value:{cardId:a,registerTitleId:e=>{j(e),x.current=!!e},isExpanded:h}},L&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${a}-input`},R,{type:"checkbox",checked:b,onChange:e=>S(a,e),disabled:v,tabIndex:-1})),r.createElement(w,Object.assign({id:a,className:(0,s.i)(i.Z.card,f&&i.Z.modifiers.compact,h&&i.Z.modifiers.expanded,E&&i.Z.modifiers.flat,y&&i.Z.modifiers.rounded,_&&i.Z.modifiers.displayLg,O&&i.Z.modifiers.fullHeight,I&&i.Z.modifiers.plain,v?(0,s.i)(i.Z.modifiers.nonSelectableRaised):g?(0,s.i)(i.Z.modifiers.selectableRaised,b&&i.Z.modifiers.selectedRaised):m||p?(0,s.i)(i.Z.modifiers.selectable,b&&i.Z.modifiers.selected):"",d),tabIndex:m||g?"0":void 0},Z,D),t))};c.displayName="Card"},62394:(e,t,a)=>{"use strict";a.d(t,{e:()=>o});var n=a(70655),r=a(92950),i=a(54918),s=a(38296);const o=e=>{var{children:t=null,className:a="",component:o="div",isFilled:l=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const d=o;return r.createElement(d,Object.assign({className:(0,s.i)(i.Z.cardBody,!l&&i.Z.modifiers.noFill,a)},c),t)};o.displayName="CardBody"},75728:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(70655),r=a(92950),i=a(5964),s=a(1024),o=a(73699),l=a(99355),c=a(38296),d=a(62472);const u=e=>{var{id:t="",children:a=null,className:p="",isOpen:f=!1,parentRef:m=null,getMenuRef:g=null,isDisabled:b=!1,isPlain:v=!1,isText:E=!1,isPrimary:h=!1,toggleVariant:y="default",isActive:_=!1,onToggle:O=(e=>{}),icon:I=null,toggleIndicator:T=i.ZP,splitButtonItems:N,splitButtonVariant:L="checkbox","aria-haspopup":P,ouiaId:S,ouiaSafe:Z,ref:w}=e,D=(0,n.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const A=(0,d.S$)(u.displayName,S,Z),j=r.createElement(l.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:n,toggleIconClass:i})=>r.createElement(s.Z,Object.assign({},D,{id:t,className:p,isOpen:f,parentRef:m,getMenuRef:g,isActive:_,isDisabled:b,isPlain:v,isText:E,isPrimary:h,toggleVariant:y,onToggle:O,"aria-haspopup":P},A,N&&{isSplitButton:!0,"aria-label":D["aria-label"]||"Select"}),I&&r.createElement("span",{className:(0,c.i)(i)},I),a&&r.createElement("span",{className:T&&(0,c.i)(e)},a),T&&r.createElement("span",{className:(0,c.i)(!N&&n)},r.createElement(T,null)))));return N?r.createElement("div",{className:(0,c.i)(o.Z.dropdownToggle,o.Z.modifiers.splitButton,"action"===L&&o.Z.modifiers.action,("primary"===y||h)&&"action"===L&&o.Z.modifiers.primary,"secondary"===y&&"action"===L&&o.Z.modifiers.secondary,b&&o.Z.modifiers.disabled)},N,j):j};u.displayName="DropdownToggle"},68340:(e,t,a)=>{"use strict";a.d(t,{q:()=>n,x:()=>c});var n,r=a(70655),i=a(92950),s=a(38296),o=a(62873),l=a(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(n||(n={}));const c=e=>{var{children:t=null,className:a="",component:d=n.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:f=!0}=e,m=(0,r.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=d,b=(0,l.S$)(c.displayName,p,f);return i.createElement(g,Object.assign({},b,m,{"data-pf-content":!0,className:(0,s.i)(u&&d===n.a&&o.Z.modifiers.visited,a)}),t)};c.displayName="Text"},68774:(e,t,a)=>{"use strict";a.d(t,{D:()=>o});var n=a(70655),r=a(92950),i=a(62873),s=a(38296);const o=e=>{var{children:t,className:a="",isVisited:o=!1}=e,l=(0,n.__rest)(e,["children","className","isVisited"]);return r.createElement("div",Object.assign({},l,{className:(0,s.i)(i.Z.content,o&&i.Z.modifiers.visited,a)}),t)};o.displayName="TextContent"},25834:(e,t,a)=>{"use strict";a.d(t,{F:()=>n,G:()=>l});var n,r=a(70655),i=a(92950),s=a(62873),o=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const l=e=>{var{children:t=null,className:a="",component:l=n.ul,isPlain:c=!1}=e,d=(0,r.__rest)(e,["children","className","component","isPlain"]);const u=l;return i.createElement(u,Object.assign({},d,{className:(0,o.i)(c&&s.Z.modifiers.plain,a)}),t)};l.displayName="TextList"},78140:(e,t,a)=>{"use strict";a.d(t,{T:()=>o,v:()=>n});var n,r=a(70655),i=a(92950),s=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const o=e=>{var{children:t=null,className:a="",component:o=n.li}=e,l=(0,r.__rest)(e,["children","className","component"]);const c=o;return i.createElement(c,Object.assign({},l,{className:(0,s.i)(a)}),t)};o.displayName="TextListItem"},54918:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(10108);const n={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},21458:(e,t,a)=>{"use strict";a.d(t,{wN:()=>i});var n=a(17558),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=function(e){return{type:n.Dv,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},89376:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(85893),r=a(94184),i=a.n(r),s=a(92950);const o=a.n(s)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["className","children"]),s=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var c=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,n.jsx)("section",l({},r,{className:"".concat(s," ").concat(c),"widget-type":"InsightsPageHeader"},{children:a}))}})}},39142:(e,t,a)=>{"use strict";a.d(t,{Z:()=>L});var n={};a.r(n),a.d(n,{ACTION_TYPES:()=>b.aI,CHANGE_SORT:()=>b.WH,CLEAR_ENTITIES:()=>b.g1,CLEAR_FILTERS:()=>b.Gs,CLEAR_NOTIFICATIONS:()=>b.wt,CONFIG_CHANGED:()=>b.Uq,ENTITIES_LOADING:()=>b.jZ,FILTER_ENTITIES:()=>b.lP,FILTER_SELECT:()=>b.hI,INVENTORY_ACTION_TYPES:()=>b.AL,SELECT_ENTITY:()=>b.pr,SET_ANSIBLE_HOST:()=>b.Bh,SET_DISPLAY_NAME:()=>b.Ti,SET_INVENTORY_FILTER:()=>b.uW,SET_PAGINATION:()=>b.fT,SHOW_ENTITIES:()=>b.u4,SYSTEM_ISSUE_TYPES:()=>b.dF,TOGGLE_DRAWER:()=>b.Ji,TOGGLE_TAG_MODAL:()=>b.Qd,UPDATE_ENTITIES:()=>b.s$,asyncActions:()=>b.zW,asyncInventory:()=>b.gl,clearEntitiesAction:()=>g.s$,clearFilters:()=>g.K5,clearNotifications:()=>g.L1,configChanged:()=>g.u3,deleteEntity:()=>g.Ks,editAnsibleHost:()=>g.Uw,editDisplayName:()=>g.$Y,entitesDetailReducer:()=>m.CB,entitiesLoading:()=>g.nE,entitiesReducer:()=>m.zw,entityDetailsReducer:()=>m.gA,fetchAllTags:()=>g.C8,fetchGroupDetail:()=>g.JM,fetchGroups:()=>g.bt,fetchGroupsForEntities:()=>g.d6,fetchOperatingSystems:()=>g.g6,filterEntities:()=>g.CP,filterSelect:()=>g.fg,getAdvisorData:()=>g.gb,getComplianceData:()=>g.Oj,getPatchData:()=>g.k0,getVulnData:()=>g.Fo,loadEntities:()=>g.il,loadEntity:()=>g.A_,loadTags:()=>g.me,mergeWithDetail:()=>m.OL,mergeWithEntities:()=>m.AF,selectEntity:()=>g.CL,setFilter:()=>g.Tv,setPagination:()=>g.Jr,setSort:()=>g.HD,systemIssues:()=>b.AN,systemProfile:()=>g.eR,tableReducer:()=>m.M,toggleDrawer:()=>g.wb,toggleTagModal:()=>g.Ar,updateEntities:()=>g.jB});var r=a(87462),i=a(4942),s=a(45987),o=a(92950),l=a.n(o),c=a(45697),d=a.n(c),u=a(96206),p=a(75662),f=a(371),m=a(81730),g=a(94474),b=a(59086),v=a(73880),E=a(34655),h=a(454),y=["component","onLoad","store","history","innerRef"];function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=m.OL,T=(0,s.Z)(n,["mergeWithDetail"]),N=function(e){var t=e.component,a=e.onLoad,n=e.store,i=e.history,c=e.innerRef,d=(0,s.Z)(e,y);return(0,o.useEffect)((function(){null==a||a(O(O(O({},T),v),{},{api:E,mergeWithDetail:I}))}),[]),l().createElement(f.r,{appName:"inventory",checkResourceDefinitions:!0},l().createElement(u.Provider,{store:n},l().createElement(p.Router,{history:i},l().createElement(h.Z,(0,r.Z)({},d,{isRbacEnabled:!0,inventoryRef:c,store:n,cmp:t})))))};N.propTypes={store:d().object,onLoad:d().func,component:d().elementType.isRequired,history:d().object,innerRef:d().shape({current:d().any})},N.defaultProps={onLoad:function(){}};const L=N},576:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(87462),r=a(92950),i=a.n(r),s=a(39142),o=a(8454),l=function(e){return i().createElement(s.Z,(0,n.Z)({},e,{component:o.Z}))};const c=i().forwardRef((function(e,t){return i().createElement(l,(0,n.Z)({},e,{innerRef:t}))}))},81730:(e,t,a)=>{"use strict";a.d(t,{AF:()=>_,CB:()=>y,M:()=>h,OL:()=>O,ZP:()=>I,gA:()=>u.ZP,zw:()=>d.ZP});var n,r=a(4942),i=a(59086),s=a(57785),o=a(18546),l=a(35240),c=a(83215),d=a(21216),u=a(48536),p=a(34150),f=a(52987);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={loaded:!1,selected:new Map};function v(e){return g(g({},e),{},{loaded:!0})}var E={notifications:c.ee,systemProfileStore:s.default,groups:p.Z,groupDetail:f.Z},h=(0,o.Gg)((n={},(0,r.Z)(n,i.aI.GET_ENTITIES_FULFILLED,(function(e,t){var a=t.payload;return g(g({},e),{},{rows:(0,l.r0)([e.rows,a.results]),entities:(0,l.r0)([e.entities,a.results])})})),(0,r.Z)(n,i.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var a=t.payload,n=t.meta;return(null==n?void 0:n.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:g(g({},e),{},{rows:(0,l.r0)([e.rows,a.results.map((function(t){return g(g({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,r.Z)(n,"".concat(i.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var a=t.meta,n=e.selected||new Map;return a.systems.forEach((function(e){return n.delete(e)})),g(g({},e),{},{selected:new Map(n)})})),(0,r.Z)(n,i.pr,(function(e,t){var a=t.payload,n=e.selected||new Map;if(a.selected)if(Array.isArray(a.id))a.id.forEach((function(e){n.set(e.id,e)}));else if(0===a.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var r=e.rows&&e.rows.find((function(e){return e.id===a.id}));n.set(a.id,g(g({},r||{}),{},{id:a.id}))}else 0===a.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===a.id?n.clear():n.delete(a.id);return g(g({},e),{},{selected:new Map(n)})})),(0,r.Z)(n,"FILTER_SELECT",(function(e){return g(g({},e),{},{selected:{}})})),(0,r.Z)(n,i.uW,(function(e,t){var a=t.payload;return g(g({},e),{},{activeFilters:a.filtersList})})),(0,r.Z)(n,i.fT,(function(e,t){var a=t.payload,n=parseInt(a.perPage,10),r=parseInt(a.page,10);return g(g({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(r)?1:r})})),(0,r.Z)(n,i.aI.UPDATE_DISPLAY_NAME_FULFILLED,u.i8),n),b),y=function(){return(0,o.Gg)((0,r.Z)({},i.AL.LOAD_ENTITY_FULFILLED,v),b)};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(a,n){return g({},e(g({},(0,o.Gg)(g({},d.ZP),g(g({},d.W2),t))(a,n)),n))}}}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(a,n){return g({},e(g({},(0,o.Gg)(g({},u.ZP),g(g({},u.PY),t))(a,n)),n))}}}const I=E},57785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{calculateInterfaces:()=>g,calculateRepos:()=>m,default:()=>v,defaultState:()=>d,formatBytes:()=>p,onSystemProfile:()=>b,sizes:()=>u,systemProfilePending:()=>f});var n,r=a(93433),i=a(4942),s=a(18546),o=a(59086);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={loaded:!1},u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],p=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(u[t])};function f(e){return c(c({},e),{},{systemProfile:{loaded:!1}})}function m(e){return e&&e.reduce((function(e,t){return c(c({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,r.Z)(e.enabled),[t])}:{disabled:[].concat((0,r.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function g(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,r.Z)(e.interfaces),[t]),ipv4:[].concat((0,r.Z)(e.ipv4),(0,r.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,r.Z)(e.ipv6),(0,r.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function b(e,t){var a=t.payload.results,n=a&&a[0]&&a[0].system_profile||{},i=a&&a[0]&&void 0!==a[0].system_profile.cloud_provider&&a[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,r.Z)("aws"===i||"azure"===i?[]:["ros"]),systemProfile:c(c({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&p(n.system_memory_bytes),repositories:m(n.yum_repos),network:g(n.network_interfaces)})})}const v=(0,s.Gg)((n={},(0,i.Z)(n,o.aI.LOAD_SYSTEM_PROFILE_FULFILLED,b),(0,i.Z)(n,o.aI.LOAD_SYSTEM_PROFILE_PENDING,f),n),{systemProfile:d})},80598:()=>{},10108:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./DetailHeader.6b3572002bb0de4076649f6316dd41e3.js.map