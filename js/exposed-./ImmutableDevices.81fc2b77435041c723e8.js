(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[1099],{69174:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var n=r(70655),o=r(92950),a=r(83063),i=r(72002),c=r(47173),l=r(75824),s=r(38296),u=r(24307),f=r(6551);const p={blue:a.Z.modifiers.blue,cyan:a.Z.modifiers.cyan,green:a.Z.modifiers.green,orange:a.Z.modifiers.orange,purple:a.Z.modifiers.purple,red:a.Z.modifiers.red,gold:a.Z.modifiers.gold,grey:""},d=e=>{var{children:t,className:r="",color:d="grey",variant:v="filled",isCompact:m=!1,isEditable:b=!1,editableProps:g,isTruncated:y=!1,tooltipPosition:L,icon:C,onClose:h,onEditCancel:O,onEditComplete:E,closeBtn:P,closeBtnAriaLabel:Z,closeBtnProps:I,href:j,isOverflowLabel:w,render:T}=e,S=(0,n.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[_,N]=(0,o.useState)(!1),[D,x]=(0,o.useState)(t),R=o.useRef(),M=o.useRef();o.useEffect((()=>(document.addEventListener("mousedown",A),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("keydown",F)})));const A=e=>{_&&M&&M.current&&!M.current.contains(e.target)&&(M.current.value&&E&&E(e,M.current.value),N(!1))},F=e=>{var r,n;const o=e.key;if((_||R&&R.current&&R.current.contains(e.target))&&(!_||M&&M.current&&M.current.contains(e.target))&&(!_||"Enter"!==o&&"Tab"!==o||(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&E&&E(e,M.current.value),N(!1),null===(r=null==R?void 0:R.current)||void 0===r||r.focus()),_&&"Escape"===o&&(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&(M.current.value=t,O&&O(e,t)),N(!1),null===(n=null==R?void 0:R.current)||void 0===n||n.focus()),!_&&"Enter"===o)){e.preventDefault(),e.stopImmediatePropagation(),N(!0);const t=e.target,r=document.createRange(),n=window.getSelection();r.selectNodeContents(t),r.collapse(!1),n.removeAllRanges(),n.addRange(r)}},k=w?"button":"span",G=P||o.createElement(c.zx,Object.assign({type:"button",variant:"plain",onClick:h,"aria-label":Z||`Close ${t}`},I),o.createElement(u.ZP,null)),B=o.createRef(),U=o.useRef(),[z,W]=o.useState(!1);(0,f.L)((()=>{const e=b?R:B;_||W(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[_]);const Y=o.createElement(o.Fragment,null,C&&o.createElement("span",{className:(0,s.i)(a.Z.labelIcon)},C),y&&o.createElement("span",{ref:B,className:(0,s.i)(a.Z.labelText)},t),!y&&t);o.useEffect((()=>{_&&M&&M.current&&M.current.focus()}),[M,_]);let H=o.createElement("span",{className:(0,s.i)(a.Z.labelContent)},Y);return j?H=o.createElement("a",{className:(0,s.i)(a.Z.labelContent),href:j},Y):b&&(H=o.createElement("button",Object.assign({ref:R,className:(0,s.i)(a.Z.labelContent),onClick:e=>{N(!0),e.stopPropagation()}},g),Y)),T?H=o.createElement(o.Fragment,null,z&&o.createElement(l.u,{reference:U,content:t,position:L}),T({className:a.Z.labelContent,content:Y,componentRef:U})):z&&(H=o.createElement(l.u,{content:t,position:L},H)),o.createElement(k,Object.assign({},S,{className:(0,s.i)(a.Z.label,p[d],"outline"===v&&a.Z.modifiers.outline,w&&a.Z.modifiers.overflow,m&&a.Z.modifiers.compact,b&&i.Z.modifiers.editable,_&&a.Z.modifiers.editableActive,r)}),!_&&H,!_&&h&&G,_&&o.createElement("input",Object.assign({className:(0,s.i)(a.Z.labelContent),type:"text",id:"editable-input",ref:M,value:D,onChange:()=>{x(M.current.value)}},g)))};d.displayName="Label"},15914:(e,t,r)=>{"use strict";r.d(t,{CE:()=>o,FM:()=>a,ZP:()=>i});var n=r(40400);const o={name:"CubeIcon",height:512,width:512,svgPath:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},94768:(e,t,r)=>{"use strict";r.d(t,{Y3:()=>o,ZP:()=>i,pG:()=>a});var n=r(40400);const o={name:"InProgressIcon",height:1024,width:1024,svgPath:"M513.417211,16.013668 L513.417211,112.013668 C513.406007,120.539653 520.082422,127.576718 528.597211,128.013668 C732.697211,136.513668 896.147211,305.013668 896.147211,511.343668 C896.147211,723.013668 724.007211,895.163668 512.417211,895.163668 C437.186239,895.277345 363.602574,873.135095 300.927211,831.523668 C294.58293,827.2982 286.138663,828.135095 280.747211,833.523668 L211.807211,902.353668 C208.502935,905.676185 206.82123,910.280199 207.20607,914.950237 C207.590911,919.620275 210.00361,923.886884 213.807211,926.623668 C300.709573,989.398037 405.213535,1023.13146 512.417211,1023.01398 C794.537211,1023.01398 1023.91724,793.433668 1023.91724,511.413668 C1024.00721,235.103668 804.007211,9.22366802 529.897211,0.00645736761 C525.571205,-0.116171039 521.377128,1.51204372 518.271915,4.52681369 C515.166702,7.54158367 513.415263,11.6857144 513.417211,16.013668 M97.1272107,212.923668 C64.2190689,258.479443 39.0698895,309.162997 22.6972107,362.923668 C21.2705092,367.756559 22.2039184,372.979173 25.2163356,377.018685 C28.2287528,381.058197 32.9681443,383.442545 38.0072107,383.453683 L139.407211,383.453683 C145.970195,383.46249 151.873012,379.462528 154.297211,373.363668 C164.307669,347.593304 177.068112,322.977652 192.357211,299.943668 C196.579666,293.633658 195.741339,285.216847 190.357211,279.863668 L121.497211,211.013668 C118.186635,207.662531 113.567544,205.940538 108.871166,206.30669 C104.174788,206.672841 99.8783994,209.089927 97.1272107,212.913668 M112.907211,511.433663 L17.0072107,511.433663 C12.679257,511.433663 8.5351263,513.183159 5.52035633,516.288373 C2.50558635,519.393586 0.877371594,523.587662 1.00721065,527.913668 C4.13104542,629.408217 37.6085847,727.635936 97.1172107,809.913668 C99.8539943,813.717268 104.120603,816.129968 108.790642,816.514809 C113.46068,816.899649 118.064693,815.217944 121.387211,811.913668 L190.217211,743.073668 C195.605784,737.682216 196.442679,729.237949 192.217211,722.893668 C153.520825,664.580171 131.611534,596.745437 128.887211,526.813668 C128.553964,518.220138 121.487197,511.427209 112.887211,511.433663",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},35453:(e,t,r)=>{"use strict";r.d(t,{CH:()=>o,Nh:()=>a,ZP:()=>i});var n=r(40400);const o={name:"ModuleIcon",height:1024,width:1024,svgPath:"M960,817.25 L768,913.25 L768,776.45 L848,736.45 L848,784.403 L880,768.403 L880,720.45 L960,680.45 L960,817.25 Z M584.3,613.05 L658.713,575.54 C659.183,575.839 659.67,576.119 660.18,576.373 L842.466,667.617 L768,704.85 L584.3,613.05 Z M512,368.45 L592,328.45 L592,375.639 L624,359.639 L624,312.45 L704,272.45 L704,409.35 L512,505.35 L512,368.45 Z M328.3,205.05 L403.195,167.297 C403.381,167.399 403.557,167.513 403.748,167.609 L586.689,259.181 L512,296.85 L328.3,205.05 Z M448,817.25 L256,913.25 L256,776.45 L336,736.45 L336,784.403 L368,768.403 L368,720.45 L448,680.45 L448,817.25 Z M72.3,613.05 L146.179,575.809 C146.507,576.003 146.833,576.2 147.18,576.373 L329.965,667.867 L256,704.85 L72.3,613.05 Z M256,520.45 L440.4,612.65 L365.753,649.974 L181.738,557.884 L256,520.45 Z M512,112.45 L696.4,203.85 L622.322,241.21 L438.782,149.358 L512,112.45 Z M768,520.45 L953.2,612.25 L878.253,649.724 L694.236,557.633 L768,520.45 Z M987.596,558.282 L767.297,447.983 L767.297,207.804 C767.297,183.626 753.609,161.446 731.93,150.656 L540.105,54.744 C522.122,45.752 500.941,45.752 482.958,54.744 L291.133,150.656 C269.453,161.446 255.766,183.626 255.766,207.804 L255.766,447.983 L35.368,558.282 C13.688,569.072 0,591.252 0,615.431 L0,816.146 C0,840.324 13.688,862.504 35.368,873.294 L227.192,969.206 C236.184,973.702 245.975,976 255.766,976 C265.557,976 275.348,973.702 284.339,969.206 L511.531,855.61 L738.724,969.206 C747.715,973.702 757.506,976 767.297,976 C777.088,976 786.879,973.802 795.871,969.306 L987.795,873.394 C1009.375,862.504 1024,840.424 1024,816.246 L1024,615.431 C1024,591.252 1009.275,569.072 987.596,558.282 L987.596,558.282 Z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},7081:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i,lb:()=>o,wl:()=>a});var n=r(40400);const o={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},73479:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i,gZ:()=>o,pT:()=>a});var n=r(40400);const o={name:"QuestionCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},64915:(e,t,r)=>{"use strict";r.d(t,{JJ:()=>o,ZP:()=>i,eG:()=>a});var n=r(40400);const o={name:"RepositoryIcon",height:1024,width:1088,svgPath:"M1088,608 L1088,1024 L384,1024 L384,548.5 C384,548.5 384,512 420.5,512 L661,512 C698.2,512 715.6,549.7 715.6,549.7 L729.8,576 L1056,576 C1073.7,576 1088,590.3 1088,608 L1088,608 Z M320,547.5 C320,540.2 321.1,521.1 331.3,500.6 C348.1,467 382.4,447 421.5,447 L662,447 C694.6,447 725.7,460.7 749.5,485.6 C758.3,494.8 764.7,504 768.9,511 L896,511 L896,352 C896,334.3 881.7,320 864,320 L537.8,320 L523.6,293.7 C523.6,293.7 506.2,256 469,256 L228.5,256 C192,256 192,292.5 192,292.5 L192,768 L320,768 L320,547.5 Z M128,512 L0,512 L0,36.5 C0,36.5 0,0 36.5,0 L277,0 C314.2,0 331.6,37.7 331.6,37.7 L345.8,64 L672,64 C689.7,64 704,78.3 704,96 L704,256 L575.9,256 C571.7,249 565.3,237.8 556.5,228.6 C532.7,203.7 501.6,190 469,190 L228.5,190 C189.5,190 156.1,210 139.3,243.6 C129.1,264 128,283.2 128,290.5 L128,512 Z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},80810:(e,t,r)=>{"use strict";r.d(t,{W1:()=>a,ZP:()=>i,xQ:()=>o});var n=r(40400);const o={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},72781:(e,t,r)=>{"use strict";r.d(t,{B9:()=>o,ZP:()=>i,xD:()=>a});var n=r(40400);const o={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},17542:(e,t,r)=>{"use strict";r.d(t,{Tz:()=>a,ZP:()=>i,eL:()=>o});var n=r(40400);const o={name:"UnknownIcon",height:1024,width:1024,svgPath:"M943.3,317.2 L706.9,80.7 C653,26.9 582.5,0 512,0 C441.5,0 371,26.9 317.1,80.7 L80.7,317.1 C-26.9,424.7 -26.9,599.2 80.7,706.8 L317.1,943.2 C371,997.1 441.5,1024 512,1024 C582.5,1024 653,997.1 706.9,943.3 L943.3,706.9 C1050.9,599.3 1050.9,424.8 943.3,317.2 Z M866.4,602.2 L602.8,866.1 C552.8,916.1 471.8,916.2 421.7,866.2 L157.7,602.2 C107.8,552.2 107.8,471.2 157.8,421.3 L421.4,158.4 C471.3,108.6 552.1,108.6 602.1,158.3 L866.3,421.3 C916.3,471.3 916.3,552.2 866.4,602.2 Z M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C488,576.1 521.3,576 521.3,576 L521.3,576 Z M575.3,751.3 L575.3,655.3 C575.3,650.9 573.7,647.3 570.6,644 C567.5,640.9 563.7,639.3 559.3,639.3 L463.3,639.3 C458.9,639.3 455.3,640.9 452,644 C448.9,647.1 447.3,650.9 447.3,655.3 L447.3,751.3 C447.3,755.7 448.9,759.3 452,762.6 C455.1,765.7 458.9,767.3 463.3,767.3 L559.3,767.3 C563.7,767.3 567.3,765.7 570.6,762.6 C573.8,759.4 575.3,755.6 575.3,751.3 L575.3,751.3 Z",yOffset:0,xOffset:0},a=(0,n.IU)(o),i=a},83063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(82014);const n={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(21064);const n={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},12990:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={name:"--pf-global--danger-color--100",value:"#c9190b",var:"var(--pf-global--danger-color--100)"}},37655:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={name:"--pf-global--warning-color--100",value:"#f0ab00",var:"var(--pf-global--warning-color--100)"}},21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>a});var n=r(17558),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}}},98436:(e,t,r)=>{"use strict";r.d(t,{CR:()=>y,DJ:()=>O,cC:()=>g,gk:()=>E,n4:()=>L,pW:()=>C,vb:()=>h});var n=r(45987),o=r(29439),a=r(4942),i=r(36968),c=r.n(i),l=r(57557),s=r.n(l),u=r(66604),f=r.n(u),p=r(81249),d=r(13784),v=["label"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e,t,r){return c()(e,[t,t],Object.values(b({},e[t])).filter((function(e){return e!==r})).every(Boolean))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(void 0===t?e:t).reduce((function(t,r){var n,a=(0,o.Z)(r.value,1)[0],i="".concat(r.osName," ").concat(a);return c()(t,["".concat(i),r.value],(n=r,e.some((function(e){var t=e.value,r=e.osName;return t===n.value&&r===n.osName}))),Object),g(t,i,a),t}),{})},L=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?(0,p.rcompare)((0,p.coerce)(e),(0,p.coerce)(t)):(0,p.compare)((0,p.coerce)(e),(0,p.coerce)(t))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=(0,o.Z)(t,2),n=r[0],a=r[1];return Object.entries(a).forEach((function(t){var r=(0,o.Z)(t,2),a=r[0];if(r[1]&&a.match(/[0-9]+.[0-9]+/)){var i=n.split(" ").slice(0,-1).join(" ");e.push({osName:i,osGroup:n,value:a})}})),e}),[])},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object.entries(e.reduce((function(e,t){var r=t.label,n=t.osName,o=t.value,a=o.split(".")[0],i="".concat(n," ").concat(a);return void 0===e[i]&&(e[i]={groupSelectable:!0,label:i,value:i,type:"checkbox",items:[]}),e[i].items.push({label:r,value:o,type:"checkbox"}),e}),{}));return t.sort((function(e,t){return L(e[0],t[0],!1)})),t.map((function(e){return e[1].items.sort((function(e,t){return L(e.value,t.value,!1)})),e[1]}))},O=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=C(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),r=e.filter((function(e){var r=e.groupLabel,n=e.value;return t.some((function(e){return e.value===n&&e.osGroup===r}))})).map((function(e){return b({name:e.label},(0,n.Z)(e,v))}));return(null==t?void 0:t.length)>0?[{category:"Operating System",type:d.vi,chips:r}]:[]},E=function(e,t,r,n){var o=Object.assign({},t),a=o[r.value][n.value],i=r.value;return n.value===r.value?o[i]=f()(o[i],(function(){return a})):o[i][i]=Object.values(s()(o[i],[i])).every(Boolean),o}},79161:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7085);const o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,r=(0,n.useFlag)(e);return!!t&&r}},7314:(e,t,r)=>{"use strict";r.d(t,{BG:()=>u,ZP:()=>f});var n=r(29439),o=r(4942),a=r(92950),i=r(60261),c=r(8622),l=r(98436);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e,t){var r=t.type,n=t.payload;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},"OPERATING_SYSTEM_FILTER"===r&&{operatingSystemFilter:n})};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=(0,i.useDispatch)(),s=(0,i.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),u=(0,i.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded}))||!1,f=(0,a.useState)({}),p=(0,n.Z)(f,2),d=p[0],v=p[1],m=(0,a.useState)([]),b=(0,n.Z)(m,2),g=b[0],y=b[1];(0,a.useEffect)((function(){(void 0===t||void 0!==t&&!0===t)&&o((0,c.g6)(e,r))}),[]),(0,a.useEffect)((function(){var e=(0,l.vb)(s);y(0===(s||[]).length?[{items:[{label:"No versions available"}]}]:e),v((0,l.CR)((0,l.pW)(d),(s||[]).map((function(e){return{groupLabel:e.groupLabel,osName:e.osName,value:e.value}}))))}),[s]);var L=(0,a.useMemo)((function(){return{label:"Operating System",value:"operating-system-filter",type:"group",filterValues:{selected:d,groups:g,onChange:function(e,t,r,n){v((0,l.gk)(e,t,r,n))}}}}),[d,g]),C=(0,a.useMemo)((function(){return(0,l.DJ)(d,s)}),[d,s]),h=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];v((0,l.CR)(e,u?(s||[]).map((function(e){return{groupLabel:e.groupLabel,osName:e.osName,value:e.value}})):void 0))}),[u,s]);return[L,C,(0,a.useMemo)((function(){return(0,l.pW)(d)}),[d]),h]}},39142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var n={};r.r(n),r.d(n,{ACTION_TYPES:()=>m.aI,CHANGE_SORT:()=>m.WH,CLEAR_ENTITIES:()=>m.g1,CLEAR_FILTERS:()=>m.Gs,CLEAR_NOTIFICATIONS:()=>m.wt,CONFIG_CHANGED:()=>m.Uq,ENTITIES_LOADING:()=>m.jZ,FILTER_ENTITIES:()=>m.lP,FILTER_SELECT:()=>m.hI,INVENTORY_ACTION_TYPES:()=>m.AL,SELECT_ENTITY:()=>m.pr,SET_ANSIBLE_HOST:()=>m.Bh,SET_DISPLAY_NAME:()=>m.Ti,SET_INVENTORY_FILTER:()=>m.uW,SET_PAGINATION:()=>m.fT,SHOW_ENTITIES:()=>m.u4,SYSTEM_ISSUE_TYPES:()=>m.dF,TOGGLE_DRAWER:()=>m.Ji,TOGGLE_TAG_MODAL:()=>m.Qd,UPDATE_ENTITIES:()=>m.s$,asyncActions:()=>m.zW,asyncInventory:()=>m.gl,clearEntitiesAction:()=>v.s$,clearFilters:()=>v.K5,clearNotifications:()=>v.L1,configChanged:()=>v.u3,deleteEntity:()=>v.Ks,editAnsibleHost:()=>v.Uw,editDisplayName:()=>v.$Y,entitesDetailReducer:()=>d.CB,entitiesLoading:()=>v.nE,entitiesReducer:()=>d.zw,entityDetailsReducer:()=>d.gA,fetchAllTags:()=>v.C8,fetchGroupDetail:()=>v.JM,fetchGroups:()=>v.bt,fetchGroupsForEntities:()=>v.d6,fetchOperatingSystems:()=>v.g6,filterEntities:()=>v.CP,filterSelect:()=>v.fg,getAdvisorData:()=>v.gb,getComplianceData:()=>v.Oj,getPatchData:()=>v.k0,getVulnData:()=>v.Fo,loadEntities:()=>v.il,loadEntity:()=>v.A_,loadTags:()=>v.me,mergeWithDetail:()=>d.OL,mergeWithEntities:()=>d.AF,selectEntity:()=>v.CL,setFilter:()=>v.Tv,setPagination:()=>v.Jr,setSort:()=>v.HD,systemIssues:()=>m.AN,systemProfile:()=>v.eR,tableReducer:()=>d.M,toggleDrawer:()=>v.wb,toggleTagModal:()=>v.Ar,updateEntities:()=>v.jB});var o=r(87462),a=r(4942),i=r(45987),c=r(92950),l=r.n(c),s=r(45697),u=r.n(s),f=r(60261),p=r(371),d=r(81730),v=r(94474),m=r(59086),b=r(73880),g=r(34655),y=r(454),L=["component","onLoad","store","innerRef"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=d.OL,E=(0,i.Z)(n,["mergeWithDetail"]),P=function(e){var t=e.component,r=e.onLoad,n=e.store,a=e.innerRef,s=(0,i.Z)(e,L);return(0,c.useEffect)((function(){null==r||r(h(h(h({},E),b),{},{api:g,mergeWithDetail:O}))}),[]),l().createElement(p.r,{appName:"inventory",checkResourceDefinitions:!0},l().createElement(f.Provider,{store:n},l().createElement(y.Z,(0,o.Z)({},s,{isRbacEnabled:!0,inventoryRef:a,store:n,cmp:t}))))};P.propTypes={store:u().object,onLoad:u().func,component:u().elementType.isRequired,history:u().object,innerRef:u().shape({current:u().any})},P.defaultProps={onLoad:function(){}};const Z=P},8093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ne,useOperatingSystemFilter:()=>te.ZP});var n=r(87462),o=r(92950),a=r.n(o),i=r(39142),c=r(93433),l=r(45697),s=r.n(l),u=r(60261),f=r(20535),p=r(85893),d=r(54025),v=r(15021);const m=function(e){var t=e.component,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["component"]);return(0,o.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Unable to load inventory component"}),(0,p.jsxs)("h2",{children:["Failed to load ",t]}),(0,p.jsx)("code",{children:"More info can be found in browser console output."})]})};var b=r(94184),g=r.n(b),y=r(62012),L=r(55140),C=function(){return C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)},h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},O=function(e){var t=e.Component,r=h(e,["Component"]),n=y.useHistory();return(0,p.jsx)(t,C({history:n},r))},E=function(e){var t=e.Component,r=h(e,["Component"]),n=(0,L.Z)().chromeHistory;return(0,p.jsx)(t,C({history:n},r))};const P=a().forwardRef((function(e,t){var r=e.Component,n=h(e,["Component"]),a=(0,o.useMemo)((function(){return"function"==typeof y.useHistory?O:E}),[r,n]);return(0,p.jsx)(a,C({innerRef:t,Component:r},n))}));var Z=function(){return Z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Z.apply(this,arguments)},I=function(e){var t=(0,u.useStore)(),r=e.component;return(0,p.jsx)(r,Z({className:g()(e.className,"inventory")},{children:(0,p.jsx)(o.Suspense,Z({fallback:e.fallback},{children:(0,p.jsx)(d.ScalprumComponent,Z({history:e.history,store:t,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,p.jsx)(m,Z({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};I.propTypes={fallback:s().node,innerRef:s().object,component:s().string,className:s().string,history:s().object};var j=a().forwardRef((function(e,t){return(0,p.jsx)(I,Z({innerRef:t},e))}));j.propTypes={fallback:s().node,component:s().string,className:s().string},j.defaultProps={fallback:(0,p.jsx)(v.Bullseye,Z({className:"pf-u-p-lg"},{children:(0,p.jsx)(v.Spinner,{size:"xl"})})),component:"section"};const w=a().forwardRef((function(e,t){return(0,p.jsx)(P,Z({innerRef:t,Component:j},e))}));var T=r(79161),S=r(69174),_=r(79851),N=r(34512),D=r(75824),x=r(68778),R=r(15914),M=r(43047),A=r(69957),F=r(94768),k=r(35453),G=r(7081),B=r(73479),U=r(64915),z=r(80810),W=r(72781),Y=r(17542),H=r(12990);var V={green:"#3e8635",yellow:r(37655).Z.value,lightBlue:"#2b9af3",blue:"#06c",red:H.Z.value},J={unknown:Y.ZP,repository:U.ZP,search:z.ZP,module:k.ZP,cube:R.ZP,question:B.ZP,plus:G.ZP,checkCircle:x.ZP,exclamationTriangle:A.ZP,timesCircle:W.ZP,inProgress:F.ZP,exclamationCircle:M.ZP},q={booting:{text:"Booting",Icon:J.checkCircle,color:V.green,labelColor:"green"},building:{text:"Image build in progress",Icon:J.inProgress,color:V.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:J.inProgress,color:V.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:J.checkCircle,color:V.green,labelColor:"green"},success:{text:"Ready",Icon:J.checkCircle,color:V.green,labelColor:"green"},passed:{text:"Passed",Icon:J.checkCircle,color:V.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:J.exclamationTriangle,color:V.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:J.inProgress,color:V.blue,labelColor:"blue"},error:{text:"Error",Icon:J.timesCircle,color:V.red,labelColor:"red"},default:{text:"Unknown",Icon:J.unknown},interrupted:{text:"Image build in progress",Icon:J.inProgress,color:V.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:J.exclamationCircle,color:V.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:J.exclamationCircle,color:V.red,labelColor:"red"}},$=function(e){var t=e.id,r=e.type,n=e.isLabel,o=void 0!==n&&n,i=e.toolTipContent,c=void 0===i?"":i,l=e.className,s=void 0===l?"":l,u=e.isLink,f=Object.prototype.hasOwnProperty.call(q,r)?q[r]:q.default,p=f.text,d=f.Icon,v=f.color,m=f.labelColor;return a().createElement(a().Fragment,null,o?a().createElement(S._,{id:t,color:m,icon:a().createElement(d,null),className:s},p):a().createElement(_.P,{id:t,style:{color:v},className:s},a().createElement(N.J,{className:"pf-u-mr-sm"},c?a().createElement(D.u,{content:"blargh"},a().createElement(d,null)):a().createElement(d,null)),a().createElement(N.J,null,a().createElement("p",{style:u?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},p))))};const K=$;$.propTypes={id:s().string,type:s().string,isLabel:s().bool,toolTipContent:s().string,className:s().string,isLink:s().bool},$.defaultProps={id:"status"};var Q=[{key:"ImageName",title:"Image",sort:!1,renderFunc:function(e,t){return a().createElement("a",{href:"/edge/inventory/".concat(t)},e)},props:{isStatic:!0}},{key:"Status",title:"Status",sort:!1,renderFunc:function(e,t,r){var n=function(e,t,r){return"ERROR"===r?"error":"UNRESPONSIVE"===r?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"}(e,r.UpdateAvailable,r.DispatcherStatus);return"error"===n||"unresponsive"===n?a().createElement(K,{type:"error"===n?"errorWithExclamationCircle":n,isLink:!0}):a().createElement(K,{type:"error"===n?"errorWithExclamationCircle":n})}}],X=function(e){var t=e.inventoryRef,r=e.customFilters,n=e.onLoad,i=e.getEntities,l=e.mergeAppColumns,s=e.filterConfig,p=e.hideFilters,d=e.activeFiltersConfig,v=(0,u.useDispatch)(),m=(0,y.useNavigate)(),b=(0,T.Z)("hbi.ui.inventory-groups"),g=(0,u.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.total}));return(0,o.useEffect)((function(){return function(){v({type:"CLEAR_INVENTORY_STORE",payload:[]})}}),[v]),a().createElement(w,{disableDefaultColumns:!0,onLoad:n,hideFilters:p,tableProps:{isStickyHeader:!0,variant:f.TableVariant.compact},paginationProps:{isDisabled:!g},showTagModal:!0,hasCheckbox:!1,isFullView:!0,ref:t,autoRefresh:!0,key:"inventory",customFilters:r,columns:function(e){return t=e.filter((function(e){return!e.inventoryGroupsFeatureFlag||b})),[].concat((0,c.Z)(l(t)),(0,c.Z)(Q));var t},getEntities:i,filterConfig:s,activeFiltersConfig:d,onRowClick:function(e,t){m("/insights/inventory/".concat(t,"?appName=vulnerabilities"))}})};X.propTypes={inventoryRef:s().oneOfType([s().func,s().shape({current:s().any})]),columns:s().array,customFilters:s().object,onLoad:s().func,getEntities:s().func,mergeAppColumns:s().func,filterConfig:s().object,hideFilters:s().object,activeFiltersConfig:s().object};const ee=X;var te=r(7314),re=function(e){return a().createElement(i.Z,(0,n.Z)({},e,{component:ee}))};const ne=a().forwardRef((function(e,t){return a().createElement(re,(0,n.Z)({},e,{innerRef:t}))}))},81730:(e,t,r)=>{"use strict";r.d(t,{AF:()=>h,CB:()=>C,M:()=>L,OL:()=>O,ZP:()=>E,gA:()=>f.ZP,zw:()=>u.ZP});var n,o=r(4942),a=r(59086),i=r(57785),c=r(18546),l=r(35240),s=r(83215),u=r(21216),f=r(48536),p=r(34150),d=r(52987);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={loaded:!1,selected:new Map};function g(e){return m(m({},e),{},{loaded:!0})}var y={notifications:s.ee,systemProfileStore:i.default,groups:p.Z,groupDetail:d.Z},L=(0,c.Gg)((n={},(0,o.Z)(n,a.aI.GET_ENTITIES_FULFILLED,(function(e,t){var r=t.payload;return m(m({},e),{},{rows:(0,l.r0)([e.rows,r.results]),entities:(0,l.r0)([e.entities,r.results])})})),(0,o.Z)(n,a.AL.LOAD_ENTITIES_FULFILLED,(function(e,t){var r,n,o=t.payload,a=t.meta;return(null==a?void 0:a.lastDateRequest)<(null==e?void 0:e.lastDateRequest)?e:!0===(null==a||null===(r=a.controller)||void 0===r||null===(n=r.signal)||void 0===n?void 0:n.aborted)?b:m(m({},e),{},{rows:(0,l.r0)([e.rows,o.results.map((function(t){return m(m({},t),{},{selected:e.selected&&e.selected.has(t.id)})}))])})})),(0,o.Z)(n,"".concat(a.aI.REMOVE_ENTITY,"_FULFILLED"),(function(e,t){var r=t.meta,n=e.selected||new Map;return r.systems.forEach((function(e){return n.delete(e)})),m(m({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,a.pr,(function(e,t){var r=t.payload,n=e.selected||new Map;if(r.selected)if(Array.isArray(r.id))r.id.forEach((function(e){n.set(e.id,e)}));else if(0===r.id)e.rows.forEach((function(e){return n.set(e.id,e)}));else{var o=e.rows&&e.rows.find((function(e){return e.id===r.id}));n.set(r.id,m(m({},o||{}),{},{id:r.id}))}else 0===r.id?e.rows.forEach((function(e){return n.delete(e.id)})):-1===r.id?n.clear():n.delete(r.id);return m(m({},e),{},{selected:new Map(n)})})),(0,o.Z)(n,"FILTER_SELECT",(function(e){return m(m({},e),{},{selected:{}})})),(0,o.Z)(n,a.uW,(function(e,t){var r=t.payload;return m(m({},e),{},{activeFilters:r.filtersList})})),(0,o.Z)(n,a.fT,(function(e,t){var r=t.payload,n=parseInt(r.perPage,10),o=parseInt(r.page,10);return m(m({},e),{},{perPage:isNaN(n)?50:n,page:isNaN(o)?1:o})})),(0,o.Z)(n,a.aI.UPDATE_DISPLAY_NAME_FULFILLED,f.i8),n),b),C=function(){return(0,c.Gg)((0,o.Z)({},a.AL.LOAD_ENTITY_FULFILLED,g),b)};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entities:function(r,n){return m({},e(m({},(0,c.Gg)(m({},u.ZP),m(m({},u.W2),t))(r,n)),n))}}}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{entityDetails:function(r,n){return m({},e(m({},(0,c.Gg)(m({},f.ZP),m(m({},f.PY),t))(r,n)),n))}}}const E=y},57785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{calculateInterfaces:()=>m,calculateRepos:()=>v,default:()=>g,defaultState:()=>u,formatBytes:()=>p,onSystemProfile:()=>b,sizes:()=>f,systemProfilePending:()=>d});var n,o=r(93433),a=r(4942),i=r(18546),c=r(59086);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={loaded:!1},f=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],p=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(f[t])};function d(e){return s(s({},e),{},{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return s(s({},e),!("enabled"in t)||t.enabled?{enabled:[].concat((0,o.Z)(e.enabled),[t])}:{disabled:[].concat((0,o.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})}function m(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat((0,o.Z)(e.interfaces),[t]),ipv4:[].concat((0,o.Z)(e.ipv4),(0,o.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,o.Z)(e.ipv6),(0,o.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function b(e,t){var r=t.payload.results,n=r&&r[0]&&r[0].system_profile||{},a=r&&r[0]&&void 0!==r[0].system_profile.cloud_provider&&r[0].system_profile.cloud_provider;return s(s({},e),{},{disabledApps:(0,o.Z)("aws"===a||"azure"===a?[]:["ros"]),systemProfile:s(s({loaded:!0},n),{},{ramSize:n.system_memory_bytes&&p(n.system_memory_bytes),repositories:v(n.yum_repos),network:m(n.network_interfaces)})})}const g=(0,i.Gg)((n={},(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_FULFILLED,b),(0,a.Z)(n,c.aI.LOAD_SYSTEM_PROFILE_PENDING,d),n),{systemProfile:u})},10611:(e,t,r)=>{var n=r(34865),o=r(71811),a=r(65776),i=r(13218),c=r(40327);e.exports=function(e,t,r,l){if(!i(e))return e;for(var s=-1,u=(t=o(t,e)).length,f=u-1,p=e;null!=p&&++s<u;){var d=c(t[s]),v=r;if("__proto__"===d||"constructor"===d||"prototype"===d)return e;if(s!=f){var m=p[d];void 0===(v=l?l(m,d,p):void 0)&&(v=i(m)?m:a(t[s+1])?[]:{})}n(p,d,v),p=p[d]}return e}},36968:(e,t,r)=>{var n=r(10611);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},21064:()=>{},82014:()=>{}}]);