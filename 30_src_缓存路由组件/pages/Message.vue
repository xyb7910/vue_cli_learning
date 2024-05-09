<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
          <!---跳转路由并携带query参数，to的字符串写法-->
          <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
          <!---跳转路由并携带query参数，to的对象写法-->
          <router-link 
          replace
          :to="{
            // path:'/home/message/detail',
            //利用路由名字直接跳转路由简化多级路由的path配置
            name: 'particulars',
            query: {
              id:m.id,
              title:m.title,
            }
          }">{{ m.title }}</router-link>
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "Message",
    data() {
      return {
        messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
        ]
      }
    },
    methods: {
      pushShow(m) {
        // console.log(this.$router)
        this.$router.push({
          name: 'particulars',
          query: {
            id: m.id,
            title: m.title,
          }
        })
      },
      replaceShow(m) {
        this.$router.replace({
          name: 'particulars',
          query: {
            id: m.id,
            title: m.title,
          }
        })
      },
    }
  }
  </script>
  
  <style scoped>
    button{
      margin-right: 5px;
    }
  </style>