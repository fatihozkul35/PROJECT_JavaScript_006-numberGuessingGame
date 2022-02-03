const button = document.querySelector(".btn");
const buttonTest = document.querySelector(".testButton");
// const hot = document.querySelector(".help");
// const cold = document.querySelector(".help");
// const warm = document.querySelector(".help");
const numIkeep = randomNumber();
// const result = document.querySelector(".help");
let i = 5; // 5 attempts are allowed
let atkafasiIBO = 0;
function randomNumber() {
  return Math.floor(Math.random() * 51);
}
console.log(numIkeep);

button.addEventListener("click", compareFunction);

// buttonTest.addEventListener("click", testFunct);
// function testFunct() {
//   window.location.reload();
// }

function compareFunction() {
  const num = document.querySelector(".form-control").value;
  const result = document.querySelector(".display");
  if (true) {
    if (atkafasiIBO == 1) {
      return;
    } else if (i == 0) {
      return;
    }
    // result.firstElementChild.innerHTML = `Game over...`;
  }
  if (num > numIkeep) {
    i--;
    result.firstElementChild.innerHTML = `reduce your number, you have ${i} left`;
  } else if (num < numIkeep) {
    i--;
    result.firstElementChild.innerHTML = `increase your number, you have ${i} left`;
  } else if (num == numIkeep) {
    i--;
    result.firstElementChild.innerHTML = `congratulations, you got it in ${
      5 - i
    } tries...`;
    result.style.backgroundColor = "green";
    atkafasiIBO = 1;
  }
  if (i == 0) {
    result.firstElementChild.innerHTML = `game over...The number I keep was ${numIkeep}`;
  }
}

// function restartGame() {
//   setTimeout(2000);
//   const gameOver = document.createElement("div");
//   const restartGame = document.createElement("button");
//   document.body.appendChild(gameOver);
// }
