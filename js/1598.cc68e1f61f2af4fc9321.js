"use strict";(self.webpackChunkinsights_inventory_frontend=self.webpackChunkinsights_inventory_frontend||[]).push([[1598],{64801:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(45987),r=t(92950),a=t.n(r),o=t(45697),c=t.n(o),l=t(95249),u=t(65413),s=["writePermissions"],f=function(e){var n=e.link,t=e.onClick;return a().createElement("a",{className:"ins-c-inventory__detail--action",href:"".concat(window.location.href,"/").concat(n),onClick:t},a().createElement(u.ZP,null))};f.propTypes={link:c().string.isRequired,onClick:c().func.isRequired};var v=void 0,d=function(e){var n=(0,l.T)("inventory",["inventory:*:*","inventory:hosts:write","inventory:*:write"]).hasAccess;return n&&(v=n),n?a().createElement(f,e):null};d.propTypes={link:c().string.isRequired,onClick:c().func.isRequired};var p=function(e){var n=e.writePermissions,t=(0,i.Z)(e,s);return insights.chrome.isProd||n||v?a().createElement(f,t):"boolean"!=typeof n?a().createElement(d,t):null};p.propTypes={writePermissions:c().bool};const m=p},95083:(e,n,t)=>{t.d(n,{Z:()=>i.Z});var i=t(64801)},13874:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(15671),r=t(43144),a=t(60136),o=t(82963),c=t(61120),l=t(92950),u=t.n(l),s=t(45697),f=t.n(s),v=t(47173),d=t(80236),p=t(92607);var m=function(e){(0,a.Z)(s,e);var n,t,l=(n=s,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,c.Z)(n);if(t){var r=(0,c.Z)(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return(0,o.Z)(this,e)});function s(e){var n;return(0,i.Z)(this,s),(n=l.call(this,e)).state={},n}return(0,r.Z)(s,[{key:"render",value:function(){var e=this,n=this.props,t=n.title,i=n.isOpen,r=n.onCancel,a=n.onSubmit,o=n.ariaLabel,c=n.modalOuiaId,l=n.cancelOuiaId,s=n.confirmOuiaId,f=n.inputOuiaId,m=this.state.value;return u().createElement(d.u,{variant:"small",title:t,className:"ins-c-inventory__detail--edit","aria-label":o?"".concat(o," - modal"):"input modal",ouiaId:c,isOpen:i,onClose:function(e){return r(e)},actions:[u().createElement(v.zx,{key:"cancel","data-action":"cancel",variant:"secondary",onClick:r,ouiaId:l},"Cancel"),u().createElement(v.zx,{key:"confirm","data-action":"confirm",variant:"primary",onClick:function(){return a(e.state.value)},ouiaId:s},"Save")]},u().createElement(p.oi,{value:m,type:"text",ouiaId:f,onChange:function(n){return e.setState({value:n})},"aria-label":o}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.isOpen?void 0!==n.value?null:{value:e.value||""}:{value:void 0}}}]),s}(l.Component);m.propTypes={title:f().string,isOpen:f().bool,onCancel:f().func,onSubmit:f().func,ariaLabel:f().string,modalOuiaId:f().string,cancelOuiaId:f().string,confirmOuiaId:f().string,inputOuiaId:f().string,value:f().string},m.defaultProps={onCancel:function(){},onSubmit:function(){},isOpen:!1,title:"",ariaLabel:"input text"}},55426:(e,n,t)=>{t.d(n,{Z:()=>i.Z});var i=t(13874)}}]);