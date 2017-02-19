(function(){
angular.module('MenuData', ['MenuDataProducer', 'categories', 'items']);
//The name of module 'data' is changed to 'MenuData'
angular.module('MenuData')
  .controller('dataController', dataController)

  dataController.$inject=[];
  function dataController(){
    var vm = this;
    vm.title = "Placeholder";
  }

}) ();
