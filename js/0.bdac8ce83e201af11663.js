"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[0],{66e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(4942),l=r(45987),o=r(89062),a=r(92950),s=r.n(a),i=r(45697),c=r.n(i),u=r(44745),d=r(76422),h=r(92669),f=r(67782),p=r(64107),b=r(58061),y=["onClick"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t,r=e.systemInfo,n=e.detailLoaded,a=e.handleClick,i=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,m=e.hasKernelModules,O=e.extra;return s().createElement(d.Z,{title:"Operating system",isLoading:!n,items:[].concat((0,o.Z)(i?[{title:"Release",value:r.release}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,b.J_)(r.bootTime)?s().createElement(p.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(m?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){a("Kernel modules",(0,h.generalMapper)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(O.map((function(e){var t=e.onClick;return g(g({},(0,l.Z)(e,y)),t&&{onClick:function(e){return t(e,a)}})}))))})};O.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(b.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const v=(0,u.connect)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.d0)(r,t)}}))(O)}}]);