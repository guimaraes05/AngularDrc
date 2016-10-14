(function(){

    var app = angular.module("App",[]);


//adicionamos a controller no app
    app.controller("WannaBuy",["$scope","webItems", function($scope, webItems) {
        $scope.items = webItems.get();

        console.log(webItems.get());
    }]);

    app.controller("AddItemCtrl",["$scope", "webItems", function($scope, webItems){

        $scope.item = {}

        $scope.addItem = function (item){
            webItems.set(angular.copy(item));
            $scope.item = {};
        }
        // $scope.items = webItems.set();
    }]);



    app.factory("webItems", function(){

        var items = [];

        function getItems(){
            return items;
        }

        function addItem(item){
            
                items.push(item);
            
            
        }

        return {
            get: getItems,
            set: addItem
        }
    })

})()

