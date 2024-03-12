<template>
  <v-card class="cardDialog">
    <v-card-subtitle>
      <v-tabs v-model="tab" align-tabs="start" class="tabBtn ml-2 mr-1 mt-1" density="comfortable">
        <v-tab v-for="(item, i) in tabsArray" :key="i" :value="item.value">
          <label class="form-label" style="font-size: 16px">
            {{ item.text }}
          </label></v-tab
        >
        <v-spacer></v-spacer>
        <v-btn class="closeBtn" color="" @click="handleClose">
          <Icon icon="mingcute:close-fill" style="font-size: 16px" />
        </v-btn> </v-tabs
    ></v-card-subtitle>
    <OverlayScrollbarsComponent>
      <v-window v-model="tab">
        <v-window-item v-show="tab == 0">
          <basicPlanComp :selectItem="selectItem"></basicPlanComp>
        </v-window-item>
        <v-window-item v-show="tab == 1">
          <planMemberComp :selectItem="selectItem"></planMemberComp>
        </v-window-item>
        <v-window-item v-show="tab == 2">
          <planExpenseComp :selectItem="selectItem"></planExpenseComp>
        </v-window-item>
        <v-window-item v-show="tab == 3">
          <planAdminReportComp :selectItem="selectItem"></planAdminReportComp>
        </v-window-item>
        <v-window-item v-show="tab == 4">
          <planManageComp :selectItem="selectItem"></planManageComp>
        </v-window-item>
        <v-window-item v-show="tab == 5">
          <planCertifyHistoryComp :selectItem="selectItem"></planCertifyHistoryComp>
        </v-window-item>
      </v-window>
    </OverlayScrollbarsComponent>
  </v-card>
</template>
<script>
import basicPlanComp from '@/components/system/internalAdminPlan/planView/basicPlanComp.vue';
import planMemberComp from '@/components/system/internalAdminPlan/planView/planMemberComp.vue';
import planExpenseComp from '@/components/system/internalAdminPlan/planView/planExpenseComp.vue';
import planAdminReportComp from '@/components/system/internalAdminPlan/planView/planAdminReportComp.vue';
import planManageComp from '@/components/system/internalAdminPlan/planView/planManageComp.vue';
import planCertifyHistoryComp from '@/components/system/internalAdminPlan/planView/planCertifyHistoryComp.vue';

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
export default {
  components: {
    basicPlanComp,
    planMemberComp,
    planExpenseComp,
    planAdminReportComp,
    planManageComp,
    planCertifyHistoryComp,
    OverlayScrollbarsComponent,
  },
  props: {
    selectItem: {},
  },
  data: () => ({
    tab: 0,
    tabsArray: [
      { value: 0, text: '計畫基本資料', title: '計畫基本資料(檢視)' },
      { value: 1, text: '計畫人員' },
      { value: 2, text: '計畫經費' },
      { value: 3, text: '期初目標設定' },
      { value: 4, text: '管考項目填報' },
      { value: 5, text: '簽核歷程' },
    ],
  }),
  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
  },
};
</script>
