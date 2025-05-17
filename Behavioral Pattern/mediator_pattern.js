// Ex 1

// Mediator: ChatRoom handles the communication between users
class ChatRoom {
     showMessage( user, message ) {
          const time = new Date().toLocaleTimeString(); // Get current time
          console.log( `[${ time }] ${ user.name }: ${ message }` ); // Format and display the message
     }
}

// Colleague: User who communicates via the mediator (ChatRoom)
class User {
     constructor ( name, chatRoom ) {
          this.name = name;           // Name of the user
          this.chatRoom = chatRoom;   // Reference to the mediator
     }

     // Send message via the mediator
     send( message ) {
          this.chatRoom.showMessage( this, message );
     }
}

// ====================
// Example Usage
// ====================

const chatRoom = new ChatRoom(); // Create mediator instance

// Create users and pass the chat room (mediator) reference
const alice = new User( "Alice", chatRoom );
const bob = new User( "Bob", chatRoom );

// Users send messages via the chat room
alice.send( "Hello Bob!" );   // [time] Alice: Hello Bob!
bob.send( "Hi Alice!" );      // [time] Bob: Hi Alice!
   



// Exa 2

// Mediator: Coordinates interaction between UI components
class FormMediator {
     constructor () {
          this.textInput = null;
          this.checkbox = null;
          this.submitButton = null;
     }

     // Register components with the mediator
     registerTextInput( textInput ) {
          this.textInput = textInput;
          textInput.setMediator( this );
     }

     registerCheckbox( checkbox ) {
          this.checkbox = checkbox;
          checkbox.setMediator( this );
     }

     registerSubmitButton( button ) {
          this.submitButton = button;
          button.setMediator( this );
     }

     // Called by components when their state changes
     notify( sender, event ) {
          if ( sender === this.checkbox && event === "checked" ) {
               this.textInput.enable();
               this.submitButton.enable();
          }

          if ( sender === this.checkbox && event === "unchecked" ) {
               this.textInput.disable();
               this.submitButton.disable();
          }
     }
}

// Base class for UI elements
class Component {
     setMediator( mediator ) {
          this.mediator = mediator;
     }
}

// UI Component: Checkbox
class Checkbox extends Component {
     check() {
          console.log( "☑️ Checkbox checked" );
          this.mediator.notify( this, "checked" );
     }

     uncheck() {
          console.log( "☐ Checkbox unchecked" );
          this.mediator.notify( this, "unchecked" );
     }
}

// UI Component: Text Input
class TextInput extends Component {
     enable() {
          console.log( "📝 Text input enabled" );
     }

     disable() {
          console.log( "❌ Text input disabled" );
     }
}

// UI Component: Submit Button
class SubmitButton extends Component {
     enable() {
          console.log( "✅ Submit button enabled" );
     }

     disable() {
          console.log( "🚫 Submit button disabled" );
     }
}

// ===================
// Example Usage
// ===================

const mediator = new FormMediator();

// Create UI components
const checkbox = new Checkbox();
const textInput = new TextInput();
const submitButton = new SubmitButton();

// Register them with the mediator
mediator.registerCheckbox( checkbox );
mediator.registerTextInput( textInput );
mediator.registerSubmitButton( submitButton );

// Simulate user interaction
checkbox.check();    // Enables text input and submit
checkbox.uncheck();  // Disables both again
   