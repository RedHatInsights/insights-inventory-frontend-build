(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[296],{70254:e=>{e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}([function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,n){var t=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=t)},function(e,n,t){e.exports=!t(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,n,t){var r=t(32)("wks"),o=t(9),i=t(0).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,n,t){var r=t(0),o=t(2),i=t(8),a=t(22),u=t(10),c=function(e,n,t){var s,f,l,p,d=e&c.F,v=e&c.G,g=e&c.S,h=e&c.P,y=e&c.B,m=v?r:g?r[n]||(r[n]={}):(r[n]||{}).prototype,D=v?o:o[n]||(o[n]={}),b=D.prototype||(D.prototype={});for(s in v&&(t=n),t)l=((f=!d&&m&&void 0!==m[s])?m:t)[s],p=y&&f?u(l,r):h&&"function"==typeof l?u(Function.call,l):l,m&&a(m,s,l,e&c.U),D[s]!=l&&i(D,s,p),h&&b[s]!=l&&(b[s]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,n,t){var r=t(16),o=t(21);e.exports=t(3)?function(e,n,t){return r.f(e,n,o(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},function(e,n,t){var r=t(24);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}},function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,n,t){var r=t(28),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim();return"."===n.charAt(0)?r.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0},t(14),t(34)},function(e,n,t){t(15),e.exports=t(2).Array.some},function(e,n,t){"use strict";var r=t(7),o=t(25)(3);r(r.P+r.F*!t(33)([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},function(e,n,t){var r=t(17),o=t(18),i=t(20),a=Object.defineProperty;n.f=t(3)?Object.defineProperty:function(e,n,t){if(r(e),n=i(n,!0),r(t),o)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},function(e,n,t){var r=t(1);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,n,t){e.exports=!t(3)&&!t(4)((function(){return 7!=Object.defineProperty(t(19)("div"),"a",{get:function(){return 7}}).a}))},function(e,n,t){var r=t(1),o=t(0).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,n,t){var r=t(1);e.exports=function(e,n){if(!r(e))return e;var t,o;if(n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;if("function"==typeof(t=e.valueOf)&&!r(o=t.call(e)))return o;if(!n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n,t){var r=t(0),o=t(8),i=t(23),a=t(9)("src"),u=Function.toString,c=(""+u).split("toString");t(2).inspectSource=function(e){return u.call(e)},(e.exports=function(e,n,t,u){var s="function"==typeof t;s&&(i(t,"name")||o(t,"name",n)),e[n]!==t&&(s&&(i(t,a)||o(t,a,e[n]?""+e[n]:c.join(String(n)))),e===r?e[n]=t:u?e[n]?e[n]=t:o(e,n,t):(delete e[n],o(e,n,t)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||u.call(this)}))},function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,n,t){var r=t(10),o=t(26),i=t(27),a=t(12),u=t(29);e.exports=function(e,n){var t=1==e,c=2==e,s=3==e,f=4==e,l=6==e,p=5==e||l,d=n||u;return function(n,u,v){for(var g,h,y=i(n),m=o(y),D=r(u,v,3),b=a(m.length),w=0,x=t?d(n,b):c?d(n,0):void 0;b>w;w++)if((p||w in m)&&(h=D(g=m[w],w,y),e))if(t)x[w]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:x.push(g)}else if(f)return!1;return l?-1:s||f?f:x}}},function(e,n,t){var r=t(5);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,n,t){var r=t(11);e.exports=function(e){return Object(r(e))}},function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},function(e,n,t){var r=t(30);e.exports=function(e,n){return new(r(e))(n)}},function(e,n,t){var r=t(1),o=t(31),i=t(6)("species");e.exports=function(e){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(e,n,t){var r=t(5);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,n,t){var r=t(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,n,t){"use strict";var r=t(4);e.exports=function(e,n){return!!e&&r((function(){n?e.call(null,(function(){}),1):e.call(null)}))}},function(e,n,t){t(35),e.exports=t(2).String.endsWith},function(e,n,t){"use strict";var r=t(7),o=t(12),i=t(36),a="".endsWith;r(r.P+r.F*t(38)("endsWith"),"String",{endsWith:function(e){var n=i(this,e,"endsWith"),t=arguments.length>1?arguments[1]:void 0,r=o(n.length),u=void 0===t?r:Math.min(o(t),r),c=String(e);return a?a.call(n,c,u):n.slice(u-c.length,u)===c}})},function(e,n,t){var r=t(37),o=t(11);e.exports=function(e,n,t){if(r(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(o(e))}},function(e,n,t){var r=t(1),o=t(5),i=t(6)("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[i])?!!n:"RegExp"==o(e))}},function(e,n,t){var r=t(6)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[r]=!1,!"/./"[e](n)}catch(e){}}return!0}}])},61667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},36843:(e,n,t)=>{"use strict";t.d(n,{R:()=>a});var r=t(39470),o=t(1534),i=[".DS_Store","Thumbs.db"];function a(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return[2,(t=e,t.dataTransfer&&e.dataTransfer?c(e.dataTransfer,e.type):u(e))];var t}))}))}function u(e){return(null!==e.target&&e.target.files?f(e.target.files):[]).map((function(e){return(0,o.P)(e)}))}function c(e,n){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return e.items?(t=f(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(l))]):[3,2];case 1:return[2,s(p(r.sent()))];case 2:return[2,s(f(e.files).map((function(e){return(0,o.P)(e)})))]}}))}))}function s(e){return e.filter((function(e){return-1===i.indexOf(e.name)}))}function f(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function l(e){if("function"!=typeof e.webkitGetAsEntry)return d(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?g(n):d(e)}function p(e){return e.reduce((function(e,n){return(0,r.fl)(e,Array.isArray(n)?p(n):[n])}),[])}function d(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=(0,o.P)(n);return Promise.resolve(t)}function v(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return[2,e.isDirectory?g(e):h(e)]}))}))}function g(e){var n=e.createReader();return new Promise((function(e,t){var o=[];!function i(){var a=this;n.readEntries((function(n){return(0,r.mG)(a,void 0,void 0,(function(){var a,u,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(n.length)return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return a=r.sent(),e(a),[3,4];case 3:return u=r.sent(),t(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(v)),o.push(c),i(),r.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function h(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=(0,o.P)(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}},1534:(e,n,t)=>{"use strict";t.d(n,{P:()=>o});var r=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function o(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),o=r.get(t);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var o=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof o&&o.length>0?o:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}},95116:(e,n,t)=>{"use strict";t.d(n,{R:()=>r.R});var r=t(36843)},39470:(e,n,t)=>{"use strict";function r(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))}function o(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function i(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function a(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(i(arguments[n]));return e}t.d(n,{mG:()=>r,Jh:()=>o,fl:()=>a}),Object.create,Object.create},65012:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var r=t(92950),o=t.n(r),i=t(95116),a=t(45697),u=t.n(a),c=t(4304),s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function d(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var h=function(e){function n(){var e,t,r;v(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=g(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r.state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]},r.isFileDialogActive=!1,r.onDocumentDrop=function(e){r.node&&r.node.contains(e.target)||(e.preventDefault(),r.dragTargets=[])},r.onDragStart=function(e){e.persist(),r.props.onDragStart&&(0,c.aJ)(e)&&r.props.onDragStart.call(r,e)},r.onDragEnter=function(e){e.preventDefault(),-1===r.dragTargets.indexOf(e.target)&&r.dragTargets.push(e.target),e.persist(),(0,c.aJ)(e)&&(Promise.resolve(r.props.getDataTransferItems(e)).then((function(n){(0,c.np)(e)||r.setState({draggedFiles:n,isDragActive:!0})})),r.props.onDragEnter&&r.props.onDragEnter.call(r,e))},r.onDragOver=function(e){return e.preventDefault(),e.persist(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),r.props.onDragOver&&(0,c.aJ)(e)&&r.props.onDragOver.call(r,e),!1},r.onDragLeave=function(e){e.preventDefault(),e.persist(),r.dragTargets=r.dragTargets.filter((function(n){return n!==e.target&&r.node.contains(n)})),r.dragTargets.length>0||(r.setState({isDragActive:!1,draggedFiles:[]}),r.props.onDragLeave&&(0,c.aJ)(e)&&r.props.onDragLeave.call(r,e))},r.onDrop=function(e){var n=r.props,t=n.onDrop,o=n.onDropAccepted,i=n.onDropRejected,a=n.multiple,u=n.accept,s=n.getDataTransferItems;e.preventDefault(),e.persist(),r.dragTargets=[],r.isFileDialogActive=!1,r.draggedFiles=null,r.setState({isDragActive:!1,draggedFiles:[]}),(0,c.aJ)(e)&&Promise.resolve(s(e)).then((function(n){var s=[],f=[];(0,c.np)(e)||(n.forEach((function(e){(0,c.dR)(e,u)&&(0,c.XT)(e,r.props.maxSize,r.props.minSize)?s.push(e):f.push(e)})),!a&&s.length>1&&f.push.apply(f,d(s.splice(0))),r.setState({acceptedFiles:s,rejectedFiles:f},(function(){t&&t.call(r,s,f,e),f.length>0&&i&&i.call(r,f,e),s.length>0&&o&&o.call(r,s,e)})))}))},r.onClick=function(e){var n=r.props.onClick;n&&n.call(r,e),(0,c.gB)(e)||(e.stopPropagation(),(0,c.DF)()?setTimeout(r.open,0):r.open())},r.onInputElementClick=function(e){e.stopPropagation()},r.onFileDialogCancel=function(){var e=r.props.onFileDialogCancel;r.isFileDialogActive&&setTimeout((function(){null!=r.input&&(r.input.files.length||(r.isFileDialogActive=!1,"function"==typeof e&&e()))}),300)},r.onFocus=function(e){var n=r.props.onFocus;n&&n.call(r,e),(0,c.gB)(e)||r.setState({isFocused:!0})},r.onBlur=function(e){var n=r.props.onBlur;n&&n.call(r,e),(0,c.gB)(e)||r.setState({isFocused:!1})},r.onKeyDown=function(e){var n=r.props.onKeyDown;r.node.isEqualNode(e.target)&&(n&&n.call(r,e),(0,c.gB)(e)||32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),r.open()))},r.composeHandler=function(e){return r.props.disabled?null:e},r.getRootProps=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.refKey,o=void 0===t?"ref":t,i=n.onKeyDown,a=n.onFocus,u=n.onBlur,f=n.onClick,d=n.onDragStart,v=n.onDragEnter,g=n.onDragOver,h=n.onDragLeave,y=n.onDrop,m=p(n,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragStart","onDragEnter","onDragOver","onDragLeave","onDrop"]);return s((l(e={onKeyDown:r.composeHandler(i?(0,c.Mj)(i,r.onKeyDown):r.onKeyDown),onFocus:r.composeHandler(a?(0,c.Mj)(a,r.onFocus):r.onFocus),onBlur:r.composeHandler(u?(0,c.Mj)(u,r.onBlur):r.onBlur),onClick:r.composeHandler(f?(0,c.Mj)(f,r.onClick):r.onClick),onDragStart:r.composeHandler(d?(0,c.Mj)(d,r.onDragStart):r.onDragStart),onDragEnter:r.composeHandler(v?(0,c.Mj)(v,r.onDragEnter):r.onDragEnter),onDragOver:r.composeHandler(g?(0,c.Mj)(g,r.onDragOver):r.onDragOver),onDragLeave:r.composeHandler(h?(0,c.Mj)(h,r.onDragLeave):r.onDragLeave),onDrop:r.composeHandler(y?(0,c.Mj)(y,r.onDrop):r.onDrop)},o,r.setNodeRef),l(e,"tabIndex",r.props.disabled?-1:0),e),m)},r.getInputProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=p(e,["refKey","onChange","onClick"]),u=r.props,f=u.accept,d=u.multiple,v=u.name,g=l({accept:f,type:"file",style:{display:"none"},multiple:c.DZ&&d,onChange:(0,c.Mj)(o,r.onDrop),onClick:(0,c.Mj)(i,r.onInputElementClick),autoComplete:"off",tabIndex:-1},t,r.setInputRef);return v&&v.length&&(g.name=v),s({},g,a)},r.setNodeRef=function(e){r.node=e},r.setInputRef=function(e){r.input=e},r.open=function(){r.isFileDialogActive=!0,r.input&&(r.input.value=null,r.input.click())},g(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),f(n,[{key:"componentDidMount",value:function(){var e=this.props.preventDropOnDocument;this.dragTargets=[],e&&(document.addEventListener("dragover",c.w0,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),window.addEventListener("focus",this.onFileDialogCancel,!1)}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",c.w0),document.removeEventListener("drop",this.onDocumentDrop)),window.removeEventListener("focus",this.onFileDialogCancel,!1)}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.multiple,r=e.disabled,o=this.state,i=o.isDragActive,a=o.isFocused,u=o.draggedFiles,s=o.acceptedFiles,f=o.rejectedFiles,l=u.length,p=t||l<=1,d=l>0&&(0,c.zo)(u,this.props.accept);return n({isDragActive:i,isDragAccept:d,isDragReject:l>0&&(!d||!p),draggedFiles:u,acceptedFiles:s,rejectedFiles:f,isFocused:a&&!r,getRootProps:this.getRootProps,getInputProps:this.getInputProps,open:this.open})}}]),n}(o().Component);const y=h;h.propTypes={accept:u().oneOfType([u().string,u().arrayOf(u().string)]),children:u().func,disabled:u().bool,preventDropOnDocument:u().bool,multiple:u().bool,name:u().string,maxSize:u().number,minSize:u().number,getDataTransferItems:u().func,onClick:u().func,onFocus:u().func,onBlur:u().func,onKeyDown:u().func,onDrop:u().func,onDropAccepted:u().func,onDropRejected:u().func,onDragStart:u().func,onDragEnter:u().func,onDragOver:u().func,onDragLeave:u().func,onFileDialogCancel:u().func},h.defaultProps={preventDropOnDocument:!0,disabled:!1,multiple:!0,maxSize:1/0,minSize:0,getDataTransferItems:i.R}},4304:(e,n,t)=>{"use strict";t.d(n,{DZ:()=>i,dR:()=>a,XT:()=>u,zo:()=>c,np:()=>s,gB:()=>f,aJ:()=>l,w0:()=>p,DF:()=>g,Mj:()=>h});var r=t(70254),o=t.n(r),i=("function"==typeof Symbol&&Symbol.iterator,"undefined"==typeof document||!document||!document.createElement||"multiple"in document.createElement("input"));function a(e,n){return"application/x-moz-file"===e.type||o()(e,n)}function u(e,n,t){return e.size<=n&&e.size>=t}function c(e,n){return e.every((function(e){return a(e,n)}))}function s(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function f(e){return void 0!==e.defaultPrevented?e.defaultPrevented:"function"==typeof e.isDefaultPrevented&&e.isDefaultPrevented()}function l(e){return!e.dataTransfer||Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e}))}function p(e){e.preventDefault()}function d(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function v(e){return-1!==e.indexOf("Edge/")}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return d(e)||v(e)}function h(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return n&&n.apply(void 0,[e].concat(r)),e.defaultPrevented}))}}}}]);
//# sourceMappingURL=../sourcemaps/296.b2868f7fbbb32ed41491.js.map