"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[34],{32034:(e,t,n)=>{n.r(t),n.d(t,{calculatePagination:()=>N,default:()=>L});var r=n(87462),i=n(4942),o=n(93324),l=n(96985),a=n.n(l),s=n(45697),u=n.n(s),c=n(50533),d=n(4874),f=n(48716),v=n(39173),p=n(86350),g=n(30319),m=n(81730),h=n(94778),y=n(50693),b=n(16475),O=n(35435),S=n(39903),F=n(95045),_=n(94654),E=n.n(_),P=n(13784),w=n(89845);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},C=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},Z={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var n=e.osFilter;return null==n?void 0:n.forEach((function(e){return t.append("operating_system",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",E()(n,C))}},N=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),o=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(o))&&e.append("per_page",o)},T=function(e){var t=e.status,n=e.source,s=e.filterbyName,u=e.tagsFilter,_=e.operatingSystem,E=e.page,j=e.perPage,C=e.initialLoading,T=(0,l.useState)(),L=(0,o.Z)(T,2),R=L[0],D=L[1];document.title="Inventory | Red Hat Insights";var I=(0,d.useHistory)(),M=(0,c.useStore)(),W=(0,l.useContext)(g.gE).getRegistry,q=(0,l.useRef)(null),x=(0,l.useState)(!1),G=(0,o.Z)(x,2),U=G[0],B=G[1],H=(0,l.useState)({}),K=(0,o.Z)(H,2),z=K[0],J=K[1],Q=(0,l.useState)([]),V=(0,o.Z)(Q,2),Y=V[0],$=V[1],X=(0,l.useState)(!1),ee=(0,o.Z)(X,2),te=ee[0],ne=ee[1],re=(0,l.useState)(),ie=(0,o.Z)(re,2),oe=ie[0],le=ie[1],ae=(0,c.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),c.shallowEqual),se=ae.loading,ue=ae.writePermissions,ce=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),c.shallowEqual),de=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),fe=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),ve=(0,c.useDispatch)(),pe=function(e,t){return ve(h.CL(e,t))},ge=function(e,t){null!=e&&e.filters||(e.filters=Object.entries(P.js).map((function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,i.Z)({},n,r)})));var n=((null==e?void 0:e.filters)||[]).reduce((function(e,t){return k(k(k(k(k(k({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter}),(null==t?void 0:t.osFilter)&&{operatingSystem:Object.values(t.osFilter||{}).flatMap((function(e){return Object.keys(e)}))})}),{status:void 0,source:void 0,tagsFilter:void 0,filterbyName:void 0,operatingSystem:void 0}),r=n.status,l=n.source,a=n.tagsFilter,s=n.filterbyName,u=n.operatingSystem;e.filters=(0,P.h3)(r,l,a,s,u),$(null==e?void 0:e.filters);var c=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==Z||null===(r=Z[n])||void 0===r||r.call(Z,t,e)}))}))}(c,null==e?void 0:e.filters),N(c,null==e?void 0:e.page,null==e?void 0:e.per_page);var d=c.toString();I.push({search:d,hash:location.hash}),!t&&null!=q&&q.current?q.current.onRefreshData(e):t&&t(e)};(0,l.useEffect)((function(){var e,r;null===(e=insights.chrome)||void 0===e||null===(r=e.hideGlobalFilter)||void 0===r||r.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,l,a,s=e.data,u=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,s,!1,!0),c=(0,o.Z)(u,3),d=c[0],f=c[1],v=c[2];le({tags:v,filter:k(k({},null==oe?void 0:oe.filter),{},{system_profile:k(k(k(k(k({},null==oe||null===(r=oe.filter)||void 0===r?void 0:r.system_profile),(null==d||null===(i=d.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),d&&(null===(l=d["Ansible Automation Platform"])||void 0===l?void 0:l.isSelected)&&{ansible:"not_nil"}),(null==d||null===(a=d["Microsoft SQL"])||void 0===a?void 0:a.isSelected)&&{mssql:"not_nil"}),(null==f?void 0:f.length)>0&&{sap_sids:f})})})})),ve(h.L1());var i=(0,w.inventoryConnector)(M,void 0,void 0,!0).InventoryTable;D((function(){return i})),W().register(k({},(0,m.AF)(g.M)));var l=(0,P.h3)(t,n,u,s,_);(null==l?void 0:l.length)>0&&ve(h.Tv(l)),(j||E)&&ve(h.Jr(Array.isArray(E)?E[0]:E,Array.isArray(j)?j[0]:j))}),[]);var me=function(){return fe?fe.size:0};return a().createElement(a().Fragment,null,a().createElement(f.Z,{className:"pf-m-light"},a().createElement(v.Z,{title:"Inventory"})),a().createElement(p.Z,null,a().createElement(y.r,{gutter:"md"},a().createElement(b.P,{span:12},!se&&R&&a().createElement(R,(0,r.Z)({history:I,store:M,customFilters:oe,isFullView:!0,ref:q,showTags:!0,onRefresh:ge,hasCheckbox:ue,autoRefresh:!0,initialLoading:C},ue&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;J((function(){return{id:r,displayName:i}})),B((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){J((function(){return n})),ne((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===me(),variant:"secondary",onClick:function(){J(Array.from(fe.values())),B(!0)}}}]},bulkSelect:{count:me(),id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){pe(-1,!1)}},k({},de&&ce&&ce.length>0?{title:"Select page (".concat(ce.length,")"),onClick:function(){pe(0,!0)}}:{})],checked:A(ce,fe),onSelect:function(e){pe(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return I.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),a().createElement(S.Z,{handleModalToggle:B,isModalOpen:U,currentSytems:z,onConfirm:function(){var e,t,n,r;Array.isArray(z)?(t=z.map((function(e){return e.id})),e=z.length>1?"".concat(z.length," systems"):z[0].display_name):(e=z.displayName,t=[z.id]),ve((0,O.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),ve((r=function(){return ge({filters:Y})},(n=h.Ks(t,e)).payload.then(r),n)),B(!1)}}),a().createElement(F.TextInputModal,{title:"Edit display name",isOpen:te,value:z.display_name,onCancel:function(){return ne(!1)},onSubmit:function(e){ve(h.$Y(z.id,e)),ne(!1)}}))};T.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),operatingSystem:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().string,tagsFilter:u().any,page:u().oneOfType([u().string,u().number]),perPage:u().oneOfType([u().string,u().number]),initialLoading:u().bool},T.defaultProps={initialLoading:!0};const L=T}}]);
//# sourceMappingURL=../sourcemaps/34.2dcfe7d0b3dc3becc4806421c7825fc8.js.map