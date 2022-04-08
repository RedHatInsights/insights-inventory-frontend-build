"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5684,1931],{39903:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(96985),o=n.n(r),a=n(45697),i=n.n(a),l=n(66435),s=n(80236),u=n(79851),c=n(34512),d=n(49739),p=n(83826),f=n(48140),v=n(86050),y=n(47173),g=n(19694),m=function(e){var t,n=e.handleModalToggle,r=e.isModalOpen,a=e.currentSytems,i=e.onConfirm,m="system";return Array.isArray(a)?(t=1===a.length?a[0].display_name:"".concat(a.length," systems"),m=1===a.length?m:"systems"):t=a.display_name,o().createElement(s.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",ouiaId:"inventory-delete-modal",isOpen:r,onClose:function(){return n(!1)},appendTo:document.getElementsByClassName("inventory")[0]||document.body},o().createElement(u.P,{hasGutter:!0},o().createElement(c.J,null,o().createElement(g.ZP,{size:"xl",className:"ins-m-alert"})),o().createElement(c.J,{isFilled:!0},o().createElement(d.K,{hasGutter:!0},o().createElement(p.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",m," to add it back to your inventory."),o().createElement(p.v,null,"To disable the daily upload for this ",m,", use the following command:"),o().createElement(p.v,null,o().createElement(l.M5,null,"insights-client --unregister"))))),o().createElement(f.a,{hasGutter:!0},o().createElement(v.Z,null,o().createElement(y.zx,{variant:"danger",ouiaId:"confirm-inventory-delete",onClick:i},"Remove"),o().createElement(y.zx,{variant:"link",ouiaId:"cancel-inventory-delete",onClick:function(){return n(!1)}},"Cancel"))))},b=i().shape({id:i().string,displayName:i().string});m.propTypes={isModalOpen:i().bool,currentSytems:i().oneOfType([b,i().arrayOf(b)]),handleModalToggle:i().func,onConfirm:i().func},m.defaultProps={isModalOpen:!1,currentSytems:{},handleModalToggle:function(){},onConfirm:function(){}};const h=m},98436:(e,t,n)=>{n.d(t,{VU:()=>c,Zf:()=>p,VT:()=>f});var r=n(45987),o=n(4942),a=n(29439),i=n(73880),l=["label"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){return e.reduce((function(e,t){var n=t.split("."),r=(0,a.Z)(n,2),i=r[0],l=r[1];return e["".concat(i,".0")]=u(u({},e["".concat(i,".0")]||{}),{},(0,o.Z)({},"".concat(i,".").concat(l),!0)),e}),{})},d=function(e){return e.filter((function(e){return"0"===e.value.split(".")[1]})).map((function(t){return u(u({},t),{},{groupSelectable:!0,items:e.filter((function(e){var n=e.value.split("."),r=(0,a.Z)(n,2),o=r[0],i=r[1];return o===t.value.split(".")[0]&&"0"!==i})).sort((function(e){return e.value.split(".")[1]}))})}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u(u({},e),{},{label:"Operating System",type:"group",filterValues:{selected:e.value,onChange:e.onChange,groups:d(i.operatingSystems).map((function(e){var t;return u(u({},e),{},{type:"checkbox",items:null===(t=e.items)||void 0===t?void 0:t.map((function(e){return u(u({},e),{},{type:"checkbox"})}))})}))}})},f=function(e){var t=Object.values(e||{}).flatMap((function(e){return Object.keys(e)}));return(null==t?void 0:t.length)>0?[{category:"Operating System",type:i.OS_CHIP,chips:i.operatingSystems.filter((function(e){var n=e.value;return t.some((function(e){return e===n}))})).map((function(e){return u({name:e.label},(0,r.Z)(e,l))}))}]:[]}},68595:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(96985),o=n.n(r),a=n(45697),i=n.n(a),l=n(32384),s=n(19281),u=n(94778),c=function(e){var t=e.count,n=e.loadTags,r=e.systemId;return o().createElement("span",{onClick:function(e){return e.stopPropagation()},className:"ins-c-inventory__list-tags","data-ouia-component-id":"".concat(r,"-tag-button")},o().createElement(s.Z,{count:t,onTagClick:function(){return n(r,t)}}))};c.propTypes={count:i().number,loadTags:i().func,systemId:i().string};const d=(0,l.connect)((function(){return{}}),(function(e){return{loadTags:function(t,n){t&&(e((0,u.Ar)(!0)),e((0,u.me)(t,void 0,void 0,n)))}}}))(c)},454:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),o=n(45987),a=n(96985),i=n.n(a),l=n(45697),s=n.n(l),u=n(43707),c=n(2372),d=["cmp","hideLoader","isRbacEnabled","inventoryRef","store"],p=function(e){var t=e.cmp,n=e.hideLoader,a=e.isRbacEnabled,l=e.inventoryRef,s=e.store,p=(0,o.Z)(e,d),f=(0,u.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:read"],!0),v=f.hasAccess;return f.isLoading&&!n?i().createElement(c.$,null):i().createElement(t,(0,r.Z)({},p,l&&{ref:l},{hasAccess:!a||v,store:s}))};p.propTypes={cmp:s().any,inventoryRef:s().any,store:s().object,customRender:s().bool,isRbacEnabled:s().bool,hideLoader:s().bool};const f=p},73880:(e,t,n)=>{n.r(t),n.d(t,{DeleteModal:()=>C.Z,InventoryContext:()=>Z.FW,OS_CHIP:()=>Z.vi,REGISTERED_CHIP:()=>Z.p9,RenderWrapper:()=>S.Z,STALE_CHIP:()=>Z.yc,TAG_CHIP:()=>Z.m5,TEXTUAL_CHIP:()=>Z.UC,TEXT_FILTER:()=>Z.ud,TagWithDialog:()=>r.Z,TagsModal:()=>P,arrayToSelection:()=>Z.Nu,defaultFilters:()=>Z.js,filterToGroup:()=>Z.Tk,generateFilter:()=>Z.h3,isEmpty:()=>Z.xb,loadSystems:()=>Z.K$,operatingSystems:()=>Z.wQ,reduceFilters:()=>Z.YQ,registered:()=>Z.Gw,reloadWrapper:()=>Z.KS,staleness:()=>Z.jv});var r=n(68595),o=n(87462),a=n(4942),i=n(93433),l=n(29439),s=n(96985),u=n.n(s),c=n(32384),d=n(45697),p=n.n(d),f=n(94778),v=n(98944),y=n(29673),g=n(23279),m=n.n(g),b=n(85564),h=n.n(b);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.customFilters,n=e.filterTagsBy,r=e.onToggleModal,a=e.onApply,d=e.getTags,p=(0,c.useDispatch)(),g=(0,s.useState)(""),b=(0,l.Z)(g,2),T=b[0],O=b[1],P=(0,s.useState)([]),S=(0,l.Z)(P,2),C=S[0],Z=S[1],j=(0,s.useState)({perPage:10,page:1}),D=(0,l.Z)(j,2),w=D[0],_=D[1],I=(0,c.useSelector)((function(e){var t,n=e.entities,r=e.entityDetails;return null===(t=n||r)||void 0===t?void 0:t.showTagDialog})),M=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return null!=t&&t.activeSystemTag||null!=n&&n.entity?w:(null==t?void 0:t.allTagsPagination)||w}),c.shallowEqual),A=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.tagModalLoaded)||(null==n?void 0:n.tagModalLoaded)})),k=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.activeSystemTag)||(null==n?void 0:n.entity)})),F=(0,c.useSelector)((function(e){var t,n,r,o=e.entities,a=e.entityDetails,l=(null==o||null===(t=o.activeSystemTag)||void 0===t?void 0:t.tags)||(null==a||null===(n=a.entity)||void 0===n?void 0:n.tags);return l?null==l?void 0:l.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(T)}))})).slice((null==w?void 0:w.perPage)*((null==w?void 0:w.page)-1),(null==w?void 0:w.perPage)*(null==w?void 0:w.page)):null==o||null===(r=o.allTags)||void 0===r?void 0:r.reduce((function(e,t){var n=t.tags;return[].concat((0,i.Z)(e),(0,i.Z)(h()(n.map((function(e){return e.tag})))))}),[])})),L=(0,c.useSelector)((function(e){var t,n=e.entities,r=e.entityDetails;return null===(t=n||r)||void 0===t?void 0:t.activeFilters})),R=(0,c.useSelector)((function(e){var t,n,r,o=e.entities,a=e.entityDetails,i=null===(t=(null==o||null===(n=o.activeSystemTag)||void 0===n?void 0:n.tags)||(null==a||null===(r=a.entity)||void 0===r?void 0:r.tags))||void 0===t?void 0:t.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(T)}))}));return i?i.length:null==o?void 0:o.allTagsTotal}));(0,s.useEffect)((function(){O(n)}),[n]);var N=function(e,n){k?_((function(){return e})):p((0,f.C8)(n,E(E({},t),{},{pagination:e,filters:L}),d))},q=(0,s.useCallback)(m()(N,800),[k]);return u().createElement(v.Z,(0,o.Z)({className:"ins-c-inventory__tags-modal",tableProps:{canSelectAll:!1}},A&&{loaded:A,pagination:E(E({},M),{},{count:R}),rows:(null==F?void 0:F.map((function(e){var t=e.key,n=e.value,r=e.namespace;return{id:"".concat(r,"/").concat(t,"=").concat(n),selected:C.find((function(e){return e.id==="".concat(r,"/").concat(t,"=").concat(n)})),cells:[t,n,r]}})))||[]},{loaded:A,width:"auto",isOpen:I,toggleModal:function(){Z([]),O(""),r(),p((0,f.Ar)(!1))},filters:[{label:"Tags filter",placeholder:"Filter tags",value:"tags-filter",filterValues:{value:T,onChange:function(e,t){q(M,t),O(t)}}}],onUpdateData:function(e){return N(e,T)},columns:[{title:"Name"},{title:"Value",transforms:[(0,y.cellWidth)(30)]},{title:"Tag source",transforms:[(0,y.cellWidth)(30)]}]},!k&&{onSelect:function(e){return Z(e)},selected:C,onApply:function(){return a&&a(C)}},{bulkSelect:{id:"bulk-select-tags"},title:k?"".concat(k.display_name," (").concat(R,")"):"All tags in inventory (".concat(R,")")}))};O.propTypes={onApply:p().func,onToggleModal:p().func,filterTagsBy:p().string,customFilters:p().shape({tags:p().oneOfType([p().object,p().arrayOf(p().string)])}),getTags:p().func},O.defaultProps={filterTagsBy:"",onToggleModal:function(){}};const P=O;var S=n(454),C=n(39903),Z=n(13784)},8141:(e,t,n)=>{n.r(t),n.d(t,{toGroupSelectionValue:()=>r.VU,buildOSFilterConfig:()=>r.Zf,buildOSChip:()=>r.VT});var r=n(98436)},94778:(e,t,n)=>{n.d(t,{gb:()=>a.gb,Oj:()=>a.Oj,k0:()=>a.k0,Fo:()=>a.Fo,K5:()=>i.K5,u3:()=>i.u3,Xe:()=>i.Xe,nE:()=>i.nE,C8:()=>i.C8,CP:()=>i.CP,fg:()=>i.fg,il:()=>i.il,A_:()=>i.A_,me:()=>i.me,CL:()=>i.CL,HD:()=>i.HD,wb:()=>i.wb,Ar:()=>i.Ar,jB:()=>i.jB,Ks:()=>l,Tv:()=>s,L1:()=>u,$Y:()=>c,Jr:()=>d,eR:()=>p,Uw:()=>f});var r=n(59086),o=n(63599),a=n(87637),i=n(8622),l=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:o.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},s=function(e){return{type:r.uW,payload:{filtersList:e}}},u=function(){return{type:r.wt}},c=function(e,t){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:o.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},d=function(e,t){return{type:r.fT,payload:{page:e,perPage:t}}},p=function(e){return{type:r.aI.LOAD_SYSTEM_PROFILE,payload:(0,o.getEntitySystemProfile)(e,{})}},f=function(e,t){return{type:r.aI.SET_ANSIBLE_HOST,payload:o.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},36494:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(87462),o=n(63366),a=n(26685),i=n(35067),l=n(63480),s=n(26343);const u=[function(e){return"function"==typeof e?(0,s.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,s.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,s.dX)((function(t){return(0,l.Z)(e,t)})):void 0}],c=[function(e){return"function"==typeof e?(0,s.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,s.dX)((function(){return{}}))}];function d(e,t,n){return(0,r.Z)({},n,e,t)}const p=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,i=!1;return function(t,n,l){var s=e(t,n,l);return i?o&&a(s,r)||(r=s):(i=!0,r=s),r}}}(e):void 0},function(e){return e?void 0:function(){return d}}];var f=n(38548),v=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function y(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function g(e,t){return e===t}function m(e){var t=void 0===e?{}:e,n=t.connectHOC,l=void 0===n?a.Z:n,s=t.mapStateToPropsFactories,d=void 0===s?c:s,m=t.mapDispatchToPropsFactories,b=void 0===m?u:m,h=t.mergePropsFactories,T=void 0===h?p:h,E=t.selectorFactory,O=void 0===E?f.ZP:E;return function(e,t,n,a){void 0===a&&(a={});var s=a,u=s.pure,c=void 0===u||u,p=s.areStatesEqual,f=void 0===p?g:p,m=s.areOwnPropsEqual,h=void 0===m?i.Z:m,E=s.areStatePropsEqual,P=void 0===E?i.Z:E,S=s.areMergedPropsEqual,C=void 0===S?i.Z:S,Z=(0,o.Z)(s,v),j=y(e,d,"mapStateToProps"),D=y(t,b,"mapDispatchToProps"),w=y(n,T,"mergeProps");return l(O,(0,r.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:j,initMapDispatchToProps:D,initMergeProps:w,pure:c,areStatesEqual:f,areOwnPropsEqual:h,areStatePropsEqual:P,areMergedPropsEqual:C},Z))}}const b=m()}}]);