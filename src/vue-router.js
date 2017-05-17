import VueRouter from 'vue-router';
import login from './components/login/index.vue';
import editor from './components/editor/index.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/editor',
      component: editor
    }
  ]
});

module.exports = router;
