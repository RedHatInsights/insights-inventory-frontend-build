"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[6872],{98436:(e,t,r)=>{r.d(t,{VU:()=>s,Zf:()=>f,VT:()=>v});var n=r(45987),o=r(4942),i=r(29439),u=r(73880),c=["label"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return e.reduce((function(e,t){var r=t.split("."),n=(0,i.Z)(r,2),u=n[0],c=n[1];return e["".concat(u,".0")]=l(l({},e["".concat(u,".0")]||{}),{},(0,o.Z)({},"".concat(u,".").concat(c),!0)),e}),{})},p=function(e){return e.filter((function(e){return"0"===e.value.split(".")[1]})).map((function(t){return l(l({},t),{},{groupSelectable:!0,items:e.filter((function(e){var r=e.value.split("."),n=(0,i.Z)(r,2),o=n[0],u=n[1];return o===t.value.split(".")[0]&&"0"!==u})).sort((function(e){return e.value.split(".")[1]}))})}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(l({},e),{},{label:"Operating System",value:"os-filter",type:"group",filterValues:{selected:e.value,onChange:e.onChange,groups:p(u.operatingSystems).map((function(e){var t;return l(l({},e),{},{type:"checkbox",items:null===(t=e.items)||void 0===t?void 0:t.map((function(e){return l(l({},e),{},{type:"checkbox"})}))})}))}})},v=function(e){var t=Object.values(e||{}).flatMap((function(e){return Object.keys(e)}));return(null==t?void 0:t.length)>0?[{category:"Operating System",type:u.OS_CHIP,chips:u.operatingSystems.filter((function(e){var r=e.value;return t.some((function(e){return e===r}))})).map((function(e){return l({name:e.label},(0,n.Z)(e,c))}))}]:[]}},8141:(e,t,r)=>{r.r(t),r.d(t,{toGroupSelectionValue:()=>n.VU,buildOSFilterConfig:()=>n.Zf,buildOSChip:()=>n.VT});var n=r(98436)}}]);
//# sourceMappingURL=../sourcemaps/6872.9ab3745e21562d8e1d9d577ee673713a.js.map