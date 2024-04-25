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
      <panel-title>查詢欄位</panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="2">
                  <label class="" for="">計畫 <br />年度 </label>
                </v-col>
                <v-col cols="">
                  <v-text-field variant="outlined" hide-details="auto" density="compact"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="2">
                  <label class="" for="">計畫類別</label>
                </v-col>
                <v-col cols="">
                  <v-text-field variant="outlined" hide-details="auto" density="compact"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="2">
                  <label class="" for="">計畫 編號</label>
                </v-col>
                <v-col cols="">
                  <v-autocomplete hide-details="auto" variant="outlined" :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row class="formGrp">
                <v-col class="label" cols="12" lg="2">
                  <label class="" for="">計畫名稱</label>
                </v-col>
                <v-col cols="">
                  <v-autocomplete hide-details="auto" variant="outlined" :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <div class="d-flex justify-center my-3">
          <v-btn class="bg-primary px-5 mx-2">搜尋</v-btn>
          <v-btn class="bg-gray px-4 mx-2">新增項目</v-btn>
        </div>
      </v-form>
    </panel-body>
  </panel>
  <panel>
    <panel-header>
      <panel-title>查詢結果 </panel-title>
      <panel-toolbar />
    </panel-header>
    <panel-body>
      <!-- data-table start -->
      <v-data-table
        class="dataTable"
        v-model="selected"
        :headers="headers"
        :items="tableData"
        item-key="name"
        item-value="uuid"
        :loading="loading"
        :footer-props="{ itemsPerPageText: '每頁筆數' }"
        no-data-text="無資料"
        loading-text="資料傳輸中"
        :items-length="totalItems"
        items-per-page-text="每頁筆數"
        :items-per-page-options="itemsPerPageArray"
        v-model:items-per-page="itemsPerPage"
        multi-sort
        @update:options="getTableDataFormServer"
        show-select
      >
        <template v-slot:item.data-table-select="{ item, isSelected, select }">
          <v-checkbox class="checkbox" v-model="selected" :value="item.uuid" density="compact" hide-details="auto" v-if="item.uuid"> </v-checkbox>
          <Icon class="ml-2" icon="ant-design:lock-outlined" style="font-size: 24px" v-else />
        </template>
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
        <template v-slot:[`item.processStatus`]="{ item }">
          <a
            href="javascript:void(0)"
            style="color: black"
            @click="
              selectedData = item;
              dialog3 = true;
            "
          >
            {{ item.processStatus }}</a
          >
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <div class="btnGrp">
            <v-tooltip text="編輯">
              <template v-slot:activator="{ props }">
                <span class="mr-3">
                  <v-icon
                    v-bind="props"
                    @click="
                      selectedData = item;
                      dialog2 = true;
                    "
                    icon="fa-solid fa-pen "
                  />
                </span> </template
            ></v-tooltip>
            <v-tooltip text="刪除">
              <template v-slot:activator="{ props }">
                <span v-bind="props"> <v-icon icon="fa-solid fa-trash-can" /> </span></template
            ></v-tooltip>
          </div>
        </template>
        <template v-slot:footer.prepend>
          <v-btn color="primary" dark class="mr-5" @click="buttonCallback"> 同意送出 </v-btn>
        </template>
        <!-- <template v-slot:bottom>
          <v-btn color="primary">同意送出</v-btn>
        </template> -->
        <!-- <template v-slot:bottom>
          <v-card class="mx-auto elevation-0">
            <v-btn color="primary" variant="elevated" size="small" style="display: inline-block" v-show="pageType == 'normal'">同意送出</v-btn>
            <label class="form-label col-form-label col-md-2 text-right" style="display: inline-block">每頁筆數</label>
            <div class="col-md-2 ml-2 mr-2" style="display: inline-block">
              <select class="form-select" v-model="itemsPerPage">
                <option v-for="(size, i) in itemsPerPageArray" :key="i">{{ size }}</option>
              </select>
            </div>
            <v-pagination color="primary" v-model="currentPage" :length="maxPage" :total-visible="5" @input="getTableDataFormServer()" class="ml-5 col-md-5" style="display: inline-block"></v-pagination>
          </v-card>
        </template> -->
      </v-data-table>
      <!-- data-table end -->
      <small class="my-6 justify-center d-flex">中場隔間</small>
      <!-- v-table start -->
      <v-table class="cellTable">
        <thead class="bg-thead">
          <tr>
            <th class="text-center">選擇</th>
            <th class="text-center">管制代號</th>
            <th class="text-center">案件名稱</th>
            <th class="text-center">填報期限</th>
            <th class="text-center">交辦事項</th>
            <th class="text-center">主辦單位</th>
            <th class="text-center">預定完成日期</th>
            <th class="text-center">辦理情形</th>
            <th class="text-center">案件狀態</th>
            <th class="text-center">審核狀態</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="i in 2" :key="i">
            <tr class="text-center">
              <td rowspan="2">
                <v-checkbox></v-checkbox>
              </td>
              <td rowspan="2">666-01<br />(2023/08/14)</td>
              <td rowspan="2">專案名稱專案名稱</td>
              <td rowspan="2">2023/08/14 <br />14:00</td>
              <td rowspan="2">
                <p class="mt-1">請回報</p>
                <div class="btnGroup">
                  <v-btn class="my-1" color="submit" elevation="0" size="small">批次下載填報附件</v-btn>
                </div>
              </td>
              <td>
                <p class="mt-1">教育文化處</p>
                <div class="btnGroup ma-1">
                  <v-btn color="submit" elevation="0" size="small">批次下載填報附件</v-btn>
                </div>
              </td>
              <td>2023/08/14</td>
              <td>
                <ul>
                  <li>填報期限:2023/08/14</li>
                  <li>填報人:XXX</li>
                  <li>本專案依XXX 辦理修正，並依規定送辦行政院公報，同時於本會網站更新資訊</li>
                </ul>
              </td>
              <td>
                <p class="mt-1">持續追蹤</p>
                <div class="btnGroup ma-1">
                  <v-btn color="submit" elevation="0" size="small">批次下載填報附件</v-btn>
                </div>
              </td>
              <td>
                <p class="mt-1">持續追蹤</p>
                <div class="btnGroup ma-1">
                  <v-btn color="submit" elevation="0" size="small">審核歷程</v-btn>
                  <v-btn color="cancel" elevation="0" size="small">管理者退回</v-btn>
                </div>
              </td>
            </tr>
            <tr class="text-center">
              <td>
                <p class="mt-1">教育文化處</p>
                <div class="btnGroup">
                  <v-btn class="ma-1" color="submit" elevation="0" size="small">批次下載填報附件</v-btn>
                </div>
              </td>
              <td>2023/08/14</td>
              <td>填報期限：2023/08/14</td>
              <td>
                <p class="mt-1">持續追蹤</p>
                <div class="btnGroup">
                  <v-btn color="submit" class="ma-1" elevation="0" size="small">批次下載填報附件</v-btn>
                </div>
              </td>
              <td><p class="mt-1">持續追蹤</p></td>
            </tr>
          </template>
        </tbody>
      </v-table>
      <!-- v-table end -->
      <br />
      <!-- v-table start -->

      <v-table class="cellTable overflowVisible">
        <thead class="bg-thead">
          <tr>
            <th class="text-center">程序名稱</th>
            <th class="text-center">開放時間</th>
            <th class="text-center">填報提醒時間</th>
            <th class="text-center">填報提醒時間</th>
            <th class="text-center" width="350">例外人員</th>
            <th class="text-center">備註</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="i in 3" :key="i">
            <tr class="text-center">
              <td>計畫研提</td>
              <td width="160">
                <v-text-field class="d-block d-lg-flex" variant="outlined" density="compact" hide-details="auto">
                  <template v-slot:prepend>
                    <p class="text-no-wrap">每月</p>
                  </template>
                  <template v-slot:append>
                    <p>日</p>
                  </template>
                </v-text-field>
              </td>
              <td width="380">
                <div class="d-xl-flex d-block">
                  <v-text-field class="my-1 d-block d-lg-flex" variant="outlined" density="compact" hide-details="auto">
                    <template v-slot:prepend>
                      <p class="text-no-wrap">每季季末</p>
                    </template>
                    <template v-slot:append>
                      <p>日</p>
                    </template>
                  </v-text-field>
                  <v-text-field class="my-1 d-block d-lg-flex" variant="outlined" density="compact" hide-details="auto">
                    <template v-slot:prepend>
                      <p class="text-no-wrap">~ 每季季末</p>
                    </template>
                    <template v-slot:append>
                      <p>日</p>
                    </template>
                  </v-text-field>
                </div>
              </td>
              <td width="185">
                <!-- 日期填選 -->
                <VueDatePicker class="datePicker" :enable-time-picker="false" select-text="確定" cancel-text="取消" v-model="date"></VueDatePicker>
              </td>
              <td>
                <div class="flex-wrap d-flex align-center flex-xl-nowrap">
                  <v-autocomplete hide-details="auto" variant="outlined" class="mr-0 mr-sm-1 my-1 my-xl-0" :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                  <v-autocomplete hide-details="auto" variant="outlined" class="mr-0 mr-sm-1 my-1 my-xl-0" :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                  <v-btn class="my-1 ml-auto" color="primary">新增</v-btn>
                </div>
              </td>
              <td>
                <v-text-field variant="outlined" hide-details="auto" density="compact"></v-text-field>
              </td>
              <!-- 日期範圍區域填選 -->
              <!-- <td width="285">
                <VueDatePicker class="dateRangerPicker" range :enable-time-picker="false" v-model="rangeDate" select-text="確定" cancel-text="取消"></VueDatePicker>
              </td> -->
            </tr>
          </template>
        </tbody>
      </v-table>
      <!-- v-table end -->

      <!-- Pagination start -->
      <div class="text-center mt-6">
        <v-pagination v-model="page" :length="5"></v-pagination>
      </div>
      <!-- Pagination end -->
    </panel-body>
  </panel>
  <div v-if="dialog1">
    <v-dialog width="80%" height="95%" v-model="dialog1" scrollable>
      <internalAdminPlanViewComp :selectItem="selectedData" @childDialog="parentDialog"> </internalAdminPlanViewComp>
    </v-dialog>
  </div>
  <div v-if="dialog2">
    <v-dialog width="80%" height="95%" v-model="dialog2" scrollable>
      <internalAdminPlanEditComp :selectItem="selectedData" @childDialog="parentDialog"> </internalAdminPlanEditComp>
    </v-dialog>
  </div>
  <div v-if="dialog3">
    <v-dialog width="80%" height="95%" v-model="dialog3" scrollable>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="4">
              <h4 class="mt-3 mb-3">簽核歷程檢視</h4>
            </v-col>
            <v-col cols="8" class="text-right"
              ><v-btn color="blue-grey-lighten-4" @click="parentDialog"> <Icon icon="mingcute:close-fill" style="font-size: 16px" /> </v-btn
            ></v-col>
          </v-row>
          <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text> <planCertifyHistoryTableComp :selectItem="tableData" @childDialog="parentDialog"> </planCertifyHistoryTableComp> </v-card-text
      ></v-card>
    </v-dialog>
  </div>
  <!-- END panel -->
