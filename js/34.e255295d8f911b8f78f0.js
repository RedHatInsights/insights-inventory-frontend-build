(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[34],{13784:(e,t,n)=>{"use strict";n.d(t,{js:()=>r,h3:()=>l});var r=[{staleFilter:["fresh","stale"]},{registeredWithFilter:["insights"]}],i=function(e){return!e||0===(null==e?void 0:e.length)},l=function(e,t,n,r){return[!i(e)&&{staleFilter:Array.isArray(e)?e:[e]},!i(n)&&{tagFilters:Array.isArray(n)?n:[n]},!i(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!i(r)&&{value:"hostname_or_id",filter:Array.isArray(r)?r[0]:r},(!i(e)||!i(n)||!i(r))&&i(t)&&{registeredWithFilter:[]},(!i(t)||!i(n)||!i(r))&&i(e)&&{staleFilter:[]}].filter(Boolean)}},80815:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(92950),i=n.n(r),l=n(45697),a=n.n(l),o=n(80236),s=n(79851),u=n(34512),c=n(49739),d=n(83826),f=n(48140),v=n(86050),m=n(47173),g=n(94008),p=n(69957),h=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,l=e.currentSytem,a=e.onConfirm,h="system";return Array.isArray(l)?(t=1===l.length?l[0].display_name:"".concat(l.length," systems"),h=1===l.length?h:"systems"):t=l.displayName,i().createElement(o.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)},appendTo:document.getElementsByClassName("inventory")[0]},i().createElement(s.P,{hasGutter:!0},i().createElement(u.J,null,i().createElement(p.ZP,{size:"xl",className:"ins-m-alert"})),i().createElement(u.J,{isFilled:!0},i().createElement(c.K,{hasGutter:!0},i().createElement(d.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",h," to add it back to your inventory."),i().createElement(d.v,null,"To disable the daily upload for this ",h,", use the following command:"),i().createElement(d.v,null,i().createElement(g.M5,null,"insights-client --unregister"))))),i().createElement(f.a,{hasGutter:!0},i().createElement(v.Z,null,i().createElement(m.zx,{variant:"danger",onClick:a,ouiaId:"confirm-delete"},"Remove"),i().createElement(m.zx,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},y=a().shape({id:a().string,displayName:a().string});h.propTypes={isModalOpen:a().bool,currentSytem:a().oneOfType([y,a().arrayOf(y)]),handleModalToggle:a().func,onConfirm:a().func},h.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};const E=h},32034:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculatePagination:()=>R,default:()=>j});var r=n(22122),i=n(96156),l=n(34738),a=n(92950),o=n.n(a),s=n(45697),u=n.n(s),c=n(557),d=n(16530),f=(n(89223),n(48716)),v=n(39173),m=n(86350),g=n(30319),p=n(50289),h=n(50693),y=n(16475),E=n(35435),b=n(80815),O=n(30092),F=n(94654),_=n.n(F),S=n(13784),w=n(33739);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e,t){return e.payload.then(t),e},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},T=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},k={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",_()(n,T))}},R=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),l=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(l))&&e.append("per_page",l)},Z=function(e){var t=e.status,n=e.source,i=e.filterbyName,s=e.tagsFilter,u=e.page,F=e.perPage;document.title="Inventory | Red Hat Insights";var _=(0,d.useHistory)(),P=(0,a.useContext)(g.gE).getRegistry,T=(0,a.useRef)(null),Z=(0,a.useState)(!1),j=(0,l.Z)(Z,2),D=j[0],I=j[1],M=(0,a.useState)({}),L=(0,l.Z)(M,2),W=L[0],x=L[1],G=(0,a.useState)([]),z=(0,l.Z)(G,2),B=z[0],Y=z[1],J=(0,a.useState)(!1),K=(0,l.Z)(J,2),U=K[0],q=K[1],H=(0,a.useState)(),V=(0,l.Z)(H,2),$=V[0],Q=V[1],X=(0,c.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),c.shallowEqual),ee=X.loading,te=X.writePermissions,ne=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),c.shallowEqual),re=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),ie=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),le=(0,c.useDispatch)(),ae=function(e,t){return le(p.CL(e,t))},oe=function(e,t){null!=e&&e.filters||(e.filters=S.js);var n=null==e?void 0:e.filters.reduce((function(e,t){return A(A(A(A(A({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter})}),{status:void 0,source:void 0,tagsFilter:void 0,filterbyName:void 0}),r=n.status,i=n.source,l=n.tagsFilter,a=n.filterbyName;e.filters=(0,S.h3)(r,i,l,a),Y(null==e?void 0:e.filters);var o=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==k||null===(r=k[n])||void 0===r||r.call(k,t,e)}))}))}(o,null==e?void 0:e.filters),R(o,null==e?void 0:e.page,null==e?void 0:e.per_page);var s=o.toString();_.push({search:s,hash:location.hash}),!t&&null!=T&&T.current?T.current.onRefreshData(e):t&&t(e)};(0,a.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,a=e.data,o=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,a,!1,!0),s=(0,l.Z)(o,3),u=s[0],c=s[1],d=s[2];Q({tags:d,filter:A(A({},null==$?void 0:$.filter),{},{system_profile:A(A(A({},null==$||null===(r=$.filter)||void 0===r?void 0:r.system_profile),(null==u||null===(i=u.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==c?void 0:c.length)>0&&{sap_sids:c})})})})),le(p.L1())}),[]);var se=function(){return ie?ie.size:0};return o().createElement(o().Fragment,null,o().createElement(f.Z,{className:"pf-m-light"},o().createElement(v.Z,{title:"Inventory"})),o().createElement(m.Z,null,o().createElement(h.r,{gutter:"md"},o().createElement(y.P,{span:12},!ee&&o().createElement(w.Z,(0,r.Z)({customFilters:$,isFullView:!0,ref:T,showTags:!0,onRefresh:oe,hasCheckbox:te,autoRefresh:!0,initialLoading:!0},te&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;x((function(){return{id:r,displayName:i}})),I((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){x((function(){return n})),q((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===se(),variant:"secondary",onClick:function(){x(Array.from(ie.values())),I(!0)}}}]},bulkSelect:{count:se(),items:[{title:"Select none (0)",onClick:function(){ae(-1,!1)}},A({},re&&ne&&ne.length>0?{title:"Select page (".concat(ne.length,")"),onClick:function(){ae(0,!0)}}:{})],checked:N(ne,ie),onSelect:function(e){ae(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return _.push("/".concat(t).concat(n?"/".concat(n):""))},onLoad:function(e){var r,l=e.mergeWithEntities,a=e.INVENTORY_ACTION_TYPES;P().register(A({},l((0,g.zw)(a)))),(null==(r=(0,S.h3)(t,n,s,i))?void 0:r.length)>0&&le(p.Tv(r)),(F||u)&&function(e,t){le(p.Jr(e,t))}(Array.isArray(u)?u[0]:u,Array.isArray(F)?F[0]:F)}}))))),o().createElement(b.Z,{handleModalToggle:I,isModalOpen:D,currentSytem:W,onConfirm:function(){var e,t,n,r,i,l;Array.isArray(W)?(t=W.map((function(e){return e.id})),e=W.length>1?"".concat(W.length," systems"):W[0].display_name):(e=W.displayName,t=[W.id]),n={id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1},le((0,E.wN)(n)),r=t,i=e,l=function(){return oe({filters:B})},le(C(p.Ks(r,i),l)),I(!1)}}),o().createElement(O.TextInputModal,{title:"Edit display name",isOpen:U,value:W.display_name,onCancel:function(){return q(!1)},onSubmit:function(e){var t,n,r;t=W.id,n=e,r=T.current.onRefreshData,le(C(p.$Y(t,n),r)),q(!1)}}))};Z.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().string,tagsFilter:u().any,page:u().oneOfType([u().string,u().number]),perPage:u().oneOfType([u().string,u().number])};const j=Z}}]);
//# sourceMappingURL=../sourcemaps/34.767ff56c6b36dcbe1aa2.js.map