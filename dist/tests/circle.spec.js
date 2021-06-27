"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = __importDefault(require("../Circle"));
const chai_1 = require("chai");
require("mocha");
const circle = new Circle_1.default();
describe('Calculating the area of a circle', () => {
    it('should return the area of a circle', () => {
        chai_1.expect(circle.area().toFixed(2)).to.equal('3.14');
    });
});
describe('Calculate the surface area of circle', () => {
    it('should return surface area of circle', () => {
        chai_1.expect(circle.circumference().toFixed(2)).to.equal('6.28');
    });
});
//# sourceMappingURL=circle.spec.js.map