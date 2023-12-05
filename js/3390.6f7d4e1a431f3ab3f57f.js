/*! For license information please see 3390.6f7d4e1a431f3ab3f57f.js.LICENSE.txt */
(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3390],{32203:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,Z:()=>c});var n=r(70655),o=r(92950),a=r(54918),i=r(38296),l=r(62472);const s=o.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:r="",className:u="",component:d="article",isHoverable:f=!1,isCompact:p=!1,isSelectable:h=!1,isSelectableRaised:m=!1,isSelected:v=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:O=!1,isLarge:E=!1,isFullHeight:S=!1,isPlain:w=!1,ouiaId:_,ouiaSafe:Z=!0,hasSelectableInput:F=!1,selectableInputAriaLabel:L,onSelectableInputChange:x=(()=>{})}=e,A=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=d,k=(0,l.S$)(c.displayName,_,Z),[T,I]=o.useState(""),[N,j]=o.useState();p&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const C=o.useRef(!1);return o.useEffect((()=>{L?j({"aria-label":L}):T?j({"aria-labelledby":T}):F&&!C.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[F,L,T]),o.createElement(s.Provider,{value:{cardId:r,registerTitleId:e=>{I(e),C.current=!!e},isExpanded:b}},F&&o.createElement("input",Object.assign({className:"pf-screen-reader",id:`${r}-input`},N,{type:"checkbox",checked:v,onChange:e=>x(r,e),disabled:g,tabIndex:-1})),o.createElement(P,Object.assign({id:r,className:(0,i.i)(a.Z.card,p&&a.Z.modifiers.compact,b&&a.Z.modifiers.expanded,y&&a.Z.modifiers.flat,O&&a.Z.modifiers.rounded,E&&a.Z.modifiers.displayLg,S&&a.Z.modifiers.fullHeight,w&&a.Z.modifiers.plain,g?(0,i.i)(a.Z.modifiers.nonSelectableRaised):m?(0,i.i)(a.Z.modifiers.selectableRaised,v&&a.Z.modifiers.selectedRaised):h||f?(0,i.i)(a.Z.modifiers.selectable,v&&a.Z.modifiers.selected):"",u),tabIndex:h||m?"0":void 0},A,k),t))};c.displayName="Card"},62394:(e,t,r)=>{"use strict";r.d(t,{e:()=>l});var n=r(70655),o=r(92950),a=r(54918),i=r(38296);const l=e=>{var{children:t=null,className:r="",component:l="div",isFilled:s=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const u=l;return o.createElement(u,Object.assign({className:(0,i.i)(a.Z.cardBody,!s&&a.Z.modifiers.noFill,r)},c),t)};l.displayName="CardBody"},25834:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,G:()=>s});var n,o=r(70655),a=r(92950),i=r(62873),l=r(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const s=e=>{var{children:t=null,className:r="",component:s=n.ul,isPlain:c=!1}=e,u=(0,o.__rest)(e,["children","className","component","isPlain"]);const d=s;return a.createElement(d,Object.assign({},u,{className:(0,l.i)(c&&i.Z.modifiers.plain,r)}),t)};s.displayName="TextList"},78140:(e,t,r)=>{"use strict";r.d(t,{T:()=>l,v:()=>n});var n,o=r(70655),a=r(92950),i=r(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const l=e=>{var{children:t=null,className:r="",component:l=n.li}=e,s=(0,o.__rest)(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({},s,{className:(0,i.i)(r)}),t)};l.displayName="TextListItem"},54918:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},67230:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,n,o){var a=("object"==typeof n?n.pathname:n)||"",i=/^\//.test(a),l=o?"/preview":"",s=t||e.getApp(),c=i?[l,e.getBundle(),s,a.replace(/^\//,"")].join("/"):a;return"object"==typeof n?r(r({},n),{pathname:c}):c}},45250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(71002),o=r(15861),a=r(92950),i=r.n(a),l=r(45697),s=r.n(l),c=r(33261),u=r(90218),d=r(81005),f=r(63441),p=r(60261),h=r(99166);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new L(n||[]);return o(i,"_invoke",{value:w(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function h(){}function v(){}var g={};c(g,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(x([])));b&&b!==t&&r.call(b,i)&&(g=b);var O=v.prototype=p.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function a(o,i,l,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,l,s)}),(function(e){a("throw",e,l,s)})):t.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=v,o(O,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(O),c(O,s,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var v=function(){var e=(0,o.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.Tb)(t.trim());case 2:if(!0!==e.sent){e.next=5;break}throw"Group name already exists";case 5:return e.abrupt("return",void 0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.reloadData,o=e.modalBefore,l=void 0!==o&&o,s=e.setterOfModalBefore,m=(0,p.useDispatch)(),g=(0,a.useCallback)((function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,d.Z)(m,(function(){return(0,f.sS)(e)}),t)}),[t]),y=(0,a.useMemo)((function(){var e=(0,h.Z)(v,500,{onlyResolvesLast:!1});return(0,c.Z$)(e)}),[]);return i().createElement(u.Z,{isModalOpen:t,closeModal:function(){l?(r(!1),s(!0)):r(!1)},title:"Create group",submitLabel:"Create",schema:y,reloadData:n,onSubmit:g})};const y=g;g.propTypes={isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func,modalBefore:s().bool,setterOfModalBefore:s().func}},48524:(e,t,r)=>{"use strict";r.d(t,{e:()=>n.Z});var n=r(25818)},19322:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var n=r(4942),o=r(29439),a=r(87462),i=r(45987),l=r(92950),s=r.n(l),c=r(45697),u=r.n(c),d=r(60261),f=r(94474),p=r(83215),h=r(39903),m=r(17499),v=r(13784),g=r(48524),y=r(55140),b=r(90218),O=r(63441),E=r(81005),S=r(47173),w=r(68340),_=r(95249),Z=r(58061),F=function(e){var t=e.closeModal;return(0,_.c$)([Z.Kl]).hasAccess?s().createElement(s().Fragment,null,s().createElement(w.x,null,"Or"),s().createElement(S.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create a new group")):s().createElement(s().Fragment,null)};F.propTypes={closeModal:u().func};var L=r(33261),x=r(45250),A=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.modalState,a=e.reloadData,i=(0,d.useDispatch)(),c=(0,y.Z)(),u=(0,l.useState)(!1),f=(0,o.Z)(u,2),p=f[0],h=f[1];return s().createElement(s().Fragment,null,!p&&s().createElement(b.Z,{isModalOpen:t,closeModal:function(){return r(!1)},title:"Add to group",submitLabel:"Add",schema:(0,L.qP)(n,c),additionalMappers:{"create-group-btn":{component:F,closeModal:function(){return h(!0)}}},onSubmit:function(e){var t=JSON.parse(e.group),r={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add ".concat(n.length>1?"".concat(n.length," systems"):n[0].display_name," to ").concat(t.name)}};(0,E.Z)(i,(function(){return(0,O.wA)(t.id,n.map((function(e){return e.id})))}),r)},reloadData:a,modalClassName:"add-selected-to-group-modal"}),p&&s().createElement(x.Z,{isModalOpen:p,setIsModalOpen:h,modalBefore:!0,setterOfModalBefore:r}))};A.propTypes={modalState:u().arrayOf(u().shape({display_name:u().string,id:u().string})).isRequired,isModalOpen:u().bool,setIsModalOpen:u().func,reloadData:u().func};const P=A;var k=r(79161),T=r(57624),I=r(41054),N=r(42637),j=r(44908),C=r.n(j),M=r(76440),D=r.n(M);var R=r(94654),G=r.n(R),B=function(e){var t=e.category;return e.values.map((function(e){var r=e.tagKey,n=e.value;return"".concat(t?"".concat(t,"/"):"").concat(r).concat(n?"=".concat(n):"")}))},q={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var r=e.osFilter;null==r||r.forEach((function(e){t.append("operating_system","".concat(e.osName).concat(e.value))}))},registeredWithFilter:function(e,t){var r=e.registeredWithFilter;return null==r?void 0:r.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var r=e.value,n=e.filter;return"hostname_or_id"===r&&Boolean(n)&&t.append("hostname_or_id",n)},tagFilters:function(e,t){var r=e.tagFilters;return(null==r?void 0:r.length)>0&&t.append("tags",G()(r,B))},rhcdFilter:function(e,t){var r=e.rhcdFilter;return null==r?void 0:r.forEach((function(e){return t.append(v.Ih,e)}))},lastSeenFilter:function(e,t){var r,n=e.lastSeenFilter;return null===(r=Object.keys(n||{}))||void 0===r?void 0:r.forEach((function(e){return"mark"===e&&t.append("last_seen",n[e])}))},updateMethodFilter:function(e,t){var r=e.updateMethodFilter;return null==r?void 0:r.forEach((function(e){return t.append(v.cE,e)}))},hostGroupFilter:function(e,t){var r=e.hostGroupFilter;return null==r?void 0:r.forEach((function(e){return t.append(v.e2,e)}))}},H=["selectedSystems"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){var t=e.selectedSystems,r=(0,i.Z)(e,H),n=t.map((function(e){var t,r,n=e.groups;return(0,Z.BP)(null!==(t=null==n||null===(r=n[0])||void 0===r?void 0:r.id)&&void 0!==t?t:null)}));return s().createElement(N.K,(0,a.Z)({requiredPermissions:n,noAccessTooltip:Z.qN,checkAll:!0,ouiaId:"bulk-delete-button"},r),"Delete")};J.propTypes={selectedSystems:u().array};var U=function(e){var t,r=e.status,n=e.source,i=e.filterbyName,c=e.tagsFilter,u=e.operatingSystem,b=e.rhcdFilter,O=e.updateMethodFilter,E=e.lastSeenFilter,S=e.page,w=e.perPage,_=e.initialLoading,F=e.hasAccess,L=e.hostGroupFilter,x=D()(),A=(0,y.Z)(),j=(0,l.useRef)(null),M=(0,l.useState)(!1),R=(0,o.Z)(M,2),G=R[0],B=R[1],H=(0,l.useState)({}),K=(0,o.Z)(H,2),U=K[0],Y=K[1],z=(0,l.useState)((0,v.h3)(r,n,c,i,u,b,O,L,E)),V=(0,o.Z)(z,2),W=V[0],Q=V[1],X=(0,l.useState)(!1),ee=(0,o.Z)(X,2),te=ee[0],re=ee[1],ne=(0,l.useState)(!1),oe=(0,o.Z)(ne,2),ae=oe[0],ie=oe[1],le=(0,l.useState)(!1),se=(0,o.Z)(le,2),ce=se[0],ue=se[1],de=(0,l.useState)(),fe=(0,o.Z)(de,2),pe=fe[0],he=fe[1],me=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),d.shallowEqual),ve=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),ge=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),ye=(0,d.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.total})),be=(0,d.useDispatch)(),Oe=(0,T.P)(ge,pe,ye,me,ve),Ee=(0,k.Z)("edgeParity.inventory-list-filter");(0,l.useEffect)((function(){var e;return A.updateDocumentTitle("Systems | Red Hat Insights"),null==A||null===(e=A.hideGlobalFilter)||void 0===e||e.call(A,!1),A.appAction("system-list"),A.appObjectId(),A.on("GLOBAL_FILTER_UPDATE",(function(e){var t,r,n,a,i=e.data,l=A.mapGlobalFilter(i,!1,!0),s=(0,o.Z)(l,3),c=s[0],u=s[1],d=s[2];he({tags:d,filter:$($({},null==pe?void 0:pe.filter),{},{system_profile:$($($($($($({},null==pe||null===(t=pe.filter)||void 0===t?void 0:t.system_profile),(null==c||null===(r=c.SAP)||void 0===r?void 0:r.isSelected)&&{sap_system:!0}),c&&(null===(n=c["Ansible Automation Platform"])||void 0===n?void 0:n.isSelected)&&{ansible:"not_nil"}),(null==c||null===(a=c["Microsoft SQL"])||void 0===a?void 0:a.isSelected)&&{mssql:"not_nil"}),Ee&&{host_type:"nil"}),(null==u?void 0:u.length)>0&&{sap_sids:u})})})})),be(f.L1()),(w||S)&&be(f.Jr(Array.isArray(S)?S[0]:S,Array.isArray(w)?w[0]:w)),function(){be(f.s$())}}),[]);var Se=function(){return ge?ge.size:0},we=function(e,t,r,n,o){return(0,l.useCallback)((function(a){var i,l,c,u,d,f,p,h,m,v,g=[{title:s().createElement(N.Z,{key:"".concat(a.id,"-edit"),onClick:function(){e(a),t((function(){return!0}))},requiredPermissions:[(0,Z.BP)(null!==(i=null===(l=a.groups)||void 0===l||null===(c=l[0])||void 0===c?void 0:c.id)&&void 0!==i?i:null)],noAccessTooltip:Z.JK},"Edit"),style:{padding:0}},{title:s().createElement(N.Z,{key:"".concat(a.id,"-delete"),onClick:function(){e(a),r((function(){return!0}))},requiredPermissions:[(0,Z.BP)(null!==(u=null===(d=a.groups)||void 0===d||null===(f=d[0])||void 0===f?void 0:f.id)&&void 0!==u?u:null)],noAccessTooltip:Z.JK},"Delete"),style:{padding:0}}],y=[{title:s().createElement(N.Z,{key:"".concat(a.id,"-add-to-group"),onClick:function(){e([a]),o(!0)},requiredPermissions:[Z.Kl],noAccessTooltip:Z.tl,isAriaDisabled:a.groups.length>0,ignoreResourceDefinitions:!0},"Add to group"),style:{padding:0}},{title:s().createElement(N.Z,{key:"".concat(a.id,"-remove-from-group"),onClick:function(){e([a]),n(!0)},requiredPermissions:void 0!==(null==a||null===(p=a.groups)||void 0===p||null===(h=p[0])||void 0===h?void 0:h.id)?(0,Z.r)(a.groups[0].id):[],noAccessTooltip:Z.EO,isAriaDisabled:0===a.groups.length,override:void 0===(null==a||null===(m=a.groups)||void 0===m||null===(v=m[0])||void 0===v?void 0:v.id)||void 0},"Remove from group"),style:{padding:0}}];return[].concat(y,g)}),[])}(Y,re,B,ue,ie);return s().createElement(l.Fragment,null,s().createElement(g.e,{hasAccess:F,isRbacEnabled:!0,customFilters:{filters:W,globalFilter:pe},isFullView:!0,showTags:!0,onRefresh:function(e,t){Q(null==e?void 0:e.filters);var r=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(r){var n;null==q||null===(n=q[r])||void 0===n||n.call(q,t,e)}))}))}(r,null==e?void 0:e.filters),function(e,t,r){var n=new URLSearchParams(location.search),o=void 0!==t?t:n.get("page"),a=void 0!==r?r:n.get("per_page");!isNaN(parseInt(o))&&e.append("page",o),!isNaN(parseInt(a))&&e.append("per_page",a)}(r,null==e?void 0:e.page,null==e?void 0:e.per_page);var n=r.toString();x({search:n,hash:location.hash}),t&&t(e)},hasCheckbox:!0,autoRefresh:!0,ignoreRefresh:!0,initialLoading:_,ref:j,tableProps:{actionResolver:we,canSelectAll:!1},actionsConfig:{actions:[s().createElement(J,{key:"bulk-systems-delete",selectedSystems:Array.from((null==ge||null===(t=ge.values)||void 0===t?void 0:t.call(ge))||[]),onClick:function(){Y(Array.from(ge.values())),B(!0)},variant:"secondary",isAriaDisabled:0===Se()}),{label:s().createElement(N.Z,{key:"bulk-add-to-group",requiredPermissions:[Z.Kl],isAriaDisabled:!(Se()>0&&Array.from(ge.values()).every((function(e){return 0===e.groups.length}))),noAccessTooltip:Z.tl,onClick:function(){Y(Array.from(ge.values())),ie(!0)},ignoreResourceDefinitions:!0},"Add to group"),props:{style:{padding:0}}},{label:s().createElement(N.Z,(0,a.Z)({key:"bulk-remove-from-group",requiredPermissions:void 0!==ge?Array.from(ge.values()).flatMap((function(e){var t,r=e.groups;return void 0!==(null==r||null===(t=r[0])||void 0===t?void 0:t.id)?(0,Z.r)(r[0].id):null})).filter(Boolean):[],isAriaDisabled:!(Se()>0&&Array.from(ge.values()).some((function(e){return e.groups.length>0}))&&1===C()(Array.from(ge.values()).filter((function(e){return e.groups.length>0})).map((function(e){return e.groups[0].name}))).length),noAccessTooltip:Z.tl,onClick:function(){Y(Array.from(ge.values())),ue(!0)}},void 0===ge?{override:!0}:{},{checkAll:!0}),"Remove from group"),props:{style:{padding:0}}}]},bulkSelect:Oe,showCentosVersions:!0,showNoGroupOption:!0}),s().createElement(h.default,{className:"sentry-mask data-hj-suppress",handleModalToggle:B,isModalOpen:G,currentSytems:U,onConfirm:function(){var e,t;Array.isArray(U)?(t=U.map((function(e){return e.id})),e=U.length>1?"".concat(U.length," systems"):U[0].display_name):(e=U.display_name,t=[U.id]),be((0,p.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),be(f.Ks(t,e)),B(!1)}}),s().createElement(m.TextInputModal,{title:"Edit display name",isOpen:te,value:U.display_name,onCancel:function(){return re(!1)},onSubmit:function(e){be(f.$Y(U.id,e)),re(!1)}}),ae&&s().createElement(P,{isModalOpen:ae,setIsModalOpen:ie,modalState:U,reloadData:function(){Se()>0&&be(f.CL(-1,!1)),setTimeout((function(){return j.current.onRefreshData(W,!1,!0)}),500)}}),ce&&s().createElement(I.Z,{isModalOpen:ce,setIsModalOpen:ue,modalState:U,reloadData:function(){Se()>0&&be(f.CL(-1,!1)),setTimeout((function(){return j.current.onRefreshData(W,!1,!0)}),500)}}))};U.propTypes={status:u().oneOfType([u().arrayOf(u().string),u().string]),source:u().oneOfType([u().arrayOf(u().string),u().string]),operatingSystem:u().oneOfType([u().arrayOf(u().string),u().string]),filterbyName:u().arrayOf(u().string),tagsFilter:u().any,page:u().arrayOf(u().oneOfType([u().string,u().number])),perPage:u().arrayOf(u().oneOfType([u().string,u().number])),initialLoading:u().bool,rhcdFilter:u().oneOfType([u().arrayOf(u().string),u().string]),updateMethodFilter:u().oneOfType([u().arrayOf(u().string),u().string]),hasAccess:u().bool,hostGroupFilter:u().oneOfType([u().arrayOf(u().string),u().string]),lastSeenFilter:u().oneOfType([u().arrayOf(u().string),u().string])},U.defaultProps={initialLoading:!0};const Y=U},17499:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TextInputModal:()=>c.Z,default:()=>u});var n=r(87462),o=r(92950),a=r.n(o),i=r(60261),l=r(43107),s=r(79161),c=r(55426);const u=function(e){var t=(0,i.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.systemProfile})),r="edge"===(null==t?void 0:t.host_type),o=(0,s.Z)("edgeParity.inventory-system-detail"),c=(0,s.Z)("edgeParity.inventory-list");return a().createElement(l.default,(0,n.Z)({},e,{showImageDetails:o&&c&&r}))}},44908:(e,t,r)=>{var n=r(45652);e.exports=function(e){return e&&e.length?n(e):[]}}}]);