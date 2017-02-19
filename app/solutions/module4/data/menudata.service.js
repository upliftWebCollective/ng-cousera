(function(){
angular.module('MenuDataProducer', []);

angular.module('MenuDataProducer')
  .service('MenuDataService', MenuDataService)
  .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com/')
  .constant('categoriesPath', 'categories.json')
  .constant('menuItemsPath', 'menu_items.json?category=')

  MenuDataService.$inject=['$http', 'APIBasePath', 'categoriesPath', 'menuItemsPath' ];
  function MenuDataService($http, APIBasePath, categoriesPath, menuItemsPath){
    var service = this;
    service.getAllCategories = function(){
      var categoriesResults = [];
      $http.get(APIBasePath + categoriesPath)
        .then(function (response) {
            categoriesResults = response.data;
            /*DEBUG*/console.log(" All Categories Data: ", categoriesResults);
        return categoriesResults;
         })
        .catch(function(error){console.log('Categories Results Data load error');});

      return categoriesResults;
    }
  }

}) ();
