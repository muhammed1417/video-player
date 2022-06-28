'use strict'

let video = document.querySelector('#video')
let playPauseBtn = document.querySelector('#playPause')
let stopBtn = document.querySelector('#Stop')
let muteBtn = document.querySelector('#muteBtn')
let minusBtn = document.querySelector('#minusBtn')
let plusBtn = document.querySelector('#plusBtn')
let progress = document.querySelector('#progress')
let progressBar = document.querySelector('#progress-bar')


const startStopVideo = () => {
    let Videos = playPauseBtn.getAttribute('data-video-state')
    if (Videos === 'pause') {
        video.play()
        playPauseBtn.setAttribute('data-video-state', 'play')
    } else {
        video.pause()
        playPauseBtn.setAttribute('data-video-state', 'pause')
    }
};

playPauseBtn.addEventListener('click', startStopVideo)


video.addEventListener('loadedmetadata', () => {
    progress.setAttribute('max', video.duration);
});
video.addEventListener('timeupdate', () => {
    progress.value = video.currentTime
    progressBar.style.width = Math.floor(video.currentTime / video.duration) * 100  
}) + '%';


progress.addEventListener('click',function (event) {
    
    let pos =
    (event.pageX - 
        (this.offsetLeft +
        this.offsetParent.offsetLeft +
        this.offsetParent.offsetLeft)) /
        this.offsetWidth;
        video.currentTime = pos * video.duration;
});

