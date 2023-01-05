"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5543],{53754:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(92950);const i=n.n(r)().createContext("light")},14748:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(85893),i=n(92950),a=n.n(i),o=n(94184),l=n.n(o),c=n(32384),s=n(53754),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},d=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};const p=(0,c.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,i=void 0===n?{}:n,o=e.children,c=e.className,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["path","params","children","className"]),f=function(){var e,n,r;if(null===(r=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var a=window.insights.chrome.$internal.store.getState();if(t&&a)return t.split("/").reduce((function(e,t){var n,r;return 0===t.indexOf(":")?e.dynamic=u(u({},e.dynamic),((n={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=i[t.substr(1)],n)):e.staticPart=d(d([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),h=f.dynamic,v=f.staticPart;return(0,r.jsx)(s.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var n=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",u({},p,h,{"page-type":v.join("-"),className:"".concat(l()(c,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)},{children:a().Children.map(o,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",u({},p,h,{"page-type":v.join("-"),className:"".concat(l()(c,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},80123:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(85893),i=n(94184),a=n.n(i),o=n(53754),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,n=e.children,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className","children"]),c=a()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Z.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var s=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",l({},i,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},94800:(e,t,n)=>{n.r(t),n.d(t,{calculatePagination:()=>L,default:()=>R});var r=n(87462),i=n(4942),a=n(29439),o=n(92950),l=n.n(o),c=n(45697),s=n.n(c),u=n(32384),d=n(75662),p=n(80123),f=n(85893),h=n(94184),v=n.n(h),g=n(48542),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};const m=function(e){var t=e.className,n=e.title,r=v()(t);return(0,f.jsx)(g.Title,y({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:n}))};var O=n(14748),b=n(30319),F=n(14122),j=n(94778),w=n(50693),_=n(16475),S=n(83215),P=n(39903),E=n(95045),N=n(94654),k=n.n(N),A=n(13784),C=n(52165);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},I=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},M={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var n=e.osFilter;return null==n?void 0:n.forEach((function(e){return t.append("operating_system",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",k()(n,I))},rhcdFilter:function(e,t){var n=e.rhcdFilter;return null==n?void 0:n.forEach((function(e){return t.append(A.Ih,e)}))},updateMethodFilter:function(e,t){var n=e.updateMethodFilter;return null==n?void 0:n.forEach((function(e){return t.append(A.cE,e)}))}},L=function(e,t,n){var r=new URLSearchParams(location.search),i=void 0!==t?t:r.get("page"),a=void 0!==n?n:r.get("per_page");!isNaN(parseInt(i))&&e.append("page",i),!isNaN(parseInt(a))&&e.append("per_page",a)},D=function(e){var t=e.status,n=e.source,i=e.filterbyName,c=e.tagsFilter,s=e.operatingSystem,f=e.rhcdFilter,h=e.updateMethodFilter,v=e.page,g=e.perPage,y=e.initialLoading,N=(0,o.useState)(),k=(0,a.Z)(N,2),Z=k[0],I=k[1];document.title="Inventory | Red Hat Insights";var D=(0,d.useHistory)(),R=(0,u.useStore)(),$=(0,A.jy)(),H=(0,o.useRef)(null),W=(0,o.useState)(!1),z=(0,a.Z)(W,2),G=z[0],U=z[1],q=(0,o.useState)({}),B=(0,a.Z)(q,2),K=B[0],J=B[1],Q=(0,o.useState)([]),V=(0,a.Z)(Q,2),Y=V[0],X=V[1],ee=(0,o.useState)(!1),te=(0,a.Z)(ee,2),ne=te[0],re=te[1],ie=(0,o.useState)(),ae=(0,a.Z)(ie,2),oe=ae[0],le=ae[1],ce=(0,A.Mo)(),se=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),u.shallowEqual),ue=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),de=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),pe=(0,u.useDispatch)(),fe=function(e,t){return pe(j.CL(e,t))},he=function(e,t){var n,r=null==e||null===(n=e.filters)||void 0===n?void 0:n.filter((function(e){return e.osFilter})),i=((null==e?void 0:e.filters)||[]).reduce((function(e,t){return T(T(T(T(T(T(T(T({},e),(null==t?void 0:t.staleFilter)&&{status:t.staleFilter}),(null==t?void 0:t.registeredWithFilter)&&{source:t.registeredWithFilter}),(null==t?void 0:t.tagFilters)&&{tagsFilter:t.tagFilters}),"hostname_or_id"===(null==t?void 0:t.value)&&{filterbyName:t.filter}),(null==t?void 0:t.osFilter)&&{operatingSystem:r[0].osFilter.length>0?r[0].osFilter:Object.values(t.osFilter||{}).flatMap((function(e){return Object.keys(e)}))}),t.rhcdFilter&&{rhcdFilter:t.rhcdFilter}),t.updateMethodFilter&&{updateMethodFilter:t.updateMethodFilter})}),{}),a=i.status,o=i.source,l=i.tagsFilter,c=i.filterbyName,s=i.operatingSystem,u=i.rhcdFilter,d=i.updateMethodFilter;e.filters=(0,A.h3)(a,o,l,c,s,u,d),X(null==e?void 0:e.filters);var p=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==M||null===(r=M[n])||void 0===r||r.call(M,t,e)}))}))}(p,null==e?void 0:e.filters),L(p,null==e?void 0:e.page,null==e?void 0:e.per_page);var f=p.toString();D.push({search:f,hash:location.hash}),!t&&null!=H&&H.current?H.current.onRefreshData(e):t&&t(e)};(0,o.useEffect)((function(){var e,r;null===(e=insights.chrome)||void 0===e||null===(r=e.hideGlobalFilter)||void 0===r||r.call(e,!1),insights.chrome.appAction("system-list"),insights.chrome.appObjectId(),insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,i,o,l,c=e.data,s=null===(t=insights.chrome)||void 0===t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,c,!1,!0),u=(0,a.Z)(s,3),d=u[0],p=u[1],f=u[2];le({tags:f,filter:T(T({},null==oe?void 0:oe.filter),{},{system_profile:T(T(T(T(T({},null==oe||null===(r=oe.filter)||void 0===r?void 0:r.system_profile),(null==d||null===(i=d.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),d&&(null===(o=d["Ansible Automation Platform"])||void 0===o?void 0:o.isSelected)&&{ansible:"not_nil"}),(null==d||null===(l=d["Microsoft SQL"])||void 0===l?void 0:l.isSelected)&&{mssql:"not_nil"}),(null==p?void 0:p.length)>0&&{sap_sids:p})})})})),pe(j.L1());var o=(0,C.g)(R,void 0,void 0,!0).InventoryTable;I((function(){return o})),$().register(T({},(0,F.AF)(b.M)));var l=(0,A.h3)(t,n,c,i,s,f,h);(null==l?void 0:l.length)>0&&pe(j.Tv(l)),(g||v)&&pe(j.Jr(Array.isArray(v)?v[0]:v,Array.isArray(g)?g[0]:g))}),[]);var ve=function(){return de?de.size:0};return l().createElement(l().Fragment,null,l().createElement(p.Z,{className:"pf-m-light"},l().createElement(m,{title:"Inventory"})),l().createElement(O.Z,null,l().createElement(w.r,{gutter:"md"},l().createElement(_.P,{span:12},Z&&l().createElement(Z,(0,r.Z)({history:D,store:R,customFilters:oe,isFullView:!0,ref:H,showTags:!0,onRefresh:he,hasCheckbox:ce,autoRefresh:!0,initialLoading:y},ce&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,i=n.display_name;J((function(){return{id:r,displayName:i}})),U((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){J((function(){return n})),re((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===ve(),variant:"secondary",onClick:function(){J(Array.from(de.values())),U(!0)}}}]},bulkSelect:{count:ve(),id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){fe(-1,!1)}},T({},ue&&se&&se.length>0?{title:"Select page (".concat(se.length,")"),onClick:function(){fe(0,!0)}}:{})],checked:x(se,de),onSelect:function(e){fe(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return D.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),l().createElement(P.Z,{handleModalToggle:U,isModalOpen:G,currentSytems:K,onConfirm:function(){var e,t,n,r;Array.isArray(K)?(t=K.map((function(e){return e.id})),e=K.length>1?"".concat(K.length," systems"):K[0].display_name):(e=K.displayName,t=[K.id]),pe((0,S.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),pe((r=function(){return he({filters:Y})},(n=j.Ks(t,e)).payload.then(r),n)),U(!1)}}),l().createElement(E.TextInputModal,{title:"Edit display name",isOpen:ne,value:K.display_name,onCancel:function(){return re(!1)},onSubmit:function(e){pe(j.$Y(K.id,e)),re(!1)}}))};D.propTypes={status:s().oneOfType([s().arrayOf(s().string),s().string]),source:s().oneOfType([s().arrayOf(s().string),s().string]),operatingSystem:s().oneOfType([s().arrayOf(s().string),s().string]),filterbyName:s().string,tagsFilter:s().any,page:s().oneOfType([s().string,s().number]),perPage:s().oneOfType([s().string,s().number]),initialLoading:s().bool,rhcdFilter:s().oneOfType([s().arrayOf(s().string),s().string]),updateMethodFilter:s().oneOfType([s().arrayOf(s().string),s().string])},D.defaultProps={initialLoading:!0};const R=D}}]);