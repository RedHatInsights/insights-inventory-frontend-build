/*! For license information please see 3141.1650914860370.180b81fa4563ec6cf1e4.js.LICENSE.txt */
(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3141],{68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>c});var r,a=n(70655),o=n(92950),i=n(38296),s=n(67526),l=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:u=r.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:v=!0}=e,f=(0,a.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const m=u,h=(0,l.S$)(c.displayName,p,v);return o.createElement(m,Object.assign({},h,f,{"data-pf-content":!0,className:(0,i.i)(d&&u===r.a&&s.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var r=n(70655),a=n(92950),o=n(67526),i=n(38296);const s=e=>{var{children:t=null,className:n="",isVisited:s=!1}=e,l=(0,r.__rest)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},l,{className:(0,i.i)(o.Z.content,s&&o.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>s});var r,a=n(70655),o=n(92950),i=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.ul}=e,l=(0,a.__rest)(e,["children","className","component"]);const c=s;return o.createElement(c,Object.assign({},l,{"data-pf-content":!0,className:(0,i.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{v:()=>r,T:()=>s});var r,a=n(70655),o=n(92950),i=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.li}=e,l=(0,a.__rest)(e,["children","className","component"]);const c=s;return o.createElement(c,Object.assign({},l,{"data-pf-content":!0,className:(0,i.i)(n)}),t)};s.displayName="TextListItem"},62472:(e,t,n)=>{"use strict";n.d(t,{dp:()=>s,S$:()=>l,Z1:()=>c,ql:()=>u});var r=n(92950);let a=0;const o="OUIA-Generated-",i={};function s(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const l=(e,t,n=!0,r)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,r)}),c=(e,t,n)=>void 0!==t?t:(0,r.useMemo)((()=>u(e,n)),[e,n]);function u(e,t){try{const n=`${window.location.href}-${e}-${t||""}`;return i[n]||(i[n]=0),`${o}${e}-${t?`${t}-`:""}${++i[n]}`}catch(n){return`${o}${e}-${t?`${t}-`:""}${++a}`}}},49739:(e,t,n)=>{"use strict";n.d(t,{K:()=>s});var r=n(70655),a=n(92950),o=n(15957),i=n(38296);const s=e=>{var{hasGutter:t=!1,className:n="",children:s=null,component:l="div"}=e,c=(0,r.__rest)(e,["hasGutter","className","children","component"]);const u=l;return a.createElement(u,Object.assign({},c,{className:(0,i.i)(o.Z.stack,t&&o.Z.modifiers.gutter,n)}),s)};s.displayName="Stack"},83826:(e,t,n)=>{"use strict";n.d(t,{v:()=>s});var r=n(70655),a=n(92950),o=n(15957),i=n(38296);const s=e=>{var{isFilled:t=!1,className:n="",children:s=null}=e,l=(0,r.__rest)(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},l,{className:(0,i.i)(o.Z.stackItem,t&&o.Z.modifiers.fill,n)}),s)};s.displayName="StackItem"},40400:(e,t,n)=>{"use strict";n.d(t,{Jh:()=>r,IU:()=>s});var r,a=n(70655),o=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let i=0;function s({name:e,xOffset:t=0,yOffset:n=0,width:s,height:l,svgPath:c}){var u;return u=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:i,color:u,title:d,noVerticalAlign:p}=e,v=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),f=Boolean(d),m=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(i),h=-.125*Number.parseFloat(m),g=p?null:{verticalAlign:`${h}em`},y=[t,n,s,l].join(" ");return o.createElement("svg",Object.assign({style:g,fill:u,height:m,width:m,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},v),f&&o.createElement("title",{id:this.id},d),o.createElement("path",{d:c}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},u}},68778:(e,t,n)=>{"use strict";n.d(t,{GR:()=>a,rE:()=>o,ZP:()=>i});var r=n(40400);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},87292:(e,t,n)=>{"use strict";n.d(t,{ky:()=>a,kv:()=>o,ZP:()=>i});var r=n(40400);const a={name:"OutlinedArrowAltCircleDownIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},10332:(e,t,n)=>{"use strict";n.d(t,{wb:()=>a,aT:()=>o,ZP:()=>i});var r=n(40400);const a={name:"OutlinedArrowAltCircleUpIcon",height:512,width:512,svgPath:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},91290:(e,t,n)=>{"use strict";n.d(t,{sN:()=>a,iC:()=>o,ZP:()=>i});var r=n(40400);const a={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},24307:(e,t,n)=>{"use strict";n.d(t,{sk:()=>a,q1:()=>o,ZP:()=>i});var r=n(40400);const a={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},67526:(e,t,n)=>{"use strict";n(10108),t.Z={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},15957:(e,t,n)=>{"use strict";n(53519),t.Z={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},35664:(e,t,n)=>{"use strict";n.d(t,{i:()=>c,Z:()=>u});var r=n(92950),a=n.n(r),o=n(80604),i=n(94184),s=n.n(i),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c={xs:"xs",sm:"sm",md:"md",lg:"lg"};const u=function(e){var t,n=e.size,r=void 0===n?c.md:n,i=e.isDark,u=void 0!==i&&i,d=e.className,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["size","isDark","className"]);return a().createElement(o.Skeleton,l({className:s()("ins-c-skeleton","ins-c-skeleton__".concat(r),(t={},t["ins-m-dark"]=u,t),d)},p))}},82838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(4942),a=n(45987),o=n(93433),i=n(92950),s=n.n(i),l=n(45697),c=n.n(l),u=n(32384),d=n(40409),p=n(18562),v=n(67782),f=n(58061),m=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t,n,r,i=e.infrastructure,l=e.handleClick,c=e.detailLoaded,u=e.hasType,v=e.hasVendor,f=e.hasIPv4,h=e.hasIPv6,y=e.hasInterfaces,b=e.extra;return s().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:i.type}]:[]),(0,o.Z)(v?[{title:"Vendor",value:i.vendor}]:[]),(0,o.Z)(f?[{title:"IPv4 addresses",value:null===(t=i.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){l("IPv4",(0,p.generalMapper)(i.ipv4,"IP address"))}}]:[]),(0,o.Z)(h?[{title:"IPv6 addresses",value:null===(n=i.ipv6)||void 0===n?void 0:n.length,plural:"addresses",singular:"address",onClick:function(){l("IPv6",(0,p.generalMapper)(i.ipv6,"IP address"))}}]:[]),(0,o.Z)(y?[{title:"Interfaces/NICs",value:null===(r=i.nics)||void 0===r?void 0:r.length,singular:"NIC",target:"interfaces",onClick:function(){l("Interfaces/NICs",(0,p.interfaceMapper)(i.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return g(g({},(0,a.Z)(e,m)),t&&{onClick:function(e){return t(e,l)}})}))))})};y.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(f.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const b=(0,u.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,infrastructure:(0,v.qY)(n,t)}}))(y)},40409:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),s=n(49739),l=n(83826),c=n(68774),u=n(68340),d=n(25834),p=n(78140),v=n(35664),f=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},m=function(e){var t=e.item,n=t.onClick,r=t.value,o=t.target,i=t.plural,s=t.singular;return a().createElement("a",{onClick:function(e){e.preventDefault(),n(e,{value:r,target:o})},href:"".concat(window.location.href,"/").concat(o)},f(r,s,i))};m.propTypes={item:i().shape({value:i().node,target:i().string,onClick:i().func,plural:i().string,singular:i().string})},m.defaultProps={item:{}};var h=function(e){var t=e.title,n=e.isLoading,o=e.items;return a().createElement(s.K,{hasGutter:!0},a().createElement(l.v,null,a().createElement(c.D,null,a().createElement(u.x,{component:u.q.h1},t))),a().createElement(l.v,{isFilled:!0},a().createElement(c.D,null,a().createElement(d.G,{component:d.F.dl},o.map((function(e,t){return a().createElement(r.Fragment,{key:t},a().createElement(p.T,{component:p.v.dt},e.title),a().createElement(p.T,{component:p.v.dd},n&&a().createElement(v.Z,{size:e.size||v.i.sm}),!n&&(e.onClick&&e.value?a().createElement(m,{item:e}):f(e.value,e.singular,e.plural))))}))))))};h.propTypes={title:i().node.isRequired,isLoading:i().bool,items:i().arrayOf(i().shape({title:i().node,value:i().node,onClick:i().func,size:i().oneOf(Object.values(v.i)),plural:i().string,singular:i().string}))},h.defaultProps={isLoading:!0,items:[]};const g=h},18562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{diskMapper:()=>h,enabledHelper:()=>m,generalMapper:()=>O,interfaceMapper:()=>y,productsMapper:()=>g,repositoriesMapper:()=>b,statusHelper:()=>f});var r=n(93433),a=n(29439),o=n(92950),i=n.n(o),s=n(68778),l=n(24307),c=n(91290),u=n(10332),d=n(87292),p=n(57971),v=n(35224),f={UP:i().createElement(v.u,{content:"Service is running"},i().createElement(u.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:i().createElement(v.u,{content:"Service has stopped"},i().createElement(d.ZP,{className:"ins-c-inventory__detail--down"}))},m={true:i().createElement(v.u,{content:"Source enabled"},i().createElement(s.ZP,{className:"ins-c-inventory__detail--enabled"})),false:i().createElement(v.u,{content:"Source disabled"},i().createElement(l.ZP,{className:"ins-c-inventory__detail--disabled"}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,r=e.mountpoint,o=e.options,s=e.mounttype,l=o&&o.options||o;return{isOpen:!1,child:i().createElement("div",null,l&&Object.entries(l.value||l).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r.value||r)})).join(",  ")),cells:[t&&t.value||t,n,r&&r.value||r,s&&s.value||s]}})),expandable:!0}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:f[e.status]||i().createElement(v.u,{content:"Unknown service status"},i().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:f[e.state]||i().createElement(v.u,{content:"Unknown service status"},i().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:m[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:m[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},67782:(e,t,n)=>{"use strict";n.d(t,{Ys:()=>s,d0:()=>l,Cx:()=>c,qY:()=>u,qr:()=>d,fZ:()=>p});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var s=function(){var e,t,n,r,a,s,l,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=u.number_of_cpus,p=u.number_of_sockets,v=u.cores_per_socket,f=u.ramSize,m=u.disk_devices,h=u.sap_sids,g=u.cpu_flags,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=y.facts;return{cpuNumber:d||(null==b||null===(e=b.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==b||null===(t=b.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:v||(null==b||null===(n=b.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==b||null===(r=b.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==b||null===(a=b.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==b||null===(s=b.rhsm)||void 0===s?void 0:s.CPU_SOCKETS,10),ramSize:f||(null==b||null===(l=b.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==b||null===(c=b.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:m&&m.map((function(e){var t=e.device,n=e.label,r=e.mount_point,a=e.options,s=e.type;return o(o(o(o({},t&&i(t,"device")),{},{label:n},r&&i(r,"mountpoint")),a&&i(a,"options")),s&&i(s,"mounttype"))})),sapIds:h,cpuFlags:g}},l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.operating_system,a=t.os_kernel_version,o=t.last_boot_time,i=t.kernel_modules,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.facts;return{release:r,kernelRelease:a,architecture:n||(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:i}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},u=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,a=n.infrastructure_vendor,o=n.network,i=void 0===o?{}:o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.facts;return{type:r||void 0!==(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=l&&null!==(t=l.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:i.ipv4,ipv6:i.ipv6,nics:i.interfaces}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,a=e.repositories;return{packages:t,services:n,processes:r,repositories:a}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}}},58061:(e,t,n)=>{"use strict";n.d(t,{Pv:()=>p,Ew:()=>v,J_:()=>f,ey:()=>m,FX:()=>h,Jr:()=>g,x7:()=>y});var r=n(71002),a=n(45987),o=n(4942),i=n(29439),s=n(45697),l=n.n(s);function c(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t);if("object"!==(0,r.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e,t){var n=t.split("/"),r=(0,i.Z)(n,2),a=r[0],o=r[1];o||(o=a,a=null);var s=o.split("="),l=(0,i.Z)(s,2),c=l[0],u=l[1],d=void 0===u?null:u,p=e.findIndex((function(e){return e.category===a})),v=e[p]||{category:a,key:a,type:"tags",values:[]};return v.values.push({name:"".concat(c).concat(d?"=".concat(d):""),key:"".concat(c).concat(d?"=".concat(d):""),tagKey:c,value:d,group:{label:a,value:a,type:"checkbox"}}),e[p]||e.push(v),e},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.slice((t.page-1)*t.perPage,t.page*t.perPage)},f=function(e){return!(isNaN(e)&&isNaN(Date.parse(e)))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter((function(e){return 0===Object.values(t).length||Object.values(t).every((function(t){var n=e[t.key]&&(e[t.key].sortValue||e[t.key]);return n&&(Array.isArray(t.value)?t.value.includes(n):-1!==n.toLocaleLowerCase().indexOf(t.value.toLocaleLowerCase()))}))}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return t.map((function(t,a){var o=t.index||a,i=e[o]&&(e[o].title||e[o]);return{value:String(o),label:i,type:t.type||"text",filterValues:d({id:t.id||"".concat(i,"-").concat(o),onChange:function(e,t){return r(o,t,i)},value:n[o]&&n[o].value},t.options&&{items:t.options})}}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t)return{};var r=e.key,i=n[r],s=(0,a.Z)(n,[r].map(c)),l=i&&Array.isArray(i.value)&&i.value.filter((function(t){return!e.chips.find((function(e){return e.name===t}))})),u=i&&Array.isArray(i.value)&&l&&l.length>0?(0,o.Z)({},e.key,d(d({},i),{},{value:l})):{};return d(d({},s),u)},y=l().shape({title:l().node,value:l().node,singular:l().node,plural:l().node,onClick:l().func})},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},36494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(87462),a=n(63366),o=n(26685),i=n(35067),s=n(63480),l=n(26343);const c=[function(e){return"function"==typeof e?(0,l.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,l.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,l.dX)((function(t){return(0,s.Z)(e,t)})):void 0}],u=[function(e){return"function"==typeof e?(0,l.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,l.dX)((function(){return{}}))}];function d(e,t,n){return(0,r.Z)({},n,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,a=n.pure,o=n.areMergedPropsEqual,i=!1;return function(t,n,s){var l=e(t,n,s);return i?a&&o(l,r)||(r=l):(i=!0,r=l),r}}}(e):void 0},function(e){return e?void 0:function(){return d}}];var v=n(38548),f=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function m(e,t,n){for(var r=t.length-1;r>=0;r--){var a=t[r](e);if(a)return a}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function h(e,t){return e===t}function g(e){var t=void 0===e?{}:e,n=t.connectHOC,s=void 0===n?o.Z:n,l=t.mapStateToPropsFactories,d=void 0===l?u:l,g=t.mapDispatchToPropsFactories,y=void 0===g?c:g,b=t.mergePropsFactories,O=void 0===b?p:b,P=t.selectorFactory,k=void 0===P?v.ZP:P;return function(e,t,n,o){void 0===o&&(o={});var l=o,c=l.pure,u=void 0===c||c,p=l.areStatesEqual,v=void 0===p?h:p,g=l.areOwnPropsEqual,b=void 0===g?i.Z:g,P=l.areStatePropsEqual,E=void 0===P?i.Z:P,_=l.areMergedPropsEqual,w=void 0===_?i.Z:_,S=(0,a.Z)(l,f),Z=m(e,d,"mapStateToProps"),N=m(t,y,"mapDispatchToProps"),j=m(n,O,"mergeProps");return s(k,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:Z,initMapDispatchToProps:N,initMergeProps:j,pure:u,areStatesEqual:v,areOwnPropsEqual:b,areStatePropsEqual:E,areMergedPropsEqual:w},S))}}const y=g()},45467:()=>{},10108:()=>{},49854:()=>{},53519:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30907),a=n(59199),o=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71002:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/3141.ded2f405baa4087b3b0b9a0ac0932946.js.map