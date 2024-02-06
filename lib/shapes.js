const Shape = class {
    constructor(color) {
      this.color = color
    }
  
    render() {
      throw Error("Not Implemented")
    }
  };
  
  const Circle = class extends Shape {
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
  };
  
  const Triangle = class extends Shape {
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<polygon points="200,10 300,190 100,190" style="fill:${this.color}" />`
    }
  };
  
  const Square = class extends Shape {
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
  };

  module.exports = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
  };