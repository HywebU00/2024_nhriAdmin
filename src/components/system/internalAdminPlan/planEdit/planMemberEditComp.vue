
<template>
    <v-card>

        <v-card-title>
            <h4 class="mt-3 mb-3"> 計畫人員投入百分比: 100%</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left" colspan="4">
                            <label class="form-label" style="font-size: 16px;">
                                院內人員
                            </label>
                        </th>
                    </tr>
                    <tr>
                        <th class="text-right" width="5%">
                            從屬人員
                        </th>
                        <th class="text-right" width="20%">
                            <v-select class="mt-1 mb-1" :items="memberArray" item-title="userName" density="compact"
                                variant="outlined" hide-details="auto"></v-select>


                        </th>
                        <th class="text-right" width="20%">



                        </th>
                        <th class="text-right" width="5%">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                                新增
                            </v-btn>
                        </th>


                    </tr>
                    <tr>
                        <th class="text-right">
                            其他人員
                        </th>
                        <th class="text-right" width="20%">
                            <v-select class="mt-1 mb-1" :items="$globalModels.getModel('fakeUnitArray')" density="compact"
                                variant="outlined" hide-details="auto"></v-select>


                        </th>
                        <th class="text-right" width="20%">
                            <v-select class="mt-1 mb-1" :items="memberArray" item-title="userName" density="compact"
                                variant="outlined" hide-details="auto"></v-select>


                        </th>
                        <th class="text-right" width="5%">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                                新增
                            </v-btn>
                        </th>
                    </tr>
                </thead>
            </v-table>

            <v-table density="compact">

                <thead>

                    <tr>
                        <th class="text-left bg-light-blue-lighten-3" width="5%">
                            No.
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            姓名
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            單位
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="10%">
                            投入百分比
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="35%">
                            備註
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="6%">
                            刪除
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.deptName }}</td>
                        <td>{{ item.member }}</td>
                        <td>{{ item.percent }}</td>
                        <td>{{ item.comments }}</td>
                        <td>
                            <Icon icon="clarity:remove-line" style="font-size: 24px;" color="red" />
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-divider class="border-opacity-25"></v-divider>
            <!-- <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left" colspan="4">
                            <label class="form-label" style="font-size: 16px;">
                                院內人員
                            </label>
                        </th>
                    </tr>
                    <tr>
                        <th class="text-left" width="5%">
                            從屬人員
                        </th>
                        <th class="text-left" width="20%">
                            <v-select :items="memberArray" item-title="userName" density="compact"
                                hide-details="auto"></v-select>


                        </th>
                        <th class="text-left" width="5%">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                                新增
                            </v-btn>
                        </th>


                    </tr>
                    <tr>
                        <th class="text-left">
                            其他人員
                        </th>
                        <th class="text-left" width="20%">
                            <v-select :items="$globalModels.getModel('fakeUnitArray')" density="compact"
                                hide-details="auto"></v-select>


                        </th>
                        <th class="text-left" width="20%">
                            <v-select :items="memberArray" item-title="userName" density="compact"
                                hide-details="auto"></v-select>


                        </th>
                        <th class="text-left" width="5%">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                                新增
                            </v-btn>
                        </th>
                    </tr>
                </thead>
            </v-table> -->
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left" colspan="7">
                            <label class="form-label" style="font-size: 16px;">
                                院外人員
                            </label>
                        </th>
                    </tr>
                    <tr>
                        <th class="text-right" width="10%">
                            其他人員
                        </th>
                        <th class="text-right" width="20%">

                            <v-text-field class="mt-1 mb-1" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field>

                        </th>
                        <th class="text-right" width="10%">
                            其他人員
                        </th>
                        <th class="text-right" width="20%">
                            <v-text-field class="mt-1 mb-1" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field>


                        </th>
                        <th class="text-right" width="10%">
                            其他人員
                        </th>
                        <th class="text-right" width="20%">
                            <v-text-field class="mt-1 mb-1" variant="outlined" density="compact"
                                hide-details="auto"></v-text-field>


                        </th>
                        <th class="text-right" width="5%">
                            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                                新增
                            </v-btn>
                        </th>
                    </tr>

                </thead>
            </v-table>
            <v-table density="compact">

                <thead>

                    <tr>
                        <th class="text-left bg-light-blue-lighten-3" width="5%">
                            No.
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            姓名
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            單位
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="10%">
                            投入百分比
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="35%">
                            備註
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="6%">
                            刪除
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.deptName }}</td>
                        <td>{{ item.member }}</td>
                        <td>{{ item.percent }}</td>
                        <td>{{ item.comments }}</td>
                        <td>
                            <Icon icon="clarity:remove-line" style="font-size: 24px;" color="red" />
                        </td>
                    </tr>
                </tbody>
            </v-table>

        </v-card-text>
    </v-card>
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
            targetItem: {},
            memberArray: [{ uuid: '1', userId: '000101', userName: '范文珠', deptName: 'CS細胞及系統醫學研究所', jobTitle: '計畫助理', roleName: ['參與計畫人員', '單位彙整人(院內研究)'], active: 'Active' }],
            tableData: [{
                deptName: '國家環境醫學研究所',
                member: '郭育良',
                memberTitle: '合聘研究員',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '林嬪嬪',
                memberTitle: '研究員兼代理所長',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '黃嘯谷',
                memberTitle: '特聘研究員',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '劉紹興',
                memberTitle: '研究員',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '王淑麗',
                memberTitle: '研究員',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '鄒粹軍',
                memberTitle: '研究員',
            }

                , {
                deptName: '國家環境醫學研究所',
                member: '李立安',
                memberTitle: '研究員',
            }],
        }
    },
    methods: {
        handleClose() {
            this.$emit("childDialog");

        },

    },
    mounted() {
        console.log("mounted")
        this.targetItem = this.selectItem

    },
    created() {

    }
}
</script>

<script></script>