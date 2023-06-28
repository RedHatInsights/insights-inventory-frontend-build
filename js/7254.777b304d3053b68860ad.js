(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[7254],{32203:(e,a,t)=>{"use strict";t.d(a,{H:()=>c,Z:()=>d});var s=t(70655),l=t(92950),i=t(54918),r=t(38296),n=t(62472);const c=l.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),d=e=>{var{children:a=null,id:t="",className:o="",component:m="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:u=!1,isSelectableRaised:g=!1,isSelected:h=!1,isDisabledRaised:b=!1,isFlat:v=!1,isExpanded:E=!1,isRounded:_=!1,isLarge:N=!1,isFullHeight:Z=!1,isPlain:y=!1,ouiaId:C,ouiaSafe:I=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:R,onSelectableInputChange:S=(()=>{})}=e,T=(0,s.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const H=m,O=(0,n.S$)(d.displayName,C,I),[F,A]=l.useState(""),[k,j]=l.useState();f&&N&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),N=!1);const L=l.useRef(!1);return l.useEffect((()=>{R?j({"aria-label":R}):F?j({"aria-labelledby":F}):x&&!L.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,R,F]),l.createElement(c.Provider,{value:{cardId:t,registerTitleId:e=>{A(e),L.current=!!e},isExpanded:E}},x&&l.createElement("input",Object.assign({className:"pf-screen-reader",id:`${t}-input`},k,{type:"checkbox",checked:h,onChange:e=>S(t,e),disabled:b,tabIndex:-1})),l.createElement(H,Object.assign({id:t,className:(0,r.i)(i.Z.card,f&&i.Z.modifiers.compact,E&&i.Z.modifiers.expanded,v&&i.Z.modifiers.flat,_&&i.Z.modifiers.rounded,N&&i.Z.modifiers.displayLg,Z&&i.Z.modifiers.fullHeight,y&&i.Z.modifiers.plain,b?(0,r.i)(i.Z.modifiers.nonSelectableRaised):g?(0,r.i)(i.Z.modifiers.selectableRaised,h&&i.Z.modifiers.selectedRaised):u||p?(0,r.i)(i.Z.modifiers.selectable,h&&i.Z.modifiers.selected):"",o),tabIndex:u||g?"0":void 0},T,O),a))};d.displayName="Card"},21005:(e,a,t)=>{"use strict";t.d(a,{T:()=>n});var s=t(70655),l=t(92950),i=t(38296),r=t(54918);const n=e=>{var{children:a=null,className:t="",hasNoOffset:n=!1}=e,c=(0,s.__rest)(e,["children","className","hasNoOffset"]);return l.createElement("div",Object.assign({className:(0,i.i)(r.Z.cardActions,n&&r.Z.modifiers.noOffset,t)},c),a)};n.displayName="CardActions"},62394:(e,a,t)=>{"use strict";t.d(a,{e:()=>n});var s=t(70655),l=t(92950),i=t(54918),r=t(38296);const n=e=>{var{children:a=null,className:t="",component:n="div",isFilled:c=!0}=e,d=(0,s.__rest)(e,["children","className","component","isFilled"]);const o=n;return l.createElement(o,Object.assign({className:(0,r.i)(i.Z.cardBody,!c&&i.Z.modifiers.noFill,t)},d),a)};n.displayName="CardBody"},70401:(e,a,t)=>{"use strict";t.d(a,{O:()=>o});var s=t(70655),l=t(92950),i=t(38296),r=t(54918),n=t(32203),c=t(47173),d=t(93174);const o=e=>{var{children:a=null,className:t="",id:o,onExpand:m,toggleButtonProps:p,isToggleRightAligned:f}=e,u=(0,s.__rest)(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return l.createElement(n.H.Consumer,null,(({cardId:e})=>{const s=l.createElement("div",{className:(0,i.i)(r.Z.cardHeaderToggle)},l.createElement(c.zx,Object.assign({variant:"plain",type:"button",onClick:a=>{m(a,e)}},p),l.createElement("span",{className:(0,i.i)(r.Z.cardHeaderToggleIcon)},l.createElement(d.ZP,{"aria-hidden":"true"}))));return l.createElement("div",Object.assign({className:(0,i.i)(r.Z.cardHeader,f&&r.Z.modifiers.toggleRight,t),id:o},u),m&&!f&&s,a,m&&f&&s)}))};o.displayName="CardHeader"},70:(e,a,t)=>{"use strict";t.d(a,{l:()=>c});var s=t(70655),l=t(92950),i=t(38296),r=t(54918),n=t(32203);const c=e=>{var{children:a=null,className:t="",component:c="div"}=e,d=(0,s.__rest)(e,["children","className","component"]);const{cardId:o,registerTitleId:m}=l.useContext(n.H),p=c,f=o?`${o}-title`:"";return l.useEffect((()=>(m(f),()=>m(""))),[m,f]),l.createElement(p,Object.assign({className:(0,i.i)(r.Z.cardTitle,t),id:f||void 0},d),a)};c.displayName="CardTitle"},54918:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s}),t(80598);const s={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},14808:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GroupDetailInfo:()=>h,default:()=>b});var s=t(47173),l=t(32203),i=t(21005),r=t(62394),n=t(70401),c=t(70),d=t(92950),o=t.n(d),m=t(45697),p=t.n(m),f=t(55140),u=function(e){var a=e.children,t=(0,f.Z)();return o().createElement(o().Fragment,null,o().Children.map(a,(function(e){return o().isValidElement(e)?o().cloneElement(e,{chrome:t}):e})))};u.propTypes={children:p().any};const g=u;var h=function(e){var a=e.chrome,t="".concat(a.isBeta()?"/preview":"","/iam/user-access");return o().createElement(l.Z,null,o().createElement(n.O,null,o().createElement(i.T,null,o().createElement(s.zx,{component:"a",href:t,variant:"secondary"},"Manage access")),o().createElement(c.l,{className:"pf-c-title pf-m-lg card-title"},"User access configuration")),o().createElement(r.e,null,"Manage your inventory group user access configuration under",o().createElement("a",{href:t}," Identity & Access Management ",">"," User Access.")))};h.propTypes={chrome:p().object};const b=function(){return o().createElement(g,null,o().createElement(h,null))}},80598:()=>{}}]);