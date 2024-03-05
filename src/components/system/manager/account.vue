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
            <!-- <v-btn color="primary mr-1" variant="outlined" size="small">匯入帳號</v-btn>
            <v-btn color="primary mr-1" variant="outlined" size="small">新增帳號</v-btn>

            <div class="row mt-3">
                <label class="col-md-2 form-label text-center">帳號</label>
                <v-text-field class="col-md-4" density></v-text-field>
                <label class="col-md-2 form-label text-center">姓名</label>
                <v-text-field class="col-md-4" density></v-text-field>
                <label class="col-md-2 form-label text-center">單位</label>

                <v-autocomplete class="col-md-4" :items="$globalModels.getModel('fakeUnitArray')" density></v-autocomplete>
            </div>
            <v-col class="text-center" cols="12">
                <v-btn color="primary mr-1" variant="outlined" size="small">查詢</v-btn>
            </v-col> -->
            <v-row align="center" dense>
                <v-col md="12">
                    <v-btn color="primary mr-1" variant="elevated" size="small">匯入帳號</v-btn>
                    <v-btn color="primary mr-1" variant="elevated" size="small" @click="dialog3 = true">新增帳號</v-btn>
                </v-col>

                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">帳號</label>
                <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">姓名</label>

                <v-col md="4"><v-text-field density="compact"></v-text-field></v-col>
                <label class="col-md-2 form-label text-center mb-5" style="font-size: 16px;">單位</label>
                <v-col md="4">
                    <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-autocomplete>
                </v-col>
                <v-col class="text-center" cols="6">
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
                <template v-slot:[`item.roleName`]="{ item }">
                    <tr v-for="(role, index) in item.roleName" :key="index">
                        <td>{{ role }}</td>
                    </tr>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-tooltip text="設定角色">
                        <template v-slot:activator="{ props }">
                            <span class=" mr-3" v-bind="props" @click="dialog1 = true">
                                <Icon icon="mdi:account-tie-hat" style="font-size: 24px;" />
                            </span></template></v-tooltip>
                    <v-tooltip text="設定重屬人員">
                        <template v-slot:activator="{ props }">
                            <span class=" mr-3" v-bind="props" @click="dialog2 = true">
                                <!-- <Icon icon="mdi:account-supervisor" style="font-size: 24px;" /> -->
                                <Icon icon="ic:round-account-tree" style="font-size: 24px;" />
                            </span></template></v-tooltip>
                    <v-tooltip text="編輯資料">
                        <template v-slot:activator="{ props }">
                            <span class="mr-3" v-bind="props" @click="selectedData = item; dialog3 = true">

                                <Icon icon="ic:baseline-edit" style="font-size: 24px;" />
                                <!-- <Icon icon="mdi:account-edit" style="font-size: 24px;" /> -->
                            </span>
                        </template>
                    </v-tooltip>

                </template>
            </v-data-table>

        </panel-body>
    </panel>
    <div v-if="dialog1"> <v-dialog width="80%" v-model="dialog1" persistent>
            <accountEditComp1 @childDialog="parentDialog"></accountEditComp1>
        </v-dialog></div>
    <div v-if="dialog2"> <v-dialog width="80%" v-model="dialog2" persistent>
            <accountEditComp2 @childDialog="parentDialog"></accountEditComp2>
        </v-dialog></div>
    <div v-if="dialog3"> <v-dialog width="80%" v-model="dialog3">
            <accountEditComp3 :selectItem="selectedData" @childDialog="parentDialog"></accountEditComp3>
        </v-dialog></div>

    <!-- END panel -->
    <!-- <v-dialog width="80%" v-model="dialog3">
        <v-card>
            11234
        </v-card>
    </v-dialog> -->
</template>
<script >

import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree'
import '@wsfe/vue-tree/style.css'

import accountEditComp1 from './accountEditComp1.vue';
import accountEditComp2 from './accountEditComp2.vue';
import accountEditComp3 from './accountEditComp3.vue';
// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
const vm = this;
export default {
    components: {
        VTree,
        accountEditComp1,
        accountEditComp2,
        accountEditComp3
        // tree: treeview,
    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: true,
            // selectValue: null,
            selectedData: { uuid: '1', userId: '000101', userName: '范文珠', deptName: 'CS細胞及系統醫學研究所', jobTitle: '計畫助理', roleName: ['參與計畫人員', '單位彙整人(院內研究)'], active: 'Active' },
            headers: [
                { title: "No", key: "index", width: "1%", sortable: true, removable: true },
                { title: "帳號", key: "userId", width: 30, sortable: true, removable: true },
                { title: "姓名", key: "userName", width: 40, sortable: true, removable: true },
                { title: "單位", key: "deptName", width: 100, sortable: false, removable: true },
                { title: "職稱", key: "jobTitle", width: 50, sortable: false, removable: true },


                { title: "角色", key: "roleName", width: 80, sortable: false, removable: true },
                { title: "狀態", key: "active", width: 20, sortable: false, removable: true },
                // { title: "設定角色", key: "g", width: 20, sortable: false },
                // { title: "設定從屬人員", key: "h", width: 20, sortable: false },

                { title: "編輯", key: "action", width: 80, sortable: false, removable: true }],
            tableData: [{ uuid: '1', userId: '000101', userName: '范文珠', deptName: 'CS細胞及系統醫學研究所', jobTitle: '計畫助理', roleName: ['參與計畫人員', '單位彙整人(院內研究)'], active: 'Active' }, { uuid: '1', userId: '000101', userName: '范文珠', deptName: 'CS細胞及系統醫學研究所', jobTitle: '計畫助理', roleName: ['參與計畫人員', '單位彙整人(院內研究)'], active: 'Active' }],
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
    },
    created() {

    }
}
</script>
<style>
.box1 {
    position: relative;
}

.box1:hover::before {
    position: absolute;
    top: 20px;
    left: 0;
    color: #fff;
    width: 60px;
    height: 30px;
    font-size: .8em;
    background: #346e7a;
    padding: 5px;
    border-radius: 5px;
    content: '設定角色';
}

.box2 {
    position: relative;
}

.box2:hover::before {
    position: absolute;
    top: 20px;
    left: 0;
    color: #fff;
    width: 80px;
    height: 30px;
    font-size: .8em;
    background: #346e7a;
    padding: 5px;
    border-radius: 5px;
    content: '設定重屬人員';
}

.box3 {
    position: relative;
}

.box3:hover::before {
    position: absolute;
    top: 20px;
    left: 0;
    color: #fff;
    width: 60px;
    height: 30px;
    font-size: .8em;
    background: #346e7a;
    padding: 5px;
    border-radius: 5px;
    content: '編輯資料';
}
</style>
