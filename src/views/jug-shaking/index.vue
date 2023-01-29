<template>
  <div class="graph flex-center wrapper">
    <div class="bottle">
      <div class="water"></div>
    </div>
    <div class="bottle-shadow"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
  background: #000000;

  .bottle {
    width: 300px;
    height: 300px;
    background: #FFFFFF1A;
    border-radius: 50%;
    position: relative;
    animation: bottle-animation 3s linear infinite;
    transform-origin: bottom center;
  }

  @keyframes bottle-animation {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
      filter: hue-rotate(360deg); // 变色
    }
  }

  .bottle::after {
    content: " ";
    display: block;
    width: 150px;
    height: 60px;
    border-radius: 70%;
    position: absolute;
    background: #505250;
    left: 50%;
    top: -5px;
    transform: translate(-50%);
    box-shadow: 0 10px 5px #000000;
  }

  .water {
    position: absolute;
    left: 10px;
    top: 50%;
    right: 10px;
    bottom: 10px;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    background: #41C1FB;
    transform-origin: top center;
    filter: drop-shadow(0 0 80px #41C1FB);
    animation: water-animation 3s linear infinite;
  }

  @keyframes water-animation {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  .water::before {
    display: block;
    content: " ";
    width: 100%;
    height: 20px;
    background: #0DA2E7;
    border-radius: 50%;
    position: absolute;
    top: -10px;
  }

  .bottle-shadow {
    width: 300px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: calc(50% + 152px);
    background: rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    border-radius: 50%;
  }
}
</style>
