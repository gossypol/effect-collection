<template>
  <div class="graph text-effects-1">
    <div id="text" class="text">The Effects of Text.</div>

    <button data-animation="jump">跳跃(Jump)</button>
    <button data-animation="pop">放大(Pop)</button>
    <button data-animation="flip">翻转(Flip)</button>
    <button data-animation="blink">闪烁(Blink)</button>
  </div>
</template>

<script>
export default {
  mounted() {
    const text = document.querySelector('#text');
    text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

    text.querySelectorAll('span').forEach((span, spanIndex) => {
      span.style.setProperty('--delay', `${spanIndex * 0.1}s`);
    });

    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', (e) => {
        text.style.setProperty('--animation', e.target.getAttribute('data-animation'));

        text.classList.remove('animate');

        // 移除类名再立即加上，浏览器会认为页面没有改变，不会重新渲染页面，导致再次点击没有动画效果
        // 这里用查询 offsetWidth 强制触发回流(reflow)，正式项目中应该选择其他性能更好的做法
        // eslint-disable-next-line no-void
        void text.offsetWidth;

        text.classList.add('animate');
      });
    });
  },
};
</script>

<style lang="less">
.text-effects-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;

  button {
    padding: 4px 10px;
    margin-bottom: 10px;
  }

  .text {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 40px;

    span {
      display: inline-block;
    }
  }

  .animate span {
    animation-name: var(--animation);
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-delay: var(--delay);
  }
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes pop {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }
}

@keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(90deg);
  }
}

@keyframes blink {
  0%, 100% {
    color: inherit;
  }

  50% {
    color: #FACC15;
  }
}
</style>
