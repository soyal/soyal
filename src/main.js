import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import store from './store';
import router from './vue-router';

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");