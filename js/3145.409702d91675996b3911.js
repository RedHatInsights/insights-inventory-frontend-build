(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3145,5697],{98436:(e,t,r)=>{"use strict";r.d(t,{CR:()=>h,DJ:()=>w,cC:()=>b,gk:()=>S,n4:()=>O,pW:()=>m,vb:()=>j});var n=r(45987),o=r(29439),a=r(4942),i=r(36968),l=r.n(i),u=r(57557),c=r.n(u),s=r(66604),v=r.n(s),p=r(81249),f=r(13784),d=["label"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e,t){return l()(e,[t,t],Object.values(y({},e[t])).filter((function(e){return e!==t})).every(Boolean))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(void 0===t?e:t).reduce((function(t,r){var n=r.split("."),a=(0,o.Z)(n,1)[0];return l()(t,[a,r],e.includes(r)),b(t,a),t}),{})},O=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r?(0,p.compare)((0,p.coerce)(e),(0,p.coerce)(t)):(0,p.rcompare)((0,p.coerce)(e),(0,p.coerce)(t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.values(e).reduce((function(e,t){return Object.entries(t).forEach((function(t){var r=(0,o.Z)(t,2),n=r[0];return r[1]&&n.match(/[0-9]+.[0-9]+/)&&e.push(n)})),e}),[])},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,label:"RHEL "+o,value:o,type:"checkbox",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{}));t.sort((function(e,t){return O(e[0],t[0],!1)}));var r=t.map((function(e){return e[1].items.sort((function(e,t){return O(e.value,t.value,!1)})),e[1]}));return r},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=m(e),o=t.filter((function(e){var t=e.value;return r.includes(t)})).map((function(e){return y({name:e.label},(0,n.Z)(e,d))}));return(null==r?void 0:r.length)>0?[{category:"Operating System",type:f.vi,chips:o}]:[]},S=function(e,t,r,n){var o=Object.assign({},t),a=o[r.value][n.value],i=r.value;return n.value===i?o[i]=v()(o[i],(function(){return a})):o[i][i]=Object.values(c()(o[i],i)).every(Boolean),o}},13784:(e,t,r)=>{"use strict";r.d(t,{A2:()=>S,Dx:()=>A,FW:()=>x,Gw:()=>P,Ih:()=>y,KS:()=>E,Mo:()=>T,Nu:()=>F,SQ:()=>k,Tk:()=>_,UC:()=>v,WN:()=>m,WS:()=>h,YQ:()=>D,cE:()=>b,cQ:()=>w,cf:()=>I,e2:()=>O,h3:()=>C,jv:()=>j,m5:()=>p,p9:()=>d,ud:()=>s,vi:()=>g,xb:()=>Z,yc:()=>f});var n=r(29439),o=r(4942),a=r(92950),i=r(95249),l=r(58061);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s="hostname_or_id",v="textual",p="tags",f="staleness",d="registered_with",g="operating_system",y="rhc_client_id",b="system_update_method",h="last_seen",O="host_group";function m(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}var j=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"},{label:"Unknown",value:"unknown"}],w=(new Date).toISOString(),S=[{value:{updatedStart:m(1),updatedEnd:w,mark:"last24"},label:"Within the last 24 hours"},{value:{updatedEnd:m(1),mark:"24more"},label:"More than 1 day ago"},{value:{updatedEnd:m(7),mark:"7more"},label:"More than 7 days ago"},{value:{updatedEnd:m(15),mark:"15more"},label:"More than 15 days ago"},{value:{updatedEnd:m(30),mark:"30more"},label:"More than 30 days ago"}],P=[{label:"insights-client",value:"puptoo",idName:"Insights id",idValue:"insights_id"},{label:"subscription-manager",value:"rhsm-conduit",idName:"Subscription manager id",idValue:"subscription_manager_id"},{label:"Satellite/Discovery",value:"yupana"},{label:"insights-client not connected",value:"!puptoo"}],x=(0,a.createContext)({}),A=[{label:"Active",value:"not_nil"},{label:"Inactive",value:"nil"}],k=[{label:"yum",value:"yum"},{label:"dnf",value:"dnf"},{label:"rpm-ostree",value:"rpm-ostree"}];function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return c(c({},e),{},(0,o.Z)({},r.key,r[t].reduce((function(e,t){return c(c({},e),{},(0,o.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var F=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),a=r[0],i=r[1],l=r[2];return c(c({},e),{},(0,o.Z)({},l,c(c({},e[(null==l?void 0:l.title)||l]),{},(0,o.Z)({},(null==a?void 0:a.title)||a,{isSelected:!0,group:{value:(null==l?void 0:l.title)||l,label:(null==l?void 0:l.title)||l},item:{value:(null==a?void 0:a.title)||a,meta:{tag:{key:(null==a?void 0:a.title)||a,value:(null==i?void 0:i.title)||i}}}}))))}),{})};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){if(t.value===s)return c(c({},e),{},{textFilter:t.filter});if("tagFilters"in t)return c(c({},e),{},{tagFilters:_(t.tagFilters)});var r=["staleFilter","registeredWithFilter","osFilter","rhcdFilter","updateMethodFilter","lastSeenFilter",""].find((function(e){return Object.keys(t).includes(e)}));return c(c({},e),r&&(0,o.Z)({},r,t[r]))}),{textFilter:"",tagFilters:{}})}var E=function(e,t){return e.payload.then((function(e){return t(),e})),e},Z=function(e){return!e||0===(null==e?void 0:e.length)},C=function(e,t,r,n,o,a,i,l,u){return[!Z(e)&&{staleFilter:Array.isArray(e)?e:[e]},!Z(r)&&{tagFilters:Array.isArray(r)?r:[r]},!Z(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!Z(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!Z(e)||!Z(r)||!Z(n))&&Z(t)&&{registeredWithFilter:[]},(!Z(t)||!Z(r)||!Z(n))&&Z(e)&&{staleFilter:[]},!Z(o)&&{osFilter:Array.isArray(o)?o:[o]},!Z(a)&&{rhcdFilter:Array.isArray(a)?a:[a]},!Z(u)&&{lastSeenFilter:Array.isArray(u)?S.filter((function(e){return e.value.mark===u[0]}))[0].value:[u]},!Z(i)&&{updateMethodFilter:Array.isArray(i)?i:[i]},!Z(l)&&{hostGroupFilter:Array.isArray(l)?l:[l]}].filter(Boolean)},T=function(){return(0,i.c$)(l.tS).hasAccess},I=["fresh","stale","stale_warning","unknown"]},58061:(e,t,r)=>{"use strict";r.d(t,{Ew:()=>d,FX:()=>b,J_:()=>g,Jr:()=>h,Qw:()=>j,ey:()=>y,hu:()=>w,tS:()=>m,x7:()=>O});var n=r(71002),o=r(45987),a=r(4942),i=r(29439),l=r(45697),u=r.n(l),c=r(13784);function s(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t);if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t){var r=t.split("/"),n=(0,i.Z)(r,2),o=n[0],a=n[1];a||(a=o,o=null);var l=a.split("="),u=(0,i.Z)(l,2),c=u[0],s=u[1],v=void 0===s?null:s,p=e.findIndex((function(e){return e.category===o})),f=e[p]||{category:o,key:o,type:"tags",values:[]};return f.values.push({name:"".concat(c).concat(v?"=".concat(v):""),key:"".concat(c).concat(v?"=".concat(v):""),tagKey:c,value:v,group:{label:o,value:o,type:"checkbox"}}),e[p]||e.push(f),e},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.slice((t.page-1)*t.perPage,t.page*t.perPage)},g=function(e){return!(isNaN(e)&&isNaN(Date.parse(e)))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter((function(e){return 0===Object.values(t).length||Object.values(t).every((function(t){var r=e[t.key]&&(e[t.key].sortValue||e[t.key]);return r&&(Array.isArray(t.value)?t.value.includes(r):-1!==r.toLocaleLowerCase().indexOf(t.value.toLocaleLowerCase()))}))}))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return t.map((function(t,o){var a=t.index||o,i=e[a]&&(e[a].title||e[a]);return{value:String(a),label:i,type:t.type||"text",filterValues:p({id:t.id||"".concat(i,"-").concat(a),onChange:function(e,t){return n(a,t,i)},value:r[a]&&r[a].value},t.options&&{items:t.options})}}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t)return{};var n=e.key,i=r[n],l=(0,o.Z)(r,[n].map(s)),u=i&&Array.isArray(i.value)&&i.value.filter((function(t){return!e.chips.find((function(e){return e.name===t}))})),c=i&&Array.isArray(i.value)&&u&&u.length>0?(0,a.Z)({},e.key,p(p({},i),{},{value:u})):{};return p(p({},l),c)},O=u().shape({title:u().node,value:u().node,singular:u().node,plural:u().node,onClick:u().func}),m=["inventory:*:*","inventory:hosts:write","inventory:*:write"],j=function(){var e,t,r,n,o,a=new URLSearchParams(location.search),i=a.getAll("status"),l=a.getAll("source"),u=a.getAll("hostname_or_id"),s=null===(e=a.getAll("tags"))||void 0===e||null===(t=e[0])||void 0===t||null===(r=t.split)||void 0===r||null===(n=(o=r.call(t,",")).reduce)||void 0===n?void 0:n.call(o,f,[]),v=a.getAll("operating_system"),p=a.getAll(c.Ih),d=a.getAll(c.cE),g=a.getAll(c.e2),y=a.getAll("page"),b=a.getAll("per_page");return{status:i,source:l,tagsFilter:s,filterbyName:u,operatingSystem:v,rhcdFilter:p,updateMethodFilter:d,lastSeenFilter:a.getAll("last_seen"),page:y,perPage:b,groupHostsFilter:g}},w=50},8141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{buildOSFilterChip:()=>a.DJ,buildOSFilterConfig:()=>s,compareVersions:()=>a.n4,getSelectedOsFilterVersions:()=>a.pW,groupOSFilterVersions:()=>a.vb,onOSFilterChange:()=>a.gk,toGroupSelection:()=>a.CR,toGroupSelectionValue:()=>u,updateGroupSelectionIdentifier:()=>a.cC});var n=r(4942),o=r(29439),a=r(98436);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){var r=t.split("."),a=(0,o.Z)(r,2),i=a[0],u=a[1];return e["".concat(i,".0")]=l(l({},e["".concat(i,".0")]||{}),{},(0,n.Z)({},"".concat(i,".").concat(u),!0)),e}),{})},c=function(e){var t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,noFilter:!0,label:"RHEL "+o,value:o+".0",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{}));return t.sort((function(e,t){return(0,a.n4)(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return(0,a.n4)(e.value,t.value,!1)})),e[1]}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return l(l({},e),{},{label:"Operating System",value:"os-filter",type:"group",filterValues:{selected:e.value,onChange:function(t,r){return e.onChange(t,Object.entries(r).reduce((function(e,t){var r=(0,o.Z)(t,2),a=r[0],i=r[1];return l(l({},e),{},(0,n.Z)({},a,Object.fromEntries(Object.entries(i).filter((function(e){return!0===e[1]})))))}),{}))},groups:0===t.length?[{items:[{label:"No versions available"}]}]:c(t)}})}},96874:e=>{e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},34865:(e,t,r)=>{var n=r(89465),o=r(77813),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var i=e[t];a.call(e,t)&&o(i,r)&&(void 0!==r||t in e)||n(e,t,r)}},3118:(e,t,r)=>{var n=r(13218),o=Object.create,a=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=a},10313:(e,t,r)=>{var n=r(13218),o=r(25726),a=r(33498),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return a(e);var t=o(e),r=[];for(var l in e)("constructor"!=l||!t&&i.call(e,l))&&r.push(l);return r}},10611:(e,t,r)=>{var n=r(34865),o=r(71811),a=r(65776),i=r(13218),l=r(40327);e.exports=function(e,t,r,u){if(!i(e))return e;for(var c=-1,s=(t=o(t,e)).length,v=s-1,p=e;null!=p&&++c<s;){var f=l(t[c]),d=r;if("__proto__"===f||"constructor"===f||"prototype"===f)return e;if(c!=v){var g=p[f];void 0===(d=u?u(g,f,p):void 0)&&(d=i(g)?g:a(t[c+1])?[]:{})}n(p,f,d),p=p[f]}return e}},56560:(e,t,r)=>{var n=r(75703),o=r(38777),a=r(6557),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=i},74318:(e,t,r)=>{var n=r(11149);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},64626:(e,t,r)=>{e=r.nmd(e);var n=r(55639),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o?n.Buffer:void 0,l=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=l?l(r):new e.constructor(r);return e.copy(n),n}},77133:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},278:e=>{e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},98363:(e,t,r)=>{var n=r(34865),o=r(89465);e.exports=function(e,t,r,a){var i=!r;r||(r={});for(var l=-1,u=t.length;++l<u;){var c=t[l],s=a?a(r[c],e[c],c,r,e):void 0;void 0===s&&(s=e[c]),i?o(r,c,s):n(r,c,s)}return r}},85924:(e,t,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);e.exports=n},38517:(e,t,r)=>{var n=r(3118),o=r(85924),a=r(25726);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:n(o(e))}},33498:e=>{e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},45357:(e,t,r)=>{var n=r(96874),o=Math.max;e.exports=function(e,t,r){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,l=o(a.length-t,0),u=Array(l);++i<l;)u[i]=a[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=a[i];return c[t]=r(u),n(e,this,c)}}},30061:(e,t,r)=>{var n=r(56560),o=r(21275)(n);e.exports=o},21275:e=>{var t=Date.now;e.exports=function(e){var r=0,n=0;return function(){var o=t(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},68630:(e,t,r)=>{var n=r(44239),o=r(85924),a=r(37005),i=Function.prototype,l=Object.prototype,u=i.toString,c=l.hasOwnProperty,s=u.call(Object);e.exports=function(e){if(!a(e)||"[object Object]"!=n(e))return!1;var t=o(e);if(null===t)return!0;var r=c.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==s}},81704:(e,t,r)=>{var n=r(14636),o=r(10313),a=r(98612);e.exports=function(e){return a(e)?n(e,!0):o(e)}},36968:(e,t,r)=>{var n=r(10611);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},92703:(e,t,r)=>{"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=../sourcemaps/3145.f631898643db526237b89951126f4c0b.js.map