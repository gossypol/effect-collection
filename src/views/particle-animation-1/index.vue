<template>
  <div id="graph" class="graph">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import ParticleEffect from './particle';

export default {
  data() {
    return {
      effectInstance: null,
    };
  },
  methods: {
    windowResize() {
      const graph = document.querySelector('#graph');
      this.effectInstance.resize(graph.clientWidth, graph.clientHeight);
    },
  },
  mounted() {
    const graph = document.querySelector('#graph');
    const canvas = document.querySelector('#canvas');
    this.effectInstance = new ParticleEffect(canvas, {
      width: graph.clientWidth,
      height: graph.clientHeight,
      particleNumber: 180,
      background: '#000000',
      speed: 1.4,
      lineDistance: 100,
      lineColor: '110, 110, 110',
      interactive: false,
    });
    this.effectInstance.animate();

    window.addEventListener('resize', this.windowResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.windowResize);
    this.effectInstance.destory();
  },
};
</script>

<style lang="less" scoped>
.aa {
  color: #7d7272;
}
</style>
