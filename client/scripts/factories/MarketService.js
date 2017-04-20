myApp.factory('MarketService', function(){
  console.log("hi");

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

  // child class
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

  let papaya = new Fruit('papaya', 2);
  console.log(papaya);

  return {
    Fruit,
    SmallElectronic,
    Collectible
  };
});
