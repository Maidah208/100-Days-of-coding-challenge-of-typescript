function make_album(artist: string, title: string, tracks?: number ){
    let music_album: { artist_name: string, album_title: string, tracks?: number } = {
        'artist_name': artist,
        'album_title': title,
    };
    if (tracks !== undefined){
        music_album.tracks = tracks
    }
    return music_album;
}
console.log(make_album('atif','dil',2));
console.log(make_album('Ali','Tum',4));
console.log(make_album('Fazal','Mein'));