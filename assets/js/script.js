const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

// Dark Mode

let indexMusic = 0;

let music = document.getElementById("music1");
let progress = document.getElementById("progress");
let song = document.querySelector(".progress-player audio");
let musicName = document.querySelector(".details-player h3");
let artistName = document.querySelector(".details-player p");
let imagem = document.querySelector(".img-player img");

function togglePlayPause() {
    if (music.paused) {
        music.play();
        document.querySelector('.main-control').src = "assets/img/play-pause-o-svgrepo-com.svg";
        setInterval(()=>{
            progress.value = music.currentTime;
        },500);
    }  
    
    else {
        music.pause();
        document.querySelector('.main-control').src = "assets/img/play-button-o-svgrepo-com.svg";
    }
}

document.querySelector(".playPause").addEventListener("click", togglePlayPause);


// BTN Play Pause

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;

    let timerOff = document.querySelector(".off");
    timerOff.textContent = changeMinutes(Math.floor(music.duration));
}

progress.onchange = function(){
    music.play();
    music.classList.add('open');
    document.querySelector('.main-control').src= "assets/img/play-pause-o-svgrepo-com.svg";

    music.currentTime = progress.value;
    progress.max = music.duration;
}

music.ontimeupdate = function() {
    let timerOn = document.querySelector(".on");
    timerOn.textContent = changeMinutes(Math.floor(music.currentTime));
};

// Music Progress

function changeMusic(index){
    song.setAttribute("src", allAudio[index].src);
    song.addEventListener("loadeddata", () => {
        musicName.textContent = allAudio[index].name;
        artistName.textContent = allAudio[index].artist;
        imagem.src = allAudio[index].img;
        music.play();
        document.querySelector('.main-control').src= "assets/img/play-pause-o-svgrepo-com.svg";
    });
}

//Changing Musics and Attributes

document.querySelector(".advance").addEventListener("click", () => {
    indexMusic++;
    if (indexMusic > 8){
        indexMusic = 0;
    }
    changeMusic(indexMusic);

    music.play();
    document.querySelector('.main-control').src= "assets/img/play-pause-o-svgrepo-com.svg";
});

document.querySelector(".back").addEventListener("click", () => {
    indexMusic--;
    if (indexMusic < 0){
        indexMusic = 8;
    }
    changeMusic(indexMusic);
    
    music.play();
    document.querySelector('.main-control').src= "assets/img/play-pause-o-svgrepo-com.svg";
});

// Advance and Back BTN

function changeMinutes(seconds) {
    let setMinutes = Math.floor(seconds / 60);
    let setSeconds = seconds % 60;
    if (setSeconds <10){
        setSeconds = "0" + setSeconds;
    }
    return setMinutes+":"+setSeconds;
}

// Changing the time to minutes