/*! For license information please see 3390.c11cce1b4337a8036346.js.LICENSE.txt */
(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3390],{32203:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,Z:()=>c});var n=r(70655),a=r(92950),o=r(54918),i=r(38296),l=r(62472);const s=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:r="",className:u="",component:d="article",isHoverable:f=!1,isCompact:p=!1,isSelectable:h=!1,isSelectableRaised:m=!1,isSelected:v=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:E=!1,isLarge:O=!1,isFullHeight:S=!1,isPlain:w=!1,ouiaId:_,ouiaSafe:Z=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:F,onSelectableInputChange:L=(()=>{})}=e,k=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const A=d,T=(0,l.S$)(c.displayName,_,Z),[I,N]=a.useState(""),[C,P]=a.useState();p&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const M=a.useRef(!1);return a.useEffect((()=>{F?P({"aria-label":F}):I?P({"aria-labelledby":I}):x&&!M.current&&(P({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,F,I]),a.createElement(s.Provider,{value:{cardId:r,registerTitleId:e=>{N(e),M.current=!!e},isExpanded:b}},x&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${r}-input`},C,{type:"checkbox",checked:v,onChange:e=>L(r,e),disabled:g,tabIndex:-1})),a.createElement(A,Object.assign({id:r,className:(0,i.i)(o.Z.card,p&&o.Z.modifiers.compact,b&&o.Z.modifiers.expanded,y&&o.Z.modifiers.flat,E&&o.Z.modifiers.rounded,O&&o.Z.modifiers.displayLg,S&&o.Z.modifiers.fullHeight,w&&o.Z.modifiers.plain,g?(0,i.i)(o.Z.modifiers.nonSelectableRaised):m?(0,i.i)(o.Z.modifiers.selectableRaised,v&&o.Z.modifiers.selectedRaised):h||f?(0,i.i)(o.Z.modifiers.selectable,v&&o.Z.modifiers.selected):"",u),tabIndex:h||m?"0":void 0},k,T),t))};c.displayName="Card"},62394:(e,t,r)=>{"use strict";r.d(t,{e:()=>l});var n=r(70655),a=r(92950),o=r(54918),i=r(38296);const l=e=>{var{children:t=null,className:r="",component:l="div",isFilled:s=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const u=l;return a.createElement(u,Object.assign({className:(0,i.i)(o.Z.cardBody,!s&&o.Z.modifiers.noFill,r)},c),t)};l.displayName="CardBody"},25834:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,G:()=>s});var n,a=r(70655),o=r(92950),i=r(62873),l=r(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const s=e=>{var{children:t=null,className:r="",component:s=n.ul,isPlain:c=!1}=e,u=(0,a.__rest)(e,["children","className","component","isPlain"]);const d=s;return o.createElement(d,Object.assign({},u,{className:(0,l.i)(c&&i.Z.modifiers.plain,r)}),t)};s.displayName="TextList"},78140:(e,t,r)=>{"use strict";r.d(t,{T:()=>l,v:()=>n});var n,a=r(70655),o=r(92950),i=r(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const l=e=>{var{children:t=null,className:r="",component:l=n.li}=e,s=(0,a.__rest)(e,["children","className","component"]);const c=l;return o.createElement(c,Object.assign({},s,{className:(0,i.i)(r)}),t)};l.displayName="TextListItem"},54918:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},67230:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,n,a){var o=("object"==typeof n?n.pathname:n)||"",i=/^\//.test(o),l=a?"/preview":"",s=t||e.getApp(),c=i?[l,e.getBundle(),s,o.replace(/^\//,"")].join("/"):o;return"object"==typeof n?r(r({},n),{pathname:c}):c}},45250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(71002),a=r(15861),o=r(92950),i=r.n(o),l=r(45697),s=r.n(l),c=r(33261),u=r(90218),d=r(81005),f=r(63441),p=r(60261),h=r(99166);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),l=new F(n||[]);return a(i,"_invoke",{value:w(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function h(){}function v(){}var g={};c(g,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==t&&r.call(b,i)&&(g=b);var E=v.prototype=p.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function o(a,i,l,s){var c=d(e[a],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,l,s)}),(function(e){o("throw",e,l,s)})):t.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return o("throw",e,l,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,a(E,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},O(S.prototype),c(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var v=function(){var e=(0,a.Z)(m().mark((function e(){var t,r=arguments;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=r.length>0&&void 0!==r[0]?r[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,f.Tb)(t.trim());case 5:if(!0!==e.sent){e.next=8;break}throw"Group name already exists";case 8:return e.abrupt("return",void 0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,n=e.reloadData,a=e.modalBefore,l=void 0!==a&&a,s=e.setterOfModalBefore,m=(0,p.useDispatch)(),g=(0,o.useCallback)((function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,d.Z)(m,(function(){return(0,f.sS)(e)}),t)}),[t]),y=(0,o.useMemo)((function(){var e=(0,h.Z)(v,500,{onlyResolvesLast:!1});return(0,c.Z$)(e)}),[]);return i().createElement(u.Z,{isModalOpen:t,closeModal:function(){l?(r(!1),s(!0)):r(!1)},title:"Create group",submitLabel:"Create",schema:y,reloadData:n,onSubmit:g})};const y=g;g.propTypes={isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func,modalBefore:s().bool,setterOfModalBefore:s().func}},48524:(e,t,r)=>{"use strict";r.d(t,{e:()=>n.Z});var n=r(25818)},19322:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var n=r(29439),a=r(87462),o=r(45987),i=r(92950),l=r.n(i),s=r(45697),c=r.n(s),u=r(60261),d=r(94474),f=r(83215),p=r(39903),h=r(17499),m=r(13784),v=r(48524),g=r(55140),y=r(90218),b=r(63441),E=r(81005),O=r(47173),S=r(68340),w=r(95249),_=r(58061),Z=function(e){var t=e.closeModal;return(0,w.c$)([_.Kl]).hasAccess?l().createElement(l().Fragment,null,l().createElement(S.x,null,"Or"),l().createElement(O.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create a new group")):l().createElement(l().Fragment,null)};Z.propTypes={closeModal:c().func};var x=r(33261),F=r(45250),L=function(e){var t=e.isModalOpen,r=e.setIsModalOpen,a=e.modalState,o=e.reloadData,s=(0,u.useDispatch)(),c=(0,g.Z)(),d=(0,i.useState)(!1),f=(0,n.Z)(d,2),p=f[0],h=f[1];return l().createElement(l().Fragment,null,!p&&l().createElement(y.Z,{isModalOpen:t,closeModal:function(){return r(!1)},title:"Add to group",submitLabel:"Add",schema:(0,x.qP)(a,c),additionalMappers:{"create-group-btn":{component:Z,closeModal:function(){return h(!0)}}},onSubmit:function(e){var t=JSON.parse(e.group),r={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add ".concat(a.length>1?"".concat(a.length," systems"):a[0].display_name," to ").concat(t.name)}};(0,E.Z)(s,(function(){return(0,b.wA)(t.id,a.map((function(e){return e.id})))}),r)},reloadData:o,modalClassName:"add-selected-to-group-modal"}),p&&l().createElement(F.Z,{isModalOpen:p,setIsModalOpen:h,modalBefore:!0,setterOfModalBefore:r}))};L.propTypes={modalState:c().arrayOf(c().shape({display_name:c().string,id:c().string})).isRequired,isModalOpen:c().bool,setIsModalOpen:c().func,reloadData:c().func};const k=L;var A=r(57624),T=r(41054),I=r(42637),N=r(44908),C=r.n(N),P=r(76440),M=r.n(P);var R=r(94654),D=r.n(R),j=function(e){var t=e.category;return e.values.map((function(e){var r=e.tagKey,n=e.value;return"".concat(t?"".concat(t,"/"):"").concat(r).concat(n?"=".concat(n):"")}))},B={staleFilter:function(e,t){return e.staleFilter.forEach((function(e){return t.append("status",e)}))},osFilter:function(e,t){var r=e.osFilter;null==r||r.forEach((function(e){t.append("operating_system","".concat(e.osName).concat(e.value))}))},registeredWithFilter:function(e,t){var r=e.registeredWithFilter;return null==r?void 0:r.forEach((function(e){return t.append("source",e)}))},value:function(e,t){var r=e.value,n=e.filter;return"hostname_or_id"===r&&Boolean(n)&&t.append("hostname_or_id",n)},tagFilters:function(e,t){var r=e.tagFilters;return(null==r?void 0:r.length)>0&&t.append("tags",D()(r,j))},rhcdFilter:function(e,t){var r=e.rhcdFilter;return null==r?void 0:r.forEach((function(e){return t.append(m.Ih,e)}))},lastSeenFilter:function(e,t){var r,n=e.lastSeenFilter;return null===(r=Object.keys(n||{}))||void 0===r?void 0:r.forEach((function(e){return"mark"===e&&t.append("last_seen",n[e])}))},updateMethodFilter:function(e,t){var r=e.updateMethodFilter;return null==r?void 0:r.forEach((function(e){return t.append(m.cE,e)}))},hostGroupFilter:function(e,t){var r=e.hostGroupFilter;return null==r?void 0:r.forEach((function(e){return t.append(m.e2,e)}))}},G=r(54629),q=["selectedSystems"],H=function(e){var t=e.selectedSystems,r=(0,o.Z)(e,q),n=t.map((function(e){var t,r,n=e.groups;return(0,_.BP)(null!==(t=null==n||null===(r=n[0])||void 0===r?void 0:r.id)&&void 0!==t?t:null)}));return l().createElement(I.K,(0,a.Z)({requiredPermissions:n,noAccessTooltip:_.qN,checkAll:!0,ouiaId:"bulk-delete-button"},r),"Delete")};H.propTypes={selectedSystems:c().array};var K=function(e){var t,r=e.status,o=e.source,s=e.filterbyName,c=e.tagsFilter,y=e.operatingSystem,b=e.rhcdFilter,E=e.updateMethodFilter,O=e.lastSeenFilter,S=e.page,w=e.perPage,Z=e.initialLoading,x=e.hasAccess,F=e.hostGroupFilter,L=M()(),N=(0,g.Z)(),P=(0,i.useRef)(null),R=(0,i.useState)(!1),D=(0,n.Z)(R,2),j=D[0],q=D[1],K=(0,i.useState)({}),$=(0,n.Z)(K,2),J=$[0],Y=$[1],z=(0,i.useState)((0,m.h3)(r,o,c,s,y,b,E,F,O)),U=(0,n.Z)(z,2),V=U[0],W=U[1],Q=(0,i.useState)(!1),X=(0,n.Z)(Q,2),ee=X[0],te=X[1],re=(0,i.useState)(!1),ne=(0,n.Z)(re,2),ae=ne[0],oe=ne[1],ie=(0,i.useState)(!1),le=(0,n.Z)(ie,2),se=le[0],ce=le[1],ue=(0,G.Z)(),de=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.rows}),u.shallowEqual),fe=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.loaded})),pe=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.selected})),he=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.total})),me=(0,u.useDispatch)(),ve=(0,A.P)(pe,ue,he,de,fe);(0,i.useEffect)((function(){return N.updateDocumentTitle("Systems | Red Hat Insights"),N.appAction("system-list"),N.appObjectId(),me(d.L1()),(w||S)&&me(d.Jr(Array.isArray(S)?S[0]:S,Array.isArray(w)?w[0]:w)),function(){me(d.s$())}}),[]);var ge=function(){return pe?pe.size:0},ye=function(e,t,r,n,a){return(0,i.useCallback)((function(o){var i,s,c,u,d,f,p,h,m,v,g=[{title:l().createElement(I.Z,{key:"".concat(o.id,"-edit"),onClick:function(){e(o),t((function(){return!0}))},requiredPermissions:[(0,_.BP)(null!==(i=null===(s=o.groups)||void 0===s||null===(c=s[0])||void 0===c?void 0:c.id)&&void 0!==i?i:null)],noAccessTooltip:_.JK},"Edit"),style:{padding:0}},{title:l().createElement(I.Z,{key:"".concat(o.id,"-delete"),onClick:function(){e(o),r((function(){return!0}))},requiredPermissions:[(0,_.BP)(null!==(u=null===(d=o.groups)||void 0===d||null===(f=d[0])||void 0===f?void 0:f.id)&&void 0!==u?u:null)],noAccessTooltip:_.JK},"Delete"),style:{padding:0}}],y=[{title:l().createElement(I.Z,{key:"".concat(o.id,"-add-to-group"),onClick:function(){e([o]),a(!0)},requiredPermissions:[_.Kl],noAccessTooltip:_.tl,isAriaDisabled:o.groups.length>0,ignoreResourceDefinitions:!0},"Add to group"),style:{padding:0}},{title:l().createElement(I.Z,{key:"".concat(o.id,"-remove-from-group"),onClick:function(){e([o]),n(!0)},requiredPermissions:void 0!==(null==o||null===(p=o.groups)||void 0===p||null===(h=p[0])||void 0===h?void 0:h.id)?(0,_.r)(o.groups[0].id):[],noAccessTooltip:_.EO,isAriaDisabled:0===o.groups.length,override:void 0===(null==o||null===(m=o.groups)||void 0===m||null===(v=m[0])||void 0===v?void 0:v.id)||void 0},"Remove from group"),style:{padding:0}}];return[].concat(y,g)}),[])}(Y,te,q,ce,oe);return l().createElement(i.Fragment,null,l().createElement(v.e,{hasAccess:x,isRbacEnabled:!0,customFilters:{filters:V,globalFilter:ue},isFullView:!0,showTags:!0,onRefresh:function(e,t){W(null==e?void 0:e.filters);var r=new URLSearchParams;!function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(t){Object.keys(t).forEach((function(r){var n;null==B||null===(n=B[r])||void 0===n||n.call(B,t,e)}))}))}(r,null==e?void 0:e.filters),function(e,t,r){var n=new URLSearchParams(location.search),a=void 0!==t?t:n.get("page"),o=void 0!==r?r:n.get("per_page");!isNaN(parseInt(a))&&e.append("page",a),!isNaN(parseInt(o))&&e.append("per_page",o)}(r,null==e?void 0:e.page,null==e?void 0:e.per_page);var n=r.toString();L({search:n,hash:location.hash}),t&&t(e)},hasCheckbox:!0,autoRefresh:!0,ignoreRefresh:!0,initialLoading:Z,ref:P,tableProps:{actionResolver:ye,canSelectAll:!1},actionsConfig:{actions:[l().createElement(H,{key:"bulk-systems-delete",selectedSystems:Array.from((null==pe||null===(t=pe.values)||void 0===t?void 0:t.call(pe))||[]),onClick:function(){Y(Array.from(pe.values())),q(!0)},variant:"secondary",isAriaDisabled:0===ge()}),{label:l().createElement(I.Z,{key:"bulk-add-to-group",requiredPermissions:[_.Kl],isAriaDisabled:!(ge()>0&&Array.from(pe.values()).every((function(e){return 0===e.groups.length}))),noAccessTooltip:_.tl,onClick:function(){Y(Array.from(pe.values())),oe(!0)},ignoreResourceDefinitions:!0},"Add to group"),props:{style:{padding:0}}},{label:l().createElement(I.Z,(0,a.Z)({key:"bulk-remove-from-group",requiredPermissions:void 0!==pe?Array.from(pe.values()).flatMap((function(e){var t,r=e.groups;return void 0!==(null==r||null===(t=r[0])||void 0===t?void 0:t.id)?(0,_.r)(r[0].id):null})).filter(Boolean):[],isAriaDisabled:!(ge()>0&&Array.from(pe.values()).some((function(e){return e.groups.length>0}))&&1===C()(Array.from(pe.values()).filter((function(e){return e.groups.length>0})).map((function(e){return e.groups[0].name}))).length),noAccessTooltip:_.tl,onClick:function(){Y(Array.from(pe.values())),ce(!0)}},void 0===pe?{override:!0}:{},{checkAll:!0}),"Remove from group"),props:{style:{padding:0}}}]},bulkSelect:ve,showCentosVersions:!0,showNoGroupOption:!0}),l().createElement(p.default,{className:"sentry-mask data-hj-suppress",handleModalToggle:q,isModalOpen:j,currentSytems:J,onConfirm:function(){var e,t;Array.isArray(J)?(t=J.map((function(e){return e.id})),e=J.length>1?"".concat(J.length," systems"):J[0].display_name):(e=J.display_name,t=[J.id]),me((0,f.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(e," started."),dismissable:!1})),me(d.Ks(t,e)),q(!1)}}),l().createElement(h.TextInputModal,{title:"Edit display name",isOpen:ee,value:J.display_name,onCancel:function(){return te(!1)},onSubmit:function(e){me(d.$Y(J.id,e)),te(!1)}}),ae&&l().createElement(k,{isModalOpen:ae,setIsModalOpen:oe,modalState:J,reloadData:function(){ge()>0&&me(d.CL(-1,!1)),setTimeout((function(){return P.current.onRefreshData(V,!1,!0)}),500)}}),se&&l().createElement(T.Z,{isModalOpen:se,setIsModalOpen:ce,modalState:J,reloadData:function(){ge()>0&&me(d.CL(-1,!1)),setTimeout((function(){return P.current.onRefreshData(V,!1,!0)}),500)}}))};K.propTypes={status:c().oneOfType([c().arrayOf(c().string),c().string]),source:c().oneOfType([c().arrayOf(c().string),c().string]),operatingSystem:c().oneOfType([c().arrayOf(c().string),c().string]),filterbyName:c().arrayOf(c().string),tagsFilter:c().any,page:c().arrayOf(c().oneOfType([c().string,c().number])),perPage:c().arrayOf(c().oneOfType([c().string,c().number])),initialLoading:c().bool,rhcdFilter:c().oneOfType([c().arrayOf(c().string),c().string]),updateMethodFilter:c().oneOfType([c().arrayOf(c().string),c().string]),hasAccess:c().bool,hostGroupFilter:c().oneOfType([c().arrayOf(c().string),c().string]),lastSeenFilter:c().oneOfType([c().arrayOf(c().string),c().string])},K.defaultProps={initialLoading:!0};const $=K},17499:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TextInputModal:()=>c.Z,default:()=>u});var n=r(87462),a=r(92950),o=r.n(a),i=r(60261),l=r(43107),s=r(79161),c=r(55426);const u=function(e){var t=(0,i.useSelector)((function(e){var t=e.systemProfileStore;return null==t?void 0:t.systemProfile})),r="edge"===(null==t?void 0:t.host_type),a=(0,s.Z)("edgeParity.inventory-system-detail"),c=(0,s.Z)("edgeParity.inventory-list");return o().createElement(l.default,(0,n.Z)({},e,{showImageDetails:a&&c&&r}))}},44908:(e,t,r)=>{var n=r(45652);e.exports=function(e){return e&&e.length?n(e):[]}}}]);