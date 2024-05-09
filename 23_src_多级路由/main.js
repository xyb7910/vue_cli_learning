import Vue from "vue";

import App from './App';

import router from './router';
import VueRouter from 'vue-router'


Vue.use(VueRouter);

// 关闭 Vue 的生产插件
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router
});