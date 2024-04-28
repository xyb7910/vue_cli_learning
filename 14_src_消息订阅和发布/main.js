import Vue from "vue";

import App from './App';

// 关闭 Vue 的生产插件
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        //此时这个this就是vm，只不过这个时候还并没有去解析模版
        Vue.prototype.$bus = this; // 安装全局总线
    },
});