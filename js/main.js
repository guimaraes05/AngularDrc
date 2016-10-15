(function(){

    var app = angular.module("customServiceApp",[]);

    app.controller("Secao1Ctrl",["$scope", "setValue", function($scope, setValue) {
        
        $scope.total = 0;
        //Recebendo o valor do broadcast
        $scope.$on("IncrementNumber", function(event, data){
            $scope.total = data.inc;
        });
        
        //Função que seta o valor.
        $scope.incrementarValorTotalEm = function (value){ 
            setValue.set($scope.total + value); 
        } 


    }]);

    app.controller("Secao2Ctrl",["$scope", function($scope) {
        
        $scope.total = 0;
        //Recebendo o valor do broadcast
        $scope.$on("IncrementNumber", function(event, data){
            $scope.total = data.inc;
        });

    }]);

    //Criei um factory para manipular os valores
    //No setValue broadcast com o novo valor
    app.factory('setValue',["$rootScope", function($root){
        var valueTotal = 0;

        function setValue(value){
            valueTotal = value;
            $root.$broadcast("IncrementNumber", {inc:valueTotal});
        }

        return {
            set:setValue
        }

    }]);



})()    

