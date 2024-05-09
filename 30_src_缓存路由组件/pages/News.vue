<template>
    <ul>
        <li>我是新闻1 <input type="text"/></li>
        <li>我是新闻2 <input type="text"/></li>
        <li>我是新闻3 <input type="text"/></li>
    </ul>
</template>


<script>
export default {
    name: "News",
    beforeDestroy() {
        console.log('News 被销毁')
    },
}
</script>

<style scoped>
</style>