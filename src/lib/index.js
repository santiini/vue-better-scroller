/**
 * 插件导出目录
 */
import VueBetterScroller from './BetterScroller/index.vue'; // 导入组件;
const BetterScrollerPlugin = {
	install(Vue, options) {
		// 插件的开发 -- 符合vue的插件开发规范;
		Vue.component(VueBetterScroller.name, VueBetterScroller);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueBetterScroller);
}

export default BetterScrollerPlugin;