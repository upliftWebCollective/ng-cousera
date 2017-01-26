(function(){
  angular.module('courseraApp', ['ui.router', 'ShoppingListCheckOff'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'solutions/intro.html'
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
