"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[399,8637],{5242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(4942),a=n(45987),i=n(93433),o=n(92950),l=n.n(o),s=n(45697),c=n.n(s),d=n(32384),g=n(75824),p=n(40409),u=n(45026),h=n(62410),f=n(58061),y=["onClick"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.egg,n=e.client;return l().createElement(g.u,{content:l().createElement(l().Fragment,null,l().createElement("p",null,"RPM version: ",n||"Not available"),l().createElement("p",null,"Dynamic update version: ",t||"Not available"))},l().createElement("span",null,n||t||"Not available"))};v.propTypes={egg:c().string,client:c().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,o=e.handleClick,s=e.hasClient,c=e.hasLastCheckIn,d=e.hasRegistered,g=e.hasInsightsId,u=e.hasReporter,f=e.extra;return l().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,i.Z)(s?[{title:"Insights client",value:l().createElement(v,{egg:n.egg,client:n.client})}]:[]),(0,i.Z)(c?[{title:"Last check-in",value:r&&(h.Z?l().createElement(h.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,i.Z)(d?[{title:"Registered",value:r&&(h.Z?l().createElement(h.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,i.Z)(g?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,i.Z)(u?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,i.Z)(f.map((function(e){var t=e.onClick;return m(m({},(0,a.Z)(e,y)),t&&{onClick:function(e){return t(e,o)}})}))))})};O.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,extra:c().arrayOf(f.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,extra:[]};const k=(0,d.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,u.collectionInformationSelector)(n)}}))(O)}}]);
//# sourceMappingURL=../sourcemaps/399.ed6aa6a2c18e14d80c1823abbce9b0f2.js.map