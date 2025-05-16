// ===================
// Strategy classes
// ===================

// Normal printing strategy
class NormalStrategy {
     execute( text ) {
          return text;
     }
}

// Converts text to UPPERCASE
class UpperCaseStrategy {
     execute( text ) {
          return text.toUpperCase();
     }
}

// Converts text to lowercase
class LowerCaseStrategy {
     execute( text ) {
          return text.toLowerCase();
     }
}

// ===================
// Context class
// ===================

// Printer class that uses a strategy to print text
class Printer {
     setStrategy( strategy ) {
          this.strategy = strategy; // Set the current strategy
     }

     print( text ) {
          // Use the current strategy to print the text
          console.log( this.strategy.execute( text ) );
     }
}

// ===================
// Example usage
// ===================

const printer = new Printer();

// Use normal strategy
printer.setStrategy( new NormalStrategy() );
printer.print( "Hello Strategy Pattern" ); // Output: Hello Strategy Pattern

// Switch to uppercase strategy
printer.setStrategy( new UpperCaseStrategy() );
printer.print( "Hello Strategy Pattern" ); // Output: HELLO STRATEGY PATTERN

// Switch to lowercase strategy
printer.setStrategy( new LowerCaseStrategy() );
printer.print( "Hello Strategy Pattern" ); // Output: hello strategy pattern
   