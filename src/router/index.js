import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return {x: 0, y: 0}
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/home/Home.vue'),
			meta: {
				pageTitle: '首页',
				breadcrumb: [
					{
						text: '首页',
						active: true,
					},
				],
			},
		},
		{
			path: '/second-page',
			name: 'second-page',
			component: () => import('@/views/secondPage/SecondPage.vue'),
			meta: {
				pageTitle: '第二页',
				breadcrumb: [
					{
						text: '第二页',
						active: true,
					},
				],
			},
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/Login.vue'),
			meta: {
				layout: 'full',
			},
		},
		{
			path: '/error-404',
			name: 'error-404',
			component: () => import('@/views/error/Error404.vue'),
			meta: {
				layout: 'full',
			},
		},
		{
			path: '*',
			redirect: 'error-404',
		},
	],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
	// Remove initial loading
	const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = 'none'
	}
})

export default router
