import Vue from 'vue';
import VueRouter from 'vue-router';

// plugin을 실행하고 초기화하기 위해서 필요한 코드 Vue.use
Vue.use(VueRouter);

const routes = [];
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
