"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[838],{82838:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var n=t(4942),a=t(45987),s=t(89062),i=t(92950),o=t.n(i),l=t(45697),c=t.n(l),d=t(45237),u=t(76422),p=t(92669),f=t(67782),v=t(58061),h=["onClick"];function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=function(e){var r,t,n,i=e.infrastructure,l=e.handleClick,c=e.detailLoaded,d=e.hasType,f=e.hasVendor,v=e.hasIPv4,y=e.hasIPv6,b=e.hasInterfaces,g=e.extra;return o().createElement(u.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,s.Z)(d?[{title:"Type",value:i.type}]:[]),(0,s.Z)(f?[{title:"Vendor",value:i.vendor}]:[]),(0,s.Z)(v?[{title:"IPv4 addresses",value:null===(r=i.ipv4)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(i.ipv4,"IP address"))}}]:[]),(0,s.Z)(y?[{title:"IPv6 addresses",value:null===(t=i.ipv6)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(i.ipv6,"IP address"))}}]:[]),(0,s.Z)(b?[{title:"Interfaces/NICs",value:null===(n=i.nics)||void 0===n?void 0:n.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(i.nics),"medium")}}]:[]),(0,s.Z)(g.map((function(e){var r=e.onClick;return P(P({},(0,a.Z)(e,h)),r&&{onClick:function(e){return r(e,l)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(v.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const g=(0,d.connect)((function(e){var r=e.entityDetails.entity,t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,infrastructure:(0,f.qY)(t,r)}}))(b)}}]);