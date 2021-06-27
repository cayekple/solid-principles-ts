import ShapeInterface from './abstracts/ShapeInterface';

class Circle implements ShapeInterface{
    radius = 1;
    construct(radius){
        this.radius = radius;
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2);
    }

    circumference() {
      return 2 * Math.PI * this.radius;
    }
}

export default Circle;
