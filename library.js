const playlist = [
  {
    playlistName: "",
    artist: "",
    filePath:
      "https://open.spotify.com/embed/playlist/3sdEH7HfFE3d4xry5RnnLr?utm_source=generator",
  },
];

playlistDiv = document.querySelector(".playlist");
console.log("🚀 ~ playlistDiv:", playlistDiv);
playlists.map((playlist) => {
  playlistDiv = document.createElement("iframe");
  playlistDiv.src = playlist.filePath;
  playlistDiv.width = "";
  playlistDiv.height = "";
  playlistDiv.frameBorder = "0";
  playlistDiv.allowFullscreen = "";
  playlistDiv.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  playlistDiv.loading = "lazy";
  playlistDiv.style.display = "inline-block";
  playlistDiv.style.margin = "10px";
  playlistDiv.appendChild(playlistDiv);
});
