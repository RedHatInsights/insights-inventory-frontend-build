"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[216],{67882:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(96985),r=a.n(n),o=a(13342),i=a(12136);const s=function(){return r().createElement(o.u,{content:"Insights disabled"},r().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},r().createElement(i.ZP,null)))}},13718:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(96985),r=a.n(n);const o=function(e,t,a,n){return r().createElement("div",{className:"ins-composed-col"},r().createElement("div",{key:"os_release"},null==a?void 0:a.os_release),r().createElement("div",{key:"data",className:null!=n&&n.noDetail?"ins-m-nodetail":""},null!=n&&n.noDetail?e:r().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){!function(e,t,a){var n=a.loaded,r=a.onRowClick,o=a.noDetail;if(n&&!o){var i=e.ctrlKey||e.metaKey||2===e.which;if(i)return;r&&r(e,t,i)}e.preventDefault(),e.stopPropagation()}(e,t,n)}},e)))}},21216:(e,t,a)=>{a.d(t,{W2:()=>w,y5:()=>I,nN:()=>k,vI:()=>S,ZP:()=>F});var n,r=a(93324),o=a(45987),i=a(89062),s=a(4942),l=a(96985),c=a.n(l),u=a(59086),d=a(35240),p=a(64107),g=a(66774),f=a(14918),m=a(7739),v=a.n(m),y=a(13718),E=a(67882),Z=a(5311),_=a(13342),L=["items"],T=["tags"],D=["tags"];function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},I=[{key:"display_name",title:"Name",renderFunc:y.Z},{key:"tags",title:"Tags",props:{width:10,isStatic:!0},renderFunc:function(e,t){return c().createElement(f.TagWithDialog,{count:e.length,systemId:t})}},{key:"system_profile",title:c().createElement(_.u,{content:c().createElement("span",null,"Operating system")},c().createElement("span",null,"OS")),renderFunc:function(e){return c().createElement(Z.Z,{operatingSystem:null==e?void 0:e.operating_system})},props:{width:10,isStatic:!0}},{key:"updated",title:"Last seen",renderFunc:function(e,t,a){var n=a.culled_timestamp,r=a.stale_warning_timestamp,o=a.stale_timestamp,i=a.insights_id;return g.Z?c().createElement(g.Z,{culled:n,staleWarning:r,stale:o,render:function(t){var a=t.msg;return c().createElement(c().Fragment,null,c().createElement(p.Z,{date:e,extraTitle:c().createElement(c().Fragment,null,c().createElement("div",null,a),"Last seen:"," ")}),!i&&c().createElement(E.Z,null))}}," ",c().createElement(p.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:10}}];function b(e,t){var a=t.payload,n=a.results,r=a.per_page,o=a.page,i=a.count,s=a.total,l=a.loaded,c=a.filters;return t.meta.lastDateRequest<e.lastDateRequest?e:void 0!==l||void 0!==o&&void 0!==r?h(h({},e),{},{activeFilters:c||[],loaded:void 0===l||l,rows:(0,d.r0)([e.rows,n]).filter((function(e){return!l||e.created})),perPage:void 0!==r?r:e.perPage,page:void 0!==o?o:e.page,count:void 0!==i?i:e.count,total:void 0!==s?s:e.total}):e}function P(e,t){var a=t.payload;return h(h({},e),{},{error:a})}function k(e,t){var a=t.payload,n=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{},i=(r.tags,(0,o.Z)(r,T));return h(h({},e),{},{tagModalLoaded:!0,activeSystemTag:h(h({},i),{},{tags:Object.values(a.results)[0],tagsCount:n.tagsCount,page:a.page,perPage:a.per_page,tagsLoaded:!0})})}function S(e,t){var a=t.payload.isOpen;return h(h({},e),{},{showTagDialog:a,activeSystemTag:void 0})}const F=(n={},(0,s.Z)(n,u.aI.ALL_TAGS_FULFILLED,(function(e,t){var a=t.payload,n=a.results,o=a.total,i=a.page,s=a.per_page;return t.meta.lastDateRequestTags<e.lastDateRequestTags?e:h(h({},e),{},{allTags:Object.entries(v()(n,(function(e){return e.tag.namespace}))).map((function(e){var t=(0,r.Z)(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:s,page:i},additionalTagsCount:o>s?o-s:0,allTagsTotal:o,allTagsLoaded:!0,tagModalLoaded:!0})})),(0,s.Z)(n,u.aI.ALL_TAGS_PENDING,(function(e,t){var a=t.meta;return h(h({},e),{},{allTagsLoaded:!1,tagModalLoaded:!1,lastDateRequestTags:a.lastDateRequestTags})})),(0,s.Z)(n,u.aI.LOAD_ENTITIES_PENDING,(function(e,t){var a=t.meta;return h(h({},e),{},{columns:(0,d.r0)([I.filter((function(e){return"tags"!==e.key||(null==a?void 0:a.showTags)})),e.columns],"key"),rows:[],loaded:!1,lastDateRequest:a.lastDateRequest})})),(0,s.Z)(n,u.aI.LOAD_ENTITIES_FULFILLED,b),(0,s.Z)(n,u.aI.LOAD_ENTITIES_REJECTED,P),(0,s.Z)(n,u.aI.LOAD_TAGS_PENDING,(function(e,t){var a=t.meta,n=e.rows?e.rows.find((function(e){var t=e.id;return a.systemId===t})):e.entity||{},r=(n.tags,(0,o.Z)(n,D));return h(h({},e),{},{tagModalLoaded:!1,activeSystemTag:h(h({},r),{},{tagsCount:a.tagsCount,tagsLoaded:!1})})})),(0,s.Z)(n,u.aI.LOAD_TAGS_FULFILLED,k),(0,s.Z)(n,u.aI.ALL_TAGS_REJECTED,P),(0,s.Z)(n,u.s$,b),(0,s.Z)(n,u.u4,(function(e,t){return b(e,{payload:h(h({},t.payload),{},{loaded:!1})})})),(0,s.Z)(n,u.hI,(function(e,t){var a=t.payload,n=a.item,r=n.items,s=(0,o.Z)(n,L),l=a.selected,c=e.activeFilters,u=void 0===c?[]:c;if(l){var d=(u=[].concat((0,i.Z)(u),[s],(0,i.Z)(r||[]))).map((function(e){return e.value}));u=u.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else u.splice(u.map((function(e){return e.value})).indexOf(s.value),1),r&&r.forEach((function(e){u.splice(u.map((function(e){return e.value})).indexOf(e.value),1)}));return h(h({},e),{},{activeFilters:u})})),(0,s.Z)(n,u.pr,(function(e,t){var a=t.payload,n=(0,i.Z)(e.rows);return[].concat(a).forEach((function(e){var t=e.id,a=e.selected,r=n.find((function(e){return e.id===t}));r?r.selected=a:n.forEach((function(e){return e.selected=a}))})),h(h({},e),{},{rows:n})})),(0,s.Z)(n,u.WH,(function(e,t){var a=t.payload,n=a.key,r=a.direction;return h(h({},e),{},{sortBy:{key:n,direction:r}})})),(0,s.Z)(n,u.Gs,(function(e){return h(h({},e),{},{activeFilters:[]})})),(0,s.Z)(n,u.jZ,(function(e,t){var a=t.payload.isLoading;return h(h({},e),{},{loaded:!a})})),(0,s.Z)(n,u.Qd,S),(0,s.Z)(n,u.Uq,(function(e,t){var a=t.payload;return h(h({},e),{},{invConfig:a})})),n)}}]);
//# sourceMappingURL=../sourcemaps/216.8f6111bc98e5789cbac35e5616bb9e23.js.map