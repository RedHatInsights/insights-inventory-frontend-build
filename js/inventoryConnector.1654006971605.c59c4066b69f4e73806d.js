(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[9390,5849,1931],{12136:(e,t,n)=>{"use strict";n.d(t,{EI:()=>r,yK:()=>o,ZP:()=>i});var a=n(40400);const r={name:"DisconnectedIcon",height:1024,width:1024,svgPath:"M107.625758,511.919812 C107.647579,453.639819 120.473237,396.076275 145.195758,343.299812 L66.0757577,263.919812 C64.9757577,266.019812 63.7857577,268.019812 62.6857577,270.119812 C-38.2858609,455.136708 -13.6478565,683.418046 124.475758,842.629812 C134.640866,854.227038 149.304208,860.890207 164.725758,860.920803 C177.621501,860.999229 190.089847,856.300444 199.725758,847.729812 C222.045758,828.339812 224.235758,794.349812 204.725758,771.959812 C142.116482,699.791587 107.639971,607.46129 107.625758,511.919812 Z M298.965758,512.769812 C298.965758,507.959812 299.165758,503.349812 299.465758,498.849812 L223.695758,422.919812 C195.943021,511.49644 210.859555,607.936744 264.075758,683.989812 C272.417691,695.880397 286.040845,702.947712 300.565758,702.92092 C309.717884,702.984827 318.661486,700.187766 326.145758,694.919812 C346.244069,680.682503 351.030068,652.865563 336.845758,632.729812 C312.094475,597.618928 298.858215,555.687799 298.965758,512.729812 L298.965758,512.769812 Z M903.425758,837.839812 C1064.25516,648.181373 1062.68818,369.557312 899.735758,181.719812 C890.46515,170.983736 877.290268,164.395355 863.139154,163.418898 C848.98804,162.442441 835.033106,167.158807 824.375758,176.519812 C802.005758,195.919812 799.815758,229.919812 819.185758,252.309812 C945.123654,397.620078 948.572544,612.370403 827.365758,761.649812 L754.005758,688.159812 C755.244385,686.815558 756.37773,685.377981 757.395758,683.859812 C792.844775,633.759435 811.790626,573.852791 811.595758,512.479812 C811.595758,450.189812 792.735758,390.599812 756.695758,340.199812 C749.880846,330.567 739.510358,324.044705 727.876268,322.074416 C716.242178,320.104127 704.302408,322.848071 694.695758,329.699812 C674.625758,343.899812 670.135758,371.699812 684.215758,391.799812 C733.317078,460.966176 735.688504,552.965658 690.215758,624.569812 L615.045758,549.479812 C619.447596,537.503845 621.679174,524.839047 621.635758,512.079812 C621.657896,451.518897 572.616613,402.388105 512.055758,402.299812 C499.315423,402.259246 486.670236,404.494336 474.715758,408.899812 L82.6457577,15.6398121 C64.3651324,-2.58558468 34.7711544,-2.54081316 16.5457577,15.7398121 C-1.67963909,34.0204373 -1.63486757,63.6144153 16.6457577,81.8398121 L120.475758,185.919812 L196.535758,261.919812 L333.185758,398.799812 L408.845758,474.589812 L549.005758,614.969812 L941.455758,1008.21981 C959.733621,1026.4673 989.34327,1026.44268 1007.59076,1008.16481 C1025.83825,989.886948 1025.81362,960.2773 1007.53576,942.029812 L903.425758,837.839812 Z",yOffset:0,xOffset:0},o=(0,a.IU)(r),i=o},17558:(e,t,n)=>{"use strict";n.d(t,{Dv:()=>r,Kf:()=>o,wt:()=>i});var a="@@INSIGHTS-CORE/NOTIFICATIONS/",r="".concat(a,"ADD_NOTIFICATION"),o="".concat(a,"REMOVE_NOTIFICATION"),i="".concat(a,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>r});var a=n(17558),r=function(e){return{type:a.Dv,payload:e}}},83215:(e,t,n)=>{"use strict";n.d(t,{wN:()=>r.wN,ee:()=>s});var a=n(17558),r=n(21458),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},i=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},l=[];const s=function(e,t){switch(void 0===e&&(e=l),t.type){case a.Dv:return function(e,t){var n=t.payload;return i(i([],e,!0),[o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},n)],!1)}(e,t);case a.Kf:return function(e,t){var n=t.payload,a=e.findIndex((function(e){return e.id===n}));return i(i([],e.slice(0,a),!0),e.slice(a+1),!0)}(e,t);case a.wt:return[];default:return e}}},12385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(92950),r=n.n(a),o=n(30058),i=n(80604),l=n(94184),s=n.n(l),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};const u=function(e){var t=e.culled,n=void 0===t?new Date(0):t,a=e.className,l=e.staleWarning,u=void 0===l?new Date(0):l,d=e.stale,f=void 0===d?new Date(0):d,p=e.currDate,m=void 0===p?new Date(0):p,v=e.children,g=e.render,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["culled","className","staleWarning","stale","currDate","children","render"]);if(new Date(m).valueOf()-new Date(f).valueOf()<0)return g?g({msg:""}):v||null;var h=function(e,t,n){var a=new Date(e),r=new Date(t),o=new Date(n).valueOf()-r.valueOf(),i=Math.ceil((a.valueOf()-new Date(n).valueOf())/864e5),l="System scheduled for inventory removal in ".concat(i," days");return o>=0?{isError:!0,msg:l}:{isWarn:!0,msg:l}}(n,u,m),E=h.isWarn,T=h.isError,O=h.msg;return g?r().createElement("span",{className:s()({"ins-c-inventory__culling-warning":E,"ins-c-inventory__culling-danger":T},a)},E&&r().createElement(o.ExclamationTriangleIcon,null),T&&r().createElement(o.ExclamationCircleIcon,null),g({msg:O})):r().createElement(r().Fragment,null,r().createElement(i.Tooltip,c({},y,{content:O,position:"bottom"}),r().createElement("span",{className:s()({"ins-c-inventory__culling-warning":E,"ins-c-inventory__culling-danger":T},a)},T&&r().createElement(o.ExclamationCircleIcon,null),E&&r().createElement(o.ExclamationTriangleIcon,null),v)))}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(92950),r=n.n(a),o=n(80604),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},l=36e5,s=24*l,c=30*s,u=365*s,d=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return d(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return d(Math.round(e/c),"month")}},{rightBound:c,description:function(e){return d(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return d(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return d(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},m=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),p(e))},invalid:function(){return"Invalid date"}}[e]};const v=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,l=e.extraTitle,s=e.tooltipProps,c=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===c.toString()?"invalid":a;return r().createElement(r().Fragment,null,function(e,t,n){return{exact:function(t){return m(e)(t)},onlyDate:function(t){return m(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),r().createElement(o.Tooltip,i({},n,{content:r().createElement("div",null,a,e)}),t)}(m("exact")(a),r().createElement("span",null,m(e)(a)),t,n)},invalid:function(){return"Invalid date"}}[e]}(u,s,l)(c))}},39903:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=n(66435),s=n(80236),c=n(79851),u=n(34512),d=n(49739),f=n(83826),p=n(48140),m=n(86050),v=n(47173),g=n(19694),y=function(e){var t,n=e.handleModalToggle,a=e.isModalOpen,o=e.currentSytems,i=e.onConfirm,y="system";return Array.isArray(o)?(t=1===o.length?o[0].display_name:"".concat(o.length," systems"),y=1===o.length?y:"systems"):t=o.display_name,r().createElement(s.u,{variant:"small",title:"Remove from inventory",className:"ins-c-inventory__table--remove",ouiaId:"inventory-delete-modal",isOpen:a,onClose:function(){return n(!1)},appendTo:document.getElementsByClassName("inventory")[0]||document.body},r().createElement(c.P,{hasGutter:!0},r().createElement(u.J,null,r().createElement(g.ZP,{size:"xl",className:"ins-m-alert"})),r().createElement(u.J,{isFilled:!0},r().createElement(d.K,{hasGutter:!0},r().createElement(f.v,null,t," will be removed from all ",location.host," applications and services. You need to re-register the ",y," to add it back to your inventory."),r().createElement(f.v,null,"To disable the daily upload for this ",y,", use the following command:"),r().createElement(f.v,null,r().createElement(l.M5,null,"insights-client --unregister"))))),r().createElement(p.a,{hasGutter:!0},r().createElement(m.Z,null,r().createElement(v.zx,{variant:"danger",ouiaId:"confirm-inventory-delete",onClick:i},"Remove"),r().createElement(v.zx,{variant:"link",ouiaId:"cancel-inventory-delete",onClick:function(){return n(!1)}},"Cancel"))))},h=i().shape({id:i().string,displayName:i().string});y.propTypes={isModalOpen:i().bool,currentSytems:i().oneOfType([h,i().arrayOf(h)]),handleModalToggle:i().func,onConfirm:i().func},y.defaultProps={isModalOpen:!1,currentSytems:{},handleModalToggle:function(){},onConfirm:function(){}};const E=y},67882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(92950),r=n.n(a),o=n(35224),i=n(50693),l=n(16475),s=n(12136);const c=function(){return r().createElement(o.u,{maxWidth:"14rem",content:r().createElement(i.r,{hasGutter:!0},r().createElement(l.P,null,"Insights client not reporting"),r().createElement(l.P,null,'From the main navigation, open "Registration Assitant" to learn how to set up Insights.'))},r().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},r().createElement(s.ZP,null)))}},5311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=function(e){var t=e.operatingSystem;if("RHEL"===(null==t?void 0:t.name)){var n=t.major&&null!==t.minor&&"".concat(t.major,".").concat(null==t?void 0:t.minor)||null;return r().createElement("span",null,"RHEL ",n)}return r().createElement("span",null,(null==t?void 0:t.name)||"Not available")};l.propTypes={operatingSystem:i().shape({name:i().string,major:i().number,minor:i().number})};const s=l},68595:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=n(32384),s=n(19281),c=n(94778),u=function(e){var t=e.count,n=e.loadTags,a=e.systemId;return r().createElement("span",{onClick:function(e){return e.stopPropagation()},className:"ins-c-inventory__list-tags","data-ouia-component-id":"".concat(a,"-tag-button")},r().createElement(s.Z,{count:t,onTagClick:function(){return n(a,t)}}))};u.propTypes={count:i().number,loadTags:i().func,systemId:i().string};const d=(0,l.connect)((function(){return{}}),(function(e){return{loadTags:function(t,n){t&&(e((0,c.Ar)(!0)),e((0,c.me)(t,void 0,void 0,n)))}}}))(u)},454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(87462),r=n(45987),o=n(92950),i=n.n(o),l=n(45697),s=n.n(l),c=n(43707),u=n(2372),d=["cmp","hideLoader","isRbacEnabled","inventoryRef","store"],f=function(e){var t=e.cmp,n=e.hideLoader,o=e.isRbacEnabled,l=e.inventoryRef,s=e.store,f=(0,r.Z)(e,d),p=(0,c.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:read"],!0),m=p.hasAccess;return p.isLoading&&!n?i().createElement(u.$,null):i().createElement(t,(0,a.Z)({},f,l&&{ref:l},{hasAccess:!o||m,store:s}))};f.propTypes={cmp:s().any,inventoryRef:s().any,store:s().object,customRender:s().bool,isRbacEnabled:s().bool,hideLoader:s().bool};const p=f},73880:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DeleteModal:()=>I.Z,InventoryContext:()=>w.FW,OS_CHIP:()=>w.vi,REGISTERED_CHIP:()=>w.p9,RenderWrapper:()=>C.Z,STALE_CHIP:()=>w.yc,TAG_CHIP:()=>w.m5,TEXTUAL_CHIP:()=>w.UC,TEXT_FILTER:()=>w.ud,TagWithDialog:()=>a.Z,TagsModal:()=>D,arrayToSelection:()=>w.Nu,defaultFilters:()=>w.js,filterToGroup:()=>w.Tk,generateFilter:()=>w.h3,isEmpty:()=>w.xb,loadSystems:()=>w.K$,operatingSystems:()=>w.wQ,reduceFilters:()=>w.YQ,registered:()=>w.Gw,reloadWrapper:()=>w.KS,staleness:()=>w.jv});var a=n(68595),r=n(87462),o=n(4942),i=n(93433),l=n(29439),s=n(92950),c=n.n(s),u=n(32384),d=n(45697),f=n.n(d),p=n(94778),m=n(98944),v=n(57971),g=n(23279),y=n.n(g),h=n(85564),E=n.n(h);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.customFilters,n=e.filterTagsBy,a=e.onToggleModal,o=e.onApply,d=e.getTags,f=(0,u.useDispatch)(),g=(0,s.useState)(""),h=(0,l.Z)(g,2),T=h[0],b=h[1],D=(0,s.useState)([]),C=(0,l.Z)(D,2),I=C[0],w=C[1],_=(0,s.useState)({perPage:10,page:1}),S=(0,l.Z)(_,2),L=S[0],Z=S[1],P=(0,u.useSelector)((function(e){var t,n=e.entities,a=e.entityDetails;return null===(t=n||a)||void 0===t?void 0:t.showTagDialog})),j=(0,u.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return null!=t&&t.activeSystemTag||null!=n&&n.entity?L:(null==t?void 0:t.allTagsPagination)||L}),u.shallowEqual),A=(0,u.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.tagModalLoaded)||(null==n?void 0:n.tagModalLoaded)})),N=(0,u.useSelector)((function(e){var t=e.entities,n=e.entityDetails;return(null==t?void 0:t.activeSystemTag)||(null==n?void 0:n.entity)})),F=(0,u.useSelector)((function(e){var t,n,a,r=e.entities,o=e.entityDetails,l=(null==r||null===(t=r.activeSystemTag)||void 0===t?void 0:t.tags)||(null==o||null===(n=o.entity)||void 0===n?void 0:n.tags);return l?null==l?void 0:l.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(T)}))})).slice((null==L?void 0:L.perPage)*((null==L?void 0:L.page)-1),(null==L?void 0:L.perPage)*(null==L?void 0:L.page)):null==r||null===(a=r.allTags)||void 0===a?void 0:a.reduce((function(e,t){var n=t.tags;return[].concat((0,i.Z)(e),(0,i.Z)(E()(n.map((function(e){return e.tag})))))}),[])})),M=(0,u.useSelector)((function(e){var t,n=e.entities,a=e.entityDetails;return null===(t=n||a)||void 0===t?void 0:t.activeFilters})),R=(0,u.useSelector)((function(e){var t,n,a,r=e.entities,o=e.entityDetails,i=null===(t=(null==r||null===(n=r.activeSystemTag)||void 0===n?void 0:n.tags)||(null==o||null===(a=o.entity)||void 0===a?void 0:a.tags))||void 0===t?void 0:t.filter((function(e){return Object.values(e).some((function(e){return null==e?void 0:e.includes(T)}))}));return i?i.length:null==r?void 0:r.allTagsTotal}));(0,s.useEffect)((function(){b(n)}),[n]);var k=function(e,n){N?Z((function(){return e})):f((0,p.C8)(n,O(O({},t),{},{pagination:e,filters:M}),d))},x=(0,s.useCallback)(y()(k,800),[N]);return c().createElement(m.Z,(0,r.Z)({className:"ins-c-inventory__tags-modal",tableProps:{canSelectAll:!1}},A&&{loaded:A,pagination:O(O({},j),{},{count:R}),rows:(null==F?void 0:F.map((function(e){var t=e.key,n=e.value,a=e.namespace;return{id:"".concat(a,"/").concat(t,"=").concat(n),selected:I.find((function(e){return e.id==="".concat(a,"/").concat(t,"=").concat(n)})),cells:[t,n,a]}})))||[]},{loaded:A,width:"auto",isOpen:P,toggleModal:function(){w([]),b(""),a(),f((0,p.Ar)(!1))},filters:[{label:"Tags filter",placeholder:"Filter tags",value:"tags-filter",filterValues:{value:T,onChange:function(e,t){x(j,t),b(t)}}}],onUpdateData:function(e){return k(e,T)},columns:[{title:"Name"},{title:"Value",transforms:[(0,v.cellWidth)(30)]},{title:"Tag source",transforms:[(0,v.cellWidth)(30)]}]},!N&&{onSelect:function(e){return w(e)},selected:I,onApply:function(){return o&&o(I)}},{bulkSelect:{id:"bulk-select-tags"},title:N?"".concat(N.display_name," (").concat(R,")"):"All tags in inventory (".concat(R,")")}))};b.propTypes={onApply:f().func,onToggleModal:f().func,filterTagsBy:f().string,customFilters:f().shape({tags:f().oneOfType([f().object,f().arrayOf(f().string)])}),getTags:f().func},b.defaultProps={filterTagsBy:"",onToggleModal:function(){}};const D=b;var C=n(454),I=n(39903),w=n(13784)},13718:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(92950),r=n.n(a);const o=function(e,t,n,a){return r().createElement("div",{className:"ins-composed-col"},r().createElement("div",{key:"os_release"},null==n?void 0:n.os_release),r().createElement("div",{key:"data",className:null!=a&&a.noDetail?"ins-m-nodetail":""},null!=a&&a.noDetail?e:r().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){!function(e,t,n){var a=n.loaded,r=n.onRowClick,o=n.noDetail;if(a&&!o){var i=e.ctrlKey||e.metaKey||2===e.which;if(i)return;r&&r(e,t,i)}e.preventDefault(),e.stopPropagation()}(e,t,a)}},e)))}},94778:(e,t,n)=>{"use strict";n.d(t,{gb:()=>o.gb,Oj:()=>o.Oj,k0:()=>o.k0,Fo:()=>o.Fo,K5:()=>i.K5,u3:()=>i.u3,Xe:()=>i.Xe,nE:()=>i.nE,C8:()=>i.C8,CP:()=>i.CP,fg:()=>i.fg,il:()=>i.il,A_:()=>i.A_,me:()=>i.me,CL:()=>i.CL,HD:()=>i.HD,wb:()=>i.wb,Ar:()=>i.Ar,jB:()=>i.jB,Ks:()=>l,Tv:()=>s,L1:()=>c,$Y:()=>u,Jr:()=>d,eR:()=>f,Uw:()=>p});var a=n(59086),r=n(63599),o=n(87637),i=n(8622),l=function(e,t){return{type:a.aI.REMOVE_ENTITY,payload:r.hosts.apiHostDeleteById(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}},s=function(e){return{type:a.uW,payload:{filtersList:e}}},c=function(){return{type:a.wt}},u=function(e,t){return{type:a.aI.UPDATE_DISPLAY_NAME,payload:r.hosts.apiHostPatchById([e],{display_name:t}),meta:{id:e,value:t,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},d=function(e,t){return{type:a.fT,payload:{page:e,perPage:t}}},f=function(e){return{type:a.aI.LOAD_SYSTEM_PROFILE,payload:(0,r.getEntitySystemProfile)(e,{})}},p=function(e,t){return{type:a.aI.SET_ANSIBLE_HOST,payload:r.hosts.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},21216:(e,t,n)=>{"use strict";n.d(t,{W2:()=>_,y5:()=>S,nN:()=>P,vI:()=>j,ZP:()=>A});var a,r=n(29439),o=n(45987),i=n(93433),l=n(4942),s=n(92950),c=n.n(s),u=n(59086),d=n(35240),f=n(62410),p=n(12385),m=n(73880),v=n(7739),g=n.n(v),y=n(13718),h=n(67882),E=n(5311),T=n(35224),O=n(13784),b=["items"],D=["tags"],C=["tags"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},S=[{key:"display_name",sortKey:"display_name",title:"Name",renderFunc:y.Z},{key:"tags",title:"Tags",props:{width:10,isStatic:!0},renderFunc:function(e,t){return c().createElement(m.TagWithDialog,{count:e.length,systemId:t})}},{key:"system_profile",sortKey:"operating_system",dataLabel:"OS",title:c().createElement(T.u,{content:c().createElement("span",null,"Operating system")},c().createElement("span",null,"OS")),renderFunc:function(e){return c().createElement(E.Z,{operatingSystem:null==e?void 0:e.operating_system})},props:{width:10}},{key:"updated",sortKey:"updated",title:"Last seen",renderFunc:function(e,t,n){var a=n.culled_timestamp,r=n.stale_warning_timestamp,o=n.stale_timestamp,i=n.insights_id;return p.Z?c().createElement(p.Z,{culled:a,staleWarning:r,stale:o,render:function(t){var n=t.msg;return c().createElement(c().Fragment,null,c().createElement(f.Z,{date:e,extraTitle:c().createElement(c().Fragment,null,c().createElement("div",null,n),"Last seen:"," ")}),!i&&c().createElement(h.Z,null))}}," ",c().createElement(f.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:10}}];function L(e,t){var n=t.payload,a=n.results,r=n.per_page,o=n.page,i=n.count,l=n.total,s=n.loaded,c=n.filters;return t.meta.lastDateRequest<e.lastDateRequest?e:void 0!==s||void 0!==o&&void 0!==r?w(w({},e),{},{activeFilters:c||[],loaded:void 0===s||s,rows:(0,d.r0)([e.rows,a]).filter((function(e){return!s||e.created})),perPage:void 0!==r?r:e.perPage,page:void 0!==o?o:e.page,count:void 0!==i?i:e.count,total:void 0!==l?l:e.total}):e}function Z(e,t){var n=t.payload;return w(w({},e),{},{error:n})}function P(e,t){var n=t.payload,a=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return a.systemId===t})):e.entity||{},i=(r.tags,(0,o.Z)(r,D));return w(w({},e),{},{tagModalLoaded:!0,activeSystemTag:w(w({},i),{},{tags:Object.values(n.results)[0],tagsCount:a.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function j(e,t){var n=t.payload.isOpen;return w(w({},e),{},{showTagDialog:n,activeSystemTag:void 0})}const A=(a={},(0,l.Z)(a,u.aI.ALL_TAGS_FULFILLED,(function(e,t){var n=t.payload,a=n.results,o=n.total,i=n.page,l=n.per_page;return t.meta.lastDateRequestTags<e.lastDateRequestTags?e:w(w({},e),{},{allTags:Object.entries(g()(a,(function(e){return e.tag.namespace}))).map((function(e){var t=(0,r.Z)(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:l,page:i},additionalTagsCount:o>l?o-l:0,allTagsTotal:o,allTagsLoaded:!0,tagModalLoaded:!0})})),(0,l.Z)(a,u.aI.ALL_TAGS_PENDING,(function(e,t){var n=t.meta;return w(w({},e),{},{allTagsLoaded:!1,tagModalLoaded:!1,lastDateRequestTags:n.lastDateRequestTags})})),(0,l.Z)(a,u.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return w(w({},e),{},{columns:(0,d.r0)([S.filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key"),rows:[],loaded:!1,lastDateRequest:n.lastDateRequest})})),(0,l.Z)(a,u.aI.LOAD_ENTITIES_FULFILLED,L),(0,l.Z)(a,u.aI.LOAD_ENTITIES_REJECTED,Z),(0,l.Z)(a,u.aI.LOAD_TAGS_PENDING,(function(e,t){var n=t.meta,a=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{},r=(a.tags,(0,o.Z)(a,C));return w(w({},e),{},{tagModalLoaded:!1,activeSystemTag:w(w({},r),{},{tagsCount:n.tagsCount,tagsLoaded:!1})})})),(0,l.Z)(a,u.aI.LOAD_TAGS_FULFILLED,P),(0,l.Z)(a,u.aI.ALL_TAGS_REJECTED,Z),(0,l.Z)(a,u.s$,L),(0,l.Z)(a,u.u4,(function(e,t){return L(e,{payload:w(w({},t.payload),{},{loaded:!1})})})),(0,l.Z)(a,u.hI,(function(e,t){var n=t.payload,a=n.item,r=a.items,l=(0,o.Z)(a,b),s=n.selected,c=e.activeFilters,u=void 0===c?[]:c;if(s){var d=(u=[].concat((0,i.Z)(u),[l],(0,i.Z)(r||[]))).map((function(e){return e.value}));u=u.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else u.splice(u.map((function(e){return e.value})).indexOf(l.value),1),r&&r.forEach((function(e){u.splice(u.map((function(e){return e.value})).indexOf(e.value),1)}));return w(w({},e),{},{activeFilters:u})})),(0,l.Z)(a,u.pr,(function(e,t){var n=t.payload,a=(0,i.Z)(e.rows);return[].concat(n).forEach((function(e){var t=e.id,n=e.selected,r=a.find((function(e){return e.id===t}));r?r.selected=n:a.forEach((function(e){return e.selected=n}))})),w(w({},e),{},{rows:a})})),(0,l.Z)(a,u.WH,(function(e,t){var n=t.payload,a=n.key,r=n.direction;return w(w({},e),{},{sortBy:{key:a,direction:r}})})),(0,l.Z)(a,u.Gs,(function(e){return w(w({},e),{},{activeFilters:[O.js]})})),(0,l.Z)(a,u.jZ,(function(e,t){var n=t.payload.isLoading;return w(w({},e),{},{loaded:!n})})),(0,l.Z)(a,u.Qd,j),(0,l.Z)(a,u.Uq,(function(e,t){var n=t.payload;return w(w({},e),{},{invConfig:n})})),a)},7739:(e,t,n)=>{var a=n(89465),r=n(55189),o=Object.prototype.hasOwnProperty,i=r((function(e,t,n){o.call(e,n)?e[n].push(t):a(e,n,[t])}));e.exports=i},45467:()=>{},70347:()=>{},34946:()=>{},37625:()=>{},10108:()=>{},30187:()=>{},90479:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},314:()=>{},49854:()=>{},38299:()=>{},72816:()=>{},74181:()=>{},16166:()=>{},53519:()=>{},11177:()=>{},71002:(e,t,n)=>{"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=../sourcemaps/inventoryConnector.9229c1175e65aa9a476738acc129654c.js.map