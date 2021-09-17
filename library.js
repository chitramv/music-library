const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const obj1 = library.playlists;
  for (let elem in obj1){
    console.log(`${elem}: ${obj1[elem]['name']} - ${obj1[elem]['tracks'].length} tracks`);
  }
};
//printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const obj1 = library.tracks;
  for (let elem in obj1) {
    console.log(`${elem}: ${obj1[elem]['name']} by ${obj1[elem]['artist']} (${obj1[elem]['album']})`);
  }
}
//printTracks();
// print tracks corresponsing to a trackid
const printTrackById = function(trackId) {
       const obj1 = library.tracks;
       const elem = obj1[trackId];
         console.log(`${elem['id']}: ${elem['name']} by ${elem['artist']} (${elem['album']})`);

     }
    // printTrackById('t01');


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const obj1 = library.playlists;
       const elem = playlistId;
       console.log(`${elem}: ${obj1[elem]['name']} - ${obj1[elem]['tracks'].length} tracks`);
       for (let item of obj1[playlistId]['tracks']){
              printTrackById(item);
       }
}
//printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       const obj1 = library.playlists;
       obj2 = obj1[playlistId];
       obj2['tracks'].push(trackId);
       console.log(obj2);
}
//addTrackToPlaylist('t01','p02');


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
const obj1 = library.tracks;
const trackId = generateUid();
obj1[trackId] = {};
obj1[trackId]['id'] = trackId;
obj1[trackId]['name'] = name;
obj1[trackId]['artist'] = artist;
obj1[trackId]['album'] = album;
console.log(obj1[trackId]);
}
//addTrack('Closure','Mini','filo');



// adds a playlist to the library
const addPlaylist = function(name) {
  const obj1 = library.playlists;
  const playlistId = generateUid();
  obj1[playlistId] = {};
  obj1[playlistId]['id'] = playlistId;
  obj1[playlistId]['name'] = name;
  console.log(obj1[playlistId]);
}
addPlaylist("Chitra");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}