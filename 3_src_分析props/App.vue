<template>
  <div>
    <!---多个vc互不影响-->
    <!--v-bind的作用重要 获取后面表达式值的赋给props的属性-->
    <Student name="yxc" sex="男" :age="12"></Student>
    <hr>
  </div>
</template>

<script>

import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {
    Student,
  },
}
</script>

