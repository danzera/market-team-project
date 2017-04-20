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

  return {
    marketItemsArray
  };
});
