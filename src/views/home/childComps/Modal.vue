<template>
	<b-card>
		<h5>{{ data.name }}!</h5>
		<b-card-text class="font-small-3">

		</b-card-text>

		<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">

		</b-button>

	</b-card>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
	components: {
		BCard,
		BCardText,
		BButton,
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
	methods: {
		kFormatter,
	},
}
</script>
