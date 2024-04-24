"use client";

import { Sprite } from "./sprite";

export class Player extends Sprite {
  public position;
  public sides;
  public velocity;
  public gravity;
  public collisionBlocks;
  public hitbox;
  public lastDirection;
  public preventInput;
  constructor({
    position,
    collisionBlocks,
    imageSrc,
    frameRate,
    animations,
    loop = true,
    preventInput = false,
  }) {
    super({
      imageSrc,
      position,
      frameRate,
      animations,
      loop,
    });
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;
    this.collisionBlocks = collisionBlocks;
    this.lastDirection = "right";
    this.preventInput = preventInput;
  }

  checkForHorizontalCollisions() {
    for (const curCollision of this.collisionBlocks) {
      if (
        this.hitbox.position.x <=
          curCollision.position.x + curCollision.width &&
        this.hitbox.position.x + this.hitbox.width >= curCollision.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          curCollision.position.y &&
        this.hitbox.position.y <= curCollision.position.y + curCollision.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.x < 0) {
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x =
            curCollision.position.x + curCollision.width - offset + 0.01;
          break;
        }

        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = curCollision.position.x - offset - 0.01;
          break;
        }
      }
    }
  }
  checkForVerticalCollisions() {
    for (const curCollision of this.collisionBlocks) {
      if (
        this.hitbox.position.x <=
          curCollision.position.x + curCollision.width &&
        this.hitbox.position.x + this.hitbox.width >= curCollision.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          curCollision.position.y &&
        this.hitbox.position.y <= curCollision.position.y + curCollision.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y =
            curCollision.position.y + curCollision.height - offset + 0.01;
          break;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = curCollision.position.y - offset - 0.01;
          break;
        }
      }
    }
  }
  applyGravity() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }
  update(ctx: any) {
    // ctx.fillStyle = "rgba(0,0,255, 0.5)";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.position.x += this.velocity.x;
    this.updateHitbox();
    this.checkForHorizontalCollisions();
    this.applyGravity();

    this.updateHitbox();
    this.checkForVerticalCollisions();
  }

  handleInput(keys: any) {
    if (this.preventInput) {
      return;
    }
    this.velocity.x = 0;
    if (keys.d.pressed) {
      this.switchSprite("runRight");
      this.velocity.x = 5;
      this.lastDirection = "right";
    } else if (keys.a.pressed) {
      this.switchSprite("runLeft");
      this.velocity.x = -5;
      this.lastDirection = "left";
    } else {
      if (this.lastDirection === "left") {
        this.switchSprite("idleLeft");
      } else {
        this.switchSprite("idleRight");
      }
    }
  }
  switchSprite(name: string) {
    if (this.image === this.animations[name].image) {
      return;
    }
    this.currentFrame = 0;
    const curAnimations = this.animations[name];
    this.image = curAnimations.image;
    this.frameRate = curAnimations.frameRate;
    this.frameBuffer = curAnimations.frameBuffer;
    this.loop = curAnimations.loop;
    this.currentAnimation = curAnimations;
  }
  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 58,
        y: this.position.y + 34,
      },
      width: 50,
      height: 53,
    };
  }
}
