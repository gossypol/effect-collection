<template>
  <div class="graph spotlight">
    <span :data-spotlight="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 伪元素使用中文 content 可能会导致乱码问题，需要将中文转成 Unicode
      // \6587\5b57\805a\5149\706f\6548\679c\0020\0053\0070\006f\0074\006c\0069\0067\0068\0074
      text: '文字聚光灯效果 Spotlight',
    };
  },
};
</script>

<style lang="less" scoped>
.spotlight {
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #333333;
    font-family: Helvetica;
    font-size: 4em;
    position: relative;
    line-height: 1.2;
  }

  span::after {
    font-family: Helvetica;
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: ellipse(90px 60px at 50% 50%);
    animation: spotlight 5s infinite;
    background-image: url("~@/assets/images/background-1.jpg");
    background-size: 180%;
    background-position: center;
    background-clip: text;
  }
}

@keyframes spotlight {
  0% {
    clip-path: ellipse(90px 60px at 0% 50%);
  }

  50% {
    clip-path: ellipse(90px 60px at 100% 50%);
  }

  100% {
    clip-path: ellipse(90px 60px at 0% 50%);
  }
}
</style>
