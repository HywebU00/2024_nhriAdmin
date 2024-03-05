
<template>
    <v-table density="compact">

        <thead>

            <tr>
                <th class="text-left bg-light-blue-lighten-3" width="5%">
                    No.
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="15%">
                    作業
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="15%">
                    人員
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="10%">
                    簽核結果
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="15%">
                    送達時間
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="15%">
                    處理時間
                </th>
                <th class="text-left bg-light-blue-lighten-3" width="15%">
                    批註
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.certifyProcessStatus }}</td>
                <td>{{ item.modifyBy }}</td>
                <td>{{ item.certifyStatus }}</td>
                <td>{{ item.modifyDate }}</td>
                <td>{{ item.modifyDate }}</td>
                <td>{{ item.comments }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    props: {
        // tableData: {},
    },
    components: {

    },
    data() {
        return {
            targetItem: {},
            radioValue: null,
            radioArray1: [{
                label: '計畫研提',
                value: "1"
            }, {
                label: '期初目標設定',
                value: "2"
            }, {
                label: '計畫資料變更',
                value: "3"
            }, {
                label: '計畫狀態變更',
                value: "4"
            }, {
                label: '經費核定',
                value: "5"
            }],
            radioArray2: [{
                label: '期中追踨考核',
                value: "6"
            }, {
                label: '期末追踨考核',
                value: "7"
            }, {
                label: '成果報告',
                value: "8"
            }],
            tableData: [{ uuid: '8ac0ab973b655908013b827f565e068f', basicPlanUuid: '8ac0ab973b655908013b73ff298c0511', certifyProcessStatus: '8a8a9d0e31313db301313149788b0003', certifyStatus: '8a8a89fd2f7adee7012f7af07f860005', modifyDate: '10-12月-12 09.48.01.502000000 上午', modifyBy: 'PH05KC' },
            { uuid: '8ac0ab973b97cba8013bac249e850488', basicPlanUuid: '8ac0ab973b655908013b73ff298c0511', certifyProcessStatus: '8a8a9d0e31313db301313149788b0003', certifyStatus: '8a8a89fd2f7adee7012f7af0c1f00006', modifyDate: '18-12月-12 11.52.59.268000000 上午', modifyBy: '870818' },
            { uuid: '8ac0ab973bb5d029013bb62ab0fd009e', basicPlanUuid: '8ac0ab973b655908013b73ff298c0511', certifyProcessStatus: '8a8a9d0e31313db301313149788b0003', certifyStatus: '8a8a89fd2f7adee7012f7af100db0007', modifyDate: '20-12月-12 10.35.49.370000000 上午', modifyBy: '860910' },
            { uuid: '8ac0ab973bb5d029013bb62ba81800c2', basicPlanUuid: '8ac0ab973b655908013b73ff298c0511', certifyProcessStatus: '8a8a9d0e31313db301313149788b0003', certifyStatus: '8a8a89fd2f7adee7012f7af100db0007', modifyDate: '20-12月-12 10.36.52.629000000 上午', modifyBy: '860910' },
            { uuid: '8ac0ab973bb5d029013bb671efec0108', basicPlanUuid: '8ac0ab973b655908013b73ff298c0511', certifyProcessStatus: '8a8a9d0e31313db301313149788b0003', certifyStatus: '8a8a89fd2f7adee7012f7aefccc30003', modifyDate: '20-12月-12 11.53.38.540000000 上午', modifyBy: '930724' },
            ],
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