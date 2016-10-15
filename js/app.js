(function () {

    var app = angular.module("customServiceApp",[]);
    
    app.controller('Secao1Ctrl', ['$scope','ValueServ', function($scope,ValueServ){
        
        $scope.total = 10;
        $scope.$on("UpdateValue",function (event, data) {
            $scope.total = data.total;  
        })

        $scope.incrementarValorTotalEm = function (value) {
            ValueServ.set($scope.total + value);
        }
    }])
    app.controller('Secao2Ctrl', ['$scope', function($scope){
        $scope.total = 10;
        $scope.$on("UpdateValue",function (event, data) {
            $scope.total = data.total;  
        })
        
    }])

    app.factory('ValueServ', ['$rootScope', function($rootScope){


        var total = 0;

        function setValue(value) {
            total = value;
            $rootScope.$broadcast("UpdateValue",{total:total});
        }

        return {
            set:setValue
        }
    }])

})()