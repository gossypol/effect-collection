<template>
  <div id="sun-and-moon" class="graph sun-and-moon">
    <div class="sun"></div>
    <div class="moon"></div>
    <div class="sea"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrap: null,
    };
  },
  methods: {
    onMousemove(e) {
      const percentage = 100 - e.offsetX / this.wrap.clientWidth * 100;
      document.querySelector('.sun').style.clipPath = `inset(0px ${percentage}% 0px 0px)`;
    },
  },
  mounted() {
    this.wrap = document.querySelector('#sun-and-moon');
    this.wrap.addEventListener('mousemove', this.onMousemove);
  },
  beforeDestroy() {
    this.wrap.removeEventListener('mousemove', this.onMousemove);
  },
};
</script>

<style lang="less" scoped>
.sun-and-moon {
  .sun {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFEEA2;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    clip-path: inset(0px 50% 0px 0px);
  }

  .sun::after {
    content: "";
    display: block;
    width: 600px;
    height: 600px;
    background-color: orange;
    border-radius: 50%;
  }

  .moon {
    position: absolute;
    background-color: #040720;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .moon::after {
    content: "";
    display: block;
    width: 600px;
    height: 600px;
    box-shadow: 160px 180px 0 cyan;
    border-radius: 50%;
    transform: translate(-160px, -180px);
  }

  .sea {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    backdrop-filter: blur(100px);
    z-index: 2;
  }
}
</style>
