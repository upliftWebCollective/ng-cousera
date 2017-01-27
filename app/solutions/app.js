(function(){
  angular.module('courseraApp', [
    'ui.router',
    'LunchCheck',
    'ShoppingListCheckOff'
  ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'solutions/intro/index.html'
        })
        .state('module1-solution', {
          url: '/module1-solution',
          templateUrl: 'solutions/module1/index.html',
          controller: 'module1 as ctrl'
        })
        .state('module2-solution', {
          url: '/module2-solution',
          templateUrl: 'solutions/module2/index.html',
          controller: 'Module2 as ctrl'
        })

    $urlRouterProvider.otherwise('/')
  }])
    .controller('introCtlr', function($scope){
      $scope.title = "Ng-Coursera";
      $scope.desc = "Repository for Single Page Web Applications with AngularJS course."
  })


}) ();
