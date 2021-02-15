import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test is prime', () => {
    const asserts = [
      {
        arg: 0,
        expected: false,
      },
      {
        arg: 1,
        expected: false,
      },
      {
        arg: 2,
        expected: true,
      },
      {
        arg: 3,
        expected: true,
      },
      {
        arg: 4,
        expected: false,
      },
      {
        arg: 5,
        expected: true,
      },
      {
        arg: 6,
        expected: false,
      },
      {
        arg: 7,
        expected: true,
      },
      {
        arg: 8,
        expected: false,
      },
      {
        arg: 9,
        expected: false,
      },
      {
        arg: 10,
        expected: false,
      },
      {
        arg: 11,
        expected: true,
      },
      {
        arg: 12,
        expected: false,
      },
      {
        arg: 13,
        expected: true,
      },
      {
        arg: 83,
        expected: true,
      },
      {
        arg: 84,
        expected: false,
      },
    ];
    for (const assert of asserts) {
      it(`expect ${assert.arg} to be ${assert.expected}`, () => {
        expect(service.isPrime(assert.arg)).toBe(assert.expected);
      });
    }
  });
  describe('test get fibo', () => {
    const asserts = [
      {
        arg: 0,
        expected: 0,
      },
      {
        arg: 1,
        expected: 1,
      },
      {
        arg: 2,
        expected: 1,
      },
      {
        arg: 3,
        expected: 2,
      },
      {
        arg: 4,
        expected: 3,
      },
      {
        arg: 5,
        expected: 5,
      },
      {
        arg: 6,
        expected: 8,
      },
      {
        arg: 7,
        expected: 13,
      },
      {
        arg: 8,
        expected: 21,
      },
      {
        arg: 9,
        expected: 34,
      },
      {
        arg: 10,
        expected: 55,
      },
      {
        arg: 11,
        expected: 89,
      },
      {
        arg: 12,
        expected: 144,
      },
    ];
    for (const assert of asserts) {
      it(`expect ${assert.arg} to be ${assert.expected}`, () => {
        expect(service.getFibonanci(assert.arg)).toBe(assert.expected);
      });
    }
  });
  describe('test is fibo', () => {
    const asserts = [
      {
        arg: 0,
        expected: false,
      },
      {
        arg: 1,
        expected: true,
      },
      {
        arg: 2,
        expected: true
      },
      {
        arg: 3,
        expected: true,
      },
      {
        arg: 4,
        expected: false,
      },
      {
        arg: 5,
        expected: true,
      },
      {
        arg: 6,
        expected: false,
      },
      {
        arg: 7,
        expected: false,
      },
      {
        arg: 8,
        expected: true,
      },
      {
        arg: 9,
        expected: false,
      },
      {
        arg: 10,
        expected: false,
      },
      {
        arg: 11,
        expected: false,
      },
      {
        arg: 12,
        expected: false,
      },
      {
        arg: 13,
        expected: true,
      },
    ];
    for (const assert of asserts) {
      it(`expect ${assert.arg} to be ${assert.expected}`, () => {
        expect(service.isFibo(assert.arg)).toBe(assert.expected);
      });
    }


  });
});
