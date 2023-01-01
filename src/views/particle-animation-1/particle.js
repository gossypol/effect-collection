class Particle {
  constructor(canvas, x, y, velocityX, velocityY, size, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x; // x 轴坐标
    this.y = y; // y 轴坐标
    this.velocityX = velocityX; // x 方向速度
    this.velocityY = velocityY; // y 方向速度
    this.size = size; // 粒子大小
    this.color = color; // 粒子颜色
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, Math.PI * 2, 0);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  // 当粒子到达画布边缘时改变速度为其原来的负值，进行反向运动
  update() {
    if (this.x < 0 || this.x > this.canvas.width) {
      this.velocityX *= -1;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.velocityY *= -1;
    }
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.draw();
  }
}

export default Particle;
