document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();
});

document.getElementsByClassName("nes-btn is-success").addEventListener("click", displayPlay);
//document.getElementById("nes-btn is-success").addEventListener("click", );
document.getElementsByClassName("nes-btn is-warning").addEventListener("click", displayLeaderboard);
document.getElementsByClassName("nes-btn is-error").addEventListener("click", displaySettings);

function displayPlay() {
  document.getElementsByClassName("nes-btn is-success").innerHTML = Date();}

function displayLeaderboard() {
  document.getElementsByClassName("nes-btn is-warning").innerHTML = Date();}

function displaySettings() {
  document.getElementsByClassName("nes-btn is-error").innerHTML = Date();}