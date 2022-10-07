<template>
  <div class="scratch">
    <button class="button" @click="handleReset">重置</button>
    <div class="ticket-wrap">
      <canvas
        id="ticket"
        :width="canvasWidth * radio"
        :height="canvasHeight * radio"
        :style="{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
        }"
      ></canvas>
    </div>
  </div>
</template>

<script>
import prizeImg from './prize.png';
import thanksImg from './thanks.png';

export default {
  data() {
    return {
      canvasWidth: 600,
      canvasHeight: 200,
      radio: window.devicePixelRatio || 1,

      canvas: null,
      ctx: null,
      penSize: 20,
    };
  },

  methods: {
    writeText() {
      this.ctx.font = `${52 * this.radio}px bold Helvetica`;
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('刮刮乐', this.canvasWidth * this.radio / 2, this.canvasHeight * this.radio / 2);
    },

    drawCoating() {
      this.ctx.fillStyle = '#CCCCCC';
      this.ctx.fillRect(0, 0, this.canvasWidth * this.radio, this.canvasHeight * this.radio);
    },

    setBackground() {
      const img = Math.random() > 0.35 ? thanksImg : prizeImg;
      this.canvas.style.backgroundImage = `url(${img})`;
    },

    canvasMousedown(e) {
      const { offsetX, offsetY } = e;
      this.ctx.moveTo(offsetX * this.radio, offsetY * this.radio);
    },

    canvasMousemove(e) {
      const { offsetX, offsetY } = e;
      const cx = (offsetX - this.penSize / 2) * this.radio;
      const cy = (offsetY - this.penSize / 2) * this.radio;
      this.ctx.clearRect(cx, cy, this.penSize * this.radio, this.penSize * this.radio);
    },

    handleReset() {
      this.ctx.clearRect(0, 0, this.canvasWidth * this.radio, this.canvasHeight * this.radio);
      this.setBackground();
      this.drawCoating();
      this.writeText();
    },
  },

  mounted() {
    this.canvas = document.querySelector('#ticket');
    this.ctx = this.canvas.getContext('2d');

    this.handleReset();

    this.canvas.addEventListener('mousedown', (e) => {
      this.canvasMousedown(e);

      this.canvas.addEventListener('mousemove', this.canvasMousemove);
    });

    this.canvas.addEventListener('mouseup', () => {
      this.canvas.removeEventListener('mousemove', this.canvasMousemove);
    });
  },
};
</script>

<style lang="less" scoped>
.scratch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;

  .ticket-wrap {
    width: 602px;
    height: 202px;
    border: 1px solid #CCCCCC;

    canvas {
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .button {
    padding: 8px 24px;
    margin-bottom: 60px;
  }
}
</style>
