class ParticleEffect {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.width = options.width || 600;
    this.height = options.height || 600;
    this.particleNumber = options.particleNumber || 100; // 粒子数量
    this.particleColor = options.particleColor || '255, 255, 255'; // 粒子颜色 (rgb 值)
    this.speed = options.speed || 2; // 粒子移动速度
    this.minRadius = options.minRadius || 1; // 粒子的最小半径
    this.maxRadius = options.maxRadius || 3; // 粒子的最大半径
    this.background = options.background || '#000000'; // 画布背景
    this.lineWidth = options.lineWidth || 1; // 线条宽度
    this.lineDistance = options.lineDistance || 120; // 出现连线的最小距离，大于此距离则不会连线
    this.lineColor = options.lineColor || '255, 255, 255'; // 线条颜色 (rgb 值)
    this.interactive = options.interactive || false; // 是否可交互

    this.interactionParticle = null;
    this.animation = null;

    this.radio = window.devicePixelRatio || 1;
    this.ctx = this.canvas.getContext('2d');
    this.setCanvasSize();

    this.particles = []; // 粒子集合
    this.createParticles();

    if (this.interactive) {
      this.canvas.addEventListener('mouseenter', this.mouseEnterEvent.bind(this));
      this.canvas.addEventListener('mousemove', this.mouseMoveEvent.bind(this));
      this.canvas.addEventListener('mouseleave', this.mouseLeaveEvent.bind(this));
    }
  }

  setCanvasSize() {
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.canvas.width = this.width * this.radio;
    this.canvas.height = this.height * this.radio;
    this.ctx.scale(this.radio, this.radio);
  }

  /**
   * @description 创建粒子
   * size: 粒子半径
   * x & y: 粒子的 x y 轴坐标
   * speedX & speedY: 粒子移动速度，正值向右和下移动，负值则向左和上移动
   * color: 粒子颜色，越大颜色透明度越高
   */
  createParticles() {
    for (let i = 0; i < this.particleNumber; i += 1) {
      const size = ParticleEffect.getRandomValue(this.minRadius, this.maxRadius);
      this.particles.push({
        size,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        speedX: ParticleEffect.getRandomValue(-this.speed, this.speed) + 0.05, // 加上 0.05 避免过慢
        speedY: ParticleEffect.getRandomValue(-this.speed, this.speed) + 0.05,
        color: `rgba(${this.particleColor}, ${1 - size / this.maxRadius + 0.05})`,
      });
    }
  }

  /**
   * @description 绘制粒子
   */
  drawParticles() {
    this.particles.forEach((particle, index) => {
      const {
        x, y, color, size,
      } = particle;

      // 到达边缘速度取反使粒子做往返运动
      if (x < 0 || x > this.width) {
        this.particles[index].speedX *= -1;
      }
      this.particles[index].x += this.particles[index].speedX;

      if (y < 0 || y > this.height) {
        this.particles[index].speedY *= -1;
      }
      this.particles[index].y += this.particles[index].speedY;


      this.ctx.beginPath();
      this.ctx.arc(x, y, size, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
    });
  }

  /**
   * @description 绘制点与点之间的连线，两个循环每次判断两点之间的距离，然后进行绘制线条
   */
  drawLines() {
    for (let i = 0; i < this.particles.length; i += 1) {
      for (let j = 0; j < this.particles.length; j += 1) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)); // 计算两点之间的距离
        if (distance < this.lineDistance) {
          this.ctx.strokeStyle = `rgba(${this.lineColor}, ${1 - distance / this.lineDistance})`; // 距离越远透明度越低
          this.ctx.beginPath();
          this.ctx.lineWidth = this.lineWidth;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
  }

  // 开启动画
  animate() {
    this.animation = window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.width, this.height);
    // 绘制背景
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.drawParticles();
    this.drawLines();
  }

  mouseEnterEvent(e) {
    if (!this.interactionParticle) {
      const { offsetX, offsetY } = e;
      this.interactionParticle = {
        size: this.maxRadius,
        x: offsetX,
        y: offsetY,
        speedX: 0,
        speedY: 0,
        color: `rgba(${this.particleColor}, 1)`,
      };
      this.particles.push(this.interactionParticle);
    }
  }

  mouseMoveEvent(e) {
    if (this.interactionParticle) {
      const { offsetX, offsetY } = e;
      this.interactionParticle.x = offsetX;
      this.interactionParticle.y = offsetY;
    }
  }

  mouseLeaveEvent() {
    this.interactionParticle = null;
    this.particles.pop(this.particles.length - 1);
  }

  // 修改画布尺寸
  resize(width, height) {
    this.width = width || this.width;
    this.height = height || this.height;
    this.setCanvasSize();
    this.particles = [];
    this.createParticles();
  }

  // 卸载
  destory() {
    window.cancelAnimationFrame(this.animation);
    this.canvas.removeEventListener('mouseenter', this.mouseEnterEvent.bind(this));
    this.canvas.removeEventListener('mousemove', this.mouseMoveEvent.bind(this));
    this.canvas.removeEventListener('mouseleave', this.mouseLeaveEvent.bind(this));
  }

  // 获取某个区间的随机数
  static getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
}

export default ParticleEffect;
