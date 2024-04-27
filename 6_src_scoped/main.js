import Vue from "vue";

import App from './App';

// 关闭 Vue 的生产插件
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
});