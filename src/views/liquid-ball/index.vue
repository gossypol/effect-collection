<template>
  <div class="graph wrap">
    <div class="ball">
      <div class="liquid"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(95, 95, 250) 10%, rgba(3, 3, 110));

  .ball {
    width: 220px;
    height: 220px;
    border: 3px solid darkturquoise;
    border-radius: 50%;
    position: relative;

    .liquid {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: darkturquoise;
      overflow: hidden;
    }

    .liquid::before {
      content: "";
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -60%);
      border-radius: 40%;
      animation: wave  5s linear infinite;
    }

    .liquid::after {
      content: "liquid ball";
      position: absolute;
      left: 50%;
      top: 30px;
      color: darkturquoise;
      transform: translateX(-50%);
    }
  }
}

@keyframes wave {
  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}
</style>
