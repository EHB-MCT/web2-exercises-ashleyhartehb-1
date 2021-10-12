'strict mode'

window.onload = () => {

  let submitBtn = document.getElementById("submitBtn");
  let message = document.getElementById("message");

  submitBtn.addEventListener('click', function (event) {
    let numberInput = parseInt(document.getElementById("number").value);
    compareNumber(numberInput)
  });

  //generate number 1-20
  let randomValue = getRandom(20);
  console.log(randomValue);


  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function compareNumber(number) {

    return new Promise(function (resolve, reject) {

        if (number > randomValue) {
          message.innerText = "The mystery number is lower. Guess again!";
        } else
        if (number < randomValue) {
          message.innerText = "The mystery number is higher. Guess again!";
        } else
        if (number == randomValue) {
          message.innerText = "You have guessed the mystery number!"
          resolve("You have guessed the mystery number!");
        } else {
          message.innerText = `That is not a valid number error`
          reject(`That is not a valid number error`);
        }


      });

    }

}
