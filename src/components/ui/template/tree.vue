<template>
  <ol class="breadcrumb float-xl-end">
    <li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
  </ol>
  <!-- END breadcrumb -->

  <h1 class="page-header">{{ $route.name }} <small></small></h1>
  <!-- END page-header -->
  <small class="text-primary">檔案更新 > 需新增 class="treeComponent" </small>
  <!-- BEGIN panel -->
  <div class="row mb-3">
    <div class="col-xl-4">
      <!-- BEGIN panel -->
      <panel>
        <panel-header> <panel-title> 組織樹 </panel-title></panel-header>

        <panel-body>
          <VTree class="treeComponent" ref="basicTreeRef" :data="basicUsage" :loading="loading" emptyText="" titleField="title" keyField="uuid" :nodeClassName="(node) => `generated-class-${node.id}`" v-model="selectedData" selectable> </VTree>
        </panel-body>
      </panel>
    </div>
    <div class="col-xl-8" v-if="targetItem">
      <panel>
        <panel-header>
          <panel-title> <span v-if="edidFlag">修改單位</span><span v-else>新增單位</span> </panel-title>
          <div class="my-n1">
            <v-radio-group v-model="edidFlag" hide-details="auto" inline density="compact">
              <v-radio label="修改單位" :value="true"></v-radio>
              <v-radio label="新增單位" :value="false"></v-radio>
            </v-radio-group>
          </div>
        </panel-header>
        <panel-body>
          <v-container>
            <v-row>
              <v-col cols="3" class="text-right bg-thead"> <label class="form-label"> 上層單位 </label></v-col>
              <v-col cols="7">
                <label for="" class="ml-4">{{ targetItem.parentUuid }}</label>
              </v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>單位名稱 </label></v-col
              >
              <v-col cols="7"><v-text-field v-model="targetItem.name" variant="outlined" density="compact" hide-details="auto"></v-text-field></v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>單位代碼(二碼) </label></v-col
              >
              <v-col cols="7"><v-text-field v-model="targetItem.deptId" variant="outlined" density="compact" hide-details="auto"></v-text-field></v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>單位主管 </label></v-col
              >
              <v-col cols="7">
                <v-autocomplete v-model="targetItem.chief" variant="outlined" density="compact" hide-details="auto"></v-autocomplete>
              </v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>順序 </label></v-col
              >
              <v-col cols="7"><v-text-field v-model="targetItem.priority" variant="outlined" density="compact" hide-details="auto"></v-text-field></v-col>
              <v-col cols="3" class="text-right bg-thead"> <label class="form-label"> 描述 </label></v-col>
              <v-col cols="7"><v-text-field v-model="targetItem.description" variant="outlined" density="compact" hide-details="auto"></v-text-field></v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>送至上層單位簽核 </label></v-col
              >
              <v-col cols="7">
                <v-radio-group v-model="targetItem.upper_certify" hide-details="auto" inline density="compact"> <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('yesFlag')" :label="item.label" :value="item.value"></v-radio> </v-radio-group
              ></v-col>
              <v-col cols="3" class="text-right bg-thead">
                <label class="form-label"> <abbr class="necessary" title="為必填(選)欄位,不能為空白。">* </abbr>狀態 </label></v-col
              >
              <v-col cols="7">
                <v-radio-group v-model="targetItem.status" hide-details="auto" inline density="compact">
                  <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('activeFlag')" :label="item.label" :value="item.value"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col class="justify-center d-flex">
                <v-btn class="mx-1" color="primary" variant="elevated" @click="handleAdd"> addTest </v-btn>
                <v-btn class="mx-1" color="secondary" variant="elevated" @click="handleAddChild"> addChildTest </v-btn>
                <v-btn class="mx-1" color="danger" variant="elevated" @click="handleRemove"> removeTest </v-btn>
                <v-btn class="mx-1" color="submit" variant="elevated"> 儲存 </v-btn>
                <v-btn class="mx-1" color="cancel" variant="elevated"> 重置 </v-btn>
                <v-btn class="mx-1" color="cancel" variant="text"> 重置 </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </panel-body>
      </panel>
    </div>
  </div>
  <!-- END panel -->
