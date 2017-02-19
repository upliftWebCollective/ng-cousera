(function(){
angular.module('MenuApp', ['routes', 'MenuData']);
// 'Data' is renamed to 'MenuData'
angular.module('MenuApp')
  .controller('Module4', Module4Parent)

  Module4Parent.$inject=['MenuDataService'];
  function Module4Parent(MenuDataService){
    var vm = this;
    vm.title = "Module 4 Solution";
    vm.placeholderCat = "A";
    vm.categoriesPromise = MenuDataService.getAllCategories();
    vm.getItemsPromise = MenuDataService.getItemsForCategory(vm.placeholderCat);
  }

}) ();
