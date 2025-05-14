function Developer( name ) {
     this.name = name;
     this.type = "Developer";
}

function Tester( name ) {
     this.name = name;
     this.type = "Tester";
}

function EmployeeFactory() {
     this.create = ( name, type ) => {
          switch ( type ) {
               case 1:
                    return new Developer( name )
                    break;
               case 2:
                    return new Tester( name )
                    break;
               default:
                    break;
          }
     }
}

function sayHi() {
     console.log( "Hi, I am " + this.name + "and I am a " + this.type )
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push( employeeFactory.create( 'Fady Elshahat', 1 ) );
employees.push( employeeFactory.create( 'Amr Saad', 1 ) );
employees.push( employeeFactory.create( 'Remon Ramzy', 2 ) );

employees.map( ( emp ) => {
     sayHi.call( emp )
} )