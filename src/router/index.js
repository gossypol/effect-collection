import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/introduction',
      component: () => import('@/views/index.vue'),
      children: [
        // 介绍页
        {
          path: 'introduction',
          component: () => import('@/views/introduction/index.vue'),
        },

        // 流光按钮
        {
          path: 'streamer-button',
          component: () => import('@/views/streamer-button/index.vue'),
        },
      ],
    },
  ],
});
