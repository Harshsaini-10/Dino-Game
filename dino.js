score = 0;
cross = true;

// let jmpMusic = new Audio("music/cartoon-jump-6462.mp3");
// let endMusic = new Audio("music/jump-scare-scream-82738.mp3");

function stopMusic() {
  // endMusic.play();
  endMusic.currentTime = 0;
}

document.onkeydown = function (e) {
  // console.log("key code is: ", e.keyCode);
  if (e.keyCode === 82) {
    score = 0;
    updateScore(score);
    gameOver.style.visibility = "hidden";
    obstacle.classList.add("obstacleAni");
  }

  if (e.keyCode === 38) {
    // jmpMusic.play();
    dino = document.querySelector(".dino");
    dino.classList.add("dinoAni");
    setTimeout(() => {
      dino.classList.remove("dinoAni");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox - 112 + "px";
  }
};

let dino = document.querySelector(".dino");

// Jump function (same for desktop + mobile)
function jump() {
 dino = document.querySelector(".dino");
    dino.classList.add("dinoAni");
    setTimeout(() => {
      dino.classList.remove("dinoAni");
    }, 700);
}


// 📱 Mobile: Screen tap se jump
let gameScreen = document.querySelector(".gameContainer");
gameScreen.addEventListener("touchstart", function () {
  jump();
});

gameScreen.addEventListener("click", function () {
  jump();
});





// Restart Functionality

document.getElementById("restartBtn").addEventListener("click", function () {
  score = 0;
  updateScore(score);
  gameOver.style.visibility = "hidden";
  obstacle.classList.add("obstacleAni");
});

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetx = Math.abs(dx - ox);
  offsety = Math.abs(dy - oy);
  if (offsetx < 113 && offsety < 52) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");
    stopMusic();
  } else if (offsetx < 100 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.05;
      obstacle.style.animationDuration = newDur + "s";
    }, 1000);
  }
}, 10);

function updateScore(score) {
  scorecont = document.querySelector("#scorecont");
  scorecont.innerHTML = "your score: " + score;
}

let bgMusic = new Audio("music/music.mp3");
bgMusic.loop = true;

// window.onload = function () {
//   bgMusic.play().catch((error) => {
//     console.log("Autoplay blocked! User interaction needed.", error);
//   });
// };

// function toggleMusic() {
//   if (bgMusic.paused) {
//     bgMusic.play();
//   } else {
//     bgMusic.pause();
//   }
// }
