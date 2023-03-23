"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5031],{41448:(e,a,t)=>{t.d(a,{b:()=>T,U:()=>I});var n=t(70655),i=t(92950),s=t(38296);t(81754);const l={alert:"pf-c-alert",alertAction:"pf-c-alert__action",alertActionGroup:"pf-c-alert__action-group",alertDescription:"pf-c-alert__description",alertIcon:"pf-c-alert__icon",alertTitle:"pf-c-alert__title",alertToggle:"pf-c-alert__toggle",alertToggleIcon:"pf-c-alert__toggle-icon",button:"pf-c-button",modifiers:{success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"};var r=t(79818),o=t(68778),c=t(43047),d=t(69957),m=t(53688),p=t(34143);const u={success:o.ZP,danger:c.ZP,warning:d.ZP,info:m.ZP,default:p.ZP},f=e=>{var{variant:a,customIcon:t,className:r=""}=e,o=(0,n.__rest)(e,["variant","customIcon","className"]);const c=u[a];return c?i.createElement("div",Object.assign({},o,{className:(0,s.i)(l.alertIcon,r)}),t||i.createElement(c,null)):null};var g=t(80164),v=t(62472),b=t(21133);const h="--pf-c-alert__title--max-lines";var _=t(75824),E=t(47173),N=t(93174);const x=e=>{var{"aria-label":a="",variantLabel:t,onToggleExpand:r,isExpanded:o=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:d,variantLabel:m}=i.useContext(b.w);return i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:r,"aria-expanded":o,"aria-label":""===a?`Toggle ${t||m} alert: ${d}`:a},c),i.createElement("span",{className:(0,s.i)(l.alertToggleIcon)},i.createElement(N.ZP,{"aria-hidden":"true"})))};var I;x.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(I||(I={}));const T=e=>{var{variant:a=I.default,isInline:t=!1,isPlain:o=!1,isLiveRegion:c=!1,variantLabel:d=`${(0,g.kC)(a)} alert:`,"aria-label":m=`${(0,g.kC)(a)} Alert`,actionClose:p,actionLinks:u,title:E,titleHeadingLevel:N="h4",children:C="",className:Z="",ouiaId:S,ouiaSafe:L=!0,timeout:y=!1,timeoutAnimation:w=3e3,onTimeout:F=(()=>{}),truncateTitle:R=0,tooltipPosition:k,customIcon:P,isExpandable:A=!1,toggleAriaLabel:O=`${(0,g.kC)(a)} alert details`,onMouseEnter:j=(()=>{}),onMouseLeave:H=(()=>{}),id:D}=e,$=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","titleHeadingLevel","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const M=(0,v.S$)(T.displayName,S,L,a),G=i.createElement(i.Fragment,null,i.createElement("span",{className:(0,s.i)(r.Z.screenReader)},d),E),z=i.useRef(null),B=i.useRef(),[V,q]=(0,i.useState)(!1);i.useEffect((()=>{if(!z.current||!R)return;z.current.style.setProperty(h,R.toString());const e=z.current&&z.current.offsetHeight<z.current.scrollHeight;V!==e&&q(e)}),[z,R,V]);const[U,W]=(0,i.useState)(!1),[J,K]=(0,i.useState)(!0),[Q,X]=(0,i.useState)(),[Y,ee]=(0,i.useState)(),ae=U&&J&&!Q&&!Y;i.useEffect((()=>{if((y=!0===y?8e3:Number(y))>0){const e=setTimeout((()=>W(!0)),y);return()=>clearTimeout(e)}}),[]),i.useEffect((()=>{const e=()=>{B.current&&(B.current.contains(document.activeElement)?(ee(!0),K(!1)):Y&&ee(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[Y]),i.useEffect((()=>{if(!1===Y||!1===Q){const e=setTimeout((()=>K(!0)),w);return()=>clearTimeout(e)}}),[Y,Q]),i.useEffect((()=>{ae&&F()}),[ae]);const[te,ne]=(0,i.useState)(!1);if(ae)return null;const ie=i.createElement(N,Object.assign({},V&&{tabIndex:0},{ref:z,className:(0,s.i)(l.alertTitle,R&&l.modifiers.truncate)}),G);return i.createElement("div",Object.assign({ref:B,className:(0,s.i)(l.alert,t&&l.modifiers.inline,o&&l.modifiers.plain,A&&l.modifiers.expandable,te&&l.modifiers.expanded,l.modifiers[a],Z),"aria-label":m},M,c&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{X(!0),K(!1),j(e)},onMouseLeave:e=>{X(!1),H(e)},id:D},$),A&&i.createElement(b.w.Provider,{value:{title:E,variantLabel:d}},i.createElement("div",{className:(0,s.i)(l.alertToggle)},i.createElement(x,{isExpanded:te,onToggleExpand:()=>{ne(!te)},"aria-label":O}))),i.createElement(f,{variant:a,customIcon:P}),V?i.createElement(_.u,{content:G,position:k},ie):ie,p&&i.createElement(b.w.Provider,{value:{title:E,variantLabel:d}},i.createElement("div",{className:(0,s.i)(l.alertAction)},p)),C&&(!A||A&&te)&&i.createElement("div",{className:(0,s.i)(l.alertDescription)},C),u&&i.createElement("div",{className:(0,s.i)(l.alertActionGroup)},u))};T.displayName="Alert"},21133:(e,a,t)=>{t.d(a,{w:()=>n});const n=t(92950).createContext(null)},32203:(e,a,t)=>{t.d(a,{H:()=>o,Z:()=>c});var n=t(70655),i=t(92950),s=t(54918),l=t(38296),r=t(62472);const o=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:a=null,id:t="",className:d="",component:m="article",isHoverable:p=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:g=!1,isSelected:v=!1,isDisabledRaised:b=!1,isFlat:h=!1,isExpanded:_=!1,isRounded:E=!1,isLarge:N=!1,isFullHeight:x=!1,isPlain:I=!1,ouiaId:T,ouiaSafe:C=!0,hasSelectableInput:Z=!1,selectableInputAriaLabel:S,onSelectableInputChange:L=(()=>{})}=e,y=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const w=m,F=(0,r.S$)(c.displayName,T,C),[R,k]=i.useState(""),[P,A]=i.useState();u&&N&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),N=!1);const O=i.useRef(!1);return i.useEffect((()=>{S?A({"aria-label":S}):R?A({"aria-labelledby":R}):Z&&!O.current&&(A({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[Z,S,R]),i.createElement(o.Provider,{value:{cardId:t,registerTitleId:e=>{k(e),O.current=!!e},isExpanded:_}},Z&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${t}-input`},P,{type:"checkbox",checked:v,onChange:e=>L(t,e),disabled:b,tabIndex:-1})),i.createElement(w,Object.assign({id:t,className:(0,l.i)(s.Z.card,u&&s.Z.modifiers.compact,_&&s.Z.modifiers.expanded,h&&s.Z.modifiers.flat,E&&s.Z.modifiers.rounded,N&&s.Z.modifiers.displayLg,x&&s.Z.modifiers.fullHeight,I&&s.Z.modifiers.plain,b?(0,l.i)(s.Z.modifiers.nonSelectableRaised):g?(0,l.i)(s.Z.modifiers.selectableRaised,v&&s.Z.modifiers.selectedRaised):f||p?(0,l.i)(s.Z.modifiers.selectable,v&&s.Z.modifiers.selected):"",d),tabIndex:f||g?"0":void 0},y,F),a))};c.displayName="Card"},62394:(e,a,t)=>{t.d(a,{e:()=>r});var n=t(70655),i=t(92950),s=t(54918),l=t(38296);const r=e=>{var{children:a=null,className:t="",component:r="div",isFilled:o=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const d=r;return i.createElement(d,Object.assign({className:(0,l.i)(s.Z.cardBody,!o&&s.Z.modifiers.noFill,t)},c),a)};r.displayName="CardBody"},49734:(e,a,t)=>{t.d(a,{e:()=>r});var n=t(70655),i=t(92950),s=t(54918),l=t(38296);const r=e=>{var{children:a=null,className:t="",component:r="div"}=e,o=(0,n.__rest)(e,["children","className","component"]);const c=r;return i.createElement(c,Object.assign({className:(0,l.i)(s.Z.cardFooter,t)},o),a)};r.displayName="CardFooter"},70:(e,a,t)=>{t.d(a,{l:()=>o});var n=t(70655),i=t(92950),s=t(38296),l=t(54918),r=t(32203);const o=e=>{var{children:a=null,className:t="",component:o="div"}=e,c=(0,n.__rest)(e,["children","className","component"]);const{cardId:d,registerTitleId:m}=i.useContext(r.H),p=o,u=d?`${d}-title`:"";return i.useEffect((()=>(m(u),()=>m(""))),[m,u]),i.createElement(p,Object.assign({className:(0,s.i)(l.Z.cardTitle,t),id:u||void 0},c),a)};o.displayName="CardTitle"},56787:(e,a,t)=>{t.d(a,{L:()=>c});var n=t(70655),i=t(92950),s=t(73699),l=t(99355),r=t(17352),o=t(62472);const c=e=>{var{onSelect:a,ref:t,ouiaId:d,ouiaSafe:m,alignments:p,contextProps:u,menuAppendTo:f="inline",isFlipEnabled:g=!0,removeFindDomNode:v=!1,zIndex:b=9999}=e,h=(0,n.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return i.createElement(l.Dl.Provider,{value:Object.assign({onSelect:e=>a&&a(e),toggleTextClass:s.Z.dropdownToggleText,toggleIconClass:s.Z.dropdownToggleImage,toggleIndicatorClass:s.Z.dropdownToggleIcon,menuClass:s.Z.dropdownMenu,itemClass:s.Z.dropdownMenuItem,toggleClass:s.Z.dropdownToggle,baseClass:s.Z.dropdown,baseComponent:"div",sectionClass:s.Z.dropdownGroup,sectionTitleClass:s.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.Z.modifiers.disabled,plainTextClass:s.Z.modifiers.text,ouiaId:(0,o.Z1)(c.displayName,d),ouiaSafe:m,ouiaComponentType:c.displayName,alignments:p},u)},i.createElement(r.R,Object.assign({menuAppendTo:f,isFlipEnabled:g,removeFindDomNode:v,zIndex:b},h)))};c.displayName="Dropdown"},68340:(e,a,t)=>{t.d(a,{q:()=>n,x:()=>c});var n,i=t(70655),s=t(92950),l=t(38296),r=t(62873),o=t(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(n||(n={}));const c=e=>{var{children:a=null,className:t="",component:d=n.p,isVisitedLink:m=!1,ouiaId:p,ouiaSafe:u=!0}=e,f=(0,i.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=d,v=(0,o.S$)(c.displayName,p,u);return s.createElement(g,Object.assign({},v,f,{"data-pf-content":!0,className:(0,l.i)(m&&d===n.a&&r.Z.modifiers.visited,t)}),a)};c.displayName="Text"},68774:(e,a,t)=>{t.d(a,{D:()=>r});var n=t(70655),i=t(92950),s=t(62873),l=t(38296);const r=e=>{var{children:a=null,className:t="",isVisited:r=!1}=e,o=(0,n.__rest)(e,["children","className","isVisited"]);return i.createElement("div",Object.assign({},o,{className:(0,l.i)(s.Z.content,r&&s.Z.modifiers.visited,t)}),a)};r.displayName="TextContent"},25834:(e,a,t)=>{t.d(a,{F:()=>n,G:()=>r});var n,i=t(70655),s=t(92950),l=t(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const r=e=>{var{children:a=null,className:t="",component:r=n.ul}=e,o=(0,i.__rest)(e,["children","className","component"]);const c=r;return s.createElement(c,Object.assign({},o,{className:(0,l.i)(t)}),a)};r.displayName="TextList"},78140:(e,a,t)=>{t.d(a,{T:()=>r,v:()=>n});var n,i=t(70655),s=t(92950),l=t(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const r=e=>{var{children:a=null,className:t="",component:r=n.li}=e,o=(0,i.__rest)(e,["children","className","component"]);const c=r;return s.createElement(c,Object.assign({},o,{className:(0,l.i)(t)}),a)};r.displayName="TextListItem"},54918:(e,a,t)=>{t.d(a,{Z:()=>n}),t(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,a,t)=>{t.d(a,{Z:()=>n}),t(10108);const n={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}}}]);