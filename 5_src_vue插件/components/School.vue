<template>
    <div >
        <h2>学校名称： {{ name | mySlice }}</h2>
        <h2>学校地址： {{ address }}</h2>
        <button @click="test">点我测试hello</button>
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