(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8979,8427],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var a=n(70655),r=n(92950),s=n(54918),i=n(38296),l=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:b=!1,isFlat:h=!1,isExpanded:_=!1,isRounded:y=!1,isLarge:O=!1,isFullHeight:k=!1,isPlain:C=!1,ouiaId:S,ouiaSafe:E=!0,hasSelectableInput:P=!1,selectableInputAriaLabel:N,onSelectableInputChange:Z=(()=>{})}=e,I=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const w=u,R=(0,l.S$)(c.displayName,S,E),[j,x]=r.useState(""),[T,L]=r.useState();m&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const D=r.useRef(!1);return r.useEffect((()=>{N?L({"aria-label":N}):j?L({"aria-labelledby":j}):P&&!D.current&&(L({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[P,N,j]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{x(e),D.current=!!e},isExpanded:_}},P&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:g,onChange:e=>Z(n,e),disabled:b,tabIndex:-1})),r.createElement(w,Object.assign({id:n,className:(0,i.i)(s.Z.card,m&&s.Z.modifiers.compact,_&&s.Z.modifiers.expanded,h&&s.Z.modifiers.flat,y&&s.Z.modifiers.rounded,O&&s.Z.modifiers.displayLg,k&&s.Z.modifiers.fullHeight,C&&s.Z.modifiers.plain,b?(0,i.i)(s.Z.modifiers.nonSelectableRaised):v?(0,i.i)(s.Z.modifiers.selectableRaised,g&&s.Z.modifiers.selectedRaised):f||p?(0,i.i)(s.Z.modifiers.selectable,g&&s.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},I,R),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>l});var a=n(70655),r=n(92950),s=n(54918),i=n(38296);const l=e=>{var{children:t=null,className:n="",component:l="div",isFilled:o=!0}=e,c=(0,a.__rest)(e,["children","className","component","isFilled"]);const d=l;return r.createElement(d,Object.assign({className:(0,i.i)(s.Z.cardBody,!o&&s.Z.modifiers.noFill,n)},c),t)};l.displayName="CardBody"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>c});var a,r=n(70655),s=n(92950),i=n(38296),l=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const c=e=>{var{children:t=null,className:n="",component:d=a.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:m=!0}=e,f=(0,r.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=d,g=(0,o.S$)(c.displayName,p,m);return s.createElement(v,Object.assign({},g,f,{"data-pf-content":!0,className:(0,i.i)(u&&d===a.a&&l.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>l});var a=n(70655),r=n(92950),s=n(62873),i=n(38296);const l=e=>{var{children:t,className:n="",isVisited:l=!1}=e,o=(0,a.__rest)(e,["children","className","isVisited"]);return r.createElement("div",Object.assign({},o,{className:(0,i.i)(s.Z.content,l&&s.Z.modifiers.visited,n)}),t)};l.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>o});var a,r=n(70655),s=n(92950),i=n(62873),l=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const o=e=>{var{children:t=null,className:n="",component:o=a.ul,isPlain:c=!1}=e,d=(0,r.__rest)(e,["children","className","component","isPlain"]);const u=o;return s.createElement(u,Object.assign({},d,{className:(0,l.i)(c&&i.Z.modifiers.plain,n)}),t)};o.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>l,v:()=>a});var a,r=n(70655),s=n(92950),i=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const l=e=>{var{children:t=null,className:n="",component:l=a.li}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=l;return s.createElement(c,Object.assign({},o,{className:(0,i.i)(n)}),t)};l.displayName="TextListItem"},87292:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,kv:()=>s,ky:()=>r});var a=n(40400);const r={name:"OutlinedArrowAltCircleDownIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z",yOffset:0,xOffset:0},s=(0,a.IU)(r),i=s},10332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,aT:()=>s,wb:()=>r});var a=n(40400);const r={name:"OutlinedArrowAltCircleUpIcon",height:512,width:512,svgPath:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z",yOffset:0,xOffset:0},s=(0,a.IU)(r),i=s},91290:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,iC:()=>s,sN:()=>r});var a=n(40400);const r={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},s=(0,a.IU)(r),i=s},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(10108);const a={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},61537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ConfigurationCard:()=>y,default:()=>O,enabledRepos:()=>h});var a=n(4942),r=n(45987),s=n(93433),i=n(92950),l=n.n(i),o=n(45697),c=n.n(o),d=n(60261),u=n(76422),p=n(18562),m=n(45026),f=n(58061),v=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var _=function(e){var t,n,a,i=e.detailLoaded,o=e.configuration,c=e.handleClick,d=e.hasPackages,m=e.hasServices,f=e.hasProcesses,g=e.hasRepositories,_=e.extra;return l().createElement(u.Z,{title:"Configuration",isLoading:!i,items:[].concat((0,s.Z)(d?[{title:"Installed packages",value:null===(t=o.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){c("Installed packages",(0,p.generalMapper)(o.packages,"Package name"))}}]:[]),(0,s.Z)(m?[{title:"Services",value:null===(n=o.services)||void 0===n?void 0:n.length,singular:"service",target:"services",onClick:function(){c("Services",(0,p.generalMapper)(o.services,"Service name"))}}]:[]),(0,s.Z)(f?[{title:"Running processes",value:null===(a=o.processes)||void 0===a?void 0:a.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){c("Running processes",(0,p.generalMapper)(o.processes,"Process name"))}}]:[]),(0,s.Z)(g?[{title:"Repositories",value:h(o.repositories),target:"repositories",onClick:function(){c("Repositories",(0,p.repositoriesMapper)(o.repositories),"medium")}}]:[]),(0,s.Z)(_.map((function(e){var t=e.onClick;return b(b({},(0,r.Z)(e,v)),t&&{onClick:function(e){return t(e,c)}})}))))})};_.propTypes={detailLoaded:c().bool,handleClick:c().func,configuration:c().shape({packages:c().arrayOf(c().string),services:c().arrayOf(c().string),processes:c().arrayOf(c().string),repositories:c().shape({enabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool})),disabled:c().arrayOf(c().shape({base_url:c().string,name:c().string,enabled:c().bool,gpgcheck:c().bool}))})}),hasPackages:c().bool,hasServices:c().bool,hasProcesses:c().bool,hasRepositories:c().bool,extra:c().arrayOf(f.x7)},_.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};var y=(0,d.connect)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,m.configurationSelector)(t)}}))(_);y.propTypes=_.propTypes,y.defaultProps=_.defaultProps;const O=y},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>h,default:()=>y});var a=n(92950),r=n.n(a),s=n(45697),i=n.n(s),l=n(32203),o=n(62394),c=n(49739),d=n(83826),u=n(68340),p=n(68774),m=n(25834),f=n(78140),v=n(35664),g=n(62012),b=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},h=function(e){var t=e.value,n=e.target,s=e.plural,i=e.singular,l=e.onClick,o=(0,g.useParams)().modalId;return(0,a.useEffect)((function(){n===o&&l({value:t,target:n})}),[o,n]),r().createElement(g.Link,{to:"./".concat(n)},b(t,i,s))};h.propTypes={value:i().node,target:i().string,onClick:i().func,plural:i().string,singular:i().string};var _=function(e){var t=e.title,n=e.isLoading,s=e.items,i=e.children;return r().createElement(l.Z,{ouiaId:"system-properties-card"},r().createElement(o.e,null,r().createElement(c.K,{hasGutter:!0},r().createElement(d.v,null,r().createElement(p.D,null,r().createElement(u.x,{component:u.q.h1},t))),r().createElement(d.v,{isFilled:!0},s.length?r().createElement(p.D,null,r().createElement(m.G,{component:m.F.dl},s.map((function(e,t){var s,i,l=e.onClick,o=e.value,c=e.target,d=e.plural,u=e.singular,p=e.size,m=e.title,g=e.customClass;return r().createElement(a.Fragment,{key:t},r().createElement(f.T,{component:f.v.dt,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(s=m.props)||void 0===s?void 0:s.title," title")},m),r().createElement(f.T,{className:g,component:f.v.dd,"data-ouia-component-id":"".concat("string"==typeof m?m:null==m||null===(i=m.props)||void 0===i?void 0:i.title," value")},n&&r().createElement(v.Z,{size:p||v.i.sm}),!n&&(l&&o?r().createElement("div",null,r().createElement(h,{onClick:l,value:o,target:c,plural:d,singular:u})):b(o,u,d))))})))):null,i))))};_.propTypes={title:i().node.isRequired,isLoading:i().bool,items:i().arrayOf(i().shape({title:i().node,value:i().node,onClick:i().func,size:i().oneOf(Object.values(v.i)),plural:i().string,singular:i().string,customClass:i().string})),children:i().node},_.defaultProps={isLoading:!0,items:[]};const y=_},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a.default});var a=n(40515)},18562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{diskMapper:()=>g,enabledHelper:()=>v,generalMapper:()=>y,interfaceMapper:()=>h,productsMapper:()=>b,repositoriesMapper:()=>_,statusHelper:()=>f});var a=n(93433),r=n(29439),s=n(92950),i=n.n(s),l=n(68778),o=n(87292),c=n(10332),d=n(91290),u=n(24307),p=n(19229),m=n(75824),f={UP:i().createElement(m.u,{content:"Service is running"},i().createElement(c.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:i().createElement(m.u,{content:"Service has stopped"},i().createElement(o.ZP,{className:"ins-c-inventory__detail--down"}))},v={true:i().createElement(m.u,{content:"Source enabled"},i().createElement(l.ZP,{className:"ins-c-inventory__detail--enabled"})),false:i().createElement(m.u,{content:"Source disabled"},i().createElement(u.ZP,{className:"ins-c-inventory__detail--disabled"}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,a=e.mountpoint,s=e.options,l=e.mounttype,o=s&&s.options||s;return{isOpen:!1,child:i().createElement("div",null,o&&Object.entries(o.value||o).map((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return"".concat(n,"=").concat(a.value||a)})).join(",  ")),cells:[t&&t.value||t,n,a&&a.value||a,l&&l.value||l]}})),expandable:!0}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:f[e.status]||i().createElement(m.u,{content:"Unknown service status"},i().createElement(d.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:f[e.state]||i().createElement(m.u,{content:"Unknown service status"},i().createElement(d.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,a.Z)(t),(0,a.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:v[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:v[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},45026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{biosSelector:()=>a.Cx,collectionInformationSelector:()=>a.fZ,configurationSelector:()=>a.qr,getCollectorStatus:()=>a.P$,getDefaultCollectors:()=>a.f_,infrastructureSelector:()=>a.qY,operatingSystem:()=>a.d0,propertiesSelector:()=>a.Ys,systemStatus:()=>a.qs});var a=n(67782)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>f,f_:()=>g,qY:()=>p,qr:()=>m,qs:()=>b});var a=n(4942),r=n(73880),s=n(96396);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){try{return JSON.parse(e)}catch(n){return(0,a.Z)({},t,e)}}var c=function(){var e,t,n,a,r,s,i,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,m=d.cores_per_socket,f=d.ramSize,v=d.disk_devices,g=d.sap_sids,b=d.system_purpose,h=d.cpu_flags,_=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{cpuNumber:u||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:m||(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==_||null===(a=_.rhsm)||void 0===a?void 0:a.CPU_CORES)&&Number(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_CORES,10)/Number(null==_||null===(s=_.rhsm)||void 0===s?void 0:s.CPU_SOCKETS,10),ramSize:f||(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.MEMORY)&&"".concat(null==_||null===(c=_.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,a=e.mount_point,r=e.options,s=e.type;return l(l(l(l({},t&&o(t,"device")),{},{label:n},a&&o(a,"mountpoint")),r&&o(r,"options")),s&&o(s,"mounttype"))})),sapIds:g,systemPurpose:null==b?void 0:b.usage,cpuFlags:h}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,a=t.operating_system,r=t.os_kernel_version,s=t.last_boot_time,i=t.kernel_modules,l=t.system_update_method,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{release:a,kernelRelease:r,architecture:n||(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:s,kernelModules:i,systemUpdateMethod:l}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vendor:e.bios_vendor,version:e.bios_version,releaseDate:e.bios_release_date}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.infrastructure_type,r=n.infrastructure_vendor,s=n.network,i=void 0===s?{}:s,l=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).facts;return{type:a||void 0!==(null==l||null===(e=l.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=l&&null!==(t=l.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:r,ipv4:i.ipv4,ipv6:i.ipv6,nics:i.interfaces}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{packages:e.installed_packages,services:e.enabled_services,processes:e.running_processes,repositories:e.repositories}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{client:e.insights_client_version,egg:e.insights_egg_version}},v=function(e){return e?"Fresh"!==(0,s.Ei)(e)?"Stale":"Active":"N/A"},g=function(e){return null===r.registered||void 0===r.registered?void 0:r.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},b=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stale_timestamp;return{stale:new Date>new Date(e)}}},80598:()=>{},10108:()=>{}}]);