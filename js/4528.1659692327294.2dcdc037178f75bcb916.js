(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4528,5467,9477],{68778:(e,t,n)=>{"use strict";n.d(t,{GR:()=>a,rE:()=>l,ZP:()=>s});var r=n(40400);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},l=(0,r.IU)(a),s=l},87292:(e,t,n)=>{"use strict";n.d(t,{ky:()=>a,kv:()=>l,ZP:()=>s});var r=n(40400);const a={name:"OutlinedArrowAltCircleDownIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z",yOffset:0,xOffset:0},l=(0,r.IU)(a),s=l},10332:(e,t,n)=>{"use strict";n.d(t,{wb:()=>a,aT:()=>l,ZP:()=>s});var r=n(40400);const a={name:"OutlinedArrowAltCircleUpIcon",height:512,width:512,svgPath:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z",yOffset:0,xOffset:0},l=(0,r.IU)(a),s=l},91290:(e,t,n)=>{"use strict";n.d(t,{sN:()=>a,iC:()=>l,ZP:()=>s});var r=n(40400);const a={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},l=(0,r.IU)(a),s=l},18562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{diskMapper:()=>p,enabledHelper:()=>b,generalMapper:()=>Z,interfaceMapper:()=>y,productsMapper:()=>h,repositoriesMapper:()=>g,statusHelper:()=>v});var r=n(93433),a=n(29439),l=n(92950),s=n.n(l),o=n(68778),c=n(24307),i=n(91290),u=n(10332),d=n(87292),f=n(56645),m=n(75824),v={UP:s().createElement(m.u,{content:"Service is running"},s().createElement(u.ZP,{className:"ins-c-inventory__detail--up"})),DOWN:s().createElement(m.u,{content:"Service has stopped"},s().createElement(d.ZP,{className:"ins-c-inventory__detail--down"}))},b={true:s().createElement(m.u,{content:"Source enabled"},s().createElement(o.ZP,{className:"ins-c-inventory__detail--enabled"})),false:s().createElement(m.u,{content:"Source disabled"},s().createElement(c.ZP,{className:"ins-c-inventory__detail--disabled"}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Device",transforms:[f.sortable]},{title:"Label",transforms:[f.sortable]},{title:"Mount point",transforms:[f.sortable]},{title:"Type",transforms:[f.sortable]}],rows:e.map((function(e){var t=e.device,n=e.label,r=e.mountpoint,l=e.options,o=e.mounttype,c=l&&l.options||l;return{isOpen:!1,child:s().createElement("div",null,c&&Object.entries(c.value||c).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r.value||r)})).join(",  ")),cells:[t&&t.value||t,n,r&&r.value||r,o&&o.value||o]}})),expandable:!0}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"Name",transforms:[f.sortable]},"Status"],rows:e.map((function(e){return[e.name,{title:v[e.status]||s().createElement(m.u,{content:"Unknown service status"},s().createElement(i.ZP,{className:"ins-c-inventory__detail--unknown"}))}]}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{cells:[{title:"MAC address",transforms:[f.sortable]},{title:"MTU",transforms:[f.sortable]},{title:"Name",transforms:[f.sortable]},"State",{title:"Type",transforms:[f.sortable]}],rows:e.map((function(e){return[e.mac_address,e.mtu,e.name,{title:v[e.state]||s().createElement(m.u,{content:"Unknown service status"},s().createElement(i.ZP,{className:"ins-c-inventory__detail--unknown"}))},e.type]}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:[],disabled:[]},t=e.enabled,n=e.disabled;return{cells:[{title:"Name",transforms:[f.sortable]},{title:"Enabled",transforms:[f.sortable]},{title:"GPG check",transforms:[f.sortable]}],rows:[].concat((0,r.Z)(t),(0,r.Z)(n)).map((function(e){return[{title:e.name,sortValue:e.name},{title:b[Boolean(e.enabled)],sortValue:"".concat(e.enabled)},{title:b[Boolean(e.gpgcheck)],sortValue:"".concat(e.gpgcheck)}]})),filters:[{type:"textual"},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]},{type:"checkbox",options:[{label:"Is enabled",value:"true"},{label:"Not enabled",value:"false"}]}]}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{cells:[{title:t,transforms:[f.sortable]}],rows:e.map((function(e){return[e]})),filters:[{type:"textual"}]}}},45467:()=>{},30907:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},83878:(e,t,n)=>{"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{Z:()=>r})},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},25267:(e,t,n)=>{"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:()=>r})},29439:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(83878),a=n(40181),l=n(25267);function s(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(e){o=!0,a=e}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||(0,a.Z)(e,t)||(0,l.Z)()}},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(30907),a=n(59199),l=n(40181);function s(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,l.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(30907);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=../sourcemaps/4528.3aac02ffbaa3004abedc6d02c8a4cddb.js.map