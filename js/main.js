(function(){

    var app = angular.module("customServiceApp",[]);

    app.controller("Secao1Ctrl",["$scope", "toDo", function($scope, toDo) {
        
        $scope.total = 0;

        $scope.$on("IncrementNumber", function(event, data){
            $scope.total = data.inc;
        })
        

        $scope.incrementarValorTotalEm = function (value){
            
            toDo.set($scope.total + value); 
        } 


    }]);

    app.controller("Secao2Ctrl",["$scope", function($scope) {
        
        $scope.total = 0;

        $scope.$on("IncrementNumber", function(event, data){
            $scope.total = data.inc;
        })

    }]);

    app.factory('toDo',["$rootScope", function($root){
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

