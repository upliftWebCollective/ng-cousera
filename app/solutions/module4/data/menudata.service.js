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
      var categoriesExtracted=[];
      $http.get(APIBasePath + categoriesPath)
        .then(function (response) {
            var categoriesResults = response.data;
            angular.forEach(categoriesResults, function(value, key) {
              this.push({'category': value.short_name});
            },categoriesExtracted);
            /*DEBUG*/console.log(" All Categories Data: ", categoriesResults);
        return categoriesExtracted;
         })
        .catch(function(error){console.log('All Categories Results Data load error');});
      return categoriesExtracted;
    }
    service.getItemsForCategory = function(categoryShortName) {
      var categoryItemsResults = [];
      $http.get(APIBasePath + menuItemsPath + categoryShortName)
        .then(function(response){
          categoryItemsResults = response.data.menu_items;
          /*DEBUG*/console.log("Single Categories Data: ", categoryItemsResults);
        return categoryItemsResults;
        })
        .catch(function(error){console.log('Single Category Results Data load error');});
        return categoryItemsResults;
    }
  }

}) ();
