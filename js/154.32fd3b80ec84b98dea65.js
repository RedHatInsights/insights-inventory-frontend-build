(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[154],{67389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(87462),i=n(45987),a=n(92950),l=n.n(a),s=n(5436),o=n(16941),c=n(34241),u=n(16537),d=n(29821),m=n(76770),p=n(58409),v=n(28985),E=n(49739),f=n(83826),y=n(45697),h=n.n(y),g=n(50533),_=n(94474),O=n(71710),b=n(21039),T=n(38779),I=n(79851),L=n(34512),P=function(e){var t=e.hideInvLink,n=e.showTags,r=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.display_name})),i=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.id})),a=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.tags}));return l().createElement(E.K,{hasGutter:!0},l().createElement(f.v,null,l().createElement(I.P,null,l().createElement(L.J,{isFilled:!0},l().createElement(T.D,{headingLevel:"h3",size:"xl"},r)),!t&&l().createElement(L.J,null,l().createElement("a",{className:"ins-c-entity-detail__inv-link",href:"./insights/inventory/".concat(i)},"Open in Inventory")))),n&&l().createElement(f.v,null,l().createElement(I.P,{hasGutter:!0},l().createElement(L.J,null,"Tags:"),l().createElement(L.J,null,l().createElement(b.Z,null,0!==(null==a?void 0:a.length)?null==a?void 0:a.map((function(e,t){return l().createElement(O.A,{key:t,isReadOnly:!0},(null==e?void 0:e.namespace)&&"".concat(null==e?void 0:e.namespace,"/"),null==e?void 0:e.key,(null==e?void 0:e.value)&&"=".concat(null==e?void 0:e.value))})):"No tags")))))};P.propTypes={hideInvLink:h().bool,showTags:h().bool},P.defaultProps={hideInvLink:!1,showTags:!1};const w=P;var N=n(86487),D=n(86050),S=n(35664),Z=n(52653),A=n(80971),j=n(19210),F=function(e){var t,n,r,i,s,o,c,u,d,m,p=e.isOpened,v=(0,g.useDispatch)(),y=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.id})),h=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.advisor})),O=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.compliance})),b=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.cve})),I=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.patch}));return(0,a.useEffect)((function(){y&&p&&(v((0,_.gb)(y)),v((0,_.Oj)(y)),v((0,_.k0)(y)),v((0,_.Fo)(y)))}),[y,p]),l().createElement(E.K,{hasGutter:!0,className:"ins-c-inventory__drawer-system-issues"},l().createElement(f.v,null,l().createElement(T.D,{headingLevel:"h4",size:"lg"},"Top system issues")),l().createElement(f.v,null,l().createElement(N.a,null,l().createElement(D.Z,null,l().createElement(E.K,{hasGutter:!0},l().createElement(f.v,{className:"ins-c-inventory__drawer--title"},"Applicable CVEs"),l().createElement(f.v,null,null!=b&&b.isLoaded?l().createElement(N.a,{hasGutter:!0,className:"ins-c-inventory__drawer-cve"},l().createElement(D.Z,{className:"ins-m-critical"},l().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=7")},(null==b||null===(t=b.critical)||void 0===t?void 0:t.count)||0," critical")),l().createElement(D.Z,{className:"ins-m-important"},l().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=5")},(null==b||null===(n=b.important)||void 0===n?void 0:n.count)||0," important")),l().createElement(D.Z,{className:"ins-m-moderate"},l().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=4")},(null==b||null===(r=b.moderate)||void 0===r?void 0:r.count)||0," moderate")),l().createElement(D.Z,{className:"ins-m-low"},l().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=2")},(null==b||null===(i=b.low)||void 0===i?void 0:i.count)||0," low"))):l().createElement(S.Z,{size:S.i.md})))),l().createElement(D.Z,null,l().createElement(E.K,{hasGutter:!0},l().createElement(f.v,{className:"ins-c-inventory__drawer--title"},"Applicable advisories"),l().createElement(f.v,null,null!=I&&I.isLoaded?l().createElement(N.a,{hasGutter:!0,className:"ins-c-inventory__drawer-patch"},l().createElement(D.Z,null,l().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=2")},l().createElement(Z.ZP,null)," ",null==I||null===(s=I.bug)||void 0===s?void 0:s.count)),l().createElement(D.Z,{className:"ins-m-moderate"},l().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=3")},l().createElement(j.ZP,null)," ",null==I||null===(o=I.security)||void 0===o?void 0:o.count)),l().createElement(D.Z,null,l().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=1")},l().createElement(A.ZP,null)," ",null==I||null===(c=I.enhancement)||void 0===c?void 0:c.count))):l().createElement(S.Z,{size:S.i.md})))))),l().createElement(f.v,null,null!=h&&h.isLoaded?l().createElement("span",null,l().createElement("span",{className:"ins-m-critical"},(null==h||null===(u=h.criticalCount)||void 0===u?void 0:u.length)||0," critical")," recommendations in ",l().createElement("a",{href:"./insights/advisor/systems/".concat(y)},"Advisor")):l().createElement(S.Z,{size:S.i.md})),null!=O&&O.isLoaded?(null==O?void 0:O.profiles)&&l().createElement("span",null,"System above compliance threshold for ",l().createElement("a",{href:"./insights/compliance/reports/"},null==O||null===(d=O.profiles)||void 0===d?void 0:d.length," ",(null==O||null===(m=O.profiles)||void 0===m?void 0:m.length)>1?"policies":"policy")):l().createElement(S.Z,{size:S.i.md}))};F.propTypes={isOpened:h().bool};const R=F;var G=n(67866),C=["children","hideInvLink","showTags","Wrapper","className","hasAccess","appName","inventoryId"],k=function(e){var t=e.children,n=e.hideInvLink,y=e.showTags,h=e.Wrapper,O=e.className,b=(e.hasAccess,e.appName),T=e.inventoryId,I=(0,i.Z)(e,C),L=(0,g.useDispatch)(),P=(0,g.useStore)(),N=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity})),D=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.isToggleOpened})),S=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded}));return(0,a.useEffect)((function(){(T&&!N||(null==N?void 0:N.id)!==T)&&L((0,_.A_)(T,{hasItems:!0},{showTags:y}))}),[N,T]),l().createElement(s.dy,(0,r.Z)({className:"ins-c-inventory__drawer ".concat(O||""),isExpanded:D,onExpand:function(){return L((0,_.wb)(!0))}},I),l().createElement(c.s,{panelContent:l().createElement(o.S,null,l().createElement(p.h,null,l().createElement(w,{hideInvLink:n,showTags:y}),l().createElement(m.x,null,l().createElement(v.c,{onClick:function(){return L((0,_.wb)(!1))}}))),l().createElement(d.F,null,l().createElement(E.K,{className:"ins-c-inventory__drawer--content"},l().createElement(f.v,null,l().createElement(R,{isOpened:D})),l().createElement(f.v,{isFilled:!0,className:"ins-c-inventory__drawer--facts"},l().createElement(G.Z,{entity:N,loaded:S}),D&&S&&h&&l().createElement(h,{store:P,appName:b})))))},l().createElement(u.s,null,t)))};k.propTypes={children:h().any,hideInvLink:h().bool,showTags:h().bool,appName:h().oneOf(["general_information","advisor","insights","compliance","vulnerabilities","patch"]),className:h().string,Wrapper:h().elementType,hasAccess:h().bool,inventoryId:h().string.isRequired},k.defaultProps={appName:"general_information"};const M=k},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>f.aI,CHANGE_SORT:()=>f.WH,CLEAR_ENTITIES:()=>f.g1,CLEAR_FILTERS:()=>f.Gs,CLEAR_NOTIFICATIONS:()=>f.wt,CONFIG_CHANGED:()=>f.Uq,ENTITIES_LOADING:()=>f.jZ,FILTER_ENTITIES:()=>f.lP,FILTER_SELECT:()=>f.hI,INVENTORY_ACTION_TYPES:()=>f.AL,SELECT_ENTITY:()=>f.pr,SET_ANSIBLE_HOST:()=>f.Bh,SET_DISPLAY_NAME:()=>f.Ti,SET_INVENTORY_FILTER:()=>f.uW,SET_PAGINATION:()=>f.fT,SHOW_ENTITIES:()=>f.u4,SYSTEM_ISSUE_TYPES:()=>f.dF,TOGGLE_DRAWER:()=>f.Ji,TOGGLE_TAG_MODAL:()=>f.Qd,UPDATE_ENTITIES:()=>f.s$,asyncActions:()=>f.zW,asyncInventory:()=>f.gl,clearEntitiesAction:()=>E.s$,clearFilters:()=>E.K5,clearNotifications:()=>E.L1,configChanged:()=>E.u3,deleteEntity:()=>E.Ks,editAnsibleHost:()=>E.Uw,editDisplayName:()=>E.$Y,entitesDetailReducer:()=>v.CB,entitiesLoading:()=>E.nE,entitiesReducer:()=>v.zw,entityDetailsReducer:()=>v.gA,fetchAllTags:()=>E.C8,fetchGroupDetail:()=>E.JM,fetchGroups:()=>E.bt,fetchOperatingSystems:()=>E.g6,filterEntities:()=>E.CP,filterSelect:()=>E.fg,getAdvisorData:()=>E.gb,getComplianceData:()=>E.Oj,getPatchData:()=>E.k0,getVulnData:()=>E.Fo,loadEntities:()=>E.il,loadEntity:()=>E.A_,loadTags:()=>E.me,mergeWithDetail:()=>v.OL,mergeWithEntities:()=>v.AF,selectEntity:()=>E.CL,setFilter:()=>E.Tv,setPagination:()=>E.Jr,setSort:()=>E.HD,systemIssues:()=>f.AN,systemProfile:()=>E.eR,tableReducer:()=>v.M,toggleDrawer:()=>E.wb,toggleTagModal:()=>E.Ar,updateEntities:()=>E.jB});var i=n(87462),a=n(4942),l=n(45987),s=n(92950),o=n.n(s),c=n(45697),u=n.n(c),d=n(50533),m=n(75662),p=n(371),v=n(81730),E=n(94474),f=n(59086),y=n(73880),h=n(34655),g=n(454),_=["component","onLoad","store","history","innerRef"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=v.OL,I=(0,l.Z)(r,["mergeWithDetail"]),L=function(e){var t=e.component,n=e.onLoad,r=e.store,a=e.history,c=e.innerRef,u=(0,l.Z)(e,_);return(0,s.useEffect)((function(){null==n||n(b(b(b({},I),y),{},{api:h,mergeWithDetail:T}))}),[]),o().createElement(p.r,{appName:"inventory"},o().createElement(d.Provider,{store:r},o().createElement(m.Router,{history:a},o().createElement(g.Z,(0,i.Z)({},u,{isRbacEnabled:!0,inventoryRef:c,store:r,cmp:t})))))};L.propTypes={store:u().object,onLoad:u().func,component:u().elementType.isRequired,history:u().object,innerRef:u().shape({current:u().any})},L.defaultProps={onLoad:function(){}};const P=L},81730:(e,t,n)=>{"use strict";n.d(t,{AF:()=>O,CB:()=>_,M:()=>g,OL:()=>b,ZP:()=>T,gA:()=>d.ZP,zw:()=>u.ZP});var r,i=n(4942),a=n(59086),l=n(57785),s=n(18546),o=n(35240),c=n(83215),u=n(21216),d=n(48536),m=n(34150),p=n(52987);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={loaded:!1,selected:new Map};function y(e){return E(E({},e),{},{loaded:!0})}var h={notifications:c.ee,systemProfileStore:l.default,groups:m.Z,groupDetail:p.Z},g=(0,s.Gg)((r={},(0,i.Z)(r,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return E(E({},e),{},{rows:(0,o.r0)([e.rows,n.results]),entities:(0,o.r0)([e.entities,n.results])})})),(0,i.Z)(r,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload,r=t.meta;return(null==r?void 0:r.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:E(E({},e),{},{rows:(0,o.r0)([e.rows,n.results.map((function(t){return E(E({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,i.Z)(r,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),E(E({},e),{},{selected:new Map(r)})})),(0,i.Z)(r,a.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(Array.isArray(n.id))n.id.forEach((function(e){r.set(e.id,e)}));else if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var i=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,E(E({},i||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return E(E({},e),{},{selected:new Map(r)})})),(0,i.Z)(r,"FILTER_SELECT",(function(e){return E(E({},e),{},{selected:{}})})),(0,i.Z)(r,a.uW,(function(e,t){var n=t.payload;return E(E({},e),{},{activeFilters:n.filtersList})})),(0,i.Z)(r,a.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),i=parseInt(n.page,10);return E(E({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(i)?1:i})})),(0,i.Z)(r,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,d.i8),r),f),_=function(){return(0,s.Gg)((0,i.Z)({},a.AL.LOAD_ENTITY_FULFILLED,y),f)};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return E({},e(E({},(0,s.Gg)(E({},u.ZP),E(E({},u.W2),t))(n,r)),r))}}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return E({},e(E({},(0,s.Gg)(E({},d.ZP),E(E({},d.PY),t))(n,r)),r))}}}const T=h},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>E,calculateRepos:()=>v,default:()=>y,defaultState:()=>u,formatBytes:()=>m,onSystemProfile:()=>f,sizes:()=>d,systemProfilePending:()=>p});var r,i=n(93433),a=n(4942),l=n(18546),s=n(59086);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={loaded:!1},d=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],m=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(d[t])};function p(e){return c(c({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return c(c({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,i.Z)(e.enabled),[t])}:{disabled:[].concat((0,i.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function E(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,i.Z)(e.interfaces),[t]),ipv4:[].concat((0,i.Z)(e.ipv4),(0,i.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,i.Z)(e.ipv6),(0,i.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function f(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},a=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,i.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:c(c({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&m(r.system_memory_bytes),repositories:v(r.yum_repos),network:E(r.network_interfaces)})})}const y=(0,l.Gg)((r={},(0,a.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,f),(0,a.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,p),r),{systemProfile:u})},93818:()=>{},94498:()=>{},80897:()=>{}}]);
//# sourceMappingURL=../sourcemaps/154.6e1288abf21dc86b29305021ea46367e.js.map