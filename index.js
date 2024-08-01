"use strict"
let name = document.getElementById("name");
let id = document.getElementById("id");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let hair_color = document.getElementById("hair_color");
let eye_color = document.getElementById("eye_color");
let birth_year = document.getElementById("birth_year");
let skin_color = document.getElementById("skin_color");
let mass = document.getElementById("mass");
let button = document.getElementById("btn").addEventListener("click", api);
function api() {
    let num = Math.ceil(Math.random() * 83)
    fetch(`https://swapi.dev/api/people/${num}`)
      .then(response => response.json())
      .then(data => {
        name.innerHTML =`Name: ${data["name"]}`;
        id.innerHTML = `Id: ${num}`;
        height.innerHTML =`Height: ${data["height"]}`;
        mass.innerHTML = `Mass: ${data["mass"]}`
        gender.innerHTML =`Gender: ${data["gender"]}`;
        hair_color.innerHTML =`Hair_color: ${data["hair_color"]}`;
        eye_color.innerHTML =`Eye_color: ${data["eye_color"]}`;
        birth_year.innerHTML =`Birth_year: ${data["birth_year"]}`;
        skin_color.innerHTML =`Skin_color: ${data["skin_color"]}`;
      })
}