
<template>
    <v-card>
        <v-card-title>
            <h4 class="mt-3 mb-3"> 計畫基本資料</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>
            <v-row class="ml-1">
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫年度
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.planYear }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫類型
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.planType }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫類別
                    </label></v-col>

                <v-col cols="4">
                    {{ selectItem.planYear }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        執行單位
                    </label></v-col>

                <v-col cols="4">
                    {{ selectItem.executiveDept }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        單位主管
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.originalDeptChiefName }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">

                        計畫主持人
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.chairman }}
                </v-col>

                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫登錄人
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.registerBy }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫編號
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.serialNo }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        中文計畫名稱
                    </label></v-col>
                <v-col cols="4">
                    {{ selectItem.planName }}
                </v-col>
            </v-row>

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