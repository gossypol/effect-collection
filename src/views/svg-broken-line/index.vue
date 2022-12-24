<template>
  <div class="graph line">
    <svg id="chart" viewBox="0 0 200 100">
      <!-- 使用 g 标签反转折线，使得其以左下角为原点 -->
      <g id="path-container" transform="translate(0, 100) scale(1, -1)">
        <path
          id="line"
          fill="none"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          :style="`--animation-time: ${animationTime}s`"
        />
      </g>
    </svg>
    <button @click="handleDraw" class="button">重新绘制</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      padding: 15,
      svgWidth: undefined,
      text: 'SVG 折线图',
      dataLength: 7,
      animationTime: 3,
    };
  },
  methods: {
    drawChart() {
      // 创建随机数据
      const lineData = [];
      for (let i = 0; i < this.dataLength; i += 1) {
        const gap = (this.svgWidth - (this.padding * 2)) / (this.dataLength - 1);
        lineData.push({
          data: Math.round((Math.random() * 70 + 10) * 100) / 100,
          x: this.padding + gap * i,
        });
      }

      const chart = document.querySelector('#chart');

      // 绘制折线
      const pathData = lineData.map(item => `${item.x}, ${item.data}`);
      const line = document.querySelector('#line');
      line.setAttribute('d', `M${pathData.join(' ')}`);

      const lineLength = Math.ceil(line.getTotalLength());
      chart.style.setProperty('--line-length', lineLength);

      // 绘制名称
      const textNs = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textNs.setAttribute('text-anchor', 'middle');
      textNs.setAttribute('alignment-baseline', 'middle');
      textNs.setAttribute('x', this.svgWidth / 2);
      textNs.setAttribute('y', 6);
      textNs.setAttribute('font-weight', 'bold');
      textNs.setAttribute('font-size', '4px');
      textNs.setAttribute('fill', '#999999');
      textNs.appendChild(document.createTextNode(this.text));
      chart.appendChild(textNs);

      // 绘制 x 轴 和 圆点
      lineData.forEach((item, index) => {
        // 绘制 x 轴
        const caption = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        caption.setAttribute('text-anchor', 'middle');
        caption.setAttribute('alignment-baseline', 'middle');
        caption.setAttribute('x', item.x);
        caption.setAttribute('y', 96);
        caption.setAttribute('font-weight', 'noraml');
        caption.setAttribute('font-size', '3px');
        caption.setAttribute('fill', '#999999');
        caption.appendChild(document.createTextNode(`数据 0${index + 1}`));
        chart.appendChild(caption);

        // 绘制圆点
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', item.x);
        circle.setAttribute('cy', item.data);
        circle.setAttribute('r', 3);
        circle.setAttribute('stroke', ' #9F3AF0');
        circle.setAttribute('stroke-width', 2);
        circle.setAttribute('fill', '#FFFFFF');
        circle.setAttribute('transform-origin', `${item.x} ${item.data}`);
        circle.style.setProperty('--dealy', `${this.animationTime * index / lineData.length}s`);
        circle.classList.add('point');
        document.querySelector('#path-container').appendChild(circle);

        // 绘制数据值
        const value = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        value.setAttribute('text-anchor', 'middle');
        value.setAttribute('alignment-baseline', 'middle');
        value.setAttribute('x', item.x);
        value.setAttribute('y', item.data - 8);
        value.setAttribute('font-weight', 'noraml');
        value.setAttribute('font-size', '3px');
        value.setAttribute('fill', '#999999');
        value.setAttribute('transform', `translate(0, ${item.data * 2}) scale(1, -1)`);
        value.appendChild(document.createTextNode(`${item.data}`));
        document.querySelector('#path-container').appendChild(value);
      });

      chart.classList.add('animate');
    },

    handleDraw() {
      const chart = document.querySelector('#chart');
      chart.classList.remove('animate');
      while (chart.children.length > 1) {
        chart.children[chart.children.length - 1].remove();
      }
      const pathContainer = document.querySelector('#path-container');
      while (pathContainer.children.length > 1) {
        pathContainer.children[pathContainer.children.length - 1].remove();
      }
      this.drawChart();
    },
  },

  mounted() {
    this.startX = this.padding;
    this.svgWidth = document.querySelector('#chart').viewBox.baseVal.width;
    this.drawChart();
  },
};
</script>

<style lang="less" scoped>
.line {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  flex-direction: column;

  #chart {
    background-color: #F6F6F6;
    width: 100%;
  }

  #line {
    stroke: #9F3AF0;
    stroke-dasharray: var(--line-length);
    stroke-dashoffset: var(--line-length);
  }

  @keyframes animate-line {
    from {
      stroke-dashoffset: var(--line-length);
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes zoom-in {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #chart.animate #line {
    animation: var(--animation-time) animate-line linear;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }

  /deep/.point {
    opacity: 0;
  }

  /deep/#chart.animate .point {
    animation: 0.5s fade-in linear, 0.5s zoom-in linear;
    animation-fill-mode: forwards;
    animation-delay: var(--dealy);
  }

  .button {
    padding: 8px 12px;
    margin-top: 80px;
  }
}
</style>
