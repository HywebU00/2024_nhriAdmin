import{_ as c,E as p,a as m,r as b,o as f,c as g,b as e,d as t,e as h,w as u,G as r}from"./index-df01a5a0.js";const s=p(),x=m(),v={mounted(){s.appSidebarHide=!0,s.appHeaderHide=!0,s.appContentClass="p-0"},beforeRouteLeave(a,o,i){s.appSidebarHide=!1,s.appHeaderHide=!1,s.appContentClass="",i()},methods:{checkForm:function(a){a.preventDefault(),x.getToken(),this.$router.push({path:"/"})}}},_={class:"login login-with-news-feed"},k=e("div",{class:"news-feed"},[e("div",{class:"news-image",style:{"background-image":"url(/assets/img/login-bg/login-bg-11.jpg)"}}),e("div",{class:"news-caption"},[e("h4",{class:"caption-title"},[e("b",null,"Color"),t(" Admin App")]),e("p",null," Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")])],-1),A={class:"login-container"},w=r('<div class="login-header mb-30px"><div class="brand"><div class="d-flex align-items-center"><span class="logo"></span><b>Color</b> Admin </div><small>Bootstrap 5 Responsive Admin Template</small></div><div class="icon"><i class="fa fa-sign-in-alt"></i></div></div>',1),y={class:"login-content"},C=r('<div class="form-floating mb-15px"><input type="text" class="form-control h-45px fs-13px" placeholder="Email Address" id="emailAddress"><label for="emailAddress" class="d-flex align-items-center fs-13px text-gray-600">Email Address</label></div><div class="form-floating mb-15px"><input type="password" class="form-control h-45px fs-13px" placeholder="Password" id="password"><label for="password" class="d-flex align-items-center fs-13px text-gray-600">Password</label></div><div class="form-check mb-30px"><input class="form-check-input" type="checkbox" value="1" id="rememberMe"><label class="form-check-label" for="rememberMe"> Remember Me </label></div><div class="mb-15px"><button type="submit" class="btn btn-theme d-block h-45px w-100 btn-lg fs-14px">Sign me in</button></div>',4),S={class:"mb-40px pb-40px text-dark"},H=e("hr",{class:"bg-gray-600 opacity-2"},null,-1),E=e("div",{class:"text-gray-600 text-center text-gray-500-darker mb-0"}," © Color Admin All Right Reserved 2023 ",-1);function N(a,o,i,R,B,l){const n=b("router-link");return f(),g("div",_,[k,e("div",A,[w,e("div",y,[e("form",{onSubmit:o[0]||(o[0]=(...d)=>l.checkForm&&l.checkForm(...d)),method:"GET",class:"fs-13px"},[C,e("div",S,[t(" Not a member yet? Click "),h(n,{to:"/user/register-v3",class:"text-success"},{default:u(()=>[t("here")]),_:1}),t(" to register. ")]),H,E],32)])])])}const P=c(v,[["render",N]]);export{P as default};
