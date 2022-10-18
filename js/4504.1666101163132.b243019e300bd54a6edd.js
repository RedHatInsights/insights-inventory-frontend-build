"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4504],{14918:(e,t,r)=>{r.r(t),r.d(t,{TagWithDialog:()=>n.Z,TagsModal:()=>a.Z,RenderWrapper:()=>o.Z,DeleteModal:()=>l.Z,InventoryContext:()=>s.FW,OS_CHIP:()=>s.vi,REGISTERED_CHIP:()=>s.p9,STALE_CHIP:()=>s.yc,TAG_CHIP:()=>s.m5,TEXTUAL_CHIP:()=>s.UC,TEXT_FILTER:()=>s.ud,allStaleFilters:()=>s.cf,arrayToSelection:()=>s.Nu,defaultFilters:()=>s.js,filterToGroup:()=>s.Tk,generateFilter:()=>s.h3,isEmpty:()=>s.xb,loadSystems:()=>s.K$,reduceFilters:()=>s.YQ,registered:()=>s.Gw,reloadWrapper:()=>s.KS,staleness:()=>s.jv,useGetRegistry:()=>s.jy,useWritePermissions:()=>s.Mo});var n=r(68595),a=r(22219),o=r(454),l=r(39903),s=r(13784)},6014:(e,t,r)=>{r.r(t),r.d(t,{BiosCard:()=>b,default:()=>P});var n=r(4942),a=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),u=r(32384),d=r(40409),p=r(45026),f=r(62410),m=r(58061),v=["onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.bios,r=e.detailLoaded,n=e.hasVendor,l=e.hasVersion,i=e.handleClick,c=e.hasReleaseDate,u=e.extra;return s().createElement(d.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(n?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(l?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,m.J_)(t.releaseDate)?s().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,i)}})}))))})};h.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(m.x7)},h.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};var b=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.biosSelector)(t)}}))(h);b.propTypes=h.propTypes,b.defaultProps=h.defaultProps;const P=b},61537:(e,t,r)=>{r.r(t),r.d(t,{enabledRepos:()=>h,ConfigurationCard:()=>P,default:()=>O});var n=r(4942),a=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(58061),v=["onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var b=function(e){var t,r,n,l=e.detailLoaded,i=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,m=e.hasProcesses,y=e.hasRepositories,b=e.extra;return s().createElement(d.Z,{title:"Configuration",isLoading:!l,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=i.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(i.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(r=i.services)||void 0===r?void 0:r.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(i.services,"Service name"))}}]:[]),(0,o.Z)(m?[{title:"Running processes",value:null===(n=i.processes)||void 0===n?void 0:n.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(i.processes,"Process name"))}}]:[]),(0,o.Z)(y?[{title:"Repositories",value:h(i.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(i.repositories),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(m.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};var P=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.configurationSelector)(t)}}))(b);P.propTypes=b.propTypes,P.defaultProps=b.defaultProps;const O=P},81139:(e,t,r)=>{r.r(t),r.d(t,{DataCollectorsCard:()=>g,default:()=>h});var n=r(93433),a=r(29439),o=r(92950),l=r.n(o),s=r(45697),i=r.n(s),c=r(32384),u=r(40409),d=r(62410),p=r(56645),f=r(28191),m=r(92298),v=r(67782),y=function(e){var t=e.detailLoaded,r=e.collectors,s=e.entity,i=e.dataMapper,c=(0,o.useState)([]),y=(0,a.Z)(c,2),g=y[0],h=y[1],b=(0,o.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return h((function(r){var a=r.filter((function(t){return t!==e.name}));return t?[].concat((0,n.Z)(a),[e.name]):a}))}),[]),P=function(e){return g.includes(e.name)},O=null!=r?r:(0,v.f_)(s);return l().createElement(u.Z,{title:"Data collectors",isLoading:!t},l().createElement(p.TableComposable,{"aria-label":"Data collectors",variant:p.TableVariant.compact,borders:!1},l().createElement(p.Thead,null,l().createElement(p.Tr,{className:"ins-c__no-border"},l().createElement(p.Th,null),l().createElement(p.Th,null,"Name"),l().createElement(p.Th,null,"Status"),l().createElement(p.Th,null,"Last upload"))),i?i(O,P,b):O.map((function(e,t){var r;return l().createElement(p.Tbody,{key:e.name,isExpanded:P(e)},l().createElement(p.Tr,null,e.details.name?l().createElement(p.Td,{expand:e.details?{rowIndex:t,isExpanded:P(e),onToggle:function(){return b(e,!P(e))}}:void 0,style:{paddingLeft:0}}):l().createElement(p.Td,null),l().createElement(p.Td,{dataLabel:"Name"},e.name),l().createElement(p.Td,{dataLabel:"Status"},e.status),l().createElement(p.Td,{dataLabel:"Last upload"},e.updated?l().createElement(d.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&l().createElement(p.Tr,{isExpanded:P(e)},l().createElement(p.Td,null),l().createElement(p.Td,{colSpan:3},l().createElement(p.ExpandableRowContent,null,l().createElement(f.k,null,l().createElement(m.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),l().createElement(m.B,{grow:{default:"grow"}},null!==(r=e.details.id)&&void 0!==r?r:"N/A"))))))}))))};y.propTypes={detailLoaded:i().bool,collectors:i().array,dataMapper:i().func,entity:i().shape({per_reporter_staleness:i().object})},y.defaultProps={detailLoaded:!1};var g=(0,c.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:r,detailLoaded:null==r?void 0:r.loaded,defaultCollectors:(0,v.f_)(t)}}))(y);g.propTypes=y.propTypes,g.defaultProps=y.defaultProps;const h=g},44983:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(15671),a=r(43144),o=r(97326),l=r(60136),s=r(82963),i=r(61120),c=r(4942),u=r(92950),d=r.n(u),p=r(45697),f=r.n(p),m=r(32384),v=r(50693),y=r(16475),g=r(80236),h=r(56645),b=r(3672),P=r(33214),O=r(83732),C=r(37164),S=r(11365),E=r(59155),Z=r(21705),k=r(878),T=r(81139);var _=function(e){(0,l.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(r){var a=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function f(){var e;(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=p.call.apply(p,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,n,a){var o=e.state.rows,l=(a||o).sort((function(e,t){var n=e.cells||e,a=t.cells||t;return(""+(n[r].sortValue||n[r])).toLocaleLowerCase()>(""+(a[r].sortValue||a[r])).toLocaleLowerCase()?-1:1}));e.setState({rows:n===h.SortByDirection.asc?l:l.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.cells,a=r.rows,o=r.expandable,l=r.filters,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";a&&e.onSort(void 0,o?1:0,h.SortByDirection.asc,a),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:n,expandable:o,filters:l,modalVariant:s}}))})),e}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,r=t.isModalOpen,n=t.modalTitle,a=t.cells,o=t.rows,l=t.expandable,s=t.filters,i=t.modalVariant,c=this.props,p=c.store,f=c.writePermissions,h=c.SystemCardWrapper,b=c.OperatingSystemCardWrapper,O=c.BiosCardWrapper,C=c.InfrastructureCardWrapper,S=c.ConfigurationCardWrapper,E=c.SystemStatusCardWrapper,Z=c.DataCollectorsCardWrapper,k=c.CollectionCardWrapper,T=c.children,_=p?m.Provider:u.Fragment;return d().createElement(_,p&&{store:p},d().createElement("div",{className:"ins-c-general-information"},d().createElement(v.r,{sm:12,md:6,hasGutter:!0},h&&d().createElement(y.P,null,d().createElement(h,{handleClick:this.handleModalToggle,writePermissions:f})),b&&d().createElement(y.P,null,d().createElement(b,{handleClick:this.handleModalToggle})),C&&d().createElement(y.P,null,d().createElement(C,{handleClick:this.handleModalToggle})),O&&d().createElement(y.P,null,d().createElement(O,{handleClick:this.handleModalToggle})),E&&d().createElement(y.P,null,d().createElement(E,{handleClick:this.handleModalToggle})),S&&d().createElement(y.P,null,d().createElement(S,{handleClick:this.handleModalToggle})),Z&&d().createElement(y.P,null,d().createElement(Z,{handleClick:this.handleModalToggle})),k&&d().createElement(y.P,null,d().createElement(k,{handleClick:this.handleModalToggle})),T,d().createElement(g.u,{title:n||"","aria-label":"".concat(n||""," modal"),isOpen:r,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:i},d().createElement(P.Z,{cells:a,rows:o,expandable:l,onSort:this.onSort,filters:s})))))}}]),f}(u.Component);_.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().node,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().node,f().bool]),BiosCardWrapper:f().oneOfType([f().node,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().node,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().node,f().bool]),SystemStatusCardWrapper:f().oneOfType([f().node,f().bool]),DataCollectorsCardWrapper:f().oneOfType([f().node,f().bool]),CollectionCardWrapper:f().oneOfType([f().node,f().bool]),children:f().node},_.defaultProps={entity:{},SystemCardWrapper:C.x,OperatingSystemCardWrapper:O.q,BiosCardWrapper:S.Y,InfrastructureCardWrapper:E.c,ConfigurationCardWrapper:Z.TE,SystemStatusCardWrapper:k.W,DataCollectorsCardWrapper:T.DataCollectorsCard,CollectionCardWrapper:!1};const w=(0,m.connect)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,b.eR)(t))}}}))(_)},82838:(e,t,r)=>{r.r(t),r.d(t,{InfrastructureCard:()=>b,default:()=>P});var n=r(4942),a=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(58061),v=["onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t,r,n,l=e.infrastructure,i=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,m=e.hasIPv4,y=e.hasIPv6,h=e.hasInterfaces,b=e.extra;return s().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:l.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:l.vendor}]:[]),(0,o.Z)(m?[{title:"IPv4 addresses",value:null===(t=l.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){i("IPv4",(0,p.generalMapper)(l.ipv4,"IP address"))}}]:[]),(0,o.Z)(y?[{title:"IPv6 addresses",value:null===(r=l.ipv6)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",onClick:function(){i("IPv6",(0,p.generalMapper)(l.ipv6,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"Interfaces/NICs",value:null===(n=l.nics)||void 0===n?void 0:n.length,singular:"NIC",target:"interfaces",onClick:function(){i("Interfaces/NICs",(0,p.interfaceMapper)(l.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,i)}})}))))})};h.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(m.x7)},h.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};var b=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,infrastructure:(0,f.infrastructureSelector)(r,t)}}))(h);b.propTypes=h.propTypes,b.defaultProps=h.defaultProps;const P=b},66e3:(e,t,r)=>{r.r(t),r.d(t,{OperatingSystemCard:()=>O,default:()=>C});var n=r(4942),a=r(45987),o=r(93433),l=r(92950),s=r.n(l),i=r(45697),c=r.n(i),u=r(32384),d=r(40409),p=r(18562),f=r(45026),m=r(62410),v=r(58061),y=r(5311),g=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t,r=e.systemInfo,n=e.detailLoaded,l=e.handleClick,i=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,h=e.hasKernelModules,P=e.extra;return s().createElement(d.Z,{title:"Operating system",isLoading:!n,items:[].concat((0,o.Z)(i?[{title:"Release",value:s().createElement(y.Z,{operatingSystem:r.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,v.J_)(r.bootTime)?s().createElement(m.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(h?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){l("Kernel modules",(0,p.generalMapper)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(P.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,g)),t&&{onClick:function(e){return t(e,l)}})}))))})};P.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},P.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};var O=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.operatingSystem)(r,t)}}))(P);O.propTypes=P.propTypes,O.defaultProps=P.defaultProps;const C=O},19299:(e,t,r)=>{r.r(t),r.d(t,{SystemCard:()=>I,default:()=>M});var n=r(45987),a=r(93433),o=r(15671),l=r(43144),s=r(97326),i=r(60136),c=r(82963),u=r(61120),d=r(4942),p=r(92950),f=r.n(p),m=r(45697),v=r.n(m),y=r(32384),g=r(40409),h=r(91290),b=r(45026),P=r(3672),O=r(95364),C=r(46043),S=r(47173),E=r(2907),Z=r(18562),k=r(58061),T=["onClick"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.title,r=e.content;return f().createElement(f().Fragment,null,f().createElement("span",null,t),f().createElement(C.J,{headerContent:f().createElement("div",null,t),bodyContent:f().createElement("div",null,r)},f().createElement(S.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},f().createElement(h.ZP,null))))},j=function(e){(0,i.Z)(v,e);var t,r,m=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function v(){var e;(0,o.Z)(this,v);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=m.call.apply(m,[this].concat(r)),(0,d.Z)((0,s.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,d.Z)((0,s.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,d.Z)((0,s.Z)(e),"onSubmit",(function(t,r){return function(n){var a=e.props.entity;t(a.id,n,r),e.onCancel()}})),(0,d.Z)((0,s.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,l.Z)(v,[{key:"render",value:function(){var e,t,r=this.props,o=r.detailLoaded,l=r.entity,s=r.properties,i=r.setDisplayName,c=r.setAnsibleHost,u=r.writePermissions,d=r.handleClick,m=r.hasHostName,v=r.hasDisplayName,y=r.hasAnsibleHostname,h=r.hasSAP,b=r.hasSystemPurpose,P=r.hasCPUs,C=r.hasSockets,S=r.hasCores,k=r.hasCPUFlags,_=r.hasRAM,j=r.extra,I=this.state,M=I.isDisplayNameModalOpen,R=I.isAnsibleHostModalOpen;return f().createElement(p.Fragment,null,f().createElement(g.Z,{title:"System properties",isLoading:!o,items:[].concat((0,a.Z)(m?[{title:f().createElement(D,{title:"Host name",content:"Name imported from the system."}),value:l.fqdn,size:"md"}]:[]),(0,a.Z)(v?[{title:f().createElement(D,{title:"Display name",content:"System name displayed in an inventory list."}),value:f().createElement(p.Fragment,null,l.display_name,f().createElement(E.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,a.Z)(y?[{title:f().createElement(D,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:f().createElement(p.Fragment,null,this.getAnsibleHost(),f().createElement(E.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,a.Z)(h?[{title:"SAP",value:null===(e=s.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){d("SAP IDs (SID)",(0,Z.generalMapper)(s.sapIds,"SID"))}}]:[]),(0,a.Z)(b?[{title:"System purpose",value:s.systemPurpose}]:[]),(0,a.Z)(P?[{title:"Number of CPUs",value:s.cpuNumber}]:[]),(0,a.Z)(C?[{title:"Sockets",value:s.sockets}]:[]),(0,a.Z)(S?[{title:"Cores per socket",value:s.coresPerSocket}]:[]),(0,a.Z)(k?[{title:"CPU flags",value:null==s||null===(t=s.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return d("CPU flags",(0,Z.generalMapper)(s.cpuFlags,"flag name"))}}]:[]),(0,a.Z)(_?[{title:"RAM",value:s.ramSize}]:[]),(0,a.Z)(j.map((function(e){var t=e.onClick;return w(w({},(0,n.Z)(e,T)),t&&{onClick:function(e){return t(e,d)}})}))))}),f().createElement(O.Z,{isOpen:M,title:"Edit display name",value:l&&l.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(i,l&&l.display_name)}),f().createElement(O.Z,{isOpen:R,title:"Edit Ansible host",value:l&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c,l&&this.getAnsibleHost())}))}}]),v}(p.Component);j.propTypes={detailLoaded:v().bool,entity:v().shape({display_name:v().string,ansible_host:v().string,fqdn:v().string,id:v().string}),properties:v().shape({cpuNumber:v().number,sockets:v().number,coresPerSocket:v().number,ramSize:v().string,storage:v().arrayOf(v().shape({device:v().string,mount_point:v().string,options:v().shape({}),type:v().string})),sapIds:v().arrayOf(v().string),systemPurpose:v().string,cpuFlags:v().array}),setDisplayName:v().func,setAnsibleHost:v().func,writePermissions:v().bool,handleClick:v().func,hasHostName:v().bool,hasDisplayName:v().bool,hasAnsibleHostname:v().bool,hasSAP:v().bool,hasSystemPurpose:v().bool,hasCPUs:v().bool,hasSockets:v().bool,hasCores:v().bool,hasCPUFlags:v().bool,hasRAM:v().bool,extra:v().arrayOf(k.x7)},j.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasSystemPurpose:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},D.propTypes={title:v().string.isRequired,content:v().string.isRequired};var I=(0,y.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:r&&r.loaded,properties:(0,b.propertiesSelector)(r,t)}}),(function(e){return{setDisplayName:function(t,r,n){e((0,P.$Y)(t,r,n))},setAnsibleHost:function(t,r,n){e((0,P.Uw)(t,r,n))}}}))(j);I.propTypes=j.propTypes,I.defaultProps=j.defaultProps;const M=I},18562:(e,t,r)=>{r.r(t),r.d(t,{diskMapper:()=>y,enabledHelper:()=>v,generalMapper:()=>P,interfaceMapper:()=>h,productsMapper:()=>g,repositoriesMapper:()=>b,statusHelper:()=>m});var n=r(93433),a=r(29439),o=r(92950),l=r.n(o),s=r(68778),i=r(24307),c=r(91290),u=r(10332),d=r(87292),p=r(56645),f=r(75824),m={UP:l().createElement(f.u,{content:"Service is running"},l().createElement(u.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:l().createElement(f.u,{content:"Service has stopped"},l().createElement(d.ZP,{className:"ins-c-inventory__detail--down"}))},v={true:l().createElement(f.u,{content:"Source enabled"},l().createElement(s.ZP,{className:"ins-c-inventory__detail--enabled"})),false:l().createElement(f.u,{content:"Source disabled"},l().createElement(i.ZP,{className:"ins-c-inventory__detail--disabled"}))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,r=e.label,n=e.mountpoint,o=e.options,s=e.mounttype,i=o&&o.options||o;return{isOpen:!1,child:l().createElement("div",null,i&&Object.entries(i.value||i).map((function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n.value||n)})).join(",  ")),cells:[t&&t.value||t,r,n&&n.value||n,s&&s.value||s]}})),expandable:!0}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:m[e.status]||l().createElement(f.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:m[e.state]||l().createElement(f.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,r=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,n.Z)(t),(0,n.Z)(r)).map((function(e){return[{title:e.name,sortValue:e.name},{title:v[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:v[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},45026:(e,t,r)=>{r.r(t),r.d(t,{biosSelector:()=>n.Cx,collectionInformationSelector:()=>n.fZ,configurationSelector:()=>n.qr,getCollectorStatus:()=>n.P$,getDefaultCollectors:()=>n.f_,infrastructureSelector:()=>n.qY,operatingSystem:()=>n.d0,propertiesSelector:()=>n.Ys,systemStatus:()=>n.qs});var n=r(67782)},67782:(e,t,r)=>{r.d(t,{Ys:()=>c,d0:()=>u,Cx:()=>d,qY:()=>p,qr:()=>f,fZ:()=>m,P$:()=>v,f_:()=>y,qs:()=>g});var n=r(4942),a=r(14918),o=r(96396);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){try{return JSON.parse(e)}catch(r){return(0,n.Z)({},t,e)}}var c=function(){var e,t,r,n,a,o,l,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=u.number_of_cpus,p=u.number_of_sockets,f=u.cores_per_socket,m=u.ramSize,v=u.disk_devices,y=u.sap_sids,g=u.system_purpose,h=u.cpu_flags,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},P=b.facts;return{cpuNumber:d||(null==P||null===(e=P.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==P||null===(t=P.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:f||(null==P||null===(r=P.rhsm)||void 0===r?void 0:r.CPU_CORES)&&(null==P||null===(n=P.rhsm)||void 0===n?void 0:n.CPU_CORES)&&Number(null==P||null===(a=P.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==P||null===(o=P.rhsm)||void 0===o?void 0:o.CPU_SOCKETS,10),ramSize:m||(null==P||null===(l=P.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==P||null===(c=P.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,r=e.label,n=e.mount_point,a=e.options,o=e.type;return s(s(s(s({},t&&i(t,"device")),{},{label:r},n&&i(n,"mountpoint")),a&&i(a,"options")),o&&i(o,"mounttype"))})),sapIds:y,systemPurpose:null==g?void 0:g.usage,cpuFlags:h}},u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.arch,n=t.operating_system,a=t.os_kernel_version,o=t.last_boot_time,l=t.kernel_modules,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.facts;return{release:n,kernelRelease:a,architecture:r||(null==i||null===(e=i.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:l}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,r=e.bios_version,n=e.bios_release_date;return{vendor:t,version:r,releaseDate:n}},p=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.infrastructure_type,a=r.infrastructure_vendor,o=r.network,l=void 0===o?{}:o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.facts;return{type:n||void 0!==(null==i||null===(e=i.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=i&&null!==(t=i.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,r=e.enabled_services,n=e.running_processes,a=e.repositories;return{packages:t,services:r,processes:n,repositories:a}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,r=e.insights_egg_version;return{client:t,egg:r}},v=function(e){return e?"Fresh"!==(0,o.Ei)(e)?"Stale":"Active":"N/A"},y=function(e){return null===a.registered||void 0===a.registered?void 0:a.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var r;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(r=e.per_reporter_staleness[t.value])||void 0===r?void 0:r.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stale_timestamp;return{stale:new Date>new Date(t)}}},95045:(e,t,r)=>{r.r(t),r.d(t,{TextInputModal:()=>d.Z,default:()=>y});var n=r(29439),a=r(45987),o=r(92950),l=r.n(o),s=r(32384),i=r(45697),c=r.n(i),u=r(24070),d=r(95364),p=r(47468),f=r(57785),m=["getRegistry"],v=function(e){var t=e.getRegistry,r=(0,a.Z)(e,m),i=(0,o.useState)(),c=(0,n.Z)(i,2),d=c[0],v=c[1];return(0,o.useEffect)((function(){var e,r;t&&(null===(e=t())||void 0===e||null===(r=e.register)||void 0===r||r.call(e,{systemProfileStore:f.ZP})),v((function(){return t?s.Provider:o.Fragment}))}),[]),d?l().createElement(d,t&&{store:t().getStore()},l().createElement(u.Z,r)):p.Z};v.propTypes={getRegistry:c().func};const y=v},8622:(e,t,r)=>{r.d(t,{il:()=>f,jB:()=>m,fg:()=>v,A_:()=>y,CL:()=>g,HD:()=>h,CP:()=>b,Xe:()=>P,nE:()=>O,K5:()=>C,me:()=>S,Ar:()=>E,C8:()=>Z,g6:()=>k,u3:()=>T,wb:()=>_});var n=r(4942),a=r(93433),o=r(45987),l=r(59086),s=r(63599),i=r(13784),c=["filters"],u=["results"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.showTags,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.getEntities,f=t.filters,m=(0,o.Z)(t,c),v=e.reduce((function(e,t){return[].concat((0,a.Z)(e),[t&&"string"==typeof t?t:t.id])}),[]).filter(Boolean),y=function(e){var t,r,n;return(null===(t=m.hideFilters)||void 0===t?void 0:t[e])||(null===(r=m.hideFilters)||void 0===r?void 0:r.all)&&!1!==(null===(n=m.hideFilters)||void 0===n?void 0:n[e])},g=f?f.reduce(s.filtersReducer,p(p(p(p(p({},i.js),0===f.length&&{registeredWithFilter:[]}),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0}),y("operating_system")&&{osFilter:void 0})):p(p(p(p({},i.js),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0}),y("operating_system")&&{osFilter:void 0}),h=m.orderBy||"updated",b=m.orderDirection||"DESC",P=Date.now();return{type:l.aI.LOAD_ENTITIES,payload:d(v,p(p({filters:g},m),{},{orderBy:h,orderDirection:b}),n,s.getEntities).then((function(t){var r=t.results,n=(0,o.Z)(t,u);return p(p({},n),{},{filters:f,sortBy:{key:h,direction:b},results:e.length>0?e.map((function(e){return p(p({},e.id?e:{id:e}),r.find((function(t){var r=t.id;return r===e||r===e.id}))||{})})):r,page:m.page||(null==n?void 0:n.page),per_page:m.per_page||(null==n?void 0:n.per_page),hideFilters:m.hideFilters})})),meta:{showTags:n,lastDateRequest:P}}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l.s$,payload:{results:e}}},v=function(e){return{type:l.hI,payload:e}},y=function(e,t,r){var n=r.showTags;return{type:l.aI.LOAD_ENTITY,payload:(0,s.getEntities)(e,t,n),meta:{showTags:n}}},g=function(e,t){return{type:l.pr,payload:{id:e,selected:t}}},h=function(e){return{type:l.WH,payload:e}},b=function(e,t){return{type:l.lP,payload:{key:e,filterString:t}}},P=function(e){return{type:l.TP,payload:{appName:e}}},O=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:l.jZ,payload:{isLoading:e}}},C=function(){return{type:l.Gs}},S=function(e,t,r,n){return{type:l.aI.LOAD_TAGS,payload:(0,s.getTags)(e,t,r),meta:{tagsCount:n,systemId:e}}},E=function(e){return{type:l.Qd,payload:{isOpen:e}}},Z=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.getAllTags;return{type:l.aI.ALL_TAGS,payload:r(e,t),meta:{lastDateRequestTags:Date.now()}}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l.aI.OPERATING_SYSTEMS,payload:(0,s.getOperatingSystems)(e)}},T=function(e){return{type:l.Uq,payload:e}},_=function(e){return{type:l.Ji,payload:{isOpened:e}}}},36494:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(63366),o=r(26685),l=r(35067),s=r(63480),i=r(26343);const c=[function(e){return"function"==typeof e?(0,i.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,i.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,i.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],u=[function(e){return"function"==typeof e?(0,i.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,i.dX)((function(){return{}}))}];function d(e,t,r){return(0,n.Z)({},r,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,a=r.pure,o=r.areMergedPropsEqual,l=!1;return function(t,r,s){var i=e(t,r,s);return l?a&&o(i,n)||(n=i):(l=!0,n=i),n}}}(e):void 0},function(e){return e?void 0:function(){return d}}];var f=r(38548),m=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(e,t,r){for(var n=t.length-1;n>=0;n--){var a=t[n](e);if(a)return a}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function y(e,t){return e===t}function g(e){var t=void 0===e?{}:e,r=t.connectHOC,s=void 0===r?o.Z:r,i=t.mapStateToPropsFactories,d=void 0===i?u:i,g=t.mapDispatchToPropsFactories,h=void 0===g?c:g,b=t.mergePropsFactories,P=void 0===b?p:b,O=t.selectorFactory,C=void 0===O?f.ZP:O;return function(e,t,r,o){void 0===o&&(o={});var i=o,c=i.pure,u=void 0===c||c,p=i.areStatesEqual,f=void 0===p?y:p,g=i.areOwnPropsEqual,b=void 0===g?l.Z:g,O=i.areStatePropsEqual,S=void 0===O?l.Z:O,E=i.areMergedPropsEqual,Z=void 0===E?l.Z:E,k=(0,a.Z)(i,m),T=v(e,d,"mapStateToProps"),_=v(t,h,"mapDispatchToProps"),w=v(r,P,"mergeProps");return s(C,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:T,initMapDispatchToProps:_,initMergeProps:w,pure:u,areStatesEqual:f,areOwnPropsEqual:b,areStatePropsEqual:S,areMergedPropsEqual:Z},k))}}const h=g()}}]);
//# sourceMappingURL=../sourcemaps/4504.7a8cdc39b27fe78828b018d8c8b700ea.js.map