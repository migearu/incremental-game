let thumbnail = document.querySelector('#thumbnail'); // album cover 
let song = document.querySelector('#song'); // audio object
let progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears
var songIndex = 0;
var songs = 
[
    {
        songPath: 'main/assets/music/track1.mp3',
        songThumbnail: 'main/assets/images/track1t.png',
        songBackground: 'main/assets/images/track1.png',
        songArtist: 'N/A',
        songName: 'Track 1'
    }
]; // object storing paths for audio objects

var songPathCarry = 'main/assets/music/track1.mp3';
var songThumbnailCarry = 'main/assets/images/track1t.png';
var songBackgroundCarry = 'main/assets/images/track1.png';
var songArtistCarry = 'N/A';
var songNameCarry = 'Track 1';
var songMaxCarry = "1";
var songValueCarry = "1";
// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
let extPlaying = false;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song')
        pPause.src = "main/assets/icons/pause.png"
        song.play();
        playing = false;
    } else {
        pPause.src = "main/assets/icons/play.png"
        song.pause();
        playing = true;
    }
}
// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});
// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex += 1;
    if (songIndex > songs.length-1) {
        songIndex = 0;
    };
    song.src = songs[songIndex].songPath;
    songThumbnailCarry = songs[songIndex].songThumbnail;
    songBackgroundCarry = songs[songIndex].songBackground;
    songArtistCarry = songs[songIndex].songArtist;
    songNameCarry = songs[songIndex].songName;
    playing = true;
    playPause();
}
// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex -= 1;
    if (songIndex < 0) {
        songIndex = songs.length-1;
    };
    song.src = songs[songIndex].songPath;
    songThumbnailCarry = songs[songIndex].songThumbnail;
    songBackgroundCarry = songs[songIndex].songBackground;
    songArtistCarry = songs[songIndex].songArtist;
    songNameCarry = songs[songIndex].songName;
    playing = true;
    playPause();
}
// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};
// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};
setInterval(function() {
    songMaxCarry = song.duration;
    songValueCarry = song.currentTime;
}, 25);