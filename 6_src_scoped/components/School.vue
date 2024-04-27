<template>
    <div class="demo">
        <h2>学校名称： {{ name  }}</h2>
        <h2>学校地址： {{ address }}</h2>
    </div>
 </template>
 
 <script>
 export default {
   name: "School",
   data(){
     return {
        name: 'yau',
        address: 'Xian'
     }
   },
   methods: {
    test() {
        console.log(this)
        this.hello();
    }
   }
 }
 </script>


<style scoped>
 /* scoped 代表局部 */
 .demo {
  background-color: aquamarine;
 }
</style>