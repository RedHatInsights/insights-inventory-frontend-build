"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4894],{13784:(e,t,r)=>{r.d(t,{ud:()=>u,UC:()=>c,m5:()=>p,yc:()=>d,p9:()=>v,vi:()=>f,jv:()=>g,Gw:()=>y,FW:()=>E,js:()=>O,wQ:()=>b,Tk:()=>h,Nu:()=>_,YQ:()=>I,K$:()=>m,KS:()=>T,xb:()=>L,h3:()=>A});var n=r(29439),i=r(4942),a=r(92950),l=r(94778);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="hostname_or_id",c="textual",p="tags",d="staleness",v="registered_with",f="operating_system",g=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"}],y=[{label:"insights-client",value:"puptoo",idName:"Insights id",idValue:"insights_id"},{label:"subscription-manager",value:"rhsm-conduit",idName:"Subscription manager id",idValue:"subscription_manager_id"},{label:"Satellite/Discovery",value:"yupana"},{label:"insights-client not connected",value:"!puptoo"}],E=(0,a.createContext)({}),O={staleFilter:["fresh","stale"]},b=[{label:"RHEL 9.0",value:"9.0"},{label:"RHEL 8.6",value:"8.6"},{label:"RHEL 8.5",value:"8.5"},{label:"RHEL 8.4",value:"8.4"},{label:"RHEL 8.3",value:"8.3"},{label:"RHEL 8.2",value:"8.2"},{label:"RHEL 8.1",value:"8.1"},{label:"RHEL 8.0",value:"8.0"},{label:"RHEL 7.9",value:"7.9"},{label:"RHEL 7.8",value:"7.8"},{label:"RHEL 7.7",value:"7.7"},{label:"RHEL 7.6",value:"7.6"},{label:"RHEL 7.5",value:"7.5"},{label:"RHEL 7.4",value:"7.4"},{label:"RHEL 7.3",value:"7.3"},{label:"RHEL 7.2",value:"7.2"},{label:"RHEL 7.1",value:"7.1"},{label:"RHEL 7.0",value:"7.0"},{label:"RHEL 6.10",value:"6.10"},{label:"RHEL 6.9",value:"6.9"},{label:"RHEL 6.8",value:"6.8"},{label:"RHEL 6.7",value:"6.7"},{label:"RHEL 6.6",value:"6.6"},{label:"RHEL 6.5",value:"6.5"},{label:"RHEL 6.4",value:"6.4"},{label:"RHEL 6.3",value:"6.3"},{label:"RHEL 6.2",value:"6.2"},{label:"RHEL 6.1",value:"6.1"},{label:"RHEL 6.0",value:"6.0"}];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return s(s({},e),{},(0,i.Z)({},r.key,r[t].reduce((function(e,t){return s(s({},e),{},(0,i.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var _=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),a=r[0],l=r[1],o=r[2];return s(s({},e),{},(0,i.Z)({},o,s(s({},e[(null==o?void 0:o.title)||o]),{},(0,i.Z)({},(null==a?void 0:a.title)||a,{isSelected:!0,group:{value:(null==o?void 0:o.title)||o,label:(null==o?void 0:o.title)||o},item:{value:(null==a?void 0:a.title)||a,meta:{tag:{key:(null==a?void 0:a.title)||a,value:(null==l?void 0:l.title)||l}}}}))))}),{})};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){if(t.value===u)return s(s({},e),{},{textFilter:t.filter});if("tagFilters"in t)return s(s({},e),{},{tagFilters:h(t.tagFilters)});var r=["staleFilter","registeredWithFilter","osFilter",""].find((function(e){return Object.keys(t).includes(e)}));return s(s({},e),r&&(0,i.Z)({},r,t[r]))}),s({textFilter:"",tagFilters:{}},O))}var m=function(e,t,r){var n,i,a,o,u,c,p,d,v,f=(null==e||null===(n=e.items)||void 0===n?void 0:n.length)>e.per_page?null==e||null===(i=e.items)||void 0===i?void 0:i.slice(((null==e?void 0:e.page)-1)*e.per_page,(null==e?void 0:e.page)*e.per_page):null==e?void 0:e.items,g=s(s(s({},e.hasItems&&{sortBy:null==e||null===(a=e.sortBy)||void 0===a?void 0:a.key,orderDirection:null==e||null===(o=e.sortBy)||void 0===o||null===(u=o.direction)||void 0===u?void 0:u.toUpperCase()}),e),{},{filters:(null==e?void 0:e.filters)||(null==e?void 0:e.activeFilters),orderBy:(null==e?void 0:e.orderBy)||(null==e||null===(c=e.sortBy)||void 0===c?void 0:c.key),orderDirection:(null==e||null===(p=e.orderDirection)||void 0===p?void 0:p.toUpperCase())||(null==e||null===(d=e.sortBy)||void 0===d||null===(v=d.direction)||void 0===v?void 0:v.toUpperCase())},(null==f?void 0:f.length)>0&&{itemsPage:null==e?void 0:e.page,page:1});return(0,l.il)(f,g,{showTags:t},r)},T=function(e,t){return e.payload.then((function(e){return t(),e})),e},L=function(e){return!e||0===(null==e?void 0:e.length)},A=function(e,t,r,n,i){return[!L(e)&&{staleFilter:Array.isArray(e)?e:[e]},!L(r)&&{tagFilters:Array.isArray(r)?r:[r]},!L(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!L(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!L(e)||!L(r)||!L(n))&&L(t)&&{registeredWithFilter:[]},(!L(t)||!L(r)||!L(n))&&L(e)&&{staleFilter:[]},!L(i)&&{osFilter:Array.isArray(i)?i:[i]}].filter(Boolean)}},63599:(e,t,r)=>{r.r(t),r.d(t,{INVENTORY_API_BASE:()=>_,advisor:()=>k,calculateSystemProfile:()=>P,compliance:()=>B,constructTags:()=>S,cves:()=>Z,filtersReducer:()=>D,getAllTags:()=>w,getEntities:()=>F,getEntitySystemProfile:()=>T,getTags:()=>j,hosts:()=>I,instance:()=>p.ZP,mapData:()=>L,mapTags:()=>A,patch:()=>C,systemIssuesInstance:()=>H,tags:()=>m});var n=r(93433),i=r(15861),a=r(4942),l=r(45987),o=r(87757),s=r.n(o),u=(r(63367),r(94654)),c=r.n(u),p=r(33366),d=r(35240),v=r(68004),f=r(13784),g=["facts"],y=["controller","hasItems","filters","per_page","page","orderBy","orderDirection","fields"],E=["filters","pagination"],O=["results"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _="/api/inventory/v1",I=new v.HostsApi(void 0,_,p.ZP),m=new v.TagsApi(void 0,_,p.ZP),T=function(e){return I.apiHostGetHostSystemProfileById([e])},L=function(e){var t,r=e.facts,n=void 0===r?{}:r;return h(h({},(0,l.Z)(e,g)),{},{rawFacts:n,facts:h(h({},null===(t=n.reduce)||void 0===t?void 0:t.call(n,(function(e,t){return h(h({},e),{},(0,a.Z)({},t.namespace,t.facts))}),{})),c()(n,(function(e){return Object.values(e)})).map((function(e){return"string"!=typeof e?h(h({},e),{},{os_release:e.os_release||e.release,display_name:e.display_name||e.fqdn||e.id}):e})).reduce((function(e,t){return h(h({},e),"string"!=typeof t?t:{})}),{}))})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:[]},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.orderBy,n=t.orderDirection;return e.results.length>0?I.apiHostGetHostTags(e.results.map((function(e){return e.id})),e.per_page,1,r,n).then((function(t){var r=t.results;return h(h({},e),{},{results:e.results.map((function(e){return h(h({},e),{},{tags:r[e.id]||[]})}))})})).catch((function(){return h(h({},e),{},{results:e.results.map((function(e){return h(h({},e),{},{tags:[]})}))})})):e},S=function(e){return c()(e,(function(e){var t=e.values,r=e.category;return t.map((function(e){var t=e.value,n=e.tagKey;return"".concat(r?"".concat(r,"/"):"").concat(n).concat(t?"=".concat(t):"")}))}))||""},P=function(e){var t={},r=Array.isArray(e)?e:Object.values(e||{}).flatMap((function(e){return Object.keys(e)}));return(null==r?void 0:r.length)>0&&(t.operating_system={RHEL:{version:{eq:r}}}),(0,d.h3)({system_profile:t})},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(h(h(h(h(h({},e),"hostname_or_id"===t.value&&{hostnameOrId:t.filter}),"tagFilters"in t&&{tagFilters:t.tagFilters}),"staleFilter"in t&&{staleFilter:t.staleFilter}),"registeredWithFilter"in t&&{registeredWithFilter:t.registeredWithFilter}),"osFilter"in t&&{osFilter:t.osFilter})};function F(e,t,r){return R.apply(this,arguments)}function R(){return R=(0,i.Z)(s().mark((function e(t,r,i){var a,o,u,c,p,v,f,g,E,b,_,m,T;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.controller,o=r.hasItems,u=r.filters,c=r.per_page,p=r.page,v=r.orderBy,f=r.orderDirection,g=r.fields,E=void 0===g?{system_profile:["operating_system"]}:g,b=(0,l.Z)(r,y),!(o&&t.length>0)){e.next=28;break}return e.next=4,I.apiHostGetHostById(t,void 0,void 0,void 0,void 0,void 0,{cancelToken:a&&a.token});case 4:if(_=e.sent,!E||!Object.keys(E).length){e.next=16;break}return e.prev=6,e.next=9,I.apiHostGetHostSystemProfileById(t,void 0,void 0,void 0,void 0,void 0,void 0,{cancelToken:a&&a.token,query:(0,d.h3)(E,"fields")});case 9:T=e.sent,_=h(h({},_),{},{results:(0,d.r0)([null===(m=_)||void 0===m?void 0:m.results,(null==T?void 0:T.results)||[]],"id")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:if(!i){e.next=22;break}return e.next=19,A(_);case 19:e.t1=e.sent,e.next=23;break;case 22:e.t1=_;case 23:return _=h(h({},_=e.t1),{},{filters:u,results:_.results.map((function(e){return L(h(h({},e),{},{display_name:e.display_name||e.fqdn||e.id}))}))}),e.abrupt("return",_);case 28:if(o){e.next=30;break}return e.abrupt("return",I.apiHostGetHostList(void 0,void 0,u.hostnameOrId,void 0,void 0,c,p,v,f,u.staleFilter,[].concat((0,n.Z)(S(u.tagFilters)),(0,n.Z)(b.tags||[])),null==u?void 0:u.registeredWithFilter,void 0,void 0,{cancelToken:a&&a.token,query:h(h(h({},b.filter&&Object.keys(b.filter).length&&(0,d.h3)(b.filter)),P(u.osFilter)),E&&Object.keys(E).length&&(0,d.h3)(E,"fields"))}).then((function(e){return i?A(e,{orderBy:v,orderDirection:f}):e})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.results,r=void 0===t?[]:t,n=(0,l.Z)(e,O);return h(h({},n),{},{filters:u,results:r.map((function(e){return L(h(h({},e),{},{display_name:e.display_name||e.fqdn||e.id}))}))})})));case 30:return e.abrupt("return",{page:p,per_page:c,results:[]});case 31:case"end":return e.stop()}}),e,null,[[6,13]])}))),R.apply(this,arguments)}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{pagination:{}},n=r.pagination;return I.apiHostGetHostTags(e,n.perPage||10,n.page||1,void 0,void 0,t)}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pagination:{}},r=t.filters,i=t.pagination,a=(0,l.Z)(t,E),o=r?r.reduce(D,f.js):f.js,s=o.tagFilters,u=o.staleFilter,c=o.registeredWithFilter,p=o.osFilter,d=o.hostnameOrId;return m.apiTagGetTags([].concat((0,n.Z)(s?S(s):[]),(0,n.Z)(a.tags||[])),"tag","ASC",i&&i.perPage||10,i&&i.page||1,u,e||d,c,void 0,{query:h({},P(p))})}var N=r(29439),H=p.ZP,Z=function(){var e=(0,i.Z)(s().mark((function e(t){var r,n,i,a,l,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([2,4,5,7].map((function(e){return p.ZP.get("/api/vulnerability//v1/systems/".concat(t,"/cves?page=1&page_size=1&impact=").concat(e))})));case 3:return r=e.sent,n=(0,N.Z)(r,4),i=n[0],a=n[1],l=n[2],o=n[3],e.abrupt("return",{low:i,moderate:a,important:l,critical:o});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,i.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.get("/api/patch/v1/systems/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,i.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.get("/api/insights/v1/system/".concat(t,"/reports/"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=(0,i.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,p.ZP.post("/api/compliance/graphql",{operationName:"System",query:"query System($systemId: String!) {\n        system(id: $systemId) {\n            id\n            name\n            profiles {\n                id\n                name\n                refId\n                compliant\n                rulesFailed\n                rulesPassed\n                lastScanned\n                score\n                __typename\n            }\n            __typename\n        }\n    }",variables:{systemId:t}});case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},59086:(e,t,r)=>{r.d(t,{zW:()=>s,gl:()=>u,AN:()=>c,aI:()=>p,AL:()=>d,dF:()=>v,wt:()=>f,pr:()=>g,uW:()=>y,fT:()=>E,Ti:()=>O,Bh:()=>b,s$:()=>h,WH:()=>_,lP:()=>I,TP:()=>m,u4:()=>T,hI:()=>L,jZ:()=>A,Gs:()=>S,Qd:()=>P,Uq:()=>D,Ji:()=>F});var n=r(4942),i=r(24350);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=function(e){var t;return null==e||null===(t=e.reduce)||void 0===t?void 0:t.call(e,(function(e,t){var r;return l(l({},e),{},(r={},(0,n.Z)(r,t,t),(0,n.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,n.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,n.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{})},s=["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS","LOAD_SYSTEM_PROFILE","SET_ANSIBLE_HOST"],u=["LOAD_ENTITIES","LOAD_ENTITY","REMOVE_ENTITY","LOAD_SYSTEM_PROFILE","SET_DISPLAY_NAME","SET_ANSIBLE_HOST","LOAD_TAGS","ALL_TAGS"],c=["LOAD_ADVISOR_RECOMMENDATIONS","LOAD_APPLICABLE_CVES","LOAD_APPLICABLE_ADVISORIES","LOAD_COMPLIANCE_POLICIES"],p=l(l(l({},r.n(i)()(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(function(e){return e}))),o(s)),o(u)),d=o(u),v=o(c),f="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",g="SELECT_ENTITY",y="SET_INVENTORY_FILTER",E="SET_PAGINATION",O="SET_DISPLAY_NAME",b="SET_ANSIBLE_HOST",h="UPDATE_ENTITIES",_="CHANGE_SORT",I="FILTER_ENTITIES",m="APPLICATION_SELECTED",T="SHOW_ENTITIES",L="FILTER_SELECT",A="ENTITIES_LOADING",S="CLEAR_FILTERS",P="TOGGLE_TAG_MODAL",D="CONFIG_CHANGED",F="TOGGLE_INVENTORY_DRAWER"},8622:(e,t,r)=>{r.d(t,{il:()=>v,jB:()=>f,fg:()=>g,A_:()=>y,CL:()=>E,HD:()=>O,CP:()=>b,Xe:()=>h,nE:()=>_,K5:()=>I,me:()=>m,Ar:()=>T,C8:()=>L,u3:()=>A,wb:()=>S});var n=r(4942),i=r(93433),a=r(45987),l=r(59086),o=r(63599),s=r(13784),u=["filters"],c=["results"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.showTags,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.getEntities,v=t.filters,f=(0,a.Z)(t,u),g=e.reduce((function(e,t){return[].concat((0,i.Z)(e),[t&&"string"==typeof t?t:t.id])}),[]).filter(Boolean),y=function(e){var t,r,n;return(null===(t=f.hideFilters)||void 0===t?void 0:t[e])||(null===(r=f.hideFilters)||void 0===r?void 0:r.all)&&!1!==(null===(n=f.hideFilters)||void 0===n?void 0:n[e])},E=v?v.reduce(o.filtersReducer,d(d(d(d(d({},s.js),0===v.length&&{registeredWithFilter:[]}),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0}),y("operating_system")&&{osFilter:void 0})):d(d(d(d({},s.js),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0}),y("operating_system")&&{osFilter:void 0}),O=f.orderBy||"updated",b=f.orderDirection||"DESC",h=Date.now();return{type:l.aI.LOAD_ENTITIES,payload:p(g,d(d({filters:E},f),{},{orderBy:O,orderDirection:b}),n,o.getEntities).then((function(t){var r=t.results,n=(0,a.Z)(t,c);return d(d({},n),{},{filters:v,sortBy:{key:O,direction:b},results:e.length>0?e.map((function(e){return d(d({},e.id?e:{id:e}),r.find((function(t){var r=t.id;return r===e||r===e.id}))||{})})):r,page:f.page||(null==n?void 0:n.page),per_page:f.per_page||(null==n?void 0:n.per_page),hideFilters:f.hideFilters})})),meta:{showTags:n,lastDateRequest:h}}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l.s$,payload:{results:e}}},g=function(e){return{type:l.hI,payload:e}},y=function(e,t,r){var n=r.showTags;return{type:l.aI.LOAD_ENTITY,payload:(0,o.getEntities)(e,t,n),meta:{showTags:n}}},E=function(e,t){return{type:l.pr,payload:{id:e,selected:t}}},O=function(e){return{type:l.WH,payload:e}},b=function(e,t){return{type:l.lP,payload:{key:e,filterString:t}}},h=function(e){return{type:l.TP,payload:{appName:e}}},_=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:l.jZ,payload:{isLoading:e}}},I=function(){return{type:l.Gs}},m=function(e,t,r,n){return{type:l.aI.LOAD_TAGS,payload:(0,o.getTags)(e,t,r),meta:{tagsCount:n,systemId:e}}},T=function(e){return{type:l.Qd,payload:{isOpen:e}}},L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.getAllTags;return{type:l.aI.ALL_TAGS,payload:r(e,t),meta:{lastDateRequestTags:Date.now()}}},A=function(e){return{type:l.Uq,payload:e}},S=function(e){return{type:l.Ji,payload:{isOpened:e}}}},87637:(e,t,r)=>{r.d(t,{gb:()=>a,Fo:()=>l,k0:()=>o,Oj:()=>s});var n=r(59086),i=r(63599),a=function(e){return{type:n.dF.LOAD_ADVISOR_RECOMMENDATIONS,payload:(0,i.advisor)(e)}},l=function(e){return{type:n.dF.LOAD_APPLICABLE_CVES,payload:(0,i.cves)(e)}},o=function(e){return{type:n.dF.LOAD_APPLICABLE_ADVISORIES,payload:(0,i.patch)(e)}},s=function(e){return{type:n.dF.LOAD_COMPLIANCE_POLICIES,payload:(0,i.compliance)(e)}}}}]);