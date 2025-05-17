// Leaf class: Represents individual objects (files)
class File {
     constructor ( name ) {
          this.name = name;
     }

     // Display file with indentation
     display( indent = '' ) {
          console.log( `${ indent }📄 ${ this.name }` );
     }
}

// Composite class: Represents complex objects that can contain children
class Folder {
     constructor ( name ) {
          this.name = name;
          this.children = [];
     }

     // Add child (can be File or Folder)
     add( child ) {
          this.children.push( child );
     }

     // Display folder and its contents with indentation
     display( indent = '' ) {
          console.log( `${ indent }📁 ${ this.name }` );
          this.children.forEach( child => child.display( indent + '  ' ) );
     }
}

// Example usage:

// Create individual files (leaf nodes)
const file1 = new File( "file1.txt" );
const file2 = new File( "file2.txt" );
const file3 = new File( "resume.pdf" );

// Create a folder and add files to it
const folder1 = new Folder( "Documents" );
folder1.add( file1 );
folder1.add( file2 );

// Create a root folder and add folder and file to it
const mainFolder = new Folder( "Desktop" );
mainFolder.add( folder1 );
mainFolder.add( file3 );

// Display the entire file structure
mainFolder.display();

// ✅ Output: 
     // 📁 Desktop
     //   📁 Documents
     //     📄 file1.txt
     //     📄 file2.txt
     //   📄 resume.pdf