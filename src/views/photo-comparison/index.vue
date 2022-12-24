<!--
如果想要滑动效果更加顺滑
方法一：可以把 max 的值设置大一点，在计算 clip-path 时除以相应的倍数即可; 比如 max = 100, calc(var(--slide) / 10 * 1%;
方法二(更好)：可以设置 input[type=range] 的 step 属性更小，比如 step = 0.1;
-->

<template>
  <div class="graph comparison">
    <div class="tips">拖动黑色滑块查看效果</div>
    <div class="photo" style="--slide: 50;">
      <input
        type="range"
        class="slider"
        min="1"
        max="100"
        step="0.1"
        oninput="this.parentNode.style.setProperty('--slide', `${this.value}`)"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.comparison {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .tips {
    font-size: 24px;
    margin-bottom: 40px;
  }

  .photo {
    --height: 400px;
    --image: url("~@/assets/images/scenery-1.jpg");

    width: 600px;
    height: var(--height);
    overflow: hidden;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: relative;
  }

  .photo::before,
  .photo::after {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    background-image: var(--image);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .photo::before {
    filter: grayscale(100%);
  }

  .photo::after {
    clip-path: inset(0 0 0 calc(var(--slide) * 1%));
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    outline: none;
    margin: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .slider::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: var(--height);
    background: #000000;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    cursor: ew-resize;
  }
}
</style>
