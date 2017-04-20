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
  const PRICE_CHANGE_INTERVAL = 15000;

  class Util {
    constructor() {}

    static randomNumber(min, max) {
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
  }
  // setInterval(function() {
  //   console.log("Hello");
  // }, PRICE_CHANGE_INTERVAL);

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

  let marketItemsArray =

  return {

  };
});
