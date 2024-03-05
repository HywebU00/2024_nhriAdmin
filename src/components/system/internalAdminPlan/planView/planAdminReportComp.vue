
<template>
    <basicPlanSimpleComp :selectItem="selectItem"></basicPlanSimpleComp>
    <v-card>
        <v-card-title>
            <h4 class="mt-3 mb-3"> 期初目標設定</h4>
            <v-divider class="border-opacity-25"></v-divider>
        </v-card-title>
        <v-card-text>
            <v-row class="ml-1 mb-1">
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        重點目標項目<br>(原提報)
                    </label></v-col>
                <v-col cols="4">
                    {{ targetItem.beginningKeyObjectives }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3"> <label class="form-label"
                        style="font-size: 16px;">
                        目標達成標準及實施計畫 <br> (原提報)
                    </label></v-col>
                <v-col cols="4">
                    {{ targetItem.beginningGoalAchievement }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3" v-show="targetItem.midtermImplementation"> <label
                        class="form-label" style="font-size: 16px;">
                        執行情形<br> (期中)
                    </label></v-col>
                <v-col cols="4" v-show="targetItem.beginningGoalAchievement">
                    {{ targetItem.beginningGoalAchievement }}
                </v-col>
                <v-col cols="2" class="text-right bg-light-blue-lighten-3" v-show="targetItem.midtermGoalChasing"> <label
                        class="form-label" style="font-size: 16px;">
                        目標追蹤考核整體說明<br> (期中)
                    </label></v-col>
                <v-col cols="4" v-show="targetItem.midtermGoalChasing">
                    {{ targetItem.midtermGoalChasing }}
                </v-col>
            </v-row>
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