myApp.controller('MarketController', ['MarketService', function(MarketService){
  let market = this;
  market.item = ['Apple', 'Banana', 'Orange'];
  MarketService.marketItemsArray = market.marketItemsArray;
}]);
