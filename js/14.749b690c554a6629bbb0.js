"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[14],{6014:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(4942),a=r(45987),o=r(89062),s=r(92950),i=r.n(s),l=r(45697),c=r.n(l),d=r(45237),u=r(76422),f=r(67782),p=r(64107),b=r(58061),h=["onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.bios,r=e.detailLoaded,n=e.hasVendor,s=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,d=e.extra;return i().createElement(u.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(n?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(s?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,b.J_)(t.releaseDate)?i().createElement(p.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(d.map((function(e){var t=e.onClick;return O(O({},(0,a.Z)(e,h)),t&&{onClick:function(e){return t(e,l)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(b.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const g=(0,d.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,f.Cx)(t)}}))(v)}}]);