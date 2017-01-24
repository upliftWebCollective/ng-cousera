(function(){
  angular.module('courseraApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'main.html'
        })
        .state('module2-solution', {
          url: '/module2-solution',
          templateUrl: 'solutions/m2-sol.html'
        })

    $urlRouterProvider.otherwise('/')
  }])
    .controller('introCtlr', function($scope){
      $scope.title = "Ng-Coursera";
      $scope.desc = "Repository for Single Page Web Applications with AngularJS course."
  })


}) ();
