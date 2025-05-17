// Real Subject: the actual video service
class VideoService {
     watchVideo( title ) {
          console.log( `🎬 Now playing: ${ title }` );
     }
}

// Proxy: adds logging and access control
class ProxyVideoService {
     constructor ( user ) {
          this.user = user;
          this.realService = new VideoService();
     }

     watchVideo( title ) {
          // Logging
          console.log( `📚 Log: User "${ this.user }" requested "${ title }"` );

          // Simple access control
          if ( title.toLowerCase().includes( "restricted" ) ) {
               console.log( `❌ Access denied to "${ title }" for user "${ this.user }"` );
               return;
          }

          // Delegating to the real object
          this.realService.watchVideo( title );
     }
}

// =========================
// Example usage
// =========================

const user = "Fady";
const videoProxy = new ProxyVideoService( user );

// Allowed video
videoProxy.watchVideo( "JavaScript Tutorial" );

// Restricted video
videoProxy.watchVideo( "Restricted Secret Episode" );


// ✅ Output:
// 📚 Log: User "Fady" requested "JavaScript Tutorial"
// 🎬 Now playing: JavaScript Tutorial

// 📚 Log: User "Fady" requested "Restricted Secret Episode"
// ❌ Access denied to "Restricted Secret Episode" for user "Fady"


// =============================================================================================





// Example 2

// 🧩 Real Service: External API that returns cryptocurrency values
class CryptocurrencyAPI {
     getValue( coin ) {
          console.log( "📡 Calling External API..." );
          switch ( coin ) {
               case "Bitcoin":
                    return "$8,500";
               case "Litecoin":
                    return "$50";
               case "Ethereum":
                    return "$175";
               default:
                    return "NA";
          }
     }
}

// ========================
// 🧪 Without Proxy (No Caching)
// ========================
const api = new CryptocurrencyAPI();

console.log( "----------Without Proxy----------" );
console.log( api.getValue( "Bitcoin" ) );   // Calls external API
console.log( api.getValue( "Litecoin" ) );  // Calls external API
console.log( api.getValue( "Ethereum" ) );  // Calls external API
console.log( api.getValue( "Bitcoin" ) );   // Calls again
console.log( api.getValue( "Litecoin" ) );  // Calls again
console.log( api.getValue( "Ethereum" ) );  // Calls again


// 🧩 Proxy Class: Adds caching layer to reduce API calls
class CryptocurrencyProxy {
     constructor () {
          this.api = new CryptocurrencyAPI(); // Real API service
          this.cache = {};                    // Stores cached results
     }

     // 🔁 Retrieves from cache or calls API
     getValue( coin ) {
          if ( !this.cache[ coin ] ) {
               // Cache miss → Call real API and store result
               this.cache[ coin ] = this.api.getValue( coin );
          }
          return this.cache[ coin ]; // Cache hit → Return stored value
     }
}

// ========================
// ✅ With Proxy (Using Cache)
// ========================
console.log( "----------With Proxy----------" );
const proxy = new CryptocurrencyProxy();

console.log( proxy.getValue( "Bitcoin" ) );   // Calls external API
console.log( proxy.getValue( "Litecoin" ) );  // Calls external API
console.log( proxy.getValue( "Ethereum" ) );  // Calls external API
console.log( proxy.getValue( "Bitcoin" ) );   // From cache
console.log( proxy.getValue( "Litecoin" ) );  // From cache
console.log( proxy.getValue( "Ethereum" ) );  // From cache