<template>
	<section id="dashboard-ecommerce">
		<b-row class="match-height">

			<b-col xl="4" md="6">
				<!--TodoList Modal-->
				<Modal :data="data.part1" />
				<!--TodoList Modal ends-->
			</b-col>


			<b-col xl="8" md="6">
				<Statistics :data="data.statistics" />
			</b-col>
		</b-row>

		<b-row class="match-height">
			<b-col lg="4">
				<b-row class="match-height">
					<b-col lg="6" md="6" cols="6">
						<StatusOne :data="data.statusOne" />
					</b-col>

					<b-col lg="6" md="3" cols="6">
						<StatusTwo :data="data.statusTwo" />
					</b-col>

					<b-col lg="12" md="6">
						<EarningChart :data="data.earnings" />
					</b-col>
				</b-row>
			</b-col>

			<b-col lg="8">
				<EnergyCostReport :data="data.report" />
			</b-col>

		</b-row>

		<b-row class="match-height">
			<!-- Table -->
			<b-col lg="8">
				<DataTable :table-data="data.table" />
			</b-col>
			<!--/ Table -->

			<b-col lg="4" md="6">
				<Records :data="data.records" />
			</b-col>
		</b-row>
	</section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import Modal from './childComps/Modal'
import Statistics from './childComps/Statistics'
import StatusOne from './childComps/StatusOne'
import StatusTwo from './childComps/StatusTwo'
import EarningChart from './childComps/EarningChart'
import EnergyCostReport from './childComps/EnergyCostReport'
import DataTable from './childComps/DataTable'
import Records from './childComps/Records'

export default {
	components: {
		BRow,
		BCol,
		Modal,
		Statistics,
		StatusOne,
		StatusTwo,
		EarningChart,
		EnergyCostReport,
		DataTable,
		Records,
	},
	data() {
		return {
			data: {
				part1: {
					name: '小王同学',
					todoToday: [
						{
							num: 1,
							task: '绝缘试验报告'
						},
						{
							num: 2,
							task: '测试变压器电气试验报告'
						},
						{
							num: 3,
							task: '20220130_康派智能_com1-2_例行检查'
						},
					],
				},
				statistics: [
					{
						icon: 'TrendingUpIcon',
						color: 'light-primary',
						title: '-',
						subtitle: '水流速',
						customClass: 'mb-2 mb-xl-0',
					},
					{
						icon: 'CodesandboxIcon',
						color: 'light-info',
						title: '35.58千瓦',
						subtitle: '总有功功率',
						customClass: 'mb-2 mb-xl-0',
					},
					{
						icon: 'BoxIcon',
						color: 'light-danger',
						title: '5.69千乏',
						subtitle: '总无功功率',
						customClass: 'mb-2 mb-sm-0',
					},
					{
						icon: 'DatabaseIcon',
						color: 'light-success',
						title: '36.86千伏安',
						subtitle: '总视在功率',
						customClass: '',
					},
				],
				statusOne: {
					name: '通道',
					quality: 4
					// 放个数组展示个图表也行
					// series: [
					// 	{
					// 		name: '2020',
					// 		data: [ 45, 85, 65, 45, 65 ],
					// 	},
					// ],
				},
				statusTwo: {
					name: '采集设备',
					quality: 74,
					series: [
						{
							data: [ 0, 20, 5, 30, 15, 45 ],
						},
					],
				},
				earnings: {
					month: '2',
					total: 4055.56,
					series: [ 53, 16, 31 ],
				},
				report: {
					years: [ '2020', '2019', '2018' ],
					cost: '25,852',
					energyReport: {
						series: [
							{
								name: '电力',
								data: [ 95, 177, 284, 256, 105, 63, 168, 218, 72 ],
							},
							{
								name: '水',
								data: [ 145, 80, 60, 180, 100, 60, 85, 75, 100 ],
							},
						],
					},
					budgetChart: {
						series: [
							{
								data: [ 61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62 ],
							},
							{
								data: [ 20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27 ],
							},
						],
					},
				},
				table: [
					{
						title: '111',
						avatarIcon: 'MonitorIcon',
						avatarColor: 'light-primary',
						avatarTitle: 'Technology',
						viewTitle: '23.4k',
						revenue: '891.2',
						sales: '68',
						loss: true,
					},
					{
						title: '222',
						avatarIcon: 'CoffeeIcon',
						avatarColor: 'light-success',
						avatarTitle: 'Grocery',
						viewTitle: '78k',
						revenue: '668.51',
						sales: '97',
						loss: false,
					},
					{
						title: '333',
						avatarIcon: 'WatchIcon',
						avatarColor: 'light-warning',
						avatarTitle: 'Fashion',
						viewTitle: '162',
						revenue: '522.29',
						sales: '62',
						loss: false,
					},
					{
						title: '444',
						avatarIcon: 'MonitorIcon',
						avatarColor: 'light-primary',
						avatarTitle: 'Technology',
						viewTitle: '214',
						revenue: '291.01',
						sales: '88',
						loss: false,
					},
					{
						title: '555',
						avatarIcon: 'CoffeeIcon',
						avatarColor: 'light-success',
						avatarTitle: 'Grocery',
						viewTitle: '208',
						revenue: '783.93',
						sales: '16',
						loss: true,
					},
					{
						title: '666',
						avatarIcon: 'WatchIcon',
						avatarColor: 'light-warning',
						avatarTitle: 'Fashion',
						viewTitle: '990',
						revenue: '780.05',
						sales: '78',
						loss: false,
					},
					{
						title: '777',
						avatarIcon: 'WatchIcon',
						avatarColor: 'light-warning',
						avatarTitle: 'Fashion',
						viewTitle: '12.9k',
						revenue: '531.49',
						sales: '42',
						loss: false,
					},
				],
				records: [
					{
						mode: '1',
						types: 'type1',
						avatar: 'AlertCircleIcon',
						avatarVariant: 'light-danger',
						payment: '-74',
						deduction: true,
					},
					{
						mode: '2',
						types: 'type2',
						avatar: 'CheckIcon',
						avatarVariant: 'light-success',
						payment: '+480',
						deduction: false,
					},
					{
						mode: '3',
						types: 'type3',
						avatar: 'CheckIcon',
						avatarVariant: 'light-success',
						payment: '+480',
						deduction: false,
					},
					{
						mode: '4',
						types: 'type4',
						avatar: 'AlertCircleIcon',
						avatarVariant: 'light-danger',
						payment: '-23',
						deduction: true,
					},
					{
						mode: '5',
						types: 'type5',
						avatar: 'CheckIcon',
						avatarVariant: 'light-success',
						payment: '+98',
						deduction: false,
					},
				],
			},
		}
	},
	created() {
	},
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/home.scss';
@import '~@core/scss/vue/libs/chart-apex.scss';
</style>
