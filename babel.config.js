module.exports = {
	presets: [
		[ '@vue/app', {useBuiltIns: 'entry'} ],	// 解决corejs related modules not found问题
	],
}
