(function(){
angular.module('NarrowItDown')
  .service('MenuSearchService', MenuSearchService)
  .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com/')
  .constant('menuItemsPath', 'menu_items.json')

  MenuSearchService.$inject = ['$http','APIBasePath', 'menuItemsPath'];
  function MenuSearchService($http, APIPath, menuItemsPath){
    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
      var searchTerm = searchTerm.toLowerCase();
      var restaurantData
      var foundItems = [];
      $http.get(APIPath + menuItemsPath)
        .then(function (response) {
            restaurantData = response.data.menu_items;
            angular.forEach(restaurantData, function(value, key) {
              var term = searchTerm;
              if (value.description.toLowerCase().indexOf(term) >= 0){
                  this.push(value);
                }
            },foundItems);
        return foundItems;
         })
        .catch(function(error){console.log('Data load error');});

      return foundItems;
    }
  }

}) ();