</template>
<script>
import internalAdminPlanViewComp from '@/components/system/internalAdminPlan/internalAdminPlanViewComp.vue';
import internalAdminPlanEditComp from '@/components/system/internalAdminPlan/internalAdminPlanEditComp.vue';
import planCertifyHistoryTableComp from '@/components/system/internalAdminPlan/planView/planCertifyHistoryTableComp.vue';

import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
const vm = this;
export default {
  components: {
    internalAdminPlanViewComp,
    internalAdminPlanEditComp,
    planCertifyHistoryTableComp,
  },
  data() {
    return {
      date: null,
      rangeDate: null,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      pageType: 'normal',
      selectedData: this.$globalModels.getModel('fakeBasicPlan')[0],
      headers: [
        { title: '計畫年度', key: 'planYear', width: '10%', sortable: true, removable: true },
        { title: '計畫類別', key: 'planType', width: '10%', sortable: true, removable: true },
        { title: '計畫編號', key: 'serialNo', width: '15%', sortable: false, removable: true },
        { title: '計畫名稱', key: 'planName', width: '30%', sortable: false, removable: true },
        { title: '計畫主持人', key: 'chairman', width: '15%', sortable: false, removable: true },
        { title: '登錄人', key: 'registerBy', width: '8%', sortable: false, removable: true },
        { title: '計畫期程', key: 'dateStartEnd', width: '15%', sortable: false, removable: true },
        { title: '簽辦狀態', key: 'processStatus', width: '8%', sortable: false, removable: true },
        { title: '編輯', key: 'action', sortable: false, removable: true },
      ],
      tableData: this.$globalModels.getModel('fakeBasicPlan'),
      options: {},
      loading: false,
      itemsPerPageArray: [5, 10, 30, 50],
      currentPage: 1,
      itemsPerPage: 5,
      maxPage: 3,
      totalItems: 2,

      //test
      selected: [],
      headers2: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
      ],
      selectAllToggle(props) {
        if (this.selected.length != this.desserts.length - this.disabledCount) {
          this.selected = [];
          const self = this;
          props.items.forEach((item) => {
            if (!item.disabled) {
              self.selected.push(item);
            }
          });
        } else this.selected = [];
      },
    };
  },
  methods: {
    parentDialog() {
      this.dialog1 = false;
      this.dialog2 = false;
      this.dialog3 = false;
    },
    getTableDataFormServer({ page, itemsPerPage, sortBy }) {
      console.log(page, itemsPerPage, JSON.stringify(sortBy));
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    remove(key) {
      this.headers = this.headers.filter((header) => header.key !== key);
    },
    isItemDisabled(item) {
      // 在这里编写逻辑来判断是否禁用特定项的选择框
      return item.name === 'Eclair'; // 例如，如果项的名称为 'Eclair'，则禁用它
    },
    editItem(item) {
      // 编辑项目的逻辑
    },
    deleteItem(item) {
      // 删除项目的逻辑
    },
    isSelected(item) {
      return this.selected.includes(item);
    },
    toggleSelection(item) {
      const index = this.selected.indexOf(item);
      if (index !== -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(item);
      }
    },
  },
  mounted() {
    console.log('mounted');
  },
  created() {},
};
</script>
<style scoped></style>
