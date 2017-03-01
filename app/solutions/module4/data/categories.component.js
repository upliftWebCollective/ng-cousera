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

categoriesController.$inject = ['$state'];
function categoriesController($state){
  $cat = this;
  $cat.selectedName = '';
  $cat.change = function(){
    if($cat.selectedName == null) {
      $state.go('module4-solution.categories');
    }else {
      $state.go('module4-solution.categories.catItems', {catID:$cat.selectedName.category});
    }
  }
}

}) ();
