<script >
import { useAppSidebarMenuStore } from '@/pinia/app-sidebar-menu';
import VTree, { VTreeNode, VTreeSearch, VTreeDrop } from '@wsfe/vue-tree'
import '@wsfe/vue-tree/style.css'


// import treeview from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
const appSidebarMenu = useAppSidebarMenuStore();
export default {
	components: {
		VTree,
		// tree: treeview,
	},
	data() {
		return {
			year: (new Date()).getFullYear(),
			selectValue: null,
			basicUsage: [{
				"title": "Nicolas - (0)",
				"id": "Nicolas",
				"children": [
					{
						"title": "Fay - (1)",
						"id": "Fay",
						"children": [
							{
								"title": "Rohan - (2)",
								"id": "Rohan",
								"children": [

								]
							},
							{
								"title": "Farrell - (3)",
								"id": "Farrell - (3)",
								"children": [

								]
							},
							{
								"title": "Williamson - (4)",
								"id": "Williamson - (4)",
								"children": [

								]
							},
							{
								"title": "Sawayn - (5)",
								"id": "Sawayn - (5)",
								"children": [

								]
							},
							{
								"title": "Pacocha - (6)",
								"id": "Pacocha - (6)",
								"children": [

								]
							}
						]
					},
					{
						"title": "Krajcik - (7)",
						"id": "Krajcik - (7)",
						"children": [
							{
								"title": "Ruecker - (8)",
								"id": "Ruecker - (8)",
								"children": [

								]
							},
							{
								"title": "Romaguera - (9)",
								"id": "Romaguera - (9)",
								"children": [

								]
							},
							{
								"title": "Schroeder - (10)",
								"id": "Schroeder - (10)",
								"children": [

								]
							},
							{
								"title": "Hodkiewicz - (11)",
								"id": "Hodkiewicz - (11)",
								"children": [

								]
							},
							{
								"title": "Botsford - (12)",
								"id": "Botsford - (12)",
								"children": [

								]
							}
						]
					},
					{
						"title": "Sauer - (13)",
						"id": "Sauer - (13)",
						"children": [
							{
								"title": "Macejkovic - (14)",
								"id": "Macejkovic - (14)",
								"children": [

								]
							},
							{
								"title": "Shields - (15)",
								"id": "Shields - (15)",
								"children": [

								]
							},
							{
								"title": "Ward - (16)",
								"id": "Ward - (16)",
								"children": [

								]
							},
							{
								"title": "Paucek - (17)",
								"id": "Paucek - (17)",
								"children": [

								]
							},
							{
								"title": "Yost - (18)",
								"id": "Yost - (18)",
								"children": [

								]
							}
						]
					},
					{
						"title": "Ullrich - (19)",
						"id": "Ullrich - (19)",
						"children": [
							{
								"title": "Kertzmann - (20)",
								"id": "Kertzmann - (20)",
								"children": [

								]
							},
							{
								"title": "Lind - (21)",
								"id": "Lind - (21)",
								"children": [

								]
							},
							{
								"title": "Daugherty - (22)",
								"id": "Daugherty - (22)",
								"children": [

								]
							},
							{
								"title": "Franecki - (23)",
								"id": "Franecki - (23)",
								"children": [

								]
							},
							{
								"title": "Schuppe - (24)",
								"id": "Schuppe - (24)",
								"children": [

								]
							}
						]
					},
					{
						"title": "Ferry - (25)",
						"id": "Ferry - (25)",
						"children": [
							{
								"title": "Crona - (26)",
								"id": "Crona - (26)",
								"children": [

								]
							},
							{
								"title": "Willms - (27)",
								"id": "Willms - (27)",
								"children": [

								]
							},
							{
								"title": "Upton - (28)",
								"id": "Upton - (28)",
								"children": [

								]
							},
							{
								"title": "Schumm - (29)",
								"id": "Schumm - (29)",
								"children": [

								]
							},
							{
								"title": "Will - (30)",
								"id": "Will - (30)",
								"children": [

								]
							}
						]
					}
				]
			},],
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
		}
	},
	methods() {


	},
	mounted() {
		console.log("mounted")
	},
	created() {
		// const newItem = { url: '/new-page', icon: 'fa fa-file', title: 'New Page TTT' };
		// appSidebarMenu.addMenuItem(newItem);
		console.log("created")
	}
}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb">

		<li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li>

	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<!-- <li class="breadcrumb-item"> {{ $route.meta.parentPathName }}</li> -->

	<h1 class="page-header">{{ $route.name }} <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN panel -->
	<panel>
		<panel-header>
			<panel-title>Panel title here {{ selectValue }} {{ $route }} !!!</panel-title>
			<panel-toolbar />
		</panel-header>
		<panel-body>
			<VTree ref="basicTreeRef" :data="basicUsage" :nodeClassName="node => `generated-class-${node.id}`"
				v-model="selectValue" selectable checkable />

			<div class="row mb-3">
				<label class="form-label col-form-label col-md-3">Valid Input</label>
				<div class="col-md-9">
					<input type="text" class="form-control is-valid" />
					<div class="valid-feedback">Looks good!</div>
					<div class="valid-tooltip">Looks good!</div>
				</div>
			</div>
			<!-- invalid -->
			<div class="row mb-3">
				<label class="form-label col-form-label col-md-3">aaaa</label>
				<div class="col-md-3">
					<v-text-field density></v-text-field>

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