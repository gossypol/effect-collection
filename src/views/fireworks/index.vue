<template>
  <div class="graph" id="graph">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import Firework from './firework';

export default {
  data() {
    return {
      instance: null,
    };
  },
  mounted() {
    const canvas = document.querySelector('#canvas');
    const graph = document.querySelector('#graph');

    this.instance = new Firework(canvas, {
      width: graph.clientWidth,
      height: graph.clientHeight,
      fires: 160,
    });
    this.instance.animate();
  },

  beforeDestroy() {
    this.instance.stopAnimate();
  },
};
</script>

<style lang="less" scoped></style>
