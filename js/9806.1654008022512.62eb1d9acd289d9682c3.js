"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9806],{6014:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(4942),a=r(45987),o=r(93433),s=r(92950),i=r.n(s),l=r(45697),c=r.n(l),u=r(32384),d=r(40409),p=r(45026),f=r(62410),g=r(58061),v=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.bios,r=e.detailLoaded,n=e.hasVendor,s=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,u=e.extra;return i().createElement(d.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(n?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(s?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,g.J_)(t.releaseDate)?i().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(g.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.biosSelector)(t)}}))(y)},61537:(e,t,r)=>{r.r(t),r.d(t,{enabledRepos:()=>y,default:()=>P});var n=r(4942),a=r(45987),o=r(93433),s=r(92950),i=r.n(s),l=r(45697),c=r.n(l),u=r(32384),d=r(40409),p=r(18562),f=r(45026),g=r(58061),v=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var O=function(e){var t,r,n,s=e.detailLoaded,l=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,g=e.hasProcesses,h=e.hasRepositories,O=e.extra;return i().createElement(d.Z,{title:"Configuration",isLoading:!s,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=l.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(l.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(r=l.services)||void 0===r?void 0:r.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(l.services,"Service name"))}}]:[]),(0,o.Z)(g?[{title:"Running processes",value:null===(n=l.processes)||void 0===n?void 0:n.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(l.processes,"Process name"))}}]:[]),(0,o.Z)(h?[{title:"Repositories",value:y(l.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(l.repositories),"medium")}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(g.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.configurationSelector)(t)}}))(O)},82838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(4942),a=r(45987),o=r(93433),s=r(92950),i=r.n(s),l=r(45697),c=r.n(l),u=r(32384),d=r(40409),p=r(18562),f=r(45026),g=r(58061),v=["onClick"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t,r,n,s=e.infrastructure,l=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,g=e.hasIPv4,h=e.hasIPv6,y=e.hasInterfaces,O=e.extra;return i().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:s.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:s.vendor}]:[]),(0,o.Z)(g?[{title:"IPv4 addresses",value:null===(t=s.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(s.ipv4,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"IPv6 addresses",value:null===(r=s.ipv6)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(s.ipv6,"IP address"))}}]:[]),(0,o.Z)(y?[{title:"Interfaces/NICs",value:null===(n=s.nics)||void 0===n?void 0:n.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(s.nics),"medium")}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(g.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,infrastructure:(0,f.infrastructureSelector)(r,t)}}))(y)},66e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(4942),a=r(45987),o=r(93433),s=r(92950),i=r.n(s),l=r(45697),c=r.n(l),u=r(32384),d=r(40409),p=r(18562),f=r(45026),g=r(62410),v=r(58061),h=r(5311),b=["onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t,r=e.systemInfo,n=e.detailLoaded,s=e.handleClick,l=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,y=e.hasKernelModules,P=e.extra;return i().createElement(d.Z,{title:"Operating system",isLoading:!n,items:[].concat((0,o.Z)(l?[{title:"Release",value:i().createElement(h.Z,{operatingSystem:r.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,v.J_)(r.bootTime)?i().createElement(g.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(y?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){s("Kernel modules",(0,p.generalMapper)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(P.map((function(e){var t=e.onClick;return O(O({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,s)}})}))))})};P.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},P.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const m=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.operatingSystem)(r,t)}}))(P)},95045:(e,t,r)=>{r.r(t),r.d(t,{TextInputModal:()=>d.Z,default:()=>h});var n=r(29439),a=r(45987),o=r(92950),s=r.n(o),i=r(32384),l=r(45697),c=r.n(l),u=r(45664),d=r(95364),p=r(47468),f=r(57785),g=["getRegistry"],v=function(e){var t=e.getRegistry,r=(0,a.Z)(e,g),l=(0,o.useState)(),c=(0,n.Z)(l,2),d=c[0],v=c[1];return(0,o.useEffect)((function(){var e,r;t&&(null===(e=t())||void 0===e||null===(r=e.register)||void 0===r||r.call(e,{systemProfileStore:f.ZP})),v((function(){return t?i.Provider:o.Fragment}))}),[]),d?s().createElement(d,t&&{store:t().getStore()},s().createElement(u.Z,r)):p.Z};v.propTypes={getRegistry:c().func};const h=v}}]);
//# sourceMappingURL=../sourcemaps/9806.953008cdc7a085a03f1186e658dabfee.js.map