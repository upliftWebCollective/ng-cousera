(function(){
angular.module('ShoppingListCheckOff', []);

angular.module('ShoppingListCheckOff')
  .controller('Module2', Module2Parent)
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .directive('toBuy', toBuyDirective)
  .directive('alreadyBought', boughtDirective)
  .service('ListService', ListService)
  .factory('CompleteFactory', CompleteFactory)

  Module2Parent.$inject=['ListService', 'CompleteFactory']
  function Module2Parent(ListService, CompleteFactory){
    var vm = this;
    vm.title = "Module 2 Solution";
    vm.shoppingList = ListService.getItems();
    vm.completeList = CompleteFactory.bought;
    vm.buyItem = function(index) {
        vm.selectedItem = vm.shoppingList[index];
        vm.completeList.push(vm.selectedItem);
        vm.shoppingList.splice(index, 1);
        if(vm.shoppingList.length === 0){vm.emptyList = true;}
        if(vm.completeList.length >= 1){vm.somethingBought = true;}
    }
  }
  ToBuyController.$inject = ['$scope', 'ListService', 'CompleteFactory'];
  function ToBuyController($scope, ListService, CompleteFactory){
    vm = this;
    vm.title = 'To Buy';
  }
  AlreadyBoughtController.$inject = ['$scope', 'ListService', 'CompleteFactory'];
  function AlreadyBoughtController($scope, ListService, CompleteFactory){
    vm = this;
    vm.title = 'Already Bought';
  }

  function toBuyDirective(){
    return {  restrict: 'EA',
              templateUrl: 'solutions/module2/views/buy.html',
              controller: 'ToBuyController as buy'
            };
  }
  function boughtDirective(){
    return {  restrict: 'EA',
              templateUrl: 'solutions/module2/views/bought.html',
              controller: 'AlreadyBoughtController as bought'
            };
  }

  function ListService(){
    var service = this;
    var items = [
      {id: 0, name: "Cookies", quantity: 10 },
      {id: 1, name: "Cake", quantity: 1 },
      {id: 2, name: "Black Beans", quantity: 1 },
      {id: 3, name: "Kale", quantity: 1 },
      {id: 4, name: "Dark Chocolate", quantity: 2 }
    ];
    service.getItems = function(){
      return items;
    };
  }
  function CompleteFactory(){
    return {bought:[]};
  }

}) ();
