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
    .state('module4-solution.categories.catItems',{
      url: '/{catID}',
      templateUrl: 'solutions/module4/views/data/items.html',
      controller: ['itemLoaded', '$stateParams',
        function(itemLoaded, $stateParams){
          $loaded = this;
          $loaded.itemLoaded = itemLoaded;
        }],
        controllerAs: "$loaded",
      resolve: {
        itemLoaded: ['$stateParams', 'MenuDataService',
                  function($stateParams, MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.catID);
                  }]
      }
    })
  }


}) ();
