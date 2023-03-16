(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5357],{1284:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.toUpperCase=e.generateFilter=e.getBaseName=e.processDate=e.downloadFile=e.mergeArraysByKey=e.JSON_TYPE=e.CSV_TYPE=void 0;var i=a(r(82492)),c=a(r(67523));e.CSV_TYPE="text/csv;charset=utf-8;",e.JSON_TYPE="data:text/json;charset=utf-8,";var s=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];e.mergeArraysByKey=function(t,e){void 0===e&&(e="id");var r=i.default.apply(void 0,t.map((function(t){return(0,c.default)(t,(function(t){return t&&t[e]}))})));return Object.values(r)},e.downloadFile=function(t,r,n){void 0===r&&(r="".concat((new Date).toISOString())),void 0===n&&(n=e.CSV_TYPE);var o="json"===n?e.JSON_TYPE:e.CSV_TYPE,a=new Blob([t],{type:o}),i=document.createElement("a");i.setAttribute("href",URL.createObjectURL(a)),i.setAttribute("download","".concat(r,".").concat(n)),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)},e.processDate=function(t){var e=new Date(t),r=s[e.getMonth()],n=e.getDate()<10?"0".concat(e.getDate()):e.getDate();return!r||isNaN(n)?"N/A":"".concat(n," ").concat(r," ").concat(e.getFullYear())},e.getBaseName=function(t,e){void 0===e&&(e=2);var r="/",n=t.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),o([],new Array(e),!0).reduce((function(t,r,o){return"".concat(t).concat(n[o]||"").concat(o<e-1?"/":"")}),r)},e.generateFilter=function(t,r,o){return void 0===r&&(r="filter"),Object.entries(t||{}).reduce((function(t,a){var i,c=a[0],s=a[1],l="".concat(r||"","[").concat(c,"]").concat(Array.isArray(s)?"".concat((null==o?void 0:o.arrayEnhancer)?"[".concat(o.arrayEnhancer,"]"):"","[]"):"");return s instanceof Function||s instanceof Date?t:n(n({},t),Array.isArray(s)||"object"!=typeof s?((i={})[l]=s,i):(0,e.generateFilter)(s,l,o))}),{})},e.toUpperCase=function(t){return void 0===t&&(t=""),"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))}},2443:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(85893),o=r(43047),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};const i=function(){return(0,n.jsxs)(n.Fragment,{children:["If the problem persists, contact ",(0,n.jsx)("a",a({href:"https://access.redhat.com/support"},{children:"Red Hat Support"}))," or check our ",(0,n.jsx)("a",a({href:"https://status.redhat.com"},{children:" status page"}))," for known outages."]})};var c=r(48542),s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};const l=function(t){var e=t.errorTitle,r=void 0===e?"Something went wrong":e,a=t.errorDescription,l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["errorTitle","errorDescription"]);return(0,n.jsxs)(c.EmptyState,s({variant:c.EmptyStateVariant.large},l,{className:"ins-c-error-state"},{children:[(0,n.jsx)(c.EmptyStateIcon,{icon:o.$O}),(0,n.jsx)(c.Title,s({headingLevel:"h4",size:"lg"},{children:r})),(0,n.jsx)(c.EmptyStateBody,{children:(0,n.jsxs)(c.Stack,{children:[!a&&(0,n.jsx)(c.StackItem,{children:"There was a problem processing the request. Please try again."}),(0,n.jsx)(c.StackItem,{children:a||(0,n.jsx)(i,{})})]})}),document.referrer?(0,n.jsx)(c.Button,s({variant:"primary",onClick:function(){return history.back()}},{children:"Return to last page"})):(0,n.jsx)(c.Button,s({variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer"},{children:"Go to home page"}))]}))}},81945:(t,e,r)=>{"use strict";r.d(e,{Nc:()=>l,f1:()=>u});var n=r(85893),o=r(92950),a=r.n(o),i=r(48542),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},s=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};function l(t,e){return void 0===e&&(e="values"),Object.entries(t||{}).reduce((function(t,r){var n,o,a,i,l,u=r[0],p=function(t,e){return Object.entries(t||{}).reduce((function(t,r){var n,o=r[0],a=r[1],i=a.isSelected,l=a.group,u=a.value,p=a.item;if(i){var f=(null===(n=null==p?void 0:p.meta)||void 0===n?void 0:n.tag)||{key:(null==p?void 0:p.tagKey)||e,value:u||(null==p?void 0:p.tagValue)},v=f.key,d=f.value;return s(s([],t,!0),[{key:o,tagKey:v,value:d,name:"".concat(v).concat(d?"=".concat(d):""),group:c({value:e},l)}],!1)}return t}),[])}(r[1],u);return p.length>0?s(s([],t,!0),[(n={type:"tags",key:u,category:(null===(a=null===(o=p[0])||void 0===o?void 0:o.group)||void 0===a?void 0:a.value)||(null===(l=null===(i=p[0])||void 0===i?void 0:i.group)||void 0===l?void 0:l.label)},n[e]=p,n)],!1):t}),[])}function u(t,e){return void 0===e&&(e="item"),t.map((function(t){var r=t.name,o=t.tags,s=t.type,l=void 0===s?"checkbox":s,u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["name","tags","type"]);return c(c({},u),{label:r,value:r,type:l,items:o.map((function(t){var r=t.count,o=t.tag,s=o.key,l=o.value,u="".concat(s).concat(l?"=".concat(l):"");return{className:"ins-c-tagfilter__option",label:(0,n.jsxs)(a().Fragment,{children:[(0,n.jsx)(i.Tooltip,c({content:u},{children:(0,n.jsx)("div",c({className:"ins-c-tagfilter__option-value"},{children:u}))})),void 0!==r&&(0,n.jsx)(i.Tooltip,c({position:"right",enableFlip:!0,content:"Applicable to ".concat(r," ").concat(e).concat(1===r?"":"s",".")},{children:(0,n.jsx)(i.Badge,c({isRead:r<=0},{children:r}))}))]}),meta:{count:r,tag:{key:s,value:l}},id:"".concat(s,"-").concat(l),tagKey:s,value:u,tagValue:l}}))})}))}},3474:(t,e,r)=>{"use strict";r.d(e,{sr:()=>p,Yn:()=>l,YM:()=>f});var n=r(85893),o=r(92950),a=r(81945),i=r(48542),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},s=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},l={tagsFilter:{}},u="TAGS_FILTER",p=function(t,e){var r=e.type,n=e.payload;return c({},r===u&&{tagsFilter:n})},f=function(t,e,r,p,f,v,d){void 0===t&&(t=[]),void 0===e&&(e=!1),void 0===r&&(r=0);var h=void 0===f?[l]:f,y=h[0],g=h[1];void 0===v&&(v="item");var m=(0,o.useState)({allTags:[],loaded:!1,additionalTagsCount:0}),b=m[0],j=m[1];(0,o.useEffect)((function(){j((function(){return{allTags:t,loaded:e,additionalTagsCount:r}}))}),[e]);var O=(0,o.useState)({}),x=O[0],S=O[1],w=g?y.tagsFilter:x,_=g?function(t){return g({type:u,payload:t})}:S,T=(0,o.useState)(""),P=T[0],A=T[1],k=c(c({className:"ins-c-tagfilter",onFilter:function(t){return A(t)},filterBy:P,onChange:function(t,e,r,n,o,a){if(n.meta){var i=!!e[o][a];e[o][a]={isSelected:i,group:r,item:n},_(e)}},selected:w},r&&{onShowMore:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return p&&p.apply(void 0,t)},showMoreTitle:d||"".concat(b.additionalTagsCount," more tags available")}),e&&t.length>0?{groups:s([],(0,a.f1)(t,v),!0)}:{value:"",items:[{value:"",label:b.loaded?(0,n.jsx)("div",c({className:"ins-c-tagfilter__no-tags"},{children:" No tags available "})):(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(i.Spinner,{size:"md"})," "]},"no-tags-tooltip"),isDisabled:!0,className:"ins-c-tagfilter__tail"}]});return{filter:k,chips:(0,a.Nc)(w,"chips"),selectedTags:w,setValue:_,filterTagsBy:P,seFilterTagsBy:A}}},85333:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(85893),o=r(92950),a=r.n(o),i=r(48542),c=r(56989),s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},l=function(){return(0,n.jsxs)(a().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,n.jsx)("a",s({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const u=function(t){var e=t.prevPageButtonText,r=void 0===e?"Return to previous page":e,o=t.toLandingPageText,a=void 0===o?"Go to landing page":o,u=t.title,p=t.actions,f=void 0===p?null:p,v=t.serviceName,d=t.icon,h=void 0===d?c.LockIcon:d,y=t.description,g=void 0===y?(0,n.jsx)(l,{}):y,m=t.showReturnButton,b=void 0===m||m,j=t.className,O=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),x=u||"You do not have access to ".concat(v);return(0,n.jsxs)(i.EmptyState,s({variant:i.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(j||"")},O,{children:[(0,n.jsx)(i.EmptyStateIcon,{icon:h}),(0,n.jsx)(i.Title,s({headingLevel:"h5",size:"lg"},{children:x})),(0,n.jsx)(i.EmptyStateBody,{children:g}),f,b&&(document.referrer?(0,n.jsx)(i.Button,s({variant:"primary",onClick:function(){return history.back()}},{children:r})):(0,n.jsx)(i.Button,s({variant:"primary",component:"a",href:"."},{children:a})))]}))}},47443:(t,e,r)=>{var n=r(42118);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},1196:t=>{t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},20731:(t,e,r)=>{var n=r(88668),o=r(47443),a=r(1196),i=r(29932),c=r(7518),s=r(74757);t.exports=function(t,e,r,l){var u=-1,p=o,f=!0,v=t.length,d=[],h=e.length;if(!v)return d;r&&(e=i(e,c(r))),l?(p=a,f=!1):e.length>=200&&(p=s,f=!1,e=new n(e));t:for(;++u<v;){var y=t[u],g=null==r?y:r(y);if(y=l||0!==y?y:0,f&&g==g){for(var m=h;m--;)if(e[m]===g)continue t;d.push(y)}else p(e,g,l)||d.push(y)}return d}},41848:t=>{t.exports=function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}},42118:(t,e,r)=>{var n=r(41848),o=r(62722),a=r(42351);t.exports=function(t,e,r){return e==e?a(t,e,r):n(t,o,r)}},62722:t=>{t.exports=function(t){return t!=t}},45652:(t,e,r)=>{var n=r(88668),o=r(47443),a=r(1196),i=r(74757),c=r(23593),s=r(21814);t.exports=function(t,e,r){var l=-1,u=o,p=t.length,f=!0,v=[],d=v;if(r)f=!1,u=a;else if(p>=200){var h=e?null:c(t);if(h)return s(h);f=!1,u=i,d=new n}else d=e?[]:v;t:for(;++l<p;){var y=t[l],g=e?e(y):y;if(y=r||0!==y?y:0,f&&g==g){for(var m=d.length;m--;)if(d[m]===g)continue t;e&&d.push(g),v.push(y)}else u(d,g,r)||(d!==v&&d.push(g),v.push(y))}return v}},36128:(t,e,r)=>{var n=r(20731),o=r(21078),a=r(45652);t.exports=function(t,e,r){var i=t.length;if(i<2)return i?a(t[0]):[];for(var c=-1,s=Array(i);++c<i;)for(var l=t[c],u=-1;++u<i;)u!=c&&(s[c]=n(s[c]||l,t[u],e,r));return a(o(s,1),e,r)}},23593:(t,e,r)=>{var n=r(58525),o=r(50308),a=r(21814),i=n&&1/a(new n([,-0]))[1]==1/0?function(t){return new n(t)}:o;t.exports=i},42351:t=>{t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},50308:t=>{t.exports=function(){}},76566:(t,e,r)=>{var n=r(34963),o=r(5976),a=r(36128),i=r(29246),c=o((function(t){return a(n(t,i))}));t.exports=c},84506:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(83878),o=r(59199),a=r(40181),i=r(25267);function c(t){return(0,n.Z)(t)||(0,o.Z)(t)||(0,a.Z)(t)||(0,i.Z)()}}}]);
//# sourceMappingURL=../sourcemaps/5357.dfde93aa86335f11c9ff30f6253c9bae.js.map