import{_ as v,n as f,a as m,r as t,o as b,c as h,b as s,e as o,w as i,q as u,d as g,s as k}from"./index-b4475e49.js";const a=f(),x=m(),y={data:()=>({visible:!1}),mounted(){a.appSidebarHide=!0,a.appHeaderHide=!0,a.appContentClass="p-0"},beforeRouteLeave(e,n,l){a.appSidebarHide=!1,a.appHeaderHide=!1,a.appContentClass="",l()},methods:{checkForm:function(e){e.preventDefault(),x.getToken(),this.$router.push({path:"/"})}}},C={class:"login login-v1 loginPage"},H={class:"login-container"},$=u('<div class="login-header"><div class="brand mb-sm-0 mb-3"><div class="d-flex align-items-center"><img src="'+k+'"><h1>管理端<span>登入</span></h1></div><small>財團法人國家衛生研究院 (NHRI) ::計畫管理系統::</small></div><div class="icon"><i class="fa fa-lock"></i></div></div>',1),N={class:"login-body"},S={class:"login-content"},A={class:"loginForm"},B={class:""},V={class:""},w={class:""};function D(e,n,l,F,I,O){const c=t("v-text-field"),d=t("v-checkbox"),p=t("v-btn"),r=t("v-container"),_=t("v-form");return b(),h("div",C,[s("div",H,[$,s("div",N,[s("div",S,[o(_,null,{default:i(()=>[o(r,{class:"px-0"},{default:i(()=>[s("div",A,[s("div",B,[o(c,{label:"帳號"})]),s("div",V,[o(c,{label:"密碼表單","append-inner-icon":e.visible?"fa-solid fa-eye":"fa-solid fa-eye-slash",type:e.visible?"text":"password","onClick:appendInner":n[0]||(n[0]=R=>e.visible=!e.visible),"hide-details":"auto"},null,8,["append-inner-icon","type"])]),o(d,{color:"primary",class:"py-0",label:"記住我的登入帳號 (公用電腦請勿勾選)"})]),s("div",w,[o(p,{class:"loginBtn",color:"secondary",block:"",size:"x-large"},{default:i(()=>[g(" 登入 ")]),_:1})])]),_:1})]),_:1})])])])])}const q=v(y,[["render",D]]);export{q as default};