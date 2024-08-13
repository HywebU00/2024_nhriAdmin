<script>
import { useAppOptionStore } from '@/pinia/app-option';
import { useAppApiDataStore } from '@/pinia/app-api-data';

const appOption = useAppOptionStore();
const appApiData = useAppApiDataStore();

export default {
  data: () => ({
    visible: false,
    selectItem: false,
    select: { state: '請選取項目', props: { disabled: true } },
    items: [{ state: '選項一' }, { state: '選項二' }, { state: '選項三' }, { state: '選項四' }],
  }),
  mounted() {
    appOption.appSidebarHide = true;
    appOption.appHeaderHide = true;
    appOption.appContentClass = 'p-0';
  },
  beforeRouteLeave(to, from, next) {
    appOption.appSidebarHide = false;
    appOption.appHeaderHide = false;
    appOption.appContentClass = '';
    next();
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      appApiData.getToken();
      this.$router.push({ path: '/' });
      // let data = {
      //     "account": "hyweb",
      //     "password": "t3sthyweb"
      // }

      // this.axios.post('/api' + 'nhri/login', data).then((response) => {
      //     console.log("response!!!!!!!!! ", response.data.token);

      // });
    },
  },
};
</script>
<template>
  <!-- BEGIN login -->
  <div class="login login-v1 loginPage">
    <!-- BEGIN login-container -->
    <div class="login-container">
      <!-- BEGIN login-header -->
      <div class="login-header">
        <div class="brand mb-sm-0 mb-3">
          <div class="d-flex align-items-center">
            <img src="~@/assets/nhrilogo.png" />
            <h1>國家衛生研究院<br /><span>計畫管理系統</span></h1>
          </div>
        </div>
        <div class="icon">
          <i class="fa fa-lock"></i>
        </div>
      </div>
      <!-- END login-header -->

      <!-- BEGIN login-body -->
      <div class="login-body">
        <!-- BEGIN login-content -->
        <div class="login-content">
          <v-form>
            <v-container class="px-0">
              <div class="loginForm">
                <div class="">
                  <v-text-field placeholder="帳號"></v-text-field>
                </div>
                <div class="mb-4">
                  <v-text-field placeholder="密碼表單" :append-inner-icon="visible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" :type="visible ? 'text' : 'password'" @click:append-inner="visible = !visible" hide-details="auto"></v-text-field>
                </div>
                <div class="mb-4">
                  <v-select v-model="select" :items="items" item-title="state" item-disabled="disabled" hide-details="auto"> </v-select>
                </div>
                <div class="" v-if="select.state != '請選取項目'">
                  <v-text-field placeholder="MOTP" hide-details="auto"></v-text-field>
                </div>
                <v-checkbox color="primary" class="py-0" label="記住我的登入帳號 (公用電腦請勿勾選)"></v-checkbox>
              </div>
              <div class="">
                <v-btn class="loginBtn" color="secondary" block size="x-large"> 登入 </v-btn>
              </div>
            </v-container>
          </v-form>
        </div>
        <!-- END login-content -->
      </div>
      <!-- END login-body -->
    </div>
    <!-- END login-container -->
  </div>
  <!-- END login -->
</template>
