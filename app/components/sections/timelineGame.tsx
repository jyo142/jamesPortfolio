"use client";
import { createContext, Fragment, useEffect, useRef, useState } from "react";
import { Player } from "@/models/timelineGame/player";
import { Sprite } from "@/models/timelineGame/sprite";
import {
  collisionsLevel1,
  getCollisionBlocks,
} from "@/models/timelineGame/collisions";
import gsap from "gsap";
import { getLevel, LevelModel } from "@/models/timelineGame/levels";

const TimelineGame = () => {
  const canvasRef = useRef(null);
  let level = 1;
  //   let bottom = y + 100;
  const onCompleteLevel = () => {
    gsap.to(overlay, {
      opacity: 1,
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
        });
        curLevel = getLevel(level + 1, onCompleteLevel);
        player = curLevel.player;
      },
    });
  };
  let curLevel: LevelModel = getLevel(level, onCompleteLevel);
  let player = curLevel.player;

  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  };

  const overlay = {
    opacity: 0,
  };
  const draw = (ctx: any, frameCount: number) => {
    const canvas = canvasRef.current;
    curLevel.backgroundLevel.draw(ctx);
    for (const curCollisionBlock of curLevel.collisionBlocks) {
      curCollisionBlock.draw(ctx);
    }
    for (const curDoor of curLevel.doors) {
      curDoor.draw(ctx);
    }

    player.handleInput(keys);
    player.draw(ctx);
    player.update(ctx);
    ctx.fillStyle = "black";

    ctx.save();
    ctx.globalAlpha = overlay.opacity;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  };

  const handleUserKeyPressDown = (event: any) => {
    if (player.preventInput) {
      return;
    }
    switch (event.key) {
      case "w":
        for (let i = 0; i < curLevel.doors.length; i++) {
          const curDoor = curLevel.doors[i];
          if (
            player.hitbox.position.x + player.hitbox.width <=
              curDoor.position.x + curDoor.width &&
            player.hitbox.position.x >= curDoor.position.x &&
            player.hitbox.position.y + player.hitbox.height >=
              curDoor.position.y &&
            player.hitbox.position.y <= curDoor.position.y + curDoor.height
          ) {
            player.velocity.x = 0;
            player.velocity.y = 0;
            player.switchSprite("enterDoor");
            curDoor.play();
            player.preventInput = true;
            return;
          }
        }
        if (player.velocity.y === 0) {
          player.velocity.y = -20;
        }
        break;
      case "a":
        keys.a.pressed = true;

        break;
      case "d":
        keys.d.pressed = true;
        break;
    }
  };
  const handleUserKeyPressUp = (event: any) => {
    switch (event.key) {
      case "a":
        keys.a.pressed = false;
        break;
      case "d":
        keys.d.pressed = false;
        break;
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId: any;
    //Our draw came here
    const render = () => {
      frameCount++;

      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    window.addEventListener("keydown", handleUserKeyPressDown);
    window.addEventListener("keyup", handleUserKeyPressUp);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPressDown);
      window.removeEventListener("keyup", handleUserKeyPressUp);

      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return <canvas ref={canvasRef} width={1000} height={500} />;
};

export default TimelineGame;
