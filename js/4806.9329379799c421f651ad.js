"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4806],{68340:(e,t,n)=>{n.d(t,{q:()=>r,x:()=>s});var r,a=n(70655),i=n(92950),o=n(38296),l=n(62873),c=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:u=r.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:f=!0}=e,h=(0,a.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=u,m=(0,c.S$)(s.displayName,p,f);return i.createElement(v,Object.assign({},m,h,{"data-pf-content":!0,className:(0,o.i)(d&&u===r.a&&l.Z.modifiers.visited,n)}),t)};s.displayName="Text"},68774:(e,t,n)=>{n.d(t,{D:()=>l});var r=n(70655),a=n(92950),i=n(62873),o=n(38296);const l=e=>{var{children:t=null,className:n="",isVisited:l=!1}=e,c=(0,r.__rest)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},c,{className:(0,o.i)(i.Z.content,l&&i.Z.modifiers.visited,n)}),t)};l.displayName="TextContent"},25834:(e,t,n)=>{n.d(t,{F:()=>r,G:()=>l});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const l=e=>{var{children:t=null,className:n="",component:l=r.ul}=e,c=(0,a.__rest)(e,["children","className","component"]);const s=l;return i.createElement(s,Object.assign({},c,{className:(0,o.i)(n)}),t)};l.displayName="TextList"},78140:(e,t,n)=>{n.d(t,{T:()=>l,v:()=>r});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const l=e=>{var{children:t=null,className:n="",component:l=r.li}=e,c=(0,a.__rest)(e,["children","className","component"]);const s=l;return i.createElement(s,Object.assign({},c,{className:(0,o.i)(n)}),t)};l.displayName="TextListItem"},62873:(e,t,n)=>{n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},53754:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(92950);const a=n.n(r)().createContext("light")},14748:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(85893),a=n(92950),i=n.n(a),o=n(94184),l=n.n(o),c=n(50533),s=n(53754),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},d=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};const p=(0,c.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,a=void 0===n?{}:n,o=e.children,c=e.className,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","params","children","className"]),f=function(){var e,n,r;if(null===(r=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var n,r;return 0===t.indexOf(":")?e.dynamic=u(u({},e.dynamic),((n={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],n)):e.staticPart=d(d([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),h=f.dynamic,v=f.staticPart;return(0,r.jsx)(s.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var n=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",u({},p,h,{"page-type":v.join("-"),className:"".concat(l()(c,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)},{children:i().Children.map(o,(function(e){return i().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",u({},p,h,{"page-type":v.join("-"),className:"".concat(l()(c,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},80123:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),i=n.n(a),o=n(53754),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),c=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Z.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var s=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",l({},a,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),i=n.n(a),o=n(48542),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,n=e.title,a=i()(t);return(0,r.jsx)(o.Title,l({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},17499:(e,t,n)=>{n.r(t),n.d(t,{TextInputModal:()=>o.Z,default:()=>l});var r=n(92950),a=n.n(r),i=n(43107),o=n(95364);const l=function(){return a().createElement(i.default,null)}},32034:(e,t,n)=>{n.r(t),n.d(t,{calculatePagination:()=>T,default:()=>A});var r=n(87462),a=n(4942),i=n(29439),o=n(92950),l=n.n(o),c=n(45697),s=n.n(c),u=n(50533),d=n(75662),p=n(80123),f=n(39173),h=n(14748),v=n(3672),m=n(50693),g=n(16475),y=n(83215),O=n(39903),b=n(17499),_=n(94654),j=n.n(_),w=n(13784),N=n(28414),P=n(55140);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},Z=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,r=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(r?"=".concat(r):"")}))},k={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var n=e.osFilter;return null==n?void 0:n.forEach((function(e){return t.append("operating_system",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,r=e.filter;return"hostname_or_id"===n&&Boolean(r)&&t.append("hostname_or_id",r)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",j()(n,Z))},rhcdFilter:function(e,t){var n=e.rhcdFilter;return null==n?void 0:n.forEach((function(e){return t.append(w.Ih,e)}))},updateMethodFilter:function(e,t){var n=e.updateMethodFilter;return null==n?void 0:n.forEach((function(e){return t.append(w.cE,e)}))}},T=function(e,t,n){var r=new URLSearchParams(location.search),a=void 0!==t?t:r.get("page"),i=void 0!==n?n:r.get("per_page");!isNaN(parseInt(a))&&e.append("page",a),!isNaN(parseInt(i))&&e.append("per_page",i)},x=function(e){var t=e.status,n=e.source,a=e.filterbyName,c=e.tagsFilter,s=e.operatingSystem,_=e.rhcdFilter,j=e.updateMethodFilter,S=e.page,Z=e.perPage,x=e.initialLoading,A=e.hasAccess,C=(0,d.useHistory)(),I=(0,P.Z)(),L=(0,o.useRef)(null),D=(0,o.useState)(!1),R=(0,i.Z)(D,2),M=R[0],$=R[1],q=(0,o.useState)({}),V=(0,i.Z)(q,2),G=V[0],H=V[1],z=(0,o.useState)((0,w.h3)(t,n,c,a,s,_,j)),U=(0,i.Z)(z,2),B=U[0],K=U[1],W=(0,o.useState)(!1),J=(0,i.Z)(W,2),Q=J[0],Y=J[1],X=(0,o.useState)(),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],re=(0,w.Mo)(),ae=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),u.shallowEqual),ie=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),oe=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),le=(0,u.useDispatch)(),ce=function(e,t){return le(v.CL(e,t))},se=function(e,t){K(null==e?void 0:e.filters);var n=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var r;null==k||null===(r=k[n])||void 0===r||r.call(k,t,e)}))}))}(n,null==e?void 0:e.filters),T(n,null==e?void 0:e.page,null==e?void 0:e.per_page);var r=n.toString();C.push({search:r,hash:location.hash}),t&&t(e)};(0,o.useEffect)((function(){var e;I.updateDocumentTitle("Inventory | Red Hat Insights"),null==I||null===(e=I.hideGlobalFilter)||void 0===e||e.call(I,!1),I.appAction("system-list"),I.appObjectId(),I.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,r,a,o,l=e.data,c=null==I||null===(t=I.mapGlobalFilter)||void 0===t?void 0:t.call(I,l,!1,!0),s=(0,i.Z)(c,3),u=s[0],d=s[1],p=s[2];ne({tags:p,filter:E(E({},null==te?void 0:te.filter),{},{system_profile:E(E(E(E(E({},null==te||null===(n=te.filter)||void 0===n?void 0:n.system_profile),(null==u||null===(r=u.SAP)||void 0===r?void 0:r.isSelected)&&{sap_system:!0}),u&&(null===(a=u["Ansible Automation Platform"])||void 0===a?void 0:a.isSelected)&&{ansible:"not_nil"}),(null==u||null===(o=u["Microsoft SQL"])||void 0===o?void 0:o.isSelected)&&{mssql:"not_nil"}),(null==d?void 0:d.length)>0&&{sap_sids:d})})})})),le(v.L1()),(Z||S)&&le(v.Jr(Array.isArray(S)?S[0]:S,Array.isArray(Z)?Z[0]:Z))}),[]);var ue=function(){return oe?oe.size:0};return l().createElement(l().Fragment,null,l().createElement(p.Z,{className:"pf-m-light"},l().createElement(f.Z,{title:"Inventory"})),l().createElement(h.Z,null,l().createElement(m.r,{gutter:"md"},l().createElement(g.P,{span:12},l().createElement(N.e,(0,r.Z)({hasAccess:A,isRbacEnabled:!0,customFilters:{filters:B,globalFilter:te},isFullView:!0,inventoryRef:L,showTags:!0,onRefresh:se,hasCheckbox:re,autoRefresh:!0,initialLoading:x},re&&{actions:[{title:"Delete",onClick:function(e,t,n){var r=n.id,a=n.display_name;H((function(){return{id:r,displayName:a}})),$((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){H((function(){return n})),Y((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===ue(),variant:"secondary",onClick:function(){H(Array.from(oe.values())),$(!0)}}}]},bulkSelect:{count:ue(),id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){ce(-1,!1)}},E({},ie&&ae&&ae.length>0?{title:"Select page (".concat(ae.length,")"),onClick:function(){ce(0,!0)}}:{})],checked:F(ae,oe),onSelect:function(e){ce(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return C.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),l().createElement(O.Z,{handleModalToggle:$,isModalOpen:M,currentSytems:G,onConfirm:function(){var e,t,n,r;Array.isArray(G)?(t=G.map((function(e){return e.id})),e=G.length>1?"".concat(G.length," systems"):G[0].display_name):(e=G.displayName,t=[G.id]),le((0,y.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),le((r=function(){return se({filters:B})},(n=v.Ks(t,e)).payload.then(r),n)),$(!1)}}),l().createElement(b.TextInputModal,{title:"Edit display name",isOpen:Q,value:G.display_name,onCancel:function(){return Y(!1)},onSubmit:function(e){le(v.$Y(G.id,e)),Y(!1)}}))};x.propTypes={status:s().oneOfType([s().arrayOf(s().string),s().string]),source:s().oneOfType([s().arrayOf(s().string),s().string]),operatingSystem:s().oneOfType([s().arrayOf(s().string),s().string]),filterbyName:s().arrayOf(s().string),tagsFilter:s().any,page:s().arrayOf(s().oneOfType([s().string,s().number])),perPage:s().arrayOf(s().oneOfType([s().string,s().number])),initialLoading:s().bool,rhcdFilter:s().oneOfType([s().arrayOf(s().string),s().string]),updateMethodFilter:s().oneOfType([s().arrayOf(s().string),s().string]),hasAccess:s().bool},x.defaultProps={initialLoading:!0};const A=x}}]);
//# sourceMappingURL=../sourcemaps/4806.22e6c801947eaecc15f24c2586606d4e.js.map