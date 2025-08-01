const songs = [
  {
    songName: "ჩუბინა",
    artist: "East Duo",
    filePath:
      "https://open.spotify.com/embed/track/0YAGCZjsDqw6yud2PTMuvu?utm_source=generator",
  },
  {
    songName: "Our time",
    artist: "martin, amel",
    filePath:
      "https://open.spotify.com/embed/track/3MUFebos5drIwrUHxUorhP?utm_source=generator",
  },
  {
    songName: "And Then is Heard No More",
    artist: "Mili",
    filePath:
      "https://open.spotify.com/embed/track/6RvyoAzwuqmrCqhM8MwPjP?utm_source=generator",
  },
  {
    songName: "Gone Angel",
    artist: "Mili",
    filePath:
      "https://open.spotify.com/embed/track/6ijdkhXSb5w1evhv63b3Hp?utm_source=generator",
  },
  {
    songName: "rises the moon",
    artist: "Liana Flores",
    filePath:
      "https://open.spotify.com/embed/track/51Grh1RyUDcMBbpuyUIUHI?utm_source=generator",
  },
  {
    songName: "No Wind Resistance!",
    artist: "Kinneret",
    filePath:
      "https://open.spotify.com/embed/track/0EFdjJZzlyl950oBmPnolV?utm_source=generator",
  },
  {
    songName: "Dramamine",
    artist: "Flawed Mangoes",
    filePath:
      "https://open.spotify.com/embed/track/38ZtYOOXJqqNi10BGhtj7k?utm_source=generator",
  },
  {
    songName: "Chamber Of Reflection",
    artist: "Mac DeMarco",
    filePath:
      "https://open.spotify.com/embed/track/7H7NyZ3G075GqPx2evsfeb?utm_source=generator",
  },
  {
    songName: "Notion",
    artist: "The Rare Occasions",
    filePath:
      "https://open.spotify.com/embed/track/0sTlGEld0h8kIPZaKDYUf4?utm_source=generator",
  },
  {
    songName: "world.execute(me);",
    artist: "Mili",
    filePath:
      "https://open.spotify.com/embed/track/2aozlm4HfRx8yRYL7RCoAH?utm_source=generator",
  },
  {
    songName: "505",
    artist: "Arctic Monkey",
    filePath:
      "https://open.spotify.com/embed/track/0BxE4FqsDD1Ot4YuBXwAPp?utm_source=generator&theme=0",
  },
  {
    songName: "I'd rather pretend",
    artist: "Bryant Barnes",
    filePath:
      "https://open.spotify.com/embed/track/4rJHH484bHZDts51o5i2CB?utm_source=generator",
  },
];

const playlists = [
  {
    playlistName: "",
    filePath: "",
  },
  {
    playlistName: "",
    filePath: "",
  },
];

songsDiv = document.querySelector(".songs-layout");
console.log("🚀 ~ songsDiv:", songsDiv);
songs.map((song) => {
  songDiv = document.createElement("iframe");
  songDiv.src = song.filePath;
  songDiv.width = "100%";
  songDiv.height = "352";
  songDiv.frameBorder = "0";
  songDiv.allowFullscreen = "";
  songDiv.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  songDiv.loading = "lazy";
  songDiv.style.display = "inline-block";
  songsDiv.appendChild(songDiv);
});
