"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[918],{39903:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(92950),l=n.n(o),r=n(45697),a=n.n(r),i=n(94008),s=n(80236),c=n(79851),u=n(34512),d=n(49739),v=n(83826),f=n(48140),g=n(86050),p=n(47173),y=n(19694),m=function(e){var t,n=e.handleModalToggle,o=e.isModalOpen,r=e.currentSytems,a=e.onConfirm,m="system";return Array.isArray(r)?(t=1===r.length?r[0].display_name:"".concat(r.length," systems"),m=1===r.length?m:"systems"):t=r.display_name,l().createElement(s.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",ouiaId:"inventory-delete-modal",isOpen:o,onClose:function(){return n(!1)},appendTo:document.getElementsByClassName("inventory")[0]||document.body},l().createElement(c.P,{hasGutter:!0},l().createElement(u.J,null,l().createElement(y.ZP,{size:"xl",className:"ins-m-alert"})),l().createElement(u.J,{isFilled:!0},l().createElement(d.K,{hasGutter:!0},l().createElement(v.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",m," to add it back to your inventory."),l().createElement(v.v,null,"To disable the daily upload for this ",m,", use the following command:"),l().createElement(v.v,null,l().createElement(i.M5,null,"insights-client --unregister"))))),l().createElement(f.a,{hasGutter:!0},l().createElement(g.Z,null,l().createElement(p.zx,{variant:"danger",ouiaId:"confirm-inventory-delete",onClick:a},"Remove"),l().createElement(p.zx,{variant:"link",ouiaId:"cancel-inventory-delete",onClick:function(){return n(!1)}},"Cancel"))))},T=a().shape({id:a().string,displayName:a().string});m.propTypes={isModalOpen:a().bool,currentSytems:a().oneOfType([T,a().arrayOf(T)]),handleModalToggle:a().func,onConfirm:a().func},m.defaultProps={isModalOpen:!1,currentSytems:{},handleModalToggle:function(){},onConfirm:function(){}};const h=m},68595:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(92950),l=n.n(o),r=n(45697),a=n.n(r),i=n(45237),s=n(1577),c=n(94778),u=function(e){var t=e.count,n=e.loadTags,o=e.systemId;return l().createElement("span",{onClick:function(e){return e.stopPropagation()},className:"ins-c-inventory__list-tags","data-ouia-component-id":"".concat(o,"-tag-button")},l().createElement(s.Z,{count:t,onTagClick:function(){return n(o,t)}}))};u.propTypes={count:a().number,loadTags:a().func,systemId:a().string};const d=(0,i.connect)((function(){return{}}),(function(e){return{loadTags:function(t,n){t&&(e((0,c.Ar)(!0)),e((0,c.me)(t,void 0,void 0,n)))}}}))(u)},22219:(e,t,n)=>{n.d(t,{Z:()=>O});var o=n(87462),l=n(4942),r=n(89062),a=n(93324),i=n(92950),s=n.n(i),c=n(45237),u=n(45697),d=n.n(u),v=n(94778),f=n(96344),g=n(94550),p=n(23279),y=n.n(p),m=n(85564),T=n.n(m);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.customFilters,n=e.filterTagsBy,l=e.onToggleModal,u=e.onApply,d=(0,c.useDispatch)(),p=(0,i.useState)(""),m=(0,a.Z)(p,2),h=m[0],E=m[1],O=(0,i.useState)([]),S=(0,a.Z)(O,2),P=S[0],C=S[1],Z=(0,i.useState)({perPage:10,page:1}),_=(0,a.Z)(Z,2),j=_[0],D=_[1],w=(0,c.useSelector)((function(e){var t,n=e.entities,o=e.entityDetails;return null===(t=n||o)||void 0===t?void 0:t.showTagDialog})),M=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return null!=t&&t.activeSystemTag||null!=n&&n.entity?j:(null==t?void 0:t.allTagsPagination)||j}),c.shallowEqual),k=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.tagModalLoaded)||(null==n?void 0:n.tagModalLoaded)})),A=(0,c.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.activeSystemTag)||(null==n?void 0:n.entity)})),R=(0,c.useSelector)((function(e){var t,n,o,l=e.entities,a=e.entityDetails,i=(null==l||null===(t=l.activeSystemTag)||void 0===t?void 0:t.tags)||(null==a||null===(n=a.entity)||void 0===n?void 0:n.tags);return i?null==i?void 0:i.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(h)}))})).slice((null==j?void 0:j.perPage)*((null==j?void 0:j.page)-1),(null==j?void 0:j.perPage)*(null==j?void 0:j.page)):null==l||null===(o=l.allTags)||void 0===o?void 0:o.reduce((function(e,t){var n=t.tags;return[].concat((0,r.Z)(e),(0,r.Z)(T()(n.map((function(e){return e.tag})))))}),[])})),I=(0,c.useSelector)((function(e){var t,n=e.entities,o=e.entityDetails;return null===(t=n||o)||void 0===t?void 0:t.activeFilters})),F=(0,c.useSelector)((function(e){var t,n,o,l=e.entities,r=e.entityDetails,a=null===(t=(null==l||null===(n=l.activeSystemTag)||void 0===n?void 0:n.tags)||(null==r||null===(o=r.entity)||void 0===o?void 0:o.tags))||void 0===t?void 0:t.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(h)}))}));return a?a.length:null==l?void 0:l.allTagsTotal}));(0,i.useEffect)((function(){E(n)}),[n]);var L=function(e,n){A?D((function(){return e})):d((0,v.C8)(n,b(b({},t),{},{pagination:e,filters:I})))},N=(0,i.useCallback)(y()(L,800),[A]);return s().createElement(f.Z,(0,o.Z)({className:"ins-c-inventory__tags-modal",tableProps:{canSelectAll:!1}},k&&{loaded:k,pagination:b(b({},M),{},{count:F}),rows:(null==R?void 0:R.map((function(e){var t=e.key,n=e.value,o=e.namespace;return{id:"".concat(o,"/").concat(t,"=").concat(n),selected:P.find((function(e){return e.id==="".concat(o,"/").concat(t,"=").concat(n)})),cells:[t,n,o]}})))||[]},{loaded:k,width:"auto",isOpen:w,toggleModal:function(){C([]),E(""),l(),d((0,v.Ar)(!1))},filters:[{label:"Tags filter",placeholder:"Filter tags",value:"tags-filter",filterValues:{value:h,onChange:function(e,t){N(M,t),E(t)}}}],onUpdateData:L,columns:[{title:"Name"},{title:"Value",transforms:[(0,g.cellWidth)(30)]},{title:"Tag source",transforms:[(0,g.cellWidth)(30)]}]},!A&&{onSelect:function(e){return C(e)},selected:P,onApply:function(){return u&&u(P)}},{title:A?"".concat(A.display_name," (").concat(F,")"):"All tags in inventory (".concat(F,")")}))};E.propTypes={onApply:d().func,onToggleModal:d().func,filterTagsBy:d().string,customFilters:d().shape({tags:d().oneOfType([d().object,d().arrayOf(d().string)])})},E.defaultProps={filterTagsBy:"",onToggleModal:function(){}};const O=E},454:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),l=n(45987),r=n(92950),a=n.n(r),i=n(45697),s=n.n(i),c=n(95249),u=n(2372),d=["cmp","hideLoader","isRbacEnabled","inventoryRef","store"],v=function(e){var t=e.cmp,n=e.hideLoader,r=e.isRbacEnabled,i=e.inventoryRef,s=e.store,v=(0,l.Z)(e,d),f=(0,c.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:read"]).hasAccess;return void 0!==f||n?a().createElement(t,(0,o.Z)({},v,i&&{ref:i},{hasAccess:!r||f,store:s})):a().createElement(u.$,null)};v.propTypes={cmp:s().any,inventoryRef:s().any,store:s().object,customRender:s().bool,isRbacEnabled:s().bool,hideLoader:s().bool};const f=v},14918:(e,t,n)=>{n.r(t),n.d(t,{TagWithDialog:()=>o.Z,TagsModal:()=>l.Z,RenderWrapper:()=>r.Z,DeleteModal:()=>a.Z,InventoryContext:()=>i.FW,REGISTERED_CHIP:()=>i.p9,STALE_CHIP:()=>i.yc,TAG_CHIP:()=>i.m5,TEXTUAL_CHIP:()=>i.UC,TEXT_FILTER:()=>i.ud,arrayToSelection:()=>i.Nu,defaultFilters:()=>i.js,filterToGroup:()=>i.Tk,generateFilter:()=>i.h3,isEmpty:()=>i.xb,loadSystems:()=>i.K$,reduceFilters:()=>i.YQ,registered:()=>i.Gw,reloadWrapper:()=>i.KS,staleness:()=>i.jv});var o=n(68595),l=n(22219),r=n(454),a=n(39903),i=n(13784)}}]);
//# sourceMappingURL=../sourcemaps/918.87a3e6c4f0935a36b2db.js.map