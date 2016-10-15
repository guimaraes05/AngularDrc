(function(){

    var app = angular.module("broadApp",[]);

    app.controller("SendCtrl",["$scope","$rootScope" , function($scope, $root) {
        
        $scope.sendText = function (){
            
            $root.$broadcast("EnvioDeDados", {
            texto:$scope.texto
        })
        } 
        
    }]);

    app.controller("ReaderCtrl",["$scope", function($scope) {

        $scope.$on("EnvioDeDados", function(event, data){
            $scope.content = data.texto;
        })

    }]);

})()    

