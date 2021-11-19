(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5099,5166,4778,6e3,2838,1537,5242,6014,1931,9299],{48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),a=n.n(r),o=n(75662),i=n(60076),s=n(28962),l=n(71355),c=n(61488);const u=function(){var e=(0,o.useHistory)();return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp(s.U),insights.chrome.on("APP_NAVIGATION",(function(t){"inventory"===t.navId?e.push("/".concat(location.search).concat(location.hash)):e.push("/".concat(t.navId).concat(location.search).concat(location.hash))}))}),[]),a().createElement("div",{className:"inventory"},a().createElement(l.qJ,null),a().createElement(c.Z,null),a().createElement(i.Z,null))}},28412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),s=n(75662),l=n(50533),c=n(30319),u=n(48187),d=n(35240),p=(n(94500),function(){var e=(0,c.S1)();return a().createElement(c.gE.Provider,{value:{getRegistry:function(){return e}}},a().createElement(l.Provider,{store:e.getStore()},a().createElement(s.BrowserRouter,{basename:(0,d.eb)(window.location.pathname)},a().createElement(u.Z,null))))});p.propTypes={useLogger:i().bool},p.defaultProps={useLogger:!1};const f=p},60076:(e,t,n)=>{"use strict";n.d(t,{_:()=>y,Z:()=>v});var r=n(4942),a=n(75662),o=n(92950),i=n.n(o),s=n(58061),l=n(30319),c=n(81730);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,o.lazy)((function(){return Promise.all([n.e(6410),n.e(5252),n.e(4736),n.e(5868),n.e(9390),n.e(9843),n.e(2034)]).then(n.bind(n,32034))})),f=(0,o.lazy)((function(){return Promise.all([n.e(6410),n.e(5252),n.e(7401),n.e(8392),n.e(9843),n.e(9680),n.e(1594),n.e(7379),n.e(3028)]).then(n.bind(n,93028))})),y={table:"/",detail:"/:inventoryId"},v=function(){var e=(0,o.useContext)(l.gE).getRegistry;(0,o.useEffect)((function(){e().register(d(d({},l.ll),(0,c.AF)(l.M)))}),[e]);var t,n,r=(0,a.useHistory)(),u=window.location.pathname.split("/"),v=new URLSearchParams(location.search);return u.shift(),"beta"===u[0]&&u.shift(),t=u[0],n=u[1],Object.values(y).some((function(e){return(0,a.matchPath)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})}))||r.push("".concat(y.table).concat(location.search).concat(location.hash)),i().createElement(o.Suspense,{fallback:""},i().createElement(a.Switch,null,i().createElement(a.Route,{exact:!0,path:y.table,render:function(){var e,t,n,r,a;return i().createElement(p,{status:v.getAll("status"),source:v.getAll("source"),filterbyName:v.getAll("hostname_or_id"),tagsFilter:null===(e=v.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.split)||void 0===n||null===(r=(a=n.call(t,",")).reduce)||void 0===r?void 0:r.call(a,s.Pv,[]),page:v.getAll("page"),perPage:v.getAll("per_page")})},rootClass:"inventory"}),i().createElement(a.Route,{path:y.detail,component:f,rootClass:"inventory"})))}},6014:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(76422),p=n(67782),f=n(64107),y=n(58061),v=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,i=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,u=e.extra;return s().createElement(d.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,o.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(i?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,y.J_)(t.releaseDate)?s().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return m(m({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};h.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(y.x7)},h.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const b=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.Cx)(t)}}))(h)},5242:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(13342),p=n(76422),f=n(67782),y=n(64107),v=n(58061),g=["onClick"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.egg,n=e.client;return s().createElement(d.u,{content:s().createElement(s().Fragment,null,s().createElement("p",null,"RPM version: ",n||"Not available"),s().createElement("p",null,"Dynamic update version: ",t||"Not available"))},s().createElement("span",null,n||t||"Not available"))};b.propTypes={egg:c().string,client:c().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,i=e.handleClick,l=e.hasClient,c=e.hasLastCheckIn,u=e.hasRegistered,d=e.hasInsightsId,f=e.hasReporter,v=e.hasMachineId,m=e.extra;return s().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,o.Z)(l?[{title:"Insights client",value:s().createElement(b,{egg:n.egg,client:n.client})}]:[]),(0,o.Z)(c?[{title:"Last check-in",value:r&&(y.Z?s().createElement(y.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,o.Z)(u?[{title:"Registered",value:r&&(y.Z?s().createElement(y.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,o.Z)(d?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,o.Z)(f?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,o.Z)(v?[{title:"RHEL machine id",value:r&&r.rhel_machine_id}]:[]),(0,o.Z)(m.map((function(e){var t=e.onClick;return h(h({},(0,a.Z)(e,g)),t&&{onClick:function(e){return t(e,i)}})}))))})};O.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string,rhel_machine_id:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,hasMachineId:c().bool,extra:c().arrayOf(v.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,hasMachineId:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,f.fZ)(n)}}))(O)},61537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{enabledRepos:()=>h,default:()=>O});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(76422),p=n(92669),f=n(67782),y=n(58061),v=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var b=function(e){var t,n,r,i=e.detailLoaded,l=e.configuration,c=e.handleClick,u=e.hasPackages,f=e.hasServices,y=e.hasProcesses,g=e.hasRepositories,b=e.extra;return s().createElement(d.Z,{title:"Configuration",isLoading:!i,items:[].concat((0,o.Z)(u?[{title:"Installed packages",value:null===(t=l.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(l.packages,"Package name"))}}]:[]),(0,o.Z)(f?[{title:"Services",value:null===(n=l.services)||void 0===n?void 0:n.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(l.services,"Service name"))}}]:[]),(0,o.Z)(y?[{title:"Running processes",value:null===(r=l.processes)||void 0===r?void 0:r.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(l.processes,"Process name"))}}]:[]),(0,o.Z)(g?[{title:"Repositories",value:h(l.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(l.repositories),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return m(m({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(y.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const O=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,f.qr)(t)}}))(b)},82838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(76422),p=n(92669),f=n(67782),y=n(58061),v=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t,n,r,i=e.infrastructure,l=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,y=e.hasIPv4,g=e.hasIPv6,h=e.hasInterfaces,b=e.extra;return s().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:i.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:i.vendor}]:[]),(0,o.Z)(y?[{title:"IPv4 addresses",value:null===(t=i.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(i.ipv4,"IP address"))}}]:[]),(0,o.Z)(g?[{title:"IPv6 addresses",value:null===(n=i.ipv6)||void 0===n?void 0:n.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(i.ipv6,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"Interfaces/NICs",value:null===(r=i.nics)||void 0===r?void 0:r.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(i.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return m(m({},(0,a.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};h.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(y.x7)},h.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const b=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,infrastructure:(0,f.qY)(n,t)}}))(h)},66e3:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(76422),p=n(92669),f=n(67782),y=n(64107),v=n(58061),g=n(5311),m=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t,n=e.systemInfo,r=e.detailLoaded,i=e.handleClick,l=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,h=e.hasKernelModules,O=e.extra;return s().createElement(d.Z,{title:"Operating system",isLoading:!r,items:[].concat((0,o.Z)(l?[{title:"Release",value:s().createElement(g.Z,{operatingSystem:n.release})}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:n.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:n.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,v.J_)(n.bootTime)?s().createElement(y.Z,{date:n.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(h?[{title:"Kernel modules",value:null===(t=n.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){i("Kernel modules",(0,p.generalMapper)(n.kernelModules,"Module"))}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return b(b({},(0,a.Z)(e,m)),t&&{onClick:function(e){return t(e,i)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const P=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,systemInfo:(0,f.d0)(n,t)}}))(O)},19299:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(45987),a=n(89062),o=n(15671),i=n(43144),s=n(97326),l=n(60136),c=n(82963),u=n(61120),d=n(4942),p=n(92950),f=n.n(p),y=n(45697),v=n.n(y),g=n(50533),m=n(76422),h=n(91290),b=n(67782),O=n(94778),P=n(55426),I=n(86038),E=n(47173),Z=n(95083),D=n(92669),L=n(58061),j=["onClick"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.title,n=e.content;return f().createElement(f().Fragment,null,f().createElement("span",null,t),f().createElement(I.J,{headerContent:f().createElement("div",null,t),bodyContent:f().createElement("div",null,n)},f().createElement(E.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},f().createElement(h.ZP,null))))},C=function(e){(0,l.Z)(v,e);var t,n,y=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function v(){var e;(0,o.Z)(this,v);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=y.call.apply(y,[this].concat(n)),(0,d.Z)((0,s.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,d.Z)((0,s.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,d.Z)((0,s.Z)(e),"onSubmit",(function(t){return function(n){var r=e.props.entity;t(r.id,n),e.onCancel()}})),(0,d.Z)((0,s.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,d.Z)((0,s.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,i.Z)(v,[{key:"render",value:function(){var e,t,n=this.props,o=n.detailLoaded,i=n.entity,s=n.properties,l=n.setDisplayName,c=n.setAnsibleHost,u=n.writePermissions,d=n.handleClick,y=n.hasHostName,v=n.hasDisplayName,g=n.hasAnsibleHostname,h=n.hasSAP,b=n.hasCPUs,O=n.hasSockets,I=n.hasCores,E=n.hasCPUFlags,L=n.hasRAM,w=n.extra,C=this.state,A=C.isDisplayNameModalOpen,k=C.isAnsibleHostModalOpen;return f().createElement(p.Fragment,null,f().createElement(m.Z,{title:"System properties",isLoading:!o,items:[].concat((0,a.Z)(y?[{title:f().createElement(_,{title:"Host name",content:"Name imported from the system."}),value:i.fqdn,size:"md"}]:[]),(0,a.Z)(v?[{title:f().createElement(_,{title:"Display name",content:"System name displayed in an inventory list."}),value:f().createElement(p.Fragment,null,i.display_name,f().createElement(Z.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,a.Z)(g?[{title:f().createElement(_,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:f().createElement(p.Fragment,null,this.getAnsibleHost(),f().createElement(Z.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,a.Z)(h?[{title:"SAP",value:null===(e=s.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){d("SAP IDs (SID)",(0,D.generalMapper)(s.sapIds,"SID"))}}]:[]),(0,a.Z)(b?[{title:"Number of CPUs",value:s.cpuNumber}]:[]),(0,a.Z)(O?[{title:"Sockets",value:s.sockets}]:[]),(0,a.Z)(I?[{title:"Cores per socket",value:s.coresPerSocket}]:[]),(0,a.Z)(E?[{title:"CPU flags",value:null==s||null===(t=s.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return d("CPU flags",(0,D.generalMapper)(s.cpuFlags,"flag name"))}}]:[]),(0,a.Z)(L?[{title:"RAM",value:s.ramSize}]:[]),(0,a.Z)(w.map((function(e){var t=e.onClick;return S(S({},(0,r.Z)(e,j)),t&&{onClick:function(e){return t(e,d)}})}))))}),f().createElement(P.Z,{isOpen:A,title:"Edit display name",value:i&&i.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(l)}),f().createElement(P.Z,{isOpen:k,title:"Edit Ansible host",value:i&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c)}))}}]),v}(p.Component);C.propTypes={detailLoaded:v().bool,entity:v().shape({display_name:v().string,ansible_host:v().string,fqdn:v().string,id:v().string}),properties:v().shape({cpuNumber:v().number,sockets:v().number,coresPerSocket:v().number,ramSize:v().string,storage:v().arrayOf(v().shape({device:v().string,mount_point:v().string,options:v().shape({}),type:v().string})),sapIds:v().arrayOf(v().string),cpuFlags:v().array}),setDisplayName:v().func,setAnsibleHost:v().func,writePermissions:v().bool,handleClick:v().func,hasHostName:v().bool,hasDisplayName:v().bool,hasAnsibleHostname:v().bool,hasSAP:v().bool,hasCPUs:v().bool,hasSockets:v().bool,hasCores:v().bool,hasCPUFlags:v().bool,hasRAM:v().bool,extra:v().arrayOf(L.x7)},C.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},_.propTypes={title:v().string.isRequired,content:v().string.isRequired};const A=(0,g.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,properties:(0,b.Ys)(n,t)}}),(function(e){var t=function(t,n){return n.payload.then((function(n){return e((0,O.eR)(t,{hasItems:!0})),e((0,O.A_)(t,{hasItems:!0},{showTags:!0})),n})),n};return{setDisplayName:function(n,r){e(t(n,(0,O.$Y)(n,r)))},setAnsibleHost:function(n,r){e(t(n,(0,O.Uw)(n,r)))}}}))(C)},61488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n(50533),o=n(80863),i=n(59086);const s=function(){var e=(0,o.Z)(),t=e.isLoading,n=e.hasAccess,s=(0,a.useDispatch)();return(0,r.useEffect)((function(){s({type:"".concat(i.aI.LOAD_WRITE_PERMISSIONS,"_PENDING")})}),[]),(0,r.useEffect)((function(){t||s({type:"".concat(i.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),payload:{writePermissions:n}})}),[t]),null}},24788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),o=n(50533),i=n(22663);const s=function(){return a().createElement(i.Z,{appName:"advisor",module:"./SystemDetail",store:(0,o.useStore)(),customItnl:!0,intlProps:{locale:navigator.language}})}},80296:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(92950),a=n.n(r),o=n(50533),i=n(75662),s=n(22663);const l=function(){var e=(0,i.useRouteMatch)("/:inventoryId").params;return a().createElement(s.Z,{appName:"compliance",module:"./SystemDetail",store:(0,o.useStore)(),customItnl:!0,intlProps:{locale:navigator.language},inventoryId:e.inventoryId,remediationsEnabled:!0})}},95045:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TextInputModal:()=>d.Z,default:()=>g});var r=n(93324),a=n(45987),o=n(92950),i=n.n(o),s=n(50533),l=n(45697),c=n.n(l),u=n(24070),d=n(55426),p=n(47468),f=n(57785),y=["getRegistry"],v=function(e){var t=e.getRegistry,n=(0,a.Z)(e,y),l=(0,o.useState)(),c=(0,r.Z)(l,2),d=c[0],v=c[1];return(0,o.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemProfileStore:f.ZP})),v((function(){return t?s.Provider:o.Fragment}))}),[]),d?i().createElement(d,t&&{store:t().getStore()},i().createElement(u.Z,n)):p.Z};v.propTypes={getRegistry:c().func};const g=v},18040:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),o=n(30319),i=n(22663);const s=function(){var e=(0,r.useContext)(o.gE).getRegistry;return a().createElement(i.Z,{appName:"patch",module:"./SystemDetail",getRegistry:e})}},36076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(92950),a=n.n(r),o=n(75662),i=n(30319),s=n(22663);const l=function(){var e=(0,o.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(i.gE).getRegistry;return a().createElement(s.Z,{appName:"ros",module:"./SystemDetail",getRegistry:t,inventoryId:e.inventoryId})}},44056:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(92950),a=n.n(r),o=n(75662),i=n(30319),s=n(22663);const l=function(){var e=(0,o.useRouteMatch)("/:inventoryId").params,t=(0,r.useContext)(i.gE).getRegistry;return a().createElement(s.Z,{appName:"vulnerability",module:"./SystemDetail",getRegistry:t,customItnlProvider:!0,entity:{id:e.inventoryId}})}},63949:(e,t,n)=>{"use strict";n.d(t,{vu:()=>r.Z,Tq:()=>a.Z,hJ:()=>o.Z,fZ:()=>i.default,ub:()=>s.Z,gw:()=>l.Z});var r=n(80296),a=n(44056),o=n(24788),i=n(95045),s=n(18040),l=n(36076)},28962:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});var r="inventory"},80863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(4942),a=n(45987),o=n(95249),i=["hasAccess"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=function(){var e=(0,o.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]),t=e.hasAccess;return l(l({},(0,a.Z)(e,i)),{},{hasAccess:t})}},94778:(e,t,n)=>{"use strict";n.d(t,{gb:()=>o.gb,Oj:()=>o.Oj,k0:()=>o.k0,Fo:()=>o.Fo,K5:()=>i.K5,u3:()=>i.u3,Xe:()=>i.Xe,nE:()=>i.nE,C8:()=>i.C8,CP:()=>i.CP,fg:()=>i.fg,il:()=>i.il,A_:()=>i.A_,me:()=>i.me,CL:()=>i.CL,HD:()=>i.HD,wb:()=>i.wb,Ar:()=>i.Ar,jB:()=>i.jB,Ks:()=>s,Tv:()=>l,L1:()=>c,$Y:()=>u,Jr:()=>d,eR:()=>p,Uw:()=>f});var r=n(59086),a=n(66702),o=n(87637),i=n(8622),s=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:a.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},l=function(e){return{type:r.uW,payload:{filtersList:e}}},c=function(){return{type:r.wt}},u=function(e,t){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:a.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},d=function(e,t){return{type:r.fT,payload:{page:e,perPage:t}}},p=function(e){return{type:r.aI.LOAD_SYSTEM_PROFILE,payload:(0,a.getEntitySystemProfile)(e,{})}},f=function(e,t){return{type:r.aI.SET_ANSIBLE_HOST,payload:a.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},5522:(e,t,n)=>{"use strict";n.d(t,{P:()=>u,Z:()=>d});var r,a=n(4942),o=n(59086),i=n(21216),s=n(44457);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={loaded:!1};const d=c((r={},(0,a.Z)(r,o.aI.LOAD_ENTITIES_PENDING,(function(){return u})),(0,a.Z)(r,o.aI.LOAD_ENTITY_PENDING,(function(e){return c(c({},e),{},{loaded:!1})})),(0,a.Z)(r,o.aI.LOAD_ENTITY_FULFILLED,(function(e,t){var n=t.payload;return c(c({},e),{},{loaded:!0,entity:n.results[0]})})),(0,a.Z)(r,o.TP,(function(e,t){var n=t.payload;return c(c({},e),{},{activeApp:n})})),(0,a.Z)(r,o.aI.LOAD_TAGS,i.nN),(0,a.Z)(r,o.aI.LOAD_TAGS_PENDING,(function(e){return c(c({},e),{},{tagModalLoaded:!1})})),(0,a.Z)(r,o.aI.LOAD_TAGS_FULFILLED,i.nN),(0,a.Z)(r,o.Qd,i.vI),(0,a.Z)(r,o.Ji,(function(e,t){var n=t.payload;return c(c({},e),{},{isToggleOpened:null==n?void 0:n.isOpened})})),r),s.ZP)},30319:(e,t,n)=>{"use strict";n.d(t,{ll:()=>u.ZP,M:()=>u.M,CB:()=>u.CB,gE:()=>d,S1:()=>p});var r,a=n(92950),o=n(34879),i=n(18546),s=n(39851),l=n(57283),c=n.n(l),u=n(81730),d=(0,a.createContext)({getRegistry:function(){}});function p(){r=new o.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new i.xI({},[r.getMiddleware(),c(),(0,s.default)({errorDescriptionKey:["detail","stack"]})].concat(t))}},57544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r,a=n(4942),o=n(18546),i=n(59086);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=(0,o.Gg)((r={},(0,a.Z)(r,"".concat(i.aI.LOAD_WRITE_PERMISSIONS,"_PENDING"),(function(e){return l(l({},e),{},{loadingFailed:!1,loading:!0,writePermissions:void 0})})),(0,a.Z)(r,"".concat(i.aI.LOAD_WRITE_PERMISSIONS,"_FULFILLED"),(function(e,t){var n=t.payload;return l(l({},e),{},{loading:!1,loadingFailed:!1,writePermissions:n.writePermissions})})),(0,a.Z)(r,"".concat(i.aI.LOAD_WRITE_PERMISSIONS,"_FAILED"),(function(e){return l(l({},e),{},{loading:!1,loadingFailed:!0})})),r),{loading:!0,writePermissions:!1,loadingFailed:!1})},81730:(e,t,n)=>{"use strict";n.d(t,{zw:()=>d.ZP,gA:()=>p.Z,M:()=>b,CB:()=>O,AF:()=>P,OL:()=>I,ZP:()=>E});var r,a=n(4942),o=n(59086),i=n(57785),s=n(63949),l=n(18546),c=n(35240),u=n(35435),d=n(21216),p=n(5522),f=n(57544);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={loaded:!1,selected:new Map};function m(e){var t,n;return v(v({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:s.fZ},{title:"Advisor",name:"advisor",component:s.hJ},{title:"Vulnerability",name:"vulnerabilities",component:s.Tq},{title:"Compliance",name:"compliance",component:s.vu},{title:"Patch",name:"patch",component:s.ub},(!insights.chrome.isProd||insights.chrome.isProd&&(null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n?void 0:n.isBeta()))&&{title:"Resource Optimization",name:"ros",component:s.gw}].filter(Boolean)})}var h={notifications:u.ee,systemProfileStore:i.ZP,permissionsReducer:f.Z},b=(0,l.Gg)((r={},(0,a.Z)(r,o.aI.GET_ENTITIES_FULFILLED,(function(e,t){var n=t.payload;return v(v({},e),{},{rows:(0,c.r0)([e.rows,n.results]),entities:(0,c.r0)([e.entities,n.results])})})),(0,a.Z)(r,o.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var n=t.payload,r=t.meta;return(null==r?void 0:r.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:v(v({},e),{},{rows:(0,c.r0)([e.rows,n.results.map((function(t){return v(v({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,a.Z)(r,"".concat(o.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var n=t.meta,r=e.selected||new Map;return n.systems.forEach((function(e){return r.delete(e)})),v(v({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,o.pr,(function(e,t){var n=t.payload,r=e.selected||new Map;if(n.selected)if(0===n.id)e.rows.forEach((function(e){return r.set(e.id,e)}));else{var a=e.rows&&e.rows.find((function(e){return e.id===n.id}));r.set(n.id,v(v({},a||{}),{},{id:n.id}))}else 0===n.id?e.rows.forEach((function(e){return r.delete(e.id)})):-1===n.id?r.clear():r.delete(n.id);return v(v({},e),{},{selected:new Map(r)})})),(0,a.Z)(r,"FILTER_SELECT",(function(e){return v(v({},e),{},{selected:{}})})),(0,a.Z)(r,o.uW,(function(e,t){var n=t.payload;return v(v({},e),{},{activeFilters:n.filtersList})})),(0,a.Z)(r,o.fT,(function(e,t){var n=t.payload,r=parseInt(n.perPage,10),a=parseInt(n.page,10);return v(v({},e),{},{perPage:isNaN(r)?50:r,page:isNaN(a)?1:a})})),(0,a.Z)(r,o.aI.UPDATE_DISPLAY_NAME_FULFILLED,(function(e,t){var n=t.meta;return v(v({},e),{},{rows:e.rows.map((function(e){return e.id===(null==n?void 0:n.id)?v(v({},e),{},{display_name:null==n?void 0:n.value}):e}))})})),r),g),O=function(){return(0,l.Gg)((0,a.Z)({},o.AL.LOAD_ENTITY_FULFILLED,m),g)};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(n,r){return v({},e(v({},(0,l.Gg)(v({},d.ZP),v(v({},d.W2),t))(n,r)),r))}}}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(n,r){return v({},e(v({},(0,l.Gg)(v({},p.Z),v(v({},p.P),t))(n,r)),r))}}}const E=h},44457:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>c});var r,a=n(4942),o=n(59086);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),t&&(0,a.Z)({},t,{isLoaded:!1}))})}const c=(r={},(0,a.Z)(r,o.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return l(e,"advisor")})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return l(e,"cve")})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return l(e,"patch")})),(0,a.Z)(r,o.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return l(e,"compliance")})),(0,a.Z)(r,o.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,(function(e,t){var n=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_CVES_FULFILLED,(function(e,t){var n,r,a,o,i,l,c,u,d=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{cve:{isLoaded:!0,critical:{count:(null==d||null===(n=d.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==d||null===(a=d.moderate)||void 0===a||null===(o=a.meta)||void 0===o?void 0:o.total_items)||0},important:{count:(null==d||null===(i=d.important)||void 0===i||null===(l=i.meta)||void 0===l?void 0:l.total_items)||0},low:{count:(null==d||null===(c=d.low)||void 0===c||null===(u=c.meta)||void 0===u?void 0:u.total_items)||0}}})})})),(0,a.Z)(r,o.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,(function(e,t){var n,r,a,o,i,l,c=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{patch:{isLoaded:!0,bug:{count:(null==c||null===(n=c.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==c||null===(a=c.data)||void 0===a||null===(o=a.attributes)||void 0===o?void 0:o.rhea_count)||0},security:{count:(null==c||null===(i=c.data)||void 0===i||null===(l=i.attributes)||void 0===l?void 0:l.rhsa_count)||0}}})})})),(0,a.Z)(r,o.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,(function(e,t){var n,r,a=t.payload;return s(s({},e),{},{systemIssues:s(s({},null==e?void 0:e.systemIssues),{},{compliance:{isLoaded:!0,profiles:null==a||null===(n=a.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})})),r)},81754:()=>{},80598:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5099.ac691c1b2260bdc11a9a2eb24d7c914a.js.map