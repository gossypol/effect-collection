<template>
  <div class="home">
    <div class="home__menu">
      <home-menu></home-menu>
    </div>
    <div class="home__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeMenu from '@/components/home-menu/index.vue';

export default {
  components: {
    HomeMenu,
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;

  &__menu {
    width: 220px;
  }

  &__container {
    flex: 1;
    overflow: hidden;
  }
}
</style>
