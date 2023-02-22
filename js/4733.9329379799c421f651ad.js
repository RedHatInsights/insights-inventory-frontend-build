"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4733],{75728:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(70655),n=a(92950),o=a(5964),s=a(1024),l=a(73699),r=a(99355),p=a(38296),g=a(62472);const c=e=>{var{id:t="",children:a=null,className:m="",isOpen:u=!1,parentRef:d=null,getMenuRef:P=null,isDisabled:f=!1,isPlain:h=!1,isText:C=!1,isPrimary:I=!1,toggleVariant:v="default",isActive:T=!1,onToggle:N=(e=>{}),icon:x=null,toggleIndicator:b=o.ZP,splitButtonItems:k,splitButtonVariant:E="checkbox","aria-haspopup":S,ouiaId:y,ouiaSafe:_,ref:M}=e,D=(0,i.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const w=(0,g.S$)(c.displayName,y,_),O=n.createElement(r.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:i,toggleIconClass:o})=>n.createElement(s.Z,Object.assign({},D,{id:t,className:m,isOpen:u,parentRef:d,getMenuRef:P,isActive:T,isDisabled:f,isPlain:h,isText:C,isPrimary:I,toggleVariant:v,onToggle:N,"aria-haspopup":S},w,k&&{isSplitButton:!0,"aria-label":D["aria-label"]||"Select"}),x&&n.createElement("span",{className:(0,p.i)(o)},x),a&&n.createElement("span",{className:b&&(0,p.i)(e)},a),b&&n.createElement("span",{className:(0,p.i)(!k&&i)},n.createElement(b,null)))));return k?n.createElement("div",{className:(0,p.i)(l.Z.dropdownToggle,l.Z.modifiers.splitButton,"action"===E&&l.Z.modifiers.action,("primary"===v||I)&&"action"===E&&l.Z.modifiers.primary,"secondary"===v&&"action"===E&&l.Z.modifiers.secondary,f&&l.Z.modifiers.disabled)},k,O):O};c.displayName="DropdownToggle"},44733:(e,t,a)=>{a.d(t,{t:()=>L,a:()=>w});var i=a(70655),n=a(92950),o=a(64642);a(46928);const s="pf-m-bottom",l="pf-m-static",r="pf-m-first",p="pf-m-last",g="pf-m-sticky",c="pf-m-compact",m="pf-c-pagination__nav-control";var u=a(38296),d=a(80164),P=a(71973),f=a(94949),h=a(93174),C=a(94086),I=a(47173),v=a(1774);class T extends n.Component{constructor(e){super(e),this.handleNewPage=(e,t)=>{const{perPage:a,onSetPage:i}=this.props;return i(e,t,a,(t-1)*a,t*a)},this.state={userInputPage:this.props.page}}static parseInteger(e,t){let a=Number.parseInt(e,10);return Number.isNaN(a)||(a=a>t?t:a,a=a<1?1:a),a}onChange(e,t){const a=T.parseInteger(e.target.value,t);this.setState({userInputPage:Number.isNaN(a)?e.target.value:a})}onKeyDown(e,t,a,i){if(e.key===v.yu.Enter){const n=T.parseInteger(this.state.userInputPage,a);i(e,Number.isNaN(n)?t:n),this.handleNewPage(e,Number.isNaN(n)?t:n)}}componentDidUpdate(e){this.props.page!==e.page&&this.props.page<=this.props.lastPage&&this.state.userInputPage!==this.props.page&&this.setState({userInputPage:this.props.page})}render(){const e=this.props,{page:t,perPage:a,onSetPage:o,isDisabled:s,itemCount:l,lastPage:g,firstPage:c,pagesTitle:v,pagesTitlePlural:T,toLastPage:N,toNextPage:x,toFirstPage:b,toPreviousPage:k,currPage:E,paginationTitle:S,ofWord:y,onNextClick:_,onPreviousClick:M,onFirstClick:D,onLastClick:w,onPageInput:O,className:Z,isCompact:L}=e,W=(0,i.__rest)(e,["page","perPage","onSetPage","isDisabled","itemCount","lastPage","firstPage","pagesTitle","pagesTitlePlural","toLastPage","toNextPage","toFirstPage","toPreviousPage","currPage","paginationTitle","ofWord","onNextClick","onPreviousClick","onFirstClick","onLastClick","onPageInput","className","isCompact"]),{userInputPage:F}=this.state;return n.createElement("nav",Object.assign({className:(0,u.i)("pf-c-pagination__nav",Z),"aria-label":S},W),!L&&n.createElement("div",{className:(0,u.i)(m,r)},n.createElement(I.zx,{variant:I.Wu.plain,isDisabled:s||t===c||0===t,"aria-label":b,"data-action":"first",onClick:e=>{D(e,1),this.handleNewPage(e,1),this.setState({userInputPage:1})}},n.createElement(f.ZP,null))),n.createElement("div",{className:m},n.createElement(I.zx,{variant:I.Wu.plain,isDisabled:s||t===c||0===t,"data-action":"previous",onClick:e=>{const a=t-1>=1?t-1:1;M(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})},"aria-label":k},n.createElement(P.ZP,null))),!L&&n.createElement("div",{className:"pf-c-pagination__nav-page-select"},n.createElement("input",{className:(0,u.i)("pf-c-form-control"),"aria-label":E,type:"number",disabled:s||l&&t===c&&t===g&&l>=0||0===t,min:g<=0&&c<=0?0:1,max:g,value:F,onKeyDown:e=>this.onKeyDown(e,t,g,O),onChange:e=>this.onChange(e,g)}),(l||0===l)&&n.createElement("span",{"aria-hidden":"true"},y," ",v?(0,d._6)(g,v,T):g)),n.createElement("div",{className:m},n.createElement(I.zx,{variant:I.Wu.plain,isDisabled:s||t===g,"aria-label":x,"data-action":"next",onClick:e=>{const a=t+1<=g?t+1:g;_(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})}},n.createElement(h.ZP,null))),!L&&n.createElement("div",{className:(0,u.i)(m,p)},n.createElement(I.zx,{variant:I.Wu.plain,isDisabled:s||t===g,"aria-label":N,"data-action":"last",onClick:e=>{w(e,g),this.handleNewPage(e,g),this.setState({userInputPage:g})}},n.createElement(C.ZP,null))))}}T.displayName="Navigation",T.defaultProps={className:"",isDisabled:!1,isCompact:!1,lastPage:0,firstPage:0,pagesTitle:"",pagesTitlePlural:"",toLastPage:"Go to last page",toNextPage:"Go to next page",toFirstPage:"Go to first page",toPreviousPage:"Go to previous page",currPage:"Current page",paginationTitle:"Pagination",ofWord:"of",onNextClick:()=>{},onPreviousClick:()=>{},onFirstClick:()=>{},onLastClick:()=>{},onPageInput:()=>{}};var N=a(18219),x=a(84457),b=a(99355),k=a(17352),E=a(98614),S=a(75728);const y=({itemsTitle:e="items",optionsToggle:t,itemsPerPageTitle:a="Items per page",ofWord:i="of",firstIndex:o=0,lastIndex:s=0,itemCount:l,widgetId:r="",showToggle:p=!0,onToggle:g=(e=>{}),isOpen:c=!1,isDisabled:m=!1,parentRef:P=null,toggleTemplate:f,onEnter:h=null,perPageComponent:C="div"})=>{const I="div"===C,v=(0,u.i)(N.Z.optionsMenuToggle,m&&N.Z.modifiers.disabled,N.Z.modifiers.plain,N.Z.modifiers.text),T="string"==typeof f?(0,d.tJ)(f,{firstIndex:o,lastIndex:s,ofWord:i,itemCount:l,itemsTitle:e}):n.createElement(f,{firstIndex:o,lastIndex:s,ofWord:i,itemCount:l,itemsTitle:e}),x=p&&n.createElement(n.Fragment,null,I&&n.createElement("span",{className:(0,u.i)(N.Z.optionsMenuToggleText)},T),n.createElement(S.Z,Object.assign({onEnter:h,"aria-label":I?t||"Items per page":t,onToggle:g,isDisabled:m||l&&l<=0,isOpen:c},r&&{id:`${r}-toggle`},{className:I?N.Z.optionsMenuToggleButton:v,parentRef:P,"aria-haspopup":"listbox"}),!I&&T));return I?n.createElement("div",{className:v},x):x};y.displayName="OptionsToggle";class _ extends n.Component{constructor(e){super(e),this.parentRef=n.createRef(),this.onToggle=e=>{this.setState({isOpen:e})},this.onSelect=()=>{this.setState((e=>({isOpen:!e.isOpen})))},this.handleNewPerPage=(e,t)=>{const{page:a,onPerPageSelect:i,itemCount:n,defaultToFullPage:o}=this.props;let s=a;for(;Math.ceil(n/t)<s;)s--;if(o&&n/t!==s)for(;s>1&&n-t*s<0;)s--;return i(e,t,s,(s-1)*t,s*t)},this.renderItems=()=>{const{perPageOptions:e,perPage:t,perPageSuffix:a}=this.props;return e.map((({value:e,title:i})=>n.createElement(x.h,{key:e,component:"button","data-action":`per-page-${e}`,className:(0,u.i)(t===e&&"pf-m-selected"),onClick:t=>this.handleNewPerPage(t,e)},i,` ${a}`,t===e&&n.createElement("div",{className:(0,u.i)(N.Z.optionsMenuMenuItemIcon)},n.createElement(E.ZP,null)))))},this.state={isOpen:!1}}render(){const{widgetId:e,isDisabled:t,itemsPerPageTitle:a,dropDirection:i,optionsToggle:o,perPageOptions:s,toggleTemplate:l,firstIndex:r,lastIndex:p,itemCount:g,itemsTitle:c,ofWord:m,perPageComponent:u}=this.props,{isOpen:d}=this.state;return n.createElement(b.Dl.Provider,{value:Object.assign(Object.assign({},e&&{id:e}),{onSelect:this.onSelect,toggleIndicatorClass:"div"===u?N.Z.optionsMenuToggleButtonIcon:N.Z.optionsMenuToggleIcon,toggleTextClass:N.Z.optionsMenuToggleText,menuClass:N.Z.optionsMenuMenu,itemClass:N.Z.optionsMenuMenuItem,toggleClass:" ",baseClass:N.Z.optionsMenu,disabledClass:N.Z.modifiers.disabled,menuComponent:"ul",baseComponent:"div",ouiaComponentType:_.displayName})},n.createElement(k.R,{direction:i,isOpen:d,toggle:n.createElement(y,{optionsToggle:o,itemsPerPageTitle:a,showToggle:s&&s.length>0,onToggle:this.onToggle,isOpen:d,widgetId:e,firstIndex:r,lastIndex:p,itemCount:g,itemsTitle:c,ofWord:m,toggleTemplate:l,parentRef:this.parentRef.current,isDisabled:t,perPageComponent:u}),dropdownItems:this.renderItems(),isPlain:!0}))}}_.displayName="PaginationOptionsMenu",_.defaultProps={className:"",widgetId:"",isDisabled:!1,dropDirection:b.dw.down,perPageOptions:[],itemsPerPageTitle:"Items per page",perPageSuffix:"per page",optionsToggle:"",ofWord:"of",perPage:0,firstIndex:0,lastIndex:0,defaultToFullPage:!1,itemsTitle:"items",toggleTemplate:o.v,onPerPageSelect:()=>null,perPageComponent:"div"};var M=a(62472);const D="--pf-c-pagination__nav-page-select--c-form-control--width-chars";var w;!function(e){e.bottom="bottom",e.top="top"}(w||(w={}));const O=[{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],Z=(e,t)=>{if(!t)return;const a=String(e).length;a>=3?t.style.setProperty(D,`${a}`):t.style.setProperty(D,"2")};class L extends n.Component{constructor(){super(...arguments),this.paginationRef=n.createRef(),this.state={ouiaStateId:(0,M.ql)(L.displayName,this.props.variant)}}getLastPage(){const{itemCount:e,perPage:t,page:a}=this.props;return e||0===e?Math.ceil(e/t)||0:a+1}componentDidMount(){const e=this.paginationRef.current;Z(this.getLastPage(),e)}componentDidUpdate(e){const t=this.paginationRef.current;e.perPage===this.props.perPage&&e.itemCount===this.props.itemCount||Z(this.getLastPage(),t)}render(){const e=this.props,{children:t,className:a,variant:r,isDisabled:p,isCompact:m,isStatic:P,isSticky:f,perPage:h,titles:C,firstPage:I,page:v,offset:N,defaultToFullPage:x,itemCount:b,itemsStart:k,itemsEnd:E,perPageOptions:S,dropDirection:y,widgetId:D,toggleTemplate:O,onSetPage:Z,onPerPageSelect:W,onFirstClick:F,onPreviousClick:R,onNextClick:z,onPageInput:B,onLastClick:G,ouiaId:$,ouiaSafe:j,perPageComponent:A}=e,U=(0,i.__rest)(e,["children","className","variant","isDisabled","isCompact","isStatic","isSticky","perPage","titles","firstPage","page","offset","defaultToFullPage","itemCount","itemsStart","itemsEnd","perPageOptions","dropDirection","widgetId","toggleTemplate","onSetPage","onPerPageSelect","onFirstClick","onPreviousClick","onNextClick","onPageInput","onLastClick","ouiaId","ouiaSafe","perPageComponent"]),V=y||("bottom"!==r||P?"down":"up");let K=v;!K&&N&&(K=Math.ceil(N/h)),0!==K||b||(K=1);const J=this.getLastPage();let q=(K-1)*h+1,H=K*h;(b||0===b)&&(q=b<=0?0:(K-1)*h+1,K<I&&b>0?K=I:K>J&&(K=J),b>=0&&(H=K===J||0===b?b:K*h));const Y={firstIndex:q,lastIndex:H,itemCount:b,itemsTitle:C.items,ofWord:C.ofWord};return n.createElement("div",Object.assign({ref:this.paginationRef,className:(0,u.i)("pf-c-pagination",r===w.bottom&&s,m&&c,P&&l,f&&g,a)},D&&{id:`${D}-${r}-pagination`},(0,M.dp)(L.displayName,void 0!==$?$:this.state.ouiaStateId,j),U),r===w.top&&n.createElement("div",{className:(0,u.i)("pf-c-pagination__total-items")},O&&"string"==typeof O&&(0,d.tJ)(O,Y),O&&"string"!=typeof O&&O(Y),!O&&n.createElement(o.v,{firstIndex:q,lastIndex:H,itemCount:b,itemsTitle:C.items,ofWord:C.ofWord})),n.createElement(_,{itemsPerPageTitle:C.itemsPerPage,perPageSuffix:C.perPageSuffix,itemsTitle:m?"":C.items,optionsToggle:C.optionsToggle,perPageOptions:S,firstIndex:null!==k?k:q,lastIndex:null!==E?E:H,ofWord:C.ofWord,defaultToFullPage:x,itemCount:b,page:K,perPage:h,lastPage:J,onPerPageSelect:W,dropDirection:V,widgetId:`${D}-${r}`,toggleTemplate:O,isDisabled:p,perPageComponent:A}),n.createElement(T,{pagesTitle:C.page,pagesTitlePlural:C.pages,toLastPage:C.toLastPage,toPreviousPage:C.toPreviousPage,toNextPage:C.toNextPage,toFirstPage:C.toFirstPage,currPage:C.currPage,paginationTitle:C.paginationTitle,ofWord:C.ofWord,page:b&&b<=0?0:K,perPage:h,itemCount:b,firstPage:null!==k?k:1,lastPage:J,onSetPage:Z,onFirstClick:F,onPreviousClick:R,onNextClick:z,onLastClick:G,onPageInput:B,isDisabled:p,isCompact:m}),t)}}L.displayName="Pagination",L.defaultProps={children:null,className:"",variant:w.top,isDisabled:!1,isCompact:!1,isSticky:!1,perPage:O[0].value,titles:{items:"",page:"",pages:"",itemsPerPage:"Items per page",perPageSuffix:"per page",toFirstPage:"Go to first page",toPreviousPage:"Go to previous page",toLastPage:"Go to last page",toNextPage:"Go to next page",optionsToggle:"",currPage:"Current page",paginationTitle:"Pagination",ofWord:"of"},firstPage:1,page:0,offset:0,defaultToFullPage:!1,itemsStart:null,itemsEnd:null,perPageOptions:O,widgetId:"options-menu",onSetPage:()=>{},onPerPageSelect:()=>{},onFirstClick:()=>{},onPreviousClick:()=>{},onNextClick:()=>{},onPageInput:()=>{},onLastClick:()=>{},ouiaSafe:!0,perPageComponent:"div"}},64642:(e,t,a)=>{a.d(t,{v:()=>n});var i=a(92950);const n=({firstIndex:e=0,lastIndex:t=0,itemCount:a=0,itemsTitle:n="items",ofWord:o="of"})=>i.createElement(i.Fragment,null,i.createElement("b",null,e," - ",t)," ",o," ",i.createElement("b",null,a)," ",n);n.displayName="ToggleTemplate"},94949:(e,t,a)=>{a.d(t,{Yw:()=>o,ZP:()=>s,tH:()=>n});var i=a(40400);const n={name:"AngleDoubleLeftIcon",height:512,width:448,svgPath:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",yOffset:0,xOffset:0},o=(0,i.IU)(n),s=o},94086:(e,t,a)=>{a.d(t,{Ki:()=>n,ZP:()=>s,jN:()=>o});var i=a(40400);const n={name:"AngleDoubleRightIcon",height:512,width:448,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",yOffset:0,xOffset:0},o=(0,i.IU)(n),s=o},71973:(e,t,a)=>{a.d(t,{ZP:()=>s,fP:()=>o,gk:()=>n});var i=a(40400);const n={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},o=(0,i.IU)(n),s=o},5964:(e,t,a)=>{a.d(t,{VA:()=>o,ZP:()=>s,kc:()=>n});var i=a(40400);const n={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},o=(0,i.IU)(n),s=o},18219:(e,t,a)=>{a.d(t,{Z:()=>i}),a(93398);const i={divider:"pf-c-divider",modifiers:{plain:"pf-m-plain",text:"pf-m-text",active:"pf-m-active",expanded:"pf-m-expanded",disabled:"pf-m-disabled",top:"pf-m-top",alignRight:"pf-m-align-right",static:"pf-m-static"},optionsMenu:"pf-c-options-menu",optionsMenuGroup:"pf-c-options-menu__group",optionsMenuGroupTitle:"pf-c-options-menu__group-title",optionsMenuMenu:"pf-c-options-menu__menu",optionsMenuMenuItem:"pf-c-options-menu__menu-item",optionsMenuMenuItemIcon:"pf-c-options-menu__menu-item-icon",optionsMenuToggle:"pf-c-options-menu__toggle",optionsMenuToggleButton:"pf-c-options-menu__toggle-button",optionsMenuToggleButtonIcon:"pf-c-options-menu__toggle-button-icon",optionsMenuToggleIcon:"pf-c-options-menu__toggle-icon",optionsMenuToggleText:"pf-c-options-menu__toggle-text",themeDark:"pf-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/4733.5c6b90f003469c94a7a2634915953ff5.js.map