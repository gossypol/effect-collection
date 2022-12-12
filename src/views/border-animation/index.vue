<template>
  <div class="graph">
    <div class="button">按钮</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.graph {
  background: #1D1D1D;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    width: 200px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    color: #FED75A;
    cursor: pointer;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: block;
      border: 1px solid #FED75A;
      transition: clip-path 0.4s ease-in-out;
    }

    &::before {
      clip-path: inset(0 170px 70px 0);
    }

    &::after {
      clip-path: inset(70px 0 0 170px);
    }

    &:hover {
      &::before,
      &::after {
        clip-path: inset(0 0 0 0);
      }
    }
  }
}
</style>
