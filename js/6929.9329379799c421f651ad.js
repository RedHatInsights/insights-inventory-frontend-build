(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[6929],{96733:(e,t,n)=>{"use strict";t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).IU(t.Z1),t.ZP=t.TF},67866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(87462),a=n(45987),l=n(92950),i=n.n(l),o=n(45697),c=n.n(o),s=n(50693),p=n(16475),u=n(28191),m=n(92298),d=n(35664),E=n(62410),f=n(12385),y=n(94471),g=n(67882),v=n(96396),T=["entity","loaded","UUIDWrapper","LastSeenWrapper"],h=function(e){var t=e.entity,n=e.loaded,l=(e.UUIDWrapper,e.LastSeenWrapper),o=(0,a.Z)(e,T);return i().createElement(s.r,(0,r.Z)({className:"ins-entity-facts"},o),i().createElement(p.P,{md:6},i().createElement(u.k,null,i().createElement(m.B,null,"UUID:"),i().createElement(m.B,{grow:{default:"grow"}},n?(0,y.s)("id",t)||" ":i().createElement(d.Z,{size:d.i.md,fontSize:"sm"}))),i().createElement(u.k,null,i().createElement(m.B,null,"Last seen:"),i().createElement(m.B,{grow:{default:"grow"}},n?i().createElement(l,null,f.Z?i().createElement(f.Z,{culled:(0,y.s)("culled_timestamp",t),staleWarning:(0,y.s)("stale_warning_timestamp",t),stale:(0,y.s)("stale_timestamp",t),currDate:new Date},i().createElement(E.Z,{date:(0,y.s)("updated",t),type:"exact"})):i().createElement(E.Z,{date:(0,y.s)("updated",t),type:"exact"})):i().createElement(d.Z,{size:d.i.md,fontSize:"sm"}),n&&(0,v._e)((0,y.s)("per_reporter_staleness",t))&&i().createElement(g.Z,null)))))};h.propTypes={loaded:c().bool,entity:c().object,UUIDWrapper:c().elementType,LastSeenWrapper:c().elementType},h.defaultProps={UUIDWrapper:l.Fragment,LastSeenWrapper:l.Fragment};const I=h},18576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var r=n(87462),a=n(45987),l=n(92950),i=n.n(l),o=n(75662),c=n(50533),s=n(45697),p=n.n(s),u=n(3672),m=n(9947),d=n(38424),E=n(75106),f=n(38779),y=n(47173),g=n(96733),v=n(94471),T=function(e){var t=e.inventoryId,n=e.onBackToListClick;return i().createElement(m.u,{variant:m.I.full},i().createElement(d.k,{icon:g.ZP}),i().createElement(f.D,{headingLevel:"h5",size:"lg"},"System not found"),i().createElement(E.B,null,"System with ID ",t," does not exist"),i().createElement(y.zx,{variant:"primary",onClick:function(){return(0,v.h)(t,n)}},"Back to previous page"))};T.propTypes={inventoryId:p().string,onBackToListClick:p().func};const h=T;var I=n(93433),D=n(29439),L=n(14918),S=n(35664),w=n(56787),k=n(84457),W=n(99355),b=n(75728),_=n(28191),O=n(92298),C=n(79851),P=n(34512),A=["title"],Z=function(e){var t=e.entity,n=e.loaded,o=e.actions,s=e.deleteEntity,p=e.addNotification,m=e.hideInvLink,d=e.onBackToListClick,E=e.showDelete,g=e.showInventoryDrawer,T=e.TitleWrapper,h=e.TagsWrapper,Z=e.DeleteWrapper,N=e.ActionsWrapper,R=e.showTags,F=(0,c.useDispatch)(),B=(0,l.useState)(!1),z=(0,D.Z)(B,2),U=z[0],j=z[1],M=(0,l.useState)(!1),x=(0,D.Z)(M,2),G=x[0],H=x[1],Y=[].concat((0,I.Z)(m?[]:[{title:"View system in Inventory",component:"a",href:"./insights/inventory/".concat(null==t?void 0:t.id)}]),(0,I.Z)(o||[]));return i().createElement(C.P,{className:"ins-c-inventory__detail--header"},i().createElement(P.J,{isFilled:!0},n?i().createElement(_.k,null,i().createElement(O.B,null,i().createElement(T,null,i().createElement(f.D,{headingLevel:"h1",size:"2xl"},t&&t.display_name))),R&&i().createElement(O.B,null,i().createElement(h,null,i().createElement(L.TagWithDialog,{count:t&&t.tags&&t.tags.length,systemId:t&&t.id}),i().createElement(L.TagsModal,null)))):i().createElement(S.Z,{size:S.i.md})),i().createElement(P.J,null,n?i().createElement(_.k,null,E&&i().createElement(O.B,null,i().createElement(Z,null,i().createElement(y.zx,{onClick:function(){return H(!0)},variant:"secondary"},"Delete"))),(null==Y?void 0:Y.length)>0&&i().createElement(O.B,null,i().createElement(N,null,i().createElement(w.L,{onSelect:function(){return j(!1)},toggle:i().createElement(b.Z,{onToggle:function(e){return j(e)}},"Actions"),isOpen:U,position:W.ir.right,dropdownItems:Y.map((function(e,t){var n=e.title,l=(0,a.Z)(e,A);return i().createElement(k.h,(0,r.Z)({key:t,component:"button",onClick:function(e){return l.onClick(e,l,l.key||t)}},l),n)}))}))),i().createElement(O.B,null,g&&i().createElement(y.zx,{onClick:function(){return F((0,u.wb)(!0))}},"Show more information"))):i().createElement(S.Z,{size:S.i.lg})),G&&i().createElement(L.DeleteModal,{handleModalToggle:function(){return H(!G)},isModalOpen:G,currentSytems:t,onConfirm:function(){p({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t.display_name," started."),dismissable:!1}),s([t.id],t.display_name,(function(){return(0,v.h)(t.id,d)})),H(!1)}}))};Z.propTypes={entity:p().object,loaded:p().bool,showDelete:p().bool,hideInvLink:p().bool,showInventoryDrawer:p().bool,showTags:p().bool,actions:p().arrayOf(p().shape({key:p().string,title:p().node,onClick:p().func})),deleteEntity:p().func,addNotification:p().func,onBackToListClick:p().func,TitleWrapper:p().elementType,TagsWrapper:p().elementType,DeleteWrapper:p().elementType,ActionsWrapper:p().elementType},Z.defaultProps={actions:[],loaded:!1,hideInvLink:!1,showDelete:!1,showInventoryDrawer:!1,deleteEntity:function(){},addNotification:function(){},onBackToListClick:function(){},TitleWrapper:l.Fragment,TitleWTagsWrapperrapper:l.Fragment,DeleteWrapper:l.Fragment,ActionsWrapper:l.Fragment};const N=Z;var R=n(67866),F=n(83215),B=n(71002),z=n(35262),U=n(28883),j=["onTabSelect","appList"],M=function(e){var t=e.onTabSelect,n=e.appList,o=(0,a.Z)(e,j),s=(0,c.useDispatch)(),p=(0,c.useSelector)((function(e){var t=e.entityDetails;return((null==t?void 0:t.activeApps)||n||[]).filter((function(e){return!1!==e.isVisible}))})),m=(0,c.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.disabledApps})),d=(0,c.useSelector)((function(e){var t,n,r=e.entityDetails;return(null==r||null===(t=r.activeApp)||void 0===t?void 0:t.appName)||(null==p||null===(n=p[0])||void 0===n?void 0:n.name)})),E=(0,l.useState)(p),f=(0,D.Z)(E,2),y=f[0],g=f[1];return(0,l.useEffect)((function(){var e=p.filter((function(e){return!(null!=m&&m.includes(e.name))}));0!==e&&void 0!==(0,B.Z)(e)?g(e):g(p)}),[m]),i().createElement(i().Fragment,null,(null==y?void 0:y.length)>1&&i().createElement(z.m,(0,r.Z)({},o,{activeKey:d,onSelect:function(e,n){var r=y.find((function(e){return e.name===n}));t&&t(e,n,r),s((0,u.Xe)(r.name))},isFilled:!0,className:"ins-c-inventory-detail__app-tabs"}),null==y?void 0:y.map((function(e,t){return i().createElement(U.O,{key:t,eventKey:e.name,title:e.title})}))))};M.propTypes={appList:p().arrayOf(p().shape({title:p().node,name:p().string.isRequired,pageId:p().string})),onTabSelect:p().func};const x=M;var G=n(41448),H=n(50693),Y=n(16475),V=n(68340),q=n(68774),K=n(25834),J=n(78140),$=n(32203),X=n(70),Q=n(49734),ee=n(62394),te=n(66435);const ne=function(){return i().createElement(G.b,{variant:"info",isInline:!0,title:"Your insights-client is not reporting"},i().createElement(H.r,null,i().createElement(Y.P,null,i().createElement(H.r,{hasGutter:!0},i().createElement(Y.P,{span:4},i().createElement(q.D,{style:{"--pf-c-content--LineHeight":"1","--pf-c-content--FontSize":"0.9rem"}},i().createElement(V.x,{component:V.q.p},"With Insights you can easly:"),i().createElement(K.G,{component:"ul",style:{"--pf-c-content--ul--PaddingLeft":"0","--pf-c-content--ul--MarginLeft":"1rem"}},i().createElement(J.T,null,"Optimize your IT Operations"),i().createElement(J.T,null,"Manage your security and compliance"),i().createElement(J.T,null,"Resolve operational issues quickly")))),i().createElement(Y.P,{span:4},i().createElement($.Z,{isCompact:!0},i().createElement(X.l,null,"Client setup"),i().createElement(ee.e,null,"Make sure the client is properly installed and registered"),i().createElement(Q.e,null,i().createElement(te.M5,{isCode:!0,isReadOnly:!0,variant:"expansion"},"yum install -y insights-client \ninsights-client --register")))),i().createElement(Y.P,{span:4},i().createElement($.Z,{isCompact:!0,style:{height:"100%"}},i().createElement(X.l,null,"Configure troubleshooting"),i().createElement(ee.e,null,"Proceed with verification on the client to ensure insights-client is properly running and collecting data"),i().createElement(Q.e,null,i().createElement(y.zx,{component:"a",target:"_blank",variant:"link",href:"https://access.redhat.com/solutions/6758841",isInline:!0},"Host not reporting data to Red Hat Insights")))))),i().createElement(Y.P,null,i().createElement(y.zx,{component:"a",target:"_blank",variant:"link",href:"https://console.redhat.com/security/insights",isInline:!0},"How does Red Hat keep data secure?"))))};var re=n(96396),ae=["inventoryId"],le=function(e){var t=e.actions,n=e.showTags,r=e.hideInvLink,a=e.onTabSelect,o=e.onBackToListClick,s=e.showDelete,p=e.appList,m=e.showInventoryDrawer,d=e.UUIDWrapper,E=e.LastSeenWrapper,f=e.TitleWrapper,y=e.TagsWrapper,g=e.DeleteWrapper,v=e.ActionsWrapper,T=e.inventoryId,I=e.children,D=(0,c.useDispatch)(),S=(0,c.useSelector)((function(e){var t=e.entityDetails;return(null==t?void 0:t.loaded)||!1})),w=(0,c.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity}));return(0,l.useEffect)((function(){w&&(null==w?void 0:w.id)===T&&S||D((0,u.A_)(T,{hasItems:!0},{showTags:n}))}),[]),i().createElement("div",{className:"ins-entity-detail"},S&&!w?i().createElement(h,{onBackToListClick:o,inventoryId:T}):i().createElement(l.Fragment,null,i().createElement(N,{entity:w,loaded:S,onBackToListClick:o,actions:t,deleteEntity:function(e,t,n){var r=(0,u.Ks)(e,t);D((0,L.reloadWrapper)(r,n))},addNotification:function(e){return D((0,F.wN)(e))},hideInvLink:r,showInventoryDrawer:m,showDelete:s,showTags:n,TitleWrapper:f,TagsWrapper:y,DeleteWrapper:g,ActionsWrapper:v}),i().createElement(R.Z,{loaded:S,entity:w,UUIDWrapper:d,LastSeenWrapper:E}),S&&(0,re._e)(null==w?void 0:w.per_reporter_staleness)&&i().createElement(ne,null),I),S&&w&&i().createElement(x,{onTabSelect:a,appList:p}))};le.propTypes={hideInvLink:p().bool,hideBack:p().bool,showTags:p().bool,showDelete:p().bool,showInventoryDrawer:p().bool,actions:p().arrayOf(p().shape({title:p().node,onClick:p().func,key:p().string})),appList:p().arrayOf(p().shape({title:p().node,name:p().string,pageId:p().string})),onTabSelect:p().func,onBackToListClick:p().func,children:p().node,UUIDWrapper:p().elementType,LastSeenWrapper:p().elementType,TitleWrapper:p().elementType,TagsWrapper:p().elementType,DeleteWrapper:p().elementType,ActionsWrapper:p().elementType,inventoryId:p().string},le.defaultProps={actions:[],hideInvLink:!1,showTags:!1,UUIDWrapper:l.Fragment,LastSeenWrapper:l.Fragment,TitleWrapper:l.Fragment,TagsWrapper:l.Fragment,DeleteWrapper:l.Fragment,ActionsWrapper:l.Fragment};var ie=function(e){var t=e.inventoryId,n=(0,a.Z)(e,ae),l=(0,o.useParams)().inventoryId;return t||(console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~"),console.warn("Missing inventoryId! Please provide one, we will remove the fallback from URL soon."),console.warn("~~~~~~~~~~"),console.warn("~~~~~~~~~~")),i().createElement(le,(0,r.Z)({inventoryId:t||l||location.pathname.replace(/\/$/,"").split("/").pop()},n))};ie.propTypes=le.propTypes;const oe=ie},94471:(e,t,n)=>{"use strict";n.d(t,{h:()=>l,s:()=>i});var r=n(27361),a=n.n(r),l=function(e,t){t?t():document.referrer&&document.referrer!=="".concat(document.location.origin).concat(document.location.pathname)?history.back():location.href=location.pathname.replace(new RegExp("".concat([e],".*"),"g"),"")},i=function(e,t){return a()(t,e,void 0)}},39142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r={};n.r(r),n.d(r,{ACTION_TYPES:()=>y.aI,APPLICATION_SELECTED:()=>y.TP,CHANGE_SORT:()=>y.WH,CLEAR_FILTERS:()=>y.Gs,CLEAR_NOTIFICATIONS:()=>y.wt,CONFIG_CHANGED:()=>y.Uq,ENTITIES_LOADING:()=>y.jZ,FILTER_ENTITIES:()=>y.lP,FILTER_SELECT:()=>y.hI,INVENTORY_ACTION_TYPES:()=>y.AL,SELECT_ENTITY:()=>y.pr,SET_ANSIBLE_HOST:()=>y.Bh,SET_DISPLAY_NAME:()=>y.Ti,SET_INVENTORY_FILTER:()=>y.uW,SET_PAGINATION:()=>y.fT,SHOW_ENTITIES:()=>y.u4,SYSTEM_ISSUE_TYPES:()=>y.dF,TOGGLE_DRAWER:()=>y.Ji,TOGGLE_TAG_MODAL:()=>y.Qd,UPDATE_ENTITIES:()=>y.s$,asyncActions:()=>y.zW,asyncInventory:()=>y.gl,clearFilters:()=>f.K5,clearNotifications:()=>f.L1,configChanged:()=>f.u3,deleteEntity:()=>f.Ks,detailSelect:()=>f.Xe,editAnsibleHost:()=>f.Uw,editDisplayName:()=>f.$Y,entitesDetailReducer:()=>E.CB,entitiesLoading:()=>f.nE,entitiesReducer:()=>E.zw,entityDetailsReducer:()=>E.gA,fetchAllTags:()=>f.C8,fetchOperatingSystems:()=>f.g6,filterEntities:()=>f.CP,filterSelect:()=>f.fg,getAdvisorData:()=>f.gb,getComplianceData:()=>f.Oj,getPatchData:()=>f.k0,getVulnData:()=>f.Fo,loadEntities:()=>f.il,loadEntity:()=>f.A_,loadTags:()=>f.me,mergeWithDetail:()=>E.OL,mergeWithEntities:()=>E.AF,selectEntity:()=>f.CL,setFilter:()=>f.Tv,setPagination:()=>f.Jr,setSort:()=>f.HD,systemIssues:()=>y.AN,systemProfile:()=>f.eR,tableReducer:()=>E.M,toggleDrawer:()=>f.wb,toggleTagModal:()=>f.Ar,updateEntities:()=>f.jB});var a=n(87462),l=n(4942),i=n(45987),o=n(92950),c=n.n(o),s=n(45697),p=n.n(s),u=n(50533),m=n(75662),d=n(371),E=n(41412),f=n(3672),y=n(59086),g=n(14918),v=n(63599),T=n(454),h=["component","onLoad","store","history","innerRef"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=E.OL,S=(0,i.Z)(r,["mergeWithDetail"]),w=function(e){var t=e.component,n=e.onLoad,r=e.store,l=e.history,s=e.innerRef,p=(0,i.Z)(e,h);return(0,o.useEffect)((function(){null==n||n(D(D(D({},S),g),{},{api:v,mergeWithDetail:L}))}),[]),c().createElement(d.r,{appName:"inventory"},c().createElement(u.Provider,{store:r},c().createElement(m.Router,{history:l},c().createElement(T.Z,(0,a.Z)({},p,{isRbacEnabled:!0,inventoryRef:s,store:r,cmp:t})))))};w.propTypes={store:p().object,onLoad:p().func,component:p().elementType.isRequired,history:p().object,innerRef:p().shape({current:p().any})},w.defaultProps={onLoad:function(){}};const k=w},81754:()=>{},80598:()=>{},32857:()=>{},98379:()=>{},56024:()=>{},43390:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6929.904a64a922df2226173386ee6ef54cce.js.map