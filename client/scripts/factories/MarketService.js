myApp.factory('MarketService', function(){
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
  const PRICE_CHANGE_INTERVAL = 5000;

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
      console.log(item.name, 'old price:', oldPrice);
      let newPrice = oldPrice + priceChange;
      item.setPrice(newPrice);
      checkMinMaxPrice(item);
      console.log(item.name, 'new price:', item.getPrice());
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

  setInterval(intervalPriceChange, PRICE_CHANGE_INTERVAL);

  // parent class
  class MarketItem {
    constructor(name, price, category) {
      this.name = name;
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
    constructor(name, price) {
      super(name, price, 'fruit');
    }
  }

  class SmallElectronic extends MarketItem {
    constructor(name, price) {
      super(name, price, 'small electronic');
    }
  }

  class Collectible extends MarketItem {
    constructor(name, price) {
      super(name, price, 'collectible');
    }
  }

  // instantiation of objects from 3 subclasses
  let apple = new Fruit('apple', INITIAL_PRICE);
  let orange = new Fruit('orange', INITIAL_PRICE);
  let banana = new Fruit('banana', INITIAL_PRICE);
  let grapes = new Fruit('grapes', INITIAL_PRICE);
  let toaster = new SmallElectronic('toaster', INITIAL_PRICE);
  let lamp = new SmallElectronic('lamp', INITIAL_PRICE);
  let clock = new SmallElectronic('clock', INITIAL_PRICE);
  let bluRayPlayer = new SmallElectronic('blu ray player', INITIAL_PRICE);
  let comicBook = new Collectible('comic book', INITIAL_PRICE);
  let fancyStuffedAnimal = new Collectible('fancy stuffed animal', INITIAL_PRICE);
  let jewelry = new Collectible('jewelry', INITIAL_PRICE);
  let wine = new Collectible('wine', INITIAL_PRICE);

  let marketItemsArray = [apple, orange, banana, grapes, toaster, lamp, clock,
    bluRayPlayer, comicBook, fancyStuffedAnimal, jewelry, wine];

  return {
    marketItemsArray
  };
});
