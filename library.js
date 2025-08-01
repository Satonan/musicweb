const playlists = [
  {
    playlistName: "",
    artist: "",
    filePath:
      "https://open.spotify.com/embed/playlist/3sdEH7HfFE3d4xry5RnnLr?utm_source=generator",
  },
  {
    playlistName: "",
    artist: "",
    filePath:
      "https://open.spotify.com/embed/album/1OVibN37sJiU2M9cCbL950?utm_source=generator",
  },
];

let playlistDiv = document.querySelector(".playlist");
console.log("🚀 ~ playlistDiv:", playlistDiv);
playlists.map((playlist) => {
  childPlaylistDiv = document.createElement("iframe");
  childPlaylistDiv.src = playlist.filePath;
  childPlaylistDiv.width = "100%";
  childPlaylistDiv.height = "200";
  childPlaylistDiv.frameBorder = "0";
  childPlaylistDiv.allowFullscreen = "";
  childPlaylistDiv.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  childPlaylistDiv.loading = "lazy";
  childPlaylistDiv.style.display = "inline-block";
  childPlaylistDiv.style.margin = "0px";
  playlistDiv.appendChild(childPlaylistDiv);
});
