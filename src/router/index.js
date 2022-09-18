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

        // 3D 立体播放器
        {
          path: '3d-player',
          component: () => import('@/views/3d-player/index.vue'),
        },

        // 液体加载动画
        {
          path: 'liquid-loading',
          component: () => import('@/views/liquid-loading/index.vue'),
        },

        // 打勾动画
        {
          path: 'tick-animation',
          component: () => import('@/views/tick-animation/index.vue'),
        },

        // 文字聚光灯效果
        {
          path: 'text-spotlight',
          component: () => import('@/views/text-spotlight/index.vue'),
        },

        // 文字特效1
        {
          path: 'text-effects-1',
          component: () => import('@/views/text-effects-1/index.vue'),
        },

        // 文字崩坏效果
        {
          path: 'text-breakdown',
          component: () => import('@/views/text-breakdown/index.vue'),
        },

        // 图片拖拽对比效果
        {
          path: 'photo-comparison',
          component: () => import('@/views/photo-comparison/index.vue'),
        },
      ],
    },
  ],
});
