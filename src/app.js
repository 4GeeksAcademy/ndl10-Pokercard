/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  const carGenerator = () => {
    const value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const symbol = ["♦", "♥", "♠", "♣"];
    const color = ["black", "red"];
    const getRandom = array => {
      let randomNumber = Math.floor(Math.random() * array.length);
      return randomNumber;
    };
    const randomValue = value[getRandom(value)];
    const randomSymbol = symbol[getRandom(symbol)];

    const valueCard = document.getElementById("valor");
    valueCard.classList.remove("♦", "♥", "♠", "♣");
    valueCard.innerHTML = randomValue;
    valueCard.classList.add(randomSymbol);
    const symbolCard = document.querySelectorAll("#palo");
    symbolCard.forEach(element => {
      element.classList.remove("♦", "♥", "♠", "♣");
    });
    for (let index = 0; index < symbolCard.length; index++) {
      symbolCard[index].classList.add(randomSymbol);
      symbolCard[index].innerHTML = randomSymbol;
    }
  };

  let button = document.getElementById("addCard");
  button.addEventListener("click", carGenerator);
};
// const card = getCard();
//   document.getElementById("valor").innerHTML = randomRedValue();
//   document.getElementById("palo").innerHTML = randomSymbol();
//   document.getElementById("paloinvertido").innerHTML = randomSymbol();
// };
// const randomRedValue = () => {
//   let redValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//   let indexValueRed = Math.floor(Math.random() * redValue.length);
//   return redValue[indexValueRed];
// };
// const randomBlackValue = () => {
//   let blackValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//   let indexValueBlack = Math.floor(Math.random() * blackValue.length);
//   return blackValue[indexValueBlack];
// };
// const randomSymbol = () => {
//   let symbol = ["♦", "♥", "♠", "♣"];
//   let randomSymbol = Math.floor(Math.random() * symbol.length);
//   return symbol[randomSymbol];
