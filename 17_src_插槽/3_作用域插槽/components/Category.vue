<template>
    <div class="category">
        <h3>{{ title }}</h3>
        <!-- 插槽，等着组件使用者进行填充 -->
        <slot :games="games">
            我是默认插槽
        </slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ['listData','title'],
    data() {
        return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        }
    }
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