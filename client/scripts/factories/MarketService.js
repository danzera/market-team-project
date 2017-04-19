myApp.factory('MarketService', function(){
  console.log("hi");

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

  let papaya = new Fruit('papaya', 2);
  console.log(papaya);

  return {

  };
});
