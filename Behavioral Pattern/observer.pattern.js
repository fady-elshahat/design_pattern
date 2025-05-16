// Subject class: maintains a list of observers and notifies them of changes
class Subject {
     constructor () {
          this.observers = []; // List of subscribed observers
     }

     // Method to add an observer to the list
     subscribe( observer ) {
          this.observers.push( observer );
     }

     // Method to remove an observer from the list
     unsubscribe( observer ) {
          this.observers = this.observers.filter( obs => obs !== observer );
     }

     // Notify all observers with the provided data
     notify( data ) {
          this.observers.forEach( observer => observer.update( data ) );
     }
}

// Observer class: defines the update method to handle notifications
class Observer {
     constructor ( name ) {
          this.name = name;
     }

     // Called when the subject notifies observers
     update( data ) {
          console.log( `${ this.name } received update: ${ data }` );
     }
}

// Example usage:

// Create a subject instance
const stock = new Subject();

// Create two observers
const observer1 = new Observer( "User 1" );
const observer2 = new Observer( "User 2" );

// Subscribe both observers to the subject
stock.subscribe( observer1 );
stock.subscribe( observer2 );

// Notify all observers with new data
stock.notify( "Stock price changed to $150" );

// Unsubscribe the second observer
stock.unsubscribe( observer2 );

// Notify remaining observers again
stock.notify( "Stock price changed to $180" );
   

// console
// User 1 received update: Stock price changed to $150
// User 2 received update: Stock price changed to $150
// User 1 received update: Stock price changed to $180