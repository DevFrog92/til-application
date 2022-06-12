import Vue from 'vue';
import VueRouter from 'vue-router';

// plugin을 실행하고 초기화하기 위해서 필요한 코드 Vue.use
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    // callback router
    path: '*',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  // #: 서버는 index.html을 기준으로 찾기 때문에 뒤에 오는게 상관이 없다.
  mode: 'history',
  routes,
});

export default router;
