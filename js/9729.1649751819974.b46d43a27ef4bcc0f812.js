"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9729],{2907:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(45987),i=t(96985),o=t.n(i),a=t(45697),l=t.n(a),c=t(43707),u=t(65413),s=["writePermissions"],v=function(e){var n=e.link,t=e.onClick;return o().createElement("a",{className:"ins-c-inventory__detail--action",href:"".concat(window.location.href,"/").concat(n),onClick:t},o().createElement(u.ZP,null))};v.propTypes={link:l().string.isRequired,onClick:l().func.isRequired};var p=void 0,d=function(e){var n=(0,c.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]).hasAccess;return n&&(p=n),n?o().createElement(v,e):null};d.propTypes={link:l().string.isRequired,onClick:l().func.isRequired};var f=function(e){var n=e.writePermissions,t=(0,r.Z)(e,s);return insights.chrome.isProd||n||p?o().createElement(v,t):"boolean"!=typeof n?o().createElement(d,t):null};f.propTypes={writePermissions:l().bool};const m=f},40409:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(96985),i=t.n(r),o=t(45697),a=t.n(o),l=t(49739),c=t(83826),u=t(68774),s=t(68340),v=t(25834),p=t(78140),d=t(35664),f=function(e,n,t){return(e||0===e)&&n?1===e?"1 ".concat(n):"".concat(e," ").concat(t||"".concat(n,"s")):0===e?"None":e||"Not available"},m=function(e){var n=e.item,t=n.onClick,r=n.value,o=n.target,a=n.plural,l=n.singular;return i().createElement("a",{onClick:function(e){e.preventDefault(),t(e,{value:r,target:o})},href:"".concat(window.location.href,"/").concat(o)},f(r,l,a))};m.propTypes={item:a().shape({value:a().node,target:a().string,onClick:a().func,plural:a().string,singular:a().string})},m.defaultProps={item:{}};var g=function(e){var n=e.title,t=e.isLoading,o=e.items;return i().createElement(l.K,{hasGutter:!0},i().createElement(c.v,null,i().createElement(u.D,null,i().createElement(s.x,{component:s.q.h1},n))),i().createElement(c.v,{isFilled:!0},i().createElement(u.D,null,i().createElement(v.G,{component:v.F.dl},o.map((function(e,n){return i().createElement(r.Fragment,{key:n},i().createElement(p.T,{component:p.v.dt},e.title),i().createElement(p.T,{component:p.v.dd},t&&i().createElement(d.Z,{size:e.size||d.i.sm}),!t&&(e.onClick&&e.value?i().createElement(m,{item:e}):f(e.value,e.singular,e.plural))))}))))))};g.propTypes={title:a().node.isRequired,isLoading:a().bool,items:a().arrayOf(a().shape({title:a().node,value:a().node,onClick:a().func,size:a().oneOf(Object.values(d.i)),plural:a().string,singular:a().string}))},g.defaultProps={isLoading:!0,items:[]};const y=g},95364:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(15671),i=t(43144),o=t(60136),a=t(82963),l=t(61120),c=t(96985),u=t.n(c),s=t(45697),v=t.n(s),p=t(47173),d=t(80236),f=t(92607);var m=function(e){(0,o.Z)(s,e);var n,t,c=(n=s,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(n);if(t){var i=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,a.Z)(this,e)});function s(e){var n;return(0,r.Z)(this,s),(n=c.call(this,e)).state={},n}return(0,i.Z)(s,[{key:"render",value:function(){var e=this,n=this.props,t=n.title,r=n.isOpen,i=n.onCancel,o=n.onSubmit,a=n.ariaLabel,l=n.modalOuiaId,c=n.cancelOuiaId,s=n.confirmOuiaId,v=n.inputOuiaId,m=this.state.value;return u().createElement(d.u,{variant:"small",title:t,className:"ins-c-inventory__detail--edit","aria-label":a?"".concat(a," - modal"):"input modal",ouiaId:l,isOpen:r,onClose:function(e){return i(e)},actions:[u().createElement(p.zx,{key:"cancel","data-action":"cancel",variant:"secondary",onClick:i,ouiaId:c},"Cancel"),u().createElement(p.zx,{key:"confirm","data-action":"confirm",variant:"primary",onClick:function(){return o(e.state.value)},ouiaId:s},"Save")]},u().createElement(f.oi,{value:m,type:"text",ouiaId:v,onChange:function(n){return e.setState({value:n})},"aria-label":a}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.isOpen?void 0!==n.value?null:{value:e.value||""}:{value:void 0}}}]),s}(c.Component);m.propTypes={title:v().string,isOpen:v().bool,onCancel:v().func,onSubmit:v().func,ariaLabel:v().string,modalOuiaId:v().string,cancelOuiaId:v().string,confirmOuiaId:v().string,inputOuiaId:v().string,value:v().string},m.defaultProps={onCancel:function(){},onSubmit:function(){},isOpen:!1,title:"",ariaLabel:"input text"}},67782:(e,n,t)=>{t.d(n,{Ys:()=>l,d0:()=>c,Cx:()=>u,qY:()=>s,qr:()=>v,fZ:()=>p});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){try{return JSON.parse(e)}catch(t){return(0,r.Z)({},n,e)}}var l=function(){var e,n,t,r,i,l,c,u,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=s.number_of_cpus,p=s.number_of_sockets,d=s.cores_per_socket,f=s.ramSize,m=s.disk_devices,g=s.sap_sids,y=s.cpu_flags,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=h.facts;return{cpuNumber:v||(null==b||null===(e=b.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:p||(null==b||null===(n=b.rhsm)||void 0===n?void 0:n.CPU_SOCKETS),coresPerSocket:d||(null==b||null===(t=b.rhsm)||void 0===t?void 0:t.CPU_CORES)&&(null==b||null===(r=b.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==b||null===(i=b.rhsm)||void 0===i?void 0:i.CPU_CORES,10)/Number(null==b||null===(l=b.rhsm)||void 0===l?void 0:l.CPU_SOCKETS,10),ramSize:f||(null==b||null===(c=b.rhsm)||void 0===c?void 0:c.MEMORY)&&"".concat(null==b||null===(u=b.rhsm)||void 0===u?void 0:u.MEMORY," GB"),storage:m&&m.map((function(e){var n=e.device,t=e.label,r=e.mount_point,i=e.options,l=e.type;return o(o(o(o({},n&&a(n,"device")),{},{label:t},r&&a(r,"mountpoint")),i&&a(i,"options")),l&&a(l,"mounttype"))})),sapIds:g,cpuFlags:y}},c=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.arch,r=n.operating_system,i=n.os_kernel_version,o=n.last_boot_time,a=n.kernel_modules,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=l.facts;return{release:r,kernelRelease:i,architecture:t||(null==c||null===(e=c.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:a}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.bios_vendor,t=e.bios_version,r=e.bios_release_date;return{vendor:n,version:t,releaseDate:r}},s=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.infrastructure_type,i=t.infrastructure_vendor,o=t.network,a=void 0===o?{}:o,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=l.facts;return{type:r||void 0!==(null==c||null===(e=c.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=c&&null!==(n=c.rhsm)&&void 0!==n&&n.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:i,ipv4:a.ipv4,ipv6:a.ipv6,nics:a.interfaces}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.installed_packages,t=e.enabled_services,r=e.running_processes,i=e.repositories;return{packages:n,services:t,processes:r,repositories:i}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.insights_client_version,t=e.insights_egg_version;return{client:n,egg:t}}},58061:(e,n,t)=>{t.d(n,{Pv:()=>p,Ew:()=>d,J_:()=>f,ey:()=>m,FX:()=>g,Jr:()=>y,x7:()=>h});var r=t(71002),i=t(45987),o=t(4942),a=t(29439),l=t(45697),c=t.n(l);function u(e){var n=function(e,n){if("object"!==(0,r.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n);if("object"!==(0,r.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,r.Z)(n)?n:String(n)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e,n){var t=n.split("/"),r=(0,a.Z)(t,2),i=r[0],o=r[1];o||(o=i,i=null);var l=o.split("="),c=(0,a.Z)(l,2),u=c[0],s=c[1],v=void 0===s?null:s,p=e.findIndex((function(e){return e.category===i})),d=e[p]||{category:i,key:i,type:"tags",values:[]};return d.values.push({name:"".concat(u).concat(v?"=".concat(v):""),key:"".concat(u).concat(v?"=".concat(v):""),tagKey:u,value:v,group:{label:i,value:i,type:"checkbox"}}),e[p]||e.push(d),e},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.slice((n.page-1)*n.perPage,n.page*n.perPage)},f=function(e){return!(isNaN(e)&&isNaN(Date.parse(e)))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter((function(e){return 0===Object.values(n).length||Object.values(n).every((function(n){var t=e[n.key]&&(e[n.key].sortValue||e[n.key]);return t&&(Array.isArray(n.value)?n.value.includes(t):-1!==t.toLocaleLowerCase().indexOf(n.value.toLocaleLowerCase()))}))}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return n.map((function(n,i){var o=n.index||i,a=e[o]&&(e[o].title||e[o]);return{value:String(o),label:a,type:n.type||"text",filterValues:v({id:n.id||"".concat(a,"-").concat(o),onChange:function(e,n){return r(o,n,a)},value:t[o]&&t[o].value},n.options&&{items:n.options})}}))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n)return{};var r=e.key,a=t[r],l=(0,i.Z)(t,[r].map(u)),c=a&&Array.isArray(a.value)&&a.value.filter((function(n){return!e.chips.find((function(e){return e.name===n}))})),s=a&&Array.isArray(a.value)&&c&&c.length>0?(0,o.Z)({},e.key,v(v({},a),{},{value:c})):{};return v(v({},l),s)},h=c().shape({title:c().node,value:c().node,singular:c().node,plural:c().node,onClick:c().func})}}]);