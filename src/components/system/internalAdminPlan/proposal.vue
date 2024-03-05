<template>
    <!-- BEGIN breadcrumb -->
    <!-- <ol class="breadcrumb">

        <li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li>

    </ol> -->
    <ol class="breadcrumb float-xl-end">
        <li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
    </ol>
    <!-- END breadcrumb -->
    <!-- BEGIN page-header -->
    <!-- <li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li> -->

    <h1 class="page-header">{{ $route.name }} <small></small></h1>
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <panel>
        <panel-header>
            <panel-title>查詢欄位</panel-title>
            <panel-toolbar />
        </panel-header>
        <panel-body>

            <v-row align="center" dense>

                <v-col md="12">
                    <!-- <v-btn color="primary mr-1" variant="elevated" size="small">複製帳號</v-btn>
                    <v-btn color="primary mr-1" variant="elevated" size="small">延續帳號</v-btn> -->
                    <v-radio-group v-model="pageType" inline>
                        <!-- <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('yesFlag')" :label="item.label"
                                :value="item.value"></v-radio> -->

                        <v-radio label="計劃管理" value="normal" color="primary"></v-radio>
                        <v-radio label="複製帳號" value="copy" color="primary"></v-radio>
                        <v-radio label="延續帳號" value="extend" color="primary"></v-radio>
                    </v-radio-group>
                </v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">計畫年度</label>
                <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">計畫類別</label>

                <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">計畫編號</label>
                <v-col md="4">
                    <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                </v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">計畫名稱</label>
                <v-col md="4">
                    <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                </v-col>
                <v-col class="text-center" cols="6" offset-md="6">
                    <v-btn class="mb-5 mr-3" color="primary" variant="elevated" size="small">查詢</v-btn>
                    <v-btn class="mb-5" color="primary " variant="elevated" size="small"
                        @click="selectedData = $globalModels.getModel('fakeBasicPlan')[1]; dialog2 = true;"
                        v-show="pageType == 'normal'">新增計畫</v-btn>
                </v-col>
            </v-row>
        </panel-body>
    </panel>
    <panel>
        <panel-header>
            <panel-title>查詢結果

            </panel-title>
            <!-- <v-btn class="mr-3" color="primary" variant="elevated" size="small">查詢</v-btn> -->
            <panel-toolbar />
        </panel-header>
        <panel-body>
            <v-data-table v-model="selected" :headers="headers" :items="tableData" item-key="name" item-value="uuid"
                :loading="loading" :footer-props="{ itemsPerPageText: '每頁筆數' }" no-data-text="無資料" loading-text="資料傳輸中"
                :items-length="totalItems" items-per-page-text="每頁筆數" :items-per-page-options="itemsPerPageArray"
                v-model:items-per-page="itemsPerPage" multi-sort @update:options="getTableDataFormServer" show-select>
                <template v-slot:item.data-table-select="{ item, isSelected, select }">
                    <v-checkbox v-model="selected" :value="item.uuid" density="compact" hide-details="auto"
                        v-if="item.uuid"> </v-checkbox>
                    <Icon icon="ant-design:lock-outlined" style="font-size: 24px;" v-else />
                </template>
                <template v-slot:item.index="{ item, index }">
                    {{ index + 1 }}
                </template>
                <template v-slot:item.planName="{ item }">
                    <a href="javascript:void(0)" style="color: black;" @click="selectedData = item; dialog1 = true;"> {{
                        item.planName }}</a>
                </template>
                <template v-slot:[`item.processStatus`]="{ item }">
                    <a href="javascript:void(0)" style="color: black;" @click="selectedData = item; dialog3 = true;"> {{
                        item.processStatus }}</a>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-tooltip text="編輯">
                        <template v-slot:activator="{ props }">
                            <span class=" mr-3" v-bind="props" @click="selectedData = item; dialog2 = true;">
                                <Icon icon="pajamas:pencil" style="font-size: 24px;" />
                            </span></template></v-tooltip>
                    <v-tooltip text="刪除">
                        <template v-slot:activator="{ props }">
                            <span class=" mr-3" v-bind="props">
                                <!-- <Icon icon="mdi:account-supervisor" style="font-size: 24px;" /> -->
                                <Icon icon="pajamas:remove" style="font-size: 24px;" />
                            </span></template></v-tooltip>


                </template>

                <template v-slot:bottom>

                    <!-- <v-row density="compact">
                        <v-col cols="2"><v-btn color="success" class="mt-1" variant="elevated">text</v-btn></v-col>

                        <v-col cols="5">
                            <v-select width="3%" :items="itemsPerPageArray" v-model="itemsPerPage" density="compact"
                                hide-details="auto" class="" style="display:  inline-block;"></v-select>
                            <v-pagination v-model="currentPage" :length="maxPage" :total-visible="7" class="text-center"
                                style="display:  inline-block; " ide-details="auto" density="compact"></v-pagination>
                        </v-col>
                    </v-row> -->
                    <!-- <v-card class="mt-3  mb-n7 ml-2 position-sticky rounded-lg bg-blur-a elevation-0 px-2 py-1"
                        style="bottom: 3em; width:fit-content;">
                        <v-btn color="success" class="mt-1" variant="elevated">text</v-btn>

                    </v-card> -->
                    <v-card class="mx-auto elevation-0">
                        <v-btn color="primary" variant="elevated" size="small" style="display: inline-block;"
                            v-show="pageType == 'normal'">同意送出</v-btn>
                        <label class="form-label col-form-label col-md-2 text-right"
                            style="display: inline-block;">每頁筆數</label>
                        <div class="col-md-2 ml-2 mr-2 " style="display: inline-block;">
                            <select class="form-select" v-model="itemsPerPage">
                                <option v-for="(size, i) in itemsPerPageArray" :key="i">{{ size }}</option>
                            </select>
                        </div>
                        <v-pagination color="primary" v-model="currentPage" :length="maxPage" :total-visible="5"
                            @input="getTableDataFormServer()" class="ml-5 col-md-5"
                            style="display: inline-block;"></v-pagination>
                    </v-card>

                </template>
            </v-data-table>

        </panel-body>
    </panel>
    <div v-if="dialog1">
        <v-dialog width="80%" height="95%" v-model="dialog1" scrollable>
            <internalAdminPlanViewComp :selectItem="selectedData" @childDialog="parentDialog">
            </internalAdminPlanViewComp>
        </v-dialog>
    </div>
    <div v-if="dialog2">
        <v-dialog width="80%" height="95%" v-model="dialog2" scrollable>
            <internalAdminPlanEditComp :selectItem="selectedData" @childDialog="parentDialog">
            </internalAdminPlanEditComp>
        </v-dialog>
    </div>
    <div v-if="dialog3">
        <v-dialog width="80%" height="95%" v-model="dialog3" scrollable>
            <v-card>
                <v-card-title>
                    <v-row>
                        <v-col cols="4">

                            <h4 class="mt-3 mb-3"> 簽核歷程檢視</h4>
                        </v-col>
                        <v-col cols="8" class="text-right"><v-btn color="blue-grey-lighten-4" @click="parentDialog">
                                <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                            </v-btn></v-col>
                    </v-row>
                    <v-divider class="border-opacity-25"></v-divider>
                </v-card-title>
                <v-card-text>
                    <planCertifyHistoryTableComp :selectItem="tableData" @childDialog="parentDialog">
                    </planCertifyHistoryTableComp>
                </v-card-text></v-card>
        </v-dialog>
    </div>
    <!-- END panel -->
