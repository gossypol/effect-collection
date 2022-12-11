<template>
  <div class="graph">
    <div class="container">
      <div class="drop" style="--clr: #FF0F5B">
        <div class="content">
          <h2>01</h2>
          <p>Facing your fears isn’t easy, believe in yourself enough to take the first step .don’t stop ,keep going ,and trust your gut.</p>
        </div>
      </div>
      <div class="drop" style="--clr: #BE01FE">
        <div class="content">
          <h2>02</h2>
          <p>Facing your fears isn’t easy, believe in yourself enough to take the first step .don’t stop ,keep going ,and trust your gut.</p>
        </div>
      </div>
      <div class="drop" style="--clr: #01B4FF">
        <div class="content">
          <h2>03</h2>
          <p>Facing your fears isn’t easy, believe in yourself enough to take the first step .don’t stop ,keep going ,and trust your gut.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.graph {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EFF0F4;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px 60px;

    .drop {
      position: relative;
      width: 350px;
      height: 350px;
      box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
      25px 35px 20px rgba(0, 0, 0, 0.05),
      25px 30px 30px rgba(0, 0, 0, 0.05),
      inset -20px -20px 25px rgba(255, 255, 255, 0.9);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(1) {
        border-radius: 57% 43% 67% 33% e('/') 28% 40% 60% 72%;
      }

      &:nth-child(2) {
        border-radius: 47% 53% 47% 53% e('/') 62% 79% 21% 38%;
      }

      &:nth-child(3) {
        border-radius: 55% 45% 47% 53% e('/') 76% 63% 37% 24%;
      }

      &:hover {
        border-radius: 50%;
      }

      &::before {
        content: "";
        position: absolute;
        width: 35px;
        height: 35px;
        background: #FFFFFF;
        border-radius: 50%;
        top: 50px;
        left: 90px;
        opacity: 0.9;
      }

      &::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background: #FFFFFF;
        border-radius: 50%;
        top: 90px;
        left: 115px;
        opacity: 0.9;
      }

      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 40px;
        gap: 15px;

        h2 {
          width: 80px;
          height: 80px;
          background: #EFF0F4;
          border-radius: 50%;
          box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
          inset -2px -5px 10px rgba(255, 255, 255, 1),
          15px 15px 10px rgba(0, 0, 0, 0.05),
          15px 10px 15px rgba(0, 0, 0, 0.025);
          line-height: 80px;
          text-align: center;
          font-size: 32px;
          color: var(--clr);
        }

        p {
          line-height: 22px;
        }
      }
    }
  }
}
</style>
