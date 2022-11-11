"use strict";
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cards1 = [];
function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function show(arr) {
  alert(arr);
}

function play(arr) {
  show(cards);
  shuffle(cards);
  show(cards);
  while (arr.length > 1) {
    alert("Тяни карту!");
    let pop1 = arr.pop();
    alert(pop1);
    cards1.push(pop1);
    show(cards);
    if (pop1 == "Q") {
      alert("Ты выиграл!");
      break;
    } else {
      alert("Моя очередь!");
      let pop2 = arr.pop();
      alert(pop2);
      cards1.push(pop2);
      show(cards);
      if (pop2 == "Q") {
        alert("Я выиграл!");
        break;
      } else {
        continue;
      }
    }
  }
  alert("Вытянутые карты: " + cards1);
}

play(cards);
