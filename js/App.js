!function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/beta/apps/inventory/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([260,1]),n()}({251:function(t,e,n){(e=t.exports=n(5)(!1)).i(n(92),""),e.push([t.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n',""])},256:function(t,e,n){var r=n(257);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,a);r.locals&&(t.exports=r.locals)},257:function(t,e,n){(e=t.exports=n(5)(!1)).i(n(92),""),e.i(n(258),""),e.push([t.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},260:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),o=n(13),i=n.n(o),c=n(88),s=n(24),l=n(99),u=n.n(l),p=n(11),f=n(39),d=n(107),m=n(55),h=n.n(m),v=n(25),y=n.n(v),b=n(30),g=n.n(b),E=n(103),_=n.n(E),I=n(104),T=n.n(I)()(["GET_ENTITIES","GET_ENTITY"],function(t){return[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")]}),O=_()([].concat(["ALERT_ADD","ALERT_DISMISS"],g()(T)),function(t){return t}),N=n(64),j=n(65),w={loaded:!1},A=function(t){return"true"===sessionStorage.getItem("disableEntitlements")||t&&t.is_entitled};function C(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return y()({},t,{loaded:!0,activeApps:[A(e&&e.insights)&&{title:"Insights",name:"insights",component:p.Advisor},A(e&&e.smart_management)&&{title:"Vulnerabilities",name:"vulnerabilities",component:p.Vulnerabilities},A(e&&e.smart_management)&&{title:"Compliance",name:"compliance",component:p.Compliance},{title:"General Information",name:"general_information",component:p.GeneralInformation}].filter(Boolean)})}var S,k={notifications:f.notifications},R=Object(N.applyReducerHash)(h()({},O.GET_ENTITIES_FULFILLED,function(t,e){var n=e.payload;return y()({},t,{rows:Object(j.mergeArraysByKey)([t.rows,n.results]),entities:Object(j.mergeArraysByKey)([t.entities,n.results])})}),w),x=k;function P(t){var e=t.actionType,n=t.callback;return S.addNew({on:e,callback:n})}var D=n(40),L=n.n(D),B=n(41),F=n.n(B),G=n(42),M=n.n(G),H=n(43),U=n.n(H),V=n(44),W=n.n(V),Y=n(1),J=n.n(Y),K=n(105),z=n.n(K),q=n(57),Q=n.n(q),X=n(50),Z=n(89),$=n(96),tt=n(28),et=n.n(tt),nt=n(45),rt=n.n(nt),at=n(56),ot=n.n(at);n(91);var it,ct=function(){return{type:O.GET_ENTITY,payload:insights.chrome.auth.getUser()}},st=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},lt=n(84),ut=n(85),pt=n(32),ft=n(23),dt=n(8),mt=function(){return insights.loadInventory({react:a.a,reactRouterDom:pt,reactCore:ft,reactIcons:dt,pfReact:{}})},ht=Object(p.registry)()(it=function(t){function e(t,n){var r;return L()(this,e),(r=M()(this,U()(e).call(this,t,n))).loadInventory(),r.inventory=a.a.createRef(),r.state={removeListener:function(){}},r.onRefresh=r.onRefresh.bind(ot()(ot()(r))),r}return W()(e,t),F()(e,[{key:"loadInventory",value:function(){var t=rt()(et.a.mark(function t(){var e,n,r,a,o,i;return et.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.props.clearNotifications(),t.next=3,mt();case 3:e=t.sent,n=e.inventoryConnector,r=e.mergeWithEntities,this.getRegistry().register(y()({},r(R))),a=n(),o=a.InventoryTable,i=a.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:o});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onRefresh",value:function(t){var e=this;this.setState({filters:t.filters},function(){return e.inventory.current.onRefreshData(t,!1)})}},{key:"render",value:function(){var t=this.state.ConnectedInventory;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.PageHeader,{className:"pf-m-light"},a.a.createElement(p.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(p.Main,null,a.a.createElement(lt.a,{gutter:"md"},a.a.createElement(ut.a,{span:12},t&&a.a.createElement(t,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1})))))}}]),e}(r.Component))||it;ht.contextTypes={store:J.a.object},ht.propTypes={loadEntity:J.a.func,clearNotifications:J.a.func};var vt,yt=Object(p.routerParams)(Object(s.connect)(function(){return{}},function(t){return{loadEntity:function(e){return t(ct(e))},clearNotifications:function(){return t(st())}}})(ht)),bt=n(47),gt=n(73),Et=n(74),_t=(n(252),n(254),Object(p.registry)()(vt=function(t){function e(t,n){var r;return L()(this,e),(r=M()(this,U()(e).call(this,t,n))).loadInventory(),r.state={},r}return W()(e,t),F()(e,[{key:"loadInventory",value:function(){var t=rt()(et.a.mark(function t(){var e,n,r,a,o,i,c,s,l,u=this;return et.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.props.clearNotifications(),t.next=3,mt();case 3:e=t.sent,n=e.inventoryConnector,r=e.INVENTORY_ACTION_TYPES,a=e.mergeWithDetail,this.getRegistry().register(y()({},a(Object(N.applyReducerHash)(h()({},O.GET_ENTITY_FULFILLED,C),w)))),o=P({actionType:r.LOAD_ENTITY,callback:function(t){t.data.then(function(t){u.props.loadEntity(t.results[0].id),o()})}}),i=n(),c=i.InventoryDetailHead,s=i.AppInfo,(l=i.VulnerabilitiesStore)&&this.getRegistry().register({VulnerabilitiesStore:l}),this.setState({InventoryDetail:c,AppInfo:s});case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.InventoryDetail,n=t.AppInfo,o=this.props,i=o.entity,c=o.currentApp,s="".concat(c&&"general_information"===c?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(p.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(s)},a.a.createElement(gt.a,null,a.a.createElement(Et.a,null,a.a.createElement(bt.a,{to:Ot.table},"Inventory")),a.a.createElement(Et.a,{isActive:!0},i?i.display_name:a.a.createElement(p.Skeleton,{size:p.SkeletonSize.xs}))),e&&a.a.createElement(e,{hideBack:!0})),a.a.createElement(p.Main,{className:s},a.a.createElement(lt.a,{gutter:"md"},a.a.createElement(ut.a,{span:12},n&&a.a.createElement(n,null)))))}}]),e}(r.Component))||vt);_t.contextTypes={store:J.a.object},_t.propTypes={history:J.a.object,entity:J.a.object,loadEntity:J.a.func,clearNotifications:J.a.func,currentApp:J.a.string};var It=Object(p.routerParams)(Object(s.connect)(function(t){var e=t.entityDetails;return{entity:e&&e.entity,currentApp:e&&e.activeApp&&e.activeApp.appName}},function(t){return{loadEntity:function(e){return t(ct(e))},clearNotifications:function(){return t(st())}}})(_t)),Tt=function(t){var e=t.component,n=t.rootClass,r=Q()(t,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(X.a,z()({},r,{component:e}))};Tt.propTypes={component:J.a.func,rootClass:J.a.string};var Ot={table:"/",detail:"/:inventoryId"};var Nt=function(t){var e,n,r=t.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),e=o[0],n=o[1],Object.values(Ot).some(function(t){return Object(Z.a)(location.href,{path:"".concat(document.baseURI).concat(e,"/").concat(n).concat(t)})})||r.push(Ot.table),a.a.createElement($.a,null,a.a.createElement(Tt,{exact:!0,path:Ot.table,component:yt,rootClass:"inventory"}),a.a.createElement(Tt,{path:Ot.detail,component:It,rootClass:"inventory"}))};Nt.propTypes={childProps:J.a.shape({history:J.a.shape({push:J.a.func})})};n(256);var jt,wt=Object(p.registry)()(jt=function(t){function e(t){var n;return L()(this,e),(n=M()(this,U()(e).call(this,t))).getRegistry().register(x),n}return W()(e,t),F()(e,[{key:"componentDidMount",value:function(){var t=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(e){return t.props.history.push("/".concat(e.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Nt,{childProps:this.props}))}}]),e}(r.Component))||jt;wt.propTypes={history:J.a.object};var At=Object(p.routerParams)(Object(s.connect)()(wt)),Ct=window.location.pathname.split("/");Ct.shift();var St="/";"beta"===Ct[0]&&(St="/".concat(Ct.shift(),"/")),i.a.render(a.a.createElement(s.Provider,{store:function(){S=new u.a;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(p.getRegistry)({},[S.getMiddleware(),Object(d.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(e))}().getStore()},a.a.createElement(c.a,{basename:"".concat(St).concat(Ct[0],"/").concat(Ct[1])},a.a.createElement(At,null))),document.getElementById("root"))},91:function(t,e,n){var r=n(251);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,a);r.locals&&(t.exports=r.locals)}});
//# sourceMappingURL=../sourcemaps/App.js.map