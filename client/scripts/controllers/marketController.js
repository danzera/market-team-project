myApp.controller('MarketController', ['MarketService', function(MarketService){
  let market = this;
   market.marketItemsArray = MarketService.marketItemsArray;
  console.log(market.marketItemsArray);
  market.item = ['Apple', 'Banana', 'Orange'];

}]);
