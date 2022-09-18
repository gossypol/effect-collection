<!-- 液体加载效果 -->

<template>
  <div class="graph liquid-loading">
    <div class="loading">
      <span style="--i: 1;"></span>
      <span style="--i: 2;"></span>
      <span style="--i: 3;"></span>
      <span style="--i: 4;"></span>
      <span style="--i: 5;"></span>
      <span style="--i: 6;"></span>
      <span style="--i: 7;"></span>
    </div>
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
        " />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.liquid-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #010B10;

  .loading {
    position: relative;
    width: 200px;
    height: 200px;
    filter: url(#gooey);

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      animation: animate 4s ease-in-out infinite;
      animation-delay: calc(0.2s * var(--i));
    }

    span::before {
      content: " ";
      position: absolute;
      top: 0;
      left: calc(50% - 20px);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 0 30px #03A9F4;
      background: linear-gradient(#FCE4EC, #03A9F4);
    }
  }

  svg {
    width: 0;
    height: 0;
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
