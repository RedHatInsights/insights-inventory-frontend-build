!function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/apps/inventory/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([183,1]),n()}({102:function(t,e,n){var r=n(173);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(66)(r,a);r.locals&&(t.exports=r.locals)},173:function(t,e,n){(e=t.exports=n(43)(!1)).i(n(103),""),e.push([t.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-global--BorderColor--light-200); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n',""])},179:function(t,e,n){var r=n(180);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(66)(r,a);r.locals&&(t.exports=r.locals)},180:function(t,e,n){(e=t.exports=n(43)(!1)).i(n(103),""),e.i(n(181),""),e.push([t.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},183:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),o=n(17),i=n.n(o),c=n(99),s=n(32),l=n(117),u=n.n(l),p=n(14),f=n(51),d=n(125),h=n(63),m=n.n(h),v=n(52),y=n.n(v),b=n(28),g=n.n(b),E=n(35),_=n.n(E),I=n(121),T=n.n(I),O=n(122),j=n.n(O)()(["GET_ENTITIES","GET_ENTITY"],function(t){return[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")]}),w=T()([].concat(["ALERT_ADD","ALERT_DISMISS"],_()(j)),function(t){return t}),N=n(82),S=n(60),k={loaded:!1};function x(t,e){var n=e.payload,r=n.health,a=n.tags,o=y()(n,["health","tags"]);return g()({},t,{health:r,tags:a,entity:g()({},t.entity,o)})}function A(t){return g()({},t,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:p.Advisor},{title:"Vulnerabilities",name:"vulnerabilities",component:p.Vulnerabilities},{title:"Compliance",name:"compliance",component:p.Compliance},{title:"General Information",name:"general_information",component:p.GeneralInformation}]})}var C,D={notifications:f.notifications},R=Object(N.applyReducerHash)(m()({},w.GET_ENTITIES_FULFILLED,function(t,e){var n=e.payload;return g()({},t,{rows:Object(S.mergeArraysByKey)([t.rows,n.results]),entities:Object(S.mergeArraysByKey)([t.entities,n.results])})}),k),P=function(t){var e;return Object(N.applyReducerHash)((e={},m()(e,t.LOAD_ENTITY_FULFILLED,A),m()(e,w.GET_ENTITY_FULFILLED,x),e),k)},L=D;function F(t){var e=t.actionType,n=t.callback;return C.addNew({on:e,callback:n})}var B=n(53),M=n.n(B),G=n(54),U=n.n(G),H=n(55),Y=n.n(H),V=n(56),W=n.n(V),J=n(57),K=n.n(J),z=n(0),q=n.n(z),Q=n(123),X=n.n(Q),Z=n(69),$=n(100),tt=n(114),et=n(30),nt=n.n(et),rt=n(41),at=n.n(rt),ot=n(61),it=n.n(ot),ct=(n(102),"/api/inventory/v1/hosts");function st(t){return lt.apply(this,arguments)}function lt(){return(lt=at()(nt.a.mark(function t(e){var n,r,a,o,i;return nt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.filters,r={per_page:100,filters:void 0===n?[]:n},t.next=4,ut(g()({page:1},r));case 4:if(a=t.sent,o=Math.ceil(Number(a.total)/100),i=a.results,!(o>1)){t.next=17;break}return t.t0=[],t.t1=_()(i),t.t2=_.a,t.next=13,Promise.all(_()(Array(o)).map(function(t,e){if(e+1!==1)return ut(g()({page:e+1},r)).then(function(t){return t.results})}));case 13:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t5=Boolean,i=t.t0.concat.call(t.t0,t.t1,t.t4).filter(t.t5);case 17:return t.abrupt("return",i.flatMap(function(t){return t}).flatMap(function(t){t.facts;return y()(t,["facts"])}));case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function ut(t){var e=t.page,n=t.per_page,r=t.filters,a="",o=(void 0===r?[]:r).find(function(t){return"display_name"===t.value});if(n||e||o){var i={per_page:n,page:e,display_name:o&&o.filter};a="?"+Object.keys(i).reduce(function(t,e){return[].concat(_()(t),["".concat(e,"=").concat(i[e])])},[]).filter(function(t){return-1===t.indexOf("undefined")}).join("&")}return fetch("".concat(ct).concat(a)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}function pt(t){return fetch("".concat(ct,"/").concat(t)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}var ft,dt=function(t){return{type:w.GET_ENTITIES,payload:ut(t).then(function(t){return{results:t.results}})}},ht=function(t){return{type:w.GET_ENTITY,payload:pt(t)}},mt=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},vt=n(106),yt=n(107),bt=n(44),gt=n(40),Et=n(7),_t=function(){return insights.loadInventory({react:a.a,reactRouterDom:bt,reactCore:gt,reactIcons:Et,pfReact:{}})},It=Object(p.registry)()(ft=function(t){function e(t,n){var r;return M()(this,e),(r=Y()(this,W()(e).call(this,t,n))).loadInventory(),r.inventory=a.a.createRef(),r.state={removeListener:function(){}},r.onRefresh=r.onRefresh.bind(it()(it()(r))),r.onSelect=r.onSelect.bind(it()(it()(r))),r}return K()(e,t),U()(e,[{key:"loadInventory",value:function(){var t=at()(nt.a.mark(function t(){var e,n,r,a,o,i;return nt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.props.clearNotifications(),t.next=3,_t();case 3:e=t.sent,n=e.inventoryConnector,r=e.mergeWithEntities,this.getRegistry().register(g()({},r(R))),a=n(),o=a.InventoryTable,i=a.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:o});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onRefresh",value:function(t){var e=this;this.setState({filters:t.filters},function(){return e.inventory.current.onRefreshData(t,!1)})}},{key:"onSelect",value:function(){var t=at()(nt.a.mark(function t(e,n){var r,a,o,i;return nt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.state.filters,t.next=3,st({filters:r});case 3:a=t.sent,"json"===n?Object(S.downloadFile)(JSON.stringify(a),(new Date).toISOString(),n):(o=Object.keys(a[0]),i=a.map(function(t){return o.map(function(e){return t[e]||""}).join(",")}),Object(S.downloadFile)([o.join(",")].concat(_()(i)).join("\n"),(new Date).toISOString(),n));case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.ConnectedInventory;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.PageHeader,{className:"pf-m-light"},a.a.createElement(p.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(p.Main,null,a.a.createElement(vt.a,{gutter:"md"},a.a.createElement(yt.a,{span:12},t&&a.a.createElement(t,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1},p.DownloadButton&&a.a.createElement(p.DownloadButton,{onSelect:this.onSelect}))))))}}]),e}(r.Component))||ft;It.contextTypes={store:q.a.object},It.propTypes={loadEntities:q.a.func,loadEntity:q.a.func,clearNotifications:q.a.func};var Tt,Ot=Object(p.routerParams)(Object(s.connect)(function(){return{}},function(t){return{loadEntities:function(e){return t(dt(e))},loadEntity:function(e){return t(ht(e))},clearNotifications:function(){return t(mt())}}})(It)),jt=n(62),wt=n(104),Nt=n(105),St=(n(175),n(177),Object(p.registry)()(Tt=function(t){function e(t,n){var r;return M()(this,e),(r=Y()(this,W()(e).call(this,t,n))).loadInventory(),r.state={},r}return K()(e,t),U()(e,[{key:"loadInventory",value:function(){var t=at()(nt.a.mark(function t(){var e,n,r,a,o,i,c,s,l,u=this;return nt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.props.clearNotifications(),t.next=3,_t();case 3:e=t.sent,n=e.inventoryConnector,r=e.INVENTORY_ACTION_TYPES,a=e.mergeWithDetail,this.getRegistry().register(g()({},a(P(r)))),o=F({actionType:r.LOAD_ENTITY,callback:function(t){t.data.then(function(t){u.props.loadEntity(t.results[0].id),o()})}}),i=n(),c=i.InventoryDetailHead,s=i.AppInfo,(l=i.VulnerabilitiesStore)&&this.getRegistry().register({VulnerabilitiesStore:l}),this.setState({InventoryDetail:c,AppInfo:s});case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.InventoryDetail,n=t.AppInfo,o=this.props,i=o.entity,c=o.currentApp,s="".concat(c&&"general_information"===c?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(p.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(s)},a.a.createElement(wt.a,null,a.a.createElement(Nt.a,null,a.a.createElement(jt.a,{to:At.table},"Inventory")),a.a.createElement(Nt.a,{isActive:!0},i?i.display_name:a.a.createElement(p.Skeleton,{size:p.SkeletonSize.xs}))),e&&a.a.createElement(e,{hideBack:!0})),a.a.createElement(p.Main,{className:s},a.a.createElement(vt.a,{gutter:"md"},a.a.createElement(yt.a,{span:12},n&&a.a.createElement(n,null)))))}}]),e}(r.Component))||Tt);St.contextTypes={store:q.a.object},St.propTypes={history:q.a.object,entity:q.a.object,loadEntities:q.a.func,loadEntity:q.a.func,clearNotifications:q.a.func,currentApp:q.a.string};var kt=Object(p.routerParams)(Object(s.connect)(function(t){var e=t.entityDetails;return{entity:e&&e.entity,currentApp:e&&e.activeApp&&e.activeApp.appName}},function(t){return{loadEntities:function(){return t(dt())},loadEntity:function(e){return t(ht(e))},clearNotifications:function(){return t(mt())}}})(St)),xt=function(t){var e=t.component,n=t.rootClass,r=y()(t,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(Z.a,X()({},r,{component:e}))};xt.propTypes={component:q.a.func,rootClass:q.a.string};var At={table:"/",detail:"/:inventoryId"};var Ct=function(t){var e,n,r=t.childProps.history,o=window.location.pathname.split("/");return o.shift(),"beta"===o[0]&&o.shift(),e=o[0],n=o[1],Object.values(At).some(function(t){return Object($.a)(location.href,{path:"".concat(document.baseURI).concat(e,"/").concat(n).concat(t)})})||r.push(At.table),a.a.createElement(tt.a,null,a.a.createElement(xt,{exact:!0,path:At.table,component:Ot,rootClass:"inventory"}),a.a.createElement(xt,{path:At.detail,component:kt,rootClass:"inventory"}))};Ct.propTypes={childProps:q.a.shape({history:q.a.shape({push:q.a.func})})};n(179);var Dt,Rt=Object(p.registry)()(Dt=function(t){function e(t){var n;return M()(this,e),(n=Y()(this,W()(e).call(this,t))).getRegistry().register(L),n}return K()(e,t),U()(e,[{key:"componentDidMount",value:function(){var t=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(e){return t.props.history.push("/".concat(e.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Ct,{childProps:this.props}))}}]),e}(r.Component))||Dt;Rt.propTypes={history:q.a.object};var Pt=Object(p.routerParams)(Object(s.connect)()(Rt)),Lt=window.location.pathname.split("/");Lt.shift();var Ft="/";"beta"===Lt[0]&&(Ft="/".concat(Lt.shift(),"/")),i.a.render(a.a.createElement(s.Provider,{store:function(){C=new u.a;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(p.getRegistry)({},[C.getMiddleware(),Object(d.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(e))}().getStore()},a.a.createElement(c.a,{basename:"".concat(Ft).concat(Lt[0],"/").concat(Lt[1])},a.a.createElement(Pt,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map