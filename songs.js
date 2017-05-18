var songs = [];
var newSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("someone like you");

songs.unshift("sadi ke fall sa");

function display(musicList){
	var outputarea = document.getElementById("song-list");
	
	var newDiv = `<p>${musicList}</p>`
	outputarea.innerHTML+= newDiv;

}

for(var i = 0; i < songs.length; i++){

	var music = songs[i].replace(/[@(!*]/g,"");
	var engsongs = music.replace(/>/g, "-");
	
	display(engsongs);
}

console.log(songs);



