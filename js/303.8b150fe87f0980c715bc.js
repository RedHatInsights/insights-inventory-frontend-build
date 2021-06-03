/*! For license information please see 303.8b150fe87f0980c715bc.js.LICENSE.txt */
(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[303],{15303:(e,t,n)=>{"use strict";n.d(t,{v:()=>l});var r,a=n(88388);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u,c=(u=[],{activateTrap:function(e){if(u.length>0){var t=u[u.length-1];t!==e&&t.pause()}var n=u.indexOf(e);-1===n||u.splice(n,1),u.push(e)},deactivateTrap:function(e){var t=u.indexOf(e);-1!==t&&u.splice(t,1),u.length>0&&u[u.length-1].unpause()}}),s=function(e){return setTimeout(e,0)},l=function(e,t){var n,u=document,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),f={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d=function(e){return f.containers.some((function(t){return t.contains(e)}))},p=function(e){var t=l[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=u.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},v=function(){var e;if(null!==p("initialFocus"))e=p("initialFocus");else if(d(u.activeElement))e=u.activeElement;else{var t=f.tabbableGroups[0];e=t&&t.firstTabbableNode||p("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},b=function(){if(f.tabbableGroups=f.containers.map((function(e){var t=(0,a.ht)(e);if(t.length>0)return{firstTabbableNode:t[0],lastTabbableNode:t[t.length-1]}})).filter((function(e){return!!e})),f.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},m=function e(t){t!==u.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!l.preventScroll}),f.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(v()))},y=function(e){d(e.target)||(l.clickOutsideDeactivates?n.deactivate({returnFocus:l.returnFocusOnDeactivate&&!(0,a.EB)(e.target)}):l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||e.preventDefault())},h=function(e){var t=d(e.target);t||e.target instanceof Document?t&&(f.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),m(f.mostRecentlyFocusedNode||v()))},g=function(e){if(!1!==l.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){b();var t=null;if(f.tabbableGroups.length>0)if(e.shiftKey){var n=f.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?f.tabbableGroups.length-1:n-1;t=f.tabbableGroups[r].lastTabbableNode}}else{var a=f.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(a>=0){var o=a===f.tabbableGroups.length-1?0:a+1;t=f.tabbableGroups[o].firstTabbableNode}}else t=p("fallbackFocus");t&&(e.preventDefault(),m(t))}(e)},w=function(e){l.clickOutsideDeactivates||d(e.target)||l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},E=function(){if(f.active)return c.activateTrap(n),r=l.delayInitialFocus?s((function(){m(v())})):m(v()),u.addEventListener("focusin",h,!0),u.addEventListener("mousedown",y,{capture:!0,passive:!1}),u.addEventListener("touchstart",y,{capture:!0,passive:!1}),u.addEventListener("click",w,{capture:!0,passive:!1}),u.addEventListener("keydown",g,{capture:!0,passive:!1}),n},O=function(){if(f.active)return u.removeEventListener("focusin",h,!0),u.removeEventListener("mousedown",y,!0),u.removeEventListener("touchstart",y,!0),u.removeEventListener("click",w,!0),u.removeEventListener("keydown",g,!0),n};return(n={activate:function(e){if(f.active)return this;b(),f.active=!0,f.paused=!1,f.nodeFocusedBeforeActivation=u.activeElement;var t=e&&e.onActivate?e.onActivate:l.onActivate;return t&&t(),E(),this},deactivate:function(e){if(!f.active)return this;clearTimeout(r),O(),f.active=!1,f.paused=!1,c.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:l.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:l.returnFocusOnDeactivate)&&s((function(){var e;m((e=f.nodeFocusedBeforeActivation,p("setReturnFocus")||e))})),this},pause:function(){return f.paused||!f.active||(f.paused=!0,O()),this},unpause:function(){return f.paused&&f.active?(f.paused=!1,b(),E(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return f.containers=t.map((function(e){return"string"==typeof e?u.querySelector(e):e})),f.active&&b(),this}}).updateContainerElements(e),n}},88388:(e,t,n)=>{"use strict";n.d(t,{EB:()=>p,ht:()=>f});var r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],a=r.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},c=function(e){return"INPUT"===e.tagName},s=function(e,t){return!(t.disabled||function(e){return c(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=o.call(e,"details>summary:first-of-type")?e.parentElement:e;if(o.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),a=r.width,i=r.height;return 0===a&&0===i}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t))},l=function(e,t){return!(!s(e,t)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!a||a===e}(e)}(t)||i(t)<0)},f=function(e,t){var n=[],r=[];return function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(a));return t&&o.call(e,a)&&r.unshift(e),r.filter(n)}(e,(t=t||{}).includeContainer,l.bind(null,t)).forEach((function(e,t){var a=i(e);0===a?n.push(e):r.push({documentOrder:t,tabIndex:a,node:e})})),r.sort(u).map((function(e){return e.node})).concat(n)},d=r.concat("iframe").join(","),p=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==o.call(e,d)&&s(t,e)}}}]);
//# sourceMappingURL=../sourcemaps/303.e8804a25ef9eadaa07ac.js.map