"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8414],{85630:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(87462),o=r(45987),i=r(92950),a=r.n(i),l=r(45697),s=r.n(l),c=r(85333),u=r(75824),p=["title","description"],f=function(e){var t=e.title,r=e.description,i=(0,o.Z)(e,p);return a().createElement(c.Z,(0,n.Z)({},i,{className:"ins-c-inventory__no--access",title:t,description:a().createElement(u.u,{content:"inventory:*:read"},r)}))};f.propTypes={title:s().string,description:s().node},f.defaultProps={title:"You do not have access to Inventory",description:a().createElement("div",null,"To view your systems, you must be granted inventory access from your Organization Administrator.")};const g=f},98436:(e,t,r)=>{r.d(t,{CR:()=>v,DJ:()=>j,cC:()=>y,gk:()=>w,n4:()=>O,pW:()=>m,vb:()=>P});var n=r(45987),o=r(29439),i=r(4942),a=r(36968),l=r.n(a),s=r(57557),c=r.n(s),u=r(66604),p=r.n(u),f=r(81249),g=r(13784),d=["label"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e,t){return l()(e,[t,t],Object.values(h({},e[t])).filter((function(e){return e!==t})).every(Boolean))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(void 0===t?e:t).reduce((function(t,r){var n=r.split("."),i=(0,o.Z)(n,1)[0];return l()(t,[i,r],e.includes(r)),y(t,i),t}),{})},O=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r?(0,f.compare)((0,f.coerce)(e),(0,f.coerce)(t)):(0,f.rcompare)((0,f.coerce)(e),(0,f.coerce)(t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.values(e).reduce((function(e,t){return Object.entries(t).forEach((function(t){var r=(0,o.Z)(t,2),n=r[0];return r[1]&&n.match(/[0-9]+.[0-9]+/)&&e.push(n)})),e}),[])},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.value,o=n.split(".")[0];return void 0===e[o]&&(e[o]={groupSelectable:!0,label:"RHEL "+o,value:o,type:"checkbox",items:[]}),e[o].items.push({label:r,value:n,type:"checkbox"}),e}),{}));t.sort((function(e,t){return O(e[0],t[0],!1)}));var r=t.map((function(e){return e[1].items.sort((function(e,t){return O(e.value,t.value,!1)})),e[1]}));return r},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=m(e),o=t.filter((function(e){var t=e.value;return r.includes(t)})).map((function(e){return h({name:e.label},(0,n.Z)(e,d))}));return(null==r?void 0:r.length)>0?[{category:"Operating System",type:g.vi,chips:o}]:[]},w=function(e,t,r,n){var o=Object.assign({},t),i=o[r.value][n.value],a=r.value;return n.value===a?o[a]=p()(o[a],(function(){return i})):o[a][a]=Object.values(c()(o[a],a)).every(Boolean),o}},28414:(e,t,r)=>{r.d(t,{e:()=>Se});var n=r(87462),o=r(4942),i=r(29439),a=r(45987),l=r(92950),s=r.n(l),c=r(45697),u=r.n(c),p=r(50533),f=r(84506),g=r(93433),d=r(76566),b=r.n(d),h=r(35664),y=r(3474),v=r(81945),O=r(7887),m=r(3672),P=r(23279),j=r.n(P),w=r(14918),E=r(62965),F=r(27361),T=r.n(F),D=r(85564),S=r.n(D),Z=r(13718),R=["actions","expandable","noSystemsTable"],C=["props","transforms","cellFormatters"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e,t,r){return t.map((function(t){var n=t.key,o=t.composed,i=t.renderFunc,a=o?s().createElement(l.Fragment,null,(0,Z.Z)(o.map((function(t){return T()(e,t," ")})),e.id,e,r)):T()(e,n," ");return i?s().createElement(l.Fragment,null,i(a,e.id,e,r)):a}))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.actions,o=r.expandable,i=r.noSystemsTable,l=(0,a.Z)(r,R);return 0===e.length?[{cells:[{title:i,props:{colSpan:t.length+Boolean(n),dataLabel:null}}]}]:S()(e.map((function(e,r){return[B(B(B({},e),e.children&&o&&{isOpen:!!e.isOpen}),{},{cells:_(e,t,l),actionProps:{"data-ouia-component-id":"".concat(e.id,"-actions-kebab")}}),e.children&&o&&{cells:[{title:"function"==typeof e.children?e.children():e.children}],parent:2*r,fullWidth:!0}]}))).filter(Boolean)},M=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(null==e||null===(t=e.chips)||void 0===t?void 0:t[0])||{},o=n.value;return r.filter((function(e){return e!==o}))},I=function(e){return null==e?void 0:e.reduce((function(e,t){return e||t.toString().includes("onSort:")}),!1)},x=r(85001),L=r(7314),H=["total","page","perPage","filterConfig","hasItems","children","actionsConfig","activeFiltersConfig","showTags","getTags","items","sortBy","customFilters","hasAccess","bulkSelect","hideFilters","paginationProps","onRefreshData","loaded","showTagModal"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(e){var t,r=e.total,c=e.page,u=e.perPage,d=e.filterConfig,P=e.hasItems,E=e.children,F=e.actionsConfig,T=e.activeFiltersConfig,D=e.showTags,S=e.getTags,Z=e.items,R=e.sortBy,C=e.customFilters,k=e.hasAccess,B=e.bulkSelect,_=e.hideFilters,A=e.paginationProps,I=e.onRefreshData,W=e.loaded,V=e.showTagModal,N=(0,a.Z)(e,H),K=(0,p.useDispatch)(),Y=(0,l.useReducer)((0,x.Ae)([x.sQ,x.lq,x.a,y.sr,x.BG,x.rh,x.Gi]),G(G(G(G(G(G({},x.RK),x.gp),x.Os),y.Yn),x.am),x.yd)),q=(0,p.useSelector)((function(e){return e.entities.activeFilters})),z=(0,p.useSelector)((function(e){return e.entities.allTagsLoaded})),U=(0,p.useSelector)((function(e){return e.entities.allTags})),X=(0,p.useSelector)((function(e){return e.entities.additionalTagsCount})),J=(0,x.xG)(Y),Q=(0,i.Z)(J,4),$=Q[0],ee=Q[1],te=Q[2],re=Q[3],ne=(0,x.D)(Y),oe=(0,i.Z)(ne,4),ie=oe[0],ae=oe[1],le=oe[2],se=oe[3],ce=(0,x.fz)(Y),ue=(0,i.Z)(ce,4),pe=ue[0],fe=ue[1],ge=ue[2],de=ue[3],be=(0,x.XZ)(Y),he=(0,i.Z)(be,4),ye=he[0],ve=he[1],Oe=he[2],me=he[3],Pe=(0,L.ZP)(),je=(0,i.Z)(Pe,4),we=je[0],Ee=je[1],Fe=je[2],Te=je[3],De=(0,x.vf)(Y),Se=(0,i.Z)(De,4),Ze=Se[0],Re=Se[1],Ce=Se[2],ke=Se[3],Be=(0,x.YM)(U,z,X,(function(){return K((0,m.Ar)(!0))}),Y),_e=Be.tagsFilter,Ae=Be.tagsChip,Me=Be.selectedTags,Ie=Be.setSelectedTags,xe=Be.filterTagsBy,Le=Be.seFilterTagsBy,He=(0,l.useCallback)(j()((function(e,t){D&&!P&&k&&K((0,m.C8)(e,G({},null==t?void 0:t.pagination),S))}),800),[null==C?void 0:C.tags]),We={name:!(_.all&&!1!==_.name||_.name),stale:!(_.all&&!1!==_.stale||_.stale),registeredWith:!(_.all&&!1!==_.registeredWith||_.registeredWith),operatingSystem:!(_.all&&!1!==_.operatingSystem||_.operatingSystem),tags:!(_.all&&!1!==_.tags||_.tags),rhcdFilter:!(_.all&&!1!==_.rhcdFilter||_.rhcdFilter),updateMethodFilter:!(_.all&&!1!==_.updateMethodFilter||_.updateMethodFilter)},Ge=(0,l.useCallback)((function(e){k&&(I(e),D&&!P&&K((0,m.C8)(xe,{},S)))}),[null==C?void 0:C.tags]),Ve=function(e){k&&Ge(e)},Ne=(0,l.useCallback)(j()((function(e){return Ve(e)}),800),[null==R?void 0:R.key,null==R?void 0:R.direction]);(0,l.useEffect)((function(){var e=(0,w.reduceFilters)([].concat((0,g.Z)(q||[]),(0,g.Z)((null==C?void 0:C.filters)||[]))),t=e.textFilter,r=e.tagFilters,n=e.staleFilter,o=e.registeredWithFilter,i=e.osFilter,a=e.rhcdFilter,l=e.updateMethodFilter;Ne(),We.name&&re(t),We.stale&&se(n),We.registeredWith&&de(o),We.tags&&Ie(r),We.operatingSystem&&Te(i),We.rhcdFilter&&me(a),We.updateMethodFilter&&ke(l)}),[]);var Ke=function(e,t,r){var n=[].concat((0,g.Z)(null==q?void 0:q.filter((function(e){return!Object.prototype.hasOwnProperty.call(e,t)}))),[(0,o.Z)({},t,e)]);r({page:1,perPage:u,filters:n})},Ye=c&&u&&q&&(!P||Z);(0,l.useEffect)((function(){Ye&&D&&We.tags&&He(xe)}),[xe,null==C?void 0:C.tags]),(0,l.useEffect)((function(){Ye&&We.name&&function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=e.trim(),n=null==q?void 0:q.find((function(e){return e.value===w.TEXT_FILTER}));n?n.filter=r:null==q||q.push({value:w.TEXT_FILTER,filter:r}),(t?Ne:Ve)({page:1,perPage:u,filters:q})}(te,!0)}),[te]),(0,l.useEffect)((function(){Ye&&We.stale&&Ke(le,"staleFilter",Ne)}),[le]),(0,l.useEffect)((function(){Ye&&We.registeredWith&&Ke(ge,"registeredWithFilter",Ne)}),[ge]),(0,l.useEffect)((function(){Ye&&D&&We.tags&&Ke((0,v.Nc)(Me),"tagFilters",Ne)}),[Me]),(0,l.useEffect)((function(){Ye&&We.operatingSystem&&Ke(Fe,"osFilter",Ne)}),[Fe]),(0,l.useEffect)((function(){Ye&&We.rhcdFilter&&Ke(Oe,"rhcdFilter",Ne)}),[Oe]),(0,l.useEffect)((function(){Ye&&We.updateMethodFilter&&Ke(Ce,"updateMethodFilter",Ne)}),[Ce]);var qe=(t={},(0,o.Z)(t,w.TEXTUAL_CHIP,(function(){return re("")})),(0,o.Z)(t,w.TAG_CHIP,(function(e){return Ie(function(e,t,r){var n,o,i=null==e||null===(n=e.chips)||void 0===n?void 0:n[0];return void 0!==(null==t||null===(o=t[null==e?void 0:e.key])||void 0===o?void 0:o[null==i?void 0:i.key])&&(t[null==e?void 0:e.key][null==i?void 0:i.key]=!1),r&&r(t),t}(e,Me,(function(e){return Ke((0,v.Nc)(e),"tagFilters",Ve)})))})),(0,o.Z)(t,w.STALE_CHIP,(function(e){return se(M(e,le))})),(0,o.Z)(t,w.REGISTERED_CHIP,(function(e){return de(M(e,ge))})),(0,o.Z)(t,w.OS_CHIP,(function(e){return Te(b()(Fe,e.chips.map((function(e){return e.value}))))})),(0,o.Z)(t,w.RHCD_FILTER_KEY,(function(e){return me(M(e,Oe))})),(0,o.Z)(t,w.UPDATE_METHOD_KEY,(function(e){return ke(M(e,Ce))})),t),ze=[].concat((0,g.Z)(P?[]:[].concat((0,g.Z)(We.name?[$]:[]),(0,g.Z)(We.stale?[ie]:[]),(0,g.Z)(We.operatingSystem?[we]:[]),(0,g.Z)(We.registeredWith?[pe]:[]),(0,g.Z)(We.rhcdFilter?[ye]:[]),(0,g.Z)(We.updateMethodFilter?[Ze]:[]),(0,g.Z)(D&&We.tags?[_e]:[]))),(0,g.Z)((null==d?void 0:d.items)||[]));return s().createElement(l.Fragment,null,s().createElement(O.Z,(0,n.Z)({},N,B&&{bulkSelect:G(G({},B),{},{isDisabled:(null==B?void 0:B.isDisabled)||!k})},{className:"ins-c-inventory__table--toolbar ".concat(P||!ze.length?"ins-c-inventory__table--toolbar-has-items":"")},(null==ze?void 0:ze.length)>0&&{filterConfig:G(G({},d||{}),{},{isDisabled:!k,items:null==ze?void 0:ze.map((function(e){var t,r;return G(G({},e),{},{filterValues:G(G({placeholder:(null==e||null===(t=e.filterValues)||void 0===t?void 0:t.placeholder)||"Filter by ".concat(null==e||null===(r=e.label)||void 0===r?void 0:r.toLowerCase())},null==e?void 0:e.filterValues),{},{isDisabled:!k})})}))})},k&&{activeFiltersConfig:G(G({},T||{}),{},{filters:[].concat((0,g.Z)(D&&!P&&We.tags?Ae:[]),(0,g.Z)(!P&&We.name?ee:[]),(0,g.Z)(!P&&We.stale?ae:[]),(0,g.Z)(!P&&We.registeredWith?fe:[]),(0,g.Z)(!P&&We.operatingSystem?Ee:[]),(0,g.Z)(!P&&We.rhcdFilter?ve:[]),(0,g.Z)(!P&&We.updateMethodFilter?Re:[]),(0,g.Z)((null==T?void 0:T.filters)||[])),onDelete:function(e,t,r){var n,o=(0,f.Z)(t),i=o[0],a=o.slice(1);r?(K((0,m.K5)()),We.name&&re(""),We.stale&&se([]),We.registeredWith&&de([]),We.tags&&Ie({}),We.operatingSystem&&Te([]),We.rhcdFilter&&me([]),We.updateMethodFilter&&ke([]),K((0,m.Tv)([])),Ve({page:1,filters:[]})):null===(n=qe[i.type])||void 0===n||n.call(qe,i),T&&T.onDelete&&T.onDelete(e,[i].concat((0,g.Z)(a)),r)}})},{actionsConfig:W?F:null,pagination:W?G({page:c,itemCount:k?r:0,isDisabled:!k,perPage:u,onSetPage:function(e,t){return I({page:t})},onPerPageSelect:function(e,t){return I({page:1,per_page:t})}},A):s().createElement(h.Z,{size:h.i.lg})}),E),(D||We.tags||V)&&s().createElement(w.TagsModal,{filterTagsBy:xe,onApply:function(e){return Ie((0,w.arrayToSelection)(e))},onToggleModal:function(){return Le("")},getTags:S}))};V.propTypes={showTags:u().bool,getTags:u().func,hasAccess:u().bool,filterConfig:u().object,total:u().number,hasItems:u().bool,page:u().number,onClearFilters:u().func,toggleTagModal:u().func,perPage:u().number,children:u().node,pagination:u().shape({page:u().number,perPage:u().number}),actionsConfig:u().object,activeFiltersConfig:u().object,onRefreshData:u().func,customFilters:u().shape({tags:u().oneOfType([u().object,u().arrayOf(u().string)]),filters:u().array}),hideFilters:u().shape({tags:u().bool,name:u().bool,registeredWith:u().bool,stale:u().bool,operatingSystem:u().bool,rhcdFilter:u().bool,updateMethodFilter:u().bool,all:u().bool}),paginationProps:u().object,loaded:u().bool,onRefresh:u().func,hasCheckbox:u().bool,isLoaded:u().bool,items:u().array,sortBy:u().object,bulkSelect:u().object,showTagModal:u().bool,disableDefaultColumns:u().any},V.defaultProps={showTags:!1,hasAccess:!0,activeFiltersConfig:{},hideFilters:{}};const N=V;var K=r(65550),Y=r(2443),q=r(75662),z=r(81739),U=r(75106),X=r(9947),J=r(38779);const Q=function(){return s().createElement(X.u,{variant:X.I.full},s().createElement(J.D,{headingLevel:"h5",size:"lg"},"No matching systems found"),s().createElement(U.B,null,"To continue, edit your filter settings and search again."))};var $=r(1284),ee=r(21216);var te;function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e){var t=e.hasItems,r=e.expandable,o=e.onExpandClick,i=e.hasCheckbox,c=e.actions,u=e.variant,f=e.sortBy,d=e.tableProps,b=e.onSort,h=e.expandable,y=e.onRowClick,v=e.noDetail,O=e.noSystemsTable,P=void 0===O?s().createElement(Q,null):O,j=e.showTags,w=e.columns,F=e.disableDefaultColumns,T=e.loaded,D=e.columnsCounter,S=(0,p.useDispatch)(),Z=(0,q.useHistory)(),R=(0,q.useLocation)(),k=function(e,t,r,n){var o=(0,p.useSelector)((function(e){return e.entities.columns}),(function(e,t){return e.every((function(e,r){var n=e.key;return t.findIndex((function(e){return e.key===n}))===r}))})),i=Array.isArray(t)?t:[],a=(0,l.useMemo)((function(){return!0===t?[]:(0,ee.y5)().filter((function(e){return function(e,t,r){return"tags"===e&&r||"tags"!==e&&Array.isArray(t)&&!t.includes(e)}(e.key,i,r)}))}),[i,t,r]);return(0,l.useMemo)((function(){return"function"==typeof e?e((0,ee.y5)()):e?(0,$.mergeArraysByKey)([a,e],"key"):!e&&o?o:a}),[r,Array.isArray(t)?t.join():t,Array.isArray(e)?e.map((function(e){return e.key})).join():"function"==typeof e?"function":e,Array.isArray(o)?o.map((function(e){return e.key})).join():o,n])}(w,F,j,D),_=(0,p.useSelector)((function(e){return e.entities.rows})),M=(0,l.useMemo)((function(){return T&&function(e,t,r,n){return null==e?void 0:e.map((function(e){var o=e.props,i=e.transforms,l=e.cellFormatters;return B(B({},(0,a.Z)(e,C)),{},{transforms:[].concat((0,g.Z)(i||[]),(0,g.Z)(null!=o&&o.width?[(0,E.cellWidth)(o.width)]:[]),(0,g.Z)(t||r.length<=0||o&&o.isStatic||null!=i&&i.includes(E.sortable)||I(i)?[]:[E.sortable])),cellFormatters:[].concat((0,g.Z)(l||[]),(0,g.Z)(n?[E.expandable]:[]))})}))}(k,t,_,h)}),[T,k,t,_,h]);return delete d.RowWrapper,0===(null==_?void 0:_.length)&&delete d.actionResolver,s().createElement(s().Fragment,null,T&&M?E.Table&&s().createElement(E.Table,(0,n.Z)({variant:u,"aria-label":"Host inventory",cells:M,rows:A(_,k,{actions:c,expandable:r,loaded:T,onRowClick:y||function(e,t){Z.push("".concat(R.pathname).concat("/"===R.pathname.slice(-1)?"":"/").concat(t))},noDetail:v,sortBy:f,noSystemsTable:P}),gridBreakPoint:(null==k?void 0:k.length)>5?E.TableGridBreakpoint.gridLg:E.TableGridBreakpoint.gridMd,className:"ins-c-entity-table",onSort:function(e,t,n){var o,a;!function(e,t,r,n){"action"!==t&&"health"!==t&&S((0,m.HD)({index:n,key:t,direction:r})),null==b||b({index:n,key:t,direction:r})}(0,(null==M||null===(o=M[t-Boolean(i)-Boolean(r)])||void 0===o?void 0:o.sortKey)||(null==M||null===(a=M[t-Boolean(i)-Boolean(r)])||void 0===a?void 0:a.key),n,t)},sortBy:{index:(null==M?void 0:M.findIndex((function(e){return(null==f?void 0:f.key)===e.key||"operating_system"===(null==f?void 0:f.key)&&"system_profile"===e.key})))+Boolean(i)+Boolean(r),direction:null==f?void 0:f.direction}},ne(ne(ne({},i&&0!==(null==_?void 0:_.length)?{onSelect:function(e,t,r){var n=h?_[r/2]:_[r];S((0,m.CL)(-1===r?0:n.id,t))}}:{}),r?{onCollapse:o}:{}),c&&(null==_?void 0:_.length)>0&&{actions:c}),{isStickyHeader:!0},d),s().createElement(E.TableHeader,null),s().createElement(E.TableBody,null)):s().createElement(z.Z,{colSize:(null==k?void 0:k.length)||3,rowSize:15,variant:null!=u?u:d.variant}))};oe.propTypes={variant:u().oneOf(["compact"]),expandable:u().bool,onExpandClick:u().func,onSort:u().func,hasCheckbox:u().bool,showActions:u().bool,hasItems:u().bool,showHealth:u().bool,sortBy:u().shape({key:u().string,direction:u().oneOf(["asc","desc"])}),tableProps:u().shape((te={},(0,o.Z)(te,u().string,u().any),(0,o.Z)(te,"RowWrapper",u().elementType),(0,o.Z)(te,"variant",u().string),(0,o.Z)(te,"actionResolver",u().func),te)),onRowClick:u().func,showTags:u().bool,noSystemsTable:u().node,disableDefaultColumns:u().oneOfType([u().bool,u().arrayOf(u().string)]),loaded:u().bool,columnsCounter:u().number,columns:u().oneOfType([u().array,u().func]),isLoaded:u().bool,actions:u().array,noDetail:u().any},oe.defaultProps={loaded:!1,showHealth:!1,expandable:!1,hasCheckbox:!0,showActions:!1,rows:[],variant:E.TableVariant.compact,onExpandClick:function(){},tableProps:{}};const ie=oe;var ae=r(50693),le=r(16475),se=r(18446),ce=r.n(se),ue=r(85630),pe=["children","isOpen"],fe=["showHealth","onRefreshData","ignoreRefresh"],ge=["hasAccess","onRefreshData"];function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=function(e){return e.children,e.isOpen,(0,a.Z)(e,pe)},ye=function(e){e.showHealth;var t=e.onRefreshData,r=e.ignoreRefresh,o=(0,a.Z)(e,fe),i=(0,l.useRef)(o.items),c=(0,l.useRef)(o.sortBy);return(0,l.useEffect)((function(){o.hasItems&&t({},r)}),[]),(0,l.useEffect)((function(){o.hasItems&&!ce()(i.current.map(he),o.items.map(he))&&(i.current=o.items,t({},r)),o.hasItems||ce()(c.current,o.sortBy)||(c.current=o.sortBy,t({},r))})),s().createElement(ae.r,{gutter:"sm",className:"ins-inventory-list"},s().createElement(le.P,{span:12},s().createElement(ie,(0,n.Z)({},o,{onRefreshData:t}))))},ve=s().forwardRef((function(e,t){var r=e.hasAccess,o=e.onRefreshData,i=(0,a.Z)(e,ge),l=(0,p.useSelector)((function(e){return e.entities.activeFilters}));return t&&(t.current={onRefreshData:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return o(e,t)}}),r?s().createElement(ye,(0,n.Z)({},i,{activeFilters:l,onRefreshData:o})):s().createElement("div",{className:"ins-c-inventory__no-access"},s().createElement(ue.Z,{showReturnButton:!1}))}));ye.propTypes=be(be({},ve.propTypes),{},{setRefresh:u().func,onRefreshData:u().func,ignoreRefresh:u().bool}),ye.defaultProps={perPage:50,page:1,ignoreRefresh:!0},ve.propTypes={showTags:u().bool,filterEntities:u().func,loadEntities:u().func,showHealth:u().bool,page:u().number,perPage:u().number,sortBy:u().shape({key:u().string,direction:u().string}),items:u().arrayOf(u().oneOfType([u().string,u().shape({id:u().string.isRequired}),u().shape({account:u().any,isOpen:u().bool,title:u().node})])),entities:u().arrayOf(u().any),customFilters:u().shape({tags:u().oneOfType([u().object,u().arrayOf(u().string)])}),getEntities:u().func,hideFilters:u().shape({tags:u().bool,name:u().bool,registeredWith:u().bool,stale:u().bool,operatingSystem:u().bool}),onRefreshData:u().func},ve.defaultProps={hasAccess:!0};const Oe=ve;var me=r(44733),Pe=function(e){var t=e.total,r=e.page,o=e.perPage,i=e.direction,a=e.isFull,l=e.hasAccess,c=e.paginationProps,u=e.onRefreshData;return e.loaded||!l?s().createElement(me.t,(0,n.Z)({},a&&{variant:me.a.bottom},{isDisabled:!l,itemCount:t,page:r,perPage:o,dropDirection:i,onSetPage:function(e,t){return u({page:t})},onPerPageSelect:function(e,t){return u({page:1,per_page:t})}},c)):null};Pe.propTypes={perPage:u().number,total:u().number,page:u().number,isFull:u().bool,hasAccess:u().bool,direction:u().string,paginationProps:u().object,loaded:u().bool,onRefreshData:u().func.isRequired},Pe.defaultProps={total:0,isFull:!1,direction:"up",hasAccess:!0};const je=Pe;var we=r(96396),Ee=["onRefresh","children","inventoryRef","items","total","page","perPage","showTags","sortBy","customFilters","hasAccess","isFullView","getEntities","getTags","hideFilters","paginationProps","errorState","autoRefresh","isLoaded","initialLoading","ignoreRefresh","showTagModal","tableProps","isRbacEnabled","hasCheckbox","onRowClick"];function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De=(0,l.forwardRef)((function(e,t){var r=e.onRefresh,o=e.children,c=(e.inventoryRef,e.items),u=e.total,f=e.page,g=e.perPage,d=e.showTags,b=e.sortBy,h=e.customFilters,y=e.hasAccess,v=void 0===y||y,O=e.isFullView,P=void 0!==O&&O,j=e.getEntities,w=e.getTags,E=e.hideFilters,F=e.paginationProps,T=e.errorState,D=void 0===T?s().createElement(Y.Z,null):T,S=e.autoRefresh,Z=e.isLoaded,R=e.initialLoading,C=e.ignoreRefresh,k=e.showTagModal,B=e.tableProps,_=(e.isRbacEnabled,e.hasCheckbox),A=e.onRowClick,M=(0,a.Z)(e,Ee),I=Boolean(c),x=(0,p.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.error})),L=(0,p.useSelector)((function(e){var t=e.entities.page;return I?f:t||1}),p.shallowEqual),H=(0,p.useSelector)((function(e){var t=e.entities.perPage;return I?g:t||50}),p.shallowEqual),W={page:L,perPage:H,total:(0,p.useSelector)((function(e){var t=e.entities.total;return I?void 0!==u?u:null==c?void 0:c.length:t}),p.shallowEqual)},G=(0,p.useSelector)((function(e){var t=e.entities.sortBy;return I?b:t}),p.shallowEqual),V=(0,p.useSelector)((function(e){var t=e.entities;return I&&void 0!==Z?Z&&(null==t?void 0:t.loaded):null==t?void 0:t.loaded})),q=(0,l.useState)(R),z=(0,i.Z)(q,2),U=z[0],X=z[1];(0,l.useEffect)((function(){V||X()}),[V]);var J=V&&!U,Q=(0,p.useDispatch)(),$=(0,p.useStore)(),ee=(0,l.useRef)(function(){var e={};return{updateProps:function(t){e=t},getProps:function(){return e}}}());ee.current.updateProps({page:L,perPage:H,items:c,sortBy:G,hideFilters:E,showTags:d,getEntities:j,customFilters:h,hasItems:I});var te=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=$.getState().entities.activeFilters,i=(null===(e=ee.current)||void 0===e?void 0:e.getProps())||{},a=(null==t?void 0:t.per_page)||(null==t?void 0:t.perPage)||i.perPage,l=Te(Te({page:i.page,per_page:a,items:i.items,sortBy:i.sortBy,hideFilters:i.hideFilters,filters:o,hasItems:i.hasItems},i.customFilters),t);r&&!n?(Q((0,m.nE)()),r(l,(function(e){Q((0,we.K$)(Te(Te({},l),e),i.showTags,i.getEntities))}))):Q((0,we.K$)(l,i.showTags,i.getEntities))},re=(0,l.useRef)(h);return(0,l.useEffect)((function(){S&&!ce()(re.current,h)&&(te({page:1}),re.current=h)})),!1===v&&P?s().createElement(ue.Z,{title:"This application requires Inventory permissions",description:s().createElement("div",null,"To view the content of this page, you must be granted a minimum of inventory permissions from your Organization Administrator.")}):x?D:s().createElement(l.Fragment,null,s().createElement(N,(0,n.Z)({},M,{customFilters:h,hasAccess:v,items:c,hasItems:I,total:W.total,page:W.page,perPage:W.perPage,showTags:d,getTags:w,onRefreshData:te,sortBy:G,hideFilters:E,paginationProps:F,loaded:J,showTagModal:k,activeFiltersConfig:Te({deleteTitle:"Reset filters"},M.activeFiltersConfig)}),o),s().createElement(Oe,(0,n.Z)({},M,{hasCheckbox:_,onRowClick:A,tableProps:B,customFilters:h,hasAccess:v,ref:t,hasItems:I,items:c,page:W.page,sortBy:G,perPage:W.perPage,showTags:d,onRefreshData:te,loaded:J,ignoreRefresh:C})),s().createElement(K.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},s().createElement(je,{hasAccess:v,isFull:!0,total:W.total,page:W.page,perPage:W.perPage,hasItems:I,onRefreshData:te,paginationProps:F,loaded:J})))}));De.propTypes={autoRefresh:u().bool,onRefresh:u().func,children:u().node,inventoryRef:u().object,items:u().array,total:u().number,page:u().number,perPage:u().number,showTags:u().bool,getTags:u().func,sortBy:u().object,customFilters:u().any,hasAccess:u().bool,isFullView:u().bool,getEntities:u().func,hideFilters:u().object,paginationProps:u().object,errorState:u().node,isLoaded:u().bool,initialLoading:u().bool,ignoreRefresh:u().bool,showTagModal:u().bool,activeFiltersConfig:u().object,tableProps:u().object,isRbacEnabled:u().bool,hasCheckbox:u().bool,onRowClick:u().func};const Se=De},85001:(e,t,r)=>{r.d(t,{Ae:()=>U,BG:()=>k.BG,a:()=>T,Os:()=>E,rh:()=>x,am:()=>M,lq:()=>O,gp:()=>y,sQ:()=>u,RK:()=>s,Gi:()=>K,yd:()=>V,fz:()=>D,XZ:()=>L,D:()=>m,YM:()=>C,xG:()=>p,vf:()=>Y});var n=r(4942),o=r(29439),i=r(92950),a=r(14918);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s={textFilter:""},c="TEXT_FILTER",u=function(e,t){var r=t.type,o=t.payload;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r===c&&{textFilter:o})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[s],t=(0,o.Z)(e,2),r=t[0],n=t[1],l=(0,i.useState)(""),u=(0,o.Z)(l,2),p=u[0],f=u[1],g=n?r.textFilter:p,d=n?function(e){return n({type:c,payload:e})}:f,b={label:"Name",value:"name-filter",filterValues:{placeholder:"Filter by name",value:g,onChange:function(e,t){return d(t)}}},h=g.length>0?[{category:"Display name",type:a.TEXTUAL_CHIP,chips:[{name:g}]}]:[];return[b,h,g,d]},f=r(45987),g=r(13784),d=["label"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={stalenessFilter:[]},v="STALENESS_FILTER",O=function(e,t){var r=t.type,n=t.payload;return h({},r===v&&{stalenessFilter:n})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[y],t=(0,o.Z)(e,2),r=t[0],n=t[1],a=(0,i.useState)([]),l=(0,o.Z)(a,2),s=l[0],c=l[1],u=n?r.stalenessFilter:s,p=n?function(e){return n({type:v,payload:e})}:c,b={label:"Status",value:"stale-status",type:"checkbox",filterValues:{value:u,onChange:function(e,t){return p(t)},items:g.jv}},O=(null==u?void 0:u.length)>0?[{category:"Status",type:g.yc,chips:g.jv.filter((function(e){var t=e.value;return u.includes(t)})).map((function(e){return h({name:e.label},(0,f.Z)(e,d))}))}]:[];return[b,O,u,p]},P=["label"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={registeredWithFilter:[]},F="REGISTERED_WITH_FILTER",T=function(e,t){var r=t.type,n=t.payload;return w({},r===F&&{registeredWithFilter:n})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[E],t=(0,o.Z)(e,2),r=t[0],n=t[1],a=(0,i.useState)([]),l=(0,o.Z)(a,2),s=l[0],c=l[1],u=n?r.registeredWithFilter:s,p=n?function(e){return n({type:F,payload:e})}:c,d={label:"Data Collector",value:"data-collector-registered-with",type:"checkbox",filterValues:{value:u,onChange:function(e,t){return p(t)},items:g.Gw}},b=(null==u?void 0:u.length)>0?[{category:"Data Collector",type:g.p9,chips:g.Gw.filter((function(e){var t=e.value;return u.includes(t)})).map((function(e){return w({name:e.label},(0,f.Z)(e,P))}))}]:[];return[d,b,u,p]},S=r(3474);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=(0,S.YM)(e,t,r,n,o,"system"),a=i.filter,l=i.chips,s=i.selectedTags,c=i.setValue,u=i.filterTagsBy,p=i.seFilterTagsBy;return{tagsFilter:{label:"Tags",value:"tags",type:"group",placeholder:"Filter system by tag",filterValues:R({},a)},tagsChip:l,selectedTags:s,setSelectedTags:c,filterTagsBy:u,seFilterTagsBy:p}},k=r(7314),B=["label"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={rhcdFilter:null},I="RHCD_FILTER",x=function(e,t){var r=t.type,n=t.payload;return A({},r===I&&{rhcdFilter:n})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[M],t=(0,o.Z)(e,2),r=t[0],n=t[1],l=(0,i.useState)([]),s=(0,o.Z)(l,2),c=s[0],u=s[1],p=n?r.rhcdFilter:c,g=n?function(e){return n({type:I,payload:e})}:u,d={label:"RHC status",value:"rhc-status",type:"checkbox",filterValues:{value:p,onChange:function(e,t){return g(t)},items:a.rhcdOptions}},b=(null==p?void 0:p.length)>0?[{category:"RHC status",type:a.RHCD_FILTER_KEY,chips:a.rhcdOptions.filter((function(e){var t=e.value;return p.includes(t)})).map((function(e){return A({name:e.label},(0,f.Z)(e,B))}))}]:[];return[d,b,p,g]},H=["label"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={updateMethodFilter:null},N="UPDATE_METHOD_FILTER",K=function(e,t){var r=t.type,n=t.payload;return G({},r===N&&{updateMethodFilter:n})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[V],t=(0,o.Z)(e,2),r=t[0],n=t[1],l=(0,i.useState)([]),s=(0,o.Z)(l,2),c=s[0],u=s[1],p=n?r.updateMethodFilter:c,g=n?function(e){return n({type:N,payload:e})}:u,d={label:"System Update Method",value:"update-method",type:"checkbox",filterValues:{value:p,onChange:function(e,t){return g(t)},items:a.updateMethodOptions}},b=(null==p?void 0:p.length)>0?[{category:"System Update Method",type:a.UPDATE_METHOD_KEY,chips:a.updateMethodOptions.filter((function(e){var t=e.value;return p.includes(t)})).map((function(e){return G({name:e.label},(0,f.Z)(e,H))}))}]:[];return[d,b,p,g]};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){return function(t,r){return e.reduce((function(e,n){return z(z({},e),null==n?void 0:n(t,r))}),t)}}},7314:(e,t,r)=>{r.d(t,{BG:()=>u,ZP:()=>p});var n=r(29439),o=r(4942),i=r(92950),a=r(50533),l=r(8622),s=r(98436);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e,t){var r=t.type,n=t.payload;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},"OPERATING_SYSTEM_FILTER"===r&&{operatingSystemFilter:n})};const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(0,a.useDispatch)(),r=(0,a.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),o=(0,a.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded}))||!1,c=(0,i.useState)({}),u=(0,n.Z)(c,2),p=u[0],f=u[1],g=(0,i.useState)([]),d=(0,n.Z)(g,2),b=d[0],h=d[1];(0,i.useEffect)((function(){t((0,l.g6)(e))}),[]),(0,i.useEffect)((function(){var e=(0,s.vb)(r);h(0===(r||[]).length?[{items:[{label:"No versions available"}]}]:e),f((0,s.CR)((0,s.pW)(p),(r||[]).map((function(e){return e.value}))))}),[r]);var y=(0,i.useMemo)((function(){return{label:"Operating System",value:"operating-system-filter",type:"group",filterValues:{selected:p,groups:b,onChange:function(e,t,r,n){f((0,s.gk)(e,t,r,n))}}}}),[p,b]),v=(0,i.useMemo)((function(){return(0,s.DJ)(p,r)}),[p,r]),O=(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f((0,s.CR)(e,o?(r||[]).map((function(e){return e.value})):void 0))}),[o,r]),m=(0,i.useMemo)((function(){return(0,s.pW)(p)}),[p]);return[y,v,m,O]}}}]);
//# sourceMappingURL=../sourcemaps/8414.8674b934f7ee69267951a0f64e0c4d65.js.map