<template>
  <div class="graph intersecting">
    <div class="container">
      <div class="ring ring1"></div>
      <div class="ring ring2"></div>
    </div>
    <author-message
      bottom="40px"
      right="30px"
      name="Online Tutorials"
      link="https://www.youtube.com/@OnlineTutorialsYT"
      color="#FFFFFF"
    ></author-message>
  </div>
</template>

<script>
import AuthorMessage from '@/components/author-message/index.vue';

export default {
  components: {
    AuthorMessage,
  },
};
</script>

<style lang="less" scoped>
@green:  #1AA849;
@red: #C52427;

.intersecting {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;

  .container {
    position: relative;
    display: flex;

    .ring {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border-width: 22px;
      border-style: solid;
      position: relative;
    }

    .ring1 {
      border-color: @green;
      left: 60px;
    }

    .ring1::before {
      content: " ";
      box-sizing: border-box;
      position: absolute;
      inset: -22px; // 相当于 left: -22px right: -22px top: -22px bottom: -22px
      border-radius: 50%;
      border: 22px solid transparent;
      border-top: 22px solid @green;
      border-right: 22px solid @green;
      transform: rotate(-45deg);
      z-index: 2;
    }

    .ring1::after {
      content: " ";
      box-sizing: border-box;
      position: absolute;
      inset: -22px;
      border-radius: 50%;
      border: 22px solid transparent;
      border-right: 22px solid #000000;
      transform: rotate(-65deg);
      z-index: 1;
      filter: blur(15px);
    }

    .ring2 {
      border-color: @red;
    }

    .ring2::before {
      content: " ";
      box-sizing: border-box;
      position: absolute;
      inset: -22px;
      border-radius: 50%;
      border: 22px solid transparent;
      border-left: 22px solid @red;
      border-bottom: 22px solid @red;
      transform: rotate(-45deg);
      z-index: 2;
    }

    .ring2::after {
      content: " ";
      box-sizing: border-box;
      position: absolute;
      inset: -22px;
      border-radius: 50%;
      border: 22px solid transparent;
      border-left: 22px solid #000000;
      transform: rotate(-65deg);
      z-index: 1;
      filter: blur(15px);
    }
  }
}
</style>
