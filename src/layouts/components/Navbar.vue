<template>
	<div class="navbar-container d-flex content align-items-center">

		<!-- Nav Menu Toggler -->
		<ul class="nav navbar-nav d-xl-none">
			<li class="nav-item">
				<b-link
					class="nav-link"
					@click="toggleVerticalMenuActive"
				>
					<feather-icon
						icon="MenuIcon"
						size="21"
					/>
				</b-link>
			</li>
		</ul>

		<!-- Left Col -->
		<div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
			<dark-Toggler class="d-none d-lg-block"/>
		</div>

		<b-navbar-nav class="nav align-items-center ml-auto">
			<b-nav-item-dropdown
				right
				toggle-class="d-flex align-items-center dropdown-user-link"
				class="dropdown-user"
			>
				<template #button-content>
					<div class="d-sm-flex d-none user-nav">
						<p class="user-name font-weight-bolder mb-0">
							一个人名
						</p>
						<span class="user-status">管理员</span>
					</div>
					<b-avatar
						size="40"
						variant="light-primary"
						badge
						:src="require('@/assets/images/avatars/13-small.png')"
						class="badge-minimal"
						badge-variant="success"
					/>
				</template>

				<b-dropdown-item link-class="d-flex align-items-center">
					<feather-icon
						size="16"
						icon="UserIcon"
						class="mr-50"
					/>
					<span>个人资料</span>
				</b-dropdown-item>

				<b-dropdown-item link-class="d-flex align-items-center">
					<feather-icon
						size="16"
						icon="MailIcon"
						class="mr-50"
					/>
					<span>邮箱</span>
				</b-dropdown-item>

				<b-dropdown-item link-class="d-flex align-items-center">
					<feather-icon
						size="16"
						icon="CheckSquareIcon"
						class="mr-50"
					/>
					<span>任务</span>
				</b-dropdown-item>

				<b-dropdown-item link-class="d-flex align-items-center">
					<feather-icon
						size="16"
						icon="MessageSquareIcon"
						class="mr-50"
					/>
					<span>在线聊天</span>
				</b-dropdown-item>

				<b-dropdown-divider/>

				<b-dropdown-item link-class="d-flex align-items-center">
					<feather-icon
						size="16"
						icon="LogOutIcon"
						class="mr-50"
					/>
					<span>登出</span>
				</b-dropdown-item>
			</b-nav-item-dropdown>
		</b-navbar-nav>
	</div>
</template>

<script>
import {
	BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'

export default {
	components: {
		BLink,
		BNavbarNav,
		BNavItemDropdown,
		BDropdownItem,
		BDropdownDivider,
		BAvatar,
		// Navbar Components
		DarkToggler,
	},
	props: {
		toggleVerticalMenuActive: {
			type: Function,
			default: () => {
			},
		},
	},
}
</script>
