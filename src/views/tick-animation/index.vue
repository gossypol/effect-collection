<template>
  <div class="graph tick-animation">

    <span>勾选显示效果</span>
    <input type="checkbox">

    <!--
      transform="rotate(-90, 200, 200)" 以 200 200 为中心旋转 -90 度
    -->
    <svg width="400" height="400">
      <circle
        class="circle"
        fill="none"
        cx="200"
        cy="200"
        r="190"
        stroke="#68E534"
        stroke-width="20"
        stroke-linecap="round"
        transform="rotate(-90, 200, 200)"
      ></circle>
      <polyline
        class="tick"
        fill="none"
        stroke="#68E534"
        stroke-width="24"
        points="88,214 173,284 304,138"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></polyline>
    </svg>
    <div class="tips">操作成功</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tick-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
    cursor: pointer;
  }

  .tips {
    font-family: Helvetica;
    font-size: 36px;
    margin-top: 40px;
    color: #333333;
    opacity: 0;
  }

  input[type="checkbox"]:checked ~ .tips {
    animation: tips 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.95s;
  }

  .circle {
    stroke-dasharray: 1194; // 190 * 2 * π 圆形周长
    stroke-dashoffset: 1194;
  }

  input[type="checkbox"]:checked + svg .circle {
    animation: circle 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  .tick {
    stroke-dasharray: 310;
    stroke-dashoffset: 310;
  }

  input[type="checkbox"]:checked + svg .tick {
    animation: tick 0.7s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.95s;
  }
}

@keyframes circle {
  from {
    stroke-dashoffset: 1194;
  }

  to {
    stroke-dashoffset: 2388;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 310;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes tips {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
