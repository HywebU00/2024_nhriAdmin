import{_ as c,E as d,r as p,o as i,c as l,b as o,e as _,w as u,d as s}from"./index-df01a5a0.js";const e=d(),h={mounted(){e.appSidebarHide=!0,e.appHeaderHide=!0,e.appContentClass="p-0"},beforeRouteLeave(t,a,r){e.appSidebarHide=!1,e.appHeaderHide=!1,e.appContentClass="",r()},methods:{checkForm:function(t){t.preventDefault(),this.$router.push({path:"/dashboard/v3"})}}},f={class:"error"},m=o("div",{class:"error-code"},"404",-1),v={class:"error-content"},b=o("div",{class:"error-message"},"We couldn't find it...",-1),k=o("div",{class:"error-desc mb-4"},[s(" The page you're looking for doesn't exist. "),o("br"),s(" Perhaps, there pages will help find what you're looking for. ")],-1);function x(t,a,r,H,C,g){const n=p("router-link");return i(),l("div",f,[m,o("div",v,[b,k,o("div",null,[_(n,{to:"/",class:"btn btn-success px-3"},{default:u(()=>[s("Go Home")]),_:1})])])])}const w=c(h,[["render",x]]);export{w as default};
