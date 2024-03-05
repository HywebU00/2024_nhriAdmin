<template>
    <v-card density>
        <!-- <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
                <span class="text-h5">Sarah Mcbeal</span>
            </v-card-title></v-card-item> -->
        <v-card-title>
            <v-row>
                <v-col cols="4" v-if="selectItem.uuid">編輯帳號</v-col>
                <v-col cols="4" v-else>新增帳號</v-col>
                <v-col cols="8" class="text-right"> <v-btn color="blue-grey-lighten-4" @click="handleClose">
                        <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                    </v-btn></v-col>
            </v-row>
        </v-card-title>
        <!-- <v-divider :thickness="3"></v-divider> -->
        <v-card-text>
            <v-row align="center" dense class="me-4">

                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />帳號
                    </label></v-col>
                <v-col cols="4"><v-text-field density v-model="targetItem.userId"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />姓名
                    </label></v-col>
                <v-col cols="4"><v-text-field density v-model="targetItem.userName"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />最高學歷
                    </label></v-col>

                <v-col cols="4"><v-text-field density v-model="targetItem.userName"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />單位
                    </label></v-col>

                <v-col cols="4"> <v-autocomplete :items="$globalModels.getModel('fakeUnitArray')"
                        density></v-autocomplete></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />職稱
                    </label></v-col>

                <v-col cols="4"><v-text-field density v-model="targetItem.userName"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />
                        e-Mail
                    </label></v-col>

                <v-col cols="4"><v-text-field density v-model="targetItem.userName"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        自訂密碼
                    </label></v-col>

                <v-col cols="4"><v-text-field density v-model="targetItem.userName"></v-text-field></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />
                        是否使用自訂密碼登入
                    </label></v-col>

                <v-col cols="4"> <v-radio-group v-model="targetItem.statue" inline>
                        <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('yesFlag')" :label="item.label"
                            :value="item.value"></v-radio>
                    </v-radio-group></v-col>
                <v-col cols="2" class="text-right"> <label class="form-label mb-5" style="font-size: 16px;">
                        <Icon icon="material-symbols-light:star" style="margin-bottom:4;color: red;" />
                        帳號狀態
                    </label></v-col>

                <v-col cols="4"> <v-radio-group v-model="targetItem.status" inline>
                        <v-radio v-for="(item, i) in $globalModels.getCommonArrayUtil('activeFlag')" :label="item.label"
                            :value="item.value"></v-radio>
                    </v-radio-group></v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="blue-darken-1" variant="elevated" @click="handleClose">
                儲存
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="handleClose">
                取消
            </v-btn>

        </v-card-actions>
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
            targetItem: this.$globalModels.getModel('fakeAccount')


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