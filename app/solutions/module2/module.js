(function(){
angular.module('ShoppingListCheckOff', []);

angular.module('ShoppingListCheckOff')
  .service('ListService', ListService)
  .controller('Module2', Module2Parent)
  .factory('CompleteFactory', CompleteFactory)

  Module2Parent.$inject=['$scope', 'ListService', 'CompleteFactory']
  function Module2Parent($scope, ListService, CompleteFactory){
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
    console.log(ListService.items);
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
