
<template>
    <basicPlanSimpleComp :selectItem="selectItem"></basicPlanSimpleComp>
    <v-card>
        <v-card-title>
            <h4 class="mt-3 mb-3"> 管考項目</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-left bg-light-blue-lighten-3" width="10%">
                            No.
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="50%">
                            項目名稱
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="40%">
                            簽辦狀態
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>期中追蹤考核</td>
                        <td>填報中</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>期末追蹤考核</td>
                        <td>填報中</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>成果報告</td>
                        <td>填報中</td>
                    </tr>
                    <!-- <tr v-for="(item, index) in tableData" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.basicPlanUuid }}</td>
                            <td> <a href="javascript:void(0)" style="color: black;" @click="targetItem = item; dialog1 = true;">
                                    {{ item.accountingInner }}</a></td>
                            <td>{{ item.itemName }}</td>
                            <td class="text-right">{{ item.unitPrice }}</td>
                            <td class="text-right">{{ item.newUnitPrice }}</td>
                        </tr> -->

                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script>
import basicPlanSimpleComp from '@/components/system/internalAdminPlan/planView/basicPlanSimpleComp.vue';
export default {
    props: {
        selectItem: {},
    },
    components: {
        basicPlanSimpleComp
    },
    data() {
        return {
            targetItem: { beginningKeyObjectives: '[期初]重點目標項目', beginningGoalAchievement: '[期初]目標達成標準及實施計畫(原提報)', midtermImplementation: '[期中]執行情形', midtermGoalChasing: '' },


        }
    },
    methods: {
        handleClose() {
            this.$emit("childDialog");

        },

    },
    mounted() {
        console.log("mounted")
        // this.targetItem = this.selectItem

    },
    created() {

    }
}
</script>

<script></script>