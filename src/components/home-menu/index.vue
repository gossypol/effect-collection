<template>
  <div class="home-menu">
    <div
      v-for="menuItem in menuList"
      :key="menuItem.path"
      :class="`home-menu__item ${menuItem.path === currentPath ? 'home-menu__item_active' : ''}`"
      @click="handleLink(menuItem.path)"
    >
      {{menuItem.name}}
    </div>
  </div>
</template>

<script>
import menuList from './menu-list';

export default {
  name: 'HomeMenu',
  data() {
    return {
      menuList,
      currentPath: this.$route.path,
    };
  },
  watch: {
    $route() {
      this.currentPath = this.$route.path;
    },
  },
  methods: {
    handleLink(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.home-menu {
  width: 100%;
  height: 100vh;
  padding: 8px 16px;
  background: #111827;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #cccccc;

  &__item {
    height: 32px;
    line-height: 32px;
    border-radius: 4px;
    background: #C4B5FD;
    cursor: pointer;
    user-select: none;
    text-align: center;
    font-size: 14px;
    color: #27272A;
    margin-bottom: 8px;
    transition: all 0.2s linear;
  }

  &__item:last-child {
    margin-bottom: 0;
  }

  &__item:hover,
  &__item_active {
    background: #6D28D9;
    color: #FFFFFF;
    box-shadow: 0px 3px 8px 0px rgba(74, 129, 254, 0.3);
  }
}
</style>
