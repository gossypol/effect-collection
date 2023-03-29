export default class Firework {
  canvas = null;

  ctx = null;

  paths = 20; // 烟花数量，路径数量

  firePathList = []; // 烟花路径对象集合

  fires = 160; // 烟花炸开火花数

  fireworkList = []; // 烟花炸开火花对象集合

  background = '#000000';

  animationId = null;

  width = 600;

  height = 400;

  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.paths = options.paths || this.paths;
    this.fires = options.fires || this.fires;
    this.background = options.background || this.background;
    this.width = options.width || this.width;
    this.height = options.height || this.height;

    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    const radio = window.devicePixelRatio || 1;
    this.canvas.width = this.width * radio;
    this.canvas.height = this.height * radio;
    this.ctx.scale(radio, radio);

    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.posi = {
      x: this.width / 2,
      y: this.height / 2,
    };

    // 生成烟花粒子对象集合
    for (let i = 0; i < this.paths; i += 1) {
      const pathObj = {
        x: Math.random() * this.fires / 2 - this.fires / 4 + this.posi.x,
        y: Math.random() * this.fires * 2 + this.height,
        size: Math.random() + 0.5,
        fill: '#FD1FD1',
        vx: Math.random() - 0.5,
        vy: -(Math.random() + 4),
        ax: Math.random() * 0.02 - 0.01,
        far: Math.random() * this.fires + (this.posi.y - this.fires),
      };
      pathObj.base = {
        x: pathObj.x,
        y: pathObj.y,
        vx: pathObj.vx,
      };

      this.firePathList.push(pathObj);
    }
  }

  setFireworkList() {
    this.firePathList.forEach((firePath) => {
      if (firePath.y <= firePath.far) {
        const color = Firework.getRandomColor();
        for (let i = 0; i < this.paths * 5; i += 1) {
          const fireItem = {
            x: firePath.x,
            y: firePath.y,
            size: Math.random() + 1.5,
            fill: color,
            vx: Math.random() * 5 - 2.5,
            vy: Math.random() * -5 + 1.5,
            ay: 0.05,
            alpha: 1,
            life: Math.random(Math.random() * this.fires / 2) + this.fires / 2,
          };
          fireItem.base = {
            life: fireItem.life,
            size: fireItem.size,
          };
          this.fireworkList.push(fireItem);
        }

        firePath.y = firePath.base.y;
        firePath.x = firePath.base.x;
        firePath.vx = firePath.base.vx;
        firePath.ax = Math.random() * 0.02 - 0.01;
      }

      firePath.x += firePath.vx;
      firePath.y += firePath.vy;
      firePath.vx += firePath.ax;
    });

    this.fireworkList.forEach((firework, fireworkIndex) => {
      firework.x += firework.vx;
      firework.y += firework.vy;
      firework.vy += firework.ay;
      firework.alpha = firework.life / firework.base.life;
      firework.size = firework.alpha * firework.base.size;
      firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
      firework.life -= 1;

      if (firework.life <= 0) {
        this.fireworkList.splice(fireworkIndex, 1);
      }
    });
  }

  drawFires() {
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 0.18;
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = 'screen';
    this.ctx.globalAlpha = 1;

    this.fireworkList.forEach((firework) => {
      this.ctx.globalAlpha = firework.alpha;
      this.ctx.beginPath();
      this.ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = firework.fill;
      this.ctx.fill();
    });

    this.firePathList.forEach((firePath) => {
      this.ctx.beginPath();
      this.ctx.arc(firePath.x, firePath.y, firePath.size, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = firePath.fill;
      this.ctx.fill();
    });
  }

  animate() {
    this.setFireworkList();
    this.drawFires();
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  stopAnimate() {
    cancelAnimationFrame(this.animationId);
  }

  static getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
