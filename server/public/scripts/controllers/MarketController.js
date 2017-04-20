myApp.controller('MarketController', [function(){
  var market = this;
  market.item = ['Apple', 'Banana', 'Orange'];
  console.log('sourced');
  console.log(market.item);
}]);
