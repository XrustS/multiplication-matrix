angular
    .module('MatrixCalculatorApp')
    .factory('CalculatorService', function(){
      var multipMatrix = function() {
        var self = this;
        var defaultValue = -1;

        self.addMatrixA = function(matrixA){
          if(isEmpty(matrixA))
            return defaultValue;

          if(isNotArray(matrixA))
            return false;

          self.matrixA = matrixA;
        };

        self.addMatrixB = function(matrixB){
          if(isEmpty(matrixB))
            return defaultValue;

          if(isNotArray(matrixB))
            return false;

          self.matrixB = matrixB;
        };

        self.multiplication = function(){
          if(isEmpty(self.matrixA) || isEmpty(self.matrixB))
            return defaultValue;

          let matrixC = [];
          let matrixARowsLength = self.matrixA.length;
          let matrixAColumnsLength = self.matrixA[0].length
          let matrixBRowsLength = self.matrixB.length;
          let matrixBColumnsLength = self.matrixB[0].length;
          let tmp = 0;
          if(matrixAColumnsLength !== matrixBRowsLength)
            return false;

          for(let i = 0; i < matrixARowsLength; i++){
            matrixC[i] = [];
            for(let j = 0; j < matrixBColumnsLength; j++){
              for(let k = 0; k < matrixBRowsLength; k++){
                  tmp += self.matrixA[i][k]*self.matrixB[k][j];
              }
              matrixC[i][j] = tmp; tmp = 0;
            };
          };
          return matrixC;
        };

        function isEmpty(input){
          return !input;
        }
        function isNotArray(input){
          return !Array.isArray(input);
        }
      };
      return multipMatrix;
    });
