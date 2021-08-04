"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[34],{32034:(e,t,n)=>{n.r(t),n.d(t,{calculatePagination:()=>R,default:()=>T});var r=n(87462),i=n(4942),a=n(93324),o=n(92950),l=n.n(o),s=n(45697),u=n.n(s),c=n(45237),d=n(16530),f=n(48716),v=n(39173),p=n(86350),g=n(30319),h=n(81730),m=n(94778),y=n(50693),b=n(16475),O=n(35435),S=n(39903),F=n(95045),E=n(94654),_=n.n(E),w=n(13784),P=n(89845);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e,t){return e.payload.then(t),e},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},A=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},N={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",_()(n,A))}},R=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),a=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(a))&&e.append("per_page",a)},D=function(e){var t=e.status,n=e.source,s=e.filterbyName,u=e.tagsFilter,E=e.page,_=e.perPage,j=e.initialLoading,A=(0,o.useState)(),D=(0,a.Z)(A,2),T=D[0],L=D[1];document.title="Inventory | Red Hat Insights";var I=(0,d.useHistory)(),M=(0,c.useStore)(),W=(0,o.useContext)(g.gE).getRegistry,x=(0,o.useRef)(null),G=(0,o.useState)(!1),U=(0,a.Z)(G,2),q=U[0],B=U[1],H=(0,o.useState)({}),K=(0,a.Z)(H,2),z=K[0],J=K[1],V=(0,o.useState)([]),Y=(0,a.Z)(V,2),$=Y[0],Q=Y[1],X=(0,o.useState)(!1),ee=(0,a.Z)(X,2),te=ee[0],ne=ee[1],re=(0,o.useState)(),ie=(0,a.Z)(re,2),ae=ie[0],oe=ie[1],le=(0,c.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),c.shallowEqual),se=le.loading,ue=le.writePermissions,ce=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),c.shallowEqual),de=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),fe=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),ve=(0,c.useDispatch)(),pe=function(e,t){return ve(m.CL(e,t))},ge=function(e,t){null!=e&&e.filters||(e.filters=Object.entries(w.js).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,i.Z)({},n,r)})));var n=((null==e?void 0:e.filters)||[]).reduce((function(e,t){return k(k(k(k(k({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter})}),{status:void 0,source:void 0,tagsFilter:void 0,filterbyName:void 0}),r=n.status,o=n.source,l=n.tagsFilter,s=n.filterbyName;e.filters=(0,w.h3)(r,o,l,s),Q(null==e?void 0:e.filters);var u=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==N||null===(r=N[n])||void 0===r||r.call(N,t,e)}))}))}(u,null==e?void 0:e.filters),R(u,null==e?void 0:e.page,null==e?void 0:e.per_page);var c=u.toString();I.push({search:c,hash:location.hash}),!t&&null!=x&&x.current?x.current.onRefreshData(e):t&&t(e)};(0,o.useEffect)((function(){var e,r;null===(e=insights.chrome)||void 0===e||null===(r=e.hideGlobalFilter)||void 0===r||r.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,o=e.data,l=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,o,!1,!0),s=(0,a.Z)(l,3),u=s[0],c=s[1],d=s[2];oe({tags:d,filter:k(k({},null==ae?void 0:ae.filter),{},{system_profile:k(k(k({},null==ae||null===(r=ae.filter)||void 0===r?void 0:r.system_profile),(null==u||null===(i=u.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==c?void 0:c.length)>0&&{sap_sids:c})})})})),ve(m.L1());var i=(0,P.inventoryConnector)(M,void 0,void 0,!0).InventoryTable;L((function(){return i})),W().register(k({},(0,h.AF)(g.M)));var o=(0,w.h3)(t,n,u,s);(null==o?void 0:o.length)>0&&ve(m.Tv(o)),(_||E)&&ve(m.Jr(Array.isArray(E)?E[0]:E,Array.isArray(_)?_[0]:_))}),[]);var he=function(){return fe?fe.size:0};return l().createElement(l().Fragment,null,l().createElement(f.Z,{className:"pf-m-light"},l().createElement(v.Z,{title:"Inventory"})),l().createElement(p.Z,null,l().createElement(y.r,{gutter:"md"},l().createElement(b.P,{span:12},!se&&T&&l().createElement(T,(0,r.Z)({history:I,store:M,customFilters:ae,isFullView:!0,ref:x,showTags:!0,onRefresh:ge,hasCheckbox:ue,autoRefresh:!0,initialLoading:j},ue&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;J((function(){return{id:r,displayName:i}})),B((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){J((function(){return n})),ne((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===he(),variant:"secondary",onClick:function(){J(Array.from(fe.values())),B(!0)}}}]},bulkSelect:{count:he(),items:[{title:"Select none (0)",onClick:function(){pe(-1,!1)}},k({},de&&ce&&ce.length>0?{title:"Select page (".concat(ce.length,")"),onClick:function(){pe(0,!0)}}:{})],checked:Z(ce,fe),onSelect:function(e){pe(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return I.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),l().createElement(S.Z,{handleModalToggle:B,isModalOpen:q,currentSytems:z,onConfirm:function(){var e,t;Array.isArray(z)?(t=z.map((function(e){return e.id})),e=z.length>1?"".concat(z.length," systems"):z[0].display_name):(e=z.displayName,t=[z.id]),ve((0,O.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),ve(C(m.Ks(t,e),(function(){return ge({filters:$})}))),B(!1)}}),l().createElement(F.TextInputModal,{title:"Edit display name",isOpen:te,value:z.display_name,onCancel:function(){return ne(!1)},onSubmit:function(e){ve(C(m.$Y(z.id,e),x.current.onRefreshData)),ne(!1)}}))};D.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().string,tagsFilter:u().any,page:u().oneOfType([u().string,u().number]),perPage:u().oneOfType([u().string,u().number]),initialLoading:u().bool},D.defaultProps={initialLoading:!0};const T=D}}]);
//# sourceMappingURL=../sourcemaps/34.2614e42cd70daf8353b8.js.map