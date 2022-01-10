setInterval(function() {
    if (gameData.gameState === "SongMenu") {
        var element = React.createElement("div", null, React.createElement("img", {
                src: songBackgroundCarry,
                id: "background"
            }), React.createElement("div", {
                className: "container"
            }, React.createElement("div", {
                className: "box"
            }), React.createElement("img", {
                src: songThumbnailCarry,
                id: "thumbnail",
                transform: playing ? "[{scale(1.15)}]" : "[{scale(1)}]"
            }), React.createElement("img", {
                src: extPlaying ? "main/assets/icons/pause.png" : "main/assets/icons/play.png",
                onClick: playPause,
                id: "play-pause"
            }), React.createElement("img", {
                src: "main/assets/icons/forward.png",
                onClick: nextSong,
                id: "next-song"
            }), React.createElement("img", {
                src: "main/assets/icons/backward.png",
                onClick: previousSong,
                id: "previous-song"
            }), React.createElement("div", {
                className: "song-artist"
            }, songArtistCarry), React.createElement("div", {
                className: "song-title"
            }, songNameCarry), React.createElement("input", {
                type: "range",
                id: "progress-bar",
                min: "0",
                max: songMaxCarry,
                value: songValueCarry,
                onChange: changeProgressBar
            }), React.createElement("div", {
                className: "currentTime"
            }, formatTime(Math.floor(song.currentTime))),
            React.createElement("div", {
                className: "durationTime"
            }, formatTime(Math.floor(song.duration)))));
        ReactDOM.render(element, document.getElementById('main'));
    }
    thumbnail = document.querySelector('#thumbnail');
    song = document.querySelector('#song');
    progressBar = document.querySelector('#progress-bar');
    pPause = document.querySelector('#play-pause');
}, 25)