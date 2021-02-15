import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionType } from './enum';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  questionType = QuestionType.IsPrime;
  currentValue = 0;
  result$ = new BehaviorSubject<boolean>(false);
  storedFibonanci = {};
  storedIsPrime = {};
  storedIsFibonanci = {};
  constructor() {}

  changeType(type: QuestionType) {
    this.questionType = type;
    this.calculate()
  }

  setValue(value: number) {
    this.currentValue = value;
    this.calculate()
  }

  calculate() {
    if (this.questionType == QuestionType.IsFibanacci) {
      const result = this.isFibo(this.currentValue);
      this.result$.next(result);
    } else if (this.questionType == QuestionType.IsPrime) {
      const result = this.isPrime(this.currentValue);
      this.result$.next(result);
    }
  }

  isFibo(num: number) {

    if (this.storedIsFibonanci[num] !== undefined) {
      return this.storedIsFibonanci[num] as boolean;
    }

    if (num == 0) {
      return false;
    }
    if (num == 1) {
      return true;
    }
    if (num == 2) {
      return true;
    }
    if (num == 3) {
      return true;
    }

    for (let index = 0; index <= num; index++) {
      const result = this.getFibonanci(index);
      this.storedIsFibonanci[result] = true;
      if(result === num){
        return true
      }else if(result > num){
        return false;
      }
    }
    return false;
  }
  getFibonanci(num: number) {
    if (num == 0) {
      return 0;
    }
    if (num == 1) {
      return 1;
    }
    if (this.storedFibonanci[num] !== undefined) {
      return this.storedFibonanci[num] as number;
    }
    this.storedFibonanci[num] =
      this.getFibonanci(num - 2) + this.getFibonanci(num - 1);
    return this.storedFibonanci[num] as number;
  }

  isPrime(num: number) {
    if (num == 0) {
      return false;
    }
    if (num == 1) {
      return false;
    }
    if (num == 2) {
      return true;
    }

    if (this.storedIsPrime[num] !== undefined) {
      return this.storedIsPrime[num] as boolean;
    }

    for (let devideBy = 2; devideBy < num; devideBy++) {
      if (num % devideBy == 0) {
        this.storedIsPrime[num] = false;
        return false;
      }
    }
    this.storedIsPrime[num] = true;
    return true;
  }
}
