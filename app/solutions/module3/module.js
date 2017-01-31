(function(){
angular.module('NarrowItDown', []);

angular.module('NarrowItDown')
  .controller('Module3', Module3Parent)
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', resultDirective)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var vm = this;
    vm.found = '';

    vm.displayMatched = function(userInput){
      //Add this function to the search button with ng-click
      console.log('userInput: ', userInput);
      vm.found = MenuSearchService.getMatchedMenuItems(userInput);
      return vm.found;
      // console.log('vm.found'. vm.found);
    }
  }

  Module3Parent.$inject = ['MenuSearchService']
  function Module3Parent(MenuSearchService){
    var vm = this;
    vm.title = "Module 3 Solution";
  }
  function resultDirective() {
    return {
      restrict: 'AE',
      scope: {
        itemLoaded: '<'
      },
      templateUrl: 'solutions/module3/views/found.html',
      controller: 'NarrowItDownController as found'
    };
  }

}) ();
