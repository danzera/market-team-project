myApp.controller('MarketController', ['MarketService', function(MarketService){
  let market = this;
  market.item = ['Apple', 'Banana', 'Orange', 'pears'];

  //create the cartItem will show to the dom
market.cartItemArray = [{name: 'apple', quantity: 2, avePrice: 5},
                 {name: 'Toaste', quantity: 0, avePrice: 10},
                 {name: 'Books', quantity: 4, avePrice: 3.50}];

}]);
