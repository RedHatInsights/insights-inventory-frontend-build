(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8648],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(70655),a=n(92950),i=n(44303),o=n(38296),l=n(62472);const s=e=>{var{children:t=null,className:n="","aria-label":c="Breadcrumb",ouiaId:u,ouiaSafe:p=!0}=e,d=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const m=(0,l.S$)(s.displayName,u,p);return a.createElement("nav",Object.assign({},d,{"aria-label":c,className:(0,o.i)(i.Z.breadcrumb,n)},m),a.createElement("ol",{className:i.Z.breadcrumbList},a.Children.map(t,((e,t)=>{const n=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:n}):e}))))};s.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});var r=n(70655),a=n(92950),i=n(93174),o=n(44303),l=n(38296);const s=e=>{var{children:t=null,className:n="",to:s,isActive:c=!1,isDropdown:u=!1,showDivider:p,target:d,component:m="a",render:v}=e,f=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const y=m,b=c?"page":void 0,g=(0,l.i)(o.Z.breadcrumbLink,c&&o.Z.modifiers.current);return a.createElement("li",Object.assign({},f,{className:(0,l.i)(o.Z.breadcrumbItem,n)}),p&&a.createElement("span",{className:o.Z.breadcrumbItemDivider},a.createElement(i.ZP,null)),"button"===m&&a.createElement("button",{className:g,"aria-current":b,type:"button"},t),u&&a.createElement("span",{className:(0,l.i)(o.Z.breadcrumbDropdown)},t),v&&v({className:g,ariaCurrent:b}),s&&!v&&a.createElement(y,{href:s,target:d,className:g,"aria-current":b},t),!s&&"button"!==m&&!u&&t)};s.displayName="BreadcrumbItem"},96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},71330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(87462),a=n(45987),i=n(92950),o=n.n(i),l=n(75662),s=n(50533),c=n(45697),u=n.n(c),p=n(3672),d=n(9947),m=n(38424),v=n(75106),f=n(38779),y=n(47173),b=n(96733),g=n(94471),h=function(e){var t=e.inventoryId,n=e.onBackToListClick;return o().createElement(d.u,{variant:d.I.full},o().createElement(m.k,{icon:b.ZP}),o().createElement(f.D,{headingLevel:"h5",size:"lg"},"System not found"),o().createElement(v.B,null,"System with ID ",t," does not exist"),o().createElement(y.zx,{variant:"primary",onClick:function(){return(0,g.h)(t,n)}},"Back to previous page"))};h.propTypes={inventoryId:u().string,onBackToListClick:u().func};const I=h;var E=n(73880),w=n(83215),S=n(71002),k=n(29439),O=n(4942),T=n(35262),N=n(28883),_=n(37619),D=n(79770),L=["onTabSelect","appList","activeApp","inventoryId"];function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n=e.onTabSelect,l=e.appList,c=e.activeApp,u=e.inventoryId,p=(0,a.Z)(e,L),d=(0,s.useStore)(),m=(0,s.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||l||[]).filter((function(e){return!1!==e.isVisible})).map((function(e){return j(j({},e),{},{tabRef:o().createRef()})}))})),v=(0,s.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),f=(0,i.useState)(m),y=(0,k.Z)(f,2),b=y[0],g=y[1],h=(0,i.useState)(c||(null==m||null===(t=m[0])||void 0===t?void 0:t.name)),I=(0,k.Z)(h,2),E=I[0],w=I[1];return(0,i.useEffect)((function(){var e=m.filter((function(e){return!(null!=v&&v.includes(e.name))}));0!==e&&void 0!==(0,S.Z)(e)?g(e):g(m)}),[v]),o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-u-pr-lg pf-u-pl-lg pf-u-background-color-100-on-md"},o().createElement(T.m,(0,r.Z)({},p,{activeKey:E,onSelect:function(e,t){var r=b.find((function(e){return e.name===t}));n&&n(e,t,r.name||t),w(r.name)},className:"ins-c-inventory-detail__app-tabs",inset:"insetMd"}),null==b?void 0:b.map((function(e,t){return o().createElement(N.O,{key:t,eventKey:e.name,title:e.title,tabContentRef:e.tabRef})})))),o().createElement("section",null,(null==b?void 0:b.length)&&(null==b?void 0:b.map((function(e){var t=e.component;return o().createElement(D.I,{eventKey:e.name,id:e.name,ref:e.tabRef,"aria-label":e.title,key:e.name},e.name===E&&o().createElement(i.Suspense,{fallback:_.$},o().createElement("section",{className:"pf-c-page__main-section"},o().createElement(t,{inventoryId:u,store:d}))))})))))};P.propTypes={appList:u().arrayOf(u().shape({title:u().node,name:u().string.isRequired,pageId:u().string})),onTabSelect:u().func,activeApp:u().string.isRequired,inventoryId:u().string.isRequired};const R=P;var C=n(8454),A=["showTags","onTabSelect","onBackToListClick","inventoryId","additionalClasses","activeApp","appList","showMainSection"],x=["inventoryId"],B=function(e){var t=e.showTags,n=e.onTabSelect,l=e.onBackToListClick,c=e.inventoryId,u=(e.additionalClasses,e.activeApp),d=e.appList,m=e.showMainSection,v=(0,a.Z)(e,A),f=(0,s.useDispatch)(),y=(0,s.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),b=(0,s.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,i.useEffect)((function(){b&&(null==b?void 0:b.id)===c&&y||f((0,p.A_)(c,{hasItems:!0},{showTags:t}))}),[]),o().createElement("div",{className:"ins-entity-detail"},y&&!b?o().createElement(I,{onBackToListClick:l,inventoryId:c}):o().createElement(o().Fragment,null,o().createElement(C.Z,(0,r.Z)({entity:b,loaded:y,onBackToListClick:l,deleteEntity:function(e,t,n){var r=(0,p.Ks)(e,t);f((0,E.reloadWrapper)(r,n))},addNotification:function(e){return f((0,w.wN)(e))},showTags:t},v)),m&&o().createElement(R,{onTabSelect:n,activeApp:u,appList:d,inventoryId:c})))};B.propTypes={showTags:u().bool,onTabSelect:u().func,onBackToListClick:u().func,inventoryId:u().string,additionalClasses:u().object,activeApp:u().string,appList:u().arrayOf(u().shape({title:u().node,name:u().string.isRequired,pageId:u().string}))},B.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:i.Fragment,LastSeenWrapper:i.Fragment,TitleWrapper:i.Fragment,TagsWrapper:i.Fragment,DeleteWrapper:i.Fragment,ActionsWrapper:i.Fragment,appList:[]};var M=function(e){var t=e.inventoryId,n=(0,a.Z)(e,x),i=(0,l.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("Please use DetailHead component in the fed-mod to render \n            only Inventory header. Migrate away InventoryDetailHead"),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),o().createElement(B,(0,r.Z)({inventoryId:t||i||location.pathname.replace(/\/$/,"").split("/").pop()},n))};M.propTypes=B.propTypes;const z=M},17499:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TextInputModal:()=>o.Z,default:()=>l});var r=n(92950),a=n.n(r),i=n(43107),o=n(95364);const l=function(e){return a().createElement(i.default,e)}},74251:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(29439),a=n(92950),i=n.n(a),o=n(45697),l=n.n(o),s=n(50533),c=n(75662),u=n(55140),p=n(3672),d=n(64029),m=n(32835),v=n(35664),f=n(8567),y=n(71330),b=n(13784),g=n(85893),h=n(54025),I=n(48542),E=n(94184),w=n.n(E),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)},k=function(e){var t=e.appName,n=e.scope,r=e.module,a=e.fallback,i=void 0===a?(0,g.jsx)(I.Bullseye,{children:(0,g.jsx)(I.Spinner,{size:"xl"})}):a,o=e.innerRef,l=e.className,s=e.component,c=void 0===s?"section":s,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]),p=S({className:l,appName:t,module:r,scope:null!=n?n:t,ErrorComponent:i,ref:o,fallback:i},u);return(0,g.jsx)(c,S({className:w()(l,t)},{children:(0,g.jsx)(h.ScalprumComponent,S({},p))}))};const O=i().forwardRef((function(e,t){return(0,g.jsx)(k,S({innerRef:t},e))}));var T=n(38991);var N=function(e){var t=e.inventoryId;return i().createElement(O,{appName:"advisor",module:"./SystemDetail",store:(0,s.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)},inventoryId:t})};N.propTypes={inventoryId:l().string.isRequired};const _=N;var D=n(17499),L=function(e){var t=e.inventoryId,n=(0,a.useContext)(T.Z).getRegistry;return i().createElement(O,{appName:"patch",module:"./SystemDetail",inventoryId:t,getRegistry:n})};L.propTypes={inventoryId:l().string.isRequired};const Z=L;var j=[{title:"General information",name:"general_information",component:D.default},{title:"Advisor",name:"advisor",component:_},{title:"Vulnerability",name:"vulnerabilities",component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,a.useContext)(T.Z).getRegistry;return i().createElement(O,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,customItnlProvider:!0,entity:{id:e.inventoryId}})}},{title:"Compliance",name:"compliance",component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params;return i().createElement(O,{appName:"compliance",module:"./SystemDetail",store:(0,s.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)},inventoryId:e.inventoryId,remediationsEnabled:!0})}},{title:"Patch",name:"patch",component:Z},{title:"Resource Optimization",name:"ros",isVisible:!1,component:function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,a.useContext)(T.Z).getRegistry;return i().createElement(O,{appName:"ros",module:"./SystemDetail",getRegistry:t,inventoryId:e.inventoryId})}}],P=function(e){var t=e.entity,n=e.inventoryId,r=e.entityLoaded;return i().createElement(d.a,{ouiaId:"systems-list"},i().createElement(m.g,null,i().createElement(c.Link,{to:f._.table},"Inventory")),i().createElement(m.g,{isActive:!0},i().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:!0!==r?i().createElement(v.Z,{size:v.i.xs}):n)))},R=function(){var e=(0,u.Z)(),t=(0,c.useParams)().inventoryId,n=(0,c.useLocation)().search,o=new URLSearchParams(n),l=(0,a.useState)(o.get("appName")||j[0].name),d=(0,r.Z)(l,1)[0],m=(0,s.useStore)(),v=(0,c.useHistory)(),f=(0,s.useDispatch)(),g=(0,b.Mo)(),h=(0,s.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded})),I=(0,s.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));(0,a.useEffect)((function(){var t;null==e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),e.appAction("system-detail"),f(p.L1())}),[]);var E={"ins-c-inventory__detail--general-info":"general_information"===d};I&&(document.title="".concat(I.display_name," | Inventory | Red Hat Insights")),(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appObjectId)||void 0===n||n.call(t,null==I?void 0:I.id)}),[null==I?void 0:I.id]);var w=(0,a.useCallback)((function(e,t,n){o.set("appName",n);var r=o.toString();v.push({search:r})}),[o]);return i().createElement(y.Z,{additionalClasses:E,hideInvDrawer:!0,showDelete:g,hideInvLink:!0,hideBack:!0,inventoryId:t,showTags:!0,showMainSection:!0,fallback:"",store:m,history:v,isInventoryApp:!0,shouldWrapAsPage:!0,BreadcrumbWrapper:i().createElement(P,{entity:I,entityLoaded:h,inventoryId:t}),activeApp:d,appList:j,onTabSelect:w})};P.propTypes={entity:l().object,entityLoaded:l().bool,inventoryId:l().string},R.contextTypes={store:l().object};const C=R},58392:()=>{},32857:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8648.4b7ebde34948ca134e12df0345b7b1dd.js.map