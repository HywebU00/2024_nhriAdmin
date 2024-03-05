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

            <v-row dense>


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
                    <v-btn class="mb-5" color="primary" variant="elevated" size="small">查詢</v-btn>
                </v-col>
            </v-row>
        </panel-body>
    </panel>
    <panel>
        <panel-header>
            <panel-title>查詢結果

            </panel-title>
            <panel-toolbar />
        </panel-header>
        <panel-body>
            <v-data-table :headers="headers" :items="tableData" :loading="loading"
                :footer-props="{ itemsPerPageText: '每頁筆數' }" no-data-text="無資料" loading-text="資料傳輸中"
                :items-length="totalItems" items-per-page-text="每頁筆數" :items-per-page-options="itemsPerPageArray"
                item-value="uuid" v-model:items-per-page="itemsPerPage" multi-sort @update:options="getTableDataFormServer">
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
                    <a href="javascript:void(0)" style="color: black;" @click="selectedData = item; dialog1 = true;"> {{
                        item.planName }}</a>
                </template>

                <template v-slot:[`item.roleName`]="{ item }">
                    <tr v-for="(role, index) in item.roleName" :key="index">
                        <td>{{ role }}</td>
                    </tr>
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
    <!-- END panel -->
</template>
<script >

import internalAdminPlanViewComp from './internalAdminPlanViewComp.vue';

// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
const vm = this;
export default {
    components: {
        internalAdminPlanViewComp
    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            // selectValue: null,
            selectedData: this.$globalModels.getModel('fakeBasicPlan')[0],
            headers: [
                { title: "No", key: "index", width: 10, sortable: true, removable: true },
                { title: "計畫年度", key: "planYear", width: 30, sortable: true, removable: true },
                { title: "計畫類別", key: "planType", width: 10, sortable: true, removable: true },
                { title: "計畫編號", key: "serialNo", width: 100, sortable: false, removable: true },
                { title: "計畫名稱", key: "planName", width: 100, sortable: false, removable: true },
                { title: "計畫主持人", key: "chairman", width: 50, sortable: false, removable: true },


                { title: "計畫期程", key: "dateStartEnd", width: 80, sortable: false, removable: true },
                { title: "計畫狀態", key: "processStatus", width: 20, sortable: false, removable: true },
                // { title: "設定角色", key: "g", width: 20, sortable: false },
                // { title: "設定從屬人員", key: "h", width: 20, sortable: false },

                // { title: "編輯", key: "action", width: 80, sortable: false, removable: true }
            ],
            tableData: this.$globalModels.getModel('fakeBasicPlan'),
            options: {},
            loading: false,
            itemsPerPageArray: [5, 30, 50],
            currentPage: 1,
            itemsPerPage: 5,
            maxPage: 0,


            totalItems: 2,
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

    },
    mounted() {
        console.log("mounted")
        // this.$globalFunctions.function1();
        // this.$globalFunctions.function2();
        // var vm = this;

        // console.log(object);
        this.selectedData = this.tableData[0]
        this.dialog1 = true
    },
    created() {

    }
}
</script>
<style></style>
