(function(){
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope){
      $scope.lunchInput='';
      $scope.message="No items. Enter 1-3 items";
      $scope.lunchCheck = function(){
        var pl = $scope.lunchInput.split(',');
        if(pl[0]!=="" && pl.length<=3){
          $scope.message="Enjoy!";}
        else if(pl[0]==="" && pl.length===1){
          $scope.message="Please enter data first";}
        else if (pl.length>3){
          $scope.message="Too much!"}
      };
    }

}) ();
