<template>
    <v-card>
        <!-- <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
                <span class="text-h5">Sarah Mcbeal</span>
            </v-card-title></v-card-item> -->
        <v-card-title>
            <h4 class="mt-3 mb-3" v-if="selectItem.uuid">編輯計畫基本資料</h4>
            <h4 class="mt-3 mb-3" v-else="selectItem.uuid">新增院內研究計畫</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
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
                    <v-text-field v-model="targetItem.planYear" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />計畫類型
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.planType" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />計畫類別
                    </label></v-col>

                <v-col cols="4">
                    <v-text-field v-model="targetItem.planYear" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        執行單位
                    </label></v-col>

                <v-col cols="4">
                    <v-text-field v-model="targetItem.executiveDept" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        單位主管
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.originalDeptChiefName" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />
                        計畫主持人
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        協同/共同/其它主持人(院內)
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        協同/共同/其它主持人(院外)
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.chairman" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫登錄人
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.registerBy" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫編號
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.serialNo" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />中文計畫名稱
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.planName" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        英文計畫名稱
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.planNameEng" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />綱要計畫別
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.outlineType" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        計畫期程
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.dateStart" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />子計畫數量
                    </label></v-col>
                <v-col cols="4">
                    <v-text-field v-model="targetItem.outlineType" variant="outlined" density="compact"
                        hide-details="auto"></v-text-field>

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

                    <v-textarea v-model="selectItem.excerpt" auto-grow></v-textarea>
                </v-col>

                <v-col cols="12" class="text-center bg-light-blue-lighten-3 mt-2"> <label class="form-label"
                        style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />預期績效指標及評估基準
                    </label></v-col>
                <v-col cols="12">

                    <v-textarea v-model="selectItem.excerpt" auto-grow></v-textarea>
                </v-col>
                <v-col cols="12" class="text-center bg-light-blue-lighten-3 mt-2"> <label class="form-label"
                        style="font-size: 16px;">
                        備註
                    </label></v-col>
                <v-col cols="12">
                    <v-textarea v-model="selectItem.excerpt" auto-grow></v-textarea>
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
            targetItem: {}


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