<template>
	<b-card v-if="data" no-body class="card-revenue-budget">
		<b-row class="mx-0">
			<b-col md="8" class="revenue-report-wrapper">
				<div class="d-sm-flex justify-content-between align-items-center mb-3">
					<h4 class="card-title mb-50 mb-sm-0">能耗量</h4>

					<div class="d-flex align-items-center">
						<div class="d-flex align-items-center mr-2">
							<span class="bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer" />
							<span>电力</span><!--忘了怎么取这个数据的name了。。-->
						</div>
						<div class="d-flex align-items-center ml-75">
							<span class="bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer" />
							<span>水</span>
						</div>
					</div>
				</div>
				<!-- chart -->
				<vue-apex-charts ref="energy-report-chart" type="bar" height="230"
												 :options="energyChart.chartOptions"
												 :series="data.energyReport.series" />
			</b-col>

			<b-col md="4" class="budget-wrapper">
				<b-dropdown text="2020" size="sm" class="budget-dropdown" variant="outline-primary">
					<b-dropdown-item v-for="year in data.years" :key="year">
						{{ year }}
					</b-dropdown-item>
				</b-dropdown>

				<h2 class="mb-25">
					{{ data.cost }}
				</h2>

				<div class="d-flex justify-content-center">
					<span class="font-weight-bolder mr-25 mb-1">年用量</span>
				</div>
				<vue-apex-charts ref="budget-chart" type="line" height="80"
												 :options="yearCostChart.options" :series="data.budgetChart.series" />

				<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">
					查看详情
				</b-button>

			</b-col>
		</b-row>
	</b-card>
</template>

<script>
import {
	BCard, BRow, BCol, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import Ripple from 'vue-ripple-directive'

export default {
	components: {
		VueApexCharts,
		BDropdown,
		BDropdownItem,
		BCard,
		BButton,
		BRow,
		BCol,
	},
	directives: {
		Ripple,
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
			energy_report: {},
			energyChart: {
				chartOptions: {
					chart: {
						stacked: true,
						type: 'bar',
						toolbar: {show: false},
					},
					grid: {
						padding: {
							top: -20,
							bottom: -10,
						},
						yaxis: {
							lines: {show: false},
						},
					},
					xaxis: {
						categories: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月' ],
						labels: {
							style: {
								colors: '#6E6B7B',
								fontSize: '0.86rem',
								fontFamily: 'Montserrat',
							},
						},
						axisTicks: {
							show: false,
						},
						axisBorder: {
							show: false,
						},
					},
					legend: {
						show: false,
					},
					dataLabels: {
						enabled: false,
					},
					colors: [ $themeColors.primary, $themeColors.warning ],
					plotOptions: {
						bar: {
							columnWidth: '17%',
							endingShape: 'rounded',
						},
						distributed: true,
					},
					yaxis: {
						labels: {
							style: {
								colors: '#6E6B7B',
								fontSize: '0.86rem',
								fontFamily: 'Montserrat',
							},
						},
					},
				},
			},
			// chart 2
			yearCostChart: {
				options: {
					chart: {
						height: 80,
						toolbar: {show: false},
						zoom: {enabled: false},
						type: 'line',
						sparkline: {enabled: true},
					},
					stroke: {
						curve: 'smooth',
						dashArray: [ 0, 5 ],
						width: [ 2 ],
					},
					colors: [ $themeColors.primary, '#dcdae3' ],
					tooltip: {
						enabled: false,
					},
				},
			},
		}
	},
}
</script>
