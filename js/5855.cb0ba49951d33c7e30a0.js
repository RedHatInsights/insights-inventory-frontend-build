(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5855],{53754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(92950);const a=n.n(r)().createContext("light")},80123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),l=n.n(a),i=n(53754),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};const c=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),c=l()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(i.Z.Consumer,{children:function(e){var t,i;void 0===e&&(e="light");var s=l()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return(0,r.jsx)("section",o({},a,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},8454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Q});var r=n(87462),a=n(45987),l=n(92950),i=n.n(l),o=n(45697),c=n.n(o),s=n(93433),p=n(29439),m=n(73880),d=n(35664),u=n(56787),g=n(84457),y=n(99355),h=n(75728),f=n(38779),E=n(47173),v=n(28191),W=n(92298),T=n(79851),k=n(34512),b=n(94471),w=n(50533),D=n(3672),Z=["title"],I=function(e){var t=e.entity,n=e.loaded,o=e.actions,c=e.deleteEntity,I=e.addNotification,_=e.hideInvLink,C=e.onBackToListClick,L=e.showDelete,O=e.showInventoryDrawer,P=e.TitleWrapper,S=e.TagsWrapper,U=e.DeleteWrapper,B=e.ActionsWrapper,x=e.showTags,z=(0,w.useDispatch)(),j=(0,l.useState)(!1),N=(0,p.Z)(j,2),F=N[0],A=N[1],M=(0,l.useState)(!1),H=(0,p.Z)(M,2),R=H[0],q=H[1],G=[].concat((0,s.Z)(_?[]:[{title:"View system in Inventory",component:"a",href:"./insights/inventory/".concat(null==t?void 0:t.id)}]),(0,s.Z)(o||[]));return i().createElement(T.P,{className:"ins-c-inventory__detail--header"},i().createElement(k.J,{isFilled:!0},n?i().createElement(v.k,null,i().createElement(W.B,null,i().createElement(P,null,i().createElement(f.D,{headingLevel:"h1",size:"2xl"},t&&t.display_name))),x&&i().createElement(W.B,null,i().createElement(S,null,i().createElement(m.TagWithDialog,{count:t&&t.tags&&t.tags.length,systemId:t&&t.id}),i().createElement(m.TagsModal,null)))):i().createElement(d.Z,{size:d.i.md})),i().createElement(k.J,null,n?i().createElement(v.k,null,L&&i().createElement(W.B,null,i().createElement(U,null,i().createElement(E.zx,{onClick:function(){return q(!0)},variant:"secondary"},"Delete"))),(null==G?void 0:G.length)>0&&i().createElement(W.B,null,i().createElement(B,null,i().createElement(u.L,{onSelect:function(){return A(!1)},toggle:i().createElement(h.Z,{onToggle:function(e){return A(e)}},"Actions"),isOpen:F,position:y.ir.right,dropdownItems:G.map((function(e,t){var n=e.title,l=(0,a.Z)(e,Z);return i().createElement(g.h,(0,r.Z)({key:t,component:"button",onClick:function(e){return l.onClick(e,l,l.key||t)}},l),n)}))}))),i().createElement(W.B,null,O&&i().createElement(E.zx,{onClick:function(){return z((0,D.wb)(!0))}},"Show more information"))):i().createElement(d.Z,{size:d.i.lg})),R&&i().createElement(m.DeleteModal,{handleModalToggle:function(){return q(!R)},isModalOpen:R,currentSytems:t,onConfirm:function(){I({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t.display_name," started."),dismissable:!1}),c([t.id],t.display_name,(function(){return(0,b.h)(t.id,C)})),q(!1)}}))};I.propTypes={entity:c().object,loaded:c().bool,showDelete:c().bool,hideInvLink:c().bool,showInventoryDrawer:c().bool,showTags:c().bool,actions:c().arrayOf(c().shape({key:c().string,title:c().node,onClick:c().func})),deleteEntity:c().func,addNotification:c().func,onBackToListClick:c().func,TitleWrapper:c().elementType,TagsWrapper:c().elementType,DeleteWrapper:c().elementType,ActionsWrapper:c().elementType},I.defaultProps={actions:[],loaded:!1,hideInvLink:!1,showDelete:!1,showInventoryDrawer:!1,deleteEntity:function(){},addNotification:function(){},onBackToListClick:function(){},TitleWrapper:l.Fragment,TitleWTagsWrapperrapper:l.Fragment,DeleteWrapper:l.Fragment,ActionsWrapper:l.Fragment};const _=I;var C=n(67866),L=n(41448),O=n(50693),P=n(16475),S=n(68340),U=n(68774),B=n(25834),x=n(78140),z=n(32203),j=n(70),N=n(49734),F=n(62394),A=n(66435);const M=function(){return i().createElement(L.b,{variant:"info",isInline:!0,title:"Your insights-client is not reporting"},i().createElement(O.r,null,i().createElement(P.P,null,i().createElement(O.r,{hasGutter:!0},i().createElement(P.P,{span:4},i().createElement(U.D,{style:{"--pf-c-content--LineHeight":"1","--pf-c-content--FontSize":"0.9rem"}},i().createElement(S.x,{component:S.q.p},"With Insights you can easly:"),i().createElement(B.G,{component:"ul",style:{"--pf-c-content--ul--PaddingLeft":"0","--pf-c-content--ul--MarginLeft":"1rem"}},i().createElement(x.T,null,"Optimize your IT Operations"),i().createElement(x.T,null,"Manage your security and compliance"),i().createElement(x.T,null,"Resolve operational issues quickly")))),i().createElement(P.P,{span:4},i().createElement(z.Z,{isCompact:!0},i().createElement(j.l,null,"Client setup"),i().createElement(F.e,null,"Make sure the client is properly installed and registered"),i().createElement(N.e,null,i().createElement(A.M5,{isCode:!0,isReadOnly:!0,variant:"expansion"},"yum install -y insights-client \ninsights-client --register")))),i().createElement(P.P,{span:4},i().createElement(z.Z,{isCompact:!0,style:{height:"100%"}},i().createElement(j.l,null,"Configure troubleshooting"),i().createElement(F.e,null,"Proceed with verification on the client to ensure insights-client is properly running and collecting data"),i().createElement(N.e,null,i().createElement(E.zx,{component:"a",target:"_blank",variant:"link",href:"https://access.redhat.com/solutions/6758841",isInline:!0},"Host not reporting data to Red Hat Insights")))))),i().createElement(P.P,null,i().createElement(E.zx,{component:"a",target:"_blank",variant:"link",href:"https://console.redhat.com/security/insights",isInline:!0},"How does Red Hat keep data secure?"))))};var H=n(96396),R=n(80123),q=n(94184),G=n.n(q),J=["entity","loaded","UUIDWrapper","LastSeenWrapper","children"],V=["shouldWrapAsPage","BreadcrumbWrapper","additionalClasses"],Y=function(e){var t=e.entity,n=e.loaded,o=e.UUIDWrapper,c=e.LastSeenWrapper,s=e.children,p=(0,a.Z)(e,J);return i().createElement(l.Fragment,null,i().createElement(_,(0,r.Z)({entity:t,loaded:n},p)),i().createElement(C.Z,{loaded:n,entity:t,UUIDWrapper:o,LastSeenWrapper:c}),n&&(0,H._e)(null==t?void 0:t.per_reporter_staleness)&&i().createElement(M,null),s)},K=function(e){var t=e.shouldWrapAsPage,n=e.BreadcrumbWrapper,r=e.additionalClasses,l=(0,a.Z)(e,V);return t?i().createElement(R.Z,{className:G()("pf-m-light ins-inventory-detail",r)},n,i().createElement(Y,l)):i().createElement(Y,l)};Y.propTypes={hideInvLink:c().bool,showTags:c().bool,showDelete:c().bool,showInventoryDrawer:c().bool,actions:c().arrayOf(c().shape({title:c().node,onClick:c().func,key:c().string})),onBackToListClick:c().func,children:c().node,UUIDWrapper:c().elementType,LastSeenWrapper:c().elementType,TitleWrapper:c().elementType,TagsWrapper:c().elementType,DeleteWrapper:c().elementType,ActionsWrapper:c().elementType,inventoryId:c().string,deleteEntity:c().func,entity:c().object,loaded:c().bool,addNotification:c().func},K.propTypes={BreadcrumbWrapper:c().elementType,shouldWrapAsPage:c().bool,additionalClasses:c().object};const Q=K},67866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(87462),a=n(45987),l=n(92950),i=n.n(l),o=n(45697),c=n.n(o),s=n(50693),p=n(16475),m=n(28191),d=n(92298),u=n(35664),g=n(62410),y=n(12385),h=n(94471),f=n(67882),E=n(96396),v=["entity","loaded","UUIDWrapper","LastSeenWrapper"],W=function(e){var t=e.entity,n=e.loaded,l=(e.UUIDWrapper,e.LastSeenWrapper),o=(0,a.Z)(e,v);return i().createElement(s.r,(0,r.Z)({className:"ins-entity-facts"},o),i().createElement(p.P,{md:6},i().createElement(m.k,null,i().createElement(d.B,null,"UUID:"),i().createElement(d.B,{grow:{default:"grow"}},n?(0,h.s)("id",t)||" ":i().createElement(u.Z,{size:u.i.md,fontSize:"sm"}))),i().createElement(m.k,null,i().createElement(d.B,null,"Last seen:"),i().createElement(d.B,{grow:{default:"grow"}},n?i().createElement(l,null,y.Z?i().createElement(y.Z,{culled:(0,h.s)("culled_timestamp",t),staleWarning:(0,h.s)("stale_warning_timestamp",t),stale:(0,h.s)("stale_timestamp",t),currDate:new Date},i().createElement(g.Z,{date:(0,h.s)("updated",t),type:"exact"})):i().createElement(g.Z,{date:(0,h.s)("updated",t),type:"exact"})):i().createElement(u.Z,{size:u.i.md,fontSize:"sm"}),n&&(0,E._e)((0,h.s)("per_reporter_staleness",t))&&i().createElement(f.Z,null)))))};W.propTypes={loaded:c().bool,entity:c().object,UUIDWrapper:c().elementType,LastSeenWrapper:c().elementType},W.defaultProps={UUIDWrapper:l.Fragment,LastSeenWrapper:l.Fragment};const T=W},94471:(e,t,n)=>{"use strict";n.d(t,{h:()=>l,s:()=>i});var r=n(27361),a=n.n(r),l=function(e,t){t?t():document.referrer&&document.referrer!=="".concat(document.location.origin).concat(document.location.pathname)?history.back():location.href=location.pathname.replace(new RegExp("".concat([e],".*"),"g"),"")},i=function(e,t){return a()(t,e,void 0)}},81754:()=>{},30187:()=>{},38299:()=>{}}]);