<template>
    <v-card density>
        <!-- <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
                <span class="text-h5">Sarah Mcbeal</span>
            </v-card-title></v-card-item> -->
        <v-card-title>
            <v-row>
                <v-col cols="4">Account (設定角色)

                    <v-btn color="blue-darken-1" variant="text" @click="handleSelectAll">
                        全選
                    </v-btn>
                    <v-btn class="mr-2" color="blue-darken-1" variant="text" @click="selectedData = []">
                        清除
                    </v-btn>
                </v-col>
                <v-col cols="8" class="text-right"><v-btn color="blue-grey-lighten-4" @click="handleClose">
                        <Icon icon="mingcute:close-fill" style="font-size: 16px; " />
                    </v-btn></v-col>
            </v-row>
        </v-card-title>
        <!-- <v-divider :thickness="3"></v-divider> -->
        <v-card-text>
            <v-row class="ml-2" dense>

                <v-col cols="12" sm="4" md="4" v-for="(role, i) in $globalModels.getModel('fakeRoleArray')">
                    <v-checkbox v-model="selectedData" color="secondary" :value="role.value" :label="role.title"
                        density></v-checkbox>
                </v-col>

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
            targetItem: this.$globalModels.getModel('fakeAccount'),
            ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
            selectedData: [],
        }
    },
    methods: {
        handleClose() {
            this.$emit("childDialog");

        },
        handleSelectAll() {
            let vm = this;
            vm.selectedData = vm.$globalModels.getModel('fakeRoleArray').map(item => item.value)
        }

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