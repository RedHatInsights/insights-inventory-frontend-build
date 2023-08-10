"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[292],{68340:(e,t,n)=>{n.d(t,{q:()=>r,x:()=>l});var r,i=n(70655),o=n(92950),a=n(38296),c=n(62873),s=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const l=e=>{var{children:t=null,className:n="",component:u=r.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:h=!0}=e,f=(0,i.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=u,m=(0,s.S$)(l.displayName,p,h);return o.createElement(g,Object.assign({},m,f,{"data-pf-content":!0,className:(0,a.i)(d&&u===r.a&&c.Z.modifiers.visited,n)}),t)};l.displayName="Text"},68774:(e,t,n)=>{n.d(t,{D:()=>c});var r=n(70655),i=n(92950),o=n(62873),a=n(38296);const c=e=>{var{children:t=null,className:n="",isVisited:c=!1}=e,s=(0,r.__rest)(e,["children","className","isVisited"]);return i.createElement("div",Object.assign({},s,{className:(0,a.i)(o.Z.content,c&&o.Z.modifiers.visited,n)}),t)};c.displayName="TextContent"},62873:(e,t,n)=>{n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(85893),i=n(92950),o=n.n(i),a=n(48542),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)},s=36e5,l=24*s,u=30*l,d=365*l,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},h=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return p(Math.round(e/l),"day")}},{rightBound:l,description:function(e){return p(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return h.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},m=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(i){return function(e,t,n,i){return void 0===i&&(i=""),(0,r.jsx)(a.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[i,e]})},{children:t}))}(g("exact")(i),(0,r.jsx)("span",{children:g(e)(i)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const v=function(e){var t=e.date,n=e.type,i=void 0===n?"relative":n,a=e.extraTitle,c=e.tooltipProps,s=t instanceof Date?t:new Date(t),l=null==t||"Invalid Date"===s.toString()?"invalid":i;return(0,r.jsx)(o().Fragment,{children:m(l,c,a)(s)})}},5242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(4942),i=n(45987),o=n(93433),a=n(92950),c=n.n(a),s=n(45697),l=n.n(s),u=n(50533),d=n(75824),p=n(76422),h=n(45026),f=n(62410),g=n(58061),m=["onClick"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.egg,n=e.client;return c().createElement(d.u,{content:c().createElement(c().Fragment,null,c().createElement("p",null,"RPM version: ",n||"Not available"),c().createElement("p",null,"Dynamic update version: ",t||"Not available"))},c().createElement("span",null,n||t||"Not available"))};b.propTypes={egg:l().string,client:l().string};var O=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,a=e.handleClick,s=e.hasClient,l=e.hasLastCheckIn,u=e.hasRegistered,d=e.hasInsightsId,h=e.hasReporter,g=e.extra;return c().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,o.Z)(s?[{title:"Insights client",value:c().createElement(b,{egg:n.egg,client:n.client})}]:[]),(0,o.Z)(l?[{title:"Last check-in",value:r&&(f.Z?c().createElement(f.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,o.Z)(u?[{title:"Registered",value:r&&(f.Z?c().createElement(f.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,o.Z)(d?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,o.Z)(h?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,o.Z)(g.map((function(e){var t=e.onClick;return y(y({},(0,i.Z)(e,m)),t&&{onClick:function(e){return t(e,a)}})}))))})};O.propTypes={detailLoaded:l().bool,entity:l().shape({updated:l().string,created:l().string,insights_id:l().string,reporter:l().string}),handleClick:l().func,collectionInformation:l().shape({client:l().string,egg:l().string}),hasClient:l().bool,hasLastCheckIn:l().bool,hasRegistered:l().bool,hasInsightsId:l().bool,hasReporter:l().bool,extra:l().arrayOf(g.x7)},O.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,extra:[]};const C=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,h.collectionInformationSelector)(n)}}))(O)},45026:(e,t,n)=>{n.r(t),n.d(t,{biosSelector:()=>r.Cx,collectionInformationSelector:()=>r.fZ,configurationSelector:()=>r.qr,getCollectorStatus:()=>r.P$,getDefaultCollectors:()=>r.f_,infrastructureSelector:()=>r.qY,operatingSystem:()=>r.d0,propertiesSelector:()=>r.Ys,systemStatus:()=>r.qs});var r=n(67782)}}]);