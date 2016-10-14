(function(){

    var calcApp = angular.module("calcApp",[]);


//adicionamos a controller no app
    calcApp.controller("CalcCtrl",["$scope",CalcCtrlFN]);


    //é a definição
    function CalcCtrlFN($scope) {

        $scope.preco = 100;
        $scope.desconto = 0;
        $scope.valorFinal = 0;
        $scope.isWatching = false;


        $scope.iniciarWatch = function () {
            $scope.isWatching = true;
            $scope.watch = $scope.$watch("desconto", updateValue,true);

        }

        $scope.encerrarWatch = function () {
            $scope.isWatching = false;
            $scope.watch();
        }

        function updateValue(){
            $scope.valorFinal = $scope.preco * ($scope.desconto/100);
        }

    }
})()

