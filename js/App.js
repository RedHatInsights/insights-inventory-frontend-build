!function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)o=i[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/apps/inventory/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([637,1]),n()}({318:function(e,t,n){var r=n(628);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,a);r.locals&&(e.exports=r.locals)},556:function(e,t,n){var r={"./af":174,"./af.js":174,"./ar":175,"./ar-dz":176,"./ar-dz.js":176,"./ar-kw":177,"./ar-kw.js":177,"./ar-ly":178,"./ar-ly.js":178,"./ar-ma":179,"./ar-ma.js":179,"./ar-sa":180,"./ar-sa.js":180,"./ar-tn":181,"./ar-tn.js":181,"./ar.js":175,"./az":182,"./az.js":182,"./be":183,"./be.js":183,"./bg":184,"./bg.js":184,"./bm":185,"./bm.js":185,"./bn":186,"./bn.js":186,"./bo":187,"./bo.js":187,"./br":188,"./br.js":188,"./bs":189,"./bs.js":189,"./ca":190,"./ca.js":190,"./cs":191,"./cs.js":191,"./cv":192,"./cv.js":192,"./cy":193,"./cy.js":193,"./da":194,"./da.js":194,"./de":195,"./de-at":196,"./de-at.js":196,"./de-ch":197,"./de-ch.js":197,"./de.js":195,"./dv":198,"./dv.js":198,"./el":199,"./el.js":199,"./en-SG":200,"./en-SG.js":200,"./en-au":201,"./en-au.js":201,"./en-ca":202,"./en-ca.js":202,"./en-gb":203,"./en-gb.js":203,"./en-ie":204,"./en-ie.js":204,"./en-il":205,"./en-il.js":205,"./en-nz":206,"./en-nz.js":206,"./eo":207,"./eo.js":207,"./es":208,"./es-do":209,"./es-do.js":209,"./es-us":210,"./es-us.js":210,"./es.js":208,"./et":211,"./et.js":211,"./eu":212,"./eu.js":212,"./fa":213,"./fa.js":213,"./fi":214,"./fi.js":214,"./fo":215,"./fo.js":215,"./fr":216,"./fr-ca":217,"./fr-ca.js":217,"./fr-ch":218,"./fr-ch.js":218,"./fr.js":216,"./fy":219,"./fy.js":219,"./ga":220,"./ga.js":220,"./gd":221,"./gd.js":221,"./gl":222,"./gl.js":222,"./gom-latn":223,"./gom-latn.js":223,"./gu":224,"./gu.js":224,"./he":225,"./he.js":225,"./hi":226,"./hi.js":226,"./hr":227,"./hr.js":227,"./hu":228,"./hu.js":228,"./hy-am":229,"./hy-am.js":229,"./id":230,"./id.js":230,"./is":231,"./is.js":231,"./it":232,"./it-ch":233,"./it-ch.js":233,"./it.js":232,"./ja":234,"./ja.js":234,"./jv":235,"./jv.js":235,"./ka":236,"./ka.js":236,"./kk":237,"./kk.js":237,"./km":238,"./km.js":238,"./kn":239,"./kn.js":239,"./ko":240,"./ko.js":240,"./ku":241,"./ku.js":241,"./ky":242,"./ky.js":242,"./lb":243,"./lb.js":243,"./lo":244,"./lo.js":244,"./lt":245,"./lt.js":245,"./lv":246,"./lv.js":246,"./me":247,"./me.js":247,"./mi":248,"./mi.js":248,"./mk":249,"./mk.js":249,"./ml":250,"./ml.js":250,"./mn":251,"./mn.js":251,"./mr":252,"./mr.js":252,"./ms":253,"./ms-my":254,"./ms-my.js":254,"./ms.js":253,"./mt":255,"./mt.js":255,"./my":256,"./my.js":256,"./nb":257,"./nb.js":257,"./ne":258,"./ne.js":258,"./nl":259,"./nl-be":260,"./nl-be.js":260,"./nl.js":259,"./nn":261,"./nn.js":261,"./pa-in":262,"./pa-in.js":262,"./pl":263,"./pl.js":263,"./pt":264,"./pt-br":265,"./pt-br.js":265,"./pt.js":264,"./ro":266,"./ro.js":266,"./ru":267,"./ru.js":267,"./sd":268,"./sd.js":268,"./se":269,"./se.js":269,"./si":270,"./si.js":270,"./sk":271,"./sk.js":271,"./sl":272,"./sl.js":272,"./sq":273,"./sq.js":273,"./sr":274,"./sr-cyrl":275,"./sr-cyrl.js":275,"./sr.js":274,"./ss":276,"./ss.js":276,"./sv":277,"./sv.js":277,"./sw":278,"./sw.js":278,"./ta":279,"./ta.js":279,"./te":280,"./te.js":280,"./tet":281,"./tet.js":281,"./tg":282,"./tg.js":282,"./th":283,"./th.js":283,"./tl-ph":284,"./tl-ph.js":284,"./tlh":285,"./tlh.js":285,"./tr":286,"./tr.js":286,"./tzl":287,"./tzl.js":287,"./tzm":288,"./tzm-latn":289,"./tzm-latn.js":289,"./tzm.js":288,"./ug-cn":290,"./ug-cn.js":290,"./uk":291,"./uk.js":291,"./ur":292,"./ur.js":292,"./uz":293,"./uz-latn":294,"./uz-latn.js":294,"./uz.js":293,"./vi":295,"./vi.js":295,"./x-pseudo":296,"./x-pseudo.js":296,"./yo":297,"./yo.js":297,"./zh-cn":298,"./zh-cn.js":298,"./zh-hk":299,"./zh-hk.js":299,"./zh-tw":300,"./zh-tw.js":300};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=556},573:function(e,t){},603:function(e,t){},604:function(e,t){},605:function(e,t){},620:function(e,t){},628:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(319),""),t.push([e.i,'button:focus {\n  outline: none; }\n\n.buttons button + button {\n  margin-left: 15px; }\n\n.ins-inventory-filters .pf-l-grid__item:not([class*="ins-"]) {\n  margin-top: -4px; }\n\n.pf-c-breadcrumb .pf-c-breadcrumb__item .ins-c-skeleton {\n  width: 75px;\n  width: 5.35714rem; }\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n  background: var(--pf-global--BackgroundColor--100); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list:after {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--pf-c-tabs__item--BorderColor); }\n\n.ins-inventory-detail.ins-c-inventory__detail--general-info .pf-c-tabs__list li:not(.pf-m-current) button:before {\n  border: solid var(--pf-c-tabs__item--BorderColor);\n  border-width: var(--pf-c-tabs__item--BorderWidth) 0 var(--pf-c-tabs__item--BorderWidth) var(--pf-c-tabs__item--BorderWidth); }\n',""])},633:function(e,t,n){var r=n(634);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,a);r.locals&&(e.exports=r.locals)},634:function(e,t,n){(t=e.exports=n(8)(!1)).i(n(319),""),t.i(n(635),""),t.push([e.i,"button:focus {\n  outline: none; }\n\ntable.ins-entity-table th {\n  padding: 1rem;\n  padding-left: 2rem; }\n",""])},637:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(13),o=n.n(s),i=n(166),c=n(27),l=n(325),u=n.n(l),p=n(44),f=n.n(p),m=n(42),d=n(338),j=n(90),h=n.n(j),y=n(38),v=n.n(y),b=n(48),g=n.n(b),E=n(328),_=n.n(E),I=n(329),k=n.n(I)()(["GET_ENTITIES","GET_ENTITY"],function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}),T=_()([].concat(["ALERT_ADD","ALERT_DISMISS"],g()(k)),function(e){return e}),w=n(122),N=n(123),O=n(124),S=n.n(O),A=n(75),x=n.n(A),C=n(331),z=n.n(C),R=n(335),D=n.n(R),P={loaded:!1},L=function(e){return"true"===window.sessionStorage.getItem("disableEntitlements")||e&&e.is_entitled};function B(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{}}).payload.entitlements;return v()({},e,{loaded:!0,activeApps:[{title:"General Information",name:"general_information",component:S.a},L(t&&t.insights)&&{title:"Insights",name:"insights",component:D.a},L(t&&t.smart_management)&&{title:"Vulnerabilities",name:"vulnerabilities",component:x.a},L(t&&t.smart_management)&&{title:"Compliance",name:"compliance",component:z.a}].filter(Boolean)})}var F,G={notifications:m.notifications,systemProfileStore:O.systemProfileStore},M=Object(N.applyReducerHash)(h()({},T.GET_ENTITIES_FULFILLED,function(e,t){var n=t.payload;return v()({},e,{rows:Object(w.mergeArraysByKey)([e.rows,n.results]),entities:Object(w.mergeArraysByKey)([e.entities,n.results])})}),P),U=G;function H(e){var t=e.actionType,n=e.callback;return F.addNew({on:t,callback:n})}var V=n(61),W=n.n(V),Y=n(62),J=n.n(Y),K=n(63),q=n.n(K),Q=n(64),X=n.n(Q),Z=n(65),$=n.n(Z),ee=n(1),te=n.n(ee),ne=n(336),re=n.n(ne),ae=n(97),se=n.n(ae),oe=n(88),ie=n(167),ce=n(322),le=n(41),ue=n.n(le),pe=n(66),fe=n.n(pe),me=n(96),de=n.n(me),je=(n(318),n(67)),he=n.n(je),ye=n(30);var ve,be=function(){return{type:T.GET_ENTITY,payload:insights.chrome.auth.getUser()}},ge=function(){return{type:"@@INSIGHTS-CORE/NOTIFICATIONS/CLEAR_NOTIFICATIONS"}},Ee=n(147),_e=n(148),Ie=n(37),ke=n(26),Te=n(12),we=n(52),Ne=function(){return insights.loadInventory({react:a.a,reactRouterDom:Ie,reactCore:ke,reactIcons:Te,pfReactTable:we})},Oe=f()()(ve=function(e){function t(e,n){var r;return W()(this,t),(r=q()(this,X()(t).call(this,e,n))).loadInventory(),r.inventory=a.a.createRef(),r.state={removeListener:function(){}},r.onRefresh=r.onRefresh.bind(de()(de()(r))),r}return $()(t,e),J()(t,[{key:"loadInventory",value:function(){var e=fe()(ue.a.mark(function e(){var t,n,r,a,s,o;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Ne();case 3:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,this.getRegistry().register(v()({},r(M))),a=n(),s=a.InventoryTable,o=a.updateEntities,this.updateEntities=o,this.setState({ConnectedInventory:s});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onRefresh",value:function(e){var t=this;this.setState({filters:e.filters},function(){return t.inventory.current.onRefreshData(e,!1)})}},{key:"render",value:function(){var e=this.state.ConnectedInventory;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ye.PageHeader,{className:"pf-m-light"},a.a.createElement(ye.PageHeaderTitle,{title:"Inventory"})),a.a.createElement(ye.Main,null,a.a.createElement(Ee.a,{gutter:"md"},a.a.createElement(_e.a,{span:12},e&&a.a.createElement(e,{ref:this.inventory,onRefresh:this.onRefresh,hasCheckbox:!1})))))}}]),t}(r.Component))||ve;Oe.contextTypes={store:te.a.object},Oe.propTypes={loadEntity:te.a.func,clearNotifications:te.a.func};var Se,Ae=he()(Object(c.connect)(function(){return{}},function(e){return{loadEntity:function(t){return e(be(t))},clearNotifications:function(){return e(ge())}}})(Oe)),xe=n(73),Ce=n(136),ze=n(137),Re=(n(629),n(631),f()()(Se=function(e){function t(e,n){var r;return W()(this,t),(r=q()(this,X()(t).call(this,e,n))).loadInventory(),r.state={},r}return $()(t,e),J()(t,[{key:"loadInventory",value:function(){var e=fe()(ue.a.mark(function e(){var t,n,r,a,s,o,i,c,l=this;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.clearNotifications(),e.next=3,Ne();case 3:t=e.sent,n=t.inventoryConnector,r=t.INVENTORY_ACTION_TYPES,a=t.mergeWithDetail,this.getRegistry().register(v()({},a(Object(N.applyReducerHash)(h()({},T.GET_ENTITY_FULFILLED,B),P)))),s=H({actionType:r.LOAD_ENTITY,callback:function(e){e.data.then(function(e){l.props.loadEntity(e.results[0].id),s()})}}),o=n(),i=o.InventoryDetailHead,c=o.AppInfo,A.VulnerabilitiesStore&&this.getRegistry().register({VulnerabilitiesStore:A.VulnerabilitiesStore}),this.setState({InventoryDetail:i,AppInfo:c});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,n=e.AppInfo,s=this.props,o=s.entity,i=s.currentApp,c="".concat(i&&"general_information"===i?"ins-c-inventory__detail--general-info":"");return a.a.createElement(r.Fragment,null,a.a.createElement(ye.PageHeader,{className:"pf-m-light ins-inventory-detail ".concat(c)},a.a.createElement(Ce.a,null,a.a.createElement(ze.a,null,a.a.createElement(xe.a,{to:Le.table},"Inventory")),a.a.createElement(ze.a,{isActive:!0},o?o.display_name:a.a.createElement(ye.Skeleton,{size:ye.SkeletonSize.xs}))),t&&a.a.createElement(t,{hideBack:!0})),a.a.createElement(ye.Main,{className:c},a.a.createElement(Ee.a,{gutter:"md"},a.a.createElement(_e.a,{span:12},n&&a.a.createElement(n,null)))))}}]),t}(r.Component))||Se);Re.contextTypes={store:te.a.object},Re.propTypes={history:te.a.object,entity:te.a.object,loadEntity:te.a.func,clearNotifications:te.a.func,currentApp:te.a.string};var De=he()(Object(c.connect)(function(e){var t=e.entityDetails,n=t&&t.activeApp&&t.activeApp.appName,r=t&&t.activeApps&&t.activeApps[0];return{entity:t&&t.entity,currentApp:n||r&&r.name}},function(e){return{loadEntity:function(t){return e(be(t))},clearNotifications:function(){return e(ge())}}})(Re)),Pe=function(e){var t=e.component,n=e.rootClass,r=se()(e,["component","rootClass"]),s=document.getElementById("root");return s.removeAttribute("class"),s.classList.add("page__".concat(n),"pf-c-page__main"),s.classList.add("page__".concat(n),"pf-l-page__main"),a.a.createElement(oe.a,re()({},r,{component:t}))};Pe.propTypes={component:te.a.func,rootClass:te.a.string};var Le={table:"/",detail:"/:inventoryId"};var Be=function(e){var t,n,r=e.childProps.history,s=window.location.pathname.split("/");return s.shift(),"beta"===s[0]&&s.shift(),t=s[0],n=s[1],Object.values(Le).some(function(e){return Object(ie.a)(location.href,{path:"".concat(document.baseURI).concat(t,"/").concat(n).concat(e)})})||r.push(Le.table),a.a.createElement(ce.a,null,a.a.createElement(Pe,{exact:!0,path:Le.table,component:Ae,rootClass:"inventory"}),a.a.createElement(Pe,{path:Le.detail,component:De,rootClass:"inventory"}))};Be.propTypes={childProps:te.a.shape({history:te.a.shape({push:te.a.func})})};n(633);var Fe,Ge=f()()(Fe=function(e){function t(e){var n;return W()(this,t),(n=q()(this,X()(t).call(this,e))).getRegistry().register(U),n}return $()(t,e),J()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("inventory"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.NotificationsPortal,null),a.a.createElement(Be,{childProps:this.props}))}}]),t}(r.Component))||Fe;Ge.propTypes={history:te.a.object};var Me=he()(Object(c.connect)()(Ge)),Ue=window.location.pathname.split("/");Ue.shift();var He="/";"beta"===Ue[0]&&(He="/".concat(Ue.shift(),"/")),o.a.render(a.a.createElement(c.Provider,{store:function(){F=new u.a;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(p.getRegistry)({},[F.getMiddleware(),Object(d.a)(),Object(m.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]})].concat(t))}().getStore()},a.a.createElement(i.a,{basename:"".concat(He).concat(Ue[0],"/").concat(Ue[1])},a.a.createElement(Me,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map