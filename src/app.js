/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let particularExcuse = " You will not believe me but... <br> ";

  let who = ["Chuck Norris ", "Dolly Parton ", "Pee Wee Herman ", "Cardi B "];
  let action = ["ate ", "threw away ", "threw up on ", "spilled egg nog "];
  let what = ["my homework ", "my code ", "my assignment ", "my laptop "];
  let when = ["before class!", "during the duck race!", "just now!", "today!"];

  // who
  function whoGenerator() {
    let i = Math.floor(Math.random() * who.length);
    particularExcuse += who[i];
  }

  // action
  function actionGenerator() {
    let i = Math.floor(Math.random() * action.length);
    particularExcuse += action[i];
  }

  // what
  function whatGenerator() {
    let i = Math.floor(Math.random() * what.length);
    particularExcuse += what[i];
  }

  // when
  function whenGenerator() {
    let i = Math.floor(Math.random() * when.length);
    particularExcuse += when[i];
  }

  whoGenerator();
  actionGenerator();
  whatGenerator();
  whenGenerator();

  document.getElementById("excuse").innerHTML = particularExcuse;
};
