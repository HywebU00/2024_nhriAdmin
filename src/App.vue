<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useAppOptionStore } from '@/pinia/app-option';
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
// @ts-ignore
import { ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress';
import AppSidebar from '@/components/app/Sidebar.vue';
import AppSidebarRight from '@/components/app/SidebarRight.vue';
import AppHeader from '@/components/app/Header.vue';
import AppTopMenu from '@/components/app/TopMenu.vue';
// @ts-ignore
import AppFooter from '@/components/app/Footer.vue';
// import AppThemePanel from '@/components/app/ThemePanel.vue';
import router from './router';

import { useAppApiDataStore } from '@/pinia/app-api-data';
const appApiData = useAppApiDataStore();
const appSidebarMenu = useAppSidebarMenuStore();
const appOption = useAppOptionStore();
const internalInstance = getCurrentInstance();

//測試權限控制
const newItem2 = {
  url: '/email',
  icon: 'fa fa-hdd',
  title: 'Email',
  children: [{ url: '/t02', icon: 'fa fa-file', title: 'New Page2' }],
};
appSidebarMenu.addMenuItem(newItem2);
appSidebarMenu.addMenuSystem();

console.log('apiToken', appApiData.apiToken);

// if (!appApiData.apiToken) {
//   router.push({ path: '/auth/signin' });

//   // appApiData.getToken();
// }

onMounted(() => {
  //不能放這 父節點打不開
  // appSidebarMenu.addMenuItem({
  // 	url: '/t01', icon: 'fa fa-sitemap', title: 'Test01111'
  // })
  // appSidebarMenu.clearMenu();
  // const newItem = { url: '/new-page', icon: 'fa fa-file', title: 'New Page' };
  // appSidebarMenu.addMenuItem(newItem);

  // const newItem = { url: '/t0X', icon: 'fa fa-file', title: 'New Page' };
  // appSidebarMenu.addMenuItem(newItem);

  // const newItem2 = {
  // 	url: '/email', icon: 'fa fa-hdd', title: 'Email', badge: '10',
  // 	children: [
  // 		{ url: '/t01', icon: 'fa fa-file', title: 'New Page2' },

  // 	]
  // };
  // appSidebarMenu.addMenuItem(newItem2);
  // // appSidebarMenuStore.clearMenu();
  console.log(appSidebarMenu.$state);
});

const progresses = [] as ProgressFinisher[];

router.beforeEach(async (to, from) => {
  progresses.push(useProgress().start());
  appOption.appSidebarMobileToggled = false;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
router.afterEach(async (to, from) => {
  progresses.pop()?.finish();
});
</script>

<template>
  <div
    class="app"
    v-bind:class="{
      'app-header-menu-search-toggled': appOption.appHeaderSearchToggled,
      'app-header-fixed': appOption.appHeaderFixed,
      'app-sidebar-fixed': appOption.appSidebarFixed,
      // 'app-sidebar-grid': appOption.appSidebarGrid,
      // 'app-sidebar-toggled': appOption.appSidebarToggled,
      'app-sidebar-collapsed': appOption.appSidebarCollapsed,
      'app-sidebar-mobile-toggled': appOption.appSidebarMobileToggled,
      'app-sidebar-mobile-closed': appOption.appSidebarMobileClosed,
      'app-sidebar-end-toggled': appOption.appSidebarEndToggled,
      'app-sidebar-end-mobile-toggled': appOption.appSidebarEndMobileToggled,
      'app-content-full-height': appOption.appContentFullHeight,
      'app-content-full-width': appOption.appSidebarHide,
      'app-without-sidebar': appOption.appSidebarHide,
      'app-with-end-sidebar': appOption.appSidebarEnd,
      'app-with-wide-sidebar': appOption.appSidebarWide,
      'app-with-hover-sidebar': appOption.appSidebarHover,
      'app-with-top-menu': appOption.appTopMenu,
      'app-with-two-sidebar': appOption.appSidebarTwo,
      'pt-0': appOption.appHeaderHide,
      // 'app-boxed-layout': appOption.appBoxedLayout,
      'app-footer-fixed': appOption.appFooterFixed,
      'app-sidebar-minified': appOption.appSidebarMinified,
      // 'app-gradient-enabled': appOption.appGradientEnabled
    }"
  >
    <vue3-progress-bar />
    <app-header v-if="!appOption.appHeaderHide" />
    <app-sidebar v-if="!appOption.appSidebarHide" />
    <app-sidebar-right v-if="appOption.appSidebarTwo" />
    <app-top-menu v-if="appOption.appTopMenu" />
    <div class="app-content" v-bind:class="appOption.appContentClass">
      <router-view></router-view>
    </div>
    <app-footer v-if="appOption.appFooter" />
    <!-- <app-theme-panel /> -->
  </div>
</template>
