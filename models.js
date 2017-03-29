class Region {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Shrine {
  constructor(id, name, region, x, y) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.x = x;
    this.y = y;
  }
}