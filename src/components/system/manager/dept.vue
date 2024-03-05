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
    <div class="row mb-3">
        <div class="col-xl-4">
            <!-- BEGIN panel -->
            <panel>
                <panel-header>
                    <panel-title> 組織樹 </panel-title></panel-header>
                <panel-body>
                    <VTree ref="basicTreeRef" :data="basicUsage" :loading="loading" emptyText="" titleField="title"
                        keyField="uuid" style="font-size: 16px;" :nodeClassName="node => `generated-class-${node.id}`"
                        v-model="selectedData" selectable>

                    </VTree>
                </panel-body>

            </panel>
        </div>
        <div class="col-xl-8 " v-if="targetItem">
            <panel>
                <panel-header>
                    <panel-title> <span v-if="edidFlag">修改單位</span><span v-else>新增單位</span>
                    </panel-title>
                    <div class="my-n1">
                        <v-radio-group v-model="edidFlag" hide-details="auto" inline density="compact">
                            <v-radio label="修改單位" :value="true"></v-radio>
                            <v-radio label="新增單位" :value="false"></v-radio>


                        </v-radio-group>
                    </div>

                    <!-- <div class="btn-group btn-group-toggle my-n1" data-toggle="buttons">
                        <input type="radio" name="options" class="btn-check" id="option2" :checked="edidFlag"
                            @click="edidFlag = !edidFlag" />
                        <label class="btn btn-success btn-xs" for="option2" style="font-size: 16px;"
                            v-show="targetItem.depth != '1'"> 修改單位</label>
                        <input type="radio" name="options" class="btn-check" id="option1" :checked="!edidFlag"
                            @click="edidFlag = !edidFlag" />
                        <label class="btn btn-success btn-xs" for="option1" style="font-size: 16px;"> 新增單位</label>


                    </div> -->
                </panel-header>
                <panel-body>
                    <v-row>


                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                上層單位
                            </label></v-col>
                        <v-col cols="7">
                            <!-- {{ targetItem.parentUuid }} -->
                            <label for="" class="ml-4" style="font-size: 16px;">{{ targetItem.parentUuid }}</label>
                        </v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單位名稱
                            </label></v-col>
                        <v-col cols="7"><v-text-field v-model="targetItem.name" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field></v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單位代碼(二碼)
                            </label></v-col>
                        <v-col cols="7"><v-text-field v-model="targetItem.deptId" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field></v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單位主管
                            </label></v-col>
                        <v-col cols="7">

                            <v-autocomplete v-model="targetItem.chief" variant="outlined" density="compact"
                                hide-details="auto"></v-autocomplete>

                        </v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />順序
                            </label></v-col>
                        <v-col cols="7"><v-text-field v-model="targetItem.priority" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field></v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                描述
                            </label></v-col>
                        <v-col cols="7"><v-text-field v-model="targetItem.description" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field></v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />送至上層單位簽核
                            </label></v-col>
                        <v-col cols="7">
                            <v-radio-group v-model="targetItem.upper_certify" hide-details="auto" inline density="compact">
                                <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('yesFlag')"
                                    :label="item.label" :value="item.value"></v-radio>
                            </v-radio-group></v-col>
                        <v-col cols="3" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                                style="font-size: 16px;">
                                <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />狀態
                            </label></v-col>
                        <v-col cols="7">
                            <v-radio-group v-model="targetItem.status" hide-details="auto" inline density="compact">
                                <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('activeFlag')"
                                    :label="item.label" :value="item.value"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="10" class="text-right">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleAdd">
                                addTest
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleAddChild">
                                addChildTest
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleRemove">
                                removeTest
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="elevated">
                                儲存
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text">
                                重置
                            </v-btn>
                        </v-col>
                    </v-row>
                </panel-body>
            </panel>
        </div>
    </div>
    <!-- END panel -->
</template>
<script >

import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree'
import '@wsfe/vue-tree/style.css'


// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { mapState, mapActions } from 'pinia'
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
import { useAppApiDataStore } from '@/pinia/app-api-data';
const appSidebarMenu = useAppSidebarMenuStore();

