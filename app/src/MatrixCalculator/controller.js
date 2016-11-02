'use strict';
calcApp.controller('MatrixCalcCtrl', function($scope, CalculatorService){
    var calc = new CalculatorService();

    $scope.showErrorMessage = false;

    $scope.matrixC = [["","",""],
                     ["","",""],
                     ["","",""]];
    $scope.matrixA = [[3, 2],
                      [3, 2]];

    $scope.matrixB = [[1, 2],
                      [1, 2]];
    $scope.selectMatrix = { value: 'matrixA' };
    $scope.changeInput = function() {
      $scope.showErrorMessage = true;
    };


    $scope.clearAllMatrix = function() {
        clearArray($scope.matrixA, 0);
        clearArray($scope.matrixB, 0);
        clearArray($scope.matrixC, "");
        $scope.showErrorMessage = false;
    };

    $scope.multiplicationMatrix = function(a,b) {
        calc.addMatrixA(a);
        calc.addMatrixB(b);
        var tmp = calc.multiplication();

        if(tmp){
            $scope.showErrorMessage = false;
            $scope.matrixC = tmp;
        }
        else {
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

        matrix[0].forEach(function(){
            arr.push(defaultValue);
        });
        matrix.push(arr);
    };

    function addColumn(matrix, defaultValue) {
        defaultValue = defaultValue || 0;

        matrix.forEach(function(row, i){
            matrix[i].push(defaultValue);
        });
    };

    function removeRow(matrix) {
        if(matrix.length !== 1)
            matrix.pop();
    };

    function removeColumn(matrix) {
        matrix.forEach(function(row, i){
            if(row.length !== 1)
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
