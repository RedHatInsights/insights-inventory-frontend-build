"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2034],{32034:(e,t,n)=>{n.r(t),n.d(t,{calculatePagination:()=>N,default:()=>T});var r=n(87462),i=n(4942),a=n(93324),l=n(92950),o=n.n(l),s=n(45697),u=n.n(s),c=n(50533),d=n(75662),f=n(48716),v=n(39173),p=n(86350),g=n(30319),h=n(81730),m=n(94778),y=n(50693),b=n(16475),O=n(35435),S=n(39903),F=n(95045),E=n(94654),_=n.n(E),w=n(13784),P=n(89845);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Z=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},A={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",_()(n,Z))}},N=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),a=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(a))&&e.append("per_page",a)},R=function(e){var t=e.status,n=e.source,s=e.filterbyName,u=e.tagsFilter,E=e.page,_=e.perPage,k=e.initialLoading,Z=(0,l.useState)(),R=(0,a.Z)(Z,2),T=R[0],D=R[1];document.title="Inventory | Red Hat Insights";var L=(0,d.useHistory)(),I=(0,c.useStore)(),M=(0,l.useContext)(g.gE).getRegistry,W=(0,l.useRef)(null),x=(0,l.useState)(!1),G=(0,a.Z)(x,2),U=G[0],q=G[1],B=(0,l.useState)({}),H=(0,a.Z)(B,2),K=H[0],z=H[1],J=(0,l.useState)([]),V=(0,a.Z)(J,2),Y=V[0],$=V[1],Q=(0,l.useState)(!1),X=(0,a.Z)(Q,2),ee=X[0],te=X[1],ne=(0,l.useState)(),re=(0,a.Z)(ne,2),ie=re[0],ae=re[1],le=(0,c.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),c.shallowEqual),oe=le.loading,se=le.writePermissions,ue=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),c.shallowEqual),ce=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),de=(0,c.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),fe=(0,c.useDispatch)(),ve=function(e,t){return fe(m.CL(e,t))},pe=function(e,t){null!=e&&e.filters||(e.filters=Object.entries(w.js).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,i.Z)({},n,r)})));var n=((null==e?void 0:e.filters)||[]).reduce((function(e,t){return j(j(j(j(j({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter})}),{status:void 0,source:void 0,tagsFilter:void 0,filterbyName:void 0}),r=n.status,l=n.source,o=n.tagsFilter,s=n.filterbyName;e.filters=(0,w.h3)(r,l,o,s),$(null==e?void 0:e.filters);var u=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==A||null===(r=A[n])||void 0===r||r.call(A,t,e)}))}))}(u,null==e?void 0:e.filters),N(u,null==e?void 0:e.page,null==e?void 0:e.per_page);var c=u.toString();L.push({search:c,hash:location.hash}),!t&&null!=W&&W.current?W.current.onRefreshData(e):t&&t(e)};(0,l.useEffect)((function(){var e,r;null===(e=insights.chrome)||void 0===e||null===(r=e.hideGlobalFilter)||void 0===r||r.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,l=e.data,o=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,l,!1,!0),s=(0,a.Z)(o,3),u=s[0],c=s[1],d=s[2];ae({tags:d,filter:j(j({},null==ie?void 0:ie.filter),{},{system_profile:j(j(j({},null==ie||null===(r=ie.filter)||void 0===r?void 0:r.system_profile),(null==u||null===(i=u.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==c?void 0:c.length)>0&&{sap_sids:c})})})})),fe(m.L1());var i=(0,P.inventoryConnector)(I,void 0,void 0,!0).InventoryTable;D((function(){return i})),M().register(j({},(0,h.AF)(g.M)));var l=(0,w.h3)(t,n,u,s);(null==l?void 0:l.length)>0&&fe(m.Tv(l)),(_||E)&&fe(m.Jr(Array.isArray(E)?E[0]:E,Array.isArray(_)?_[0]:_))}),[]);var ge=function(){return de?de.size:0};return o().createElement(o().Fragment,null,o().createElement(f.Z,{className:"pf-m-light"},o().createElement(v.Z,{title:"Inventory"})),o().createElement(p.Z,null,o().createElement(y.r,{gutter:"md"},o().createElement(b.P,{span:12},!oe&&T&&o().createElement(T,(0,r.Z)({history:L,store:I,customFilters:ie,isFullView:!0,ref:W,showTags:!0,onRefresh:pe,hasCheckbox:se,autoRefresh:!0,initialLoading:k},se&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;z((function(){return{id:r,displayName:i}})),q((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){z((function(){return n})),te((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===ge(),variant:"secondary",onClick:function(){z(Array.from(de.values())),q(!0)}}}]},bulkSelect:{count:ge(),id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){ve(-1,!1)}},j({},ce&&ue&&ue.length>0?{title:"Select page (".concat(ue.length,")"),onClick:function(){ve(0,!0)}}:{})],checked:C(ue,de),onSelect:function(e){ve(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return L.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),o().createElement(S.Z,{handleModalToggle:q,isModalOpen:U,currentSytems:K,onConfirm:function(){var e,t,n,r;Array.isArray(K)?(t=K.map((function(e){return e.id})),e=K.length>1?"".concat(K.length," systems"):K[0].display_name):(e=K.displayName,t=[K.id]),fe((0,O.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),fe((r=function(){return pe({filters:Y})},(n=m.Ks(t,e)).payload.then(r),n)),q(!1)}}),o().createElement(F.TextInputModal,{title:"Edit display name",isOpen:ee,value:K.display_name,onCancel:function(){return te(!1)},onSubmit:function(e){fe(m.$Y(K.id,e)),te(!1)}}))};R.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().string,tagsFilter:u().any,page:u().oneOfType([u().string,u().number]),perPage:u().oneOfType([u().string,u().number]),initialLoading:u().bool},R.defaultProps={initialLoading:!0};const T=R}}]);