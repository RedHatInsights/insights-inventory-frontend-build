"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[242],{5242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(4942),a=n(45987),i=n(89062),o=n(92950),l=n.n(o),s=n(45697),c=n.n(s),d=n(45237),h=n(13342),g=n(76422),u=n(67782),p=n(64107),f=n(58061),y=["onClick"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.egg,n=e.client;return l().createElement(h.u,{content:l().createElement(l().Fragment,null,l().createElement("p",null,"RPM version: ",n||"Not available"),l().createElement("p",null,"Dynamic update version: ",t||"Not available"))},l().createElement("span",null,n||t||"Not available"))};v.propTypes={egg:c().string,client:c().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,o=e.handleClick,s=e.hasClient,c=e.hasLastCheckIn,d=e.hasRegistered,h=e.hasInsightsId,u=e.hasReporter,f=e.hasMachineId,b=e.extra;return l().createElement(g.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,i.Z)(s?[{title:"Insights client",value:l().createElement(v,{egg:n.egg,client:n.client})}]:[]),(0,i.Z)(c?[{title:"Last check-in",value:r&&(p.Z?l().createElement(p.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,i.Z)(d?[{title:"Registered",value:r&&(p.Z?l().createElement(p.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,i.Z)(h?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,i.Z)(u?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,i.Z)(f?[{title:"RHEL machine id",value:r&&r.rhel_machine_id}]:[]),(0,i.Z)(b.map((function(e){var t=e.onClick;return m(m({},(0,a.Z)(e,y)),t&&{onClick:function(e){return t(e,o)}})}))))})};O.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string,rhel_machine_id:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,hasMachineId:c().bool,extra:c().arrayOf(f.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,hasMachineId:!0,extra:[]};const I=(0,d.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,u.fZ)(n)}}))(O)}}]);