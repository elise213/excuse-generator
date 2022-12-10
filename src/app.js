"use strict";

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let particularExcuse = " You will not believe me but... <br> ";

  let who = ["Chuck Norris ", "Dolly Parton ", "Pee Wee Herman ", "Cardi-B "];
  let action = ["ate ", "threw away ", "threw up on ", "spilled egg nog on "];
  let what = ["my homework ", "my code ", "my assignment ", "my laptop "];
  let when = [
    "before class!",
    "during the duck race!",
    "just now!",
    "this morning!"
  ];

  function generator(array) {
    let i = Math.floor(Math.random() * array.length);
    particularExcuse += array[i];
  }

  console.log(Math.floor());

  generator(who);
  generator(action);
  generator(what);
  generator(when);

  document.getElementById("excuse").innerHTML = particularExcuse;
  document.getElementById("excuse").style.color = "orange";
};
