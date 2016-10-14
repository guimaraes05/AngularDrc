(function(){

    var app = angular.module("App",[]);


//adicionamos a controller no app
    app.controller("PrimeiroController",["$scope","webItems", function($scope, webItems) {
        $scope.service = "Primeiro - " + webItems.get();

    }]);

    app.controller("SegundoController",["$scope","webItems", function($scope, webItems) {
        $scope.service = "Segundo - " + webItems.get();

    }]);


    app.controller("AddItem",["$scope", "webItems", function($scope, webItems){

        $scope.item = {}

        $scope.addItem = function (item){
            webItems.set(angular.copy(item));
            $scope.item = {};
        }
        // $scope.items = webItems.set();
    }]);



    app.factory("webItems", function(){

        var items = "";

        function getItems(){
            return items;
        }

        function addItem(item){
            
                items = item;
            
            
        }

        return {
            get: getItems,
            set: addItem
        }
    })

})()

