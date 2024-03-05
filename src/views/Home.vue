<script>



import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
// 获取store实例
const appSidebarMenuStore = useAppSidebarMenuStore();

// // 在外部调用addMenuItem方法
// const newItem = { url: '/new-page', icon: 'fa fa-file', title: 'New Page' };
// appSidebarMenuStore.addMenuItem(newItem);
// // appSidebarMenuStore.clearMenu();
// console.log(appSidebarMenuStore.state);
export default {

}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Library</a></li>
		<li class="breadcrumb-item active">Data</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Page Header <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN panel -->
	<panel>
		<panel-header>
			<panel-title>Panel title here</panel-title>
			<panel-toolbar />
		</panel-header>
		<panel-body>
			Panel Content Here
		</panel-body>
	</panel>
	<!-- END panel -->
</template>