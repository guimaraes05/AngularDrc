(function(){

    var app = angular.module("customServiceApp",[]);

    app.controller("Secao1Ctrl",["$scope", "$rootScope", function($scope, $root) {
        
        $scope.total = 1;

        $scope.incrementarValorTotalEm = function (){
            
            $scope.total += 1;;

            $root.$broadcast("IncrementNumber", {
                inc:$scope.total
            })
        } 
        
    }]);

    app.controller("Secao2Ctrl",["$scope", function($scope) {
        
        $scope.total = 1;
        
        $scope.$on("IncrementNumber", function(event, data){
            $scope.total = data.inc;

        })

    }]);

})()    

