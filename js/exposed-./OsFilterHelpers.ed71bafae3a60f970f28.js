(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3197],{98436:(e,t,r)=>{"use strict";r.d(t,{CR:()=>h,DJ:()=>w,cC:()=>g,gk:()=>S,n4:()=>O,pW:()=>m,vb:()=>j});var n=r(45987),o=r(29439),a=r(4942),i=r(36968),u=r.n(i),l=r(57557),c=r.n(l),s=r(66604),v=r.n(s),p=r(81249),f=r(13784),d=["label"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e,t){return u()(e,[t,t],Object.values(y({},e[t])).filter((function(e){return e!==t})).every(Boolean))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(void 0===t?e:t).reduce((function(t,r){var n=r.split("."),a=(0,o.Z)(n,1)[0];return u()(t,[a,r],e.includes(r)),g(t,a),t}),{})},O=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?(0,p.rcompare)((0,p.coerce)(e),(0,p.coerce)(t)):(0,p.compare)((0,p.coerce)(e),(0,p.coerce)(t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.values(e).reduce((function(e,t){return Object.entries(t).forEach((function(t){var r=(0,o.Z)(t,2),n=r[0];return r[1]&&n.match(/[0-9]+.[0-9]+/)&&e.push(n)})),e}),[])},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,label:"RHEL "+o,value:o,type:"checkbox",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{}));return t.sort((function(e,t){return O(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return O(e.value,t.value,!1)})),e[1]}))},w=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=m(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),r=e.filter((function(e){var r=e.value;return t.includes(r)})).map((function(e){return y({name:e.label},(0,n.Z)(e,d))}));return(null==t?void 0:t.length)>0?[{category:"Operating System",type:f.vi,chips:r}]:[]},S=function(e,t,r,n){var o=Object.assign({},t),a=o[r.value][n.value],i=r.value;return n.value===i?o[i]=v()(o[i],(function(){return a})):o[i][i]=Object.values(c()(o[i],i)).every(Boolean),o}},13784:(e,t,r)=>{"use strict";r.d(t,{A2:()=>P,Dx:()=>D,FW:()=>_,Gw:()=>A,Gy:()=>j,Ih:()=>d,KS:()=>G,Kq:()=>h,Nu:()=>C,OG:()=>w,SM:()=>O,SQ:()=>E,Tk:()=>Z,UC:()=>c,WN:()=>x,WS:()=>y,X4:()=>m,YQ:()=>W,cE:()=>b,cQ:()=>k,cf:()=>I,e2:()=>g,h3:()=>V,jv:()=>F,m5:()=>s,p9:()=>p,qy:()=>S,ud:()=>l,vi:()=>f,xb:()=>M,yc:()=>v});var n=r(29439),o=r(4942),a=r(92950);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="hostname_or_id",c="textual",s="tags",v="staleness",p="registered_with",f="operating_system",d="rhc_client_id",b="system_update_method",y="last_seen",g="group_name",h="puptoo",O="rhsm-conduit",m="rhsm-system-profile-bridge",j="vulnerabilities",w="advisor",S="patch";function x(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}var F=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"},{label:"Unknown",value:"unknown"}],k=(new Date).toISOString(),P=[{value:{updatedStart:x(1),updatedEnd:k,mark:"last24"},label:"Within the last 24 hours"},{value:{updatedEnd:x(1),mark:"24more"},label:"More than 1 day ago"},{value:{updatedEnd:x(7),mark:"7more"},label:"More than 7 days ago"},{value:{updatedEnd:x(15),mark:"15more"},label:"More than 15 days ago"},{value:{updatedEnd:x(30),mark:"30more"},label:"More than 30 days ago"},{value:{mark:"custom"},label:"Custom"}],A=[{label:"insights-client",value:"puptoo",idName:"Insights id",idValue:"insights_id"},{label:"subscription-manager",value:"rhsm-conduit",idName:"Subscription manager id",idValue:"subscription_manager_id"},{label:"Satellite/Discovery",value:"yupana"},{label:"insights-client not connected",value:"!puptoo"}],_=(0,a.createContext)({}),D=[{label:"Active",value:"not_nil"},{label:"Inactive",value:"nil"}],E=[{label:"yum",value:"yum"},{label:"dnf",value:"dnf"},{label:"rpm-ostree",value:"rpm-ostree"}];function Z(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(t,r){return u(u({},t),{},(0,o.Z)({},r.key,r[e].reduce((function(e,t){return u(u({},e),{},(0,o.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var C=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),a=r[0],i=r[1],l=r[2];return u(u({},e),{},(0,o.Z)({},l,u(u({},e[(null==l?void 0:l.title)||l]),{},(0,o.Z)({},(null==a?void 0:a.title)||a,{isSelected:!0,group:{value:(null==l?void 0:l.title)||l,label:(null==l?void 0:l.title)||l},item:{value:(null==a?void 0:a.title)||a,meta:{tag:{key:(null==a?void 0:a.title)||a,value:(null==i?void 0:i.title)||i}}}}))))}),{})};function W(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){if(t.value===l)return u(u({},e),{},{textFilter:t.filter});if("tagFilters"in t)return u(u({},e),{},{tagFilters:Z(t.tagFilters)});var r=["staleFilter","registeredWithFilter","osFilter","rhcdFilter","updateMethodFilter","lastSeenFilter","hostGroupFilter",""].find((function(e){return Object.keys(t).includes(e)}));return u(u({},e),r&&(0,o.Z)({},r,t[r]))}),{textFilter:"",tagFilters:{}})}var G=function(e,t){return e.payload.then((function(e){return t(),e})),e},M=function(e){return!e||0===(null==e?void 0:e.length)},V=function(e,t,r,n,o,a,i,u,l){return[!M(e)&&{staleFilter:Array.isArray(e)?e:[e]},!M(r)&&{tagFilters:Array.isArray(r)?r:[r]},!M(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!M(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!M(e)||!M(r)||!M(n))&&M(t)&&{registeredWithFilter:[]},(!M(t)||!M(r)||!M(n))&&M(e)&&{staleFilter:[]},!M(o)&&{osFilter:Array.isArray(o)?o:[o]},!M(a)&&{rhcdFilter:Array.isArray(a)?a:[a]},!M(l)&&{lastSeenFilter:Array.isArray(l)?P.filter((function(e){return e.value.mark===l[0]}))[0].value:[l]},!M(i)&&{updateMethodFilter:Array.isArray(i)?i:[i]},!M(u)&&{hostGroupFilter:Array.isArray(u)?u:[u]}].filter(Boolean)},I=["fresh","stale","stale_warning","unknown"]},8141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{buildOSFilterChip:()=>a.DJ,buildOSFilterConfig:()=>c,compareVersions:()=>a.n4,getSelectedOsFilterVersions:()=>a.pW,groupOSFilterVersions:()=>a.vb,onOSFilterChange:()=>a.gk,toGroupSelection:()=>a.CR,toGroupSelectionValue:()=>l,updateGroupSelectionIdentifier:()=>a.cC});var n=r(4942),o=r(29439),a=r(98436);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){var r=t.split("."),a=(0,o.Z)(r,2),i=a[0],l=a[1];return e["".concat(i,".0")]=u(u({},e["".concat(i,".0")]||{}),{},(0,n.Z)({},"".concat(i,".").concat(l),!0)),e}),{})},c=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return u(u({},r),{},{label:"Operating System",value:"os-filter",type:"group",filterValues:{selected:r.value,onChange:function(e,t){return r.onChange(e,Object.entries(t).reduce((function(e,t){var r=(0,o.Z)(t,2),a=r[0],i=r[1];return u(u({},e),{},(0,n.Z)({},a,Object.fromEntries(Object.entries(i).filter((function(e){return!0===e[1]})))))}),{}))},groups:0===i.length?[{items:[{label:"No versions available"}]}]:(e=i,t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,noFilter:!0,label:"RHEL "+o,value:o+".0",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{})),t.sort((function(e,t){return(0,a.n4)(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return(0,a.n4)(e.value,t.value,!1)})),e[1]})))}})}},96874:e=>{e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},34865:(e,t,r)=>{var n=r(89465),o=r(77813),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var i=e[t];a.call(e,t)&&o(i,r)&&(void 0!==r||t in e)||n(e,t,r)}},3118:(e,t,r)=>{var n=r(13218),o=Object.create,a=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=a},10313:(e,t,r)=>{var n=r(13218),o=r(25726),a=r(33498),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return a(e);var t=o(e),r=[];for(var u in e)("constructor"!=u||!t&&i.call(e,u))&&r.push(u);return r}},10611:(e,t,r)=>{var n=r(34865),o=r(71811),a=r(65776),i=r(13218),u=r(40327);e.exports=function(e,t,r,l){if(!i(e))return e;for(var c=-1,s=(t=o(t,e)).length,v=s-1,p=e;null!=p&&++c<s;){var f=u(t[c]),d=r;if("__proto__"===f||"constructor"===f||"prototype"===f)return e;if(c!=v){var b=p[f];void 0===(d=l?l(b,f,p):void 0)&&(d=i(b)?b:a(t[c+1])?[]:{})}n(p,f,d),p=p[f]}return e}},56560:(e,t,r)=>{var n=r(75703),o=r(38777),a=r(6557),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=i},74318:(e,t,r)=>{var n=r(11149);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},64626:(e,t,r)=>{e=r.nmd(e);var n=r(55639),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o?n.Buffer:void 0,u=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=u?u(r):new e.constructor(r);return e.copy(n),n}},77133:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},278:e=>{e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},98363:(e,t,r)=>{var n=r(34865),o=r(89465);e.exports=function(e,t,r,a){var i=!r;r||(r={});for(var u=-1,l=t.length;++u<l;){var c=t[u],s=a?a(r[c],e[c],c,r,e):void 0;void 0===s&&(s=e[c]),i?o(r,c,s):n(r,c,s)}return r}},85924:(e,t,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);e.exports=n},38517:(e,t,r)=>{var n=r(3118),o=r(85924),a=r(25726);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:n(o(e))}},33498:e=>{e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},45357:(e,t,r)=>{var n=r(96874),o=Math.max;e.exports=function(e,t,r){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,u=o(a.length-t,0),l=Array(u);++i<u;)l[i]=a[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=a[i];return c[t]=r(l),n(e,this,c)}}},30061:(e,t,r)=>{var n=r(56560),o=r(21275)(n);e.exports=o},21275:e=>{var t=Date.now;e.exports=function(e){var r=0,n=0;return function(){var o=t(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},68630:(e,t,r)=>{var n=r(44239),o=r(85924),a=r(37005),i=Function.prototype,u=Object.prototype,l=i.toString,c=u.hasOwnProperty,s=l.call(Object);e.exports=function(e){if(!a(e)||"[object Object]"!=n(e))return!1;var t=o(e);if(null===t)return!0;var r=c.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==s}},81704:(e,t,r)=>{var n=r(14636),o=r(10313),a=r(98612);e.exports=function(e){return a(e)?n(e,!0):o(e)}},36968:(e,t,r)=>{var n=r(10611);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./OsFilterHelpers.753a984bb45f81b9b028abf26aa1297e.js.map