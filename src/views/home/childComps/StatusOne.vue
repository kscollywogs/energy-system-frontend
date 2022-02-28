<template>
	<b-card v-if="data" body-class="pb-50">
		<h4>{{ data.name }}</h4>
		<h2 class="font-weight-bolder mb-1">
			{{ data.quality }} 个
		</h2>
		<!-- chart -->
		<!--<vue-apex-charts height="70" :options="barchart.chartOptions" :series="data.series" />-->
	</b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
// import VueApexCharts from 'vue-apexcharts'
// import { $themeColors } from '@themeConfig'

const $barColor = '#f3f3f3'

export default {
	name: 'StatusOne',
	components: {
		BCard,
		// VueApexCharts,
	},
	props: {
		data: {
			type: Object,
			default: () => {
			},
		},
	},
	data() {
		return {
			// barchart: {
			// 	chartOptions: {
			// 		chart: {
			// 			type: 'bar',
			// 			stacked: true,
			// 			toolbar: {
			// 				show: false,
			// 			},
			// 		},
			// 		grid: {
			// 			show: false,
			// 			padding: {
			// 				left: 0,
			// 				right: 0,
			// 				top: -15,
			// 				bottom: -15,
			// 			},
			// 		},
			// 		plotOptions: {
			// 			bar: {
			// 				horizontal: false,
			// 				columnWidth: '20%',
			// 				startingShape: 'rounded',
			// 				colors: {
			// 					backgroundBarColors: [ $barColor, $barColor, $barColor, $barColor, $barColor ],
			// 					backgroundBarRadius: 5,
			// 				},
			// 			},
			// 		},
			// 		legend: {
			// 			show: false,
			// 		},
			// 		dataLabels: {
			// 			enabled: false,
			// 		},
			// 		colors: [ $themeColors.warning ],
			//
			// 		xaxis: {
			// 			labels: {
			// 				show: false,
			// 			},
			// 			axisBorder: {
			// 				show: false,
			// 			},
			// 			axisTicks: {
			// 				show: false,
			// 			},
			// 		},
			// 		yaxis: {
			// 			show: false,
			// 		},
			// 		tooltip: {
			// 			x: {
			// 				show: false,
			// 			},
			// 		},
			// 	},
			// },
		}
	},
}
</script>
