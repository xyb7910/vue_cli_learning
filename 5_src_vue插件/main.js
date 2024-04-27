import Vue from "vue";

import App from './App';

// 引入插件
import plugin from "./plugin";

// 关闭 Vue 的生产插件
Vue.config.productionTip = false;

// Vue 应用插件
Vue.use(plugin)

new Vue({
    el: '#app',
    render: h => h(App)
});