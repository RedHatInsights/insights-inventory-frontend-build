"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9095],{84457:(e,n,t)=>{t.d(n,{h:()=>a});var o=t(70655),i=t(92950),s=t(33676),r=t(99355),l=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,href:u,tooltip:h,tooltipProps:f={},listItemClassName:g,onClick:C,ref:w,additionalChild:b,customChild:v,tabIndex:y=-1,icon:E=null,autoFocus:x,description:D=null,styleChildren:R,ouiaId:O,ouiaSafe:T}=e,k=(0,o.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const N=(0,l.S$)(a.displayName,O,T);return i.createElement(r.e4.Consumer,null,(e=>i.createElement(s.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,href:u,tooltip:h,tooltipProps:f,listItemClassName:g,onClick:C,additionalChild:b,customChild:v,icon:E,autoFocus:x,styleChildren:R,description:D},N,k),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var o=t(70655),i=t(92950),s=t(12181),r=t(73699),l=t(38296),a=t(80164),d=t(99355);class p extends i.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,o=n.slice(t-1,t),i=o&&o[0];p.focusFirstRef(i),e.stopPropagation()}},this.childKeyHandler=(e,n,t,o=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:i.Children.toArray(this.props.children),o)},this.sendRef=(e,n,t,o)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=o?null:n:this.refsCollection[e][t]=s.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return i.Children.map(e,(e=>{const t=e,o={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?o.children=i.Children.map(t.props.children,(e=>i.cloneElement(e,{index:n++}))):o.children=i.cloneElement(t.props.children,{index:n++})),i.cloneElement(t,o)}))}return i.Children.map(e,((e,n)=>i.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:s,children:p,component:c,isGrouped:m,setMenuComponentRef:u,openedOnEnter:h,alignments:f}=e,g=(0,o.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return i.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?i.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:o})=>i.createElement("div",{className:(0,l.i)(o,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(f,r.Z,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:u},p))):m&&i.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||"div";return i.createElement(p,Object.assign({},g,{className:(0,l.i)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(f,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())}))||i.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||c;return i.createElement(p,Object.assign({},g,{className:(0,l.i)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(f,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var o=t(70655),i=t(92950),s=t(73699),r=t(38296),l=t(94868),a=t(99355),d=t(62472),p=t(16438);class c extends i.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=i.createRef(),this.menuComponentRef=i.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:m,dropdownItems:u,isOpen:h,isPlain:f,isText:g,isGrouped:C,isFullHeight:w,onSelect:b,position:v,toggle:y,autoFocus:E,menuAppendTo:x,isFlipEnabled:D,removeFindDomNode:R,zIndex:O}=e,T=(0,o.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]),k=y.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let N,I,P=!1;u&&u.length>0?(N="ul",I=u,P=!0):(N="div",I=i.Children.toArray(n));const _=this.openedOnEnter,Z=D&&"inline"!==x;return i.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:o,ouiaId:c,ouiaComponentType:u,ouiaSafe:b,alignments:D})=>{const M=n,A=i.createElement(l.h,{className:(0,r.i)(Z&&s.Z.modifiers.static),setMenuComponentRef:this.setMenuComponentRef,component:N,isOpen:h,position:v,"aria-labelledby":o?`${o}-toggle`:k,isGrouped:C,autoFocus:_&&E,alignments:D},I),F=i.createElement("div",{className:(0,r.i)(e,m===a.dw.up&&s.Z.modifiers.top,v===a.ir.right&&s.Z.modifiers.alignRight,h&&s.Z.modifiers.expanded,t)},h&&A),L=i.createElement(M,Object.assign({},T,{className:(0,r.i)(e,m===a.dw.up&&s.Z.modifiers.top,v===a.ir.right&&s.Z.modifiers.alignRight,h&&s.Z.modifiers.expanded,w&&s.Z.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(u,c,b)),i.Children.map(y,(e=>i.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:k,isPlain:f,isText:g,"aria-haspopup":P,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===x&&h&&A);return"inline"===x?L:i.createElement(p.r,{trigger:L,popper:F,direction:m,position:v,appendTo:"parent"===x?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():x,isVisible:h,removeFindDomNode:R,zIndex:O,popperMatchesTriggerWidth:!1})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!0}},33676:(e,n,t)=>{t.d(n,{n:()=>c});var o=t(70655),i=t(92950),s=t(38296),r=t(99355),l=t(1774),a=t(80164),d=t(75824),p=t(73699);class c extends i.Component{constructor(){super(...arguments),this.ref=i.createRef(),this.additionalRef=i.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{var n,t,o,i,s,r,a,d,p,c;const m=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(null===(t=null===(n=this.props.context)||void 0===n?void 0:n.keyHandler)||void 0===t||t.call(n,this.props.index,m,l.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(null===(i=null===(o=this.props.context)||void 0===o?void 0:o.keyHandler)||void 0===i||i.call(o,this.props.index,m,l.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(null===(r=null===(s=this.props.context)||void 0===s?void 0:s.keyHandler)||void 0===r||r.call(s,this.props.index,m,l.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(null===(d=null===(a=this.props.context)||void 0===a?void 0:a.keyHandler)||void 0===d||d.call(a,this.props.index,m,l.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&(null===(c=null===(p=this.props.context)||void 0===p?void 0:p.keyHandler)||void 0===c||c.call(p,this.props.index,m,l.Ow.DOWN)))},this.componentRef=e=>{this.ref.current=e;const{component:n}=this.props,t=n.ref;t&&("function"==typeof t?t(e):t.current=e)}}componentDidMount(){var e;const{context:n,index:t,isDisabled:o,role:i,customChild:s,autoFocus:r}=this.props,l=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==n?void 0:n.sendRef)||void 0===e||e.call(n,t,[l,s?l:this.additionalRef.current],o,"separator"===i),r&&setTimeout((()=>l.focus()))}componentDidUpdate(){var e;const{context:n,index:t,isDisabled:o,role:i,customChild:s}=this.props,r=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==n?void 0:n.sendRef)||void 0===e||e.call(n,t,[r,s?r:this.additionalRef.current],o,"separator"===i)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return i.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:n,children:t,context:l,onClick:c,component:m,role:u,isDisabled:h,isAriaDisabled:f,isPlainText:g,index:C,href:w,tooltip:b,tooltipProps:v,id:y,componentID:E,listItemClassName:x,additionalChild:D,customChild:R,enterTriggersArrowDown:O,icon:T,autoFocus:k,styleChildren:N,description:I,inoperableEvents:P}=e,_=(0,o.__rest)(e,["className","children","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let Z=(0,s.i)(T&&p.Z.modifiers.icon,f&&p.Z.modifiers.ariaDisabled,n);"a"===m?_["aria-disabled"]=h||f:"button"===m&&(_["aria-disabled"]=h||f,_.type=_.type||"button");const M=e=>i.cloneElement(e,Object.assign(Object.assign({},N&&{className:(0,s.i)(e.props.className,Z)}),"separator"!==this.props.role&&{role:u,ref:this.componentRef})),A=e=>{const n=e,o=I?i.createElement(i.Fragment,null,i.createElement("div",{className:p.Z.dropdownMenuItemMain},T&&i.createElement("span",{className:(0,s.i)(p.Z.dropdownMenuItemIcon)},T),t),i.createElement("div",{className:p.Z.dropdownMenuItemDescription},I)):i.createElement(i.Fragment,null,T&&i.createElement("span",{className:(0,s.i)(p.Z.dropdownMenuItemIcon)},T),t);return i.createElement(n,Object.assign({},_,h||f?(0,a.KG)(P):null,{href:w,ref:this.ref,className:Z,id:E,role:u}),o)};return i.createElement(r.Dl.Consumer,null,(({onSelect:e,itemClass:n,disabledClass:t,plainTextClass:o})=>{return"separator"!==this.props.role&&(Z=(0,s.i)(Z,h&&t,g&&o,n,I&&p.Z.modifiers.description)),R?i.cloneElement(R,{ref:this.ref,onKeyDown:this.onKeyDown}):i.createElement("li",Object.assign({},x&&{className:x},{role:"none",onKeyDown:this.onKeyDown,onClick:n=>{h||f||(null==c||c(n),null==e||e(n))},id:y}),(r=i.isValidElement(m)?M(m):A(m),b?i.createElement(d.u,Object.assign({content:b},v),r):r),D&&this.extendAdditionalChildRef());var r}))}}c.displayName="InternalDropdownItem",c.defaultProps={className:"",component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(70655),i=t(92950),s=t(73699),r=t(99355),l=t(38296),a=t(1774);const d={default:"",primary:s.Z.modifiers.primary,secondary:s.Z.modifiers.secondary};class p extends i.Component{constructor(){super(...arguments),this.buttonRef=i.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:o,getMenuRef:i}=this.props,s=i&&i(),r=t&&t.current&&t.current.contains(e.target),l=s&&s.contains&&s.contains(e.target);!n||r||l||null==o||o(!1,e)},this.onEscPress=e=>{var n,t,o;const{parentRef:i,getMenuRef:s}=this.props,r=s&&s(),l=i&&i.current&&i.current.contains(e.target),d=r&&r.contains&&r.contains(e.target);!this.props.isOpen||e.key!==a.yu.Escape&&"Tab"!==e.key||!l&&!d||(null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!1,e),null===(o=this.buttonRef.current)||void 0===o||o.focus())},this.onKeyDown=e=>{var n,t,o,i,s,r;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(i=(o=this.props).onToggle)||void 0===i||i.call(o,!this.props.isOpen,e),null===(r=(s=this.props).onEnter)||void 0===r||r.call(s)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:m,isPrimary:u,isSplitButton:h,toggleVariant:f,onToggle:g,"aria-haspopup":C,isActive:w,bubbleEvent:b,onEnter:v,parentRef:y,getMenuRef:E,id:x,type:D}=e,R=(0,o.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return i.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>i.createElement("button",Object.assign({},R,{id:x,ref:this.buttonRef,className:(0,l.i)(h?s.Z.dropdownToggleButton:e||s.Z.dropdownToggle,w&&s.Z.modifiers.active,c&&s.Z.modifiers.plain,m&&s.Z.modifiers.text,u&&s.Z.modifiers.primary,f&&d[f],n),type:D||"button",onClick:e=>null==g?void 0:g(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},99355:(e,n,t)=>{t.d(n,{Dl:()=>r,dw:()=>i,e4:()=>l,ir:()=>o});var o,i,s=t(92950);!function(e){e.right="right",e.left="left"}(o||(o={})),function(e){e.up="up",e.down="down"}(i||(i={}));const r=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=s.createContext({keyHandler:null,sendRef:null})},98614:(e,n,t)=>{t.d(n,{ZP:()=>r,de:()=>i,nQ:()=>s});var o=t(40400);const i={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},s=(0,o.IU)(i),r=s},73699:(e,n,t)=>{t.d(n,{Z:()=>o}),t(30187);const o={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},themeDark:"pf-theme-dark"}}}]);