let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.ontimeupdate = function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
};
