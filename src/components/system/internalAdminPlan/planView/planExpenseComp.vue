
<template>
    <v-card>
        <v-card-title>
            <h4 class="mt-3 mb-3"> 計畫經費檢視</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>


            <v-table density="compact">

                <thead>

                    <tr>
                        <th class="text-left bg-light-blue-lighten-3" width="5%">
                            No.
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="15%">
                            主計畫代號
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            科目別
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">
                            項目
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="10%">
                            原提報金額
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="10%">
                            期初核定金額
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.basicPlanUuid }}</td>
                        <td> <a href="javascript:void(0)" style="color: black;" @click="targetItem = item; dialog1 = true;">
                                {{ item.accountingInner }}</a></td>
                        <td>{{ item.itemName }}</td>
                        <td class="text-right">{{ item.unitPrice }}</td>
                        <td class="text-right">{{ item.newUnitPrice }}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-right">小計</td>
                        <td class="text-right">4,000,000</td>
                        <td class="text-right">2,666,000</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-right"><b>合計</b></td>
                        <td class="text-right"><b>4,000,000</b></td>
                        <td class="text-right"><b>2,666,000</b></td>
                    </tr>
                </tbody>
            </v-table>


        </v-card-text>
    </v-card>

    <div v-if="dialog1">
        <v-dialog width="60%" v-model="dialog1" scrollable>
            <planExpenseDetailComp :selectItem="selectItem" :selectDetail="targetItem" @childDialog="parentDialog">
            </planExpenseDetailComp>
        </v-dialog>
    </div>
</template>

<script>
import planExpenseDetailComp from '@/components/system/internalAdminPlan/planView/planExpenseDetailComp.vue';
export default {
    props: {
        selectItem: {},
    },
    components: {
        planExpenseDetailComp
    },
    data() {
        return {
            dialog1: false,
            targetItem: {},

            tableData: [{ basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '個人電腦汰舊換新經費', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '國內出差經費', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '參加外部會議與廠商洽談之出差費用', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '獎助金', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '獎助金', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '印表機/傳真機碳粉匣、辦公事務用品費用', unitPrice: 25000, newUnitPrice: 30000 },
            { basicPlanUuid: 'IM-101-AP-01', accountingInner: '其他雜支', itemName: '辦理會議/參展所需之場地租用及相關支出', unitPrice: 25000, newUnitPrice: 30000 },],
        }
    },
    methods: {
        parentDialog() {
            this.dialog1 = false;

        },
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