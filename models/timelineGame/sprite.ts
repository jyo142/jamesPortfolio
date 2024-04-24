export class Sprite {
  public position;
  public image;
  public loaded;
  public width;
  public height;
  public frameRate;
  public currentFrame;
  public elapsedFrames;
  public frameBuffer;
  public loop;
  public autoplay;
  public animations;
  public currentAnimation;
  constructor({
    position,
    imageSrc,
    frameRate = 1,
    frameBuffer = 2,
    loop = true,
    autoplay = true,
    animations = null,
  }) {
    this.position = position;
    this.image = new Image();
    this.frameRate = frameRate;
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
    this.animations = animations;
    this.loop = loop;
    this.autoplay = autoplay;
    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
      }
    }
  }
  draw(ctx: any) {
    if (!this.loaded) {
      return;
    }
    const cropBox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };
    ctx.drawImage(
      this.image,
      cropBox.position.x,
      cropBox.position.y,
      cropBox.width,
      cropBox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.updateFrames();
  }

  play() {
    this.autoplay = true;
  }

  updateFrames() {
    if (!this.autoplay) {
      return;
    }
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++;
      } else if (this.loop) {
        this.currentFrame = 0;
      }
    }

    if (this.currentAnimation?.onComplete) {
      if (
        this.currentFrame === this.frameRate - 1 &&
        !this.currentAnimation.isActive
      ) {
        this.currentAnimation.onComplete();
        this.currentAnimation.isActive = true;
      }
    }
  }
}
