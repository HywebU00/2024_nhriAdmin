import { createApp } from 'vue';
// 目前用pinia哪一個都沒差
// import { createPinia } from 'pinia';
import { pinia } from './pinia';
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import mitt from 'mitt';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import '@marcoschulte/vue3-progress/dist/index.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss';
// import 'bootstrap';



import App from './App.vue';
import router from './router';

import Panel from '@/components/bootstrap/Panel.vue';
import PanelBody from '@/components/bootstrap/PanelBody.vue';
import PanelHeader from '@/components/bootstrap/PanelHeader.vue';
import PanelTitle from '@/components/bootstrap/PanelTitle.vue';
import PanelFooter from '@/components/bootstrap/PanelFooter.vue';
import PanelToolbar from '@/components/bootstrap/PanelToolbar.vue';


// VueDatePicker 日期選擇器
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import VCalendar from 'v-calendar';
import { Icon } from '@iconify/vue';
import 'v-calendar/dist/style.css';

// Vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

//customize CSS
import './scss/vue.scss';

// VUEX - https://vuex.vuejs.org/
import store from './store'

import axios from 'axios';
import VueAxios from 'vue-axios'


// import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
// import { Icon } from '@iconify/vue';

const emitter = mitt();
const app = createApp(App);

app.component('Panel', Panel);
app.component('PanelBody', PanelBody);
app.component('PanelHeader', PanelHeader);
app.component('PanelFooter', PanelFooter);
app.component('PanelToolbar', PanelToolbar);
app.component('PanelTitle', PanelTitle);
app.component('Icon', Icon);
// app.use(createPinia());

//日期選擇器
app.component('VueDatePicker', VueDatePicker);

app.use(pinia);
app.use(router);
app.use(Vue3ProgressPlugin);
app.use(PerfectScrollbar);
app.use(VCalendar);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(Icon);

// const appSidebarMenu = useAppSidebarMenuStore();
//utils
import { globalFunctions } from './utils/globalFunctions';
import { globalModels } from './utils/globalModels';
app.config.globalProperties.$globalFunctions = globalFunctions;
app.config.globalProperties.$globalModels = globalModels;
app.config.globalProperties.emitter = emitter;

app.mount('#app');
