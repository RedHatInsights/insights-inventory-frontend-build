"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9887],{67882:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(92950),a=n.n(r),o=n(35224),i=n(50693),s=n(16475),l=n(12136);const c=function(){return a().createElement(o.u,{maxWidth:"14rem",content:a().createElement(i.r,{hasGutter:!0},a().createElement(s.P,null,"Insights client not reporting"),a().createElement(s.P,null,'From the main navigation, open "Registration Assitant" to learn how to set up Insights.'))},a().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},a().createElement(l.ZP,null)))}},24070:(e,t,n)=>{n.d(t,{Z:()=>r.default});var r=n(43107)},13718:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(92950),a=n.n(r);const o=function(e,t,n,r){return a().createElement("div",{className:"ins-composed-col"},a().createElement("div",{key:"os_release"},null==n?void 0:n.os_release),a().createElement("div",{key:"data",className:null!=r&&r.noDetail?"ins-m-nodetail":""},null!=r&&r.noDetail?e:a().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){!function(e,t,n){var r=n.loaded,a=n.onRowClick,o=n.noDetail;if(r&&!o){var i=e.ctrlKey||e.metaKey||2===e.which;if(i)return;a&&a(e,t,i)}e.preventDefault(),e.stopPropagation()}(e,t,r)}},e)))}},21216:(e,t,n)=>{n.d(t,{W2:()=>w,y5:()=>h,nN:()=>j,vI:()=>F,ZP:()=>T});var r,a=n(29439),o=n(45987),i=n(93433),s=n(4942),l=n(92950),c=n.n(l),u=n(59086),d=n(35240),p=n(62410),f=n(12385),v=n(73880),m=n(7739),y=n.n(m),g=n(13718),O=n(67882),E=n(5311),I=n(35224),L=n(13784),_=["items"],D=["tags"],P=["tags"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},h=[{key:"display_name",title:"Name",renderFunc:g.Z},{key:"tags",title:"Tags",props:{width:10,isStatic:!0},renderFunc:function(e,t){return c().createElement(v.TagWithDialog,{count:e.length,systemId:t})}},{key:"system_profile",title:c().createElement(I.u,{content:c().createElement("span",null,"Operating system")},c().createElement("span",null,"OS")),renderFunc:function(e){return c().createElement(E.Z,{operatingSystem:null==e?void 0:e.operating_system})},props:{width:10,isStatic:!0}},{key:"updated",title:"Last seen",renderFunc:function(e,t,n){var r=n.culled_timestamp,a=n.stale_warning_timestamp,o=n.stale_timestamp,i=n.insights_id;return f.Z?c().createElement(f.Z,{culled:r,staleWarning:a,stale:o,render:function(t){var n=t.msg;return c().createElement(c().Fragment,null,c().createElement(p.Z,{date:e,extraTitle:c().createElement(c().Fragment,null,c().createElement("div",null,n),"Last seen:"," ")}),!i&&c().createElement(O.Z,null))}}," ",c().createElement(p.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:10}}];function S(e,t){var n=t.payload,r=n.results,a=n.per_page,o=n.page,i=n.count,s=n.total,l=n.loaded,c=n.filters;return t.meta.lastDateRequest<e.lastDateRequest?e:void 0!==l||void 0!==o&&void 0!==a?Z(Z({},e),{},{activeFilters:c||[],loaded:void 0===l||l,rows:(0,d.r0)([e.rows,r]).filter((function(e){return!l||e.created})),perPage:void 0!==a?a:e.perPage,page:void 0!==o?o:e.page,count:void 0!==i?i:e.count,total:void 0!==s?s:e.total}):e}function A(e,t){var n=t.payload;return Z(Z({},e),{},{error:n})}function j(e,t){var n=t.payload,r=t.meta,a=e.rows?e.rows.find((function(e){var t=e.id;return r.systemId===t})):e.entity||{},i=(a.tags,(0,o.Z)(a,D));return Z(Z({},e),{},{tagModalLoaded:!0,activeSystemTag:Z(Z({},i),{},{tags:Object.values(n.results)[0],tagsCount:r.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function F(e,t){var n=t.payload.isOpen;return Z(Z({},e),{},{showTagDialog:n,activeSystemTag:void 0})}const T=(r={},(0,s.Z)(r,u.aI.ALL_TAGS_FULFILLED,(function(e,t){var n=t.payload,r=n.results,o=n.total,i=n.page,s=n.per_page;return t.meta.lastDateRequestTags<e.lastDateRequestTags?e:Z(Z({},e),{},{allTags:Object.entries(y()(r,(function(e){return e.tag.namespace}))).map((function(e){var t=(0,a.Z)(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:s,page:i},additionalTagsCount:o>s?o-s:0,allTagsTotal:o,allTagsLoaded:!0,tagModalLoaded:!0})})),(0,s.Z)(r,u.aI.ALL_TAGS_PENDING,(function(e,t){var n=t.meta;return Z(Z({},e),{},{allTagsLoaded:!1,tagModalLoaded:!1,lastDateRequestTags:n.lastDateRequestTags})})),(0,s.Z)(r,u.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return Z(Z({},e),{},{columns:(0,d.r0)([h.filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key"),rows:[],loaded:!1,lastDateRequest:n.lastDateRequest})})),(0,s.Z)(r,u.aI.LOAD_ENTITIES_FULFILLED,S),(0,s.Z)(r,u.aI.LOAD_ENTITIES_REJECTED,A),(0,s.Z)(r,u.aI.LOAD_TAGS_PENDING,(function(e,t){var n=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{},a=(r.tags,(0,o.Z)(r,P));return Z(Z({},e),{},{tagModalLoaded:!1,activeSystemTag:Z(Z({},a),{},{tagsCount:n.tagsCount,tagsLoaded:!1})})})),(0,s.Z)(r,u.aI.LOAD_TAGS_FULFILLED,j),(0,s.Z)(r,u.aI.ALL_TAGS_REJECTED,A),(0,s.Z)(r,u.s$,S),(0,s.Z)(r,u.u4,(function(e,t){return S(e,{payload:Z(Z({},t.payload),{},{loaded:!1})})})),(0,s.Z)(r,u.hI,(function(e,t){var n=t.payload,r=n.item,a=r.items,s=(0,o.Z)(r,_),l=n.selected,c=e.activeFilters,u=void 0===c?[]:c;if(l){var d=(u=[].concat((0,i.Z)(u),[s],(0,i.Z)(a||[]))).map((function(e){return e.value}));u=u.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else u.splice(u.map((function(e){return e.value})).indexOf(s.value),1),a&&a.forEach((function(e){u.splice(u.map((function(e){return e.value})).indexOf(e.value),1)}));return Z(Z({},e),{},{activeFilters:u})})),(0,s.Z)(r,u.pr,(function(e,t){var n=t.payload,r=(0,i.Z)(e.rows);return[].concat(n).forEach((function(e){var t=e.id,n=e.selected,a=r.find((function(e){return e.id===t}));a?a.selected=n:r.forEach((function(e){return e.selected=n}))})),Z(Z({},e),{},{rows:r})})),(0,s.Z)(r,u.WH,(function(e,t){var n=t.payload,r=n.key,a=n.direction;return Z(Z({},e),{},{sortBy:{key:r,direction:a}})})),(0,s.Z)(r,u.Gs,(function(e){return Z(Z({},e),{},{activeFilters:[L.js]})})),(0,s.Z)(r,u.jZ,(function(e,t){var n=t.payload.isLoading;return Z(Z({},e),{},{loaded:!n})})),(0,s.Z)(r,u.Qd,F),(0,s.Z)(r,u.Uq,(function(e,t){var n=t.payload;return Z(Z({},e),{},{invConfig:n})})),r)},30319:(e,t,n)=>{n.d(t,{ll:()=>u.ZP,M:()=>u.M,CB:()=>u.CB,gE:()=>d,S1:()=>p});var r,a=n(92950),o=n(34879),i=n(9036),s=n(84885),l=n(57283),c=n.n(l),u=n(20),d=(0,a.createContext)({getRegistry:function(){}});function p(){r=new o.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new i.xI({},[r.getMiddleware(),c(),(0,s.default)({errorDescriptionKey:["detail","stack"]})].concat(t))}},20:(e,t,n)=>{n.d(t,{ZP:()=>z,CB:()=>V,zw:()=>_.ZP,gA:()=>j,OL:()=>Y,AF:()=>W,M:()=>x});var r=n(4942),a=n(59086),o=n(57785),i=n(92950),s=n.n(i),l=n(32384),c=n(75662),u=n(22663);const d=function(){var e=(0,c.useRouteMatch)("/:inventoryId").params;return s().createElement(u.Z,{appName:"compliance",module:"./SystemDetail",store:(0,l.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)},inventoryId:e.inventoryId,remediationsEnabled:!0})};var p=n(30319);const f=function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,i.useContext)(p.gE).getRegistry;return s().createElement(u.Z,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,customItnlProvider:!0,entity:{id:e.inventoryId}})},v=function(){return s().createElement(u.Z,{appName:"advisor",module:"./SystemDetail",store:(0,l.useStore)(),customItnl:!0,intlProps:{locale:navigator.language.slice(0,2)}})};var m=n(95045);const y=function(){var e=(0,i.useContext)(p.gE).getRegistry;return s().createElement(u.Z,{appName:"patch",module:"./SystemDetail",getRegistry:e})},g=function(){var e=(0,c.useRouteMatch)("/:inventoryId").params,t=(0,i.useContext)(p.gE).getRegistry;return s().createElement(u.Z,{appName:"ros",module:"./SystemDetail",getRegistry:t,inventoryId:e.inventoryId})};var O,E=n(9036),I=n(35240),L=n(83215),_=n(21216);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){return P(P({},e),{},{systemIssues:P(P({},null==e?void 0:e.systemIssues),t&&(0,r.Z)({},t,{isLoaded:!1}))})}const Z=(O={},(0,r.Z)(O,a.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return b(e,"advisor")})),(0,r.Z)(O,a.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return b(e,"cve")})),(0,r.Z)(O,a.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return b(e,"patch")})),(0,r.Z)(O,a.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return b(e,"compliance")})),(0,r.Z)(O,a.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,(function(e,t){var n=t.payload;return P(P({},e),{},{systemIssues:P(P({},null==e?void 0:e.systemIssues),{},{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})})),(0,r.Z)(O,a.dF.LOAD_APPLICABLE_CVES_FULFILLED,(function(e,t){var n,r,a,o,i,s,l,c,u=t.payload;return P(P({},e),{},{systemIssues:P(P({},null==e?void 0:e.systemIssues),{},{cve:{isLoaded:!0,critical:{count:(null==u||null===(n=u.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==u||null===(a=u.moderate)||void 0===a||null===(o=a.meta)||void 0===o?void 0:o.total_items)||0},important:{count:(null==u||null===(i=u.important)||void 0===i||null===(s=i.meta)||void 0===s?void 0:s.total_items)||0},low:{count:(null==u||null===(l=u.low)||void 0===l||null===(c=l.meta)||void 0===c?void 0:c.total_items)||0}}})})})),(0,r.Z)(O,a.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,(function(e,t){var n,r,a,o,i,s,l=t.payload;return P(P({},e),{},{systemIssues:P(P({},null==e?void 0:e.systemIssues),{},{patch:{isLoaded:!0,bug:{count:(null==l||null===(n=l.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==l||null===(a=l.data)||void 0===a||null===(o=a.attributes)||void 0===o?void 0:o.rhea_count)||0},security:{count:(null==l||null===(i=l.data)||void 0===i||null===(s=i.attributes)||void 0===s?void 0:s.rhsa_count)||0}}})})})),(0,r.Z)(O,a.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,(function(e,t){var n,r,a=t.payload;return P(P({},e),{},{systemIssues:P(P({},null==e?void 0:e.systemIssues),{},{compliance:{isLoaded:!0,profiles:null==a||null===(n=a.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})})),O);var w;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={loaded:!1};const j=S((w={},(0,r.Z)(w,a.aI.LOAD_ENTITIES_PENDING,(function(){return A})),(0,r.Z)(w,a.aI.LOAD_ENTITY_PENDING,(function(e){return S(S({},e),{},{loaded:!1})})),(0,r.Z)(w,a.aI.LOAD_ENTITY_FULFILLED,(function(e,t){var n=t.payload;return S(S({},e),{},{loaded:!0,entity:n.results[0]})})),(0,r.Z)(w,a.TP,(function(e,t){var n=t.payload;return S(S({},e),{},{activeApp:n})})),(0,r.Z)(w,a.aI.LOAD_TAGS,_.nN),(0,r.Z)(w,a.aI.LOAD_TAGS_PENDING,(function(e){return S(S({},e),{},{tagModalLoaded:!1})})),(0,r.Z)(w,a.aI.LOAD_TAGS_FULFILLED,_.nN),(0,r.Z)(w,a.Qd,_.vI),(0,r.Z)(w,a.Ji,(function(e,t){var n=t.payload;return S(S({},e),{},{isToggleOpened:null==n?void 0:n.isOpened})})),w),Z);var F;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const R=(0,E.Gg)((F={},(0,r.Z)(F,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_PENDING"),(function(e){return N(N({},e),{},{loadingFailed:!1,loading:!0,writePermissions:void 0})})),(0,r.Z)(F,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),(function(e,t){var n=t.payload;return N(N({},e),{},{loading:!1,loadingFailed:!1,writePermissions:n.writePermissions})})),(0,r.Z)(F,"".concat(a.aI.LOAD_WRITE_PERMISSIONS,"_FAILED"),(function(e){return N(N({},e),{},{loading:!1,loadingFailed:!0})})),F),{loading:!0,writePermissions:!1,loadingFailed:!1});var C;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={loaded:!1,selected:new Map};function B(e){return G(G({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:m.default},{title:"Advisor",name:"advisor",component:v},{title:"Vulnerability",name:"vulnerabilities",component:f},{title:"Compliance",name:"compliance",component:d},{title:"Patch",name:"patch",component:y},{title:"Resource Optimization",name:"ros",isVisible:!1,component:g}].filter(Boolean)})}function U(e,t){var n,r=t.payload;return G(G({},e),{},{activeApps:null===(n=e.activeApps)||void 0===n?void 0:n.map((function(e){return"ros"===e.name?G(G({},e),{},{isVisible:r}):e}))})}var q={notifications:L.ee,systemProfileStore:o.ZP,permissionsReducer:R},x=(0,E.Gg)((C={},(0,r.Z)(C,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return G(G({},e),{},{rows:(0,I.r0)([e.rows,n.results]),entities:(0,I.r0)([e.entities,n.results])})})),(0,r.Z)(C,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload,r=t.meta;return(null==r?void 0:r.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:G(G({},e),{},{rows:(0,I.r0)([e.rows,n.results.map((function(t){return G(G({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,r.Z)(C,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),G(G({},e),{},{selected:new Map(r)})})),(0,r.Z)(C,a.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,G(G({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return G(G({},e),{},{selected:new Map(r)})})),(0,r.Z)(C,"FILTER_SELECT",(function(e){return G(G({},e),{},{selected:{}})})),(0,r.Z)(C,a.uW,(function(e,t){var n=t.payload;return G(G({},e),{},{activeFilters:n.filtersList})})),(0,r.Z)(C,a.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),a=parseInt(n.page,10);return G(G({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(a)?1:a})})),(0,r.Z)(C,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,(function(e,t){var n=t.meta;return G(G({},e),{},{rows:e.rows.map((function(e){return e.id===(null==n?void 0:n.id)?G(G({},e),{},{display_name:null==n?void 0:n.value}):e}))})})),C),k),V=function(){var e;return(0,E.Gg)((e={},(0,r.Z)(e,a.AL.LOAD_ENTITY_FULFILLED,B),(0,r.Z)(e,a.AL.LOAD_SYSTEM_PROFILE_FULFILLED,U),e),k)};function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return G({},e(G({},(0,E.Gg)(G({},_.ZP),G(G({},_.W2),t))(n,r)),r))}}}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return G({},e(G({},(0,E.Gg)(G({},j),G(G({},A),t))(n,r)),r))}}}const z=q},57785:(e,t,n)=>{n.d(t,{ZP:()=>p});var r,a=n(93433),o=n(4942),i=n(9036),s=n(59086);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(u[t])};const p=(0,i.Gg)((r={},(0,o.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_FULFILLED,(function(e,t){var n,r,o=t.payload.results,i=o&&o[0]&&o[0].system_profile||{},s=o&&o[0]&&void 0!==o[0].system_profile.cloud_provider&&o[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,a.Z)("aws"===s||"azure"===s?[]:["ros"]),systemProfile:c(c({loaded:!0},i),{},{ramSize:i.system_memory_bytes&&d(i.system_memory_bytes),repositories:(r=i.yum_repos,r&&r.reduce((function(e,t){return c(c({},e),t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})),network:(n=i.network_interfaces,n&&n.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]}))})})})),(0,o.Z)(r,s.aI.LOAD_SYSTEM_PROFILE_PENDING,(function(e){return c(c({},e),{},{systemProfile:{loaded:!1}})})),r),{systemProfile:{loaded:!1}})}}]);