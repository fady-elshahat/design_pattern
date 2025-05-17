// Base Component: the main object to decorate
class Coffee {
     cost() {
          return 5;
     }

     description() {
          return "Plain Coffee";
     }
}

// Decorator base class (optional): provides a structure for decorators
class CoffeeDecorator {
     constructor ( coffee ) {
          this.coffee = coffee;
     }

     cost() {
          return this.coffee.cost();
     }

     description() {
          return this.coffee.description();
     }
}

// Concrete Decorator: adds Milk to the coffee
class MilkDecorator extends CoffeeDecorator {
     cost() {
          return super.cost() + 2; // add $2 for milk
     }

     description() {
          return super.description() + ", Milk";
     }
}

// Concrete Decorator: adds Sugar to the coffee
class SugarDecorator extends CoffeeDecorator {
     cost() {
          return super.cost() + 1; // add $1 for sugar
     }

     description() {
          return super.description() + ", Sugar";
     }
}

// ========================
// Example usage
// ========================

// Create a plain coffee
let coffee = new Coffee();

// Decorate it with milk
coffee = new MilkDecorator( coffee );

// Then decorate it with sugar
coffee = new SugarDecorator( coffee );

// Output final decorated coffee details
console.log( coffee.description() ); // Plain Coffee, Milk, Sugar
console.log( `Total: $${ coffee.cost() }` ); // Total: $8
   