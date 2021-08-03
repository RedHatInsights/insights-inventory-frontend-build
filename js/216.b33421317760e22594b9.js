(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[216],{67882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),o=n(13342),i=n(12136);const s=function(){return r().createElement(o.u,{content:"Insights disabled"},r().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},r().createElement(i.ZP,null)))}},5311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),s=function(e){var t,n,a=e.systemProfile;if("RHEL"===(null==a||null===(t=a.operating_system)||void 0===t?void 0:t.name)){var o,i=a.operating_system.major&&a.operating_system.minor&&"".concat(a.operating_system.major,".").concat(null===(o=a.operating_system)||void 0===o?void 0:o.minor)||null;return r().createElement("span",null,"RHEL ",i)}return r().createElement("span",null,(null==a||null===(n=a.operating_system)||void 0===n?void 0:n.name)||"Not available")};s.propTypes={systemProfile:i().shape({name:i().string,major:i().number,minor:i().number,operating_system:i().shape({name:i().string,major:i().number,minor:i().number})})};const l=s},13718:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(92950),r=n.n(a);const o=function(e,t,n,a){return r().createElement("div",{className:"ins-composed-col"},r().createElement("div",{key:"os_release"},null==n?void 0:n.os_release),r().createElement("div",{key:"data",className:null!=a&&a.noDetail?"ins-m-nodetail":""},null!=a&&a.noDetail?e:r().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){!function(e,t,n){var a=n.loaded,r=n.onRowClick,o=n.noDetail;if(a&&!o){var i=e.ctrlKey||e.metaKey||2===e.which;if(i)return;r&&r(e,t,i)}e.preventDefault(),e.stopPropagation()}(e,t,a)}},e)))}},21216:(e,t,n)=>{"use strict";n.d(t,{W2:()=>T,y5:()=>h,nN:()=>b,vI:()=>D,ZP:()=>P});var a,r=n(34738),o=n(81253),i=n(78927),s=n(96156),l=n(92950),c=n.n(l),u=n(59086),d=n(35240),p=n(64107),m=n(66774),g=n(14918),f=n(7739),v=n.n(f),y=n(13718),E=n(67882),_=n(5311),Z=n(13342);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},h=[{key:"display_name",title:"Name",renderFunc:y.Z},{key:"tags",title:"Tags",props:{width:10,isStatic:!0},renderFunc:function(e,t){return c().createElement(g.TagWithDialog,{count:e.length,systemId:t})}},{key:"system_profile",title:c().createElement(Z.u,{content:c().createElement("span",null,"Operating system")},c().createElement("span",null,"OS")),renderFunc:function(e){return c().createElement(_.Z,{systemProfile:e})},props:{width:10,isStatic:!0}},{key:"updated",title:"Last seen",renderFunc:function(e,t,n){var a=n.culled_timestamp,r=n.stale_warning_timestamp,o=n.stale_timestamp,i=n.insights_id;return m.Z?c().createElement(m.Z,{culled:a,staleWarning:r,stale:o,render:function(t){var n=t.msg;return c().createElement(c().Fragment,null,c().createElement(p.Z,{date:e,extraTitle:c().createElement(c().Fragment,null,c().createElement("div",null,n),"Last seen:"," ")}),!i&&c().createElement(E.Z,null))}}," ",c().createElement(p.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:10}}];function w(e,t){var n=t.payload,a=n.results,r=n.per_page,o=n.page,i=n.count,s=n.total,l=n.loaded,c=n.filters;return void 0!==l||void 0!==o&&void 0!==r?O(O({},e),{},{activeFilters:c||[],loaded:void 0===l||l,rows:(0,d.r0)([e.rows,a]).filter((function(e){return!l||e.created})),perPage:void 0!==r?r:e.perPage,page:void 0!==o?o:e.page,count:void 0!==i?i:e.count,total:void 0!==s?s:e.total}):e}function I(e,t){var n=t.payload;return O(O({},e),{},{error:n})}function b(e,t){var n=t.payload,a=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return a.systemId===t})):e.entity||{},i=(r.tags,(0,o.Z)(r,["tags"]));return O(O({},e),{},{tagModalLoaded:!0,activeSystemTag:O(O({},i),{},{tags:Object.values(n.results)[0],tagsCount:a.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function D(e,t){var n=t.payload.isOpen;return O(O({},e),{},{showTagDialog:n,activeSystemTag:void 0})}const P=(a={},(0,s.Z)(a,u.aI.ALL_TAGS_FULFILLED,(function(e,t){var n=t.payload,a=n.results,o=n.total,i=n.page,s=n.per_page;return O(O({},e),{},{allTags:Object.entries(v()(a,(function(e){return e.tag.namespace}))).map((function(e){var t=(0,r.Z)(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:s,page:i},additionalTagsCount:o>s?o-s:0,allTagsTotal:o,allTagsLoaded:!0,tagModalLoaded:!0})})),(0,s.Z)(a,u.aI.ALL_TAGS_PENDING,(function(e){return O(O({},e),{},{allTagsLoaded:!1,tagModalLoaded:!1})})),(0,s.Z)(a,u.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return O(O({},e),{},{columns:(0,d.r0)([h.filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key"),rows:[],loaded:!1})})),(0,s.Z)(a,u.aI.LOAD_ENTITIES_FULFILLED,w),(0,s.Z)(a,u.aI.LOAD_ENTITIES_REJECTED,I),(0,s.Z)(a,u.aI.LOAD_TAGS_PENDING,(function(e,t){var n=t.meta,a=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{},r=(a.tags,(0,o.Z)(a,["tags"]));return O(O({},e),{},{tagModalLoaded:!1,activeSystemTag:O(O({},r),{},{tagsCount:n.tagsCount,tagsLoaded:!1})})})),(0,s.Z)(a,u.aI.LOAD_TAGS_FULFILLED,b),(0,s.Z)(a,u.aI.ALL_TAGS_REJECTED,I),(0,s.Z)(a,u.s$,w),(0,s.Z)(a,u.u4,(function(e,t){return w(e,{payload:O(O({},t.payload),{},{loaded:!1})})})),(0,s.Z)(a,u.hI,(function(e,t){var n=t.payload,a=n.item,r=a.items,s=(0,o.Z)(a,["items"]),l=n.selected,c=e.activeFilters,u=void 0===c?[]:c;if(l){var d=(u=[].concat((0,i.Z)(u),[s],(0,i.Z)(r||[]))).map((function(e){return e.value}));u=u.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else u.splice(u.map((function(e){return e.value})).indexOf(s.value),1),r&&r.forEach((function(e){u.splice(u.map((function(e){return e.value})).indexOf(e.value),1)}));return O(O({},e),{},{activeFilters:u})})),(0,s.Z)(a,u.pr,(function(e,t){var n=t.payload,a=(0,i.Z)(e.rows);return[].concat(n).forEach((function(e){var t=e.id,n=e.selected,r=a.find((function(e){return e.id===t}));r?r.selected=n:a.forEach((function(e){return e.selected=n}))})),O(O({},e),{},{rows:a})})),(0,s.Z)(a,u.WH,(function(e,t){var n=t.payload,a=n.key,r=n.direction;return O(O({},e),{},{sortBy:{key:a,direction:r}})})),(0,s.Z)(a,u.Gs,(function(e){return O(O({},e),{},{activeFilters:[]})})),(0,s.Z)(a,u.jZ,(function(e,t){var n=t.payload.isLoading;return O(O({},e),{},{loaded:!n})})),(0,s.Z)(a,u.Qd,D),(0,s.Z)(a,u.Uq,(function(e,t){var n=t.payload;return O(O({},e),{},{invConfig:n})})),a)}}]);
//# sourceMappingURL=../sourcemaps/216.3ebecc05e858f886ae06.js.map