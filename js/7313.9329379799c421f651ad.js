(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[7313],{34663:(t,r,e)=>{"use strict";e.d(r,{Cs:()=>u,RM:()=>s,_s:()=>o,lo:()=>a,wP:()=>c});var n=e(92950);function o(t,r){var e,n,o,i,u,c,a,s,l;return void 0===t&&(t=""),void 0===r&&(r=!1),c=this,a=void 0,l=function(){var c,a,s;return function(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(l){switch(l.label){case 0:return c=window.insights,[4,null===(n=null===(e=null==c?void 0:c.chrome)||void 0===e?void 0:e.auth)||void 0===n?void 0:n.getUser()];case 1:return a=l.sent(),s={isOrgAdmin:(null===(i=null===(o=null==a?void 0:a.identity)||void 0===o?void 0:o.user)||void 0===i?void 0:i.is_org_admin)||!1},[4,null===(u=null==c?void 0:c.chrome)||void 0===u?void 0:u.getUserPermissions(t,r)];case 2:return[2,(s.permissions=l.sent()||null,s)]}}))},new((s=void 0)||(s=Promise))((function(t,r){function e(t){try{o(l.next(t))}catch(t){r(t)}}function n(t){try{o(l.throw(t))}catch(t){r(t)}}function o(r){var o;r.done?t(r.value):(o=r.value,o instanceof s?o:new s((function(t){t(o)}))).then(e,n)}o((l=l.apply(c,a||[])).next())}))}function i(t){return"object"==typeof t}function u(t,r){return!!t&&t.some((function(t){return r.includes(i(t)?null==t?void 0:t.permission:t)}))}function c(t,r){return!!t&&r.every((function(r){return t.some((function(t){var e,n=(null===(e=i(t)?null==t?void 0:t.permission:t)||void 0===e?void 0:e.split(":"))||[],o=r.split(":");return n.slice(0).reduce((function(t,r,e,n){return!1===t?(n.splice(e),t):"*"===r||r===(null==o?void 0:o[e])}),!0)||n.join(":")===r}))}))}var a={isLoading:!0,isOrgAdmin:!1,permissions:[]},s=(0,n.createContext)(a)},95249:(t,r,e)=>{"use strict";e.d(r,{c$:()=>u});var n=e(92950),o=e(34663),i=function(){return i=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},i.apply(this,arguments)},u=function(t,r){var e=(0,n.useContext)(o.RM),u=e.hasAccess,c=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e}(e,["hasAccess"]);return i(i({},c),{hasAccess:(null==u?void 0:u(t,r))||!1})}},77412:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t}},44037:(t,r,e)=>{var n=e(98363),o=e(3674);t.exports=function(t,r){return t&&n(r,o(r),t)}},63886:(t,r,e)=>{var n=e(98363),o=e(81704);t.exports=function(t,r){return t&&n(r,o(r),t)}},85990:(t,r,e)=>{var n=e(46384),o=e(77412),i=e(34865),u=e(44037),c=e(63886),a=e(64626),s=e(278),l=e(18805),f=e(1911),p=e(58234),v=e(46904),b=e(64160),y=e(43824),d=e(29148),h=e(38517),j=e(1469),m=e(44144),g=e(56688),w=e(13218),x=e(72928),A=e(3674),O=e(81704),S="[object Arguments]",T="[object Function]",E="[object Object]",k={};k[S]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[E]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[T]=k["[object WeakMap]"]=!1,t.exports=function t(r,e,I,P,U,Z){var C,L=1&e,M=2&e,_=4&e;if(I&&(C=U?I(r,P,U,Z):I(r)),void 0!==C)return C;if(!w(r))return r;var F=j(r);if(F){if(C=y(r),!L)return s(r,C)}else{var B=b(r),D=B==T||"[object GeneratorFunction]"==B;if(m(r))return a(r,L);if(B==E||B==S||D&&!U){if(C=M||D?{}:h(r),!L)return M?f(r,c(C,r)):l(r,u(C,r))}else{if(!k[B])return U?r:{};C=d(r,B,L)}}Z||(Z=new n);var R=Z.get(r);if(R)return R;Z.set(r,C),x(r)?r.forEach((function(n){C.add(t(n,e,I,n,r,Z))})):g(r)&&r.forEach((function(n,o){C.set(o,t(n,e,I,o,r,Z))}));var G=F?void 0:(_?M?v:p:M?O:A)(r);return o(G||r,(function(n,o){G&&(n=r[o=n]),i(C,o,t(n,e,I,o,r,Z))})),C}},21078:(t,r,e)=>{var n=e(62488),o=e(37285);t.exports=function t(r,e,i,u,c){var a=-1,s=r.length;for(i||(i=o),c||(c=[]);++a<s;){var l=r[a];e>0&&i(l)?e>1?t(l,e-1,i,u,c):n(c,l):u||(c[c.length]=l)}return c}},25588:(t,r,e)=>{var n=e(64160),o=e(37005);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},29221:(t,r,e)=>{var n=e(64160),o=e(37005);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},14259:t=>{t.exports=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+r];return i}},57406:(t,r,e)=>{var n=e(71811),o=e(10928),i=e(40292),u=e(40327);t.exports=function(t,r){return r=n(r,t),null==(t=i(t,r))||delete t[u(o(r))]}},57157:(t,r,e)=>{var n=e(74318);t.exports=function(t,r){var e=r?n(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}},93147:t=>{var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},40419:(t,r,e)=>{var n=e(62705),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},18805:(t,r,e)=>{var n=e(98363),o=e(99551);t.exports=function(t,r){return n(t,o(t),r)}},1911:(t,r,e)=>{var n=e(98363),o=e(51442);t.exports=function(t,r){return n(t,o(t),r)}},60696:(t,r,e)=>{var n=e(68630);t.exports=function(t){return n(t)?void 0:t}},99021:(t,r,e)=>{var n=e(85564),o=e(45357),i=e(30061);t.exports=function(t){return i(o(t,void 0,n),t+"")}},46904:(t,r,e)=>{var n=e(68866),o=e(51442),i=e(81704);t.exports=function(t){return n(t,i,o)}},51442:(t,r,e)=>{var n=e(62488),o=e(85924),i=e(99551),u=e(70479),c=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)n(r,i(t)),t=o(t);return r}:u;t.exports=c},43824:t=>{var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},29148:(t,r,e)=>{var n=e(74318),o=e(57157),i=e(93147),u=e(40419),c=e(77133);t.exports=function(t,r,e){var a=t.constructor;switch(r){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new a(+t);case"[object DataView]":return o(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c(t,e);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(t);case"[object RegExp]":return i(t);case"[object Symbol]":return u(t)}}},37285:(t,r,e)=>{var n=e(62705),o=e(35694),i=e(1469),u=n?n.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(u&&t&&t[u])}},40292:(t,r,e)=>{var n=e(97786),o=e(14259);t.exports=function(t,r){return r.length<2?t:n(t,o(r,0,-1))}},85564:(t,r,e)=>{var n=e(21078);t.exports=function(t){return null!=t&&t.length?n(t,1):[]}},56688:(t,r,e)=>{var n=e(25588),o=e(7518),i=e(31167),u=i&&i.isMap,c=u?o(u):n;t.exports=c},72928:(t,r,e)=>{var n=e(29221),o=e(7518),i=e(31167),u=i&&i.isSet,c=u?o(u):n;t.exports=c},10928:t=>{t.exports=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0}},57557:(t,r,e)=>{var n=e(29932),o=e(85990),i=e(57406),u=e(71811),c=e(98363),a=e(60696),s=e(99021),l=e(46904),f=s((function(t,r){var e={};if(null==t)return e;var s=!1;r=n(r,(function(r){return r=u(r,t),s||(s=r.length>1),r})),c(t,l(t),e),s&&(e=o(e,7,a));for(var f=r.length;f--;)i(e,r[f]);return e}));t.exports=f},34155:t=>{var r,e,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{e="function"==typeof clearTimeout?clearTimeout:i}catch(t){e=i}}();var c,a=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!s){var t=u(f);s=!0;for(var r=a.length;r;){for(c=a,a=[];++l<r;)c&&c[l].run();l=-1,r=a.length}c=null,s=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===i||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function v(t,r){this.fun=t,this.array=r}function b(){}n.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];a.push(new v(t,r)),1!==a.length||s||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=b,n.addListener=b,n.once=b,n.off=b,n.removeListener=b,n.removeAllListeners=b,n.emit=b,n.prependListener=b,n.prependOnceListener=b,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},83878:(t,r,e)=>{"use strict";function n(t){if(Array.isArray(t))return t}e.d(r,{Z:()=>n})},25267:(t,r,e)=>{"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(r,{Z:()=>n})},45987:(t,r,e)=>{"use strict";e.d(r,{Z:()=>o});var n=e(63366);function o(t,r){if(null==t)return{};var e,o,i=(0,n.Z)(t,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)e=u[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},63366:(t,r,e)=>{"use strict";function n(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(r,{Z:()=>n})},29439:(t,r,e)=>{"use strict";e.d(r,{Z:()=>u});var n=e(83878),o=e(40181),i=e(25267);function u(t,r){return(0,n.Z)(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],u=!0,c=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}}(t,r)||(0,o.Z)(t,r)||(0,i.Z)()}},71002:(t,r,e)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:()=>n})}}]);
//# sourceMappingURL=../sourcemaps/7313.19145f482b57c5378fbfaaa6e8305a80.js.map