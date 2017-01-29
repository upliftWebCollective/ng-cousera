(function(){
angular.module('NarrowItDown', []);

angular.module('NarrowItDown')
  .controller('Module3', Module3Parent)

  Module3Parent.$inject=['$scope']
  function Module3Parent($scope){
    var vm = this;
    vm.title = "Module 3 Solution";
  }

}) ();
