import Vuex from 'vuex';
import Vue from 'vue';
import person from './person';
import count from './count';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        count,
        person,
    }
})