(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[28],{93028:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var i=n(92950),a=n.n(i),r=n(45697),l=n.n(r),o=n(557),s=(n(89223),n(16530)),c=n(30319),u=n(50289),d=n(50693),m=n(16475),v=n(64029),p=n(32835),f=n(36873),h=n(56455),g=n(48716),y=n(86350),E=n(94184),w=n.n(E),_=n(60076),b=n(38775),A=n(53895),k=n(33902),I=function(e){var t=e.entity,n=e.currentApp,r=e.clearNotifications,l=e.loadEntity,u=(0,i.useContext)(c.gE).getRegistry,f=(0,o.useSelector)((function(e){var t=e.permissionsReducer;return{loading:null==t?void 0:t.loading,writePermissions:null==t?void 0:t.writePermissions}}),o.shallowEqual),E=f.loading,I=f.writePermissions;(0,i.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail"),r();var n=window.location.href.split("/insights");3===n.length&&(window.location="".concat(n[0],"/insights").concat(n[1]))}),[]);var N={"ins-c-inventory__detail--general-info":n&&"general_information"===n};return t&&(document.title="".concat(t.display_name," | Inventory | Red Hat Insights")),(0,i.useEffect)((function(){var e,n,i;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||null===(i=n.appObjectId)||void 0===i||i.call(n,null==t?void 0:t.id),null!=t&&t.id&&l()}),[null==t?void 0:t.id]),a().createElement(b.Z,{hideInvLink:!0,showTags:!0,onLoad:function(e){var t=e.mergeWithDetail,n=e.INVENTORY_ACTION_TYPES;u().register(t((0,c.CB)(n)))}},a().createElement(g.Z,{className:w()("pf-m-light ins-inventory-detail",N)},a().createElement(v.a,{ouiaId:"systems-list"},a().createElement(p.g,null,a().createElement(s.Link,{to:_._.table},"Inventory")),a().createElement(p.g,{isActive:!0},a().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:a().createElement(h.Z,{size:h.i.xs})))),!E&&a().createElement(A.Z,{fallback:"",hideBack:!0,showTags:!0,hideInvLink:!0,showDelete:I,hideInvDrawer:!0})),a().createElement(y.Z,{className:w()(N)},a().createElement(d.r,{gutter:"md"},a().createElement(m.P,{span:12},a().createElement(k.Z,{showTags:!0,fallback:""})))))};I.contextTypes={store:l().object},I.propTypes={history:l().object,entity:l().object,loadEntity:l().func,clearNotifications:l().func,currentApp:l().string};const N=(0,f.Z)((0,o.connect)((function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,i=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||i&&i.name}}),(function(e){return{loadEntity:function(){return e(u.A_())},clearNotifications:function(){return e(u.L1())}}}))(I))}}]);
//# sourceMappingURL=../sourcemaps/28.e8804a25ef9eadaa07ac.js.map