<template>
    <v-card>XXXXXXXXXXXX
        <v-card-subtitle>
            <v-tabs v-model="tab" color="indigo-accent-4" align-tabs="start" class="ml-2 mr-1 mt-1" density="comfortable">
                <v-tab v-for="(item, i) in tabsArray" :key="i" :value="item.value"> <label class="form-label"
                        style="font-size: 16px;">
                        {{ item.text }}
                    </label></v-tab>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-4" @click="handleClose">
                    <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                </v-btn>

            </v-tabs></v-card-subtitle>
        <OverlayScrollbarsComponent>

            <v-card-text>

                <v-row class="ml-1 mr-1">
                    <!-- <v-col cols="12"> <span>Medium weight text.</span>
                    <p>Medium weight text.</p>
                    <p class="font-weight-regular">Medium weight text.{{ selectItem.planYear }}</p>
                    <p class="font-weight-medium">
                        Medium weight text.
                    </p>
                    <p class="font-weight-bold">
                        Medium weight text.
                    </p>
                </v-col> -->
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            計畫年度
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.planYear }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />計畫類型
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.planType }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />計畫類別
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
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />
                            計畫主持人
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.chairman }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            協同/共同/其它主持人(院內)
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.chairman }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            協同/共同/其它主持人(院外)
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
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />中文計畫名稱
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.planName }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            英文計畫名稱
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.planNameEng }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />綱要計畫別
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.outlineType }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            計畫期程
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.dateStart }}
                    </v-col>
                    <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />子計畫數量
                        </label></v-col>
                    <v-col cols="4">
                        {{ selectItem.outlineType }}
                    </v-col>
                    <!-- <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        中文計畫內容
                    </label></v-col>
                <v-col cols="10">
                    <p v-html="selectItem.excerpt"></p>
                </v-col> -->

                    <v-col cols="12" class="text-center bg-light-blue-lighten-3 mt-2"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />中文計畫內容
                        </label></v-col>
                    <v-col cols="12">
                        <!-- <p v-html="selectItem.excerpt"></p> -->
                        <v-card-text v-html="selectItem.excerpt"></v-card-text>
                    </v-col>

                    <v-col cols="12" class="text-center bg-light-blue-lighten-3 mt-2"> <label class="form-label"
                            style="font-size: 16px;">
                            <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />預期績效指標及評估基準
                        </label></v-col>
                    <v-col cols="12">
                        <!-- <p v-html="selectItem.excerpt"></p> -->
                        <v-card-text v-html="selectItem.excerpt"></v-card-text>
                    </v-col>
                    <v-col cols="12" class="text-center bg-light-blue-lighten-3 mt-2"> <label class="form-label"
                            style="font-size: 16px;">
                            備註
                        </label></v-col>
                    <v-col cols="12">
                        <!-- <p v-html="selectItem.excerpt"></p> -->
                        <v-card-text v-html="selectItem.excerpt"></v-card-text>
                    </v-col>
                </v-row>
            </v-card-text>
        </OverlayScrollbarsComponent>
    </v-card>
</template>
<script>


import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
export default {
    components: {

    },
    props: {

    },
    data: () => ({
        selectItem: this.$globalModels.getModel('fakeBasicPlan')[0],
        tab: 0,
        tabsArray: [{ value: 0, text: '計畫基本資料', title: '計畫基本資料(檢視)' },
        { value: 1, text: '計畫人員' }, { value: 2, text: '計畫經費' },
        { value: 3, text: '期初目標設定' }, { value: 4, text: '管考項目填報' }, { value: 5, text: '簽核歷程' }
        ],
    }),
    methods: {
        handleClose() {
            this.$emit("childDialog");

        },

    },
}

</script>