(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[4878],{66604:(e,t,r)=>{var s=r(89465),n=r(47816),i=r(67206);e.exports=function(e,t){var r={};return t=i(t,3),n(e,(function(e,n,i){s(r,n,t(e,n,i))})),r}},39593:(e,t,r)=>{"use strict";const s=r(34411),n=Symbol("max"),i=Symbol("length"),o=Symbol("lengthCalculator"),a=Symbol("allowStale"),l=Symbol("maxAge"),h=Symbol("dispose"),p=Symbol("noDisposeOnSet"),u=Symbol("lruList"),c=Symbol("cache"),E=Symbol("updateAgeOnGet"),f=()=>1,m=(e,t,r)=>{const s=e[c].get(t);if(s){const t=s.value;if(v(e,t)){if(g(e,s),!e[a])return}else r&&(e[E]&&(s.value.now=Date.now()),e[u].unshiftNode(s));return t.value}},v=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[l]&&r>e[l]},$=e=>{if(e[i]>e[n])for(let t=e[u].tail;e[i]>e[n]&&null!==t;){const r=t.prev;g(e,t),t=r}},g=(e,t)=>{if(t){const r=t.value;e[h]&&e[h](r.key,r.value),e[i]-=r.length,e[c].delete(r.key),e[u].removeNode(t)}};class I{constructor(e,t,r,s,n){this.key=e,this.value=t,this.length=r,this.now=s,this.maxAge=n||0}}const R=(e,t,r,s)=>{let n=r.value;v(e,n)&&(g(e,r),e[a]||(n=void 0)),n&&t.call(s,n.value,n.key,e)};e.exports=class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[n]=e.max||1/0;const t=e.length||f;if(this[o]="function"!=typeof t?f:t,this[a]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[h]=e.dispose,this[p]=e.noDisposeOnSet||!1,this[E]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[n]=e||1/0,$(this)}get max(){return this[n]}set allowStale(e){this[a]=!!e}get allowStale(){return this[a]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,$(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!=typeof e&&(e=f),e!==this[o]&&(this[o]=e,this[i]=0,this[u].forEach((e=>{e.length=this[o](e.value,e.key),this[i]+=e.length}))),$(this)}get lengthCalculator(){return this[o]}get length(){return this[i]}get itemCount(){return this[u].length}rforEach(e,t){t=t||this;for(let r=this[u].tail;null!==r;){const s=r.prev;R(this,e,r,t),r=s}}forEach(e,t){t=t||this;for(let r=this[u].head;null!==r;){const s=r.next;R(this,e,r,t),r=s}}keys(){return this[u].toArray().map((e=>e.key))}values(){return this[u].toArray().map((e=>e.value))}reset(){this[h]&&this[u]&&this[u].length&&this[u].forEach((e=>this[h](e.key,e.value))),this[c]=new Map,this[u]=new s,this[i]=0}dump(){return this[u].map((e=>!v(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[u]}set(e,t,r){if((r=r||this[l])&&"number"!=typeof r)throw new TypeError("maxAge must be a number");const s=r?Date.now():0,a=this[o](t,e);if(this[c].has(e)){if(a>this[n])return g(this,this[c].get(e)),!1;const o=this[c].get(e).value;return this[h]&&(this[p]||this[h](e,o.value)),o.now=s,o.maxAge=r,o.value=t,this[i]+=a-o.length,o.length=a,this.get(e),$(this),!0}const E=new I(e,t,a,s,r);return E.length>this[n]?(this[h]&&this[h](e,t),!1):(this[i]+=E.length,this[u].unshift(E),this[c].set(e,this[u].head),$(this),!0)}has(e){if(!this[c].has(e))return!1;const t=this[c].get(e).value;return!v(this,t)}get(e){return m(this,e,!0)}peek(e){return m(this,e,!1)}pop(){const e=this[u].tail;return e?(g(this,e),e.value):null}del(e){g(this,this[c].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const s=e[r],n=s.e||0;if(0===n)this.set(s.k,s.v);else{const e=n-t;e>0&&this.set(s.k,s.v,e)}}}prune(){this[c].forEach(((e,t)=>m(this,t,!1)))}}},22257:(e,t,r)=>{const s=Symbol("SemVer ANY");class n{static get ANY(){return s}constructor(e,t){if(t=i(t),e instanceof n){if(e.loose===!!t.loose)return e;e=e.value}h("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===s?this.value="":this.value=this.operator+this.semver.version,h("comp",this)}parse(e){const t=this.options.loose?o[a.COMPARATORLOOSE]:o[a.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new p(r[2],this.options.loose):this.semver=s}toString(){return this.value}test(e){if(h("Comparator.test",e,this.options.loose),this.semver===s||e===s)return!0;if("string"==typeof e)try{e=new p(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new u(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new u(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),s=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=l(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),h=l(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||s||i&&o||a||h}}e.exports=n;const i=r(12893),{re:o,t:a}=r(55765),l=r(7539),h=r(74225),p=r(26376),u=r(66902)},66902:(e,t,r)=>{class s{constructor(e,t){if(t=i(t),e instanceof s)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new s(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!f(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const e of this.set)if(1===e.length&&m(e[0])){this.set=[e];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();const t=`parseRange:${Object.keys(this.options).join(",")}:${e}`,r=n.get(t);if(r)return r;const s=this.options.loose,i=s?h[p.HYPHENRANGELOOSE]:h[p.HYPHENRANGE];e=e.replace(i,T(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(h[p.COMPARATORTRIM],u),a("comparator trim",e);let l=(e=(e=(e=e.replace(h[p.TILDETRIM],c)).replace(h[p.CARETTRIM],E)).split(/\s+/).join(" ")).split(" ").map((e=>$(e,this.options))).join(" ").split(/\s+/).map((e=>L(e,this.options)));s&&(l=l.filter((e=>(a("loose invalid filter",e,this.options),!!e.match(h[p.COMPARATORLOOSE]))))),a("range list",l);const m=new Map,v=l.map((e=>new o(e,this.options)));for(const e of v){if(f(e))return[e];m.set(e.value,e)}m.size>1&&m.has("")&&m.delete("");const g=[...m.values()];return n.set(t,g),g}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Range is required");return this.set.some((r=>v(r,t)&&e.set.some((e=>v(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new l(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(y(this.set[t],e,this.options))return!0;return!1}}e.exports=s;const n=new(r(39593))({max:1e3}),i=r(12893),o=r(22257),a=r(74225),l=r(26376),{re:h,t:p,comparatorTrimReplace:u,tildeTrimReplace:c,caretTrimReplace:E}=r(55765),f=e=>"<0.0.0-0"===e.value,m=e=>""===e.value,v=(e,t)=>{let r=!0;const s=e.slice();let n=s.pop();for(;r&&s.length;)r=s.every((e=>n.intersects(e,t))),n=s.pop();return r},$=(e,t)=>(a("comp",e,t),e=d(e,t),a("caret",e),e=I(e,t),a("tildes",e),e=w(e,t),a("xrange",e),e=O(e,t),a("stars",e),e),g=e=>!e||"x"===e.toLowerCase()||"*"===e,I=(e,t)=>e.trim().split(/\s+/).map((e=>R(e,t))).join(" "),R=(e,t)=>{const r=t.loose?h[p.TILDELOOSE]:h[p.TILDE];return e.replace(r,((t,r,s,n,i)=>{let o;return a("tilde",e,t,r,s,n,i),g(r)?o="":g(s)?o=`>=${r}.0.0 <${+r+1}.0.0-0`:g(n)?o=`>=${r}.${s}.0 <${r}.${+s+1}.0-0`:i?(a("replaceTilde pr",i),o=`>=${r}.${s}.${n}-${i} <${r}.${+s+1}.0-0`):o=`>=${r}.${s}.${n} <${r}.${+s+1}.0-0`,a("tilde return",o),o}))},d=(e,t)=>e.trim().split(/\s+/).map((e=>N(e,t))).join(" "),N=(e,t)=>{a("caret",e,t);const r=t.loose?h[p.CARETLOOSE]:h[p.CARET],s=t.includePrerelease?"-0":"";return e.replace(r,((t,r,n,i,o)=>{let l;return a("caret",e,t,r,n,i,o),g(r)?l="":g(n)?l=`>=${r}.0.0${s} <${+r+1}.0.0-0`:g(i)?l="0"===r?`>=${r}.${n}.0${s} <${r}.${+n+1}.0-0`:`>=${r}.${n}.0${s} <${+r+1}.0.0-0`:o?(a("replaceCaret pr",o),l="0"===r?"0"===n?`>=${r}.${n}.${i}-${o} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}-${o} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i}-${o} <${+r+1}.0.0-0`):(a("no pr"),l="0"===r?"0"===n?`>=${r}.${n}.${i}${s} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}${s} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i} <${+r+1}.0.0-0`),a("caret return",l),l}))},w=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map((e=>A(e,t))).join(" ")),A=(e,t)=>{e=e.trim();const r=t.loose?h[p.XRANGELOOSE]:h[p.XRANGE];return e.replace(r,((r,s,n,i,o,l)=>{a("xRange",e,r,s,n,i,o,l);const h=g(n),p=h||g(i),u=p||g(o),c=u;return"="===s&&c&&(s=""),l=t.includePrerelease?"-0":"",h?r=">"===s||"<"===s?"<0.0.0-0":"*":s&&c?(p&&(i=0),o=0,">"===s?(s=">=",p?(n=+n+1,i=0,o=0):(i=+i+1,o=0)):"<="===s&&(s="<",p?n=+n+1:i=+i+1),"<"===s&&(l="-0"),r=`${s+n}.${i}.${o}${l}`):p?r=`>=${n}.0.0${l} <${+n+1}.0.0-0`:u&&(r=`>=${n}.${i}.0${l} <${n}.${+i+1}.0-0`),a("xRange return",r),r}))},O=(e,t)=>(a("replaceStars",e,t),e.trim().replace(h[p.STAR],"")),L=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(h[t.includePrerelease?p.GTE0PRE:p.GTE0],"")),T=e=>(t,r,s,n,i,o,a,l,h,p,u,c,E)=>`${r=g(s)?"":g(n)?`>=${s}.0.0${e?"-0":""}`:g(i)?`>=${s}.${n}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=g(h)?"":g(p)?`<${+h+1}.0.0-0`:g(u)?`<${h}.${+p+1}.0-0`:c?`<=${h}.${p}.${u}-${c}`:e?`<${h}.${p}.${+u+1}-0`:`<=${l}`}`.trim(),y=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const s=e[r].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}},26376:(e,t,r)=>{const s=r(74225),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=r(83295),{re:o,t:a}=r(55765),l=r(12893),{compareIdentifiers:h}=r(86742);class p{constructor(e,t){if(t=l(t),e instanceof p){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);s("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof p)){if("string"==typeof e&&e===this.version)return 0;e=new p(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof p||(e=new p(e,this.options)),h(this.major,e.major)||h(this.minor,e.minor)||h(this.patch,e.patch)}comparePre(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],n=e.prerelease[t];if(s("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return h(r,n)}while(++t)}compareBuild(e){e instanceof p||(e=new p(e,this.options));let t=0;do{const r=this.build[t],n=e.build[t];if(s("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return h(r,n)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(0===h(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=p},13507:(e,t,r)=>{const s=r(33959);e.exports=(e,t)=>{const r=s(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},7539:(e,t,r)=>{const s=r(58718),n=r(81194),i=r(71312),o=r(25903),a=r(21544),l=r(12056);e.exports=(e,t,r,h)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return s(e,r,h);case"!=":return n(e,r,h);case">":return i(e,r,h);case">=":return o(e,r,h);case"<":return a(e,r,h);case"<=":return l(e,r,h);default:throw new TypeError(`Invalid operator: ${t}`)}}},99038:(e,t,r)=>{const s=r(26376),n=r(33959),{re:i,t:o}=r(55765);e.exports=(e,t)=>{if(e instanceof s)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=i[o.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),i[o.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;i[o.COERCERTL].lastIndex=-1}else r=e.match(i[o.COERCE]);return null===r?null:n(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},88880:(e,t,r)=>{const s=r(26376);e.exports=(e,t,r)=>{const n=new s(e,r),i=new s(t,r);return n.compare(i)||n.compareBuild(i)}},27880:(e,t,r)=>{const s=r(46269);e.exports=(e,t)=>s(e,t,!0)},46269:(e,t,r)=>{const s=r(26376);e.exports=(e,t,r)=>new s(e,r).compare(new s(t,r))},62378:(e,t,r)=>{const s=r(33959),n=r(58718);e.exports=(e,t)=>{if(n(e,t))return null;{const r=s(e),n=s(t),i=r.prerelease.length||n.prerelease.length,o=i?"pre":"",a=i?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==n[e])return o+e;return a}}},58718:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>0===s(e,t,r)},71312:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)>0},25903:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)>=0},20253:(e,t,r)=>{const s=r(26376);e.exports=(e,t,r,n)=>{"string"==typeof r&&(n=r,r=void 0);try{return new s(e instanceof s?e.version:e,r).inc(t,n).version}catch(e){return null}}},21544:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)<0},12056:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)<=0},38679:(e,t,r)=>{const s=r(26376);e.exports=(e,t)=>new s(e,t).major},87789:(e,t,r)=>{const s=r(26376);e.exports=(e,t)=>new s(e,t).minor},81194:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>0!==s(e,t,r)},33959:(e,t,r)=>{const{MAX_LENGTH:s}=r(83295),{re:n,t:i}=r(55765),o=r(26376),a=r(12893);e.exports=(e,t)=>{if(t=a(t),e instanceof o)return e;if("string"!=typeof e)return null;if(e.length>s)return null;if(!(t.loose?n[i.LOOSE]:n[i.FULL]).test(e))return null;try{return new o(e,t)}catch(e){return null}}},52358:(e,t,r)=>{const s=r(26376);e.exports=(e,t)=>new s(e,t).patch},57559:(e,t,r)=>{const s=r(33959);e.exports=(e,t)=>{const r=s(e,t);return r&&r.prerelease.length?r.prerelease:null}},79795:(e,t,r)=>{const s=r(46269);e.exports=(e,t,r)=>s(t,e,r)},63657:(e,t,r)=>{const s=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>s(r,e,t)))},45712:(e,t,r)=>{const s=r(66902);e.exports=(e,t,r)=>{try{t=new s(t,r)}catch(e){return!1}return t.test(e)}},21100:(e,t,r)=>{const s=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>s(e,r,t)))},76397:(e,t,r)=>{const s=r(33959);e.exports=(e,t)=>{const r=s(e,t);return r?r.version:null}},81249:(e,t,r)=>{const s=r(55765),n=r(83295),i=r(26376),o=r(86742),a=r(33959),l=r(76397),h=r(13507),p=r(20253),u=r(62378),c=r(38679),E=r(87789),f=r(52358),m=r(57559),v=r(46269),$=r(79795),g=r(27880),I=r(88880),R=r(21100),d=r(63657),N=r(71312),w=r(21544),A=r(58718),O=r(81194),L=r(25903),T=r(12056),y=r(7539),x=r(99038),S=r(22257),P=r(66902),C=r(45712),b=r(51042),D=r(85775),G=r(71657),M=r(95316),F=r(89042),j=r(6826),X=r(97606),k=r(50032),U=r(82937),_=r(17908),V=r(50799);e.exports={parse:a,valid:l,clean:h,inc:p,diff:u,major:c,minor:E,patch:f,prerelease:m,compare:v,rcompare:$,compareLoose:g,compareBuild:I,sort:R,rsort:d,gt:N,lt:w,eq:A,neq:O,gte:L,lte:T,cmp:y,coerce:x,Comparator:S,Range:P,satisfies:C,toComparators:b,maxSatisfying:D,minSatisfying:G,minVersion:M,validRange:F,outside:j,gtr:X,ltr:k,intersects:U,simplifyRange:_,subset:V,SemVer:i,re:s.re,src:s.src,tokens:s.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,compareIdentifiers:o.compareIdentifiers,rcompareIdentifiers:o.rcompareIdentifiers}},83295:e=>{const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:t,MAX_SAFE_COMPONENT_LENGTH:16}},74225:(e,t,r)=>{var s=r(34155);const n="object"==typeof s&&s.env&&s.env.NODE_DEBUG&&/\bsemver\b/i.test(s.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=n},86742:e=>{const t=/^[0-9]+$/,r=(e,r)=>{const s=t.test(e),n=t.test(r);return s&&n&&(e=+e,r=+r),e===r?0:s&&!n?-1:n&&!s?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},12893:e=>{const t=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:t.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},55765:(e,t,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:s}=r(83295),n=r(74225),i=(t=e.exports={}).re=[],o=t.src=[],a=t.t={};let l=0;const h=(e,t,r)=>{const s=l++;n(e,s,t),a[e]=s,o[s]=t,i[s]=new RegExp(t,r?"g":void 0)};h("NUMERICIDENTIFIER","0|[1-9]\\d*"),h("NUMERICIDENTIFIERLOOSE","[0-9]+"),h("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),h("MAINVERSION",`(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),h("MAINVERSIONLOOSE",`(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`),h("PRERELEASEIDENTIFIER",`(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),h("PRERELEASEIDENTIFIERLOOSE",`(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),h("PRERELEASE",`(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),h("PRERELEASELOOSE",`(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),h("BUILDIDENTIFIER","[0-9A-Za-z-]+"),h("BUILD",`(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),h("FULLPLAIN",`v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),h("FULL",`^${o[a.FULLPLAIN]}$`),h("LOOSEPLAIN",`[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),h("LOOSE",`^${o[a.LOOSEPLAIN]}$`),h("GTLT","((?:<|>)?=?)"),h("XRANGEIDENTIFIERLOOSE",`${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h("XRANGEIDENTIFIER",`${o[a.NUMERICIDENTIFIER]}|x|X|\\*`),h("XRANGEPLAIN",`[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?)?)?`),h("XRANGEPLAINLOOSE",`[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`),h("XRANGE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),h("XRANGELOOSE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),h("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),h("COERCERTL",o[a.COERCE],!0),h("LONETILDE","(?:~>?)"),h("TILDETRIM",`(\\s*)${o[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",h("TILDE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),h("TILDELOOSE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),h("LONECARET","(?:\\^)"),h("CARETTRIM",`(\\s*)${o[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",h("CARET",`^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),h("CARETLOOSE",`^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),h("COMPARATORLOOSE",`^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),h("COMPARATOR",`^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),h("COMPARATORTRIM",`(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",h("HYPHENRANGE",`^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),h("HYPHENRANGELOOSE",`^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),h("STAR","(<|>)?=?\\s*\\*"),h("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),h("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},97606:(e,t,r)=>{const s=r(6826);e.exports=(e,t,r)=>s(e,t,">",r)},82937:(e,t,r)=>{const s=r(66902);e.exports=(e,t,r)=>(e=new s(e,r),t=new s(t,r),e.intersects(t))},50032:(e,t,r)=>{const s=r(6826);e.exports=(e,t,r)=>s(e,t,"<",r)},85775:(e,t,r)=>{const s=r(26376),n=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(i&&-1!==o.compare(e)||(i=e,o=new s(i,r)))})),i}},71657:(e,t,r)=>{const s=r(26376),n=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(i&&1!==o.compare(e)||(i=e,o=new s(i,r)))})),i}},95316:(e,t,r)=>{const s=r(26376),n=r(66902),i=r(71312);e.exports=(e,t)=>{e=new n(e,t);let r=new s("0.0.0");if(e.test(r))return r;if(r=new s("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){const n=e.set[t];let o=null;n.forEach((e=>{const t=new s(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":o&&!i(t,o)||(o=t);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!o||r&&!i(r,o)||(r=o)}return r&&e.test(r)?r:null}},6826:(e,t,r)=>{const s=r(26376),n=r(22257),{ANY:i}=n,o=r(66902),a=r(45712),l=r(71312),h=r(21544),p=r(12056),u=r(25903);e.exports=(e,t,r,c)=>{let E,f,m,v,$;switch(e=new s(e,c),t=new o(t,c),r){case">":E=l,f=p,m=h,v=">",$=">=";break;case"<":E=h,f=u,m=l,v="<",$="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,c))return!1;for(let r=0;r<t.set.length;++r){const s=t.set[r];let o=null,a=null;if(s.forEach((e=>{e.semver===i&&(e=new n(">=0.0.0")),o=o||e,a=a||e,E(e.semver,o.semver,c)?o=e:m(e.semver,a.semver,c)&&(a=e)})),o.operator===v||o.operator===$)return!1;if((!a.operator||a.operator===v)&&f(e,a.semver))return!1;if(a.operator===$&&m(e,a.semver))return!1}return!0}},17908:(e,t,r)=>{const s=r(45712),n=r(46269);e.exports=(e,t,r)=>{const i=[];let o=null,a=null;const l=e.sort(((e,t)=>n(e,t,r)));for(const e of l)s(e,t,r)?(a=e,o||(o=e)):(a&&i.push([o,a]),a=null,o=null);o&&i.push([o,null]);const h=[];for(const[e,t]of i)e===t?h.push(e):t||e!==l[0]?t?e===l[0]?h.push(`<=${t}`):h.push(`${e} - ${t}`):h.push(`>=${e}`):h.push("*");const p=h.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return p.length<u.length?p:t}},50799:(e,t,r)=>{const s=r(66902),n=r(22257),{ANY:i}=n,o=r(45712),a=r(46269),l=(e,t,r)=>{if(e===t)return!0;if(1===e.length&&e[0].semver===i){if(1===t.length&&t[0].semver===i)return!0;e=r.includePrerelease?[new n(">=0.0.0-0")]:[new n(">=0.0.0")]}if(1===t.length&&t[0].semver===i){if(r.includePrerelease)return!0;t=[new n(">=0.0.0")]}const s=new Set;let l,u,c,E,f,m,v;for(const t of e)">"===t.operator||">="===t.operator?l=h(l,t,r):"<"===t.operator||"<="===t.operator?u=p(u,t,r):s.add(t.semver);if(s.size>1)return null;if(l&&u){if(c=a(l.semver,u.semver,r),c>0)return null;if(0===c&&(">="!==l.operator||"<="!==u.operator))return null}for(const e of s){if(l&&!o(e,String(l),r))return null;if(u&&!o(e,String(u),r))return null;for(const s of t)if(!o(e,String(s),r))return!1;return!0}let $=!(!u||r.includePrerelease||!u.semver.prerelease.length)&&u.semver,g=!(!l||r.includePrerelease||!l.semver.prerelease.length)&&l.semver;$&&1===$.prerelease.length&&"<"===u.operator&&0===$.prerelease[0]&&($=!1);for(const e of t){if(v=v||">"===e.operator||">="===e.operator,m=m||"<"===e.operator||"<="===e.operator,l)if(g&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===g.major&&e.semver.minor===g.minor&&e.semver.patch===g.patch&&(g=!1),">"===e.operator||">="===e.operator){if(E=h(l,e,r),E===e&&E!==l)return!1}else if(">="===l.operator&&!o(l.semver,String(e),r))return!1;if(u)if($&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===$.major&&e.semver.minor===$.minor&&e.semver.patch===$.patch&&($=!1),"<"===e.operator||"<="===e.operator){if(f=p(u,e,r),f===e&&f!==u)return!1}else if("<="===u.operator&&!o(u.semver,String(e),r))return!1;if(!e.operator&&(u||l)&&0!==c)return!1}return!(l&&m&&!u&&0!==c||u&&v&&!l&&0!==c||g||$)},h=(e,t,r)=>{if(!e)return t;const s=a(e.semver,t.semver,r);return s>0?e:s<0||">"===t.operator&&">="===e.operator?t:e},p=(e,t,r)=>{if(!e)return t;const s=a(e.semver,t.semver,r);return s<0?e:s>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r={})=>{if(e===t)return!0;e=new s(e,r),t=new s(t,r);let n=!1;e:for(const s of e.set){for(const e of t.set){const t=l(s,e,r);if(n=n||null!==t,t)continue e}if(n)return!1}return!0}},51042:(e,t,r)=>{const s=r(66902);e.exports=(e,t)=>new s(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))},89042:(e,t,r)=>{const s=r(66902);e.exports=(e,t)=>{try{return new s(e,t).range||"*"}catch(e){return null}}},49602:e=>{"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},34411:(e,t,r)=>{"use strict";function s(e){var t=this;if(t instanceof s||(t=new s),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,n=arguments.length;r<n;r++)t.push(arguments[r]);return t}function n(e,t,r){var s=t===e.head?new a(r,null,t,e):new a(r,t,t.next,e);return null===s.next&&(e.tail=s),null===s.prev&&(e.head=s),e.length++,s}function i(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function o(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,r,s){if(!(this instanceof a))return new a(e,t,r,s);this.list=s,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=s,s.Node=a,s.create=s,s.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},s.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},s.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},s.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},s.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},s.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},s.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},s.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,s=0;null!==r;s++)e.call(t,r.value,s,this),r=r.next},s.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,s=this.length-1;null!==r;s--)e.call(t,r.value,s,this),r=r.prev},s.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},s.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},s.prototype.map=function(e,t){t=t||this;for(var r=new s,n=this.head;null!==n;)r.push(e.call(t,n.value,this)),n=n.next;return r},s.prototype.mapReverse=function(e,t){t=t||this;for(var r=new s,n=this.tail;null!==n;)r.push(e.call(t,n.value,this)),n=n.prev;return r},s.prototype.reduce=function(e,t){var r,s=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");s=this.head.next,r=this.head.value}for(var n=0;null!==s;n++)r=e(r,s.value,n),s=s.next;return r},s.prototype.reduceReverse=function(e,t){var r,s=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");s=this.tail.prev,r=this.tail.value}for(var n=this.length-1;null!==s;n--)r=e(r,s.value,n),s=s.prev;return r},s.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},s.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},s.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new s;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=0,i=this.head;null!==i&&n<e;n++)i=i.next;for(;null!==i&&n<t;n++,i=i.next)r.push(i.value);return r},s.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new s;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=this.length,i=this.tail;null!==i&&n>t;n--)i=i.prev;for(;null!==i&&n>e;n--,i=i.prev)r.push(i.value);return r},s.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var s=0,i=this.head;null!==i&&s<e;s++)i=i.next;var o=[];for(s=0;i&&s<t;s++)o.push(i.value),i=this.removeNode(i);for(null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev),s=0;s<r.length;s++)i=n(this,i,r[s]);return o},s.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=t,this.tail=e,this};try{r(49602)(s)}catch(e){}}}]);
//# sourceMappingURL=../sourcemaps/4878.4123bad201e65931696038d95966edbb.js.map