<template>
  <v-card>
    <!-- <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
                <span class="text-h5">Sarah Mcbeal</span>
            </v-card-title></v-card-item> -->
    <v-card-title>
      <h4 class="mt-1 mb-3 ml-3">計畫基本資料(檢視)</h4>
    </v-card-title>
    <v-card-text>
      <v-row class="tableInfo">
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫年度 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planYear }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>計畫類型 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planType }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>計畫類別 </label></v-col
        >

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
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label">
            <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>
            計畫主持人
          </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.chairman }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院內) </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.chairman }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院外) </label></v-col>
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
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫名稱 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planName }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 英文計畫名稱 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.planNameEng }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>綱要計畫別 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.outlineType }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫期程 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.dateStart }}
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>子計畫數量 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          {{ selectItem.outlineType }}
        </v-col>
      </v-row>
      <v-row class="planInfo">
        <v-col cols="12" class="text-center bg-thead thead mt-2">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫內容 </label></v-col
        >
        <v-col cols="12">
          <!-- <p v-html="selectItem.excerpt"></p> -->
          <v-card-text>
            <p v-html="selectItem.excerpt"></p>
          </v-card-text>
        </v-col>

        <v-col cols="12" class="text-center bg-thead thead mt-2">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>預期績效指標及評估基準 </label></v-col
        >
        <v-col cols="12">
          <!-- <p v-html="selectItem.excerpt"></p> -->
          <v-card-text>
            <p v-html="selectItem.excerpt"></p>
          </v-card-text>
        </v-col>
        <v-col cols="12" class="text-center bg-thead thead mt-2"> <label class="form-label"> 備註 </label></v-col>
        <v-col cols="12">
          <!-- <p v-html="selectItem.excerpt"></p> -->
          <v-card-text>
            <p v-html="selectItem.excerpt"></p>
          </v-card-text>
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
