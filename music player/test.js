const musics = [
  {
    name: "Dishab Parishab",
    cover: "./pictures/music1.jpg",
    audio: new Audio("./musics/music1.mp3"),
  },
  {
    name: "To Mahi",
    cover: "./pictures/music2.jpg",
    audio: new Audio("./musics/music2.mp3"),
  },
  {
    name: "Ki Asheghe",
    cover: "./pictures/music3.jpg",
    audio: new Audio("./musics/music3.mp3"),
  },
];
let musicName = document.querySelector(".musicName");
let musicCover = document.querySelector("img");
let musicRange = document.querySelector(".range");
let playbtn = document.querySelector("#playbtn");
let pervbtn = document.querySelector("#pervbtn");
let nextbtn = document.querySelector("#nextbtn");
let currentItem = 0;
let music = musics[currentItem].audio;

musicName.innerText = musics[currentItem].name;
musicCover.src = musics[currentItem].cover;
music.addEventListener("canplay", () => {
  musicRange.max = music.duration;
});
music.addEventListener("timeupdate", () => {
  musicRange.value = music.currentTime;
});
musicRange.addEventListener("input", () => {
  music.currentTime = musicRange.value;
});
playbtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playbtn.classList.replace("fa-play", "fa-pause");
    musicCover.style.animationPlayState = "running";
  } else {
    music.pause();
    playbtn.classList.replace("fa-pause", "fa-play");
    musicCover.style.animationPlayState = "paused";
  }
});
pervbtn.addEventListener("click", () => {
  changemusic("perv");
});
nextbtn.addEventListener("click", () => {
  changemusic("next");
});
const changemusic = (value) => {
  music.pause();
  musicRange.value = 0;
  music.currentTime = 0;
  if (value == "perv") {
    playbtn.classList.replace("fa-play", "fa-pause");
    musicCover.style.animationPlayState = "running";
    console.log("test1");
    if (currentItem == 0) {
      currentItem = musics.length - 1;
    } else {
      currentItem -= 1;
    }
  }
  if (value == "next") {
    playbtn.classList.replace("fa-play", "fa-pause");
    musicCover.style.animationPlayState = "running";
    if (currentItem == musics.length - 1) {
      currentItem = 0;
      console.log(currentItem);
    } else {
      currentItem += 1;
      console.log(currentItem);
    }
  }
  music = musics[currentItem].audio;
  musicName.innerText = musics[currentItem].name;
  musicCover.src = musics[currentItem].cover;

  music.addEventListener("canplay", () => {
    musicRange.max = music.duration;
  });
  music.addEventListener("timeupdate", () => {
    musicRange.value = music.currentTime;
  });
  musicRange.addEventListener("input", () => {
    music.currentTime = musicRange.value;
  });
  music.play();
  console.log(music.duration)
};
