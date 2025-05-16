// Base class (acts as prototype)
class Animal{
     constructor ( name, sound ) {
          this.name = name;
          this.sound = sound;
     }

     speak() {
          console.log( `${ this.name } says: ${ this.sound }` );
     }

     // 🔁 Clone method - core of Prototype Pattern
     clone() {
          return new Animal( this.name, this.sound );
     }
}

// 🐶 Create an instance
const dog = new Animal( "Dog", "Woof" );

// 📋 Clone the instance
const dogCopy = dog.clone();

// 🔊 Use the method
dog.speak();      // Dog says: Woof
dogCopy.speak();  // Dog says: Woof

// ✅ Check that they are different instances
console.log( dog === dogCopy ); // false