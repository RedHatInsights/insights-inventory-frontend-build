(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8648],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>l});var r=n(70655),a=n(92950),i=n(44303),o=n(38296),s=n(62472);const l=e=>{var{children:t=null,className:n="","aria-label":c="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,p=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const m=(0,s.S$)(l.displayName,u,d);return a.createElement("nav",Object.assign({},p,{"aria-label":c,className:(0,o.i)(i.Z.breadcrumb,n)},m),a.createElement("ol",{className:i.Z.breadcrumbList},a.Children.map(t,((e,t)=>{const n=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:n}):e}))))};l.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>l});var r=n(70655),a=n(92950),i=n(93174),o=n(44303),s=n(38296);const l=e=>{var{children:t=null,className:n="",to:l,isActive:c=!1,isDropdown:u=!1,showDivider:d,target:p,component:m="a",render:v}=e,f=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const y=m,b=c?"page":void 0,g=(0,s.i)(o.Z.breadcrumbLink,c&&o.Z.modifiers.current);return a.createElement("li",Object.assign({},f,{className:(0,s.i)(o.Z.breadcrumbItem,n)}),d&&a.createElement("span",{className:o.Z.breadcrumbItemDivider},a.createElement(i.ZP,null)),"button"===m&&a.createElement("button",{className:g,"aria-current":b,type:"button"},t),u&&a.createElement("span",{className:(0,s.i)(o.Z.breadcrumbDropdown)},t),v&&v({className:g,ariaCurrent:b}),l&&!v&&a.createElement(y,{href:l,target:p,className:g,"aria-current":b},t),!l&&"button"!==m&&!u&&t)};l.displayName="BreadcrumbItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},61013:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(87462),a=n(45987),i=n(92950),o=n.n(i),s=n(75662),l=n(50533),c=n(45697),u=n.n(c),d=n(3672),p=n(9947),m=n(38424),v=n(75106),f=n(38779),y=n(47173),b=n(96733),g=n(94471),h=function(e){var t=e.inventoryId,n=e.onBackToListClick;return o().createElement(p.u,{variant:p.I.full},o().createElement(m.k,{icon:b.ZP}),o().createElement(f.D,{headingLevel:"h5",size:"lg"},"System not found"),o().createElement(v.B,null,"System with ID ",t," does not exist"),o().createElement(y.zx,{variant:"primary",onClick:function(){return(0,g.h)(t,n)}},"Back to previous page"))};h.propTypes={inventoryId:u().string,onBackToListClick:u().func};const I=h;var E=n(73880),w=n(83215),S=n(71002),_=n(29439),T=n(4942),k=n(35262),O=n(28883),N=n(37619),j=n(79770),D=n(96396),L=n(85893),Z=n(48542),P=n(56989),R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},R.apply(this,arguments)};const C=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,r=e.bodyText,a=void 0===r?"To get started, activate the Insights client for this system.":r,i=e.buttonText,o=void 0===i?"Learn how to activate the Insights client":i;return(0,L.jsxs)(Z.EmptyState,{children:[(0,L.jsx)(Z.EmptyStateIcon,{icon:P.DisconnectedIcon}),(0,L.jsx)(Z.Title,R({headingLevel:"h5",size:"lg"},{children:n})),(0,L.jsx)(Z.EmptyStateBody,{children:a}),(0,L.jsx)(Z.Button,R({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:o}))]})};var x=["onTabSelect","appList","activeApp","inventoryId","entity"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,T.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t,n=e.onTabSelect,s=e.appList,c=e.activeApp,u=e.inventoryId,d=e.entity,p=(0,a.Z)(e,x),m=(0,l.useStore)(),v=(0,l.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||s||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return B(B({},e),{},{tabRef:o().createRef()})}))})),f=(0,l.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),y=(0,i.useState)(v),b=(0,_.Z)(y,2),h=b[0],I=b[1],E=(0,i.useState)(c||(null==v||null===(t=v[0])||void 0===t?void 0:t.name)),w=(0,_.Z)(E,2),T=w[0],L=w[1];(0,i.useEffect)((function(){var e=v.filter((function(e){return!(null!=f&&f.includes(e.name))}));0!==e&&void 0!==(0,S.Z)(e)?I(e):I(v)}),[f]);var Z=(0,D._e)((0,g.s)("per_reporter_staleness",d));return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},o().createElement(k.m,(0,r.Z)({},p,{activeKey:T,onSelect:function(e,t){var r=h.find((function(e){return e.name===t}));n&&n(e,t,r.name||t),L(r.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==h?void 0:h.map((function(e,t){return o().createElement(O.O,{key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef})})))),o().createElement("section",null,(null==h?void 0:h.length)&&(null==h?void 0:h.map((function(e){var t=e.component;return o().createElement(j.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===T&&o().createElement(i.Suspense,{fallback:N.$},o().createElement("section",{className:"pf-c-page__main-section"},Z&&["patch","vulnerabilities","advisor"].includes(T)?o().createElement(C,null):o().createElement(t,{inventoryId:u,store:m}))))})))))};M.propTypes={appList:u().arrayOf(u().shape({title:u().node,name:u().string.isRequired,pageId:u().string})),onTabSelect:u().func,activeApp:u().string.isRequired,inventoryId:u().string.isRequired,entity:u().object};const z=M;var F=n(8454),W=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],V=["inventoryId"],q=function(e){var t=e.showTags,n=e.onTabSelect,s=e.onBackToListClick,c=e.inventoryId,u=(e.additionalClasses,e.activeApp),p=e.appList,m=e.showMainSection,v=(0,a.Z)(e,W),f=(0,l.useDispatch)(),y=(0,l.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),b=(0,l.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){b&&(null==b?void 0:b.id)===c&&y||f((0,d.A_)(c,{hasItems:!0},{showTags:t}))}),[]),o().createElement("div",{className:"ins-entity-detail"},y&&!b?o().createElement(I,{onBackToListClick:s,inventoryId:c}):o().createElement(o().Fragment,null,o().createElement(F.Z,(0,r.Z)({entity:b,loaded:y,onBackToListClick:s,deleteEntity:function(e,t,n){var r=(0,d.Ks)(e,t);f((0,E.reloadWrapper)(r,n))},addNotification:function(e){return f((0,w.wN)(e))},showTags:t},v)),m&&o().createElement(z,{onTabSelect:n,activeApp:u,appList:p,inventoryId:c,entity:b})))};q.propTypes={showTags:u().bool,onTabSelect:u().func,onBackToListClick:u().func,inventoryId:u().string,additionalClasses:u().object,activeApp:u().string,appList:u().arrayOf(u().shape({title:u().node,name:u().string.isRequired,pageId:u().string}))},q.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var H=function(e){var t=e.inventoryId,n=(0,a.Z)(e,V),i=(0,s.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),o().createElement(q,(0,r.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};H.propTypes=q.propTypes;const U=H},17499:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TextInputModal:()=>o.Z,default:()=>s});var r=n(92950),a=n.n(r),i=n(43107),o=n(95364);const s=function(e){return a().createElement(i.default,e)}},74251:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(29439),a=n(92950),i=n.n(a),o=n(45697),s=n.n(o),l=n(50533),c=n(75662),u=n(55140),d=n(3672),p=n(64029),m=n(32835),v=n(35664),f=n(8567),y=n(61013),b=n(13784),g=n(85893),h=n(54025),I=n(48542),E=n(94184),w=n.n(E),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)},_=function(e){var t=e.appName,n=e.scope,r=e.module,a=e.fallback,i=void 0===a?(0,g.jsx)(I.Bullseye,{children:(0,g.jsx)(I.Spinner,{size:"xl"})}):a,o=e.innerRef,s=e.className,l=e.component,c=void 0===l?"section":l,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]),d=S({className:s,appName:t,module:r,scope:null!=n?n:t,ErrorComponent:i,ref:o,fallback:i},u);return(0,g.jsx)(c,S({className:w()(s,t)},{children:(0,g.jsx)(h.ScalprumComponent,S({},d))}))};const T=i().forwardRef((function(e,t){return(0,g.jsx)(_,S({innerRef:t},e))}));var k=n(38991);var O=function(e){var t=e.inventoryId;return i().createElement(T,{appName:"advisor",module:"./SystemDetail",store:(0,l.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)},inventoryId:t})};O.propTypes={inventoryId:s().string.isRequired};const N=O;var j=n(17499),D=function(e){var t=e.inventoryId,n=(0,a.useContext)(k.Z).getRegistry;return i().createElement(T,{appName:"patch",module:"./SystemDetail",inventoryId:t,getRegistry:n})};D.propTypes={inventoryId:s().string.isRequired};const L=D;var Z=[{title:"General information",name:"general_information",component:j.default},{title:"Advisor",name:"advisor",component:N},{title:"Vulnerability",name:"vulnerabilities",component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,a.useContext)(k.Z).getRegistry;return i().createElement(T,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,customItnlProvider:!0,entity:{id:e.inventoryId}})}},{title:"Compliance",name:"compliance",component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params;return i().createElement(T,{appName:"compliance",module:"./SystemDetail",store:(0,l.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)},inventoryId:e.inventoryId,remediationsEnabled:!0})}},{title:"Patch",name:"patch",component:L},{title:"Resource Optimization",name:"ros",isVisible:!1,component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,a.useContext)(k.Z).getRegistry;return i().createElement(T,{appName:"ros",module:"./SystemDetail",getRegistry:t,inventoryId:e.inventoryId})}}],P=function(e){var t=e.entity,n=e.inventoryId,r=e.entityLoaded;return i().createElement(p.a,{ouiaId:"systems-list"},i().createElement(m.g,null,i().createElement(c.Link,{to:f._.table},"Inventory")),i().createElement(m.g,{isActive:!0},i().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:!0!==r?i().createElement(v.Z,{size:v.i.xs}):n)))},R=function(){var e=(0,u.Z)(),t=(0,c.useParams)().inventoryId,n=(0,c.useLocation)().search,o=new URLSearchParams(n),s=(0,a.useState)(o.get("appName")||Z[0].name),p=(0,r.Z)(s,1)[0],m=(0,l.useStore)(),v=(0,c.useHistory)(),f=(0,l.useDispatch)(),g=(0,b.Mo)(),h=(0,l.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded})),I=(0,l.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));(0,a.useEffect)((function(){var t;null==e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),e.appAction("system-detail"),f(d.L1())}),[]);var E={"ins-c-inventory__detail--general-info":"general_information"===p};I&&(document.title="".concat(I.display_name," | Inventory | Red Hat Insights")),(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appObjectId)||void 0===n||n.call(t,null==I?void 0:I.id)}),[null==I?void 0:I.id]);var w=(0,a.useCallback)((function(e,t,n){o.set("appName",n);var r=o.toString();v.push({search:r})}),[o]);return i().createElement(y.Z,{additionalClasses:E,hideInvDrawer:!0,showDelete:g,hideInvLink:!0,hideBack:!0,inventoryId:t,showTags:!0,showMainSection:!0,fallback:"",store:m,history:v,isInventoryApp:!0,shouldWrapAsPage:!0,BreadcrumbWrapper:i().createElement(P,{entity:I,entityLoaded:h,inventoryId:t}),activeApp:p,appList:Z,onTabSelect:w})};P.propTypes={entity:s().object,entityLoaded:s().bool,inventoryId:s().string},R.contextTypes={store:s().object};const C=R},58392:()=>{},32857:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8648.fd348dcbcfabd86f7bfbb388736b6f74.js.map