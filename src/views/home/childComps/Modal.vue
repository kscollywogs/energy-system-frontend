<template>
	<b-card v-if="data" class="card-congratulation-medal">
		<h5>你好吗 🎉 {{ data.name }}</h5>
		<b-card-text class="font-large-1 mt-2">
			您有 {{ (data.todoToday).length }} 个待办审核
		</b-card-text>

		<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">
			点击查看
		</b-button>

	</b-card>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
	name: 'Modal',
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
	methods: {},
}
</script>
