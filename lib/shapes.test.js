const { Circle, Triangle, Square } = require("./shapes");

// Tests the Circle for getting the color and then rendering that circle with given color.
describe("Circle", () => {


    test("Should create a circle", () => {
        const circle = new Circle("green")
        expect(circle.color).toBe("green")
    })

    test("Should render a circle", () => {
        const circle = new Circle("green")
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="green" />`)
    })
}),

// Tests the Triangle for getting the color and then rendering that Triangle with given color.
describe("Triangle", () => {


    test("Should create a triangle", () => {
        const triangle = new Triangle("green")
        expect(triangle.color).toBe("green")
    })

    test("Should render a triangle", () => {
        const triangle = new Triangle("green")
        expect(triangle.render()).toBe(`<polygon points="200,10 300,190 100,190" style="fill:green" />`)
    })
}),

// Tests the Square for getting the color and then rendering that Square with given color.
describe("Square", () => {


    test("Should create a square", () => {
        const square = new Square("green")
        expect(square.color).toBe("green")
    })

    test("Should render a triangle", () => {
        const square = new Square("green")
        expect(square.render()).toBe(`<rect x="10" y="10" width="30" height="30" fill="green"/>`)
    })
})

