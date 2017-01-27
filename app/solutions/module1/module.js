(function(){
  'use strict';
  angular.module('LunchCheck', []);
  angular.module('LunchCheck')
    .controller('module1', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope){
      var vm = this;
      vm.title="Module 1 Solution"
      vm.lunchInput='';
      vm.message="No items. Enter 1-3 items";
      vm.lunchCheck = function(){
        var pl = vm.lunchInput.split(',');
        if(pl[0]!=="" && pl.length<=3){
          vm.message="Enjoy!";}
        else if(pl[0]==="" && pl.length===1){
          vm.message="Please enter data first";}
        else if (pl.length>3){
          vm.message="Too much!"}
      };
    }

}) ();
