(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3494],{85333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(85893),a=n(92950),o=n.n(a),i=n(48542),s=n(56989),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},l=function(){return(0,r.jsxs)(o().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,r.jsx)("a",c({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const u=function(e){var t=e.prevPageButtonText,n=void 0===t?"Return to previous page":t,a=e.toLandingPageText,o=void 0===a?"Go to landing page":a,u=e.title,p=e.actions,d=void 0===p?null:p,m=e.serviceName,y=e.icon,v=void 0===y?s.LockIcon:y,f=e.description,g=void 0===f?(0,r.jsx)(l,{}):f,h=e.showReturnButton,E=void 0===h||h,b=e.className,Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),x=u||"You do not have access to ".concat(m);return(0,r.jsxs)(i.EmptyState,c({variant:i.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(b||"")},Z,{children:[(0,r.jsx)(i.EmptyStateIcon,{icon:v}),(0,r.jsx)(i.Title,c({headingLevel:"h5",size:"lg"},{children:x})),(0,r.jsx)(i.EmptyStateBody,{children:g}),d,E&&(document.referrer?(0,r.jsx)(i.Button,c({variant:"primary",onClick:function(){return history.back()}},{children:n})):(0,r.jsx)(i.Button,c({variant:"primary",component:"a",href:"."},{children:o})))]}))}},85630:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(45987),o=n(92950),i=n.n(o),s=n(45697),c=n.n(s),l=n(85333),u=n(75824),p=["title","description","requiredPermission"],d=function(e){var t=e.title,n=e.description,o=e.requiredPermission,s=(0,a.Z)(e,p);return i().createElement(l.Z,(0,r.Z)({},s,{className:"ins-c-inventory__no--access",title:t,description:i().createElement(u.u,{content:o},n)}))};d.propTypes={title:c().string,description:c().node,requiredPermission:c().string},d.defaultProps={title:"You do not have access to Inventory",description:i().createElement("div",null,"To view your systems, you must be granted inventory access from your Organization Administrator."),requiredPermission:"inventory:*:read"};const m=d},67866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(87462),a=n(45987),o=n(92950),i=n.n(o),s=n(45697),c=n.n(s),l=n(28191),u=n(92298),p=n(50693),d=n(16475),m=n(35664),y=n(62410),v=n(12385),f=n(94471),g=n(67882),h=n(96396),E=n(13784),b=["entity","loaded","UUIDWrapper","LastSeenWrapper"],Z=function(e){var t=e.entity,n=e.loaded,o=(e.UUIDWrapper,e.LastSeenWrapper),s=(0,a.Z)(e,b);return i().createElement(p.r,(0,r.Z)({className:"ins-entity-facts"},s),i().createElement(d.P,{md:6},i().createElement(l.k,null,i().createElement(u.B,null,"UUID:"),i().createElement(u.B,{grow:{default:"grow"}},n?(0,f.s)("id",t)||" ":i().createElement(m.Z,{size:m.i.md,fontSize:"sm"}))),i().createElement(l.k,null,i().createElement(u.B,null,"Last seen:"),i().createElement(u.B,{grow:{default:"grow"}},n?i().createElement(o,null,v.Z?i().createElement(v.Z,{culled:(0,f.s)("culled_timestamp",t),staleWarning:(0,f.s)("stale_warning_timestamp",t),stale:(0,f.s)("stale_timestamp",t),currDate:new Date},i().createElement(y.Z,{date:(0,f.s)("updated",t),type:"exact"})):i().createElement(y.Z,{date:(0,f.s)("updated",t),type:"exact"})):i().createElement(m.Z,{size:m.i.md,fontSize:"sm"}),n&&(0,h.vJ)((0,f.s)("per_reporter_staleness",t),E.Kq)&&i().createElement(g.Z,null)))))};Z.propTypes={loaded:c().bool,entity:c().object,UUIDWrapper:c().elementType,LastSeenWrapper:c().elementType},Z.defaultProps={UUIDWrapper:o.Fragment,LastSeenWrapper:o.Fragment};const x=Z},94471:(e,t,n)=>{"use strict";n.d(t,{h:()=>o,s:()=>i});var r=n(27361),a=n.n(r),o=function(e,t){t?t():document.referrer&&document.referrer!=="".concat(document.location.origin).concat(document.location.pathname)?history.back():location.href=location.pathname.replace(new RegExp("".concat([e],".*"),"g"),"")},i=function(e,t){return a()(t,e,void 0)}},91934:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(87462),a=n(92950),o=n.n(a),i=n(39142),s=n(45987),c=n(45697),l=n.n(c),u=n(95249),p=n(67389),d=n(85630),m=["isRbacEnabled"],y=function(e){var t=e.isRbacEnabled,n=(0,s.Z)(e,m),r=(0,u.c$)(["inventory:*:*","inventory:*:read","inventory:hosts:read"]).hasAccess;return t&&!1===r?o().createElement(d.Z,null):o().createElement(p.Z,n)};y.propTypes={isRbacEnabled:l().bool};const v=y;var f=function(e){return o().createElement(i.Z,(0,r.Z)({},e,{component:v}))};const g=o().forwardRef((function(e,t){return o().createElement(f,(0,r.Z)({},e,{innerRef:t}))}))},38299:()=>{}}]);