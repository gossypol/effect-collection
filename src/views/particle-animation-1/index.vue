<template>
  <div id="graph" class="graph">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import Particle from './particle';

export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      particleNum: 100, // 粒子数量
      lineDistance: 100,
      color: '255, 255, 255',
      partcles: [], // 粒子集合
      interactionParticle: null,
    };
  },
  methods: {
    // 获取随机粒子
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },

    // 创建粒子
    createParticles(nums) {
      for (let i = 0; i < nums; i += 1) {
        const size = this.getRandomArbitrary(2, 4);
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        const velocityX = this.getRandomArbitrary(-2, 2);
        const velocityY = this.getRandomArbitrary(-2, 2);
        const color = `rgba(${this.color}, ${1 - size / 3})`;
        this.partcles.push(new Particle(this.canvas, x, y, velocityX, velocityY, size, color));
      }
    },

    animate() {
      requestAnimationFrame(this.animate);
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.partcles.forEach((particle) => {
        particle.update();
      });
      this.connect();
    },

    connect() {
      for (let i = 0; i < this.partcles.length; i += 1) {
        for (let j = 0; j < this.partcles.length; j += 1) {
          const p1 = this.partcles[i];
          const p2 = this.partcles[j];
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (distance < this.lineDistance) {
            this.ctx.strokeStyle = `rgba(${this.color}, ${1 - distance / this.lineDistance})`; // 距离越远透明度越低
            this.ctx.beginPath();
            this.lineWidth = 0.8;
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
          }
        }
      }
    },
  },
  mounted() {
    const radio = window.devicePixelRatio;
    console.log(radio);
    const graph = document.querySelector('#graph');
    const canvas = document.querySelector('#canvas');
    canvas.width = graph.clientWidth * radio;
    canvas.height = graph.clientHeight * radio;
    canvas.style.width = `${graph.clientWidth}px`;
    canvas.style.height = `${graph.clientHeight}px`;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(radio, radio);
    this.createParticles(this.particleNum);
    this.animate();
  },
};
</script>

<style lang="less" scoped>

</style>
