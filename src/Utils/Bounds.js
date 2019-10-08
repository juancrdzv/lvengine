export class Bounds {
  constructor(x, y, w, h) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
  }

  interSect(rect) {
    if (
      this.x < rect.x + rect.width &&
      this.x + this.width > rect.x &&
      this.y < rect.y + rect.height &&
      this.height + this.y > rect.y
    ) {
      return true;
    }
    return false;
  }
}
