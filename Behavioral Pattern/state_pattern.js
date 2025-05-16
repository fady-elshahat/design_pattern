// Context: Fan
class Fan {
     constructor () {
          this.state = new OffState(); // Initial state is OFF
     }

     setState( state ) {
          this.state = state;
     }

     pressButton() {
          this.state.pressButton( this );
     }
}

// State interface (not enforced in JS, just a convention)
class FanState {
     pressButton( fan ) {
          throw new Error( "pressButton() must be implemented" );
     }
}

// Concrete State: OFF
class OffState extends FanState {
     pressButton( fan ) {
          console.log( "🌀 Turning fan ON" );
          fan.setState( new OnState() );
     }
}

// Concrete State: ON
class OnState extends FanState {
     pressButton( fan ) {
          console.log( "⛔ Turning fan OFF" );
          fan.setState( new OffState() );
     }
}

// ====================
// Example usage
// ====================

const fan = new Fan();

fan.pressButton(); // 🌀 Turning fan ON
fan.pressButton(); // ⛔ Turning fan OFF
fan.pressButton(); // 🌀 Turning fan ON
   