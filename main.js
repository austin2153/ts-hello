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
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    // when a function is part of a class, its called a method
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// create var of type "Point"
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
