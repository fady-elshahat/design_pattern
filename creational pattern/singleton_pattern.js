// Define the ProcessManager class - the actual object we want only one instance of
class ProcessManager {

     constructor () {
          // Just a log message to show that a new instance was created (should only appear once)
          console.log( 'ProcessManager instance created' )
     }

     // You can add ProcessManager methods or properties here

}


// Define the Singleton class - responsible for ensuring only one ProcessManager instance exists
class Singleton {
     // Private static field to store the single instance of ProcessManager
     static #instance = null

     // Prevent instantiation of Singleton class directly
     constructor () {
          throw new Error( 'Use Singleton.getProcessManager() instead of new.' )
     }

     // Static method to get the ProcessManager instance
     static getProcessManager() {
          // If no instance exists, create one
          if ( !Singleton.#instance ) {
               Singleton.#instance = new ProcessManager()
          }

          // Return the existing instance
          return Singleton.#instance
     }
}

// Try getting two instances using the Singleton
const singleton = Singleton.getProcessManager()
const singleton2 = Singleton.getProcessManager()

// This will log true, since both variables point to the same instance
console.log( singleton === singleton2 )  // true