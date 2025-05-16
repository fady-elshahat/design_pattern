// 🦁 Abstract Product
class Animal {
     speak() {
          throw new Error( "speak() must be implemented" );
     }
}

// 🐘 Concrete Products (Africa)
class AfricanLion extends Animal {
     speak() {
          console.log( "🦁 African Lion: Roar!" );
     }
}

class AfricanElephant extends Animal {
     speak() {
          console.log( "🐘 African Elephant: Trumpet!" );
     }
}

// 🐅 Concrete Products (Asia)
class AsianTiger extends Animal {
     speak() {
          console.log( "🐅 Asian Tiger: Grrr!" );
     }
}


class AsianElephant extends Animal {
     speak() {
          console.log( "🐘 Asian Elephant: Prrr!" );
     }
}

// 🏭 Abstract Factory
class AnimalFactory {
     createPredator() { }
     createHerbivore() { }
}
// 🐯 Concrete Factory (Africa)
class AfricaFactory extends AnimalFactory {
     createPredator() {
          return new AfricanLion();
     }

     createHerbivore() {
          return new AfricanElephant();
     }
}

// 🌏 Concrete Factory: Asia
class AsiaFactory extends AnimalFactory {
     createPredator() {
          return new AsianTiger();
     }

     createHerbivore() {
          return new AsianElephant();
     }
}

// 👨‍💻 Client
function showAnimals( factory ) {
     const predator = factory.createPredator();
     const herbivore = factory.createHerbivore();

     predator.speak();
     herbivore.speak();
}

// ✅ Usage
console.log( "African Animals:" );
showAnimals( new AfricaFactory() );
// African Animals:
// 🦁 African Lion: Roar!
// 🐘 African Elephant: Trumpet!

console.log( "\nAsian Animals:" );
showAnimals( new AsiaFactory() );
// Asian Animals:
// 🐅 Asian Tiger: Grrr!
// 🐘 Asian Elephant: Prrr!



