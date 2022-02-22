<template>
	<p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      版权所有  © {{ new Date().getFullYear() }}
      <b-link
				class="ml-25"
				href=""
				target="_blank"
			>1111</b-link>
      <span class="d-none d-sm-inline-block">, All rights Reserved</span>
    </span>

		<span class="float-md-right d-none d-md-block">真尼玛烦
      <feather-icon
				icon="HeartIcon"
				size="21"
				class="text-danger stroke-current"
			/>
    </span>
	</p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
	components: {
		BLink,
	},
}
</script>
