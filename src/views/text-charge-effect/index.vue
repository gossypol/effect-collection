<template>
  <div class="graph charge">
    <div class="charge__description">iPhone 官网文字充电效果</div>
    <h1 :style="`--progress: ${progress}`">Up to 20 hours of buttery life -- the longest in any Mac ever.</h1>
    <div class="charge__buttons">
      <button @click="reset">0%</button>
      <button @click="charge">100%</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },

  methods: {
    charge() {
      if (this.progress < 1) {
        this.progress = parseFloat((this.progress + 0.01).toFixed(2), 10);

        setTimeout(() => {
          this.charge();
        }, 20);
      }
    },

    reset() {
      this.progress = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.charge {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: #FFFFFF;

  h1 {
    --progress: 0;

    color: transparent;
    font-size: 60px;
    font-family: Helvetica;
    margin: 0 auto;
    letter-spacing: -3px;
    width: 400px;
    background-image: linear-gradient(
      #FFFFFF calc(100% - calc(var(--progress) * 100%)),
      #4cd265 calc(100% - calc(var(--progress) * 100%))
    );
    background-clip: text;

    // 这里是使用 clamp 函数，使得当 progress 小于 0.99 的时候为 scale(1), 大于 0.99 的时候 scale(1.3)
    // 比如 progress 为 0.99 时，(0.99 - 0.99) x 200 依然为 0，小于 1，则 scale(1)
    // progress 为 1 时，(1 - 0.99) x 200 则为 2，大于 1.3，则 scale(1.3)
    // clamp 函数使用方法可看 https://developer.mozilla.org/zh-CN/docs/Web/CSS/clamp

    // 这里只是提供了一种思路，其实可以选择使用 js 更加简单的实现
    transform: scale(clamp(1, calc((var(--progress) - 0.99) * 200), 1.3));
    transition: 0.3s transform ease-out;
  }

  &__description {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
  }

  &__buttons {
    position: absolute;
    bottom: 80px;
    padding: 20px;

    button {
      display: inline-block;
      font-size: 32px;
      background: #FFFFFF;
      border: 0;
      padding: 10px 20px;
      border-radius: 12px;
      margin: 0 10px;
    }
  }
}
</style>
