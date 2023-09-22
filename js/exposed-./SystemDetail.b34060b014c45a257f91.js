(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[9517,4820,1483],{32203:(o,l,n)=>{"use strict";n.d(l,{H:()=>m,Z:()=>c});var e=n(70655),t=n(92950),f=n(54918),s=n(38296),a=n(62472);const m=t.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=o=>{var{children:l=null,id:n="",className:r="",component:p="article",isHoverable:i=!1,isCompact:d=!1,isSelectable:O=!1,isSelectableRaised:u=!1,isSelected:_=!1,isDisabledRaised:C=!1,isFlat:g=!1,isExpanded:x=!1,isRounded:w=!1,isLarge:h=!1,isFullHeight:v=!1,isPlain:b=!1,ouiaId:R,ouiaSafe:y=!0,hasSelectableInput:S=!1,selectableInputAriaLabel:L,onSelectableInputChange:M=(()=>{})}=o,Z=(0,e.__rest)(o,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const j=p,X=(0,a.S$)(c.displayName,R,y),[N,I]=t.useState(""),[P,E]=t.useState();d&&h&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),h=!1);const T=t.useRef(!1);return t.useEffect((()=>{L?E({"aria-label":L}):N?E({"aria-labelledby":N}):S&&!T.current&&(E({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[S,L,N]),t.createElement(m.Provider,{value:{cardId:n,registerTitleId:o=>{I(o),T.current=!!o},isExpanded:x}},S&&t.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},P,{type:"checkbox",checked:_,onChange:o=>M(n,o),disabled:C,tabIndex:-1})),t.createElement(j,Object.assign({id:n,className:(0,s.i)(f.Z.card,d&&f.Z.modifiers.compact,x&&f.Z.modifiers.expanded,g&&f.Z.modifiers.flat,w&&f.Z.modifiers.rounded,h&&f.Z.modifiers.displayLg,v&&f.Z.modifiers.fullHeight,b&&f.Z.modifiers.plain,C?(0,s.i)(f.Z.modifiers.nonSelectableRaised):u?(0,s.i)(f.Z.modifiers.selectableRaised,_&&f.Z.modifiers.selectedRaised):O||i?(0,s.i)(f.Z.modifiers.selectable,_&&f.Z.modifiers.selected):"",r),tabIndex:O||u?"0":void 0},Z,X),l))};c.displayName="Card"},62394:(o,l,n)=>{"use strict";n.d(l,{e:()=>a});var e=n(70655),t=n(92950),f=n(54918),s=n(38296);const a=o=>{var{children:l=null,className:n="",component:a="div",isFilled:m=!0}=o,c=(0,e.__rest)(o,["children","className","component","isFilled"]);const r=a;return t.createElement(r,Object.assign({className:(0,s.i)(f.Z.cardBody,!m&&f.Z.modifiers.noFill,n)},c),l)};a.displayName="CardBody"},68340:(o,l,n)=>{"use strict";n.d(l,{q:()=>e,x:()=>c});var e,t=n(70655),f=n(92950),s=n(38296),a=n(62873),m=n(62472);!function(o){o.h1="h1",o.h2="h2",o.h3="h3",o.h4="h4",o.h5="h5",o.h6="h6",o.p="p",o.a="a",o.small="small",o.blockquote="blockquote",o.pre="pre"}(e||(e={}));const c=o=>{var{children:l=null,className:n="",component:r=e.p,isVisitedLink:p=!1,ouiaId:i,ouiaSafe:d=!0}=o,O=(0,t.__rest)(o,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const u=r,_=(0,m.S$)(c.displayName,i,d);return f.createElement(u,Object.assign({},_,O,{"data-pf-content":!0,className:(0,s.i)(p&&r===e.a&&a.Z.modifiers.visited,n)}),l)};c.displayName="Text"},68774:(o,l,n)=>{"use strict";n.d(l,{D:()=>a});var e=n(70655),t=n(92950),f=n(62873),s=n(38296);const a=o=>{var{children:l,className:n="",isVisited:a=!1}=o,m=(0,e.__rest)(o,["children","className","isVisited"]);return t.createElement("div",Object.assign({},m,{className:(0,s.i)(f.Z.content,a&&f.Z.modifiers.visited,n)}),l)};a.displayName="TextContent"},25834:(o,l,n)=>{"use strict";n.d(l,{F:()=>e,G:()=>m});var e,t=n(70655),f=n(92950),s=n(62873),a=n(38296);!function(o){o.ul="ul",o.ol="ol",o.dl="dl"}(e||(e={}));const m=o=>{var{children:l=null,className:n="",component:m=e.ul,isPlain:c=!1}=o,r=(0,t.__rest)(o,["children","className","component","isPlain"]);const p=m;return f.createElement(p,Object.assign({},r,{className:(0,a.i)(c&&s.Z.modifiers.plain,n)}),l)};m.displayName="TextList"},78140:(o,l,n)=>{"use strict";n.d(l,{T:()=>a,v:()=>e});var e,t=n(70655),f=n(92950),s=n(38296);!function(o){o.li="li",o.dt="dt",o.dd="dd"}(e||(e={}));const a=o=>{var{children:l=null,className:n="",component:a=e.li}=o,m=(0,t.__rest)(o,["children","className","component"]);const c=a;return f.createElement(c,Object.assign({},m,{className:(0,s.i)(n)}),l)};a.displayName="TextListItem"},50693:(o,l,n)=>{"use strict";n.d(l,{r:()=>r});var e=n(70655),t=n(92950),f=n(3246),s=n(38296),a=n(54764),m=n(77712),c=n(80164);const r=o=>{var{children:l=null,className:n="",component:r="div",hasGutter:p,span:i=null,order:d,style:O}=o,u=(0,e.__rest)(o,["children","className","component","hasGutter","span","order","style"]);const _=[f.Z.grid,i&&f.Z.modifiers[`all_${i}Col`]],C=r;return Object.entries(a.a).forEach((([o,l])=>{const n=o,e=u[n];e&&_.push(f.Z.modifiers[`all_${e}ColOn${l}`]),delete u[n]})),t.createElement(C,Object.assign({className:(0,s.i)(..._,p&&f.Z.modifiers.gutter,n),style:O||d?Object.assign(Object.assign({},O),(0,c.x8)(d,m.T.name)):void 0},u),l)};r.displayName="Grid"},16475:(o,l,n)=>{"use strict";n.d(l,{P:()=>r});var e=n(70655),t=n(92950),f=n(3246),s=n(38296),a=n(54764),m=n(77712),c=n(80164);const r=o=>{var{children:l=null,className:n="",component:r="div",span:p=null,rowSpan:i=null,offset:d=null,order:O,style:u}=o,_=(0,e.__rest)(o,["children","className","component","span","rowSpan","offset","order","style"]);const C=[f.Z.gridItem,p&&f.Z.modifiers[`${p}Col`],i&&f.Z.modifiers[`${i}Row`],d&&f.Z.modifiers[`offset_${d}Col`]],g=r;return Object.entries(a.a).forEach((([o,l])=>{const n=o,e=`${n}RowSpan`,t=`${n}Offset`,s=_[n],a=_[e],m=_[t];s&&C.push(f.Z.modifiers[`${s}ColOn${l}`]),a&&C.push(f.Z.modifiers[`${a}RowOn${l}`]),m&&C.push(f.Z.modifiers[`offset_${m}ColOn${l}`]),delete _[n],delete _[e],delete _[t]})),t.createElement(g,Object.assign({className:(0,s.i)(...C,n),style:u||O?Object.assign(Object.assign({},u),(0,c.x8)(O,m.T.name)):void 0},_),l)};r.displayName="GridItem"},54764:(o,l,n)=>{"use strict";var e,t;n.d(l,{a:()=>t,t:()=>e}),function(o){o.xs="xs",o.sm="sm",o.md="md",o.lg="lg",o.xl="xl",o["2xl"]="2xl",o["3xl"]="3xl",o["4xl"]="4xl"}(e||(e={})),function(o){o.sm="Sm",o.md="Md",o.lg="Lg",o.xl="Xl",o.xl2="_2xl"}(t||(t={}))},71973:(o,l,n)=>{"use strict";n.d(l,{ZP:()=>s,fP:()=>f,gk:()=>t});var e=n(40400);const t={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},f=(0,e.IU)(t),s=f},98614:(o,l,n)=>{"use strict";n.d(l,{ZP:()=>s,de:()=>t,nQ:()=>f});var e=n(40400);const t={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},f=(0,e.IU)(t),s=f},54918:(o,l,n)=>{"use strict";n.d(l,{Z:()=>e}),n(80598);const e={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(o,l,n)=>{"use strict";n.d(l,{Z:()=>e}),n(10108);const e={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},3246:(o,l,n)=>{"use strict";n.d(l,{Z:()=>e}),n(72816);const e={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},77712:(o,l,n)=>{"use strict";n.d(l,{T:()=>e});const e={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"}},67230:function(o,l){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(o){for(var l,n=1,e=arguments.length;n<e;n++)for(var t in l=arguments[n])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},n.apply(this,arguments)};Object.defineProperty(l,"__esModule",{value:!0}),l.buildInsightsPath=void 0,l.buildInsightsPath=function(o,l,e,t){var f=("object"==typeof e?e.pathname:e)||"",s=/^\//.test(f),a=t?"/preview":"",m=l||o.getApp(),c=s?[a,o.getBundle(),m,f.replace(/^\//,"")].join("/"):f;return"object"==typeof e?n(n({},e),{pathname:c}):c}},76440:function(o,l,n){"use strict";var e=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(l,"__esModule",{value:!0});var t=n(62012),f=e(n(51124)),s=n(67230);l.default=function(o,l){var n=(0,t.useNavigate)(),e=(0,f.default)();return function(t,f){return n((0,s.buildInsightsPath)(e,o,t,f||l))}}},22663:(o,l,n)=>{"use strict";n.d(l,{Z:()=>i});var e=n(85893),t=n(92950),f=n.n(t),s=n(54025),a=n(8213),m=n(94184),c=n.n(m),r=function(){return r=Object.assign||function(o){for(var l,n=1,e=arguments.length;n<e;n++)for(var t in l=arguments[n])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},r.apply(this,arguments)},p=function(o){var l=o.appName,n=o.scope,t=o.module,f=o.fallback,m=void 0===f?(0,e.jsx)(a.Bullseye,{children:(0,e.jsx)(a.Spinner,{size:"xl"})}):f,p=o.innerRef,i=o.className,d=o.component,O=void 0===d?"section":d,u=function(o,l){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&l.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(e=Object.getOwnPropertySymbols(o);t<e.length;t++)l.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(o,e[t])&&(n[e[t]]=o[e[t]])}return n}(o,["appName","scope","module","fallback","innerRef","className","component"]),_=r({className:i,appName:l,module:t,scope:null!=n?n:l,ErrorComponent:m,ref:p,fallback:m},u);return(0,e.jsx)(O,r({className:c()(i,l)},{children:(0,e.jsx)(s.ScalprumComponent,r({},_))}))};const i=f().forwardRef((function(o,l){return(0,e.jsx)(p,r({innerRef:l},o))}))},62410:(o,l,n)=>{"use strict";n.d(l,{Z:()=>C});var e=n(85893),t=n(92950),f=n.n(t),s=n(8213),a=function(){return a=Object.assign||function(o){for(var l,n=1,e=arguments.length;n<e;n++)for(var t in l=arguments[n])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},a.apply(this,arguments)},m=36e5,c=24*m,r=30*c,p=365*c,i=function(o,l){return"".concat(o," ").concat(o>1?"".concat(l,"s"):l," ago")},d=[{rightBound:1/0,description:function(o){return i(Math.round(o/p),"year")}},{rightBound:p,description:function(o){return i(Math.round(o/r),"month")}},{rightBound:r,description:function(o){return i(Math.round(o/c),"day")}},{rightBound:c,description:function(o){return i(Math.round(o/m),"hour")}},{rightBound:m,description:function(o){return i(Math.round(o/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],O=function(o){return o.toUTCString().split(",")[1].slice(0,-7).trim()},u=function(o){return{exact:function(o){return O(o)+" UTC"},onlyDate:function(o){return O(o).slice(0,-6)},relative:function(o){return d.reduce((function(l,n){return n.rightBound>Date.now()-o.getTime()?n.description(Date.now()-o.getTime()):l}),O(o))},invalid:function(){return"Invalid date"}}[o]},_=function(o,l,n){return{exact:function(l){return u(o)(l)},onlyDate:function(l){return u(o)(l)},relative:function(t){return function(o,l,n,t){return void 0===t&&(t=""),(0,e.jsx)(s.Tooltip,a({},n,{content:(0,e.jsxs)("div",{children:[t,o]})},{children:l}))}(u("exact")(t),(0,e.jsx)("span",{children:u(o)(t)}),l,n)},invalid:function(){return"Invalid date"}}[o]};const C=function(o){var l=o.date,n=o.type,t=void 0===n?"relative":n,s=o.extraTitle,a=o.tooltipProps,m=l instanceof Date?l:new Date(l),c=null==l||"Invalid Date"===m.toString()?"invalid":t;return(0,e.jsx)(f().Fragment,{children:_(c,a,s)(m)})}},5311:(o,l,n)=>{"use strict";n.d(l,{Z:()=>m});var e=n(92950),t=n.n(e),f=n(45697),s=n.n(f),a=function(o){var l=o.operatingSystem;if("RHEL"===(null==l?void 0:l.name)){var n=l.major&&null!==l.minor&&"".concat(l.major,".").concat(null==l?void 0:l.minor)||null;return t().createElement("span",null,"RHEL ",n)}return t().createElement("span",null,(null==l?void 0:l.name)||"Not available")};a.propTypes={operatingSystem:s().shape({name:s().string,major:s().number,minor:s().number})};const m=a},79161:(o,l,n)=>{"use strict";n.d(l,{Z:()=>t});var e=n(7085);const t=function(o){var l=(0,e.useFlagsStatus)().flagsReady,n=(0,e.useFlag)(o);return!!l&&n}},17499:(o,l,n)=>{"use strict";n.r(l),n.d(l,{TextInputModal:()=>c.Z,default:()=>r});var e=n(87462),t=n(92950),f=n.n(t),s=n(60261),a=n(43107),m=n(79161),c=n(55426);const r=function(o){var l=(0,s.useSelector)((function(o){var l=o.systemProfileStore;return null==l?void 0:l.systemProfile})),n="edge"===(null==l?void 0:l.host_type),t=(0,m.Z)("edgeParity.inventory-system-detail"),c=(0,m.Z)("edgeParity.inventory-list");return f().createElement(a.default,(0,e.Z)({},o,{showImageDetails:t&&c&&n}))}},30187:()=>{},38299:()=>{},72816:()=>{},97326:(o,l,n)=>{"use strict";function e(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}n.d(l,{Z:()=>e})},15671:(o,l,n)=>{"use strict";function e(o,l){if(!(o instanceof l))throw new TypeError("Cannot call a class as a function")}n.d(l,{Z:()=>e})},43144:(o,l,n)=>{"use strict";n.d(l,{Z:()=>f});var e=n(49142);function t(o,l){for(var n=0;n<l.length;n++){var t=l[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,(0,e.Z)(t.key),t)}}function f(o,l,n){return l&&t(o.prototype,l),n&&t(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}},61120:(o,l,n)=>{"use strict";function e(o){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},e(o)}n.d(l,{Z:()=>e})},60136:(o,l,n)=>{"use strict";n.d(l,{Z:()=>t});var e=n(89611);function t(o,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(l&&l.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),l&&(0,e.Z)(o,l)}},82963:(o,l,n)=>{"use strict";n.d(l,{Z:()=>f});var e=n(71002),t=n(97326);function f(o,l){if(l&&("object"===(0,e.Z)(l)||"function"==typeof l))return l;if(void 0!==l)throw new TypeError("Derived constructors may only return object or undefined");return(0,t.Z)(o)}},89611:(o,l,n)=>{"use strict";function e(o,l){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},e(o,l)}n.d(l,{Z:()=>e})}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./SystemDetail.9953057138fc02b9e867d4c2edd10066.js.map