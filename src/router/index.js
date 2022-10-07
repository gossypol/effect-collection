import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

export const routeChildren = [
  {
    path: 'introduction',
    name: '介绍页',
    component: () => import('@/views/introduction/index.vue'),
  },
  {
    path: 'streamer-button',
    name: '流光按钮',
    component: () => import('@/views/streamer-button/index.vue'),
  },
  {
    path: '3d-player',
    name: '3D 立体播放器',
    component: () => import('@/views/3d-player/index.vue'),
  },
  {
    path: 'liquid-loading',
    name: '液体加载动画',
    component: () => import('@/views/liquid-loading/index.vue'),
  },
  {
    path: 'tick-animation',
    name: '打勾动画',
    component: () => import('@/views/tick-animation/index.vue'),
  },
  {
    path: 'text-spotlight',
    name: '文字聚光灯效果',
    component: () => import('@/views/text-spotlight/index.vue'),
  },
  {
    path: 'text-effects-1',
    name: '文字特效1',
    component: () => import('@/views/text-effects-1/index.vue'),
  },
  {
    path: 'text-breakdown',
    name: '文字崩坏效果',
    component: () => import('@/views/text-breakdown/index.vue'),
  },
  {
    path: 'photo-comparison',
    name: '图片拖拽对比效果',
    component: () => import('@/views/photo-comparison/index.vue'),
  },
  {
    path: 'depth-of-field',
    name: 'B站 Banner 景深对焦效果',
    component: () => import('@/views/depth-of-field/index.vue'),
  },
  {
    path: 'liquid-ball',
    name: '水球',
    component: () => import('@/views/liquid-ball/index.vue'),
  },
  {
    path: 'scratch-off-ticket',
    name: '刮刮乐',
    component: () => import('@/views/scratch-off-ticket/index.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/introduction',
      component: () => import('@/views/index.vue'),
      children: routeChildren,
    },
  ],
});
