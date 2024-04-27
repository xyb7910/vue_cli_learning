<template>
    <div class="demo">
      <h2 class="title">姓名:{{  name }}</h2>
      <h2>性别: {{ sex }}</h2>
    </div>
 </template>
 
 <script>
 export default {
   name: "Student",
   data(){
     console.log(this);
     return {
        name: 'ypb',
        sex: '男',
     }
   },
 }
 </script>

<style scoped>
.demo {
  background-color: blue;
}
</style>