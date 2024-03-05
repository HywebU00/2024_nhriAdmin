
<template>
    <v-card>

        <v-card-title>
            <v-row class="px-2">
                <h4 class="mt-3 ">其他雜支 明細檢視

                </h4> <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-4 mt-2 mb-1" @click="handleClose">
                    <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                </v-btn>

            </v-row>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>


            <v-table density="compact">

                <thead>

                    <tr>
                        <th class="text-left bg-light-blue-lighten-3" width="20%">

                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="40%">
                            原提報金額
                        </th>
                        <th class="text-left bg-light-blue-lighten-3" width="40%">
                            期初核定金額
                        </th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />主計畫代號
                        </td>
                        <td>EM-108-AP-01</td>
                        <td>EM-108-AP-01</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            會計年度
                        </td>
                        <td>108年</td>
                        <td>108年</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />會計科目
                        </td>
                        <td>其他雜支</td>
                        <td>其他雜支</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />項目
                        </td>
                        <td>公務用車</td>
                        <td>公務用車</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />數量
                        </td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單位
                        </td>
                        <td>批</td>
                        <td>批</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單價
                        </td>
                        <td>100,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            總價
                        </td>
                        <td>100,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            附件
                        </td>
                        <td>無附件</td>
                        <td>無附件</td>
                    </tr>
                    <tr>
                        <td class="text-right bg-light-blue-lighten-3">
                            備註
                        </td>
                        <td>接送外賓</td>
                        <td>接送外賓</td>
                    </tr>
                    <!-- <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.basicPlanUuid }}</td>
                        <td>{{ item.accountingInner }}</td>
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
                    </tr> -->
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