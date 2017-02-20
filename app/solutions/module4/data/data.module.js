(function(){
angular.module('MenuData', ['MenuDataProducer', 'categories', 'items']);
//The name of module 'data' is changed to 'MenuData'
// Injection of service will happen here with storage in an isolated scope
angular.module('MenuData')
  .component('moduleData', {
    templateUrl: 'solutions/module4/views/data/data.module.html',
    controller: 'ModuleDataCtrl as $main'
  })
  .controller('ModuleDataCtrl', ModuleDataCtrl)

  ModuleDataCtrl.$inject = ['MenuDataService']
  function ModuleDataCtrl(MenuDataService){
    $main = this;
    $main.placeholderCat = "A";
    $main.categoriesPromise = MenuDataService.getAllCategories();
    $main.getItemsPromise = MenuDataService.getItemsForCategory($main.placeholderCat);
  }

}) ();
