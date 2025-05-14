// Base class for all employees
class Employee {
     constructor ( name, type ) {
          this.name = name;
          this.type = type;
     }

     sayHi() {
          console.log( `Hi, I am ${ this.name } and I am a ${ this.type }` );
     }
}

// Developer class extending Employee
class Developer extends Employee {
     constructor ( name ) {
          super( name, "Developer" );
     }
}

// Tester class extending Employee
class Tester extends Employee {
     constructor ( name ) {
          super( name, "Tester" );
     }
 }


// Factory class to create employees based on type
class EmployeeFactory {
     create( name, type ) {
          switch ( type ) {
               case 1:
                    return new Developer( name );
               case 2:
                    return new Tester( name );
               default:
                    throw new Error( "Invalid employee type" );
          }
     }
}

// Using the factory
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push( employeeFactory.create( 'Fady Elshahat', 1 ) );
employees.push( employeeFactory.create( 'Amr Saad', 1 ) );
employees.push( employeeFactory.create( 'Remon Ramzy', 2 ) );

// Each employee says hi
employees.forEach( emp => emp.sayHi() );