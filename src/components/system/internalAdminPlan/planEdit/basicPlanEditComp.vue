<template>
  <v-card>
    <v-card-title>
      <h4 class="mt-1 mb-3 ml-3" v-if="selectItem.uuid">編輯計畫基本資料</h4>
      <h4 class="mt-1 mb-3 ml-3" v-else="selectItem.uuid">新增院內研究計畫</h4>
    </v-card-title>
    <v-card-text>
      <!-- 新增 有formGrp 的 tableInfo start-->
      <v-row class="tableInfo">
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-radio-group inline color="secondary" hide-details="auto">
                <v-radio label="是" value="true"></v-radio>
                <v-radio label="否" value="false"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="formGrp">
            <v-col cols="4" class="label bg-thead thead">
              <label class="" for=""><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>年度計畫</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- 新增 有formGrp 的 tableInfo end -->
      <v-row class="tableInfo">
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫年度 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.planYear" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>計畫類型 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.planType" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>計畫類別 </label></v-col
        >

        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.planYear" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 執行單位 </label></v-col>

        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.executiveDept" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 單位主管 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.originalDeptChiefName" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label">
            <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>
            計畫主持人
          </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院內) </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院外) </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫登錄人 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.registerBy" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫編號 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.serialNo" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫名稱 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.planName" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 英文計畫名稱 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.planNameEng" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>綱要計畫別 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.outlineType" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫期程 </label></v-col>
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.dateStart" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>子計畫數量 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-text-field v-model="targetItem.outlineType" variant="outlined" density="compact" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="4" lg="2" class="text-right bg-thead thead">
          <label class="form-label"><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>子計畫數量 </label></v-col
        >
        <v-col lg="4" cols="8" class="tbody">
          <v-radio-group inline color="secondary" hide-details="auto">
            <v-radio label="是" value="true"></v-radio>
            <v-radio label="否" value="false"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row class="planInfo">
        <v-col cols="12" class="text-center bg-thead thead mt-2">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫內容 </label></v-col
        >
        <v-col cols="12">
          <v-textarea variant="outlined" v-model="selectItem.excerpt" auto-grow></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center bg-thead thead mt-2">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>預期績效指標及評估基準 </label></v-col
        >
        <v-col cols="12">
          <v-textarea variant="outlined" v-model="selectItem.excerpt" auto-grow></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center bg-thead mt-2 thead"> <label class="form-label"> 備註 </label></v-col>
        <v-col cols="12">
          <v-textarea variant="outlined" v-model="selectItem.excerpt" auto-grow></v-textarea>
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