</template>
<script >

import internalAdminPlanViewComp from './internalAdminPlanViewComp.vue';
import internalAdminPlanEditComp from './internalAdminPlanEditComp.vue';
import planCertifyHistoryTableComp from '@/components/system/internalAdminPlan/planView/planCertifyHistoryTableComp.vue';

// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
const vm = this;
export default {
    components: {
        internalAdminPlanViewComp,
        internalAdminPlanEditComp,
        planCertifyHistoryTableComp
    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            // selectValue: null,
            pageType: 'normal',
            selectedData: this.$globalModels.getModel('fakeBasicPlan')[0],
            headers: [
                // { title: "No", key: "index", width: 10, sortable: true, removable: true },
                { title: "計畫年度", key: "planYear", width: '10%', sortable: true, removable: true },
                { title: "計畫類別", key: "planType", width: '10%', sortable: true, removable: true },
                { title: "計畫編號", key: "serialNo", width: '15%', sortable: false, removable: true },
                { title: "計畫名稱", key: "planName", width: '30%', sortable: false, removable: true },
                { title: "計畫主持人", key: "chairman", width: '15%', sortable: false, removable: true },
                { title: "登錄人", key: "registerBy", width: '8%', sortable: false, removable: true },


                { title: "計畫期程", key: "dateStartEnd", width: '15%', sortable: false, removable: true },
                { title: "簽辦狀態", key: "processStatus", width: '8%', sortable: false, removable: true },
                // { title: "設定角色", key: "g", width: 20, sortable: false },
                // { title: "設定從屬人員", key: "h", width: 20, sortable: false },

                { title: "編輯", key: "action", width: '8%', sortable: false, removable: true }
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
                    props.items.forEach(item => {
                        if (!item.disabled) {
                            self.selected.push(item);
                        }
                    });
                } else this.selected = [];
            }
        }
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
            this.headers = this.headers.filter(header => header.key !== key)
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
        }

    },
    mounted() {
        console.log("mounted")
        // this.$globalFunctions.function1();
        // this.$globalFunctions.function2();
        // var vm = this;

        // console.log(object);
        // this.selectedData = this.tableData[0]
        // this.dialog1 = true
    },
    created() {

    }
}
</script>
<style scoped>
.v-data-table-disabled {
    opacity: 0.5;
}

.inlineInput {
    display: inline-block;
    margin-right: 1rem !important;



}
</style>
