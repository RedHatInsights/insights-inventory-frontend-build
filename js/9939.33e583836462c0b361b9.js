(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9939],{64029:(e,t,a)=>{"use strict";a.d(t,{a:()=>d});var n=a(70655),i=a(92950),r=a(44303),l=a(38296),o=a(62472);const d=e=>{var{children:t=null,className:a="","aria-label":s="Breadcrumb",ouiaId:c,ouiaSafe:p=!0}=e,m=(0,n.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const g=(0,o.S$)(d.displayName,c,p);return i.createElement("nav",Object.assign({},m,{"aria-label":s,className:(0,l.i)(r.Z.breadcrumb,a)},g),i.createElement("ol",{className:r.Z.breadcrumbList},i.Children.map(t,((e,t)=>{const a=t>0;return i.isValidElement(e)?i.cloneElement(e,{showDivider:a}):e}))))};d.displayName="Breadcrumb"},32835:(e,t,a)=>{"use strict";a.d(t,{g:()=>d});var n=a(70655),i=a(92950),r=a(93174),l=a(44303),o=a(38296);const d=e=>{var{children:t=null,className:a="",to:d,isActive:s=!1,isDropdown:c=!1,showDivider:p,target:m,component:g="a",render:f}=e,u=(0,n.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const h=g,b=s?"page":void 0,v=(0,o.i)(l.Z.breadcrumbLink,s&&l.Z.modifiers.current);return i.createElement("li",Object.assign({},u,{className:(0,o.i)(l.Z.breadcrumbItem,a)}),p&&i.createElement("span",{className:l.Z.breadcrumbItemDivider},i.createElement(r.ZP,null)),"button"===g&&i.createElement("button",{className:v,"aria-current":b,type:"button"},t),c&&i.createElement("span",{className:(0,o.i)(l.Z.breadcrumbDropdown)},t),f&&f({className:v,ariaCurrent:b}),d&&!f&&i.createElement(h,{href:d,target:m,className:v,"aria-current":b},t),!d&&"button"!==g&&!c&&t)};d.displayName="BreadcrumbItem"},35293:(e,t,a)=>{"use strict";a.d(t,{i:()=>o});var n=a(70655),i=a(92950),r=a(38296),l=a(51203);const o=e=>{var{children:t=null,className:a=""}=e,o=(0,n.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,r.i)(l.Z.emptyStateSecondary,a)},o),t)};o.displayName="EmptyStateSecondaryActions"},31495:(e,t,a)=>{"use strict";a.d(t,{Mi:()=>o,Uv:()=>r,wk:()=>d,z1:()=>l});var n=a(92950),i=a(80164);const r={isManagedSidebar:!1,isNavOpen:!1,onNavToggle:()=>null,width:null,height:null,getBreakpoint:i.iu,getVerticalBreakpoint:i.xb},l=n.createContext(r),o=l.Provider,d=l.Consumer},32045:(e,t,a)=>{"use strict";a.d(t,{Dk:()=>n,NP:()=>g,xB:()=>i});var n,i,r=a(70655),l=a(92950),o=a(41145),d=a(38296),s=a(80164),c=a(31495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(n||(n={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(i||(i={}));const p={[i.default]:o.Z.pageMainSection,[i.nav]:o.Z.pageMainNav,[i.subNav]:o.Z.pageMainSubnav,[i.breadcrumb]:o.Z.pageMainBreadcrumb,[i.tabs]:o.Z.pageMainTabs,[i.wizard]:o.Z.pageMainWizard},m={[n.default]:"",[n.light]:o.Z.modifiers.light,[n.dark]:o.Z.modifiers.dark_200,[n.darker]:o.Z.modifiers.dark_100},g=e=>{var{className:t="",children:a,variant:n="default",type:g="default",padding:f,isFilled:u,isWidthLimited:h=!1,isCenterAligned:b=!1,sticky:v,stickyOnBreakpoint:_,hasShadowTop:y=!1,hasShadowBottom:k=!1,hasOverflowScroll:w=!1,"aria-label":O,component:x="section"}=e,E=(0,r.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","sticky","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:S,getVerticalBreakpoint:N}=l.useContext(c.z1);l.useEffect((()=>{w&&!O&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[w,O]);const Z=x;return l.createElement(Z,Object.assign({},E,{className:(0,d.i)(p[g],(0,s.wt)(f,o.Z),(0,s.wt)(_,o.Z,"sticky-",N(S),!0),m[n],!1===u&&o.Z.modifiers.noFill,!0===u&&o.Z.modifiers.fill,h&&o.Z.modifiers.limitWidth,h&&b&&g!==i.subNav&&o.Z.modifiers.alignCenter,"top"===v&&o.Z.modifiers.stickyTop,"bottom"===v&&o.Z.modifiers.stickyBottom,y&&o.Z.modifiers.shadowTop,k&&o.Z.modifiers.shadowBottom,w&&o.Z.modifiers.overflowScroll,t)},w&&{tabIndex:0},{"aria-label":O}),h&&l.createElement("div",{className:(0,d.i)(o.Z.pageMainBody)},a),!h&&a)};g.displayName="PageSection"},50383:(e,t,a)=>{"use strict";a.d(t,{O:()=>o});var n=a(70655),i=a(92950);a(53336);const r={circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"};var l=a(38296);const o=e=>{var{className:t,width:a,height:o,fontSize:d,shape:s,screenreaderText:c}=e,p=(0,n.__rest)(e,["className","width","height","fontSize","shape","screenreaderText"]);const m=d?Object.values(r).find((e=>e===`pf-m-text-${d}`)):void 0;return i.createElement("div",Object.assign({},p,{className:(0,l.i)("pf-c-skeleton",d&&m,"circle"===s&&r.circle,"square"===s&&r.square,t)},(a||o)&&{style:Object.assign({"--pf-c-skeleton--Width":a||void 0,"--pf-c-skeleton--Height":o||void 0},p.style)}),i.createElement("span",{className:"pf-u-screen-reader"},c))};o.displayName="Skeleton"},7081:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>l,lb:()=>i,wl:()=>r});var n=a(40400);const i={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},r=(0,n.IU)(i),l=r},44303:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(58392);const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},41145:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(92084);const n={avatar:"pf-c-avatar",brand:"pf-c-brand",button:"pf-c-button",card:"pf-c-card",contextSelector:"pf-c-context-selector",drawer:"pf-c-drawer",masthead:"pf-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",fullHeight:"pf-m-full-height",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",fill:"pf-m-fill",noFill:"pf-m-no-fill",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-c-nav",notificationBadge:"pf-c-notification-badge",page:"pf-c-page",pageDrawer:"pf-c-page__drawer",pageHeader:"pf-c-page__header",pageHeaderBrand:"pf-c-page__header-brand",pageHeaderBrandLink:"pf-c-page__header-brand-link",pageHeaderBrandToggle:"pf-c-page__header-brand-toggle",pageHeaderNav:"pf-c-page__header-nav",pageHeaderTools:"pf-c-page__header-tools",pageHeaderToolsGroup:"pf-c-page__header-tools-group",pageHeaderToolsItem:"pf-c-page__header-tools-item",pageMain:"pf-c-page__main",pageMainBody:"pf-c-page__main-body",pageMainBreadcrumb:"pf-c-page__main-breadcrumb",pageMainDrawer:"pf-c-page__main-drawer",pageMainGroup:"pf-c-page__main-group",pageMainNav:"pf-c-page__main-nav",pageMainSection:"pf-c-page__main-section",pageMainSubnav:"pf-c-page__main-subnav",pageMainTabs:"pf-c-page__main-tabs",pageMainWizard:"pf-c-page__main-wizard",pageSidebar:"pf-c-page__sidebar",pageSidebarBody:"pf-c-page__sidebar-body",themeDark:"pf-theme-dark"}},14299:(e,t)=>{"use strict";t.pD={name:"--pf-global--palette--black-600",value:"#6a6e73",var:"var(--pf-global--palette--black-600)"},t.pD},53754:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(92950);const i=a.n(n)().createContext("light")},80123:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(85893),i=a(94184),r=a.n(i),l=a(53754),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};const d=function(e){var t=e.className,a=e.children,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a}(e,["className","children"]),d=r()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(l.Z.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var s=r()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,n.jsx)("section",o({},i,{className:"".concat(d," ").concat(s),"widget-type":"InsightsPageHeader"},{children:a}))}})}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(85893),i=a(94184),r=a.n(i),l=a(48542),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};const d=function(e){var t=e.className,a=e.title,i=r()(t);return(0,n.jsx)(l.Title,o({headingLevel:"h1",size:"2xl",className:i,"widget-type":"InsightsPageHeaderTitle"},{children:a}))}},52901:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var n=a(92950),i=a.n(n),r=a(75662),l=a(29439),o=a(55140),d=a(50533),s=a(8622),c=a(52643),p=a(32045),m=a(37619),g=a(28883),f=a(35262),u=a(29873),h=a(64029),b=a(32835),v=a(50383),_=a(80123),y=a(39173),k=a(8567),w=a(45697),O=a.n(w),x=function(e){var t,a,n=e.groupId,l=(0,d.useSelector)((function(e){return e.groupDetail})),o=l.uninitialized,s=l.loading,c=l.data,p=o||s?i().createElement(v.O,{width:"250px",screenreaderText:"Loading group details"}):(null==c||null===(t=c.results)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.name)||n;return i().createElement(_.Z,null,i().createElement(h.a,null,i().createElement(b.g,null,i().createElement(r.Link,{to:k._.groups},"Groups")),i().createElement(b.g,{isActive:!0},p)),i().createElement(y.Z,{title:p}))};x.propTypes={groupId:O().string.isRequired};const E=x;var S=a(9947),N=a(75106),Z=a(47173),B=a(38424),M=a(35293),T=a(38779),P=a(15265),H=a(7081),D=a(14299);const I=function(){return i().createElement(S.u,{"data-ouia-component-id":"empty-state","data-ouia-component-type":"PF4/EmptyState","data-ouia-safe":!0},i().createElement(B.k,{icon:H.ZP,color:D.pD.value}),i().createElement(T.D,{headingLevel:"h4",size:"lg"},"No systems added"),i().createElement(N.B,null,"To manage systems more effectively, add systems to the group."),i().createElement(Z.zx,{variant:"primary",onClick:function(){}},"Add systems"),i().createElement(M.i,null,i().createElement(Z.zx,{variant:"link",icon:i().createElement(P.ZP,null),iconPosition:"right"},"Learn more about system groups")))},L=function(){var e=(0,d.useSelector)((function(e){return e.groupDetail})),t=e.uninitialized,a=e.loading;return t||a?i().createElement(S.u,null,i().createElement(N.B,null,i().createElement(m.$,null))):i().createElement(I,null)};var z=(0,n.lazy)((function(){return a.e(942).then(a.bind(a,90942))})),j=function(e){var t=e.groupId,a=(0,d.useDispatch)(),r=(0,d.useSelector)((function(e){return e.groupDetail})).data,h=(0,o.Z)();(0,n.useEffect)((function(){a((0,s.JM)(t))}),[]),(0,n.useEffect)((function(){var e;null==h||null===(e=h.updateDocumentTitle)||void 0===e||e.call(h,"".concat((null==r?void 0:r.name)||t," - Inventory Groups | Red Hat Insights"))}),[r]);var b=(0,n.useState)(0),v=(0,l.Z)(b,2),_=v[0],y=v[1];return i().createElement(i().Fragment,null,i().createElement(E,{groupId:t}),i().createElement(p.NP,{variant:"light",type:"tabs"},i().createElement(f.m,{activeKey:_,onSelect:function(e,t){return y(t)},"aria-label":"Group tabs",role:"region",inset:{default:"insetMd"}},i().createElement(g.O,{eventKey:0,title:i().createElement(u.T,null,"Systems"),"aria-label":"Group systems tab"},i().createElement(p.NP,null,i().createElement(L,null))),i().createElement(g.O,{eventKey:1,title:i().createElement(u.T,null,"Group info"),"aria-label":"Group info tab"},1===_&&i().createElement(p.NP,null,i().createElement(n.Suspense,{fallback:i().createElement(c.b,null,i().createElement(m.$,null))},i().createElement(z,null)))))))};j.propTypes={groupId:O().string.isRequired};const C=j,A=function(){var e=(0,r.useParams)().groupId;return i().createElement(C,{groupId:e})}},58392:()=>{},32857:()=>{},98379:()=>{},92084:()=>{},53336:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9939.20b41ba87b866b2f83ed0cafde3d43cd.js.map