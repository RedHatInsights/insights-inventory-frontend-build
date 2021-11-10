"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2757,4778,6014,1931],{6014:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(4942),a=n(45987),o=n(89062),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(50533),d=n(76422),f=n(67782),p=n(64107),y=n(58061),b=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,i=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,u=e.extra;return s().createElement(d.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,o.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(i?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,y.J_)(t.releaseDate)?s().createElement(p.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return v(v({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,l)}})}))))})};g.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(y.x7)},g.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const m=(0,u.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,f.Cx)(t)}}))(g)},95045:(e,t,n)=>{n.r(t),n.d(t,{TextInputModal:()=>d.Z,default:()=>h});var r=n(93324),a=n(45987),o=n(92950),i=n.n(o),s=n(50533),l=n(45697),c=n.n(l),u=n(24070),d=n(55426),f=n(47468),p=n(57785),y=["getRegistry"],b=function(e){var t=e.getRegistry,n=(0,a.Z)(e,y),l=(0,o.useState)(),c=(0,r.Z)(l,2),d=c[0],b=c[1];return(0,o.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemProfileStore:p.ZP})),b((function(){return t?s.Provider:o.Fragment}))}),[]),d?i().createElement(d,t&&{store:t().getStore()},i().createElement(u.Z,n)):f.Z};b.propTypes={getRegistry:c().func};const h=b},94778:(e,t,n)=>{n.d(t,{gb:()=>o.gb,Oj:()=>o.Oj,k0:()=>o.k0,Fo:()=>o.Fo,K5:()=>i.K5,u3:()=>i.u3,Xe:()=>i.Xe,nE:()=>i.nE,C8:()=>i.C8,CP:()=>i.CP,fg:()=>i.fg,il:()=>i.il,A_:()=>i.A_,me:()=>i.me,CL:()=>i.CL,HD:()=>i.HD,wb:()=>i.wb,Ar:()=>i.Ar,jB:()=>i.jB,Ks:()=>s,Tv:()=>l,L1:()=>c,$Y:()=>u,Jr:()=>d,eR:()=>f,Uw:()=>p});var r=n(59086),a=n(66702),o=n(87637),i=n(8622),s=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:a.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},l=function(e){return{type:r.uW,payload:{filtersList:e}}},c=function(){return{type:r.wt}},u=function(e,t){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:a.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},d=function(e,t){return{type:r.fT,payload:{page:e,perPage:t}}},f=function(e){return{type:r.aI.LOAD_SYSTEM_PROFILE,payload:(0,a.getEntitySystemProfile)(e,{})}},p=function(e,t){return{type:r.aI.SET_ANSIBLE_HOST,payload:a.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}}}]);