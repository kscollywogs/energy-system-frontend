<template>
	<b-card v-if="tableData" no-body class="card-company-table">
		<b-table :items="tableData" responsive :fields="fields" class="mb-0">
			<!-- name? -->
			<template #cell(column1)="data">
				<div class="d-flex align-items-center">
					<div class="font-weight-bolder">
						{{ data.item.title }}
					</div>
				</div>
			</template>

			<!-- category -->
			<template #cell(column2)="data">
				<div class="d-flex align-items-center">
					<b-avatar class="mr-1" :variant="data.item.avatarColor">
						<feather-icon size="18" :icon="data.item.avatarIcon" />
					</b-avatar>
					<span>{{ data.item.avatarTitle }}</span>
				</div>
			</template>

			<!-- data1 -->
			<template #cell(column3)="data">
				<div class="d-flex flex-column">
					<span class="font-weight-bolder mb-25">{{ data.item.viewTitle }}</span>
				</div>
			</template>

			<!-- data2 -->
			<template #cell(column4)="data">
				{{ data.item.revenue + '￥' }}
			</template>

			<!-- percentage -->
			<template #cell(column5)="data">
				<div class="d-flex align-items-center">
					<span class="font-weight-bolder mr-1">{{ data.item.sales + '%' }}</span>
					<feather-icon :icon="data.item.loss ? 'TrendingDownIcon':'TrendingUpIcon'"
												:class="data.item.loss ? 'text-danger':'text-success'" />
				</div>
			</template>
		</b-table>
	</b-card>
</template>

<script>
import { BCard, BTable, BAvatar, BImg, } from 'bootstrap-vue'

export default {
	name: 'DataTable',
	components: {
		BCard,
		BTable,
		BAvatar,
		BImg,
	},
	props: {
		tableData: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			fields: [
				{key: 'column1', label: '列1'},
				{key: 'column2', label: '列2'},
				{key: 'column3', label: '列3'},
				{key: 'column4', label: '列4'},
				{key: 'column5', label: '列5'},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
	.dark-layout & {
		background: $theme-dark-body-bg !important;
	}
}
</style>
