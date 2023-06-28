"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[4733],{44733:(e,t,a)=>{a.d(t,{t:()=>W,a:()=>y});var i=a(70655),o=a(92950),n=a(64642);a(46928);const s="pf-m-bottom",l="pf-m-static",r="pf-m-first",p="pf-m-last",g="pf-m-sticky",c="pf-m-compact",u="pf-c-pagination__nav-control";var m=a(38296),d=a(80164),P=a(71973),f=a(94949),h=a(93174),C=a(94086),v=a(47173),T=a(1774);class I extends o.Component{constructor(e){super(e),this.handleNewPage=(e,t)=>{const{perPage:a,onSetPage:i}=this.props;return i(e,t,a,(t-1)*a,t*a)},this.state={userInputPage:this.props.page}}static parseInteger(e,t){let a=Number.parseInt(e,10);return Number.isNaN(a)||(a=a>t?t:a,a=a<1?1:a),a}onChange(e,t){const a=I.parseInteger(e.target.value,t);this.setState({userInputPage:Number.isNaN(a)?e.target.value:a})}onKeyDown(e,t,a,i){if(e.key===T.yu.Enter){const o=I.parseInteger(this.state.userInputPage,a);i(e,Number.isNaN(o)?t:o),this.handleNewPage(e,Number.isNaN(o)?t:o)}}componentDidUpdate(e){this.props.page!==e.page&&this.props.page<=this.props.lastPage&&this.state.userInputPage!==this.props.page&&this.setState({userInputPage:this.props.page})}render(){const e=this.props,{page:t,perPage:a,onSetPage:n,isDisabled:s,itemCount:l,lastPage:g,firstPage:c,pagesTitle:T,pagesTitlePlural:I,toLastPage:N,toNextPage:x,toFirstPage:b,toPreviousPage:k,currPage:S,paginationTitle:E,ofWord:_,onNextClick:M,onPreviousClick:D,onFirstClick:w,onLastClick:y,onPageInput:O,className:L,isCompact:W}=e,Z=(0,i.__rest)(e,["page","perPage","onSetPage","isDisabled","itemCount","lastPage","firstPage","pagesTitle","pagesTitlePlural","toLastPage","toNextPage","toFirstPage","toPreviousPage","currPage","paginationTitle","ofWord","onNextClick","onPreviousClick","onFirstClick","onLastClick","onPageInput","className","isCompact"]),{userInputPage:F}=this.state;return o.createElement("nav",Object.assign({className:(0,m.i)("pf-c-pagination__nav",L),"aria-label":E},Z),!W&&o.createElement("div",{className:(0,m.i)(u,r)},o.createElement(v.zx,{variant:v.Wu.plain,isDisabled:s||t===c||0===t,"aria-label":b,"data-action":"first",onClick:e=>{w(e,1),this.handleNewPage(e,1),this.setState({userInputPage:1})}},o.createElement(f.ZP,null))),o.createElement("div",{className:u},o.createElement(v.zx,{variant:v.Wu.plain,isDisabled:s||t===c||0===t,"data-action":"previous",onClick:e=>{const a=t-1>=1?t-1:1;D(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})},"aria-label":k},o.createElement(P.ZP,null))),!W&&o.createElement("div",{className:"pf-c-pagination__nav-page-select"},o.createElement("input",{className:(0,m.i)("pf-c-form-control"),"aria-label":S,type:"number",disabled:s||l&&t===c&&t===g&&l>=0||0===t,min:g<=0&&c<=0?0:1,max:g,value:F,onKeyDown:e=>this.onKeyDown(e,t,g,O),onChange:e=>this.onChange(e,g)}),(l||0===l)&&o.createElement("span",{"aria-hidden":"true"},_," ",T?(0,d._6)(g,T,I):g)),o.createElement("div",{className:u},o.createElement(v.zx,{variant:v.Wu.plain,isDisabled:s||t===g,"aria-label":x,"data-action":"next",onClick:e=>{const a=t+1<=g?t+1:g;M(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})}},o.createElement(h.ZP,null))),!W&&o.createElement("div",{className:(0,m.i)(u,p)},o.createElement(v.zx,{variant:v.Wu.plain,isDisabled:s||t===g,"aria-label":N,"data-action":"last",onClick:e=>{y(e,g),this.handleNewPage(e,g),this.setState({userInputPage:g})}},o.createElement(C.ZP,null))))}}I.displayName="Navigation",I.defaultProps={className:"",isDisabled:!1,isCompact:!1,lastPage:0,firstPage:0,pagesTitle:"",pagesTitlePlural:"",toLastPage:"Go to last page",toNextPage:"Go to next page",toFirstPage:"Go to first page",toPreviousPage:"Go to previous page",currPage:"Current page",paginationTitle:"Pagination",ofWord:"of",onNextClick:()=>{},onPreviousClick:()=>{},onFirstClick:()=>{},onLastClick:()=>{},onPageInput:()=>{}};var N=a(18219),x=a(84457),b=a(99355),k=a(17352),S=a(98614),E=a(75728);const _=({itemsTitle:e="items",optionsToggle:t,itemsPerPageTitle:a="Items per page",ofWord:i="of",firstIndex:n=0,lastIndex:s=0,itemCount:l,widgetId:r="",showToggle:p=!0,onToggle:g=(e=>{}),isOpen:c=!1,isDisabled:u=!1,parentRef:P=null,toggleTemplate:f,onEnter:h=null,perPageComponent:C="div"})=>{const v="div"===C,T=(0,m.i)(N.Z.optionsMenuToggle,u&&N.Z.modifiers.disabled,N.Z.modifiers.plain,N.Z.modifiers.text),I="string"==typeof f?(0,d.tJ)(f,{firstIndex:n,lastIndex:s,ofWord:i,itemCount:l,itemsTitle:e}):o.createElement(f,{firstIndex:n,lastIndex:s,ofWord:i,itemCount:l,itemsTitle:e}),x=p&&o.createElement(o.Fragment,null,v&&o.createElement("span",{className:(0,m.i)(N.Z.optionsMenuToggleText)},I),o.createElement(E.Z,Object.assign({onEnter:h,"aria-label":v?t||"Items per page":t,onToggle:g,isDisabled:u||l&&l<=0,isOpen:c},r&&{id:`${r}-toggle`},{className:v?N.Z.optionsMenuToggleButton:T,parentRef:P,"aria-haspopup":"listbox"}),!v&&I));return v?o.createElement("div",{className:T},x):x};_.displayName="OptionsToggle";class M extends o.Component{constructor(e){super(e),this.parentRef=o.createRef(),this.onToggle=e=>{this.setState({isOpen:e})},this.onSelect=()=>{this.setState((e=>({isOpen:!e.isOpen})))},this.handleNewPerPage=(e,t)=>{const{page:a,onPerPageSelect:i,itemCount:o,defaultToFullPage:n}=this.props;let s=a;for(;Math.ceil(o/t)<s;)s--;if(n&&o/t!==s)for(;s>1&&o-t*s<0;)s--;return i(e,t,s,(s-1)*t,s*t)},this.renderItems=()=>{const{perPageOptions:e,perPage:t,perPageSuffix:a}=this.props;return e.map((({value:e,title:i})=>o.createElement(x.h,{key:e,component:"button","data-action":`per-page-${e}`,className:(0,m.i)(t===e&&"pf-m-selected"),onClick:t=>this.handleNewPerPage(t,e)},i,` ${a}`,t===e&&o.createElement("div",{className:(0,m.i)(N.Z.optionsMenuMenuItemIcon)},o.createElement(S.ZP,null)))))},this.state={isOpen:!1}}render(){const{widgetId:e,isDisabled:t,itemsPerPageTitle:a,dropDirection:i,optionsToggle:n,perPageOptions:s,toggleTemplate:l,firstIndex:r,lastIndex:p,itemCount:g,itemsTitle:c,ofWord:u,perPageComponent:m}=this.props,{isOpen:d}=this.state;return o.createElement(b.Dl.Provider,{value:Object.assign(Object.assign({},e&&{id:e}),{onSelect:this.onSelect,toggleIndicatorClass:"div"===m?N.Z.optionsMenuToggleButtonIcon:N.Z.optionsMenuToggleIcon,toggleTextClass:N.Z.optionsMenuToggleText,menuClass:N.Z.optionsMenuMenu,itemClass:N.Z.optionsMenuMenuItem,toggleClass:" ",baseClass:N.Z.optionsMenu,disabledClass:N.Z.modifiers.disabled,menuComponent:"ul",baseComponent:"div",ouiaComponentType:M.displayName})},o.createElement(k.R,{direction:i,isOpen:d,toggle:o.createElement(_,{optionsToggle:n,itemsPerPageTitle:a,showToggle:s&&s.length>0,onToggle:this.onToggle,isOpen:d,widgetId:e,firstIndex:r,lastIndex:p,itemCount:g,itemsTitle:c,ofWord:u,toggleTemplate:l,parentRef:this.parentRef.current,isDisabled:t,perPageComponent:m}),dropdownItems:this.renderItems(),isPlain:!0}))}}M.displayName="PaginationOptionsMenu",M.defaultProps={className:"",widgetId:"",isDisabled:!1,dropDirection:b.dw.down,perPageOptions:[],itemsPerPageTitle:"Items per page",perPageSuffix:"per page",optionsToggle:"",ofWord:"of",perPage:0,firstIndex:0,lastIndex:0,defaultToFullPage:!1,itemsTitle:"items",toggleTemplate:n.v,onPerPageSelect:()=>null,perPageComponent:"div"};var D=a(62472);const w="--pf-c-pagination__nav-page-select--c-form-control--width-chars";var y;!function(e){e.bottom="bottom",e.top="top"}(y||(y={}));const O=[{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],L=(e,t)=>{if(!t)return;const a=String(e).length;a>=3?t.style.setProperty(w,`${a}`):t.style.setProperty(w,"2")};class W extends o.Component{constructor(){super(...arguments),this.paginationRef=o.createRef(),this.state={ouiaStateId:(0,D.ql)(W.displayName,this.props.variant)}}getLastPage(){const{itemCount:e,perPage:t,page:a}=this.props;return e||0===e?Math.ceil(e/t)||0:a+1}componentDidMount(){const e=this.paginationRef.current;L(this.getLastPage(),e)}componentDidUpdate(e){const t=this.paginationRef.current;e.perPage===this.props.perPage&&e.itemCount===this.props.itemCount||L(this.getLastPage(),t)}render(){const e=this.props,{children:t,className:a,variant:r,isDisabled:p,isCompact:u,isStatic:P,isSticky:f,perPage:h,titles:C,firstPage:v,page:T,offset:N,defaultToFullPage:x,itemCount:b,itemsStart:k,itemsEnd:S,perPageOptions:E,dropDirection:_,widgetId:w,toggleTemplate:O,onSetPage:L,onPerPageSelect:Z,onFirstClick:F,onPreviousClick:R,onNextClick:G,onPageInput:z,onLastClick:$,ouiaId:j,ouiaSafe:B,perPageComponent:K}=e,U=(0,i.__rest)(e,["children","className","variant","isDisabled","isCompact","isStatic","isSticky","perPage","titles","firstPage","page","offset","defaultToFullPage","itemCount","itemsStart","itemsEnd","perPageOptions","dropDirection","widgetId","toggleTemplate","onSetPage","onPerPageSelect","onFirstClick","onPreviousClick","onNextClick","onPageInput","onLastClick","ouiaId","ouiaSafe","perPageComponent"]),A=_||("bottom"!==r||P?"down":"up");let J=T;!J&&N&&(J=Math.ceil(N/h)),0!==J||b||(J=1);const q=this.getLastPage();let H=(J-1)*h+1,Y=J*h;(b||0===b)&&(H=b<=0?0:(J-1)*h+1,J<v&&b>0?J=v:J>q&&(J=q),b>=0&&(Y=J===q||0===b?b:J*h));const Q={firstIndex:H,lastIndex:Y,itemCount:b,itemsTitle:C.items,ofWord:C.ofWord};return o.createElement("div",Object.assign({ref:this.paginationRef,className:(0,m.i)("pf-c-pagination",r===y.bottom&&s,u&&c,P&&l,f&&g,a)},w&&{id:`${w}-${r}-pagination`},(0,D.dp)(W.displayName,void 0!==j?j:this.state.ouiaStateId,B),U),r===y.top&&o.createElement("div",{className:(0,m.i)("pf-c-pagination__total-items")},O&&"string"==typeof O&&(0,d.tJ)(O,Q),O&&"string"!=typeof O&&O(Q),!O&&o.createElement(n.v,{firstIndex:H,lastIndex:Y,itemCount:b,itemsTitle:C.items,ofWord:C.ofWord})),o.createElement(M,{itemsPerPageTitle:C.itemsPerPage,perPageSuffix:C.perPageSuffix,itemsTitle:u?"":C.items,optionsToggle:C.optionsToggle,perPageOptions:E,firstIndex:null!==k?k:H,lastIndex:null!==S?S:Y,ofWord:C.ofWord,defaultToFullPage:x,itemCount:b,page:J,perPage:h,lastPage:q,onPerPageSelect:Z,dropDirection:A,widgetId:`${w}-${r}`,toggleTemplate:O,isDisabled:p,perPageComponent:K}),o.createElement(I,{pagesTitle:C.page,pagesTitlePlural:C.pages,toLastPage:C.toLastPage,toPreviousPage:C.toPreviousPage,toNextPage:C.toNextPage,toFirstPage:C.toFirstPage,currPage:C.currPage,paginationTitle:C.paginationTitle,ofWord:C.ofWord,page:b&&b<=0?0:J,perPage:h,itemCount:b,firstPage:null!==k?k:1,lastPage:q,onSetPage:L,onFirstClick:F,onPreviousClick:R,onNextClick:G,onLastClick:$,onPageInput:z,isDisabled:p,isCompact:u}),t)}}W.displayName="Pagination",W.defaultProps={children:null,className:"",variant:y.top,isDisabled:!1,isCompact:!1,isSticky:!1,perPage:O[0].value,titles:{items:"",page:"",pages:"",itemsPerPage:"Items per page",perPageSuffix:"per page",toFirstPage:"Go to first page",toPreviousPage:"Go to previous page",toLastPage:"Go to last page",toNextPage:"Go to next page",optionsToggle:"",currPage:"Current page",paginationTitle:"Pagination",ofWord:"of"},firstPage:1,page:0,offset:0,defaultToFullPage:!1,itemsStart:null,itemsEnd:null,perPageOptions:O,widgetId:"options-menu",onSetPage:()=>{},onPerPageSelect:()=>{},onFirstClick:()=>{},onPreviousClick:()=>{},onNextClick:()=>{},onPageInput:()=>{},onLastClick:()=>{},ouiaSafe:!0,perPageComponent:"div"}},64642:(e,t,a)=>{a.d(t,{v:()=>o});var i=a(92950);const o=({firstIndex:e=0,lastIndex:t=0,itemCount:a=0,itemsTitle:o="items",ofWord:n="of"})=>i.createElement(i.Fragment,null,i.createElement("b",null,e," - ",t)," ",n," ",i.createElement("b",null,a)," ",o);o.displayName="ToggleTemplate"},94949:(e,t,a)=>{a.d(t,{Yw:()=>n,ZP:()=>s,tH:()=>o});var i=a(40400);const o={name:"AngleDoubleLeftIcon",height:512,width:448,svgPath:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",yOffset:0,xOffset:0},n=(0,i.IU)(o),s=n},94086:(e,t,a)=>{a.d(t,{Ki:()=>o,ZP:()=>s,jN:()=>n});var i=a(40400);const o={name:"AngleDoubleRightIcon",height:512,width:448,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",yOffset:0,xOffset:0},n=(0,i.IU)(o),s=n},18219:(e,t,a)=>{a.d(t,{Z:()=>i}),a(93398);const i={divider:"pf-c-divider",modifiers:{plain:"pf-m-plain",text:"pf-m-text",active:"pf-m-active",expanded:"pf-m-expanded",disabled:"pf-m-disabled",top:"pf-m-top",alignRight:"pf-m-align-right",static:"pf-m-static"},optionsMenu:"pf-c-options-menu",optionsMenuGroup:"pf-c-options-menu__group",optionsMenuGroupTitle:"pf-c-options-menu__group-title",optionsMenuMenu:"pf-c-options-menu__menu",optionsMenuMenuItem:"pf-c-options-menu__menu-item",optionsMenuMenuItemIcon:"pf-c-options-menu__menu-item-icon",optionsMenuToggle:"pf-c-options-menu__toggle",optionsMenuToggleButton:"pf-c-options-menu__toggle-button",optionsMenuToggleButtonIcon:"pf-c-options-menu__toggle-button-icon",optionsMenuToggleIcon:"pf-c-options-menu__toggle-icon",optionsMenuToggleText:"pf-c-options-menu__toggle-text",themeDark:"pf-theme-dark"}}}]);