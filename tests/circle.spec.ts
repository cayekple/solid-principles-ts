import Circle from '../Circle';
import { expect } from 'chai';

import 'mocha';

const circle = new Circle();

describe('Calculating the area of a circle', () => {
  it('should return the area of a circle', () => {
    expect(circle.area().toFixed(2)).to.equal('3.14');
  });
});

describe('Calculate the surface area of circle', () => {
  it('should return surface area of circle', () => {
    expect(circle.circumference().toFixed(2)).to.equal('6.28')
  })
})