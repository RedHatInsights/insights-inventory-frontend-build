"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3028],{93028:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var i=n(92950),a=n.n(i),r=n(45697),s=n.n(r),o=n(50533),l=n(75662),c=n(30319),u=n(94778),d=n(50693),v=n(16475),m=n(64029),p=n(32835),h=n(36873),f=n(56455),y=n(48716),g=n(86350),E=n(94184),w=n.n(E),_=n(60076),b=n(79680),I=n(7379),k=n(71594),A=function(e){var t=e.entity,n=e.currentApp,r=e.clearNotifications,s=(0,o.useStore)(),u=(0,l.useHistory)(),h=(0,l.useRouteMatch)("/:inventoryId").params.inventoryId,E=(0,i.useContext)(c.gE).getRegistry,A=(0,o.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),o.shallowEqual),N=A.loading,T=A.writePermissions,C=(0,o.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.loaded}));(0,i.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail"),r();var n=window.location.href.split("/insights");3===n.length&&(window.location="".concat(n[0],"/insights").concat(n[1]))}),[]);var D={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return t&&(document.title="".concat(t.display_name," | Inventory | Red Hat Insights")),(0,i.useEffect)((function(){var e,n,i;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||null===(i=n.appObjectId)||void 0===i||i.call(n,null==t?void 0:t.id)}),[null==t?void 0:t.id]),a().createElement(k.default,{hideInvLink:!0,showTags:!0,store:s,history:u,onLoad:function(e){var t=e.mergeWithDetail,n=e.INVENTORY_ACTION_TYPES;E().register(t((0,c.CB)(n)))}},a().createElement(y.Z,{className:w()("pf-m-light ins-inventory-detail",D)},a().createElement(m.a,{ouiaId:"systems-list"},a().createElement(p.g,null,a().createElement(l.Link,{to:_._.table},"Inventory")),a().createElement(p.g,{isActive:!0},a().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:!0!==C?a().createElement(f.Z,{size:f.i.xs}):h))),!N&&a().createElement(b.default,{store:s,history:u,fallback:"",hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:T,hideInvDrawer:!0})),a().createElement(g.Z,{className:w()(D)},a().createElement(d.r,{gutter:"md"},a().createElement(v.P,{span:12},a().createElement(I.default,{showTags:!0,fallback:"",store:s,history:u})))))};A.contextTypes={store:s().object},A.propTypes={history:s().object,entity:s().object,loadEntity:s().func,clearNotifications:s().func,currentApp:s().string};const N=(0,h.Z)((0,o.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,i=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||i&&i.name}}),(function(e){return{clearNotifications:function(){return e(u.L1())}}}))(A))}}]);