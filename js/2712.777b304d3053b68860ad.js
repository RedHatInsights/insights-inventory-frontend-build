(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2712],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var a=n(70655),r=n(92950),i=n(54918),l=n(38296),s=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:h=!1,isFlat:b=!1,isExpanded:_=!1,isRounded:y=!1,isLarge:E=!1,isFullHeight:C=!1,isPlain:O=!1,ouiaId:S,ouiaSafe:k=!0,hasSelectableInput:R=!1,selectableInputAriaLabel:N,onSelectableInputChange:I=(()=>{})}=e,Z=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=u,T=(0,s.S$)(c.displayName,S,k),[w,j]=r.useState(""),[x,F]=r.useState();m&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const L=r.useRef(!1);return r.useEffect((()=>{N?F({"aria-label":N}):w?F({"aria-labelledby":w}):R&&!L.current&&(F({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[R,N,w]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{j(e),L.current=!!e},isExpanded:_}},R&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},x,{type:"checkbox",checked:g,onChange:e=>I(n,e),disabled:h,tabIndex:-1})),r.createElement(P,Object.assign({id:n,className:(0,l.i)(i.Z.card,m&&i.Z.modifiers.compact,_&&i.Z.modifiers.expanded,b&&i.Z.modifiers.flat,y&&i.Z.modifiers.rounded,E&&i.Z.modifiers.displayLg,C&&i.Z.modifiers.fullHeight,O&&i.Z.modifiers.plain,h?(0,l.i)(i.Z.modifiers.nonSelectableRaised):v?(0,l.i)(i.Z.modifiers.selectableRaised,g&&i.Z.modifiers.selectedRaised):f||p?(0,l.i)(i.Z.modifiers.selectable,g&&i.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},Z,T),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var a=n(70655),r=n(92950),i=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,a.__rest)(e,["children","className","component","isFilled"]);const d=s;return r.createElement(d,Object.assign({className:(0,l.i)(i.Z.cardBody,!o&&i.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>s});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.ul}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>a});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.li}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>b,default:()=>y});var a=n(92950),r=n.n(a),i=n(45697),l=n.n(i),s=n(32203),o=n(62394),c=n(49739),d=n(83826),u=n(68340),p=n(68774),m=n(25834),f=n(78140),v=n(35664),g=n(75662),h=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},b=function(e){var t=e.value,n=e.target,i=e.plural,l=e.singular,s=e.onClick,o=(0,g.useHistory)(),c=(0,g.useLocation)().pathname,d=c.split("/").pop();return(0,a.useEffect)((function(){n===d&&s({value:t,target:n})}),[d,n]),r().createElement("a",{onClick:function(e){e.preventDefault(),o.push("".concat(c,"/").concat(n))},href:"".concat(window.location.origin).concat(window.location.pathname,"/").concat(n)},h(t,l,i))};b.propTypes={value:l().node,target:l().string,onClick:l().func,plural:l().string,singular:l().string};var _=function(e){var t=e.title,n=e.isLoading,i=e.items,l=e.children;return r().createElement(s.Z,null,r().createElement(o.e,null,r().createElement(c.K,{hasGutter:!0},r().createElement(d.v,null,r().createElement(p.D,null,r().createElement(u.x,{component:u.q.h1},t))),r().createElement(d.v,{isFilled:!0},i.length?r().createElement(p.D,null,r().createElement(m.G,{component:m.F.dl},i.map((function(e,t){var i=e.onClick,l=e.value,s=e.target,o=e.plural,c=e.singular,d=e.size,u=e.title;return r().createElement(a.Fragment,{key:t},r().createElement(f.T,{component:f.v.dt},u),r().createElement(f.T,{component:f.v.dd},n&&r().createElement(v.Z,{size:d||v.i.sm}),!n&&(i&&l?r().createElement(b,{onClick:i,value:l,target:s,plural:o,singular:c}):h(l,c,o))))})))):null,l))))};_.propTypes={title:l().node.isRequired,isLoading:l().bool,items:l().arrayOf(l().shape({title:l().node,value:l().node,onClick:l().func,size:l().oneOf(Object.values(v.i)),plural:l().string,singular:l().string})),children:l().node},_.defaultProps={isLoading:!0,items:[]};const y=_},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a.default});var a=n(40515)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>f,f_:()=>g,qY:()=>p,qr:()=>m,qs:()=>h});var a=n(4942),r=n(73880),i=n(96396);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){try{return JSON.parse(e)}catch(n){return(0,a.Z)({},t,e)}}var c=function(){var e,t,n,a,r,i,l,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,m=d.cores_per_socket,f=d.ramSize,v=d.disk_devices,g=d.sap_sids,h=d.system_purpose,b=d.cpu_flags,_=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{cpuNumber:u||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:m||(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==_||null===(a=_.rhsm)||void 0===a?void 0:a.CPU_CORES)&&Number(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_CORES,10)/Number(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:f||(null==_||null===(l=_.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==_||null===(c=_.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,a=e.mount_point,r=e.options,i=e.type;return s(s(s(s({},t&&o(t,"device")),{},{label:n},a&&o(a,"mountpoint")),r&&o(r,"options")),i&&o(i,"mounttype"))})),sapIds:g,systemPurpose:null==h?void 0:h.usage,cpuFlags:b}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,a=t.operating_system,r=t.os_kernel_version,i=t.last_boot_time,l=t.kernel_modules,s=t.system_update_method,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{release:a,kernelRelease:r,architecture:n||(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:i,kernelModules:l,systemUpdateMethod:s}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vendor:e.bios_vendor,version:e.bios_version,releaseDate:e.bios_release_date}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.infrastructure_type,r=n.infrastructure_vendor,i=n.network,l=void 0===i?{}:i,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{type:a||void 0!==(null==s||null===(e=s.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=s&&null!==(t=s.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:r,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{packages:e.installed_packages,services:e.enabled_services,processes:e.running_processes,repositories:e.repositories}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{client:e.insights_client_version,egg:e.insights_egg_version}},v=function(e){return e?"Fresh"!==(0,i.Ei)(e)?"Stale":"Active":"N/A"},g=function(e){return null===r.registered||void 0===r.registered?void 0:r.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},h=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stale_timestamp;return{stale:new Date>new Date(e)}}},80598:()=>{},10108:()=>{}}]);