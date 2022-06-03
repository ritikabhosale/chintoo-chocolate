class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  translate(offsetX, offsetY) {
    return new Point(this.x + offsetX, this.y + offsetY);
  }
  equals(otherPoint) {
    return otherPoint instanceof Point &&
      this.x === otherPoint.x &&
      this.y === otherPoint.y;
  }
};

exports.Point = Point;
