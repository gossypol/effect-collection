<template>
  <div class="graph player">
    <video class="background-video" :src="scene" autoplay muted loop></video>
    <div class="box">
      <div class="box__wrap">
        <div class="video-wrap">
          <video class="video" :src="scene" autoplay muted loop></video>
        </div>
        <div class="video-wrap">
          <video class="video" :src="scene" autoplay muted loop></video>
        </div>
        <div class="video-wrap">
          <video class="video" :src="scene" autoplay muted loop></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scene from '@/assets/videos/scene.mp4';

export default {
  data() {
    return {
      scene,
    };
  },
};
</script>

<style lang="less" scoped>
.player {
  background: #000000;
  position: relative;

  .box {
    width: 400px;
    height: 400px;
    position:  absolute;
    top: calc(50% - 138px);
    left: calc(50% - 184px);
    transform:
      rotateX(-18deg) rotateY(17deg)
      translate3d(12px, -34px, -86px);/* 旋转正方体在空间中的位置及投影，前两个参数控制投影，第三个参数控制空间位置 */
    transform-style: preserve-3d; /* 表示所有子元素在3D空间呈现 */

    &__wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;

      .video-wrap {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 1);
        background: #CCCCCC;

        .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .video-wrap:nth-child(1) {
        transform: rotateX(0deg) translate3d(0, 0, 200px);
      }

      .video-wrap:nth-child(2) {
        transform: rotateX(-90deg) translate3d(0, 0, -200px);
      }

      .video-wrap:nth-child(2) .video {
        transform: rotateX(180deg);
      }

      .video-wrap:nth-child(3) {
        transform: rotateY(-90deg) translate3d(0, 0, 200px);
      }
    }
  }

  .background-video {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px);
  }
}
</style>
