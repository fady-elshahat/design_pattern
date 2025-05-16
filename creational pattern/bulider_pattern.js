// The Person class - represents the final object to be built
class Person {
     constructor ( name, age, height, weight ) {
          this.name = name;
          this.age = age;
          this.height = height;
          this.weight = weight
     }
}

// The PersonBuilder class - helps build a Person instance step by step
class PersonBuilder {
     constructor ( name, age ) {
          this.name = name;
          this.age = age;
          // height and weight are optional, set later via setters
     }

     // Setter method for weight - returns 'this' for method chaining
     setWeight( weight ) {
          this.weight = weight
          return this
     }

     // Setter method for height - returns 'this' for method chaining
     setHeight( height ) {
          this.height = height
          return this
     }

     // Final build method that creates and returns a Person instance
     build() {
          return new Person( this.name, this.age, this.height, this.weight )
     }

}

// Create a Person using the builder pattern with method chaining
const person = new PersonBuilder( 'Fady', 26 ).setWeight( 75 ).setHeight( 168 ).build()


// Output the result
console.log( person ) // Person { name: 'Fady', age: 26, height: 168, weight: 75 }
