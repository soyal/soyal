import Vue from 'vue';
import Vuex from 'vuex';
import loginM from './modules/login';
import testM from './modules/test';

Vue.use(Vuex);

var store = new Vuex.Store({
  modules: {
    loginM,
    testM
  }
});

export default store;