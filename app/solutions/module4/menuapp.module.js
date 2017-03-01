(function(){
angular.module('MenuApp', ['MenuData']);
// 'Data' is renamed to 'MenuData'
angular.module('MenuApp')
  .controller('Module4', Module4Parent)

  Module4Parent.$inject=[];
  function Module4Parent(){
    var vm = this;
    vm.title = "Module 4 Solution";
  }

}) ();
