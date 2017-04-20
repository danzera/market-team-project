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

  // extension classes of categorical market items
  // FRUITS
  class Apple extends Fruit {
    constructor() {
      super('Apple', INITIAL_PRICE);
    }
  }

  class Orange extends Fruit {
    constructor() {
      super('Orange', INITIAL_PRICE);
    }
  }

  class Banana extends Fruit {
    constructor() {
      super('Banana', INITIAL_PRICE);
    }
  }

  class Grapes extends Fruit {
    constructor() {
      super('Grapes', INITIAL_PRICE);
    }
  }

  // SMALL ELECTRONICS
  class Toaster extends SmallElectronic {
    constructor() {
      super('Toaster', INITIAL_PRICE);
    }
  }

  class Lamp extends SmallElectronic {
    constructor() {
      super('Lamp', INITIAL_PRICE);
    }
  }

  class Clock extends SmallElectronic {
    constructor() {
      super('Clock', INITIAL_PRICE);
    }
  }

  class BluRayPlayer extends SmallElectronic {
    constructor() {
      super('BluRay Player', INITIAL_PRICE);
    }
  }

  class ComicBook extends Collectible {
    constructor() {
      super('Comic Book', INITIAL_PRICE);
    }
  }

  class FancyStuffedAnimal extends Collectible {
    constructor() {
      super('Fancy Stuffed Animal', INITIAL_PRICE);
    }
  }

  class Jewelry extends Collectible {
    constructor() {
      super('Jewelry', INITIAL_PRICE);
    }
  }

  class Wine extends Collectible {
    constructor() {
      super('Wine', INITIAL_PRICE);
    }
  }



  // let oranges = new Fruit('Oranges', INITIAL_PRICE);
  // let bananas = new Fruit('Bananas', INITIAL_PRICE);
  // let grapes = new Fruit('Grapes', INITIAL_PRICE);
  // let toasters = new SmallElectronic('Toasters', INITIAL_PRICE);
  // let lamps = new SmallElectronic('Lamps', INITIAL_PRICE);
  // let clocks = new SmallElectronic('Clocks', INITIAL_PRICE);
  // let bluRayPlayers = new SmallElectronic('Blu Ray Players', INITIAL_PRICE);

  return {
    Apple,
    Orange,
    Banana,
    Grapes,
    Toaster,
    Lamp,
    Clock,
    BluRayPlayer,
    ComicBook,
    FancyStuffedAnimal,
    Jewelry,
    Wine
  };
});
