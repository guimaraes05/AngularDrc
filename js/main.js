//criamos nosso app
var myApp = angular.module("myApp",[]);


//adicionamos a controller no app
myApp.controller("CartController",["$scope",CartControllerFN]);


//é a definição
function CartControllerFN($scope) {
    //definir os nosso objetos que serão compartilhados pela view
    $scope.bill = {};//instanciando um objeto vazio
    //criamos uma lista de itens que serão comprados
    $scope.items = [
        {name:"Chocolate",price:1.99, quantity:10},
        {name:"Farinha",price:2.00, quantity:2},
        {name:"Manteiga",price:5.45, quantity:10}
    ]
    //criamos um método que calcula o valor da compra com base nos itens
    function updateValue() {
        //guarda o valor total
        var total = 0;
        //para cara item adicionamos o preço total da compra
        $scope.items.forEach(function(item,lista,index) {
            console.log(arguments);//todos os parametros enviados por quem chamou o método
            console.log(item, lista, index);//apenas o console para observar os valores
            total += item.price * item.quantity;
        });
        //definimos os valores da bill
        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    }

    //cadastramos o watcher
    $scope.$watch("items",updateValue,false);
    

    //adiciona item
    $scope.addItem = function () {
        $scope.items.push({name:"Ovos",price:55.45, quantity:10});
    }   

    console.log("dsadasd", $scope.items)

    //altera item
    $scope.updateItem = function () {
        $scope.items[$scope.items.length-1].quantity = 1
    }

    //remove item
    $scope.removeItem = function () {
        //remove apenas o último item do array e retorna este item para quem o solicitou
        return $scope.items.pop()
    }

    //troca os itens
    $scope.changeItems = function () {
        $scope.items = [
        {name:"Maça",price:1, quantity:12},
        {name:"Laranja",price:2, quantity:13},
        ]
    }   



}