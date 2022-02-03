let number = Math.floor(Math.random() * 101);
let guessnumber = Math.floor(+prompt("Please enter a number"));
let counter = 5;
let time = 0;
while (true) {
  time += 1;
  if (guessnumber == number) {
    console.log("Congratulations! You are a mindreader");
    console.log(`you guessed right the ${time}. time`);
    break;
  } else {
    counter -= 1;
    if (counter == 0) {
      console.log("You also used your five rights. Our game is over");
      break;
    }
    console.log(
      `You guessed wrong number. ${counter} rights left.  Try agein!`
    );
    guessnumber = Math.floor(+prompt("Please enter a new number"));
  }
}
