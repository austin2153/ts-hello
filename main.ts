
// // arrow function example
// // js version
// let log = function(message) {
//     console.log(message);
// }
// // arrow version
// let doLog = (message) => console.log(message);

// // interfaces
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }

// let drawPoint = (point: Point) => {
//     // ....
// }

// Class example
class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    // When a function is part of a class, its called a method
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

// create var of type "Point"
let point = new Point(1, 2);
point.draw();