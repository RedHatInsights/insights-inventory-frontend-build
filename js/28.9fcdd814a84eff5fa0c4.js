"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[28],{93028:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var i=n(92950),a=n.n(i),r=n(45697),s=n.n(r),o=n(45237),l=n(16530),c=n(30319),u=n(94778),d=n(50693),m=n(16475),v=n(64029),p=n(32835),h=n(36873),f=n(56455),g=n(48716),y=n(86350),E=n(94184),w=n.n(E),_=n(60076),b=n(79680),k=n(7379),A=n(71594),I=function(e){var t=e.entity,n=e.currentApp,r=e.clearNotifications,s=(0,o.useStore)(),u=(0,l.useHistory)(),h=(0,i.useContext)(c.gE).getRegistry,E=(0,o.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),o.shallowEqual),I=E.loading,N=E.writePermissions;(0,i.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail"),r();var n=window.location.href.split("/insights");3===n.length&&(window.location="".concat(n[0],"/insights").concat(n[1]))}),[]);var T={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return t&&(document.title="".concat(t.display_name," | Inventory | Red Hat Insights")),(0,i.useEffect)((function(){var e,n,i;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||null===(i=n.appObjectId)||void 0===i||i.call(n,null==t?void 0:t.id)}),[null==t?void 0:t.id]),a().createElement(A.default,{hideInvLink:!0,showTags:!0,store:s,history:u,onLoad:function(e){var t=e.mergeWithDetail,n=e.INVENTORY_ACTION_TYPES;h().register(t((0,c.CB)(n)))}},a().createElement(g.Z,{className:w()("pf-m-light ins-inventory-detail",T)},a().createElement(v.a,{ouiaId:"systems-list"},a().createElement(p.g,null,a().createElement(l.Link,{to:_._.table},"Inventory")),a().createElement(p.g,{isActive:!0},a().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:a().createElement(f.Z,{size:f.i.xs})))),!I&&a().createElement(b.default,{store:s,history:u,fallback:"",hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:N,hideInvDrawer:!0})),a().createElement(y.Z,{className:w()(T)},a().createElement(d.r,{gutter:"md"},a().createElement(m.P,{span:12},a().createElement(k.default,{showTags:!0,fallback:"",store:s,history:u})))))};I.contextTypes={store:s().object},I.propTypes={history:s().object,entity:s().object,loadEntity:s().func,clearNotifications:s().func,currentApp:s().string};const N=(0,h.Z)((0,o.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,i=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||i&&i.name}}),(function(e){return{clearNotifications:function(){return e(u.L1())}}}))(I))}}]);
//# sourceMappingURL=../sourcemaps/28.736e643d3ea0d891c3cf.js.map