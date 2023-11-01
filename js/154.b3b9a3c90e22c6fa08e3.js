(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[154],{67389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(87462),i=n(45987),l=n(92950),a=n.n(l),s=n(5436),o=n(76770),c=n(28985),u=n(34241),d=n(16537),m=n(58409),p=n(29821),v=n(16941),E=n(49739),f=n(83826),y=n(45697),h=n.n(y),g=n(60261),O=n(94474),b=n(71710),_=n(21039),T=n(79851),I=n(34512),L=n(38779),P=function(e){var t=e.hideInvLink,n=e.showTags,r=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.display_name})),i=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.id})),l=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.tags}));return a().createElement(E.K,{hasGutter:!0},a().createElement(f.v,null,a().createElement(T.P,null,a().createElement(I.J,{isFilled:!0},a().createElement(L.D,{headingLevel:"h3",size:"xl"},r)),!t&&a().createElement(I.J,null,a().createElement("a",{className:"ins-c-entity-detail__inv-link",href:"./insights/inventory/".concat(i)},"Open in Inventory")))),n&&a().createElement(f.v,null,a().createElement(T.P,{hasGutter:!0},a().createElement(I.J,null,"Tags:"),a().createElement(I.J,null,a().createElement(_.Z,null,0!==(null==l?void 0:l.length)?null==l?void 0:l.map((function(e,t){return a().createElement(b.A,{key:t,isReadOnly:!0},(null==e?void 0:e.namespace)&&"".concat(null==e?void 0:e.namespace,"/"),null==e?void 0:e.key,(null==e?void 0:e.value)&&"=".concat(null==e?void 0:e.value))})):"No tags")))))};P.propTypes={hideInvLink:h().bool,showTags:h().bool},P.defaultProps={hideInvLink:!1,showTags:!1};const w=P;var D=n(86487),N=n(86050),S=n(35664),Z=n(52653),A=n(80971),j=n(19210),R=function(e){var t,n,r,i,s,o,c,u,d,m,p=e.isOpened,v=(0,g.useDispatch)(),y=(0,g.useSelector)((function(e){var t=e.entityDetails.entity;return null==t?void 0:t.id})),h=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.advisor})),b=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.compliance})),_=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.cve})),T=(0,g.useSelector)((function(e){var t=e.entityDetails.systemIssues;return null==t?void 0:t.patch}));return(0,l.useEffect)((function(){y&&p&&(v((0,O.gb)(y)),v((0,O.Oj)(y)),v((0,O.k0)(y)),v((0,O.Fo)(y)))}),[y,p]),a().createElement(E.K,{hasGutter:!0,className:"ins-c-inventory__drawer-system-issues"},a().createElement(f.v,null,a().createElement(L.D,{headingLevel:"h4",size:"lg"},"Top system issues")),a().createElement(f.v,null,a().createElement(D.a,null,a().createElement(N.Z,null,a().createElement(E.K,{hasGutter:!0},a().createElement(f.v,{className:"ins-c-inventory__drawer--title"},"Applicable CVEs"),a().createElement(f.v,null,null!=_&&_.isLoaded?a().createElement(D.a,{hasGutter:!0,className:"ins-c-inventory__drawer-cve"},a().createElement(N.Z,{className:"ins-m-critical"},a().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=7")},(null==_||null===(t=_.critical)||void 0===t?void 0:t.count)||0," critical")),a().createElement(N.Z,{className:"ins-m-important"},a().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=5")},(null==_||null===(n=_.important)||void 0===n?void 0:n.count)||0," important")),a().createElement(N.Z,{className:"ins-m-moderate"},a().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=4")},(null==_||null===(r=_.moderate)||void 0===r?void 0:r.count)||0," moderate")),a().createElement(N.Z,{className:"ins-m-low"},a().createElement("a",{href:"/insights/vulnerability/systems/".concat(y,"?impact=2")},(null==_||null===(i=_.low)||void 0===i?void 0:i.count)||0," low"))):a().createElement(S.Z,{size:S.i.md})))),a().createElement(N.Z,null,a().createElement(E.K,{hasGutter:!0},a().createElement(f.v,{className:"ins-c-inventory__drawer--title"},"Applicable advisories"),a().createElement(f.v,null,null!=T&&T.isLoaded?a().createElement(D.a,{hasGutter:!0,className:"ins-c-inventory__drawer-patch"},a().createElement(N.Z,null,a().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=2")},a().createElement(Z.ZP,null)," ",null==T||null===(s=T.bug)||void 0===s?void 0:s.count)),a().createElement(N.Z,{className:"ins-m-moderate"},a().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=3")},a().createElement(j.ZP,null)," ",null==T||null===(o=T.security)||void 0===o?void 0:o.count)),a().createElement(N.Z,null,a().createElement("a",{href:"/insights/patch/systems/".concat(y,"/?advisory_type=1")},a().createElement(A.ZP,null)," ",null==T||null===(c=T.enhancement)||void 0===c?void 0:c.count))):a().createElement(S.Z,{size:S.i.md})))))),a().createElement(f.v,null,null!=h&&h.isLoaded?a().createElement("span",null,a().createElement("span",{className:"ins-m-critical"},(null==h||null===(u=h.criticalCount)||void 0===u?void 0:u.length)||0," critical")," ","recommendations in"," ",a().createElement("a",{href:"./insights/advisor/systems/".concat(y)},"Advisor")):a().createElement(S.Z,{size:S.i.md})),null!=b&&b.isLoaded?(null==b?void 0:b.profiles)&&a().createElement("span",null,"System above compliance threshold for"," ",a().createElement("a",{href:"./insights/compliance/reports/"},null==b||null===(d=b.profiles)||void 0===d?void 0:d.length," ",(null==b||null===(m=b.profiles)||void 0===m?void 0:m.length)>1?"policies":"policy")):a().createElement(S.Z,{size:S.i.md}))};R.propTypes={isOpened:h().bool};const F=R;var G=n(67866),C=["children","hideInvLink","showTags","Wrapper","className","appName","inventoryId"],k=function(e){var t=e.children,n=e.hideInvLink,y=e.showTags,h=e.Wrapper,b=e.className,_=e.appName,T=e.inventoryId,I=(0,i.Z)(e,C),L=(0,g.useDispatch)(),P=(0,g.useStore)(),D=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity})),N=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.isToggleOpened})),S=(0,g.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded}));return(0,l.useEffect)((function(){(T&&!D||(null==D?void 0:D.id)!==T)&&L((0,O.A_)(T,{hasItems:!0},{showTags:y}))}),[D,T]),a().createElement(s.dy,(0,r.Z)({className:"ins-c-inventory__drawer ".concat(b||""),isExpanded:N,onExpand:function(){return L((0,O.wb)(!0))}},I),a().createElement(u.s,{panelContent:a().createElement(v.S,null,a().createElement(m.h,null,a().createElement(w,{hideInvLink:n,showTags:y}),a().createElement(o.x,null,a().createElement(c.c,{onClick:function(){return L((0,O.wb)(!1))}}))),a().createElement(p.F,null,a().createElement(E.K,{className:"ins-c-inventory__drawer--content"},a().createElement(f.v,null,a().createElement(F,{isOpened:N})),a().createElement(f.v,{isFilled:!0,className:"ins-c-inventory__drawer--facts"},a().createElement(G.Z,{entity:D,loaded:S}),N&&S&&h&&a().createElement(h,{store:P,appName:_})))))},a().createElement(d.s,null,t)))};k.propTypes={children:h().any,hideInvLink:h().bool,showTags:h().bool,appName:h().oneOf(["general_information","advisor","insights","compliance","vulnerabilities","patch"]),className:h().string,Wrapper:h().elementType,inventoryId:h().string.isRequired},k.defaultProps={appName:"general_information"};const M=k},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>E.aI,CHANGE_SORT:()=>E.WH,CLEAR_ENTITIES:()=>E.g1,CLEAR_ERRORS:()=>E.pp,CLEAR_FILTERS:()=>E.Gs,CLEAR_NOTIFICATIONS:()=>E.wt,CONFIG_CHANGED:()=>E.Uq,ENTITIES_LOADING:()=>E.jZ,FILTER_ENTITIES:()=>E.lP,FILTER_SELECT:()=>E.hI,INVENTORY_ACTION_TYPES:()=>E.AL,SELECT_ENTITY:()=>E.pr,SET_ANSIBLE_HOST:()=>E.Bh,SET_DISPLAY_NAME:()=>E.Ti,SET_INVENTORY_FILTER:()=>E.uW,SET_PAGINATION:()=>E.fT,SHOW_ENTITIES:()=>E.u4,SYSTEM_ISSUE_TYPES:()=>E.dF,TOGGLE_DRAWER:()=>E.Ji,TOGGLE_TAG_MODAL:()=>E.Qd,UPDATE_ENTITIES:()=>E.s$,asyncActions:()=>E.zW,asyncInventory:()=>E.gl,clearEntitiesAction:()=>v.s$,clearErrors:()=>v.b9,clearFilters:()=>v.K5,clearNotifications:()=>v.L1,configChanged:()=>v.u3,deleteEntity:()=>v.Ks,editAnsibleHost:()=>v.Uw,editDisplayName:()=>v.$Y,entitesDetailReducer:()=>p.CB,entitiesLoading:()=>v.nE,entitiesReducer:()=>p.zw,entityDetailsReducer:()=>p.gA,fetchAllTags:()=>v.C8,fetchGroupDetail:()=>v.JM,fetchGroups:()=>v.bt,fetchGroupsForEntities:()=>v.d6,fetchOperatingSystems:()=>v.g6,filterEntities:()=>v.CP,filterSelect:()=>v.fg,getAdvisorData:()=>v.gb,getComplianceData:()=>v.Oj,getPatchData:()=>v.k0,getVulnData:()=>v.Fo,loadEntities:()=>v.il,loadEntity:()=>v.A_,loadTags:()=>v.me,mergeWithDetail:()=>p.OL,mergeWithEntities:()=>p.AF,selectEntity:()=>v.CL,setFilter:()=>v.Tv,setPagination:()=>v.Jr,setSort:()=>v.HD,systemIssues:()=>E.AN,systemProfile:()=>v.eR,tableReducer:()=>p.M,toggleDrawer:()=>v.wb,toggleTagModal:()=>v.Ar,updateEntities:()=>v.jB});var i=n(87462),l=n(4942),a=n(45987),s=n(92950),o=n.n(s),c=n(45697),u=n.n(c),d=n(60261),m=n(371),p=n(81730),v=n(94474),E=n(59086),f=n(73880),y=n(34655),h=n(454),g=["component","onLoad","store","innerRef"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=p.OL,T=(0,a.Z)(r,["mergeWithDetail"]),I=function(e){var t=e.component,n=e.onLoad,r=e.store,l=e.innerRef,c=(0,a.Z)(e,g);return(0,s.useEffect)((function(){null==n||n(b(b(b({},T),f),{},{api:y,mergeWithDetail:_}))}),[]),o().createElement(m.r,{appName:"inventory",checkResourceDefinitions:!0},o().createElement(d.Provider,{store:r},o().createElement(h.Z,(0,i.Z)({},c,{isRbacEnabled:!0,inventoryRef:l,store:r,cmp:t}))))};I.propTypes={store:u().object,onLoad:u().func,component:u().elementType.isRequired,history:u().object,innerRef:u().shape({current:u().any})},I.defaultProps={onLoad:function(){}};const L=I},81730:(e,t,n)=>{"use strict";n.d(t,{AF:()=>b,CB:()=>O,M:()=>g,OL:()=>_,ZP:()=>T,gA:()=>d.ZP,zw:()=>u.ZP});var r,i=n(4942),l=n(59086),a=n(57785),s=n(18546),o=n(35240),c=n(83215),u=n(21216),d=n(48536),m=n(34150),p=n(52987);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={loaded:!1,selected:new Map};function y(e){return E(E({},e),{},{loaded:!0})}var h={notifications:c.ee,systemProfileStore:a.default,groups:m.Z,groupDetail:p.Z},g=(0,s.Gg)((r={},(0,i.Z)(r,l.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return E(E({},e),{},{rows:(0,o.r0)([e.rows,n.results]),entities:(0,o.r0)([e.entities,n.results])})})),(0,i.Z)(r,l.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n,r,i=t.payload,l=t.meta;return(null==l?void 0:l.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:!0===(null==l||null===(n=l.controller)||void 0===n||null===(r=n.signal)||void 0===r?void 0:r.aborted)?f:E(E({},e),{},{rows:(0,o.r0)([e.rows,i.results.map((function(t){return E(E({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,i.Z)(r,"".concat(l.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),E(E({},e),{},{selected:new Map(r)})})),(0,i.Z)(r,l.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(Array.isArray(n.id))n.id.forEach((function(e){r.set(e.id,e)}));else if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var i=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,E(E({},i||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return E(E({},e),{},{selected:new Map(r)})})),(0,i.Z)(r,"FILTER_SELECT",(function(e){return E(E({},e),{},{selected:{}})})),(0,i.Z)(r,l.uW,(function(e,t){var n=t.payload;return E(E({},e),{},{activeFilters:n.filtersList})})),(0,i.Z)(r,l.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),i=parseInt(n.page,10);return E(E({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(i)?1:i})})),(0,i.Z)(r,l.aI.UPDATE_DISPLAY_NAME_FULFILLED,d.i8),r),f),O=function(){return(0,s.Gg)((0,i.Z)({},l.AL.LOAD_ENTITY_FULFILLED,y),f)};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return E({},e(E({},(0,s.Gg)(E({},u.ZP),E(E({},u.W2),t))(n,r)),r))}}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return E({},e(E({},(0,s.Gg)(E({},d.ZP),E(E({},d.PY),t))(n,r)),r))}}}const T=h},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculateInterfaces:()=>E,calculateRepos:()=>v,default:()=>y,defaultState:()=>u,formatBytes:()=>m,onSystemProfile:()=>f,sizes:()=>d,systemProfilePending:()=>p});var r,i=n(93433),l=n(4942),a=n(18546),s=n(59086);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={loaded:!1},d=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],m=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(d[t])};function p(e){return c(c({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return c(c({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,i.Z)(e.enabled),[t])}:{disabled:[].concat((0,i.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function E(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,i.Z)(e.interfaces),[t]),ipv4:[].concat((0,i.Z)(e.ipv4),(0,i.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,i.Z)(e.ipv6),(0,i.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function f(e,t){var n=t.payload.results,r=n&&n[0]&&n[0].system_profile||{},l=n&&n[0]&&void 0!==n[0].system_profile.cloud_provider&&n[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,i.Z)("aws"===l||"azure"===l?[]:["ros"]),systemProfile:c(c({loaded:!0},r),{},{ramSize:r.system_memory_bytes&&m(r.system_memory_bytes),repositories:v(r.yum_repos),network:E(r.network_interfaces)})})}const y=(0,a.Gg)((r={},(0,l.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,f),(0,l.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,p),r),{systemProfile:u})},93818:()=>{},94498:()=>{},80897:()=>{}}]);
//# sourceMappingURL=../sourcemaps/154.739e0210c48b0ce9166ba1844963679a.js.map