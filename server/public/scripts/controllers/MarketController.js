myApp.controller('MarketController', ['MarketService', function(MarketService){
  let market = this;

  //create the cartItem will show to the dom
// market.cartItemArray = [{name: 'apple', quantity: 2, avePrice: 5},
//                  {name: 'Toaste', quantity: 0, avePrice: 10},
//                  {name: 'Books', quantity: 4, avePrice: 3.50}];

market.marketItemsArray = MarketService.marketItemsArray;

console.log(market.marketItemsArray);

market.cart = MarketService.cart;

console.log("cart", market.cart);

market.cartItemArray = market.cart.cartItemsArray;

 market.newCartItem = function (object){
  console.log('NG Click "clicked"', object);
  market.cart.addItem(object);
  console.log(market.cart);
};


}]);
