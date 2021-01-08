(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[558],{86363:(e,t,n)=>{"use strict";n.d(t,{js:()=>r,h3:()=>a});var r=[{staleFilter:["fresh","stale"]},{registeredWithFilter:["insights"]}],i=function(e){return!e||0===(null==e?void 0:e.length)},a=function(e,t,n,r){return[!i(e)&&{staleFilter:Array.isArray(e)?e:[e]},!i(n)&&{tagFilters:Array.isArray(n)?n:[n]},!i(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!i(r)&&{value:"hostname_or_id",filter:Array.isArray(r)?r[0]:r},(!i(e)||!i(n)||!i(r))&&i(t)&&{registeredWithFilter:[]},(!i(t)||!i(n)||!i(r))&&i(e)&&{staleFilter:[]}].filter(Boolean)}},81377:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(80150),i=n.n(r),a=n(45697),l=n.n(a),o=n(80236),s=n(79851),c=n(34512),u=n(49739),d=n(83826),f=n(48140),p=n(86050),m=n(47173),g=n(94008),v=n(69957),h=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,a=e.currentSytem,l=e.onConfirm,h="system";return Array.isArray(a)?(t=1===a.length?a[0].display_name:"".concat(a.length," systems"),h=1===a.length?h:"systems"):t=a.displayName,i().createElement(o.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",isOpen:r,onClose:function(){return n(!1)}},i().createElement(s.P,{hasGutter:!0},i().createElement(c.J,null,i().createElement(v.ZP,{size:"xl",className:"ins-m-alert"})),i().createElement(c.J,{isFilled:!0},i().createElement(u.K,{hasGutter:!0},i().createElement(d.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",h," to add it back to your inventory."),i().createElement(d.v,null,"To disable the daily upload for this ",h,", use the following command:"),i().createElement(d.v,null,i().createElement(g.M5,null,"insights-client --unregister"))))),i().createElement(f.a,{hasGutter:!0},i().createElement(p.Z,null,i().createElement(m.zx,{variant:"danger",onClick:l},"Remove"),i().createElement(m.zx,{variant:"link",onClick:function(){return n(!1)}},"Cancel"))))},y=l().shape({id:l().string,displayName:l().string});h.propTypes={isModalOpen:l().bool,currentSytem:l().oneOfType([y,l().arrayOf(y)]),handleModalToggle:l().func,onConfirm:l().func},h.defaultProps={isModalOpen:!1,currentSytem:{},handleModalToggle:function(){},onConfirm:function(){}};const b=h},63558:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculatePagination:()=>D,default:()=>M});var r=n(67154),i=n.n(r),a=n(59713),l=n.n(a),o=n(63038),s=n.n(o),c=n(80150),u=n.n(c),d=n(45697),f=n.n(d),p=n(70983),m=(n(92920),n(45514)),g=n(68433),v=n(44510),h=n(96593),y=n(45696),b=n(50693),E=n(16475),O=n(75061),F=n(20787),_=n(81377),w=n(14040),N=n(94654),P=n.n(N),S=n(86363),A=n(58135);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},R=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},j={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",P()(n,R))}},D=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),a=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(a))&&e.append("per_page",a)},I=function(e){var t=e.clearNotifications,n=e.deleteEntity,r=e.addNotification,a=e.loaded,l=e.rows,o=e.updateDisplayName,d=e.onSelectRows,f=e.selected,m=e.status,y=e.setFilter,F=e.history,N=e.source,P=e.filterbyName,C=e.tagsFilter,R=e.page,I=e.perPage,M=e.setPagination;document.title="Inventory | Red Hat Insights";var L=(0,c.useRef)(null),W=(0,c.useState)(!1),G=s()(W,2),Z=G[0],x=G[1],z=(0,c.useState)({}),B=s()(z,2),J=B[0],Y=B[1],K=(0,c.useState)([]),U=s()(K,2),H=U[0],V=U[1],q=(0,c.useState)(!1),$=s()(q,2),Q=$[0],X=$[1],ee=(0,c.useState)(),te=s()(ee,2),ne=te[0],re=te[1],ie=(0,p.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),p.shallowEqual),ae=ie.loading,le=ie.writePermissions,oe=function(e,t){(null==e?void 0:e.filters)||(e.filters=S.js);var n=null==e?void 0:e.filters.reduce((function(e,t){return T(T(T(T(T({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter})}),{status:void 0,source:void 0,tagsFilter:void 0,filterbyName:void 0}),r=n.status,i=n.source,a=n.tagsFilter,l=n.filterbyName;e.filters=(0,S.h3)(r,i,a,l),V(null==e?void 0:e.filters);var o=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==j||null===(r=j[n])||void 0===r||r.call(j,t,e)}))}))}(o,null==e?void 0:e.filters),D(o,null==e?void 0:e.page,null==e?void 0:e.per_page);var s=o.toString();F.push({search:s,hash:location.hash}),!t&&L&&L.current?L.current.onRefreshData(e):t&&t(e)};(0,c.useEffect)((function(){var e,n;null===(e=insights.chrome)||void 0===e||null===(n=e.hideGlobalFilter)||void 0===n||n.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,a=e.data,l=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,a,!1,!0),o=s()(l,3),c=o[0],u=o[1],d=o[2];re({tags:d,filter:T(T({},null==ne?void 0:ne.filter),{},{system_profile:T(T(T({},null==ne||null===(r=ne.filter)||void 0===r?void 0:r.system_profile),(null==c||null===(i=c.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==u?void 0:u.length)>0&&{sap_sids:u})})}),L.current&&L.current.onRefreshData({})})),t()}),[]);var se=function(){return f?f.size:0};return u().createElement(u().Fragment,null,u().createElement(g.m,{className:"pf-m-light"},u().createElement(g.B,{title:"Inventory"})),u().createElement(v.o,null,u().createElement(b.r,{gutter:"md"},u().createElement(E.P,{span:12},!ae&&u().createElement(A.e_,i()({customFilters:ne,isFullView:!0,ref:L,showTags:!0,onRefresh:oe,hasCheckbox:le},le&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;Y((function(){return{id:r,displayName:i}})),x((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){Y((function(){return n})),X((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===se(),variant:"secondary",onClick:function(){Y(Array.from(f.values())),x(!0)}}}]},bulkSelect:{count:se(),items:[{title:"Select none (0)",onClick:function(){d(-1,!1)}},T({},a&&l&&l.length>0?{title:"Select page (".concat(l.length,")"),onClick:function(){d(0,!0)}}:{})],checked:k(l,f),onSelect:function(e){d(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return F.push("/".concat(t).concat(n?"/".concat(n):""))},onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES;(0,O.JH)().register(T({},t((0,h.zw)(n)))),y((0,S.h3)(m,N,C,P)),(I||R)&&M(Array.isArray(R)?R[0]:R,Array.isArray(I)?I[0]:I)}}))))),u().createElement(_.Z,{handleModalToggle:x,isModalOpen:Z,currentSytem:J,onConfirm:function(){var e,t;Array.isArray(J)?(t=J.map((function(e){return e.id})),e=J.length>1?"".concat(J.length," systems"):J[0].display_name):(e=J.displayName,t=[J.id]),r({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1}),n(t,e,(function(){return oe({filters:H})})),x(!1)}}),u().createElement(w.Z,{title:"Edit display name",isOpen:Q,value:J.display_name,onCancel:function(){return X(!1)},onSubmit:function(e){o(J.id,e,L.current.onRefreshData),X(!1)}}))};I.contextTypes={store:f().object},I.propTypes={rows:f().arrayOf(f().shape({id:f().string,selected:f().bool})),loaded:f().bool,loadEntity:f().func,clearNotifications:f().func,deleteEntity:f().func,addNotification:f().func,updateDisplayName:f().func,onSelectRows:f().func,setFilter:f().func,selected:f().object,status:f().oneOfType([f().arrayOf(f().string),f().string]),source:f().oneOfType([f().arrayOf(f().string),f().string]),filterbyName:f().string,tagsFilter:f().any,history:f().shape({push:f().func}),page:f().oneOfType([f().string,f().number]),perPage:f().oneOfType([f().string,f().number]),setPagination:f().func};const M=(0,m.Z)((0,p.connect)((function(e){var t=e.entities;return{rows:t&&t.rows,loaded:t&&t.loaded,selected:t&&t.selected}}),(function(e){var t=function(e,t){return e.payload.then(t),e};return{loadEntity:function(t){return e(y.A_(t))},clearNotifications:function(){return e(y.L1())},deleteEntity:function(n,r,i){return e(t(y.Ks(n,r),i))},addNotification:function(t){return e((0,F.wN)(t))},updateDisplayName:function(n,r,i){return e(t(y.$Y(n,r),i))},onSelectRows:function(t,n){return e(y.CL(t,n))},setFilter:function(t){return(null==t?void 0:t.length)>0&&e(y.Tv(t))},setPagination:function(t,n){return e(y.Jr(t,n))}}}))(I))}}]);
//# sourceMappingURL=558.26cea3f2c3d20bdf0fb2.js.map