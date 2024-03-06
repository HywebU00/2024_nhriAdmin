<template>
  <ol class="breadcrumb float-xl-end">
    <li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
  </ol>
  <!-- END breadcrumb -->

  <h1 class="page-header">{{ $route.name }} <small></small></h1>
  <!-- END page-header -->

  <!-- 組合型表單 start -->
  <small class="text-primary">檔案更新 > 需更新 src/scss資料夾 及 src/plugins 檔案 </small>
  <panel>
    <panel-header>
      <panel-title>組合型表單</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <!-- 左右兩欄 start -->
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col cols="12" class="label" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field variant="outlined" label="文字標準表單" hide-details="auto" single-line density="compact"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field variant="outlined" label="文字標準表單" density="compact" single-line hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="primary">選擇</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="">
                  <v-text-field variant="outlined" label="有icon的輸入匡" type="text" hide-details="auto" single-line :messages="['說明文字']" append-inner-icon="fa-solid fa-pen" density="compact"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field variant="outlined" single-line label="密碼表單" :append-inner-icon="visible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" :type="visible ? 'text' : 'password'" density="compact" :messages="['說明文字']" @click:append-inner="visible = !visible"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6"
              ><v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col class="d-flex">
                  <v-text-field variant="outlined" label="文字標準表單" single-line hide-details="auto" :messages="['文字標準表單']" density="compact"></v-text-field>
                  <v-checkbox class="checkbox" label="同會員資訊" hide-details="auto"></v-checkbox>
                </v-col> </v-row
            ></v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="4" lg="3">
                  <v-select variant="outlined" density="compact" label="下拉式選單" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
                </v-col>
                <v-col cols="8" lg="6">
                  <v-text-field variant="outlined" single-line density="compact" label="文字標準表單" hide-details="auto"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field placeholder="886" density="compact" single-line variant="outlined" hide-details="auto">
                    <template v-slot:prepend>
                      <v-icon> fa-regular fa-plus </v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field density="compact" hide-details="auto" single-line variant="outlined" label="">
                    <template v-slot:append>
                      <p class="mb-0">分機</p>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field density="compact" hide-details="auto" single-line variant="outlined"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="4" lg="3">
                  <v-text-field density="compact" label="文字標準表單" variant="outlined" single-line hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="8" lg="6">
                  <v-text-field density="compact" label="文字標準表單" single-line hide-details="auto" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="3">
                  <label class="" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="3">
                  <v-select label="下拉式選單" single-line density="compact" variant="outlined" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select label="下拉式選單" density="compact" variant="outlined" single-line class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
                </v-col>
                <v-col cols="">
                  <v-text-field label="文字標準表單" single-line density="compact" variant="outlined" hide-details="auto"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
      </v-form>
      <!-- 左右兩欄 end -->
    </panel-body>
  </panel>
  <panel>
    <panel-header>
      <panel-title>組合型表單 一欄樣式</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <!-- 一欄樣式 start -->
      <v-form>
        <v-container>
          <v-row class="formGrp">
            <v-col cols="12" class="label" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" label="文字標準表單" hide-details="auto" single-line density="compact"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" label="文字標準表單" density="compact" single-line hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="auto">
              <v-btn color="primary">選擇</v-btn>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="">
              <v-text-field variant="outlined" label="有icon的輸入匡" type="text" hide-details="auto" single-line :messages="['說明文字']" append-inner-icon="fa-solid fa-pen" density="compact"></v-text-field>
            </v-col> </v-row
          ><v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" single-line label="密碼表單" :append-inner-icon="visible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" :type="visible ? 'text' : 'password'" density="compact" :messages="['說明文字']" @click:append-inner="visible = !visible"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label for="">單選 </label>
            </v-col>
            <v-col>
              <v-radio-group inline color="secondary" hide-details="auto">
                <v-radio label="是" value="true"></v-radio>
                <v-radio label="否" value="false"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col class="d-flex">
              <v-text-field variant="outlined" label="文字標準表單" single-line hide-details="auto" :messages="['文字標準表單']" density="compact"></v-text-field>
              <v-checkbox class="checkbox" label="同會員資訊" hide-details="auto"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col cols="12" md="2" class="">
              <label class="label" for="list"><abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>多選選單</label>
            </v-col>
            <v-col class="checkGrp" id="list">
              <v-checkbox density="compact" error-messages="" label="中文"></v-checkbox>
              <v-checkbox density="compact" error-messages="" label="英文"></v-checkbox>
              <v-checkbox density="compact" error-messages="" label="日文"></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="4" lg="3">
              <v-select variant="outlined" density="compact" label="下拉式選單" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
            </v-col>
            <v-col cols="8" lg="7">
              <v-text-field variant="outlined" single-line density="compact" label="文字標準表單" hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col>
              <v-text-field placeholder="886" density="compact" single-line variant="outlined" hide-details="auto">
                <template v-slot:prepend>
                  <v-icon> fa-regular fa-plus </v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field density="compact" hide-details="auto" single-line variant="outlined" label="">
                <template v-slot:append>
                  <p class="mb-0">分機</p>
                </template>
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field density="compact" hide-details="auto" single-line variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">
                <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>
                兩欄欄位
              </label>
            </v-col>
            <v-col cols="4" lg="3">
              <v-text-field density="compact" label="文字標準表單" variant="outlined" single-line hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="8" lg="7">
              <v-text-field density="compact" label="文字標準表單" single-line hide-details="auto" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formGrp">
            <v-col class="label" cols="12" lg="2">
              <label class="" for="">兩欄欄位</label>
            </v-col>
            <v-col cols="3">
              <v-select label="下拉式選單" single-line density="compact" variant="outlined" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
            </v-col>
            <v-col cols="3">
              <v-select label="下拉式選單" density="compact" variant="outlined" single-line class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
            </v-col>
            <v-col cols="">
              <v-text-field label="文字標準表單" single-line density="compact" variant="outlined" hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <!-- 一欄樣式 end -->
    </panel-body>
  </panel>
  <!-- 組合型表單 end -->

  <panel>
    <panel-header>
      <panel-title>查詢欄位</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <!-- 計畫列表 start -->
      <v-row class="tableInfo">
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫年度 </label></v-col>
        <v-col cols="4" class="tbody"> 101 </v-col>
        <v-col cols="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>計畫類型 </label></v-col
        >
        <v-col cols="4" class="tbody"> 402881902f71a65b012f71b76a070001 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫類別 </label></v-col>

        <v-col cols="4" class="tbody"> 1234 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 執行單位 </label></v-col>

        <v-col cols="4" class="tbody"> 2c90829732fc6dd80132fc7a9c200001 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 單位主管 </label></v-col>
        <v-col cols="4" class="tbody"> 單位主管 </v-col>
        <v-col cols="2" class="text-right bg-thead thead">
          <label class="form-label">
            <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>
            計畫主持人
          </label></v-col
        >
        <v-col cols="4" class="tbody"> 860807-1 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院內) </label></v-col>
        <v-col cols="4" class="tbody"> 其它主持人 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 協同/共同/其它主持人(院外) </label></v-col>
        <v-col cols="4" class="tbody"> 其它主持人 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫登錄人 </label></v-col>
        <v-col cols="4" class="tbody"> 其它主持人 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫編號 </label></v-col>
        <v-col cols="4" class="tbody"> 12345 </v-col>
        <v-col cols="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫名稱 </label></v-col
        >
        <v-col cols="4" class="tbody"> 自動化高速藥物篩選研究 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 英文計畫名稱 </label></v-col>
        <v-col cols="4" class="tbody"> Research for high throughput screening</v-col>
        <v-col cols="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>綱要計畫別 </label></v-col
        >
        <v-col cols="4" class="tbody"> 綱要計畫別 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label"> 計畫期程 </label></v-col>
        <v-col cols="4" class="tbody"> 計畫期程 </v-col>
        <v-col cols="2" class="text-right bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>子計畫數量 </label></v-col
        >
        <v-col cols="4" class="tbody"> 計畫數量 </v-col>
        <v-col cols="2" class="text-right bg-thead thead"> <label class="form-label" style="font-size: 16px"> 中文計畫內容 </label></v-col>
        <v-col cols="4" class="tbody">
          L技藥研所以任務導向之方式，著重於癌症、糖尿病和心血管疾病等新陳代謝疾病以及病毒感染等相關之藥物及生物技術的研究與發展。\n本所自動化高速藥物篩選核心設施整合了自動化機器手臂的實驗平台、純化合物庫與化學生物整合性系統，透過結合電腦控制之自動化操作方式、高速及高效率活性分析方法和資料庫管理及分析，可在短時間內分析數萬至幾十萬個化合物的生物活性。
        </v-col>
      </v-row>
      <!-- 計畫列表 end -->
      <v-row class="planInfo">
        <v-col cols="12" class="text-center bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>中文計畫內容 </label></v-col
        >
        <v-col cols="12">
          <v-card-text>
            <p>
              技藥研所以任務導向之方式，著重於癌症、糖尿病和心血管疾病等新陳代謝疾病以及病毒感染等相關之藥物及生物技術的研究與發展。\n本所自動化高速藥物篩選核心設施整合了自動化機器手臂的實驗平台、純化合物庫與化學生物整合性系統，透過結合電腦控制之自動化操作方式、高速及高效率活性分析方法和資料庫管理及分析，可在短時間內分析數萬至幾十萬個化合物的生物活性。本核心設施將依任務需求及各藥物發展所需，進行下列工作：\n-
              負責建立符合自動化流程且適用於高速藥物篩選系統的生物活性篩選方法。\n- 進行高速藥物篩選實驗與實驗數據分析。\n- 持續針對已有的分子標的提供活性測試。\n本核心設施目前持續支援3大類(含6種) 不同的活性測試方法，包含：\n - 抗癌藥物部分：MTS 細胞毒性測試方法、IDO
              抑制劑測試方法和CXCR4拮抗劑測試方法。\n - 抗糖尿病藥物部分：DPP4 抑制劑測試方法和SGLT2 抑制劑測試方法。\n - 抗病毒藥物部分：抗C 型肝炎病毒藥物測試方法。\n未來將新增ETA 拮抗劑和抗登革熱病毒藥物之研發。肺動脈高血壓可導致心臟衰竭，而ETA
              拮抗劑可用於治療肺動脈高血壓。登革熱病毒由帶有病毒之病媒蚊叮咬而致病，可引起典型登革熱，導致高熱、頭部、肌肉、骨頭、關節痛，後眼窩痛以及發疹，也可能引起登革出血熱，嚴重時會因出血而致命。本核心設施將嘗試建立ETA 拮抗劑和抗登革熱病毒藥物之高速藥物篩選方法，以便後續進行高速藥物篩選。
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="12" class="text-center bg-thead thead">
          <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>預期績效指標及評估基準 </label></v-col
        >
        <v-col cols="12">
          <!-- <p v-html="selectItem.excerpt"></p> -->
          <v-card-text></v-card-text>
        </v-col>
        <v-col cols="12" class="text-center mt-2"> <label class="form-label"> 備註 </label></v-col>
        <v-col cols="12">
          <!-- <p v-html="selectItem.excerpt"></p> -->
          <v-card-text></v-card-text>
        </v-col>
      </v-row>
    </panel-body>
  </panel>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<style></style>
