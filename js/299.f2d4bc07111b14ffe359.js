"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[299],{19299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(45987),i=n(89062),s=n(15671),o=n(43144),l=n(97326),r=n(60136),c=n(82963),u=n(61120),p=n(4942),m=n(96985),d=n.n(m),f=n(45697),h=n.n(f),y=n(50533),b=n(76422),g=n(91290),v=n(67782),O=n(94778),Z=n(55426),C=n(86038),P=n(47173),S=n(95083),A=n(92669),k=n(58061),D=["onClick"];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t=e.title,n=e.content;return d().createElement(d().Fragment,null,d().createElement("span",null,t),d().createElement(C.J,{headerContent:d().createElement("div",null,t),bodyContent:d().createElement("div",null,n)},d().createElement(P.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},d().createElement(g.ZP,null))))},M=function(e){(0,r.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var i=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function h(){var e;(0,s.Z)(this,h);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=f.call.apply(f,[this].concat(n)),(0,p.Z)((0,l.Z)(e),"state",{isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1}),(0,p.Z)((0,l.Z)(e),"onCancel",(function(){e.setState({isDisplayNameModalOpen:!1,isAnsibleHostModalOpen:!1})})),(0,p.Z)((0,l.Z)(e),"onSubmit",(function(t){return function(n){var a=e.props.entity;t(a.id,n),e.onCancel()}})),(0,p.Z)((0,l.Z)(e),"onShowDisplayModal",(function(t){t.preventDefault(),e.setState({isDisplayNameModalOpen:!0})})),(0,p.Z)((0,l.Z)(e),"onShowAnsibleModal",(function(t){t.preventDefault(),e.setState({isAnsibleHostModalOpen:!0})})),(0,p.Z)((0,l.Z)(e),"getAnsibleHost",(function(){var t=e.props.entity;return t.ansible_host||t.fqdn||t.id})),e}return(0,o.Z)(h,[{key:"render",value:function(){var e,t,n=this.props,s=n.detailLoaded,o=n.entity,l=n.properties,r=n.setDisplayName,c=n.setAnsibleHost,u=n.writePermissions,p=n.handleClick,f=n.hasHostName,h=n.hasDisplayName,y=n.hasAnsibleHostname,g=n.hasSAP,v=n.hasCPUs,O=n.hasSockets,C=n.hasCores,P=n.hasCPUFlags,k=n.hasRAM,E=n.extra,M=this.state,N=M.isDisplayNameModalOpen,_=M.isAnsibleHostModalOpen;return d().createElement(m.Fragment,null,d().createElement(b.Z,{title:"System properties",isLoading:!s,items:[].concat((0,i.Z)(f?[{title:d().createElement(H,{title:"Host name",content:"Name imported from the system."}),value:o.fqdn,size:"md"}]:[]),(0,i.Z)(h?[{title:d().createElement(H,{title:"Display name",content:"System name displayed in an inventory list."}),value:d().createElement(m.Fragment,null,o.display_name,d().createElement(S.Z,{writePermissions:u,link:"display_name",onClick:this.onShowDisplayModal})),size:"md"}]:[]),(0,i.Z)(y?[{title:d().createElement(H,{title:"Ansible hostname",content:"Hostname that is used in playbooks by Remediations."}),value:d().createElement(m.Fragment,null,this.getAnsibleHost(),d().createElement(S.Z,{writePermissions:u,link:"ansible_name",onClick:this.onShowAnsibleModal})),size:"md"}]:[]),(0,i.Z)(g?[{title:"SAP",value:null===(e=l.sapIds)||void 0===e?void 0:e.length,singular:"identifier",target:"sap_sids",onClick:function(){p("SAP IDs (SID)",(0,A.generalMapper)(l.sapIds,"SID"))}}]:[]),(0,i.Z)(v?[{title:"Number of CPUs",value:l.cpuNumber}]:[]),(0,i.Z)(O?[{title:"Sockets",value:l.sockets}]:[]),(0,i.Z)(C?[{title:"Cores per socket",value:l.coresPerSocket}]:[]),(0,i.Z)(P?[{title:"CPU flags",value:null==l||null===(t=l.cpuFlags)||void 0===t?void 0:t.length,singular:"flag",target:"flag",onClick:function(){return p("CPU flags",(0,A.generalMapper)(l.cpuFlags,"flag name"))}}]:[]),(0,i.Z)(k?[{title:"RAM",value:l.ramSize}]:[]),(0,i.Z)(E.map((function(e){var t=e.onClick;return w(w({},(0,a.Z)(e,D)),t&&{onClick:function(e){return t(e,p)}})}))))}),d().createElement(Z.Z,{isOpen:N,title:"Edit display name",value:o&&o.display_name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:this.onCancel,onSubmit:this.onSubmit(r)}),d().createElement(Z.Z,{isOpen:_,title:"Edit Ansible host",value:o&&this.getAnsibleHost(),ariaLabel:"Ansible host",modalOuiaId:"edit-ansible-name-modal",cancelOuiaId:"cancel-edit-ansible-name",confirmOuiaId:"confirm-edit-ansible-name",inputOuiaId:"input-edit-ansible-name",onCancel:this.onCancel,onSubmit:this.onSubmit(c)}))}}]),h}(m.Component);M.propTypes={detailLoaded:h().bool,entity:h().shape({display_name:h().string,ansible_host:h().string,fqdn:h().string,id:h().string}),properties:h().shape({cpuNumber:h().number,sockets:h().number,coresPerSocket:h().number,ramSize:h().string,storage:h().arrayOf(h().shape({device:h().string,mount_point:h().string,options:h().shape({}),type:h().string})),sapIds:h().arrayOf(h().string),cpuFlags:h().array}),setDisplayName:h().func,setAnsibleHost:h().func,writePermissions:h().bool,handleClick:h().func,hasHostName:h().bool,hasDisplayName:h().bool,hasAnsibleHostname:h().bool,hasSAP:h().bool,hasCPUs:h().bool,hasSockets:h().bool,hasCores:h().bool,hasCPUFlags:h().bool,hasRAM:h().bool,extra:h().arrayOf(k.x7)},M.defaultProps={detailLoaded:!1,entity:{},properties:{},hasHostName:!0,hasDisplayName:!0,hasAnsibleHostname:!0,hasSAP:!0,hasCPUs:!0,hasSockets:!0,hasCores:!0,hasCPUFlags:!0,hasRAM:!0,extra:[]},H.propTypes={title:h().string.isRequired,content:h().string.isRequired};const N=(0,y.connect)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,properties:(0,v.Ys)(n,t)}}),(function(e){var t=function(t,n){return n.payload.then((function(n){return e((0,O.eR)(t,{hasItems:!0})),e((0,O.A_)(t,{hasItems:!0},{showTags:!0})),n})),n};return{setDisplayName:function(n,a){e(t(n,(0,O.$Y)(n,a)))},setAnsibleHost:function(n,a){e(t(n,(0,O.Uw)(n,a)))}}}))(M)}}]);
//# sourceMappingURL=../sourcemaps/299.b18fcfaf5cbd31195cb453dafdd722db.js.map