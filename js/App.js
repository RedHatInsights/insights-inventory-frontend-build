!function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/insights/platform/inventory/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([633,1]),n()}({315:function(t,e,n){var r=n(623);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(145)(r,a);r.locals&&(t.exports=r.locals)},623:function(t,e,n){(e=t.exports=n(86)(!1)).i(n(316),""),e.push([t.i,"button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n",""])},629:function(t,e,n){var r=n(630);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(145)(r,a);r.locals&&(t.exports=r.locals)},630:function(t,e,n){(e=t.exports=n(86)(!1)).i(n(316),""),e.i(n(631),""),e.push([t.i,"button:focus {\n  outline: none; }\n",""])},633:function(t,e,n){"use strict";n.r(e);var r,a=n(1),o=n.n(a),i=n(14),c=n.n(i),s=n(312),u=n(45),l=n(323),f=n.n(l),p=n(19),d=n(159),y=n(342),v=n(73),m=n.n(v),h=n(36),g=n.n(h),E=n(95),b=n.n(E),I=n(33),T=n.n(I),_=n(335),j=n.n(_),O=n(336),w=n.n(O),S=n(337),A=n.n(S),N=n(338),D=n.n(N)()(["GET_ENTITIES","GET_ENTITY"],function(t){return[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")]}),x=A()(["ALERT_ADD","ALERT_DISMISS"].concat(g()(D)),function(t){return t}),k=n(161),R=n(65),P=0,L={loaded:!1};function C(t,e){var n=e.payload,r=n.health,a=n.tags,o=b()(n,["health","tags"]);return T()({},t,{health:r,tags:a,entity:T()({},t.entity,o)})}function M(t){return T()({},t,{loaded:!0,activeApps:[{title:"Vulnerabilities",name:"vulnerabilities",component:p.Vulnerabilities},{title:"Configuration Assessment",name:"configuration_assessment",component:p.Advisor},{title:"Compliance",name:"compliance",component:p.Compliance},{title:"General Information",name:"general_information",component:p.GeneralInformation}]})}var F,G={alerts:Object(k.applyReducerHash)(T()((r={},m()(r,x.ALERT_ADD,function(t,e){var n=e.payload;return g()(t).concat([T()({id:P++},n)])}),m()(r,x.ALERT_DISMISS,function(t,e){return t.filter(function(t){return t.id!==e.alert.id})}),r),w()(j()(x,function(t){return t.endsWith("_REJECTED")}),function(){return function(t,e){return g()(t).concat([{title:e.payload.message,id:P++,dismissible:!0,variant:"warning"}])}})),[])},B=Object(k.applyReducerHash)(m()({},x.GET_ENTITIES_FULFILLED,function(t,e){var n=e.payload;return T()({},t,{rows:Object(R.mergeArraysByKey)([t.rows,n.results]),entities:Object(R.mergeArraysByKey)([t.entities,n.results])})}),L),Y=function(t){var e;return Object(k.applyReducerHash)((e={},m()(e,t.LOAD_ENTITY_FULFILLED,M),m()(e,x.GET_ENTITY_FULFILLED,C),e),L)},H=G;function J(t){var e=t.actionType,n=t.callback;return F.addNew({on:e,callback:n})}var U=n(96),V=n.n(U),W=n(97),K=n.n(W),q=n(98),z=n.n(q),Q=n(99),X=n.n(Q),Z=n(100),$=n.n(Z),tt=n(0),et=n.n(tt),nt=n(339),rt=n.n(nt),at=n(147),ot=n(319),it=n(320),ct=n(42),st=n.n(ct),ut=n(72),lt=n.n(ut),ft=n(54),pt=n.n(ft),dt=(n(315),"/r/insights/platform/inventory/api/v1/hosts");function yt(t){return vt.apply(this,arguments)}function vt(){return(vt=lt()(st.a.mark(function t(e){var n,r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.filters,r={per_page:100,filters:void 0===n?[]:n},t.next=4,mt(T()({page:1},r));case 4:if(a=t.sent,o=Math.ceil(Number(a.total)/100),i=a.results,!(o>1)){t.next=18;break}return t.t0=g()(i),t.t1=g.a,t.next=12,Promise.all(g()(Array(o)).map(function(t,e){if(e+1!==1)return mt(T()({page:e+1},r)).then(function(t){return t.results})}));case 12:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4=Boolean,t.t5=function(t){return t},t.t6=function(t){t.facts;return b()(t,["facts"])},i=t.t0.concat.call(t.t0,t.t3).filter(t.t4).flatMap(t.t5).flatMap(t.t6);case 18:return t.abrupt("return",i);case 19:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function mt(t){var e=t.page,n=t.per_page,r=t.filters,a="",o=(void 0===r?[]:r).find(function(t){return"display_name"===t.value});if(n||e||o){var i={per_page:n,page:e,display_name:o&&o.filter};a="?"+Object.keys(i).reduce(function(t,e){return g()(t).concat(["".concat(e,"=").concat(i[e])])},[]).filter(function(t){return-1===t.indexOf("undefined")}).join("&")}return fetch("".concat(dt).concat(a)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}var ht,gt=function(t){return{type:x.GET_ENTITIES,payload:mt(t).then(function(t){return{results:t.results}})}},Et=function(t){return{type:x.GET_ENTITY,payload:function(t){return fetch("".concat(dt,"/").concat(t)).then(function(t){if(t.ok)return t.json();throw new Error("Unexpected response code ".concat(t.status))})}(t)}},bt=function(t){var e=t.title,n=t.dismissible,r=void 0!==n&&n,a=t.variant,o=void 0===a?"warning":a;return{type:x.ALERT_ADD,payload:{title:e,dismissible:r,variant:o}}},It=n(313),Tt=n(314),_t=n(116),jt=n(87),Ot=n(29),wt=n(146),St=function(){return insights.loadInventory({react:o.a,reactRouterDom:_t,reactCore:jt,reactIcons:Ot,pfReact:{PaginationRow:wt.a}})},At=Object(p.registry)()(ht=function(t){function e(t,n){var r;return V()(this,e),(r=z()(this,X()(e).call(this,t,n))).loadInventory(),r.inventory=o.a.createRef(),r.state={removeListener:function(){}},r.onRefresh=r.onRefresh.bind(pt()(pt()(r))),r.onSelect=r.onSelect.bind(pt()(pt()(r))),r}return $()(e,t),K()(e,[{key:"loadInventory",value:function(){var t=lt()(st.a.mark(function t(){var e,n,r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St();case 2:e=t.sent,n=e.inventoryConnector,r=e.mergeWithEntities,this.getRegistry().register(T()({},r(B))),a=n(),o=a.InventoryTable,i=a.updateEntities,this.updateEntities=i,this.setState({ConnectedInventory:o});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onRefresh",value:function(t){var e=t.filters;this.setState({filters:e})}},{key:"onSelect",value:function(){var t=lt()(st.a.mark(function t(e,n){var r,a,o,i;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.state.filters,t.next=3,yt({filters:r});case 3:a=t.sent,"json"===n?Object(R.downloadFile)(JSON.stringify(a),"".concat((new Date).toISOString(),".json"),R.JSON_TYPE):(o=Object.keys(a[0]),i=a.map(function(t){return o.map(function(e){return t[e]||""}).join(",")}),Object(R.downloadFile)([o.join(",")].concat(g()(i)).join("\n"),"".concat((new Date).toISOString(),".csv"),R.JSON_TYPE));case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.ConnectedInventory;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.PageHeader,{className:"pf-m-light"},o.a.createElement(p.PageHeaderTitle,{title:"Inventory"})),o.a.createElement(p.Main,null,o.a.createElement(It.a,{gutter:"md"},o.a.createElement(Tt.a,{span:12},t&&o.a.createElement(t,{filters:[{title:"Health status",value:"health-status",items:[]},{title:"Last seen",value:"last-seen",items:[]}],ref:this.inventory,onRefresh:this.onRefresh},p.DownloadButton&&o.a.createElement(p.DownloadButton,{onSelect:this.onSelect}))))))}}]),e}(a.Component))||ht;At.contextTypes={store:et.a.object},At.propTypes={addAlert:et.a.func,loadEntities:et.a.func,loadEntity:et.a.func};var Nt,Dt=Object(p.routerParams)(Object(u.connect)(function(){return{}},function(t){return{addAlert:function(e){return t(bt(e))},loadEntities:function(e){return t(gt(e))},loadEntity:function(e){return t(Et(e))}}})(At)),xt=(n(625),n(627),Object(p.registry)()(Nt=function(t){function e(t,n){var r;return V()(this,e),(r=z()(this,X()(e).call(this,t,n))).loadInventory(),r.state={},r.onNavigate=r.onNavigate.bind(pt()(pt()(r))),r}return $()(e,t),K()(e,[{key:"loadInventory",value:function(){var t=lt()(st.a.mark(function t(){var e,n,r,a,o,i,c,s,u,l=this;return st.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St();case 2:e=t.sent,n=e.inventoryConnector,r=e.INVENTORY_ACTION_TYPES,a=e.mergeWithDetail,this.getRegistry().register(T()({},a(Y(r)))),o=J({actionType:r.LOAD_ENTITY,callback:function(t){t.data.then(function(t){t.error&&l.props.addAlert({title:t.error.message}),l.props.loadEntity(t.results[0].id),o()})}}),i=n(),c=i.InventoryDetailHead,s=i.AppInfo,(u=i.VulnerabilitiesStore)&&this.getRegistry().register({VulnerabilitiesStore:u}),this.setState({InventoryDetail:c,AppInfo:s});case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"onNavigate",value:function(t){this.props.history.push("/".concat(t))}},{key:"render",value:function(){var t=this,e=this.state,n=e.InventoryDetail,r=e.AppInfo,i=this.props.entity;return o.a.createElement(a.Fragment,null,o.a.createElement(p.PageHeader,{className:"pf-m-light ins-inventory-detail"},o.a.createElement(p.Breadcrumbs,{items:[{title:"Inventory",navigate:"entity"}],current:i&&i.display_name,onNavigate:function(e,n){return t.onNavigate(n)}}),n&&o.a.createElement(n,{hideBack:!0})),o.a.createElement(p.Main,null,o.a.createElement(It.a,{gutter:"md"},o.a.createElement(Tt.a,{span:12},r&&o.a.createElement(r,null)))))}}]),e}(a.Component))||Nt);xt.contextTypes={store:et.a.object},xt.propTypes={history:et.a.object,entity:et.a.object,addAlert:et.a.func,loadEntities:et.a.func,loadEntity:et.a.func};var kt=Object(p.routerParams)(Object(u.connect)(function(t){var e=t.entityDetails;return{entity:e&&e.entity}},function(t){return{addAlert:function(e){return t(bt(e))},loadEntities:function(){return t(gt())},loadEntity:function(e){return t(Et(e))}}})(xt)),Rt=function(t){var e=t.component,n=t.rootClass,r=b()(t,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-l-page__main"),o.a.createElement(at.a,rt()({},r,{component:e}))};Rt.propTypes={component:et.a.func,rootClass:et.a.string};var Pt,Lt=function(){return o.a.createElement(ot.a,null,o.a.createElement(Rt,{exact:!0,path:"/entity",component:Dt,rootClass:"inventory"}),o.a.createElement(Rt,{path:"/entity/:inventoryId",component:kt,rootClass:"inventory"}),o.a.createElement(it.a,{to:"/entity"}))},Ct=(n(629),Object(p.registry)()(Pt=function(t){function e(t){var n;return V()(this,e),(n=z()(this,X()(e).call(this,t))).getRegistry().register(H),n}return $()(e,t),K()(e,[{key:"componentDidMount",value:function(){var t=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(e){return t.props.history.push("/".concat(e.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.NotificationsPortal,null),o.a.createElement(Lt,{childProps:this.props}))}}]),e}(a.Component))||Pt);Ct.propTypes={history:et.a.object};var Mt=Object(p.routerParams)(Object(u.connect)()(Ct)),Ft=n(340),Gt=n.n(Ft);c.a.render(o.a.createElement(u.Provider,{store:function(){F=new f.a;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(p.getRegistry)({},[F.getMiddleware(),Object(y.a)(),Object(d.notificationsMiddleware)()].concat(e))}(Gt.a).getStore()},o.a.createElement(s.a,{basename:"/".concat("insights","/platform/inventory")},o.a.createElement(Mt,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map
