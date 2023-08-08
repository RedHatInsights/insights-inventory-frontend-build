(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2712],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var i=n(70655),a=n(92950),r=n(54918),l=n(38296),s=n(62472);const o=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:h=!1,isFlat:b=!1,isExpanded:_=!1,isRounded:y=!1,isLarge:E=!1,isFullHeight:C=!1,isPlain:O=!1,ouiaId:S,ouiaSafe:k=!0,hasSelectableInput:R=!1,selectableInputAriaLabel:I,onSelectableInputChange:N=(()=>{})}=e,Z=(0,i.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=u,T=(0,s.S$)(c.displayName,S,k),[w,j]=a.useState(""),[x,F]=a.useState();m&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const L=a.useRef(!1);return a.useEffect((()=>{I?F({"aria-label":I}):w?F({"aria-labelledby":w}):R&&!L.current&&(F({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[R,I,w]),a.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{j(e),L.current=!!e},isExpanded:_}},R&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},x,{type:"checkbox",checked:g,onChange:e=>N(n,e),disabled:h,tabIndex:-1})),a.createElement(P,Object.assign({id:n,className:(0,l.i)(r.Z.card,m&&r.Z.modifiers.compact,_&&r.Z.modifiers.expanded,b&&r.Z.modifiers.flat,y&&r.Z.modifiers.rounded,E&&r.Z.modifiers.displayLg,C&&r.Z.modifiers.fullHeight,O&&r.Z.modifiers.plain,h?(0,l.i)(r.Z.modifiers.nonSelectableRaised):v?(0,l.i)(r.Z.modifiers.selectableRaised,g&&r.Z.modifiers.selectedRaised):f||p?(0,l.i)(r.Z.modifiers.selectable,g&&r.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},Z,T),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var i=n(70655),a=n(92950),r=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,i.__rest)(e,["children","className","component","isFilled"]);const d=s;return a.createElement(d,Object.assign({className:(0,l.i)(r.Z.cardBody,!o&&r.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,G:()=>o});var i,a=n(70655),r=n(92950),l=n(62873),s=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i||(i={}));const o=e=>{var{children:t=null,className:n="",component:o=i.ul,isPlain:c=!1}=e,d=(0,a.__rest)(e,["children","className","component","isPlain"]);const u=o;return r.createElement(u,Object.assign({},d,{className:(0,s.i)(c&&l.Z.modifiers.plain,n)}),t)};o.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>i});var i,a=n(70655),r=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i||(i={}));const s=e=>{var{children:t=null,className:n="",component:s=i.li}=e,o=(0,a.__rest)(e,["children","className","component"]);const c=s;return r.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i}),n(80598);const i={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>b,default:()=>y});var i=n(92950),a=n.n(i),r=n(45697),l=n.n(r),s=n(32203),o=n(62394),c=n(49739),d=n(83826),u=n(68340),p=n(68774),m=n(25834),f=n(78140),v=n(35664),g=n(75662),h=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},b=function(e){var t=e.value,n=e.target,r=e.plural,l=e.singular,s=e.onClick,o=(0,g.useHistory)(),c=(0,g.useLocation)().pathname,d=c.split("/").pop();return(0,i.useEffect)((function(){n===d&&s({value:t,target:n})}),[d,n]),a().createElement("a",{onClick:function(e){e.preventDefault(),o.push("".concat(c,"/").concat(n))},href:"".concat(window.location.origin).concat(window.location.pathname,"/").concat(n)},h(t,l,r))};b.propTypes={value:l().node,target:l().string,onClick:l().func,plural:l().string,singular:l().string};var _=function(e){var t=e.title,n=e.isLoading,r=e.items,l=e.children;return a().createElement(s.Z,{ouiaId:"system-properties-card"},a().createElement(o.e,null,a().createElement(c.K,{hasGutter:!0},a().createElement(d.v,null,a().createElement(p.D,null,a().createElement(u.x,{component:u.q.h1},t))),a().createElement(d.v,{isFilled:!0},r.length?a().createElement(p.D,null,a().createElement(m.G,{component:m.F.dl},r.map((function(e,t){var r,l,s=e.onClick,o=e.value,c=e.target,d=e.plural,u=e.singular,p=e.size,m=e.title;return a().createElement(i.Fragment,{key:t},a().createElement(f.T,{component:f.v.dt,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(r=m.props)||void 0===r?void 0:r.title," title")},m),a().createElement(f.T,{component:f.v.dd,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(l=m.props)||void 0===l?void 0:l.title," value")},n&&a().createElement(v.Z,{size:p||v.i.sm}),!n&&(s&&o?a().createElement(b,{onClick:s,value:o,target:c,plural:d,singular:u}):h(o,u,d))))})))):null,l))))};_.propTypes={title:l().node.isRequired,isLoading:l().bool,items:l().arrayOf(l().shape({title:l().node,value:l().node,onClick:l().func,size:l().oneOf(Object.values(v.i)),plural:l().string,singular:l().string})),children:l().node},_.defaultProps={isLoading:!0,items:[]};const y=_},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i.default});var i=n(40515)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>f,f_:()=>g,qY:()=>p,qr:()=>m,qs:()=>h});var i=n(4942),a=n(73880),r=n(96396);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){try{return JSON.parse(e)}catch(n){return(0,i.Z)({},t,e)}}var c=function(){var e,t,n,i,a,r,l,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,m=d.cores_per_socket,f=d.ramSize,v=d.disk_devices,g=d.sap_sids,h=d.system_purpose,b=d.cpu_flags,_=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{cpuNumber:u||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:m||(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.CPU_CORES)&&Number(null==_||null===(a=_.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_SOCKETS,10),ramSize:f||(null==_||null===(l=_.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==_||null===(c=_.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,i=e.mount_point,a=e.options,r=e.type;return s(s(s(s({},t&&o(t,"device")),{},{label:n},i&&o(i,"mountpoint")),a&&o(a,"options")),r&&o(r,"mounttype"))})),sapIds:g,systemPurpose:null==h?void 0:h.usage,cpuFlags:b}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,i=t.operating_system,a=t.os_kernel_version,r=t.last_boot_time,l=t.kernel_modules,s=t.system_update_method,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{release:i,kernelRelease:a,architecture:n||(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:r,kernelModules:l,systemUpdateMethod:s}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vendor:e.bios_vendor,version:e.bios_version,releaseDate:e.bios_release_date}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.infrastructure_type,a=n.infrastructure_vendor,r=n.network,l=void 0===r?{}:r,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{type:i||void 0!==(null==s||null===(e=s.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=s&&null!==(t=s.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{packages:e.installed_packages,services:e.enabled_services,processes:e.running_processes,repositories:e.repositories}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{client:e.insights_client_version,egg:e.insights_egg_version}},v=function(e){return e?"Fresh"!==(0,r.Ei)(e)?"Stale":"Active":"N/A"},g=function(e){return null===a.registered||void 0===a.registered?void 0:a.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},h=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stale_timestamp;return{stale:new Date>new Date(e)}}},80598:()=>{},10108:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2712.a40413f35f0ffcb04b515f5194e38ae2.js.map