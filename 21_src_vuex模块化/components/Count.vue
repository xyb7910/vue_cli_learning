<template>
    <div>
        <h1>当前的和为：{{ sum }}</h1>
        <h2>当前求和放大10倍 {{ bigSum }}</h2>
        <h3>我的学校是{{ school }}, 学科是 {{ subject }}</h3>
        <h3 style="color: red">下方列表的总人数 {{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementIfOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: "Count",
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        //借助mapState从state中生成计算属性,对象写法
        // ...mapState({sum:'sum', school:'school',subject:"subject"}),
        //借助mapState从state中生成计算属性,数组写法(即代表了生成的计算属性名为sum，同时也代表了从state找到sum)
        ...mapState('count',['sum', 'school', 'subject']),
        ...mapState('person',["personList"]),

        //借助mapGetters从getters中生成计算属性,对象写法
        // ...mapGetters({bigSum:'bigSum'}),
        //借助mapGetters从getters中生成计算属性,数组写法
        ...mapGetters('count',['bigSum']),
    },
    methods: {
        increment() {
            this.$store.commit('INCREMENT', this.n);
        },
        decrement() {
            this.$store.commit('DECREMENT', this.n);
        },
        //借助mapMutations生成对应方法，方法会调用commit去联系mutations，对象写法
        ...mapMutations('count',
        {increment:"INCREMENT", 
        decrement:"DECREMENT"}),
        //借助数组写法生成方法,但注意你生成的方法名和mutations里对应的方法名将会一样的
        // ...mapMutations('count',['INCREMENT','DECREMENT']),
        // incrementOdd() {
        //     this.$store.dispatch('incrementIfOdd', this.n);
        // },
        // incrementWait() {
        //     this.$store.dispatch('incrementWait', this.n);
        // },
        //借助mapActions生成对应方法，方法会调用dispatch去联系actions，对象写法
        // ...mapActions({incrementIfOdd:"incrementIfOdd", incrementWait:"incrementWait"}),
        ...mapActions('count',['incrementIfOdd','incrementWait']),
        

    }
}

</script>


<style>
    button {
        margin-left: 5px;
    }
</style>