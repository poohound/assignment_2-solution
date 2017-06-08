(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  // Use factory to create new shopping list service
  // var shoppingList = ShoppingListCheckOffService();

  toBuy.items = ShoppingListCheckOffService.gettobuy();

  toBuy.buyItem = function (itemIndex){
    ShoppingListCheckOffService.addItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
  }

}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Bought = this;

  Bought.items = ShoppingListCheckOffService.getbought();

}



function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var tobuy = [
      {name:'cookies', quantity:'12'},
      {name:'chips', quantity:'2 bags of'},
      {name:'soda', quantity:'3 liters of'},
      {name:'chips', quantity:'4 bags of'},
      {name:'salsa', quantity:'2 jars of'},
    ];
    var bought = [];

    service.addItem = function (itemIdex) {
      var item = {
        name: tobuy[itemIdex].name,
        quantity: tobuy[itemIdex].quantity
      };
      bought.push(item);
    };

    service.removeItem = function (itemIdex) {
      tobuy.splice(itemIdex, 1);
    };

    service.gettobuy = function () {
      return tobuy;
    };
    service.getbought = function () {
      return bought;
    };
  }


})();
