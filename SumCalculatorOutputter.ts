import AreaCaculator from './AreaCalculator';

class SumCalculatorOutputter {
  #calculator;

  constructor(calculator: AreaCaculator){
    this.#calculator = calculator;
  }
}