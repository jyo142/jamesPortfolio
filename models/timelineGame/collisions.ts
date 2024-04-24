export class CollisionBlock {
  public position;
  public width;
  public height;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw(ctx: any) {
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export const collisionsLevel1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export const collisionsLevel2 = [
  292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0,
  0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 0, 0,
  292, 292, 292, 292, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0, 0,
  292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0,
];
const parse2D = (data: number[]): number[][] => {
  const result = [];
  for (let i = 0; i < data.length; i += 16) {
    result.push(data.slice(i, i + 16));
  }
  return result;
};

export const getCollisionBlocks = (data: number[]): CollisionBlock[] => {
  const parsed2D = parse2D(data);
  const result: CollisionBlock[] = [];
  parsed2D.forEach((row, rowIndex) => {
    row.forEach((symbol, columnIndex) => {
      if (symbol === 292) {
        result.push(
          new CollisionBlock({
            position: {
              x: columnIndex * 64,
              y: rowIndex * 64,
            },
          })
        );
      }
    });
  });
  return result;
};
