<template>
  <div class="graph streamer-button">
    <div class="tips">鼠标悬浮触发流光效果</div>
    <button class="button">流光按钮</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.streamer-button {
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: relative;

  .tips {
    font-size: 14px;
    margin-bottom: 80px;
    user-select: none;
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }

  .button {
    font-size: 24px;
    background: linear-gradient(90deg, #03A9F4, #F441A5, #FFEB3B, #03A9F4);
    background-size: 400%;
    width: 400px;
    height: 100px;
    color: #FFFFFF;
    border-radius: 50px;
    position: relative;
    z-index: 1;
  }

  .button::after {
    content: " ";
    position: absolute;
    left: -5px;
    top: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, #03A9F4, #F441A5, #FFEB3B, #03A9F4);
    background-size: 400%;
    border-radius: 50px;
    filter: blur(20px);
    z-index: -1;
  }

  .button:hover,
  .button:hover::after {
    animation: flow 8s infinite;
  }
}

@keyframes flow {
  100% {
    background-position: -400% 0;
  }
}
</style>
