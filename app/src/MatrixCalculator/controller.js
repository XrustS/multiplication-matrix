'use strict';
calcApp.controller('MatrixCalcCtrl', function($scope, CalculatorService){
    var calc = new CalculatorService(),
        defaultMinimumArray = 2,
        defaultMaximumArray = 10;

    $scope.showErrorMessage = false;
    $scope.panel = { input: false,
      default: true };

    $scope.matrixC = [["","",""],
                     ["","",""],
                     ["","",""],
                     ["","",""]];
    $scope.matrixA = [[3, 2],
                      [3, 2],
                      [3, 2],
                      [3, 2]];

    $scope.matrixB = [[1, 2, 3],
                      [1, 2, 3]];
    $scope.selectMatrix = { value: 'matrixA' };

    $scope.changeInput = function() {
        $scope.panel = { input: true,
        default: false };
        $scope.showErrorMessage = false;
    };


    $scope.clearAllMatrix = function() {
        clearArray($scope.matrixA, 0);
        clearArray($scope.matrixB, 0);
        clearArray($scope.matrixC, "");
        $scope.showErrorMessage = false;
        $scope.panel = { input: false,
          default: true };
    };

    $scope.multiplicationMatrix = function(a,b) {
        calc.addMatrixA(a);
        calc.addMatrixB(b);
        var tmp = calc.multiplication();

        if(tmp){
            $scope.showErrorMessage = false;
            $scope.matrixC = tmp;
            $scope.panel = { input: false,
              default: true }
        }
        else {
            $scope.panel = { input: false,
            default: false }
            $scope.showErrorMessage = true;
            console.error('Error! Matrix is not multiplication because count row matrix A not equal coun columns matrix B.')
        }
    };

    $scope.addRowInMatrix = function() {
        var curentMatrix = $scope.selectMatrix.value;

        addRow(getSelectMatrix(curentMatrix));
    };

    $scope.addColumnInMatrix = function() {
        var curentMatrix = $scope.selectMatrix.value;

        addColumn(getSelectMatrix(curentMatrix));
    };

    $scope.removeRowInMatrix = function() {
        var curentMatrix = $scope.selectMatrix.value;

        removeRow(getSelectMatrix(curentMatrix));
    };

    $scope.removeColumnInMatrix = function() {
        var curentMatrix = $scope.selectMatrix.value;

        removeColumn(getSelectMatrix(curentMatrix));
    };

    $scope.exchangeMatrix = function() {
        var tmp = [];

        tmp = $scope.matrixA;
        $scope.matrixA = $scope.matrixB;
        $scope.matrixB = tmp;
    };

    function getSelectMatrix(choice) {
        switch(choice) {
            case 'matrixA': return $scope.matrixA;
                break;
            case 'matrixB': return $scope.matrixB;
        };
    };

    function addRow(matrix, defaultValue) {
        var arr = [];
        defaultValue = defaultValue || 0;

        if(matrix.length == defaultMaximumArray)
          return false;
        matrix[0].forEach(function() {
            arr.push(defaultValue);
        });
        matrix.push(arr);
    };

    function addColumn(matrix, defaultValue) {
        defaultValue = defaultValue || 0;

        if(matrix[0].length == defaultMaximumArray)
          return false;
        matrix.forEach(function(row, i) {
            matrix[i].push(defaultValue);
        });
    };

    function removeRow(matrix) {
        if(matrix.length !== defaultMinimumArray)
            matrix.pop();
    };

    function removeColumn(matrix) {
        matrix.forEach(function(row, i){
            if(row.length !== defaultMinimumArray)
                matrix[i].pop();
        });
    };

    function clearArray(arr, defaultValue) {
        arr.forEach(function(item, i){
            if(item.forEach){
                item.forEach(function(element, j){
                    arr[i][j] = defaultValue;
                });
            }
            else arr[i] = defaultValue;
        });
    };
});
