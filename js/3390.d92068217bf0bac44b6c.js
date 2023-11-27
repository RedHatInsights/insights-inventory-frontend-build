/*! For license information please see 3390.d92068217bf0bac44b6c.js.LICENSE.txt */
(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3390],{32203:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,Z:()=>c});var n=r(70655),o=r(92950),a=r(54918),i=r(38296),l=r(62472);const s=o.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:r="",className:u="",component:d="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:h=!1,isSelectableRaised:m=!1,isSelected:v=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:O=!1,isLarge:E=!1,isFullHeight:S=!1,isPlain:w=!1,ouiaId:_,ouiaSafe:Z=!0,hasSelectableInput:F=!1,selectableInputAriaLabel:L,onSelectableInputChange:x=(()=>{})}=e,A=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=d,k=(0,l.S$)(c.displayName,_,Z),[T,I]=o.useState(""),[N,j]=o.useState();f&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const C=o.useRef(!1);return o.useEffect((()=>{L?j({"aria-label":L}):T?j({"aria-labelledby":T}):F&&!C.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[F,L,T]),o.createElement(s.Provider,{value:{cardId:r,registerTitleId:e=>{I(e),C.current=!!e},isExpanded:b}},F&&o.createElement("input",Object.assign({className:"pf-screen-reader",id:`${r}-input`},N,{type:"checkbox",checked:v,onChange:e=>x(r,e),disabled:g,tabIndex:-1})),o.createElement(P,Object.assign({id:r,className:(0,i.i)(a.Z.card,f&&a.Z.modifiers.compact,b&&a.Z.modifiers.expanded,y&&a.Z.modifiers.flat,O&&a.Z.modifiers.rounded,E&&a.Z.modifiers.displayLg,S&&a.Z.modifiers.fullHeight,w&&a.Z.modifiers.plain,g?(0,i.i)(a.Z.modifiers.nonSelectableRaised):m?(0,i.i)(a.Z.modifiers.selectableRaised,v&&a.Z.modifiers.selectedRaised):h||p?(0,i.i)(a.Z.modifiers.selectable,v&&a.Z.modifiers.selected):"",u),tabIndex:h||m?"0":void 0},A,k),t))};c.displayName="Card"},62394:(e,t,r)=>{"use strict";r.d(t,{e:()=>l});var n=r(70655),o=r(92950),a=r(54918),i=r(38296);const l=e=>{var{children:t=null,className:r="",component:l="div",isFilled:s=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const u=l;return o.createElement(u,Object.assign({className:(0,i.i)(a.Z.cardBody,!s&&a.Z.modifiers.noFill,r)},c),t)};l.displayName="CardBody"},25834:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,G:()=>s});var n,o=r(70655),a=r(92950),i=r(62873),l=r(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const s=e=>{var{children:t=null,className:r="",component:s=n.ul,isPlain:c=!1}=e,u=(0,o.__rest)(e,["children","className","component","isPlain"]);const d=s;return a.createElement(d,Object.assign({},u,{className:(0,l.i)(c&&i.Z.modifiers.plain,r)}),t)};s.displayName="TextList"},78140:(e,t,r)=>{"use strict";r.d(t,{T:()=>l,v:()=>n});var n,o=r(70655),a=r(92950),i=r(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const l=e=>{var{children:t=null,className:r="",component:l=n.li}=e,s=(0,o.__rest)(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({},s,{className:(0,i.i)(r)}),t)};l.displayName="TextListItem"},54918:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},67230:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,n,o){var a=("object"==typeof n?n.pathname:n)||"",i=/^\//.test(a),l=o?"/preview":"",s=t||e.getApp(),c=i?[l,e.getBundle(),s,a.replace(/^\//,"")].join("/"):a;return"object"==typeof n?r(r({},n),{pathname:c}):c}},45250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(71002),o=r(15861),a=r(92950),i=r.n(a),l=r(45697),s=r.n(l),c=r(33261),u=r(90218),d=r(81005),p=r(63441),f=r(60261),h=r(99166);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),l=new L(n||[]);return o(i,"_invoke",{value:w(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p={};function f(){}function h(){}function v(){}var g={};c(g,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(x([])));b&&b!==t&&r.call(b,i)&&(g=b);var O=v.prototype=f.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function a(o,i,l,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==(0,n.Z)(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,l,s)}),(function(e){a("throw",e,l,s)})):t.resolve(p).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=v,o(O,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(O),c(O,s,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var v=function(){var e=(0,o.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Tb)(t.trim());case 2:if(!0!==e.sent){e.next=5;break}throw"Group name already exists";case 5:return e.abrupt("return",void 0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.reloadData,o=e.modalBefore,l=void 0!==o&&o,s=e.setterOfModalBefore,m=(0,f.useDispatch)(),g=(0,a.useCallback)((function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,d.Z)(m,(function(){return(0,p.sS)(e)}),t)}),[t]),y=(0,a.useMemo)((function(){var e=(0,h.Z)(v,500,{onlyResolvesLast:!1});return(0,c.Z$)(e)}),[]);return i().createElement(u.Z,{isModalOpen:t,closeModal:function(){l?(r(!1),s(!0)):r(!1)},title:"Create group",submitLabel:"Create",schema:y,reloadData:n,onSubmit:g})};const y=g;g.propTypes={isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func,modalBefore:s().bool,setterOfModalBefore:s().func}},48524:(e,t,r)=>{"use strict";r.d(t,{e:()=>n.Z});var n=r(25818)},19322:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var n=r(93433),o=r(4942),a=r(29439),i=r(87462),l=r(45987),s=r(92950),c=r.n(s),u=r(45697),d=r.n(u),p=r(60261),f=r(94474),h=r(83215),m=r(39903),v=r(17499),g=r(13784),y=r(48524),b=r(55140),O=r(90218),E=r(63441),S=r(81005),w=r(47173),_=r(68340),Z=r(95249),F=r(58061),L=function(e){var t=e.closeModal;return(0,Z.c$)([F.Kl]).hasAccess?c().createElement(c().Fragment,null,c().createElement(_.x,null,"Or"),c().createElement(w.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create a new group")):c().createElement(c().Fragment,null)};L.propTypes={closeModal:d().func};var x=r(33261),A=r(45250),P=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.modalState,o=e.reloadData,i=(0,p.useDispatch)(),l=(0,b.Z)(),u=(0,s.useState)(!1),d=(0,a.Z)(u,2),f=d[0],h=d[1];return c().createElement(c().Fragment,null,!f&&c().createElement(O.Z,{isModalOpen:t,closeModal:function(){return r(!1)},title:"Add to group",submitLabel:"Add",schema:(0,x.qP)(n,l),additionalMappers:{"create-group-btn":{component:L,closeModal:function(){return h(!0)}}},onSubmit:function(e){var t=JSON.parse(e.group),r={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add ".concat(n.length>1?"".concat(n.length," systems"):n[0].display_name," to ").concat(t.name)}};(0,S.Z)(i,(function(){return(0,E.wA)(t.id,n.map((function(e){return e.id})))}),r)},reloadData:o,modalClassName:"add-selected-to-group-modal"}),f&&c().createElement(A.Z,{isModalOpen:f,setIsModalOpen:h,modalBefore:!0,setterOfModalBefore:r}))};P.propTypes={modalState:d().arrayOf(d().shape({display_name:d().string,id:d().string})).isRequired,isModalOpen:d().bool,setIsModalOpen:d().func,reloadData:d().func};const k=P;var T=r(79161),I=r(57624),N=r(41054),j=r(42637),C=r(44908),M=r.n(C),D=r(76440),R=r.n(D);var G=r(94654),B=r.n(G),q=function(e){var t=e.category;return e.values.map((function(e){var r=e.tagKey,n=e.value;return"".concat(t?"".concat(t,"/"):"").concat(r).concat(n?"=".concat(n):"")}))},H={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var r=e.osFilter;null==r||r.forEach((function(e){t.append("operating_system","".concat(e.osName).concat(e.value))}))},registeredWithFilter:function(e,t){var r=e.registeredWithFilter;return null==r?void 0:r.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var r=e.value,n=e.filter;return"hostname_or_id"===r&&Boolean(n)&&t.append("hostname_or_id",n)},tagFilters:function(e,t){var r=e.tagFilters;return(null==r?void 0:r.length)>0&&t.append("tags",B()(r,q))},rhcdFilter:function(e,t){var r=e.rhcdFilter;return null==r?void 0:r.forEach((function(e){return t.append(g.Ih,e)}))},lastSeenFilter:function(e,t){var r,n=e.lastSeenFilter;return null===(r=Object.keys(n||{}))||void 0===r?void 0:r.forEach((function(e){return"mark"===e&&t.append("last_seen",n[e])}))},updateMethodFilter:function(e,t){var r=e.updateMethodFilter;return null==r?void 0:r.forEach((function(e){return t.append(g.cE,e)}))},hostGroupFilter:function(e,t){var r=e.hostGroupFilter;return null==r?void 0:r.forEach((function(e){return t.append(g.e2,e)}))}},K=["selectedSystems"];function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){var t=e.selectedSystems,r=(0,l.Z)(e,K),n=t.map((function(e){var t,r,n=e.groups;return(0,F.BP)(null!==(t=null==n||null===(r=n[0])||void 0===r?void 0:r.id)&&void 0!==t?t:null)}));return c().createElement(j.K,(0,i.Z)({requiredPermissions:n,noAccessTooltip:F.qN,checkAll:!0,ouiaId:"bulk-delete-button"},r),"Delete")};U.propTypes={selectedSystems:d().array};var Y=function(e){var t,r=e.status,o=e.source,l=e.filterbyName,u=e.tagsFilter,d=e.operatingSystem,O=e.rhcdFilter,E=e.updateMethodFilter,S=e.lastSeenFilter,w=e.page,_=e.perPage,Z=e.initialLoading,L=e.hasAccess,x=e.hostGroupFilter,A=R()(),P=(0,b.Z)(),C=(0,s.useRef)(null),D=(0,s.useState)(!1),G=(0,a.Z)(D,2),B=G[0],q=G[1],K=(0,s.useState)({}),$=(0,a.Z)(K,2),Y=$[0],z=$[1],V=(0,s.useState)((0,g.h3)(r,o,u,l,d,O,E,x,S)),W=(0,a.Z)(V,2),Q=W[0],X=W[1],ee=(0,s.useState)(!1),te=(0,a.Z)(ee,2),re=te[0],ne=te[1],oe=(0,s.useState)(!1),ae=(0,a.Z)(oe,2),ie=ae[0],le=ae[1],se=(0,s.useState)(!1),ce=(0,a.Z)(se,2),ue=ce[0],de=ce[1],pe=(0,s.useState)(),fe=(0,a.Z)(pe,2),he=fe[0],me=fe[1],ve=(0,p.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),p.shallowEqual),ge=(0,p.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),ye=(0,p.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),be=(0,p.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.total})),Oe=(0,p.useDispatch)(),Ee=(0,T.Z)("hbi.ui.inventory-groups"),Se=(0,I.P)(ye,he,be,ve,ge),we=(0,T.Z)("edgeParity.inventory-list-filter");(0,s.useEffect)((function(){var e;return P.updateDocumentTitle("Systems | Red Hat Insights"),null==P||null===(e=P.hideGlobalFilter)||void 0===e||e.call(P,!1),P.appAction("system-list"),P.appObjectId(),P.on("GLOBAL_FILTER_UPDATE",(function(e){var t,r,n,o,i=e.data,l=P.mapGlobalFilter(i,!1,!0),s=(0,a.Z)(l,3),c=s[0],u=s[1],d=s[2];me({tags:d,filter:J(J({},null==he?void 0:he.filter),{},{system_profile:J(J(J(J(J(J({},null==he||null===(t=he.filter)||void 0===t?void 0:t.system_profile),(null==c||null===(r=c.SAP)||void 0===r?void 0:r.isSelected)&&{sap_system:!0}),c&&(null===(n=c["Ansible Automation Platform"])||void 0===n?void 0:n.isSelected)&&{ansible:"not_nil"}),(null==c||null===(o=c["Microsoft SQL"])||void 0===o?void 0:o.isSelected)&&{mssql:"not_nil"}),we&&{host_type:"nil"}),(null==u?void 0:u.length)>0&&{sap_sids:u})})})})),Oe(f.L1()),(_||w)&&Oe(f.Jr(Array.isArray(w)?w[0]:w,Array.isArray(_)?_[0]:_)),function(){Oe(f.s$())}}),[]);var _e=function(){return ye?ye.size:0},Ze=function(e,t,r,o,a){var i=(0,T.Z)("hbi.ui.inventory-groups");return(0,s.useCallback)((function(l){var s,u,d,p,f,h,m,v,g,y,b=[{title:c().createElement(j.Z,{key:"".concat(l.id,"-edit"),onClick:function(){e(l),t((function(){return!0}))},requiredPermissions:[(0,F.BP)(null!==(s=null===(u=l.groups)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.id)&&void 0!==s?s:null)],noAccessTooltip:F.JK},"Edit"),style:{padding:0}},{title:c().createElement(j.Z,{key:"".concat(l.id,"-delete"),onClick:function(){e(l),r((function(){return!0}))},requiredPermissions:[(0,F.BP)(null!==(p=null===(f=l.groups)||void 0===f||null===(h=f[0])||void 0===h?void 0:h.id)&&void 0!==p?p:null)],noAccessTooltip:F.JK},"Delete"),style:{padding:0}}],O=[{title:c().createElement(j.Z,{key:"".concat(l.id,"-add-to-group"),onClick:function(){e([l]),a(!0)},requiredPermissions:[F.Kl],noAccessTooltip:F.tl,isAriaDisabled:l.groups.length>0,ignoreResourceDefinitions:!0},"Add to group"),style:{padding:0}},{title:c().createElement(j.Z,{key:"".concat(l.id,"-remove-from-group"),onClick:function(){e([l]),o(!0)},requiredPermissions:void 0!==(null==l||null===(m=l.groups)||void 0===m||null===(v=m[0])||void 0===v?void 0:v.id)?(0,F.r)(l.groups[0].id):[],noAccessTooltip:F.EO,isAriaDisabled:0===l.groups.length,override:void 0===(null==l||null===(g=l.groups)||void 0===g||null===(y=g[0])||void 0===y?void 0:y.id)||void 0},"Remove from group"),style:{padding:0}}];return[].concat((0,n.Z)(i?O:[]),b)}),[i])}(z,ne,q,de,le);return c().createElement(s.Fragment,null,c().createElement(y.e,{hasAccess:L,isRbacEnabled:!0,customFilters:{filters:Q,globalFilter:he},isFullView:!0,showTags:!0,onRefresh:function(e,t){X(null==e?void 0:e.filters);var r=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(r){var n;null==H||null===(n=H[r])||void 0===n||n.call(H,t,e)}))}))}(r,null==e?void 0:e.filters),function(e,t,r){var n=new URLSearchParams(location.search),o=void 0!==t?t:n.get("page"),a=void 0!==r?r:n.get("per_page");!isNaN(parseInt(o))&&e.append("page",o),!isNaN(parseInt(a))&&e.append("per_page",a)}(r,null==e?void 0:e.page,null==e?void 0:e.per_page);var n=r.toString();A({search:n,hash:location.hash}),t&&t(e)},hasCheckbox:!0,autoRefresh:!0,ignoreRefresh:!0,initialLoading:Z,ref:C,tableProps:{actionResolver:Ze,canSelectAll:!1},actionsConfig:{actions:[c().createElement(U,{key:"bulk-systems-delete",selectedSystems:Array.from((null==ye||null===(t=ye.values)||void 0===t?void 0:t.call(ye))||[]),onClick:function(){z(Array.from(ye.values())),q(!0)},variant:"secondary",isAriaDisabled:0===_e()})].concat((0,n.Z)(Ee?[{label:c().createElement(j.Z,{key:"bulk-add-to-group",requiredPermissions:[F.Kl],isAriaDisabled:!(_e()>0&&Array.from(ye.values()).every((function(e){return 0===e.groups.length}))),noAccessTooltip:F.tl,onClick:function(){z(Array.from(ye.values())),le(!0)},ignoreResourceDefinitions:!0},"Add to group"),props:{style:{padding:0}}},{label:c().createElement(j.Z,(0,i.Z)({key:"bulk-remove-from-group",requiredPermissions:void 0!==ye?Array.from(ye.values()).flatMap((function(e){var t,r=e.groups;return void 0!==(null==r||null===(t=r[0])||void 0===t?void 0:t.id)?(0,F.r)(r[0].id):null})).filter(Boolean):[],isAriaDisabled:!(_e()>0&&Array.from(ye.values()).some((function(e){return e.groups.length>0}))&&1===M()(Array.from(ye.values()).filter((function(e){return e.groups.length>0})).map((function(e){return e.groups[0].name}))).length),noAccessTooltip:F.tl,onClick:function(){z(Array.from(ye.values())),de(!0)}},void 0===ye?{override:!0}:{},{checkAll:!0}),"Remove from group"),props:{style:{padding:0}}}]:[]))},bulkSelect:Se,showCentosVersions:!0,showNoGroupOption:!0}),c().createElement(m.default,{className:"sentry-mask data-hj-suppress",handleModalToggle:q,isModalOpen:B,currentSytems:Y,onConfirm:function(){var e,t;Array.isArray(Y)?(t=Y.map((function(e){return e.id})),e=Y.length>1?"".concat(Y.length," systems"):Y[0].display_name):(e=Y.display_name,t=[Y.id]),Oe((0,h.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),Oe(f.Ks(t,e)),q(!1)}}),c().createElement(v.TextInputModal,{title:"Edit display name",isOpen:re,value:Y.display_name,onCancel:function(){return ne(!1)},onSubmit:function(e){Oe(f.$Y(Y.id,e)),ne(!1)}}),!0===Ee&&c().createElement(c().Fragment,null,ie&&c().createElement(k,{isModalOpen:ie,setIsModalOpen:le,modalState:Y,reloadData:function(){_e()>0&&Oe(f.CL(-1,!1)),setTimeout((function(){return C.current.onRefreshData(Q,!1,!0)}),500)}}),ue&&c().createElement(N.Z,{isModalOpen:ue,setIsModalOpen:de,modalState:Y,reloadData:function(){_e()>0&&Oe(f.CL(-1,!1)),setTimeout((function(){return C.current.onRefreshData(Q,!1,!0)}),500)}})))};Y.propTypes={status:d().oneOfType([d().arrayOf(d().string),d().string]),source:d().oneOfType([d().arrayOf(d().string),d().string]),operatingSystem:d().oneOfType([d().arrayOf(d().string),d().string]),filterbyName:d().arrayOf(d().string),tagsFilter:d().any,page:d().arrayOf(d().oneOfType([d().string,d().number])),perPage:d().arrayOf(d().oneOfType([d().string,d().number])),initialLoading:d().bool,rhcdFilter:d().oneOfType([d().arrayOf(d().string),d().string]),updateMethodFilter:d().oneOfType([d().arrayOf(d().string),d().string]),hasAccess:d().bool,hostGroupFilter:d().oneOfType([d().arrayOf(d().string),d().string]),lastSeenFilter:d().oneOfType([d().arrayOf(d().string),d().string])},Y.defaultProps={initialLoading:!0};const z=Y},17499:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TextInputModal:()=>c.Z,default:()=>u});var n=r(87462),o=r(92950),a=r.n(o),i=r(60261),l=r(43107),s=r(79161),c=r(55426);const u=function(e){var t=(0,i.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.systemProfile})),r="edge"===(null==t?void 0:t.host_type),o=(0,s.Z)("edgeParity.inventory-system-detail"),c=(0,s.Z)("edgeParity.inventory-list");return a().createElement(l.default,(0,n.Z)({},e,{showImageDetails:o&&c&&r}))}},44908:(e,t,r)=>{var n=r(45652);e.exports=function(e){return e&&e.length?n(e):[]}}}]);
//# sourceMappingURL=../sourcemaps/3390.210c4fc2c6256232d462430b1955086c.js.map