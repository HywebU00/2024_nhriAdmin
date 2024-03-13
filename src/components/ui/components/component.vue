<template>
  <!-- BEGIN breadcrumb -->
  <ol class="breadcrumb float-xl-end">
    <li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
  </ol>
  <!-- END breadcrumb -->
  <!-- BEGIN page-header -->

  <h1 class="page-header">{{ $route.name }} <small></small></h1>
  <!-- END page-header -->

  <!-- BEGIN panel -->
  <panel>
    <panel-header>
      <panel-title>元件列表</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <div>
        <h5>snackbar 元件</h5>
        <v-btn color="primary" @click="snackbar = true"> Open Snackbar </v-btn>
        <v-snackbar class="snackbar" v-model="snackbar" elevation="24" location="right" :timeout="50000">
          <div class="d-flex align-center content">
            <div class="img">
              <img src="@/assets/header.png" alt="" />
            </div>
            <div class="">
              <h4>自動登出提醒</h4>
              <p>系統即將於 <span class="text-light mx-1">3 分 13 秒</span>後直接登出</p>
              <v-btn color="secondary" size="small"> 延長登出時間</v-btn>
              <!-- 佳淇版本配色 start -->
              <!-- <p>系統即將於 <span class="text-danger mx-1">3 分 13 秒</span>後直接登出</p>
              <v-btn color="warning" size="x-small"> 延長登出時間</v-btn> -->
              <!-- 佳淇版本配色 end -->
            </div>
          </div>
          <template v-slot:actions>
            <v-btn size="small" variant="text" @click="snackbar = false"> Close </v-btn>
          </template>
        </v-snackbar>
      </div>
    </panel-body>
  </panel>

  <!-- END panel -->
</template>
<script>
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
const vm = this;
export default {
  components: {},
  data() {
    return {
      snackbar: true,
    };
  },
  methods: {},
  mounted() {},
  created() {},
};
</script>
<style scoped></style>
