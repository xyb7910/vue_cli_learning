<template>
    <!--  组件的交互-->
    <div class="demo">
        <h2>学校名称:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
    </div>
</template>
    

    
<script>
    import pubsub from "pubsub-js";
    export default {
        name: 'School', 
        data(){
            return {
            name:'yau',
            address: 'Xian'
            }
        },
        mounted() {
            // console.log('School', this);
            // this.$bus.$on('hello', (data) => {
            //     console.log(`我是School组件,我接收到了数据, ${data}`);
            // })
            
            // 订阅消息
            this.pubId = pubsub.subscribe('hello', (name, msg) => {
                // 注意这里写箭头函数 this 才不会丢
                console.log(`有人发布了hello消息，回调被执行，data: ${msg}`);
            });
        },
        beforeDestroy() {
            //this.$bus.$off('hello'); // 销毁解绑

            // 取消订阅
            pubsub.unsubscribe(this.pubId); // 取消订阅
        }
    };
    </script>

<style scoped>
/*scoped代表局部的*/
.demo{
background: skyblue;
padding:5px
}
</style>
