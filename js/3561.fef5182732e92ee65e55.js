(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3561],{67882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),o=n(75824),i=n(50693),l=n(16475),u=n(12136);const s=function(){return a().createElement(o.u,{maxWidth:"14rem",content:a().createElement(i.r,{hasGutter:!0},a().createElement(l.P,null,"Insights client not reporting"),a().createElement(l.P,null,'From the main navigation, open "Registration Assistant" to learn how to set up Insights.'))},a().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},a().createElement(u.ZP,null)))}},5311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),l=function(e){var t=e.operatingSystem;if("RHEL"===(null==t?void 0:t.name)){var n=t.major&&null!==t.minor&&"".concat(t.major,".").concat(null==t?void 0:t.minor)||null;return a().createElement("span",null,"RHEL ",n)}return a().createElement("span",null,(null==t?void 0:t.name)||"Not available")};l.propTypes={operatingSystem:i().shape({name:i().string,major:i().number,minor:i().number})};const u=l},13718:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(92950),a=n.n(r);const o=function(e,t,n,r){return a().createElement("div",{className:"ins-composed-col sentry-mask data-hj-suppress"},a().createElement("div",{key:"os_release"},null==n?void 0:n.os_release),a().createElement("div",{key:"data",className:null!=r&&r.noDetail?"ins-m-nodetail":""},null!=r&&r.noDetail?e:a().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){!function(e,t,n){var r=n.loaded,a=n.onRowClick,o=n.noDetail;if(r&&!o){var i=e.ctrlKey||e.metaKey||2===e.which;if(i)return;a&&a(e,t,i)}e.preventDefault(),e.stopPropagation()}(e,t,r)}},e)))}},21216:(e,t,n)=>{"use strict";n.d(t,{W2:()=>w,ZP:()=>R,nN:()=>F,vI:()=>G,y5:()=>T});var r,a=n(29439),o=n(45987),i=n(4942),l=n(93433),u=n(92950),s=n.n(u),c=n(59086),d=n(35240),p=n(62410),f=n(12385),v=n(73880),m=n(7739),y=n.n(m),g=n(13718),O=n(67882),E=n(5311),I=n(75824),_=n(96396),L=n(62965),D=n(41609),P=n.n(D),b=["items"],Z=["tags"],j=["tags"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,operatingSystems:[],operatingSystemsLoaded:!1,groups:[],invConfig:{},sortBy:{key:"updated",direction:"desc"}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{key:"display_name",sortKey:"display_name",title:"Name",renderFunc:g.Z}].concat((0,l.Z)(e?[{key:"groups",sortKey:"groups",title:"Group",props:{width:10,isStatic:!0},renderFunc:function(e){return P()(e)?"N/A":e[0].name},transforms:[L.fitContent]}]:[]),[{key:"tags",title:"Tags",props:{width:10,isStatic:!0},renderFunc:function(e,t){return s().createElement(v.TagWithDialog,{count:e.length,systemId:t})}},{key:"system_profile",sortKey:"operating_system",dataLabel:"OS",title:s().createElement(I.u,{content:s().createElement("span",null,"Operating system")},s().createElement("span",null,"OS")),renderFunc:function(e){return s().createElement(E.Z,{operatingSystem:null==e?void 0:e.operating_system})},props:{width:10}},{key:"updated",sortKey:"updated",title:"Last seen",renderFunc:function(e,t,n){var r=n.culled_timestamp,a=n.stale_warning_timestamp,o=n.stale_timestamp,i=n.per_reporter_staleness;return f.Z?s().createElement(f.Z,{culled:r,staleWarning:a,stale:o,render:function(t){var n=t.msg;return s().createElement(s().Fragment,null,s().createElement(p.Z,{date:e,extraTitle:s().createElement(s().Fragment,null,s().createElement("div",null,n),"Last seen:"," ")}),(0,_._e)(i)&&s().createElement(O.Z,null))}}," ",s().createElement(p.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:10},transforms:[L.fitContent]}])};function h(e,t){var n=t.payload,r=n.results,a=n.per_page,o=n.page,i=n.count,l=n.total,u=n.loaded,s=n.filters;return t.meta.lastDateRequest<e.lastDateRequest?e:void 0!==u||void 0!==o&&void 0!==a?A(A({},e),{},{activeFilters:s||[],loaded:void 0===u||u,rows:(0,d.r0)([e.rows,r]).filter((function(e){return!u||e.created})),perPage:void 0!==a?a:e.perPage,page:void 0!==o?o:e.page,count:void 0!==i?i:e.count,total:void 0!==l?l:e.total}):e}function N(e,t){var n=t.payload;return A(A({},e),{},{error:n})}function F(e,t){var n=t.payload,r=t.meta,a=e.rows?e.rows.find((function(e){var t=e.id;return r.systemId===t})):e.entity||{},i=(a.tags,(0,o.Z)(a,Z));return A(A({},e),{},{tagModalLoaded:!0,activeSystemTag:A(A({},i),{},{tags:Object.values(n.results)[0],tagsCount:r.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function G(e,t){var n=t.payload.isOpen;return A(A({},e),{},{showTagDialog:n,activeSystemTag:void 0})}const R=(r={},(0,i.Z)(r,c.aI.ALL_TAGS_FULFILLED,(function(e,t){var n=t.payload,r=n.results,o=n.total,i=n.page,l=n.per_page;return t.meta.lastDateRequestTags<e.lastDateRequestTags?e:A(A({},e),{},{allTags:Object.entries(y()(r,(function(e){return e.tag.namespace}))).map((function(e){var t=(0,a.Z)(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:l,page:i},additionalTagsCount:o>l?o-l:0,allTagsTotal:o,allTagsLoaded:!0,tagModalLoaded:!0})})),(0,i.Z)(r,c.aI.ALL_TAGS_PENDING,(function(e,t){var n=t.meta;return A(A({},e),{},{allTagsLoaded:!1,tagModalLoaded:!1,lastDateRequestTags:n.lastDateRequestTags})})),(0,i.Z)(r,c.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return A(A(A({},e),e.columns&&{columns:(0,d.r0)([T().filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key")}||{}),{},{rows:[],loaded:!1,lastDateRequest:n.lastDateRequest})})),(0,i.Z)(r,c.aI.LOAD_ENTITIES_FULFILLED,h),(0,i.Z)(r,c.aI.LOAD_ENTITIES_REJECTED,N),(0,i.Z)(r,c.aI.LOAD_TAGS_PENDING,(function(e,t){var n=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{},a=(r.tags,(0,o.Z)(r,j));return A(A({},e),{},{tagModalLoaded:!1,activeSystemTag:A(A({},a),{},{tagsCount:n.tagsCount,tagsLoaded:!1})})})),(0,i.Z)(r,c.aI.LOAD_TAGS_FULFILLED,F),(0,i.Z)(r,c.aI.ALL_TAGS_REJECTED,N),(0,i.Z)(r,c.aI.OPERATING_SYSTEMS_PENDING,(function(e){return A(A({},e),{},{operatingSystemsLoaded:!1})})),(0,i.Z)(r,c.aI.OPERATING_SYSTEMS_FULFILLED,(function(e,t){var n=t.payload.results;return A(A({},e),{},{operatingSystems:(n||[]).map((function(e){var t=e.value,n=t.name,r=t.major,a=t.minor,o="".concat(r,".").concat(a);return{label:"".concat(n," ").concat(o),value:o}})),operatingSystemsLoaded:!0})})),(0,i.Z)(r,c.s$,h),(0,i.Z)(r,c.u4,(function(e,t){return h(e,{payload:A(A({},t.payload),{},{loaded:!1})})})),(0,i.Z)(r,c.hI,(function(e,t){var n=t.payload,r=n.item,a=r.items,i=(0,o.Z)(r,b),u=n.selected,s=e.activeFilters,c=void 0===s?[]:s;if(u){var d=(c=[].concat((0,l.Z)(c),[i],(0,l.Z)(a||[]))).map((function(e){return e.value}));c=c.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else c.splice(c.map((function(e){return e.value})).indexOf(i.value),1),a&&a.forEach((function(e){c.splice(c.map((function(e){return e.value})).indexOf(e.value),1)}));return A(A({},e),{},{activeFilters:c})})),(0,i.Z)(r,c.pr,(function(e,t){var n=t.payload,r=(0,l.Z)(e.rows);return(Array.isArray(n.id)?n.id.map((function(e){return{id:e,selected:null==n?void 0:n.selected}})):[].concat(n)).forEach((function(e){var t=e.id,n=e.selected,a=r.find((function(e){return e.id===t}));a?a.selected=n:r.forEach((function(e){return e.selected=n}))})),A(A({},e),{},{rows:r})})),(0,i.Z)(r,c.WH,(function(e,t){var n=t.payload,r=n.key,a=n.direction;return A(A({},e),{},{sortBy:{key:r,direction:a}})})),(0,i.Z)(r,c.Gs,(function(e){return A(A({},e),{},{activeFilters:[]})})),(0,i.Z)(r,c.jZ,(function(e,t){var n=t.payload.isLoading;return A(A({},e),{},{loaded:!n})})),(0,i.Z)(r,c.Qd,G),(0,i.Z)(r,c.Uq,(function(e,t){var n=t.payload;return A(A({},e),{},{invConfig:n})})),(0,i.Z)(r,c.g1,(function(){return w})),r)},48536:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g,PY:()=>v,i8:()=>y});var r,a=n(4942),o=n(59086),i=n(21216);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return u(u({},e),{},{systemIssues:u(u({},null==e?void 0:e.systemIssues),t&&(0,a.Z)({},t,{isLoaded:!1}))})}const c=(r={},(0,a.Z)(r,o.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return s(e,"advisor")})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return s(e,"cve")})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return s(e,"patch")})),(0,a.Z)(r,o.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return s(e,"compliance")})),(0,a.Z)(r,o.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,(function(e,t){var n=t.payload;return u(u({},e),{},{systemIssues:u(u({},null==e?void 0:e.systemIssues),{},{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_CVES_FULFILLED,(function(e,t){var n,r,a,o,i,l,s,c,d=t.payload;return u(u({},e),{},{systemIssues:u(u({},null==e?void 0:e.systemIssues),{},{cve:{isLoaded:!0,critical:{count:(null==d||null===(n=d.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==d||null===(a=d.moderate)||void 0===a||null===(o=a.meta)||void 0===o?void 0:o.total_items)||0},important:{count:(null==d||null===(i=d.important)||void 0===i||null===(l=i.meta)||void 0===l?void 0:l.total_items)||0},low:{count:(null==d||null===(s=d.low)||void 0===s||null===(c=s.meta)||void 0===c?void 0:c.total_items)||0}}})})})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,(function(e,t){var n,r,a,o,i,l,s=t.payload;return u(u({},e),{},{systemIssues:u(u({},null==e?void 0:e.systemIssues),{},{patch:{isLoaded:!0,bug:{count:(null==s||null===(n=s.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==s||null===(a=s.data)||void 0===a||null===(o=a.attributes)||void 0===o?void 0:o.rhea_count)||0},security:{count:(null==s||null===(i=s.data)||void 0===i||null===(l=i.attributes)||void 0===l?void 0:l.rhsa_count)||0}}})})})),(0,a.Z)(r,o.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,(function(e,t){var n,r,a=t.payload;return u(u({},e),{},{systemIssues:u(u({},null==e?void 0:e.systemIssues),{},{compliance:{isLoaded:!0,profiles:null==a||null===(n=a.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})})),r);var d;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={loaded:!1};function m(e,t,n){var r=t.meta,a=n?null==r?void 0:r.origValue:null==r?void 0:r.value;return f(f(f({},e),e.rows&&{rows:e.rows.map((function(e){return e.id===(null==r?void 0:r.id)?f(f({},e),{},{ansible_host:a}):e}))}),e.entity&&{entity:f(f({},e.entity),{},{ansible_host:a})})}function y(e,t,n){var r=t.meta,a=n?null==r?void 0:r.origValue:null==r?void 0:r.value;return f(f(f({},e),e.rows&&{rows:e.rows.map((function(e){return e.id===(null==r?void 0:r.id)?f(f({},e),{},{display_name:a}):e}))}),e.entity&&{entity:f(f({},e.entity),{},{display_name:a})})}const g=f((d={},(0,a.Z)(d,o.aI.LOAD_ENTITIES_PENDING,(function(){return v})),(0,a.Z)(d,o.aI.LOAD_ENTITY_PENDING,(function(e){return f(f({},e),{},{loaded:!1})})),(0,a.Z)(d,o.aI.LOAD_ENTITY_FULFILLED,(function(e,t){var n=t.payload;return f(f({},e),{},{loaded:!0,entity:n.results[0]})})),(0,a.Z)(d,o.aI.LOAD_TAGS,i.nN),(0,a.Z)(d,o.aI.LOAD_TAGS_PENDING,(function(e){return f(f({},e),{},{tagModalLoaded:!1})})),(0,a.Z)(d,o.aI.LOAD_TAGS_FULFILLED,i.nN),(0,a.Z)(d,o.Qd,i.vI),(0,a.Z)(d,o.Ji,(function(e,t){var n=t.payload;return f(f({},e),{},{isToggleOpened:null==n?void 0:n.isOpened})})),(0,a.Z)(d,o.aI.UPDATE_DISPLAY_NAME_PENDING,y),(0,a.Z)(d,o.aI.SET_ANSIBLE_HOST_PENDING,m),(0,a.Z)(d,o.aI.UPDATE_DISPLAY_NAME_ERROR,(function(e,t){return y(e,t,!0)})),(0,a.Z)(d,o.aI.SET_ANSIBLE_HOST_ERROR,(function(e,t){return m(e,t,!0)})),d),c)},52987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,a=n(4942),o=n(18546),i=n(59086);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s=(0,o.Gg)((r={},(0,a.Z)(r,i.aI.GROUP_DETAIL_PENDING,(function(e){return u(u({},e),{},{loading:!0,uninitialized:!1})})),(0,a.Z)(r,i.aI.GROUP_DETAIL_FULFILLED,(function(e,t){var n=t.payload;return u(u({},e),{},{loading:!1,rejected:!1,uninitialized:!1,fulfilled:!0,data:n})})),(0,a.Z)(r,i.aI.GROUP_DETAIL_REJECTED,(function(e,t){var n=t.payload;return u(u({},e),{},{loading:!1,rejected:!0,uninitialized:!1,fulfilled:!1,error:n})})),r),{loading:!1,rejected:!1,fulfilled:!1,uninitialized:!0,error:null,data:null})},34150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,a=n(4942),o=n(18546),i=n(59086);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s=(0,o.Gg)((r={},(0,a.Z)(r,i.aI.GROUPS_PENDING,(function(e){return u(u({},e),{},{loading:!0,uninitialized:!1})})),(0,a.Z)(r,i.aI.GROUPS_FULFILLED,(function(e,t){var n=t.payload;return u(u({},e),{},{loading:!1,rejected:!1,uninitialized:!1,fulfilled:!0,data:n})})),(0,a.Z)(r,i.aI.GROUPS_REJECTED,(function(e,t){var n=t.payload;return u(u({},e),{},{loading:!1,rejected:!0,uninitialized:!1,fulfilled:!1,error:n})})),r),{loading:!1,rejected:!1,fulfilled:!1,uninitialized:!0,error:null,data:null})},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3561.013bbb82cf297b96cd5e55dc63246688.js.map