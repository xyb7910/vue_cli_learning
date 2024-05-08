import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    // increment(context, value) {
    //     context.commit('INCREMENT', value);
    // },
    // decrement(context, value) {
    //     context.commit('DECREMENT', value);
    // },
    incrementIfOdd(context, value) {
        if(context.state.sum % 2) {
            context.commit('INCREMENT', value);
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 2000);
    }
}

const mutations = {
    // 收到 state 和要操作的数据
    INCREMENT(state, value) {
        state.sum += value;
    },
    DECREMENT(state, value) {
        state.sum += value;
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value);
    }
}

const  getters = {
    bigSum(state) {
        return state.sum  *  10;
    }
}


// 准备的数据
// 类似于 data
const state = {
    sum: 1,
    school: 'Yau',
    subject: 'Are',
    personList: [
        {id:'001', name:'张三'}
    ],
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})