// 求和配置
export default {
    namespaced: true,
    state: {
        sum: 1,
        school: 'Yau',
        subject: 'Are',
    },
    actions: {
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
    },
    mutations: {
        // 收到 state 和要操作的数据
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum += value;
        },
    },
    getters: {
        bigSum(state) {
            return state.sum  *  10;
        }
    },
}