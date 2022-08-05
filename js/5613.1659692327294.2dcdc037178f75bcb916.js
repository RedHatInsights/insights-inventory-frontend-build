"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5613],{6014:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(4942),a=n(45987),o=n(93433),l=n(92950),s=n.n(l),i=n(45697),c=n.n(i),u=n(32384),d=n(40409),p=n(45026),f=n(62410),m=n(58061),v=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,l=e.hasVersion,i=e.handleClick,c=e.hasReleaseDate,u=e.extra;return s().createElement(d.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,o.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(l?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,m.J_)(t.releaseDate)?s().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,i)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(m.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const g=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.biosSelector)(t)}}))(b)},61537:(e,t,n)=>{n.r(t),n.d(t,{enabledRepos:()=>b,default:()=>O});var r=n(4942),a=n(45987),o=n(93433),l=n(92950),s=n.n(l),i=n(45697),c=n.n(i),u=n(32384),d=n(40409),p=n(18562),f=n(45026),m=n(58061),v=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var g=function(e){var t,n,r,l=e.detailLoaded,i=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,m=e.hasProcesses,h=e.hasRepositories,g=e.extra;return s().createElement(d.Z,{title:"Configuration",isLoading:!l,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=i.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(i.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(n=i.services)||void 0===n?void 0:n.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(i.services,"Service name"))}}]:[]),(0,o.Z)(m?[{title:"Running processes",value:null===(r=i.processes)||void 0===r?void 0:r.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(i.processes,"Process name"))}}]:[]),(0,o.Z)(h?[{title:"Repositories",value:b(i.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(i.repositories),"medium")}}]:[]),(0,o.Z)(g.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};g.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(m.x7)},g.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.configurationSelector)(t)}}))(g)},81139:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(93433),a=n(29439),o=n(92950),l=n.n(o),s=n(45697),i=n.n(s),c=n(32384),u=n(40409),d=n(62410),p=n(56645),f=n(28191),m=n(92298),v=n(67782),h=function(e){var t=e.detailLoaded,n=e.collectors,s=e.entity,i=e.dataMapper,c=(0,o.useState)([]),h=(0,a.Z)(c,2),y=h[0],b=h[1],g=(0,o.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return b((function(n){var a=n.filter((function(t){return t!==e.name}));return t?[].concat((0,r.Z)(a),[e.name]):a}))}),[]),O=function(e){return y.includes(e.name)},P=null!=n?n:(0,v.f_)(s);return l().createElement(u.Z,{title:"Data collectors",isLoading:!t},l().createElement(p.TableComposable,{"aria-label":"Data collectors",variant:p.TableVariant.compact,borders:!1},l().createElement(p.Thead,null,l().createElement(p.Tr,{className:"ins-c__no-border"},l().createElement(p.Th,null),l().createElement(p.Th,null,"Name"),l().createElement(p.Th,null,"Status"),l().createElement(p.Th,null,"Last upload"))),i?i(P,O,g):P.map((function(e,t){var n;return l().createElement(p.Tbody,{key:e.name,isExpanded:O(e)},l().createElement(p.Tr,null,e.details.name?l().createElement(p.Td,{expand:e.details?{rowIndex:t,isExpanded:O(e),onToggle:function(){return g(e,!O(e))}}:void 0,style:{paddingLeft:0}}):l().createElement(p.Td,null),l().createElement(p.Td,{dataLabel:"Name"},e.name),l().createElement(p.Td,{dataLabel:"Status"},e.status?"Active":"N/A"),l().createElement(p.Td,{dataLabel:"Last upload"},e.updated?l().createElement(d.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&l().createElement(p.Tr,{isExpanded:O(e)},l().createElement(p.Td,null),l().createElement(p.Td,{colSpan:3},l().createElement(p.ExpandableRowContent,null,l().createElement(f.k,null,l().createElement(m.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),l().createElement(m.B,{grow:{default:"grow"}},null!==(n=e.details.id)&&void 0!==n?n:"N/A"))))))}))))};h.propTypes={detailLoaded:i().bool,collectors:i().array,dataMapper:i().func,entity:i().shape({per_reporter_staleness:i().object})},h.defaultProps={detailLoaded:!1};const y=(0,c.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:n,detailLoaded:null==n?void 0:n.loaded,defaultCollectors:(0,v.f_)(t)}}))(h)},44983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(15671),a=n(43144),o=n(97326),l=n(60136),s=n(82963),i=n(61120),c=n(4942),u=n(92950),d=n.n(u),p=n(45697),f=n.n(p),m=n(32384),v=n(50693),h=n(16475),y=n(80236),b=n(56645),g=n(94778),O=n(33214),P=n(83732),C=n(37164),E=n(11365),S=n(59155),Z=n(21705),k=n(878),_=n(81139);var w=function(e){(0,l.Z)(f,e);var t,n,p=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function f(){var e;(0,r.Z)(this,f);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=p.call.apply(p,[this].concat(n)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,n,r,a){var o=e.state.rows,l=(a||o).sort((function(e,t){var r=e.cells||e,a=t.cells||t;return(""+(r[n].sortValue||r[n])).toLocaleLowerCase()>(""+(a[n].sortValue||a[n])).toLocaleLowerCase()?-1:1}));e.setState({rows:r===b.SortByDirection.asc?l:l.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.cells,a=n.rows,o=n.expandable,l=n.filters,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";a&&e.onSort(void 0,o?1:0,b.SortByDirection.asc,a),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:r,expandable:o,filters:l,modalVariant:s}}))})),e}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,n=t.isModalOpen,r=t.modalTitle,a=t.cells,o=t.rows,l=t.expandable,s=t.filters,i=t.modalVariant,c=this.props,p=c.store,f=c.writePermissions,b=c.SystemCardWrapper,g=c.OperatingSystemCardWrapper,P=c.BiosCardWrapper,C=c.InfrastructureCardWrapper,E=c.ConfigurationCardWrapper,S=c.SystemStatusCardWrapper,Z=c.DataCollectorsCardWrapper,k=c.CollectionCardWrapper,_=c.children,w=p?m.Provider:u.Fragment;return d().createElement(w,p&&{store:p},d().createElement("div",{className:"ins-c-general-information"},d().createElement(v.r,{sm:12,md:6,hasGutter:!0},b&&d().createElement(h.P,null,d().createElement(b,{handleClick:this.handleModalToggle,writePermissions:f})),g&&d().createElement(h.P,null,d().createElement(g,{handleClick:this.handleModalToggle})),C&&d().createElement(h.P,null,d().createElement(C,{handleClick:this.handleModalToggle})),P&&d().createElement(h.P,null,d().createElement(P,{handleClick:this.handleModalToggle})),S&&d().createElement(h.P,null,d().createElement(S,{handleClick:this.handleModalToggle})),E&&d().createElement(h.P,null,d().createElement(E,{handleClick:this.handleModalToggle})),Z&&d().createElement(h.P,null,d().createElement(Z,{handleClick:this.handleModalToggle})),k&&d().createElement(h.P,null,d().createElement(k,{handleClick:this.handleModalToggle})),_,d().createElement(y.u,{title:r||"","aria-label":"".concat(r||""," modal"),isOpen:n,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:i},d().createElement(O.Z,{cells:a,rows:o,expandable:l,onSort:this.onSort,filters:s})))))}}]),f}(u.Component);w.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().node,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().node,f().bool]),BiosCardWrapper:f().oneOfType([f().node,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().node,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().node,f().bool]),SystemStatusCardWrapper:f().oneOfType([f().node,f().bool]),DataCollectorsCardWrapper:f().oneOfType([f().node,f().bool]),CollectionCardWrapper:f().oneOfType([f().node,f().bool]),children:f().node},w.defaultProps={entity:{},SystemCardWrapper:C.Z,OperatingSystemCardWrapper:P.Z,BiosCardWrapper:E.Z,InfrastructureCardWrapper:S.Z,ConfigurationCardWrapper:Z.Z,SystemStatusCardWrapper:k.Z,DataCollectorsCardWrapper:_.default,CollectionCardWrapper:!1};const D=(0,m.connect)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,g.eR)(t))}}}))(w)},82838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(4942),a=n(45987),o=n(93433),l=n(92950),s=n.n(l),i=n(45697),c=n.n(i),u=n(32384),d=n(40409),p=n(18562),f=n(45026),m=n(58061),v=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t,n,r,l=e.infrastructure,i=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,m=e.hasIPv4,h=e.hasIPv6,b=e.hasInterfaces,g=e.extra;return s().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:l.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:l.vendor}]:[]),(0,o.Z)(m?[{title:"IPv4 addresses",value:null===(t=l.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){i("IPv4",(0,p.generalMapper)(l.ipv4,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"IPv6 addresses",value:null===(n=l.ipv6)||void 0===n?void 0:n.length,plural:"addresses",singular:"address",onClick:function(){i("IPv6",(0,p.generalMapper)(l.ipv6,"IP address"))}}]:[]),(0,o.Z)(b?[{title:"Interfaces/NICs",value:null===(r=l.nics)||void 0===r?void 0:r.length,singular:"NIC",target:"interfaces",onClick:function(){i("Interfaces/NICs",(0,p.interfaceMapper)(l.nics),"medium")}}]:[]),(0,o.Z)(g.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,i)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(m.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const g=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,infrastructure:(0,f.infrastructureSelector)(n,t)}}))(b)},66e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(4942),a=n(45987),o=n(93433),l=n(92950),s=n.n(l),i=n(45697),c=n.n(i),u=n(32384),d=n(40409),p=n(18562),f=n(45026),m=n(62410),v=n(58061),h=n(5311),y=["onClick"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t,n=e.systemInfo,r=e.detailLoaded,l=e.handleClick,i=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,b=e.hasKernelModules,O=e.extra;return s().createElement(d.Z,{title:"Operating system",isLoading:!r,items:[].concat((0,o.Z)(i?[{title:"Release",value:s().createElement(h.Z,{operatingSystem:n.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:n.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:n.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,v.J_)(n.bootTime)?s().createElement(m.Z,{date:n.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(b?[{title:"Kernel modules",value:null===(t=n.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){l("Kernel modules",(0,p.generalMapper)(n.kernelModules,"Module"))}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,y)),t&&{onClick:function(e){return t(e,l)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,systemInfo:(0,f.operatingSystem)(n,t)}}))(O)},19299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(45987),a=n(93433),o=n(15671),l=n(43144),s=n(97326),i=n(60136),c=n(82963),u=n(61120),d=n(4942),p=n(92950),f=n.n(p),m=n(45697),v=n.n(m),h=n(32384),y=n(40409),b=n(91290),g=n(45026),O=n(94778),P=n(95364),C=n(46043),E=n(47173),S=n(2907),Z=n(18562),k=n(58061),_=["onClick"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.title,n=e.content;return f().createElement(f().Fragment,null,f().createElement("span",null,t),f().createElement(C.J,{headerContent:f().createElement("div",null,t),bodyContent:f().createElement("div",null,n)},f().createElement(E.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},f().createElement(b.ZP,null))))},j=function(e){(0,i.Z)(v,e);var t,n,m=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function v(){var e;(0,o.Z)(this,v);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=m.call.apply(m,[this].concat(n)),(0,d.Z)((0,s.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,d.Z)((0,s.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,d.Z)((0,s.Z)(e),"onSubmit",(function(t){return function(n){var r=e.props.entity;t(r.id,n),e.onCancel()}})),(0,d.Z)((0,s.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,l.Z)(v,[{key:"render",value:function(){var e,t,n=this.props,o=n.detailLoaded,l=n.entity,s=n.properties,i=n.setDisplayName,c=n.setAnsibleHost,u=n.writePermissions,d=n.handleClick,m=n.hasHostName,v=n.hasDisplayName,h=n.hasAnsibleHostname,b=n.hasSAP,g=n.hasCPUs,O=n.hasSockets,C=n.hasCores,E=n.hasCPUFlags,k=n.hasRAM,w=n.extra,j=this.state,M=j.isDisplayNameModalOpen,I=j.isAnsibleHostModalOpen;return f().createElement(p.Fragment,null,f().createElement(y.Z,{title:"System properties",isLoading:!o,items:[].concat((0,a.Z)(m?[{title:f().createElement(T,{title:"Host name",content:"Name imported from the system."}),value:l.fqdn,size:"md"}]:[]),(0,a.Z)(v?[{title:f().createElement(T,{title:"Display name",content:"System name displayed in an inventory list."}),value:f().createElement(p.Fragment,null,l.display_name,f().createElement(S.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,a.Z)(h?[{title:f().createElement(T,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:f().createElement(p.Fragment,null,this.getAnsibleHost(),f().createElement(S.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,a.Z)(b?[{title:"SAP",value:null===(e=s.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){d("SAP IDs (SID)",(0,Z.generalMapper)(s.sapIds,"SID"))}}]:[]),(0,a.Z)(g?[{title:"Number of CPUs",value:s.cpuNumber}]:[]),(0,a.Z)(O?[{title:"Sockets",value:s.sockets}]:[]),(0,a.Z)(C?[{title:"Cores per socket",value:s.coresPerSocket}]:[]),(0,a.Z)(E?[{title:"CPU flags",value:null==s||null===(t=s.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return d("CPU flags",(0,Z.generalMapper)(s.cpuFlags,"flag name"))}}]:[]),(0,a.Z)(k?[{title:"RAM",value:s.ramSize}]:[]),(0,a.Z)(w.map((function(e){var t=e.onClick;return D(D({},(0,r.Z)(e,_)),t&&{onClick:function(e){return t(e,d)}})}))))}),f().createElement(P.Z,{isOpen:M,title:"Edit display name",value:l&&l.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(i)}),f().createElement(P.Z,{isOpen:I,title:"Edit Ansible host",value:l&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c)}))}}]),v}(p.Component);j.propTypes={detailLoaded:v().bool,entity:v().shape({display_name:v().string,ansible_host:v().string,fqdn:v().string,id:v().string}),properties:v().shape({cpuNumber:v().number,sockets:v().number,coresPerSocket:v().number,ramSize:v().string,storage:v().arrayOf(v().shape({device:v().string,mount_point:v().string,options:v().shape({}),type:v().string})),sapIds:v().arrayOf(v().string),cpuFlags:v().array}),setDisplayName:v().func,setAnsibleHost:v().func,writePermissions:v().bool,handleClick:v().func,hasHostName:v().bool,hasDisplayName:v().bool,hasAnsibleHostname:v().bool,hasSAP:v().bool,hasCPUs:v().bool,hasSockets:v().bool,hasCores:v().bool,hasCPUFlags:v().bool,hasRAM:v().bool,extra:v().arrayOf(k.x7)},j.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},T.propTypes={title:v().string.isRequired,content:v().string.isRequired};const M=(0,h.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,properties:(0,g.propertiesSelector)(n,t)}}),(function(e){var t=function(t,n){return n.payload.then((function(n){return e((0,O.eR)(t,{hasItems:!0})),e((0,O.A_)(t,{hasItems:!0},{showTags:!0})),n})),n};return{setDisplayName:function(n,r){e(t(n,(0,O.$Y)(n,r)))},setAnsibleHost:function(n,r){e(t(n,(0,O.Uw)(n,r)))}}}))(j)},18562:(e,t,n)=>{n.r(t),n.d(t,{diskMapper:()=>h,enabledHelper:()=>v,generalMapper:()=>O,interfaceMapper:()=>b,productsMapper:()=>y,repositoriesMapper:()=>g,statusHelper:()=>m});var r=n(93433),a=n(29439),o=n(92950),l=n.n(o),s=n(68778),i=n(24307),c=n(91290),u=n(10332),d=n(87292),p=n(56645),f=n(75824),m={UP:l().createElement(f.u,{content:"Service is running"},l().createElement(u.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:l().createElement(f.u,{content:"Service has stopped"},l().createElement(d.ZP,{className:"ins-c-inventory__detail--down"}))},v={true:l().createElement(f.u,{content:"Source enabled"},l().createElement(s.ZP,{className:"ins-c-inventory__detail--enabled"})),false:l().createElement(f.u,{content:"Source disabled"},l().createElement(i.ZP,{className:"ins-c-inventory__detail--disabled"}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,r=e.mountpoint,o=e.options,s=e.mounttype,i=o&&o.options||o;return{isOpen:!1,child:l().createElement("div",null,i&&Object.entries(i.value||i).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r.value||r)})).join(",  ")),cells:[t&&t.value||t,n,r&&r.value||r,s&&s.value||s]}})),expandable:!0}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:m[e.status]||l().createElement(f.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:m[e.state]||l().createElement(f.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:v[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:v[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},45026:(e,t,n)=>{n.r(t),n.d(t,{biosSelector:()=>r.Cx,collectionInformationSelector:()=>r.fZ,configurationSelector:()=>r.qr,getDefaultCollectors:()=>r.f_,infrastructureSelector:()=>r.qY,operatingSystem:()=>r.d0,propertiesSelector:()=>r.Ys,systemStatus:()=>r.qs});var r=n(67782)},67782:(e,t,n)=>{n.d(t,{Ys:()=>i,d0:()=>c,Cx:()=>u,qY:()=>d,qr:()=>p,fZ:()=>f,f_:()=>m,qs:()=>v});var r=n(4942),a=n(73880);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var i=function(){var e,t,n,r,a,o,i,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=u.number_of_cpus,p=u.number_of_sockets,f=u.cores_per_socket,m=u.ramSize,v=u.disk_devices,h=u.sap_sids,y=u.cpu_flags,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=b.facts;return{cpuNumber:d||(null==g||null===(e=g.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==g||null===(t=g.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:f||(null==g||null===(n=g.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==g||null===(r=g.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==g||null===(a=g.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==g||null===(o=g.rhsm)||void 0===o?void 0:o.CPU_SOCKETS,10),ramSize:m||(null==g||null===(i=g.rhsm)||void 0===i?void 0:i.MEMORY)&&"".concat(null==g||null===(c=g.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,r=e.mount_point,a=e.options,o=e.type;return l(l(l(l({},t&&s(t,"device")),{},{label:n},r&&s(r,"mountpoint")),a&&s(a,"options")),o&&s(o,"mounttype"))})),sapIds:h,cpuFlags:y}},c=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.operating_system,a=t.os_kernel_version,o=t.last_boot_time,l=t.kernel_modules,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.facts;return{release:r,kernelRelease:a,architecture:n||(null==i||null===(e=i.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:l}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},d=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,a=n.infrastructure_vendor,o=n.network,l=void 0===o?{}:o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.facts;return{type:r||void 0!==(null==i||null===(e=i.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=i&&null!==(t=i.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,a=e.repositories;return{packages:t,services:n,processes:r,repositories:a}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}},m=function(e){return null===a.registered||void 0===a.registered?void 0:a.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n,r;return{name:t.label,status:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.check_in_succeeded,updated:null==e||null===(r=e.per_reporter_staleness[t.value])||void 0===r?void 0:r.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stale_timestamp;return{stale:new Date>new Date(t)}}},95045:(e,t,n)=>{n.r(t),n.d(t,{TextInputModal:()=>d.Z,default:()=>h});var r=n(29439),a=n(45987),o=n(92950),l=n.n(o),s=n(32384),i=n(45697),c=n.n(i),u=n(24070),d=n(95364),p=n(47468),f=n(57785),m=["getRegistry"],v=function(e){var t=e.getRegistry,n=(0,a.Z)(e,m),i=(0,o.useState)(),c=(0,r.Z)(i,2),d=c[0],v=c[1];return(0,o.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemProfileStore:f.ZP})),v((function(){return t?s.Provider:o.Fragment}))}),[]),d?l().createElement(d,t&&{store:t().getStore()},l().createElement(u.Z,n)):p.Z};v.propTypes={getRegistry:c().func};const h=v},94778:(e,t,n)=>{n.d(t,{gb:()=>o.gb,Oj:()=>o.Oj,k0:()=>o.k0,Fo:()=>o.Fo,K5:()=>l.K5,u3:()=>l.u3,Xe:()=>l.Xe,nE:()=>l.nE,C8:()=>l.C8,CP:()=>l.CP,fg:()=>l.fg,il:()=>l.il,A_:()=>l.A_,me:()=>l.me,CL:()=>l.CL,HD:()=>l.HD,wb:()=>l.wb,Ar:()=>l.Ar,jB:()=>l.jB,Ks:()=>s,Tv:()=>i,L1:()=>c,$Y:()=>u,Jr:()=>d,eR:()=>p,Uw:()=>f});var r=n(59086),a=n(63599),o=n(87637),l=n(8622),s=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:a.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},i=function(e){return{type:r.uW,payload:{filtersList:e}}},c=function(){return{type:r.wt}},u=function(e,t){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:a.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},d=function(e,t){return{type:r.fT,payload:{page:e,perPage:t}}},p=function(e){return{type:r.aI.LOAD_SYSTEM_PROFILE,payload:(0,a.getEntitySystemProfile)(e,{})}},f=function(e,t){return{type:r.aI.SET_ANSIBLE_HOST,payload:a.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},36494:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(87462),a=n(63366),o=n(26685),l=n(35067),s=n(63480),i=n(26343);const c=[function(e){return"function"==typeof e?(0,i.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,i.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,i.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],u=[function(e){return"function"==typeof e?(0,i.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,i.dX)((function(){return{}}))}];function d(e,t,n){return(0,r.Z)({},n,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,a=n.pure,o=n.areMergedPropsEqual,l=!1;return function(t,n,s){var i=e(t,n,s);return l?a&&o(i,r)||(r=i):(l=!0,r=i),r}}}(e):void 0},function(e){return e?void 0:function(){return d}}];var f=n(38548),m=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function v(e,t,n){for(var r=t.length-1;r>=0;r--){var a=t[r](e);if(a)return a}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function h(e,t){return e===t}function y(e){var t=void 0===e?{}:e,n=t.connectHOC,s=void 0===n?o.Z:n,i=t.mapStateToPropsFactories,d=void 0===i?u:i,y=t.mapDispatchToPropsFactories,b=void 0===y?c:y,g=t.mergePropsFactories,O=void 0===g?p:g,P=t.selectorFactory,C=void 0===P?f.ZP:P;return function(e,t,n,o){void 0===o&&(o={});var i=o,c=i.pure,u=void 0===c||c,p=i.areStatesEqual,f=void 0===p?h:p,y=i.areOwnPropsEqual,g=void 0===y?l.Z:y,P=i.areStatePropsEqual,E=void 0===P?l.Z:P,S=i.areMergedPropsEqual,Z=void 0===S?l.Z:S,k=(0,a.Z)(i,m),_=v(e,d,"mapStateToProps"),w=v(t,b,"mapDispatchToProps"),D=v(n,O,"mergeProps");return s(C,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:w,initMergeProps:D,pure:u,areStatesEqual:f,areOwnPropsEqual:g,areStatePropsEqual:E,areMergedPropsEqual:Z},k))}}const b=y()}}]);
//# sourceMappingURL=../sourcemaps/5613.100149ed8cad69f53d411c14bb251f5c.js.map