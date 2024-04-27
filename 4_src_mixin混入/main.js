import Vue from 'vue'
import App from './App.vue'
import { mixin, shareData } from '@/mixin'
Vue.config.productionTip = false

// 配置全局混合
Vue.mixin(mixin)
Vue.mixin(shareData)

new Vue({
  el: '#app',
  render: h => h(App),
});
