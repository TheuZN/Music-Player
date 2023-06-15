const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

// Dark Mode

let music = document.getElementById("music1");
let indexMusic = 0;

let progress = document.getElementById("progress");
let song = document.querySelector(".progress-player audio");
let musicName = document.querySelector(".details-player h3");
let artistName = document.querySelector(".details-player p");
let imagem = document.querySelector(".img-player img");

document.querySelector(".playPause").addEventListener("click", () => {
    if(music.classList.contains("open")){
        music.classList.remove("open");
        document.querySelector('.main-control').src= "assets/img/ico-1.png";
        music.pause();
    }
    else{
        music.classList.add('open');
        document.querySelector('.main-control').src= "assets/img/ico-2.png";
        music.play();
    }
});

// BTN Play Pause

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;

    let timerOff = document.querySelector(".off");
    timerOff.textContent = changeMinutes(Math.floor(music.duration));
}

if(music.play()){
    setInterval(()=>{
        progress.value = music.currentTime;
    },500);
}

progress.onchange = function(){
    music.play();
    music.classList.add('open');
    document.querySelector('.main-control').src= "assets/img/ico-2.png";

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
        document.querySelector('.main-control').src= "assets/img/ico-2.png";
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
    document.querySelector('.main-control').src= "assets/img/ico-2.png";
});

document.querySelector(".back").addEventListener("click", () => {
    indexMusic--;
    if (indexMusic < 0){
        indexMusic = 8;
    }
    changeMusic(indexMusic);
    
    music.play();
    document.querySelector('.main-control').src= "assets/img/ico-2.png";
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