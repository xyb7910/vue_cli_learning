<template>
  <div id="app">
    <button @click="showH">点我输出上方的元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue';

export default {
  name: 'App',
  components: {
    School,
  },
  data() {
    return {
      msg: '欢迎学习Vue',
    }
  },
  methods: {
    showH(e) {
      console.log(this.$refs.title)
      console.log(e.target)
      console.log(this.$refs.sch)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
