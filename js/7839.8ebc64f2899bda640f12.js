(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7839,2004,9952],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>l,Z:()=>c});var r=n(70655),i=n(92950),a=n(54918),o=n(38296),s=n(62472);const l=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:b=!1,isExpanded:_=!1,isRounded:y=!1,isLarge:O=!1,isFullHeight:S=!1,isPlain:C=!1,ouiaId:E,ouiaSafe:k=!0,hasSelectableInput:P=!1,selectableInputAriaLabel:Z,onSelectableInputChange:j=(()=>{})}=e,N=(0,r.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const D=u,x=(0,s.S$)(c.displayName,E,k),[I,R]=i.useState(""),[T,w]=i.useState();f&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const L=i.useRef(!1);return i.useEffect((()=>{Z?w({"aria-label":Z}):I?w({"aria-labelledby":I}):P&&!L.current&&(w({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[P,Z,I]),i.createElement(l.Provider,{value:{cardId:n,registerTitleId:e=>{R(e),L.current=!!e},isExpanded:_}},P&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:h,onChange:e=>j(n,e),disabled:g,tabIndex:-1})),i.createElement(D,Object.assign({id:n,className:(0,o.i)(a.Z.card,f&&a.Z.modifiers.compact,_&&a.Z.modifiers.expanded,b&&a.Z.modifiers.flat,y&&a.Z.modifiers.rounded,O&&a.Z.modifiers.displayLg,S&&a.Z.modifiers.fullHeight,C&&a.Z.modifiers.plain,g?(0,o.i)(a.Z.modifiers.nonSelectableRaised):v?(0,o.i)(a.Z.modifiers.selectableRaised,h&&a.Z.modifiers.selectedRaised):m||p?(0,o.i)(a.Z.modifiers.selectable,h&&a.Z.modifiers.selected):"",d),tabIndex:m||v?"0":void 0},N,x),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var r=n(70655),i=n(92950),a=n(54918),o=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:l=!0}=e,c=(0,r.__rest)(e,["children","className","component","isFilled"]);const d=s;return i.createElement(d,Object.assign({className:(0,o.i)(a.Z.cardBody,!l&&a.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>c});var r,i=n(70655),a=n(92950),o=n(38296),s=n(62873),l=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:d=r.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:f=!0}=e,m=(0,i.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=d,h=(0,l.S$)(c.displayName,p,f);return a.createElement(v,Object.assign({},h,m,{"data-pf-content":!0,className:(0,o.i)(u&&d===r.a&&s.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var r=n(70655),i=n(92950),a=n(62873),o=n(38296);const s=e=>{var{children:t=null,className:n="",isVisited:s=!1}=e,l=(0,r.__rest)(e,["children","className","isVisited"]);return i.createElement("div",Object.assign({},l,{className:(0,o.i)(a.Z.content,s&&a.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>s});var r,i=n(70655),a=n(92950),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.ul}=e,l=(0,i.__rest)(e,["children","className","component"]);const c=s;return a.createElement(c,Object.assign({},l,{className:(0,o.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>r});var r,i=n(70655),a=n(92950),o=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.li}=e,l=(0,i.__rest)(e,["children","className","component"]);const c=s;return a.createElement(c,Object.assign({},l,{className:(0,o.i)(n)}),t)};s.displayName="TextListItem"},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(85893),i=n(92950),a=n.n(i),o=n(48542),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},l=36e5,c=24*l,d=30*c,u=365*c,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return p(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return p(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return p(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(i){return function(e,t,n,i){return void 0===i&&(i=""),(0,r.jsx)(o.Tooltip,s({},n,{content:(0,r.jsxs)("div",{children:[i,e]})},{children:t}))}(v("exact")(i),(0,r.jsx)("span",{children:v(e)(i)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const g=function(e){var t=e.date,n=e.type,i=void 0===n?"relative":n,o=e.extraTitle,s=e.tooltipProps,l=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===l.toString()?"invalid":i;return(0,r.jsx)(a().Fragment,{children:h(c,s,o)(l)})}},6014:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BiosCard:()=>_,default:()=>y});var r=n(4942),i=n(45987),a=n(93433),o=n(92950),s=n.n(o),l=n(45697),c=n.n(l),d=n(50533),u=n(76422),p=n(45026),f=n(62410),m=n(58061),v=["onClick"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.bios,n=e.detailLoaded,r=e.hasVendor,o=e.hasVersion,l=e.handleClick,c=e.hasReleaseDate,d=e.extra;return s().createElement(u.Z,{title:"BIOS",isLoading:!n,items:[].concat((0,a.Z)(r?[{title:"Vendor",value:t.vendor}]:[]),(0,a.Z)(o?[{title:"Version",value:t.version}]:[]),(0,a.Z)(c?[{title:"Release date",value:(0,m.J_)(t.releaseDate)?s().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,a.Z)(d.map((function(e){var t=e.onClick;return g(g({},(0,i.Z)(e,v)),t&&{onClick:function(e){return t(e,l)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(m.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};var _=(0,d.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.biosSelector)(t)}}))(b);_.propTypes=b.propTypes,_.defaultProps=b.defaultProps;const y=_},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>b,default:()=>y});var r=n(92950),i=n.n(r),a=n(45697),o=n.n(a),s=n(49739),l=n(83826),c=n(68774),d=n(68340),u=n(25834),p=n(78140),f=n(32203),m=n(62394),v=n(35664),h=n(75662),g=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},b=function(e){var t=e.value,n=e.target,a=e.plural,o=e.singular,s=e.onClick,l=(0,h.useHistory)(),c=(0,h.useLocation)().pathname,d=c.split("/").pop();return(0,r.useEffect)((function(){n===d&&s({value:t,target:n})}),[d,n]),i().createElement("a",{onClick:function(e){e.preventDefault(),l.push("".concat(c,"/").concat(n))},href:"".concat(window.location.origin).concat(window.location.pathname,"/").concat(n)},g(t,o,a))};b.propTypes={value:o().node,target:o().string,onClick:o().func,plural:o().string,singular:o().string};var _=function(e){var t=e.title,n=e.isLoading,a=e.items,o=e.children;return i().createElement(f.Z,null,i().createElement(m.e,null,i().createElement(s.K,{hasGutter:!0},i().createElement(l.v,null,i().createElement(c.D,null,i().createElement(d.x,{component:d.q.h1},t))),i().createElement(l.v,{isFilled:!0},a.length?i().createElement(c.D,null,i().createElement(u.G,{component:u.F.dl},a.map((function(e,t){var a=e.onClick,o=e.value,s=e.target,l=e.plural,c=e.singular,d=e.size,u=e.title;return i().createElement(r.Fragment,{key:t},i().createElement(p.T,{component:p.v.dt},u),i().createElement(p.T,{component:p.v.dd},n&&i().createElement(v.Z,{size:d||v.i.sm}),!n&&(a&&o?i().createElement(b,{onClick:a,value:o,target:s,plural:l,singular:c}):g(o,c,l))))})))):null,o))))};_.propTypes={title:o().node.isRequired,isLoading:o().bool,items:o().arrayOf(o().shape({title:o().node,value:o().node,onClick:o().func,size:o().oneOf(Object.values(v.i)),plural:o().string,singular:o().string})),children:o().node},_.defaultProps={isLoading:!0,items:[]};const y=_},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.default});var r=n(40515)},45026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{biosSelector:()=>r.Cx,collectionInformationSelector:()=>r.fZ,configurationSelector:()=>r.qr,getCollectorStatus:()=>r.P$,getDefaultCollectors:()=>r.f_,infrastructureSelector:()=>r.qY,operatingSystem:()=>r.d0,propertiesSelector:()=>r.Ys,systemStatus:()=>r.qs});var r=n(67782)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>m,f_:()=>h,qY:()=>p,qr:()=>f,qs:()=>g});var r=n(4942),i=n(73880),a=n(96396);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var c=function(){var e,t,n,r,i,a,o,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,f=d.cores_per_socket,m=d.ramSize,v=d.disk_devices,h=d.sap_sids,g=d.system_purpose,b=d.cpu_flags,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=_.facts;return{cpuNumber:u||(null==y||null===(e=y.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==y||null===(t=y.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:f||(null==y||null===(n=y.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==y||null===(r=y.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==y||null===(i=y.rhsm)||void 0===i?void 0:i.CPU_CORES,10)/Number(null==y||null===(a=y.rhsm)||void 0===a?void 0:a.CPU_SOCKETS,10),ramSize:m||(null==y||null===(o=y.rhsm)||void 0===o?void 0:o.MEMORY)&&"".concat(null==y||null===(c=y.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,r=e.mount_point,i=e.options,a=e.type;return s(s(s(s({},t&&l(t,"device")),{},{label:n},r&&l(r,"mountpoint")),i&&l(i,"options")),a&&l(a,"mounttype"))})),sapIds:h,systemPurpose:null==g?void 0:g.usage,cpuFlags:b}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.operating_system,i=t.os_kernel_version,a=t.last_boot_time,o=t.kernel_modules,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.facts;return{release:r,kernelRelease:i,architecture:n||(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:a,kernelModules:o}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,i=n.infrastructure_vendor,a=n.network,o=void 0===a?{}:a,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.facts;return{type:r||void 0!==(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=l&&null!==(t=l.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:i,ipv4:o.ipv4,ipv6:o.ipv6,nics:o.interfaces}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,i=e.repositories;return{packages:t,services:n,processes:r,repositories:i}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}},v=function(e){return e?"Fresh"!==(0,a.Ei)(e)?"Stale":"Active":"N/A"},h=function(e){return null===i.registered||void 0===i.registered?void 0:i.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stale_timestamp;return{stale:new Date>new Date(t)}}},80598:()=>{},10108:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7839.7820f336acb73cfc4cd0029debc8a3da.js.map