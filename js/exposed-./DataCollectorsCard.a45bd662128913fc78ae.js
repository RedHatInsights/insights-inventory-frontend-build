(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[285],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var a=n(70655),r=n(92950),i=n(54918),l=n(38296),s=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:b=!1,isExpanded:_=!1,isRounded:y=!1,isLarge:E=!1,isFullHeight:T=!1,isPlain:C=!1,ouiaId:S,ouiaSafe:N=!0,hasSelectableInput:O=!1,selectableInputAriaLabel:k,onSelectableInputChange:x=(()=>{})}=e,I=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const Z=u,P=(0,s.S$)(c.displayName,S,N),[L,R]=r.useState(""),[j,D]=r.useState();m&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const w=r.useRef(!1);return r.useEffect((()=>{k?D({"aria-label":k}):L?D({"aria-labelledby":L}):O&&!w.current&&(D({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[O,k,L]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{R(e),w.current=!!e},isExpanded:_}},O&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},j,{type:"checkbox",checked:h,onChange:e=>x(n,e),disabled:g,tabIndex:-1})),r.createElement(Z,Object.assign({id:n,className:(0,l.i)(i.Z.card,m&&i.Z.modifiers.compact,_&&i.Z.modifiers.expanded,b&&i.Z.modifiers.flat,y&&i.Z.modifiers.rounded,E&&i.Z.modifiers.displayLg,T&&i.Z.modifiers.fullHeight,C&&i.Z.modifiers.plain,g?(0,l.i)(i.Z.modifiers.nonSelectableRaised):v?(0,l.i)(i.Z.modifiers.selectableRaised,h&&i.Z.modifiers.selectedRaised):f||p?(0,l.i)(i.Z.modifiers.selectable,h&&i.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},I,P),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var a=n(70655),r=n(92950),i=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,a.__rest)(e,["children","className","component","isFilled"]);const d=s;return r.createElement(d,Object.assign({className:(0,l.i)(i.Z.cardBody,!o&&i.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>c});var a,r=n(70655),i=n(92950),l=n(38296),s=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const c=e=>{var{children:t=null,className:n="",component:d=a.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:m=!0}=e,f=(0,r.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=d,h=(0,o.S$)(c.displayName,p,m);return i.createElement(v,Object.assign({},h,f,{"data-pf-content":!0,className:(0,l.i)(u&&d===a.a&&s.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var a=n(70655),r=n(92950),i=n(62873),l=n(38296);const s=e=>{var{children:t,className:n="",isVisited:s=!1}=e,o=(0,a.__rest)(e,["children","className","isVisited"]);return r.createElement("div",Object.assign({},o,{className:(0,l.i)(i.Z.content,s&&i.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>o});var a,r=n(70655),i=n(92950),l=n(62873),s=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const o=e=>{var{children:t=null,className:n="",component:o=a.ul,isPlain:c=!1}=e,d=(0,r.__rest)(e,["children","className","component","isPlain"]);const u=o;return i.createElement(u,Object.assign({},d,{className:(0,s.i)(c&&l.Z.modifiers.plain,n)}),t)};o.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>a});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.li}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(10108);const a={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(85893),r=n(92950),i=n.n(r),l=n(39752),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},o=36e5,c=24*o,d=30*c,u=365*c,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return p(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return p(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return p(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return p(Math.round(e/o),"hour")}},{rightBound:o,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(r){return function(e,t,n,r){return void 0===r&&(r=""),(0,a.jsx)(l.Tooltip,s({},n,{content:(0,a.jsxs)("div",{children:[r,e]})},{children:t}))}(v("exact")(r),(0,a.jsx)("span",{children:v(e)(r)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const g=function(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,l=e.extraTitle,s=e.tooltipProps,o=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===o.toString()?"invalid":r;return(0,a.jsx)(i().Fragment,{children:h(c,s,l)(o)})}},81139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DataCollectorsCard:()=>g,default:()=>b});var a=n(93433),r=n(29439),i=n(92950),l=n.n(i),s=n(45697),o=n.n(s),c=n(60261),d=n(76422),u=n(62410),p=n(19229),m=n(28191),f=n(92298),v=n(67782),h=function(e){var t=e.detailLoaded,n=e.collectors,s=e.entity,o=e.dataMapper,c=(0,i.useState)([]),h=(0,r.Z)(c,2),g=h[0],b=h[1],_=(0,i.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return b((function(n){var r=n.filter((function(t){return t!==e.name}));return t?[].concat((0,a.Z)(r),[e.name]):r}))}),[]),y=function(e){return g.includes(e.name)},E=null!=n?n:(0,v.f_)(s);return l().createElement(d.Z,{title:"Data collectors",isLoading:!t},l().createElement(p.TableComposable,{"aria-label":"Data collectors",variant:p.TableVariant.compact,borders:!1},l().createElement(p.Thead,null,l().createElement(p.Tr,{className:"ins-c__no-border"},l().createElement(p.Th,null),l().createElement(p.Th,null,"Name"),l().createElement(p.Th,null,"Status"),l().createElement(p.Th,null,"Last upload"))),o?o(E,y,_):E.map((function(e,t){var n;return l().createElement(p.Tbody,{key:e.name,isExpanded:y(e)},l().createElement(p.Tr,null,e.details.name?l().createElement(p.Td,{expand:e.details?{rowIndex:t,isExpanded:y(e),onToggle:function(){return _(e,!y(e))}}:void 0,style:{paddingLeft:0}}):l().createElement(p.Td,null),l().createElement(p.Td,{dataLabel:"Name"},e.name),l().createElement(p.Td,{dataLabel:"Status"},e.status),l().createElement(p.Td,{dataLabel:"Last upload"},e.updated?l().createElement(u.Z,{date:e.updated,type:"exact"}):"N/A")),e.details&&e.details.name&&l().createElement(p.Tr,{isExpanded:y(e)},l().createElement(p.Td,null),l().createElement(p.Td,{colSpan:3},l().createElement(p.ExpandableRowContent,null,l().createElement(m.k,null,l().createElement(f.B,{className:"ins-c__flex-row-margin"},"".concat(e.details.name,":")),l().createElement(f.B,{grow:{default:"grow"}},null!==(n=e.details.id)&&void 0!==n?n:"N/A"))))))}))))};h.propTypes={detailLoaded:o().bool,collectors:o().array,dataMapper:o().func,entity:o().shape({per_reporter_staleness:o().object})},h.defaultProps={detailLoaded:!1};var g=(0,c.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,systemProfile:n,detailLoaded:null==n?void 0:n.loaded,defaultCollectors:(0,v.f_)(t)}}))(h);g.propTypes=h.propTypes,g.defaultProps=h.defaultProps;const b=g},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>b,default:()=>y});var a=n(92950),r=n.n(a),i=n(45697),l=n.n(i),s=n(32203),o=n(62394),c=n(49739),d=n(83826),u=n(68340),p=n(68774),m=n(25834),f=n(78140),v=n(35664),h=n(62012),g=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},b=function(e){var t=e.value,n=e.target,i=e.plural,l=e.singular,s=e.onClick,o=(0,h.useParams)().modalId;return(0,a.useEffect)((function(){n===o&&s({value:t,target:n})}),[o,n]),r().createElement(h.Link,{to:"./".concat(n)},g(t,l,i))};b.propTypes={value:l().node,target:l().string,onClick:l().func,plural:l().string,singular:l().string};var _=function(e){var t=e.title,n=e.isLoading,i=e.items,l=e.children;return r().createElement(s.Z,{ouiaId:"system-properties-card"},r().createElement(o.e,null,r().createElement(c.K,{hasGutter:!0},r().createElement(d.v,null,r().createElement(p.D,null,r().createElement(u.x,{component:u.q.h1},t))),r().createElement(d.v,{isFilled:!0},i.length?r().createElement(p.D,null,r().createElement(m.G,{component:m.F.dl},i.map((function(e,t){var i,l,s=e.onClick,o=e.value,c=e.target,d=e.plural,u=e.singular,p=e.size,m=e.title,h=e.customClass;return r().createElement(a.Fragment,{key:t},r().createElement(f.T,{component:f.v.dt,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(i=m.props)||void 0===i?void 0:i.title," title")},m),r().createElement(f.T,{className:h,component:f.v.dd,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(l=m.props)||void 0===l?void 0:l.title," value")},n&&r().createElement(v.Z,{size:p||v.i.sm}),!n&&(s&&o?r().createElement("div",null,r().createElement(b,{onClick:s,value:o,target:c,plural:d,singular:u})):g(o,u,d))))})))):null,l))))};_.propTypes={title:l().node.isRequired,isLoading:l().bool,items:l().arrayOf(l().shape({title:l().node,value:l().node,onClick:l().func,size:l().oneOf(Object.values(v.i)),plural:l().string,singular:l().string,customClass:l().string})),children:l().node},_.defaultProps={isLoading:!0,items:[]};const y=_},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a.default});var a=n(40515)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>f,f_:()=>h,qY:()=>p,qr:()=>m,qs:()=>g});var a=n(4942),r=n(73880),i=n(96396);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){try{return JSON.parse(e)}catch(n){return(0,a.Z)({},t,e)}}var c=function(){var e,t,n,a,r,i,l,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,m=d.cores_per_socket,f=d.ramSize,v=d.disk_devices,h=d.sap_sids,g=d.system_purpose,b=d.cpu_flags,_=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{cpuNumber:u||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:m||(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==_||null===(a=_.rhsm)||void 0===a?void 0:a.CPU_CORES)&&Number(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_CORES,10)/Number(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:f||(null==_||null===(l=_.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==_||null===(c=_.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,a=e.mount_point,r=e.options,i=e.type;return s(s(s(s({},t&&o(t,"device")),{},{label:n},a&&o(a,"mountpoint")),r&&o(r,"options")),i&&o(i,"mounttype"))})),sapIds:h,systemPurpose:null==g?void 0:g.usage,cpuFlags:b}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,a=t.operating_system,r=t.os_kernel_version,i=t.last_boot_time,l=t.kernel_modules,s=t.system_update_method,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{release:a,kernelRelease:r,architecture:n||(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:i,kernelModules:l,systemUpdateMethod:s}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vendor:e.bios_vendor,version:e.bios_version,releaseDate:e.bios_release_date}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.infrastructure_type,r=n.infrastructure_vendor,i=n.network,l=void 0===i?{}:i,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{type:a||void 0!==(null==s||null===(e=s.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=s&&null!==(t=s.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:r,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{packages:e.installed_packages,services:e.enabled_services,processes:e.running_processes,repositories:e.repositories}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{client:e.insights_client_version,egg:e.insights_egg_version}},v=function(e){return e?"Fresh"!==(0,i.Ei)(e)?"Stale":"Active":"N/A"},h=function(e){return null===r.registered||void 0===r.registered?void 0:r.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},g=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stale_timestamp;return{stale:new Date>new Date(e)}}},80598:()=>{},10108:()=>{},38299:()=>{}}]);