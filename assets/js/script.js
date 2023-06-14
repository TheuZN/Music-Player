const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

// Dark Mode

let music = document.getElementById("music1");
let indexMusic = -1;
let song = document.querySelector(".progress-player audio");
let musicName = document.querySelector(".details-player h3");
let artistName = document.querySelector(".details-player p");
let imagem = document.querySelector(".img-player img");

function muteSong(){
    if(music.classList.contains("open")){
        music.classList.remove("open");
        document.querySelector('.mute-control').src= "assets/img/ico-6.png";
        music.muted = true;
    }
    else{
        music.classList.add('open');
        document.querySelector('.mute-control').src= "assets/img/ico-7.png";
        music.muted = false;
    }
}

function playPause(){
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
}

// BTN Play Pause and Mute


music.onloadedmetadata = function(){
    let progress = document.getElementById("progress");
    progress.max = music.duration;
    progress.value = music.currentTime;
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

// Music Progress

function changeMusic(index){
    song.setAttribute("src", allAudio[index].src);
    song.addEventListener("loadeddata", () => {
        musicName.textContent = allAudio[index].name;
        artistName.textContent = allAudio[index].artist;
        imagem.src = allAudio[index].img;
        music.play();
    });
}

//Changing Musics and Attributes

function advance(){
    indexMusic++;
    changeMusic(indexMusic);
    music.play();
    music.classList.add('open');
    document.querySelector('.main-control').src= "assets/img/ico-2.png";
}

function Back(){
    indexMusic--;
    changeMusic(indexMusic);
    music.play();
    music.classList.add('open');
    document.querySelector('.main-control').src= "assets/img/ico-2.png";
}

// Advance and Back BTN





