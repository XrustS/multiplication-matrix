const assert = require('chai').assert;
var MultiplicationMatrix = require('../app/src/multiplication-matix.js');

describe('Calculator for multiplication two matrix', () => {
  beforeEach(() => {
    calculator = createCalculator();
  });
  describe('when added matrix in calculator', () => {
    it('should return result -1 if input matix A is empty', () => {
      var result = calculator.addMatrixA();

      assert.equal(result, -1);
    });
    it('should return result default value if input matrix B is empty', () => {
      var result = calculator.addMatrixB();

      assert.equal(result, -1);
    });
    it('should return false if input matrix A is not Array', () => {
      var resultA = calculator.addMatrixA(123);

      assert.isFalse(resultA, "Matrix A return not false");
    });
    it('should return false if input matrix B is not Array', () => {

      var resultB = calculator.addMatrixB(123);

      assert.isFalse(resultB, "Matrix B return not false")
    });
    it('should matrices are in calculator', () => {
      calculator.addMatrixA(['A']);
      calculator.addMatrixB(['B']);

      assert.deepEqual(calculator.matrixA, ['A']);
      assert.deepEqual(calculator.matrixB, ['B']);
    });
  });
  describe('when calculator multiplication matrix', () => {
    it('should return default value if both marices is not set in calculator', () => {
      var result = calculator.multiplication();

      assert.equal(result, -1);
    });
    it('should return false if length row matrix A not equal length column matrix B',() => {
      var matrixA = [[1,2,3,4],
                     [1,2,3,4],
                     [1,2,3,4]];
      var matrixB = [[1,2,3],
                     [1,2,3],
                     [1,2,3]];

      addsMatrix(matrixA, matrixB);

      var result = calculator.multiplication();

      assert.isFalse(result);
    });
    it('should return matrix 3 x 3 if insert two matrix 3 x 3', () => {
      var matrixA = [[1,2,3],
                     [1,2,3],
                     [1,2,3]];
      var matrixB = [[1,2,3],
                     [1,2,3],
                     [1,2,3]];

      addsMatrix(matrixA, matrixB);

      var result = calculator.multiplication();

      assert.deepEqual(result, [[6,12,18],[6,12,18],[6,12,18]]);
    });
    it('should return matrix 5 x 5 if matrix A 5 x 3 and matrix B 3 x 4', () => {
      var matrixA = [[1,2,3],
                     [1,2,3],
                     [1,2,3],
                     [1,2,3],
                     [1,2,3]];
      var matrixB = [[1,2,3,4],
                     [1,2,3,4],
                     [1,2,3,4]];

      addsMatrix(matrixA, matrixB);

      var result = calculator.multiplication();

      assert.deepEqual(result, [[6,12,18,24],
                                [6,12,18,24],
                                [6,12,18,24],
                                [6,12,18,24],
                                [6,12,18,24]]);
    });
  });
});

function createCalculator() {
  return new MultiplicationMatrix();
}
function addsMatrix(a, b){
  calculator.addMatrixA(a);
  calculator.addMatrixB(b);
}
