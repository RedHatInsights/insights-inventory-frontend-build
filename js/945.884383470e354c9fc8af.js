"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[945,8637],{371:(e,n,t)=>{t.d(n,{r:()=>u});var r=t(85893),i=t(92950),o=t(48542),a=t(34663),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)},u=function(e){var n,t=e.appName,u=e.children,c=(0,i.useState)(a.lo),s=c[0],p=c[1];return(0,i.useEffect)((function(){var e,n,r,i;t&&(e=void 0,n=void 0,i=function(){var e,n,r;return function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(i){switch(i.label){case 0:return[4,(0,a._s)(t,!0)];case 1:return e=i.sent(),n=e.isOrgAdmin,r=e.permissions,p((function(e){return l(l({},e),{isLoading:!1,isOrgAdmin:n,permissions:r})})),[2]}}))},new((r=void 0)||(r=Promise))((function(t,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function l(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}u((i=i.apply(e,n||[])).next())})))}),[t]),(0,r.jsx)(a.RM.Provider,l({value:l(l({},s),{hasAccess:(n=(null==s?void 0:s.permissions)||[],function(e,t){return t?(0,a.wP)(n,e):(0,a.Cs)(n,e)})})},{children:s.isLoading?(0,r.jsx)(o.Bullseye,{children:(0,r.jsx)(o.Spinner,{size:"xl"})}):u}))}},25462:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(92950),i=t.n(r),o=t(45697),a=t.n(o),l=t(75662),u=t(50533),c=t(35664),s=function(e){var n=e.componentMapper,t=e.appList,o=(0,u.useStore)(),a=(0,l.useLocation)().search,s=new URLSearchParams(a),p=(0,u.useSelector)((function(e){var n=e.entityDetails;return null==n?void 0:n.loaded})),d=(0,u.useSelector)((function(e){var n=e.entityDetails;return null==n?void 0:n.entity})),f=(0,u.useSelector)((function(e){var n,r,i,o=e.entityDetails;if(null!=o&&o.loaded)return(null===(n=t||(null==o?void 0:o.activeApps))||void 0===n||null===(r=n.find)||void 0===r?void 0:r.call(n,(function(e){var n;return(null==e?void 0:e.name)===(s.get("appName")||(null==o||null===(n=o.activeApp)||void 0===n?void 0:n.appName))})))||(null==o||null===(i=o.activeApps)||void 0===i?void 0:i[0])})),v=n||(null==f?void 0:f.component);return!0!==p||d?i().createElement(r.Fragment,null,p?f&&i().createElement("div",{className:"ins-active-app-".concat(null==f?void 0:f.name)},v?i().createElement(v,{store:o,inventoryId:null==d?void 0:d.id,appName:null==f?void 0:f.name}):"missing component"):i().createElement(c.Z,{size:c.i.md})):null};s.propTypes={componentMapper:a().element,appList:a().arrayOf(a().shape({title:a().node,name:a().string,pageId:a().string}))};const p=s},51149:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(92950),i=t.n(r),o=t(18576),a=t(25462);const l=function(e){return i().createElement(r.Fragment,null,i().createElement(o.Z,e),i().createElement(a.Z,e))}},6258:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(87462),i=t(92950),o=t.n(i),a=t(39142),l=(t(18576),t(25462));t(51149),t(67389);const u=function(e){return o().createElement(a.Z,(0,r.Z)({},e,{component:l.Z}))}}}]);
//# sourceMappingURL=../sourcemaps/945.61b39d730f53f23e3384d2255875ca0c.js.map