(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[5855],{67230:function(e,t){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,a,r){var l=("object"==typeof a?a.pathname:a)||"",i=/^\//.test(l),o=r?"/preview":"",s=t||e.getApp(),c=i?[o,e.getBundle(),s,l.replace(/^\//,"")].join("/"):l;return"object"==typeof a?n(n({},a),{pathname:c}):c}},76440:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(62012),l=a(n(51124)),i=n(67230);t.default=function(e,t){var n=(0,r.useNavigate)(),a=(0,l.default)();return function(r,l){return n((0,i.buildInsightsPath)(a,e,r,l||t))}}},8454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var a=n(87462),r=n(45987),l=n(92950),i=n.n(l),o=n(45697),s=n.n(o),c=n(93433),p=n(29439),u=n(73880),m=n(35664),d=n(47173),h=n(56787),y=n(84457),f=n(99355),g=n(75728),E=n(28191),v=n(92298),W=n(79851),T=n(34512),k=n(38779),b=n(75824),w=n(94471),D=n(60261),I=n(94474),Z=n(58061),_=n(76440),L=n.n(_),C=["title"],P=function(e){var t=e.entity,n=e.loaded,o=e.actions,s=e.deleteEntity,_=e.addNotification,P=e.hideInvLink,U=e.onBackToListClick,B=e.showDelete,S=e.showInventoryDrawer,z=e.TitleWrapper,j=e.TagsWrapper,O=e.DeleteWrapper,x=e.ActionsWrapper,M=e.showTags,A=(0,D.useDispatch)(),N=L()(),F=(0,l.useState)(!1),R=(0,p.Z)(F,2),H=R[0],J=R[1],q=(0,l.useState)(!1),K=(0,p.Z)(q,2),G=K[0],V=K[1],Y=[].concat((0,c.Z)(P?[]:[{title:"View system in Inventory",component:"a",href:"./insights/inventory/".concat(null==t?void 0:t.id)}]),(0,c.Z)(o||[]));return i().createElement(W.P,{className:"ins-c-inventory__detail--header"},i().createElement(T.J,{isFilled:!0},n?i().createElement(E.k,null,i().createElement(v.B,null,i().createElement(z,null,i().createElement(k.D,{headingLevel:"h1",size:"2xl",className:"sentry-mask data-hj-suppress"},t&&t.display_name))),M&&i().createElement(v.B,null,i().createElement(j,null,i().createElement(u.TagWithDialog,{count:t&&t.tags&&t.tags.length,systemId:t&&t.id}),i().createElement(u.TagsModal,null)))):i().createElement(m.Z,{size:m.i.md})),i().createElement(T.J,null,n?i().createElement(E.k,null,i().createElement(v.B,null,i().createElement(O,null,B?i().createElement(d.zx,{onClick:function(){return V(!0)},variant:"secondary"},"Delete"):i().createElement(b.u,{content:Z.JK},i().createElement(d.zx,{isAriaDisabled:!0,variant:"secondary"},"Delete")))),(null==Y?void 0:Y.length)>0&&i().createElement(v.B,null,i().createElement(x,null,i().createElement(h.L,{onSelect:function(){return J(!1)},toggle:i().createElement(g.Z,{onToggle:function(e){return J(e)}},"Actions"),isOpen:H,position:f.ir.right,dropdownItems:Y.map((function(e,t){var n=e.title,l=(0,r.Z)(e,C);return i().createElement(y.h,(0,a.Z)({key:t,component:"button",onClick:function(e){return l.onClick(e,l,l.key||t)}},l),n)}))}))),i().createElement(v.B,null,S&&i().createElement(d.zx,{onClick:function(){return A((0,I.wb)(!0))}},"Show more information"))):i().createElement(m.Z,{size:m.i.lg})),G&&i().createElement(u.DeleteModal,{className:"sentry-mask data-hj-suppress",handleModalToggle:function(){return V(!G)},isModalOpen:G,currentSytems:t,onConfirm:function(){_({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t.display_name," started."),dismissable:!1}),s([t.id],t.display_name,(function(){return(0,w.h)(t.id,U,N)})),V(!1)}}))};P.propTypes={entity:s().object,loaded:s().bool,showDelete:s().bool,hideInvLink:s().bool,showInventoryDrawer:s().bool,showTags:s().bool,actions:s().arrayOf(s().shape({key:s().string,title:s().node,onClick:s().func})),deleteEntity:s().func,addNotification:s().func,onBackToListClick:s().func,TitleWrapper:s().elementType,TagsWrapper:s().elementType,DeleteWrapper:s().elementType,ActionsWrapper:s().elementType},P.defaultProps={actions:[],loaded:!1,hideInvLink:!1,showDelete:!1,showInventoryDrawer:!1,deleteEntity:function(){},addNotification:function(){},onBackToListClick:function(){},TitleWrapper:l.Fragment,TitleWTagsWrapperrapper:l.Fragment,DeleteWrapper:l.Fragment,ActionsWrapper:l.Fragment};const U=P;var B=n(67866),S=n(41448),z=n(32203),j=n(62394),O=n(49734),x=n(70),M=n(66435),A=n(50693),N=n(16475),F=n(68340),R=n(68774),H=n(25834),J=n(78140);const q=function(){return i().createElement(S.b,{variant:"info",isInline:!0,title:"Your insights-client is not reporting"},i().createElement(A.r,null,i().createElement(N.P,null,i().createElement(A.r,{hasGutter:!0},i().createElement(N.P,{span:4},i().createElement(R.D,{style:{"--pf-c-content--LineHeight":"1","--pf-c-content--FontSize":"0.9rem"}},i().createElement(F.x,{component:F.q.p},"With Insights you can easly:"),i().createElement(H.G,{component:"ul",style:{"--pf-c-content--ul--PaddingLeft":"0","--pf-c-content--ul--MarginLeft":"1rem"}},i().createElement(J.T,null,"Optimize your IT Operations"),i().createElement(J.T,null,"Manage your security and compliance"),i().createElement(J.T,null,"Resolve operational issues quickly")))),i().createElement(N.P,{span:4},i().createElement(z.Z,{isCompact:!0},i().createElement(x.l,null,"Client setup"),i().createElement(j.e,null,"Make sure the client is properly installed and registered"),i().createElement(O.e,null,i().createElement(M.M5,{isCode:!0,isReadOnly:!0,variant:"expansion"},"yum install -y insights-client \ninsights-client --register")))),i().createElement(N.P,{span:4},i().createElement(z.Z,{isCompact:!0,style:{height:"100%"}},i().createElement(x.l,null,"Configure troubleshooting"),i().createElement(j.e,null,"Proceed with verification on the client to ensure insights-client is properly running and collecting data"),i().createElement(O.e,null,i().createElement(d.zx,{component:"a",target:"_blank",variant:"link",href:"https://access.redhat.com/solutions/6758841",isInline:!0},"Host not reporting data to Red Hat Insights")))))),i().createElement(N.P,null,i().createElement(d.zx,{component:"a",target:"_blank",variant:"link",href:"https://console.redhat.com/security/insights",isInline:!0},"How does Red Hat keep data secure?"))))};var K=n(96396),G=n(89376),V=n(94184),Y=n.n(V),Q=n(13784),X=["entity","loaded","UUIDWrapper","LastSeenWrapper","children"],$=["shouldWrapAsPage","BreadcrumbWrapper","additionalClasses"],ee=function(e){var t=e.entity,n=e.loaded,o=e.UUIDWrapper,s=e.LastSeenWrapper,c=e.children,p=(0,r.Z)(e,X);return i().createElement(l.Fragment,null,i().createElement(U,(0,a.Z)({entity:t,loaded:n},p)),i().createElement(B.Z,{loaded:n,entity:t,UUIDWrapper:o,LastSeenWrapper:s}),n&&(0,K.vJ)(null==t?void 0:t.per_reporter_staleness,Q.Kq)&&i().createElement(q,null),c)},te=function(e){var t=e.shouldWrapAsPage,n=e.BreadcrumbWrapper,a=e.additionalClasses,l=(0,r.Z)(e,$);return t?i().createElement(G.Z,{className:Y()("pf-m-light ins-inventory-detail",a)},n,i().createElement(ee,l)):i().createElement(ee,l)};ee.propTypes={hideInvLink:s().bool,showTags:s().bool,showDelete:s().bool,showInventoryDrawer:s().bool,actions:s().arrayOf(s().shape({title:s().node,onClick:s().func,key:s().string})),onBackToListClick:s().func,children:s().node,UUIDWrapper:s().elementType,LastSeenWrapper:s().elementType,TitleWrapper:s().elementType,TagsWrapper:s().elementType,DeleteWrapper:s().elementType,ActionsWrapper:s().elementType,inventoryId:s().string,deleteEntity:s().func,entity:s().object,loaded:s().bool,addNotification:s().func},te.propTypes={BreadcrumbWrapper:s().elementType,shouldWrapAsPage:s().bool,additionalClasses:s().object};const ne=te},67866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(87462),r=n(45987),l=n(92950),i=n.n(l),o=n(45697),s=n.n(o),c=n(28191),p=n(92298),u=n(50693),m=n(16475),d=n(35664),h=n(62410),y=n(12385),f=n(94471),g=n(67882),E=n(96396),v=n(13784),W=["entity","loaded","UUIDWrapper","LastSeenWrapper"],T=function(e){var t=e.entity,n=e.loaded,l=(e.UUIDWrapper,e.LastSeenWrapper),o=(0,r.Z)(e,W);return i().createElement(u.r,(0,a.Z)({className:"ins-entity-facts"},o),i().createElement(m.P,{md:6},i().createElement(c.k,null,i().createElement(p.B,null,"UUID:"),i().createElement(p.B,{grow:{default:"grow"}},n?(0,f.s)("id",t)||" ":i().createElement(d.Z,{size:d.i.md,fontSize:"sm"}))),i().createElement(c.k,null,i().createElement(p.B,null,"Last seen:"),i().createElement(p.B,{grow:{default:"grow"}},n?i().createElement(l,null,y.Z?i().createElement(y.Z,{culled:(0,f.s)("culled_timestamp",t),staleWarning:(0,f.s)("stale_warning_timestamp",t),stale:(0,f.s)("stale_timestamp",t),currDate:new Date},i().createElement(h.Z,{date:(0,f.s)("updated",t),type:"exact"})):i().createElement(h.Z,{date:(0,f.s)("updated",t),type:"exact"})):i().createElement(d.Z,{size:d.i.md,fontSize:"sm"}),n&&(0,E.vJ)((0,f.s)("per_reporter_staleness",t),v.Kq)&&i().createElement(g.Z,null)))))};T.propTypes={loaded:s().bool,entity:s().object,UUIDWrapper:s().elementType,LastSeenWrapper:s().elementType},T.defaultProps={UUIDWrapper:l.Fragment,LastSeenWrapper:l.Fragment};const k=T},94471:(e,t,n)=>{"use strict";n.d(t,{h:()=>l,s:()=>i});var a=n(27361),r=n.n(a),l=function(e,t,n){t?t():document.referrer&&document.referrer!=="".concat(document.location.origin).concat(document.location.pathname)?n(-1):location.href=location.pathname.replace(new RegExp("".concat([e],".*"),"g"),"")},i=function(e,t){return r()(t,e,void 0)}},81754:()=>{},30187:()=>{},38299:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5855.701122c374815a659fd26a87f979a591.js.map