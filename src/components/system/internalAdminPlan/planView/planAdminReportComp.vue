<template>
  <basicPlanSimpleComp :selectItem="selectItem"></basicPlanSimpleComp>
  <v-card>
    <v-card-title>
      <h4 class="mt-1 mb-3 ml-3">期初目標設定</h4>
    </v-card-title>
    <v-card-text>
      <v-row class="tableInfo">
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> 重點目標項目<br />(原提報) </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ targetItem.beginningKeyObjectives }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label">
            目標達成標準及實施計畫 <br />
            (原提報)
          </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ targetItem.beginningGoalAchievement }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead" v-show="targetItem.midtermImplementation">
          <label class="form-label">
            執行情形<br />
            (期中)
          </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody" v-show="targetItem.beginningGoalAchievement">
          {{ targetItem.beginningGoalAchievement }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead" v-show="targetItem.midtermGoalChasing">
          <label class="form-label">
            目標追蹤考核整體說明<br />
            (期中)
          </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody" v-show="targetItem.midtermGoalChasing">
          {{ targetItem.midtermGoalChasing }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import basicPlanSimpleComp from '@/components/system/internalAdminPlan/planView/basicPlanSimpleComp.vue';
export default {
  props: {
    selectItem: {},
  },
  components: {
    basicPlanSimpleComp,
  },
  data() {
    return {
      targetItem: { beginningKeyObjectives: '[期初]重點目標項目', beginningGoalAchievement: '[期初]目標達成標準及實施計畫(原提報)', midtermImplementation: '[期中]執行情形', midtermGoalChasing: '' },
    };
  },
  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
  },
  mounted() {
    console.log('mounted');
    // this.targetItem = this.selectItem
  },
  created() {},
};
</script>

<script></script>
