var playBtn = document.getElementById('play')
var pauseBtn = document.getElementById('pause')
var skipBtn = document.getElementById('skip')
var song_playing = document.getElementById('song_playing')
const audio = document.querySelector('audio')
const songs = ["audio/Heavy.mp3", "audio/Half_Pipe.mp3", "audio/Rocker_Chicks.mp3"]

var i = 1;

audio.addEventListener('ended', function(){
	document.querySelector('audio').src = songs[i];
	audio.load();
	console.log(songs[i])
	song_playing.innerHTML = songs[i]
	i++;
	if (i>=songs.length){
		i=0;
	}
});

playBtn.addEventListener('click', function(){
	audio.play();
})

pauseBtn.addEventListener('click', function(){
	audio.pause()
})

skipBtn.addEventListener('click', function(){
	document.querySelector('audio').src = songs[i];
	audio.load();
	console.log(songs[i])
	song_playing.innerHTML = songs[i]
	i++;
	if (i>=songs.length){
		i=0;
	}
});