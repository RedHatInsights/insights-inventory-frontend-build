(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[1964,538],{68340:(o,l,n)=>{"use strict";n.d(l,{q:()=>f,x:()=>p});var f,m=n(70655),e=n(92950),t=n(38296),s=n(62873),c=n(62472);!function(o){o.h1="h1",o.h2="h2",o.h3="h3",o.h4="h4",o.h5="h5",o.h6="h6",o.p="p",o.a="a",o.small="small",o.blockquote="blockquote",o.pre="pre"}(f||(f={}));const p=o=>{var{children:l=null,className:n="",component:a=f.p,isVisitedLink:r=!1,ouiaId:O,ouiaSafe:d=!0}=o,C=(0,m.__rest)(o,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const i=a,_=(0,c.S$)(p.displayName,O,d);return e.createElement(i,Object.assign({},_,C,{"data-pf-content":!0,className:(0,t.i)(r&&a===f.a&&s.Z.modifiers.visited,n)}),l)};p.displayName="Text"},68774:(o,l,n)=>{"use strict";n.d(l,{D:()=>s});var f=n(70655),m=n(92950),e=n(62873),t=n(38296);const s=o=>{var{children:l=null,className:n="",isVisited:s=!1}=o,c=(0,f.__rest)(o,["children","className","isVisited"]);return m.createElement("div",Object.assign({},c,{className:(0,t.i)(e.Z.content,s&&e.Z.modifiers.visited,n)}),l)};s.displayName="TextContent"},25834:(o,l,n)=>{"use strict";n.d(l,{F:()=>f,G:()=>s});var f,m=n(70655),e=n(92950),t=n(38296);!function(o){o.ul="ul",o.ol="ol",o.dl="dl"}(f||(f={}));const s=o=>{var{children:l=null,className:n="",component:s=f.ul}=o,c=(0,m.__rest)(o,["children","className","component"]);const p=s;return e.createElement(p,Object.assign({},c,{className:(0,t.i)(n)}),l)};s.displayName="TextList"},78140:(o,l,n)=>{"use strict";n.d(l,{T:()=>s,v:()=>f});var f,m=n(70655),e=n(92950),t=n(38296);!function(o){o.li="li",o.dt="dt",o.dd="dd"}(f||(f={}));const s=o=>{var{children:l=null,className:n="",component:s=f.li}=o,c=(0,m.__rest)(o,["children","className","component"]);const p=s;return e.createElement(p,Object.assign({},c,{className:(0,t.i)(n)}),l)};s.displayName="TextListItem"},50693:(o,l,n)=>{"use strict";n.d(l,{r:()=>a});var f=n(70655),m=n(92950),e=n(3246),t=n(38296),s=n(54764),c=n(77712),p=n(80164);const a=o=>{var{children:l=null,className:n="",component:a="div",hasGutter:r,span:O=null,order:d,style:C}=o,i=(0,f.__rest)(o,["children","className","component","hasGutter","span","order","style"]);const _=[e.Z.grid,O&&e.Z.modifiers[`all_${O}Col`]],x=a;return Object.entries(s.a).forEach((([o,l])=>{const n=o,f=i[n];f&&_.push(e.Z.modifiers[`all_${f}ColOn${l}`]),delete i[n]})),m.createElement(x,Object.assign({className:(0,t.i)(..._,r&&e.Z.modifiers.gutter,n),style:C||d?Object.assign(Object.assign({},C),(0,p.x8)(d,c.T.name)):void 0},i),l)};a.displayName="Grid"},16475:(o,l,n)=>{"use strict";n.d(l,{P:()=>a});var f=n(70655),m=n(92950),e=n(3246),t=n(38296),s=n(54764),c=n(77712),p=n(80164);const a=o=>{var{children:l=null,className:n="",component:a="div",span:r=null,rowSpan:O=null,offset:d=null,order:C,style:i}=o,_=(0,f.__rest)(o,["children","className","component","span","rowSpan","offset","order","style"]);const x=[e.Z.gridItem,r&&e.Z.modifiers[`${r}Col`],O&&e.Z.modifiers[`${O}Row`],d&&e.Z.modifiers[`offset_${d}Col`]],w=a;return Object.entries(s.a).forEach((([o,l])=>{const n=o,f=`${n}RowSpan`,m=`${n}Offset`,t=_[n],s=_[f],c=_[m];t&&x.push(e.Z.modifiers[`${t}ColOn${l}`]),s&&x.push(e.Z.modifiers[`${s}RowOn${l}`]),c&&x.push(e.Z.modifiers[`offset_${c}ColOn${l}`]),delete _[n],delete _[f],delete _[m]})),m.createElement(w,Object.assign({className:(0,t.i)(...x,n),style:i||C?Object.assign(Object.assign({},i),(0,p.x8)(C,c.T.name)):void 0},_),l)};a.displayName="GridItem"},54764:(o,l,n)=>{"use strict";var f,m;n.d(l,{a:()=>m,t:()=>f}),function(o){o.xs="xs",o.sm="sm",o.md="md",o.lg="lg",o.xl="xl",o["2xl"]="2xl",o["3xl"]="3xl",o["4xl"]="4xl"}(f||(f={})),function(o){o.sm="Sm",o.md="Md",o.lg="Lg",o.xl="Xl",o.xl2="_2xl"}(m||(m={}))},62873:(o,l,n)=>{"use strict";n.d(l,{Z:()=>f}),n(10108);const f={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},3246:(o,l,n)=>{"use strict";n.d(l,{Z:()=>f}),n(72816);const f={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},77712:(o,l,n)=>{"use strict";n.d(l,{T:()=>f});const f={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"}},62410:(o,l,n)=>{"use strict";n.d(l,{Z:()=>x});var f=n(85893),m=n(92950),e=n.n(m),t=n(48542),s=function(){return s=Object.assign||function(o){for(var l,n=1,f=arguments.length;n<f;n++)for(var m in l=arguments[n])Object.prototype.hasOwnProperty.call(l,m)&&(o[m]=l[m]);return o},s.apply(this,arguments)},c=36e5,p=24*c,a=30*p,r=365*p,O=function(o,l){return"".concat(o," ").concat(o>1?"".concat(l,"s"):l," ago")},d=[{rightBound:1/0,description:function(o){return O(Math.round(o/r),"year")}},{rightBound:r,description:function(o){return O(Math.round(o/a),"month")}},{rightBound:a,description:function(o){return O(Math.round(o/p),"day")}},{rightBound:p,description:function(o){return O(Math.round(o/c),"hour")}},{rightBound:c,description:function(o){return O(Math.round(o/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],C=function(o){return o.toUTCString().split(",")[1].slice(0,-7).trim()},i=function(o){return{exact:function(o){return C(o)+" UTC"},onlyDate:function(o){return C(o).slice(0,-6)},relative:function(o){return d.reduce((function(l,n){return n.rightBound>Date.now()-o.getTime()?n.description(Date.now()-o.getTime()):l}),C(o))},invalid:function(){return"Invalid date"}}[o]},_=function(o,l,n){return{exact:function(l){return i(o)(l)},onlyDate:function(l){return i(o)(l)},relative:function(m){return function(o,l,n,m){return void 0===m&&(m=""),(0,f.jsx)(t.Tooltip,s({},n,{content:(0,f.jsxs)("div",{children:[m,o]})},{children:l}))}(i("exact")(m),(0,f.jsx)("span",{children:i(o)(m)}),l,n)},invalid:function(){return"Invalid date"}}[o]};const x=function(o){var l=o.date,n=o.type,m=void 0===n?"relative":n,t=o.extraTitle,s=o.tooltipProps,c=l instanceof Date?l:new Date(l),p=null==l||"Invalid Date"===c.toString()?"invalid":m;return(0,f.jsx)(e().Fragment,{children:_(p,s,t)(c)})}},5311:(o,l,n)=>{"use strict";n.d(l,{Z:()=>c});var f=n(92950),m=n.n(f),e=n(45697),t=n.n(e),s=function(o){var l=o.operatingSystem;if("RHEL"===(null==l?void 0:l.name)){var n=l.major&&null!==l.minor&&"".concat(l.major,".").concat(null==l?void 0:l.minor)||null;return m().createElement("span",null,"RHEL ",n)}return m().createElement("span",null,(null==l?void 0:l.name)||"Not available")};s.propTypes={operatingSystem:t().shape({name:t().string,major:t().number,minor:t().number})};const c=s},72816:()=>{}}]);