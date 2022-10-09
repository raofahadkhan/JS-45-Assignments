function make_album(namee, title, NumOfTracks = 0) {
  const album = {
    artist_name: namee,
    album_title: title,
    // NoOfTracks: NumOfTracks,
  };
  if (NumOfTracks) {
    album["NoOfTracks"] = NumOfTracks;
  }
  return album;
}

let album = make_album("Atif Aslam", "Taj Dar e Haram");
console.log(album);

album = make_album("Justin Bieber", "Justice");
console.log(album);

album = make_album("Rahat Fateh Ali Khan", "Zaroori Tha");
console.log(album);

album = make_album("Justin Bieber", "Under the Mistletoe", 7);
console.log(album);
