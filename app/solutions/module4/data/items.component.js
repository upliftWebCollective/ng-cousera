(function(){
angular.module('items', []);
angular.module('items')
  .component('itemsComponent', {
    templateUrl: 'solutions/module4/views/data/items.component.html',
    controller: "itemCtrl as $item",
    bindings: {
      items: '<'
    }
  })
  .controller('itemCtrl', itemCtrl)

  itemCtrl.$inject = [];
  function itemCtrl(){
  $item = this;
  }
}) ();
