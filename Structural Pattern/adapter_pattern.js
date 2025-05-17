// ✅ This is the old class with a different interface
class OldPrinter {
     printOld() {
          console.log( "🖨️ Printing using OLD printer..." );
     }
}

// ✅ This is the Adapter that adapts the old interface to the new one
class PrinterAdapter {
     constructor ( oldPrinter ) {
          this.oldPrinter = oldPrinter;
     }

     // Expose the new method name
     print() {
          this.oldPrinter.printOld();
     }
}

// ✅ This is the new client code expecting a print() method
function printDocument( printer ) {
     printer.print();
}

// ✅ Usage
const oldPrinter = new OldPrinter();           // Old object
const adaptedPrinter = new PrinterAdapter( oldPrinter ); // Adapter

printDocument( adaptedPrinter ); // 🖨️ Printing using OLD printer...
   