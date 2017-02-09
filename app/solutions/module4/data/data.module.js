(function(){
angular.module('MenuData', ['MenuDataProducer', 'categories', 'items']);

angular.module('MenuData')
  .controller('dataController', dataController)

  dataController.$inject=[];
  function dataController(){
    var vm = this;
    vm.title = "Placeholder";
  }

}) ();
