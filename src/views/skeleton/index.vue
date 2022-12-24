<template>
  <div class="graph skeleton">
    <div class="skeleton__card">
      <div class="image">
        <img :src="image" alt="image">
      </div>
      <div class="content">
        <h4>这是一个标题</h4>
        <div class="description">
          你们所多的是生力，遇见深林，可以辟成平地的，遇见矿野，可以栽种树木的，遇见沙漠，可以开掘井泉的。
        </div>
      </div>
    </div>

    <div class="skeleton__card skeleton__loading">
      <div class="image"></div>
      <div class="content">
        <h4></h4>
        <div class="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/images/scenery-2.jpg';

export default {
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="less" scoped>
@grey: #ededed;

.skeleton {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #F6F6F6;
  font-family: Helvetica;
  font-size: 15px;

  &__card {
    width: 320px;
    background-color: #FFFFFF;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);

    .image {
      height: 200px;

      img {
        display: block;
        width: 100%;
        height: inherit;
        object-fit: cover;
      }
    }

    .content {
      padding: 2rem 1.8rem;

      h4 {
        margin: 0 0 1rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }

      .description {
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }
  }

  &__loading {
    .image,
    h4,
    .description {
      background-color: @grey;
      // 利用 linear-gradient 做出光线效果
      background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      ) @grey;
      background-size: 200% 100%;
      background-position-x: 140%;
      animation: loading 1s ease-in-out infinite;
    }

    h4 {
      min-height: 1.6rem;
      border-radius: 4px;
      animation-delay: 0.05s; // 加延迟是为了使光线看起来是一条
    };

    .description {
      min-height: 4rem;
      border-radius: 4px;
      animation-delay: 0.06s; // 加延迟是为了使光线看起来是一条
    }
  }

  @keyframes loading {
    to {
      background-position-x: -20%;
    }
  }
}
</style>
