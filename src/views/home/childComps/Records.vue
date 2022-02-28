<template>
	<b-card v-if="data" class="card-transaction" no-body>
		<b-card-header>
			<b-card-title>清单列表</b-card-title>
		</b-card-header>

		<b-card-body>
			<div v-for="data in data" :key="data.mode" class="transaction-item">
				<b-media no-body>
					<b-media-aside>
						<b-avatar rounded size="42" :variant="data.avatarVariant">
							<feather-icon size="18" :icon="data.avatar" />
						</b-avatar>
					</b-media-aside>
					<b-media-body>
						<h6 class="transaction-title">{{ data.mode }}</h6>
						<small>{{ data.types }}</small>
					</b-media-body>
				</b-media>
				<div class="font-weight-bolder" :class="data.deduction ? 'text-danger':'text-success'">
					{{ data.payment }}
				</div>
			</div>
		</b-card-body>
	</b-card>
</template>

<script>
import {
	BCard,
	BCardHeader,
	BCardTitle,
	BCardBody,
	BMediaBody,
	BMedia,
	BMediaAside,
	BAvatar,
	BDropdown,
	BDropdownItem,
} from 'bootstrap-vue'

export default {
	components: {
		BCard,
		BCardHeader,
		BCardTitle,
		BCardBody,
		BMediaBody,
		BMedia,
		BMediaAside,
		BAvatar,
		BDropdown,
		BDropdownItem,
	},
	props: {
		data: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
