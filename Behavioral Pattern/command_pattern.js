// ==========================
// Receiver: the actual object that performs the actions
// ==========================
class Light {
     on() {
          console.log( "💡 The light is ON" );
     }

     off() {
          console.log( "💡 The light is OFF" );
     }
}

// ==========================
// Command Interface: Each command implements an 'execute' method
// ==========================

// Command to turn the light ON
class LightOnCommand {
     constructor ( light ) {
          this.light = light;
     }

     execute() {
          this.light.on(); // Delegate to the receiver
     }
}

// Command to turn the light OFF
class LightOffCommand {
     constructor ( light ) {
          this.light = light;
     }

     execute() {
          this.light.off(); // Delegate to the receiver
     }
}

// ==========================
// Invoker: Stores and triggers the command
// ==========================
class RemoteControl {
     setCommand( command ) {
          this.command = command; // Store the command
     }

     pressButton() {
          this.command.execute(); // Trigger the command
     }
}

// ==========================
// Example usage
// ==========================

// Create a receiver
const light = new Light();

// Create command objects with the receiver
const lightOn = new LightOnCommand( light );
const lightOff = new LightOffCommand( light );

// Create an invoker
const remote = new RemoteControl();

// Press ON
remote.setCommand( lightOn );
remote.pressButton(); // 💡 The light is ON

// Press OFF
remote.setCommand( lightOff );
remote.pressButton(); // 💡 The light is OFF
   