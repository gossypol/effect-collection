<template>
  <section
    class="author-message"
    :style="{
      top,
      left,
      right,
      bottom,
      color,
    }"
  >
    <p v-if="name" class="author-message__name">作者: {{name}}</p>
    <p v-if="email" class="author-message__email">邮箱: {{email}}</p>
    <a v-if="link" class="author-message__link" :href="link" target="_blank">{{link}}</a>
    <!-- <a v-if="link" class="author-message__link">{{link}}</a> -->
  </section>
</template>

<script>
export default {
  props: {
    left: String,
    top: String,
    right: String,
    bottom: String,

    color: {
      type: String,
      default: '#27272A',
    },

    name: {
      type: String,
      default: '',
    },

    email: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
.author-message {
  position: absolute;
  font-family: Helvetica;

  &__name {
    font-size: 14px;
    line-height: 22px;
  }

  &__email,
  &__link {
    font-size: 12px;
    line-height: 18px;
  }

  &__link:hover {
    color: @color-blue;
  }
}
</style>
