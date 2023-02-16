"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[8310],{32203:(e,t,a)=>{a.d(t,{H:()=>l,Z:()=>c});var n=a(70655),i=a(92950),s=a(54918),o=a(38296),r=a(62472);const l=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:a="",className:d="",component:p="article",isHoverable:m=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:g=!1,isSelected:v=!1,isDisabledRaised:h=!1,isFlat:b=!1,isExpanded:y=!1,isRounded:Z=!1,isLarge:S=!1,isFullHeight:N=!1,isPlain:_=!1,ouiaId:I,ouiaSafe:x=!0,hasSelectableInput:C=!1,selectableInputAriaLabel:E,onSelectableInputChange:T=(()=>{})}=e,P=(0,n.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const w=p,F=(0,r.S$)(c.displayName,I,x),[O,R]=i.useState(""),[D,H]=i.useState();u&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1);const M=i.useRef(!1);return i.useEffect((()=>{E?H({"aria-label":E}):O?H({"aria-labelledby":O}):C&&!M.current&&(H({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[C,E,O]),i.createElement(l.Provider,{value:{cardId:a,registerTitleId:e=>{R(e),M.current=!!e},isExpanded:y}},C&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${a}-input`},D,{type:"checkbox",checked:v,onChange:e=>T(a,e),disabled:h,tabIndex:-1})),i.createElement(w,Object.assign({id:a,className:(0,o.i)(s.Z.card,u&&s.Z.modifiers.compact,y&&s.Z.modifiers.expanded,b&&s.Z.modifiers.flat,Z&&s.Z.modifiers.rounded,S&&s.Z.modifiers.displayLg,N&&s.Z.modifiers.fullHeight,_&&s.Z.modifiers.plain,h?(0,o.i)(s.Z.modifiers.nonSelectableRaised):g?(0,o.i)(s.Z.modifiers.selectableRaised,v&&s.Z.modifiers.selectedRaised):f||m?(0,o.i)(s.Z.modifiers.selectable,v&&s.Z.modifiers.selected):"",d),tabIndex:f||g?"0":void 0},P,F),t))};c.displayName="Card"},62394:(e,t,a)=>{a.d(t,{e:()=>r});var n=a(70655),i=a(92950),s=a(54918),o=a(38296);const r=e=>{var{children:t=null,className:a="",component:r="div",isFilled:l=!0}=e,c=(0,n.__rest)(e,["children","className","component","isFilled"]);const d=r;return i.createElement(d,Object.assign({className:(0,o.i)(s.Z.cardBody,!l&&s.Z.modifiers.noFill,a)},c),t)};r.displayName="CardBody"},49734:(e,t,a)=>{a.d(t,{e:()=>r});var n=a(70655),i=a(92950),s=a(54918),o=a(38296);const r=e=>{var{children:t=null,className:a="",component:r="div"}=e,l=(0,n.__rest)(e,["children","className","component"]);const c=r;return i.createElement(c,Object.assign({className:(0,o.i)(s.Z.cardFooter,a)},l),t)};r.displayName="CardFooter"},70:(e,t,a)=>{a.d(t,{l:()=>l});var n=a(70655),i=a(92950),s=a(38296),o=a(54918),r=a(32203);const l=e=>{var{children:t=null,className:a="",component:l="div"}=e,c=(0,n.__rest)(e,["children","className","component"]);const{cardId:d,registerTitleId:p}=i.useContext(r.H),m=l,u=d?`${d}-title`:"";return i.useEffect((()=>(p(u),()=>p(""))),[p,u]),i.createElement(m,Object.assign({className:(0,s.i)(o.Z.cardTitle,a),id:u||void 0},c),t)};l.displayName="CardTitle"},56787:(e,t,a)=>{a.d(t,{L:()=>c});var n=a(70655),i=a(92950),s=a(73699),o=a(99355),r=a(17352),l=a(62472);const c=e=>{var{onSelect:t,ref:a,ouiaId:d,ouiaSafe:p,alignments:m,contextProps:u,menuAppendTo:f="inline",isFlipEnabled:g=!0,removeFindDomNode:v=!1,zIndex:h=9999}=e,b=(0,n.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return i.createElement(o.Dl.Provider,{value:Object.assign({onSelect:e=>t&&t(e),toggleTextClass:s.Z.dropdownToggleText,toggleIconClass:s.Z.dropdownToggleImage,toggleIndicatorClass:s.Z.dropdownToggleIcon,menuClass:s.Z.dropdownMenu,itemClass:s.Z.dropdownMenuItem,toggleClass:s.Z.dropdownToggle,baseClass:s.Z.dropdown,baseComponent:"div",sectionClass:s.Z.dropdownGroup,sectionTitleClass:s.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.Z.modifiers.disabled,plainTextClass:s.Z.modifiers.text,ouiaId:(0,l.Z1)(c.displayName,d),ouiaSafe:p,ouiaComponentType:c.displayName,alignments:m},u)},i.createElement(r.R,Object.assign({menuAppendTo:f,isFlipEnabled:g,removeFindDomNode:v,zIndex:h},b)))};c.displayName="Dropdown"},75728:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(70655),i=a(92950),s=a(5964),o=a(1024),r=a(73699),l=a(99355),c=a(38296),d=a(62472);const p=e=>{var{id:t="",children:a=null,className:m="",isOpen:u=!1,parentRef:f=null,getMenuRef:g=null,isDisabled:v=!1,isPlain:h=!1,isText:b=!1,isPrimary:y=!1,toggleVariant:Z="default",isActive:S=!1,onToggle:N=(e=>{}),icon:_=null,toggleIndicator:I=s.ZP,splitButtonItems:x,splitButtonVariant:C="checkbox","aria-haspopup":E,ouiaId:T,ouiaSafe:P,ref:w}=e,F=(0,n.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const O=(0,d.S$)(p.displayName,T,P),R=i.createElement(l.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:n,toggleIconClass:s})=>i.createElement(o.Z,Object.assign({},F,{id:t,className:m,isOpen:u,parentRef:f,getMenuRef:g,isActive:S,isDisabled:v,isPlain:h,isText:b,isPrimary:y,toggleVariant:Z,onToggle:N,"aria-haspopup":E},O,x&&{isSplitButton:!0,"aria-label":F["aria-label"]||"Select"}),_&&i.createElement("span",{className:(0,c.i)(s)},_),a&&i.createElement("span",{className:I&&(0,c.i)(e)},a),I&&i.createElement("span",{className:(0,c.i)(!x&&n)},i.createElement(I,null)))));return x?i.createElement("div",{className:(0,c.i)(r.Z.dropdownToggle,r.Z.modifiers.splitButton,"action"===C&&r.Z.modifiers.action,("primary"===Z||y)&&"action"===C&&r.Z.modifiers.primary,"secondary"===Z&&"action"===C&&r.Z.modifiers.secondary,v&&r.Z.modifiers.disabled)},x,R):R};p.displayName="DropdownToggle"},9947:(e,t,a)=>{a.d(t,{I:()=>n,u:()=>l});var n,i=a(70655),s=a(92950),o=a(38296),r=a(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(n||(n={}));const l=e=>{var{children:t,className:a="",variant:l=n.full,isFullHeight:c}=e,d=(0,i.__rest)(e,["children","className","variant","isFullHeight"]);return s.createElement("div",Object.assign({className:(0,o.i)(r.Z.emptyState,"xs"===l&&r.Z.modifiers.xs,"small"===l&&r.Z.modifiers.sm,"large"===l&&r.Z.modifiers.lg,"xl"===l&&r.Z.modifiers.xl,c&&r.Z.modifiers.fullHeight,a)},d),s.createElement("div",{className:(0,o.i)(r.Z.emptyStateContent)},t))};l.displayName="EmptyState"},75106:(e,t,a)=>{a.d(t,{B:()=>r});var n=a(70655),i=a(92950),s=a(38296),o=a(51203);const r=e=>{var{children:t,className:a=""}=e,r=(0,n.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,s.i)(o.Z.emptyStateBody,a)},r),t)};r.displayName="EmptyStateBody"},25834:(e,t,a)=>{a.d(t,{F:()=>n,G:()=>r});var n,i=a(70655),s=a(92950),o=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const r=e=>{var{children:t=null,className:a="",component:r=n.ul}=e,l=(0,i.__rest)(e,["children","className","component"]);const c=r;return s.createElement(c,Object.assign({},l,{className:(0,o.i)(a)}),t)};r.displayName="TextList"},78140:(e,t,a)=>{a.d(t,{T:()=>r,v:()=>n});var n,i=a(70655),s=a(92950),o=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const r=e=>{var{children:t=null,className:a="",component:r=n.li}=e,l=(0,i.__rest)(e,["children","className","component"]);const c=r;return s.createElement(c,Object.assign({},l,{className:(0,o.i)(a)}),t)};r.displayName="TextListItem"},71973:(e,t,a)=>{a.d(t,{ZP:()=>o,fP:()=>s,gk:()=>i});var n=a(40400);const i={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},s=(0,n.IU)(i),o=s},5964:(e,t,a)=>{a.d(t,{VA:()=>s,ZP:()=>o,kc:()=>i});var n=a(40400);const i={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,n.IU)(i),o=s},96733:(e,t,a)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=a(35183).IU(t.Z1),t.ZP=t.TF},54918:(e,t,a)=>{a.d(t,{Z:()=>n}),a(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},51203:(e,t,a)=>{a.d(t,{Z:()=>n}),a(81320);const n={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},21458:(e,t,a)=>{a.d(t,{wN:()=>s});var n=a(17558),i=function(){return i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},s=function(e){return{type:n.Dv,payload:i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},36494:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),i=a(63366),s=a(26685),o=a(35067),r=a(63480),l=a(26343);const c=[function(e){return"function"==typeof e?(0,l.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,l.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,l.dX)((function(t){return(0,r.Z)(e,t)})):void 0}],d=[function(e){return"function"==typeof e?(0,l.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,l.dX)((function(){return{}}))}];function p(e,t,a){return(0,n.Z)({},a,e,t)}const m=[function(e){return"function"==typeof e?function(e){return function(t,a){a.displayName;var n,i=a.pure,s=a.areMergedPropsEqual,o=!1;return function(t,a,r){var l=e(t,a,r);return o?i&&s(l,n)||(n=l):(o=!0,n=l),n}}}(e):void 0},function(e){return e?void 0:function(){return p}}];var u=a(38548),f=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function g(e,t,a){for(var n=t.length-1;n>=0;n--){var i=t[n](e);if(i)return i}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+a+" argument when connecting component "+n.wrappedComponentName+".")}}function v(e,t){return e===t}function h(e){var t=void 0===e?{}:e,a=t.connectHOC,r=void 0===a?s.Z:a,l=t.mapStateToPropsFactories,p=void 0===l?d:l,h=t.mapDispatchToPropsFactories,b=void 0===h?c:h,y=t.mergePropsFactories,Z=void 0===y?m:y,S=t.selectorFactory,N=void 0===S?u.ZP:S;return function(e,t,a,s){void 0===s&&(s={});var l=s,c=l.pure,d=void 0===c||c,m=l.areStatesEqual,u=void 0===m?v:m,h=l.areOwnPropsEqual,y=void 0===h?o.Z:h,S=l.areStatePropsEqual,_=void 0===S?o.Z:S,I=l.areMergedPropsEqual,x=void 0===I?o.Z:I,C=(0,i.Z)(l,f),E=g(e,p,"mapStateToProps"),T=g(t,b,"mapDispatchToProps"),P=g(a,Z,"mergeProps");return r(N,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:E,initMapDispatchToProps:T,initMergeProps:P,pure:d,areStatesEqual:u,areOwnPropsEqual:y,areStatePropsEqual:_,areMergedPropsEqual:x},C))}}const b=h()},50533:(e,t,a)=>{a.r(t),a.d(t,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,batch:()=>i.m,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR});var n=a(67133),i=a(71679);(0,a(9256).F)(i.m)}}]);
//# sourceMappingURL=../sourcemaps/8310.dd7e3278cbff4740505c1cee7c0a3238.js.map