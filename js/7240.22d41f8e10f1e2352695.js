(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7240],{5311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(92950),n=r.n(a),o=r(45697),l=r.n(o),s=function(e){var t=e.operatingSystem;if("RHEL"===(null==t?void 0:t.name)){var r=t.major&&null!==t.minor&&"".concat(t.major,".").concat(null==t?void 0:t.minor)||null;return n().createElement("span",null,"RHEL ",r)}return n().createElement("span",null,(null==t?void 0:t.name)||"Not available")};s.propTypes={operatingSystem:l().shape({name:l().string,major:l().number,minor:l().number})};const i=s},6014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BiosCard:()=>b,default:()=>O});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),p=r(50533),u=r(76422),d=r(45026),f=r(62410),y=r(58061),m=["onClick"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.bios,r=e.detailLoaded,a=e.hasVendor,l=e.hasVersion,i=e.handleClick,c=e.hasReleaseDate,p=e.extra;return s().createElement(u.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(a?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(l?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,y.J_)(t.releaseDate)?s().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(p.map((function(e){var t=e.onClick;return h(h({},(0,n.Z)(e,m)),t&&{onClick:function(e){return t(e,i)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(y.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};var b=(0,p.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,d.biosSelector)(t)}}))(v);b.propTypes=v.propTypes,b.defaultProps=v.defaultProps;const O=b},61537:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ConfigurationCard:()=>O,default:()=>P,enabledRepos:()=>v});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),p=r(50533),u=r(76422),d=r(18562),f=r(45026),y=r(58061),m=["onClick"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var b=function(e){var t,r,a,l=e.detailLoaded,i=e.configuration,c=e.handleClick,p=e.hasPackages,f=e.hasServices,y=e.hasProcesses,g=e.hasRepositories,b=e.extra;return s().createElement(u.Z,{title:"Configuration",isLoading:!l,items:[].concat((0,o.Z)(p?[{title:"Installed packages",value:null===(t=i.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,d.generalMapper)(i.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(r=i.services)||void 0===r?void 0:r.length,singular:"service",target:"services",onClick:function(){c("Services",(0,d.generalMapper)(i.services,"Service name"))}}]:[]),(0,o.Z)(y?[{title:"Running processes",value:null===(a=i.processes)||void 0===a?void 0:a.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,d.generalMapper)(i.processes,"Process name"))}}]:[]),(0,o.Z)(g?[{title:"Repositories",value:v(i.repositories),target:"repositories",onClick:function(){c("Repositories",(0,d.repositoriesMapper)(i.repositories),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return h(h({},(0,n.Z)(e,m)),t&&{onClick:function(e){return t(e,c)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(y.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};var O=(0,p.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.configurationSelector)(t)}}))(b);O.propTypes=b.propTypes,O.defaultProps=b.defaultProps;const P=O},81139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DataCollectorsCard:()=>h,default:()=>v});var a=r(93433),n=r(29439),o=r(92950),l=r.n(o),s=r(45697),i=r.n(s),c=r(50533),p=r(76422),u=r(62410),d=r(62965),f=r(28191),y=r(92298),m=r(67782),g=function(e){var t=e.detailLoaded,r=e.collectors,s=e.entity,i=e.dataMapper,c=(0,o.useState)([]),g=(0,n.Z)(c,2),h=g[0],v=g[1],b=(0,o.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return v((function(r){var n=r.filter((function(t){return t!==e.name}));return t?[].concat((0,a.Z)(n),[e.name]):n}))}),[]),O=function(e){return h.includes(e.name)},P=null!=r?r:(0,m.f_)(s);return l().createElement(p.Z,{title:"Data collectors",isLoading:!t},l().createElement(d.TableComposable,{"aria-label":"Data collectors",variant:d.TableVariant.compact,borders:!1},l().createElement(d.Thead,null,l().createElement(d.Tr,{className:"ins-c__no-border"},l().createElement(d.Th,null),l().createElement(d.Th,null,"Name"),l().createElement(d.Th,null,"Status"),l().createElement(d.Th,null,"Last upload"))),i?i(P,O,b):P.map((function(e,t){var r;return l().createElement(d.Tbody,{key:e.name,isExpanded:O(e)},l().createElement(d.Tr,null,e.details.name?l().createElement(d.Td,{expand:e.details?{rowIndex:t,isExpanded:O(e),onToggle:function(){return b(e,!O(e))}}:void 0,style:{paddingLeft:0}}):l().createElement(d.Td,null),l().createElement(d.Td,{dataLabel:"Name"},e.name),l().createElement(d.Td,{dataLabel:"Status"},e.status),l().createElement(d.Td,{dataLabel:"Last upload"},e.updated?l().createElement(u.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&l().createElement(d.Tr,{isExpanded:O(e)},l().createElement(d.Td,null),l().createElement(d.Td,{colSpan:3},l().createElement(d.ExpandableRowContent,null,l().createElement(f.k,null,l().createElement(y.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),l().createElement(y.B,{grow:{default:"grow"}},null!==(r=e.details.id)&&void 0!==r?r:"N/A"))))))}))))};g.propTypes={detailLoaded:i().bool,collectors:i().array,dataMapper:i().func,entity:i().shape({per_reporter_staleness:i().object})},g.defaultProps={detailLoaded:!1};var h=(0,c.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:r,detailLoaded:null==r?void 0:r.loaded,defaultCollectors:(0,m.f_)(t)}}))(g);h.propTypes=g.propTypes,h.defaultProps=g.defaultProps;const v=h},43107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var a=r(15671),n=r(43144),o=r(97326),l=r(60136),s=r(82963),i=r(61120),c=r(4942),p=r(92950),u=r.n(p),d=r(45697),f=r.n(d),y=r(50533),m=r(50693),g=r(16475),h=r(80236),v=r(62965),b=r(3672),O=r(71002),P=r(87462),C=r(29439),Z=r(45987),S=r(68774),E=r(68340),T=r(44733),k=r(7887),j=r(65550),w=r(94654),D=r.n(w),L=r(58061),x=["child"];function R(e){var t=function(e,t){if("object"!==(0,O.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t);if("object"!==(0,O.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,O.Z)(t)?t:String(t)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){(0,l.Z)(f,e);var t,r,d=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(r){var n=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function f(){var e;(0,a.Z)(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=d.call.apply(d,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{sortBy:{index:0,direction:v.SortByDirection.asc},opened:[],pagination:{page:1,perPage:10},activeFilters:{}}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,a){var n=e.props.expandable;e.props.onSort(t,n?r-1:r,a),e.setState({sortBy:{index:r,direction:a}})})),(0,c.Z)((0,o.Z)(e),"onCollapse",(function(t,r,a){var n=e.state.opened;n[r]=a,e.setState({opened:n})})),(0,c.Z)((0,o.Z)(e),"onUpdatePagination",(function(t){var r=t.page,a=t.perPage;e.setState({pagination:M(M({},e.state.pagination),{},{page:r,perPage:a})})})),(0,c.Z)((0,o.Z)(e),"setFilter",(function(t,r,a){var n=e.state.activeFilters,o=(n[t],(0,Z.Z)(n,[t].map(R)));e.setState({activeFilters:M(M({},o),0!==r.length&&(0,c.Z)({},t,{key:t,value:r,label:a})),pagination:M(M({},e.state.pagination),{},{page:1})})})),(0,c.Z)((0,o.Z)(e),"onDeleteFilter",(function(t,r,a){var n=(0,C.Z)(r,1)[0];e.setState({activeFilters:(0,L.Jr)(n,a,e.state.activeFilters),pagination:M(M({},e.state.pagination),{},{page:1})})})),e}return(0,n.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.cells,a=t.rows,n=t.expandable,o=t.filters,l=this.state,s=l.sortBy,i=l.opened,c=l.pagination,d=l.activeFilters,f=n?{onCollapse:this.onCollapse}:{},y=(0,L.ey)(a,d),m=n?D()((0,L.Ew)(y,c),(function(e,t){var r=e.child;return[M(M({},(0,Z.Z)(e,x)),{},{isOpen:i[2*t]||!1}),{cells:[{title:r}],parent:2*t}]})):(0,L.Ew)(y,c);return u().createElement(p.Fragment,null,u().createElement(k.Z,(0,P.Z)({pagination:M(M({},c),{},{itemCount:y.length,onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}})},o&&{filterConfig:{items:(0,L.FX)(r,o,d,this.setFilter)}},{activeFiltersConfig:{filters:Object.values(d).map((function(e){return M(M({},e),{},{category:e.label,chips:Array.isArray(e.value)?e.value.map((function(e){return{name:e}})):[{name:e.value}]})})),onDelete:this.onDeleteFilter}})),1!==r.length?u().createElement(v.Table,(0,P.Z)({"aria-label":"General information dialog table",variant:v.TableVariant.compact,cells:r,rows:m,sortBy:M(M({},s),{},{index:n&&0===s.index?1:s.index}),onSort:this.onSort},f),u().createElement(v.TableHeader,null),u().createElement(v.TableBody,null)):u().createElement(S.D,null,(0,L.Ew)(y,c).map((function(e,t){return u().createElement(E.x,{component:E.q.small,key:t},e.title||e)}))),u().createElement(j.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},u().createElement(T.t,(0,P.Z)({},c,{itemCount:y.length,variant:"bottom",onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}}))))}}]),f}(p.Component);_.propTypes={rows:f().array,cells:f().array,onSort:f().func,expandable:f().bool,filters:f().arrayOf(f().shape({index:f().number,title:f().string,type:f().oneOf(["text","checkbox","radio","group"]),options:f().arrayOf(f().shape({value:f().oneOfType([f().string,f().node]),label:f().node}))}))},_.defaultProps={cells:[],rows:[],onSort:function(){},sortBy:{},expandable:!1};const B=_;var W=r(66e3),V=r(89438),N=r(6014),F=r(82838),A=r(61537),K=r(93433),H=r(76422),U=r(62410),J=r(45026),G=function(e){var t=e.detailLoaded,r=e.hasState,a=e.hasRegistered,n=e.hasLastCheckIn,o=e.hasRHC,l=e.entity,s=e.systemProfile,i=e.systemStatus;return u().createElement(H.Z,{title:"System status",isLoading:!t,items:[].concat((0,K.Z)(r?[{title:"Current state",value:i.stale?"Stale":"Active"}]:[]),(0,K.Z)(a?[{title:"Registered",value:l&&u().createElement(U.Z,{date:l.created,type:"exact"})}]:[]),(0,K.Z)(n?[{title:"Last upload",value:l&&u().createElement(U.Z,{date:l.updated,type:"exact"})}]:[]),(0,K.Z)(o?[{title:"RHC",value:null!=s&&s.rhc_client_id?"Connected":"Not available"}]:[]))})};G.propTypes={detailLoaded:f().bool,entity:f().shape({updated:f().string,created:f().string}),systemProfile:f().shape({rhc_client_id:f().string}),systemStatus:f().object,handleClick:f().func,hasState:f().bool,hasLastCheckIn:f().bool,hasRegistered:f().bool,hasRHC:f().bool},G.defaultProps={detailLoaded:!1,systemStatus:{},handleClick:function(){},hasState:!0,hasLastCheckIn:!0,hasRegistered:!0,hasRHC:!0};var q=(0,y.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:r,detailLoaded:null==r?void 0:r.loaded,systemStatus:(0,J.systemStatus)(t)}}))(G);q.propTypes=G.propTypes,q.defaultProps=G.defaultProps;var X=r(81139),z=r(75662);var Q=function(e){(0,l.Z)(f,e);var t,r,d=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(r){var n=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function f(){var e;(0,a.Z)(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=d.call.apply(d,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,a,n){var o=e.state.rows,l=(n||o).sort((function(e,t){var a=e.cells||e,n=t.cells||t;return(""+(a[r].sortValue||a[r])).toLocaleLowerCase()>(""+(n[r].sortValue||n[r])).toLocaleLowerCase()?-1:1}));e.setState({rows:a===v.SortByDirection.asc?l:l.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.cells,n=r.rows,o=r.expandable,l=r.filters,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";n&&e.onSort(void 0,o?1:0,v.SortByDirection.asc,n),e.state.isModalOpen&&e.props.history.push(e.props.location.pathname.split("/").slice(0,-1).join("/")),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:a,expandable:o,filters:l,modalVariant:s}}))})),e}return(0,n.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,r=t.isModalOpen,a=t.modalTitle,n=t.cells,o=t.rows,l=t.expandable,s=t.filters,i=t.modalVariant,c=this.props,d=c.store,f=c.writePermissions,v=c.SystemCardWrapper,b=c.OperatingSystemCardWrapper,O=c.BiosCardWrapper,P=c.InfrastructureCardWrapper,C=c.ConfigurationCardWrapper,Z=c.SystemStatusCardWrapper,S=c.DataCollectorsCardWrapper,E=c.CollectionCardWrapper,T=c.children,k=d?y.Provider:p.Fragment;return u().createElement(k,d&&{store:d},u().createElement("div",{className:"ins-c-general-information"},u().createElement(m.r,{sm:12,md:6,hasGutter:!0},v&&u().createElement(g.P,null,u().createElement(v,{handleClick:this.handleModalToggle,writePermissions:f})),b&&u().createElement(g.P,null,u().createElement(b,{handleClick:this.handleModalToggle})),P&&u().createElement(g.P,null,u().createElement(P,{handleClick:this.handleModalToggle})),O&&u().createElement(g.P,null,u().createElement(O,{handleClick:this.handleModalToggle})),Z&&u().createElement(g.P,null,u().createElement(Z,{handleClick:this.handleModalToggle})),C&&u().createElement(g.P,null,u().createElement(C,{handleClick:this.handleModalToggle})),S&&u().createElement(g.P,null,u().createElement(S,{handleClick:this.handleModalToggle})),E&&u().createElement(g.P,null,u().createElement(E,{handleClick:this.handleModalToggle})),T,u().createElement(h.u,{title:a||"","aria-label":"".concat(a||""," modal"),isOpen:r,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:i},u().createElement(B,{cells:n,rows:o,expandable:l,onSort:this.onSort,filters:s})))))}}]),f}(p.Component);Q.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().elementType,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().elementType,f().bool]),BiosCardWrapper:f().oneOfType([f().elementType,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().elementType,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().elementType,f().bool]),SystemStatusCardWrapper:f().oneOfType([f().elementType,f().bool]),DataCollectorsCardWrapper:f().oneOfType([f().elementType,f().bool]),CollectionCardWrapper:f().oneOfType([f().elementType,f().bool]),children:f().node,history:f().any,location:f().any},Q.defaultProps={entity:{},SystemCardWrapper:V.SystemCard,OperatingSystemCardWrapper:W.OperatingSystemCard,BiosCardWrapper:N.BiosCard,InfrastructureCardWrapper:F.InfrastructureCard,ConfigurationCardWrapper:A.ConfigurationCard,SystemStatusCardWrapper:q,DataCollectorsCardWrapper:X.DataCollectorsCard,CollectionCardWrapper:!1};const Y=(0,z.withRouter)((0,y.connect)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,b.eR)(t))}}}))(Q))},82838:(e,t,r)=>{"use strict";r.r(t),r.d(t,{InfrastructureCard:()=>b,default:()=>O});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),p=r(50533),u=r(76422),d=r(18562),f=r(45026),y=r(58061),m=["onClick"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t,r,a,l=e.infrastructure,i=e.handleClick,c=e.detailLoaded,p=e.hasType,f=e.hasVendor,y=e.hasIPv4,g=e.hasIPv6,v=e.hasInterfaces,b=e.extra;return s().createElement(u.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(p?[{title:"Type",value:l.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:l.vendor}]:[]),(0,o.Z)(y?[{title:"IPv4 addresses",value:null===(t=l.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){i("IPv4",(0,d.generalMapper)(l.ipv4,"IP address"))}}]:[]),(0,o.Z)(g?[{title:"IPv6 addresses",value:null===(r=l.ipv6)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",target:"ipv6",onClick:function(){i("IPv6",(0,d.generalMapper)(l.ipv6,"IP address"))}}]:[]),(0,o.Z)(v?[{title:"Interfaces/NICs",value:null===(a=l.nics)||void 0===a?void 0:a.length,singular:"NIC",target:"interfaces",onClick:function(){i("Interfaces/NICs",(0,d.interfaceMapper)(l.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return h(h({},(0,n.Z)(e,m)),t&&{onClick:function(e){return t(e,i)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(y.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};var b=(0,p.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,infrastructure:(0,f.infrastructureSelector)(r,t)}}))(v);b.propTypes=v.propTypes,b.defaultProps=v.defaultProps;const O=b},66e3:(e,t,r)=>{"use strict";r.r(t),r.d(t,{OperatingSystemCard:()=>P,default:()=>C});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),p=r(50533),u=r(76422),d=r(18562),f=r(45026),y=r(62410),m=r(58061),g=r(5311),h=["onClick"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t,r=e.systemInfo,a=e.detailLoaded,l=e.handleClick,i=e.hasRelease,c=e.hasKernelRelease,p=e.hasArchitecture,f=e.hasLastBoot,v=e.hasKernelModules,O=e.extra;return s().createElement(u.Z,{title:"Operating system",isLoading:!a,items:[].concat((0,o.Z)(i?[{title:"Release",value:s().createElement(g.Z,{operatingSystem:r.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(p?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,m.J_)(r.bootTime)?s().createElement(y.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(v?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){l("Kernel modules",(0,d.generalMapper)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return b(b({},(0,n.Z)(e,h)),t&&{onClick:function(e){return t(e,l)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().shape({name:c().string,major:c().oneOfType([c().string,c().number]),minor:c().oneOfType([c().string,c().number])}),architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(m.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};var P=(0,p.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.operatingSystem)(r,t)}}))(O);P.propTypes=O.propTypes,P.defaultProps=O.defaultProps;const C=P},30187:()=>{},93398:()=>{},46928:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7240.96a0dfdccfebf62dc00c489d259be6a8.js.map