import Vue from 'vue';
import Vuex from 'vuex';
import loginM from './modules/login';

Vue.use(Vuex);

var store = new Vuex.Store({
  modules: {
    loginM
  }
});

export default store;