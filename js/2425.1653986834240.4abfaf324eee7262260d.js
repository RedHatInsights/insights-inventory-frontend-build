/*! For license information please see 2425.1653986834240.4abfaf324eee7262260d.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[2425],{29390:(e,t,a)=>{a.d(t,{Y:()=>s});var i=a(70655),n=a(92950),r=a(38296),o=a(10792);const s=e=>{var{children:t=null,className:a=""}=e,s=(0,i.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({},s,{className:(0,r.i)(o.Z.backdrop,a)}),t)};s.displayName="Backdrop"},66435:(e,t,a)=>{a.d(t,{M5:()=>y,oo:()=>v,lY:()=>b});var i=a(70655),n=a(92950),r=a(72585),o=a(38296),s=a(92607),l=a(35224),c=a(41724),d=a(20941),p=a(93174),u=a(9003),m=a(47173);const f=e=>{var{onClick:t,id:a,textId:r,contentId:o,isExpanded:s=!1}=e,l=(0,i.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(m.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${r}`,"aria-controls":`${a} ${o}`,"aria-expanded":s},l),s?n.createElement(u.ZP,{"aria-hidden":"true"}):n.createElement(p.ZP,{"aria-hidden":"true"}))};f.displayName="ClipboardCopyToggle";class h extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:s,isReadOnly:l,isCode:c}=e,d=(0,i.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,o.i)(r.Z.clipboardCopyExpandableContent,t),onInput:e=>s(e.target.innerText,e),contentEditable:!l},d),c?n.createElement("pre",null,a):a)}}h.displayName="ClipboardCopyExpanded",h.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1};const b=(e,t)=>{const a=e.currentTarget.parentElement,i=document.createElement("textarea");i.value=t.toString(),a.appendChild(i),i.select(),document.execCommand("copy"),a.removeChild(i)};var v;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(v||(v={}));class y extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,isReadOnly:l,isCode:p,isBlock:u,exitDelay:m,maxWidth:b,entryDelay:v,switchDelay:y,onCopy:g,hoverTip:x,clickTip:E,textAriaLabel:C,toggleAriaLabel:O,variant:N,position:I,className:_,additionalActions:w}=e,k=(0,i.__rest)(e,["isExpanded","onChange","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions"]);return n.createElement("div",Object.assign({className:(0,o.i)(r.Z.clipboardCopy,"inline-compact"===N&&r.Z.modifiers.inline,u&&r.Z.modifiers.block,this.state.expanded&&r.Z.modifiers.expanded,_)},k),"inline-compact"===N&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,!p&&n.createElement("span",{className:(0,o.i)(r.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),p&&n.createElement("code",{className:(0,o.i)(r.Z.clipboardCopyText,r.Z.modifiers.code),id:`text-input-${e}`},this.state.text),n.createElement("span",{className:(0,o.i)(r.Z.clipboardCopyActions)},n.createElement("span",{className:(0,o.i)(r.Z.clipboardCopyActionsItem)},n.createElement(d.u,{variant:"plain",exitDelay:m,entryDelay:v,maxWidth:b,position:I,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":x,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),g(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),y)}))}},this.state.copied?E:x)),w&&w)))),"inline-compact"!==N&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,o.i)(r.Z.clipboardCopyGroup)},"expansion"===N&&n.createElement(f,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":O}),n.createElement(s.oi,{isReadOnly:l||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":C}),n.createElement(d.u,{exitDelay:m,entryDelay:v,maxWidth:b,position:I,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":x,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),g(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),y)}))}},this.state.copied?E:x)),this.state.expanded&&n.createElement(h,{isReadOnly:l,isCode:p,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}y.displayName="ClipboardCopy",y.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:l.D.top,maxWidth:"150px",exitDelay:1600,entryDelay:300,switchDelay:2e3,onCopy:b,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null}},20941:(e,t,a)=>{a.d(t,{u:()=>l});var i=a(70655),n=a(92950),r=a(44008),o=a(47173),s=a(35224);const l=e=>{var{onClick:t,exitDelay:a=0,entryDelay:l=300,maxWidth:c="100px",position:d="top","aria-label":p="Copyable input",id:u,textId:m,children:f,variant:h="control"}=e,b=(0,i.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant"]);return n.createElement(s.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:l,maxWidth:c,position:d,content:n.createElement("div",null,f)},n.createElement(o.zx,Object.assign({type:"button",variant:h,onClick:t,"aria-label":p,id:u,"aria-labelledby":`${u} ${m}`},b),n.createElement(r.ZP,null)))};l.displayName="ClipboardCopyButton"},80236:(e,t,a)=>{a.d(t,{v:()=>i,u:()=>m});var i,n=a(70655),r=a(92950),o=a(12181),s=a(64190),l=a(80164),c=a(38296),d=a(10792),p=a(28531),u=a(62472);!function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(i||(i={}));class m extends r.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:t}=this.props;e.keyCode===s.nx.ESCAPE_KEY&&this.props.isOpen&&(t?t(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:t}=this.props,a=this.getElement(t).children;for(const t of Array.from(a))t!==this.state.container&&(e?t.setAttribute("aria-hidden",""+e):t.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const t=m.currentId++,a=t+1,i=t+2;this.boxId=e.id||`pf-modal-part-${t}`,this.labelId=`pf-modal-part-${a}`,this.descriptorId=`pf-modal-part-${i}`,this.state={container:void 0,ouiaStateId:(0,u.ql)(m.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:t,"aria-label":a,"aria-labelledby":i,hasNoBodyWrapper:n,header:r}=this.props,o=this.getElement(e),s=document.createElement("div");this.setState({container:s}),o.appendChild(s),o.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?o.classList.add((0,c.i)(d.Z.backdropOpen)):o.classList.remove((0,c.i)(d.Z.backdropOpen)),this.isEmpty(t)&&this.isEmpty(a)&&this.isEmpty(i)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(a)&&this.isEmpty(i)&&(n||r)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,t=this.getElement(e);this.props.isOpen?(t.classList.add((0,c.i)(d.Z.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(t.classList.remove((0,c.i)(d.Z.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,t=this.getElement(e);this.state.container&&t.removeChild(this.state.container),t.removeEventListener("keydown",this.handleEscKeyClick,!1),t.classList.remove((0,c.i)(d.Z.backdropOpen))}render(){const e=this.props,{appendTo:t,onEscapePress:a,"aria-labelledby":i,"aria-label":s,"aria-describedby":c,title:d,titleIconVariant:u,titleLabel:m,ouiaId:f,ouiaSafe:h}=e,b=(0,n.__rest)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:v}=this.state;return l.Nq&&v?o.createPortal(r.createElement(p.h,Object.assign({},b,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:d,titleIconVariant:u,titleLabel:m,"aria-label":s,"aria-describedby":c,"aria-labelledby":i,ouiaId:void 0!==f?f:this.state.ouiaStateId,ouiaSafe:h})),v):null}}m.displayName="Modal",m.currentId=0,m.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},2914:(e,t,a)=>{a.d(t,{c:()=>l});var i=a(70655),n=a(92950),r=a(38296),o=a(11997);const s="--pf-c-modal-box--m-align-top--spacer",l=e=>{var{children:t,className:a="",variant:l="default",position:c,positionOffset:d,"aria-labelledby":p,"aria-label":u="","aria-describedby":m,style:f}=e,h=(0,i.__rest)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((f=f||{})[s]=d),n.createElement("div",Object.assign({},h,{role:"dialog","aria-label":u||null,"aria-labelledby":p||null,"aria-describedby":m,"aria-modal":"true",className:(0,r.i)(o.Z.modalBox,a,"top"===c&&o.Z.modifiers.alignTop,"large"===l&&o.Z.modifiers.lg,"small"===l&&o.Z.modifiers.sm,"medium"===l&&o.Z.modifiers.md),style:f}),t)};l.displayName="ModalBox"},92434:(e,t,a)=>{a.d(t,{$:()=>s});var i=a(70655),n=a(92950),r=a(38296),o=a(11997);const s=e=>{var{children:t=null,className:a=""}=e,s=(0,i.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({},s,{className:(0,r.i)(o.Z.modalBoxBody,a)}),t)};s.displayName="ModalBoxBody"},93884:(e,t,a)=>{a.d(t,{I:()=>s});var i=a(70655),n=a(92950),r=a(47173),o=a(24307);const s=e=>{var{className:t="",onClose:a=(()=>{})}=e,s=(0,i.__rest)(e,["className","onClose"]);return n.createElement(r.zx,Object.assign({className:t,variant:"plain",onClick:a,"aria-label":"Close"},s),n.createElement(o.ZP,null))};s.displayName="ModalBoxCloseButton"},51898:(e,t,a)=>{a.d(t,{t:()=>s});var i=a(70655),n=a(92950),r=a(38296),o=a(11997);const s=e=>{var{children:t=null,className:a=""}=e,s=(0,i.__rest)(e,["children","className"]);return n.createElement("footer",Object.assign({},s,{className:(0,r.i)(o.Z.modalBoxFooter,a)}),t)};s.displayName="ModalBoxFooter"},80478:(e,t,a)=>{a.d(t,{R:()=>s});var i=a(70655),n=a(92950),r=a(38296),o=a(11997);const s=e=>{var{children:t=null,className:a="",help:s=null}=e,l=(0,i.__rest)(e,["children","className","help"]);return n.createElement("header",Object.assign({className:(0,r.i)(o.Z.modalBoxHeader,s&&o.Z.modifiers.help,a)},l),s&&n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.i)(o.Z.modalBoxHeaderMain)},t),n.createElement("div",{className:"pf-c-modal-box__header-help"},s)),!s&&t)};s.displayName="ModalBoxHeader"},28531:(e,t,a)=>{a.d(t,{h:()=>k});var i=a(70655),n=a(92950),r=a(97681),o=a(11997),s=a(25687),l=a(38296),c=a(62472),d=a(29390),p=a(92434),u=a(93884),m=a(2914),f=a(51898);const h=e=>{var{children:t=null,className:a="",id:r=""}=e,s=(0,i.__rest)(e,["children","className","id"]);return n.createElement("div",Object.assign({},s,{id:r,className:(0,l.i)(o.Z.modalBoxDescription,a)}),t)};h.displayName="ModalBoxDescription";var b=a(80478),v=a(63339),y=a(80164),g=a(35224),x=a(68778),E=a(43047),C=a(69957),O=a(53688),N=a(34143),I=a(6551);const _=e=>["success","danger","warning","info","default"].includes(e),w=e=>{var{className:t="",id:a,title:r,titleIconVariant:s,titleLabel:c=""}=e,d=(0,i.__rest)(e,["className","id","title","titleIconVariant","titleLabel"]);const[p,u]=n.useState(!1),m=n.useRef(),f=c||(_(s)?`${(0,y.kC)(s)} alert:`:c),h={success:n.createElement(x.ZP,null),danger:n.createElement(E.ZP,null),warning:n.createElement(C.ZP,null),info:n.createElement(O.ZP,null),default:n.createElement(N.ZP,null)},b=!_(s)&&s;(0,I.L)((()=>{u(m.current&&m.current.offsetWidth<m.current.scrollWidth)}),[]);const w=n.createElement("h1",Object.assign({id:a,ref:m,className:(0,l.i)(o.Z.modalBoxTitle,s&&o.Z.modifiers.icon,t)},d),s&&n.createElement("span",{className:(0,l.i)(o.Z.modalBoxTitleIcon)},_(s)?h[s]:n.createElement(b,null)),f&&n.createElement("span",{className:(0,l.i)(v.Z.screenReader)},f),n.createElement("span",{className:(0,l.i)(o.Z.modalBoxTitleText)},r));return p?n.createElement(g.u,{content:r,isVisible:!0},w):w};w.displayName="ModalBoxTitle";const k=e=>{var{children:t,className:a="",isOpen:v=!1,header:y=null,help:g=null,description:x=null,title:E="",titleIconVariant:C=null,titleLabel:O="","aria-label":N="","aria-describedby":I,"aria-labelledby":T,showClose:Z=!0,footer:S=null,actions:D=[],onClose:L=(()=>{}),variant:P="default",position:B,positionOffset:F,width:j=-1,boxId:R,labelId:A,descriptorId:M,disableFocusTrap:$=!1,hasNoBodyWrapper:G=!1,ouiaId:W,ouiaSafe:z=!0}=e,U=(0,i.__rest)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!v)return null;const V=y?n.createElement(b.R,{help:g},y):E&&n.createElement(b.R,{help:g},n.createElement(w,{title:E,titleIconVariant:C,titleLabel:O,id:A}),x&&n.createElement(h,{id:M},x)),H=S?n.createElement(f.t,null,S):D.length>0&&n.createElement(f.t,null,D),Y=G?t:n.createElement(p.$,Object.assign({},U,!x&&!I&&{id:M}),t),q=-1===j?{}:{width:j},K=n.createElement(m.c,Object.assign({id:R,style:q,className:(0,l.i)(a,_(C)&&o.Z.modifiers[C]),variant:P,position:B,positionOffset:F,"aria-label":N,"aria-labelledby":(()=>{if(null===T)return null;const e=[];return""!==(N&&R)&&e.push(N&&R),T&&e.push(T),E&&e.push(A),e.join(" ")})(),"aria-describedby":I||(G?null:M)},(0,c.dp)(k.displayName,W,z)),Z&&n.createElement(u.I,{onClose:L}),V,Y,H);return n.createElement(d.Y,null,n.createElement(r.i,{active:!$,focusTrapOptions:{clickOutsideDeactivates:!0},className:(0,l.i)(s.Z.bullseye)},K))};k.displayName="ModalContent"},97681:(e,t,a)=>{a.d(t,{i:()=>C});var i,n=a(70655),r=a(92950),o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],s=o.join(","),l="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},u=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var a=l.call(e,"details>summary:first-of-type")?e.parentElement:e;if(l.call(a,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var i=e.getBoundingClientRect(),n=i.width,r=i.height;return 0===n&&0===r}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(p(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var a=0;a<t.children.length;a++){var i=t.children.item(a);if("LEGEND"===i.tagName)return!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(!u(e,t)||function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,a=e.form||e.ownerDocument,i=function(e){return a.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var n=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]}(t,e.form);return!n||n===e}(e)}(t)||c(t)<0)},f=o.concat("iframe").join(","),h=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==l.call(e,f)&&u(t,e)};function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var y,g=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1];t!==e&&t.pause()}var a=y.indexOf(e);-1===a||y.splice(a,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),x=function(e){return setTimeout(e,0)},E=function(e,t){var a,n=document,r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},p=function(e){return o.containers.some((function(t){return t.contains(e)}))},u=function(e){var t=r[e];if(!t)return null;var a=t;if("string"==typeof t&&!(a=n.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(a=t()))throw new Error("`".concat(e,"` did not return a node"));return a},f=function(){var e;if(null!==u("initialFocus"))e=u("initialFocus");else if(p(n.activeElement))e=n.activeElement;else{var t=o.tabbableGroups[0];e=t&&t.firstTabbableNode||u("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},y=function(){if(o.tabbableGroups=o.containers.map((function(e){var t,a,i,n,r,o,p,u=(a=[],i=[],(n=e,r=(t=t||{}).includeContainer,o=m.bind(null,t),p=Array.prototype.slice.apply(n.querySelectorAll(s)),r&&l.call(n,s)&&p.unshift(n),p.filter(o)).forEach((function(e,t){var n=c(e);0===n?a.push(e):i.push({documentOrder:t,tabIndex:n,node:e})})),i.sort(d).map((function(e){return e.node})).concat(a));if(u.length>0)return{firstTabbableNode:u[0],lastTabbableNode:u[u.length-1]}})).filter((function(e){return!!e})),o.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},E=function e(t){t!==n.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!r.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},C=function(e){p(e.target)||(r.clickOutsideDeactivates?a.deactivate({returnFocus:r.returnFocusOnDeactivate&&!h(e.target)}):r.allowOutsideClick&&("boolean"==typeof r.allowOutsideClick?r.allowOutsideClick:r.allowOutsideClick(e))||e.preventDefault())},O=function(e){var t=p(e.target);t||e.target instanceof Document?t&&(o.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),E(o.mostRecentlyFocusedNode||f()))},N=function(e){if(!1!==r.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void a.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){y();var t=null;if(o.tabbableGroups.length>0)if(e.shiftKey){var a=o.tabbableGroups.findIndex((function(t){var a=t.firstTabbableNode;return e.target===a}));if(a>=0){var i=0===a?o.tabbableGroups.length-1:a-1;t=o.tabbableGroups[i].lastTabbableNode}}else{var n=o.tabbableGroups.findIndex((function(t){var a=t.lastTabbableNode;return e.target===a}));if(n>=0){var r=n===o.tabbableGroups.length-1?0:n+1;t=o.tabbableGroups[r].firstTabbableNode}}else t=u("fallbackFocus");t&&(e.preventDefault(),E(t))}(e)},I=function(e){r.clickOutsideDeactivates||p(e.target)||r.allowOutsideClick&&("boolean"==typeof r.allowOutsideClick?r.allowOutsideClick:r.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},_=function(){if(o.active)return g.activateTrap(a),i=r.delayInitialFocus?x((function(){E(f())})):E(f()),n.addEventListener("focusin",O,!0),n.addEventListener("mousedown",C,{capture:!0,passive:!1}),n.addEventListener("touchstart",C,{capture:!0,passive:!1}),n.addEventListener("click",I,{capture:!0,passive:!1}),n.addEventListener("keydown",N,{capture:!0,passive:!1}),a},w=function(){if(o.active)return n.removeEventListener("focusin",O,!0),n.removeEventListener("mousedown",C,!0),n.removeEventListener("touchstart",C,!0),n.removeEventListener("click",I,!0),n.removeEventListener("keydown",N,!0),a};return(a={activate:function(e){if(o.active)return this;y(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:r.onActivate;return t&&t(),_(),this},deactivate:function(e){if(!o.active)return this;clearTimeout(i),w(),o.active=!1,o.paused=!1,g.deactivateTrap(a);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:r.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:r.returnFocusOnDeactivate)&&x((function(){var e;E((e=o.nodeFocusedBeforeActivation,u("setReturnFocus")||e))})),this},pause:function(){return o.paused||!o.active||(o.paused=!0,w()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,y(),_(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return o.containers=t.map((function(e){return"string"==typeof e?n.querySelector(e):e})),o.active&&y(),this}}).updateContainerElements(e),a};class C extends r.Component{constructor(e){super(e),this.divRef=r.createRef(),"undefined"!=typeof document&&(this.previouslyFocusedElement=document.activeElement)}componentDidMount(){this.focusTrap=E(this.divRef.current,Object.assign(Object.assign({},this.props.focusTrapOptions),{returnFocusOnDeactivate:!1})),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}componentDidUpdate(e){e.active&&!this.props.active?this.focusTrap.deactivate():!e.active&&this.props.active&&this.focusTrap.activate(),e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}componentWillUnmount(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus({preventScroll:this.props.preventScrollOnDeactivate})}render(){const e=this.props,{children:t,className:a,focusTrapOptions:i,active:o,paused:s,preventScrollOnDeactivate:l}=e,c=(0,n.__rest)(e,["children","className","focusTrapOptions","active","paused","preventScrollOnDeactivate"]);return r.createElement("div",Object.assign({ref:this.divRef,className:a},c),t)}}C.displayName="FocusTrap",C.defaultProps={active:!0,paused:!1,focusTrapOptions:{},preventScrollOnDeactivate:!1}},41724:(e,t,a)=>{a.d(t,{w:()=>r});var i=a(92950);let n=0;class r extends i.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${n++}`}render(){return this.props.children(this.id)}}r.displayName="GenerateId",r.defaultProps={prefix:"pf-random-id-"}},48140:(e,t,a)=>{a.d(t,{a:()=>s});var i=a(70655),n=a(92950),r=a(38296),o=a(86192);const s=e=>{var{hasGutter:t,className:a="",children:s=null}=e,l=(0,i.__rest)(e,["hasGutter","className","children"]);return n.createElement("div",Object.assign({},l,{className:(0,r.i)(o.Z.level,t&&o.Z.modifiers.gutter,a)}),s)};s.displayName="Level"},86050:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(70655),n=a(92950);const r=e=>{var{children:t=null}=e,a=(0,i.__rest)(e,["children"]);return n.createElement("div",Object.assign({},a),t)};r.displayName="LevelItem"},79851:(e,t,a)=>{a.d(t,{P:()=>s});var i=a(70655),n=a(92950),r=a(48271),o=a(38296);const s=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:s="",children:l=null,component:c="div"}=e,d=(0,i.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const p=c;return n.createElement(p,Object.assign({},d,{className:(0,o.i)(r.Z.split,t&&r.Z.modifiers.gutter,a&&r.Z.modifiers.wrap,s)}),l)};s.displayName="Split"},34512:(e,t,a)=>{a.d(t,{J:()=>s});var i=a(70655),n=a(92950),r=a(48271),o=a(38296);const s=e=>{var{isFilled:t=!1,className:a="",children:s=null}=e,l=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},l,{className:(0,o.i)(r.Z.splitItem,t&&r.Z.modifiers.fill,a)}),s)};s.displayName="SplitItem"},49739:(e,t,a)=>{a.d(t,{K:()=>s});var i=a(70655),n=a(92950),r=a(15957),o=a(38296);const s=e=>{var{hasGutter:t=!1,className:a="",children:s=null,component:l="div"}=e,c=(0,i.__rest)(e,["hasGutter","className","children","component"]);const d=l;return n.createElement(d,Object.assign({},c,{className:(0,o.i)(r.Z.stack,t&&r.Z.modifiers.gutter,a)}),s)};s.displayName="Stack"},83826:(e,t,a)=>{a.d(t,{v:()=>s});var i=a(70655),n=a(92950),r=a(15957),o=a(38296);const s=e=>{var{isFilled:t=!1,className:a="",children:s=null}=e,l=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},l,{className:(0,o.i)(r.Z.stackItem,t&&r.Z.modifiers.fill,a)}),s)};s.displayName="StackItem"},93174:(e,t,a)=>{a.d(t,{cl:()=>n,oR:()=>r,ZP:()=>o});var i=a(40400);const n={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},34143:(e,t,a)=>{a.d(t,{Er:()=>n,Dk:()=>r,ZP:()=>o});var i=a(40400);const n={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},68778:(e,t,a)=>{a.d(t,{GR:()=>n,rE:()=>r,ZP:()=>o});var i=a(40400);const n={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},44008:(e,t,a)=>{a.d(t,{Fg:()=>n,TI:()=>r,ZP:()=>o});var i=a(40400);const n={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},43047:(e,t,a)=>{a.d(t,{MX:()=>n,$O:()=>r,ZP:()=>o});var i=a(40400);const n={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},69957:(e,t,a)=>{a.d(t,{RI:()=>n,LP:()=>r,ZP:()=>o});var i=a(40400);const n={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},53688:(e,t,a)=>{a.d(t,{nQ:()=>n,uM:()=>r,ZP:()=>o});var i=a(40400);const n={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},r=(0,i.IU)(n),o=r},10792:(e,t,a)=>{a(70347),t.Z={backdrop:"pf-c-backdrop",backdropOpen:"pf-c-backdrop__open"}},72585:(e,t,a)=>{a(37625),t.Z={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"}}},11997:(e,t,a)=>{a(25238),t.Z={button:"pf-c-button",modalBox:"pf-c-modal-box",modalBoxBody:"pf-c-modal-box__body",modalBoxDescription:"pf-c-modal-box__description",modalBoxFooter:"pf-c-modal-box__footer",modalBoxHeader:"pf-c-modal-box__header",modalBoxHeaderMain:"pf-c-modal-box__header-main",modalBoxTitle:"pf-c-modal-box__title",modalBoxTitleIcon:"pf-c-modal-box__title-icon",modalBoxTitleText:"pf-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",default:"pf-m-default",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"}}},86192:(e,t,a)=>{a(74181),t.Z={level:"pf-l-level",modifiers:{gutter:"pf-m-gutter"}}},48271:(e,t,a)=>{a(16166),t.Z={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},15957:(e,t,a)=>{a(53519),t.Z={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},63339:(e,t,a)=>{a(11177),t.Z={hidden:"pf-u-hidden",hiddenOnLg:"pf-u-hidden-on-lg",hiddenOnMd:"pf-u-hidden-on-md",hiddenOnSm:"pf-u-hidden-on-sm",hiddenOnXl:"pf-u-hidden-on-xl",hiddenOn_2xl:"pf-u-hidden-on-2xl",screenReader:"pf-u-screen-reader",screenReaderOnLg:"pf-u-screen-reader-on-lg",screenReaderOnMd:"pf-u-screen-reader-on-md",screenReaderOnSm:"pf-u-screen-reader-on-sm",screenReaderOnXl:"pf-u-screen-reader-on-xl",screenReaderOn_2xl:"pf-u-screen-reader-on-2xl",visible:"pf-u-visible",visibleOnLg:"pf-u-visible-on-lg",visibleOnMd:"pf-u-visible-on-md",visibleOnSm:"pf-u-visible-on-sm",visibleOnXl:"pf-u-visible-on-xl",visibleOn_2xl:"pf-u-visible-on-2xl"}}}]);
//# sourceMappingURL=../sourcemaps/2425.9ab3f538072ff9cb82cacfee757a73bc.js.map