<template>
    <ul>
        <li :style="{opacity}">欢迎学习vue</li>
        <li>我是新闻1 <input type="text"/></li>
        <li>我是新闻2 <input type="text"/></li>
        <li>我是新闻3 <input type="text"/></li>
    </ul>
</template>


<script>
export default {
    name: "News",
    data() {
        return {
            opacity: 1,
        }
    },
    beforeDestroy() {
        console.log('News 被销毁')
    },
    // 激活时(路由组件独有的钩子)
    activated() {
        console.log('News 组件被激活了');
        this.timer = setInterval(() => {
            // console.log('@');
            this.opacity -= 0.01;
            if(this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    // 失活时
    deactivated() {
        console.log('News 组件失活');
        clearInterval(this.timer);
    },
}
</script>

<style scoped>
</style>