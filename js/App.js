!function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/insights/platform/inventory/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([629,1]),n()}({307:function(t,e,n){var r=n(619);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(151)(r,a);r.locals&&(t.exports=r.locals)},619:function(t,e,n){(e=t.exports=n(91)(!1)).i(n(308),""),e.push([t.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n',""])},625:function(t,e,n){var r=n(626);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(151)(r,a);r.locals&&(t.exports=r.locals)},626:function(t,e,n){(e=t.exports=n(91)(!1)).i(n(308),""),e.i(n(627),""),e.push([t.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},629:function(t,e,n){"use strict";n.r(e);var r,a=n(1),o=n.n(a),i=n(9),c=n.n(i),s=n(305),u=n(48),l=n(319),p=n.n(l),f=n(18),d=n(164),m=n(338),y=n(78),h=n.n(y),v=n(40),g=n.n(v),b=n(99),E=n.n(b),I=n(35),_=n.n(I),T=n(331),j=n.n(T),O=n(332),w=n.n(O),S=n(333),A=n.n(S),x=n(334),k=n.n(x)()(["GET_ENTITIES","GET_ENTITY"],function(t){return[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")]}),D=A()(["ALERT_ADD","ALERT_DISMISS"].concat(g()(k)),function(t){return t}),R=n(166),N=n(108),P=0,L={loaded:!1};function C(t,e){var n=e.payload,r=n.health,a=n.tags,o=E()(n,["health","tags"]);return _()({},t,{health:r,tags:a,entity:_()({},t.entity,o)})}function M(t){return _()({},t,{loaded:!0,activeApps:[{title:"Vulnerabilities",name:"vulnerabilities",component:f.Vulnerabilities},{title:"Configuration Assessment",name:"configuration_assessment",component:f.Advisor},{title:"Compliance",name:"compliance",component:f.Compliance},{title:"General Information",name:"general_information",component:f.GeneralInformation}]})}var F,G={alerts:Object(R.applyReducerHash)(_()((r={},h()(r,D.ALERT_ADD,function(t,e){var n=e.payload;return g()(t).concat([_()({id:P++},n)])}),h()(r,D.ALERT_DISMISS,function(t,e){return t.filter(function(t){return t.id!==e.alert.id})}),r),w()(j()(D,function(t){return t.endsWith("_REJECTED")}),function(){return function(t,e){return g()(t).concat([{title:e.payload.message,id:P++,dismissible:!0,variant:"warning"}])}})),[])},B=Object(R.applyReducerHash)(h()({},D.GET_ENTITIES_FULFILLED,function(t,e){var n=e.payload;return _()({},t,{rows:Object(N.mergeArraysByKey)([t.rows,n.results]),entities:Object(N.mergeArraysByKey)([t.entities,n.results])})}),L),U=function(t){var e;return Object(R.applyReducerHash)((e={},h()(e,t.LOAD_ENTITY_FULFILLED,M),h()(e,D.GET_ENTITY_FULFILLED,C),e),L)},H=G;function Y(t){var e=t.actionType,n=t.callback;return F.addNew({on:e,callback:n})}var V=n(100),J=n.n(V),W=n(101),z=n.n(W),K=n(102),q=n.n(K),Q=n(103),X=n.n(Q),Z=n(104),$=n.n(Z),tt=n(0),et=n.n(tt),nt=n(335),rt=n.n(nt),at=n(153),ot=n(306),it=n(316),ct=n(44),st=n.n(ct),ut=n(77),lt=n.n(ut),pt=n(109),ft=n.n(pt),dt=(n(307),"/r/insights/platform/inventory/api/v1/hosts");function mt(t){return yt.apply(this,arguments)}function yt(){return(yt=lt()(st.a.mark(function t(e){var n,r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.filters,r={per_page:100,filters:void 0===n?[]:n},t.next=4,ht(_()({page:1},r));case 4:if(a=t.sent,o=Math.ceil(Number(a.total)/100),i=a.results,!(o>1)){t.next=16;break}return t.t0=g()(i),t.t1=g.a,t.next=12,Promise.all(g()(Array(o)).map(function(t,e){if(e+1!==1)return ht(_()({page:e+1},r)).then(function(t){return t.results})}));case 12:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4=Boolean,i=t.t0.concat.call(t.t0,t.t3).filter(t.t4);case 16:return t.abrupt("return",i.flatMap(function(t){return t}).flatMap(function(t){t.facts;return E()(t,["facts"])}));case 17:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function ht(t){var e=t.page,n=t.per_page,r=t.filters,a="",o=(void 0===r?[]:r).find(function(t){return"display_name"===t.value});if(n||e||o){var i={per_page:n,page:e,display_name:o&&o.filter};a="?"+Object.keys(i).reduce(function(t,e){return g()(t).concat(["".concat(e,"=").concat(i[e])])},[]).filter(function(t){return-1===t.indexOf("undefined")}).join("&")}return fetch("".concat(dt).concat(a)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}var vt,gt=function(t){return{type:D.GET_ENTITIES,payload:ht(t).then(function(t){return{results:t.results}})}},bt=function(t){return{type:D.GET_ENTITY,payload:function(t){return fetch("".concat(dt,"/").concat(t)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}(t)}},Et=function(t){var e=t.title,n=t.dismissible,r=void 0!==n&&n,a=t.variant,o=void 0===a?"warning":a;return{type:D.ALERT_ADD,payload:{title:e,dismissible:r,variant:o}}},It=n(311),_t=n(312),Tt=n(92),jt=n(122),Ot=n(154),wt=n(152),St=function(){return insights.loadInventory({react:o.a,reactRouterDom:Tt,reactCore:jt,reactIcons:Ot,pfReact:{PaginationRow:wt.a}})},At=Object(f.registry)()(vt=function(t){function e(t,n){var r;return J()(this,e),(r=q()(this,X()(e).call(this,t,n))).loadInventory(),r.inventory=o.a.createRef(),r.state={removeListener:function(){}},r.onRefresh=r.onRefresh.bind(ft()(ft()(r))),r.onSelect=r.onSelect.bind(ft()(ft()(r))),r}return $()(e,t),z()(e,[{key:"loadInventory",value:function(){var t=lt()(st.a.mark(function t(){var e,n,r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St();case 2:e=t.sent,n=e.inventoryConnector,r=e.mergeWithEntities,this.getRegistry().register(_()({},r(B))),a=n(),o=a.InventoryTable,i=a.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:o});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onRefresh",value:function(t){var e=t.filters;this.setState({filters:e})}},{key:"onSelect",value:function(){var t=lt()(st.a.mark(function t(e,n){var r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.state.filters,t.next=3,mt({filters:r});case 3:a=t.sent,"json"===n?Object(N.downloadFile)(JSON.stringify(a),(new Date).toISOString(),n):(o=Object.keys(a[0]),i=a.map(function(t){return o.map(function(e){return t[e]||""}).join(",")}),Object(N.downloadFile)([o.join(",")].concat(g()(i)).join("\n"),(new Date).toISOString(),n));case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.ConnectedInventory;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.PageHeader,{className:"pf-m-light"},o.a.createElement(f.PageHeaderTitle,{title:"Inventory"})),o.a.createElement(f.Main,null,o.a.createElement(It.a,{gutter:"md"},o.a.createElement(_t.a,{span:12},t&&o.a.createElement(t,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1},f.DownloadButton&&o.a.createElement(f.DownloadButton,{onSelect:this.onSelect}))))))}}]),e}(a.Component))||vt;At.contextTypes={store:et.a.object},At.propTypes={addAlert:et.a.func,loadEntities:et.a.func,loadEntity:et.a.func};var xt,kt=Object(f.routerParams)(Object(u.connect)(function(){return{}},function(t){return{addAlert:function(e){return t(Et(e))},loadEntities:function(e){return t(gt(e))},loadEntity:function(e){return t(bt(e))}}})(At)),Dt=n(128),Rt=n(309),Nt=n(310),Pt=(n(621),n(623),Object(f.registry)()(xt=function(t){function e(t,n){var r;return J()(this,e),(r=q()(this,X()(e).call(this,t,n))).loadInventory(),r.state={},r}return $()(e,t),z()(e,[{key:"loadInventory",value:function(){var t=lt()(st.a.mark(function t(){var e,n,r,a,o,i,c,s,u,l=this;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St();case 2:e=t.sent,n=e.inventoryConnector,r=e.INVENTORY_ACTION_TYPES,a=e.mergeWithDetail,this.getRegistry().register(_()({},a(U(r)))),o=Y({actionType:r.LOAD_ENTITY,callback:function(t){t.data.then(function(t){t.error&&l.props.addAlert({title:t.error.message}),l.props.loadEntity(t.results[0].id),o()})}}),i=n(),c=i.InventoryDetailHead,s=i.AppInfo,(u=i.VulnerabilitiesStore)&&this.getRegistry().register({VulnerabilitiesStore:u}),this.setState({InventoryDetail:c,AppInfo:s});case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.InventoryDetail,n=t.AppInfo,r=this.props.entity;return o.a.createElement(a.Fragment,null,o.a.createElement(f.PageHeader,{className:"pf-m-light ins-inventory-detail"},o.a.createElement(Rt.a,null,o.a.createElement(Nt.a,null,o.a.createElement(Dt.a,{to:Mt.table},"Inventory")),o.a.createElement(Nt.a,{isActive:!0},r?r.display_name:o.a.createElement(f.Skeleton,{size:f.SkeletonSize.xs}))),e&&o.a.createElement(e,{hideBack:!0})),o.a.createElement(f.Main,null,o.a.createElement(It.a,{gutter:"md"},o.a.createElement(_t.a,{span:12},n&&o.a.createElement(n,null)))))}}]),e}(a.Component))||xt);Pt.contextTypes={store:et.a.object},Pt.propTypes={history:et.a.object,entity:et.a.object,addAlert:et.a.func,loadEntities:et.a.func,loadEntity:et.a.func};var Lt=Object(f.routerParams)(Object(u.connect)(function(t){var e=t.entityDetails;return{entity:e&&e.entity}},function(t){return{addAlert:function(e){return t(Et(e))},loadEntities:function(){return t(gt())},loadEntity:function(e){return t(bt(e))}}})(Pt)),Ct=function(t){var e=t.component,n=t.rootClass,r=E()(t,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.classList.add("page__".concat(n),"pf-l-page__main"),o.a.createElement(at.a,rt()({},r,{component:e}))};Ct.propTypes={component:et.a.func,rootClass:et.a.string};var Mt={table:"/",detail:"/:inventoryId"};var Ft=function(t){var e=t.childProps.history;return Object.values(Mt).some(function(t){return Object(ot.a)(location.href,{path:"".concat(document.baseURI,"platform/inventory").concat(t)})})||e.push(Mt.table),o.a.createElement(it.a,null,o.a.createElement(Ct,{exact:!0,path:Mt.table,component:kt,rootClass:"inventory"}),o.a.createElement(Ct,{path:Mt.detail,component:Lt,rootClass:"inventory"}))};Ft.propTypes={childProps:et.a.shape({history:et.a.shape({push:et.a.func})})};n(625);var Gt,Bt=Object(f.registry)()(Gt=function(t){function e(t){var n;return J()(this,e),(n=q()(this,X()(e).call(this,t))).getRegistry().register(H),n}return $()(e,t),z()(e,[{key:"componentDidMount",value:function(){var t=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(e){return t.props.history.push("/".concat(e.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.NotificationsPortal,null),o.a.createElement(Ft,{childProps:this.props}))}}]),e}(a.Component))||Gt;Bt.propTypes={history:et.a.object};var Ut=Object(f.routerParams)(Object(u.connect)()(Bt)),Ht=n(336),Yt=n.n(Ht);c.a.render(o.a.createElement(u.Provider,{store:function(){F=new p.a;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(f.getRegistry)({},[F.getMiddleware(),Object(m.a)(),Object(d.notificationsMiddleware)()].concat(e))}(Yt.a).getStore()},o.a.createElement(s.a,{basename:"/".concat("insights","/platform/inventory")},o.a.createElement(Ut,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map