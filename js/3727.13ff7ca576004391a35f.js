(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[3727],{41788:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=e(14665);function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,(0,r.Z)(n,t)}},59731:(n,t,e)=>{"use strict";e.d(t,{lX:()=>x,q_:()=>A,PP:()=>R,ob:()=>p,Hp:()=>h,Ep:()=>f});var r=e(22122),o=e(78273),i=e(95429),a=e(2177);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function s(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function l(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function f(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function p(n,t,e,i){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n)).state=t:(void 0===(a=(0,r.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(a.key=e),i?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,o.Z)(a.pathname,i.pathname)):a.pathname=i.pathname:a.pathname||(a.pathname="/"),a}function h(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&(0,i.Z)(n.state,t.state)}function d(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var v=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(n,t){t(window.confirm(n))}var y="popstate",g="hashchange";function w(){try{return window.history.state||{}}catch(n){return{}}}function x(n){void 0===n&&(n={}),v||(0,a.Z)(!1);var t,e=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=n,h=u.forceRefresh,x=void 0!==h&&h,E=u.getUserConfirmation,b=void 0===E?m:E,P=u.keyLength,C=void 0===P?6:P,k=n.basename?l(c(n.basename)):"";function A(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return k&&(i=s(i,k)),p(i,r,e)}function Z(){return Math.random().toString(36).substr(2,C)}var R=d();function O(n){(0,r.Z)(I,n),I.length=e.length,R.notifyListeners(I.location,I.action)}function T(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||U(A(n.state))}function L(){U(A(w()))}var _=!1;function U(n){_?(_=!1,O()):R.confirmTransitionTo(n,"POP",b,(function(t){t?O({action:"POP",location:n}):function(n){var t=I.location,e=M.indexOf(t.key);-1===e&&(e=0);var r=M.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(_=!0,N(o))}(n)}))}var S=A(w()),M=[S.key];function H(n){return k+f(n)}function N(n){e.go(n)}var j=0;function B(n){1===(j+=n)&&1===n?(window.addEventListener(y,T),i&&window.addEventListener(g,L)):0===j&&(window.removeEventListener(y,T),i&&window.removeEventListener(g,L))}var $=!1,I={length:e.length,action:"POP",location:S,createHref:H,push:function(n,t){var r="PUSH",i=p(n,t,Z(),I.location);R.confirmTransitionTo(i,r,b,(function(n){if(n){var t=H(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,t),x)window.location.href=t;else{var u=M.indexOf(I.location.key),s=M.slice(0,u+1);s.push(i.key),M=s,O({action:r,location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=p(n,t,Z(),I.location);R.confirmTransitionTo(i,r,b,(function(n){if(n){var t=H(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,t),x)window.location.replace(t);else{var u=M.indexOf(I.location.key);-1!==u&&(M[u]=i.key),O({action:r,location:i})}else window.location.replace(t)}}))},go:N,goBack:function(){N(-1)},goForward:function(){N(1)},block:function(n){void 0===n&&(n=!1);var t=R.setPrompt(n);return $||(B(1),$=!0),function(){return $&&($=!1,B(-1)),t()}},listen:function(n){var t=R.appendListener(n);return B(1),function(){B(-1),t()}}};return I}var E="hashchange",b={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function P(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function C(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function k(n){window.location.replace(P(window.location.href)+"#"+n)}function A(n){void 0===n&&(n={}),v||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),o=e.getUserConfirmation,i=void 0===o?m:o,u=e.hashType,h=void 0===u?"slash":u,y=n.basename?l(c(n.basename)):"",g=b[h],w=g.encodePath,x=g.decodePath;function A(){var n=x(C());return y&&(n=s(n,y)),p(n)}var Z=d();function R(n){(0,r.Z)($,n),$.length=t.length,Z.notifyListeners($.location,$.action)}var O=!1,T=null;function L(){var n,t,e=C(),r=w(e);if(e!==r)k(r);else{var o=A(),a=$.location;if(!O&&(t=o,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(T===f(o))return;T=null,function(n){if(O)O=!1,R();else{Z.confirmTransitionTo(n,"POP",i,(function(t){t?R({action:"POP",location:n}):function(n){var t=$.location,e=M.lastIndexOf(f(t));-1===e&&(e=0);var r=M.lastIndexOf(f(n));-1===r&&(r=0);var o=e-r;o&&(O=!0,H(o))}(n)}))}}(o)}}var _=C(),U=w(_);_!==U&&k(U);var S=A(),M=[f(S)];function H(n){t.go(n)}var N=0;function j(n){1===(N+=n)&&1===n?window.addEventListener(E,L):0===N&&window.removeEventListener(E,L)}var B=!1,$={length:t.length,action:"POP",location:S,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=P(window.location.href)),e+"#"+w(y+f(n))},push:function(n,t){var e="PUSH",r=p(n,void 0,void 0,$.location);Z.confirmTransitionTo(r,e,i,(function(n){if(n){var t=f(r),o=w(y+t);if(C()!==o){T=t,function(n){window.location.hash=n}(o);var i=M.lastIndexOf(f($.location)),a=M.slice(0,i+1);a.push(t),M=a,R({action:e,location:r})}else R()}}))},replace:function(n,t){var e="REPLACE",r=p(n,void 0,void 0,$.location);Z.confirmTransitionTo(r,e,i,(function(n){if(n){var t=f(r),o=w(y+t);C()!==o&&(T=t,k(o));var i=M.indexOf(f($.location));-1!==i&&(M[i]=t),R({action:e,location:r})}}))},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(n){void 0===n&&(n=!1);var t=Z.setPrompt(n);return B||(j(1),B=!0),function(){return B&&(B=!1,j(-1)),t()}},listen:function(n){var t=Z.appendListener(n);return j(1),function(){j(-1),t()}}};return $}function Z(n,t,e){return Math.min(Math.max(n,t),e)}function R(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,l=d();function h(n){(0,r.Z)(x,n),x.length=x.entries.length,l.notifyListeners(x.location,x.action)}function v(){return Math.random().toString(36).substr(2,s)}var m=Z(c,0,i.length-1),y=i.map((function(n){return p(n,void 0,"string"==typeof n?v():n.key||v())})),g=f;function w(n){var t=Z(x.index+n,0,x.entries.length-1),r=x.entries[t];l.confirmTransitionTo(r,"POP",e,(function(n){n?h({action:"POP",location:r,index:t}):h()}))}var x={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:g,push:function(n,t){var r="PUSH",o=p(n,t,v(),x.location);l.confirmTransitionTo(o,r,e,(function(n){if(n){var t=x.index+1,e=x.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),h({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=p(n,t,v(),x.location);l.confirmTransitionTo(o,r,e,(function(n){n&&(x.entries[x.index]=o,h({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(n){var t=x.index+n;return t>=0&&t<x.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return x}},5826:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},42554:(n,t,e)=>{"use strict";e.d(t,{Z:()=>f});var r=e(92950),o=e.n(r),i=e(41788),a=e(45697),c=e.n(a),u=1073741823,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function l(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}const f=o().createContext||function(n,t){var e,o,a="__create-react-context-"+(s["__global_unique_id__"]=(s.__global_unique_id__||0)+1)+"__",f=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).emitter=l(t.props.value),t}(0,i.Z)(e,n);var r=e.prototype;return r.getChildContext=function(){var n;return(n={})[a]=this.emitter,n},r.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):u,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);f.childContextTypes=((e={})[a]=c().object.isRequired,e);var p=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}(0,i.Z)(e,t);var r=e.prototype;return r.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?u:t},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?u:n},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():n},r.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(r.Component);return p.contextTypes=((o={})[a]=c().object,o),{Provider:f,Consumer:p}}},14779:(n,t,e)=>{var r=e(5826);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(t,e,o):function(n,t,e){return p(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],p=e[1],h=e.index;if(c+=n.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var E=null!=v&&null!=d&&d!==v,b="+"===w||"*"===w,P="?"===w||"*"===w,C=e[2]||l,k=y||g;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:P,repeat:b,partial:E,asterisk:!!x,pattern:k?s(k):x?".*":"[^"+u(C)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function p(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}},73727:(n,t,e)=>{"use strict";e.r(t),e.d(t,{MemoryRouter:()=>r.VA,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN,BrowserRouter:()=>f,HashRouter:()=>p,Link:()=>g,NavLink:()=>E});var r=e(16550),o=e(41788),i=e(92950),a=e.n(i),c=e(59731),u=(e(45697),e(22122)),s=e(19756),l=e(2177),f=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,c.lX)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},t}(a().Component),p=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,c.q_)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},t}(a().Component),h=function(n,t){return"function"==typeof n?n(t):n},d=function(n,t){return"string"==typeof n?(0,c.ob)(n,null,null,t):n},v=function(n){return n},m=a().forwardRef;void 0===m&&(m=v);var y=m((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,i=(0,s.Z)(n,["innerRef","navigate","onClick"]),c=i.target,l=(0,u.Z)({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||c&&"_self"!==c||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return l.ref=v!==m&&t||e,a().createElement("a",l)})),g=m((function(n,t){var e=n.component,o=void 0===e?y:e,i=n.replace,c=n.to,f=n.innerRef,p=(0,s.Z)(n,["component","replace","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(n){n||(0,l.Z)(!1);var e=n.history,r=d(h(c,n.location),n.location),s=r?e.createHref(r):"",y=(0,u.Z)({},p,{href:s,navigate:function(){var t=h(c,n.location);(i?e.replace:e.push)(t)}});return v!==m?y.ref=t||f:y.innerRef=f,a().createElement(o,y)}))})),w=function(n){return n},x=a().forwardRef;void 0===x&&(x=w);var E=x((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,i=n.activeClassName,c=void 0===i?"active":i,f=n.activeStyle,p=n.className,v=n.exact,m=n.isActive,y=n.location,E=n.sensitive,b=n.strict,P=n.style,C=n.to,k=n.innerRef,A=(0,s.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(n){n||(0,l.Z)(!1);var e=y||n.location,i=d(h(C,e),e),s=i.pathname,Z=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=Z?(0,r.LX)(e.pathname,{path:Z,exact:v,sensitive:E,strict:b}):null,O=!!(m?m(R,e):R),T=O?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(p,c):p,L=O?(0,u.Z)({},P,{},f):P,_=(0,u.Z)({"aria-current":O&&o||null,className:T,style:L,to:i},A);return w!==x?_.ref=t||k:_.innerRef=k,a().createElement(g,_)}))}))},16550:(n,t,e)=>{"use strict";e.d(t,{VA:()=>g,NL:()=>x,l_:()=>C,AW:()=>R,F0:()=>y,gx:()=>S,rs:()=>M,s6:()=>m,Gn:()=>P,LX:()=>Z,k6:()=>j,TH:()=>B,UO:()=>$,$B:()=>I,EN:()=>H});var r=e(41788),o=e(92950),i=e.n(o),a=(e(45697),e(59731)),c=e(42554),u=e(2177),s=e(22122),l=e(14779),f=e.n(l),p=(e(59864),e(19756)),h=e(8679),d=e.n(h),v=function(n){var t=(0,c.Z)();return t.displayName="Router-History",t}(),m=function(n){var t=(0,c.Z)();return t.displayName="Router",t}(),y=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._isMounted?e.setState({location:n}):e._pendingLocation=n}))),e}(0,r.Z)(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return i().createElement(m.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(v.Provider,{children:this.props.children||null,value:this.props.history}))},t}(i().Component),g=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,a.PP)(t.props),t}return(0,r.Z)(t,n),t.prototype.render=function(){return i().createElement(y,{history:this.history,children:this.props.children})},t}(i().Component),w=function(n){function t(){return n.apply(this,arguments)||this}(0,r.Z)(t,n);var e=t.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(n){this.props.onUpdate&&this.props.onUpdate.call(this,this,n)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},t}(i().Component);function x(n){var t=n.message,e=n.when,r=void 0===e||e;return i().createElement(m.Consumer,null,(function(n){if(n||(0,u.Z)(!1),!r||n.staticContext)return null;var e=n.history.block;return i().createElement(w,{onMount:function(n){n.release=e(t)},onUpdate:function(n,r){r.message!==t&&(n.release(),n.release=e(t))},onUnmount:function(n){n.release()},message:t})}))}var E={},b=0;function P(n,t){return void 0===n&&(n="/"),void 0===t&&(t={}),"/"===n?n:function(n){if(E[n])return E[n];var t=f().compile(n);return b<1e4&&(E[n]=t,b++),t}(n)(t,{pretty:!0})}function C(n){var t=n.computedMatch,e=n.to,r=n.push,o=void 0!==r&&r;return i().createElement(m.Consumer,null,(function(n){n||(0,u.Z)(!1);var r=n.history,c=n.staticContext,l=o?r.push:r.replace,f=(0,a.ob)(t?"string"==typeof e?P(e,t.params):(0,s.Z)({},e,{pathname:P(e.pathname,t.params)}):e);return c?(l(f),null):i().createElement(w,{onMount:function(){l(f)},onUpdate:function(n,t){var e=(0,a.ob)(t.to);(0,a.Hp)(e,(0,s.Z)({},f,{key:e.key}))||l(f)},to:e})}))}var k={},A=0;function Z(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=k[e]||(k[e]={});if(r[n])return r[n];var o=[],i={regexp:f()(n,o,t),keys:o};return A<1e4&&(r[n]=i,A++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var l=u[0],p=u.slice(1),h=n===l;return i&&!h?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:h,params:a.reduce((function(n,t,e){return n[t.name]=p[e],n}),{})}}),null)}var R=function(n){function t(){return n.apply(this,arguments)||this}return(0,r.Z)(t,n),t.prototype.render=function(){var n=this;return i().createElement(m.Consumer,null,(function(t){t||(0,u.Z)(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?Z(e.pathname,n.props):t.match,o=(0,s.Z)({},t,{location:e,match:r}),a=n.props,c=a.children,l=a.component,f=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i().createElement(m.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:l?i().createElement(l,o):f?f(o):null:"function"==typeof c?c(o):null)}))},t}(i().Component);function O(n){return"/"===n.charAt(0)?n:"/"+n}function T(n,t){if(!n)return t;var e=O(n);return 0!==t.pathname.indexOf(e)?t:(0,s.Z)({},t,{pathname:t.pathname.substr(e.length)})}function L(n){return"string"==typeof n?n:(0,a.Ep)(n)}function _(n){return function(){(0,u.Z)(!1)}}function U(){}var S=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).handlePush=function(n){return t.navigateTo(n,"PUSH")},t.handleReplace=function(n){return t.navigateTo(n,"REPLACE")},t.handleListen=function(){return U},t.handleBlock=function(){return U},t}(0,r.Z)(t,n);var e=t.prototype;return e.navigateTo=function(n,t){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,c=void 0===i?{}:i;c.action=t,c.location=function(n,t){return n?(0,s.Z)({},t,{pathname:O(n)+t.pathname}):t}(o,(0,a.ob)(n)),c.url=L(c.location)},e.render=function(){var n=this.props,t=n.basename,e=void 0===t?"":t,r=n.context,o=void 0===r?{}:r,c=n.location,u=void 0===c?"/":c,l=(0,p.Z)(n,["basename","context","location"]),f={createHref:function(n){return O(e+L(n))},action:"POP",location:T(e,(0,a.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:_(),goBack:_(),goForward:_(),listen:this.handleListen,block:this.handleBlock};return i().createElement(y,(0,s.Z)({},l,{history:f,staticContext:o}))},t}(i().Component),M=function(n){function t(){return n.apply(this,arguments)||this}return(0,r.Z)(t,n),t.prototype.render=function(){var n=this;return i().createElement(m.Consumer,null,(function(t){t||(0,u.Z)(!1);var e,r,o=n.props.location||t.location;return i().Children.forEach(n.props.children,(function(n){if(null==r&&i().isValidElement(n)){e=n;var a=n.props.path||n.props.from;r=a?Z(o.pathname,(0,s.Z)({},n.props,{path:a})):t.match}})),r?i().cloneElement(e,{location:o,computedMatch:r}):null}))},t}(i().Component);function H(n){var t="withRouter("+(n.displayName||n.name)+")",e=function(t){var e=t.wrappedComponentRef,r=(0,p.Z)(t,["wrappedComponentRef"]);return i().createElement(m.Consumer,null,(function(t){return t||(0,u.Z)(!1),i().createElement(n,(0,s.Z)({},r,t,{ref:e}))}))};return e.displayName=t,e.WrappedComponent=n,d()(e,n)}var N=i().useContext;function j(){return N(v)}function B(){return N(m).location}function $(){var n=N(m).match;return n?n.params:{}}function I(n){var t=B(),e=N(m).match;return n?Z(t.pathname,n):e}},78273:(n,t,e)=>{"use strict";function r(n){return"/"===n.charAt(0)}function o(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}e.d(t,{Z:()=>i});const i=function(n,t){void 0===t&&(t="");var e,i=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&r(n),u=t&&r(t),s=c||u;if(n&&r(n)?a=i:i.length&&(a.pop(),a=a.concat(i)),!a.length)return"/";if(a.length){var l=a[a.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=a.length;p>=0;p--){var h=a[p];"."===h?o(a,p):".."===h?(o(a,p),f++):f&&(o(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&r(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}},2177:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});const r=function(n,t){if(!n)throw new Error("Invariant failed")}},95429:(n,t,e)=>{"use strict";function r(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}e.d(t,{Z:()=>o});const o=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));if("object"==typeof t||"object"==typeof e){var o=r(t),i=r(e);return o!==t||i!==e?n(o,i):Object.keys(Object.assign({},t,e)).every((function(r){return n(t[r],e[r])}))}return!1}}}]);
//# sourceMappingURL=../sourcemaps/3727.2e949a261ffec4c9d3a5.js.map