import { defineStore } from "pinia";

export const useAppSidebarMenuStore = defineStore({
	id: "appSidebarMenu",
	state: () => {
		return {
			menu: [{
				text: 'Navigation',
				is_header: true
			},
			// {
			// 	url: '/', icon: 'fa fa-sitemap', title: 'Home',
			// 	children: [
			// 		{ url: '/t01', icon: 'fa fa-file', title: '測試頁01' },

			// 	]
			// },
			],
			// menuSysInternalAdminPlan: {
			// 	url: '/system/internalAdminPlan/', icon: 'fa fa-sitemap', title: '院內行政計畫',
			// 	children: [
			// 		{ url: '/system/internalAdminPlan/overview', icon: 'fa fa-file', title: '計畫總覽' },
			// 		{ url: '/system/internalAdminPlan/proposal', icon: 'fa fa-file', title: '計畫研提' },
			// 		{ url: '/system/planFund/fundCertify1', icon: 'fa fa-file', title: '期初經費設定' },
			// 		{ url: '/system/internalAdminPlan/manageSetup', icon: 'fa fa-file', title: '管考項目設定' },
			// 		{ url: '/system/internalAdminPlan/manage', icon: 'fa fa-file', title: '計畫執行與管考' },
			// 		{ url: '/system/internalAdminPlan/change', icon: 'fa fa-file', title: '計畫變更' },
			// 		{ url: '/system/internalAdminPlan/close', icon: 'fa fa-file', title: '計畫結案管理' },
			// 		{ url: '/system/internalAdminPlan/certifyCollector', icon: 'fa fa-file', title: '單位彙整' },
			// 		{ url: '/system/internalAdminPlan/certifyDeptChief', icon: 'fa fa-file', title: '主管簽核' },
			// 		{ url: '/system/internalAdminPlan/certifyDeptChief2', icon: 'fa fa-file', title: '主管簽核(所/處)' },
			// 		{ url: '/system/internalAdminPlan/certifyAcademic', icon: 'fa fa-file', title: '學發處彙整' },
			// 	]
			// },
			// menuSysManage:
			// {
			// 	url: '/system/manage/', icon: 'fa fa-sitemap', title: '系統設置',
			// 	children: [
			// 		{ url: '/system/manage/dept', icon: 'fa fa-file', title: 'Unit (單位組織)' },
			// 		{ url: '/system/manage/authRole', icon: 'fa fa-file', title: 'Role (角色權限)' },
			// 		{ url: '/system/manage/account', icon: 'fa fa-file', title: 'Account (帳號管理)' },
			// 		{ url: '/system/manage/code', icon: 'fa fa-file', title: 'Code (系統代碼)' },
			// 		{
			// 			url: '/system/manage/parameter', icon: 'fa fa-file', title: 'Parameter (系統參數)'
			// 		},
			// 		{ url: '/system/manage/application', icon: 'fa fa-file', title: 'Application(系統功能)' },
			// 	]
			// },
	uiTemplate:
			{
				url: '/ui/template/', icon: 'fa fa-star', title: 'UI模板',
				children: [
					{ url: '/ui/template/tree', icon: 'fa fa-file', title: '樹狀模板' },	
					{ url: '/ui/template/form', icon: 'fa fa-file', title: '表單模板' },	
				]
			},
		}
		// ,
		// return [{
		// 	text: 'Navigation',
		// 	is_header: true
		// },
		// {
		// 	url: '/', icon: 'fa fa-sitemap', title: 'Home'
		// },
		// // {
		// // 	url: '/t01', icon: 'fa fa-sitemap', title: 'Test01'
		// // }
		// /*
		// { url: '/menu', icon: 'fa fa-align-left', title: 'Menu Level',
		// 	children: [
		// 		{ url: '/menu/menu-1-1', title: 'Menu 1.1',
		// 			children: [
		// 				{ url: '/menu/menu-1-1/menu-2-1', title: 'Menu 2.1',
		// 					children: [
		// 						{ url: '/menu/menu-1-1/menu-2-1/menu-3-1', title: 'Menu 3.1' },
		// 						{ url: '/menu/menu-1-1/menu-2-1/menu-3-2', title: 'Menu 3.2' }
		// 					]
		// 				},
		// 				{ url: '/menu/menu-1-1/menu-2-2', title: 'Menu 2.2' },
		// 				{ url: '/menu/menu-1-1/menu-2-3', title: 'Menu 2.3' },
		// 			]
		// 		},
		// 		{ url: '/menu/menu-1-2', title: 'Menu 1.2' },
		// 		{ url: '/menu/menu-1-3', title: 'Menu 1.3' },
		// 	]
		// }*/]
	},
	actions: {
		clearMenu() {
			console.log("XXX")
			this.menu = [];

		},
		addMenuItem(item) {
			this.menu.push(item);
		},
		addMenuSystem() {

			// console.log("????")

			// this.menu.push(this.menuSysInternalAdminPlan);
			// this.menu.push(this.menuSysManage);
			this.menu.push(this.uiTemplate);
			
		},
	}
});