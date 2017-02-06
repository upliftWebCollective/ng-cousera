(function(){
angular.module('NarrowItDown', []);

angular.module('NarrowItDown')
  .controller('Module3', Module3Parent)

    .controller('NarrowItDownController', NarrowItDownController)
    .directive('narrowDown', NarrowItDownDirective)

    .directive('foundItems', resultDirective)
    .controller('foundItemsController', foundItemsController)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var vm = this;
    vm.found = '';
    vm.removeItem = function(index){
      vm.found.splice(index, 1)
    }
    vm.displayMatched = function(userInput){
      vm.found = MenuSearchService.getMatchedMenuItems(userInput);
      return vm.found;
    }
  }
  function NarrowItDownDirective() {
    return {
      restrict: 'AE',
      templateUrl: 'solutions/module3/views/narrowDown.html',
      controller: 'NarrowItDownController as narrow',
    };
  }

  Module3Parent.$inject = ['MenuSearchService']
  function Module3Parent(MenuSearchService){
    var vm = this;
    vm.title = "Module 3 Solution";
  }
  function foundItemsController(){
    var dvm = this;
  }
  function resultDirective() {
    return {
      restrict: 'AE',
      scope: {
        itemLoaded: '<',
        onRemove: '&'
      },
      templateUrl: 'solutions/module3/views/found.html',
      controller: 'foundItemsController as result',
      bindToController: true,
    };
  }

}) ();
