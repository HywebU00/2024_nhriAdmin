<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item">{{ $route.meta.parentPathName }}{{ $route.name }}</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->


	<h1 class="page-header">{{ $route.name }} <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN panel -->
	<panel>
		<panel-header>
			<panel-title>Panel title here {{ selectValue }} !</panel-title>
			<panel-toolbar />
		</panel-header>
		<panel-body>
			<v-btn color="success" @click="ttt2">text</v-btn>
			<div class="row gx-3" id="icon">!!!{{ testArray2 }}
				<div class="col-lg-3 col-md-4 col-6 pb-3 d-flex align-items-center fw-bold">
					<Icon class="iconify me-2 display-6" icon="solar:4k-bold-duotone" /><span>solar:4k-bold-duotone</span>
				</div>
			</div>
			<VTree ref="basicTreeRef" :data="testArray2" :nodeClassName="node => `generated-class-${node.id}`"
				v-model="selectValue" selectable checkable />

			<div class="row mb-3">
				<label class="form-label col-form-label col-md-3">11333333Valid Input</label>
				<div class="col-md-9">
					<input type="text" class="form-control is-valid" />
					<div class="valid-feedback">Looks good!</div>
					<div class="valid-tooltip">Looks good!</div>

				</div>
			</div>
			<!-- invalid -->
			<div class="row mb-3">
				<label class="form-label col-form-label col-md-3">aaaa{{ text1 }}</label>
				<div class="col-md-3">
					<v-text-field v-model="text1.t1" density></v-text-field>

					<div class="invalid-feedback">...</div>
					<div class="invalid-tooltip">...</div>
				</div>
				<div class="col-md-3">
					<v-text-field density></v-text-field>

					<div class="invalid-feedback">...</div>
					<div class="invalid-tooltip">...</div>
				</div>
			</div>
			<v-chip class="ma-2" closable>
				Closable
			</v-chip>
			<div class="form-floating">
				<input type="email" class="form-control" placeholder="Enter email" />
				<v-text-field density></v-text-field>
			</div>
			Panel Content Here
		</panel-body>
	</panel>
	<!-- END panel -->
</template>
<script >
import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree'
// import { Icon } from '@iconify/vue';
import '@wsfe/vue-tree/style.css'
import '@mdi/font/css/materialdesignicons.min.css'; // 引入 Material Design Icons 樣式表
import 'vuetify/dist/vuetify.min.css'; // 引入 Vuetify 的 CSS 樣式
// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
import { mapState, mapActions } from 'pinia'
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
import { useAppApiDataStore } from '@/pinia/app-api-data';
const appSidebarMenu = useAppSidebarMenuStore();
const appApiData = useAppApiDataStore();
// import { useAppVariableStore } from '@/pinia/app-variable';
// const appVariable = useAppVariableStore();
export default {
	components: {
		VTree,
		// Icon: Icon
		// tree: treeview,
	},
	computed: {
		// ...mapState(useAppApiDataStore, {
		// 	testArray2: 'getTestArray2',
		// 	// 你也可以写一个函数来获得对 store 的访问权

		// }),
		...mapState(useAppApiDataStore, ['apiServerUrl']),
		...mapState(useAppApiDataStore, ['testArray2']),
	},
	asyncComputed: {
		// 允许在组件中访问 this.doubleCount
		// 与从 store.doubleCount 中读取的相同
		// ...mapState(useCounterStore, ['doubleCount']),
		// 与上述相同，但将其注册为 this.myOwnName
		// ...mapState(useCounterStore, {
		// 	myOwnName: 'doubleCount',
		// 	// 你也可以写一个函数来获得对 store 的访问权
		// 	double: store => store.doubleCount,
		// }),

		async ttt() {
			let www = await this.testArray
			console.log("await this.testArray ", await this.testArray);
			await new Promise(resolve => setTimeout(resolve, 1000))
			return www
		}
	},
	data() {
		return {
			year: (new Date()).getFullYear(),
			selectValue: null,
			basicUsage: [],
			config: {
				roots: ["id1", "id2"],
			},
			nodes: {
				id1: {
					text: "text1",
					children: ["id11", "id12"],
				},
				id11: {
					text: "text11",
				},
				id12: {
					text: "text12",
				},
				id2: {
					text: "text2",
				},
			},
			text1: { t1: "3333" }
		}
	},
	methods: {
		...mapActions(useAppApiDataStore, { ttt2: await 'getTestArray2' }),

	},
	async mounted() {
		console.log("mounted")
		this.$globalFunctions.function1();
		this.$globalFunctions.function2();
		var vm = this;

		console.log("mounted", await appApiData.getTestArray);
		console.log("!!!!!!!!!!!!!!!!!!!!!!! ", this.apiServerUrl);

		// let data = {
		// 	"account": "hyweb",
		// 	"password": "t3sthyweb"
		// }
		// this.axios.post('https://nhri.hywebcloud20.com/' + 'nhri/login', data).then((response) => {
		// 	console.log("response ", response.data);

		// });


	},
	async created() {
		let vm = this;
		const newItem = { url: '/new-page', icon: 'fa fa-file', title: 'New Page TTTTTT' };
		appApiData.getTestArray1();
		appSidebarMenu.addMenuItem(newItem);
		// console.log("created " + this.$globalModels.getModel('t01'))
		// this.axios.get('./assets/model/testModelT01.json').then((response) => {
		// 	// console.log("01 " + response.data)
		// 	vm.basicUsage = response.data
		// });

		// this.function1();

		if (import.meta.hot) {
			console.log("HMR ", import.meta)

		}
		try {
			// console.log("111 " + await appApiData.getTestArray);
			// // vm.basicUsage = await appApiData.getTestArray;
			// console.log("2222", JSON.stringify(await appApiData.getTestArray2()));
			// vm.basicUsage = await appApiData.getTestArray2();
			// this.loading = false;
		} catch (error) {
			console.error('Error fetching data:', error);
			// handle error
		}




	}
}
</script>
