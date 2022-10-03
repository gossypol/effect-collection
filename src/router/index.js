import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

export const routeChildren = [
  // 介绍页
  {
    path: 'introduction',
    name: '介绍页',
    component: () => import('@/views/introduction/index.vue'),
  },

  // 流光按钮
  {
    path: 'streamer-button',
    name: '流光按钮',
    component: () => import('@/views/streamer-button/index.vue'),
  },

  // 3D 立体播放器
  {
    path: '3d-player',
    name: '3D 立体播放器',
    component: () => import('@/views/3d-player/index.vue'),
  },

  // 液体加载动画
  {
    path: 'liquid-loading',
    name: '液体加载动画',
    component: () => import('@/views/liquid-loading/index.vue'),
  },

  // 打勾动画
  {
    path: 'tick-animation',
    name: '打勾动画',
    component: () => import('@/views/tick-animation/index.vue'),
  },

  // 文字聚光灯效果
  {
    path: 'text-spotlight',
    name: '文字聚光灯效果',
    component: () => import('@/views/text-spotlight/index.vue'),
  },

  // 文字特效1
  {
    path: 'text-effects-1',
    name: '文字特效1',
    component: () => import('@/views/text-effects-1/index.vue'),
  },

  // 文字崩坏效果
  {
    path: 'text-breakdown',
    name: '文字崩坏效果',
    component: () => import('@/views/text-breakdown/index.vue'),
  },

  // 图片拖拽对比效果
  {
    path: 'photo-comparison',
    name: '图片拖拽对比效果',
    component: () => import('@/views/photo-comparison/index.vue'),
  },

  // B站 Banner 景深对焦效果
  {
    path: 'depth-of-field',
    name: 'B站 Banner 景深对焦效果',
    component: () => import('@/views/depth-of-field/index.vue'),
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
