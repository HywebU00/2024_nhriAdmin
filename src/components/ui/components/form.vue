<template>
  <ol class="breadcrumb float-xl-end">
    <li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
  </ol>
  <!-- END breadcrumb -->

  <h1 class="page-header">{{ $route.name }} <small></small></h1>
  <!-- END page-header -->
  <v-row class="">
    <!-- 組合型表單 start -->
    <v-col cols="12">
      <h3>componsents</h3>
      <v-card class="pa-2 h-100">
        <v-form>
          <v-container>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="6" lg="5">
                <v-text-field variant="solo" single-line label="文字標準表單" hide-details="auto" density="compact"></v-text-field>
              </v-col>
              <v-col cols="6" lg="5">
                <v-text-field variant="solo" label="文字標準表單" hide-details="auto" single-line density="compact"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col>
                <v-text-field variant="solo" label="文字標準表單" density="compact" single-line hide-details="auto"></v-text-field>
              </v-col>
              <v-col cols="auto">
                <v-btn class="h-100" color="primary">選擇</v-btn>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="">
                <v-text-field variant="solo" label="有icon的輸入匡" type="text" hide-details="auto" single-line :messages="['說明文字']" append-inner-icon="mdi-pencil" density="compact"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col>
                <v-text-field variant="solo" single-line label="密碼表單" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" :messages="['說明文字']" @click:append-inner="visible = !visible"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col cols="12" lg="2" class="pb-0">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col>
                <v-text-field variant="solo" label="文字標準表單" single-line hide-details="auto" :messages="['文字標準表單']" density="compact"></v-text-field>
              </v-col>
              <v-col cols="auto">
                <v-checkbox label="同會員資訊" hide-details="auto"></v-checkbox>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col cols="12" lg="2" class="pb-0">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="4" lg="3">
                <v-select variant="solo" density="compact" label="下拉式選單" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
              </v-col>
              <v-col cols="8" lg="7">
                <v-text-field variant="solo" single-line density="compact" label="文字標準表單" hide-details="auto"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="4" lg="3">
                <v-text-field placeholder="886" density="compact" single-line variant="solo" hide-details="auto">
                  <template v-slot:prepend>
                    <v-icon> mdi-plus </v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="5" lg="4">
                <v-text-field density="compact" hide-details="auto" single-line variant="solo" label="">
                  <template v-slot:append>
                    <p>分機</p>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field density="compact" hide-details="auto" single-line variant="solo"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="4" lg="3">
                <v-text-field density="compact" label="文字標準表單" variant="solo" single-line hide-details="auto"></v-text-field>
              </v-col>
              <v-col cols="8" lg="7">
                <v-text-field density="compact" label="文字標準表單" single-line hide-details="auto" variant="solo"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col class="pb-0" cols="12" lg="2">
                <label class="text-primary" for="">兩欄欄位</label>
              </v-col>
              <v-col cols="3">
                <v-select label="下拉式選單" single-line density="compact" variant="solo" class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
              </v-col>
              <v-col cols="3">
                <v-select label="下拉式選單" density="compact" variant="solo" single-line class="h-100" hide-details="auto" :items="['選項ㄧ', '選項二', '選項三']"></v-select>
              </v-col>
              <v-col cols="">
                <v-text-field label="文字標準表單" single-line density="compact" variant="solo" hide-details="auto"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
    <!-- 組合型表單 end -->
  </v-row>
  <panel>
    <panel-header>
      <panel-title>查詢欄位</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <v-row dense>
        <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px">計畫年度</label>
        <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
        <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px">計畫類別</label>

        <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
        <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px">計畫編號</label>
        <v-col md="4">
          <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
        </v-col>
        <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px">計畫名稱</label>
        <v-col md="4">
          <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
        </v-col>
        <v-col class="text-center" cols="6" offset-md="6">
          <v-btn class="mb-5" color="primary" variant="elevated" size="small">查詢</v-btn>
        </v-col>
      </v-row>
    </panel-body>
  </panel>
  <panel>
    <panel-header>
      <panel-title>查詢結果 </panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <v-data-table
        :headers="headers"
        :items="tableData"
        :loading="loading"
        :footer-props="{ itemsPerPageText: '每頁筆數' }"
        no-data-text="無資料"
        loading-text="資料傳輸中"
        :items-length="totalItems"
        items-per-page-text="每頁筆數"
        :items-per-page-options="itemsPerPageArray"
        item-value="uuid"
        v-model:items-per-page="itemsPerPage"
        multi-sort
        @update:options="getTableDataFormServer"
      >
        <!-- <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
                    <tr>
                        <template v-for="column in columns" :key="column.key">
                            <td>
                                <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">{{ column.title
                                }}</span>
                                <template v-if="isSorted(column)">
                                    <v-icon :icon="getSortIcon(column)"></v-icon>
                                </template>
                                <v-icon v-if="column.removable" icon="$close" @click="() => remove(column.key)"></v-icon>
                            </td>
                        </template>
                    </tr>
                </template> -->
        <template v-slot:item.index="{ item, index }">
          {{ index + 1 }}
        </template>
        <template v-slot:item.planName="{ item }">
          <a
            href="javascript:void(0)"
            style="color: black"
            @click="
              selectedData = item;
              dialog1 = true;
            "
          >
            {{ item.planName }}</a
          >
        </template>

        <template v-slot:[`item.roleName`]="{ item }">
          <tr v-for="(role, index) in item.roleName" :key="index">
            <td>{{ role }}</td>
          </tr>
        </template>
      </v-data-table>
    </panel-body>
  </panel>
</template>

<script>
export default {};
</script>

<style></style>
