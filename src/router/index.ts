import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
  // createWebHistory應該是較適用於平面網站 應用於SSR SEO優化 傳統瀏覽器瀏覽
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
    history: createWebHashHistory(),
  routes: [

    //  { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/t01', component: () => import('@/test/t01.vue'), name: '測試頁01', meta: { parentPathName: 'Home ／ Email1 ／ ' } },
    { path: '/t02', component: () => import('@/test/t02.vue'), name: '測試頁02', meta: { parentPathName: 'Home / Email2 / ' } },

    //internalAdminPlan 院內行政計畫
    { path: '/system/internalAdminPlan/overview', component: () => import('@/components/system/internalAdminPlan/overview.vue'), name: '計畫總覽', meta: { parentPathName: '首頁 / 院內行政計畫 / ' } },
    { path: '/system/internalAdminPlan/proposal', component: () => import('@/components/system/internalAdminPlan/proposal.vue'), name: '計畫研提', meta: { parentPathName: '首頁 / 院內行政計畫 / ' } },

    //manage 系統管理
    { path: '/system/manage/dept', component: () => import('@/components/system/manager/dept.vue'), name: 'Unit(單位組織)', meta: { parentPathName: '首頁 / 系統管理 / ' } },
    { path: '/system/manage/account', component: () => import('@/components/system/manager/account.vue'), name: 'Account (帳號管理)', meta: { parentPathName: '首頁 / 系統管理 / ' } },

    { path: '/auth/signin', component: () => import('@/components/system/page/login.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../views/Error.vue') },


  //  ui介面路由
        { path: '/' ,  name: 'UI介面',component: () => import('@/components/ui/template/form.vue') },
        { path: '/ui/template/tree', name: '樹狀圖'  ,meta: { parentPathName: '首頁 / UI介面 / ' } ,component: () => import('@/components/ui/template/tree.vue') },
        { path: '/ui/template/form',name: '表單模板',meta: { parentPathName: '首頁 / UI介面 / ' } , component: () => import('@/components/ui/template/form.vue') },
 { path: '/ui/template/table',name: '列表模板',meta: { parentPathName: '首頁 / UI介面 / ' } , component: () => import('@/components/ui/template/table.vue') },


  ],
});

export default router;
