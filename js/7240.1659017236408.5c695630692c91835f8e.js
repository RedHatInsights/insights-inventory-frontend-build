(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7240],{5311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(92950),n=r.n(a),o=r(45697),l=r.n(o),i=function(e){var t=e.operatingSystem;if("RHEL"===(null==t?void 0:t.name)){var r=t.major&&null!==t.minor&&"".concat(t.major,".").concat(null==t?void 0:t.minor)||null;return n().createElement("span",null,"RHEL ",r)}return n().createElement("span",null,(null==t?void 0:t.name)||"Not available")};i.propTypes={operatingSystem:l().shape({name:l().string,major:l().number,minor:l().number})};const s=i},6014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),i=r.n(l),s=r(45697),c=r.n(s),u=r(32384),d=r(40409),p=r(45026),f=r(62410),m=r(58061),g=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.bios,r=e.detailLoaded,a=e.hasVendor,l=e.hasVersion,s=e.handleClick,c=e.hasReleaseDate,u=e.extra;return i().createElement(d.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(a?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(l?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,m.J_)(t.releaseDate)?i().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return y(y({},(0,n.Z)(e,g)),t&&{onClick:function(e){return t(e,s)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(m.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const b=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.biosSelector)(t)}}))(v)},61537:(e,t,r)=>{"use strict";r.r(t),r.d(t,{enabledRepos:()=>v,default:()=>O});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),i=r.n(l),s=r(45697),c=r.n(s),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(58061),g=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var b=function(e){var t,r,a,l=e.detailLoaded,s=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,m=e.hasProcesses,h=e.hasRepositories,b=e.extra;return i().createElement(d.Z,{title:"Configuration",isLoading:!l,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=s.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(s.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(r=s.services)||void 0===r?void 0:r.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(s.services,"Service name"))}}]:[]),(0,o.Z)(m?[{title:"Running processes",value:null===(a=s.processes)||void 0===a?void 0:a.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(s.processes,"Process name"))}}]:[]),(0,o.Z)(h?[{title:"Repositories",value:v(s.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(s.repositories),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return y(y({},(0,n.Z)(e,g)),t&&{onClick:function(e){return t(e,c)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(m.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.configurationSelector)(t)}}))(b)},81139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var a=r(93433),n=r(29439),o=r(92950),l=r.n(o),i=r(45697),s=r.n(i),c=r(32384),u=r(40409),d=r(62410),p=r(57971),f=r(28191),m=r(92298),g=r(67782),h=function(e){var t=e.detailLoaded,r=e.collectors,i=e.entity,s=e.dataMapper,c=(0,o.useState)([]),h=(0,n.Z)(c,2),y=h[0],v=h[1],b=(0,o.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return v((function(r){var n=r.filter((function(t){return t!==e.name}));return t?[].concat((0,a.Z)(n),[e.name]):n}))}),[]),O=function(e){return y.includes(e.name)},P=null!=r?r:(0,g.f_)(i);return l().createElement(u.Z,{title:"Data collectors",isLoading:!t},l().createElement(p.TableComposable,{"aria-label":"Data collectors",variant:p.TableVariant.compact,borders:!1},l().createElement(p.Thead,null,l().createElement(p.Tr,{className:"ins-c__no-border"},l().createElement(p.Th,null),l().createElement(p.Th,null,"Name"),l().createElement(p.Th,null,"Status"),l().createElement(p.Th,null,"Last upload"))),s?s(P,O,b):P.map((function(e,t){var r;return l().createElement(p.Tbody,{key:e.name,isExpanded:O(e)},l().createElement(p.Tr,null,e.details.name?l().createElement(p.Td,{expand:e.details?{rowIndex:t,isExpanded:O(e),onToggle:function(){return b(e,!O(e))}}:void 0,style:{paddingLeft:0}}):l().createElement(p.Td,null),l().createElement(p.Td,{dataLabel:"Name"},e.name),l().createElement(p.Td,{dataLabel:"Status"},e.status?"Active":"N/A"),l().createElement(p.Td,{dataLabel:"Last upload"},e.updated?l().createElement(d.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&l().createElement(p.Tr,{isExpanded:O(e)},l().createElement(p.Td,null),l().createElement(p.Td,{colSpan:3},l().createElement(p.ExpandableRowContent,null,l().createElement(f.k,null,l().createElement(m.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),l().createElement(m.B,{grow:{default:"grow"}},null!==(r=e.details.id)&&void 0!==r?r:"N/A"))))))}))))};h.propTypes={detailLoaded:s().bool,collectors:s().array,dataMapper:s().func,entity:s().shape({per_reporter_staleness:s().object})},h.defaultProps={detailLoaded:!1};const y=(0,c.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:r,detailLoaded:null==r?void 0:r.loaded,defaultCollectors:(0,g.f_)(t)}}))(h)},43107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var a=r(15671),n=r(43144),o=r(97326),l=r(60136),i=r(82963),s=r(61120),c=r(4942),u=r(92950),d=r.n(u),p=r(45697),f=r.n(p),m=r(32384),g=r(50693),h=r(16475),y=r(80236),v=r(57971),b=r(94778),O=r(71002),P=r(87462),C=r(29439),Z=r(45987),S=r(68774),E=r(68340),k=r(71070),j=r(7887),T=r(65550),w=r(94654),D=r.n(w),L=r(58061),x=["child"];function R(e){var t=function(e,t){if("object"!==(0,O.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t);if("object"!==(0,O.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,O.Z)(t)?t:String(t)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){(0,l.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(r){var n=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function f(){var e;(0,a.Z)(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=p.call.apply(p,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{sortBy:{index:0,direction:v.SortByDirection.asc},opened:[],pagination:{page:1,perPage:10},activeFilters:{}}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,a){var n=e.props.expandable;e.props.onSort(t,n?r-1:r,a),e.setState({sortBy:{index:r,direction:a}})})),(0,c.Z)((0,o.Z)(e),"onCollapse",(function(t,r,a){var n=e.state.opened;n[r]=a,e.setState({opened:n})})),(0,c.Z)((0,o.Z)(e),"onUpdatePagination",(function(t){var r=t.page,a=t.perPage;e.setState({pagination:M(M({},e.state.pagination),{},{page:r,perPage:a})})})),(0,c.Z)((0,o.Z)(e),"setFilter",(function(t,r,a){var n=e.state.activeFilters,o=(n[t],(0,Z.Z)(n,[t].map(R)));e.setState({activeFilters:M(M({},o),0!==r.length&&(0,c.Z)({},t,{key:t,value:r,label:a})),pagination:M(M({},e.state.pagination),{},{page:1})})})),(0,c.Z)((0,o.Z)(e),"onDeleteFilter",(function(t,r,a){var n=(0,C.Z)(r,1)[0];e.setState({activeFilters:(0,L.Jr)(n,a,e.state.activeFilters),pagination:M(M({},e.state.pagination),{},{page:1})})})),e}return(0,n.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.cells,a=t.rows,n=t.expandable,o=t.filters,l=this.state,i=l.sortBy,s=l.opened,c=l.pagination,p=l.activeFilters,f=n?{onCollapse:this.onCollapse}:{},m=(0,L.ey)(a,p),g=n?D()((0,L.Ew)(m,c),(function(e,t){var r=e.child;return[M(M({},(0,Z.Z)(e,x)),{},{isOpen:s[2*t]||!1}),{cells:[{title:r}],parent:2*t}]})):(0,L.Ew)(m,c);return d().createElement(u.Fragment,null,d().createElement(j.Z,(0,P.Z)({pagination:M(M({},c),{},{itemCount:m.length,onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}})},o&&{filterConfig:{items:(0,L.FX)(r,o,p,this.setFilter)}},{activeFiltersConfig:{filters:Object.values(p).map((function(e){return M(M({},e),{},{category:e.label,chips:Array.isArray(e.value)?e.value.map((function(e){return{name:e}})):[{name:e.value}]})})),onDelete:this.onDeleteFilter}})),1!==r.length?d().createElement(v.Table,(0,P.Z)({"aria-label":"General information dialog table",variant:v.TableVariant.compact,cells:r,rows:g,sortBy:M(M({},i),{},{index:n&&0===i.index?1:i.index}),onSort:this.onSort},f),d().createElement(v.TableHeader,null),d().createElement(v.TableBody,null)):d().createElement(S.D,null,(0,L.Ew)(m,c).map((function(e,t){return d().createElement(E.x,{component:E.q.small,key:t},e.title||e)}))),d().createElement(T.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},d().createElement(k.t,(0,P.Z)({},c,{itemCount:m.length,variant:"bottom",onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}}))))}}]),f}(u.Component);_.propTypes={rows:f().array,cells:f().array,onSort:f().func,expandable:f().bool,filters:f().arrayOf(f().shape({index:f().number,title:f().string,type:f().oneOf(["text","checkbox","radio","group"]),options:f().arrayOf(f().shape({value:f().oneOfType([f().string,f().node]),label:f().node}))}))},_.defaultProps={cells:[],rows:[],onSort:function(){},sortBy:{},expandable:!1};const W=_;var B=r(66e3),V=r(89438),N=r(6014),F=r(82838),A=r(61537),K=r(93433),H=r(40409),U=r(62410),J=r(45026),G=function(e){var t=e.detailLoaded,r=e.hasState,a=e.hasRegistered,n=e.hasLastCheckIn,o=e.hasRHC,l=e.entity,i=e.systemProfile,s=e.systemStatus;return d().createElement(H.Z,{title:"System status",isLoading:!t,items:[].concat((0,K.Z)(r?[{title:"Current state",value:s.stale?"Stale":"Active"}]:[]),(0,K.Z)(a?[{title:"Registered",value:l&&d().createElement(U.Z,{date:l.created,type:"exact"})}]:[]),(0,K.Z)(n?[{title:"Last upload",value:l&&d().createElement(U.Z,{date:l.updated,type:"exact"})}]:[]),(0,K.Z)(o?[{title:"RHC",value:null!=i&&i.rhc_client_id?"Connected":"Not available"}]:[]))})};G.propTypes={detailLoaded:f().bool,entity:f().shape({updated:f().string,created:f().string}),systemProfile:f().shape({rhc_client_id:f().string}),systemStatus:f().object,handleClick:f().func,hasState:f().bool,hasLastCheckIn:f().bool,hasRegistered:f().bool,hasRHC:f().bool},G.defaultProps={detailLoaded:!1,systemStatus:{},handleClick:function(){},hasState:!0,hasLastCheckIn:!0,hasRegistered:!0,hasRHC:!0};const q=(0,m.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:r,detailLoaded:null==r?void 0:r.loaded,systemStatus:(0,J.systemStatus)(t)}}))(G);var X=r(81139);var z=function(e){(0,l.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(r){var n=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function f(){var e;(0,a.Z)(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=p.call.apply(p,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,a,n){var o=e.state.rows,l=(n||o).sort((function(e,t){var a=e.cells||e,n=t.cells||t;return(""+(a[r].sortValue||a[r])).toLocaleLowerCase()>(""+(n[r].sortValue||n[r])).toLocaleLowerCase()?-1:1}));e.setState({rows:a===v.SortByDirection.asc?l:l.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.cells,n=r.rows,o=r.expandable,l=r.filters,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";n&&e.onSort(void 0,o?1:0,v.SortByDirection.asc,n),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:a,expandable:o,filters:l,modalVariant:i}}))})),e}return(0,n.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,r=t.isModalOpen,a=t.modalTitle,n=t.cells,o=t.rows,l=t.expandable,i=t.filters,s=t.modalVariant,c=this.props,p=c.store,f=c.writePermissions,v=c.SystemCardWrapper,b=c.OperatingSystemCardWrapper,O=c.BiosCardWrapper,P=c.InfrastructureCardWrapper,C=c.ConfigurationCardWrapper,Z=c.SystemStatusCardWrapper,S=c.DataCollectorsCardWrapper,E=c.CollectionCardWrapper,k=c.children,j=p?m.Provider:u.Fragment;return d().createElement(j,p&&{store:p},d().createElement("div",{className:"ins-c-general-information"},d().createElement(g.r,{sm:12,md:6,hasGutter:!0},v&&d().createElement(h.P,null,d().createElement(v,{handleClick:this.handleModalToggle,writePermissions:f})),b&&d().createElement(h.P,null,d().createElement(b,{handleClick:this.handleModalToggle})),P&&d().createElement(h.P,null,d().createElement(P,{handleClick:this.handleModalToggle})),O&&d().createElement(h.P,null,d().createElement(O,{handleClick:this.handleModalToggle})),Z&&d().createElement(h.P,null,d().createElement(Z,{handleClick:this.handleModalToggle})),C&&d().createElement(h.P,null,d().createElement(C,{handleClick:this.handleModalToggle})),S&&d().createElement(h.P,null,d().createElement(S,{handleClick:this.handleModalToggle})),E&&d().createElement(h.P,null,d().createElement(E,{handleClick:this.handleModalToggle})),k,d().createElement(y.u,{title:a||"","aria-label":"".concat(a||""," modal"),isOpen:r,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:s},d().createElement(W,{cells:n,rows:o,expandable:l,onSort:this.onSort,filters:i})))))}}]),f}(u.Component);z.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().node,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().node,f().bool]),BiosCardWrapper:f().oneOfType([f().node,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().node,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().node,f().bool]),SystemStatusCardWrapper:f().oneOfType([f().node,f().bool]),DataCollectorsCardWrapper:f().oneOfType([f().node,f().bool]),CollectionCardWrapper:f().oneOfType([f().node,f().bool]),children:f().node},z.defaultProps={entity:{},SystemCardWrapper:V.default,OperatingSystemCardWrapper:B.default,BiosCardWrapper:N.default,InfrastructureCardWrapper:F.default,ConfigurationCardWrapper:A.default,SystemStatusCardWrapper:q,DataCollectorsCardWrapper:X.default,CollectionCardWrapper:!1};const Q=(0,m.connect)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,b.eR)(t))}}}))(z)},82838:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),i=r.n(l),s=r(45697),c=r.n(s),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(58061),g=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t,r,a,l=e.infrastructure,s=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,m=e.hasIPv4,h=e.hasIPv6,v=e.hasInterfaces,b=e.extra;return i().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:l.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:l.vendor}]:[]),(0,o.Z)(m?[{title:"IPv4 addresses",value:null===(t=l.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){s("IPv4",(0,p.generalMapper)(l.ipv4,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"IPv6 addresses",value:null===(r=l.ipv6)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",onClick:function(){s("IPv6",(0,p.generalMapper)(l.ipv6,"IP address"))}}]:[]),(0,o.Z)(v?[{title:"Interfaces/NICs",value:null===(a=l.nics)||void 0===a?void 0:a.length,singular:"NIC",target:"interfaces",onClick:function(){s("Interfaces/NICs",(0,p.interfaceMapper)(l.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return y(y({},(0,n.Z)(e,g)),t&&{onClick:function(e){return t(e,s)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(m.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const b=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,infrastructure:(0,f.infrastructureSelector)(r,t)}}))(v)},66e3:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var a=r(4942),n=r(45987),o=r(93433),l=r(92950),i=r.n(l),s=r(45697),c=r.n(s),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(62410),g=r(58061),h=r(5311),y=["onClick"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t,r=e.systemInfo,a=e.detailLoaded,l=e.handleClick,s=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,v=e.hasKernelModules,O=e.extra;return i().createElement(d.Z,{title:"Operating system",isLoading:!a,items:[].concat((0,o.Z)(s?[{title:"Release",value:i().createElement(h.Z,{operatingSystem:r.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,g.J_)(r.bootTime)?i().createElement(m.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(v?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){l("Kernel modules",(0,p.generalMapper)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return b(b({},(0,n.Z)(e,y)),t&&{onClick:function(e){return t(e,l)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(g.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.operatingSystem)(r,t)}}))(O)},30187:()=>{},93398:()=>{},46928:()=>{},38299:()=>{},72816:()=>{}}]);