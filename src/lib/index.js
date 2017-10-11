/**
 * 插件导出目录
 */
import VueBetterScroller from './BetterScroller/index.vue'; // 导入组件;

function install(Vue) {
	if (install.installed) return
	install.installed = true
	Vue.component(VueBetterScroller.name, VueBetterScroller);
}

const BetterScrollerPlugin = {
	install: install,
	VueBetterScroller
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(BetterScrollerPlugin);
}

export default BetterScrollerPlugin;