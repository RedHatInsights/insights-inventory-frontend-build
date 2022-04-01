"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8794],{6014:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(4942),a=n(45987),s=n(93433),o=n(96985),i=n.n(o),l=n(45697),c=n.n(l),u=n(32384),d=n(40409),p=n(67782),f=n(62410),m=n(58061),b=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,o=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,u=e.extra;return i().createElement(d.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,s.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,s.Z)(o?[{title:"Version",value:t.version}]:[]),(0,s.Z)(c?[{title:"Release date",value:(0,m.J_)(t.releaseDate)?i().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,s.Z)(u.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,l)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(m.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const y=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.Cx)(t)}}))(v)},5242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(4942),a=n(45987),s=n(93433),o=n(96985),i=n.n(o),l=n(45697),c=n.n(l),u=n(32384),d=n(35224),p=n(40409),f=n(67782),m=n(62410),b=n(58061),h=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.egg,n=e.client;return i().createElement(d.u,{content:i().createElement(i().Fragment,null,i().createElement("p",null,"RPM version: ",n||"Not available"),i().createElement("p",null,"Dynamic update version: ",t||"Not available"))},i().createElement("span",null,n||t||"Not available"))};y.propTypes={egg:c().string,client:c().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,o=e.handleClick,l=e.hasClient,c=e.hasLastCheckIn,u=e.hasRegistered,d=e.hasInsightsId,f=e.hasReporter,b=e.extra;return i().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,s.Z)(l?[{title:"Insights client",value:i().createElement(y,{egg:n.egg,client:n.client})}]:[]),(0,s.Z)(c?[{title:"Last check-in",value:r&&(m.Z?i().createElement(m.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,s.Z)(u?[{title:"Registered",value:r&&(m.Z?i().createElement(m.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,s.Z)(d?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,s.Z)(f?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,s.Z)(b.map((function(e){var t=e.onClick;return v(v({},(0,a.Z)(e,h)),t&&{onClick:function(e){return t(e,o)}})}))))})};O.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,extra:c().arrayOf(b.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,f.fZ)(n)}}))(O)},61537:(e,t,n)=>{n.r(t),n.d(t,{enabledRepos:()=>v,default:()=>O});var r=n(4942),a=n(45987),s=n(93433),o=n(96985),i=n.n(o),l=n(45697),c=n.n(l),u=n(32384),d=n(40409),p=n(18562),f=n(67782),m=n(58061),b=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var y=function(e){var t,n,r,o=e.detailLoaded,l=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,m=e.hasProcesses,h=e.hasRepositories,y=e.extra;return i().createElement(d.Z,{title:"Configuration",isLoading:!o,items:[].concat((0,s.Z)(u?[{title:"Installed packages",value:null===(t=l.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(l.packages,"Package name"))}}]:[]),(0,s.Z)(f?[{title:"Services",value:null===(n=l.services)||void 0===n?void 0:n.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(l.services,"Service name"))}}]:[]),(0,s.Z)(m?[{title:"Running processes",value:null===(r=l.processes)||void 0===r?void 0:r.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(l.processes,"Process name"))}}]:[]),(0,s.Z)(h?[{title:"Repositories",value:v(l.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(l.repositories),"medium")}}]:[]),(0,s.Z)(y.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,c)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(m.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.qr)(t)}}))(y)},82838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(4942),a=n(45987),s=n(93433),o=n(96985),i=n.n(o),l=n(45697),c=n.n(l),u=n(32384),d=n(40409),p=n(18562),f=n(67782),m=n(58061),b=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t,n,r,o=e.infrastructure,l=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,m=e.hasIPv4,h=e.hasIPv6,v=e.hasInterfaces,y=e.extra;return i().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,s.Z)(u?[{title:"Type",value:o.type}]:[]),(0,s.Z)(f?[{title:"Vendor",value:o.vendor}]:[]),(0,s.Z)(m?[{title:"IPv4 addresses",value:null===(t=o.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(o.ipv4,"IP address"))}}]:[]),(0,s.Z)(h?[{title:"IPv6 addresses",value:null===(n=o.ipv6)||void 0===n?void 0:n.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(o.ipv6,"IP address"))}}]:[]),(0,s.Z)(v?[{title:"Interfaces/NICs",value:null===(r=o.nics)||void 0===r?void 0:r.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(o.nics),"medium")}}]:[]),(0,s.Z)(y.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,l)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(m.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const y=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,infrastructure:(0,f.qY)(n,t)}}))(v)},66e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(4942),a=n(45987),s=n(93433),o=n(96985),i=n.n(o),l=n(45697),c=n.n(l),u=n(32384),d=n(40409),p=n(18562),f=n(67782),m=n(62410),b=n(58061),h=n(5311),g=["onClick"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t,n=e.systemInfo,r=e.detailLoaded,o=e.handleClick,l=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,v=e.hasKernelModules,O=e.extra;return i().createElement(d.Z,{title:"Operating system",isLoading:!r,items:[].concat((0,s.Z)(l?[{title:"Release",value:i().createElement(h.Z,{operatingSystem:n.release})}]:[]),(0,s.Z)(c?[{title:"Kernel release",value:n.kernelRelease}]:[]),(0,s.Z)(u?[{title:"Architecture",value:n.architecture}]:[]),(0,s.Z)(f?[{title:"Last boot time",value:(0,b.J_)(n.bootTime)?i().createElement(m.Z,{date:n.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,s.Z)(v?[{title:"Kernel modules",value:null===(t=n.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){o("Kernel modules",(0,p.generalMapper)(n.kernelModules,"Module"))}}]:[]),(0,s.Z)(O.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,g)),t&&{onClick:function(e){return t(e,o)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(b.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,systemInfo:(0,f.d0)(n,t)}}))(O)},19299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(45987),a=n(93433),s=n(15671),o=n(43144),i=n(97326),l=n(60136),c=n(82963),u=n(61120),d=n(4942),p=n(96985),f=n.n(p),m=n(45697),b=n.n(m),h=n(32384),g=n(40409),v=n(91290),y=n(67782),O=n(94778),P=n(95364),k=n(37377),Z=n(47173),C=n(2907),j=n(18562),E=n(58061),S=["onClick"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=e.title,n=e.content;return f().createElement(f().Fragment,null,f().createElement("span",null,t),f().createElement(k.J,{headerContent:f().createElement("div",null,t),bodyContent:f().createElement("div",null,n)},f().createElement(Z.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},f().createElement(v.ZP,null))))},R=function(e){(0,l.Z)(b,e);var t,n,m=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function b(){var e;(0,s.Z)(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=m.call.apply(m,[this].concat(n)),(0,d.Z)((0,i.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,d.Z)((0,i.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,d.Z)((0,i.Z)(e),"onSubmit",(function(t){return function(n){var r=e.props.entity;t(r.id,n),e.onCancel()}})),(0,d.Z)((0,i.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,d.Z)((0,i.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,d.Z)((0,i.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,o.Z)(b,[{key:"render",value:function(){var e,t,n=this.props,s=n.detailLoaded,o=n.entity,i=n.properties,l=n.setDisplayName,c=n.setAnsibleHost,u=n.writePermissions,d=n.handleClick,m=n.hasHostName,b=n.hasDisplayName,h=n.hasAnsibleHostname,v=n.hasSAP,y=n.hasCPUs,O=n.hasSockets,k=n.hasCores,Z=n.hasCPUFlags,E=n.hasRAM,w=n.extra,R=this.state,L=R.isDisplayNameModalOpen,M=R.isAnsibleHostModalOpen;return f().createElement(p.Fragment,null,f().createElement(g.Z,{title:"System properties",isLoading:!s,items:[].concat((0,a.Z)(m?[{title:f().createElement(I,{title:"Host name",content:"Name imported from the system."}),value:o.fqdn,size:"md"}]:[]),(0,a.Z)(b?[{title:f().createElement(I,{title:"Display name",content:"System name displayed in an inventory list."}),value:f().createElement(p.Fragment,null,o.display_name,f().createElement(C.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,a.Z)(h?[{title:f().createElement(I,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:f().createElement(p.Fragment,null,this.getAnsibleHost(),f().createElement(C.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,a.Z)(v?[{title:"SAP",value:null===(e=i.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){d("SAP IDs (SID)",(0,j.generalMapper)(i.sapIds,"SID"))}}]:[]),(0,a.Z)(y?[{title:"Number of CPUs",value:i.cpuNumber}]:[]),(0,a.Z)(O?[{title:"Sockets",value:i.sockets}]:[]),(0,a.Z)(k?[{title:"Cores per socket",value:i.coresPerSocket}]:[]),(0,a.Z)(Z?[{title:"CPU flags",value:null==i||null===(t=i.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return d("CPU flags",(0,j.generalMapper)(i.cpuFlags,"flag name"))}}]:[]),(0,a.Z)(E?[{title:"RAM",value:i.ramSize}]:[]),(0,a.Z)(w.map((function(e){var t=e.onClick;return D(D({},(0,r.Z)(e,S)),t&&{onClick:function(e){return t(e,d)}})}))))}),f().createElement(P.Z,{isOpen:L,title:"Edit display name",value:o&&o.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(l)}),f().createElement(P.Z,{isOpen:M,title:"Edit Ansible host",value:o&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c)}))}}]),b}(p.Component);R.propTypes={detailLoaded:b().bool,entity:b().shape({display_name:b().string,ansible_host:b().string,fqdn:b().string,id:b().string}),properties:b().shape({cpuNumber:b().number,sockets:b().number,coresPerSocket:b().number,ramSize:b().string,storage:b().arrayOf(b().shape({device:b().string,mount_point:b().string,options:b().shape({}),type:b().string})),sapIds:b().arrayOf(b().string),cpuFlags:b().array}),setDisplayName:b().func,setAnsibleHost:b().func,writePermissions:b().bool,handleClick:b().func,hasHostName:b().bool,hasDisplayName:b().bool,hasAnsibleHostname:b().bool,hasSAP:b().bool,hasCPUs:b().bool,hasSockets:b().bool,hasCores:b().bool,hasCPUFlags:b().bool,hasRAM:b().bool,extra:b().arrayOf(E.x7)},R.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},I.propTypes={title:b().string.isRequired,content:b().string.isRequired};const L=(0,h.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,properties:(0,y.Ys)(n,t)}}),(function(e){var t=function(t,n){return n.payload.then((function(n){return e((0,O.eR)(t,{hasItems:!0})),e((0,O.A_)(t,{hasItems:!0},{showTags:!0})),n})),n};return{setDisplayName:function(n,r){e(t(n,(0,O.$Y)(n,r)))},setAnsibleHost:function(n,r){e(t(n,(0,O.Uw)(n,r)))}}}))(R)},18562:(e,t,n)=>{n.r(t),n.d(t,{diskMapper:()=>h,enabledHelper:()=>b,generalMapper:()=>O,interfaceMapper:()=>v,productsMapper:()=>g,repositoriesMapper:()=>y,statusHelper:()=>m});var r=n(93433);if(2234==n.j)var a=n(29439);var s=n(96985),o=n.n(s),i=n(68778),l=n(24307),c=n(91290),u=n(10332),d=n(87292),p=n(29673),f=n(35224),m={UP:o().createElement(f.u,{content:"Service is running"},o().createElement(u.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:o().createElement(f.u,{content:"Service has stopped"},o().createElement(d.ZP,{className:"ins-c-inventory__detail--down"}))},b={true:o().createElement(f.u,{content:"Source enabled"},o().createElement(i.ZP,{className:"ins-c-inventory__detail--enabled"})),false:o().createElement(f.u,{content:"Source disabled"},o().createElement(l.ZP,{className:"ins-c-inventory__detail--disabled"}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,r=e.mountpoint,s=e.options,i=e.mounttype,l=s&&s.options||s;return{isOpen:!1,child:o().createElement("div",null,l&&Object.entries(l.value||l).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r.value||r)})).join(",  ")),cells:[t&&t.value||t,n,r&&r.value||r,i&&i.value||i]}})),expandable:!0}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:m[e.status]||o().createElement(f.u,{content:"Unknown service status"},o().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:m[e.state]||o().createElement(f.u,{content:"Unknown service status"},o().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:b[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:b[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},95045:(e,t,n)=>{n.r(t),n.d(t,{TextInputModal:()=>d.Z,default:()=>h});var r=n(29439),a=n(45987),s=n(96985),o=n.n(s),i=n(32384),l=n(45697),c=n.n(l),u=n(2951),d=n(95364),p=n(47468),f=n(57785),m=["getRegistry"],b=function(e){var t=e.getRegistry,n=(0,a.Z)(e,m),l=(0,s.useState)(),c=(0,r.Z)(l,2),d=c[0],b=c[1];return(0,s.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemProfileStore:f.ZP})),b((function(){return t?i.Provider:s.Fragment}))}),[]),d?o().createElement(d,t&&{store:t().getStore()},o().createElement(u.Z,n)):p.Z};b.propTypes={getRegistry:c().func};const h=b}}]);
//# sourceMappingURL=../sourcemaps/8794.027d05d6311c9216c6bd6f98b201d54f.js.map