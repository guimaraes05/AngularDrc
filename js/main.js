var myApp = angular.module("myApp",[]);

//add a controller

myApp.controller("GreetingController",['$scope', function ($scope) {
    $scope.greeting = "Olá do AngularJS";
    $scope.hello = "hello do AngularJS";


    $scope.showAlert = function(){
        console.log("cliquei");
        alert("CUIDADO!!");

        $scope.greeting = "De novo";
        $scope.hello = "Bom dia";

    }


}]);

