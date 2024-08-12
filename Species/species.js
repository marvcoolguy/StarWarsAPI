"use strict"
let name = document.getElementById("name");
let id = document.getElementById("id");
let classification = document.getElementById("classification");
let designation = document.getElementById("designation");
let hair_colors = document.getElementById("hair_colors");
let eye_colors = document.getElementById("eye_colors");
let average_lifespan = document.getElementById("average_lifespan");
let skin_colors = document.getElementById("skin_colors");
let average_height = document.getElementById("average_height");
let button = document.getElementById("btn").addEventListener("click", api);
function api() {
    let num = Math.ceil(Math.random() * 37)
    fetch(`https://swapi.dev/api/species/${num}`)
      .then(response => response.json())
      .then(data => {
        name.innerHTML =`Name: ${data["name"]}`;
        id.innerHTML = `Id: ${num}`;
        classification.innerHTML =`Classification: ${data["classification"]}`;
        designation.innerHTML =`Designation: ${data["designation"]}`;
        average_height.innerHTML = `Average_height: ${data["average_height"]}`
        hair_colors.innerHTML =`Hair_colors: ${data["hair_colors"]}`;
        eye_colors.innerHTML =`Eye_colors: ${data["eye_colors"]}`;
        skin_colors.innerHTML =`Skin_colors: ${data["skin_colors"]}`;
        average_lifespan.innerHTML =`Average_lifespan: ${data["average_lifespan"]}`;
      })
}