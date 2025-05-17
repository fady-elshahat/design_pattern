// -------------------------------
// 🎥 Subsystem Classes (Internal Logic)
// -------------------------------

// 💥 Without Facade:

// Handles video playback
class VideoPlayer {
     play() {
          console.log( "🎥 Playing movie..." );
     }
}

// Handles room lighting
class Lights {
     dim() {
          console.log( "💡 Lights dimmed." );
     }
}

// Handles sound settings
class SoundSystem {
     setVolume( level ) {
          console.log( `🔊 Volume set to ${ level }.` );
     }
   }


// You need to call them one by one:
const player = new VideoPlayer();
const lights = new Lights();
const sound = new SoundSystem();

lights.dim();
sound.setVolume( 5 );
player.play();

// OUTOUT
// 💡 Lights dimmed.
// 🔊 Volume set to 5.
// 🎥 Playing movie...


// ==============================================================================================


// -------------------------------
// 🎯 Facade Class (Simplifies Usage)
// -------------------------------

class HomeTheaterFacade {
     constructor () {
          // Initialize all the subsystems
          this.player = new VideoPlayer();
          this.lights = new Lights();
          this.sound = new SoundSystem();
     }

     // High-level method to start a movie night
     watchMovie() {
          console.log( "🍿 Getting ready to watch a movie..." );

          // Call multiple subsystems in the correct order
          this.lights.dim();
          this.sound.setVolume( 5 );
          this.player.play();
     }
}

// -------------------------------
// ✅ Client Code (Simple Interface)
// -------------------------------

// The user only needs to interact with the Facade
const theater = new HomeTheaterFacade();

// Start watching a movie using just one method
theater.watchMovie();


// OUTPUT

// 🍿 Getting ready to watch a movie...
// 💡 Lights dimmed.
// 🔊 Volume set to 5.
// 🎥 Playing movie...