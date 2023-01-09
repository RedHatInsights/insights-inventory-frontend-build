"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7980],{68425:(e,n,i)=>{i.d(n,{C:()=>a});var t=i(70655),s=i(92950),o=i(38296),r=i(12971);const a=e=>{var{isRead:n=!1,className:i="",children:a="",screenReaderText:l}=e,d=(0,t.__rest)(e,["isRead","className","children","screenReaderText"]);return s.createElement("span",Object.assign({},d,{className:(0,o.i)(r.Z.badge,n?r.Z.modifiers.read:r.Z.modifiers.unread,i)}),a,l&&s.createElement("span",{className:"pf-screen-reader"},l))};a.displayName="Badge"},47173:(e,n,i)=>{i.d(n,{L$:()=>s,Wu:()=>t,zx:()=>u});var t,s,o=i(70655),r=i(92950),a=i(80480),l=i(38296),d=i(37619),p=i(62472),c=i(68425);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(t||(t={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(s||(s={}));const m=e=>{var{children:n=null,className:i="",component:m="button",isActive:f=!1,isBlock:h=!1,isDisabled:g=!1,isAriaDisabled:b=!1,isLoading:C=null,isDanger:v=!1,spinnerAriaValueText:y,spinnerAriaLabelledBy:w,spinnerAriaLabel:x,isSmall:E=!1,isLarge:R=!1,inoperableEvents:D=["onClick","onKeyPress"],isInline:N=!1,type:I=s.button,variant:k=t.primary,iconPosition:O="left","aria-label":T=null,icon:Z=null,ouiaId:_,ouiaSafe:P=!0,tabIndex:L=null,innerRef:A,countOptions:S}=e,F=(0,o.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const M=(0,p.S$)(u.displayName,_,P,k),B=m,z="button"===B,j=N&&"span"===B,G=D.reduce(((e,n)=>Object.assign(Object.assign({},e),{[n]:e=>{e.preventDefault()}})),{});return r.createElement(B,Object.assign({},F,b?G:null,{"aria-disabled":g||b,"aria-label":T,className:(0,l.i)(a.Z.button,a.Z.modifiers[k],h&&a.Z.modifiers.block,g&&a.Z.modifiers.disabled,b&&a.Z.modifiers.ariaDisabled,f&&a.Z.modifiers.active,N&&k===t.link&&a.Z.modifiers.inline,v&&(k===t.secondary||k===t.link)&&a.Z.modifiers.danger,null!==C&&null!==n&&a.Z.modifiers.progress,C&&a.Z.modifiers.inProgress,E&&a.Z.modifiers.small,R&&a.Z.modifiers.displayLg,i),disabled:z?g:null,tabIndex:null!==L?L:g?z?null:-1:b?null:j?0:void 0,type:z||j?I:null,role:j?"button":null,ref:A},M),C&&r.createElement("span",{className:(0,l.i)(a.Z.buttonProgress)},r.createElement(d.$,{size:d.S.md,isInline:N,"aria-valuetext":y,"aria-label":x,"aria-labelledby":w})),k===t.plain&&null===n&&Z?Z:null,k!==t.plain&&Z&&"left"===O&&r.createElement("span",{className:(0,l.i)(a.Z.buttonIcon,a.Z.modifiers.start)},Z),n,k!==t.plain&&Z&&"right"===O&&r.createElement("span",{className:(0,l.i)(a.Z.buttonIcon,a.Z.modifiers.end)},Z),S&&r.createElement("span",{className:(0,l.i)(a.Z.buttonCount,S.className)},r.createElement(c.C,{isRead:S.isRead},S.count)))},u=r.forwardRef(((e,n)=>r.createElement(m,Object.assign({innerRef:n},e))));u.displayName="Button"},84457:(e,n,i)=>{i.d(n,{h:()=>l});var t=i(70655),s=i(92950),o=i(33676),r=i(99355),a=i(62472);const l=e=>{var{children:n,className:i,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,href:u,tooltip:f,tooltipProps:h={},listItemClassName:g,onClick:b,ref:C,additionalChild:v,customChild:y,tabIndex:w=-1,icon:x=null,autoFocus:E,description:R=null,styleChildren:D,ouiaId:N,ouiaSafe:I}=e,k=(0,t.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const O=(0,a.S$)(l.displayName,N,I);return s.createElement(r.e4.Consumer,null,(e=>s.createElement(o.n,Object.assign({context:e,role:"menuitem",tabIndex:w,className:i,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,href:u,tooltip:f,tooltipProps:h,listItemClassName:g,onClick:b,additionalChild:v,customChild:y,icon:x,autoFocus:E,styleChildren:D,description:R},O,k),n)))};l.displayName="DropdownItem"},94868:(e,n,i)=>{i.d(n,{h:()=>p});var t=i(70655),s=i(92950),o=i(12181),r=i(73699),a=i(38296),l=i(80164),d=i(99355);class p extends s.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const i=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(i),e.stopPropagation()}else if("ArrowUp"===e.key){const i=n.length,t=n.slice(i-1,i),s=t&&t[0];p.focusFirstRef(s),e.stopPropagation()}},this.childKeyHandler=(e,n,i,t=!1)=>{(0,l.qG)(e,n,i,this.refsCollection,this.props.isGrouped?this.refsCollection:s.Children.toArray(this.props.children),t)},this.sendRef=(e,n,i,t)=>{this.refsCollection[e]=[],n.map(((n,i)=>{n?n.getAttribute?this.refsCollection[e][i]=t?null:n:this.refsCollection[e][i]=o.findDOMNode(n):this.refsCollection[e][i]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return s.Children.map(e,(e=>{const i=e,t={};return i.props&&i.props.children&&(Array.isArray(i.props.children)?t.children=s.Children.map(i.props.children,(e=>s.cloneElement(e,{index:n++}))):t.children=s.cloneElement(i.props.children,{index:n++})),s.cloneElement(i,t)}))}return s.Children.map(e,((e,n)=>s.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:i,position:o,children:p,component:c,isGrouped:m,setMenuComponentRef:u,openedOnEnter:f,alignments:h}=e,g=(0,t.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return s.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?s.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:t})=>s.createElement("div",{className:(0,a.i)(t,o===d.ir.right&&r.Z.modifiers.alignRight,(0,l.wt)(h,r.Z,"align-"),n),hidden:!i,onClick:n=>e&&e(n),ref:u},p))):m&&s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:t})=>{const p=t||"div";return s.createElement(p,Object.assign({},g,{className:(0,a.i)(e,o===d.ir.right&&r.Z.modifiers.alignRight,(0,l.wt)(h,r.Z,"align-"),n),hidden:!i,role:"menu",ref:u}),this.extendChildren())}))||s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:t})=>{const p=t||c;return s.createElement(p,Object.assign({},g,{className:(0,a.i)(e,o===d.ir.right&&r.Z.modifiers.alignRight,(0,l.wt)(h,r.Z,"align-"),n),hidden:!i,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,i)=>{i.d(n,{R:()=>c});var t=i(70655),s=i(92950),o=i(73699),r=i(38296),a=i(94868),l=i(99355),d=i(62472),p=i(16438);class c extends s.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=s.createRef(),this.menuComponentRef=s.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:i,direction:m,dropdownItems:u,isOpen:f,isPlain:h,isText:g,isGrouped:b,isFullHeight:C,onSelect:v,position:y,toggle:w,autoFocus:x,menuAppendTo:E,isFlipEnabled:R,removeFindDomNode:D,zIndex:N}=e,I=(0,t.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]),k=w.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let O,T,Z=!1;u&&u.length>0?(O="ul",T=u,Z=!0):(O="div",T=s.Children.toArray(n));const _=this.openedOnEnter,P=R&&"inline"!==E;return s.createElement(l.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:t,ouiaId:c,ouiaComponentType:u,ouiaSafe:v,alignments:R})=>{const L=n,A=s.createElement(a.h,{className:(0,r.i)(P&&o.Z.modifiers.static),setMenuComponentRef:this.setMenuComponentRef,component:O,isOpen:f,position:y,"aria-labelledby":t?`${t}-toggle`:k,isGrouped:b,autoFocus:_&&x,alignments:R},T),S=s.createElement("div",{className:(0,r.i)(e,m===l.dw.up&&o.Z.modifiers.top,y===l.ir.right&&o.Z.modifiers.alignRight,f&&o.Z.modifiers.expanded,i)},f&&A),F=s.createElement(L,Object.assign({},I,{className:(0,r.i)(e,m===l.dw.up&&o.Z.modifiers.top,y===l.ir.right&&o.Z.modifiers.alignRight,f&&o.Z.modifiers.expanded,C&&o.Z.modifiers.fullHeight,i),ref:this.baseComponentRef},(0,d.dp)(u,c,v)),s.Children.map(w,(e=>s.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:f,id:k,isPlain:h,isText:g,"aria-haspopup":Z,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===E&&f&&A);return"inline"===E?F:s.createElement(p.r,{trigger:F,popper:S,direction:m,position:y,appendTo:"parent"===E?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():E,isVisible:f,removeFindDomNode:D,zIndex:N,popperMatchesTriggerWidth:!1})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:l.ir.left,direction:l.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!0}},33676:(e,n,i)=>{i.d(n,{n:()=>c});var t=i(70655),s=i(92950),o=i(38296),r=i(99355),a=i(1774),l=i(80164),d=i(75824),p=i(73699);class c extends s.Component{constructor(){super(...arguments),this.ref=s.createRef(),this.additionalRef=s.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{var n,i,t,s,o,r,l,d,p,c;const m=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(null===(i=null===(n=this.props.context)||void 0===n?void 0:n.keyHandler)||void 0===i||i.call(n,this.props.index,m,a.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(null===(s=null===(t=this.props.context)||void 0===t?void 0:t.keyHandler)||void 0===s||s.call(t,this.props.index,m,a.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(null===(r=null===(o=this.props.context)||void 0===o?void 0:o.keyHandler)||void 0===r||r.call(o,this.props.index,m,a.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(null===(d=null===(l=this.props.context)||void 0===l?void 0:l.keyHandler)||void 0===d||d.call(l,this.props.index,m,a.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&(null===(c=null===(p=this.props.context)||void 0===p?void 0:p.keyHandler)||void 0===c||c.call(p,this.props.index,m,a.Ow.DOWN)))},this.componentRef=e=>{this.ref.current=e;const{component:n}=this.props,i=n.ref;i&&("function"==typeof i?i(e):i.current=e)}}componentDidMount(){var e;const{context:n,index:i,isDisabled:t,role:s,customChild:o,autoFocus:r}=this.props,a=o?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==n?void 0:n.sendRef)||void 0===e||e.call(n,i,[a,o?a:this.additionalRef.current],t,"separator"===s),r&&setTimeout((()=>a.focus()))}componentDidUpdate(){var e;const{context:n,index:i,isDisabled:t,role:s,customChild:o}=this.props,r=o?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==n?void 0:n.sendRef)||void 0===e||e.call(n,i,[r,o?r:this.additionalRef.current],t,"separator"===s)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return s.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:n,children:i,context:a,onClick:c,component:m,role:u,isDisabled:f,isAriaDisabled:h,isPlainText:g,index:b,href:C,tooltip:v,tooltipProps:y,id:w,componentID:x,listItemClassName:E,additionalChild:R,customChild:D,enterTriggersArrowDown:N,icon:I,autoFocus:k,styleChildren:O,description:T,inoperableEvents:Z}=e,_=(0,t.__rest)(e,["className","children","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let P=(0,o.i)(I&&p.Z.modifiers.icon,h&&p.Z.modifiers.ariaDisabled,n);"a"===m?_["aria-disabled"]=f||h:"button"===m&&(_["aria-disabled"]=f||h,_.type=_.type||"button");const L=e=>s.cloneElement(e,Object.assign(Object.assign({},O&&{className:(0,o.i)(e.props.className,P)}),"separator"!==this.props.role&&{role:u,ref:this.componentRef})),A=e=>{const n=e,t=T?s.createElement(s.Fragment,null,s.createElement("div",{className:p.Z.dropdownMenuItemMain},I&&s.createElement("span",{className:(0,o.i)(p.Z.dropdownMenuItemIcon)},I),i),s.createElement("div",{className:p.Z.dropdownMenuItemDescription},T)):s.createElement(s.Fragment,null,I&&s.createElement("span",{className:(0,o.i)(p.Z.dropdownMenuItemIcon)},I),i);return s.createElement(n,Object.assign({},_,f||h?(0,l.KG)(Z):null,{href:C,ref:this.ref,className:P,id:x,role:u}),t)};return s.createElement(r.Dl.Consumer,null,(({onSelect:e,itemClass:n,disabledClass:i,plainTextClass:t})=>{return"separator"!==this.props.role&&(P=(0,o.i)(P,f&&i,g&&t,n,T&&p.Z.modifiers.description)),D?s.cloneElement(D,{ref:this.ref,onKeyDown:this.onKeyDown}):s.createElement("li",Object.assign({},E&&{className:E},{role:"none",onKeyDown:this.onKeyDown,onClick:n=>{f||h||(null==c||c(n),null==e||e(n))},id:w}),(r=s.isValidElement(m)?L(m):A(m),v?s.createElement(d.u,Object.assign({content:v},y),r):r),R&&this.extendAdditionalChildRef());var r}))}}c.displayName="InternalDropdownItem",c.defaultProps={className:"",component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},1024:(e,n,i)=>{i.d(n,{Z:()=>p});var t=i(70655),s=i(92950),o=i(73699),r=i(99355),a=i(38296),l=i(1774);const d={default:"",primary:o.Z.modifiers.primary,secondary:o.Z.modifiers.secondary};class p extends s.Component{constructor(){super(...arguments),this.buttonRef=s.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:i,onToggle:t,getMenuRef:s}=this.props,o=s&&s(),r=i&&i.current&&i.current.contains(e.target),a=o&&o.contains&&o.contains(e.target);!n||r||a||null==t||t(!1,e)},this.onEscPress=e=>{var n,i,t;const{parentRef:s,getMenuRef:o}=this.props,r=o&&o(),a=s&&s.current&&s.current.contains(e.target),d=r&&r.contains&&r.contains(e.target);!this.props.isOpen||e.key!==l.yu.Escape&&"Tab"!==e.key||!a&&!d||(null===(i=(n=this.props).onToggle)||void 0===i||i.call(n,!1,e),null===(t=this.buttonRef.current)||void 0===t||t.focus())},this.onKeyDown=e=>{var n,i,t,s,o,r;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(s=(t=this.props).onToggle)||void 0===s||s.call(t,!this.props.isOpen,e),null===(r=(o=this.props).onEnter)||void 0===r||r.call(o)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(i=(n=this.props).onToggle)||void 0===i||i.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:i,isOpen:l,isDisabled:p,isPlain:c,isText:m,isPrimary:u,isSplitButton:f,toggleVariant:h,onToggle:g,"aria-haspopup":b,isActive:C,bubbleEvent:v,onEnter:y,parentRef:w,getMenuRef:x,id:E,type:R}=e,D=(0,t.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return s.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>s.createElement("button",Object.assign({},D,{id:E,ref:this.buttonRef,className:(0,a.i)(f?o.Z.dropdownToggleButton:e||o.Z.dropdownToggle,C&&o.Z.modifiers.active,c&&o.Z.modifiers.plain,m&&o.Z.modifiers.text,u&&o.Z.modifiers.primary,h&&d[h],n),type:R||"button",onClick:e=>null==g?void 0:g(!l,e),"aria-expanded":l,"aria-haspopup":b,onKeyDown:e=>this.onKeyDown(e),disabled:p}),i)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},99355:(e,n,i)=>{i.d(n,{Dl:()=>r,dw:()=>s,e4:()=>a,ir:()=>t});var t,s,o=i(92950);!function(e){e.right="right",e.left="left"}(t||(t={})),function(e){e.up="up",e.down="down"}(s||(s={}));const r=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),a=o.createContext({keyHandler:null,sendRef:null})},37619:(e,n,i)=>{i.d(n,{$:()=>l,S:()=>r});var t=i(70655),s=i(92950);i(66822);const o={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var r,a=i(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));const l=e=>{var{className:n="",size:i="xl","aria-valuetext":r="Loading...",isSVG:l=!1,diameter:d,isInline:p=!1,"aria-label":c,"aria-labelledBy":m}=e,u=(0,t.__rest)(e,["className","size","aria-valuetext","isSVG","diameter","isInline","aria-label","aria-labelledBy"]);const f=l?"svg":"span";return s.createElement(f,Object.assign({className:(0,a.i)(o.spinner,p?o.modifiers.inline:o.modifiers[i],n),role:"progressbar","aria-valuetext":r},l&&{viewBox:"0 0 100 100"},d&&{style:{"--pf-c-spinner--diameter":d}},c&&{"aria-label":c},m&&{"aria-labelledBy":m},!c&&!m&&{"aria-label":"Contents"},u),l?s.createElement("circle",{className:o.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):s.createElement(s.Fragment,null,s.createElement("span",{className:(0,a.i)(o.spinnerClipper)}),s.createElement("span",{className:(0,a.i)(o.spinnerLeadBall)}),s.createElement("span",{className:(0,a.i)(o.spinnerTailBall)})))};l.displayName="Spinner"},92607:(e,n,i)=>{i.d(n,{BJ:()=>s,oi:()=>f,x:()=>t,y5:()=>u});var t,s,o=i(70655),r=i(92950),a=i(12455),l=i(38296),d=i(1774),p=i(80164),c=i(62472),m=i(84709);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(t||(t={})),function(e){e.default="default",e.plain="plain"}(s||(s={}));class u extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,p.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:n,onFocus:i}=this.props;n&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:n,onBlur:i}=this.props;n&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,c.ql)(u.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,m.p)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:n,className:i,type:t,value:s,validated:p,onChange:m,onFocus:u,onBlur:h,isLeftTruncated:g,isReadOnly:b,readOnly:C,readOnlyVariant:v,isRequired:y,isDisabled:w,isIconSprite:x,iconVariant:E,customIconUrl:R,customIconDimensions:D,ouiaId:N,ouiaSafe:I}=e,k=(0,o.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","readOnly","readOnlyVariant","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),O={};return R&&(O.backgroundImage=`url('${R}')`),D&&(O.backgroundSize=D),r.createElement("input",Object.assign({},k,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,l.i)(a.Z.formControl,x&&a.Z.modifiers.iconSprite,"plain"===v&&a.Z.modifiers.plain,p===d.LD.success&&a.Z.modifiers.success,p===d.LD.warning&&a.Z.modifiers.warning,(E&&"search"!==E||R)&&a.Z.modifiers.icon,E&&a.Z.modifiers[E],i),onChange:this.handleChange,type:t,value:this.sanitizeInputValue(s),"aria-invalid":k["aria-invalid"]?k["aria-invalid"]:p===d.LD.error,required:y,disabled:w,readOnly:!!v||b||C,ref:n||this.inputRef},(R||D)&&{style:O},(0,c.dp)(f.displayName,void 0!==N?N:this.state.ouiaStateId,I)))}}u.displayName="TextInputBase",u.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:t.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=r.forwardRef(((e,n)=>r.createElement(u,Object.assign({},e,{innerRef:n}))));f.displayName="TextInput"},84709:(e,n,i)=>{i.d(n,{p:()=>s});var t=i(80164);const s=(e,n,i=!0)=>{let s;if(t.Nq){const{ResizeObserver:t}=window;if(e&&t){const o=new t((e=>{i?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&n()})):Array.isArray(e)&&e.length>0&&n()}));o.observe(e),s=()=>o.unobserve(e)}else window.addEventListener("resize",n),s=()=>window.removeEventListener("resize",n)}return()=>{s&&s()}}},9003:(e,n,i)=>{i.d(n,{LC:()=>o,ZP:()=>r,sl:()=>s});var t=i(40400);const s={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},o=(0,t.IU)(s),r=o},98614:(e,n,i)=>{i.d(n,{ZP:()=>r,de:()=>s,nQ:()=>o});var t=i(40400);const s={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},o=(0,t.IU)(s),r=o},12971:(e,n,i)=>{i.d(n,{Z:()=>t}),i(11452);const t={badge:"pf-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-theme-dark"}},80480:(e,n,i)=>{i.d(n,{Z:()=>t}),i(34946);const t={badge:"pf-c-badge",button:"pf-c-button",buttonCount:"pf-c-button__count",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},73699:(e,n,i)=>{i.d(n,{Z:()=>t}),i(30187);const t={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},themeDark:"pf-theme-dark"}},12455:(e,n,i)=>{i.d(n,{Z:()=>t}),i(90479);const t={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",plain:"pf-m-plain",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",iconSprite:"pf-m-icon-sprite",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"},themeDark:"pf-theme-dark"}}}]);