export default {
    components: {
        VTree,

        // tree: treeview,
    },
    computed: {
        // ...mapState(useAppApiDataStore, {
        // 	testArray2: 'getTestArray2',
        // 	// 你也可以写一个函数来获得对 store 的访问权

        // }),
        ...mapState(useAppApiDataStore, ['apiServerUrl', 'apiToken']),

    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            edidFlag: true,
            selectedData: null,
            targetItem: null,
            treeData: null,
            // targetItem: {
            //     "uuid": "2c90829732fc6dd80132fc7a9c200001",
            //     "depth": "2",
            //     "parentUuid": "1",
            //     "name": "生技與藥物研究所",
            //     "deptId": "BP",
            //     "description": "",
            //     "chief": "880802",
            //     "priority": "1",
            //     "status": "1",
            //     "modify_date": "12-9月 -17 11.28.46.959000000 上午",
            //     "modify_by": "10504",
            //     "upper_certify": "0"
            // },
            headers: [{ title: "帳號", key: "userId", width: 30, sortable: true, removable: true },
            { title: "姓名", key: "userName", width: 40, sortable: true, removable: true },
            { title: "單位", key: "deptName", width: 100, sortable: false, removable: true },
            { title: "職稱", key: "jobTitle", width: 50, sortable: false, removable: true },


            { title: "角色", key: "roleName", width: 80, sortable: false, removable: true },
            { title: "狀態", key: "active", width: 20, sortable: false, removable: true },
            // { title: "設定角色", key: "g", width: 20, sortable: false },
            // { title: "設定從屬人員", key: "h", width: 20, sortable: false },

            { title: "編輯", key: "action", width: 80, sortable: false, removable: true }],
            tableData: [],
            options: {},
            loading: false,
            itemsPerPageArray: [5, 30, 50],
            currentPage: 1,
            itemsPerPage: 5,
            maxPage: 0,


            totalItems: 2,
            nodes: {},
            basicUsage: {},
        }
    },
    methods: {
        parentDialog() {
            this.dialog1 = false;
            this.dialog2 = false;
            this.dialog3 = false;

        },
        handleSelectNode(id) {
            let vm = this;
            console.log("!!!!!!!!!!!!!!!!", id);
            var obj = vm.treeData.find(item => (item.uuid == id));
            console.log("!!!!!!!!!!!!!!!!", obj);
            // vm.targetItem = obj.depth != "0" ? obj : null
            if (obj.depth != "0") {
                vm.targetItem = obj
                vm.edidFlag = obj.depth != "1" ? true : false
            } else vm.targetItem = null
            console.log(vm.targetItem);
        },
        organizeArray(inputArray) {
            const result = [];
            const uuidMap = {};
            inputArray = inputArray.filter(function (item) {
                return item.uuid !== 'external_committee';
            });
            inputArray.forEach(obj => {
                obj.parentUuid = obj.parentDept ? obj.parentDept.uuid : null;
                obj.title = obj.depth != 0 ? obj.deptId + obj.name : obj.name;
                obj.children = [];
                uuidMap[obj.uuid] = obj;
            });
            // inputArray.sort((a, b) => a.depth - b.depth);
            // inputArray.sort((a, b) => a.priority - b.priority); // 根據 priority 屬性升序排序
            inputArray.sort(function (a, b) {
                if (a.depth !== b.depth) {
                    return a.depth - b.depth;
                } else {
                    return a.priority - b.priority;
                }
            });
            // console.log("inputArray ", inputArray);
            inputArray.forEach(obj => {
                const parentUUID = obj.parentUuid;
                // console.log("parentUUID", obj.parentUuid);
                if (parentUUID) {
                    const parentObj = uuidMap[parentUUID];
                    // console.log("parentObj", parentObj);
                    if (parentObj) {
                        parentObj.children.push(obj);
                    }
                } else {
                    result.push(obj);
                }
            });
            console.log("result ", result);
            return result;
        },
        convertToHierarchy(input) {
            // 建立一個遞迴函數，將每個節點轉換為所需格式
            function convertNode(node) {
                return {
                    "title": node.name,
                    "id": node.uuid,
                    "children": node.children ? node.children.map(convertNode) : []
                };
            }

            // 確保輸入不為空
            if (!input || input.length === 0) {
                return null;
            }

            // 只處理第一個元素，因為這似乎是根節點
            return convertNode(input[0]);
        },
        handleAdd() {
            // console.log(this.basicTreeRef);
            this.$refs.basicTreeRef.insertAfter({}, this.targetItem.uuid)
            // console.log(this.$refs.basicTreeRef);
        },
        handleAddChild() {
            this.$refs.basicTreeRef.append({}, this.targetItem.uuid)
        },
        handleRemove() {
            this.$refs.basicTreeRef.remove(this.targetItem.uuid)
            this.targetItem = null
        },
        getChild() {
            let vm = this;
            vm.loading = true
            console.log("apiToken ", this.apiToken);
            vm.axios
                .get(
                    this.apiServerUrl + 'nhri/getAllDepts',
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: this.apiToken
                        }
                    })
                .then(function (response) {
                    // console.log("response.data ", response.data);
                    // let dbTree = vm.organizeArray(response.data)
                    vm.treeData = response.data
                    vm.basicUsage = vm.organizeArray(response.data)
                    // console.log("dbTree ", dbTree);
                    var dataResponse = JSON.stringify(response.data);
                    vm.loading = false;
                })
                .catch(function (error) {
                    // vm.handErrorUtil(error);
                    console.log(error);
                })
                .finally(() => {
                    // vm.loading = false
                    // vm.setFullLoading(false)
                    vm.loading = false;
                })
        }



    },
    mounted() {
        console.log("mounted dept ", this.apiToken)
        this.getChild();


        // this.$globalFunctions.function1();
        // this.$globalFunctions.function2();
        // var vm = this;

        // console.log(object);


        // console.log("!!!! " + this.basicTreeRef);
        // this.$refs.basicTreeRef.setExpandAll(true)

    },
    created() {
        // var dbTree = this.organizeArray(this.$globalModels.getModel('fakeDeptArray'));

        // console.log("dbTree " + JSON.stringify(dbTree));
        // console.log(JSON.stringify(this.convertToHierarchy(dbTree), null, 2))
        // this.basicUsage = dbTree


    },
    watch: {
        selectedData(val) {
            this.handleSelectNode(val);
        }
    }
}
</script>
<style></style>
