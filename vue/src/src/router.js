import Vue from 'vue';
import Router from 'vue-router';
import SelectBoard from './components/SelectBoard.vue';
import InsertBoard from './components/InsertBoard.vue';
import UpdateBoard from './components/UpdateBoard.vue';
import SelectBoardByNo from './components/SelectBoardByNo.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SelectBoard',
      component: SelectBoard,
    },
    {
      path: '/detail/:no',
      name: 'SelectBoardByNo',
      component: SelectBoardByNo,
      props: true,
    },
    {
      path: '/insert',
      name: 'InsertBoard',
      component: InsertBoard,
    },
    {
      path: '/update/:no',
      name: 'UpdateBoard',
      component: UpdateBoard,
      props: true,
    },
  ],
});
