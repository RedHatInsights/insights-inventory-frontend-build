"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[918],{39903:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(96985),l=n.n(o),a=n(45697),r=n.n(a),i=n(94008),s=n(80236),c=n(79851),u=n(34512),d=n(49739),v=n(83826),f=n(48140),g=n(86050),p=n(47173),y=n(19694),m=function(e){var t,n=e.handleModalToggle,o=e.isModalOpen,a=e.currentSytems,r=e.onConfirm,m="system";return Array.isArray(a)?(t=1===a.length?a[0].display_name:"".concat(a.length," systems"),m=1===a.length?m:"systems"):t=a.display_name,l().createElement(s.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",ouiaId:"inventory-delete-modal",isOpen:o,onClose:function(){return n(!1)},appendTo:document.getElementsByClassName("inventory")[0]||document.body},l().createElement(c.P,{hasGutter:!0},l().createElement(u.J,null,l().createElement(y.ZP,{size:"xl",className:"ins-m-alert"})),l().createElement(u.J,{isFilled:!0},l().createElement(d.K,{hasGutter:!0},l().createElement(v.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",m," to add it back to your inventory."),l().createElement(v.v,null,"To disable the daily upload for this ",m,", use the following command:"),l().createElement(v.v,null,l().createElement(i.M5,null,"insights-client --unregister"))))),l().createElement(f.a,{hasGutter:!0},l().createElement(g.Z,null,l().createElement(p.zx,{variant:"danger",ouiaId:"confirm-inventory-delete",onClick:r},"Remove"),l().createElement(p.zx,{variant:"link",ouiaId:"cancel-inventory-delete",onClick:function(){return n(!1)}},"Cancel"))))},T=r().shape({id:r().string,displayName:r().string});m.propTypes={isModalOpen:r().bool,currentSytems:r().oneOfType([T,r().arrayOf(T)]),handleModalToggle:r().func,onConfirm:r().func},m.defaultProps={isModalOpen:!1,currentSytems:{},handleModalToggle:function(){},onConfirm:function(){}};const b=m},68595:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(96985),l=n.n(o),a=n(45697),r=n.n(a),i=n(50533),s=n(1577),c=n(94778),u=function(e){var t=e.count,n=e.loadTags,o=e.systemId;return l().createElement("span",{onClick:function(e){return e.stopPropagation()},className:"ins-c-inventory__list-tags","data-ouia-component-id":"".concat(o,"-tag-button")},l().createElement(s.Z,{count:t,onTagClick:function(){return n(o,t)}}))};u.propTypes={count:r().number,loadTags:r().func,systemId:r().string};const d=(0,i.connect)((function(){return{}}),(function(e){return{loadTags:function(t,n){t&&(e((0,c.Ar)(!0)),e((0,c.me)(t,void 0,void 0,n)))}}}))(u)},22219:(e,t,n)=>{n.d(t,{Z:()=>O});var o=n(87462),l=n(4942),a=n(89062),r=n(93324),i=n(96985),s=n.n(i),c=n(50533),u=n(45697),d=n.n(u),v=n(94778),f=n(96344),g=n(29673),p=n(23279),y=n.n(p),m=n(85564),T=n.n(m);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.customFilters,n=e.filterTagsBy,l=e.onToggleModal,u=e.onApply,d=e.getTags,p=(0,c.useDispatch)(),m=(0,i.useState)(""),b=(0,r.Z)(m,2),E=b[0],O=b[1],S=(0,i.useState)([]),P=(0,r.Z)(S,2),C=P[0],Z=P[1],_=(0,i.useState)({perPage:10,page:1}),j=(0,r.Z)(_,2),D=j[0],k=j[1],w=(0,c.useSelector)((function(e){var t,n=e.entities,o=e.entityDetails;return null===(t=n||o)||void 0===t?void 0:t.showTagDialog})),M=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return null!=t&&t.activeSystemTag||null!=n&&n.entity?D:(null==t?void 0:t.allTagsPagination)||D}),c.shallowEqual),A=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.tagModalLoaded)||(null==n?void 0:n.tagModalLoaded)})),I=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.activeSystemTag)||(null==n?void 0:n.entity)})),R=(0,c.useSelector)((function(e){var t,n,o,l=e.entities,r=e.entityDetails,i=(null==l||null===(t=l.activeSystemTag)||void 0===t?void 0:t.tags)||(null==r||null===(n=r.entity)||void 0===n?void 0:n.tags);return i?null==i?void 0:i.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(E)}))})).slice((null==D?void 0:D.perPage)*((null==D?void 0:D.page)-1),(null==D?void 0:D.perPage)*(null==D?void 0:D.page)):null==l||null===(o=l.allTags)||void 0===o?void 0:o.reduce((function(e,t){var n=t.tags;return[].concat((0,a.Z)(e),(0,a.Z)(T()(n.map((function(e){return e.tag})))))}),[])})),F=(0,c.useSelector)((function(e){var t,n=e.entities,o=e.entityDetails;return null===(t=n||o)||void 0===t?void 0:t.activeFilters})),L=(0,c.useSelector)((function(e){var t,n,o,l=e.entities,a=e.entityDetails,r=null===(t=(null==l||null===(n=l.activeSystemTag)||void 0===n?void 0:n.tags)||(null==a||null===(o=a.entity)||void 0===o?void 0:o.tags))||void 0===t?void 0:t.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(E)}))}));return r?r.length:null==l?void 0:l.allTagsTotal}));(0,i.useEffect)((function(){O(n)}),[n]);var N=function(e,n){I?k((function(){return e})):p((0,v.C8)(n,h(h({},t),{},{pagination:e,filters:F}),d))},G=(0,i.useCallback)(y()(N,800),[I]);return s().createElement(f.Z,(0,o.Z)({className:"ins-c-inventory__tags-modal",tableProps:{canSelectAll:!1}},A&&{loaded:A,pagination:h(h({},M),{},{count:L}),rows:(null==R?void 0:R.map((function(e){var t=e.key,n=e.value,o=e.namespace;return{id:"".concat(o,"/").concat(t,"=").concat(n),selected:C.find((function(e){return e.id==="".concat(o,"/").concat(t,"=").concat(n)})),cells:[t,n,o]}})))||[]},{loaded:A,width:"auto",isOpen:w,toggleModal:function(){Z([]),O(""),l(),p((0,v.Ar)(!1))},filters:[{label:"Tags filter",placeholder:"Filter tags",value:"tags-filter",filterValues:{value:E,onChange:function(e,t){G(M,t),O(t)}}}],onUpdateData:function(e){return N(e,E)},columns:[{title:"Name"},{title:"Value",transforms:[(0,g.cellWidth)(30)]},{title:"Tag source",transforms:[(0,g.cellWidth)(30)]}]},!I&&{onSelect:function(e){return Z(e)},selected:C,onApply:function(){return u&&u(C)}},{bulkSelect:{id:"bulk-select-tags"},title:I?"".concat(I.display_name," (").concat(L,")"):"All tags in inventory (".concat(L,")")}))};E.propTypes={onApply:d().func,onToggleModal:d().func,filterTagsBy:d().string,customFilters:d().shape({tags:d().oneOfType([d().object,d().arrayOf(d().string)])}),getTags:d().func},E.defaultProps={filterTagsBy:"",onToggleModal:function(){}};const O=E},454:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),l=n(45987),a=n(96985),r=n.n(a),i=n(45697),s=n.n(i),c=n(95249),u=n(2372),d=["cmp","hideLoader","isRbacEnabled","inventoryRef","store"],v=function(e){var t=e.cmp,n=e.hideLoader,a=e.isRbacEnabled,i=e.inventoryRef,s=e.store,v=(0,l.Z)(e,d),f=(0,c.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:read"],!0).hasAccess;return void 0!==f||n?r().createElement(t,(0,o.Z)({},v,i&&{ref:i},{hasAccess:!a||f,store:s})):r().createElement(u.$,null)};v.propTypes={cmp:s().any,inventoryRef:s().any,store:s().object,customRender:s().bool,isRbacEnabled:s().bool,hideLoader:s().bool};const f=v},14918:(e,t,n)=>{n.r(t),n.d(t,{TagWithDialog:()=>o.Z,TagsModal:()=>l.Z,RenderWrapper:()=>a.Z,DeleteModal:()=>r.Z,InventoryContext:()=>i.FW,OS_CHIP:()=>i.vi,REGISTERED_CHIP:()=>i.p9,STALE_CHIP:()=>i.yc,TAG_CHIP:()=>i.m5,TEXTUAL_CHIP:()=>i.UC,TEXT_FILTER:()=>i.ud,arrayToSelection:()=>i.Nu,defaultFilters:()=>i.js,filterToGroup:()=>i.Tk,generateFilter:()=>i.h3,isEmpty:()=>i.xb,loadSystems:()=>i.K$,operatingSystems:()=>i.wQ,reduceFilters:()=>i.YQ,registered:()=>i.Gw,reloadWrapper:()=>i.KS,staleness:()=>i.jv});var o=n(68595),l=n(22219),a=n(454),r=n(39903),i=n(13784)}}]);
//# sourceMappingURL=../sourcemaps/918.34aaceb390ba06450effa1b8de446038.js.map