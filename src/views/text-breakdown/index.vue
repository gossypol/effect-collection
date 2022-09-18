<template>
  <div class="graph breakdown">
    <span class="text" :data-content="text">
      {{ text }}
      <span class="line"></span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'The Effect of TextBreakdown!',
    };
  },
};
</script>

<style lang="less" scoped>
.breakdown {
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    font-family: Helvetica;
    font-size: 36px;
    user-select: none;
    position: relative;
  }

  .text::before,
  .text::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    overflow: hidden;
    filter: contrast(200%);
    user-select: none;
  }

  .text::before {
    left: 0.5px;
    width: 100%;
    height: 0px;
    color: rgba(0, 0, 0, 0.9);
    z-index: 2;
    animation: breakColor 1s ease-in infinite;
    text-shadow: 0px 0px 1px #dc2626;
  }

  .text::after {
    left: -3px;
    height: 36px;
    color: rgba(0, 0, 0, 0.8);
    z-index: 3;
    background: rgba(255, 255, 255, 0.9);
    animation: breakMask 1.5s ease-out infinite;
  }

  .line {
    position: absolute;
    left: 0;
    top: 15px;
    width: 100%;
    height: 3px;
    background: #ffffff;
    z-index: 4;
    animation: line 3s ease-out infinite;
  }
}

@keyframes breakColor {
  20% {
    height: 32px;
  }

  60% {
    height: 6px;
  }

  100% {
    height: 40px;
  }
}

@keyframes breakMask {
  20% {
    height: 42px;
  }

  35% {
    height: 12px;
  }

  50% {
    height: 40px;
  }

  60% {
    height: 20px;
  }

  70% {
    height: 34px;
  }

  80% {
    height: 22px;
  }

  100% {
    height: 0px;
  }
}

@keyframes line {
  8% {
    top: 38px;
  }

  10% {
    top: 8px;
  }

  12% {
    top: 42px;
  }

  99% {
    top: 36px;
  }
}
</style>
