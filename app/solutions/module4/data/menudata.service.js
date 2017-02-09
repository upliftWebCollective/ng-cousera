(function(){
angular.module('MenuDataProducer', []);

angular.module('MenuDataProducer')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject=[];
  function MenuDataService(){
    return ['dataPlaceholder'];
  }

}) ();
