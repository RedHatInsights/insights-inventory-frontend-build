(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3426],{75728:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(70655),i=r(92950),a=r(5964),o=r(1024),s=r(73699),c=r(99355),l=r(38296),u=r(62472);const p=e=>{var{id:t="",children:r=null,className:f="",isOpen:d=!1,parentRef:g=null,getMenuRef:y=null,isDisabled:E=!1,isPlain:O=!1,isText:m=!1,isPrimary:b=!1,toggleVariant:v="default",isActive:T=!1,onToggle:P=(e=>{}),icon:h=null,toggleIndicator:I=a.ZP,splitButtonItems:_,splitButtonVariant:L="checkbox","aria-haspopup":D,ouiaId:S,ouiaSafe:w,ref:N}=e,Z=(0,n.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const j=(0,u.S$)(p.displayName,S,w),A=i.createElement(c.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:n,toggleIconClass:a})=>i.createElement(o.Z,Object.assign({},Z,{id:t,className:f,isOpen:d,parentRef:g,getMenuRef:y,isActive:T,isDisabled:E,isPlain:O,isText:m,isPrimary:b,toggleVariant:v,onToggle:P,"aria-haspopup":D},j,_&&{isSplitButton:!0,"aria-label":Z["aria-label"]||"Select"}),h&&i.createElement("span",{className:(0,l.i)(a)},h),r&&i.createElement("span",{className:I&&(0,l.i)(e)},r),I&&i.createElement("span",{className:(0,l.i)(!_&&n)},i.createElement(I,null)))));return _?i.createElement("div",{className:(0,l.i)(s.Z.dropdownToggle,s.Z.modifiers.splitButton,"action"===L&&s.Z.modifiers.action,("primary"===v||b)&&"action"===L&&s.Z.modifiers.primary,"secondary"===v&&"action"===L&&s.Z.modifiers.secondary,E&&s.Z.modifiers.disabled)},_,A):A};p.displayName="DropdownToggle"},21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},89376:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(85893),i=r(94184),a=r.n(i),o=r(92950);const s=r.n(o)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,r=e.children,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["className","children"]),o=a()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(s.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var l=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,n.jsx)("section",c({},i,{className:"".concat(o," ").concat(l),"widget-type":"InsightsPageHeader"},{children:r}))}})}},39142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n={};r.r(n),r.d(n,{ACTION_TYPES:()=>y.aI,CHANGE_SORT:()=>y.WH,CLEAR_ENTITIES:()=>y.g1,CLEAR_ERRORS:()=>y.pp,CLEAR_FILTERS:()=>y.Gs,CLEAR_NOTIFICATIONS:()=>y.wt,CONFIG_CHANGED:()=>y.Uq,ENTITIES_LOADING:()=>y.jZ,FILTER_ENTITIES:()=>y.lP,FILTER_SELECT:()=>y.hI,INVENTORY_ACTION_TYPES:()=>y.AL,SELECT_ENTITY:()=>y.pr,SET_ANSIBLE_HOST:()=>y.Bh,SET_DISPLAY_NAME:()=>y.Ti,SET_INVENTORY_FILTER:()=>y.uW,SET_PAGINATION:()=>y.fT,SHOW_ENTITIES:()=>y.u4,SYSTEM_ISSUE_TYPES:()=>y.dF,TOGGLE_DRAWER:()=>y.Ji,TOGGLE_TAG_MODAL:()=>y.Qd,UPDATE_ENTITIES:()=>y.s$,asyncActions:()=>y.zW,asyncInventory:()=>y.gl,clearEntitiesAction:()=>g.s$,clearErrors:()=>g.b9,clearFilters:()=>g.K5,clearNotifications:()=>g.L1,configChanged:()=>g.u3,deleteEntity:()=>g.Ks,editAnsibleHost:()=>g.Uw,editDisplayName:()=>g.$Y,entitesDetailReducer:()=>d.CB,entitiesLoading:()=>g.nE,entitiesReducer:()=>d.zw,entityDetailsReducer:()=>d.gA,fetchAllTags:()=>g.C8,fetchGroupDetail:()=>g.JM,fetchGroups:()=>g.bt,fetchGroupsForEntities:()=>g.d6,fetchOperatingSystems:()=>g.g6,filterEntities:()=>g.CP,filterSelect:()=>g.fg,getAdvisorData:()=>g.gb,getComplianceData:()=>g.Oj,getPatchData:()=>g.k0,getVulnData:()=>g.Fo,loadEntities:()=>g.il,loadEntity:()=>g.A_,loadTags:()=>g.me,mergeWithDetail:()=>d.OL,mergeWithEntities:()=>d.AF,selectEntity:()=>g.CL,setFilter:()=>g.Tv,setPagination:()=>g.Jr,setSort:()=>g.HD,systemIssues:()=>y.AN,systemProfile:()=>g.eR,tableReducer:()=>d.M,toggleDrawer:()=>g.wb,toggleTagModal:()=>g.Ar,updateEntities:()=>g.jB});var i=r(87462),a=r(4942),o=r(45987),s=r(92950),c=r.n(s),l=r(45697),u=r.n(l),p=r(60261),f=r(371),d=r(81730),g=r(94474),y=r(59086),E=r(73880),O=r(66702),m=r(454),b=["component","onLoad","store","innerRef"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=d.OL,h=(0,o.Z)(n,["mergeWithDetail"]),I=function(e){var t=e.component,r=e.onLoad,n=e.store,a=e.innerRef,l=(0,o.Z)(e,b);return(0,s.useEffect)((function(){null==r||r(T(T(T({},h),E),{},{api:O,mergeWithDetail:P}))}),[]),c().createElement(f.r,{appName:"inventory",checkResourceDefinitions:!0},c().createElement(p.Provider,{store:n},c().createElement(m.Z,(0,i.Z)({},l,{isRbacEnabled:!0,inventoryRef:a,store:n,cmp:t}))))};I.propTypes={store:u().object,onLoad:u().func,component:u().elementType.isRequired,history:u().object,innerRef:u().shape({current:u().any})},I.defaultProps={onLoad:function(){}};const _=I},79680:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(87462),i=r(92950),a=r.n(i),o=r(39142),s=r(61013),c=function(e){return a().createElement(o.Z,(0,n.Z)({},e,{component:s.Z}))};const l=a().forwardRef((function(e,t){return a().createElement(c,(0,n.Z)({},e,{innerRef:t}))}))},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>T,CB:()=>v,M:()=>b,OL:()=>P,ZP:()=>h,gA:()=>p.ZP,zw:()=>u.ZP});var n,i=r(4942),a=r(59086),o=r(57785),s=r(18546),c=r(35240),l=r(83215),u=r(21216),p=r(48536),f=r(34150),d=r(52987);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={loaded:!1,selected:new Map};function O(e){return y(y({},e),{},{loaded:!0})}var m={notifications:l.ee,systemProfileStore:o.default,groups:f.Z,groupDetail:d.Z},b=(0,s.Gg)((n={},(0,i.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return y(y({},e),{},{rows:(0,c.r0)([e.rows,r.results]),entities:(0,c.r0)([e.entities,r.results])})})),(0,i.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r,n,i=t.payload,a=t.meta;return(null==a?void 0:a.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:!0===(null==a||null===(r=a.controller)||void 0===r||null===(n=r.signal)||void 0===n?void 0:n.aborted)?E:y(y({},e),{},{rows:(0,c.r0)([e.rows,i.results.map((function(t){return y(y({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,i.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),y(y({},e),{},{selected:new Map(n)})})),(0,i.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(Array.isArray(r.id))r.id.forEach((function(e){n.set(e.id,e)}));else if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var i=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,y(y({},i||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return y(y({},e),{},{selected:new Map(n)})})),(0,i.Z)(n,"FILTER_SELECT",(function(e){return y(y({},e),{},{selected:{}})})),(0,i.Z)(n,a.uW,(function(e,t){var r=t.payload;return y(y({},e),{},{activeFilters:r.filtersList})})),(0,i.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),i=parseInt(r.page,10);return y(y({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(i)?1:i})})),(0,i.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,p.i8),n),E),v=function(){return(0,s.Gg)((0,i.Z)({},a.AL.LOAD_ENTITY_FULFILLED,O),E)};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return y({},e(y({},(0,s.Gg)(y({},u.ZP),y(y({},u.W2),t))(r,n)),n))}}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return y({},e(y({},(0,s.Gg)(y({},p.ZP),y(y({},p.PY),t))(r,n)),n))}}}const h=m},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>y,calculateRepos:()=>g,default:()=>O,defaultState:()=>u,formatBytes:()=>f,onSystemProfile:()=>E,sizes:()=>p,systemProfilePending:()=>d});var n,i=r(93433),a=r(4942),o=r(18546),s=r(59086);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={loaded:!1},p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],f=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};function d(e){return l(l({},e),{},{systemProfile:{loaded:!1}})}function g(e){return e&&e.reduce((function(e,t){return l(l({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,i.Z)(e.enabled),[t])}:{disabled:[].concat((0,i.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function y(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,i.Z)(e.interfaces),[t]),ipv4:[].concat((0,i.Z)(e.ipv4),(0,i.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,i.Z)(e.ipv6),(0,i.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function E(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return l(l({},e),{},{disabledApps:(0,i.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:l(l({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&f(n.system_memory_bytes),repositories:g(n.yum_repos),network:y(n.network_interfaces)})})}const O=(0,o.Gg)((n={},(0,a.Z)(n,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,E),(0,a.Z)(n,s.aI.LOAD_SYSTEM_PROFILE_PENDING,d),n),{systemProfile:u})},80598:()=>{},10108:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./InventoryDetailHead.4ed1af77b6047bc3bf65c88e832c5954.js.map