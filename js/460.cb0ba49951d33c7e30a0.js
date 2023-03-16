(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[460,2004,9952],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var r=n(70655),a=n(92950),i=n(54918),l=n(38296),s=n(62472);const o=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:b=!1,isFlat:g=!1,isExpanded:y=!1,isRounded:_=!1,isLarge:O=!1,isFullHeight:E=!1,isPlain:S=!1,ouiaId:C,ouiaSafe:k=!0,hasSelectableInput:Z=!1,selectableInputAriaLabel:P,onSelectableInputChange:N=(()=>{})}=e,w=(0,r.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const j=u,I=(0,s.S$)(c.displayName,C,k),[x,T]=a.useState(""),[R,D]=a.useState();m&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const L=a.useRef(!1);return a.useEffect((()=>{P?D({"aria-label":P}):x?D({"aria-labelledby":x}):Z&&!L.current&&(D({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[Z,P,x]),a.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{T(e),L.current=!!e},isExpanded:y}},Z&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},R,{type:"checkbox",checked:h,onChange:e=>N(n,e),disabled:b,tabIndex:-1})),a.createElement(j,Object.assign({id:n,className:(0,l.i)(i.Z.card,m&&i.Z.modifiers.compact,y&&i.Z.modifiers.expanded,g&&i.Z.modifiers.flat,_&&i.Z.modifiers.rounded,O&&i.Z.modifiers.displayLg,E&&i.Z.modifiers.fullHeight,S&&i.Z.modifiers.plain,b?(0,l.i)(i.Z.modifiers.nonSelectableRaised):v?(0,l.i)(i.Z.modifiers.selectableRaised,h&&i.Z.modifiers.selectedRaised):f||p?(0,l.i)(i.Z.modifiers.selectable,h&&i.Z.modifiers.selected):"",d),tabIndex:f||v?"0":void 0},w,I),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var r=n(70655),a=n(92950),i=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,r.__rest)(e,["children","className","component","isFilled"]);const d=s;return a.createElement(d,Object.assign({className:(0,l.i)(i.Z.cardBody,!o&&i.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>c});var r,a=n(70655),i=n(92950),l=n(38296),s=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:d=r.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:m=!0}=e,f=(0,a.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=d,h=(0,o.S$)(c.displayName,p,m);return i.createElement(v,Object.assign({},h,f,{"data-pf-content":!0,className:(0,l.i)(u&&d===r.a&&s.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var r=n(70655),a=n(92950),i=n(62873),l=n(38296);const s=e=>{var{children:t=null,className:n="",isVisited:s=!1}=e,o=(0,r.__rest)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},o,{className:(0,l.i)(i.Z.content,s&&i.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>s});var r,a=n(70655),i=n(92950),l=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.ul}=e,o=(0,a.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>r});var r,a=n(70655),i=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:s=r.li}=e,o=(0,a.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},87292:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,kv:()=>i,ky:()=>a});var r=n(40400);const a={name:"OutlinedArrowAltCircleDownIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z",yOffset:0,xOffset:0},i=(0,r.IU)(a),l=i},10332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,aT:()=>i,wb:()=>a});var r=n(40400);const a={name:"OutlinedArrowAltCircleUpIcon",height:512,width:512,svgPath:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z",yOffset:0,xOffset:0},i=(0,r.IU)(a),l=i},91290:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,iC:()=>i,sN:()=>a});var r=n(40400);const a={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},i=(0,r.IU)(a),l=i},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(85893),a=n(92950),i=n.n(a),l=n(48542),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},o=36e5,c=24*o,d=30*c,u=365*c,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return p(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return p(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return p(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return p(Math.round(e/o),"hour")}},{rightBound:o,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(l.Tooltip,s({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(v("exact")(a),(0,r.jsx)("span",{children:v(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,l=e.extraTitle,s=e.tooltipProps,o=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===o.toString()?"invalid":a;return(0,r.jsx)(i().Fragment,{children:h(c,s,l)(o)})}},5311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(92950),a=n.n(r),i=n(45697),l=n.n(i),s=function(e){var t=e.operatingSystem;if("RHEL"===(null==t?void 0:t.name)){var n=t.major&&null!==t.minor&&"".concat(t.major,".").concat(null==t?void 0:t.minor)||null;return a().createElement("span",null,"RHEL ",n)}return a().createElement("span",null,(null==t?void 0:t.name)||"Not available")};s.propTypes={operatingSystem:l().shape({name:l().string,major:l().number,minor:l().number})};const o=s},40515:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Clickable:()=>g,default:()=>_});var r=n(92950),a=n.n(r),i=n(45697),l=n.n(i),s=n(49739),o=n(83826),c=n(68774),d=n(68340),u=n(25834),p=n(78140),m=n(32203),f=n(62394),v=n(35664),h=n(75662),b=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},g=function(e){var t=e.value,n=e.target,i=e.plural,l=e.singular,s=e.onClick,o=(0,h.useHistory)(),c=(0,h.useLocation)().pathname,d=c.split("/").pop();return(0,r.useEffect)((function(){n===d&&s({value:t,target:n})}),[d,n]),a().createElement("a",{onClick:function(e){e.preventDefault(),o.push("".concat(c,"/").concat(n))},href:"".concat(window.location.origin).concat(window.location.pathname,"/").concat(n)},b(t,l,i))};g.propTypes={value:l().node,target:l().string,onClick:l().func,plural:l().string,singular:l().string};var y=function(e){var t=e.title,n=e.isLoading,i=e.items,l=e.children;return a().createElement(m.Z,null,a().createElement(f.e,null,a().createElement(s.K,{hasGutter:!0},a().createElement(o.v,null,a().createElement(c.D,null,a().createElement(d.x,{component:d.q.h1},t))),a().createElement(o.v,{isFilled:!0},i.length?a().createElement(c.D,null,a().createElement(u.G,{component:u.F.dl},i.map((function(e,t){var i=e.onClick,l=e.value,s=e.target,o=e.plural,c=e.singular,d=e.size,u=e.title;return a().createElement(r.Fragment,{key:t},a().createElement(p.T,{component:p.v.dt},u),a().createElement(p.T,{component:p.v.dd},n&&a().createElement(v.Z,{size:d||v.i.sm}),!n&&(i&&l?a().createElement(g,{onClick:i,value:l,target:s,plural:o,singular:c}):b(l,c,o))))})))):null,l))))};y.propTypes={title:l().node.isRequired,isLoading:l().bool,items:l().arrayOf(l().shape({title:l().node,value:l().node,onClick:l().func,size:l().oneOf(Object.values(v.i)),plural:l().string,singular:l().string})),children:l().node},y.defaultProps={isLoading:!0,items:[]};const _=y},76422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.default});var r=n(40515)},66e3:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OperatingSystemCard:()=>O,default:()=>E});var r=n(4942),a=n(45987),i=n(93433),l=n(92950),s=n.n(l),o=n(45697),c=n.n(o),d=n(50533),u=n(76422),p=n(18562),m=n(45026),f=n(62410),v=n(58061),h=n(5311),b=["onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t,n=e.systemInfo,r=e.detailLoaded,l=e.handleClick,o=e.hasRelease,c=e.hasKernelRelease,d=e.hasArchitecture,m=e.hasLastBoot,g=e.hasKernelModules,_=e.extra;return s().createElement(u.Z,{title:"Operating system",isLoading:!r,items:[].concat((0,i.Z)(o?[{title:"Release",value:s().createElement(h.Z,{operatingSystem:n.release})}]:[]),(0,i.Z)(c?[{title:"Kernel release",value:n.kernelRelease}]:[]),(0,i.Z)(d?[{title:"Architecture",value:n.architecture}]:[]),(0,i.Z)(m?[{title:"Last boot time",value:(0,v.J_)(n.bootTime)?s().createElement(f.Z,{date:n.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,i.Z)(g?[{title:"Kernel modules",value:null===(t=n.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){l("Kernel modules",(0,p.generalMapper)(n.kernelModules,"Module"))}}]:[]),(0,i.Z)(_.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,b)),t&&{onClick:function(e){return t(e,l)}})}))))})};_.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().shape({name:c().string,major:c().oneOfType([c().string,c().number]),minor:c().oneOfType([c().string,c().number])}),architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(v.x7)},_.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};var O=(0,d.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{detailLoaded:n&&n.loaded,systemInfo:(0,m.operatingSystem)(n,t)}}))(_);O.propTypes=_.propTypes,O.defaultProps=_.defaultProps;const E=O},18562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{diskMapper:()=>h,enabledHelper:()=>v,generalMapper:()=>_,interfaceMapper:()=>g,productsMapper:()=>b,repositoriesMapper:()=>y,statusHelper:()=>f});var r=n(93433),a=n(29439),i=n(92950),l=n.n(i),s=n(68778),o=n(24307),c=n(91290),d=n(10332),u=n(87292),p=n(62965),m=n(75824),f={UP:l().createElement(m.u,{content:"Service is running"},l().createElement(d.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:l().createElement(m.u,{content:"Service has stopped"},l().createElement(u.ZP,{className:"ins-c-inventory__detail--down"}))},v={true:l().createElement(m.u,{content:"Source enabled"},l().createElement(s.ZP,{className:"ins-c-inventory__detail--enabled"})),false:l().createElement(m.u,{content:"Source disabled"},l().createElement(o.ZP,{className:"ins-c-inventory__detail--disabled"}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[p.sortable]},{title:"Label",transforms:[p.sortable]},{title:"Mount point",transforms:[p.sortable]},{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,r=e.mountpoint,i=e.options,s=e.mounttype,o=i&&i.options||i;return{isOpen:!1,child:l().createElement("div",null,o&&Object.entries(o.value||o).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r.value||r)})).join(",  ")),cells:[t&&t.value||t,n,r&&r.value||r,s&&s.value||s]}})),expandable:!0}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[p.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:f[e.status]||l().createElement(m.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[p.sortable]},{title:"MTU",transforms:[p.sortable]},{title:"Name",transforms:[p.sortable]},"State",{title:"Type",transforms:[p.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:f[e.state]||l().createElement(m.u,{content:"Unknown service status"},l().createElement(c.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[p.sortable]},{title:"Enabled",transforms:[p.sortable]},{title:"GPG check",transforms:[p.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:v[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:v[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[p.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},45026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{biosSelector:()=>r.Cx,collectionInformationSelector:()=>r.fZ,configurationSelector:()=>r.qr,getCollectorStatus:()=>r.P$,getDefaultCollectors:()=>r.f_,infrastructureSelector:()=>r.qY,operatingSystem:()=>r.d0,propertiesSelector:()=>r.Ys,systemStatus:()=>r.qs});var r=n(67782)},67782:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>u,P$:()=>v,Ys:()=>c,d0:()=>d,fZ:()=>f,f_:()=>h,qY:()=>p,qr:()=>m,qs:()=>b});var r=n(4942),a=n(73880),i=n(96396);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var c=function(){var e,t,n,r,a,i,l,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=d.number_of_cpus,p=d.number_of_sockets,m=d.cores_per_socket,f=d.ramSize,v=d.disk_devices,h=d.sap_sids,b=d.system_purpose,g=d.cpu_flags,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=y.facts;return{cpuNumber:u||(null==_||null===(e=_.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==_||null===(t=_.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:m||(null==_||null===(n=_.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==_||null===(r=_.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==_||null===(a=_.rhsm)||void 0===a?void 0:a.CPU_CORES,10)/Number(null==_||null===(i=_.rhsm)||void 0===i?void 0:i.CPU_SOCKETS,10),ramSize:f||(null==_||null===(l=_.rhsm)||void 0===l?void 0:l.MEMORY)&&"".concat(null==_||null===(c=_.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:v&&v.map((function(e){var t=e.device,n=e.label,r=e.mount_point,a=e.options,i=e.type;return s(s(s(s({},t&&o(t,"device")),{},{label:n},r&&o(r,"mountpoint")),a&&o(a,"options")),i&&o(i,"mounttype"))})),sapIds:h,systemPurpose:null==b?void 0:b.usage,cpuFlags:g}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.operating_system,a=t.os_kernel_version,i=t.last_boot_time,l=t.kernel_modules,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=s.facts;return{release:r,kernelRelease:a,architecture:n||(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:i,kernelModules:l}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,a=n.infrastructure_vendor,i=n.network,l=void 0===i?{}:i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=s.facts;return{type:r||void 0!==(null==o||null===(e=o.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=o&&null!==(t=o.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:a,ipv4:l.ipv4,ipv6:l.ipv6,nics:l.interfaces}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,a=e.repositories;return{packages:t,services:n,processes:r,repositories:a}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}},v=function(e){return e?"Fresh"!==(0,i.Ei)(e)?"Stale":"Active":"N/A"},h=function(e){return null===a.registered||void 0===a.registered?void 0:a.registered.filter((function(e){return"insights-client not connected"!==e.label})).map((function(t){var n;return{name:t.label,status:v(null==e?void 0:e.per_reporter_staleness[t.value]),updated:null==e||null===(n=e.per_reporter_staleness[t.value])||void 0===n?void 0:n.last_check_in,details:{name:t.idName,id:null==e?void 0:e[t.idValue]}}}))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stale_timestamp;return{stale:new Date>new Date(t)}}},80598:()=>{},10108:()=>{}}]);