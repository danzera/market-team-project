myApp.controller('MarketController', ['MarketService', function(MarketService){
  let market = this;
  market.Fruit = MarketService.Fruit;
  market.SmallElectronic = MarketService.SmallElectronic;
  market.marketArray = ['Apple', 'Banana', 'Orange'];
  let mango = new market.Fruit('MANGO', 4);
  console.log(mango);
  let ELECTRICmango = new market.SmallElectronic('ELECTRIC MANGO', 4);
  console.log(ELECTRICmango);
}]);
