(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4007],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var a=n(70655),r=n(92950),i=n(54918),l=n(38296),s=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:d="",component:u="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:h=!1,isSelected:g=!1,isDisabledRaised:v=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:O=!1,isLarge:_=!1,isFullHeight:S=!1,isPlain:N=!1,ouiaId:E,ouiaSafe:j=!0,hasSelectableInput:w=!1,selectableInputAriaLabel:Z,onSelectableInputChange:P=(()=>{})}=e,F=(0,a.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const I=u,x=(0,s.S$)(c.displayName,E,j),[C,k]=r.useState(""),[T,L]=r.useState();f&&_&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),_=!1);const R=r.useRef(!1);return r.useEffect((()=>{Z?L({"aria-label":Z}):C?L({"aria-labelledby":C}):w&&!R.current&&(L({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[w,Z,C]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{k(e),R.current=!!e},isExpanded:b}},w&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:g,onChange:e=>P(n,e),disabled:v,tabIndex:-1})),r.createElement(I,Object.assign({id:n,className:(0,l.i)(i.Z.card,f&&i.Z.modifiers.compact,b&&i.Z.modifiers.expanded,y&&i.Z.modifiers.flat,O&&i.Z.modifiers.rounded,_&&i.Z.modifiers.displayLg,S&&i.Z.modifiers.fullHeight,N&&i.Z.modifiers.plain,v?(0,l.i)(i.Z.modifiers.nonSelectableRaised):h?(0,l.i)(i.Z.modifiers.selectableRaised,g&&i.Z.modifiers.selectedRaised):m||p?(0,l.i)(i.Z.modifiers.selectable,g&&i.Z.modifiers.selected):"",d),tabIndex:m||h?"0":void 0},F,x),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var a=n(70655),r=n(92950),i=n(54918),l=n(38296);const s=e=>{var{children:t=null,className:n="",component:s="div",isFilled:o=!0}=e,c=(0,a.__rest)(e,["children","className","component","isFilled"]);const d=s;return r.createElement(d,Object.assign({className:(0,l.i)(i.Z.cardBody,!o&&i.Z.modifiers.noFill,n)},c),t)};s.displayName="CardBody"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>c});var a,r=n(70655),i=n(92950),l=n(38296),s=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const c=e=>{var{children:t=null,className:n="",component:d=a.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:f=!0}=e,m=(0,r.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const h=d,g=(0,o.S$)(c.displayName,p,f);return i.createElement(h,Object.assign({},g,m,{"data-pf-content":!0,className:(0,l.i)(u&&d===a.a&&s.Z.modifiers.visited,n)}),t)};c.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var a=n(70655),r=n(92950),i=n(62873),l=n(38296);const s=e=>{var{children:t=null,className:n="",isVisited:s=!1}=e,o=(0,a.__rest)(e,["children","className","isVisited"]);return r.createElement("div",Object.assign({},o,{className:(0,l.i)(i.Z.content,s&&i.Z.modifiers.visited,n)}),t)};s.displayName="TextContent"},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>a,G:()=>s});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.ul}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,v:()=>a});var a,r=n(70655),i=n(92950),l=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(a||(a={}));const s=e=>{var{children:t=null,className:n="",component:s=a.li}=e,o=(0,r.__rest)(e,["children","className","component"]);const c=s;return i.createElement(c,Object.assign({},o,{className:(0,l.i)(n)}),t)};s.displayName="TextListItem"},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(10108);const a={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},53754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(92950);const r=n.n(a)().createContext("light")},80123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(85893),r=n(94184),i=n.n(r),l=n(53754),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};const o=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),o=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(l.Z.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var c=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,a.jsx)("section",s({},r,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(85893),r=n(94184),i=n.n(r),l=n(48542),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};const o=function(e){var t=e.className,n=e.title,r=i()(t);return(0,a.jsx)(l.Title,s({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},17499:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TextInputModal:()=>l.Z,default:()=>s});var a=n(92950),r=n.n(a),i=n(43107),l=n(95364);const s=function(e){return r().createElement(i.default,e)}},54174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{calculatePagination:()=>A,default:()=>H});var a=n(87462),r=n(4942),i=n(29439),l=n(92950),s=n.n(l),o=n(45697),c=n.n(o),d=n(50533),u=n(75662),p=n(80123),f=n(39173),m=n(85893),h=n(94184),g=n.n(h),v=n(53754),y=function(){return y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},y.apply(this,arguments)},b=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};const O=(0,d.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,a=void 0===n?{}:n,r=e.children,i=e.className,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["path","params","children","className"]),o=function(){var e,n,r;if(null===(r=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var n,r;return 0===t.indexOf(":")?e.dynamic=y(y({},e.dynamic),((n={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],n)):e.staticPart=b(b([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),c=o.dynamic,d=o.staticPart;return(0,m.jsx)(v.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var n=g()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,m.jsx)("section",y({},l,c,{"page-type":d.join("-"),className:"".concat(g()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)},{children:s().Children.map(r,(function(e){return s().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,m.jsx)("section",y({},l,c,{"page-type":d.join("-"),className:"".concat(g()(i,"pf-l-page__main-section pf-c-page__main-section"))},{children:r}))}[e]}})}));var _=n(3672),S=n(50693),N=n(16475),E=n(83215),j=n(39903),w=n(17499),Z=n(94654),P=n.n(Z),F=n(13784),I=n(35859),x=n(55140);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.has(n)}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.has(n)}))&&null},L=function(e){var t=e.category;return e.values.map((function(e){var n=e.tagKey,a=e.value;return"".concat(t?"".concat(t,"/"):"").concat(n).concat(a?"=".concat(a):"")}))},R={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var n=e.osFilter;return null==n?void 0:n.forEach((function(e){return t.append("operating_system",e)}))},registeredWithFilter:function(e,t){var n=e.registeredWithFilter;return null==n?void 0:n.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var n=e.value,a=e.filter;return"hostname_or_id"===n&&Boolean(a)&&t.append("hostname_or_id",a)},tagFilters:function(e,t){var n=e.tagFilters;return(null==n?void 0:n.length)>0&&t.append("tags",P()(n,L))},rhcdFilter:function(e,t){var n=e.rhcdFilter;return null==n?void 0:n.forEach((function(e){return t.append(F.Ih,e)}))},updateMethodFilter:function(e,t){var n=e.updateMethodFilter;return null==n?void 0:n.forEach((function(e){return t.append(F.cE,e)}))}},A=function(e,t,n){var a=new URLSearchParams(location.search),r=void 0!==t?t:a.get("page"),i=void 0!==n?n:a.get("per_page");!isNaN(parseInt(r))&&e.append("page",r),!isNaN(parseInt(i))&&e.append("per_page",i)},D=function(e){var t=e.status,n=e.source,r=e.filterbyName,o=e.tagsFilter,c=e.operatingSystem,m=e.rhcdFilter,h=e.updateMethodFilter,g=e.page,v=e.perPage,y=e.initialLoading,b=e.hasAccess,Z=(0,u.useHistory)(),P=(0,x.Z)(),C=(0,l.useRef)(null),L=(0,l.useState)(!1),D=(0,i.Z)(L,2),H=D[0],M=D[1],$=(0,l.useState)({}),q=(0,i.Z)($,2),B=q[0],V=q[1],G=(0,l.useState)((0,F.h3)(t,n,o,r,c,m,h)),z=(0,i.Z)(G,2),U=z[0],K=z[1],W=(0,l.useState)(!1),J=(0,i.Z)(W,2),Q=J[0],Y=J[1],X=(0,l.useState)(),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],ae=(0,F.Mo)(),re=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),d.shallowEqual),ie=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),le=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),se=(0,d.useDispatch)(),oe=function(e,t){return se(_.CL(e,t))},ce=function(e,t){K(null==e?void 0:e.filters);var n=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(n){var a;null==R||null===(a=R[n])||void 0===a||a.call(R,t,e)}))}))}(n,null==e?void 0:e.filters),A(n,null==e?void 0:e.page,null==e?void 0:e.per_page);var a=n.toString();Z.push({search:a,hash:location.hash}),t&&t(e)};(0,l.useEffect)((function(){var e;P.updateDocumentTitle("Inventory | Red Hat Insights"),null==P||null===(e=P.hideGlobalFilter)||void 0===e||e.call(P,!1),P.appAction("system-list"),P.appObjectId(),P.on("GLOBAL_FILTER_UPDATE",(function(e){var t,n,a,r,l,s=e.data,o=null==P||null===(t=P.mapGlobalFilter)||void 0===t?void 0:t.call(P,s,!1,!0),c=(0,i.Z)(o,3),d=c[0],u=c[1],p=c[2];ne({tags:p,filter:k(k({},null==te?void 0:te.filter),{},{system_profile:k(k(k(k(k({},null==te||null===(n=te.filter)||void 0===n?void 0:n.system_profile),(null==d||null===(a=d.SAP)||void 0===a?void 0:a.isSelected)&&{sap_system:!0}),d&&(null===(r=d["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:"not_nil"}),(null==d||null===(l=d["Microsoft SQL"])||void 0===l?void 0:l.isSelected)&&{mssql:"not_nil"}),(null==u?void 0:u.length)>0&&{sap_sids:u})})})})),se(_.L1()),(v||g)&&se(_.Jr(Array.isArray(g)?g[0]:g,Array.isArray(v)?v[0]:v))}),[]);var de=function(){return le?le.size:0};return s().createElement(s().Fragment,null,s().createElement(p.Z,{className:"pf-m-light"},s().createElement(f.Z,{title:"Inventory"})),s().createElement(O,null,s().createElement(S.r,{gutter:"md"},s().createElement(N.P,{span:12},s().createElement(I.e,(0,a.Z)({hasAccess:b,isRbacEnabled:!0,customFilters:{filters:U,globalFilter:te},isFullView:!0,inventoryRef:C,showTags:!0,onRefresh:ce,hasCheckbox:ae,autoRefresh:!0,initialLoading:y},ae&&{actions:[{title:"Delete",onClick:function(e,t,n){var a=n.id,r=n.display_name;V((function(){return{id:a,displayName:r}})),M((function(){return!0}))}},{title:"Edit",onClick:function(e,t,n){V((function(){return n})),Y((function(){return!0}))}}],actionsConfig:{actions:[{label:"Delete",props:{isDisabled:0===de(),variant:"secondary",onClick:function(){V(Array.from(le.values())),M(!0)}}}]},bulkSelect:{count:de(),id:"bulk-select-systems",items:[{title:"Select none (0)",onClick:function(){oe(-1,!1)}},k({},ie&&re&&re.length>0?{title:"Select page (".concat(re.length,")"),onClick:function(){oe(0,!0)}}:{})],checked:T(re,le),onSelect:function(e){oe(0,e)}}},{tableProps:{canSelectAll:!1},onRowClick:function(e,t,n){return Z.push("/".concat(t).concat(n?"/".concat(n):""))}}))))),s().createElement(j.Z,{handleModalToggle:M,isModalOpen:H,currentSytems:B,onConfirm:function(){var e,t,n,a;Array.isArray(B)?(t=B.map((function(e){return e.id})),e=B.length>1?"".concat(B.length," systems"):B[0].display_name):(e=B.displayName,t=[B.id]),se((0,E.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),se((a=function(){return ce({filters:U})},(n=_.Ks(t,e)).payload.then(a),n)),M(!1)}}),s().createElement(w.TextInputModal,{title:"Edit display name",isOpen:Q,value:B.display_name,onCancel:function(){return Y(!1)},onSubmit:function(e){se(_.$Y(B.id,e)),Y(!1)}}))};D.propTypes={status:c().oneOfType([c().arrayOf(c().string),c().string]),source:c().oneOfType([c().arrayOf(c().string),c().string]),operatingSystem:c().oneOfType([c().arrayOf(c().string),c().string]),filterbyName:c().arrayOf(c().string),tagsFilter:c().any,page:c().arrayOf(c().oneOfType([c().string,c().number])),perPage:c().arrayOf(c().oneOfType([c().string,c().number])),initialLoading:c().bool,rhcdFilter:c().oneOfType([c().arrayOf(c().string),c().string]),updateMethodFilter:c().oneOfType([c().arrayOf(c().string),c().string]),hasAccess:c().bool},D.defaultProps={initialLoading:!0};const H=D},38299:()=>{}}]);