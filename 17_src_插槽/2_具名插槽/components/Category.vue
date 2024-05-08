<template>
    <div class="category">
        <h3>{{ title }}</h3>
        <!-- 插槽，等着组件使用者进行填充 -->
        <slot name="center">我是默认插槽</slot>
        <slot name="footer">我是默认插槽</slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ['listData','title']
}
</script>

<style>
.category{
     background: skyblue;
     width: 200px;
     height: 300px;
   }
   h3{
     text-align: center;
     background: orange;
   }
   img{
     width: 100%;
   }
</style>