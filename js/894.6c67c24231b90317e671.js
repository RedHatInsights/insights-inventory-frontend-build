"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[894],{13784:(e,t,r)=>{r.d(t,{ud:()=>u,UC:()=>c,m5:()=>p,yc:()=>d,p9:()=>f,jv:()=>v,Gw:()=>g,FW:()=>y,js:()=>O,Tk:()=>h,Nu:()=>E,YQ:()=>_,K$:()=>I,KS:()=>T,xb:()=>A,h3:()=>b});var n=r(93324),i=r(4942),a=r(92950),o=r(94778);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="hostname_or_id",c="textual",p="tags",d="staleness",f="registered_with",v=[{label:"Fresh",value:"fresh"},{label:"Stale",value:"stale"},{label:"Stale warning",value:"stale_warning"}],g=[{label:"Insights",value:"insights"}],y=(0,a.createContext)({}),O={staleFilter:["fresh","stale"],registeredWithFilter:["insights"]};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"values";return e.reduce((function(e,r){return l(l({},e),{},(0,i.Z)({},r.key,r[t].reduce((function(e,t){return l(l({},e),{},(0,i.Z)({},t.key,{isSelected:!0,group:t.group,item:{meta:{tag:{key:t.tagKey,value:t.value}}}}))}),{})))}),{})}var E=function(e){return e.reduce((function(e,t){var r=(0,n.Z)(t.cells,3),a=r[0],o=r[1],s=r[2];return l(l({},e),{},(0,i.Z)({},s,l(l({},e[(null==s?void 0:s.title)||s]),{},(0,i.Z)({},(null==a?void 0:a.title)||a,{isSelected:!0,group:{value:(null==s?void 0:s.title)||s,label:(null==s?void 0:s.title)||s},item:{value:(null==a?void 0:a.title)||a,meta:{tag:{key:(null==a?void 0:a.title)||a,value:(null==o?void 0:o.title)||o}}}}))))}),{})};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return t.value===u?l(l({},e),{},{textFilter:t.filter}):"tagFilters"in t?l(l({},e),{},{tagFilters:h(t.tagFilters)}):"staleFilter"in t?l(l({},e),{},{staleFilter:t.staleFilter}):"registeredWithFilter"in t?l(l({},e),{},{registeredWithFilter:t.registeredWithFilter}):e}),l({textFilter:"",tagFilters:{}},O))}var I=function(e,t,r){var n,i,a,s,u,c,p,d,f,v=(null==e||null===(n=e.items)||void 0===n?void 0:n.length)>e.per_page?null==e||null===(i=e.items)||void 0===i?void 0:i.slice(((null==e?void 0:e.page)-1)*e.per_page,(null==e?void 0:e.page)*e.per_page):null==e?void 0:e.items,g=l(l(l({},e.hasItems&&{sortBy:null==e||null===(a=e.sortBy)||void 0===a?void 0:a.key,orderDirection:null==e||null===(s=e.sortBy)||void 0===s||null===(u=s.direction)||void 0===u?void 0:u.toUpperCase()}),e),{},{filters:(null==e?void 0:e.filters)||(null==e?void 0:e.activeFilters),orderBy:(null==e?void 0:e.orderBy)||(null==e||null===(c=e.sortBy)||void 0===c?void 0:c.key),orderDirection:(null==e||null===(p=e.orderDirection)||void 0===p?void 0:p.toUpperCase())||(null==e||null===(d=e.sortBy)||void 0===d||null===(f=d.direction)||void 0===f?void 0:f.toUpperCase())},(null==v?void 0:v.length)>0&&{itemsPage:null==e?void 0:e.page,page:1});return(0,o.il)(v,g,{showTags:t},r)},T=function(e,t){return e.payload.then((function(e){return t(),e})),e},A=function(e){return!e||0===(null==e?void 0:e.length)},b=function(e,t,r,n){return[!A(e)&&{staleFilter:Array.isArray(e)?e:[e]},!A(r)&&{tagFilters:Array.isArray(r)?r:[r]},!A(t)&&{registeredWithFilter:Array.isArray(t)?t:[t]},!A(n)&&{value:"hostname_or_id",filter:Array.isArray(n)?n[0]:n},(!A(e)||!A(r)||!A(n))&&A(t)&&{registeredWithFilter:[]},(!A(t)||!A(r)||!A(n))&&A(e)&&{staleFilter:[]}].filter(Boolean)}},26105:(e,t,r)=>{r.d(t,{$3:()=>I,eE:()=>p.ZP,E7:()=>T,pJ:()=>A,wC:()=>b,YW:()=>m,$1:()=>S,sG:()=>P,Ae:()=>D,uc:()=>F,NJ:()=>j,Ys:()=>N});var n=r(89062),i=r(15861),a=r(4942),o=r(45987),s=r(87757),l=r.n(s),u=(r(63367),r(94654)),c=r.n(u),p=r(77460),d=r(35240),f=r(68004),v=r(13784),g=["facts"],y=["controller","hasItems","filters","per_page","page","orderBy","orderDirection","fields"],O=["filters","pagination"],h=["results"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I="/api/inventory/v1",T=new f.HostsApi(void 0,I,p.ZP),A=new f.TagsApi(void 0,I,p.ZP),b=function(e){return T.apiHostGetHostSystemProfileById([e])},m=function(e){var t=e.facts,r=void 0===t?{}:t;return _(_({},(0,o.Z)(e,g)),{},{rawFacts:r,facts:_(_({},r.reduce((function(e,t){return _(_({},e),{},(0,a.Z)({},t.namespace,t.facts))}),{})),c()(r,(function(e){return Object.values(e)})).map((function(e){return"string"!=typeof e?_(_({},e),{},{os_release:e.os_release||e.release,display_name:e.display_name||e.fqdn||e.id}):e})).reduce((function(e,t){return _(_({},e),"string"!=typeof t?t:{})}),{}))})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:[]},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.orderBy,n=t.orderDirection;return e.results.length>0?T.apiHostGetHostTags(e.results.map((function(e){return e.id})),e.per_page,1,r,n).then((function(t){var r=t.results;return _(_({},e),{},{results:e.results.map((function(e){return _(_({},e),{},{tags:r[e.id]||[]})}))})})).catch((function(){return _(_({},e),{},{results:e.results.map((function(e){return _(_({},e),{},{tags:[]})}))})})):e},P=function(e){return c()(e,(function(e){var t=e.values,r=e.category;return t.map((function(e){var t=e.value,n=e.tagKey;return"".concat(r?"".concat(r,"/"):"").concat(n).concat(t?"=".concat(t):"")}))}))||""},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _(_(_(_(_({},e),"hostname_or_id"===t.value&&{hostnameOrId:t.filter}),"tagFilters"in t&&{tagFilters:t.tagFilters}),"staleFilter"in t&&{staleFilter:t.staleFilter}),"registeredWithFilter"in t&&{registeredWithFilter:t.registeredWithFilter})};function F(e,t,r){return L.apply(this,arguments)}function L(){return(L=(0,i.Z)(l().mark((function e(t,r,i){var a,s,u,c,p,f,v,g,O,E,I,A,b;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.controller,s=r.hasItems,u=r.filters,c=r.per_page,p=r.page,f=r.orderBy,v=r.orderDirection,g=r.fields,O=void 0===g?{system_profile:["operating_system"]}:g,E=(0,o.Z)(r,y),!(s&&t.length>0)){e.next=28;break}return e.next=4,T.apiHostGetHostById(t,void 0,void 0,void 0,void 0,void 0,{cancelToken:a&&a.token});case 4:if(I=e.sent,!O||!Object.keys(O).length){e.next=16;break}return e.prev=6,e.next=9,T.apiHostGetHostSystemProfileById(t,void 0,void 0,void 0,void 0,void 0,void 0,{cancelToken:a&&a.token,query:(0,d.h3)(O,"fields")});case 9:b=e.sent,I=_(_({},I),{},{results:(0,d.r0)([null===(A=I)||void 0===A?void 0:A.results,(null==b?void 0:b.results)||[]],"id")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:if(!i){e.next=22;break}return e.next=19,S(I);case 19:e.t1=e.sent,e.next=23;break;case 22:e.t1=I;case 23:return I=_(_({},I=e.t1),{},{filters:u,results:I.results.map((function(e){return m(_(_({},e),{},{display_name:e.display_name||e.fqdn||e.id}))}))}),e.abrupt("return",I);case 28:if(s){e.next=30;break}return e.abrupt("return",T.apiHostGetHostList(void 0,void 0,u.hostnameOrId,void 0,void 0,c,p,f,v,u.staleFilter,[].concat((0,n.Z)(P(u.tagFilters)),(0,n.Z)(E.tags||[])),u.registeredWithFilter,void 0,void 0,{cancelToken:a&&a.token,query:_(_({},E.filter&&Object.keys(E.filter).length&&(0,d.h3)(E.filter)),O&&Object.keys(O).length&&(0,d.h3)(O,"fields"))}).then((function(e){return i?S(e,{orderBy:f,orderDirection:v}):e})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.results,r=void 0===t?[]:t,n=(0,o.Z)(e,h);return _(_({},n),{},{filters:u,results:r.map((function(e){return m(_(_({},e),{},{display_name:e.display_name||e.fqdn||e.id}))}))})})));case 30:return e.abrupt("return",{page:p,per_page:c,results:[]});case 31:case"end":return e.stop()}}),e,null,[[6,13]])})))).apply(this,arguments)}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{pagination:{}},n=r.pagination;return T.apiHostGetHostTags(e,n.perPage||10,n.page||1,void 0,void 0,t)}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pagination:{}},r=t.filters,i=t.pagination,a=(0,o.Z)(t,O),s=r?r.reduce(D,v.js):v.js,l=s.tagFilters,u=s.staleFilter,c=s.registeredWithFilter;return A.apiTagGetTags([].concat((0,n.Z)(l?P(l):[]),(0,n.Z)(a.tags||[])),"tag","ASC",i&&i.perPage||10,i&&i.page||1,u,e,c)}},66702:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n.default,INVENTORY_API_BASE:()=>n.$3,constructTags:()=>n.sG,filtersReducer:()=>n.Ae,getAllTags:()=>n.Ys,getEntities:()=>n.uc,getEntitySystemProfile:()=>n.wC,getTags:()=>n.NJ,hosts:()=>n.E7,instance:()=>n.eE,mapData:()=>n.YW,mapTags:()=>n.$1,tags:()=>n.pJ,advisor:()=>i.Zs,compliance:()=>i.As,cves:()=>i.Tq,patch:()=>i.r$,systemIssuesInstance:()=>i.qh});var n=r(26105),i=r(75588)},75588:(e,t,r)=>{r.d(t,{qh:()=>l,Tq:()=>u,r$:()=>c,Zs:()=>p,As:()=>d});var n=r(93324),i=r(15861),a=r(87757),o=r.n(a),s=r(77460),l=s.ZP,u=function(){var e=(0,i.Z)(o().mark((function e(t){var r,i,a,l,u,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([2,4,5,7].map((function(e){return s.ZP.get("/api/vulnerability//v1/systems/".concat(t,"/cves?page=1&page_size=1&impact=").concat(e))})));case 3:return r=e.sent,i=(0,n.Z)(r,4),a=i[0],l=i[1],u=i[2],c=i[3],e.abrupt("return",{low:a,moderate:l,important:u,critical:c});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/api/patch/v1/systems/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/api/insights/v1/system/".concat(t,"/reports/"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,s.ZP.post("/api/compliance/graphql",{operationName:"System",query:"query System($systemId: String!) {\n        system(id: $systemId) {\n            id\n            name\n            profiles {\n                id\n                name\n                refId\n                compliant\n                rulesFailed\n                rulesPassed\n                lastScanned\n                score\n                __typename\n            }\n            __typename\n        }\n    }",variables:{systemId:t}});case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},59086:(e,t,r)=>{r.d(t,{zW:()=>l,gl:()=>u,AN:()=>c,aI:()=>p,AL:()=>d,dF:()=>f,wt:()=>v,pr:()=>g,uW:()=>y,fT:()=>O,Ti:()=>h,Bh:()=>E,s$:()=>_,WH:()=>I,lP:()=>T,TP:()=>A,u4:()=>b,hI:()=>m,jZ:()=>S,Gs:()=>P,Qd:()=>D,Uq:()=>F,Ji:()=>L});var n=r(4942),i=r(24350);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t;return null==e||null===(t=e.reduce)||void 0===t?void 0:t.call(e,(function(e,t){var r;return o(o({},e),{},(r={},(0,n.Z)(r,t,t),(0,n.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,n.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,n.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{})},l=["GET_ENTITIES","GET_ENTITY","UPDATE_DISPLAY_NAME","LOAD_WRITE_PERMISSIONS","LOAD_SYSTEM_PROFILE","SET_ANSIBLE_HOST"],u=["LOAD_ENTITIES","LOAD_ENTITY","REMOVE_ENTITY","LOAD_SYSTEM_PROFILE","SET_DISPLAY_NAME","SET_ANSIBLE_HOST","LOAD_TAGS","ALL_TAGS"],c=["LOAD_ADVISOR_RECOMMENDATIONS","LOAD_APPLICABLE_CVES","LOAD_APPLICABLE_ADVISORIES","LOAD_COMPLIANCE_POLICIES"],p=o(o(o({},r.n(i)()(["ALERT_ADD","ALERT_DISMISS","REMOVE_ENTITY"],(function(e){return e}))),s(l)),s(u)),d=s(u),f=s(c),v="@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS",g="SELECT_ENTITY",y="SET_INVENTORY_FILTER",O="SET_PAGINATION",h="SET_DISPLAY_NAME",E="SET_ANSIBLE_HOST",_="UPDATE_ENTITIES",I="CHANGE_SORT",T="FILTER_ENTITIES",A="APPLICATION_SELECTED",b="SHOW_ENTITIES",m="FILTER_SELECT",S="ENTITIES_LOADING",P="CLEAR_FILTERS",D="TOGGLE_TAG_MODAL",F="CONFIG_CHANGED",L="TOGGLE_INVENTORY_DRAWER"},8622:(e,t,r)=>{r.d(t,{il:()=>f,jB:()=>v,fg:()=>g,A_:()=>y,CL:()=>O,HD:()=>h,CP:()=>E,Xe:()=>_,nE:()=>I,K5:()=>T,me:()=>A,Ar:()=>b,C8:()=>m,u3:()=>S,wb:()=>P});var n=r(4942),i=r(89062),a=r(45987),o=r(59086),s=r(66702),l=r(13784),u=["filters"],c=["results"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.showTags,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.getEntities,f=t.filters,v=(0,a.Z)(t,u),g=e.reduce((function(e,t){return[].concat((0,i.Z)(e),[t&&"string"==typeof t?t:t.id])}),[]).filter(Boolean),y=function(e){var t,r,n;return(null===(t=v.hideFilters)||void 0===t?void 0:t[e])||(null===(r=v.hideFilters)||void 0===r?void 0:r.all)&&!1!==(null===(n=v.hideFilters)||void 0===n?void 0:n[e])},O=f?f.reduce(s.filtersReducer,d(d(d(d({},l.js),0===f.length&&{registeredWithFilter:[]}),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0})):d(d(d({},l.js),y("stale")&&{staleFilter:void 0}),y("registeredWith")&&{registeredWithFilter:void 0}),h=v.orderBy||"updated",E=v.orderDirection||"DESC";return{type:o.aI.LOAD_ENTITIES,payload:p(g,d(d({filters:O},v),{},{orderBy:h,orderDirection:E}),n,s.getEntities).then((function(t){var r=t.results,n=(0,a.Z)(t,c);return d(d({},n),{},{filters:f,sortBy:{key:h,direction:E},results:e.length>0?e.map((function(e){return d(d({},e.id?e:{id:e}),r.find((function(t){var r=t.id;return r===e||r===e.id}))||{})})):r,page:v.page||(null==n?void 0:n.page),per_page:v.per_page||(null==n?void 0:n.per_page),hideFilters:v.hideFilters})})),meta:{showTags:n}}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:o.s$,payload:{results:e}}},g=function(e){return{type:o.hI,payload:e}},y=function(e,t,r){var n=r.showTags;return{type:o.aI.LOAD_ENTITY,payload:(0,s.getEntities)(e,t,n),meta:{showTags:n}}},O=function(e,t){return{type:o.pr,payload:{id:e,selected:t}}},h=function(e){return{type:o.WH,payload:e}},E=function(e,t){return{type:o.lP,payload:{key:e,filterString:t}}},_=function(e){return{type:o.TP,payload:{appName:e}}},I=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:o.jZ,payload:{isLoading:e}}},T=function(){return{type:o.Gs}},A=function(e,t,r,n){return{type:o.aI.LOAD_TAGS,payload:(0,s.getTags)(e,t,r),meta:{tagsCount:n,systemId:e}}},b=function(e){return{type:o.Qd,payload:{isOpen:e}}},m=function(e,t){return{type:o.aI.ALL_TAGS,payload:(0,s.getAllTags)(e,t)}},S=function(e){return{type:o.Uq,payload:e}},P=function(e){return{type:o.Ji,payload:{isOpened:e}}}},87637:(e,t,r)=>{r.d(t,{gb:()=>a,Fo:()=>o,k0:()=>s,Oj:()=>l});var n=r(59086),i=r(66702),a=function(e){return{type:n.dF.LOAD_ADVISOR_RECOMMENDATIONS,payload:(0,i.advisor)(e)}},o=function(e){return{type:n.dF.LOAD_APPLICABLE_CVES,payload:(0,i.cves)(e)}},s=function(e){return{type:n.dF.LOAD_APPLICABLE_ADVISORIES,payload:(0,i.patch)(e)}},l=function(e){return{type:n.dF.LOAD_COMPLIANCE_POLICIES,payload:(0,i.compliance)(e)}}}}]);
//# sourceMappingURL=../sourcemaps/894.46deeef8a086bd0cdf53.js.map