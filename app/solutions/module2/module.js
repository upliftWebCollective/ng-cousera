(function(){
angular.module('ShoppingListCheckOff', []);

angular.module('ShoppingListCheckOff')
  .controller('Module2', Module2Parent)

  Module2Parent.$inject=['$scope']
  function Module2Parent($scope){
    var vm = this;
    vm.title = "Module 2 Solution";
  }

}) ();
