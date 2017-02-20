(function(){
angular.module('categories', []);

angular.module('categories')
  .component('categories', {
    templateUrl: 'data/categories.component.html',
    controller: "categoriesController as $cat",
    bindings: {
      categories: '<'
    }
  })

categoriesController.$inject = ['']
function categoriesController(){

}

}) ();
