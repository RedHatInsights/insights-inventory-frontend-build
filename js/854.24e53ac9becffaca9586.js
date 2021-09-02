"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[854,412,45,0,838,537,242,14,669,782,299],{28412:(e,t,n)=>{n.d(t,{default:()=>f});var r=n(92950),a=n.n(r),o=n(45697),s=n.n(o),i=n(16530),l=n(45237),c=n(30319),u=n(48187),d=n(35240),p=(n(94500),function(){var e=(0,c.S1)();return a().createElement(c.gE.Provider,{value:{getRegistry:function(){return e}}},a().createElement(l.Provider,{store:e.getStore()},a().createElement(i.BrowserRouter,{basename:(0,d.eb)(window.location.pathname)},a().createElement(u.Z,null))))});p.propTypes={useLogger:s().bool},p.defaultProps={useLogger:!1};const f=p},43249:(e,t,n)=>{n.r(t);var r=n(92950),a=n.n(r),o=n(12181),s=n.n(o),i=n(28412);s().render(a().createElement(i.default,null),document.getElementById("root"))},6014:(e,t,n)=>{n.d(t,{default:()=>y});var r=n(4942),a=n(45987),o=n(89062),s=n(92950),i=n.n(s),l=n(45697),c=n.n(l),u=n(45237),d=n(76422),p=n(67782),f=n(64107),h=n(58061),v=["onClick"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,s=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,u=e.extra;return i().createElement(d.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,o.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(s?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,h.J_)(t.releaseDate)?i().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};g.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(h.x7)},g.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const y=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.Cx)(t)}}))(g)},5242:(e,t,n)=>{n.d(t,{default:()=>P});var r=n(4942),a=n(45987),o=n(89062),s=n(92950),i=n.n(s),l=n(45697),c=n.n(l),u=n(45237),d=n(13342),p=n(76422),f=n(67782),h=n(64107),v=n(58061),m=["onClick"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.egg,n=e.client;return i().createElement(d.u,{content:i().createElement(i().Fragment,null,i().createElement("p",null,"RPM version: ",n||"Not available"),i().createElement("p",null,"Dynamic update version: ",t||"Not available"))},i().createElement("span",null,n||t||"Not available"))};y.propTypes={egg:c().string,client:c().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,s=e.handleClick,l=e.hasClient,c=e.hasLastCheckIn,u=e.hasRegistered,d=e.hasInsightsId,f=e.hasReporter,v=e.hasMachineId,b=e.extra;return i().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,o.Z)(l?[{title:"Insights client",value:i().createElement(y,{egg:n.egg,client:n.client})}]:[]),(0,o.Z)(c?[{title:"Last check-in",value:r&&(h.Z?i().createElement(h.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,o.Z)(u?[{title:"Registered",value:r&&(h.Z?i().createElement(h.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,o.Z)(d?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,o.Z)(f?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,o.Z)(v?[{title:"RHEL machine id",value:r&&r.rhel_machine_id}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,m)),t&&{onClick:function(e){return t(e,s)}})}))))})};O.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string,rhel_machine_id:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,hasMachineId:c().bool,extra:c().arrayOf(v.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,hasMachineId:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,f.fZ)(n)}}))(O)},61537:(e,t,n)=>{n.d(t,{default:()=>O});var r=n(4942),a=n(45987),o=n(89062),s=n(92950),i=n.n(s),l=n(45697),c=n.n(l),u=n(45237),d=n(76422),p=n(92669),f=n(67782),h=n(58061),v=["onClick"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var y=function(e){var t,n,r,s=e.detailLoaded,l=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,h=e.hasProcesses,m=e.hasRepositories,y=e.extra;return i().createElement(d.Z,{title:"Configuration",isLoading:!s,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=l.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(l.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(n=l.services)||void 0===n?void 0:n.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(l.services,"Service name"))}}]:[]),(0,o.Z)(h?[{title:"Running processes",value:null===(r=l.processes)||void 0===r?void 0:r.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(l.processes,"Process name"))}}]:[]),(0,o.Z)(m?[{title:"Repositories",value:g(l.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(l.repositories),"medium")}}]:[]),(0,o.Z)(y.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(h.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.qr)(t)}}))(y)},82838:(e,t,n)=>{n.d(t,{default:()=>y});var r=n(4942),a=n(45987),o=n(89062),s=n(92950),i=n.n(s),l=n(45697),c=n.n(l),u=n(45237),d=n(76422),p=n(92669),f=n(67782),h=n(58061),v=["onClick"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t,n,r,s=e.infrastructure,l=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,h=e.hasIPv4,m=e.hasIPv6,g=e.hasInterfaces,y=e.extra;return i().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:s.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:s.vendor}]:[]),(0,o.Z)(h?[{title:"IPv4 addresses",value:null===(t=s.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(s.ipv4,"IP address"))}}]:[]),(0,o.Z)(m?[{title:"IPv6 addresses",value:null===(n=s.ipv6)||void 0===n?void 0:n.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(s.ipv6,"IP address"))}}]:[]),(0,o.Z)(g?[{title:"Interfaces/NICs",value:null===(r=s.nics)||void 0===r?void 0:r.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(s.nics),"medium")}}]:[]),(0,o.Z)(y.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};g.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(h.x7)},g.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const y=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,infrastructure:(0,f.qY)(n,t)}}))(g)},66e3:(e,t,n)=>{n.d(t,{default:()=>O});var r=n(4942),a=n(45987),o=n(89062),s=n(92950),i=n.n(s),l=n(45697),c=n.n(l),u=n(45237),d=n(76422),p=n(92669),f=n(67782),h=n(64107),v=n(58061),m=["onClick"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t,n=e.systemInfo,r=e.detailLoaded,s=e.handleClick,l=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,b=e.hasKernelModules,y=e.extra;return i().createElement(d.Z,{title:"Operating system",isLoading:!r,items:[].concat((0,o.Z)(l?[{title:"Release",value:n.release}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:n.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:n.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,v.J_)(n.bootTime)?i().createElement(h.Z,{date:n.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(b?[{title:"Kernel modules",value:null===(t=n.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){s("Kernel modules",(0,p.generalMapper)(n.kernelModules,"Module"))}}]:[]),(0,o.Z)(y.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,m)),t&&{onClick:function(e){return t(e,s)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,systemInfo:(0,f.d0)(n,t)}}))(y)},19299:(e,t,n)=>{n.d(t,{default:()=>R});var r=n(45987),a=n(89062),o=n(15671),s=n(43144),i=n(97326),l=n(60136),c=n(82963),u=n(61120),d=n(4942),p=n(92950),f=n.n(p),h=n(45697),v=n.n(h),m=n(45237),b=n(76422),g=n(91290),y=n(67782),O=n(94778),P=n(55426),k=n(86038),Z=n(47173),C=n(95083),E=n(92669),S=n(58061),j=["onClick"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.title,n=e.content;return f().createElement(f().Fragment,null,f().createElement("span",null,t),f().createElement(k.J,{headerContent:f().createElement("div",null,t),bodyContent:f().createElement("div",null,n)},f().createElement(Z.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},f().createElement(g.ZP,null))))},D=function(e){(0,l.Z)(v,e);var t,n,h=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function v(){var e;(0,o.Z)(this,v);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=h.call.apply(h,[this].concat(n)),(0,d.Z)((0,i.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,d.Z)((0,i.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,d.Z)((0,i.Z)(e),"onSubmit",(function(t){return function(n){var r=e.props.entity;t(r.id,n),e.onCancel()}})),(0,d.Z)((0,i.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,d.Z)((0,i.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,d.Z)((0,i.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,s.Z)(v,[{key:"render",value:function(){var e,t,n=this.props,o=n.detailLoaded,s=n.entity,i=n.properties,l=n.setDisplayName,c=n.setAnsibleHost,u=n.writePermissions,d=n.handleClick,h=n.hasHostName,v=n.hasDisplayName,m=n.hasAnsibleHostname,g=n.hasSAP,y=n.hasCPUs,O=n.hasSockets,k=n.hasCores,Z=n.hasCPUFlags,S=n.hasRAM,_=n.extra,D=this.state,R=D.isDisplayNameModalOpen,M=D.isAnsibleHostModalOpen;return f().createElement(p.Fragment,null,f().createElement(b.Z,{title:"System properties",isLoading:!o,items:[].concat((0,a.Z)(h?[{title:f().createElement(w,{title:"Host name",content:"Name imported from the system."}),value:s.fqdn,size:"md"}]:[]),(0,a.Z)(v?[{title:f().createElement(w,{title:"Display name",content:"System name displayed in an inventory list."}),value:f().createElement(p.Fragment,null,s.display_name,f().createElement(C.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,a.Z)(m?[{title:f().createElement(w,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:f().createElement(p.Fragment,null,this.getAnsibleHost(),f().createElement(C.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,a.Z)(g?[{title:"SAP",value:null===(e=i.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){d("SAP IDs (SID)",(0,E.generalMapper)(i.sapIds,"SID"))}}]:[]),(0,a.Z)(y?[{title:"Number of CPUs",value:i.cpuNumber}]:[]),(0,a.Z)(O?[{title:"Sockets",value:i.sockets}]:[]),(0,a.Z)(k?[{title:"Cores per socket",value:i.coresPerSocket}]:[]),(0,a.Z)(Z?[{title:"CPU flags",value:null==i||null===(t=i.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return d("CPU flags",(0,E.generalMapper)(i.cpuFlags,"flag name"))}}]:[]),(0,a.Z)(S?[{title:"RAM",value:i.ramSize}]:[]),(0,a.Z)(_.map((function(e){var t=e.onClick;return I(I({},(0,r.Z)(e,j)),t&&{onClick:function(e){return t(e,d)}})}))))}),f().createElement(P.Z,{isOpen:R,title:"Edit display name",value:s&&s.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(l)}),f().createElement(P.Z,{isOpen:M,title:"Edit Ansible host",value:s&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c)}))}}]),v}(p.Component);D.propTypes={detailLoaded:v().bool,entity:v().shape({display_name:v().string,ansible_host:v().string,fqdn:v().string,id:v().string}),properties:v().shape({cpuNumber:v().number,sockets:v().number,coresPerSocket:v().number,ramSize:v().string,storage:v().arrayOf(v().shape({device:v().string,mount_point:v().string,options:v().shape({}),type:v().string})),sapIds:v().arrayOf(v().string),cpuFlags:v().array}),setDisplayName:v().func,setAnsibleHost:v().func,writePermissions:v().bool,handleClick:v().func,hasHostName:v().bool,hasDisplayName:v().bool,hasAnsibleHostname:v().bool,hasSAP:v().bool,hasCPUs:v().bool,hasSockets:v().bool,hasCores:v().bool,hasCPUFlags:v().bool,hasRAM:v().bool,extra:v().arrayOf(S.x7)},D.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},w.propTypes={title:v().string.isRequired,content:v().string.isRequired};const R=(0,m.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,properties:(0,y.Ys)(n,t)}}),(function(e){var t=function(t,n){return n.payload.then((function(n){return e((0,O.eR)(t,{hasItems:!0})),e((0,O.A_)(t,{hasItems:!0},{showTags:!0})),n})),n};return{setDisplayName:function(n,r){e(t(n,(0,O.$Y)(n,r)))},setAnsibleHost:function(n,r){e(t(n,(0,O.Uw)(n,r)))}}}))(D)},22057:(e,t,n)=>{n.d(t,{Vf:()=>v,Je:()=>m,se:()=>b});var r=n(89062),a=n(92950),o=n.n(a),s=n(68778),i=n(24307),l=n(91290),c=n(10332),u=n(87292),d=n(94550),p=n(13342),f={UP:o().createElement(p.u,{content:"Service is running"},o().createElement(c.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:o().createElement(p.u,{content:"Service has stopped"},o().createElement(u.ZP,{className:"ins-c-inventory__detail--down"}))},h={true:o().createElement(p.u,{content:"Source enabled"},o().createElement(s.ZP,{className:"ins-c-inventory__detail--enabled"})),false:o().createElement(p.u,{content:"Source disabled"},o().createElement(i.ZP,{className:"ins-c-inventory__detail--disabled"}))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[d.sortable]},{title:"MTU",transforms:[d.sortable]},{title:"Name",transforms:[d.sortable]},"State",{title:"Type",transforms:[d.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:f[e.state]||o().createElement(p.u,{content:"Unknown service status"},o().createElement(l.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[d.sortable]},{title:"Enabled",transforms:[d.sortable]},{title:"GPG check",transforms:[d.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:h[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:h[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[d.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},92669:(e,t,n)=>{n.d(t,{generalMapper:()=>r.se,interfaceMapper:()=>r.Vf,repositoriesMapper:()=>r.Je});var r=n(22057)},67782:(e,t,n)=>{n.d(t,{Ys:()=>i,d0:()=>l,Cx:()=>c,qY:()=>u,qr:()=>d,fZ:()=>p});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var i=function(){var e,t,n,r,a,i,l,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=u.number_of_cpus,p=u.number_of_sockets,f=u.cores_per_socket,h=u.ramSize,v=u.disk_devices,m=u.sap_sids,b=u.cpu_flags,g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=g.facts;return{cpuNumber:d||(null==y||null===(e=y.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==y||null===(t=y.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:f||(null==y||null===(n=y.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==y||null===(r=y.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==y||null===(a=y.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==y||null===(i=y.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:h||(null==y||null===(l=y.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==y||null===(c=y.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,r=e.mount_point,a=e.options,i=e.type;return o(o(o(o({},t&&s(t,"device")),{},{label:n},r&&s(r,"mountpoint")),a&&s(a,"options")),i&&s(i,"mounttype"))})),sapIds:m,cpuFlags:b}},l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.os_release,a=t.os_kernel_version,o=t.last_boot_time,s=t.kernel_modules,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=i.facts;return{release:r,kernelRelease:a,architecture:n||(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:s}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},u=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,a=n.infrastructure_vendor,o=n.network,s=void 0===o?{}:o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=i.facts;return{type:r||void 0!==(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=l&&null!==(t=l.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:s.ipv4,ipv6:s.ipv6,nics:s.interfaces}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,a=e.repositories;return{packages:t,services:n,processes:r,repositories:a}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}}},95045:(e,t,n)=>{n.d(t,{TextInputModal:()=>d.Z,default:()=>m});var r=n(93324),a=n(45987),o=n(92950),s=n.n(o),i=n(45237),l=n(45697),c=n.n(l),u=n(24070),d=n(55426),p=n(47468),f=n(57785),h=["getRegistry"],v=function(e){var t=e.getRegistry,n=(0,a.Z)(e,h),l=(0,o.useState)(),c=(0,r.Z)(l,2),d=c[0],v=c[1];return(0,o.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemProfileStore:f.ZP})),v((function(){return t?i.Provider:o.Fragment}))}),[]),d?s().createElement(d,t&&{store:t().getStore()},s().createElement(u.Z,n)):p.Z};v.propTypes={getRegistry:c().func};const m=v}}]);
//# sourceMappingURL=../sourcemaps/854.9e450ac530b8d33ae93f61c30c99f148.js.map