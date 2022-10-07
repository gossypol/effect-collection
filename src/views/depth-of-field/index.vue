<template>
  <div class="graph container">
    <div class="container__images">
      <div><img src="./autumn-1.webp"></div>
      <div><img src="./autumn-2.webp"></div>
      <div><img src="./autumn-3.webp"></div>
      <div><img src="./autumn-4.webp"></div>
      <div><img src="./autumn-5.webp"></div>
      <div><img src="./autumn-6.webp"></div>
    </div>
    <div class="container__title">B站 Banner 图片景深对焦效果</div>
    <div class="container__tips">鼠标在 Banner 里移动查看效果</div>

    <author-message
      name="B站 CodingStartup起码课"
      link="https://github.com/stevenlei"
      bottom="20px"
      right="20px"
    ></author-message>
  </div>
</template>

<script>
import AuthorMessage from '@/components/author-message/index.vue';

export default {
  components: {
    AuthorMessage,
  },
  mounted() {
    const images = document.querySelectorAll('.container__images > div > img');
    console.log(images);

    document.querySelector('.container__images').addEventListener('mousemove', (e) => {
      const percentage = e.clientX / window.outerWidth;
      let offset = 10 * percentage;
      const blur = 20 * percentage;

      for (let i = 0; i < images.length; i += 1) {
        offset *= 1.3; // 越后面的图片位移越大

        // 效果：
        // 鼠标左右移动到中间时，第三第四张图片的模糊度最低，趋近于 0；而第二和第五张图片的模糊度会高一点；第一和第六张图片的模糊度最高
        // 鼠标移动到右边时，第六张图片模糊度趋近于 0；越向左边的图片的模糊度就越高
        // 数学公式：y = x^2 * 20;
        const blurValue = Math.pow((i / images.length - percentage), 2) * blur;

        images[i].style.setProperty('--offset', `${offset}px`);
        images[i].style.setProperty('--blur', `${blurValue}px`);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.container {
  font-family: Helvetica;

  &__images {
    width: 100%;
    height: 160px;
    position: relative;
    overflow: hidden;

    --offset: 0px;
    --blur: 2px;

    >div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      >img {
        display: block;
        width: 110%;
        height: 100%;
        object-fit: cover;

        transform: translate(var(--offset));
        filter: blur(var(--blur));
      }
    }
  }


  &__title {
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    margin-top: 200px;
    margin-bottom: 10px;
  }

  &__tips {
    font-size: 18px;
    line-height: 32px;
    text-align: center;
  }
}
</style>
