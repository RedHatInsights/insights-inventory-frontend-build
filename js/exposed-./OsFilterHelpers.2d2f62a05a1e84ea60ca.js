(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3197],{98436:(e,t,r)=>{"use strict";r.d(t,{CR:()=>g,DJ:()=>w,cC:()=>h,gk:()=>S,n4:()=>m,pW:()=>O,vb:()=>j});var n=r(45987),o=r(29439),i=r(4942),u=r(36968),a=r.n(u),l=r(57557),c=r.n(l),s=r(66604),f=r.n(s),v=r(81249),p=r(13784),y=["label"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e,t,r){return a()(e,[t,t],Object.values(b({},e[t])).filter((function(e){return e!==r})).every(Boolean))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(void 0===t?e:t).reduce((function(t,r){var n,i=(0,o.Z)(r.value,1)[0],u="".concat(r.osName," ").concat(i);return a()(t,["".concat(u),r.value],(n=r,e.some((function(e){var t=e.value,r=e.osName;return t===n.value&&r===n.osName}))),Object),h(t,u,i),t}),{})},m=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?(0,v.rcompare)((0,v.coerce)(e),(0,v.coerce)(t)):(0,v.compare)((0,v.coerce)(e),(0,v.coerce)(t))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=(0,o.Z)(t,2),n=r[0],i=r[1];return Object.entries(i).forEach((function(t){var r=(0,o.Z)(t,2),i=r[0];if(r[1]&&i.match(/[0-9]+.[0-9]+/)){var u=n.split(" ").slice(0,-1).join(" ");e.push({osName:u,osGroup:n,value:i})}})),e}),[])},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.osName,o=t.value,i=o.split(".")[0],u="".concat(n," ").concat(i);return void 0===e[u]&&(e[u]={groupSelectable:!0,label:u,value:u,type:"checkbox",items:[]}),e[u].items.push({label:r,value:o,type:"checkbox"}),e}),{}));return t.sort((function(e,t){return m(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return m(e.value,t.value,!1)})),e[1]}))},w=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=O(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),r=e.filter((function(e){var r=e.groupLabel,n=e.value;return t.some((function(e){return e.value===n&&e.osGroup===r}))})).map((function(e){return b({name:e.label},(0,n.Z)(e,y))}));return(null==t?void 0:t.length)>0?[{category:"Operating System",type:p.vi,chips:r}]:[]},S=function(e,t,r,n){var o=Object.assign({},t),i=o[r.value][n.value],u=r.value;return n.value===r.value?o[u]=f()(o[u],(function(){return i})):o[u][u]=Object.values(c()(o[u],[u])).every(Boolean),o}},13784:(e,t,r)=>{"use strict";r.d(t,{A2:()=>_,Dx:()=>E,FW:()=>D,Gw:()=>T,Gy:()=>j,Ih:()=>y,KS:()=>M,Kq:()=>g,Nu:()=>N,OG:()=>w,Ph:()=>Z,Re:()=>k,SM:()=>m,SQ:()=>C,Tk:()=>G,UC:()=>c,WN:()=>F,WS:()=>b,X4:()=>O,YQ:()=>I,cE:()=>d,cQ:()=>A,cf:()=>V,e2:()=>h,h3:()=>L,jv:()=>P,m5:()=>s,p9:()=>v,qy:()=>S,sO:()=>B,ud:()=>l,vi:()=>p,vo:()=>x,xb:()=>W,yc:()=>f});var n=r(29439),o=r(4942),i=r(92950);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="hostname_or_id",c="textual",s="tags",f="staleness",v="registered_with",p="operating_system",y="rhc_client_id",d="system_update_method",b="last_seen",h="group_name",g="puptoo",m="rhsm-conduit",O="rhsm-system-profile-bridge",j="vulnerabilities",w="advisor",S="patch",x="/api/inventory/v1/hosts",Z="?filter[system_profile][host_type]=edge&page=1&per_page=1",k="?page=1&per_page=1";function F(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}var P=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"},{label:"Unknown",value:"unknown"}],A=(new Date).toISOString(),_=[{value:{updatedStart:F(1),updatedEnd:A,mark:"last24"},label:"Within the last 24 hours"},{value:{updatedEnd:F(1),mark:"24more"},label:"More than 1 day ago"},{value:{updatedEnd:F(7),mark:"7more"},label:"More than 7 days ago"},{value:{updatedEnd:F(15),mark:"15more"},label:"More than 15 days ago"},{value:{updatedEnd:F(30),mark:"30more"},label:"More than 30 days ago"},{value:{mark:"custom"},label:"Custom"}],T=[{label:"insights-client",value:"puptoo",idName:"Insights id",idValue:"insights_id"},{label:"subscription-manager",value:"rhsm-conduit",idName:"Subscription manager id",idValue:"subscription_manager_id"},{label:"Satellite/Discovery",value:"yupana"},{label:"insights-client not connected",value:"!puptoo"}],D=(0,i.createContext)({}),E=[{label:"Active",value:"not_nil"},{label:"Inactive",value:"nil"}],C=[{label:"yum",value:"yum"},{label:"dnf",value:"dnf"},{label:"rpm-ostree",value:"rpm-ostree"}];function G(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(t,r){return a(a({},t),{},(0,o.Z)({},r.key,r[e].reduce((function(e,t){return a(a({},e),{},(0,o.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var N=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),i=r[0],u=r[1],l=r[2];return a(a({},e),{},(0,o.Z)({},l,a(a({},e[(null==l?void 0:l.title)||l]),{},(0,o.Z)({},(null==i?void 0:i.title)||i,{isSelected:!0,group:{value:(null==l?void 0:l.title)||l,label:(null==l?void 0:l.title)||l},item:{value:(null==i?void 0:i.title)||i,meta:{tag:{key:(null==i?void 0:i.title)||i,value:(null==u?void 0:u.title)||u}}}}))))}),{})};function I(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){if(t.value===l)return a(a({},e),{},{textFilter:t.filter});if("tagFilters"in t)return a(a({},e),{},{tagFilters:G(t.tagFilters)});var r=["staleFilter","registeredWithFilter","osFilter","rhcdFilter","updateMethodFilter","lastSeenFilter","hostGroupFilter",""].find((function(e){return Object.keys(t).includes(e)}));return a(a({},e),r&&(0,o.Z)({},r,t[r]))}),{textFilter:"",tagFilters:{}})}var M=function(e,t){return e.payload.then((function(e){return t(),e})),e},W=function(e){return!e||0===(null==e?void 0:e.length)},L=function(e,t,r,n,o,i,u,a,l){return[!W(e)&&{staleFilter:Array.isArray(e)?e:[e]},!W(r)&&{tagFilters:Array.isArray(r)?r:[r]},!W(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!W(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!W(e)||!W(r)||!W(n))&&W(t)&&{registeredWithFilter:[]},(!W(t)||!W(r)||!W(n))&&W(e)&&{staleFilter:[]},!W(o)&&{osFilter:Array.isArray(o)?o:[o]},!W(i)&&{rhcdFilter:Array.isArray(i)?i:[i]},!W(l)&&{lastSeenFilter:Array.isArray(l)?_.filter((function(e){return e.value.mark===l[0]}))[0].value:[l]},!W(u)&&{updateMethodFilter:Array.isArray(u)?u:[u]},!W(a)&&{hostGroupFilter:Array.isArray(a)?a:[a]}].filter(Boolean)},V=["fresh","stale","stale_warning","unknown"],B={conventional:{key:"conventional",url:""},immutable:{key:"immutable",url:"/manage-edge-inventory"}}},8141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{buildOSFilterChip:()=>i.DJ,buildOSFilterConfig:()=>c,compareVersions:()=>i.n4,getSelectedOsFilterVersions:()=>i.pW,groupOSFilterVersions:()=>i.vb,onOSFilterChange:()=>i.gk,toGroupSelection:()=>i.CR,toGroupSelectionValue:()=>l,updateGroupSelectionIdentifier:()=>i.cC});var n=r(4942),o=r(29439),i=r(98436);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){var r=t.split("."),i=(0,o.Z)(r,2),u=i[0],l=i[1];return e["".concat(u,".0")]=a(a({},e["".concat(u,".0")]||{}),{},(0,n.Z)({},"".concat(u,".").concat(l),!0)),e}),{})},c=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a(a({},r),{},{label:"Operating System",value:"os-filter",type:"group",filterValues:{selected:r.value,onChange:function(e,t){return r.onChange(e,Object.entries(t).reduce((function(e,t){var r=(0,o.Z)(t,2),i=r[0],u=r[1];return a(a({},e),{},(0,n.Z)({},i,Object.fromEntries(Object.entries(u).filter((function(e){return!0===e[1]})))))}),{}))},groups:0===u.length?[{items:[{label:"No versions available"}]}]:(e=u,t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,noFilter:!0,label:"RHEL "+o,value:o+".0",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{})),t.sort((function(e,t){return(0,i.n4)(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return(0,i.n4)(e.value,t.value,!1)})),e[1]})))}})}},96874:e=>{e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},34865:(e,t,r)=>{var n=r(89465),o=r(77813),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var u=e[t];i.call(e,t)&&o(u,r)&&(void 0!==r||t in e)||n(e,t,r)}},3118:(e,t,r)=>{var n=r(13218),o=Object.create,i=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=i},10313:(e,t,r)=>{var n=r(13218),o=r(25726),i=r(33498),u=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return i(e);var t=o(e),r=[];for(var a in e)("constructor"!=a||!t&&u.call(e,a))&&r.push(a);return r}},10611:(e,t,r)=>{var n=r(34865),o=r(71811),i=r(65776),u=r(13218),a=r(40327);e.exports=function(e,t,r,l){if(!u(e))return e;for(var c=-1,s=(t=o(t,e)).length,f=s-1,v=e;null!=v&&++c<s;){var p=a(t[c]),y=r;if("__proto__"===p||"constructor"===p||"prototype"===p)return e;if(c!=f){var d=v[p];void 0===(y=l?l(d,p,v):void 0)&&(y=u(d)?d:i(t[c+1])?[]:{})}n(v,p,y),v=v[p]}return e}},56560:(e,t,r)=>{var n=r(75703),o=r(38777),i=r(6557),u=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:i;e.exports=u},74318:(e,t,r)=>{var n=r(11149);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},64626:(e,t,r)=>{e=r.nmd(e);var n=r(55639),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,u=i&&i.exports===o?n.Buffer:void 0,a=u?u.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=a?a(r):new e.constructor(r);return e.copy(n),n}},77133:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},278:e=>{e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},98363:(e,t,r)=>{var n=r(34865),o=r(89465);e.exports=function(e,t,r,i){var u=!r;r||(r={});for(var a=-1,l=t.length;++a<l;){var c=t[a],s=i?i(r[c],e[c],c,r,e):void 0;void 0===s&&(s=e[c]),u?o(r,c,s):n(r,c,s)}return r}},85924:(e,t,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);e.exports=n},38517:(e,t,r)=>{var n=r(3118),o=r(85924),i=r(25726);e.exports=function(e){return"function"!=typeof e.constructor||i(e)?{}:n(o(e))}},33498:e=>{e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},45357:(e,t,r)=>{var n=r(96874),o=Math.max;e.exports=function(e,t,r){return t=o(void 0===t?e.length-1:t,0),function(){for(var i=arguments,u=-1,a=o(i.length-t,0),l=Array(a);++u<a;)l[u]=i[t+u];u=-1;for(var c=Array(t+1);++u<t;)c[u]=i[u];return c[t]=r(l),n(e,this,c)}}},30061:(e,t,r)=>{var n=r(56560),o=r(21275)(n);e.exports=o},21275:e=>{var t=Date.now;e.exports=function(e){var r=0,n=0;return function(){var o=t(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},68630:(e,t,r)=>{var n=r(44239),o=r(85924),i=r(37005),u=Function.prototype,a=Object.prototype,l=u.toString,c=a.hasOwnProperty,s=l.call(Object);e.exports=function(e){if(!i(e)||"[object Object]"!=n(e))return!1;var t=o(e);if(null===t)return!0;var r=c.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==s}},81704:(e,t,r)=>{var n=r(14636),o=r(10313),i=r(98612);e.exports=function(e){return i(e)?n(e,!0):o(e)}},36968:(e,t,r)=>{var n=r(10611);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},34155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,l=[],c=!1,s=-1;function f(){c&&a&&(c=!1,a.length?l=a.concat(l):s=-1,l.length&&v())}function v(){if(!c){var e=u(f);c=!0;for(var t=l.length;t;){for(a=l,l=[];++s<t;)a&&a[s].run();s=-1,t=l.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||u(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},30907:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>n})},83878:(e,t,r)=>{"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,{Z:()=>n})},4942:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(49142);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},25267:(e,t,r)=>{"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:()=>n})},29439:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(83878),o=r(40181),i=r(25267);function u(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,t)||(0,o.Z)(e,t)||(0,i.Z)()}},49142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(71002);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(t)?t:String(t)}},71002:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})},40181:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(30907);function o(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./OsFilterHelpers.0fb701f0fc1a33f279287ae8a5a1b7fb.js.map