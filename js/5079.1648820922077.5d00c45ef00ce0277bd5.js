"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[5079],{2951:(e,t,r)=>{r.d(t,{Z:()=>Y});var n=r(15671),a=r(43144),o=r(97326),i=r(60136),l=r(82963),s=r(61120),c=r(4942),p=r(96985),u=r.n(p),d=r(45697),f=r.n(d),y=r(32384),m=r(50693),g=r(16475),v=r(80236),h=r(29673),b=r(94778),O=r(71002),Z=r(87462),P=r(29439),S=r(45987),C=r(68774),E=r(68340),w=r(71070),T=r(7887),B=r(65550),_=r(94654),j=r.n(_),D=r(58061),F=["child"];function k(e){var t=function(e,t){if("object"!==(0,O.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==(0,O.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,O.Z)(t)?t:String(t)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){(0,i.Z)(f,e);var t,r,d=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(){var e;(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=d.call.apply(d,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{sortBy:{index:0,direction:h.SortByDirection.asc},opened:[],pagination:{page:1,perPage:10},activeFilters:{}}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,n){var a=e.props.expandable;e.props.onSort(t,a?r-1:r,n),e.setState({sortBy:{index:r,direction:n}})})),(0,c.Z)((0,o.Z)(e),"onCollapse",(function(t,r,n){var a=e.state.opened;a[r]=n,e.setState({opened:a})})),(0,c.Z)((0,o.Z)(e),"onUpdatePagination",(function(t){var r=t.page,n=t.perPage;e.setState({pagination:M(M({},e.state.pagination),{},{page:r,perPage:n})})})),(0,c.Z)((0,o.Z)(e),"setFilter",(function(t,r,n){var a=e.state.activeFilters,o=(a[t],(0,S.Z)(a,[t].map(k)));e.setState({activeFilters:M(M({},o),0!==r.length&&(0,c.Z)({},t,{key:t,value:r,label:n})),pagination:M(M({},e.state.pagination),{},{page:1})})})),(0,c.Z)((0,o.Z)(e),"onDeleteFilter",(function(t,r,n){var a=(0,P.Z)(r,1)[0];e.setState({activeFilters:(0,D.Jr)(a,n,e.state.activeFilters),pagination:M(M({},e.state.pagination),{},{page:1})})})),e}return(0,a.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.cells,n=t.rows,a=t.expandable,o=t.filters,i=this.state,l=i.sortBy,s=i.opened,c=i.pagination,d=i.activeFilters,f=a?{onCollapse:this.onCollapse}:{},y=(0,D.ey)(n,d),m=a?j()((0,D.Ew)(y,c),(function(e,t){var r=e.child;return[M(M({},(0,S.Z)(e,F)),{},{isOpen:s[2*t]||!1}),{cells:[{title:r}],parent:2*t}]})):(0,D.Ew)(y,c);return u().createElement(p.Fragment,null,u().createElement(T.Z,(0,Z.Z)({pagination:M(M({},c),{},{itemCount:y.length,onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}})},o&&{filterConfig:{items:(0,D.FX)(r,o,d,this.setFilter)}},{activeFiltersConfig:{filters:Object.values(d).map((function(e){return M(M({},e),{},{category:e.label,chips:Array.isArray(e.value)?e.value.map((function(e){return{name:e}})):[{name:e.value}]})})),onDelete:this.onDeleteFilter}})),1!==r.length?u().createElement(h.Table,(0,Z.Z)({"aria-label":"General information dialog table",variant:h.TableVariant.compact,cells:r,rows:m,sortBy:M(M({},l),{},{index:a&&0===l.index?1:l.index}),onSort:this.onSort},f),u().createElement(h.TableHeader,null),u().createElement(h.TableBody,null)):u().createElement(C.D,null,(0,D.Ew)(y,c).map((function(e,t){return u().createElement(E.x,{component:E.q.small,key:t},e.title||e)}))),u().createElement(B.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},u().createElement(w.t,(0,Z.Z)({},c,{itemCount:y.length,variant:"bottom",onSetPage:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(M(M({},c),{},{page:1,perPage:r}))}}))))}}]),f}(p.Component);W.propTypes={rows:f().array,cells:f().array,onSort:f().func,expandable:f().bool,filters:f().arrayOf(f().shape({index:f().number,title:f().string,type:f().oneOf(["text","checkbox","radio","group"]),options:f().arrayOf(f().shape({value:f().oneOfType([f().string,f().node]),label:f().node}))}))},W.defaultProps={cells:[],rows:[],onSort:function(){},sortBy:{},expandable:!1};const R=W;var L=r(66e3),I=r(19299),N=r(6014),A=r(82838),U=r(61537),V=r(5242);var G=function(e){(0,i.Z)(f,e);var t,r,d=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(){var e;(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=d.call.apply(d,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,n,a){var o=e.state.rows,i=(a||o).sort((function(e,t){var n=e.cells||e,a=t.cells||t;return(""+(n[r].sortValue||n[r])).toLocaleLowerCase()>(""+(a[r].sortValue||a[r])).toLocaleLowerCase()?-1:1}));e.setState({rows:n===h.SortByDirection.asc?i:i.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.cells,a=r.rows,o=r.expandable,i=r.filters,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";a&&e.onSort(void 0,o?1:0,h.SortByDirection.asc,a),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:n,expandable:o,filters:i,modalVariant:l}}))})),e}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,r=t.isModalOpen,n=t.modalTitle,a=t.cells,o=t.rows,i=t.expandable,l=t.filters,s=t.modalVariant,c=this.props,d=c.store,f=c.writePermissions,h=c.SystemCardWrapper,b=c.OperatingSystemCardWrapper,O=c.BiosCardWrapper,Z=c.InfrastructureCardWrapper,P=c.ConfigurationCardWrapper,S=c.CollectionCardWrapper,C=c.children,E=d?y.Provider:p.Fragment;return u().createElement(E,d&&{store:d},u().createElement("div",{className:"ins-c-general-information"},u().createElement(m.r,{sm:12,md:6,hasGutter:!0},h&&u().createElement(g.P,null,u().createElement(h,{handleClick:this.handleModalToggle,writePermissions:f})),b&&u().createElement(g.P,null,u().createElement(b,{handleClick:this.handleModalToggle})),O&&u().createElement(g.P,null,u().createElement(O,{handleClick:this.handleModalToggle})),Z&&u().createElement(g.P,null,u().createElement(Z,{handleClick:this.handleModalToggle})),P&&u().createElement(g.P,null,u().createElement(P,{handleClick:this.handleModalToggle})),S&&u().createElement(g.P,null,u().createElement(S,{handleClick:this.handleModalToggle})),C,u().createElement(v.u,{title:n||"","aria-label":"".concat(n||""," modal"),isOpen:r,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:s},u().createElement(R,{cells:a,rows:o,expandable:i,onSort:this.onSort,filters:l})))))}}]),f}(p.Component);G.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().node,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().node,f().bool]),BiosCardWrapper:f().oneOfType([f().node,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().node,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().node,f().bool]),CollectionCardWrapper:f().oneOfType([f().node,f().bool]),children:f().node},G.defaultProps={entity:{},SystemCardWrapper:I.default,OperatingSystemCardWrapper:L.default,BiosCardWrapper:N.default,InfrastructureCardWrapper:A.default,ConfigurationCardWrapper:U.default,CollectionCardWrapper:V.default};const Y=(0,y.connect)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,b.eR)(t))}}}))(G)},57785:(e,t,r)=>{r.d(t,{ZP:()=>d});var n,a=r(93433),o=r(4942),i=r(9036),l=r(59086);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],u=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(p[t])};const d=(0,i.Gg)((n={},(0,o.Z)(n,l.aI.LOAD_SYSTEM_PROFILE_FULFILLED,(function(e,t){var r,n,o=t.payload.results,i=o&&o[0]&&o[0].system_profile||{},l=o&&o[0]&&void 0!==o[0].system_profile.cloud_provider&&o[0].system_profile.cloud_provider;return c(c({},e),{},{disabledApps:(0,a.Z)("aws"===l||"azure"===l?[]:["ros"]),systemProfile:c(c({loaded:!0},i),{},{ramSize:i.system_memory_bytes&&u(i.system_memory_bytes),repositories:(n=i.yum_repos,n&&n.reduce((function(e,t){return c(c({},e),t.enabled?{enabled:[].concat((0,a.Z)(e.enabled),[t])}:{disabled:[].concat((0,a.Z)(e.disabled),[t])})}),{enabled:[],disabled:[]})),network:(r=i.network_interfaces,r&&r.reduce((function(e,t){return{interfaces:[].concat((0,a.Z)(e.interfaces),[t]),ipv4:[].concat((0,a.Z)(e.ipv4),(0,a.Z)(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat((0,a.Z)(e.ipv6),(0,a.Z)(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]}))})})})),(0,o.Z)(n,l.aI.LOAD_SYSTEM_PROFILE_PENDING,(function(e){return c(c({},e),{},{systemProfile:{loaded:!1}})})),n),{systemProfile:{loaded:!1}})}}]);
//# sourceMappingURL=../sourcemaps/5079.db78c1b45ca1b8986ee51422b29e5e26.js.map