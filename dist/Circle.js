"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor() {
        this.radius = 1;
    }
    construct(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}
exports.default = Circle;
//# sourceMappingURL=Circle.js.map