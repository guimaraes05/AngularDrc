(function(){

    var app = angular.module("customServiceApp",[]);


//adicionamos a controller no app
    app.controller("Secao1Ctrl",["$scope","changeMsg", function($scope, changeMsg) {

        $scope.pegarMensagem = function(){
            return changeMsg.get();
        }

    }]);


    app.controller("Secao2Ctrl",["$scope","changeMsg", function($scope, changeMsg) {
         
          $scope.pegarMensagem = function(){
            return changeMsg.get();
        }

    }]);


    app.controller("ServicoSetterCtrl",["$scope", "changeMsg", function($scope, changeMsg){

        $scope.setarMensagem = function(){
            if($scope.novaMensagem != ""){
                changeMsg.set($scope.novaMensagem);
            } else{
                var msgErro = "Msg Vazia";
                alert("Por Favor digite uma MSG")
                changeMsg.set(msgErro);
            }
        }
        
    }]);

    app.factory("changeMsg", function(){

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

