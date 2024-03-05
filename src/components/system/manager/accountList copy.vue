<template>
    <!-- BEGIN breadcrumb -->
    <ol class="breadcrumb">

        <li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li>

    </ol>
    <!-- END breadcrumb -->
    <!-- BEGIN page-header -->
    <!-- <li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li> -->

    <h1 class="page-header">{{ $route.name }} <small>header small text goes here...</small></h1>
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
            <v-row align="center" justify="center" class="me-1">
                <v-col cols="12">
                    <v-btn color="primary mr-1" variant="outlined" size="small">匯入帳號</v-btn>
                    <v-btn color="primary mr-1" variant="outlined" size="small">新增帳號</v-btn>
                </v-col>

                <label class="col-md-2 form-label text-center">帳號</label>
                <v-text-field class="col-md-4" density></v-text-field>
                <label class="col-md-2 form-label text-center">姓名</label>
                <v-text-field class="col-md-4" density></v-text-field>
                <label class="col-md-2 form-label text-center">單位</label>

                <v-autocomplete class="col-md-4" :items="$globalModels.getModel('fakeUnitArray')" density></v-autocomplete>

                <v-col class="text-center" cols="12">
                    <v-btn color="primary mr-1" variant="outlined" size="small">查詢</v-btn>
                </v-col>
            </v-row>
        </panel-body>
    </panel>
    <panel>
        <panel-header>
            <panel-title>查詢結果</panel-title>
            <panel-toolbar />
        </panel-header>
        <panel-body>

        </panel-body>
    </panel>
    <!-- END panel -->
</template>
<script >

import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree'
import '@wsfe/vue-tree/style.css'


// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
const appSidebarMenu = useAppSidebarMenuStore();
export default {
    components: {
        VTree,
        // tree: treeview,
    },
    data() {
        return {

            selectValue: null,
            selectedData: [],
            headers: [{ text: "立委姓名", value: "a", width: 100, sortable: false },
            { text: "時間", value: "b", width: 80, sortable: false },
            { text: "地點", value: "c", width: 100, sortable: false },
            // { text: "場合", value: "occasionStr", width: 100 },


            { text: "案由", value: "d", width: 200, sortable: false },


            { text: "狀態", value: "e", width: 30, sortable: false },
            // { text: "登入角色", value: "roleName", width: 100 },
            // { text: "許可使用細目設施面積", value: "usedArea", width: 60 },
            // { text: "衛生設施及管理室面積", value: "otherArea", width: 60 },
            { text: "編輯", value: "f", width: 30, sortable: false }],
            options: {},
            tableData: [],
            itemsPerPageArray: [5, 30, 50],
            currentPage: 1,
            itemsPerPage: 5,
            maxPage: 0,
            pageSize: 10,
            totalCount: 0,
        }
    },
    methods() {


    },
    mounted() {
        console.log("mounted")
        // this.$globalFunctions.function1();
        // this.$globalFunctions.function2();
        // var vm = this;

        console.log(object);
    },
    created() {

    }
}
</script>
