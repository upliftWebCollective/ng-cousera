(function(){
angular.module('MenuApp')
.config(routeConfig)

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('module4-solution',{
      // HOME STATE for Module 4 Solution
      url: '/module4-solution',
      templateUrl: 'solutions/module4/index.html',
      controller: 'Module4 as ctrl'
    })
    .state('module4-solution.categories',{
      url: '/categories',
      templateUrl: 'solutions/module4/views/data/categories.html',
    })
  }


}) ();
