myApp.factory('MarketService', function($interval){
  console.log("Hello from the factory.");

  // constants
  // market item prices
  const INITIAL_PRICE = 5.00;
  const MIN_PRICE = 0.50;
  const MAX_PRICE = 9.99;
  // price change min/max
  const MIN_PRICE_CHANGE = 0.01;
  const MAX_PRICE_CHANGE = 0.50;
  // time between price changes
  const PRICE_CHANGE_INTERVAL = 15000;

  class Util {
    constructor() {}

    static randomNumber(min, max) {
      return Math.round(100*Math.random() * max + min)/100;
    }
  }

  intervalPriceChange = () => {
    // loop through array

    for (item of marketItemsArray) {
      // determine price change
      let positive = (Math.random() > 0.5) ? 1 : -1;
      let priceChange = positive * Util.randomNumber(MIN_PRICE_CHANGE, MAX_PRICE_CHANGE);
      // apply price change
      let oldPrice = item.getPrice();
      let newPrice = oldPrice + priceChange;
      item.setPrice(newPrice);
      checkMinMaxPrice(item);
    } // end for-loop
  }

  checkMinMaxPrice = (item) => {
    let currentPrice = item.getPrice();
    if (currentPrice > MAX_PRICE) {
      item.setPrice(MAX_PRICE);
    } else if (currentPrice < MIN_PRICE) {
      item.setPrice(MIN_PRICE);
    }
  }

  $interval(intervalPriceChange, PRICE_CHANGE_INTERVAL);


  // parent class
  class MarketItem {
    constructor(name, image, price, category) {
      this.name = name;
      this.image = image;
      this.price = price;
      this.category = category;

    }

    getPrice() {
      return this.price;
    }

    setPrice(price) {
      this.price = price;
    }
  }

  // extension classes of MarketItem
  class Fruit extends MarketItem {
    constructor(name, image, price) {
      super(name, image, price, 'fruit');
    }
  }

  class SmallElectronic extends MarketItem {
    constructor(name, image, price) {
      super(name, image, price, 'small electronic');
    }
  }

  class Collectible extends MarketItem {
    constructor(name, image, price) {
      super(name, image, price, 'collectible');
    }
  }

  // instantiation of objects from 3 subclasses
  let apple = new Fruit('apple', 'images/apple.png', INITIAL_PRICE);
  let orange = new Fruit('orange', 'images/orange.png', INITIAL_PRICE);
  let banana = new Fruit('banana', 'images/banana.png', INITIAL_PRICE);
  let grapes = new Fruit('grapes', 'images/grapes.jpg', INITIAL_PRICE);
  let toaster = new SmallElectronic('toaster', 'images/toaster.jpg', INITIAL_PRICE);
  let lamp = new SmallElectronic('lamp', 'images/lamp.jpg', INITIAL_PRICE);
  let clock = new SmallElectronic('clock', 'images/clock.png', INITIAL_PRICE);
  let bluRayPlayer = new SmallElectronic('blu ray player', 'images/bluray.jpg', INITIAL_PRICE);
  let comicBook = new Collectible('comic book', 'images/comics.jpg', INITIAL_PRICE);
  let fancyStuffedAnimal = new Collectible('fancy stuffed animal', 'images/stuffed.jpg', INITIAL_PRICE);
  let jewelry = new Collectible('jewelry', 'images/jewelry.jpg', INITIAL_PRICE);
  let wine = new Collectible('wine', 'images/wine.jpg', INITIAL_PRICE);

  let marketItemsArray = [apple, orange, banana, grapes, toaster, lamp, clock,
    bluRayPlayer, comicBook, fancyStuffedAnimal, jewelry, wine];

  class Cart {
    constructor(itemNamesArray) {
      this.cartItemsArray = [];
      for (let item of itemNamesArray) {
        let newCartItem = new CartItem(item);
        this.cartItemsArray.push(newCartItem);
      }
  }

    addItem(thing, quantityAdded = 1) {
      let name = thing.name;
      console.log(name);
      let price = thing.price;
      console.log(price);
      for (let item of this.cartItemsArray) {
        console.log("item", item);
        if (item.name === name) {
          // takes price property from clicked thing & updates average price
          console.log("item's price", item.avgPrice);
          item.changeAvgPrice(price, quantityAdded);
          // increments quantity
          item.changeQuantity(quantityAdded);
        }
      }
    }
  }

class CartItem {
  constructor(name, quantity = 0, avgPrice = 0) {
    this.name = name;
    this.quantity = quantity;
    this.avgPrice = avgPrice;
  }
  changeAvgPrice(currentPrice, quantityAdded) {
    console.log("quantity added", quantityAdded)
    let totalPaid = this.quantity * this.avgPrice;
    let newTotalPaid = totalPaid + currentPrice;
    this.avgPrice = newTotalPaid / (this.quantity + quantityAdded);
  }//end changeAvgPrice

  changeQuantity(quantityAdded) {
    this.quantity += quantityAdded;
  }
}// end cartItem

let cart = new Cart(['apple', 'orange', 'banana', 'grapes', 'toaster', 'lamp',
  'clock', 'blu ray player', 'comic book', 'fancy stuffed animal', 'jewelry', 'wine'])

  return {
    marketItemsArray,
    cart
  };
});
