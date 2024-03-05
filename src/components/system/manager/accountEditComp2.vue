<template>
    <v-card density>
        <!-- <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
                <span class="text-h5">Sarah Mcbeal</span>
            </v-card-title></v-card-item> -->
        <v-card-title>
            <v-row>
                <v-col cols="4">設定從屬人員</v-col>
                <v-col cols="8" class="text-right"> <v-btn color="blue-grey-lighten-4" @click="handleClose">
                        <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                    </v-btn></v-col>
            </v-row>
        </v-card-title>
        <!-- <v-divider :thickness="3"></v-divider> -->
        <v-card-text>
            <v-row class="ml-2" dense>
                <v-col md="5">
                    <v-select :items="$globalModels.getModel('fakeUnitArray')" density="compact"></v-select>

                </v-col>
                <v-col md="5">
                    <v-select :items="tableData" item-title="userName" density="compact"></v-select>
                </v-col>
                <v-col md="1">
                    <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                        新增
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="mb-2" dense>
                <v-col>

                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left" width="25%">
                                    帳號
                                </th>
                                <th class="text-left" width="25%">
                                    姓名
                                </th>
                                <th class="text-left" width="40%">
                                    單位
                                </th>
                                <th class="text-left" width="10%">
                                    刪除
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tableData" :key="item.uuid">
                                <td>{{ item.userId }}</td>
                                <td>{{ item.userName }}</td>
                                <td>{{ item.deptName }}</td>
                                <td>{{ item.userName }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>


        </v-card-text>
        <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="handleClose">
                取消
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="handleClose">
                儲存
            </v-btn>
        </v-card-actions> -->
    </v-card>
    <!-- <panel>
        <panel-header color="primary">
            <panel-title>編輯帳號</panel-title>

        </panel-header>
        <panel-body>

            <v-row align="center" dense class="me-4">
                <label class="col-md-2 form-label text-center mb-5">*帳號</label>
                <v-col cols="4"><v-text-field density></v-text-field></v-col>
                <label class="col-md-2 form-label text-center mb-5">姓名</label>
                <v-col cols="4"><v-text-field density></v-text-field></v-col>
            </v-row>
        </panel-body>
    </panel> -->
</template>

<script>
export default {
    props: {
        selectItem: {},
    },
    components: {

    },
    data() {
        return {
            targetItem: this.$globalModels.getModel('fakeAccount'),
            headers: [{ title: "帳號", key: "userId", width: 50, sortable: true, removable: true },
            { title: "姓名", key: "userName", width: 50, sortable: true, removable: true },
            { title: "單位", key: "deptName", width: 100, sortable: false, removable: true },

            { title: "刪除", key: "action", width: 30, sortable: false, removable: true }],
            tableData: [{ uuid: '1', userId: '000101', userName: '范文珠', deptName: 'CS細胞及系統醫學研究所', jobTitle: '計畫助理', roleName: ['參與計畫人員', '單位彙整人(院內研究)'], active: 'Active' }],
        }
    },
    methods: {
        handleClose() {
            this.$emit("childDialog");

        },

    },
    mounted() {
        console.log("mounted")

    },
    created() {

    }
}
</script>
<style>
.checkboxInline {
    display: flex;
    margin: 1rem 0;
    align-items: center;

    a {
        color: $dark;
        font-weight: 700;
        margin-left: 0.5rem;
    }

    label {
        margin: 0;
    }

    .v-input--selection-controls {
        margin-top: 0;
        padding-top: 0;
    }

    .v-input__slot {
        margin-bottom: 0;
    }
}
</style>