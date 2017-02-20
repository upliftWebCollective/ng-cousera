(function(){
angular.module('categories', []);

angular.module('categories')
  .component('categoriesComponent', {
    templateUrl: 'solutions/module4/views/data/categories.component.html',
    controller: "categoriesController as $cat",
    bindings: {
      alpha: '@',
      categories: '<'
    }
  })
  .controller('categoriesController', categoriesController)

categoriesController.$inject = [];
function categoriesController(){
  $cat = this;
}

}) ();
