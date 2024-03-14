<template>
  <v-card>
    <v-card-title>
      <h4 class="mt-1 mb-3 ml-3">計畫基本資料</h4>
    </v-card-title>
    <v-card-text>
      <v-row class="tableInfo">
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫年度 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planYear }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫類型 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planType }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫類別 </label></v-col>

        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planYear }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 執行單位 </label></v-col>

        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.executiveDept }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 單位主管 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.originalDeptChiefName }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫主持人 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.chairman }}
        </v-col>

        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫登錄人 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.registerBy }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫編號 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.serialNo }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 中文計畫名稱 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planName }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    selectItem: {},
  },
  components: {},
  data() {
    return {
      targetItem: {},
    };
  },
  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
  },
  mounted() {
    console.log('mounted');
    this.targetItem = this.selectItem;
  },
  created() {},
};
</script>

<script></script>
