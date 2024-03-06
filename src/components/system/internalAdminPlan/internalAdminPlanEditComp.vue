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
          <!-- <v-icon class="fa-solid fa-xmark"></v-icon> -->
          <Icon icon="mingcute:close-fill" style="font-size: 16px" />
        </v-btn> </v-tabs
    ></v-card-subtitle>
    <OverlayScrollbarsComponent>
      <v-window v-model="tab">
        <v-window-item v-show="tab == 0">
          <basicPlanEditComp :selectItem="selectItem"></basicPlanEditComp>
        </v-window-item>
        <v-window-item v-show="tab == 1">
          <planMemberEditComp :selectItem="selectItem"></planMemberEditComp>
        </v-window-item>
        <v-window-item v-show="tab == 2">
          <!-- <planExpenseComp :selectItem="selectItem"></planExpenseComp> -->
        </v-window-item>
      </v-window>
    </OverlayScrollbarsComponent>
  </v-card>
</template>
<script>
import basicPlanEditComp from './planEdit/basicPlanEditComp.vue';
import planMemberEditComp from './planEdit/planMemberEditComp.vue';

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
export default {
  components: {
    basicPlanEditComp,
    planMemberEditComp,
    OverlayScrollbarsComponent,
  },
  props: {
    selectItem: {},
  },
  data: () => ({
    tab: 1,
    tabsArray: [{ value: 0, text: '計畫基本資料填寫', title: '計畫基本資料(檢視)' }],
  }),
  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
  },
  created() {
    if (this.selectItem.uuid) {
      this.tabsArray.push({ value: 1, text: '計畫人員' }, { value: 2, text: '計畫經費' });
    }
  },
};
</script>
