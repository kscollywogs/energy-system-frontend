<template>
	<section id="dashboard-ecommerce">
		<b-row class="match-height">
			<!--<b-col xl="4" md="6">-->
			<!--	<Modal/>-->
			<!--</b-col>-->
			<b-col xl="8" md="6">
				<ecommerce-statistics :data="data.statisticsItems"/>
			</b-col>
		</b-row>

		<b-row class="match-height">
			<b-col lg="4">
				<b-row class="match-height">
					<!-- Bar Chart - Orders -->
					<b-col lg="6" md="3" cols="6">
						<ecommerce-order-chart :data="data.statisticsOrder"/>
					</b-col>
					<!--/ Bar Chart - Orders -->
					<b-col lg="6" md="3" cols="6">
						<ecommerce-profit-chart :data="data.statisticsProfit"/>
					</b-col>
					<b-col lg="12" md="6">
						<ecommerce-earnings-chart :data="data.earningsChart"/>
					</b-col>
				</b-row>
			</b-col>

			<!-- Revenue Report Card -->
			<b-col lg="8">
				<ecommerce-revenue-report :data="data.revenue"/>
			</b-col>
			<!--/ Revenue Report Card -->
		</b-row>

		<b-row class="match-height">
			<!-- Company Table Card -->
			<b-col lg="8">
				<ecommerce-company-table :table-data="data.companyTable"/>
			</b-col>
			<!--/ Company Table Card -->

			<!-- Developer Meetup Card -->
			<b-col lg="4" md="6">
				<ecommerce-meetup :data="data.meetup"/>
			</b-col>
			<!--/ Developer Meetup Card -->

			<!-- Browser States Card -->
			<b-col lg="4" md="6">
				<ecommerce-browser-states/>
			</b-col>
			<!--/ Browser States Card -->

			<!-- Goal Overview Card -->
			<b-col lg="4" md="6">
				<ecommerce-goal-overview :data="data.goalOverview"/>
			</b-col>
			<!--/ Goal Overview Card -->

			<!-- Transaction Card -->
			<b-col lg="4" md="6">
				<ecommerce-transactions :data="data.transactionData"/>
			</b-col>
			<!--/ Transaction Card -->
		</b-row>
	</section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import Modal from './childComps/Modal.vue'
import EcommerceStatistics from './childComps/EcommerceStatistics.vue'
import EcommerceRevenueReport from './childComps/EcommerceRevenueReport.vue'
import EcommerceOrderChart from './childComps/EcommerceOrderChart.vue'
import EcommerceProfitChart from './childComps/EcommerceProfitChart.vue'
import EcommerceEarningsChart from './childComps/EcommerceEarningsChart.vue'
import EcommerceCompanyTable from './childComps/EcommerceCompanyTable.vue'
import EcommerceMeetup from './childComps/EcommerceMeetup.vue'
import EcommerceBrowserStates from './childComps/EcommerceBrowserStates.vue'
import EcommerceGoalOverview from './childComps/EcommerceGoalOverview.vue'
import EcommerceTransactions from './childComps/EcommerceTransactions.vue'

export default {
	components: {
		BRow,
		BCol,
		Modal,
		EcommerceStatistics,
		EcommerceRevenueReport,
		EcommerceOrderChart,
		EcommerceProfitChart,
		EcommerceEarningsChart,
		EcommerceCompanyTable,
		EcommerceMeetup,
		EcommerceBrowserStates,
		EcommerceGoalOverview,
		EcommerceTransactions,
	},
	data() {
		return {
			data: {},
		}
	},
	created() {
		// data
		this.$http.get('/home/data')
			.then(response => {


				this.data = response.data

				console.log(this.data)

			})
	},
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/home.scss';
@import '~@core/scss/vue/libs/chart-apex.scss';
</style>
