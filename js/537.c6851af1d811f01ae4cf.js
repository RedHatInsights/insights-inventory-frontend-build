"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[537],{61537:(e,r,s)=>{s.r(r),s.d(r,{enabledRepos:()=>k,default:()=>y});var n=s(4942),a=s(45987),t=s(89062),o=s(92950),i=s.n(o),c=s(45697),l=s.n(c),p=s(45237),g=s(76422),u=s(92669),d=s(67782),f=s(58061),b=["onClick"];function h(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}function v(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?h(Object(s),!0).forEach((function(r){(0,n.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function k(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var O=function(e){var r,s,n,o=e.detailLoaded,c=e.configuration,l=e.handleClick,p=e.hasPackages,d=e.hasServices,f=e.hasProcesses,h=e.hasRepositories,O=e.extra;return i().createElement(g.Z,{title:"Configuration",isLoading:!o,items:[].concat((0,t.Z)(p?[{title:"Installed packages",value:null===(r=c.packages)||void 0===r?void 0:r.length,singular:"package",target:"installed_packages",onClick:function(){l("Installed packages",(0,u.generalMapper)(c.packages,"Package name"))}}]:[]),(0,t.Z)(d?[{title:"Services",value:null===(s=c.services)||void 0===s?void 0:s.length,singular:"service",target:"services",onClick:function(){l("Services",(0,u.generalMapper)(c.services,"Service name"))}}]:[]),(0,t.Z)(f?[{title:"Running processes",value:null===(n=c.processes)||void 0===n?void 0:n.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){l("Running processes",(0,u.generalMapper)(c.processes,"Process name"))}}]:[]),(0,t.Z)(h?[{title:"Repositories",value:k(c.repositories),target:"repositories",onClick:function(){l("Repositories",(0,u.repositoriesMapper)(c.repositories),"medium")}}]:[]),(0,t.Z)(O.map((function(e){var r=e.onClick;return v(v({},(0,a.Z)(e,b)),r&&{onClick:function(e){return r(e,l)}})}))))})};O.propTypes={detailLoaded:l().bool,handleClick:l().func,configuration:l().shape({packages:l().arrayOf(l().string),services:l().arrayOf(l().string),processes:l().arrayOf(l().string),repositories:l().shape({enabled:l().arrayOf(l().shape({base_url:l().string,name:l().string,enabled:l().bool,gpgcheck:l().bool})),disabled:l().arrayOf(l().shape({base_url:l().string,name:l().string,enabled:l().bool,gpgcheck:l().bool}))})}),hasPackages:l().bool,hasServices:l().bool,hasProcesses:l().bool,hasRepositories:l().bool,extra:l().arrayOf(f.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const y=(0,p.connect)((function(e){var r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,configuration:(0,d.qr)(r)}}))(O)}}]);
//# sourceMappingURL=../sourcemaps/537.c458c21ca41977c9cd36.js.map