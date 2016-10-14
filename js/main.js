(function(){

    var app = angular.module("customServiceApp",[]);


//adicionamos a controller no app
    app.controller("Secao1Ctrl",["$scope","webItems", function($scope, webItems) {

        $scope.pegarMensagem = function(){
            return webItems.get();
        }

    }]);


    app.controller("Secao2Ctrl",["$scope","webItems", function($scope, webItems) {
         
          $scope.pegarMensagem = function(){
            return webItems.get();
        }

    }]);


    app.controller("ServicoSetterCtrl",["$scope", "webItems", function($scope, webItems){

        $scope.setarMensagem = function(item){
            webItems.set(item);
        }
        
    }]);



    app.factory("webItems", function(){

        var msg = "Essa é a primeira MSG";

        function getMsg(){
            return msg;
        }

        function setMsg(item){
            msg = item; 

        }

        return {
            get: getMsg,
            set: setMsg
        }
    })

})()

