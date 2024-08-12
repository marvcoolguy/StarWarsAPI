"use strict"
let name = document.getElementById("name");
let id = document.getElementById("id");
let model = document.getElementById("model");
let manufacturer = document.getElementById("manufacturer");
let cost_in_credits = document.getElementById("cost_in_credits");
let length = document.getElementById("length");
let max_atmosphering_speed = document.getElementById("max_atmosphering_speed");
let passengers = document.getElementById("passengers");
let cargo_capacity = document.getElementById("cargo_capacity");
let button = document.getElementById("btn").addEventListener("click", api);
function api() {
    let num = Math.ceil(Math.random() * 36)
    fetch(`https://swapi.dev/api/starships/${num + 2}`)
      .then(response => response.json())
      .then(data => {
        name.innerHTML =`Name: ${data["name"]}`;
        id.innerHTML = `Id: ${num}`;
        model.innerHTML =`Model: ${data["model"]}`;
        cargo_capacity.innerHTML = `cargo_capacity: ${data["cargo_capacity"]}`
        manufacturer.innerHTML =`manufacturer: ${data["manufacturer"]}`;
        cost_in_credits.innerHTML =`cost_in_credits: ${data["cost_in_credits"]}`;
        length.innerHTML =`Length: ${data["length"]}`;
        max_atmosphering_speed.innerHTML =`Max_atmosphering_speed: ${data["max_atmosphering_speed"]}`;
        passengers.innerHTML =`passengers: ${data["passengers"]}`;
      })
}