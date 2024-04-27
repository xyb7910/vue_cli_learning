<template>
  <div>
     <Student> </Student>
     <hr/>
    <School/>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
 name: "App",
 components:{
   School,
   Student,
 },
}
</script>

<style>
/*
  全局样式是不需要加上 scoped
  全局共享
*/

.title {
  font-style: italic;
}
</style>