</template>
<script>
import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree';
import '@wsfe/vue-tree/style.css';

import { mapState, mapActions } from 'pinia';
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
import { useAppApiDataStore } from '@/pinia/app-api-data';
const appSidebarMenu = useAppSidebarMenuStore();

export default {
  components: {
    VTree,
  },
  computed: {
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
      headers: [
        { title: '帳號', key: 'userId', width: 30, sortable: true, removable: true },
        { title: '姓名', key: 'userName', width: 40, sortable: true, removable: true },
        { title: '單位', key: 'deptName', width: 100, sortable: false, removable: true },
        { title: '職稱', key: 'jobTitle', width: 50, sortable: false, removable: true },
        { title: '角色', key: 'roleName', width: 80, sortable: false, removable: true },
        { title: '狀態', key: 'active', width: 20, sortable: false, removable: true },
        { title: '編輯', key: 'action', width: 80, sortable: false, removable: true },
      ],
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
    };
  },
  methods: {
    parentDialog() {
      this.dialog1 = false;
      this.dialog2 = false;
      this.dialog3 = false;
    },
    handleSelectNode(id) {
      let vm = this;
      console.log('!!!!!!!!!!!!!!!!', id);
      var obj = vm.treeData.find((item) => item.uuid == id);
      console.log('!!!!!!!!!!!!!!!!', obj);
      // vm.targetItem = obj.depth != "0" ? obj : null
      if (obj.depth != '0') {
        vm.targetItem = obj;
        vm.edidFlag = obj.depth != '1' ? true : false;
      } else vm.targetItem = null;
      console.log(vm.targetItem);
    },
    organizeArray(inputArray) {
      const result = [];
      const uuidMap = {};
      inputArray = inputArray.filter(function (item) {
        return item.uuid !== 'external_committee';
      });
      inputArray.forEach((obj) => {
        obj.parentUuid = obj.parentDept ? obj.parentDept.uuid : null;
        obj.title = obj.depth != 0 ? obj.deptId + obj.name : obj.name;
        obj.children = [];
        uuidMap[obj.uuid] = obj;
      });
      inputArray.sort(function (a, b) {
        if (a.depth !== b.depth) {
          return a.depth - b.depth;
        } else {
          return a.priority - b.priority;
        }
      });
      inputArray.forEach((obj) => {
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
      console.log('result ', result);
      return result;
    },
    convertToHierarchy(input) {
      // 建立一個遞迴函數，將每個節點轉換為所需格式
      function convertNode(node) {
        return {
          title: node.name,
          id: node.uuid,
          children: node.children ? node.children.map(convertNode) : [],
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
      this.$refs.basicTreeRef.insertAfter({}, this.targetItem.uuid);
      // console.log(this.$refs.basicTreeRef);
    },
    handleAddChild() {
      this.$refs.basicTreeRef.append({}, this.targetItem.uuid);
    },
    handleRemove() {
      this.$refs.basicTreeRef.remove(this.targetItem.uuid);
      this.targetItem = null;
    },
    getChild() {
      let vm = this;
      vm.loading = true;
      console.log('apiToken ', this.apiToken);
      vm.axios
        .get(this.apiServerUrl + 'nhri/getAllDepts', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.apiToken,
          },
        })
        .then(function (response) {
          vm.treeData = response.data;
          vm.basicUsage = vm.organizeArray(response.data);
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
        });
    },
  },
  mounted() {
    console.log('mounted dept ', this.apiToken);
    this.getChild();
  },
  created() {},
  watch: {
    selectedData(val) {
      this.handleSelectNode(val);
    },
  },
};
</script>
<style></style>
