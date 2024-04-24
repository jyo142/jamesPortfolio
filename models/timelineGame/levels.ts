import {
  CollisionBlock,
  collisionsLevel1,
  collisionsLevel2,
  getCollisionBlocks,
} from "./collisions";
import { Player } from "./player";
import { Sprite } from "./sprite";

export interface LevelModel {
  backgroundLevel: Sprite;
  collisionBlocks: CollisionBlock[];
  doors: Sprite[];
  player: Player;
}

export const getLevel = (
  level: number,
  onCompleteLevel: () => void
): LevelModel => {
  let levels: { [key: number]: LevelModel } = {
    1: {
      backgroundLevel: new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "/game/backgroundLevel1.png",
      }),
      collisionBlocks: getCollisionBlocks(collisionsLevel1),
      doors: [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: "/game/doorOpen.png", // Corrected the path
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ],
      player: new Player({
        position: { x: 200, y: 200 },
        collisionBlocks: getCollisionBlocks(collisionsLevel1),
        imageSrc: "./game/king/idle.png",
        frameRate: 11,
        animations: {
          idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./game/king/idle.png",
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./game/king/idleLeft.png",
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 5,
            loop: true,
            imageSrc: "./game/king/runRight.png",
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 5,
            loop: true,
            imageSrc: "./game/king/runLeft.png",
          },
          enterDoor: {
            frameRate: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "./game/king/enterDoor.png",
            onComplete: () => {
              onCompleteLevel();
            },
          },
        },
      }),
    },
    2: {
      backgroundLevel: new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "/game/backgroundLevel2.png",
      }),
      collisionBlocks: getCollisionBlocks(collisionsLevel2),
      doors: [
        new Sprite({
          position: {
            x: 782,
            y: 336,
          },
          imageSrc: "/game/doorOpen.png", // Corrected the path
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ],
      player: new Player({
        position: { x: 96, y: 140 },
        collisionBlocks: getCollisionBlocks(collisionsLevel2),
        imageSrc: "./game/king/idle.png",
        frameRate: 11,
        animations: {
          idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./game/king/idle.png",
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: "./game/king/idleLeft.png",
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 5,
            loop: true,
            imageSrc: "./game/king/runRight.png",
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 5,
            loop: true,
            imageSrc: "./game/king/runLeft.png",
          },
          enterDoor: {
            frameRate: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "./game/king/enterDoor.png",
            onComplete: () => {
              onCompleteLevel();
            },
          },
        },
      }),
    },
  };
  return levels[level];
};
