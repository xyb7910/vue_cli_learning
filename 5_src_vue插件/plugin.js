// vm 和 vc 都可以使用
export default {
    install(Vue) {
        // vue 帮你调用 install 方法
        console.log('install');
        console.log(Vue) // vm 构造函数 Vue

        // 定义全局过滤器
        Vue.filter('mySlice', function(val) {
            return val.slice(0, 4);
        });


        // 全局指令
        Vue.directive('fbind', {
            bind(el, binding) {
                el.value =binding.value;
            },
             //指令被插入页面时
             inserted(el, binding){
                // console.log('inserted')
                el.focus();
            },
            //指令所在模版被重新解析时
            update(el, binding){
                // console.log('update');
                el.value = binding.value;
            }
        });

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 1,
                    y: 2,
                }
            }
        });

        // 给Vue 原型添加一个方法 vm & vc 都可以使用
        Vue.prototype.hello = function () {
            alert('hello');
        }
    }
}