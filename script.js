const songs = [{ songName: "wild & free", artist: "maxxteen, darkway", filePath: "https://open.spotify.com/embed/track/1Z5U1yTAvlYGP66R8obcqt?utm_source=generator" }, { songName: "Our time", artist: "martin, amel", filePath: "https://open.spotify.com/embed/track/3MUFebos5drIwrUHxUorhP?utm_source=generator" }];

const playlists = [{ playlistName: "Chill Vibes", songs: ["wild & free", "let me love u"], coverPath: "covers/chillVibes.jpg" }, { playlistName: "Party Hits", songs: ["alone", "sugar"], coverPath: "covers/partyHits.jpg" }];


songsDiv = document.querySelector(".songs-layout");
console.log("🚀 ~ songsDiv:", songsDiv)
songs.map((song) => {
  songDiv = document.createElement("iframe");
  songDiv.src = song.filePath;
  songDiv.width = "30%";
  songDiv.height = "352";
  songDiv.frameBorder = "0";
  songDiv.allowFullscreen = "";
  songDiv.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  songDiv.loading = "lazy";
  songDiv.style.display = "inline-block";
  songDiv.style.margin = "10px";
  songsDiv.appendChild(songDiv);
})
